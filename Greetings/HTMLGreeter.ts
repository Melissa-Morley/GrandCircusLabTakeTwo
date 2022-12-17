import {Greeter} from "./greeter"
class HtmlGreeter extends Greeter{
    tagName?:string = "h1";

    constructor(greeting:string, tagName?:string){

        super(greeting);

        this.tagName = tagName;
    }

    greet(name: string): string {
        return "<" + this.tagName + ">" + this.greeting + ", " + name + "!</" + this.tagName + ">"
    }
}

export {HtmlGreeter}