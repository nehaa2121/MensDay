
const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", function () {

    if (isPlaying) {
        music.pause();
        musicBtn.textContent = "♫ Music";
        isPlaying = false;
    } else {
        music.play()
            .then(() => {
                musicBtn.textContent = "♫ Pause Music";
                isPlaying = true;
            })
            .catch(() => {
                alert("Please add your song as music/song.mp3 first.");
            });
    }

});
