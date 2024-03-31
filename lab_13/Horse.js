const Animal = require("./Animal");

class Horse extends Animal{
    static MAX_SPEED = 75;
    constructor() {
        super('HORSE', Horse.MAX_SPEED);
    }

}
module.exports = Horse;