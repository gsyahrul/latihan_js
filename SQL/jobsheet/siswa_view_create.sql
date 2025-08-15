use sekolah;

create view vw_siswa as
	select nis 'NIS SISWA', nama as 'Nama Siswa'
    from siswa;