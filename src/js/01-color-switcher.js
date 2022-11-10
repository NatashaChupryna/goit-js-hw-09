function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startButton.addEventListener('click', onStartClick);
function onStartClick(event) {
  startChangeBodyColor = setInterval(
    () => (body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  startButton.setAttribute('disabled', true);
};

stopButton.addEventListener('click', onStopClick);
function onStopClick() {
  clearInterval(startChangeBodyColor);
  startButton.removeAttribute('disabled');
  body.style.backgroundColor = '#fafafa';
};
