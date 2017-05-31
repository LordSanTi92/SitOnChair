document.addEventListener("DOMContentLoaded", function() {

  var visibleElementsLi = document.querySelector(".menu ul").children;
  var ulElement = document.querySelector(".menu ul");
  var firstLi = document.querySelector(".menu ul li");
  var ulBanerElement = document.querySelector("#baner ul");
  var liBanerElements = document.querySelectorAll("#baner ul li");
  var nextButton = document.querySelector("#baner .next");
  var prevButton = document.querySelector("#baner .prev");
  var counter = 0;
  var productElement = document.querySelectorAll(" .product ");
  var infoAboutElement = document.querySelector(".infoAbout");
  var burger = document.querySelector(".burger");
  var counter1 = 0;
  var showList = document.querySelectorAll(".list_arrow");
  var imgChairs = document.querySelectorAll(".image_part img");
  var transportButton = document.querySelector(".form [type=checkbox]");
  var totalSum = document.querySelector(".sum strong");
  var listPanels = document.querySelectorAll(".list_panel");

  ulBanerElement.setAttribute("class", "slider");
  liBanerElements[counter].setAttribute("class", "visible");

  for (var i = 0; i < visibleElementsLi.length; i++) {
    visibleElementsLi[i].addEventListener("mouseover", function() {
      if (this.querySelector(".menu ul") != null) {
        this.querySelector(".menu ul").style.display = "block";
      }
    })
    visibleElementsLi[i].addEventListener("mouseout", function() {
      if (this.querySelector(".menu ul") != null) {
        this.querySelector(".menu ul").style.display = "none";
      }
    })
  }

  nextButton.addEventListener("click", function() {
    if (counter >= liBanerElements.length - 1) {
      liBanerElements[counter].removeAttribute("class", "visible");
      counter = 0;
      liBanerElements[counter].setAttribute("class", "visible");
    } else {
      liBanerElements[counter].removeAttribute("class", "visible");
      counter++;
      liBanerElements[counter].setAttribute("class", "visible");
    }
  })

  prevButton.addEventListener("click", function() {
    if (counter == 0) {
      liBanerElements[counter].removeAttribute("class", "visible")
      counter = liBanerElements.length - 1;
      liBanerElements[counter].setAttribute("class", "visible");
    } else {
      liBanerElements[counter].removeAttribute("class", "visible")
      counter--;
      liBanerElements[counter].setAttribute("class", "visible");

    }
  })

  for (var i = 0; i < productElement.length; i++) {
    productElement[i].addEventListener("mouseover", function() {
      this.querySelector(".infoAbout").style.display = "block";
    })
    productElement[i].addEventListener("mouseout", function() {
      this.querySelector(".infoAbout").style.display = "none";
    })
  }

  burger.addEventListener("click", function() {
    counter++;
    burger.children[0].classList.toggle("change1");
    burger.children[1].classList.toggle("change2");
    burger.children[2].classList.toggle("change3");
    document.querySelector("header").classList.toggle("longerHeader");
    document.querySelector("header .menu").classList.toggle("visible")

  })
console.log();



    showList[0].addEventListener("click", function() {
      this.nextElementSibling.classList.toggle("visible");
      this.previousElementSibling.innerHTML = "Wybierz rodzaj";
      this.previousElementSibling.classList.remove("choosenColor");
      document.querySelector(".panel_left .title").innerHTML = "Twój fotel";
      document.querySelector(".panel_right .title").innerHTML = "";

      summary();
    })
    showList[1].addEventListener("click", function() {
      this.nextElementSibling.classList.toggle("visible");
      this.previousElementSibling.innerHTML = "Wybierz rodzaj";
      this.previousElementSibling.classList.remove("choosenColor");
      document.querySelector(".panel_left .color").innerHTML = "";
      document.querySelector(".panel_right .color").innerHTML = "";
      summary();
    })
    showList[2].addEventListener("click", function() {
      this.nextElementSibling.classList.toggle("visible");
      this.previousElementSibling.innerHTML = "Wybierz rodzaj";
      this.previousElementSibling.classList.remove("choosenColor");
      document.querySelector(".panel_left .pattern").innerHTML = "";
      document.querySelector(".panel_right .pattern").innerHTML = "";
      summary();
    })

  for (var i = 0; i < listPanels[0].children.length; i++) {
    listPanels[0].children[i].addEventListener("click", function() {
      var chairValue = 0;
      document.querySelector(".form .list_label").innerHTML = this.innerHTML;
      document.querySelector(".form .list_label").classList.add("choosenColor");
      document.querySelector(".panel_left .title").innerHTML = this.innerHTML;
      document.querySelector(".panel_right .title").innerHTML = this.dataset.price;
      this.parentNode.classList.toggle("visible");
      // if (this.innerHTML == document.querySelector(".image_part").children[0].alt) {
      //   document.querySelector(".image_part").children[0].classList.toggle("imgblock")
      // }
      // else if (this.innerHTML == document.querySelector(".image_part").children[1].alt) {
      //   document.querySelector(".image_part").children[1].classList.toggle("imgblock")
      // }
      // else if (this.innerHTML == document.querySelector(".image_part").children[2].alt) {
      //   document.querySelector(".image_part").children[2].classList.toggle("imgblock")
      // }
      summary();
    })
  }

  for (var i = 0; i < listPanels[1].children.length; i++) {
    listPanels[1].children[i].addEventListener("click", function() {
      document.querySelector(".drop_down_list:nth-of-type(2) .list_label").innerHTML = this.innerHTML;
      document.querySelector(".drop_down_list:nth-of-type(2) .list_label").classList.add("choosenColor");
      document.querySelector(".panel_left .color").innerHTML = this.innerHTML;
      document.querySelector(".panel_right .color").innerHTML = this.dataset.price;
      this.parentNode.classList.toggle("visible");
        summary();
    })
  }
  for (var i = 0; i < listPanels[2].children.length; i++) {
    listPanels[2].children[i].addEventListener("click", function() {
      document.querySelector(".drop_down_list:nth-of-type(3) .list_label").innerHTML = this.innerHTML;
      document.querySelector(".drop_down_list:nth-of-type(3) .list_label").classList.add("choosenColor");
      document.querySelector(".panel_left .pattern").innerHTML = this.innerHTML;
      document.querySelector(".panel_right .pattern").innerHTML = this.dataset.price;
      this.parentNode.classList.toggle("visible");
      summary();
    })
  }
  transportButton.addEventListener("click", function() {

    if (transportButton.checked) {
      document.querySelector(".panel_left .transport").innerHTML = "Transport";
      document.querySelector(".panel_right .transport").innerHTML = this.dataset.transportPrice;
    } else {
      document.querySelector(".panel_left .transport").innerHTML = "";
      document.querySelector(".panel_right .transport").innerHTML = "";
    }
      summary();
  })
  var summary = function(){
    var sumOfElements = 0;
    var sumElements = document.querySelectorAll(".panel_right .value");
  for (var i = 0; i < sumElements.length; i++) {
    if(sumElements[i].innerHTML !== ""){
      var price = 0;
      price = parseInt(sumElements[i].innerHTML)
      sumOfElements+=price;
    }
  }
  totalSum.innerHTML=sumOfElements
  }


})
