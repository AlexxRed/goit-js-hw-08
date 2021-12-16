var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'), 
    message: document.querySelector('textarea'), 
};

// ================== check after reload  ==================

renewFormInputs()

// ================== add listeners ==================

refs.form.addEventListener('input', throttle(onFormInputs, 500));
refs.form.addEventListener('submit', onSubmit);


// ================== data storage ==================

// const savedData = {
//     // email: "",
//     // message: "",
//     };

// ==================  save input ==================
function onFormInputs(e) {
    let savedData = localStorage.getItem("feedback-form-state")
    savedData = savedData ? JSON.parse(savedData) : {};

    savedData[e.target.name] = e.target.value;
    
    console.log(savedData);
    localStorage.setItem("feedback-form-state", JSON.stringify(savedData))
    
};

// ==================  submit actions ==================
function onSubmit(e) {
    e.preventDefault();
    
    const formEmail = e.target.elements.email.value;
    const formTextarea = e.target.elements.message.value;

    if (formEmail && formTextarea) {
        console.log(`email: ${formEmail}`);
        console.log(`message: ${formTextarea}`);

        localStorage.removeItem("feedback-form-state")
        refs.form.reset()
    } else {
        alert("Заполните все поля");
    };

    
    
};

// ================== take data after reload ==================
function renewFormInputs() {
    let savedData = localStorage.getItem("feedback-form-state")
    
    if (savedData) {
        savedData = JSON.parse(savedData);
        Object.entries(savedData).forEach(([name, value]) => {
            refs.form.elements[name].value = value;
        })
    }
    
};


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
