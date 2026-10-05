(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.util.ArrayList','java.awt.geom.AffineTransform']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawableGroup", null, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.x=0;
this.y=0;
this.theta=0;
this.drawableList=Clazz.new_($I$(1,1));
this.trDG=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['D',['x','y','theta'],'O',['drawableList','java.util.ArrayList','trDG','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'addDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
if ((drawable != null ) && !this.drawableList.contains$O(drawable) ) {
this.drawableList.add$O(drawable);
}});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var xpix=panel.xToPix$D(0);
var ypix=panel.yToPix$D(0);
var g2=g;
var xt=this.x * panel.getXPixPerUnit$() * Math.cos(this.theta)  + this.y * panel.getYPixPerUnit$() * Math.sin(this.theta) ;
var yt=this.x * panel.getXPixPerUnit$() * Math.sin(this.theta)  - this.y * panel.getYPixPerUnit$() * Math.cos(this.theta) ;
var at=g2.getTransform$();
this.trDG.setTransform$java_awt_geom_AffineTransform(at);
this.trDG.rotate$D$D$D(-this.theta, xpix, ypix);
this.trDG.translate$D$D(xt, yt);
g2.setTransform$java_awt_geom_AffineTransform(this.trDG);
for (var i=0, n=this.drawableList.size$(); i < n; i++) {
this.drawableList.get$I(i).draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g2);
}
g2.setTransform$java_awt_geom_AffineTransform(at);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (_x, _y) {
this.x=_x;
this.y=_y;
});

Clazz.newMeth(C$, 'setX$D',  function (_x) {
this.x=_x;
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'setY$D',  function (_y) {
this.y=_y;
});

Clazz.newMeth(C$, 'getTheta$',  function () {
return this.theta;
});

Clazz.newMeth(C$, 'setTheta$D',  function (_theta) {
this.theta=_theta;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
