import { Cuenta } from "./bank";

export class CuentaCorriente extends Cuenta {

    constructor(cuenta: number, saldo: number, moneda: string) {
        super(cuenta, saldo, moneda);
    }
}