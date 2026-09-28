(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NegativeFilter", null, 'org.opensourcephysics.media.core.Filter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.refresh$();
}, 1);

Clazz.newMeth(C$, 'newInspector$',  function () {
return null;
});

Clazz.newMeth(C$, 'initInspector$',  function () {
return null;
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
for (var i=0; i < this.pixelsIn.length; i++) {
var pixel=this.pixelsIn[i];
var r=255 - ((pixel >> 16) & 255);
var g=255 - ((pixel >> 8) & 255);
var b=255 - ((pixel) & 255);
this.pixelsOut[i]=(r << 16) | (g << 8) | b ;
}
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
