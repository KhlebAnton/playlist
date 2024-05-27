const wrapAudioItems = document.querySelectorAll('.wrapper-audio');



function clickPlay(elem) {
    

    playMusic(elem);


    wrapAudioItems.forEach((event)=> {
        let eventPlay = event.querySelector('.play');
        if(elem != eventPlay) {
            eventPlay.classList.remove('pause');
            
        }
        
    });
    
    elem.classList.toggle('pause');
   
    

}

function playMusic(elem) {
    let audio = elem.closest('.wrapper-audio').querySelector('audio');
    if(elem.classList.contains('pause')) {
        audio.pause();
        audio.currentTime = 0.0;
    } else {
        wrapAudioItems.forEach((wrap) => {
            wrap.querySelector('audio').pause();
            wrap.querySelector('audio').currentTime = 0.0;
        });
        audio.play();
        
    }
}