let kalimat = "Hello! Wo!rld!"
let kalimat2 = kalimat.split('')
let hasil = kalimat2.filter(kalimat2 => kalimat2!== "!")

console.log(hasil.join(' '));