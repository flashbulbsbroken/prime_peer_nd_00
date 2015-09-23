var randomNumber = function(){
    return randomFunction(1000000,100);
};

var randomFunction = function (max,min) {
    return (Math.floor(Math.random() * (1 + max - min) + min));

};

module.exports = randomNumber;