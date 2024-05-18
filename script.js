console.log("Welcome to Spotify");
//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('tujhme.mp3 ');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =  document.getElementById('myProgressBar');
let gif =  document.getElementById('gif');
let songItems  = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Tujhme rab dikhta hai", filePath: "tujhme.mp3" , coverPath: "songbanner.jpg"},
    {songName: "O mahi", filePath: "O mahi.mp3" , coverPath: "Omahi.jpg"},
    {songName: "Lollipop lagelu", filePath: "Lollipop.mp3" , coverPath: "Lollipop.jpg"},
    {songName: "Tum Se", filePath: "TumSe.mp3" , coverPath: "TumSe.jpg"},
    {songName: "Chal tere ishq me ", filePath: "chalTere.mp3" , coverPath: "chalTere.jpg"},
   
]
songItems.forEach((element, i) => {
    console.log(element, i);
element.getElementsByTagName('img')[0].src= songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText = songs[i].songName;


})



//audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click', () =>{
     if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
     }
     else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
     }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=> {
    console.log('timeupdate');
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
   //console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
