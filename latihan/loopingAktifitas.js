for (let i = 1; i <= 20; i++) {
    let output = "";
    // Cek kondisi untuk menentukan aktivitas
    if (i % 3 === 0 && i % 2 === 0) {
        // Jika angka kelipatan 3 dan habis dibagi 2
        output = "Mendapat Sertifikat";
    } else if (i % 3 === 0 && i % 2 !== 0) {
        //  Jika angka kelipatan 3 dan tidak habis dibagi 2
        output = "Mengikuti Uji Kompetensi";
    } else if (i % 2 === 0) {
        // Jika angka genap
        output = "Mengikuti Pelatihan";
    } else {
        // Jika angka Ganjil
        output = "Apel Pagi";
    }

    console.log(`${i} - ${output}`);
}