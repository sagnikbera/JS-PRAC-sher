let inp = document.querySelector("input");

var data = [
    {name: "Soumik" , src:"https://preview.redd.it/watched-maharaja-such-a-fantastic-screenplay-after-long-v0-ovmi808v77cd1.jpeg?auto=webp&s=004a4d77ec07ecadcb389b3b6298e68f83c38d3d"},
    {name: "Sagnik" , src:"https://i.pinimg.com/736x/b9/8b/f1/b98bf12c0ba09b7cdc880e408b00d350.jpg"},
    {name: "Gopal" , src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/54b3d8175856147.64ba8d9dc4b24.jpg"},
    {name: "Rahul" , src:"https://rukminim2.flixcart.com/image/850/1000/l2dmky80/poster/z/r/e/small-poster-ra-one-sl1251-wall-poster-13x19-inches-matte-original-imagdqezfpzvcz75.jpeg?q=90&crop=false"},
    {name: "Sangita" , src:"https://i.pinimg.com/originals/2f/5a/33/2f5a339dd38c6356e72f137e12ce31c9.jpg"},
    {name: "Harsh" , src:"https://filmfare.wwmindia.com/content/2022/mar/hrithikroshanandrakeshroshan41647236313.jpg"},
]

let pers = " ";

data.forEach(function(elem){
    pers += `<div class="person">
                    <img src="${elem.src}" alt="">
                    <h4>${elem.name}</h4>
                </div>`
})

document.querySelector(".people").innerHTML = pers;

inp.addEventListener("input" , function(){
    let matching = data.filter(function(e){
        return e.name.toUpperCase().startsWith(inp.value.toUpperCase())
    })

    let newUser = "";

    matching.forEach(function(elem){
        newUser += `<div class="person">
                        <img src="${elem.src}" alt="">
                        <h4>${elem.name}</h4>
                    </div>`
    })

    document.querySelector(".people").innerHTML = newUser;
})