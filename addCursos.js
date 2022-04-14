class Curso{
    constructor(nombre, duracion, costo){
    this.nombre=nombre;
    this.duracion=duracion;
    this.costo=costo;
    }
}

function capturar (){
    
    cantidadDeCursos = parseInt(prompt(`Buenos días, cuántos cursos desea cargar hoy?`));
    for (let ordenDeCursos =1; ordenDeCursos <= cantidadDeCursos; ordenDeCursos++) {

   
    var nombreCapturar = prompt (`Ingrese nombre del curso numero ${ordenDeCursos}: `);
    var duracionCapturar =  prompt (`Ingrese duración del curso ${nombreCapturar}:`);
    costoCapturar = parseInt(prompt (`Ingrese precio del curso ${nombreCapturar}:`));
    alert (`El curso ${nombreCapturar} con una duración de ${duracionCapturar} y un precio de $${costoCapturar} ha sido cargado con éxito`); 


    
    nuevoCurso = new Curso(nombreCapturar, duracionCapturar, costoCapturar);
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

let opcion = prompt("Ingrese 1 para calcular el precio de un curso o Enter para salir")

while (opcion === "1") {
    const costoCapturar =  parseInt(prompt ('Ingrese costo del curso: '));
    const descuentoCapturar =   parseInt(prompt (`Ingrese el descuento del curso`)); 
    suma = costoCapturar-((descuentoCapturar*costoCapturar)/100);   
    
  totalCapturar = alert(`el valor del curso es $${costoCapturar} con un descuento del %${descuentoCapturar} da un total de = $${suma}`);
    opcion = prompt(`Si desea calcular el costo de otro curso, ingrese "1", si desea agregarle el iva (21%) ingresa "2" o pulse Enter para salir`);
  
}

while (opcion === "2") {
  var totalIva = suma *0.21
  var total = totalIva + suma
  var resultado = alert(`El costo del curso es $${suma} el IVA del 21% tiene un valor de $${totalIva} lo que nos da un total de $${total} `);
  opcion = prompt(`Si desea calcular el costo de otro curso, ingrese "1", si desea agregarle el iva (21%) ingresa "2" o pulse Enter para salir`);
}