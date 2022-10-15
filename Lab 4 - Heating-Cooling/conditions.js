let actualTemp = 90;

let desiredTemp = 90;

if(actualTemp > desiredTemp) {
    console.log("Run A/C");
}
else if(actualTemp < desiredTemp) {
    console.log("Run Heat");
}
else{
    console.log("Standby")
}

//Start with two variables: tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or “K”). 
//Write a switch statement that checks the targetUnit and logs the temperature converted to that unit. 
//Notes: K stands for Kelvin. C requires no conversion, print out the original temp.



let tempCelsius = 50
let targetUnit = "F"

switch (targetUnit) {
    
    case "F":
        console.log("The temperature is " + (tempCelsius * 9/5 + 32))
        break;

    case "K":
        console.log("The temperature is " + (tempCelsius + 273.15))
        break;
    default:
        console.log("The temperature is " + tempCelsius);
}

