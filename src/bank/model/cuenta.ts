export abstract class Cuenta {
    private _numero: number;
    private _saldo: number;
    private _moneda: string;

    constructor(numero: number, saldo: number, moneda: string) {
        this._numero = numero;
        this._saldo = saldo;
        this._moneda = moneda;
    }

    get numero() {
        return this._numero;
    }

    set numero(valor: number) {
        this._numero = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor: number) {
        this._saldo = valor;
    }

    get moneda() {
        return this._moneda;
    }

    set moneda(valor: string) {
        this._moneda = valor;
    }
}