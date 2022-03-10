
    var inputlado_cuadrado =  document.getElementById('inputCuadrado');
    
    var buttonCuadrado=  document.getElementById('idButtonCuadrado');

    var showCuadradoPerimetro =  document.getElementById('showCuadradoPerimetro')
    var showCuadradoArea = document.getElementById('showCuadradoArea');

    var inputBaseTriangulo   = document.getElementById('inputTrianguloBase');
    var inputlado_bTriangulo = document.getElementById('inputTriangulolado_b');
    var inputlado_cTriangulo = document.getElementById('inputTriangulolado_c');
    var showPropsTriangle    =  document.getElementById('showPropsTriangle');
    var buttonTriangulo = document.getElementById('idButtonTriangulo');


    var showTriangleHeight      = document.getElementById('showTriangleHeight');
    var showTriangleArea        = document.getElementById('showTriangleArea');
    var showTrianglePerimeter   =  document.getElementById('showTrianglePerimeter');
    var showTriangleType        =  document.getElementById('showTriangleType');

    var inputCircunferenciaRadio    = document.getElementById('inputCircunferenciaRadio');
    var buttonCircunferencia        = document.getElementById('idButtonCircunferencia');
    var showCircunferenciaDiametro  = document.getElementById('showCircunferenciaDiametro');
    var showCircunferenciaArea      = document.getElementById('showCircunferenciaArea');
    var showCircunferenciaPerimeter = document.getElementById('showCircunferenciaPerimeter');


    var myCuadrado;
    var myTriangle;
    var myCircunferencia

    
    inputBaseTriangulo.value   = 3;
    inputlado_bTriangulo.value = 4;
    inputlado_cTriangulo.value = 5; 


    function cuad(num){
        return Math.pow(num, 2);
    }

    function raiz(num){
        return Math.pow(num , .5);
    }


//Cuadrado :
console.group("cuadrado"); 
console.groupEnd('cuadrado');

//Triangulo:
console.group('triangulo');
console.groupEnd(`triangulo`);

//Circulo
console.group('circulo');
console.groupEnd('circulo');




