const form = document.getElementById('form-js');
const success = document.getElementById('success-js');

form.addEventListener('submit', handleSubmit);

function handleSubmit (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const elementArr = Object.keys(data);

    elementArr.forEach((element) => {
        const elementValue = data[element];
        const elementError = document.getElementById(`${element}-error-js`);

        console.log(elementValue);
        console.log(elementError);
        console.log(elementError.classList.contains('is-hidden'));

       validate(elementValue)
            ? renderSuccess()
            : renderError(elementError);
    }
    );
}

function validate(element) {
    element = element.trim();

    if (element === '') {
        return false;
    }

    return true;
}

function renderError(element) {
    element.classList.remove('is-hidden');
}

function clearError (element) {
    element.classList.add('is-hidden');
}

function renderSuccess () {
    success.classList.remove('is-hidden');

    form.reset();

    setTimeout(() => {
        success.classList.add('is-hidden');
    }, 5000);
}