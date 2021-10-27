  //Dropdown menu height
  function menuToggle(){
    let menuElements = document.querySelectorAll("ul.mainmenu li:not(.logo):not(#menuToggle)");
    let navigation = document.getElementById('menu');
    console.log(menuElements);

    if(menuElements[0].style.display === "" || menuElements[0].style.display === "none") {
        for (let i=0 ; i < menuElements.length; i++) {
            menuElements[i].style.display = "block";
            navigation.style.height = "auto";
        }
    }else{
        for (let i=0; i< menuElements.length; i++){
            menuElements[i].style.display = "none";
            navigation.style.height = "80px";
        }
    }
}

// Menu change handler functions
const foodItem = document.getElementsByClassName("food_item");

function openBreakfast(breakfast){
  let i;
    let x = document.getElementsByClassName("food_item");
    for (i= 0; i<x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("breakfast").style.display = "grid";
}

function openSalad(salad){
    let i;
    let x = foodItem;
    for (i= 0; i<x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("salad").style.display = "grid";
}

function openPizza(pizza){
    let i;
    let x = foodItem;
    for (i= 0; i<x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("pizza").style.display = "grid";
}

function openDessert(dessert){
    let i;
    let x = foodItem;
    for (i= 0; i<x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("dessert").style.display = "grid";
}

let list = document.getElementById('galleryLinks');
let items = document.getElementsByClassName('cbp-filter-item');
for (i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (){
       let current = document.getElementsByClassName('active');
       current[0].className = current[0].className.replace("active", "");
       this.className += "active";
    });
}
