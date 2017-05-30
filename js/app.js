document.addEventListener("DOMContentLoaded", function() {

  var visibleElementsLi = document.querySelector("ul").children
  var ulElement = document.querySelector("ul");
  var firstLi = document.querySelector("header ul li")

  for (var i = 0; i < visibleElementsLi.length; i++) {
    visibleElementsLi[i].addEventListener("mouseover", function() {
      if (this.querySelector("ul") != null) {
        this.querySelector("ul").style.display = "block"
      }
    })
    visibleElementsLi[i].addEventListener("mouseout", function() {
      if (this.querySelector("ul") != null) {
        this.querySelector("ul").style.display = "none"

      }
    })
  }


  var ulElement = document.querySelector("#baner ul")
  var liElements = document.querySelectorAll("#baner ul li")
  var nextButton = document.querySelector("#baner .next")
  var prevButton = document.querySelector("#baner .prev")
  ulElement.setAttribute("class", "slider")
  var counter = 0;
  liElements[counter].setAttribute("class", "visible")
  nextButton.addEventListener("click", function() {
    if (counter >= liElements.length - 1) {
      liElements[counter].removeAttribute("class", "visible")
      counter = 0
      liElements[counter].setAttribute("class", "visible")
    } else {
      liElements[counter].removeAttribute("class", "visible")
      counter++;
      liElements[counter].setAttribute("class", "visible")
    }
  })

  prevButton.addEventListener("click", function() {
    if (counter == 0) {
      liElements[counter].removeAttribute("class", "visible")
      counter = liElements.length - 1;
      liElements[counter].setAttribute("class", "visible")
    } else {
      liElements[counter].removeAttribute("class", "visible")
      counter--;
      liElements[counter].setAttribute("class", "visible")

    }
  })

  var productElement = document.querySelectorAll(" .product ");
  var infoAboutElement = document.querySelector(".infoAbout");

  for (var i = 0; i < productElement.length; i++) {
    productElement[i].addEventListener("mouseover", function() {

      this.querySelector(".infoAbout").style.display = "block"

    })
    productElement[i].addEventListener("mouseout", function() {

      this.querySelector(".infoAbout").style.display = "none"

    })
  }

  var burger = document.querySelector(".burger");
  var counter = 0;
  burger.addEventListener("click", function() {
      counter++;
      burger.children[0].classList.toggle("change1");
      burger.children[1].classList.toggle("change2");
      burger.children[2].classList.toggle("change3");
      document.querySelector("header").classList.toggle("longerHeader");
      if (counter%2==0) {
        document.querySelector(".menu").style.display="none";
      }
      else {
        document.querySelector(".menu").style.display="block";
      }
    })



})
