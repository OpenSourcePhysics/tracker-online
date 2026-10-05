(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,['java.awt.geom.Ellipse2D','.Double'],'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TCircle", null, 'org.opensourcephysics.media.core.TShape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.circle=Clazz.new_($I$(1,1));
this.radius=5;
},1);

C$.$fields$=[['I',['radius','n'],'O',['circle','java.awt.geom.Ellipse2D']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
C$.c$$I$D$D.apply(this, [n, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$D$D',  function (n, x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
this.n=n;
this.setColor$java_awt_Color($I$(2).red);
}, 1);

Clazz.newMeth(C$, 'setRadius$I',  function (radius) {
this.radius=radius;
});

Clazz.newMeth(C$, 'getRadius$',  function () {
return this.radius;
});

Clazz.newMeth(C$, 'getFrameNumber$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
return this.n;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel"))) {
return null;
}var vidPanel=panel;
if (!this.isEnabled$() || !this.isVisible$() ) {
return null;
}if (this.getBounds$org_opensourcephysics_media_core_VideoPanel(vidPanel).contains$I$I(xpix, ypix)) {
return this;
}return null;
});

Clazz.newMeth(C$, 'getShape$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
var p=this.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
var xpix=p.x - this.radius;
var ypix=p.y - this.radius;
if (this.stroke == null ) {
this.circle.setFrame$D$D$D$D(xpix, ypix, 2 * this.radius, 2 * this.radius);
return this.circle;
}var w=this.stroke.getLineWidth$();
this.circle.setFrame$D$D$D$D(xpix + w / 2, ypix + w / 2, 2 * this.radius - w, 2 * this.radius - w);
return this.stroke.createStrokedShape$java_awt_Shape(this.circle);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
