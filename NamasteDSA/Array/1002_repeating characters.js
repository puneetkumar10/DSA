/**
 * @param {string[]} words
 * @return {string[]}
 */
// What im thinking is to select first word and then go through one character by one and do .includes for all other words if we dont find then we break , if we iterate till end for that char means that char is present in all words .. How about this appraoch ??

// Problem ->  Your idea is close, but .includes() alone won’t handle duplicates correctly.
// Example: for "bella" and "label", the letter l appears twice overall but .includes('l') only tells you it exists—not how many times it can be “used” across words.

function commonChars(words) {
  const A = 'a'.charCodeAt(0);

  // freqMin will track the running min counts across words
  let freqMin = new Array(26).fill(Infinity);

  for (const w of words) {
    const freq = new Array(26).fill(0);
    for (const ch of w) freq[ch.charCodeAt(0) - A]++;
    for (let i = 0; i < 26; i++) freqMin[i] = Math.min(freqMin[i], freq[i]);
  }

  const ans = [];
  for (let i = 0; i < 26; i++) {
    for (let c = 0; c < freqMin[i]; c++) ans.push(String.fromCharCode(A + i));
  }
  return ans;
}

/*
Step 1: init
	•	freqMin = [∞, ∞, ∞, ..., ∞] (26 slots for a..z)

⸻

Step 2: process each word

Word 1: "bella"

Build freq for "bella":
	•	b:1, e:1, l:2, a:1 (others 0)

Update freqMin[i] = min(∞, freq[i]) → freqMin becomes:
	•	a:1, b:1, e:1, l:2, and 0 for all other letters (since min(∞,0)=0)
So effectively:
	•	a:1, b:1, e:1, l:2, others:0

Word 2: "label"

Build freq for "label":
	•	l:2 (positions 0 and 4), a:1, b:1, e:1 (same multiset as “bella”)

Update freqMin = min(previous, current) per letter:
	•	a: min(1,1)=1
	•	b: min(1,1)=1
	•	e: min(1,1)=1
	•	l: min(2,2)=2
	•	others stay 0
freqMin unchanged: a:1, b:1, e:1, l:2, others:0

Word 3: "roller"

Build freq for "roller":
	•	r:2, o:1, l:2, e:1

Update freqMin with mins:
	•	a: min(1,0)=0   (no ‘a’ in “roller” → drops to 0)
	•	b: min(1,0)=0   (no ‘b’)
	•	e: min(1,1)=1   (keeps 1)
	•	l: min(2,2)=2   (keeps 2)
	•	r, o: min(0,2)=0 / min(0,1)=0 (they were 0 from earlier words)
Final freqMin:
	•	e:1, l:2, everything else:0

⸻

Step 3: build the answer

Loop i = 0..25 and push each letter freqMin[i] times:
	•	For ‘e’ → push once: ["e"]
	•	For ‘l’ → push twice: ["e","l","l"]
	•	Others have 0 → push nothing

Return: ["e","l","l"]

*/