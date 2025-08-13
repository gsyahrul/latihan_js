const fs = require('fs');

// Buat object data film baru
const filmBaru = {
    judul: "Sore",
    tahun: 2025,
    genre: "Drama"
};

// Baca isi file film.json
let dataFilm = [];
try {
    const file = fs.readFileSync('film.json', 'utf8');
    dataFilm = JSON.parse(file);
} catch (err) {
    dataFilm = [];
}

// Tambahkan object film baru ke dalam array
dataFilm.push(filmBaru);

// Simpan ulang isi array ke file JSON
fs.writeFileSync('film.json', JSON.stringify(dataFilm, null, 2));

// Tampilkan seluruh film di terminal
console.log("Daftar Film:");
for (let i = 0; i < dataFilm.length; i++) {
    console.log(`${i + 1}. Judul: ${dataFilm[i].judul}, Tahun: ${dataFilm[i].tahun}, Genre: ${dataFilm[i].genre}`);
}