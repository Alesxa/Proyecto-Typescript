class Direccion {
    protected _Calle: string;
    protected _Numero: number;
    protected _Piso: number;
    protected _Letra: string;
    protected _CodigoPostal: number;
    protected _Provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, provincia: string) {

        this._Calle = calle;
        this._Numero = numero;
        this._Piso = piso;
        this._Letra = letra;
        this._CodigoPostal = codigoPostal;
        this._Provincia = provincia;
    }

    set Calle(calle:string){
        this._Calle=calle;
    }
    set Numero(numero:number){
        this._Numero=numero;
    }
    set Piso(piso:number){
        this._Piso=piso;
    }
    set Letra(letra:string){
        this._Letra=letra;
    }
    set CodigoPostal(codigoPostal:number){
        this._CodigoPostal=codigoPostal;
    }
    set Provincia(provincia:string){
        this._Provincia=provincia;
    }
    get Calle(){
        return this._Calle;
    }
    get Numero(){
        return this._Numero;
    }
    get Piso(){
        return this._Piso;
    }
    get Letra(){
        return this._Letra;
    }
    get CodigoPostal(){
        return this._CodigoPostal;
    }
    get Provincia(){
        return this._Provincia;
    }
}  
