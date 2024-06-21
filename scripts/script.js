document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audioPlayer");
  const muteButton = document.getElementById("muteButton");

  // Mute/unmute functionality
  let isMuted = false;
  muteButton.addEventListener("click", function () {
    if (isMuted) {
      audio.volume = 1.0;
      muteButton.textContent = "Mute";
    } else {
      audio.volume = 0.0;
      muteButton.textContent = "Unmute";
    }
    isMuted = !isMuted;
  });
});
