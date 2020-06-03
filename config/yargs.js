const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true, //obligatorio
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true, //obligatorio
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    }).command('borrar', 'Borrar un elemento por hacer', {
        descripcion: {
            demand: true, //obligatorio
            alias: 'd',
            desc: 'Descripción de la tarea por hacer para borrar'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}