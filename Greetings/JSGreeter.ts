import { Greeter } from "./greeter";
class JavaScriptGreeter extends Greeter {

    constructor(greeting:string){
        super(greeting);
    }

    greet (name:string) :string {
        return "console.log(" + this.greeting + ", " + name + "!)"
    }
}

export {JavaScriptGreeter}