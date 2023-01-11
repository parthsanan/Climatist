const toggleButton = document.getElementsByClassName("toggle-button")[0];

const navbarlinks = document.getElementsByClassName("menu-items")[0];

toggleButton.addEventListener("click", () => {
  navbarlinks.classList.toggle("active");
});

const isMobile = window.matchMedia(
   "only screen and (max-width: 768px)"
).matches;

if (isMobile) {
  window.location.href = "./mobile/";
}
