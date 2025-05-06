const form = document.getElementById('form-js');
const success = document.getElementById('success-js');
const successTmpl = document.getElementById('success-template');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    // Get the form data
    const data = {
        'first-name': form.elements['first-name'].value,
        'last-name': form.elements['last-name'].value,
        email: form.elements['email'].value,
        query: form.elements['query'].value,
        message: form.elements['message'].value,
        consent: form.elements.consent.checked
    }
    const elementArr = Object.entries(data);

    // Check if the form is valid
    // If the form is valid, render the success message
    if (validateForm(elementArr)) {
        renderSuccess();
    }
}

function validateForm(elementArr) {
    let isValid = false;
    const keyArr = [];
    

    elementArr.forEach((element) => {
        const [key, value] = element;
        const error = document.getElementById(`${key}-error`);

        switch (key) {
            case 'first-name':
                // If the key is first name, check if the value is empty
                value === '' ? renderError(error) : keyArr.push(key) && clearError(error);
                break;
            case 'last-name':
                // If the key is last name, check if the value is empty
                value === '' ? renderError(error) : keyArr.push(key) && clearError(error);
                break;
            case 'email':
                // If the key is email, check if the value is a valid email
                value === '' ? renderError(error) : checkEmail(value) && keyArr.push(key) && clearError(error);
                break;
            case 'query':
                // If the key is query, check if the value is empty
                value === '' ? renderError(error) : keyArr.push(key) && clearError(error);
                break;
            case 'message':
                // If the key is message, check if the value is empty
                value === '' ? renderError(error) : keyArr.push(key) && clearError(error) ;
                break;
            case 'consent':
                // If the key is consent, check if the checkbox is checked
                !value ? renderError(error) : keyArr.push(key) && clearError(error);
                break;
            default:
                renderError(error)
                break;
        }
        
    })
    
    keyArr.length === 6 ? isValid = true : isValid = false;

    return isValid;
}

function checkEmail(value) {
    const regexError = document.getElementById('regex-error');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if the email is valid
    if (!emailRegex.test(value)) {
        renderError(regexError);
        return false;
    } else {
        clearError(regexError);
        return true;
    }
}

function renderError(element) {
    element.classList.remove('is-hidden');
}

function clearError(element) {
    element.classList.add('is-hidden');
}

function renderSuccess() {
    const clone = successTmpl.content.cloneNode(true);
    clone.querySelector('.success_title').textContent = 'Message Sent!';
    clone.querySelector('.success_text').textContent = "Thanks for completing the form. We'll be in touch soon!";
    success.appendChild(clone);

    form.reset();

    setTimeout(() => {
        success.classList.add('is-hidden');
    }, 5000);
}