const Animal = require("./Animal");

class Dog extends Animal{
    static MAX_SPEED = 60;
    constructor() {
        super('DOG', Dog.MAX_SPEED);
    }

}
module.exports = Dog;