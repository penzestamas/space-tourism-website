function myFunction() {
  var navbar = document.getElementById("navbar");
  var navbarIcon = document.getElementById("navbar-icon");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    navbarIcon.innerHTML = '<img src="assets/shared/icon-hamburger.svg" alt="Hamburger icon">'
  } else {
    navbar.style.display = "block";
    navbarIcon.innerHTML = '<img src="assets/shared/icon-close.svg" alt="Close icon">'
  }
}
