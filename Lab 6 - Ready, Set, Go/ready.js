function main (){
    ///////////////////Question 1//////////
    let growMe = document.querySelector("#grow-me");

    growMe.classList.add("big");

    ///////////Question 2///////////////

    let shrinkMe = document.querySelector("#shrink-me");

    shrinkMe.classList.remove("big");

    /////////////Question 3/////////////////

    let liTag = document.querySelectorAll("li");

    for (let tag of liTag){
        console.log(tag);
    }

    /////////////Question 4///////////////

    let linkSwitch = document.querySelector(".link");

    linkSwitch.setAttribute("href", "https://www.example.com");
    linkSwitch.textContent = "somewhere";

    ///////////Question 5////////////

    let hideMe = document.querySelector("#hide-me");

    hideMe.style.display = "none";

    //////////Question 6//////////////
    let showMe = document.querySelector("#show-me");

    showMe.style.display = "block";

    /////////Question 7///////////

    let inputedName = document.querySelector("#name").value;

    console.log(inputedName);

    let header = document.querySelector("h1");

    header.innerHTML = "Welcome " + inputedName;



}

