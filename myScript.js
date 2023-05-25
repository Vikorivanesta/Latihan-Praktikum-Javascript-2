// Tugas 1
function cekAngka() {
    var angka = prompt("Masukkan 2 angka", "").split(" ");
    var num1 = parseInt(angka[0]);
    var num2 = parseInt(angka[1]);

    if (angka[0] > angka[1]) {
        document.getElementById("paragraph1").innerHTML = num1 + " lebih besar dari " + num2;
    } else {
        document.getElementById("paragraph1").innerHTML = num1 + " lebih kecil dari " + num2;
    }
}

// Tugas 2
function cekStatus() {
    var ppw1 = confirm("Apakah Anda Praktikan PPW1?");
    if (ppw1) {
        var name = prompt("Masukkan Nama:", "");
        var nim = prompt("Masukkan NIM:", "");
        var angkatan = prompt("Angkatan:", "");

        document.getElementById("paragraph2").innerHTML = "<table class=\"table\"><thead><th>Nama</th><th>NIM</th><th>Angkatan</th></thead><tbody><tr><td>" + name + "</td><td>" + nim + "</td><td>" + angkatan + "</td></tr></tbody></table>";
    } else {
        document.getElementById("paragraph2").innerHTML = "<h1>Anda bukan praktikan PPW1, Anda TIDAK BOLEH MASUKK!!</b>"
    }
}

// Tugas 3
function updateYear(inputID, resultID) {
    document.getElementById(resultID).innerHTML = document.getElementById(inputID).value * 365;
    calculateTotal();
}

function calculateTotal() {
    var plasticBottle = document.getElementById("pbDay").value * 365;
    var plasticCups = document.getElementById("pcDay").value * 365;
    var straws = document.getElementById("sDay").value * 365;
    var cottonSwabs = document.getElementById("csDay").value * 365;
    var cigaretteButts = document.getElementById("cbDay").value * 365;
    var plasticResealableBags = document.getElementById("prbDay").value * 365;
    var plasticClingWraps = document.getElementById("pcwDay").value * 365;
    var plasticSilverware = document.getElementById("psDay").value * 365;
    var plasticStirrers = document.getElementById("pstDay").value * 365;
    var foodContainers = document.getElementById("fcDay").value * 365;
    var yearlyConsumption = plasticBottle + plasticCups + straws + cottonSwabs + cigaretteButts + plasticResealableBags + plasticClingWraps + plasticSilverware + plasticStirrers + foodContainers;
    document.getElementById("totalConsumption").innerHTML = yearlyConsumption;
}

// Misc
function show(docID) {
    document.getElementById(docID).style.display = 'block';
}