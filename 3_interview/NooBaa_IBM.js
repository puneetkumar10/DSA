/**
 * A real problem we would like to fix in our code - 
 * The following class handles reading a file line by line, 
 * Currently, each line ends with '\n'; we would like to support any possible line terminator. How would you modify the code?
 */


class NewlineReader {
   /**
    * Newline character code
    */
   static NL_CODE = 10;

   /**
    * NewlineReader allows to read a file line by line.
    * @param {nb.NativeFSContext} fs_context
    * @param {string} filepath
    * @param {{
    *  bufsize?: number;
    *  skip_leftover_line?: boolean;
    *  skip_overflow_lines?: boolean;
    *  read_file_offset?: number;
    * }} [cfg]
    */

   constructor(fs_context, filepath, cfg , lineSeparator) {
       this.lineSeparator = lineSeparator;
       this.path = filepath;
       this.skip_leftover_line = Boolean(cfg?.skip_leftover_line);
       this.skip_overflow_lines = Boolean(cfg?.skip_overflow_lines);

       this.fs_context = fs_context;
       this.fh = null;
       this.eof = false;
       this.read_file_offset = cfg?.read_file_offset || 0;

       this.buf = Buffer.alloc(cfg?.bufsize || 64 * 1024);
       this.start = 0;
       this.end = 0;
       this.overflow_state = false;
       this.next_line_file_offset = cfg?.read_file_offset || 0;
   }

   /**
    * nextline returns the next line from the given file
    * @returns {Promise<string | null>}
    */
   async nextline() {
       if (!this.fh) await this.init();
       while (!this.eof) {
           // extract next line if terminated in current buffer
           if (this.start < this.end) {
               const term_idx = this.buf.subarray(this.start, this.end).indexOf(this.lineSeparator);
               // CALCULATE TOTAL CHARACTERS IN line.spearator str.length
               // SKIP THAT MANY PLACES
               // const totalCharSeparator = this.lineSeparator.length;
               if (term_idx >= 0) {
                   if (this.overflow_state) {
                       console.warn('line too long finally terminated:', this.info());
                       this.overflow_state = false;
                       this.start += term_idx + 1;
                       continue;
                   }
                   const line = this.buf.toString('utf8', this.start, this.start + term_idx);
                   this.start += term_idx + totalCharSeparator;
                   this.next_line_file_offset = this.read_file_offset - (this.end - this.start);
                   return line;
               }
           }

           // relocate existing data to offset 0 in buf
           if (this.start > 0) {
               const n = this.buf.copy(this.buf, 0, this.start, this.end);
               this.start = 0;
               this.end = n;
           }

           // check limits
           if (this.buf.length <= this.end) {
               if (!this.skip_overflow_lines) {
                   throw new Error("line too long or non terminated");
               }

               console.warn('line too long or non terminated:', this.info());
               this.end = 0;
               this.start = 0;
               this.overflow_state = true;
           }

           // read from file
           const avail = this.buf.length - this.end;
           const read = await this.fh.read(this.fs_context, this.buf, this.end, avail, this.read_file_offset);
           if (!read) {
               this.eof = true;

               // what to do with the leftover in the buffer on eof
               if (this.end > this.start) {
                   if (this.skip_leftover_line) {
                       console.warn("leftover at eof:", this.info());
                   } else if (this.overflow_state) {
                       console.warn('line too long finally terminated at eof:', this.info());
                   } else {
                       const line = this.buf.toString('utf8', this.start, this.end);
                       this.start = this.end;
                       this.next_line_file_offset = this.read_file_offset;
                       return line;
                   }
               }

               return null;
           }
           this.read_file_offset += read;
           this.end += read;
       }

       return null;
   }

   /**
    * forEach takes a callback function and invokes it
    * with each line as parameter
    *
    * The callback function can return `false` if it wants
    * to stop the iteration.
    * @param {(entry: string) => Promise<boolean>} cb
    * @returns {Promise<[number, boolean]>}
    */
   async forEach(cb) {
       let entry = await this.nextline();
       let count = 0;
       while (entry !== null) {
           count += 1;
           if ((await cb(entry)) === false) return [count, false];

           entry = await this.nextline();
       }

       return [count, true];
   }

   async close() {
       if (this.fh) await this.fh.close(this.fs_context);
   }
}
  