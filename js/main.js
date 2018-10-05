window.onload = () => {
    const play = document.getElementById('play');
    const video = document.getElementById('video');

    video.currentTime = 0;

    play.addEventListener('click', () => {
        video.currentTime = 0;
        video.play();
    })
};