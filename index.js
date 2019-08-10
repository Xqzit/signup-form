const inputs = document.querySelectorAll('input');
const email = document.querySelector('input#email');
const button = document.querySelector('.form-btn-2');
const re = /^[a-zA-Z0-9_.\-+%]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

button.addEventListener('click', (e) => {
    // loop through each element and checking if it is empty or not
    inputs.forEach(el => {
        // if empty we add the styles else we remove it once there some content in the inputs
        if (el.value === '' || el.value === null) {
            el.classList.add('error');
            if (el.id == 'email') {
                el.placeholder = 'email@example.com';
                el.classList.add('error');
            } else {
                el.placeholder = '';
            }
            el.nextElementSibling.style.display = 'block';
        } else {
            el.classList.remove('error');
            el.style.background = 'none';
            el.nextElementSibling.style.display = 'none';
        }
    });
    // if email is not empty then run the regex test
    if (email !== '' || email !== null) {
        if (!re.test(email.value)) {
            email.placeholder = 'email@example.com';
            email.classList.add('error');
            email.style.color = 'hsl(0, 100%, 74%)';
            email.nextElementSibling.style.display = 'block';
        } else {
            email.classList.remove('error');
            email.style.color = 'black';
        }
    }
    e.preventDefault();
});