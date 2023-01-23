import { IRacer } from "../Interfaces/IRacer";

class GasCar implements IRacer {
    team:string;
    speed:number;
    fuel:number = 10;

    constructor(team:string, fuel?:number){
        this.team = team;
        this.speed = 0;

        if(fuel !== undefined){
            this.fuel = fuel;
        }
    }

    accelerate(): void {
        this.speed += 2;
        this.fuel -= 1;
    }

    isFuelEmpty(): boolean {
        if(this.fuel <= 0){
            return true;
        }
        else{return false};
    }
}

export {GasCar};