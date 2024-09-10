var hide = document.querySelector("#hide");
var tooltip = document.querySelector(".tooltip");

hide.addEventListener("mouseenter" , function(){
    tooltip.classList.toggle("hidden")
})

hide.addEventListener("mouseleave" , function(){
    tooltip.classList.toggle("hidden")
})