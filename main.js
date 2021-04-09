const drum_one = document.querySelector(".drum_one");
const drumBtn = document.querySelector(".drum");
const piano_one = document.querySelector(".piano_one");
const pianoBtn = document.querySelector(".piano");
const piano_two = document.querySelector(".piano_two");
const piano_two_Btn = document.querySelector(".piano2");
const ambiant = document.querySelector(".ambiant");
const ambiantBtn = document.querySelector(".ambiantBtn");
const drum_two = document.querySelector(".drum_two");
const drum_two_btn = document.querySelector(".drum_two_btn");
const glitch = document.querySelector(".glitchT");
const glitchbtn = document.querySelector(".glitch");
const pluck = document.querySelector(".pluckT");
const pluckbtn = document.querySelector(".pluck");
const strings = document.querySelector(".stringsT");
const stringsbtn = document.querySelector(".strings");
const choir = document.querySelector(".choirT");
const choirbtn = document.querySelector(".choir");
const vocal = document.querySelector(".vocalT");
const vocalbtn = document.querySelector(".vocal");
const playIcon = document.querySelector("#play");
const playIcon1 = document.querySelector("#play1");
const playIcon2 = document.querySelector("#play2");
const playIcon3 = document.querySelector("#play3");
const playIcon4 = document.querySelector("#play4");
const playIcon5 = document.querySelector("#play5");
const playIcon6 = document.querySelector("#play6");
const playIcon7 = document.querySelector("#play7");
const playIcon8 = document.querySelector("#play8");
const playIcon9 = document.querySelector("#play9");
drumBtn.addEventListener("click", function(){

    if(drum_one.paused){
        drum_one.play();
        drum_one.loop= true;
        playIcon.classList.remove("fa-play-circle");
        playIcon.classList.toggle("fa-pause-circle");

    }else{
        drum_one.pause();
        playIcon.classList.remove("fa-pause-circle");
        playIcon.classList.toggle("fa-play-circle");
    }
   
})
pianoBtn.addEventListener("click", function(){
    if(piano_one.paused){
        piano_one.loop= true;
        piano_one.play();
        playIcon1.classList.remove("fa-play-circle");
        playIcon1.classList.toggle("fa-pause-circle");
    }else{
        playIcon1.classList.remove("fa-pause-circle");
        playIcon1.classList.toggle("fa-play-circle");
        piano_one.pause();
    }
})

piano_two_Btn.addEventListener("click", function(){
    if(piano_two.paused){
        piano_two.loop= true;
        piano_two.play();
        playIcon2.classList.remove("fa-play-circle");
        playIcon2.classList.toggle("fa-pause-circle");
        
    }else{
       playIcon2.classList.remove("fa-pause-circle"); 
        playIcon2.classList.toggle("fa-play-circle");
        piano_two.pause();
    }
})

ambiantBtn.addEventListener("click", function(){
    if(ambiant.paused){
        ambiant.loop= true;
        ambiant.play();
        playIcon3.classList.remove("fa-play-circle");
        playIcon3.classList.toggle("fa-pause-circle");
    }else{
        ambiant.pause();
        playIcon3.classList.remove("fa-pause-circle"); 
        playIcon3.classList.toggle("fa-play-circle");
    }
})

drum_two_btn.addEventListener("click", function(){

    if(drum_two.paused){
        drum_two.play();
        drum_two.loop= true;
        playIcon4.classList.remove("fa-play-circle");
        playIcon4.classList.toggle("fa-pause-circle");
    }else{
        drum_two.pause();
        playIcon4.classList.remove("fa-pause-circle"); 
        playIcon4.classList.toggle("fa-play-circle");
    }
   
})

glitchbtn.addEventListener("click", function(){

    if(glitch.paused){
        glitch.play();
        glitch.loop= true;
        playIcon5.classList.remove("fa-play-circle");
        playIcon5.classList.toggle("fa-pause-circle");
    }else{
        glitch.pause();
        playIcon5.classList.remove("fa-pause-circle"); 
        playIcon5.classList.toggle("fa-play-circle");
    }
   
})

pluckbtn.addEventListener("click", function(){

    if(pluck.paused){
        pluck.play();
        pluck.loop= true;
        playIcon6.classList.remove("fa-play-circle");
        playIcon6.classList.toggle("fa-pause-circle");
    }else{
        pluck.pause();
        playIcon6.classList.remove("fa-pause-circle"); 
        playIcon6.classList.toggle("fa-play-circle");
    }
   
})

stringsbtn.addEventListener("click", function(){

    if(strings.paused){
        strings.play();
        strings.loop= true;
        playIcon7.classList.remove("fa-play-circle");
        playIcon7.classList.toggle("fa-pause-circle");
    }else{
        strings.pause();
        playIcon7.classList.remove("fa-pause-circle"); 
        playIcon7.classList.toggle("fa-play-circle");
    }
   
})
choirbtn.addEventListener("click", function(){

    if(choir.paused){
        choir.play();
        choir.loop= true;
        playIcon8.classList.remove("fa-play-circle");
        playIcon8.classList.toggle("fa-pause-circle");
    }else{
        choir.pause();
        playIcon8.classList.remove("fa-pause-circle"); 
        playIcon8.classList.toggle("fa-play-circle");
    }
   
})
vocalbtn.addEventListener("click", function(){

    if(vocal.paused){
        vocal.play();
        vocal.loop= true;
        playIcon9.classList.remove("fa-play-circle");
        playIcon9.classList.toggle("fa-pause-circle");
    }else{
        vocal.pause();
        playIcon9.classList.remove("fa-pause-circle"); 
        playIcon9.classList.toggle("fa-play-circle");
    }
   
})