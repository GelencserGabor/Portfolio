var Elektronika = localStorage.getItem("Elektronika");
var ProgramozasAlapjai = localStorage.getItem("ProgramozasAlapjai");
var AnalogAramkorok = localStorage.getItem("AnalogAramkorok");
var DigitalisAramkorok = localStorage.getItem("DigitalisAramkorok");
var AdatbAlapjai = localStorage.getItem("AdatbAlapjai");
var Halozat = localStorage.getItem("Halozat");
var PlcProgramozas = localStorage.getItem("PlcProgramozas");
var SzamitogepesSzimulacio = localStorage.getItem("SzamitogepesSzimulacio");
var Munkavallaloi = localStorage.getItem("Munkavallaloi");
var Webprog = localStorage.getItem("Webprog");
var Programfejlesztes = localStorage.getItem("Programfejlesztes");
var Robottechnika = localStorage.getItem("Robottechnika ");

function osztaly11()
{
    location.href = "tantargyak11.html";
}
function osztaly12()
{
    location.href = "tantargyak12.html";
}
function osztaly13()
{
    location.href = "tantargyak13.html";
}
function reflexio()
{
    location.href = "reflexio.html";
}
function elektronika()
{
    location.href = "Elektronika.html";
    var Elektronika = "notNull";
    localStorage.setItem("Elektronika", JSON.stringify(Elektronika));
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Programfejlesztes");
    localStorage.removeItem("Robottechnika");
}
function programozasAlapjai()
{
    location.href = "Programozás Alapjai.html";
    var ProgramozasAlapjai = "notNull";
    localStorage.setItem("ProgramozasAlapjai", JSON.stringify(ProgramozasAlapjai));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Programfejlesztes");
    localStorage.removeItem("Robottechnika");
    
}
function analogAramkorok()
{
    location.href = "Analóg Áramkörök.html";
    var AnalogAramkorok = "notNull";
    localStorage.setItem("AnalogAramkorok", JSON.stringify(AnalogAramkorok));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Programfejlesztes");
    localStorage.removeItem("Robottechnika");
    
}
function digitalisAramkorok()
{
    location.href = "Digitális Áramkörök.html";
    var DigitalisAramkorok = "notNull";
    localStorage.setItem("DigitalisAramkorok", JSON.stringify(DigitalisAramkorok));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Programfejlesztes");
    localStorage.removeItem("Robottechnika");
    
}
function adatbAlapjai()
{
    location.href = " Adatbáziskezelés.html";
    var AdatbAlapjai = "notNull";
    localStorage.setItem("AdatbAlapjai", JSON.stringify(AdatbAlapjai));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Programfejlesztes");
    localStorage.removeItem("Robottechnika");
}
function halozat()
{
    location.href = "Hálozat.html";
    var Halozat = "notNull";
    localStorage.setItem("Halozat", JSON.stringify(Halozat));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Programfejlesztes");
    localStorage.removeItem("Robottechnika");
    
}
function plcProgramozas()
{
    location.href = "Plcprogramozás.html";
    var PlcProgramozas = "notNull";
    localStorage.setItem("PlcProgramozas", JSON.stringify(PlcProgramozas));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Programfejlesztes");
    localStorage.removeItem("Robottechnika");
}
function szamitogepesSzimulacio()
{
    location.href = "Szszimulátcíó.html";
    var SzamitogepesSzimulacio = "notNull";
    localStorage.setItem("SzamitogepesSzimulacio", JSON.stringify(SzamitogepesSzimulacio));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Programfejlesztes");
    localStorage.removeItem("Robottechnika");
}
function munkavallaloi()
{
    location.href = "Munkaválalói.html";
    var Munkavallaloi = "notNull";
    localStorage.setItem("Munkavallaloi", JSON.stringify(Munkavallaloi));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Programfejlesztes");
    localStorage.removeItem("Robottechnika");
}
function webprog()
{
    location.href = "Webp.html";
    var Webprog = "notNull";
    localStorage.setItem("Webprog", JSON.stringify(Webprog));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Programfejlesztes");
    localStorage.removeItem("Robottechnika");
}
function programfejlesztes()
{
    location.href = "ProgramF.html";
    var Programfejlesztes = "notNull";
    localStorage.setItem("Programfejlesztes", JSON.stringify(Programfejlesztes));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Robottechnika");
}
function robottechnika()
{
    location.href = "Robotechnika.html";
    var Robottechnika = "notNull";
    localStorage.setItem("Robottechnika", JSON.stringify(Robottechnika));
    localStorage.removeItem("Elektronika");
    localStorage.removeItem("ProgramozasAlapjai");
    localStorage.removeItem("AnalogAramkorok");
    localStorage.removeItem("DigitalisAramkorok");
    localStorage.removeItem("AdatbAlapjai");
    localStorage.removeItem("Halozat");
    localStorage.removeItem("PlcProgramozas");
    localStorage.removeItem("SzamitogepesSzimulacio");
    localStorage.removeItem("Munkavallaloi");
    localStorage.removeItem("Webprog");
    localStorage.removeItem("Programfejlesztes");
}
function goBack() {
    window.history.back();
}
