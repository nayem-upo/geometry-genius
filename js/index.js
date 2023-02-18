function getTextElementValueById(elementId) {
    const TotalElement = document.getElementById(elementId);
    const currentTotalString = TotalElement.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}

function getInputValueById(inputId) {
    const mainField = document.getElementById(inputId);
    const FieldString = mainField.value;
    const inputField = parseInt(FieldString);
    mainField.value = '';
    return inputField;
}
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

