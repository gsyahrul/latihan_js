let nilai = [75,88,92]

console.log("1. Nilai Awal :")
nilai.forEach((n, i )=> {
    console.log(`Siswa ${i + 1} : ${n}`)
});
console.log("")

// Menambahkan nilai baru
nilai.push(60);
console.log("2. Setelag nilai ditambakan (push) :")
console.log(nilai);
console.log("")

// Menghapus nilai terakhir
let nilaiTerakhir = nilai.pop();
console.log("3. Setelah nilai terakhir dihapus (pop) :", nilaiTerakhir);
console.log("Nilai sekarang :", nilai);
console.log("")


// Menggunakan map untuk menambah 5 pada setiap nilai
let nilaiBonus = nilai.map((n) => n + 5);
console.log("4. Nilai setelah ditambahkan bones 5 poin (map) :")
console.log(nilaiBonus);
console.log("")

// Menampilkan nilai bonus dengan forEach
console.log("5. Cetak nilai akhir siswa : ")
nilaiBonus.forEach((n, i) => {
    console.log(`Siswa ${i + 1} : ${n}`);
});