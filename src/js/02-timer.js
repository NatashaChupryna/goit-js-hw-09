import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  day: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', true);
const currentDate = new Date();
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
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr(refs.dateInput, options);
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
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

function setTimerComponents({ days, hours, minutes, seconds }) {
  refs.day.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

const timer = {
  intervalId: null,
  //   isActive: false,
  start() {
    this.intervalId = setInterval(() => {
      //   if (this.isActive) {
      //     return;
      //   }
      //   this.isActive = true;
      const currentDate = new Date();
      let datesDifference = selectedDate - currentDate;
      if (datesDifference <= 0) {
        clearInterval(setTimerId);
      }
      //   const { days, hours, minutes, seconds} = convertMs(datesDifference);
      addLeadingZero(setTimerComponents(convertMs(datesDifference)));
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});
