function cekAngka() {
    var angka = prompt("Masukkan 2 angka", "").split(" ");
    var num1 = parseInt(angka[0]);
    var num2 = parseInt(angka[1]);

    if (angka[0] > angka[1]) {
        document.getElementById("paragraph").innerHTML = num1 + " lebih besar dari " + num2;
    } else {
        document.getElementById("paragraph").innerHTML = num1 + " lebih kecil dari " + num2;
    }
}

function cekStatus() {
    var ppw1 = confirm("Apakah Anda Praktikan PPW1?");
    if (ppw1) {
        var name = prompt("Masukkan Nama:", "");
        var nim = prompt("Masukkan NIM:", "");
        var angkatan = prompt("Angkatan:", "");

        document.getElementById("paragraph").innerHTML = "<table class=\"table\"><thead><th>Nama</th><th>NIM</th><th>Angkatan</th></thead><tbody><tr><td>" + name + "</td><td>" + nim + "</td><td>" + angkatan + "</td></tr></tbody></table>";
    } else {
        document.getElementById("paragraph").innerHTML = "Anda bukan praktikan PPW1, Anda TIDAK BOLEH MASUKK!!"
    }

}