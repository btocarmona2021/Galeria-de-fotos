import data from './fotos.js';
const fotos = data.fotos;

export default {
    categorias: [
        {
            id: 'africa',
            nombre: 'Africa',
            cantFotos: fotos.asia.length,
            imagenPortada: './img/africa.jpg'
        },
        {
            id: 'america',
            nombre: 'Ameríca',
            cantFotos: fotos.asia.length,
            imagenPortada: './img/america.jpg'
        },
        {
            id: 'antartida',
            nombre: 'Antártida',
            cantFotos: fotos.asia.length,
            imagenPortada: './img/antartida.jpg'
        },
        {
            id: 'asia',
            nombre: 'Asia',
            cantFotos: fotos.asia.length,
            imagenPortada: './img/asia.jpg'
        },
        {
            id: 'europa',
            nombre: 'Europa',
            cantFotos: fotos.asia.length,
            imagenPortada: './img/europa.jpg'
        },
        {
            id: 'oceania',
            nombre: 'Oceania',
            cantFotos: fotos.asia.length,
            imagenPortada: './img/oceania.jpg'
        }

    ]

}