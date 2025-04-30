const form = document.getElementById('form-js');
const success = document.getElementById('success-js');
const firstNameError = document.getElementById('first-name-error-js');
const lastNameError = document.getElementById('last-name-error-js');
const emailError = document.getElementById('email-error-js');
const queryError = document.getElementById('query-error-js');
const messageError = document.getElementById('message-error-js');
const consentError = document.getElementById('consent-error-js');

form.addEventListener('submit', handleSubmit);

function handleSubmit (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log(data);

    validate(data);
}

function validate (data) {
    const { "first-name": firstName, "last-name": lastName, email, query, message, consent } = data;

    if (!firstName) {  
        renderError(firstNameError);
        return;
    }

    if (!lastName) {  
        renderError(lastNameError);
        return;
    }

    if (!email) {  
        renderError(emailError);
        return;
    }

    if (!query) {  
        renderError(queryError);
        return;
    }

    if (!message) {  
        renderError(messageError);
        return;
    }

    if (!consent) {  
        renderError(consentError);
        return;
    }

    renderSuccess();
}

function renderError(element) {
    element.classList.remove('is-hidden');
}

function renderSuccess () {
    success.classList.remove('is-hidden');
}