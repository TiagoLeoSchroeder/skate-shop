const imgs = document.getElementById("image");
const img =  document.querySelectorAll("#image img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.lenght - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 870}px)`;
}

setInterval(carrossel, 1800);