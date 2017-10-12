import { Cuenta, CuentaCorriente, CajaDeAhorro } from "./bank/model/bank";

console.log("TYPESCRIPT PRACTICE");
console.log("BANCO ABC");

//Prueba de cuenta corriente
let cuentaCorriente = new CuentaCorriente(1, 0, "BOB");
console.log("CUENTA CORRIENTE");
console.log("Numero de cuenta", cuentaCorriente.numero);
console.log("Saldo", cuentaCorriente.saldo);
console.log("Moneda", cuentaCorriente.moneda);

//Prueba de Caja de ahorro
let cajaDeAhorro = new CajaDeAhorro(2, 100, "BOB", 0.03);
console.log("CAJA DE AHORRO");
console.log("Número de cuenta", cajaDeAhorro.numero);
console.log("Saldo", cajaDeAhorro.saldo);
console.log("Moneda", cajaDeAhorro.moneda);
console.log("Interes", cajaDeAhorro.interes);
//Aplicando interes
console.log("Aplicando interes");
cajaDeAhorro.aplicarInteres();