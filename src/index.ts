import { Cuenta, CuentaCorriente } from "./bank/model/bank";

console.log("Typescript Practice");
console.log("Banco ABC");

//prueba cuenta corriente
let cuentaCorriente = new CuentaCorriente(1, 0, "BOB");
console.log("Cuenta corriente");
console.log("Numero de cuenta", cuentaCorriente.numero);
console.log("Saldo", cuentaCorriente.saldo);
console.log("Moneda", cuentaCorriente.moneda);