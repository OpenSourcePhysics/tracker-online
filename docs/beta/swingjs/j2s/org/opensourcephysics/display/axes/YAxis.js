(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),p$1={},I$=[[0,'java.awt.geom.AffineTransform','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "YAxis", null, 'org.opensourcephysics.display.axes.XYAxis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rot90=$I$(1).getRotateInstance$D(-1.5707963267948966);
},1);

C$.$fields$=[['O',['rot90','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, ["Y Axis"]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setTitle$S(title);
this.axisLabel.setTheta$D(1.5707963267948966);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
var pixLoc=drawingPanel.xToPix$D(this.location);
if (pixLoc < 1) {
this.location=drawingPanel.getXMin$();
}if (pixLoc > drawingPanel.getWidth$() - 1) {
this.location=drawingPanel.getXMax$();
}var g2=g.create$();
g2.clipRect$I$I$I$I(0, 0, drawingPanel.getWidth$(), drawingPanel.getHeight$());
switch (this.locationType) {
case 2:
case 0:
p$1.drawInsideDisplay$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [drawingPanel, g]);
break;
case 1:
p$1.drawInsideGutter$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [drawingPanel, g]);
break;
default:
p$1.drawInsideDisplay$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [drawingPanel, g]);
break;
}
g2.dispose$();
});

Clazz.newMeth(C$, 'drawInsideDisplay$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
var foreground=drawingPanel.getForeground$();
var bottomGutter=drawingPanel.getBottomGutter$();
var rightGutter=drawingPanel.getRightGutter$();
var leftGutter=drawingPanel.getLeftGutter$();
var topGutter=drawingPanel.getTopGutter$();
var fm=g.getFontMetrics$();
var sw=0;
g.setColor$java_awt_Color(foreground);
if (this.locationType == 0) {
this.location=(drawingPanel.getXMax$() + drawingPanel.getXMin$()) / 2;
}var xo=drawingPanel.xToPix$D(this.location);
var yo=drawingPanel.getHeight$() - bottomGutter;
var h=drawingPanel.getHeight$() - bottomGutter - topGutter ;
this.calculateLabels$D$D$I(drawingPanel.getYMin$(), drawingPanel.getYMax$(), 1 + (h/35|0));
var temp_strings=this.label_string;
var temp_values=this.label_value;
if (temp_strings.length != temp_values.length) {
return;
}for (var i=0, n=temp_values.length; i < n; i++) {
if (this.axisType == 0) {
var ypix=drawingPanel.yToPix$D(temp_values[i] * this.decade_multiplier);
if (this.showMajorGrid) {
g.setColor$java_awt_Color(this.majorGridColor);
g.drawLine$I$I$I$I(leftGutter, ypix, drawingPanel.getWidth$() - rightGutter - 2 , ypix);
g.setColor$java_awt_Color(foreground);
}g.drawLine$I$I$I$I(xo - 5, ypix, xo + 5, ypix);
sw=fm.stringWidth$S(temp_strings[i]);
g.drawString$S$I$I(temp_strings[i], xo - sw - 7 , ypix + 5);
} else {
var ypix=drawingPanel.yToPix$D(Math.pow(10, temp_values[i] * this.decade_multiplier));
if (this.showMajorGrid) {
g.setColor$java_awt_Color(this.majorGridColor);
g.drawLine$I$I$I$I(leftGutter, ypix, drawingPanel.getWidth$() - rightGutter - 2 , ypix);
g.setColor$java_awt_Color(foreground);
}g.drawLine$I$I$I$I(xo - 5, ypix, xo + 5, ypix);
sw=fm.stringWidth$S(this.logBase);
this.drawMultiplier$I$I$I$java_awt_Graphics2D(xo - sw - 7 , ypix + 5, (temp_values[i]|0), g);
}}
g.drawLine$I$I$I$I(xo, yo, xo, yo - h);
var g2=g;
if ((this.axisType == 0) && (this.label_exponent != 0) ) {
g2.setColor$java_awt_Color($I$(2).red);
g2.drawString$S$I$I("x10", 5, 18);
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I$F(0, 9.0));
g2.drawString$S$I$I("" + this.label_exponent, 25, 12);
}g2.setColor$java_awt_Color($I$(2).black);
if (this.axisLabel != null ) {
this.axisLabel.setY$D((drawingPanel.getYMax$() + drawingPanel.getYMin$()) / 2);
this.axisLabel.setX$D(drawingPanel.pixToX$I(Math.max((leftGutter/2|0) - 10, 18)));
this.axisLabel.setColor$java_awt_Color(foreground);
this.axisLabel.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(drawingPanel, g2);
}}, p$1);

Clazz.newMeth(C$, 'drawInsideGutter$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
var foreground=drawingPanel.getForeground$();
var bottomGutter=drawingPanel.getBottomGutter$();
var rightGutter=drawingPanel.getRightGutter$();
var leftGutter=drawingPanel.getLeftGutter$();
var topGutter=drawingPanel.getTopGutter$();
var fm=g.getFontMetrics$();
var sw=0;
g.setColor$java_awt_Color(foreground);
var xo=leftGutter;
var yo=drawingPanel.getHeight$() - bottomGutter - 1 ;
var h=drawingPanel.getHeight$() - bottomGutter - topGutter ;
g.drawLine$I$I$I$I(xo, yo, xo, yo - h);
this.calculateLabels$D$D$I(drawingPanel.getYMin$(), drawingPanel.getYMax$(), 1 + (h/35|0));
var temp_strings=this.label_string;
var temp_values=this.label_value;
if (temp_strings.length != temp_values.length) {
return;
}for (var i=0, n=temp_values.length; i < n; i++) {
if (this.axisType == 0) {
var ypix=drawingPanel.yToPix$D(temp_values[i] * this.decade_multiplier);
if (this.showMajorGrid) {
g.setColor$java_awt_Color(this.majorGridColor);
g.drawLine$I$I$I$I(xo, ypix, drawingPanel.getWidth$() - rightGutter - 2 , ypix);
g.setColor$java_awt_Color(foreground);
}g.drawLine$I$I$I$I(xo - 5, ypix, xo, ypix);
sw=fm.stringWidth$S(temp_strings[i]);
g.drawString$S$I$I(temp_strings[i], xo - sw - 7 , ypix + 5);
} else {
var ypix=drawingPanel.yToPix$D(Math.pow(10, temp_values[i] * this.decade_multiplier));
if (this.showMajorGrid) {
g.setColor$java_awt_Color(this.majorGridColor);
g.drawLine$I$I$I$I(xo, ypix, drawingPanel.getWidth$() - rightGutter - 2 , ypix);
g.setColor$java_awt_Color(foreground);
}g.drawLine$I$I$I$I(xo - 5, ypix, xo, ypix);
sw=fm.stringWidth$S(this.logBase);
this.drawMultiplier$I$I$I$java_awt_Graphics2D(xo - sw - 14 , ypix + 5, (temp_values[i]|0), g);
}}
var g2=g;
if ((this.axisType == 0) && (this.label_exponent != 0) ) {
g2.setColor$java_awt_Color($I$(2).red);
g2.drawString$S$I$I("x10", 5, 18);
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I$F(0, 9.0));
g2.drawString$S$I$I("" + this.label_exponent, 25, 12);
}g2.setColor$java_awt_Color($I$(2).black);
if (this.axisLabel != null ) {
this.axisLabel.setY$D((drawingPanel.getYMax$() + drawingPanel.getYMin$()) / 2);
this.axisLabel.setX$D(drawingPanel.pixToX$I(Math.max((leftGutter/2|0) - 10, 18)));
this.axisLabel.setColor$java_awt_Color(foreground);
this.axisLabel.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(drawingPanel, g2);
}}, p$1);

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!this.enabled) {
return null;
}if (Math.abs(panel.xToPix$D(this.location) - xpix) < 2) {
return this;
}return null;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.location=x;
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
this.location=x;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
