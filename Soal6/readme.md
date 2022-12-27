- Membuat variabel kalimat yang berisi "Hello! Wo!rld!"

- Kemudian membuat variabel kalimat2 dengan menggunakan methode split (' ') yang berfungsi untuk membagi string menjadi array substring dan mengembalikan array baru tanpa mengubah string asli.

``` let kalimat2 = kalimat.split('') ```

- Membuat variabel hasil dengan memasukkan variabel kalimat2 dan gunakan methode filter yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu.

``` let hasil = kalimat2.filter(kalimat2 => kalimat2!== "!") ```

- Kemudian lakukan console hasil dengan menggunakan methode join(' ') yang berfungsi membuat dan mengembalikan string baru dengan menggabungkan semua elemen array dengan pemisah koma atau pemisah yang ditentukan.

``` console.log(hasil.join(' ')); ```