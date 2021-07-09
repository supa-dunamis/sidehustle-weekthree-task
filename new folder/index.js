let counterDisplayElem = document.querySelector('.counterDisplay');
let counterMinusElem = document.querySelector('.lower-count');
let counterPlusElem = document.querySelector('.add-count');
let number = 0;
updateDisplay();
counterPlusElem.addEventListener('click' , () => {
    if(number<50){
        number ++;
    }
    updateDisplay();
} );
counterMinusElem.addEventListener('click' , () => {
    if(number>0){
        number --;
    }
    updateDisplay();
} );
function updateDisplay(){
    counterDisplayElem.innerHTML=number
};