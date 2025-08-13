// 1. Buat array kosong
let buah = [];

// 2. Tambahkan data buah secara berurutan dengan .push()
buah.push("Apel");
buah.push("Mangga");
buah.push("Jeruk");
buah.push("Semangka");
buah.push("Pisang");
buah.push("Anggur");
buah.push("Nanas");

// 3. Urutkan array secara alfabet
buah.sort();

// 4. Tampilkan semua elemen array dengan nomor urut
for (let i = 0; i < buah.length; i++) {
    console.log(`${i + 1}. ${buah[i]}`);
}