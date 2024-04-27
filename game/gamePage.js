let scoredata = 0;
let time = 60;
let n;
let h = 0;

function bubble() {
  let ball = "";
  for (let i = 1; i < 99; i++) {
    n = Math.floor(Math.random() * 10);
    ball += `<div class="ball"><h2>${n}</h2></div>`;
  }
  document.querySelector(".ball-area").innerHTML = ball;
}

function timer() {
  let timeint = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#time").textContent = time;
    } else {
      clearInterval(timeint);
      document.querySelector(".ball-area").innerHTML = `<div class="over">
            <div class="g-o"><h1>GAME OVER</h1></div>
            <div class="y-c"><h1>YOUR SCORE : ${scoredata}</h1>
            </div>
            </div>
            `;
    }
  }, 1000);
}

function changHit() {
  h = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = h;
}
function increaseScore() {
  scoredata += 10;
  document.querySelector("#scoreid").textContent = scoredata;
}
function decreaseScore() {
  scoredata -= 10;
  document.querySelector("#scoreid").textContent = scoredata;
}

function home() {
  window.location.href = "../index.html";
}

function restart() {
  scoredata = 0;
  time = 60;
  bubble();
  document.querySelector("#scoreid").textContent = scoredata;
  document.querySelector("#time").textContent = time;
}

document.querySelector(".ball-area").addEventListener("click", function (val) {
  let t = Number(val.target.textContent);
  if (t == h) {
    changHit();
    increaseScore();
    bubble();
  } else {
    changHit();
    decreaseScore();
    bubble();
  }
});
bubble();
changHit();
timer();
