class Persona {


    private _Nombre: string;
    private _Apellidos: string;
    private _Edad: number;
    private _DNI: string;
    private _Cumpleanos: Date;
    private _ColorFavorito: string;
    private _Sexo: string;
    private _Direcciones: Direccion[];
    private _Mails: Mail[]; //va en un array porque al estar en plural se da por supuesto que el usuario puede proporcionar más de uno, o incluso ninguno, siendo un array vacío sino ponemos ese campo obligatorio
    private _Telefonos: Telefono[]; //lo mismo de arriba
    private _Notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string, notas: string) {

        this._Nombre = nombre;
        this._Apellidos = apellidos;
        this._Edad = edad;
        this._DNI = dni;
        this._Cumpleanos = cumpleanos;
        this._ColorFavorito = colorFavorito;
        this._Sexo = sexo;
        this._Direcciones = new Array<Direccion> ();
        this._Mails = new Array <Mail> ();
        this._Telefonos = new Array <Telefono> ();
        this._Notas = notas;



    }

    public addDireccion(Calle: string, Numero: number, Piso: number, Letra: string, CodigoPostal: number, Provincia: string): void {
        let DireccionNew = new Direccion(Calle, Numero, Piso, Letra, CodigoPostal, Provincia)
        this._Direcciones.push(DireccionNew)

    }

    public addMail(mailNew:Mail): void { //otro modo de hacer lo mismo
        this._Mails.push(mailNew)
    }




    public addTelefono(Tipo: string, Numero: number): void {
        let telefonoNew = new Telefono(Tipo, Numero);
        this._Telefonos.push(telefonoNew)
    }







    set Nombre(nombre: string) {
        this._Nombre = nombre;
    }
    set Apellidos(apellidos: string) {
        this._Apellidos = apellidos;
    }
    set Edad(edad: number) {
        this._Edad = edad;
    }
    set DNI(dni: string) {
        this._DNI = dni;
    }
    set Cumpleanos(cumpleanos: Date) {
        this._Cumpleanos = cumpleanos;
    }
    set ColorFavorito(colorFavorito: string) {
        this._ColorFavorito = colorFavorito;
    }
    set Sexo(sexo: string) {
        this._Sexo = sexo;
    }
    set Direcciones(direccion: Direccion []) {
        this._Direcciones = direccion;
    }
    set Mails(mail: Mail []) {
        this._Mails = mail;
    }
    set Telefonos(telefono: Telefono[]) {
        this._Telefonos = telefono;
    }
    set Notas(notas: string) {
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

    get Direcciones(){
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