let cursos = [
    {
        
        nombre: 'matematica',
        id: 1,
        duracion: '10 semestres',
        valor: 1800
    },
    {        
        nombre: 'fisica',
        id: 2,
        duracion: 10,
        valor: 400.000
    },
    {        
        nombre: 'Ingles',
        id: 3,
        duracion: '3 semestres',
        valor: 800
    },
    {
        nombre: 'Español',
        id:4,
        duracion:'1 semestre',
        valor : 500
    },
    {
        nombre: 'Programación',
        id:5,
        duracion: '10 semestres',
        valor: 2200
    },
    {
        nombre:'Filosofia',
        id:6,
        duracion: '1 semestre',
        valor: 200
    }
]

let FindCurso = (id) => {
    let resultado = cursos.find(cursos => cursos.id == id);
    return (typeof resultado !== "undefined") ? resultado : "Curso no Existe";
}
var contador = 0
let infoCurso = ( cod, name, duracion, valor) => {
    
    contador = contador + 1
    setTimeout(function () {
        console.log('La materia ', name,' identificada con el cod ', cod, ' tiene un valor de ', valor,'y una duración  de ',duracion)
    }, contador *2000);
}

let CursosActivos = () => {
    for (var i = 0; i < cursos.length; i += 1) {
        infoCurso(cursos[i].nombre,cursos[i].id, cursos[i].duracion, cursos[i].valor);
    }
}


module.exports= {
    FindCurso,
    CursosActivos
    
}


