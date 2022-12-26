Disini, greeter adalah Scope global karena berada diluar function sementara hello adalah function Scope. Jadi kita tidak bisa mengakses variabel hello diluar function.
Hoisting adalah mekanisme JavaScript dimana pendeklarasian variabel dan function naik ke atas Scope nya sebelum kode di eksekusi. Jadi variabel var di naikkan ke atas Scope nya dan diinisialisasi dengan nilai undefined.
Scope di dalam JavaScript bisa dikatakan sebagai cakupan atau jangkauan program yang ditandai dengan tanda kurung kurawal atau curly brackets ({...}).
Umumnya, variabel dalam scope akan dianggap sebagai local scope agar tidak bisa dibaca oleh scope lain.

Tapi, jika kita menggunakan var, maka variabel akan berubah menjadi global scope. Artinya, ia masih bisa diakses meski berada di dalam scope.

reassigned dan redeclared variable var dapat di tambah atau di ubah valuenya (reasigned). tidak dapat dideklarasi ulang (redeclared)

scope let Jika kita menggunakan let, maka variabel akan bertindak menjadi block scope. Artinya, variabel hanya bisa diakses di dalam scope, yang ditandai dalam sebuah kurung kurawal. Dengan menggunakan let, kita tidak perlu berurusan lagi dengan function untuk membuat local scope.

hoisting variabel let di JavaScript juga bisa hoisted. Menariknya, jika dijalankan pada console di web browser, ia akan menghasilkan error. Kenapa? Karena engine JavaScript nggak bisa mengakses nama variabel sebelum dideklarasikan atau diinisialisasi. Kondisi ini biasanya disebut dengan istilah Temporal Dead Zone

reassigned dan redeclared Variabel let dapat di-update nilainya (reassigned), tapi tidak bisa di deklarasi ulang namanya (redeclared). Jadi, akan ada pesan error ketika terjadi duplikasi variabel.

scope const Seperti halnya variabel let, jika kita menggunakan const, maka variabel yang ada akan bertindak menjadi block scope. Artinya, variabel hanya bisa diakses di dalam scope, yang ditandai dalam sebuah kurung kurawal ({...}).

hoisting Hoisting di variabel const juga sama uniknya seperti variabel let. Karena, engine JavaScript nggak bisa mengakses nama variabel sebelum dideklarasikan atau diinisialisasi. Meski begitu, variabel const akan langsung menunjukkan error.

reassigned dan redeclared Karena ini konstanta, maka kita nggak boleh mengubah nilai dari variabel tersebut. Dengan kata lain, kita gak bisa me-reassigned. Kenapa? karena variabel ini sifatnya immutable. Berarti, value-nya nggak bisa diubah.

Kita juga nggak bisa me-redeclared atau mendeklarasikan ulang!