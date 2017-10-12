import { Cuenta, CuentaCorriente, CajaDeAhorro, Direccion, Cliente } from "./bank/model/bank";

console.log("TYPESCRIPT PRACTICE");
console.log("BANCO ABC");

//Prueba de cuenta corriente
let cuentaCorriente = new CuentaCorriente(1, 0, "BOB");
console.log("CUENTA CORRIENTE");
console.log("Número de cuenta", cuentaCorriente.numero);
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

//Prueba de dirección
let direccion = new Direccion("Bolivia", "Cochabamba", "Reza");
console.log("DIRECCIÓN");
console.log("Pais", direccion.pais);
console.log("Ciudad", direccion.ciudad);
console.log("Calle", direccion.calle);

//Prueba de cliente
let cliente = new Cliente(1, "Jose", direccion);
console.log("CLIENTE");
console.log("Código",cliente.codigo);
console.log("Nombre",cliente.nombre);
console.log("Dirección",cliente.direccion);
console.log("Cuentas",cliente.cuentas);
console.log("Añadiendo cuenta corriente");
cliente.addCuenta(cuentaCorriente);
console.log("Cuentas",cliente.cuentas);
console.log("Añadiendo caja de ahorro");
cliente.addCuenta(cajaDeAhorro);
console.log("Cuentas",cliente.cuentas);