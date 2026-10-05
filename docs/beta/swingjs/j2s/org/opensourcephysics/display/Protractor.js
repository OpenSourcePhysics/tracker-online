(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,['org.opensourcephysics.display.Protractor','.Tip'],'org.opensourcephysics.numerics.Util','org.opensourcephysics.display.InteractiveLabel','java.awt.Color',['java.awt.geom.Arc2D','.Double'],'java.awt.BasicStroke',['java.awt.geom.Line2D','.Double'],'java.awt.geom.GeneralPath']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Protractor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.InteractiveCircle', 'org.opensourcephysics.display.Drawable');
C$.$classes$=[['Tip',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tip=Clazz.new_($I$(1,1),[this, null]);
this.arrowTheta=0;
this.orientation=0;
this.f=$I$(2).newDecimalFormat$S("000");
this.showTheta=false;
this.tauBox=Clazz.new_(["$\\theta$=" + this.f.format$D(this.getTheta$())],$I$(3,1).c$$S);
},1);

C$.$fields$=[['Z',['showTheta'],'D',['arrowTheta','orientation'],'I',['protractorRadius','protractorRadius2','arrowLengthPix'],'O',['tip','org.opensourcephysics.display.Protractor.Tip','f','java.text.DecimalFormat','tauBox','org.opensourcephysics.display.InteractiveLabel']]]

Clazz.newMeth(C$, 'c$$I',  function (protractorRadius) {
Clazz.super_(C$, this);
this.protractorRadius=protractorRadius;
this.protractorRadius2=protractorRadius * 2;
this.arrowLengthPix=protractorRadius;
this.tip.color=$I$(4).BLUE;
this.tauBox.setOffsetX$I(-20);
this.tauBox.setOffsetY$I(5);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [40]);
}, 1);

Clazz.newMeth(C$, 'setTheta$D',  function (angle) {
this.arrowTheta=angle + this.orientation;
});

Clazz.newMeth(C$, 'getTheta$',  function () {
var dr=this.arrowTheta - this.orientation;
return dr - 6.283185307179586 * Math.floor(dr / 6.283185307179586 + 0.5);
});

Clazz.newMeth(C$, 'setOrientation$D',  function (angle) {
this.orientation=angle;
});

Clazz.newMeth(C$, 'getOrientation$',  function () {
return this.orientation;
});

Clazz.newMeth(C$, 'setShowTheta$Z',  function (show) {
this.showTheta=show;
});

Clazz.newMeth(C$, 'isShowTheta$',  function () {
return this.showTheta;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var o=C$.superclazz.prototype.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I.apply(this, [panel, xpix, ypix]);
return (o != null  ? o : (o=this.tip.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix)) != null  ? o : this.tauBox.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix));
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var g2=g;
var i1=panel.xToPix$D(this.x);
var j1=panel.yToPix$D(this.y);
g2.setColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I$I,[240, 40, 40, 40]));
var start=Math.toDegrees(this.orientation);
g2.fill$java_awt_Shape(Clazz.new_($I$(5,1).c$$D$D$D$D$D$D$I,[i1 - this.protractorRadius, j1 - this.protractorRadius, this.protractorRadius2, this.protractorRadius2, start, 180, 2]));
g2.setColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I$I,[40, 40, 240, 40]));
g2.fill$java_awt_Shape(Clazz.new_($I$(5,1).c$$D$D$D$D$D$D$I,[i1 - this.protractorRadius, j1 - this.protractorRadius, this.protractorRadius2, this.protractorRadius2, start + 180, 180, 2]));
g2.setColor$java_awt_Color($I$(4).gray);
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(6,1).c$$F,[0.5]));
for (var i=0; i < 36; i++) {
var at=g2.getTransform$();
at.rotate$D$D$D(-i * 3.141592653589793 / 18, i1, j1);
g2.setTransform$java_awt_geom_AffineTransform(at);
g2.draw$java_awt_Shape(Clazz.new_($I$(7,1).c$$D$D$D$D,[i1 + this.protractorRadius - 5, j1, i1 + this.protractorRadius, j1]));
at.rotate$D$D$D(i * 3.141592653589793 / 18, i1, j1);
g2.setTransform$java_awt_geom_AffineTransform(at);
}
this.tauBox.setText$S$D$D("$\\theta$=" + this.f.format$D(Math.toDegrees(this.getTheta$())), this.x, this.y);
if (this.showTheta) {
this.tauBox.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}var at=g2.getTransform$();
at.rotate$D$D$D(-this.arrowTheta, i1, j1);
g2.setTransform$java_awt_geom_AffineTransform(at);
g2.setColor$java_awt_Color($I$(4).RED);
var currentStroke=g2.getStroke$();
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(6,1).c$$F,[1.5]));
g2.draw$java_awt_Shape(Clazz.new_($I$(7,1).c$$D$D$D$D,[i1, j1, i1 + this.arrowLengthPix, j1]));
var arrowHead=Clazz.new_($I$(8,1));
g2.draw$java_awt_Shape(Clazz.new_($I$(7,1)));
arrowHead.moveTo$F$F((i1 + this.arrowLengthPix), j1);
arrowHead.lineTo$F$F((i1 + this.arrowLengthPix - 15), (j1 - 5));
arrowHead.lineTo$F$F((i1 + this.arrowLengthPix - 15), (j1 + 5));
arrowHead.closePath$();
g2.fill$java_awt_Shape(arrowHead);
g2.draw$java_awt_Shape(arrowHead);
at.rotate$D$D$D(this.arrowTheta, i1, j1);
g2.setTransform$java_awt_geom_AffineTransform(at);
g2.setStroke$java_awt_Stroke(currentStroke);
var length=this.arrowLengthPix / panel.getXPixPerUnit$();
this.tip.setXY$D$D(this.x + length * Math.cos(this.arrowTheta), this.y + length * Math.sin(this.arrowTheta));
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Protractor, "Tip", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.InteractiveCircle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.x=x;
this.y=y;
this.b$['org.opensourcephysics.display.Protractor'].arrowTheta=Math.atan2(y - this.b$['org.opensourcephysics.display.Protractor'].y, x - this.b$['org.opensourcephysics.display.Protractor'].x);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
