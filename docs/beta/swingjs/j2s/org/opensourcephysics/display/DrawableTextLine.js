(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.display.DrawableTextLine',['java.awt.geom.Point2D','.Double'],'java.awt.Color','org.opensourcephysics.display.OSPRuntime',['org.opensourcephysics.display.DrawableTextLine','.DrawableTextLineLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawableTextLine", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.TextLine', 'org.opensourcephysics.display.Drawable');
C$.$classes$=[['DrawableTextLineLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.theta=0;
this.pixelXY=false;
this.pixelPt=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['pixelXY'],'D',['x','y','theta'],'I',['imgWidth','imgHeight'],'O',['$image','java.awt.image.BufferedImage','pixelPt','java.awt.geom.Point2D.Double']]]

Clazz.newMeth(C$, 'c$$S$D$D',  function (text, x, y) {
;C$.superclazz.c$$S.apply(this,[text]);C$.$init$.apply(this);
this.x=x;
this.y=y;
this.color=$I$(3).BLACK;
}, 1);

Clazz.newMeth(C$, 'setPixelXY$Z',  function (enable) {
this.pixelXY=enable;
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
this.x=x;
});

Clazz.newMeth(C$, 'setTheta$D',  function (theta) {
this.theta=theta;
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
this.y=y;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if ((this.text == null ) || this.text.equals$O("") ) {
return;
}var oldFont=g.getFont$();
if (this.pixelXY) {
this.drawWithPix$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
} else {
this.drawWithWorld$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}g.setFont$java_awt_Font(oldFont);
});

Clazz.newMeth(C$, 'drawWithPix$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if ($I$(4).isMac$()) {
p$1.drawWithPixMac$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
} else {
p$1.drawWithPixWindows$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
}});

Clazz.newMeth(C$, 'drawWithPixWindows$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.theta != 0 ) {
this.drawRotatedText$D$D$D$java_awt_Graphics(this.theta, this.x, this.y, g);
} else {
this.drawText$java_awt_Graphics$I$I(g, (this.x|0), (this.y|0));
}}, p$1);

Clazz.newMeth(C$, 'drawWithPixMac$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.theta == 0 ) {
p$1.drawWithPixWindows$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
return;
}this.drawTextImageRotated$java_awt_image_ImageObserver$java_awt_Graphics$D$D$D(panel, g, this.theta, this.x, this.y);
}, p$1);

Clazz.newMeth(C$, 'drawWithWorld$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if ($I$(4).isMac$()) {
p$1.drawWithWorldMac$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
} else {
p$1.drawWithWorldWindows$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
}});

Clazz.newMeth(C$, 'drawWithWorldMac$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.theta == 0 ) {
p$1.drawWithWorldWindows$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
return;
}C$.superclazz.prototype.drawTextImageRotated$java_awt_image_ImageObserver$java_awt_Graphics$D$D$D.apply(this, [panel, g, this.theta, this.x, this.y]);
}, p$1);

Clazz.newMeth(C$, 'drawWithWorldWindows$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.pixelPt.setLocation$D$D(this.x, this.y);
this.trTL.setTransform$java_awt_geom_AffineTransform(panel.getPixelTransform$());
this.trTL.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.pixelPt, this.pixelPt);
if (this.theta != 0 ) {
this.trTL.setToRotation$D$D$D(-this.theta, this.pixelPt.x, this.pixelPt.y);
(g).transform$java_awt_geom_AffineTransform(this.trTL);
this.drawText$java_awt_Graphics$I$I(g, (this.pixelPt.x|0), (this.pixelPt.y|0));
this.trTL.setToRotation$D$D$D(this.theta, this.pixelPt.x, this.pixelPt.y);
(g).transform$java_awt_geom_AffineTransform(this.trTL);
} else {
this.drawText$java_awt_Graphics$I$I(g, (this.pixelPt.x|0), (this.pixelPt.y|0));
}}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawableTextLine, "DrawableTextLineLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var drawableTextLine=obj;
control.setValue$S$O("text", drawableTextLine.getText$());
control.setValue$S$D("x", drawableTextLine.x);
control.setValue$S$D("y", drawableTextLine.y);
control.setValue$S$D("theta", drawableTextLine.theta);
control.setValue$S$O("color", drawableTextLine.color);
control.setValue$S$Z("pixel position", drawableTextLine.pixelXY);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$S$D$D,["", 0, 0]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var drawableTextLine=obj;
drawableTextLine.x=control.getDouble$S("x");
drawableTextLine.y=control.getDouble$S("y");
drawableTextLine.theta=control.getDouble$S("theta");
drawableTextLine.pixelXY=control.getBoolean$S("pixel position");
drawableTextLine.setText$S(control.getString$S("text"));
drawableTextLine.color=control.getObject$S("color");
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
