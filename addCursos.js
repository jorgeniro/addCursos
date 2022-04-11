
function capturar (){
    
    cantidadDeCursos = parseInt(prompt(`Buenos días, cuántos cursos desea cargar hoy?`));
    for (let ordenDeCursos =1; ordenDeCursos <= cantidadDeCursos; ordenDeCursos++) {

    function Persona(nombre, duracion, costo){
        this.nombre=nombre;
        this.duracion=duracion;
        this.costo=costo;
    }
    var nombreCapturar = prompt ('Ingrese nombre del curso: ');
    var duracionCapturar =  prompt (`Ingrese duración del curso ${nombreCapturar}:`);
    costoCapturar = parseInt(prompt (`Ingrese precio del curso ${nombreCapturar}:`));
    alert (`El curso ${nombreCapturar} con una duración de ${duracionCapturar} y un precio de $${costoCapturar} ha sido cargado con éxito`); 
    // suma total de los cursos

    
    nuevoCurso = new Persona(nombreCapturar, duracionCapturar, costoCapturar);
    console.log(nuevoCurso);
    agregar();
    }
}

var baseDatos= [];
function agregar(){
    baseDatos.push(nuevoCurso);
    console.log(baseDatos);
   
};

capturar()
alert (`Los ${cantidadDeCursos} cursos han sido cargados con éxito.`);

