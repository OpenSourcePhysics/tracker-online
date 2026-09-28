(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackableCircle", null, 'org.opensourcephysics.display.Circle', 'org.opensourcephysics.media.core.Trackable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['n']]]

Clazz.newMeth(C$, 'c$$I$D$D',  function (n, imageX, imageY) {
;C$.superclazz.c$$D$D.apply(this,[imageX, imageY]);C$.$init$.apply(this);
this.n=n;
this.color=$I$(1).green;
}, 1);

Clazz.newMeth(C$, 'getFrameNumber$',  function () {
return this.n;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel"))) {
return;
}var vidPanel=panel;
var x=this.getX$();
var y=this.getY$();
if (!vidPanel.isDrawingInImageSpace$()) {
x=vidPanel.getCoords$().imageToWorldX$I$D$D(this.n, this.getX$(), this.getY$());
y=vidPanel.getCoords$().imageToWorldY$I$D$D(this.n, this.getX$(), this.getY$());
}var xpix=panel.xToPix$D(x) - this.pixRadius;
var ypix=panel.yToPix$D(y) - this.pixRadius;
g.setColor$java_awt_Color(this.color);
g.fillOval$I$I$I$I(xpix, ypix, 2 * this.pixRadius, 2 * this.pixRadius);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
