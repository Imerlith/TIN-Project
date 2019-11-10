const login = document.getElementById('login-in')
const password = document.getElementById('password-in')
const repassword = document.getElementById('password-re')
const email = document.getElementById('email-in')
const fname = document.getElementById('fname-in')
const lname = document.getElementById('lname-in')
const form  = document.getElementById('register-form')
const error = document.getElementById('error')

let messages = []


form.addEventListener('submit', (e)=> {
    resetStylesForRegister()
    checkForNullOrEmpty()
    checkForNotEqualPasswords()
    checkForWeakPassword()
    checkIfLoginIsReserved()

    if(messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(', ')
    }
})



function checkForNullOrEmpty() {
    if (login.value === '' || login.value == null) {
        messages.push("login can't be empty")
        login.style.border = "solid 1px red"
    }
    if (password.value === '' || password.value == null) {
        messages.push("Please provide password")
        password.style.border = "solid 1px red"
    }
    if (repassword.value === '' || repassword.value == null) {
        messages.push("Please repeat password")
        repassword.style.border = "solid 1px red"
    }
    if (email.value === '' || email.value == null) {
        messages.push("Email can't be empty")
        email.style.border = "solid 1px red"
    }
    if (fname.value === '' || fname.value == null) {
        messages.push("First name can't be empty")
        fname.style.border = "solid 1px red"
    }
    if (lname.value === '' || lname.value == null) {
        messages.push("Last name can't be empty")
        lname.style.border = "solid 1px red"
    }
}

function checkForNotEqualPasswords() {
    if (password.value != repassword.value) {
        messages.push('Passwords missmatch. Please make sure you type same password')
    }
}

function checkForWeakPassword() {
    if (password.value.length <= 6) {
        messages.push('Please provide a stronger password')
    }
}

function checkIfLoginIsReserved() {
    let loginsMockup = ['login1', 'login2']
    if (loginsMockup.includes(login.value)) {
        messages.push('Login already in use. Please choose different login')
    }
}

function resetStylesForRegister() {
    error.innerText = ""
    messages = []
    login.style.border = "1px solid "
    password.style.border = "1px solid black"
    repassword.style.border = "1px solid black"
    email.style.border = "1px solid black"
    fname.style.border = "1px solid black"
    lname.style.border = "1px solid black"
}