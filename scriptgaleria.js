// ======================================
// IMÁGENES DE LA GALERÍA
// ======================================

const imagenes = [

    "imagenes/galeria1.webp",

    "imagenes/galeria2.webp",

    "imagenes/galeria3.webp",

    "imagenes/galeria5.webp",

    "imagenes/galeria6.webp",

    "imagenes/galeria7.webp",

    "imagenes/galeria8.webp",

    "imagenes/galeria9.webp",

    "imagenes/galeria10.webp",

    "imagenes/fruta10.webp"
];

// ======================================
// VARIABLES
// ======================================

let indice = 0;

let intervalo;

// ======================================
// INICIAR GALERÍA
// ======================================

function iniciarGaleria(){

    intervalo = setInterval(() => {

        indice++;

        if(indice >= imagenes.length){

            indice = 0;
        }

        document.getElementById("imagen").src =
        imagenes[indice];

    }, 800);
}

// ======================================
// DETENER GALERÍA
// ======================================

function detenerGaleria(){

    clearInterval(intervalo);
}