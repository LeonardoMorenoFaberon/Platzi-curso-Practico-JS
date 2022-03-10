class Circunferencia{
    constructor(radio){
        this.radio =  parseFloat(radio);
        this.diametro = this.getDiametro();
        this.perimetro = this.getPerimetro();
        this.area = this.getArea();


    }

    getPerimetro(){
        return 2 * Math.PI * this.radio;
    }
    getArea(){
        return Math.PI * cuad(this.radio )
    }

    getDiametro(){
        return this.radio*2;
    }
}