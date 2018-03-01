
function toggle() {
	var container = document.getElementsByClassName("stealthy-scroll-container")[0];
	var sidebar = document.getElementsByClassName("section-sidebar")[0];
	var section = container.children[1];
	var x = section.children[1];
    if (x.style.display === "none") {
		container.style.overflowY = "scroll";
        x.style.display = "block";
		sidebar.style.overscrollBehavior = "contain";
    } else {
		container.style.overflowY = "hidden";
        x.style.display = "none";
		sidebar.style.overscrollBehavior = "auto";
    }
}

window.onload = function() { 
var container = document.getElementsByClassName("stealthy-scroll-container")[0];
var section = container.children[1];
section.children[0].onclick = toggle;
toggle();
}