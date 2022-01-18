var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    container .classList .toggle("large-container")
    sidebar.classList.toggle("small-sidebar")
}
