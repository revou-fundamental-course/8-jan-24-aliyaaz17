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
        document.getElementById("rumusKelilingP").innerHTML="Error!";
    } else{
        document.getElementById("rumusKelilingP").innerHTML= "4 X "+sisi;``
    }
    if (isNaN(luasp)) {
        document.getElementById("rumusLuasP").innerHTML="Error!";
    } else{
        document.getElementById("rumusLuasP").innerHTML= sisi+" X "+sisi;
    }
    if (isNaN(kelp)) {
        document.getElementById("hasilKelilingP").innerHTML="Silakan masukan angka!";
    } else{
        document.getElementById("hasilKelilingP").innerHTML="Hasilnya Adalah \n "+kelp;
    }
    if (isNaN(luasp)) {
        document.getElementById("hasilLuasP").innerHTML="Silakan masukan angka!";
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
        document.getElementById("rumusKelilingPP").innerHTML="Error!";
    } else{
        document.getElementById("rumusKelilingPP").innerHTML="2 X ( "+number1+" + "+number2+" )";
    }
    if (isNaN(luaspp)) {
        document.getElementById("rumusLuasPP").innerHTML="Error!";
    } else{
        document.getElementById("rumusLuasPP").innerHTML=number1+" X "+number2;
    }
    if (isNaN(kelpp)) {
        document.getElementById("hasilKelilingPP").innerHTML="Silakan masukan angka!";
    } else{
        document.getElementById("hasilKelilingPP").innerHTML="Hasilnya Adalah "+kelpp;
    }
    if (isNaN(luaspp)) {
        document.getElementById("hasilLuasPP").innerHTML="Silakan masukan angka!";
    } else{
        document.getElementById("hasilLuasPP").innerHTML="Hasilnya Adalah "+luaspp;
    }
}

function hasilL() {
    var jari = parseInt(document.getElementById("rl").value);
    var kelL=2*(3.14)*jari
    var luasL=(3.14)*jari*jari
    if (isNaN(kelL)) {
        document.getElementById("rumusKelilingL").innerHTML="Error!";
    } else{
        document.getElementById("rumusKelilingL").innerHTML="2 X 3.14 X "+jari;
    }
    if (isNaN(luasL)) {
        document.getElementById("rumusLuasL").innerHTML="Error!";
    } else{
        document.getElementById("rumusLuasL").innerHTML="3.14 X "+jari+" X "+jari;
    }
    if (isNaN(kelL)) {
        document.getElementById("hasilKelilingL").innerHTML="Silakan masukan angka!";
    } else{
        document.getElementById("hasilKelilingL").innerHTML="Hasilnya Adalah "+kelL;
    }
    if (isNaN(luasL)) {
        document.getElementById("hasilLuasL").innerHTML="Silakan masukan angka!";
    } else{
        document.getElementById("hasilLuasL").innerHTML="Hasilnya Adalah "+luasL;
    }
}

function reset1() {
    document.getElementById("hitungP").reset();
    document.getElementById("hasilKelilingP").innerHTML="";
    document.getElementById("hasilLuasP").innerHTML="";
    document.getElementById("rumusKelilingP").innerHTML="";
    document.getElementById("rumusLuasP").innerHTML="";
}

function reset2() {
    document.getElementById("hitungPP").reset();
    document.getElementById("hasilKelilingPP").innerHTML="";
    document.getElementById("hasilLuasPP").innerHTML="";
    document.getElementById("rumusKelilingPP").innerHTML="";
    document.getElementById("rumusLuasPP").innerHTML="";
}

function reset3() {
    document.getElementById("hitungL").reset();
    document.getElementById("hasilKelilingL").innerHTML="";
    document.getElementById("hasilLuasL").innerHTML="";
    document.getElementById("rumusKelilingL").innerHTML="";
    document.getElementById("rumusLuasL").innerHTML="";
}