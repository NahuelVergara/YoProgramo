class Operacion {
    protected valorA: number;
    protected valorB: number;
    protected resultado: number;
  
    constructor() {
      this.valorA = 0;
      this.valorB = 0;
      this.resultado = 0;
    }

    set ValorA(value:number){
        this.valorA = value;
    }

    set ValorB(value:number){
        this.valorB = value;
    }

    get Resultado(){
        return this.resultado;
    }
}

class Suma extends Operacion {
    sumar()
    {
        this.resultado = this.valorA + this.valorB;
    }
}

class Resta extends Operacion {
    restar()
    {
        this.resultado = this.valorA - this.valorB;
    }
}

let operacionS = new Suma();
operacionS.ValorA = 45;
operacionS.ValorB = 10;
operacionS.sumar();
console.log('El resultado de la suma es: ' + operacionS.Resultado);

let operacionR = new Resta();
operacionR.ValorA = 45;
operacionR.ValorB = 10;
operacionR.restar();
console.log('El resultado de la resta es: ' + operacionR.Resultado);