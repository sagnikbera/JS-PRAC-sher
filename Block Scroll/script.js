var hide = document.querySelector("#hide")

hide.addEventListener("click" , function(){
    document.body.classList.toggle("overflow-hidden");

    if(hide.innerHTML === 'Block Scroll'){
        hide.innerHTML = 'Unblock Scroll';
        hide.classList.remove("bg-red-600");
        hide.classList.add("bg-green-600");
    }else{
        hide.innerHTML = 'Block Scroll';
        hide.classList.remove("bg-green-600");
        hide.classList.add("bg-red-600");
    }
})