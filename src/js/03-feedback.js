import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const parseData = localStorage.getItem(STORAGE_KEY, JSON.parse(formData));

const refs = {
form: document.querySelector('.feedback-form'),
email: document.querySelector('.feedback-form input[type="email"]'),
textarea: document.querySelector('.feedback-form textarea'),
};
populateTextarea();
refs.form.addEventListener("click", onFormSubmit);
refs.email.addEventListener("input", throttle(onInput, 500));
refs.textarea.addEventListener("input", throttle(onInput, 500));
function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
};
function populateTextarea() {
    if (parseData) {
        const formKeys = Object.keys(parseData);
            formKeys.map(element => {
                document.querySelector(`[name='${element}']`).value = parseData[element];
            })
    }
}