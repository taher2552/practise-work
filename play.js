
const timer = document.querySelector('.timer');
const resultDisplay = document.querySelector('.result_display');



let time=5;

let timeCountDown = setInterval(()=>{
 timer.innerText=time--;
 if(time<9){
    timer.style.left="8%";
 }
  if(time<0){
    clearInterval(timeCountDown);
    resultDisplay.style.display = "block";

    setInterval(()=>{
      resultDisplay.style.display = "none";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time=5;
    },3000);

  }
},1000)

