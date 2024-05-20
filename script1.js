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
        /* wrong way -please do not do it directly , first load it into variable then execute it 
        element.getElementsByTagName('img')[0].src = song[i].coverPath;
        */
       //below is the corrected way that is first load it into variable then excute/use it further
       

        // Fetching img element
        let imgElement = element.getElementsByTagName('img')[0];
       

        // Fetching songName element
        let songNameElement = element.getElementsByClassName('songName')[0];
        

        // Setting src and innerText
          imgElement.src = songs[i].coverPath;
          songNameElement.innerText = songs[i].songName;
    });


    const togglePlayPause = () => {
        if (audioElement.paused) {
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
    };
   //making the song play by simple click
    masterPlay.addEventListener('click', togglePlayPause);
    //making the song play by space button
    document.addEventListener('keydown', (event) => {
        if(event.code === 'Space'){
            togglePlayPause();
        }
    })
    

  
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
            if (audioElement.paused) {
                // Only change the source if the song index is different
                let newSongIndex = parseInt(e.target.id);
                if (songIndex !== newSongIndex) {
                    songIndex = newSongIndex;
                    audioElement.src = songs[songIndex].filePath;
                    masterSongName.innerText = songs[songIndex].songName;
                }
                
                makeAllPlays();
                gif.style.opacity = 1;
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-pause-circle');
    
                audioElement.play();
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-pause-circle');
            } else {
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-circle-play');
                e.target.classList.remove('fa-pause-circle');
                e.target.classList.add('fa-circle-play');
                gif.style.opacity = 0;
            }
        });
    });

 




    document.getElementById('next').addEventListener('click' , () => {
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













