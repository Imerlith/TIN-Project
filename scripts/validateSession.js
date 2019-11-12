const form  = document.getElementById('session-form')
const customer = document.getElementById('cus-lookup')
const employee = document.getElementById('emp-lookup')
const startHour = document.getElementById('start-hour')
const endHour = document.getElementById('end-hour')
const station = document.getElementById('station-combo')
const date = document.getElementById('date-picker')
let messages = []

form.addEventListener('submit', (e)=> {
    resetStyles()
    e.preventDefault()
    checkForNullOrEmptyFields()
    checkForWrongTime()
    checkForWrongDate()

    // if (messages.length > 0) {
    //     e.preventDefault()
    // }
})

function checkForNullOrEmptyFields() {
    if (customer.value === '' || customer.value == null) {
       addMessageAndDisplayError("Customer can't be empty",'cus-error')
       customer.style.border = "solid 1px red"
    }
    if (employee.value === '' || employee.value == null) {
        addMessageAndDisplayError("Employee can't be empty",'emp-error')
        employee.style.border = "solid 1px red"
    }
    if (startHour.value === '' || startHour.value == null) {
        addMessageAndDisplayError("Start hour can't be empty",'start-hour-error')
        startHour.style.border = "solid 1px red"
    }
    if (endHour.value === '' || endHour.value == null) {
        addMessageAndDisplayError("End hour can't be empty",'end-hour-error')
        endHour.style.border = "solid 1px red"
    }
    if (station.value === '' || station.value == null) {
        addMessageAndDisplayError("Station can't be empty",'station-error')
        station.style.border = "solid 1px red"
    }
    if (date.value === '' || date.value == null) {
        addMessageAndDisplayError("Date can't be empty",'date-error')
        date.style.border = "solid 1px red"

    }
}

function addMessageAndDisplayError(message, fieldId) {
    document.getElementById(fieldId).innerHTML = '<b>' + message +'</b>'
    messages.push(message)
}

function checkForWrongTime() {
    if (startHour === '' || startHour == null || endHour === '' || endHour == null) {
        return
    }
    if (startHour.value > endHour.value ) {
        startHour.style.border = "solid 1px red"
        endHour.style.border = "solid 1px red"
        addMessageAndDisplayError("Start hour must be before end hour",'start-hour-error')
        addMessageAndDisplayError("End hour must be after start hour",'end-hour-error')
    }
}

function checkForWrongDate() {
    if(date.value === '' || date.value == null) {
        return
    }
    let today = new Date()
    let enteredDate = new Date(date.value)
    if (today > enteredDate) {
        addMessageAndDisplayError("Can't select date earlier than today",'date-error')
        date.style.border = "solid 1px red"
    }
}

function resetStyles() {
    customer.style.border = "solid 1px black"
    employee.style.border = "solid 1px black"
    startHour.style.border = "solid 1px black"
    endHour.style.border = "solid 1px black"
    station.style.border = "solid 1px black"
    date.style.border = "solid 1px black"
    document.getElementById('cus-error').innerHTML = ''
    document.getElementById('emp-error').innerHTML = ''
    document.getElementById('start-hour-error').innerHTML = ''
    document.getElementById('end-hour-error').innerHTML = ''
    document.getElementById('station-error').innerHTML = ''
    document.getElementById('date-error').innerHTML = ''
}