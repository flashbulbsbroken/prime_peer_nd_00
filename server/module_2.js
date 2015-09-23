var firstMod = require('./module_1');

var dollarNum = function() {
    var num = firstMod();
    //ISO 4217 does not specify order, however per the European Union's Publication Office, in English, USD should proceed the number.
    var returnVal = 'USD ' + num.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    return returnVal
}

module.exports = dollarNum;