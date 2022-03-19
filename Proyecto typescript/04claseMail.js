"use strict";
class Mail {
    constructor(tipo, direccion) {
        this._Tipo = tipo;
        this._Direccion = direccion;
    }
    set Tipo(tipo) {
        this._Tipo = tipo;
    }
    set Direccion(direccion) {
        this._Direccion = direccion;
    }
    get Tipo() {
        return this._Tipo;
    }
    get Direccion() {
        return this._Direccion;
    }
}
