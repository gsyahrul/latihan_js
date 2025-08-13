const fs = require("fs");

let siswa = [
    {
        nama : "Kaesang",
        kelas : "Web",
        nilai : [78,92,87],
    },
]
fs.writeFileSync("siswa.json", JSON.stringify(siswa, null, 2), "utf-8");
console.log("Data siswa telah ditulis ke dalam file siswa.json");