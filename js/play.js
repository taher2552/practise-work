
const timer = document.querySelector('.timer');
const resultDisplay = document.querySelector('.result_display');
const firstPlayer = document.querySelector('.first_player');
const wordForm = document.querySelector('#word_input_form');
const wordInput = document.querySelector('#word_input');
const showWordArea = document.querySelector('.show_word_area');


const totalRound=3;


  let time=10;
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },3000);

  }
},1000);

firstPlayer.innerText=localStorage.getItem("player1") || "player1";

function wordInputSubmit(e){
  e.preventDefault();
  let contestantName = localStorage.getItem('player1')
  showWordArea.innerHTML += ` <div class="written_words">
  <p class="written_by">${contestantName}:</p><span class="word_line">${wordInput.value}</span>
</div>`

  wordInput.value=""
}

wordForm.addEventListener('submit',wordInputSubmit)



