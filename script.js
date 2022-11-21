//Exercice 1
var footer = document.querySelector('footer');
var inc = 0
footer.addEventListener('click', see);
function see(){
  inc += 1
  console.log("clique numero :" + inc);
}
//Exercice 2
nav = document.getElementById("navbarHeader");
hambuger = document.querySelector("button", ".navbar-toggler");
hambuger.addEventListener("click", function () {
	nav.classList.toggle("collapse")
})
//Exercice 3
editCardButtonOne = document.querySelectorAll(".btn-outline-secondary")[0]
textCardOne = document.querySelectorAll(".card-text")[0]
editCardButtonOne.addEventListener("click", function() {
	textCardOne.style.color = "red"
})
//Exercice 4
editCardButtonTwo = document.querySelectorAll(".btn-outline-secondary")[1]
textCardTwo = document.querySelectorAll(".card-text")[1]
i = 1
editCardButtonTwo.addEventListener("click", function() {
	i++
	if( i % 2 == 0) {
		textCardTwo.style.color = "green"		
	} else {
		textCardTwo.style.color = "rgb(33, 37, 41)"
	}	
})
//Exercice 5
navbar = document.querySelector("header")
bootstrap = document.querySelector("head").querySelector("link")
i = 1
navbar.addEventListener("dblclick", function () {
	i++
	if( i % 2 == 0) {
		bootstrap.setAttribute("href", "#")
	} else {
		bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
	}
})
// Exercice 6
viewButtons = document.querySelectorAll("button.btn.btn-sm.btn-success")
viewButtons.forEach(function(el) {
	el.addEventListener("mouseover", function(e) {
		card = e.target.offsetParent.offsetParent.offsetParent
		text = card.firstElementChild.lastElementChild.firstElementChild
		if (card.style.maxWidth != "20%") {
			text.hidden = true
			card.style.maxWidth = "20%"
		} else {
			text.hidden = false
			card.style.maxWidth = "100%"
		}
	})
})






