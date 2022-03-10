
buttonCircunferencia.addEventListener('click',
    ()=>{
        ejecutarCircunferencia();
    });

function ejecutarCircunferencia(){
    instanciarCircunferencia();
    f_showCircunferenciaArea();
    f_showCircunferenciaDiametro();
    f_showCircunferenciaPerimeter();
}

function instanciarCircunferencia(){
    myCircunferencia =  
    new Circunferencia(inputCircunferenciaRadio.value);
}
function f_showCircunferenciaArea(){
    showCircunferenciaArea.innerText      = `Area : ${myCircunferencia.area}`;
}
function f_showCircunferenciaDiametro(){
    showCircunferenciaDiametro.innerText  = `Diametro : ${myCircunferencia.diametro}`;
}
function f_showCircunferenciaPerimeter(){
    showCircunferenciaPerimeter.innerText = `Perimetro : ${myCircunferencia.perimetro}`;
}