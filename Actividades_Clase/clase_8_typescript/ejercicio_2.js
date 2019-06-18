var numero = 12;
var Numero = /** @class */ (function () {
    function Numero() {
        this.numero_valor = 13;
    }
    Numero.prototype.guardar = function () {
        var variable_local = 14;
    };
    Numero.prototype.suma = function (num1, num2) {
        this.resultado = num1 + num2;
        return this.resultado;
    };
    Numero.sval = 10;
    return Numero;
}());
console.log(numero);
console.log(Numero.sval);
var obj = new Numero();
console.log(obj.numero_valor);
obj.guardar();
//console.log(obj.variable_local); sin sentido
console.log(obj.suma(1, 2));
