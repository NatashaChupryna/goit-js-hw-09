import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const userData = {
    delay: Number(event.currentTarget.delay.value),
    step: Number(event.currentTarget.step.value),
    amount: Number(event.currentTarget.amount.value),
  };
  for (let i = 0; i <= userData.amount; i += 1) {
    userData.delay += userData.step;
    createPromise(i, userData.delay).then(promiseResolve).catch(promiseReject);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        return Promise.resolve(promiseResolve);
      } else {
        // Reject
        return Promise.reject(promiseReject);
      }
    });
  });
}



function promiseResolve() {
  Notiflix.Notify.success(`✅Fulfilled promise in ${delay}ms`);
}

function promiseReject(error) {
  Notiflix.Notify.failure(`❌Rejected promise in ${delay}ms`);
}


