SOAL PSEUDOCODE

1. Buatlah algoritma menggunakan pseudocode
untuk menghitung luas persegi panjang.

2. Buatlah algoritma menggunakan pseudocode
untuk mengubah jam dan menit yang diinput ke
dalam satuan detik.

3. Buatlah algoritma menggunakan pseudocode
untuk menentukan apakah bilangan yang diinput
adalah bilangan ganjil atau bilangan genap.

4. Buatlah algoritma menggunakan pseudocode
untuk menghitung luas lingkaran.

5. Buatlah algoritma menggunakan pseudocode
untuk menginput 3 buah bilangan, kemudian
tentukan bilangan terbesar, terkecil dan rataratanya.

*JAWABAN*

Tugas nomer 1

Program Menghitung_luas_persegi_panjang

Deklarasi:

var panjang,lebar,luas:angka;

Algoritma:

baca (panjang)

baca (lebar)

Luas = (Panjang * lebar)

tulis (luas)


Tugas 2

Program Mengubah_jam_dan_menit_yang_di_input_ke_dalam_satuan_detik.


Jam, menit, hasil : angka ;

ALGORITMA :

cetak (“masukkan nilai jam:”)

cetak (“masukkan nilai menit:”)

baca (menit)

Jam = jam * 3600

Menit = menit * 60

Hasil = jam * menit

cetak (“hasil konversi ke detik :” + hasil)


Tugas 3

Program Menentukan_bilangan_ganjil_dan_genap

Deklarasi: 

Bilangan, hasil :angka;

Deskripsi: 

baca (Bilangan)

hasil = Bilangan % 2

      if(bilangan !=0 ) maka
       
       cetak "bilangan ganjil" 
       
      else
       
       cetak "bilangan genap"


*Tugas 4

Program Menghitung_luas_lingkaran

Deklarasi:

var phi:angka desimal;

var r, luas :angka;

Algoritma:

baca (phi 3,14)

baca (r)

luas  = (phi * r * r)
 
 tulis(luas)


*Tugas 5 

Input a,b,c

   if a>b dan a>c maka
   
   if b>c maka
   
cetak "Terbesar a"

cetak "Terkecil c"

else 

cetak "Terbesar a"

cetak "Terkecil b"

end if

else 

  if a>b dan a<c maka

cetak "Terbesar c"

cetak "Terkecil b"
                  
else
                  
   if a < b dan a > c maka
   
cetak "Terbesar b"

cetak "Terkecil c"

else

   if b>c maka

cetak "Terbesar b"

cetak "Terkecil a"

else

cetak "terbesar c "

cetak "Terkecil a"

end if

end if

end if

end if

rata-rata = (a+b+c)/3

cetak "rata-rata"
