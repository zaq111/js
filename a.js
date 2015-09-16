const XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1");

var connect = new XMLHttpRequest();
connect.open("GET", "https://raw.githubusercontent.com/zaq111/bash/master/ip", false);
connect.send();
var allText = connect.responseText;

//ambil semua line, masukin ke array [0]xxx.xxx.xx.xxx:80  [1] xxx.xxx.xx.xxx:8080   [2]xxx.xxx.xx.xxx:3128
var ipport = [];
ipport = allText.split(/\r\n|\n/);

//pilih baris yang mau diproses, format ip:port, array [0]ip [1]port
//ipport[0-...] ini ip:port yang belum di proses, maksudnya baris yang ke berapa yang mau diolah.
var final = [];
final = ipport[1].split(':');

//ganti settingan firefox otomatis
var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
var a    = pref.getBranch("network.proxy.");
a.setCharPref("socks",final[0]);
a.setIntPref("socks_port", final[1]);
a.setIntPref("type", 1);
