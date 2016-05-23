var accounts = [];

// Account Object
// balance
// username



// createAccount(account)
// push onto accounts array
// return account

// getAccount(username)
// find matching account using forEach


function deposit(account, amount) {
    account.balance += amount;
}

function withdraw(account, amount) {
    account.balance -= amount;
}

function getBalance(account) {
    return account.balance;
}
