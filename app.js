/* let nombre = "Peter Parker";
console.log(nombre);

nombre = "Ben Parker";
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`;

console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

let esMarvel = false;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

edad = 33.001;
console.log(typeof edad);

let superPoder;
console.log(typeof superPoder); // ???

let soyNull = null;
console.log(typeof soyNull); // ???

let symbol1 = Symbol("a");
let symbol2 = Symbol("a");

console.log(typeof symbol1);

console.log(symbol1 === symbol2);
 */
/* var persona = {
    nombre:"Juana",
    apellidos:"Cuesta",
    direccion:{
        "calle":20,
        "carrera":50
    }

}

console.log(persona.direccion)
console.log(persona.direccion.calle)


persona.direccion.zipcode = 1022222

console.log(persona.direccion)
console.log(persona["direccion"]["calle"]) */
/* 

prueba();
function prueba(){
    var a="abelardo";
    console.log(b);
}


var b=20;

function crearPersona(nombre,apellido){
    return{
        nombre:nombre,
        apellido:apellido
    }

}

var persona = crearPersona("Maria", "Lozano");
console.log(persona);
 */


/* 




(function(){
    function Jugador(nombre){
        this.nombre=nombre;
        this.pv=100;
        this.sp=100;
    
        this.curar=function(jugadorObjetivo){
            if (this.sp >=40 ){
                this.sp=this.sp - 40
            }else{
                console.log(this.nombre + "no tiene sp")
            }
            jugadorObjetivo.pv=jugadorObjetivo.pv + 20;
    
        }
    
        this.tirarFlecha=function(jugadorObjetivo){
            if (jugadorObjetivo.pv > 0){
                jugadorObjetivo.pv=jugadorObjetivo.pv-10
            }
            else{console.log(jugadorObjetivo.nombre + "ya está muerto")}
    
        }
    }
    
    
var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");
console.log(gandalf);
console.log(legolas);
gandalf.tirarFlecha(legolas);
//gandalf.curar(legolas);
console.log(gandalf);
console.log(legolas);})
(); */
/* 

function tipoSer(serVivo){
    console.log(serVivo.tipo);
}


animal={
    tipo:"Hervivoro"
}

tipoSer(animal) */

/* 
function miFUncion(a,b,c){
    console.log(arguments);
    console.log(a.Pais)
}

miFUncion({direccion:"Bogota", Pais:"Colombia"}, 20,30);

 */
/* 
function sobreCarga(operacion,rig){
    operacion = operacion.tipo || "No hay tuberia";
    rig = rig.nombre || "No hay rig";
    console.log("La operacion es " + operacion + " y el rig es " + rig);
    console.log(rig.nombre);
}

function sobreCarga2(rig){
    sobreCarga("", rig.nombre);
}


sobreCarga({tipo:"workover",campo:"quifa"},{nombre:"independence",contrato:2050});
//sobreCarga();
sobreCarga2("",{nombre:"independence",contrato:2050}); */
/* 
a=20;
b="20";
c=true;
d="true";
console.log(a==b);
console.log(a===b);
console.log(c===1); */


/* var fecha = new Date();
console.log(fecha);

Date.prototype.sumar= function(dias){
    this.setDate(this.getDate() + dias);
    return this;


};

fecha.sumar(6);
console.log(fecha)


var frase = new String ();
console.log(frase);

String.prototype.frasear = function(contador){
    return this.length;
}

frase = "Hola";
frase.frasear;
console.log(frase.frasear()); */

var numero= new Number();
console.log(typeof(numero));
console.log(numero);


Number.prototype.numeAleatorio=function(min,max){
    return Math.floor(Math.random() *100 + (max-min) /min);
}


console.log(numero.numeAleatorio(2,8));