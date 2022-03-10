

inputlado_bTriangulo.addEventListener('change', ()=>{
    instanciarTriangulo();
    if(inputlado_cTriangulo.value=="" ||
        inputlado_cTriangulo.value<myTriangle.minLado_c){
        inputlado_cTriangulo.value  = myTriangle.minLado_c;
        inputlado_cTriangulo.classList.add('red');
    }
})

var ladoCTriangSuperaMinimo =  ()=>{
    return inputlado_cTriangulo.value > myTriangle.minLado_c 
}
var ladoCTriangContieneClassRed = ()=>{
    return inputlado_cTriangulo.classList.contains('red');
}

inputlado_cTriangulo.addEventListener('change', ()=>{
      
    if( ladoCTriangSuperaMinimo() && ladoCTriangContieneClassRed() ){
       inputlado_cTriangulo.classList.remove('red'); 
    }
    if( !ladoCTriangSuperaMinimo()  ){
          inputlado_cTriangulo.classList.add('red');
          inputlado_cTriangulo.value = myTriangle.minLado_c;
    }
 });


///////////////////////////////triangulos
 
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

