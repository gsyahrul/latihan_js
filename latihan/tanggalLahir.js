// 1. Buat tiga variabel: tanggal, bulan, tahun
const tanggal = 1;
const bulan = 5;
const tahun = 1998;

let namaBulan = "";

// 2. Gunakan switch-case untuk menentukan nama bulan
switch (bulan) {
    case 1:
        namaBulan = "Januari";
        break;
    case 2:
        namaBulan = "Februari";
        break;
    case 3:
        namaBulan = "Maret";
        break;
    case 4:
        namaBulan = "April";
        break;
    case 5:
        namaBulan = "Mei";
        break;
    case 6:
        namaBulan = "Juni";
        break;
    case 7:
        namaBulan = "Juli";
        break;
    case 8:
        namaBulan = "Agustus";
        break;
    case 9:
        namaBulan = "September";
        break;
    case 10:
        namaBulan = "Oktober";
        break;
    case 11:
        namaBulan = "November";
        break;
    case 12:
        namaBulan = "Desember";
        break;
    default:
        namaBulan = "Bulan tidak valid";
}

// 3. Gabungkan dan tampilkan hasil
const hasil = `${tanggal} ${namaBulan} ${tahun}`;
console.log(hasil);