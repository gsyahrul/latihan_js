const nasiGoreng = 25000;
const mieGoreng = 22000;
const capcay = 32000;

const subtotal = nasiGoreng + mieGoreng + capcay;
const pembayaran = 100000;
const diskon = subtotal * 0.1; // Diskon 10%
const grandtotal = subtotal - diskon;
const kembalian = pembayaran - grandtotal;

console.log("$node hitungDiskon.js");
console.log("=== Struk Pembelian ===");
console.log(`Nasi Goreng : Rp. ${nasiGoreng}`);
console.log(`Mie Goreng  : Rp. ${mieGoreng}`);
console.log(`Capcay      : Rp. ${capcay}`);
console.log(`-----------------------------`);
console.log(`Subtotal             : Rp. ${subtotal}`);
console.log(`Diskon (10%)         : Rp. ${diskon}`);
console.log(`Grandtotal           : Rp. ${grandtotal}`);
console.log(`Dibayar              : Rp. ${pembayaran}`);
console.log(`Kembalian            : Rp. ${kembalian}`);
