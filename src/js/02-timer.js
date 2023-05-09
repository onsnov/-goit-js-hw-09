import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let inputDate = null;
let intervalId = null;

const refs = {
    inputField : document.querySelector('#datetime-picker'),
    startBtn : document.querySelector('[data-start]'),
    dayEL : document.querySelector('[data-days]'),
    hoursEl : document.querySelector('[data-hours]'),
    minutesEl : document.querySelector('[data-minutes]'),
    secondsEl : document.querySelector('[data-seconds]')
}

 refs.startBtn.disabled = true;   
 refs.startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
  intervalId = setInterval(startTimer, 1000);
  refs.startBtn.disabled = true;

};
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onSelectValidDate(selectedDates[0]);
    console.log(selectedDates[0]);
  },
};

flatpickr(refs.inputField, options);

function onSelectValidDate(selectedDates) {
  inputDate = selectedDates.getTime();
  if (inputDate < Date.now()) {
    refs.startBtn.disabled = true;
    window.alert('Please choose a date in the future');
    return;
  }
  refs.startBtn.disabled = false;
}


 function updateClockface({ days, hours, minutes, seconds }) {
   refs.secondsEl.textContent = addLeadingZero(seconds);
   refs.minutesEl.textContent = addLeadingZero(minutes);
   refs.hoursEl.textContent = addLeadingZero(hours);
  
   if (days > 99) {refs.dayEL.textContent = days;
   }
    refs.dayEL.textContent = addLeadingZero(days);
   
 }

function startTimer() {
    const deltaTime = inputDate - Date.now();
    const timeComponents = convertMs(deltaTime);
    updateClockface(timeComponents);
  if (refs.secondsEl.textContent === '00' && refs.minutesEl.textContent === '00' && refs.hoursEl.textContent === '00' && refs.dayEL.textContent === '00')
  {
      window.alert('Time is over!');
      clearInterval(intervalId);
      refs.startBtn.disabled = false;
    }
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };

  
}

   
  


