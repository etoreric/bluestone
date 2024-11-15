/*----------preloader----------*/

var loader = document. getElementById("preloader");
	window.addEventListener("load", function(){
	  loader.style.display = "none"
})


/*----------nav close on click---------*/
var navmain = $(".navbar-collapse");
    navmain.on ("click","a", null, function() {
    navmain.collapse('hide');
});

 



/*-------------transition---------------*/
function reveal() {
	var reveals = document.querySelectorAll(".reveal");
	for (var i = 0; i < reveals.length; i++) {
	  var windowHeight = window.innerHeight;
	  var elementTop = reveals[i].getBoundingClientRect().top;
	  var elementVisible = 150;
  
	  if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("active");
	  } else {
		reveals[i].classList.remove("active");
	  }
	}
}
  window.addEventListener("scroll", reveal); 


  