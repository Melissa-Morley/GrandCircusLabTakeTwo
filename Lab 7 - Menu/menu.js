// let textSection = document.querySelector(".text-section");

    // textSection.addEventListener("click", () => {
    //     event.preventDefault();
    //     textSection.style.display = "none";
    //     alert ("hello");
        
    // });

let lettersText = document.querySelector("#lettersRow");
console.log(lettersText);

let numbersText = document.querySelector("#numbersRow");
//  console.log(numbersText)


let clickNumbers = document.querySelector("#dropdown-item-2");
console.log(clickNumbers);

clickNumbers.addEventListener("click", event => {
    lettersText.style.display = "none";
    numbersText.style.display = "block";
    event.preventDefault();
});
    


let clickLetters = document.querySelector("#dropdown-item-1");

clickLetters.addEventListener("click", event => {
    lettersText.style.display = "block";
    numbersText.style.display = "none";
    event.preventDefault();
});







    

    
    
    

   

   

// let dropdownLinks = document.querySelector(".dropdown-item");

// dropdownLinks.addEventListener("click", buttonClicked);

// let lettersText = document.querySelector("#letters");

// function hideStuff (id){
//     document.querySelector(id).style.display = "none";
// }