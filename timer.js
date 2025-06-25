let timerInterval;
function startTimer(duration) {
  let timer = duration;
  const display = document.getElementById("timer");
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    display.textContent = `⏱️ Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    if (--timer < 0) {
      clearInterval(timerInterval);
      display.textContent = "⏳ Time's up!";
    }
  }, 1000);
}