(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.display.InteractiveArrow',['java.awt.geom.Point2D','.Double'],'java.awt.BasicStroke','java.awt.geom.AffineTransform',['java.awt.geom.Rectangle2D','.Double'],['java.awt.geom.Line2D','.Double'],'java.awt.Color','java.awt.Cursor','java.awt.geom.GeneralPath',['org.opensourcephysics.display.InteractiveArrow','.InteractiveArrowLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InteractiveArrow", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.BoundedShape');
C$.$classes$=[['InteractiveArrowLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$hotSpots=Clazz.array($I$(2), [2]);
this.stroke=Clazz.new_($I$(3,1).c$$F,[2]);
this.trIA=Clazz.new_($I$(4,1));
this.rectIA=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['$hotSpots','java.awt.geom.Point2D.Double[]','stroke','java.awt.BasicStroke','head','java.awt.Shape','trIA','java.awt.geom.AffineTransform','rectIA','java.awt.geom.Rectangle2D.Double']]]

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (x, y, w, h) {
;C$.superclazz.c$$java_awt_Shape$D$D.apply(this,[Clazz.new_($I$(6,1).c$$D$D$D$D,[0, 0, w, h]), x, y]);C$.$init$.apply(this);
this.theta=(w == 0 ) ? 0 : Math.atan2(h, w);
this.head=p$1.getHead$D.apply(this, [this.theta]);
this.setRotateDrag$Z(true);
this.hideBounds=true;
this.width=w;
this.height=h;
for (var i=0, n=this.$hotSpots.length; i < n; i++) {
this.$hotSpots[i]=Clazz.new_($I$(2,1));
}
}, 1);

Clazz.newMeth(C$, 'setStrokeWidth$D',  function (width) {
this.stroke=Clazz.new_($I$(3,1).c$$F,[width]);
});

Clazz.newMeth(C$, 'setOffset$D$D',  function (xoffset, yoffset) {
return;
});

Clazz.newMeth(C$, 'isInside$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
this.hotspot=6;
if (!this.enabled) {
return false;
}if (this.selected) {
this.hotspot=this.getHotSpotIndex$I$I$java_awt_geom_Point2D_DoubleA(xpix, ypix, this.$hotSpots);
return true;
}return this.pixelBounds.contains$D$D(xpix, ypix);
});

Clazz.newMeth(C$, 'setTheta$D',  function (theta) {
var len=Math.sqrt(this.width * this.width + this.height * this.height);
var dx=len * Math.cos(theta);
var dy=len * Math.sin(theta);
this.shape=Clazz.new_($I$(6,1).c$$D$D$D$D,[this.x, this.y, this.x + dx, this.y + dy]);
this.shape=$I$(4).getTranslateInstance$D$D(this.x, this.y).createTransformedShape$java_awt_Shape(this.shape);
this.width=dx;
this.height=dy;
this.theta=theta;
this.head=p$1.getHead$D.apply(this, [theta]);
});

Clazz.newMeth(C$, 'setHotSpotXY$D$D',  function (x, y) {
if (this.hideBounds) {
this.setXY$D$D(x, y);
return;
}if (this.xyDrag && this.selected && (this.hotspot == 0)  ) {
this.setXY$D$D(x, y);
} else if (this.rotateDrag && this.selected && (this.hotspot == 1)  ) {
var r=-this.toPixels.getScaleY$() / this.toPixels.getScaleX$();
var dx=x - this.x;
var dy=y - this.y;
this.shape=Clazz.new_($I$(6,1).c$$D$D$D$D,[this.x, this.y, this.x + dx, this.y + dy]);
this.width=dx;
this.height=dy;
this.theta=(this.width == 0 ) ? this.theta : Math.atan2(r * this.height, this.width);
this.head=p$1.getHead$D.apply(this, [this.theta]);
}});

Clazz.newMeth(C$, 'setWidthHeight$D$D',  function (width, height) {
this.shape=Clazz.new_($I$(6,1).c$$D$D$D$D,[this.x, this.y, this.x + width, this.y + height]);
this.width=width;
this.height=height;
this.theta=(width == 0 ) ? this.theta : Math.atan2(height, width);
this.head=p$1.getHead$D.apply(this, [this.theta]);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var g2=g;
this.getPixelPt$org_opensourcephysics_display_DrawingPanel(panel);
this.pixelBounds=p$1.computePixelBounds$java_awt_geom_Point2D_Double.apply(this, [this.pixelPt]);
var temp;
if (this.pixelSized) {
this.trIA.setTransform$D$D$D$D$D$D(1, 0, 0, -1, -this.x + this.pixelPt.x, this.y + this.pixelPt.y);
temp=this.trIA.createTransformedShape$java_awt_Shape(this.shape);
} else {
temp=this.toPixels.createTransformedShape$java_awt_Shape(this.shape);
}g2.setPaint$java_awt_Paint(this.edgeColor);
var oldStroke=g2.getStroke$();
g2.setStroke$java_awt_Stroke(this.stroke);
g2.draw$java_awt_Shape(temp);
this.$hotSpots[0].setLocation$java_awt_geom_Point2D(this.pixelPt);
this.pixelPt.setLocation$D$D(this.x + this.width, this.y + this.height);
this.toPixels.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.pixelPt, this.pixelPt);
this.$hotSpots[1].setLocation$java_awt_geom_Point2D(this.pixelPt);
temp=$I$(4).getTranslateInstance$D$D(this.pixelPt.x, this.pixelPt.y).createTransformedShape$java_awt_Shape(this.head);
g2.fill$java_awt_Shape(temp);
g2.draw$java_awt_Shape(temp);
g2.setStroke$java_awt_Stroke(oldStroke);
if (!this.selected || this.hideBounds ) {
return;
}g2.setPaint$java_awt_Paint(this.boundsColor);
if (this.xyDrag) {
g2.fillRect$I$I$I$I((this.$hotSpots[0].getX$()|0) - this.delta, (this.$hotSpots[0].getY$()|0) - this.delta, this.d2, this.d2);
}if (this.rotateDrag) {
g2.fillOval$I$I$I$I((this.$hotSpots[1].getX$()|0) - this.delta, (this.$hotSpots[1].getY$()|0) - this.delta, this.d2, this.d2);
}g2.setPaint$java_awt_Paint($I$(7).BLACK);
});

Clazz.newMeth(C$, 'computePixelBounds$java_awt_geom_Point2D_Double',  function (pt) {
var dx=this.toPixels.getScaleX$() * this.width;
var dy=this.toPixels.getScaleY$() * this.height;
var len=Math.sqrt(dx * dx + dy * dy) + this.delta;
this.rectIA.setFrame$D$D$D$D(pt.x, pt.y - this.delta, len, this.d2);
return (this.theta == 0  ? this.rectIA : this.getRotateInstance$D$D$D(-this.theta, pt.x, pt.y).createTransformedShape$java_awt_Shape(this.rectIA));
}, p$1);

Clazz.newMeth(C$, 'getPreferredCursor$',  function () {
if (this.xyDrag && (this.hotspot == 0) ) {
return $I$(8).getPredefinedCursor$I(13);
} else if (this.rotateDrag && (this.hotspot == 1) ) {
return $I$(8).getPredefinedCursor$I(12);
} else if (this.selected) {
return $I$(8).getPredefinedCursor$I(1);
} else {
return $I$(8).getPredefinedCursor$I(12);
}});

Clazz.newMeth(C$, 'getHead$D',  function (theta) {
var headSize=4 + 2 * this.stroke.getLineWidth$();
var path=Clazz.new_($I$(9,1));
path.moveTo$F$F(0, 0);
path.lineTo$F$F((-headSize), (-headSize / 2));
path.lineTo$F$F((-headSize), (headSize / 2));
path.closePath$();
this.trIA.setToRotation$D(-theta);
return this.trIA.createTransformedShape$java_awt_Shape(path);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(10,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.InteractiveArrow, "InteractiveArrowLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var arrow=obj;
control.setValue$S$D("x", arrow.x);
control.setValue$S$D("y", arrow.y);
control.setValue$S$D("width", arrow.width);
control.setValue$S$D("height", arrow.height);
control.setValue$S$Z("is enabled", arrow.isEnabled$());
control.setValue$S$Z("is measured", arrow.isMeasured$());
control.setValue$S$O("color", arrow.color);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$D$D$D$D,[0, 0, 0, 0]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var arrow=obj;
var x=control.getDouble$S("x");
var y=control.getDouble$S("y");
var w=control.getDouble$S("width");
var h=control.getDouble$S("height");
arrow.enabled=control.getBoolean$S("is enabled");
arrow.enableMeasure=control.getBoolean$S("is measured");
arrow.color=control.getObject$S("color");
arrow.setXY$D$D(x, y);
arrow.setWidthHeight$D$D(w, h);
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
