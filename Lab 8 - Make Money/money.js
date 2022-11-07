let form = document.querySelector("#moneyForm")

form.addEventListener("submit", function (event){
    event.preventDefault();
    let data = new FormData(form);

    let numberOfCoins = data.get("count");

    let coinType = data.get("moneyType");

    // console.log(numberOfCoins);
    // console.log(coinType);

    for (let i = 0; i < numberOfCoins; i++) {
        let addCoinImage = document.querySelector("#emptyForCoins"); 
        addCoinImage.innerHTML += `<div class = "${coinType}"></div>`;
    }

// let coinToRemove = document.querySelector("div");

// coinToRemove.addEventListener("click", () =>
//     coin.remove()
// )
   
});

// let coinToRemove = document.querySelector("#emptyForCoins");
// let removeMe = document.querySelector("div");

// coinToRemove.addEventListener("click", () => {
//     removeMe.remove();
// });

document.querySelector("#emptyForCoins").addEventListener('click', function coins(event) {
    console.log(event.target);
  
    event.target.remove();
  });








