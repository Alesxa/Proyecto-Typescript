"use strict";
class Telefono {
    constructor(tipo, numero) {
        this._Tipo = tipo;
        this._Numero = numero;
    }
    set Tipo(tipo) {
        this._Tipo = tipo;
    }
    set Numero(numero) {
        this._Numero = numero;
    }
    get Tipo() {
        return this._Tipo;
    }
    get Numero() {
        return this._Numero;
    }
}
