let toggle=button=>{
    var tabelPersegi = document.getElementById("mytable1");
    if (tabelPersegi.style.display === "none") {
        tabelPersegi.style.display = "table"; button.innerHTML="Hide Tabel Persegi";
    } else {
        tabelPersegi.style.display = "none"; button.innerHTML="Klik untuk Persegi";
    } 
}

let toggle1=button=>{
    var tabelPersegiP = document.getElementById("mytable2");
    if (tabelPersegiP.style.display === "none") {
        tabelPersegiP.style.display = "table"; button.innerHTML="Hide Tabel Persegi Panjang";
    } else {
        tabelPersegiP.style.display = "none"; button.innerHTML="Klik untuk Persegi Panjang";
    }
}

let toggle2=button=>{
    var tabelPersegiL = document.getElementById("mytable3");
    if (tabelPersegiL.style.display === "none") {
        tabelPersegiL.style.display = "table"; button.innerHTML="Hide Tabel Lingkaran";
    } else {
        tabelPersegiL.style.display = "none"; button.innerHTML="Klik untuk Lingkaran";
    }
}

function hasilP() {
    var sisi = parseInt(document.getElementById("sp").value);
    var kelp=4*sisi
    var luasp=sisi*sisi
    if (isNaN(kelp)) {
        document.getElementById("hasilKelilingP").innerHTML="Error! Silakan masukan angka!";
    } else{
        document.getElementById("hasilKelilingP").innerHTML="Hasilnya Adalah \n "+kelp;
    }
    if (isNaN(luasp)) {
        document.getElementById("hasilLuasP").innerHTML="Error! Silakan masukan angka!";
    } else{
        document.getElementById("hasilLuasP").innerHTML="Hasilnya Adalah\n"+luasp;
    }
}

function hasilPP() {
    var number1 = parseInt(document.getElementById("ppp").value);
    var number2 = parseInt(document.getElementById("lpp").value);
    var kelpp=2*(number1+number2)
    var luaspp=number1*number2
    if (isNaN(kelpp)) {
        document.getElementById("hasilKelilingPP").innerHTML="Error! Silakan masukan angka!";
    } else{
        document.getElementById("hasilKelilingPP").innerHTML="Hasilnya Adalah \n "+kelpp;
    }
    if (isNaN(luaspp)) {
        document.getElementById("hasilLuasPP").innerHTML="Error! Silakan masukan angka!";
    } else{
        document.getElementById("hasilLuasPP").innerHTML="Hasilnya Adalah\n"+luaspp;
    }
}

function hasilL() {
    var jari = parseInt(document.getElementById("rl").value);
    var kelL=2*(22/7)*jari
    var luasL=(22/7)*jari*jari
    if (isNaN(kelL)) {
        document.getElementById("hasilKelilingL").innerHTML="Error! Silakan masukan angka!";
    } else{
        document.getElementById("hasilKelilingL").innerHTML="Hasilnya Adalah \n "+kelL;
    }
    if (isNaN(luasL)) {
        document.getElementById("hasilLuasL").innerHTML="Error! Silakan masukan angka!";
    } else{
        document.getElementById("hasilLuasL").innerHTML="Hasilnya Adalah\n"+luasL;
    }
}

function reset1() {
    document.getElementById("hitungP").reset();
    document.getElementById("hasilKelilingP").innerHTML=""
    document.getElementById("hasilLuasP").innerHTML=""
}

function reset2() {
    document.getElementById("hitungPP").reset();
    document.getElementById("hasilKelilingPP").innerHTML=""
    document.getElementById("hasilLuasPP").innerHTML=""
}

function reset3() {
    document.getElementById("hitungL").reset();
    document.getElementById("hasilKelilingL").innerHTML=""
    document.getElementById("hasilLuasL").innerHTML=""
}