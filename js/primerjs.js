// Comentario Linea
/*
Comentario de Bloque
 */

var intEdad = 30;
const strEdad = "Viejo";
let arrEdades = [1,2,3,4];

if( intEdad === "30" ) {
    //Entra o NO
    console.log("Entro");
} else {
    console.log("No Entro");
}

switch (strEdad) {
    case "Viejo":
    case "3raEdad":
        console.log("Entro Viejo");
        break;
    case "30":
        console.log("Entro 30");
        break;
    default:
        console.log("No Entro");
}
let v = false;
if (v) {
    if (x) {
        if (y) {
            consol.log("Haga Algo");
        }
    }
}
v = true;
let x = false;
let y = true;

if (v && x && y) {
    console.log("Haga Algo");
}
if (v || x || y) {
    console.log("Haga Algo si alguna de las variables es verdadera");
}

for (let i = 0 ; i < arrEdades.length ; i++) {
    console.log(arrEdades[i]);
}
let intControl = 0;
while (intControl < 100) {
    intControl ++;
}

do {
    intControl --;
} while (intControl > 0);

// Estructuras de Datos en Javascrip

const arrNombre = [1, true, "Hola"];

const arrPalabras = [
    ["1","2","3","4"],
    ["5","6","7","8"]
];

for (let i=0; i<arrPalabras.length;i++) {
    for (let j=0; j<arrPalabras[i].length; j ++){
        console.log(
            `i:${i} j:${j} ->${arrPalabras[i][j]}`
        );
    }
}

console.log('--------------------');
arrPalabras.forEach((elm, i)=>{
    elm.forEach((pal, j)=>{
        console.log(`i:${i} j:${j} ->${pal}`)
    })
});

const arrNumeros = arrPalabras.map(
    (elm)=> {
        return elm.map((pal)=>{return Number(pal)});
    }
);
// OLog   Que Es Algoritmo de Burbuja  OLog(n^n);
console.log('arrPalabras', arrPalabras);
console.log('arrNumeros', arrNumeros);

const arrNonSorted = [15, 8, 10, 100, 20, 12, 33, 500];
const sortedArray = [...arrNonSorted].sort(
    (objA, objB)=>{return objA-objB}
);
const rsortedArray = [...arrNonSorted].sort(
    (objA, objB)=>{return objB-objA}
);
console.log('sortedArray',sortedArray);
console.log('rsortedArray',rsortedArray);

const lessThan30 = arrNonSorted.filter(
    (obj)=>{
        return obj < 30;
    }
);
console.log('lestThan30', lessThan30);

console.log(
    arrNumeros.map(elm=>elm.join(',')).join('\n\r')
)

// 
const objPersona = {
    nombre: 'Orlando',
    appellido: 'Betancourth',
    correo: 'obetancourthunicah@gmail.com',
    colores: ['red','green','blue'],
    techs: ['web', 'rust', 'go', 'crypto'],
    libros: [
        {nombre:'Digital Fortress', autor:'Dan Brown'},
        {nombre:'The Phoenix Project', autor: 'Gene Kim'},
        {nombre: 'The Goal', autor: 'Eliyahu Goldratt'}
    ]
}

console.log('json', objPersona);

console.log('Nombre:', objPersona.nombre);

console.log(
    'Libros',
    objPersona.libros.map(e=>e.nombre).join(', ')
);

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((data)=>{
        console.log("httpResponse", data);
        return data.json();
    }).then(body=>{
        console.log("jsonBody", body);
    })
    .catch((error)=>{
        console.log(error);
});

/*------Manipulación DOM--------------*/

function page_onload(){
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", onForm_submit);
}

function onForm_submit(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("e", e);
    if (!validateForm(e.target)) {
        alert('No se enviara el Fomulario');
        return;
    };
    alert('Se enviara el Fomulario');
}

function validateForm(form){
    const inputs = form.querySelectorAll(
        "input, textarea, select"
    );
    console.log("Inputs", inputs);
    inputs.forEach((inp)=>{
        const inpType = inp.getAttribute("type");
        if(inp.hasAttribute("required")){
            const isEmptyRegex= /^\s*$/;
            if(isEmptyRegex.test(inp.value)) {
                console.log(`Input ${inp.name}: esta vacio`);
            }
        }
        if(inpType === "email") {
            const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
            if(!emailRegex.test(inp.value)) {
                console.log(`Correo ${inp.value} no tiene el formato correcto`);
            }
        }
        console.log(
            `input ${inp.name}: ${inp.value}`
        );
    });
    return false;
}

document.addEventListener(
    "DOMContentLoaded",
    page_onload
);


