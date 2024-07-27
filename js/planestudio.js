function PlanDeEstudio(){
    let classCollections;
    let currentClass;
    let requisitosNodes;
    let aperturaNodes;
    function Init(){
        classCollections = document.querySelectorAll('.class');
        [...classCollections].forEach((element) => {
            element.addEventListener('mouseenter',(e)=>{
                currentClass = e.target;
                classSelected(currentClass);
                //console.log("Mouse Enter:", e.target);
            });
            element.addEventListener('mouseleave',(e)=>{
                currentClass = null;
                //console.log("Mouse Leave:", e.target);
            });
        });
    }

    function classSelected(nodo) {
        const requisitos = (nodo.dataset?.req || "").split('|');
        const apertura = (nodo.dataset?.opens || "").split('|');

        requisitosNodes = requisitos.map((req) => {
            return document.querySelector(`#${req}`);
        });
        aperturaNodes = apertura.map((req) => {
            return document.querySelector(`#${req}`);
        });

        [...requisitosNodes].forEach((element) => {
            element.classList.add('requisito');
        });

        [...aperturaNodes].forEach((element) => {
            element.classList.add('apertura');
        });

        currentClass.classList.add('selected');

    }
    Init();
}

document.addEventListener('DOMContentLoaded', ()=>{
    const planDeEstudio = PlanDeEstudio();
});