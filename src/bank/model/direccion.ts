export class Direccion {

    private _pais: string;
    private _ciudad: string;
    private _calle: string;

    constructor(pais: string, ciudad: string, calle: string) {
        this._pais = pais;
        this._ciudad = ciudad;
        this._calle = calle;
    }

    get pais() {
        return this._pais;
    }

    set pais(valor: string) {
        this._pais = valor;
    }

    get ciudad() {
        return this._ciudad;
    }

    set ciudad(valor: string) {
        this._ciudad = valor;
    }

    get calle() {
        return this._calle;
    }

    set calle(valor: string) {
        this._calle = valor;
    }
}