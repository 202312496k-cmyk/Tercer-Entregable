/* ===================================
   CARRUSEL TIPO NETFLIX
=================================== */

const posters =
document.querySelectorAll(".poster");

let actual = 0;

/* CAMBIAR POSTER */

function cambiarPoster(index){

    posters.forEach((poster)=>{

        poster.classList.remove("active");

    });

    posters[index].classList.add("active");
}

/* AUTOMATICO */

setInterval(()=>{

    actual++;

    if(actual >= posters.length){

        actual = 0;
    }

    cambiarPoster(actual);

},3000);

/* CLICK */

posters.forEach((poster,index)=>{

    poster.addEventListener("click", ()=>{

        actual = index;

        cambiarPoster(actual);

    });

});