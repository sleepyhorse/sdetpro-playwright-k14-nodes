class Animal {
    constructor (name, speed){
        this.name = name;
        this.speed = this.speed(speed)
        console.log(`${this.name} with speed ${this.speed} km/h`);
    }

    speed(maxRange){
        return Math.floor(Math.random() * maxRange + 1)
    }
    getInfo() {
        return `Animal name: ${this.name}`;
    }

    getSpeed() {
        return this.speed;
    }

}
module.exports = Animal;
