const login = document.getElementById('login-in')
const password = document.getElementById('password-in')
const repassword = document.getElementById('password-re')
const email = document.getElementById('email-in')
const fname = document.getElementById('fname-in')
const lname = document.getElementById('lname-in')
const form  = document.getElementById('register-form')
const error = document.getElementById('error')

form.addEventListener('submit', (e)=> {
    let messages = []
    messages = checkForNullOrEmpty(messages)
    messages = checkForNotEqualPasswords(messages)

    if(messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(', ')
    }
})



function checkForNullOrEmpty(messages) {
    if (login.value === '' || login.value == null) {
        messages.push("login can't be empty")
    }
    if (password.value === '' || password.value == null) {
        messages.push("Please provide password")
    }
    if (repassword.value === '' || repassword.value == null) {
        messages.push("Please repeat password")
    }
    if (email.value === '' || email.value == null) {
        messages.push("Email can't be empty")
    }
    if (fname.value === '' || fname.value == null) {
        messages.push("First name can't be empty")
    }
    if (lname.value === '' || lname.value == null) {
        messages.push("Last name can't be empty")
    }

    return messages
}

function checkForNotEqualPasswords(messages) {
    if (password.value != repassword.value) {
        messages.push('Passwords missmatch. Please make sure you type same password')
    }

    return messages;
}