document.getElementById("menu_icon").addEventListener("click", function() {
    var menu = document.querySelector(".menu_lateral");
    if (menu.style.display === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });