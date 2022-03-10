
    var myCuadrado;

    var inputlado_cuadrado =  document.getElementById('inputCuadrado');
    
    var buttonCuadrado=  document.getElementById('idButtonCuadrado');

    var showCuadradoPerimetro =  document.getElementById('showCuadradoPerimetro')
    var showCuadradoArea = document.getElementById('showCuadradoArea');

    var inputBaseTriangulo   = document.getElementById('inputTrianguloBase');
    var inputlado_bTriangulo = document.getElementById('inputTriangulolado_b');
    var inputlado_cTriangulo = document.getElementById('inputTriangulolado_c');
    var showPropsTriangle =  document.getElementById('showPropsTriangle');
    var buttonTriangulo = document.getElementById('idButtonTriangulo');


    var showTriangleHeight = document.getElementById('showTriangleHeight');
    var showTriangleArea   = document.getElementById('showTriangleArea');
    var showTrianglePerimeter =  document.getElementById('showTrianglePerimeter');
    var showTriangleType =  document.getElementById('showTriangleType');


    function cuad(num){
        return Math.pow(num, 2);
    }

    function raiz(num){
        return Math.pow(num , .5);
    }

    


//Cuadrado :
console.group("cuadrado"); 

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

console.groupEnd('cuadrado');
//Triangulo:
console.group('triangulo');


inputBaseTriangulo.value   = 3;
inputlado_bTriangulo.value = 4;
inputlado_cTriangulo.value = 5; 

var myTriangle;

buttonTriangulo.addEventListener('click' , ()=>{
    ejecutarTriangulo();
});

function ejecutarTriangulo(){
    completeInputsPreInstanceTriangle();
    instanciarTriangulo();
    f_showTriangleArea();
    f_showTriangleHeight();
    f_showTrianglePerimeter();
    f_showTriangleType();
}
function f_showTriangleArea(){
    showTriangleArea.innerText = `Area : ${this.myTriangle.area}`;
}
function f_showTriangleHeight(){
    showTriangleHeight.innerText =  `Height : ${this.myTriangle.altura}`;
}
function f_showTrianglePerimeter(){
    showTrianglePerimeter.innerText =  `Perimetro : ${this.myTriangle.perimetro}`;
}

function f_showTriangleType(){
    showTriangleType.innerText =  `Tipo de Triangulo : ${this.myTriangle.type} `;
}


function instanciarTriangulo(){
    this.myTriangle = new Triangulo(  
                    inputBaseTriangulo.value, 
                    inputlado_bTriangulo.value,
                    inputlado_cTriangulo.value);
}

function completeInputsPreInstanceTriangle(){
    inputBaseTriangulo.value   =  inputBaseTriangulo.value==""? 0:inputBaseTriangulo.value;
    inputlado_bTriangulo.value =  inputlado_bTriangulo.value==""? 0:inputlado_bTriangulo.value;
    inputlado_cTriangulo.value =  inputlado_cTriangulo.value==""? 0:inputlado_cTriangulo.value;
}



console.groupEnd(`triangulo`);

console.group('circulo');

console.groupEnd('circulo');




