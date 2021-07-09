let counterDisplay = document.querySelector('.counterDisplay');
let lowerCount = document.querySelector('.lower-count');
let addCount = document.querySelector('.add-count');
let number = 0;
updateDisplay();
addCount.addEventListener('click' , () => {
    if(number<50){
        number ++;
    }
    updateDisplay();
} );
lowerCount.addEventListener('click' , () => {
    if(number>0){
        number --;
    }
    updateDisplay();
} );
function updateDisplay(){
    counterDisplay.innerHTML=number
};