var numero = 12;
class Numero  {
    numero_valor = 13;
    static sval = 10;
    resultado:number;

    guardar():void {
        var variable_local = 14;
    }
    suma(num1:number, num2:number):number{
        this.resultado = num1 + num2;
        return this.resultado;
    }
}

console.log(numero);
console.log(Numero.sval);

var obj = new Numero();
console.log(obj.numero_valor);

obj.guardar();
//console.log(obj.variable_local); sin sentido
console.log(obj.suma(1,2));