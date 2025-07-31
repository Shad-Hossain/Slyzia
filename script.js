// Toggle mobile navbar
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}
const slider = document.getElementById("feedbackSlider");
const track = document.getElementById("sliderTrack");

slider.addEventListener("touchstart", () => {
  track.style.animationPlayState = "paused";
});

slider.addEventListener("touchend", () => {
  track.style.animationPlayState = "running";
});
