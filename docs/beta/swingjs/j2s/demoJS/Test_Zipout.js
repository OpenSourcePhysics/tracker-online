(function(){var P$=Clazz.newPackage("demoJS"),I$=[[0,'java.io.FileOutputStream','java.util.zip.ZipOutputStream','java.util.zip.ZipEntry']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Test_Zipout", null, 'demoJS.Test_');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
try {
var s="";
for (var i=0; i < 4000; i++) s+=i + "\tthis is a test\n";

var bytes=s.getBytes$();
var os=Clazz.new_($I$(1,1).c$$S,["temp/testzip.zip"]);
var zos=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[os]);
zos.putNextEntry$java_util_zip_ZipEntry(Clazz.new_($I$(3,1).c$$S,["test1.txt"]));
zos.write$BA$I$I(bytes, 0, bytes.length);
zos.closeEntry$();
zos.close$();
var msg=bytes.length + " bytes written to testzip.zip";
System.out.println$S(msg);
System.out.println$S("Test_Zipout OK");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
