var ip="37.187.225.171";

var port='31486';

var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);

var a    = pref.getBranch("network.proxy.");

a.setCharPref("socks", ip);

a.setIntPref("socks_port", port);

a.setIntPref("type", 1);

iimPlay("alexamaster.iim");
