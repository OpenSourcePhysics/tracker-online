(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'org.opensourcephysics.media.core.DarkGhostFilter',['org.opensourcephysics.media.core.DarkGhostFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DarkGhostFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.GhostFilter');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.prefix="Filter.DarkGhost";
}, 1);

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
for (var i=0; i < this.nPixelsIn; i++) {
var pixel=this.pixelsIn[i];
var v=((((pixel >> 16) & 255) + ((pixel >> 8) & 255) + (pixel & 255) )/3|0);
var ghost=((255 - (1 - this.fade) * (255 - this.values[i]))|0);
if (ghost < v) {
this.pixelsOut[i]=(ghost << 16) | (ghost << 8) | ghost ;
this.values[i]=ghost;
} else {
this.pixelsOut[i]=pixel;
this.values[i]=v;
}}
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DarkGhostFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.media.core.GhostFilter','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
