const fs = require('fs');

const filePath = 'siswa.json';
let daftar = [];

if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    daftar = JSON.parse(content);
}

// Data siswa Baru
let siswaBaru1 = {
    nama: "Joko",   
    kelas: "Kehutanan",
    nilai: [85, 90, 88],
};
let siswaBaru2 = {
    nama: "Janetesh",
    kelas: "Kedokteran",
    nilai: [82, 79, 91],
};

daftar.push(siswaBaru1);
daftar.push(siswaBaru2);

fs.writeFileSync(filePath, JSON.stringify(daftar, null, 2), 'utf-8');
console.log("Data siswa telah ditambahkan ke dalam file siswa.json");
