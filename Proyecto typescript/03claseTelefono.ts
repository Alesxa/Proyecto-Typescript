class Telefono{
    protected _Tipo:string;
    protected _Numero:number;

constructor(tipo:string,numero:number){

    this._Tipo=tipo;
    this._Numero=numero;

}
set Tipo(tipo:string){
    this._Tipo=tipo;
}
set Numero(numero:number){
    this._Numero=numero;
}
get Tipo(){
    return this._Tipo;
}
get Numero(){
    return this._Numero;
}
}