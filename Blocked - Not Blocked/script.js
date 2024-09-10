const block = document.querySelector("#blocked");
const unblock = document.querySelector("#unblocked");

block.addEventListener("click" , function(){
    localStorage.setItem("block" , true);
    show();
})

unblock.addEventListener("click" , function(){
    localStorage.setItem("block" , false);
    show();
})

function show(){
    if(localStorage.getItem("block") === 'false'){
        document.querySelector("#status span").textContent = "Not Blocked";
    }else{
        document.querySelector("#status span").textContent = "Blocked";
    }
}

show();