(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.VisualizationHints','org.opensourcephysics.numerics.Util','java.text.DecimalFormat',['org.opensourcephysics.display3d.simple3d.VisualizationHints','.VisualizationHintsLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VisualizationHints", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.display3d.core.VisualizationHints');
C$.$classes$=[['VisualizationHintsLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.removeHiddenLines=true;
this.allowQuickRedraw=true;
this.useColorDepth=true;
this.cursorType=1;
this.showCoordinates=0;
this.decorationType=2;
this.formatX="x = 0.00;x = -0.00";
this.formatY="y = 0.00;y = -0.00";
this.formatZ="z = 0.00;z = -0.00";
this.axesLabels=Clazz.array(String, -1, ["X", "Y", "Z"]);
this.theFormatX=$I$(2).newDecimalFormat$S(this.formatX);
this.theFormatY=$I$(2).newDecimalFormat$S(this.formatY);
this.theFormatZ=$I$(2).newDecimalFormat$S(this.formatZ);
},1);

C$.$fields$=[['Z',['removeHiddenLines','allowQuickRedraw','useColorDepth'],'I',['cursorType','showCoordinates','decorationType'],'S',['formatX','formatY','formatZ'],'O',['axesLabels','String[]','theFormatX','java.text.NumberFormat','+theFormatY','+theFormatZ','panel','org.opensourcephysics.display3d.simple3d.DrawingPanel3D']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display3d_simple3d_DrawingPanel3D',  function (_panel) {
;C$.$init$.apply(this);
this.panel=_panel;
}, 1);

Clazz.newMeth(C$, 'setPanel$org_opensourcephysics_display3d_simple3d_DrawingPanel3D',  function (aPanel) {
this.panel=aPanel;
});

Clazz.newMeth(C$, 'setCursorType$I',  function (_type) {
this.cursorType=_type;
if (this.panel != null ) {
this.panel.hintChanged$I(4);
}});

Clazz.newMeth(C$, 'getCursorType$',  function () {
return this.cursorType;
});

Clazz.newMeth(C$, 'setDecorationType$I',  function (_value) {
this.decorationType=_value;
if (this.panel != null ) {
this.panel.hintChanged$I(0);
}});

Clazz.newMeth(C$, 'getDecorationType$',  function () {
return this.decorationType;
});

Clazz.newMeth(C$, 'setAxesLabels$SA',  function (labels) {
this.axesLabels=labels;
if (this.panel != null ) {
this.panel.hintChanged$I(6);
}});

Clazz.newMeth(C$, 'getAxesLabels$',  function () {
return this.axesLabels;
});

Clazz.newMeth(C$, 'setRemoveHiddenLines$Z',  function (_value) {
this.removeHiddenLines=_value;
if (this.panel != null ) {
this.panel.hintChanged$I(1);
}});

Clazz.newMeth(C$, 'isRemoveHiddenLines$',  function () {
return this.removeHiddenLines;
});

Clazz.newMeth(C$, 'setAllowQuickRedraw$Z',  function (_value) {
this.allowQuickRedraw=_value;
if (this.panel != null ) {
this.panel.hintChanged$I(2);
}});

Clazz.newMeth(C$, 'isAllowQuickRedraw$',  function () {
return this.allowQuickRedraw;
});

Clazz.newMeth(C$, 'setUseColorDepth$Z',  function (_value) {
this.useColorDepth=_value;
if (this.panel != null ) {
this.panel.hintChanged$I(3);
}});

Clazz.newMeth(C$, 'isUseColorDepth$',  function () {
return this.useColorDepth;
});

Clazz.newMeth(C$, 'setShowCoordinates$I',  function (location) {
this.showCoordinates=location;
if (this.panel != null ) {
this.panel.hintChanged$I(5);
}});

Clazz.newMeth(C$, 'getShowCoordinates$',  function () {
return this.showCoordinates;
});

Clazz.newMeth(C$, 'setXFormat$S',  function (format) {
this.formatX=format;
if (this.formatX != null ) {
this.theFormatX=Clazz.new_($I$(3,1).c$$S,[this.formatX]);
}});

Clazz.newMeth(C$, 'getXFormat$',  function () {
return this.formatX;
});

Clazz.newMeth(C$, 'setYFormat$S',  function (format) {
this.formatY=format;
if (this.formatY != null ) {
this.theFormatY=Clazz.new_($I$(3,1).c$$S,[this.formatY]);
}});

Clazz.newMeth(C$, 'getYFormat$',  function () {
return this.formatY;
});

Clazz.newMeth(C$, 'setZFormat$S',  function (format) {
this.formatZ=format;
if (this.formatZ != null ) {
this.theFormatZ=Clazz.new_($I$(3,1).c$$S,[this.formatZ]);
}});

Clazz.newMeth(C$, 'getZFormat$',  function () {
return this.formatZ;
});

Clazz.newMeth(C$, 'displayPosition$I$DA',  function (projectionMode, point) {
if (this.showCoordinates < 0) {
return;
}if (point == null ) {
this.panel.setMessage$S$I(null, this.showCoordinates);
return;
}var text="";
switch (projectionMode) {
case 0:
if (this.formatX != null ) {
text=this.theFormatX.format$D(point[0]);
}if (this.formatY != null ) {
text+=", " + this.theFormatY.format$D(point[1]);
}break;
case 1:
if (this.formatX != null ) {
text=this.theFormatX.format$D(point[0]);
}if (this.formatZ != null ) {
text+=", " + this.theFormatZ.format$D(point[2]);
}break;
case 2:
if (this.formatY != null ) {
text=this.theFormatY.format$D(point[1]);
}if (this.formatZ != null ) {
text+=", " + this.theFormatZ.format$D(point[2]);
}break;
default:
if (this.formatX != null ) {
text=this.theFormatX.format$D(point[0]);
}if (this.formatY != null ) {
text+=", " + this.theFormatY.format$D(point[1]);
}if (this.formatZ != null ) {
text+=", " + this.theFormatZ.format$D(point[2]);
}break;
}
if (text.startsWith$S(", ")) {
text=text.substring$I(2);
}this.panel.setMessage$S$I(text, this.showCoordinates);
});

Clazz.newMeth(C$, 'copyFrom$org_opensourcephysics_display3d_core_VisualizationHints',  function (hints) {
this.decorationType=hints.getDecorationType$();
this.cursorType=hints.getCursorType$();
this.axesLabels=hints.getAxesLabels$();
this.removeHiddenLines=hints.isRemoveHiddenLines$();
this.allowQuickRedraw=hints.isAllowQuickRedraw$();
this.useColorDepth=hints.isUseColorDepth$();
this.showCoordinates=hints.getShowCoordinates$();
this.formatX=hints.getXFormat$();
if (this.formatX != null ) {
this.theFormatX=Clazz.new_($I$(3,1).c$$S,[this.formatX]);
}this.formatZ=hints.getYFormat$();
if (this.formatY != null ) {
this.theFormatY=Clazz.new_($I$(3,1).c$$S,[this.formatY]);
}this.formatZ=hints.getZFormat$();
if (this.formatZ != null ) {
this.theFormatZ=Clazz.new_($I$(3,1).c$$S,[this.formatZ]);
}this.panel.hintChanged$I(7);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.VisualizationHints, "VisualizationHintsLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.VisualizationHints','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$org_opensourcephysics_display3d_simple3d_DrawingPanel3D,[null]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
