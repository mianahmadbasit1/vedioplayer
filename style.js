const video= document.getElementById('video')
const play= document.getElementById("play")
const stop= document.getElementById("stop")
const progress= document.getElementById("progress")
const timestamp= document.getElementById("timestamp")
//funcation
//1-toggel vedio - play and pause vedio
//a-if vedio s playing then pause
//b-if vedio is pause then play
function toggleVideo() {
    if (video.paused) {
        video.play()
    }else{
        video.pause();
    }
}
//2- update icon -toggle between play and pause icons
// if vedio is playing then show pause icon
// if video is paused then show play icon
function updateIcon() {
    if(video.paused){
        play.innerHTML=' <i class="fas fa-play fa-2x"></i>';
    }else{
        play.innerHTML='<i class="fas fa-pause fa-2x"></i>';
    }
}

//3- update proggress
//update the progress bar and timestamp
function updateProgress() {
    //update slider
    progress.value= video.currentTime/video.duration*100;
    //update timestamp
    //roundiing the min
    let minutes=Math.floor(video.currentTime/60);
    if(minutes<10){
        minutes=`0${minutes}`;
    }
    //rounding down the second
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds<10){
        seconds= `0${seconds}`;
    }
    //display time stamp
    timestamp.innerHTML= `${minutes}:${seconds}`;
}
//4- stop vedio -stop vedio play back and rest time to 0
function stopVideo() {
    video.pause();
    video.currentTime= 0;
}
//5-update vedio playback time
function setProgress() {
   video.currentTime=progress.value*video.duration/100;
}









//Event Listner
//1-vedio elemnt -clickable click to play and pause
video.addEventListener('click',toggleVideo);
//2-video element- pause to toogle to play icon
video.addEventListener('pause', updateIcon);
//3- video elemnnt- play to toggel pause icon to play icon
video.addEventListener('play',updateIcon);
//4-video element -update progress bar and timestamp
video.addEventListener('timeupdate', updateProgress);
//5-play button - click to play and pause button
play.addEventListener('click',toggleVideo)
//5-stop button- click to reset video and pause video
stop.addEventListener('click',stopVideo);
// 7- progress bar -  change postion to chnage time of playback
progress.addEventListener('change',setProgress);