var unused = require('./module_1');
var dollarAmount = require('./module_2');

var usdAmount = function() {
    return dollarAmount();
}

var balance = function(){
    return "Account balance: \n"
}

exports.usdAmount = usdAmount;
exports.balance = balance;