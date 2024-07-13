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
        return;
    };
    e.target.submit();
}

const palabraNoPermitidas = [
    'rendirse',
    'deprimirse',
    'mentir',
    'chepear',
    'robar',
];

function getErrorName (name) {
    return `error${name[0].toUpperCase()}${name.slice(1)}`;
}
function validateForm(form){
    const inputs = form.querySelectorAll(
        "input, textarea, select"
    );
    const errorsObj = {};
    inputs.forEach((inp)=>{
        const inpType = inp.getAttribute("type") || inp.tagName;
        const errorObjName = getErrorName(inp.name);
        const tmpArrErrors = [];
        if(inp.hasAttribute("required")){
            const isEmptyRegex= /^\s*$/;
            if(isEmptyRegex.test(inp.value)) {
                tmpArrErrors.push(`Input ${inp.name}: esta vacio`);
            }
        }
        if(inpType === "email") {
            const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
            if(!emailRegex.test(inp.value)) {
                tmpArrErrors.push(`Correo ${inp.value} no tiene el formato correcto`);
            }
        }
        if(inpType === "TEXTAREA") {
            const cleanText = inp.value.toLowerCase();
            const badWordsFound = palabraNoPermitidas.filter(
                (plb) => {
                    return cleanText.includes(plb);
                }
            );
            if (badWordsFound.length) {
                tmpArrErrors.push(`Descripcion tiene lo siguiente no permitido: ${badWordsFound.join(', ')}`);
            }
        }
        if(tmpArrErrors.length) {
                errorsObj[errorObjName] = {
                    errors: tmpArrErrors,
                    input: inp
                }
        }
    });
    if ( !Object.keys(errorsObj).length ){
        return true;
    }
    updateErrors(errorsObj, form);
    return false;
}

function updateErrors( errorObj, form) {
    const erroObjs = form.querySelectorAll('[id*=error]');
    erroObjs.forEach(o=>{
        o.classList.remove('error');
        if(errorObj[o.id]){
            o.classList.add('error');
            o.innerHTML = errorObj[o.id].errors.join('<br/>');
        }
    });

}
document.addEventListener(
    "DOMContentLoaded",
    page_onload
);


