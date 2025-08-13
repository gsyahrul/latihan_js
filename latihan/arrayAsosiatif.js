// Data tinggi badan disimpan dalam array berisi objek
const dataTinggi = [
    { nama: "Rose", tinggi: 178 },
    { nama: "Magnolia", tinggi: 153 },
    { nama: "Daisy", tinggi: 165 },
    { nama: "Jasmine", tinggi: 161 },
    { nama: "Violet", tinggi: 159 }
];

// Tampilkan data dengan for biasa
for (let i = 0; i < dataTinggi.length; i++) {
    console.log(`${dataTinggi[i].nama} memiliki tinggi ${dataTinggi[i].tinggi} cm`);
}