const h1 = document.createElement('h1');
h1.textContent = 'Countdown to Christmas!!!';
document.body.appendChild(h1);

const container = document.createElement('div');
container.style.textAlign = 'center';
document.body.appendChild(container);

const counter = document.createElement('h1');
container.appendChild(counter);

let targetDate = new Date(new Date().getFullYear(), 11, 25);

let selectedDate = new Date();

function calculateRemainingTime(selectedDate) {
  const now = selectedDate;
  const difference = targetDate.getTime() - now.getTime();

  if (difference < 0) {
    counter.textContent = 'Merry Christmas!';
    counter.style.color = 'green';
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const remainingMonths = Math.floor(totalDays / 30);
  const remainingDays = totalDays % 30;

  const remainingHours = totalHours % 24;
  const remainingMinutes = totalMinutes % 60;
  const remainingSeconds = totalSeconds % 60;

  counter.textContent = `${remainingMonths} months, ${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`;

  if (remainingMonths >= 1) {
    counter.style.color = 'green';
  } else if (remainingDays < 7) {
    counter.style.color = 'red';
  } else if (remainingDays < 14) {
    counter.style.color = 'orange';
  } else {
    counter.style.color = 'black';
  }
}

const dateInput = document.createElement('input');
dateInput.type = 'date';
dateInput.value = '2024-12-25';
container.appendChild(dateInput);

dateInput.addEventListener('change', () => {
  const date = new Date(dateInput.value);
  selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
  calculateRemainingTime(selectedDate);
});

setInterval(() => {
  selectedDate.setSeconds(selectedDate.getSeconds() + 1);
  calculateRemainingTime(selectedDate);
}, 1000);

calculateRemainingTime(selectedDate);
