
buttonCuadrado.addEventListener('click' , ()=>{
    ejecutarCuadrado()
});

function ejecutarCuadrado(){
    instanciarCuadrado();
    f_showCuadradoArea();
    f_showCuadradoPerimetro();
}
function instanciarCuadrado(){
    this.myCuadrado =  new Cuadrado(inputlado_cuadrado.value);
}
function f_showCuadradoArea(){
    showCuadradoArea.innerText =  `Area: ${this.myCuadrado.area}`;
}
function f_showCuadradoPerimetro(){
    showCuadradoPerimetro.innerText = `Perimetro : ${this.myCuadrado.perimetro}`;
}
