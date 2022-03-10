class Triangulo{

    base;
    lado_b;
    lado_c;

    constructor(base , lado_b , lado_c){
        this.base   =  parseFloat(base);
        this.lado_b =  parseFloat(lado_b);
        this.lado_c = parseFloat(lado_c);
        this.area   = this.getArea();
        this.minLado_c =  this.getLongitudMinimaDelLado_c();
        this.altura =  this.getAltura();
        this.perimetro =  this.getPerimetro();
    }

    getAltura_leo(){
        return   raiz(
            cuad(this.lado_c) 
            -cuad(
                    (
                        cuad(this.lado_c)-cuad(this.lado_b)+cuad(this.base)
                    )/
                        (2 * this.base)
                )
            )
       
    }

    getPerimetro(){
        if(this.lado_b !=0 && this.lado_c!=0 && this.base!=0)
        return  parseFloat(this.lado_b) + 
                parseFloat(this.lado_c) + 
                parseFloat(this.base)  ;
    }
    getArea(){
        console.log('estamos en getArea() de la class Triangulo')
                //usando la formula de Heron de alejandria para 
                // hallar el area del triangulo conociendo sus tres lados
                let SemiPerimetro=  this.getPerimetro() / 2;
                let AreaHeron = raiz(
                            SemiPerimetro * 
                            (SemiPerimetro - parseFloat(this.base) ) * 
                            (SemiPerimetro - parseFloat(this.lado_b) ) *
                            (SemiPerimetro -  parseFloat(this.lado_c))
                        )
                return AreaHeron;
        }
    
        
    getAltura(){
        return parseFloat(this.area) * 2 / parseFloat(this.base);
    }    

    getLongitudMinimaDelLado_c(){
        if(this.lado_c!=undefined || this.lado_c=="" || isNaN(this.lado_c)){
            return Math.abs(
                            parseFloat(this.base) - 
                            parseFloat(this.lado_b)
                        ) 
                            + 0.1; 
         
        }else{
            return 'ya es innecesario!!'; 

        }
         
    }
}