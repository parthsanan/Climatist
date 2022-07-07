const toggleButton = document.getElementsByClassName('toggle-button')[0]

const navbarlinks = document.getElementsByClassName('menu-items')[0]

var navbar = document.getElementById("navbar");

var navpad = document.getElementById("navpad");

var head = document.getElementById("head");

var sticky = navbar.offsetTop;

window.onscroll = function() {stickynav()};

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})

function stickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navpad.classList.add("navpad")
    head.classList.add("head")
    
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("navpad")
    head.classList.remove("head")
  }
}
