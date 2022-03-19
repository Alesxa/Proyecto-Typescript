"use strict";
let Persona1 = new Persona("Ibai", "Ackerman", 38, "12345678A", new Date(1983, 10, 11), "amarillo", "hombre", "cliente uno");
Persona1.addDireccion("Galleta", 45, 1, "A", 12345, "Vizcaya");
let MailPersona1 = new Mail("trabajo", "jobibi@gmail.com");
Persona1.addMail(MailPersona1);
Persona1.addTelefono("movil", 666666666);
Persona1.addTelefono("casa", 999999999);
let Persona2 = new Persona("Alexa", "Stark", 36, "8745631I", new Date(1985, 9, 25), "amarillo", "mujer", "cliente dos");
Persona2.addDireccion("Brownie", 3, 5, "I", 32145, "A Coruña");
let MailPersona2 = new Mail("trabajo", "jobale@gmail.com");
Persona2.addMail(MailPersona2);
Persona2.addTelefono("movil", 77889944);
let Persona3 = new Persona("Uhaitz", "Mystark", 3, "45632178A", new Date(2020, 9, 11), "azul", "hombre", "Cliente tres");
Persona3.addDireccion("Natilla", 5, 2, "H", 65412, "León");
let MailPersona3 = new Mail("escuela", "escuelauhaitz@gmail.com");
Persona3.addMail(MailPersona3);
Persona3.addTelefono("movil", 258369147);
let agenda = new Agenda();
agenda.addPersona(Persona1);
agenda.addPersona(Persona2);
agenda.addPersona(Persona3);
console.log("Agenda ");
for (let persona of agenda.Personas) {
    console.log("Nombre: " + persona.Nombre);
    console.log("Apellidos: " + persona.Apellidos);
    console.log("Edad: " + persona.Edad);
    console.log("DNI: " + persona.DNI);
    console.log("Fecha de Nacimiento: " + persona.Cumpleanos.toLocaleDateString());
    console.log("Color favorito: " + persona.ColorFavorito);
    console.log("Sexo: " + persona.Sexo);
    for (let direccion of persona.Direcciones) {
        console.log("Dirección Postal: " + direccion.Calle + " " + direccion.Numero + " " + direccion.Piso + " " + direccion.Letra + " " + direccion.CodigoPostal + " " + direccion.Provincia);
    }
    for (let mails of persona.Mails) {
        console.log("Mails: " + mails.Tipo + " " + mails.Direccion);
    }
    for (let telefonos of persona.Telefonos) {
        console.log("Teléfonos: " + telefonos.Tipo + " " + telefonos.Numero);
    }
    console.log("Notas: " + persona.Notas);
    console.log(""); //esto lo pongo exclusivamente para que se vea en espacio al hacer console.log y separar las personas
}
let personaBuscada = agenda.BuscarPersona("12345678A");
personaBuscada.addDireccion("Mina de Melaza", 45, 2, "B", 12585, "Ank Morpork");
let mailPersonaBuscada = new Mail("trabajo", "jobibiaalli@gmail.com");
personaBuscada.addMail(mailPersonaBuscada);
personaBuscada.addTelefono("movil", 666584666);
personaBuscada.addTelefono("casa", 9999934534599);
console.log("Agenda despues de añadir nueva dirección, mail y teléfono ");
for (let persona of agenda.Personas) {
    console.log("Nombre: " + persona.Nombre);
    console.log("Apellidos: " + persona.Apellidos);
    console.log("Edad: " + persona.Edad);
    console.log("DNI: " + persona.DNI);
    console.log("Fecha de Nacimiento: " + persona.Cumpleanos.toLocaleDateString());
    console.log("Color favorito: " + persona.ColorFavorito);
    console.log("Sexo: " + persona.Sexo);
    for (let direccion of persona.Direcciones) {
        console.log("Dirección Postal: " + direccion.Calle + " " + direccion.Numero + " " + direccion.Piso + " " + direccion.Letra + " " + direccion.CodigoPostal + " " + direccion.Provincia);
    }
    for (let mails of persona.Mails) {
        console.log("Mails: " + mails.Tipo + " " + mails.Direccion);
    }
    for (let telefonos of persona.Telefonos) {
        console.log("Teléfonos: " + telefonos.Tipo + " " + telefonos.Numero);
    }
    console.log("Notas: " + persona.Notas);
    console.log("");
}
//Esto es como lo hice inicialmente uno a uno, al avanzar me di cuenta que era más apropiado crear una agenda y meter a las 3 personas, pero lo dejo por si acaso es necesario demostrar que sabemos hacerlo. Es que en el enunciado de la actividad no me quedo claro 
// console.log("Nombre: " + Persona2.Nombre)
// console.log("Apellidos: " + Persona2.Apellidos)
// console.log("Edad: " + Persona2.Edad)
// console.log("DNI: " + Persona2.DNI)
// console.log("Fecha de Nacimiento: " + Persona2.Cumpleanos.toLocaleDateString())
// console.log("Color favorito: " + Persona2.ColorFavorito)
// console.log("Sexo: " + Persona2.Sexo)
// for (let direccion of Persona2.Direcciones) {
//     console.log("Dirección Postal: " + direccion.Calle + " " + direccion.Numero + " " + direccion.Piso + " " + direccion.Letra + " " + direccion.CodigoPostal + " " + direccion.Provincia)
// }
// for (let mails of Persona2.Mails) {
//     console.log("Mails: " + mails.Tipo + " " + mails.Direccion)
// }
// for (let telefonos of Persona2.Telefonos) {
//     console.log("Teléfonos: " + telefonos.Tipo + " " + telefonos.Numero)
// }
// console.log("Notas: " + Persona2.Notas)
// console.log("")
// console.log("Nombre: " + Persona3.Nombre)
// console.log("Apellidos: " + Persona3.Apellidos)
// console.log("Edad: " + Persona3.Edad)
// console.log("DNI: " + Persona3.DNI)
// console.log("Fecha de Nacimiento: " + Persona3.Cumpleanos.toLocaleDateString())
// console.log("Color favorito: " + Persona3.ColorFavorito)
// console.log("Sexo: " + Persona3.Sexo)
// for (let direccion of Persona3.Direcciones) {
//     console.log("Dirección Postal: " + direccion.Calle + " " + direccion.Numero + " " + direccion.Piso + " " + direccion.Letra + " " + direccion.CodigoPostal + " " + direccion.Provincia)
// }
// for (let mails of Persona3.Mails) {
//     console.log("Mails: " + mails.Tipo + " " + mails.Direccion)
// }
// for (let telefonos of Persona3.Telefonos) {
//     console.log("Teléfonos: " + telefonos.Tipo + " " + telefonos.Numero)
// }
// console.log("Notas: " + Persona3.Notas)
