window.onload = () => {
    const play = document.getElementById('play');
    const video = document.getElementById('video');

    play.addEventListener('click', () => {
        video.currentTime = 0;
        video.play();
    })
};