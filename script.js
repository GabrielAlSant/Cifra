var alfabeto = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var chavecript = +document.getElementById("chavecript").innerHTML;
var chavedescrip = +document.getElementById("chavedescrip").innerHTML;

function prev() {
    if(chavecript > 1) {
        chavecript--;
        document.getElementById("chavecript").innerHTML = chavecript;
    }
}

function next() {
    if(chavecript < 25) {
        chavecript++;
        document.getElementById("chavecript").innerHTML = chavecript;
    }
}

function cript() {
    var textdesc = document.getElementById("textnormal").value.toUpperCase();
    var textcript = "";

    for(var i = 0; i<textdesc.length; i++){ 

        var posicaoletra = textdesc.charCodeAt(i)-64; 
        var letrades = (posicaoletra + chavecript) % 26;
        letrades = letrades == 0 ? 26 : letrades; 
        textcript += alfabeto[letrades-1];
    }

    document.getElementById("textscript").innerHTML = textcript;
}


function prev2() {
    if(chavedescrip > 1) {
        chavedescrip--;
        document.getElementById("chavedescrip").innerHTML = chavedescrip;
    }
}

function next2() {
    if(chavedescrip < 25) {
        chavedescrip++;
        document.getElementById("chavedescrip").innerHTML = chavedescrip;
    }
}

function descript() {
    var textcript = document.getElementById("textcript").value.toUpperCase();
    var textdesc = "";

    for(var i = 0; i<textcript.length; i++){ 

        var posicaoletra = textcript.charCodeAt(i)-64; 
        var letrades = (posicaoletra - chavedescrip) % 26;
        letrades = letrades == 0 ? 26 : letrades; 
        textdesc += alfabeto[letrades-1];
    }

    document.getElementById("textdesc").innerHTML = textdesc;
}


