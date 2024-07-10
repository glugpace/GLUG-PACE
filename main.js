function toggleNavBar() {
  document.getElementById("navbar-links").style.height = "0vw";

    height = document.getElementById("navbar-links").style.height;
    if (height == "0vw") {
      document.getElementById("navbar-links").style.height = "50vh";
      document.getElementById("menuIcon").innerHTML = "<i class='fa fa-close'></i>";
    } else {
      document.getElementById("navbar-links").style.height = "0vw";
      document.getElementById("menuIcon").innerHTML = "<i class='fa fa-bars'></i>";
    }
  }