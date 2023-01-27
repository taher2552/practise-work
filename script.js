const player1 = document.querySelector('#player_name_input');
const playButton = document.querySelector('#play_button');

function playFunction(){
    console.log("click")
    localStorage.setItem("player1", player1.value);
}

playButton.addEventListener('click', playFunction);

