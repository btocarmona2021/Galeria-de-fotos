import dataFotos from './datos/fotos.js'
const {fotos} = dataFotos;

const contenedorCategorias = document.querySelector('#categorias');
const categorias = document.querySelectorAll('.categoria');
const galeria =document.querySelector('#galeria');
const galeriaFotos = document.querySelector('.galeria__carousel-slides');

contenedorCategorias.addEventListener('click',(e)=>{
    e.preventDefault();
    galeria.classList.add('galeria--active');
    document.body.style.overflow="hidden";
    const categoriaActiva = e.target.dataset.categoria;
    const fotosDeLaCategoria = fotos[categoriaActiva];

    fotosDeLaCategoria.forEach((foto)=>{
        const slide = `<a href="#" class="galeria__carousel-slide">
                            <img class="galeria__carousel-image" src="${foto.ruta}" alt=""/>
                        </a>`;
        galeriaFotos.innerHTML+= slide;

    })
})