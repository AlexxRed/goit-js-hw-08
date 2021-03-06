// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

// // ================== take refs  ==================
// const refs = {
//     form: document.querySelector('.feedback-form'),
//     email: document.querySelector('input'), 
//     message: document.querySelector('textarea'), 
// };

// // ================== make storage key  ==================

// const STORAGE_KEY = "feedback-form-state"

// // ================== check after reload  ==================

// renewFormInputs()

// // ================== add listeners ==================

// refs.form.addEventListener('input', throttle(onFormInputs, 500));
// refs.form.addEventListener('submit', onSubmit);


// // ================== data storage ==================
// // const savedData = {
// //     // email: "",
// //     // message: "",
// //     };

// // ==================  save input ==================

// function onFormInputs(e) {
//     let savedData = localStorage.getItem(STORAGE_KEY)
//     savedData = savedData ? JSON.parse(savedData) : {};

//     savedData[e.target.name] = e.target.value;
    
//     console.log(savedData);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData))
// };

// // ==================  submit actions ==================
// function onSubmit(e) {
//     e.preventDefault();
    
//     const formEmail = e.target.elements.email.value;
//     const formTextarea = e.target.elements.message.value;

//     if (formEmail && formTextarea) {
//         console.log(`email: ${formEmail}`);
//         console.log(`message: ${formTextarea}`);

//         localStorage.removeItem(STORAGE_KEY)
//         refs.form.reset()
//     } else {
//         alert("Заполните все поля");
//     };
// };

// // ================== take data after reload ==================
// function renewFormInputs() {
//     let savedData = localStorage.getItem(STORAGE_KEY)
    
//     if (savedData) {
//         savedData = JSON.parse(savedData);

//         //make it with object metod
//         Object.entries(savedData).forEach(([name, value]) => {
//             refs.form.elements[name].value = value;
//         })

//         // why my logic not work???
//          // refs.email.value = savedData.email;
//         // refs.message.value = savedData.message
//     };
    
// };

// if (formDataCome.email) {
        //     refs.email.value = formDataCome.email
        // } else {
        //     refs.email.value = ''
        // };
        // if (formDataCome.message) {
        //     refs.message.value = formDataCome.message
        // } else {
        //     refs.message.value = ''
        // }
        // console.log(formDataCome);
        // refs.email.value = formData.email
        // refs.message.value = formData.message


    const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'), 
    message: document.querySelector('textarea'), 
    };


    
    const STORAGE_KEY = "feedback-form-state"
    
    initForm()

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const userData = {};
    const formData = new FormData(refs.form);
    const formElements = e.currentTarget.elements;
    const formEmail = formElements.email.value;
    const formMessage = formElements.message.value;
    if (!formEmail || !formMessage) {
        return alert('введите не достающие данные')
    }
    formData.forEach((value, name) => userData[name] = value);
    
    console.log(userData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    let savedData = localStorage.getItem(STORAGE_KEY);

    
    savedData = savedData ? JSON.parse(savedData) : {};
    savedData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
};

function initForm() {
    let savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        savedData = JSON.parse(savedData);
        Object.entries(savedData).forEach(([name, value]) => {
            refs.form.elements[name].value = value;
        })
        // console.log(Object.entries(savedData));
    }
};

