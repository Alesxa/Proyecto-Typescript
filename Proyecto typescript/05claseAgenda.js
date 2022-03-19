"use strict";
class Agenda {
    constructor() {
        this._Personas = new Array();
    }
    addPersona(personaNew) {
        this._Personas.push(personaNew);
    }
    set Personas(persona) {
        this._Personas = persona;
    }
    get Personas() {
        return this._Personas;
    }
    BuscarPersona(dni) {
        let personaEncontrada = {};
        for (let persona of agenda.Personas) {
            if (dni === persona.DNI) {
                personaEncontrada = persona;
            }
        }
        return personaEncontrada;
    }
}
