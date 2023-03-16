import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input[type="email"]'),
  textarea: document.querySelector('.feedback-form textarea'),
};
populateInput();
refs.form.addEventListener('click', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.email.value === '' || refs.textarea.value === '') {
    alert('Please fill in all the fields!');
    return;
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function populateInput() {
  try {
    const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parseData) {
      refs.email.value = parseData.email;
      refs.textarea.value = parseData.message;
    }
  } catch (error) {
    console.error(error);
  }
}
