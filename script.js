const wrapAudioItems = document.querySelectorAll('.wrapper-audio');


let memSrc = [
    'img/мем1.png',
    'img/мем2.png',
    'img/мем3.png',
    'img/мем4.png',

];

const danceBg = document.querySelector('.dance-bg');

wrapAudioItems.forEach((wrap) => {
    let audio = wrap.querySelector('audio');

    audio.addEventListener('playing', () => {
        
        audio.closest('.wrapper-audio').classList.add('onplay');
        
    });
    audio.addEventListener('pause', () => {
        audio.closest('.wrapper-audio').classList.remove('onplay');
        
    })
})



for (let i = 0; i < wrapAudioItems.length; i++) {
    const element = wrapAudioItems[i];
    setTimeout(()=> {
        element.classList.add('onload')
        
    }, i * 100)
    
}

function clickPlay(elem) {
    

    playMusic(elem);


    wrapAudioItems.forEach((event)=> {
        let eventPlay = event.querySelector('.play');
        if(elem != eventPlay) {
            eventPlay.classList.remove('pause');
            
            
        }
        
    });
    
    elem.classList.toggle('pause');
    danceBg.setAttribute('style', `background-image: url(./${memSrc[getRandomInt(memSrc.length)]}`); 
    

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function playMusic(elem) {
    let audio = elem.closest('.wrapper-audio').querySelector('audio');
    if(elem.classList.contains('pause')) {
        audio.pause();
        danceBg.classList.remove('dancing');
        audio.currentTime = 0.0;
    } else {
        wrapAudioItems.forEach((wrap) => {
            wrap.querySelector('audio').pause();
            wrap.querySelector('audio').currentTime = 0.0;
        });
        danceBg.classList.remove('dancing');
        audio.play();
        danceBg.classList.add('dancing');
        
    }
}

