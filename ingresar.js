const {FindCurso,CursosActivos}  = require('../cursos')
const fs = require('fs');
const inscrita = {
    id:{
        demand: true,
        alias:'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    },
    inscri:{
        demand:true,
        alias: 's'
    }
}

const argv = require('yargs')
            .command('Inscripcion','Inscribir usuario',inscrita)
            .argv;

console.log('Ingre su nombre, documento de identidad y cod de la materia')

if(argv.i<6){
    console.log(argv)
}else{
    console.log('La materia no se encontro')
}

try {

cod = argv.i
FindCurso(cod)

}catch (err) {
    console.log('El codigo de la materia no fue encontrado')
}


if(argv.s == 'inscribir'){
    let crearArchivo = () =>{

        texto = 'Usuario '+argv.n+' identificado con el documento '+argv.c +' inscrito a la materia '+argv.id
        
        fs.writeFile('Inscripcion.txt',texto,(err)=>{
            if (err) throw (err)
            console.log('Se ha inscrito correctamente')
        })    
    }    
    crearArchivo()

}else if(argv.inscribir == 'No'){
    console.log('Esta son las listas de materias, seleccione una: ')
    console.log('')
    CursosActivos()
}
