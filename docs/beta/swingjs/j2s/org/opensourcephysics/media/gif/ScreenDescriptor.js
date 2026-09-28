(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.gif"),I$=[[0,'java.awt.image.PixelGrabber','org.opensourcephysics.media.gif.BitUtils','org.opensourcephysics.media.gif.ScreenDescriptor','org.opensourcephysics.media.gif.ImageDescriptor','org.opensourcephysics.media.gif.LZWCompressor','org.opensourcephysics.media.gif.BitFile','org.opensourcephysics.media.gif.LZWStringTable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScreenDescriptor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['B',['byte_','backgroundColorIndex_','pixelAspectRatio_'],'H',['localScreenWidth_','localScreenHeight_']]]

Clazz.newMeth(C$, 'c$$H$H$I',  function (width, height, numColors) {
;C$.$init$.apply(this);
this.localScreenWidth_=width;
this.localScreenHeight_=height;
this.SetGlobalColorTableSize$B(($b$[0] = ($I$(2).BitsNeeded$I(numColors) - 1), $b$[0]));
this.SetGlobalColorTableFlag$B(1);
this.SetSortFlag$B(0);
this.SetColorResolution$B(7);
this.backgroundColorIndex_=($b$[0] = 0, $b$[0]);
this.pixelAspectRatio_=($b$[0] = 0, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'Write$java_io_OutputStream',  function (output) {
$I$(2).WriteWord$java_io_OutputStream$H(output, this.localScreenWidth_);
$I$(2).WriteWord$java_io_OutputStream$H(output, this.localScreenHeight_);
output.write$I(this.byte_);
output.write$I(this.backgroundColorIndex_);
output.write$I(this.pixelAspectRatio_);
});

Clazz.newMeth(C$, 'SetGlobalColorTableSize$B',  function (num) {
this.byte_=($b$[0] = this.byte_|((num & 7)), $b$[0]);
});

Clazz.newMeth(C$, 'SetSortFlag$B',  function (num) {
this.byte_=($b$[0] = this.byte_|((num & 1) << 3), $b$[0]);
});

Clazz.newMeth(C$, 'SetColorResolution$B',  function (num) {
this.byte_=($b$[0] = this.byte_|((num & 7) << 4), $b$[0]);
});

Clazz.newMeth(C$, 'SetGlobalColorTableFlag$B',  function (num) {
this.byte_=($b$[0] = this.byte_|((num & 1) << 7), $b$[0]);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
