const fs = require('fs');

let data = fs.readFileSync('siswa.json', 'utf-8');
let siswaArray = JSON.parse(data);

console.log("+----------------------------------+");
console.log("|            Data Siswa            |");
console.log("+----------------------------------+");
siswaArray.forEach((siswa, i) => {
    console.log(`${i + 1}. Nama: ${siswa.nama}`);
    console.log(`   Kelas: ${siswa.kelas}`);
    console.log(`   Nilai: ${siswa.nilai.join(', ')}`);
    console.log("+----------------------------------+");
});
console.log("Data siswa telah ditampilkan dari file siswa.json");