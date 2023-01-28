
const timer = document.querySelector('.timer');
const resultDisplay = document.querySelector('.result_display')

let time=5;

let timeCountDown = setInterval(()=>{
 timer.innerText=time--;
 if(time<9){
    timer.style.left="8%";
 }
  if(time<0){
    clearInterval(timeCountDown);
    resultDisplay.style.display = "block";

    setTimeout(()=>{
      resultDisplay.style.display = "none";
    },3000)

  }
},1000)

