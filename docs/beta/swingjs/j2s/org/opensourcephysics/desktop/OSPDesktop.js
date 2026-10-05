(function(){var P$=Clazz.newPackage("org.opensourcephysics.desktop"),I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.controls.OSPLog','java.io.File','java.io.FileOutputStream','java.net.URI']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPDesktop");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['desktopSupported']]]

Clazz.newMeth(C$, 'displayURL$S',  function (url) {
try {
if ($I$(1).isJS) {
if (url.startsWith$S("file") || url.startsWith$S("/") ) {
var bytes=$I$(2).getURLBytes$S(url);
if (bytes == null ) {
$I$(3).warning$S("OSP Desktop could not display " + url);
} else {
var name=url.toString();
name=name.substring$I(name.lastIndexOf$S("/") + 1);
var fout=Clazz.new_($I$(4,1).c$$S,[name]);
var fos=Clazz.new_($I$(5,1).c$$java_io_File,[fout]);
fos.write$BA(bytes);
fos.close$();
}return true;
}} else if (C$.browse$S(url)) {
return true;
}$I$(1).displayURL$S(url);
return true;
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
return false;
} else {
throw e1;
}
}
}, 1);

Clazz.newMeth(C$, 'isDesktopSupported$',  function () {
return C$.desktopSupported;
}, 1);

Clazz.newMeth(C$, 'browse$S',  function (uriName) {
if (!C$.desktopSupported) {
return false;
}try {
return C$.browse$java_net_URI(Clazz.new_($I$(6,1).c$$S,[uriName]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'browse$java_net_URI',  function (uri) {
if (!C$.desktopSupported || (uri == null ) ) {
return false;
}var m;
var parameters=Clazz.array(Class, -1, [Clazz.getClass($I$(6))]);
try {
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("getDesktop", null);
var desktop=m.invoke$O$OA(null, null);
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("browse", parameters);
var args=Clazz.array(java.lang.Object, -1, [uri]);
m.invoke$O$OA(desktop, args);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'mail$S',  function (addr) {
if (!C$.desktopSupported || (addr == null ) ) {
return false;
}var m;
var parameters=Clazz.array(Class, -1, [Clazz.getClass($I$(6))]);
try {
var uri=Clazz.new_(["mailto:" + addr.trim$()],$I$(6,1).c$$S);
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("getDesktop", null);
var desktop=m.invoke$O$OA(null, null);
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("mail", parameters);
var args=Clazz.array(java.lang.Object, -1, [uri]);
m.invoke$O$OA(desktop, args);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return false;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'mail$',  function () {
if (!C$.desktopSupported) {
return false;
}var m;
try {
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("getDesktop", null);
var desktop=m.invoke$O$OA(null, null);
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("mail", null);
m.invoke$O$OA(desktop, null);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return false;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'edit$java_io_File',  function (file) {
if (!C$.desktopSupported) {
return false;
}var m;
var parameters=Clazz.array(Class, -1, [Clazz.getClass($I$(4))]);
try {
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("getDesktop", null);
var desktop=m.invoke$O$OA(null, null);
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("edit", parameters);
var args=Clazz.array(java.lang.Object, -1, [file]);
m.invoke$O$OA(desktop, args);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'open$java_io_File',  function (file) {
if (!C$.desktopSupported) {
return false;
}var m;
var parameters=Clazz.array(Class, -1, [Clazz.getClass($I$(4))]);
try {
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("getDesktop", null);
var desktop=m.invoke$O$OA(null, null);
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("open", parameters);
var args=Clazz.array(java.lang.Object, -1, [file]);
m.invoke$O$OA(desktop, args);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
{
if (!$I$(1).isJS) {
var m;
try {
m=Clazz.forName("java.awt.Desktop").getMethod$S$ClassA("isDesktopSupported", null);
C$.desktopSupported=(m.invoke$O$OA(null, null)).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.desktopSupported=false;
} else {
throw e;
}
}
}};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
