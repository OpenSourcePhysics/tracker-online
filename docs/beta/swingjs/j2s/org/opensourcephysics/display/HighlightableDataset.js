(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.display.Dataset','org.opensourcephysics.display.HighlightableDataset','java.awt.Color',['java.awt.geom.Rectangle2D','.Double'],'java.util.BitSet',['org.opensourcephysics.display.HighlightableDataset','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HighlightableDataset", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.Dataset', 'org.opensourcephysics.display.Interactive');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.highlightColor=Clazz.new_($I$(4,1).c$$I$I$I$I,[255, 255, 0, 128]);
this.hitShapes=Clazz.array($I$(5), [16]);
this.hitIndex=-1;
this.screenCoordinates=Clazz.array(Double.TYPE, [2, null]);
},1);

C$.$fields$=[['I',['hitIndex','previousLen'],'O',['highlighted','java.util.BitSet','+previous','highlightColor','java.awt.Color','hitShapes','java.awt.geom.Rectangle2D.Double[]','screenCoordinates','double[][]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (markerColor) {
;C$.superclazz.c$$java_awt_Color.apply(this,[markerColor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clear$',  function () {
this.previousLen=this.xpoints.length;
C$.superclazz.prototype.clear$.apply(this, []);
if (this.previous == null ) {
this.previous=Clazz.new_($I$(6,1));
this.highlighted=Clazz.new_($I$(6,1));
}this.previous.clear$();
this.previous.or$java_util_BitSet(this.highlighted);
this.highlighted.clear$();
});

Clazz.newMeth(C$, 'restoreHighlights$',  function () {
if (this.previous != null  && this.previousLen == this.xpoints.length ) {
this.highlighted.clear$();
this.highlighted.or$java_util_BitSet(this.previous);
}});

Clazz.newMeth(C$, 'clearHighlights$',  function () {
this.highlighted.clear$();
});

Clazz.newMeth(C$, 'setHighlighted$I$Z',  function (i, highlight) {
this.highlighted.set$I$Z(i, highlight);
});

Clazz.newMeth(C$, 'isHighlighted$I',  function (n) {
return this.highlighted.get$I(n);
});

Clazz.newMeth(C$, 'setHighlightColor$java_awt_Color',  function (color) {
this.highlightColor=Clazz.new_([color.getRed$(), color.getGreen$(), color.getBlue$(), 128],$I$(4,1).c$$I$I$I$I);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
if (!this.drawable$()) return;
p$1.setScreenCoordinates$org_opensourcephysics_display_DrawingPanel.apply(this, [drawingPanel]);
var offset=this.getMarkerSize$() + 4;
p$1.setHitShapes$I.apply(this, [offset]);
var g2=g.create$();
$I$(2).drawClip$java_awt_Graphics2D$org_opensourcephysics_display_DrawingPanel$I(g2, drawingPanel, offset);
C$.superclazz.prototype.drawData$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D.apply(this, [drawingPanel, g2]);
g2.setColor$java_awt_Color(this.highlightColor);
for (var i=this.highlighted.nextSetBit$I(0); i >= 0; i=this.highlighted.nextSetBit$I(i + 1)) {
if (i >= this.hitShapes.length) {
} else if (this.hitShapes[i] != null ) {
g2.fill$java_awt_Shape(this.hitShapes[i]);
}}
g2.dispose$();
});

Clazz.newMeth(C$, 'setScreenCoordinates$org_opensourcephysics_display_DrawingPanel',  function (drawingPanel) {
var xValues=this.getXPointsRaw$();
var yValues=this.getYPointsRaw$();
if (this.screenCoordinates[0] == null  || this.screenCoordinates[0].length != this.index ) {
this.screenCoordinates[0]=Clazz.array(Double.TYPE, [this.index]);
this.screenCoordinates[1]=Clazz.array(Double.TYPE, [this.index]);
}for (var i=0; i < this.index; i++) {
if (Double.isNaN$D(yValues[i])) {
this.screenCoordinates[1][i]=NaN;
} else {
this.screenCoordinates[0][i]=drawingPanel.xToPix$D(xValues[i]);
this.screenCoordinates[1][i]=drawingPanel.yToPix$D(yValues[i]);
}}
}, p$1);

Clazz.newMeth(C$, 'setHitShapes$I',  function (offset) {
var edge=2 * offset;
if (this.hitShapes.length < this.index) this.hitShapes=Clazz.array($I$(5), [this.index]);
for (var i=0; i < this.index; i++) {
var yp=this.screenCoordinates[1][i];
if (Double.isNaN$D(yp)) {
this.hitShapes[i]=null;
continue;
}var xp=this.screenCoordinates[0][i];
if (this.hitShapes[i] == null ) this.hitShapes[i]=Clazz.new_($I$(5,1).c$$D$D$D$D,[xp - offset, yp - offset, edge, edge]);
 else this.hitShapes[i].setRect$D$D$D$D(xp - offset, yp - offset, edge, edge);
}
}, p$1);

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var dim=panel.getSize$();
var l=panel.getLeftGutter$();
var r=panel.getRightGutter$();
if ((xpix < l) || (xpix > dim.width - r) ) {
return null;
}var t=panel.getTopGutter$();
var b=panel.getBottomGutter$();
if ((ypix < t) || (ypix > dim.height - b) ) {
return null;
}this.hitIndex=-1;
for (var i=0, n=Math.min(this.hitShapes.length, this.index); i < n; i++) {
if (this.hitShapes[i] != null  && this.hitShapes[i].contains$D$D(xpix, ypix) ) {
this.hitIndex=i;
return this;
}}
return null;
});

Clazz.newMeth(C$, 'getHitIndex$',  function () {
return this.hitIndex;
});

Clazz.newMeth(C$, 'getScreenCoordinates$',  function () {
return this.screenCoordinates;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return true;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
});

Clazz.newMeth(C$, 'getX$',  function () {
return (this.hitIndex >= 0 ? this.xpoints[this.hitIndex] : NaN);
});

Clazz.newMeth(C$, 'getY$',  function () {
return (this.hitIndex >= 0 ? this.ypoints[this.hitIndex] : NaN);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(7,1));
}, 1);

Clazz.newMeth(C$, 'setHighlights$java_util_BitSet',  function (bs) {
this.highlighted.clear$();
this.highlighted.or$java_util_BitSet(bs);
});

Clazz.newMeth(C$, 'getHighlightedBS$',  function () {
return this.highlighted;
});

Clazz.newMeth(C$, 'getHighlightCount$',  function () {
return this.highlighted.cardinality$();
});

Clazz.newMeth(C$, 'getValidYCount$',  function () {
return this.index - $I$(2).getNaNCount$DA$I(this.ypoints, this.index);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.HighlightableDataset, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var data=obj;
control.setValue$S$O("highlighted", this.toArray$java_util_BitSet(data.highlighted));
});

Clazz.newMeth(C$, 'toArray$java_util_BitSet',  function (bs) {
var b=Clazz.array(Boolean.TYPE, [bs.length$()]);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) b[i]=true;

return b;
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).loadObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
var data=obj;
var highlighted=control.getObject$S("highlighted");
if (highlighted != null ) {
for (var i=highlighted.length; --i >= 0; ) data.highlighted.set$I$Z(i, highlighted[i]);

}return data;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
