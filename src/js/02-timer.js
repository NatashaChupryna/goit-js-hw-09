import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  day: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const currentDate = new Date();
// console.log(currentDate)
let selectedDate = '';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      selectedDate = selectedDates[0]; 
      if (selectedDates[0] < currentDate) {
          window.alert('Please choose a date in the future');
          refs.startBtn.setAttribute('disabled', true);
        } else {
      refs.startBtn.removeAttribute('disabled');
      }
  },
};



let datesDifference = selectedDate - currentDate ;
console.log(datesDifference)

flatpickr(refs.dateInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
    
    refs.day.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
}

console.log(convertMs(datesDifference)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
 
const timer = {
    start() {
        const currentDate = new Date();

        setInterval(() => {
            
        },)
    }
};
