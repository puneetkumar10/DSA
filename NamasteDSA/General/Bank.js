/** LEETCODE 2043
 * @param {number[]} balance
 */
var Bank = function (balance) {
    this.balance = balance;
};

Bank.prototype.isValidAccount = function (account) {
    return account >= 1 && account <= this.balance.length
}

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
    if (!this.isValidAccount(account1) || !this.isValidAccount(account2)) return false
    account1--;
    account2--;

    if (money > this.balance[account1]) return false

    this.balance[account1] -= money;
    this.balance[account2] += money;
    return true
};


/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
    if (!this.isValidAccount(account)) return false
    account--;
    this.balance[account] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
    if (!this.isValidAccount(account)) return false
    account--

    if (money > this.balance[account]) return false

    this.balance[account] -= money;
    return true
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */