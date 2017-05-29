document.addEventListener("DOMContentLoaded", function() {

  var visibleElementsLi = document.querySelector("ul").children
  var ulElement = document.querySelector("ul");

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

  var imagesElements = document.querySelectorAll(" .product img")
  console.log(imagesElements);
  var productElement = document.querySelectorAll(" .product ");
  var infoAboutElement = document.querySelector(".infoAbout");
  console.log(productElement);

  for (var i = 0; i < productElement.length; i++) {
    productElement[i].addEventListener("mouseover", function() {

        this.querySelector(".infoAbout").style.display = "block"

    })
    productElement[i].addEventListener("mouseout", function() {

      this.querySelector(".infoAbout").style.display = "none"

    })
  }

})
