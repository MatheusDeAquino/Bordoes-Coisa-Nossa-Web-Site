const imageElement = document.querySelectorAll("img[data-key]");

imageElement.forEach(image => {
    image.addEventListener('click', function(){
        const audioElement = document.querySelector(`audio[data-key="${image.getAttribute('data-key')}"]`);
        audioElement.currentTime = 0;
        audioElement.play();
    })
})