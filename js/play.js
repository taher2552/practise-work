
const timer = document.querySelector('.timer');
const resultDisplay = document.querySelector('.result_display');
const firstPlayer = document.querySelector('.first_player');
const wordForm = document.querySelector('#word_input_form');
const wordInput = document.querySelector('#word_input');
const showWordArea = document.querySelector('.show_word_area');
const fillIn = document.querySelector('.fill_in');
const totalChar = document.querySelector('.total_char');
const realWord = document.querySelector('.real_word');
const thumbsUp = document.querySelector('.thumbs_up');
const thumbsDown = document.querySelector('.thumbs_down');
let wordInputValue;



firstPlayer.innerText=localStorage.getItem("player1") || "player1";

function wordInputSubmit(e){
  e.preventDefault();
  
  let contestantName = localStorage.getItem('player1') || "player1"
  
  
  if(wordInput.value==word){
    wordInputValue="You guess the right word";
  }else{
    wordInputValue=wordInput.value;

  }


  showWordArea.innerHTML += ` <div class="written_words">
  <p class="written_by">${contestantName}:</p><span class="word_line">${wordInputValue}</span>
</div>`
  



  wordInput.value=""
}



let word="cup";
fillIn.innerText=""
for(let i=0; i<word.length;i++){
  fillIn.innerHTML+="_"+'&#32';
}

totalChar.innerText=word.length;
fillIn.innerHTML+=totalChar.innerText;
realWord.innerText = word;

wordForm.addEventListener('submit',wordInputSubmit);


let time=10;
let timeCountDown = setInterval(()=>{
 timer.innerText=time--;
 if(time<9){
    timer.style.left="8%";
 }
  if(time<0){
    clearInterval(timeCountDown);
    resultDisplay.style.display = "block";
    fillIn.innerHTML=word;

    setTimeout(()=>{
      resultDisplay.style.display = "none";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fillIn.innerHTML="";
      for(let i=0; i<word.length;i++){
        
        fillIn.innerHTML+="_"+'&#32';
      }
      totalChar.innerText=word.length;
      fillIn.innerHTML+=totalChar.innerText;
    },3000);

  }
},1000);



