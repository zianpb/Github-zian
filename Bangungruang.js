// // mengitung luas laapangan bola
// let sisi = prompt (`masukan ukuran sisi lapanganya`)
//     hasil = sisi*sisi
//     alert(`luas lapngan adalah ${hasil}`)


// // mengitung luas lingkaram
// let r = prompt (`masukan ukuran sisi lapanganya`)
//     hasil = 3.14*r*r;
//     alert(`luas lingkaran adalah ${hasil}`) 

// // menghitung luas segituga
// let alas = prompt (`masukan alas segita`)
// let tinggi = prompt (`masukan tinggi segita`)
//     hasil = 0.5*alas*tinggi;
//     alert(`luas segita adaalah ${hasil}`)

// for (let i = 5; i >= 3; i--){
//     console.log(i);
    
// }


for (let i = 0; i < 3; i++){ //Diberikan 3 kali attemmpt
    let password = prompt ("Silahakan Password Terlebih Dahulu")
    
    if (password == "Ahay"){
        alert("Halo selamat datang di website informatika")
        window.location.href = "dashboard.html"
        break // jika password berhasil maka stop GK NGE LOOP LAGI
    } else {
        alert("Silahkan Coba lagi!");
    }
}
document.write(`<h2> Gagal masuk, silahkan refresh halaman ini <h2/> `)