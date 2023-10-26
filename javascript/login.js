const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Sample validation: You can replace this with your own logic
    if (username === '' || username.length < 4) {
        usernameError.textContent = 'Username must be at least 4 characters';
    }

    if (password === '' || password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
    }

    // You can add further validation or submit the form to a server here
});

function clearErrors() {
    usernameError.textContent = '';
    passwordError.textContent = '';
}
