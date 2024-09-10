var btn = document.querySelector("#getUser")

function getNewUser(){
    fetch(`https://randomuser.me/api/`)

.then(raw=>raw.json())
.then(result => {
    const {name , email, gender ,picture} = result.results[0];

    document.querySelector("#parent").innerHTML += `<div class="class w-60 p-4 rounded-md bg-zinc-800">
                <div class="w-32 h-32 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
                    <img src="${picture.
medium}" class="w-full h-full fit-cover" alt="">
                </div>
                <h3 class="font-bold text-2xl">${name.first}</h3>
                <h5 class="font-semibold text-sm opacity-60">${gender}</h5>
                <h6 class="font-semibold text-sm opacity-40">${email}</h6>
                <p class="mt-5 text-xs font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt dolor eaque quibusdam non sunt, sed voluptas debitis consequatur id aperiam repudiandae odio corporis nihil, aliquid adipisci. Facere, vitae quas?</p>
            </div>`
})
}

btn.addEventListener("click" , function(){
    getNewUser();
})

 