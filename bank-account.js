var account = {
    balance: 0
};

var deposit = function(account, amount) {
    account.balance = account.balance + amount;
    console.log(account.balance);
    return account.balance;
};

var withdraw = function(account, amount) {
    account.balance = account.balance - amount;
    console.log(account.balance);
    return account.balance;
};

var getBalance = function(account) {
    console.log(account.balance);
    return account.balance;
};
