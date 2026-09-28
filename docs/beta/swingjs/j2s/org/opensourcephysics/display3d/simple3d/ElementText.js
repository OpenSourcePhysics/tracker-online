(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),p$1={},I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementText','org.opensourcephysics.display3d.simple3d.Object3D','java.awt.geom.AffineTransform','org.opensourcephysics.display.TextLine',['org.opensourcephysics.display3d.simple3d.ElementText','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementText", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.Element', 'org.opensourcephysics.display3d.core.ElementText');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.justify=0;
this.angle=0.0;
this.coordinates=Clazz.array(Double.TYPE, [3]);
this.pixel=Clazz.array(Double.TYPE, [3]);
this.objects=Clazz.array($I$(2), -1, [Clazz.new_($I$(2,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, 0])]);
this.transform=Clazz.new_($I$(3,1));
this.textLine=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['D',['angle'],'I',['justify'],'O',['coordinates','double[]','+pixel','objects','org.opensourcephysics.display3d.simple3d.Object3D[]','transform','java.awt.geom.AffineTransform','textLine','org.opensourcephysics.display.TextLine']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$.apply(this, []);
this.setText$S(text);
}, 1);

Clazz.newMeth(C$, 'setText$S',  function (text) {
this.textLine.setText$S(text);
});

Clazz.newMeth(C$, 'getText$',  function () {
return this.textLine.getText$();
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
this.textLine.setFont$java_awt_Font(font);
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.textLine.getFont$();
});

Clazz.newMeth(C$, 'setJustification$I',  function (justification) {
this.justify=justification;
switch (justification) {
default:
case 0:
this.textLine.setJustification$I(0);
break;
case 1:
this.textLine.setJustification$I(1);
break;
case 2:
this.textLine.setJustification$I(2);
break;
}
});

Clazz.newMeth(C$, 'getJustification$',  function () {
return this.justify;
});

Clazz.newMeth(C$, 'setRotationAngle$D',  function (angle) {
this.angle=angle;
});

Clazz.newMeth(C$, 'getRotationAngle$',  function () {
return this.angle;
});

Clazz.newMeth(C$, 'getObjects3D$',  function () {
if (!this.isReallyVisible$()) {
return null;
}if (this.hasChanged$() || this.needsToProject$() ) {
p$1.projectPoints.apply(this, []);
}return this.objects;
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$I',  function (_g2, _index) {
var theColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), this.objects[0].getDistance$());
p$1.drawIt$java_awt_Graphics2D$java_awt_Color.apply(this, [_g2, theColor]);
});

Clazz.newMeth(C$, 'drawQuickly$java_awt_Graphics2D',  function (_g2) {
if (!this.isReallyVisible$()) {
return;
}if (this.hasChanged$() || this.needsToProject$() ) {
p$1.projectPoints.apply(this, []);
}p$1.drawIt$java_awt_Graphics2D$java_awt_Color.apply(this, [_g2, this.getRealStyle$().getLineColor$()]);
});

Clazz.newMeth(C$, 'getExtrema$DA$DA',  function (min, max) {
min[0]=0;
max[0]=0;
min[1]=0;
max[1]=0;
min[2]=0;
max[2]=0;
this.sizeAndToSpaceFrame$DA(min);
this.sizeAndToSpaceFrame$DA(max);
});

Clazz.newMeth(C$, 'getTargetHit$I$I',  function (x, y) {
if (!this.isReallyVisible$()) {
return null;
}if (this.hasChanged$() || this.needsToProject$() ) {
p$1.projectPoints.apply(this, []);
}if (this.targetPosition.isEnabled$() && (Math.abs(this.pixel[0] - x) < 5 ) && (Math.abs(this.pixel[1] - y) < 5 )  ) {
return this.targetPosition;
}return null;
});

Clazz.newMeth(C$, 'projectPoints',  function () {
this.coordinates[0]=this.coordinates[1]=this.coordinates[2]=0.0;
this.sizeAndToSpaceFrame$DA(this.coordinates);
this.getDrawingPanel3D$().project$DA$DA(this.coordinates, this.pixel);
this.objects[0].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
this.setElementChanged$Z(false);
this.setNeedToProject$Z(false);
}, p$1);

Clazz.newMeth(C$, 'drawIt$java_awt_Graphics2D$java_awt_Color',  function (_g2, _color) {
this.textLine.setColor$java_awt_Color(_color);
if (this.angle != 0.0 ) {
var originalTransform=_g2.getTransform$();
this.transform.setTransform$java_awt_geom_AffineTransform(originalTransform);
this.transform.rotate$D$D$D(this.angle, this.pixel[0], this.pixel[1]);
_g2.setTransform$java_awt_geom_AffineTransform(this.transform);
this.textLine.drawText$java_awt_Graphics$I$I(_g2, (this.pixel[0]|0), (this.pixel[1]|0));
_g2.setTransform$java_awt_geom_AffineTransform(originalTransform);
} else {
this.textLine.drawText$java_awt_Graphics$I$I(_g2, (this.pixel[0]|0), (this.pixel[1]|0));
}}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementText, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementText','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
