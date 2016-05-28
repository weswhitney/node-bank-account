var accounts = [];

function createAccount(account) {
    accounts.push(account);
    return account;
}

function getAccount(username) {
    var matchedAccount;
    var i;
    for (i = 0;i < accounts.length;i++) {
        if (username === accounts[i].username) {
            matchedAccount = accounts[i];
        }
    }
    return matchedAccount;
}

function deposit(account, amount) {
    // amount only accepts number, use typeof
    if (typeof amount !== 'number') {
        return console.log("amount must be a number");
    }
    account.balance += amount;
}

function withdraw(account, amount) {
    // amount only accepts number
    if (typeof amount !== 'number') {
        return console.log("amount must be a number");
    }
    account.balance -= amount;
}

function getBalance(account) {
    return account.balance;
}

function createBalanceGetter(account) {
   return  function() {
        return account.balance;
   };
}

var wesAccount = createAccount({
    balance: 400,
    username: 'weswhitney'
});

var guysAccount = createAccount({
    balance: 1200000,
    username: 'guyrichy'
});

deposit(wesAccount, 230);

withdraw(wesAccount, 100);

var existingAccount = getAccount('weswhitney');

var balanceGetter = createBalanceGetter(wesAccount);
var guysBalanceGetter = createBalanceGetter(guysAccount);

console.log(balanceGetter());
console.log(guysBalanceGetter(guysAccount));

