// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];
const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];
const formularioDescuento =  document.getElementById('formDescuentos1');
const inputPrice     = document.getElementById('inputPrice');
const inputCoupon = document.getElementById("InputCoupon");
const buttonDiscount = document.getElementById('buttonDiscount');
const resultPrice     = document.getElementById('resultPrice');
const apretonDeManosImg =  document.getElementById('apretonDeManosImg');

const borrarResultado =  ()=>{
    resultPrice.innerText="";
}

const isPriceDiscountedWithCoupon = (precioOriginal ,couponValue)=>{
    
    let preciofinal = false;
    let hayDescuento = coupons.find(elemnt=>{ return elemnt.name ==  couponValue });

    if(hayDescuento!=undefined){
        let descuento =  hayDescuento.discount;
        preciofinal =  precioOriginal * (100-descuento)/100
    }else{
        alert(`el cupon ${couponValue} no cuenta con Descuento o no es valido!!`)
    }
    return preciofinal;
}//fin de la funcion calcularPreicoDescuento..

function insertarPrecioConDescuento(preciofinal){
    if(preciofinal!=false){
        resultPrice.innerText = `El precio Con descuento son : $${preciofinal}`
    }

}

function visibilidadAImagen(){
    apretonDeManosImg.classList.remove('display_none');
}
function invisiblilidadAImagen(){
    if(!apretonDeManosImg.classList.contains('display_none') ){
        apretonDeManosImg.classList.add('display_none');
    }
}

//EVENTOS DE BUTTONS Y DE INPUTS:
buttonDiscount.addEventListener('click' , ()=>{
    insertarPrecioConDescuento(
        isPriceDiscountedWithCoupon(inputPrice.value , inputCoupon.value)
                        );
     visibilidadAImagen()

 });


//limpiamos el resultado cada que ingresmos datos nuevos en los inputs
formularioDescuento.addEventListener('keypress', (e)=>{
    borrarResultado();
    invisiblilidadAImagen();
})

