class RacingController {
    static findMaxSpeed(animalList){
        let maxVal = 0;
        animalList.forEach(animal => {
            if(animal.getSpeed() > maxVal ){

                maxVal = animal.getSpeed();
            }
        });
        animalList.forEach(animal => {
            if(animal.speed == maxVal ){
                console.log('the fastest runner is: '+  animal.getInfo() + ` with speed ${maxVal} km/h`);
               
            }
        });
    }
}
module.exports = RacingController;