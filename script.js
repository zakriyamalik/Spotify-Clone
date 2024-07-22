console.log("Welcome to Spotify");


// Initialize the variable

let songIndex=0;
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gifid');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Salam-e-ishq",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:"Saayan",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName:"Mahiya",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName:"Na Jaa",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName:"Ajaa",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName:"Baja",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName:"Sara Jahan",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName:"Tere Bina",filePath:"8.mp3",coverPath:"8.jpg"},
    {songName:"Tana Tanana",filePath:"9.mp3",coverPath:"9.jpg"},
    {songName:"Na na",filePath:"10.mp3",coverPath:"10.jpg"}
    
]

songItems.forEach((element,i) => {

    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].songName;
});

let audioELement= new Audio("1.mp3");
// audioELement.play();


// Listen to Event 

masterPlay.addEventListener('click',()=>{
    if(audioELement.paused ||audioELement.currentTime<=0)
        {
            audioELement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
        }
        else{
            audioELement.pause();
            
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
        }
})

audioELement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioELement.currentTime/audioELement.duration)*100)
    myProgressBar.value=progress;

})


myProgressBar.addEventListener('change',()=>{
    audioELement.currentTime=myProgressBar.value*audioELement.duration/100;
})

const makaAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
   
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
       
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioELement.src=`${ songIndex+1}.mp3`;  
        masterSongName.innerText=songs[songIndex].songName;
        audioELement.currentTime=0;
        audioELement.play();
       
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioELement.src=`${ songIndex+1}.mp3`;  
    masterSongName.innerText=songs[songIndex].songName;
    audioELement.currentTime=0;
    audioELement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})




document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioELement.src=`${ songIndex+1}.mp3`;  
    masterSongName.innerText=songs[songIndex].songName;
    audioELement.currentTime=0;
    audioELement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})

