// reuseable function 1 to get element's innertext
function getTextElementValueById(elementId) {
    const TotalElement = document.getElementById(elementId);
    const currentTotalString = TotalElement.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}

// reuseable function 2 to get input's values
function getInputValueById(inputId) {
    const mainField = document.getElementById(inputId);
    const FieldString = mainField.value;
    const inputField = parseInt(FieldString);
    mainField.value = '';
    return inputField;
}

// triangle calculation 
let triangle = ["1. Triangle "];
document.getElementById('triangle-calculate').addEventListener('click', function () {
    const triangleLand = getInputValueById('triangle-land');
    const triangleHeight = getInputValueById('triangle-height');
    const triangleArea = 0.5 * triangleLand * triangleHeight;
    const triangleAreaOutput = document.getElementById('triangle-area');
    
    if (isNaN(triangleArea)) {
        alert('Please fill both inputs with valid numbers')
        return;
    }
    if (triangleArea < 0) {
        alert('Input should be positive number')
        return;
    }
    triangleAreaOutput.innerText = triangle + triangleArea + " " + "㎠";
})

// rectangle calculation
let rectangle = ["2. Rectangle "];
document.getElementById('rectangle-calculate').addEventListener('click', function () {
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');
    const rectangleArea = rectangleWidth * rectangleLength;
    const rectangleAreaOutput = document.getElementById('rectangle-area');
    if (isNaN(rectangleArea)) {
        alert('Please fill both inputs with valid numbers')
        return;
    }
    if (rectangleArea < 0) {
        alert('Input should be positive number')
        return;
    }
    rectangleAreaOutput.innerText = rectangle + rectangleArea + " " + "㎠";
})

// parallelogram calculation
let parallelogram = ["3. Parallelogram "];
document.getElementById('parallelogram-calculate').addEventListener('click', function () {
    const parallelogramLand = getInputValueById('parallelogram-land');
    const parallelogramHeigth = getInputValueById('parallelogram-heigth');
    const parallelogramArea =parallelogramLand * parallelogramHeigth;
    const parallelogramAreaOutput = document.getElementById('parallelogram-area');
    if (isNaN(parallelogramArea)) {
        alert('Please fill both inputs with valid numbers')
        return;
    }
    if (parallelogramArea < 0) {
        alert('Input should be positive number')
        return;
    }
    parallelogramAreaOutput.innerText = parallelogram + parallelogramArea + " " + "㎠" ;
})

// rhombus calculation
let rhombus = ["4. Rhombus "];
document.getElementById('rhombus-calculate').addEventListener('click', function () {
    const rhombusd1 = getInputValueById('rhombus-d1');
    const rhombusd2 = getInputValueById('rhombus-d2');
    const rhombusdArea = 0.5 * rhombusd1 * rhombusd2;
    const rhombusAreaOutput = document.getElementById('rhombus-area');
    if (isNaN(rhombusdArea)) {
        alert('Please fill both inputs with valid numbers')
        return;
    }
    if (rhombusdArea < 0) {
        alert('Input should be positive number')
        return;
    }
    rhombusAreaOutput.innerText = rhombus + rhombusdArea + " " + "㎠" ;
})

// pentagon calculation
let pentagon = ["5. Pentagon "];
document.getElementById('pentagon-calculate').addEventListener('click', function () {
    const pentagonArmNumber = getInputValueById('pentagon-arm-number');
    const pentagonLength = getInputValueById('pentagon-length');
    const pentagonArea = 0.5 * pentagonArmNumber * pentagonLength;
    const pentagonAreaOutput = document.getElementById('pentagon-area');
    if (isNaN(pentagonArea)) {
        alert('Please fill both inputs with valid numbers')
        return;
    }
    if (pentagonArea < 0) {
        alert('Input should be positive number')
        return;
    }
    pentagonAreaOutput.innerText = pentagon + pentagonArea + " " + "㎠" ;
})

// ellipse calculation
let ellipse = ["6. Ellipse "];
document.getElementById('ellipse-calculate').addEventListener('click', function () {
    const ellipseLand = getInputValueById('ellipse-land');
    const ellipseLength = getInputValueById('ellipse-length');
    const ellipseArea = 3.1416 * ellipseLand * ellipseLength;
    const ellipseAreaOutput = document.getElementById('ellipse-area');
    if (isNaN(ellipseArea)) {
        alert('Please fill both inputs with valid numbers')
        return;
    }
    if (ellipseArea < 0) {
        alert('Input should be positive number')
        return;
    }
    ellipseAreaOutput.innerText = ellipse + ellipseArea.toFixed(2) + " " + "㎠" ;
})

// random color functions

const triangleColor = document.getElementById("triangle-random-colors");   
triangleColor.addEventListener('mouseover', function () {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    triangleColor.style.backgroundColor = bgColor;
})


const rectangleColor = document.getElementById("rectangle-random-colors");   
rectangleColor.addEventListener('mouseover', function () {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    rectangleColor.style.backgroundColor = bgColor;
})

const parallelogramColor = document.getElementById("parallelogram-random-colors");   
parallelogramColor.addEventListener('mouseover', function () {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    parallelogramColor.style.backgroundColor = bgColor;
})

const rhombusColor = document.getElementById("rhombus-random-colors");   
rhombusColor.addEventListener('mouseover', function () {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    rhombusColor.style.backgroundColor = bgColor;
})


const pentagonColor = document.getElementById("pentagon-random-colors");   
pentagonColor.addEventListener('mouseover', function () {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    pentagonColor.style.backgroundColor = bgColor;
})


const ellipseColor = document.getElementById("ellipse-random-colors");   
ellipseColor.addEventListener('mouseover', function () {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    ellipseColor.style.backgroundColor = bgColor;
})

