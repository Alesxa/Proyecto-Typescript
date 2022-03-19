"use strict";
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, provincia) {
        this._Calle = calle;
        this._Numero = numero;
        this._Piso = piso;
        this._Letra = letra;
        this._CodigoPostal = codigoPostal;
        this._Provincia = provincia;
    }
    set Calle(calle) {
        this._Calle = calle;
    }
    set Numero(numero) {
        this._Numero = numero;
    }
    set Piso(piso) {
        this._Piso = piso;
    }
    set Letra(letra) {
        this._Letra = letra;
    }
    set CodigoPostal(codigoPostal) {
        this._CodigoPostal = codigoPostal;
    }
    set Provincia(provincia) {
        this._Provincia = provincia;
    }
    get Calle() {
        return this._Calle;
    }
    get Numero() {
        return this._Numero;
    }
    get Piso() {
        return this._Piso;
    }
    get Letra() {
        return this._Letra;
    }
    get CodigoPostal() {
        return this._CodigoPostal;
    }
    get Provincia() {
        return this._Provincia;
    }
}
