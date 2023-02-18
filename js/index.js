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
    return inputField;
}
let triangle = ["1. Triangle "];
document.getElementById('triangle-calculate').addEventListener('click', function () {
    const triangleLand = getInputValueById('triangle-land');
    const triangleHeight = getInputValueById('triangle-height');
    const triangleArea = 0.5 * triangleLand * triangleHeight;
    const triangleAreaOutput = document.getElementById('triangle-area');
    triangleAreaOutput.innerText = triangle + triangleArea + " " + "㎠" ;
})

let rectangle = ["2. Rectangle "];
document.getElementById('rectangle-calculate').addEventListener('click', function () {
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');
    const rectangleArea = rectangleWidth * rectangleLength;
    const rectangleAreaOutput = document.getElementById('rectangle-area');
    rectangleAreaOutput.innerText = rectangle + rectangleArea + " " + "㎠" ;
})

let parallelogram = ["3. Parallelogram "];
document.getElementById('parallelogram-calculate').addEventListener('click', function () {
    const parallelogramLand = getInputValueById('parallelogram-land');
    const parallelogramHeigth = getInputValueById('parallelogram-heigth');
    const parallelogramArea =parallelogramLand * parallelogramHeigth;
    const parallelogramAreaOutput = document.getElementById('parallelogram-area');
    parallelogramAreaOutput.innerText = parallelogram + parallelogramArea + " " + "㎠" ;
})

let rhombus = ["4. Rhombus "];
document.getElementById('rhombus-calculate').addEventListener('click', function () {
    const rhombusd1 = getInputValueById('rhombus-d1');
    const rhombusd2 = getInputValueById('rhombus-d2');
    const rhombusdArea = 0.5 * rhombusd1 * rhombusd2;
    const rhombusAreaOutput = document.getElementById('rhombus-area');
    rhombusAreaOutput.innerText = rhombus + rhombusdArea + " " + "㎠" ;
})
let pentagon = ["5. Pentagon "];
document.getElementById('pentagon-calculate').addEventListener('click', function () {
    const pentagonArmNumber = getInputValueById('pentagon-arm-number');
    const pentagonLength = getInputValueById('pentagon-length');
    const pentagonArea = 0.5 * pentagonArmNumber * pentagonLength;
    const pentagonAreaOutput = document.getElementById('pentagon-area');
    pentagonAreaOutput.innerText = pentagon + pentagonArea + " " + "㎠" ;
})

let ellipse = ["6. Ellipse "];
document.getElementById('ellipse-calculate').addEventListener('click', function () {
    const ellipseLand = getInputValueById('ellipse-land');
    const ellipseLength = getInputValueById('ellipse-length');
    const ellipseArea = 3.1416 * ellipseLand * ellipseLength;
    const ellipseAreaOutput = document.getElementById('ellipse-area');
    const ellipseArea2deci = ellipseArea.toFixed(2)
    ellipseAreaOutput.innerText = ellipse + ellipseArea2deci + " " + "㎠" ;
})

// var val; $("#update").click(function() { val = $('#counter').val(); val++; $('#counter').prop('value',val ) });