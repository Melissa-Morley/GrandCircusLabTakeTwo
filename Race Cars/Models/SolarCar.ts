import { IRacer } from "../Interfaces/IRacer";


//implement interfaces and extend (aka inherit from) classes
class SolarCar implements IRacer {
    team: string;
    speed:number;

    constructor(team:string){

        this.team = team;
        this.speed = 0;
    }

    accelerate(): void {
        this.speed += 1;
    }

    isFuelEmpty(): boolean {
        return false;
    }
}