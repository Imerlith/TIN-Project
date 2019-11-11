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
        createDisplayedErrors(messages)
    }
})

function addErrorMessageToField(message, fieldId) {
    let boldText = document.createElement('b')
    boldText.appendChild(document.createTextNode(message))
    document.getElementById(fieldId).appendChild(boldText)
}

function checkForNullOrEmpty() {
    if (login.value === '' || login.value == null) {
        let message = "Login can't be empty"
        addErrorMessageToField(message,'login-error')
        messages.push(message)
        login.style.border = "solid 1px red"
    }
    if (password.value === '' || password.value == null) {
        let message = "Please provide password"
        addErrorMessageToField(message,'password-error')
        messages.push(message)
        password.style.border = "solid 1px red"
    }
    if (repassword.value === '' || repassword.value == null) {
        let message = "Please repeat password"
        addErrorMessageToField(message,'repassword-error')
        messages.push(message)
        repassword.style.border = "solid 1px red"
    }
    if (email.value === '' || email.value == null) {
        let message = "Email can't be empty"
        addErrorMessageToField(message, 'email-error')
        messages.push(message)
        email.style.border = "solid 1px red"
    }
    if (fname.value === '' || fname.value == null) {
        let message = "First name can't be empty"
        addErrorMessageToField(message, 'fname-error')
        messages.push(message)
        fname.style.border = "solid 1px red"
    }
    if (lname.value === '' || lname.value == null) {
        let message = "Last name can't be empty"
        addErrorMessageToField(message, 'lname-error')
        messages.push(message)
        lname.style.border = "solid 1px red"
    }
}

function checkForNotEqualPasswords() {
    if (password.value != repassword.value ) {
        let message = 'Passwords missmatch'
        addErrorMessageToField(message, 'password-error')
        addErrorMessageToField(message, 'repassword-error')
        messages.push(message)
        password.style.border = "solid 1px red"
        repassword.style.border = "solid 1px red"
    }
}

function checkForWeakPassword() {
    if (password.value.length <= 6 && password.value != '') {
        let message = 'Please provide a stronger password'
        addErrorMessageToField(message, 'password-error')
        addErrorMessageToField(message, 'repassword-error')
        messages.push(message)
        password.style.border = "solid 1px red"
        repassword.style.border = "solid 1px red"
    }
}

function checkIfLoginIsReserved() {
    let loginsMockup = ['login1', 'login2']
    if (loginsMockup.includes(login.value)) {
        messages.push('Login already in use. Please choose different a login')
        login.style.border = "solid 1px red"
    }
}

function resetStylesForRegister() {
    error.innerText = ""
    resetErrorLabels()
    messages = []
    login.style.border = "1px solid "
    password.style.border = "1px solid black"
    repassword.style.border = "1px solid black"
    email.style.border = "1px solid black"
    fname.style.border = "1px solid black"
    lname.style.border = "1px solid black"
}

function resetErrorLabels() {
    document.getElementById('login-error').innerHTML = ''
    document.getElementById('password-error').innerHTML = ''
    document.getElementById('repassword-error').innerHTML = ''
    document.getElementById('email-error').innerHTML = ''
    document.getElementById('fname-error').innerHTML = ''
    document.getElementById('lname-error').innerHTML = ''
}

function createDisplayedErrors(errors) {
    let header = document.createElement('p');
    header.appendChild(document.createTextNode('Please resolve following errors: '))
    error.appendChild(header)
    error.appendChild(createListOfErrors(errors))
}

function createListOfErrors(errors) {
    let list = document.createElement('ul')
    for (let i=0; i<messages.length; i++) {
        let item = document.createElement('li')
        item.appendChild(document.createTextNode(errors[i]))
        list.appendChild(item)
    }

    return list
}