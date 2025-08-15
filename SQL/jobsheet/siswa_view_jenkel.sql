create view vw_siswa_jk as 
	select nis,nama,
    if(mid(nis,7,1) = '1',
		'Laki-Laki','Perempuan') as JK
	from siswa;