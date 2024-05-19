document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Welcome to Spotify");

    // Initialize the variable
    let songIndex = 0;
    let audioElement = new Audio('Omahi.mp3');
    let masterPlay = document.getElementById('masterPlay');
    let masterSongName = document.getElementById('masterSongName');
    let myProgressBar = document.getElementById('myProgressBar');
    let gif = document.getElementById('gif');
    let songItems = Array.from(document.getElementsByClassName('songItem'));

    let songs = [
        { songName: "Tujhme rab dikhta hai", filePath: "tujhme.mp3", coverPath: "songbanner.jpg" },
        { songName: "O mahi", filePath: "Omahi.mp3", coverPath: "Omahi.jpg" },
        { songName: "FikarNot", filePath: "FikarNot.mp3", coverPath: "FikarNot.jpg" },
        { songName: "Tum Se", filePath: "TumSe.mp3", coverPath: "TumSe.jpg" },
        { songName: "Chal tere ishq me", filePath: "chalTere.mp3", coverPath: "chalTere.jpg" },
    ];

    songItems.forEach((element, i) => {
        console.log(`Processing songItem ${i}`, element);

        // Fetching img element
        let imgElement = element.getElementsByTagName('img')[0];
        if (!imgElement) {
            console.error(`img element not found for songItem ${i}`, element);
            return; // Exit the current iteration
        }

        // Fetching songName element
        let songNameElement = element.getElementsByClassName('songName')[0];
        if (!songNameElement) {
            console.error(`songName element not found for songItem ${i}`, element);
            return; // Exit the current iteration
        }

        // Setting src and innerText
        imgElement.src = songs[i].coverPath;
        songNameElement.innerText = songs[i].songName;
    });

    masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
        }
    });

    audioElement.addEventListener('timeupdate', () => {
        // Update progress bar
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        myProgressBar.value = progress;
    });

    myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    });
    const makeAllPlays = () => {
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-circle-play');
            
        })
    }

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.addEventListener('click', (e) => {
            
            console.log(e.target);
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            gif.style.opacity =1;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-pause-circle');
            
           // audioElement.src = `${index +1}.mp3`;
            audioElement.src = songs[songIndex].filePath;
            masterSongName.innerText = songs[songIndex].songName;

            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-pause-circle');
        });
    });
    document.getElementById('next').addEventListener('click', () => {
        if(songIndex >4){
            songIndex = 0;
        }
        else{
            songIndex +=1;
        }
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})



});


//h.w?
//to add functionality of pause in songs list, to make song pause by space button , try to make it respossive (by using media query)
