const form = document.getElementById('form-js');
const success = document.getElementById('success-js');
const error = document.querySelectorAll('#error-js');

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

    if (!firstName || !lastName || !email || !query || !message || !consent) {  
        renderError();
        return;
    }

    renderSuccess();
}

function renderError() {
    error.forEach((el) => {
        el.classList.remove('is-hidden');
    });
}

function renderSuccess () {
    success.classList.remove('is-hidden');
}