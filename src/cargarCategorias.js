import dataCategoria from "./datos/categorias";
const {categorias} = dataCategoria;
const elementoCategoria = document.querySelector('#categorias');

categorias.forEach((categoria) => {
    const nuevaCategoria = document.createElement("a");
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.setAttribute('href','#')
    nuevaCategoria.dataset.categoria= categoria.id;

    const imagen= document.createElement("img");
    imagen.setAttribute("src",categoria.imagenPortada);
    imagen.classList.add('categoria__img');

    const cat_datos= document.createElement('div');
    cat_datos.classList.add('categoria__datos');

    const nombreCategoria =document.createElement('p');
    nombreCategoria.classList.add('categoria__nombre');
    nombreCategoria.innerHTML = categoria.nombre;

    const cantidadFotos =document.createElement('p');
    cantidadFotos.classList.add('categoria__numero-fotos');
    cantidadFotos.innerHTML = `${categoria.cantFotos} fotos`;

    elementoCategoria.appendChild(nuevaCategoria);
    nuevaCategoria.appendChild(imagen);
    nuevaCategoria.appendChild(cat_datos);
    cat_datos.appendChild(nombreCategoria);
    cat_datos.appendChild(cantidadFotos);
});
