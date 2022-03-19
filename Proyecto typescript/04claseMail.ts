class Mail{
    protected _Tipo:string;
    protected _Direccion:string;

    constructor(tipo:string,direccion:string){

        this._Tipo=tipo;
        this._Direccion=direccion;

    }

    set Tipo(tipo:string){
        this._Tipo=tipo;
    }
    set Direccion(direccion:string){
        this._Direccion=direccion;
    }
    get Tipo(){
        return this._Tipo;
    }
    get Direccion(){
        return this._Direccion;
    }
}