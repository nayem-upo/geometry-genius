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

document.getElementById('triangle-calculate').addEventListener('click', function () {
    const triangleLand = getInputValueById('triangle-land');
    const triangleHeight = getInputValueById('triangle-height');
    const triangleArea = 0.5 * triangleLand * triangleHeight;
    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = triangleArea ;
})

document.getElementById('rectangle-calculate').addEventListener('click', function () {
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');
    const rectangleArea = rectangleWidth * rectangleLength;
    
})


document.getElementById('parallelogram-calculate').addEventListener('click', function () {
    const parallelogramLand = getInputValueById('parallelogram-land');
    const parallelogramHeigth = getInputValueById('parallelogram-heigth');
    const parallelogramArea =parallelogramLand * parallelogramHeigth;
    
})

document.getElementById('rhombus-calculate').addEventListener('click', function () {
    const rhombusd1 = getInputValueById('rhombus-d1');
    const rhombusd2 = getInputValueById('rhombus-d2');
    const rhombusdArea = 0.5 * rhombusd1 * rhombusd2;
    
})

document.getElementById('pentagon-calculate').addEventListener('click', function () {
    const pentagonArmNumber = getInputValueById('pentagon-arm-number');
    const pentagonLength = getInputValueById('pentagon-length');
    const pentagonArea = 0.5 * pentagonArmNumber * pentagonLength;
    
})


document.getElementById('ellipse-calculate').addEventListener('click', function () {
    const ellipseLand = getInputValueById('ellipse-land');
    const ellipseLength = getInputValueById('ellipse-length');
    const ellipseArea = 3.1416 * ellipseLand * ellipseLength;
    
})

// var val; $("#update").click(function() { val = $('#counter').val(); val++; $('#counter').prop('value',val ) });