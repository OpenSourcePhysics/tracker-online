(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,['org.opensourcephysics.media.core.TLineProfile','.LineEnd']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TLineProfile", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.TLine');
C$.$classes$=[['LineEnd',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pixels=Clazz.array(Integer.TYPE, [0]);
this.values=Clazz.array(Integer.TYPE, [0]);
},1);

C$.$fields$=[['O',['pixels','int[]','+values']]]

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (x1, y1, x2, y2) {
Clazz.super_(C$, this);
this.end1=Clazz.new_($I$(1,1).c$$D$D,[this, null, x1, y1]);
this.end2=Clazz.new_($I$(1,1).c$$D$D,[this, null, x2, y2]);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel"))) {
return;
}var vidPanel=panel;
if (!this.isVisible$()) {
return;
}C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [vidPanel, g]);
this.getProfileData$org_opensourcephysics_media_core_VideoPanel(vidPanel);
});

Clazz.newMeth(C$, 'getProfile$',  function () {
return this.values;
});

Clazz.newMeth(C$, 'getProfileData$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
if (vidPanel.getVideo$() == null ) {
return;
}var length=(this.end1.distance$java_awt_geom_Point2D(this.end2)|0);
if (length != this.pixels.length) {
this.pixels=Clazz.array(Integer.TYPE, [length]);
this.values=Clazz.array(Integer.TYPE, [length]);
}var image=vidPanel.getVideo$().getImage$();
if (image.getType$() == 1) {
try {
var x=Math.min((this.end1.getX$()|0), (this.end2.getX$()|0));
var y=(this.end1.getY$()|0);
image.getRaster$().getDataElements$I$I$I$I$O(x, y, length, 1, this.pixels);
for (var i=0; i < this.pixels.length; i++) {
var pixel=this.pixels[i];
var r=(pixel >> 16) & 255;
var g=(pixel >> 8) & 255;
var b=(pixel) & 255;
this.values[i]=((r + g + b )/3|0);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"ArrayIndexOutOfBoundsException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLineProfile, "LineEnd", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.setLocation$D$D(x, this.getY$());
});

Clazz.newMeth(C$, 'translate$D$D',  function (dx, dy) {
this.setLocation$D$D(this.getX$() + dx, this.getY$() + dy);
});

Clazz.newMeth(C$, 'getBounds$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.b$['org.opensourcephysics.media.core.TLineProfile'].getBounds$org_opensourcephysics_media_core_VideoPanel.apply(this.b$['org.opensourcephysics.media.core.TLineProfile'], [vidPanel]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
