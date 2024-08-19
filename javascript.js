const progressBarFill = document.querySelector('.progress-bar-fill');
let progress = 0;

function updateProgressBar() {
  progress += 5;
  progressBarFill.style.width = progress + '%';
  if (progress >= 100) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(updateProgressBar, 1000);