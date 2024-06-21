document.addEventListener("DOMContentLoaded", function () {
  // Create an <audio> element
  const audio = new Audio("assets/music.mp3");

  // Set properties
  audio.loop = true; // Loop the audio
  audio.volume = 0.0; // Start with audio muted

  // Add error handling
  audio.addEventListener("error", function (e) {
    console.error("Failed to load audio:", e);
  });

  // Function to play audio
  function playAudio() {
    audio.play().catch(function (error) {
      console.error("Failed to play audio:", error);
    });
  }

  // Mute/unmute functionality
  const muteButton = document.getElementById("muteButton");
  let isMuted = true; // Start with audio muted

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

  // Play audio when the user interacts with the page
  document.addEventListener("click", function () {
    playAudio();
  });

  // Optionally, you can assign the audio element to a global variable for further control
  window.audio = audio;
});
