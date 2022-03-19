"use strict";
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, notas) {
        this._Nombre = nombre;
        this._Apellidos = apellidos;
        this._Edad = edad;
        this._DNI = dni;
        this._Cumpleanos = cumpleanos;
        this._ColorFavorito = colorFavorito;
        this._Sexo = sexo;
        this._Direcciones = new Array();
        this._Mails = new Array();
        this._Telefonos = new Array();
        this._Notas = notas;
    }
    addDireccion(Calle, Numero, Piso, Letra, CodigoPostal, Provincia) {
        let DireccionNew = new Direccion(Calle, Numero, Piso, Letra, CodigoPostal, Provincia);
        this._Direcciones.push(DireccionNew);
    }
    addMail(mailNew) {
        this._Mails.push(mailNew);
    }
    addTelefono(Tipo, Numero) {
        let telefonoNew = new Telefono(Tipo, Numero);
        this._Telefonos.push(telefonoNew);
    }
    set Nombre(nombre) {
        this._Nombre = nombre;
    }
    set Apellidos(apellidos) {
        this._Apellidos = apellidos;
    }
    set Edad(edad) {
        this._Edad = edad;
    }
    set DNI(dni) {
        this._DNI = dni;
    }
    set Cumpleanos(cumpleanos) {
        this._Cumpleanos = cumpleanos;
    }
    set ColorFavorito(colorFavorito) {
        this._ColorFavorito = colorFavorito;
    }
    set Sexo(sexo) {
        this._Sexo = sexo;
    }
    set Direcciones(direccion) {
        this._Direcciones = direccion;
    }
    set Mails(mail) {
        this._Mails = mail;
    }
    set Telefonos(telefono) {
        this._Telefonos = telefono;
    }
    set Notas(notas) {
        this._Notas = notas;
    }
    get Nombre() {
        return this._Nombre;
    }
    get Apellidos() {
        return this._Apellidos;
    }
    get Edad() {
        return this._Edad;
    }
    get DNI() {
        return this._DNI;
    }
    get Cumpleanos() {
        return this._Cumpleanos;
    }
    get ColorFavorito() {
        return this._ColorFavorito;
    }
    get Sexo() {
        return this._Sexo;
    }
    get Direcciones() {
        return this._Direcciones;
    }
    get Mails() {
        return this._Mails;
    }
    get Telefonos() {
        return this._Telefonos;
    }
    get Notas() {
        return this._Notas;
    }
}
