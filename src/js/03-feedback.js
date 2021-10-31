import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInputTextarea, 1000));
refs.textarea.addEventListener('input', throttle(onInputTextarea, 1000));

const STORAGE_INPUTS_KEY = 'feedback-form-state';
const formData = { message: '', email: '' };

populateTextarea();

function onInputTextarea(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_INPUTS_KEY, JSON.stringify(formData));
  console.log(formData);
}

function populateTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_INPUTS_KEY));
  if (saveMessage) {
    // console.log(saveMessage);

    refs.input.value = saveMessage.email;
    refs.textarea.value = saveMessage.message;
  }
}
function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_INPUTS_KEY);
}

//  =========== Option 2 ============
//  переделала с помощью forEach, чтобы не появлялся undefined при перезагрузке с пустым инпутом

// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   input: document.querySelector('.feedback-form input'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', throttle(onInputTextarea, 1000));
// refs.textarea.addEventListener('input', throttle(onInputTextarea, 1000));

// const STORAGE_INPUTS_KEY = 'feedback-form-state';
// const formData = {};

// populateTextarea();

// function onInputTextarea(event) {
//   formData[event.target.name] = event.target.value;

//   localStorage.setItem(STORAGE_INPUTS_KEY, JSON.stringify(formData));
//   console.log(formData);
// }

// function populateTextarea() {
//   const saveMessage = JSON.parse(localStorage.getItem(STORAGE_INPUTS_KEY));
//   if (saveMessage) {
//     Object.entries(saveMessage).forEach(([name, value]) => {
//       formData[name] = value;
//       refs.form.elements[name].value = value;
//     });
//   }
// }
// function onFormSubmit(event) {
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_INPUTS_KEY);
// }
