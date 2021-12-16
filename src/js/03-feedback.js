var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'), 
    message: document.querySelector('textarea'), 
};


renewFormInputs()

refs.form.addEventListener('input', throttle(onFormInputs, 1000));
refs.form.addEventListener('submit', onSubmit);


// ================== data storage ==================

const formData = {
    // email: "",
    // message: "",
    };

// ==================  save input ==================
function onFormInputs(e) {
    
    console.log(e);
    // formData[e.target.name] = '';
    
    formData[e.target.name] = e.target.value;
    
    console.log(formData);
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    
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

// ================== take data after reloud ==================
function renewFormInputs() {
    const savedData = localStorage.getItem("feedback-form-state")

    if (savedData) {
        const formDataCome = JSON.parse(savedData)

        if (formDataCome.email) {
            refs.email.value = formDataCome.email
        } else {
            refs.email.value = ''
        };

        if (formDataCome.message) {
            refs.message.value = formDataCome.message
        } else {
            refs.message.value = ''
        }

        console.log(formDataCome);
        // refs.email.value = formData.email
        // refs.message.value = formData.message
    }
};

