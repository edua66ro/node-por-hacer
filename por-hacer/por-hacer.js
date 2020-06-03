const fs = require('fs');

let listaPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listaPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {
        listaPorHacer = require('../db/data.json');
    } catch (error) {
        listaPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listaPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listaPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

//método realizado por mi, funciona perfecto.
// const borrar = (descripcion) => {
//     cargarDB();
//     let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
//     if (index >= 0) {
//         listaPorHacer.splice(index, 1);
//         guardarDB();
//         return true;
//     } else {
//         return false;
//     }

// }

//método profesor
const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listaPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listaPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listaPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}