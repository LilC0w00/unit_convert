/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const nombreConvert = document.getElementById("nb-convert");
const btnConvert = document.getElementById("convert-btn");
let resultLenght = document.getElementById("result-length");
let resultVolume = document.getElementById("result-volume");
let resultMass = document.getElementById("result-mass");

btnConvert.addEventListener("click", function () {
    const value = Number(nombreConvert.value);

    /* longueur */
    const feet = value * 3.281;
    const meter = value / 3.281;

    /* Volume */
    const gallon = value * 0.264;
    const liter = value / 0.264;

    /* longueur */
    const pound = value * 2.204;
    const kilo = value / 2.204

    resultLenght.innerHTML = `${value} meters = ${Number(feet).toFixed(3)} feet | ${value} feet = ${Number(meter).toFixed(3)} meters`;
    resultVolume.innerHTML = `${value} liters = ${Number(gallon).toFixed(3)} gallons | ${value} gallons = ${Number(liter).toFixed(3)} liters`;
    resultMass.innerHTML = `${value} kilos = ${Number(pound).toFixed(3)} pounds | ${value} pounds = ${Number(kilo).toFixed(3)} kilos`;
})