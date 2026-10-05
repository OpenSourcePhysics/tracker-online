(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),I$=[[0,'org.opensourcephysics.display.axes.XAxis','org.opensourcephysics.display.axes.YAxis','org.opensourcephysics.display.axes.CoordinateStringBuilder','java.awt.Font','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CartesianType3", null, 'org.opensourcephysics.display.axes.AbstractAxes', ['org.opensourcephysics.display.axes.CartesianAxes', 'org.opensourcephysics.display.Interactive']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enabled=true;
this.xlog=false;
this.ylog=false;
},1);

C$.$fields$=[['Z',['enabled','xlog','ylog'],'O',['xaxis','org.opensourcephysics.display.axes.XAxis','yaxis','org.opensourcephysics.display.axes.YAxis']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_PlottingPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[panel]);C$.$init$.apply(this);
this.defaultLeftGutter=30;
this.defaultTopGutter=30;
this.defaultRightGutter=30;
this.defaultBottomGutter=30;
this.titleLine.setJustification$I(0);
this.titleLine.setFont$java_awt_Font(this.titleFont);
this.xaxis=Clazz.new_($I$(1,1));
this.yaxis=Clazz.new_($I$(2,1));
this.xaxis.setEnabled$Z(true);
this.xaxis.setLocationType$I(2);
this.yaxis.setEnabled$Z(true);
this.yaxis.setLocationType$I(2);
if (panel == null ) {
return;
}panel.setCoordinateStringBuilder$org_opensourcephysics_display_axes_CoordinateStringBuilder($I$(3).createCartesian$());
panel.setPreferredGutters$I$I$I$I(this.defaultLeftGutter, this.defaultTopGutter, this.defaultRightGutter, this.defaultBottomGutter);
panel.setAxes$org_opensourcephysics_display_axes_DrawableAxes(this);
}, 1);

Clazz.newMeth(C$, 'setXLabel$S$S',  function (s, font_name) {
this.xaxis.setTitle$S$S(s, font_name);
});

Clazz.newMeth(C$, 'setYLabel$S$S',  function (s, font_name) {
this.yaxis.setTitle$S$S(s, font_name);
});

Clazz.newMeth(C$, 'setTitle$S$S',  function (s, font_name) {
this.titleLine.setText$S(s);
if ((font_name == null ) || font_name.equals$O("") ) {
return;
}this.titleLine.setFont$java_awt_Font($I$(4).decode$S(font_name));
});

Clazz.newMeth(C$, 'getXLabel$',  function () {
return this.xaxis.axisLabel.getText$();
});

Clazz.newMeth(C$, 'getYLabel$',  function () {
return this.yaxis.axisLabel.getText$();
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.titleLine.getText$();
});

Clazz.newMeth(C$, 'setXLog$Z',  function (isLog) {
this.xlog=isLog;
if (isLog) {
this.xaxis.setAxisType$I(1);
} else {
this.xaxis.setAxisType$I(0);
}});

Clazz.newMeth(C$, 'setYLog$Z',  function (isLog) {
this.ylog=isLog;
if (isLog) {
this.yaxis.setAxisType$I(1);
} else {
this.yaxis.setAxisType$I(0);
}});

Clazz.newMeth(C$, 'isXLog$',  function () {
return this.xlog;
});

Clazz.newMeth(C$, 'isYLog$',  function () {
return this.ylog;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}if (this.interiorColor != null ) {
g.setColor$java_awt_Color(this.interiorColor);
var gw=panel.getLeftGutter$() + panel.getRightGutter$();
var gh=panel.getTopGutter$() + panel.getBottomGutter$();
g.fillRect$I$I$I$I(panel.getLeftGutter$(), panel.getTopGutter$(), panel.getWidth$() - gw, panel.getHeight$() - gh);
g.setColor$java_awt_Color($I$(5).lightGray);
g.drawRect$I$I$I$I(panel.getLeftGutter$(), panel.getTopGutter$(), panel.getWidth$() - gw, panel.getHeight$() - gh);
}this.xaxis.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
this.yaxis.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
this.titleLine.setX$D((panel.getXMax$() + panel.getXMin$()) / 2);
if (panel.getTopGutter$() > 20) {
this.titleLine.setY$D(panel.getYMax$() + 5 / panel.getYPixPerUnit$());
} else {
this.titleLine.setY$D(panel.getYMax$() - 25 / panel.getYPixPerUnit$());
}this.titleLine.setColor$java_awt_Color(panel.getForeground$());
this.titleLine.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'setInteriorBackground$java_awt_Color',  function (color) {
this.interiorColor=color;
});

Clazz.newMeth(C$, 'setShowMajorXGrid$Z',  function (showGrid) {
this.xaxis.setShowMajorGrid$Z(showGrid);
if (!showGrid) {
this.setShowMinorXGrid$Z(showGrid);
}});

Clazz.newMeth(C$, 'setShowMinorXGrid$Z',  function (showGrid) {
});

Clazz.newMeth(C$, 'setShowMajorYGrid$Z',  function (showGrid) {
this.yaxis.setShowMajorGrid$Z(showGrid);
if (!showGrid) {
this.setShowMinorYGrid$Z(showGrid);
}});

Clazz.newMeth(C$, 'setShowMinorYGrid$Z',  function (showGrid) {
});

Clazz.newMeth(C$, 'centerAxes$org_opensourcephysics_display_DrawingPanel',  function (panel) {
this.xaxis.setLocation$D((panel.getYMax$() + panel.getYMin$()) / 2);
this.yaxis.setLocation$D((panel.getXMax$() + panel.getXMin$()) / 2);
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (_enabled) {
this.enabled=_enabled;
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.xaxis.setLocation$D(y);
this.yaxis.setLocation$D(x);
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
this.yaxis.setLocation$D(x);
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
this.xaxis.setLocation$D(y);
});

Clazz.newMeth(C$, 'getX$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getY$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return 0;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return false;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!this.visible) {
return null;
}if (this.xaxis.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix) != null ) {
return this.xaxis;
} else if (this.yaxis.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix) != null ) {
return this.yaxis;
} else {
return null;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
