
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
const arrOfWords = document.querySelector('.arr_of_words');
const wordDisplay = document.querySelector('.word_display');
const guessWord = document.querySelector('.guess_word');
const playerToChooseWord = document.querySelector('.player_to_choose_word');
const player1NameForScore = document.querySelector('.player_1_name_for_score');
const player1Score = document.querySelector('.player_1_score');
let contestantName = localStorage.getItem('player1') || "player1"
let wordInputValue;
let word;

guessWord.style.display="none";
wordForm.style.display="none";
playerToChooseWord.innerText=contestantName;
player1NameForScore.innerText = contestantName;

function init(){
  
}




function likeDislikeFunction(e){
  let action;

  if(e.target.classList.contains('thumbs_up')){
     action="like";
  }
  else if(e.target.classList.contains('thumbs_down')){
    action="dislike";
  }


  showWordArea.innerHTML += ` <div class="written_words">
  <p class="written_by">${contestantName} ${action} the drawing</p><span class="word_line"></span>
</div>`


thumbsUp.style.display="none";
thumbsDown.style.display="none";
}

thumbsUp.addEventListener('click',likeDislikeFunction)
thumbsDown.addEventListener('click',likeDislikeFunction)



firstPlayer.innerText=localStorage.getItem("player1") || "player1";

function wordInputSubmit(e){
  e.preventDefault();
  let greenClass;
  if(wordInput.value==word){
    wordInputValue="You guess the right word";
    greenClass="green";
  }else{
    wordInputValue=wordInput.value;
    greenClass=""
    
  }


  showWordArea.innerHTML += ` <div class="written_words  ${greenClass}">
  <p class="written_by ">${contestantName}:</p><span class="word_line">${wordInputValue}</span>
</div>`
  



  wordInput.value=""
}



let listOfWords = JSON.parse(localStorage.getItem('wordList'));
arrOfWords.innerText="";

for(let i=0; i<listOfWords.length;i++){
  let newSpan= document.createElement('span');
  newSpan.setAttribute('class', "words_to_display")
  newSpan.innerText=listOfWords[i]+" "
  arrOfWords.append(newSpan)
}


arrOfWords.addEventListener('click', (e)=>{
   word=e.target.innerText.trim();
   wordDisplay.style.display="none";
   guessWord.style.display="block";
   wordForm.style.display="block";
   fillIn.innerText=""; 

   for(let i=0; i<word.length;i++){
    fillIn.innerHTML+="_"+'&#32';
  }

totalChar.innerText=word.length;
fillIn.innerHTML+=totalChar.innerText;
realWord.innerText = word;


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
      wordDisplay.style.display="block";
      guessWord.style.display="none";
    },3000);

  }
},1000);



})





wordForm.addEventListener('submit',wordInputSubmit);




