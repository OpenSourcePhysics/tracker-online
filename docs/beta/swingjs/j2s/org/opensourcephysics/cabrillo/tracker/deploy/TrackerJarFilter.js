(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker.deploy"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "TrackerJarFilter", null, null, 'java.io.FilenameFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File$S',  function (dir, name) {
var fileName=p$1.getName$S.apply(this, [name]).toLowerCase$();
if (!fileName.endsWith$S(".jar")) return false;
if (fileName.equals$O("tracker.jar")) return true;
if (fileName.startsWith$S("tracker-")) {
var version=fileName.substring$I(8);
var len=version.length$();
version=version.substring$I$I(0, len - 4);
var snapshot="-snapshot";
var n=version.toLowerCase$().indexOf$S(snapshot);
if (n > -1) {
version=version.substring$I$I(0, n);
}var intArray=version.split$S("\\.");
if (intArray.length <= 4) {
try {
for (var i=0; i < intArray.length; i++) {
Integer.parseInt$S(intArray[i].trim$());
}
return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}try {
Double.parseDouble$S(version);
return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}return false;
});

Clazz.newMeth(C$, 'getName$S',  function (path) {
if (path == null ) return "";
var i=path.lastIndexOf$S("/");
if (i == -1) i=path.lastIndexOf$S("\\");
if (i != -1) return path.substring$I(i + 1);
return path;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
