(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.numerics.LogBase10Function','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.numerics.FunctionTransform','org.opensourcephysics.display.axes.CartesianInteractive','org.opensourcephysics.display.axes.CustomAxes','org.opensourcephysics.display.axes.PolarType2','java.awt.Color',['org.opensourcephysics.display.PlottingPanel','.PlottingPanelLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PlottingPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.InteractivePanel');
C$.$classes$=[['PlottingPanelLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id'],'O',['axes','org.opensourcephysics.display.axes.DrawableAxes']]
,['D',['log10'],'I',['ppid'],'O',['logBase10Function','org.opensourcephysics.numerics.LogBase10Function']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, plotTitle) {
C$.c$$S$S$S$I$I.apply(this, [xlabel, ylabel, plotTitle, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (_xAxisType, _yAxisType) {
C$.c$$S$S$S$I$I.apply(this, ["x", "y", $I$(3).getString$S("PlottingPanel.DefaultTitle"), _xAxisType, _yAxisType]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I$I',  function (xlabel, ylabel, plotTitle, xAxisType, yAxisType) {
Clazz.super_(C$, this);
this.initAxes$();
this.id=++C$.ppid;
this.axes.setXLabel$S$S(xlabel, null);
this.axes.setYLabel$S$S(ylabel, null);
this.axes.setTitle$S$S(plotTitle, null);
this.pixelTransform=Clazz.new_($I$(4,1));
(this.pixelTransform).setXFunction$org_opensourcephysics_numerics_InvertibleFunction(C$.logBase10Function);
(this.pixelTransform).setYFunction$org_opensourcephysics_numerics_InvertibleFunction(C$.logBase10Function);
this.logScaleX=(xAxisType == 1);
this.logScaleY=(yAxisType == 1);
this.setLogScale$Z$Z(this.logScaleX, this.logScaleY);
}, 1);

Clazz.newMeth(C$, 'setXYFunction$Z$Z',  function (logx, logy) {
var ft=this.pixelTransform;
ft.setApplyXFunction$Z(logx);
ft.setApplyYFunction$Z(logy);
}, p$1);

Clazz.newMeth(C$, 'getInteractive$',  function () {
var iad=C$.superclazz.prototype.getInteractive$.apply(this, []);
return (iad == null  && this.axes.isInteractive$()  ? (this.axes).findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(this, this.mouseEvent.getX$(), this.mouseEvent.getY$()) : iad);
});

Clazz.newMeth(C$, 'getAxes$',  function () {
return this.axes;
});

Clazz.newMeth(C$, 'initAxes$',  function () {
Clazz.new_($I$(5,1).c$$org_opensourcephysics_display_PlottingPanel,[this]);
});

Clazz.newMeth(C$, 'setAxes$org_opensourcephysics_display_axes_DrawableAxes',  function (_axes) {
if (this.axes != null  && this.axes !== _axes   && Clazz.instanceOf(this.axes, "org.opensourcephysics.display.axes.CartesianInteractive") ) {
(this.axes).dispose$();
}this.axes=_axes;
if (this.axes == null ) {
this.axes=Clazz.new_($I$(6,1).c$$org_opensourcephysics_display_PlottingPanel,[this]);
this.setPreferredGutters$I$I$I$I(0, 0, 0, 0);
this.setClipAtGutter$Z(false);
this.axes.setVisible$Z(false);
} else {
this.setClipAtGutter$Z(true);
}});

Clazz.newMeth(C$, 'setPolar$S$D',  function (plotTitle, deltaR) {
if (this.logScaleX || this.logScaleY ) {
System.err.println$S("The axes type cannot be swithed when using logarithmetic scales.");
return;
}var axes=Clazz.new_($I$(7,1).c$$org_opensourcephysics_display_PlottingPanel,[this]);
axes.setDeltaR$D(deltaR);
axes.setDeltaTheta$D(0.39269908169872414);
this.setTitle$S(plotTitle);
this.setSquareAspect$Z(true);
this.setClipAtGutter$Z(true);
});

Clazz.newMeth(C$, 'setCartesian$S$S$S',  function (xLabel, yLabel, plotTitle) {
this.axes=Clazz.new_($I$(5,1).c$$org_opensourcephysics_display_PlottingPanel,[this]);
this.axes.setXLabel$S$S(xLabel, null);
this.axes.setYLabel$S$S(yLabel, null);
this.axes.setTitle$S$S(plotTitle, null);
this.setClipAtGutter$Z(true);
});

Clazz.newMeth(C$, 'setXLabel$S',  function (label) {
this.axes.setXLabel$S$S(label, null);
});

Clazz.newMeth(C$, 'setYLabel$S',  function (label) {
this.axes.setYLabel$S$S(label, null);
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
this.axes.setTitle$S$S(title, null);
});

Clazz.newMeth(C$, 'setXLabel$S$S',  function (label, font_name) {
this.axes.setXLabel$S$S(label, font_name);
});

Clazz.newMeth(C$, 'setYLabel$S$S',  function (label, font_name) {
this.axes.setYLabel$S$S(label, font_name);
});

Clazz.newMeth(C$, 'setTitle$S$S',  function (title, font_name) {
this.axes.setTitle$S$S(title, font_name);
});

Clazz.newMeth(C$, 'setAxesVisible$Z',  function (isVisible) {
this.axes.setVisible$Z(isVisible);
});

Clazz.newMeth(C$, 'setLogScale$Z$Z',  function (_logScaleX, _logScaleY) {
if (Clazz.instanceOf(this.axes, "org.opensourcephysics.display.axes.CartesianAxes")) {
(this.axes).setXLog$Z(_logScaleX);
this.logScaleX=_logScaleX;
} else {
this.logScaleX=false;
}if (Clazz.instanceOf(this.axes, "org.opensourcephysics.display.axes.CartesianAxes")) {
(this.axes).setYLog$Z(_logScaleY);
this.logScaleY=_logScaleY;
} else {
this.logScaleY=false;
}});

Clazz.newMeth(C$, 'setLogScaleX$Z',  function (_logScaleX) {
if (Clazz.instanceOf(this.axes, "org.opensourcephysics.display.axes.CartesianAxes")) {
(this.axes).setXLog$Z(_logScaleX);
this.logScaleX=_logScaleX;
} else {
this.logScaleX=false;
}});

Clazz.newMeth(C$, 'setLogScaleY$Z',  function (_logScaleY) {
if (Clazz.instanceOf(this.axes, "org.opensourcephysics.display.axes.CartesianAxes")) {
(this.axes).setYLog$Z(_logScaleY);
this.logScaleY=_logScaleY;
} else {
this.logScaleY=false;
}});

Clazz.newMeth(C$, 'computeGutters$',  function () {
this.resetGutters$();
var interiorDimension=null;
if (this.dimensionSetter != null ) {
interiorDimension=this.dimensionSetter.getInterior$org_opensourcephysics_display_DrawingPanel(this);
}if (Clazz.instanceOf(this.axes, "org.opensourcephysics.display.Dimensioned")) {
var axesInterior=(this.axes).getInterior$org_opensourcephysics_display_DrawingPanel(this);
if (axesInterior != null ) {
interiorDimension=axesInterior;
}}if (interiorDimension != null ) {
this.squareAspect=false;
this.adjustableGutter=false;
this.leftGutter=this.rightGutter=(Math.max(0, this.getWidth$() - interiorDimension.width)/2|0);
this.topGutter=this.bottomGutter=(Math.max(0, this.getHeight$() - interiorDimension.height)/2|0);
}});

Clazz.newMeth(C$, 'paintFirst$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color(this.getBackground$());
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
g.setColor$java_awt_Color($I$(8).black);
if ((this.leftGutterPreferred > 0) || (this.topGutterPreferred > 0) || (this.rightGutterPreferred > 0) || (this.bottomGutterPreferred > 0)  ) {
this.axes.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(this, g);
}});

Clazz.newMeth(C$, 'pixToX$I',  function (pix) {
if (this.logScaleX) {
return Math.pow(10, C$.superclazz.prototype.pixToX$I.apply(this, [pix]));
}return C$.superclazz.prototype.pixToX$I.apply(this, [pix]);
});

Clazz.newMeth(C$, 'xToPix$D',  function (x) {
if (this.logScaleX) {
if (x <= 0 ) {
x=Math.max(1.4E-45, this.xmin);
}return C$.superclazz.prototype.xToPix$D.apply(this, [C$.logBase10$D(x)]);
}return C$.superclazz.prototype.xToPix$D.apply(this, [x]);
});

Clazz.newMeth(C$, 'xToGraphics$D',  function (x) {
if (this.logScaleX) {
if (x <= 0 ) {
x=Math.max(1.4E-45, this.xmin);
}return C$.superclazz.prototype.xToGraphics$D.apply(this, [C$.logBase10$D(x)]);
}return C$.superclazz.prototype.xToGraphics$D.apply(this, [x]);
});

Clazz.newMeth(C$, 'pixToY$I',  function (pix) {
if (this.logScaleY) {
return Math.pow(10, C$.superclazz.prototype.pixToY$I.apply(this, [pix]));
}return C$.superclazz.prototype.pixToY$I.apply(this, [pix]);
});

Clazz.newMeth(C$, 'yToPix$D',  function (y) {
if (this.logScaleY) {
if (y <= 0 ) {
y=Math.max(1.4E-45, this.ymin);
}return C$.superclazz.prototype.yToPix$D.apply(this, [C$.logBase10$D(y)]);
}return C$.superclazz.prototype.yToPix$D.apply(this, [y]);
});

Clazz.newMeth(C$, 'yToGraphics$D',  function (y) {
if (this.logScaleY) {
if (y <= 0 ) {
y=Math.max(1.4E-45, this.ymin);
}return C$.superclazz.prototype.yToGraphics$D.apply(this, [C$.logBase10$D(y)]);
}return C$.superclazz.prototype.yToGraphics$D.apply(this, [y]);
});

Clazz.newMeth(C$, 'getBottomGutter$',  function () {
return Math.max(this.bottomGutter, this.bottomGutterPreferred);
});

Clazz.newMeth(C$, 'getTopGutter$',  function () {
return Math.max(this.topGutter, this.topGutterPreferred);
});

Clazz.newMeth(C$, 'setPixelScale$',  function () {
this.xmin=this.xminPreferred;
this.xmax=this.xmaxPreferred;
this.ymin=this.yminPreferred;
this.ymax=this.ymaxPreferred;
if ((this.dimensionSetter == null )) {
this.leftGutter=Math.max(this.leftGutter, this.leftGutterPreferred);
this.topGutter=Math.max(this.topGutter, this.topGutterPreferred);
this.rightGutter=Math.max(this.rightGutter, this.rightGutterPreferred);
this.bottomGutter=Math.max(this.bottomGutter, this.bottomGutterPreferred);
}if (this.logScaleX) {
this.xmin=C$.logBase10$D(Math.max(this.xmin, 1.0E-30));
this.xmax=C$.logBase10$D(Math.max(this.xmax, 1.0E-30));
if (this.xmin == 0 ) {
this.xmin=1.0E-8;
}if (this.xmax == 0 ) {
this.xmax=Math.max(this.xmin + 1.0E-8, 1.0E-8);
}}if (this.logScaleY) {
this.ymin=C$.logBase10$D(Math.max(this.ymin, 1.0E-30));
this.ymax=C$.logBase10$D(Math.max(this.ymax, 1.0E-30));
if (this.ymin == 0 ) {
this.ymin=1.0E-8;
}if (this.ymax == 0 ) {
this.ymax=Math.max(this.ymin + 1.0E-8, 1.0E-8);
}}this.lastWidth=this.getWidth$();
this.lastHeight=this.getHeight$();
if (this.fixedPixelPerUnit) {
this.xmin=(this.xmaxPreferred + this.xminPreferred) / 2 - Math.max(this.lastWidth - this.leftGutter - this.rightGutter - 1 , 1) / this.xPixPerUnit / 2 ;
this.xmax=(this.xmaxPreferred + this.xminPreferred) / 2 + Math.max(this.lastWidth - this.leftGutter - this.rightGutter - 1 , 1) / this.xPixPerUnit / 2 ;
this.ymin=(this.ymaxPreferred + this.yminPreferred) / 2 - Math.max(this.lastHeight - this.bottomGutter - this.topGutter - 1 , 1) / this.yPixPerUnit / 2 ;
this.ymax=(this.ymaxPreferred + this.yminPreferred) / 2 + Math.max(this.lastHeight - this.bottomGutter - this.topGutter - 1 , 1) / this.yPixPerUnit / 2 ;
p$1.setXYFunction$Z$Z.apply(this, [false, false]);
this.pixelTransform.setTransform$D$D$D$D$D$D(this.xPixPerUnit, 0, 0, -this.yPixPerUnit, -this.xmin * this.xPixPerUnit + this.leftGutter, this.ymax * this.yPixPerUnit + this.topGutter);
this.pixelTransform.getMatrix$DA(this.pixelMatrix);
return;
}this.xPixPerUnit=(this.lastWidth - this.leftGutter - this.rightGutter ) / (this.xmax - this.xmin);
this.yPixPerUnit=(this.lastHeight - this.bottomGutter - this.topGutter ) / (this.ymax - this.ymin);
if (this.squareAspect) {
if (this.adjustableGutter) {
if (Math.abs(this.xPixPerUnit / this.yPixPerUnit) >= 1 ) {
this.xPixPerUnit=this.yPixPerUnit;
var gutter=(this.lastWidth - Math.abs((this.xmax - this.xmin) * this.xPixPerUnit));
this.leftGutter=((gutter / 2.0 + this.leftGutterPreferred - this.rightGutterPreferred + 0.5)|0);
this.rightGutter=((gutter - this.leftGutter - 0.5 )|0);
this.leftGutter=Math.max(0, this.leftGutter);
this.rightGutter=Math.max(0, this.rightGutter);
} else {
this.yPixPerUnit=this.xPixPerUnit;
var gutter=this.lastHeight - Math.abs((this.ymax - this.ymin) * this.yPixPerUnit);
this.topGutter=((gutter / 2.0 + this.topGutterPreferred - this.bottomGutterPreferred + 0.5)|0);
this.bottomGutter=((gutter - this.topGutter)|0);
this.topGutter=Math.max(0, this.topGutter);
this.bottomGutter=Math.max(0, this.bottomGutter);
}} else {
var stretch=Math.abs(this.xPixPerUnit / this.yPixPerUnit);
if (stretch >= 1 ) {
stretch=Math.min(stretch, this.lastWidth);
this.xmin=this.xminPreferred - (this.xmaxPreferred - this.xminPreferred) * (stretch - 1) / 2.0;
this.xmax=this.xmaxPreferred + (this.xmaxPreferred - this.xminPreferred) * (stretch - 1) / 2.0;
this.xPixPerUnit=(this.lastWidth - this.leftGutter - this.rightGutter ) / (this.xmax - this.xmin);
} else {
stretch=Math.max(stretch, 1.0 / this.lastHeight);
this.ymin=this.yminPreferred - (this.ymaxPreferred - this.yminPreferred) * (1.0 / stretch - 1) / 2.0;
this.ymax=this.ymaxPreferred + (this.ymaxPreferred - this.yminPreferred) * (1.0 / stretch - 1) / 2.0;
this.yPixPerUnit=(this.lastHeight - this.bottomGutter - this.topGutter ) / (this.ymax - this.ymin);
}}}p$1.setXYFunction$Z$Z.apply(this, [this.logScaleX, this.logScaleY]);
this.pixelTransform.setTransform$D$D$D$D$D$D(this.xPixPerUnit, 0, 0, -this.yPixPerUnit, -this.xmin * this.xPixPerUnit + this.leftGutter, this.ymax * this.yPixPerUnit + this.topGutter);
this.pixelTransform.getMatrix$DA(this.pixelMatrix);
});

Clazz.newMeth(C$, 'logBase10$D',  function (x) {
return Math.log(x) / C$.log10;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(9,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.log10=Math.log(10);
C$.logBase10Function=Clazz.new_($I$(2,1));
C$.ppid=0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PlottingPanel, "PlottingPanelLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display.DrawingPanel','.DrawingPanelLoader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var panel=obj;
control.setValue$S$O("title", panel.axes.getTitle$());
control.setValue$S$O("x axis label", panel.axes.getXLabel$());
control.setValue$S$O("y axis label", panel.axes.getYLabel$());
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var title=control.getString$S("title");
var xlabel=control.getString$S("x axis label");
var ylabel=control.getString$S("y axis label");
return Clazz.new_($I$(1,1).c$$S$S$S,[xlabel, ylabel, title]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var panel=obj;
panel.setTitle$S(control.getString$S("title"));
panel.setXLabel$S(control.getString$S("x axis label"));
panel.setYLabel$S(control.getString$S("y axis label"));
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
