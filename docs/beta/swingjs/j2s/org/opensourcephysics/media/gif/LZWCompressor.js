(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.gif"),I$=[[0,'java.awt.image.PixelGrabber','org.opensourcephysics.media.gif.BitUtils','org.opensourcephysics.media.gif.ScreenDescriptor','org.opensourcephysics.media.gif.ImageDescriptor','org.opensourcephysics.media.gif.LZWCompressor','org.opensourcephysics.media.gif.BitFile','org.opensourcephysics.media.gif.LZWStringTable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LZWCompressor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'LZWCompress$java_io_OutputStream$I$BA',  function (output, codesize, toCompress) {
var c;
var index;
var clearcode;
var endofinfo;
var numbits;
var limit;
var prefix=-1;
var bitFile=Clazz.new_($I$(6,1).c$$java_io_OutputStream,[output]);
var strings=Clazz.new_($I$(7,1));
clearcode=1 << codesize;
endofinfo=clearcode + 1;
numbits=codesize + 1;
limit=(1 << numbits) - 1;
strings.ClearTable$I(codesize);
bitFile.WriteBits$I$I(clearcode, numbits);
for (var loop=0; loop < toCompress.length; ++loop) {
c=toCompress[loop];
if ((index=strings.FindCharString$H$B(prefix, c)) != -1) {
prefix=index;
} else {
bitFile.WriteBits$I$I(prefix, numbits);
if (strings.AddCharString$H$B(prefix, c) > limit) {
if (++numbits > 12) {
bitFile.WriteBits$I$I(clearcode, numbits - 1);
strings.ClearTable$I(codesize);
numbits=codesize + 1;
}limit=(1 << numbits) - 1;
}prefix=($s$[0] = (c & 255), $s$[0]);
}}
if (prefix != -1) {
bitFile.WriteBits$I$I(prefix, numbits);
}bitFile.WriteBits$I$I(endofinfo, numbits);
bitFile.Flush$();
}, 1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
