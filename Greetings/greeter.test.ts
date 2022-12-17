import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./JSGreeter";
import { LoudGreeter } from "./LoudGreeter";
import { HtmlGreeter } from "./HTMLGreeter";

describe("Greeter tests", () => {
    test("entering hello and Melissa should return hello, Melissa!", () => {
        let testGreeter = new Greeter("hello");


        expect(testGreeter.greet("Melissa")).toBe("hello, Melissa!");
    });

    test("entering hi and Sophie should return hi, Sophie!", () => {
        let testGreeter = new Greeter("hi");

        expect(testGreeter.greet("Sophie")).toBe("hi, Sophie!");
    })
});

describe("JavaScriptGreeter tests", () => {
test("entering hello and Melissa should return console.log(hello, Melissa!)", () => {
    let testJSGreeter = new JavaScriptGreeter("hello");

    expect(testJSGreeter.greet("Melissa")).toBe("console.log(hello, Melissa!)");
});

test("entering hi and Sophie should return console.log(hi, Sophie!)", () => {
    let testJSGreeter = new JavaScriptGreeter("hi");

    expect(testJSGreeter.greet("Sophie")).toBe("console.log(hi, Sophie!)");
})
});

describe("LoudGreeter tests", () => {
test("entering hello and Melissa should return hello, Melissa!!", () => {
    let testLoudGreeter = new LoudGreeter("hello", "!");

    expect(testLoudGreeter.greet("Melissa")).toBe("hello, Melissa!!");
});

test("entering hello and Melissa with addVolume should return hello, Melissa!!!", () => {
    let testLoudGreeter = new LoudGreeter("hello", "!");

    testLoudGreeter.addVolume()

    expect(testLoudGreeter.greet("Melissa")).toBe("hello, Melissa!!!");
})
});

describe("HtmlGreeter tests", () => {
test("entering hello, Melissa, and h3 should return <h3>hello, Melissa</h3>", () => {
    let testHtmlGreeter = new HtmlGreeter("hello", "h3");

    expect(testHtmlGreeter.greet("Melissa")).toBe("<h3>hello, Melissa!</h3>");
});

test("entering hello and Melissa should return <h1>hello, Melissa!</h1>", () => {
    let testHtmlGreeter = new HtmlGreeter("hello");

    expect(testHtmlGreeter.greet("Melissa")).toBe("<h1>hello, Melissa!</h1>");
})
});