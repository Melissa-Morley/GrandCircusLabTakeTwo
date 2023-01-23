import { RawCompilerOptions } from "ts-jest";
import { IRacer } from "../Interfaces/IRacer";

function findRacersWithEmptyFuel (racers:IRacer[]) :IRacer[] {
    let resultsArray: IRacer[] = [];

    // for(let i = 0; i <= racers.length; i++){
    //     if(racers[i].isFuelEmpty()){
    //         resultsArray.push(racers[i]);
    //     }
    // }

    for(let car of racers){
        if(car.isFuelEmpty()){
            resultsArray.push(car);
        }
    }
    return resultsArray;
}



function findAverageSpeed(racers:IRacer[]) :number {
    let totalSpeed = 0;

    if(racers.length === 0){
        return 0;
    }

    for(let racer of racers){
        totalSpeed += racer.speed;
    }

    return totalSpeed / racers.length;
}

function getFasterRacer(racerA:IRacer, racerB:IRacer) :null | IRacer {
if(racerA.speed > racerB.speed){
    return racerA;
}
else if (racerB.speed > racerA.speed){
    return racerB;
}
else{return null}
}

export {findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer}