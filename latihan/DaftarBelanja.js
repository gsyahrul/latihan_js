// Membuat array kosong
let daftarBelanja = [];

// Menambah tiga barang awal
daftarBelanja.push("Beras");
daftarBelanja.push("Minyak");
daftarBelanja.push("Gula");

// Menambah tiga barang lagi
daftarBelanja.push("Telur");
daftarBelanja.push("Sayur");
daftarBelanja.push("Buah");

// Menghapus "Minyak" dari array
let itemIndex = daftarBelanja.indexOf("Minyak");
if (itemIndex !== -1) {
    daftarBelanja.splice(itemIndex, 1);
}

// Mengurutkan array secara alfabet
daftarBelanja.sort();

// Menampilkan isi array
console.log("Daftar Belanja Ibu Lily :");
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log((i + 1) + ". " + daftarBelanja[i]);
}