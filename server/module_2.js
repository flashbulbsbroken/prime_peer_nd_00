var firstMod = require('./module_1');

var dollarNum = function() {
    //ISO 4217 does not specify order, however per the European Union's Publication Office, in English, USD should preceed the number.
    var returnVal = "USD " + firstMod().toString() + ".00";
    return returnVal
}

module.exports = dollarNum;