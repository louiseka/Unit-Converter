//Get element by ID for 6 length, volume, mass
const metreEl = document.getElementById("metre-el")
const feetEl = document.getElementById("feet-el")
const litresEl = document.getElementById("litres-el")
const gallonsEl = document.getElementById("gallons-el")
const kilogramsEl = document.getElementById("kilograms-el")
const poundsEl = document.getElementById("pounds-el")

//Get element by ID for button
const convertBtn = document.getElementById("convert-btn")

//Push the value from the input field into functions?

//Round the numbers down to three decimal places. Use toFixed method. 
// Create 6 functions for length, volume, and mass
//Pass through inputEl in the parameters
//Use template strings

function metreConversion(inputNumber) {
    const result = inputNumber * 3.281
    metreEl.innerText = `${inputNumber} metres = ${result.toFixed(3)} feet`
}

function feetConversion(inputNumber) {
    const result = inputNumber * 0.3048
    feetEl.innerText = `${inputNumber} feet = ${result.toFixed(3)} metres`
}

function litreConversion(inputNumber) {
    const result = inputNumber * 0.219
    litresEl.innerText = `${inputNumber} litres = ${result.toFixed(3)} gallons`
}

function gallonsConversion(inputNumber) {
    const result = inputNumber * 4.546
    gallonsEl.innerText = `${inputNumber} gallons = ${result.toFixed(3)} litres`
}

function kilogramsConversion(inputNumber) {
    const result = inputNumber * 2.205
    kilogramsEl.innerText = `${inputNumber} kilograms = ${result.toFixed(3)} pounds`
}

function poundsConversion(inputNumber) {
    const result = inputNumber * 0.454
    poundsEl.innerText = `${inputNumber} pounds = ${result.toFixed(3)} kilograms`
}

function convertValue() {
    const inputEl = document.getElementById("input-el")
    console.log(inputEl.value)
    metreConversion(inputEl.value)
    feetConversion(inputEl.value)
    litreConversion(inputEl.value)
    gallonsConversion(inputEl.value)
    kilogramsConversion(inputEl.value)
    poundsConversion(inputEl.value)
}

//Get element by ID for input field
//Event listener for button click
convertBtn.addEventListener("click", convertValue)

convertValue()

