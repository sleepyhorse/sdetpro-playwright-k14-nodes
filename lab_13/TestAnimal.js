
const Dog = require("./Dog");
const Horse = require("./Horse");
const RacingController = require("./RacingController");
const Tiger = require("./Tiger");


const dog = new Dog();
const horse = new Horse();
const tiger = new Tiger();

RacingController.findMaxSpeed([dog,horse,tiger]);