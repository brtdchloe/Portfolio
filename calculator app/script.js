const display = document.getElementById('input-nb');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    display.value = eval(display.value);
}