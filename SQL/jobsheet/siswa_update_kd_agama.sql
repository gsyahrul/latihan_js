update siswa 
set kd_agama = '1'
where nama regexp '^[LS]';

update siswa
set kd_agama = '4'
where nama regexp '^Z';

update siswa
set kd_agama = '3'
where nama regexp '^[UNB]';