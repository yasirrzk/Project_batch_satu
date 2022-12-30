function film(judul, durasi, genre, tahun){ //Pertama membuat function film yang didalamnya berisi 4 index
    var film = {}; // kemudian membuat variable film yang memiliki value object kosong
    (film.judul = judul), // Setelah itu didalamnya memiliki value dari tiap index
    (film.durasi = durasi),
    (film.genre = genre),
    (film.tahun = tahun);
    
    return film; // mengembalikan nilai dari object film yang sudah dideklarasikan
}

function tambahDataFilm(){ // Membuat function tambahFilm dedngan index kosong
    var films = []; //Kemudian membuat variable films dengan value array kosong 
    var a = film("End Game", "3 jam", "action", "2019") //Setelah itu didalamnya memiliki value dari tiap index array
    var b = film("Infinity War", "2 jam", "action", "2019")
    var c = film('Iron Man 1', '2 Jam', 'Action',  "2018")
    var d = film('Captain Marvel', '2 Jam', 'Action',  "2018")
    var e = film('Doctor Strange', '2 Jam', 'Action', "2018")

    films.push(a,b,c,d,e) //Membuat methode push yang berguna untuk menambahkan value ke sebuah array dan disimpan ke dalam variable films

    console.log(films); //Cetak films ke dalam console
}

tambahDataFilm() //Memanggil function tambahFilm 