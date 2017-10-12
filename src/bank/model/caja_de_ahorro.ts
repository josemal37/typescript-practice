import { Cuenta } from "./bank";

export class CajaDeAhorro extends Cuenta {

    private _interes: number;

    constructor(cuenta: number, saldo: number, moneda: string, interes: number) {
        super(cuenta, saldo, moneda);
        this._interes = interes;
    }

    aplicarInteres(): void {
        console.log(`Saldo anterior`, this.saldo);
        this.saldo = this.saldo + this.saldo * this.interes;
        console.log(`Saldo nuevo`, this.saldo);
    }

    get interes() {
        return this._interes;
    }

    set interes(valor: number) {
        this._interes = valor;
    }
}