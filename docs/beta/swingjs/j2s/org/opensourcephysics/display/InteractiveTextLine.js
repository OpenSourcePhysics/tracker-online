(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.display.InteractiveTextLine',['java.awt.geom.Rectangle2D','.Float'],'org.opensourcephysics.display.TextLine','java.awt.Color',['org.opensourcephysics.display.InteractiveTextLine','.InteractiveTextLineLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InteractiveTextLine", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.InteractiveShape');
C$.$classes$=[['InteractiveTextLineLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dirty=true;
this.boundsRect=Clazz.new_($I$(2,1).c$$F$F$F$F,[0, 0, 0, 0]);
},1);

C$.$fields$=[['Z',['dirty'],'D',['sx','sy'],'O',['textLine','org.opensourcephysics.display.TextLine','boundsRect','java.awt.geom.Rectangle2D']]]

Clazz.newMeth(C$, 'c$$S$D$D',  function (text, x, y) {
;C$.superclazz.c$$java_awt_Shape$D$D.apply(this,[null, x, y]);C$.$init$.apply(this);
this.textLine=Clazz.new_($I$(3,1).c$$S,[text]);
this.textLine.setJustification$I(0);
this.color=$I$(4).BLACK;
}, 1);

Clazz.newMeth(C$, 'setJustification$I',  function (justification) {
this.textLine.setJustification$I(justification);
});

Clazz.newMeth(C$, 'setText$S',  function (text) {
this.textLine.setText$S(text);
this.dirty=true;
});

Clazz.newMeth(C$, 'getText$',  function () {
return this.textLine.getText$();
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
this.textLine.setFont$java_awt_Font(font);
this.dirty=true;
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.textLine.getFont$();
});

Clazz.newMeth(C$, 'isInside$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if ((this.textLine == null ) || !this.enabled ) {
return false;
}if ((Math.abs(panel.xToPix$D(this.x) - xpix) < 10) && (Math.abs(panel.yToPix$D(this.y) - ypix) < 10) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'checkBoundsChanged',  function () {
if (this.dirty || (this.toPixels.getScaleX$() != this.sx ) || (this.toPixels.getScaleY$() != this.sy )  ) {
this.sx=this.toPixels.getScaleX$();
this.sy=this.toPixels.getScaleY$();
this.dirty=false;
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.textLine.getText$().trim$().equals$O("")) {
return;
}this.textLine.setColor$java_awt_Color(this.color);
this.getPixelPt$org_opensourcephysics_display_DrawingPanel(panel);
if (p$1.checkBoundsChanged.apply(this, [])) this.boundsRect=this.textLine.getStringBounds$java_awt_Graphics(g);
var g2=g;
g2.translate$D$D(this.pixelPt.x, this.pixelPt.y);
g2.rotate$D(-this.theta);
this.textLine.drawText$java_awt_Graphics$I$I(g2, (this.boundsRect.getX$()|0), (this.boundsRect.getY$()|0));
g2.rotate$D(this.theta);
g2.translate$D$D(-this.pixelPt.x, -this.pixelPt.y);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.InteractiveTextLine, "InteractiveTextLineLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var interactiveTextLine=obj;
control.setValue$S$O("text", interactiveTextLine.getText$());
control.setValue$S$D("x", interactiveTextLine.x);
control.setValue$S$D("y", interactiveTextLine.y);
control.setValue$S$Z("is enabled", interactiveTextLine.isEnabled$());
control.setValue$S$Z("is measured", interactiveTextLine.isMeasured$());
control.setValue$S$O("color", interactiveTextLine.color);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$S$D$D,["", 0, 0]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var interactiveTextLine=obj;
var x=control.getDouble$S("x");
var y=control.getDouble$S("y");
interactiveTextLine.setText$S(control.getString$S("text"));
interactiveTextLine.enabled=control.getBoolean$S("is enabled");
interactiveTextLine.enableMeasure=control.getBoolean$S("is measured");
interactiveTextLine.color=control.getObject$S("color");
interactiveTextLine.setXY$D$D(x, y);
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
