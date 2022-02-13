window.onscroll = function(){stickyNavBar()};

var navBar = document.getElementById('nav-bar');
var sticky = navBar.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky");
  }
}
