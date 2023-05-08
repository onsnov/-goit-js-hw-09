import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
    inputField : document.querySelector('#datetime-picker'),
    startBtn :document.querySelector('[data-start]'),
    dayEL : document.querySelector('[data-days]'),
    hoursEl : document.querySelector('[data-hours]'),
    minutesEl : document.querySelector('[data-minutes]'),
    secondsEl : document.querySelector('[data-seconds]')
}

// refs.inputField.addEventListener('input', flatpickr)

flatpickr ('refs.inputField', options);    

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  console.log(selectedDates[0]);
  },
};
