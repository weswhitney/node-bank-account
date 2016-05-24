var accounts = [];

var account = {
    balance: 100,
    username: 'weswhitney'
};

function createAccount(account) {
    accounts.push(account);
    return account;
}

function getAccount(username) {
    accounts.forEach(function() {
        if (username === account.username) {
            return username;
        }
    });
}

function deposit(account, amount) {
    account.balance += amount;
}

function withdraw(account, amount) {
    account.balance -= amount;
}

function getBalance(account) {
    return account.balance;
}
