(function(){var P$=Clazz.newPackage("test"),I$=[[0,'java.util.zip.GZIPInputStream','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Test_Zipin", null, 'test.Test_');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
try {
var is=Clazz.getClass(C$).getResourceAsStream$S("3c9k.xml.gz");
var gzis=Clazz.new_($I$(1,1).c$$java_io_InputStream,[is]);
gzis=Clazz.new_($I$(1,1).c$$java_io_InputStream,[gzis]);
var buf=Clazz.array(Byte.TYPE, [100]);
gzis.read$BA$I$I(buf, 0, 100);
gzis.close$();
System.out.println$S("Test_Zipin OK");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getStreamAsBytes$java_io_BufferedInputStream',  function (bis) {
var buf=Clazz.array(Byte.TYPE, [1024]);
var bytes=Clazz.array(Byte.TYPE, [4096]);
var len=0;
var totalLen=0;
while ((len=bis.read$BA$I$I(buf, 0, 1024)) > 0){
totalLen+=len;
if (totalLen >= bytes.length) bytes=$I$(2).copyOf$BA$I(bytes, totalLen * 2);
System.arraycopy$O$I$O$I$I(buf, 0, bytes, totalLen - len, len);
}
bis.close$();
return $I$(2).copyOf$BA$I(bytes, totalLen);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
