const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');


btnStart.addEventListener('click', startChangeBgc);
btnStop.addEventListener('click', stopChangeBgc);


let intervalId = null;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startChangeBgc()
{ 
  intervalId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
};

function stopChangeBgc() { 
  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}