//Tipos de variables
// var tipoVar;
// let tipoLet;
// const tipoConst;



//Scope
    // contipo de variable var
// var musicaVar =  "hip";

// if (musicaVar) {
//      var musicaVar = "rap";
//      console.log('dentro del if:',musicaVar);
// }

// console.log('fuera del if:', musicaVar);

 // contipo de variable let o const es lo mismo en este caso

//  let musicaLet =  "hip";

//  if (musicaLet) {
//      let musicaLet = "rap";
//      console.log('dentro del if:',musicaLet);
//  }

//  console.log('fuera del if:', musicaLet);




//TEMPLATES STRING

// const nombre ='Juan';
// const trabajo='desarrollador';
//CONCATENAR EN JAVASCRIPT
// ` se llaman acentuacion grabe
// console.log('Nombre:'+ nombre+', Trabajo:'+trabajo);
// console.log(`Nombre: ${nombre}, Trabajo:${trabajo}`); 

//CONCATENAR CON MULTIPLES LINEAS

// const contenedorAPP = document.querySelector('#app');
// let html = '<ul>'+
//                 '<li>Nombre'+nombre+'</li>'+
//                 '<li>Nombre'+trabajo+'</li>'+
//             '</ul>';

// let html = `
// <ul>
//     <li>Nombre ${nombre} </li>
//     <li>Nombre ${trabajo} </li>
// </ul>
// `;
// contenedorAPP.innerHTML=html;



//fuction declaration

// function saludar(nombre){
//     console.log('Bienbenido'+nombre);
// }
// saludar('Juan');

// funciones expression

// const cliente = function(nombreCliente){
//     console.log('Mostrando datos del cliente' + nombreCliente);
// }
// cliente('Juan');





// parametros por default en fuction declaration

// function actividad(nombre='Jose', actividad='desarrolar software'){
//     console.log(`La persona ${nombre} esta realizando la actividad de ${actividad}`);
// }

// actividad('Juan','desarrollo');
// actividad();


// parametros por default en fuction Expression

// const actividad = function (nombre='Jose', actividad='desarrolar software'){
//     console.log(`La persona ${nombre} esta realizando la actividad de ${actividad}`);
// }

// actividad('Juan','desarrollo');
// actividad();

// arrow function
// const viajando = (pais) =>{
//     return console.log(`Viajando a la ciudad de ${pais}`);
// }

// let viaje= viajando('USA');




// objetos

// objetos literal

// const persona ={
//     edad:80,
//     nombre:'juan'
// }

// console.log(persona);



// objetos creaters

// fuction Tareas(nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia= urgencia;
// }
// const tarea =new Tareas('estudiar','alto');
// console.log(tarea);



// LOS PROTOTYPE

// function Tarea (nombre, urgencia) {
//     this.nombre= nombre;
//     this.urgecia= urgencia;
// }
// ------- Se agrega el prototype a la funcion
// Tarea.prototype.persona= function(){
//     return `El personal Juan tiene la tarea de ${this.nombre} y el urgencia es ${this.urgecia}`;
// }
// const usuario = new Tarea('guillermo','media')
// console.log(usuario);
// console.log(usuario.persona());






// DESTRUCTURING DE Object
//---------------- es la manera de extraer datos o variables de un objeto
// const aprendiendoJS={
//     version:{
//         nueva:'ES6',
//         anterior:'ES5'
//     },
//     framework:['React','VueJS','Angular']
// }

// let {nueva}=aprendiendoJS.version;
// console.log(nueva);
// //para el arreglo
// let {framework}=aprendiendoJS;
// console.log(framework);





// object literal enhacement
//-------------- es la manera de agregar variables aun objeto
// const banda ='cartel de santa';
// const genero='hip hop';
// const canciones=['suena','mamalona','nada'];
//forma anterior o vieja
// const cartel ={
//     banda: banda,
//     genero: genero,
//     canciones:canciones
// }
// console.log(cartel);
//forma nueva
// const cartel = {banda,genero,canciones};
// console.log(cartel);




// FUNCIONES EN UN OBJETO
// ----------- es la manera de agregar funciones o metodos a un objeto

// const persona={
//     nombre:'Guillermo',
//     apellido:'Barajas',
//     edad:'20',
//     mostrarInfoPersona(){
//         console.log(`el usuario ${this.nombre} ${this.apellido} tiene ${this.edad} años`);
//     }
// }

// persona.mostrarInfoPersona();



// Arreglos MAP y object.keys
//---------- la menra de usar map y leer un arreglo

// const carrito =['producto1','producto2','producto3'];
// console.log(carrito);

// const appcontenedor = document.querySelector('app');
// appcontenedor.innerHTML = carrito;




// metodos para arreglos

// const persona =[
//     {nombre:'Guillermo',apellido:'barajas',edad:23, aprendiendo:'javaScript'},
//     {nombre:'Guillermo',apellido:'barajas',edad:23, aprendiendo:'javaScript'},
//     {nombre:'Guillermo',apellido:'barajas',edad:30, aprendiendo:'javaScript'},
//     {nombre:'Guillermo',apellido:'barajas',edad:23, aprendiendo:'javaScript'},
//     {nombre:'Guillermo',apellido:'barajas',edad:23, aprendiendo:'javaScript'}
// ];

// console.log(persona);
// mayores de 28años
// const mayores = persona.filter(persona=>{
//     return persona.edad > 28;
// })

// console.log(mayores);

// que aprende guillermo
// const Guillermo = persona.find(persona=>{
//     return persona.nombre === 'Guillermo';
// })

// console.log(Guillermo);

// sumar la edad de todas las personas
// let total = persona.reduce(('edadTotal','persona')=>{
//     return edadTotal + persona.edad;
// })

// console.log(total);



//-------------------------------EJERCICIO--------------------///////////////////////////////////




// Dada una lista de números de teléfono, determine si es consistente en el sentido de 
// que ningún número en la lista es el prefijo de otro número en la lista.
// por ejemplo
// Para números = ["911", "9876543", "9112345"], la salida debe ser
// prefixFreePhones(numbers) = false.
// En este caso, no es posible llamar a la tercera persona en una lista, porque el sistema 
// dirigiría su llamada al primer número tan pronto como marcó los primeros tres dígitos del tercer 
// número de teléfono. Entonces esta lista no es consistente.
// [límite de tiempo de ejecución] 4 segundos (js)
// Todos los números son únicos.

// Devuelve verdadero si ningún número en la lista dada de números de teléfono 
// es el prefijo de otro número en la lista, de lo contrario devuelve falso.


// VERSION 1
// const telefonos =['911','9876543','9112345'];
// for (let i = 0; i < telefonos.length; i++) {
//     const element =telefonos[i];
//     const element2 = telefonos.reverse();
     //console.log("obtiene la primer posicion del arreglo y le realiza un reverse" + element, element2);
    // for (let a =0; a< element2.length;a++){
    //     const dat = element2[a];
        // console.log("obtiene la primer posicion del arreglo en rivert" + element, dat);
//         if (element.includes(dat) && element != dat) {
//             console.log(false, element, dat);
//         }else{
//             console.log(true);
//         }
//     }
// }

// VERSION 2
// const telefonos =['911','9876543','9112345'];
// for (let i = 0; i < telefonos.length; i++) {
//     const element =telefonos[i];
//     const element2 = telefonos;
     //console.log("obtiene la primer posicion del arreglo y le realiza un reverse" + element, element2);
    // for (let a =0; a< element2.length;a++){
    //     const dat = element2[a];
        // console.log("obtiene la primer posicion del arreglo en rivert" + element, dat);
//         if (element.includes(dat) && element != dat) {
//             console.log(false, element, dat);
//         }else{
//             console.log(true);
//         }
//     }
// }


// VERSION 3
// const telefonos =['911','9876543','9112345'];
// for (let i = 0; i < telefonos.length; i++) {
//     const element =telefonos[i];
//     console.log("obtiene la primer posicion I " + element);
//     for (let a =0; a< telefonos.length;a++){
//         const dat = telefonos[a];
//         console.log("obtiene la posicion de A "+dat);
//         console.log(element, dat);
//         if (dat.includes(element) && element != dat) {
//             console.log(false, element, dat);
//             a=2;
//             i=2;
//             break;
//         }else{
//             console.log(true);
//         }
//     }
// }

// VERSION 4

// const telefonos ={
//     telefono:['911','9876543','9112345'],
//     tele(){
//         this.telefono.map(tel=>{
//             this.telefono.map(pos=>{
//                 if (pos.includes(tel) && pos != tel) {
//                     console.log(false, tel, pos);
//                 }else{console.log(true);}
//             }); 
//         });
//     }
// }
// telefonos.tele();





// --------------PROMESAS---------------

// const aplicacionDescuento = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let descuento = false;
//         if (descuento) {
//             resolve('Descuento aplicado')
//         } else {
//             reject('No se pude aplicar el descuento')
//         }
//     },3000);
// })
// aplicacionDescuento.then(resultado=>{
//     console.log(resultado);
// }).catch(error =>{
//     console.log(error);
// })




// -------AJAX----------------- CONSUME UN API--------------

// const descargarUsuarios = cantidad => new Promise((resolve,reject)=>{
//     // pasar la cantidad a la api
//     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;
//     // llamado AJAX
//     const xhr = new XMLHttpRequest();
//     // abrir la conexion
//     xhr.open('GET', api, true);
//     // on load
//      xhr.onload=()=>{
//          if (xhr.status ===200) {
//              resolve(JSON.parse(xhr.responseText).results);
//          } else {
//              reject(Error(xhr.statusText));
//          }
//      }
    // opcional error
    //  xhr.onerror = (error)=> react(error);
    // send
    //  xhr.send();
// })

// descargarUsuarios(10).then(
//     miembros => imprimirHTML(miembros),
//     error => console.error(new Error('Hubo un error' + error))
//  )

// function imprimirHTML(usuarios){
//     let html='';
//     usuarios.forEach(usuario => {
//         html +=`
//             <li>
//                 Nombre: ${usuario.name.first} ${usuario.name.last}
//                 pais: ${usuario.nat}
//                 imagen:
//                     <img src="${usuario.picture.medium}">
//             </li>
//         `;
//     });
//     const contenedorAPP = document.querySelector('#app');
//     contenedorAPP.innerHTML = html;
// }






// PROGRAMACION ORIENTADA A OBJETOS EN JS 

// ----------------- CUANDO PASAS UNA FUNCOIN A UNA CLASE SE COMBIERTE EN METODO

// class Tarea{
//     constructor(nombre, prioridad){
//         this.nombre = nombre;
//         this.prioridad = prioridad;
//     }
//      mostrar(){ //esto es un metodo que esta dentro de la clase
//         console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//     }
// }

// // crear los objetos
// let tarea1 = new Tarea('Guillermo','Alta');

// console.log(tarea1.mostrar());






// COMO HEREDAR UNA CLASE

// class Tarea{
//     constructor(nombre, prioridad){
//         this.nombre = nombre;
//         this.prioridad = prioridad;
//     }
//      mostrar(){ //esto es un metodo que esta dentro de la clase
//         console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//     }
// }

// class ComprasPen extends Tarea{
//     constructor(nombre, prioridad, cantidad){
//         super(nombre, prioridad);
//         this.cantidad = cantidad;
//     }
// }

// // crear los objetos
// let tarea1 = new Tarea('Guillermo','Alta');
// let compra = new ComprasPen('juan','alta','3')
// console.log(tarea1.mostrar());
// console.log(compra);





// IMPORTAR MODULOS EN JS ES6
// import {tarea, tareaCompletada} from './tareas'

// console.log(tarea,tareaCompletada); 






// ----------------EJERCICIOS-----------------------

// 1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.
// ----------------FORMA 1
// const propiedadesUsuarios = {
//     nombre:prompt('Ingresa tu nombre completo'),
//     edad:prompt('Ingresa tu edad'),
//     permiso:"NO",
//     usuarios(){
//         if (this.edad > 18) {
//             this.permiso = "SI";
//             alert(`El usuario ${this.nombre} tiene la edad de ${this.edad} años, por lo tanto ${this.permiso} tiene permiso para conducir`);
//         } else {
//             this.permiso = "NO";
//             alert(`El usuario ${this.nombre} tiene la edad de ${this.edad} años, por lo tanto ${this.permiso} tiene permiso para conducir`);
//         }
//     }
// }
// propiedadesUsuarios.usuarios();
// -----------------FORMA 2
// function usuarios() {
//     let nombre = prompt('Ingresa tu nombre completo');
//     let edad = prompt('Ingresa tu edad');
//     let permiso = "NO";
//     if (edad > 18) {
//         permiso = "SI";
//         alert(`El usuario ${nombre} tiene la edad de ${edad} años, por lo tanto ${permiso} tiene permiso para conducir`);
//     } else {
//         permiso = "NO";
//         alert(`El usuario ${nombre} tiene la edad de ${edad} años, por lo tanto ${permiso} tiene permiso para conducir`);
//     }
// }



