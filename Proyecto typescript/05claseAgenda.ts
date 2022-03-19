class Agenda{
    private _Personas:Persona[];

    constructor(){
        this._Personas=new Array<Persona>();
    
}

public addPersona(personaNew:Persona):void{
    this._Personas.push(personaNew)

}

set Personas(persona: Persona []) {
    this._Personas = persona;
}
get Personas(){
    return this._Personas;
}

public BuscarPersona(dni:string):Persona {
    let personaEncontrada={}as Persona;
    for (let persona of agenda.Personas){
        if (dni===persona.DNI){
            personaEncontrada=persona;
        }
    }
   return personaEncontrada;
}
}


