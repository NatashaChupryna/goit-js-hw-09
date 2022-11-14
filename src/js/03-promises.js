import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const button = document.querySelector('button');
console.dir(form.elements[0]);

button.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          // Fulfill
          return Notiflix.Notify.success(`✅Fulfilled promise in ${delay}ms`);
        } else {
          // Reject
          return Notiflix.Notify.failure(`❌Rejected promise in ${delay}ms`);
        }
      });
    });
  
}

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount } } = event.currentTarget;
  const userData = {
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  };
  for (let i = 0; i < form.elements[3].value; i += 1) {
    delay += step
    createPromise(1, delay).then(resolve).catch(reject);
  }
};

