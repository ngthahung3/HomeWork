function Addition(){
    let number1 = document.forms["calculator"]['number1'].value;
    let number2 = document.forms["calculator"]['number2'].value;

    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    let kq = num1 + num2;
    
    document.getElementById('result').innerHTML = 'Result: ' + kq;
}
function Subtraction(){
    let number1 = document.forms['calculator']['number1'].value;
    let number2 = document.forms['calculator']['number2'].value;

    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    let kq = num1 - num2;
    
    document.getElementById('result').innerHTML = 'result' + kq;
}
function Multiplication(){
    let number1 = document.forms['calculator']['number1'].value;
    let number2 = document.forms['calculator']['number2'].value;

    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    let kq = num1 * num2;
    
    document.getElementById('result').innerHTML = kq;
}
function Division(){
    let number1 = document.forms['calculator']['number1'].value;
    let number2 = document.forms['calculator']['number2'].value;

    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    let kq = num1 / num2;
    
    document.getElementById('result').innerHTML = kq;
}