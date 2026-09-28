(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),I$=[[0,'java.awt.Color','java.util.ArrayList','org.opensourcephysics.display.axes.CoordinateStringBuilder','java.awt.Font']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CustomAxes", null, 'org.opensourcephysics.display.axes.AbstractAxes', 'org.opensourcephysics.display.axes.DrawableAxes');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.gridColor=$I$(1).lightGray;
this.drawableList=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['gridColor','java.awt.Color','drawableList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_PlottingPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[panel]);C$.$init$.apply(this);
this.defaultLeftGutter=25;
this.defaultTopGutter=25;
this.defaultRightGutter=25;
this.defaultBottomGutter=25;
this.titleLine.setJustification$I(0);
this.titleLine.setFont$java_awt_Font(this.titleFont);
if (panel == null ) {
return;
}panel.setPreferredGutters$I$I$I$I(this.defaultLeftGutter, this.defaultTopGutter, this.defaultRightGutter, this.defaultBottomGutter);
panel.setCoordinateStringBuilder$org_opensourcephysics_display_axes_CoordinateStringBuilder($I$(3).createCartesian$());
panel.setAxes$org_opensourcephysics_display_axes_DrawableAxes(this);
}, 1);

Clazz.newMeth(C$, 'setXLabel$S$S',  function (s, font_name) {
});

Clazz.newMeth(C$, 'setYLabel$S$S',  function (s, font_name) {
});

Clazz.newMeth(C$, 'getXLabel$',  function () {
return "";
});

Clazz.newMeth(C$, 'getYLabel$',  function () {
return "";
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.titleLine.getText$();
});

Clazz.newMeth(C$, 'setTitle$S$S',  function (s, font_name) {
this.titleLine.setText$S(s);
if ((font_name == null ) || font_name.equals$O("") ) {
return;
}this.titleLine.setFont$java_awt_Font($I$(4).decode$S(font_name));
});

Clazz.newMeth(C$, 'setXLog$Z',  function (isLog) {
});

Clazz.newMeth(C$, 'setYLog$Z',  function (isLog) {
});

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.visible=isVisible;
});

Clazz.newMeth(C$, 'setInteriorBackground$java_awt_Color',  function (color) {
this.interiorColor=color;
});

Clazz.newMeth(C$, 'setShowMajorXGrid$Z',  function (showGrid) {
});

Clazz.newMeth(C$, 'setShowMinorXGrid$Z',  function (showGrid) {
});

Clazz.newMeth(C$, 'setShowMajorYGrid$Z',  function (showGrid) {
});

Clazz.newMeth(C$, 'setShowMinorYGrid$Z',  function (showGrid) {
});

Clazz.newMeth(C$, 'addDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
if ((drawable != null ) && !this.drawableList.contains$O(drawable) ) {
this.drawableList.add$O(drawable);
}});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}if (this.interiorColor !== panel.getBackground$() ) {
g.setColor$java_awt_Color(this.interiorColor);
var gw=panel.getLeftGutter$() + panel.getRightGutter$();
var gh=panel.getTopGutter$() + panel.getLeftGutter$();
g.fillRect$I$I$I$I(panel.getLeftGutter$(), panel.getTopGutter$(), panel.getWidth$() - gw, panel.getHeight$() - gh);
g.setColor$java_awt_Color(this.gridColor);
g.drawRect$I$I$I$I(panel.getLeftGutter$(), panel.getTopGutter$(), panel.getWidth$() - gw, panel.getHeight$() - gh);
}var it=this.drawableList.iterator$();
while (it.hasNext$()){
var drawable=it.next$();
drawable.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}
this.titleLine.setX$D((panel.getXMax$() + panel.getXMin$()) / 2);
if (panel.getTopGutter$() > 20) {
this.titleLine.setY$D(panel.getYMax$() + 5 / panel.getYPixPerUnit$());
} else {
this.titleLine.setY$D(panel.getYMax$() - 25 / panel.getYPixPerUnit$());
}this.titleLine.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
