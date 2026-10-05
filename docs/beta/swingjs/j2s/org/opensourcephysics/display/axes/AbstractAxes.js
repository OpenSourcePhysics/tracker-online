(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),I$=[[0,'java.awt.Font','org.opensourcephysics.numerics.Util','java.awt.Color','org.opensourcephysics.display.DrawableTextLine','org.opensourcephysics.tools.FontSizer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractAxes", null, null, 'org.opensourcephysics.display.axes.DrawableAxes');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultLeftGutter=45;
this.defaultTopGutter=25;
this.defaultRightGutter=25;
this.defaultBottomGutter=45;
this.visible=true;
this.titleFont=Clazz.new_($I$(1,1).c$$S$I$I,["Dialog", 1, 14]);
this.labelFont=Clazz.new_($I$(1,1).c$$S$I$I,["SansSerif", 0, 9]);
this.superscriptFont=Clazz.new_($I$(1,1).c$$S$I$I,["SansSerif", 0, 9]);
this.labelFormat=$I$(2).newDecimalFormat$S("0.0");
this.gridcolor=$I$(3).lightGray;
this.interiorColor=$I$(3).white;
this.titleLine=Clazz.new_($I$(4,1).c$$S$D$D,["", 0, 0]);
},1);

C$.$fields$=[['Z',['visible'],'I',['defaultLeftGutter','defaultTopGutter','defaultRightGutter','defaultBottomGutter'],'O',['titleFont','java.awt.Font','+labelFont','+superscriptFont','labelFormat','java.text.DecimalFormat','gridcolor','java.awt.Color','+interiorColor','titleLine','org.opensourcephysics.display.DrawableTextLine','drawingPanel','org.opensourcephysics.display.DrawingPanel']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DrawingPanel',  function (drawingPanel) {
;C$.$init$.apply(this);
this.drawingPanel=drawingPanel.dref$O(this);
this.resizeFonts$D$org_opensourcephysics_display_DrawingPanel($I$(5,"getFactor$I",[$I$(5).getLevel$()]), drawingPanel);
$I$(5,"addListener$S$java_beans_PropertyChangeListener",["level", ((P$.AbstractAxes$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAxes$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.display.axes.AbstractAxes'].resizeFonts$D$org_opensourcephysics_display_DrawingPanel.apply(this.b$['org.opensourcephysics.display.axes.AbstractAxes'], [$I$(5,"getFactor$I",[$I$(5).getLevel$()]), this.b$['org.opensourcephysics.display.axes.AbstractAxes'].drawingPanel]);
});
})()
), Clazz.new_(P$.AbstractAxes$1.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'setDefaultGutters$I$I$I$I',  function (left, top, right, bottom) {
this.defaultLeftGutter=left;
this.defaultTopGutter=top;
this.defaultRightGutter=right;
this.defaultBottomGutter=bottom;
});

Clazz.newMeth(C$, 'resetPanelGutters$',  function () {
this.drawingPanel.setPreferredGutters$I$I$I$I(this.defaultLeftGutter, this.defaultTopGutter, this.defaultRightGutter, this.defaultBottomGutter);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.visible=isVisible;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setInteriorBackground$java_awt_Color',  function (color) {
this.interiorColor=color;
});

Clazz.newMeth(C$, 'getInteriorBackground$',  function () {
return this.interiorColor;
});

Clazz.newMeth(C$, 'resizeFonts$D$org_opensourcephysics_display_DrawingPanel',  function (factor, panel) {
this.labelFont=$I$(5).getResizedFont$java_awt_Font$D(this.labelFont, factor);
this.superscriptFont=$I$(5).getResizedFont$java_awt_Font$D(this.superscriptFont, factor);
this.titleFont=$I$(5).getResizedFont$java_awt_Font$D(this.titleFont, factor);
this.titleLine.setFont$java_awt_Font(this.titleFont);
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.titleLine.getText$();
});

Clazz.newMeth(C$, 'setTitle$S$S',  function (s, font_name) {
this.titleLine.setText$S(s);
if ((font_name == null ) || font_name.equals$O("") ) {
return;
}this.titleLine.setFont$java_awt_Font($I$(1).decode$S(font_name));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
