const Animal = require("./Animal");

class Tiger extends Animal{
    static MAX_SPEED = 100;
    constructor() {
        super('TIGER', Tiger.MAX_SPEED);
    }


}
module.exports = Tiger;