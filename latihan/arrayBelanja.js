// Array sepatu dengan nama dan harga
const sepatu = [
    { nama: "New Balance NB530", harga: 390000 },
    { nama: "Nike Vomero 5", harga: 350000 },
    { nama: "Adidas Samba", harga: 180000 },
    { nama: "Onitsuka Tiger Mexico", harga: 420000 }
];

// Menampilkan daftar sepatu dan menghitung total belanja
console.log("===== Rincian Belanja Sepatu =====");
let totalBelanja = 0;
for (let i = 0; i < sepatu.length; i++) {
    console.log((i + 1) + ". " + sepatu[i].nama + " - Rp. " + sepatu[i].harga);
    totalBelanja = totalBelanja + sepatu[i].harga;
}

// Menentukan diskon
let diskon = 0;
if (totalBelanja >= 800000) {
    diskon = 0.15;
} else if (totalBelanja >= 500000) {
    diskon = 0.10;
} else if (totalBelanja >= 250000) {
    diskon = 0.05;
}

// Menghitung total setelah diskon
let potongan = totalBelanja * diskon;
let totalSetelahDiskon = totalBelanja - potongan;

// Pembayaran dan kembalian
let pembayaran = 1200000;
let kembalian = pembayaran - totalSetelahDiskon;

// Menampilkan hasil akhir
console.log("\nTotal Belanja = Rp. " + totalBelanja);
console.log("Diskon = Rp. " + potongan);
console.log("Total Setelah Diskon = Rp. " + totalSetelahDiskon);
console.log("Pembayaran = Rp. " + pembayaran);
console.log("Kembalian = Rp. " + kembalian);