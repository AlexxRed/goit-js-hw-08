var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'), 
    message: document.querySelector('textarea'), 
};


refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onFormInputs, 1000));
// refs.email.addEventListener('input', onEmailInput);
// refs.message.addEventListener('input', onMessageInput);

renewFormInputs()

const formData = {};
// localStorage.setItem("feedback-form-state", JSON.stringify(formData))


function onFormInputs(e) {
    
    formData[e.target.name] = e.target.value
    
    console.log(formData);
    const dataFormJSON = JSON.stringify(formData)
    console.log(dataFormJSON);
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
};


function onSubmit(e) {
    e.preventDefault();
    
    const formEmail = e.target.elements.email.value;
    const formTextarea = e.target.elements.message.value

    console.log(`email: ${formEmail}`);
    console.log(`message: ${formTextarea}`);
    
    refs.form.reset()
    localStorage.removeItem("feedback-form-state")
};

function renewFormInputs() {
    const savedData = localStorage.getItem("feedback-form-state")
    if (savedData) {
        const formData = JSON.parse(savedData)
        console.log(formData);


        refs.email.value = formData.email
        refs.message.value = formData.message
    }
};

