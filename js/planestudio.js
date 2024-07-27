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
            });
            element.addEventListener('mouseleave',(e)=>{
                cleanSelectedNode(currentClass);
                currentClass = null;
            });
        });
    }

    function classSelected(nodo) {
        const requisitos = (nodo.dataset?.req || "").split('|').filter((req) => req !== '');
        const apertura = (nodo.dataset?.opens || "").split('|').filter((req) => req !== '');

        requisitosNodes = requisitos.map((req) => {
            return document.querySelector(`#${req}`);
        }).filter(node=>node!==null);
        aperturaNodes = apertura.map((req) => {
            return document.querySelector(`#${req}`);
        }).filter(node=>node!==null);

        [...requisitosNodes].forEach((element) => {
            element.classList.add('requisito');
        });

        [...aperturaNodes].forEach((element) => {
            element.classList.add('apertura');
        });

        currentClass.classList.add('selected');

    }
    function cleanSelectedNode(node){
        [...requisitosNodes||[]].forEach((element) => {
            element.classList.remove('requisito');
        });

        [...aperturaNodes||[]].forEach((element) => {
            element.classList.remove('apertura');
        });

        currentClass.classList.remove('selected');
    }
    Init();
}

document.addEventListener('DOMContentLoaded', ()=>{
    const planDeEstudio = PlanDeEstudio();
});