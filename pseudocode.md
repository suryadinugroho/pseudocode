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

Program menghitung_luas_persegi_panjang

deklarasi:

var panjang,lebar,luas:angka

Algoritma:

baca (panjang)

baca (lebar)

luas = (panjang * lebar)

tulis (luas)


Tugas 2

Program mengubah_jam_dan_menit_yang_di_input_ke_dalam_satuan_detik.

deklarasi:

var jam, menit, hasil : angka 

algoritma :

baca(jam)

baca(menit)

jam = jam * 3600

menit = menit * 60

hasil = jam * menit

cetak ( hasil)


Tugas 3

Program menentukan_bilangan_ganjil_dan_genap

deklarasi: 

var bilangan, hasil :angka

deskripsi: 

baca (bilangan)

hasil = bilangan % 2

      jika(bilangan tidak = 0 ) maka
       
       cetak "bilangan ganjil" 
       
      lainnya
       
       cetak "bilangan genap"


*Tugas 4

Program menghitung_luas_lingkaran

deklarasi:

var r,hasil:angka

algoritma:

baca (r)

luas  = (3,14 * r * r)
 
 tulis(luas)


*Tugas 5 

Program menentukan_bilangan_terkecil_terbesar_dan_rata-rata

deklarasi

var a, b, c:

algoritma

baca (a)

baca(b)

baca(c)

bilangan terbesar :

jika (a > b dan a > c )maka

    cetak(terbesar a)

jika (b > a dan b > c)maka

    cetak(terbesar b)

lainnya

     cetak(terbesar c)

jika (a < b dan a < c )maka

     cetak(terkecil a)

jika (b < a dan b < c)maka

      cetak(terkecil b)
 
lainnya
     
     cetak(terkecil c)
     
rata-rata = (a+b+c)/3
     
     cetak(rata-rata)
