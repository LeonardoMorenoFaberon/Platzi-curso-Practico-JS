class Cuadrado{
    constructor(lado){
        this.lado =  lado;
        this.perimetro = this.getPerimetro();
        this.area =  this.getArea();
    }

//perimetro
getPerimetro(){
    return this.lado*4
}
//area
getArea(){
    return  cuad(this.lado) ;
}

}//fin de class Cuadrado