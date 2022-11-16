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
  for (let i = 0; i < userData.amount; i += 1) {
 createPromise(i, userData.delay);
 userData.delay += userData.step;
  }
}

// function createPromise(position, delay) {
//   return new newPromise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         // Fulfill
//         return  reject({ position, delay });
//       } else {
//         // Reject
//         return reject({ position, delay });
//       }
//     }, delay);
//   });
// }

function createPromise(position, delay) {
  const newPromise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        return resolve({ position, delay });
      } else {
        return reject({ position, delay });
      }
    }, delay);
  });

  newPromise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}