var accounts = [];

function createAccount(account) {
    accounts.push(account);
    return account;
}

function getAccount(username) {
    var matchedAccount;
    //for loop or while loop
    accounts.forEach(function(account) {
        if (username === account.username) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}

function deposit(account, amount) {
    // amount only accepts number, use typeof
    account.balance += amount;
}

function withdraw(account, amount) {
    // amount only accepts number
    account.balance -= amount;
}

function getBalance(account) {
    return account.balance;
}

// createBalanceGetter(account)
//  return function ()
//      account.balance (return it)
