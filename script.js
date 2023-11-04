const tiles = document.querySelectorAll(".tile");// array of tiles 
const scoreElement = document.querySelector("#score");
let timeleftElement = document.querySelector("#time-left");
let hitid = 0;

let timeLeft = 60;

let result = 0;

function randomTile() {
  //cleaning the tiles
  for (let i = 0; i < 9; i += 1) {
    let tileContainer = tiles[i];
    tileContainer.classList.remove("mole");
  }
  let randomNumber = Math.floor(Math.random() * 9);
  let selectedTile = tiles[randomNumber];
  hitid = randomNumber;
  selectedTile.classList.add("mole");
}

tiles.forEach(
  tile => {
    tile.addEventListener('mousedown', () => {
      console.log(result);
      if (tile.id == hitid){
        result++;
        scoreElement.textContent = result;
        hitid = null;
      }
    })

  }
)



let counter = 0;

function number() {
  counter = counter + 1;
  console.log(counter);
}

let randomIntervalId = setInterval(randomTile, 1000);
// setInterval(number, 1000)

function timer () {
  timeLeft = timeLeft - 1;
  timeleftElement.textContent = timeLeft;
  if (timeLeft == 0) {
    clearInterval(randomIntervalId);
    clearInterval(timeLeftID);
    alert("Game Over \n Your final score is "+ result);
  }
}

let timeLeftID = setInterval(timer, 1000);

randomTile();

      // 0   1 2  3
// let f = [20,34,45,13]// length = 4
// print even numbers lesss than 2000
// for(let i=1;i<2000;i+=2){
//   console.log(i);

//   // console.log(f[i]);
// }