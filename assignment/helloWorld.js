console.log("hello")

let x = 7;

let tempRightNow = 80;

tempRightNow = tempRightNow + 1;

console.log("temp before killing Lilith" , tempRightNow);

tempRightNow += 1;

tempRightNow ++;

console.log(tempRightNow);
let tempLater = '<p class="container">chilly</p>'
let game = "diablo"; 
let title = "Diablo 4"
// let year = "2023"
game = game + ' ' + title;
// concatenation above
console.log('game' , game);


let isCloudy = true

let toReplace = document.querySelector('#fun2');

toReplace.innerHTML = tempLater;

if (isCloudy === false) {
    console.log('clear skys');
} else {
    console.log('rainy day');
}