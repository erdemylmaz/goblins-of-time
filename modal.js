const modal = document.querySelector(".modal");
const acceptBtn = document.querySelector(".accept-modal-btn");
const refuseBtn = document.querySelector(".refuse-modal-btn");

refuseBtn.addEventListener("click", () => {
  location.reload();
});

acceptBtn.addEventListener("click", () => {
  modal.style.display = "none";

  let body = document.body;
  body.style.height = "auto";
  body.style.minHeight = "100vh";
  body.style.overflow = "auto";

  setTimeout(() => {
    myAudio.play();
    myAudio.setAttribute("data-status", "playing");
  }, 1000);
});
