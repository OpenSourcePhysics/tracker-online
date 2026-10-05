(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.gif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BitUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'BitsNeeded$I',  function (n) {
var ret=($b$[0] = 1, $b$[0]);
if (n-- == 0) {
return $b$[0] = 0, $b$[0];
}while ((n>>=1) != 0){
(($b$[0]=++ret,ret=$b$[0],$b$[0]));
}
return ret;
}, 1);

Clazz.newMeth(C$, 'WriteWord$java_io_OutputStream$H',  function (output, w) {
output.write$I(w & 255);
output.write$I((w >> 8) & 255);
}, 1);

Clazz.newMeth(C$, 'WriteString$java_io_OutputStream$S',  function (output, string) {
for (var loop=0; loop < string.length$(); ++loop) {
output.write$I(($b$[0] = (string.charAt$I(loop)).$c(), $b$[0]));
}
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
