import { Cuenta, CuentaCorriente, CajaDeAhorro, Direccion } from "./bank";

export class Cliente {

    private _codigo: number;
    private _nombre: string;
    private _direccion: Direccion;
    private _cuentas: Array<Cuenta>;

    constructor(codigo: number, nombre: string, direccion: Direccion) {
        this._codigo = codigo;
        this._nombre = nombre;
        this._direccion = direccion;
        this._cuentas = new Array<Cuenta>();
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(valor: number) {
        this._codigo = valor;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(valor: string) {
        this._nombre = valor;
    }

    get direccion() {
        return this._direccion;
    }

    set direccion(valor: Direccion) {
        this._direccion = valor;
    }

    get cuentas() {
        return this._cuentas;
    }

    set cuentas(valor: Cuenta[]) {
        this._cuentas = valor;
    }

    addCuenta(cuenta: Cuenta) {
        (this._cuentas as Array<Cuenta>).push(cuenta);
    }
}