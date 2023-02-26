const timerElement = document.getElementById("time");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");

let timeLeft = 25 * 60; // 25 minutes in seconds
let timerId = null;

function updateTime() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  timerElement.textContent = timeString;
}

function startTimer() {
  startButton.disabled = true;
  resetButton.disabled = false;
  timerId = setInterval(() => {
    timeLeft -= 1;
    updateTime();
    if (timeLeft === 0) {
      clearInterval(timerId);
      timerId = null;
      alert("Time's up!");
    }
  }, 1000);
}

function resetTimer() {
  startButton.disabled = false;
  resetButton.disabled = true;
  clearInterval(timerId);
  timerId = null;
  timeLeft = 25 * 60;
  updateTime();
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
