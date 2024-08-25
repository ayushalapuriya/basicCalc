const display=document.getElementById('display')

function toDisplay(value){
    display.value+=value;
}
function clearDisplay() {
    display.value=''
    console.log('hi')
}
function deleteLast(){
    display.value=display.value.slice(0,-1)
}

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const percentButton = document.getElementById('percent');

    percentButton.addEventListener('click', function() {
        if (display.value) {
            display.value = parseFloat(display.value) / 100;
        }
    });
});

function cr(){
    try {
        display.value=eval(display.value)
    } catch (error) {
        display.value='error'
    }
}
console.log(display)