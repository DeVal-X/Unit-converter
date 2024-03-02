let numberInput = document.getElementById("number-input")
let baseNumber = document.querySelector(".conversion-target")
baseNumber.innerText = 20

let lengthMeterConversion= document.getElementById("length-meter-conversion")
let lengthMeterResult= document.getElementById("length-meter-result")
let lengthFeetConversion= document.getElementById("length-feet-conversion")
let lengtFeetResult= document.getElementById("length-feet-result")

let volumeLitersConversion= document.getElementById("volume-liters-conversion")
let volumeLitersResult= document.getElementById("volume-liters-result")
let volumeGallonsConversion= document.getElementById("volume-gallons-conversion")
let volumeGallonsResult= document.getElementById("volume-gallons-result")

let massKiloConversion= document.getElementById("mass-kilo-conversion")
let massKiloResult= document.getElementById("mass-kilo-result")
let massPoundsConversion= document.getElementById("mass-pounds-conversion")
let massPoundsResult= document.getElementById("mass-pounds-result")

let temperatureCelsiusConversion= document.getElementById("temperature-celsius-conversion")
let temperatureCelsiusResult= document.getElementById("temperature-celsius-result")
let temperatureFahrenheitConversion= document.getElementById("temperature-fahrenheit-conversion")
let temperatureFahrenheitResult= document.getElementById("temperature-fahrenheit-result")

//conversion
function inputConversion() {
    numberInput = document.getElementById("number-input").value
    baseNumber.innerText = numberInput
    meterFeetConversion()
    feetMeterConversion()
    litersGallonsConversion()
    gallonsLitersConversion()
    kiloPoundsConversion()
    poundsKiloConversion()
    celsiusFahrenheitConversion()
    fahrenheitCelsiusConversion()
}


//lenght
function meterFeetConversion() {
    //1 metre = 3,2809 feet
    let meterUnit = numberInput
    lengthMeterConversion.innerText = meterUnit
    let feetResult =  meterUnit * 3.2809
    feetResult = feetResult.toFixed(3)
    lengthMeterResult.innerText = feetResult

}
function feetMeterConversion() {
    //1 foot = 0,3048 metre
    let feetUnit = numberInput
    lengthFeetConversion.innerText = feetUnit
    let meterResult = feetUnit * 0.3048
    meterResult = meterResult.toFixed(3)
    lengtFeetResult.innerText = meterResult
}

//Volume
function litersGallonsConversion() {
    // 1 litre = 0,264 gallon
    let literUnit = numberInput
    volumeLitersConversion.innerText = literUnit
    let gallonsResult = literUnit * 0.264
    gallonsResult = gallonsResult.toFixed(3)
    volumeLitersResult.innerText = gallonsResult


}
function gallonsLitersConversion() {
    // 1 gallon = 3,788 litre
    let gallonsUnit = numberInput
    volumeGallonsConversion.innerText = gallonsUnit
    let literResult = gallonsUnit * 3.788
    literResult = literResult.toFixed(3)
    volumeGallonsResult.innerText = literResult
}

//Mass
function kiloPoundsConversion() {
    // 1 kilo = 2,2046 pounds
    let kiloUnit = numberInput
    massKiloConversion.innerText = kiloUnit
    let poundsResult = kiloUnit * 2.2046
    poundsResult = poundsResult.toFixed(3)
    massKiloResult.innerText = poundsResult
}
function poundsKiloConversion() {
    // 1 pounds = 0,4536 kilo
    let poundsUnit = numberInput
    massPoundsConversion.innerText = poundsUnit
    let kiloResult = poundsUnit * 0.4536
    kiloResult = kiloResult.toFixed(3)
    massPoundsResult.innerText = kiloResult
}

//temperature
function celsiusFahrenheitConversion() {
    let celsiusUnit = numberInput
    temperatureCelsiusConversion.innerText = celsiusUnit
    let celsiusResult = (celsiusUnit * 9/5) + 32
    celsiusResult = celsiusResult.toFixed(3)
    temperatureCelsiusResult.innerText = celsiusResult
}

function fahrenheitCelsiusConversion() {
    let fahrenheitUnit = numberInput
    temperatureFahrenheitConversion.innerText = fahrenheitUnit
    let fahrenheitResult = (fahrenheitUnit - 32) * 5/9
    fahrenheitResult = fahrenheitResult.toFixed(3)
    temperatureFahrenheitResult.innerText = fahrenheitResult
}
