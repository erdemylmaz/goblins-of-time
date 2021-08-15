pauseBtn.addEventListener("click", () => {
  myAudio.pause();
  myAudio.setAttribute("data-status", "paused");

  pauseBtn.style.display = "none";
  playBtn.style.display = "flex";
});

playBtn.addEventListener("click", () => {
  myAudio.play();
  myAudio.setAttribute("data-status", "playing");

  playBtn.style.display = "none";
  pauseBtn.style.display = "flex";
});

musicHoverEffect = (e) => {
  let width = e.offsetX;

  musicHover.style.display = "flex";
  musicHover.style.opacity = "0.5";
  musicHover.style.width = `${width}px`;
};

musicDurationDiv.addEventListener("mousemove", musicHoverEffect);
musicDurationDiv.addEventListener("mouseleave", () => {
  musicHover.style.opacity = "0";
  // musicHover.style.width = `0px`;

  setTimeout(() => {
    musicHover.style.display = "flex";
  }, 250);
});

changeTime = (e) => {
  let clickedX = e.offsetX;
  let percentage = (clickedX * 100) / musicDurationDivsWidth;
  let timeOfMusic = (lastTime * percentage) / 100;

  musicCurrentTimeDiv.style.width = `${clickedX}px`;

  let audiosCurrentTime = timeOfMusic;

  updateSection(audiosCurrentTime);

  myAudio.currentTime = timeOfMusic;
};

// change music's current time
musicDurationDiv.addEventListener("click", changeTime);
