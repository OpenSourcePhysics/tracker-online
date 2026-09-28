(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),p$1={},I$=[[0,'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XAxis", null, 'org.opensourcephysics.display.axes.XYAxis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, ["X Axis"]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setTitle$S(title);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
var pixLoc=drawingPanel.yToPix$D(this.location);
if (pixLoc < 1) {
this.location=drawingPanel.getYMin$();
}if (pixLoc > drawingPanel.getHeight$() - 1) {
this.location=drawingPanel.getYMax$();
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
this.location=(drawingPanel.getYMax$() + drawingPanel.getYMin$()) / 2;
}var xo=leftGutter;
var yo=drawingPanel.yToPix$D(this.location);
var w=drawingPanel.getWidth$() - leftGutter - rightGutter ;
g.drawLine$I$I$I$I(xo, yo, xo + w, yo);
this.calculateLabels$D$D$I(drawingPanel.getXMin$(), drawingPanel.getXMax$(), 1 + (w/35|0));
var temp_strings=this.label_string;
var temp_values=this.label_value;
if (temp_strings.length != temp_values.length) {
return;
}for (var i=0, n=temp_strings.length; i < n; i++) {
if (this.axisType == 0) {
var xpix=drawingPanel.xToPix$D(temp_values[i] * this.decade_multiplier);
if (this.showMajorGrid) {
g.setColor$java_awt_Color(this.majorGridColor);
g.drawLine$I$I$I$I(xpix, topGutter + 1, xpix, drawingPanel.getHeight$() - bottomGutter - 1 );
g.setColor$java_awt_Color(foreground);
}g.drawLine$I$I$I$I(xpix, yo - 5, xpix, yo + 5);
sw=fm.stringWidth$S(temp_strings[i]);
g.drawString$S$I$I(temp_strings[i], xpix - (sw/2|0), yo + 18);
} else {
var xpix=drawingPanel.xToPix$D(Math.pow(10, temp_values[i] * this.decade_multiplier));
if (this.showMajorGrid) {
g.setColor$java_awt_Color(this.majorGridColor);
g.drawLine$I$I$I$I(xpix, topGutter + 1, xpix, drawingPanel.getHeight$() - bottomGutter - 1 );
g.setColor$java_awt_Color(foreground);
}g.drawLine$I$I$I$I(xpix, yo - 5, xpix, yo + 5);
sw=fm.stringWidth$S(this.logBase);
this.drawMultiplier$I$I$I$java_awt_Graphics2D(xpix - (sw/2|0), yo + 18, (temp_values[i]|0), g);
}}
var ypix=drawingPanel.getHeight$() - Math.max((bottomGutter/2|0), 6);
var g2=g;
var oldFont=g2.getFont$();
if ((this.axisType == 0) && (this.label_exponent != 0) ) {
g2.setColor$java_awt_Color($I$(1).red);
g2.drawString$S$I$I("x10", drawingPanel.getWidth$() - 36, ypix);
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I$F(0, 9.0));
g2.drawString$S$I$I("" + this.label_exponent, drawingPanel.getWidth$() - 16, ypix - 6);
}g2.setColor$java_awt_Color($I$(1).black);
if (this.axisLabel != null ) {
this.axisLabel.setX$D((drawingPanel.getXMax$() + drawingPanel.getXMin$()) / 2);
this.axisLabel.setY$D(drawingPanel.getYMin$() - 20 / drawingPanel.getYPixPerUnit$());
this.axisLabel.setColor$java_awt_Color(foreground);
this.axisLabel.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(drawingPanel, g2);
}g2.setFont$java_awt_Font(oldFont);
}, p$1);

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
var w=drawingPanel.getWidth$() - leftGutter - rightGutter ;
this.calculateLabels$D$D$I(drawingPanel.getXMin$(), drawingPanel.getXMax$(), 1 + (w/35|0));
var temp_strings=this.label_string;
var temp_values=this.label_value;
if (temp_strings.length != temp_values.length) {
return;
}for (var i=0, n=temp_strings.length; i < n; i++) {
if (this.axisType == 0) {
var xpix=drawingPanel.xToPix$D(temp_values[i] * this.decade_multiplier);
if (this.showMajorGrid) {
g.setColor$java_awt_Color(this.majorGridColor);
g.drawLine$I$I$I$I(xpix, topGutter + 1, xpix, yo);
g.setColor$java_awt_Color(foreground);
}g.drawLine$I$I$I$I(xpix, yo, xpix, yo + 5);
sw=fm.stringWidth$S(temp_strings[i]);
g.drawString$S$I$I(temp_strings[i], xpix - (sw/2|0), yo + 18);
} else {
var xpix=drawingPanel.xToPix$D(Math.pow(10, temp_values[i] * this.decade_multiplier));
if (this.showMajorGrid) {
g.setColor$java_awt_Color(this.majorGridColor);
g.drawLine$I$I$I$I(xpix, topGutter + 1, xpix, yo);
g.setColor$java_awt_Color(foreground);
}g.drawLine$I$I$I$I(xpix, yo, xpix, yo + 5);
sw=fm.stringWidth$S(this.logBase);
this.drawMultiplier$I$I$I$java_awt_Graphics2D(xpix - (sw/2|0), yo + 18, (temp_values[i]|0), g);
}}
g.drawLine$I$I$I$I(xo, yo, xo + w, yo);
var ypix=drawingPanel.getHeight$() - Math.max((bottomGutter/2|0) - 15, 6);
var g2=g;
if ((this.axisType == 0) && (this.label_exponent != 0) ) {
g2.setColor$java_awt_Color($I$(1).red);
g2.drawString$S$I$I("x10", drawingPanel.getWidth$() - 36, ypix);
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I$F(0, 9.0));
g2.drawString$S$I$I("" + this.label_exponent, drawingPanel.getWidth$() - 16, ypix - 6);
}g2.setColor$java_awt_Color($I$(1).black);
if (this.axisLabel != null ) {
this.axisLabel.setX$D(drawingPanel.pixToX$I(((drawingPanel.getWidth$() + leftGutter - rightGutter)/2|0)));
var labelFontMetrics=drawingPanel.getFontMetrics$java_awt_Font(this.labelFont);
this.axisLabel.setY$D(drawingPanel.pixToY$I(drawingPanel.getHeight$() - Math.max(bottomGutter - 2 * labelFontMetrics.getHeight$() - 4, 10)));
this.axisLabel.setColor$java_awt_Color(foreground);
this.axisLabel.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(drawingPanel, g2);
}}, p$1);

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!this.enabled) {
return null;
}if (Math.abs(panel.yToPix$D(this.location) - ypix) < 2) {
return this;
}return null;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.location=y;
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
this.location=y;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
