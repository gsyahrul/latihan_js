function hitungLuas(sisi){
    return sisi * sisi;
}
function hitungKeliling(sisi){
    return 4 * sisi;
}

function tampilkanHasil(sisi){
    console.log("+---------------------------------+");
    console.log("|             PERESEGI            |");
    console.log("+---------------------------------+");
    console.log(" Sisi     : " + sisi);
    console.log(" Luas     : " + hitungLuas(sisi));
    console.log(" Keliling : " + hitungKeliling(sisi));
    console.log("+---------------------------------+");
}

tampilkanHasil(6);
tampilkanHasil(32);