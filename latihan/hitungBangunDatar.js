function hitungLuasPersegi(sisi) {
    return sisi * sisi;
}
function hitungKelilingPersegi(sisi) {
    return 4 * sisi;
}
function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
function hitungKelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}
function hitungLuasLingkaran(jari) {
    return 3.14 * jari * jari;
}
function hitungKelilingLingkaran(jari) {
    return 2 * 3.14 * jari;
}
function hitungLuasSegitigaSamaSisi(alas, tinggi) {
    return 0.5 * alas * tinggi;
}
function hitungKelilingSegitigaSamaSisi(sisi) {
    return 3 * sisi;
}

// Nilai tetap sesuai soal
const sisiPersegi = 8;
const panjangPP = 9, lebarPP = 3;
const jariLingkaran = 6;
const alasSegitiga = 6, tinggiSegitiga = 4, sisiSegitiga = 6;

// Output
console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====\n");

console.log(">> Luas Bangun Datar <<");
console.log(`Luas Persegi Dengan Sisi ${sisiPersegi} Adalah ${hitungLuasPersegi(sisiPersegi)}`);
console.log(`Luas Persegi Panjang Dengan Panjang ${panjangPP} Dan Lebar ${lebarPP} Adalah ${hitungLuasPersegiPanjang(panjangPP, lebarPP)}`);
console.log(`Luas Lingkaran Dengan Jari - Jari ${jariLingkaran} Adalah ${hitungLuasLingkaran(jariLingkaran).toFixed(2)}`);
console.log(`Luas Segitiga Dengan Alas ${alasSegitiga} Dan Tinggi ${tinggiSegitiga} Adalah ${hitungLuasSegitigaSamaSisi(alasSegitiga, tinggiSegitiga)}`);

console.log("\n>> Keliling Bangun Datar <<");
console.log(`Keliling Persegi Dengan Sisi ${sisiPersegi} Adalah ${hitungKelilingPersegi(sisiPersegi)}`);
console.log(`Keliling Persegi Panjang Dengan Panjang ${panjangPP} Dan Lebar ${lebarPP} Adalah ${hitungKelilingPersegiPanjang(panjangPP, lebarPP)}`);
console.log(`Keliling Lingkaran Dengan Jari - Jari ${jariLingkaran} Adalah ${hitungKelilingLingkaran(jariLingkaran).toFixed(2)}`);
console.log(`Keliling Segitiga Dengan Sisi ${sisiSegitiga} Adalah ${hitungKelilingSegitigaSamaSisi(sisiSegitiga)}`);
