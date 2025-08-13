for (let i = 1; i <= 20; i++) {
    let output = "";
    // Cek kondisi untuk menentukan aktivitas
    if (i % 3 === 0 && i % 2 === 0) {
        output = "Mendapat Sertifikat";
        // Jika angka kelipatan 3 dan habis dibagi 2
    } else if (i % 3 === 0 && i % 2 !== 0) {
        output = "Mengikuti Uji Kompetensi";
        //  Jika angka kelipatan 3 dan Ganjil
    } else if (i % 2 === 0) {
        output = "Mengikuti Pelatihan";
        // Jika angka genap
    } else {
        output = "Apel Pagi";
        // Jika angka Ganjil
    }

    console.log(`${i} - ${output}`);
}