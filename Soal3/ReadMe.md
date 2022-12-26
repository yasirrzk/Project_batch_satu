Operator Aritmatika

Operasi aritmatika dalam JavaScript dapat dituliskan dengan operand dan operator. Operand dapat berupa literals (angka), variabel, atau pun expression.

Penjumlahan, +
Pada JavaScript, operator penjumlahan menggunakan karakter plus, +.
Pada JavaScript, operator penjumlahan selain digunakan untuk menjumlahkan dua buah angka juga dapat digunakan sebagai operator konkatenasi untuk string, menyambung string.
Jika Anda mencoba melakukan ‘penjumlahan’ antara angka dan string maka hasilnya adalah string.

Pengurangan, -
Operator pengurangan menggunakan karakter minus,-.

Perkalian, *
Operator perkalian menggunakan karakter bintang, *.

Pembagian, /
Operasi pembagian menggunakan karakter slash, /.
Operasi pembagian memungkinkan hasil dalam bentuk decimal dengan angka dibelakang koma hingga tak terhingga. JavaScript membulatkan angka dibelakang koma sampai dengan 16 digit jika angka dibelakang koma melebihi 16 digit.

Modulus, %
Operasi modulus menggunakan karakter percent, %. Operasi modulus merupakan operasi untuk menghasilkan sisa, remainder, dari hasil pembagian. Oleh karena itu hasil dari operasi modulus selalu merupakan bilangan bulat, baik negatif, nol, atau positif.

Increment, ++
Anda pastinya familiar dengan operator sebelumnya namun mungkin belum familiar dengan operator increment. Seperti namanya, operator increment menambah nilai suatu variabel satu nilai keatas, bertambah satu. Operator increment hanya bisa digunakan dengan variabel, tidak bisa dengan literals atau pun expression.

Decrement, — -
Operator decrement merupakan kebalikan dari operator increment. Anda menggunakan operator decrement untuk mengurangi nilai suatu variabel satu nilai.


Operator logika

Ada tiga operator logika di JavaScript: || (OR), && (AND), ! (NOT).

Meski mereka dipanggil “logika”, mereka bisa diaplikasikan ke nilai tipe apapun, bukan cuma boolean. Hasil mereka bisa juga tipe apapun.

|| (OR)
Operator “OR” diwakili dengan dua simbol garis vertical:
Di pemrograman klasik, logika OR gunanya cuma untuk memanipulasi nilai boolean. Jika argumennya ada yang true, ia mengembalikan true, tapi jika tidak, maka ia mengembalikan false.
Di JavaScript, operator ini agak tricky dan lebih kuat. Tapi pertama-tama, ayo kita lihat apa yang terjadi pada nilai boolean.

&&(And)
Operator AND diwakili dua ampersand &&:
Dalam pemrograman klasik, AND mengembalikan true jika kedua operand sama-sama truthy dan false jika sebaliknya:

!(NOT)
Operator boolean NOT diwakili dengan tanda exklamasi !.
Operator ini menerima argumen tunggal dan menjalankan hal berikut:

    1.Mengkonversi operand ke tipe boolean: true/false.
    2.Mengembalikan nilai kebalikan.
NOT ganda !! kadang dipakai untuk mengkonversi nilai ke tipe boolean:
Yaitu, NOT pertama mengkonversi nilai ke boolean dan mengembalikan kebalikannya, dan NOT kedua membaliknya lagi. Ujungnya, kita punya konversi nilai-ke-boolean biasa.