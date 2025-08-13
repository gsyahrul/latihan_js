function bagiAngka(a, b) {
    try {
        if (b === 0) {
            throw new Error("Error: Tidak bisa membagi dengan nol!");
        }
        let hasil = a / b;
        console.log("Hasil pembagian:", hasil);
    } catch (e) {
        console.log(e.message);
    }
}

let a = 10;
let b = 5;

try {
    bagiAngka(a, b);
    
} catch (err) {
    if (err instanceof ReferenceError) {
        console.log("Error: Variabel tidak dikenali");
    } else {
        console.log("Terjadi kesalahan lain:", err.message);
    }
}