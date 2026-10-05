(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.display.BoundedShape',['java.awt.geom.Rectangle2D','.Double'],'java.awt.Color',['java.awt.geom.Point2D','.Double'],['org.opensourcephysics.display.BoundedShape','.XYDelegate'],'java.awt.geom.GeneralPath','org.opensourcephysics.display.InteractiveArrow','org.opensourcephysics.display.InteractiveCenteredArrow','org.opensourcephysics.display.BoundedImage',['java.awt.geom.Ellipse2D','.Double'],'java.awt.Cursor',['org.opensourcephysics.display.BoundedShape','.BoundedShapeLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BoundedShape", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.InteractiveShape', 'org.opensourcephysics.display.Selectable');
C$.$classes$=[['BoundedShapeLoader',12],['XYDelegate',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hotspot=6;
this.delta=3;
this.deltaSqr=this.delta * this.delta;
this.d2=2 * this.delta + 1;
this.selected=false;
this.hideBounds=false;
this.boundsColor=Clazz.new_($I$(3,1).c$$I$I$I,[128, 128, 255]);
this.widthDrag=false;
this.heightDrag=false;
this.xyDrag=true;
this.rotateDrag=false;
this.pixelBounds=Clazz.new_($I$(2,1).c$$D$D$D$D,[0, 0, 0, 0]);
this.hotSpots=Clazz.array($I$(4), [6]);
this.xyDelegate=Clazz.new_($I$(5,1),[this, null]);
this.pt00=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['Z',['selected','hideBounds','widthDrag','heightDrag','xyDrag','rotateDrag'],'I',['hotspot','delta','deltaSqr','d2'],'O',['boundsColor','java.awt.Color','pixelBounds','java.awt.Shape','hotSpots','java.awt.geom.Point2D.Double[]','xyDelegate','org.opensourcephysics.display.BoundedShape.XYDelegate','pt00','java.awt.geom.Point2D.Double']]]

Clazz.newMeth(C$, 'c$$java_awt_Shape$D$D',  function (s, x, y) {
;C$.superclazz.c$$java_awt_Shape$D$D.apply(this,[s, x, y]);C$.$init$.apply(this);
for (var i=0, n=this.hotSpots.length; i < n; i++) {
this.hotSpots[i]=this.pt00;
}
}, 1);

Clazz.newMeth(C$, 'createBoundedRectangle$D$D$D$D',  function (x, y, w, h) {
var shape=Clazz.new_($I$(2,1).c$$D$D$D$D,[-w / 2, -h / 2, w, h]);
return Clazz.new_(C$.c$$java_awt_Shape$D$D,[shape, x, y]);
}, 1);

Clazz.newMeth(C$, 'createBoundedTriangle$D$D$D$D',  function (x, y, b, h) {
var path=Clazz.new_($I$(6,1));
path.moveTo$F$F((-b / 2), (-h / 2));
path.lineTo$F$F((b / 2), (-h / 2));
path.lineTo$F$F(0, (h / 2));
path.closePath$();
var shape=path;
return Clazz.new_(C$.c$$java_awt_Shape$D$D,[shape, x, y]);
}, 1);

Clazz.newMeth(C$, 'createBoundedArrow$D$D$D$D',  function (x, y, w, h) {
var ia=Clazz.new_($I$(7,1).c$$D$D$D$D,[x, y, w, h]);
ia.hideBounds=false;
return ia;
}, 1);

Clazz.newMeth(C$, 'createBoundedCenteredArrow$D$D$D$D',  function (x, y, w, h) {
var ica=Clazz.new_($I$(8,1).c$$D$D$D$D,[x, y, w, h]);
ica.hideBounds=false;
return ica;
}, 1);

Clazz.newMeth(C$, 'createBoundedImage$java_awt_Image$D$D',  function (image, x, y) {
return Clazz.new_($I$(9,1).c$$java_awt_Image$D$D,[image, x, y]);
}, 1);

Clazz.newMeth(C$, 'createBoundedEllipse$D$D$D$D',  function (x, y, w, h) {
var shape=Clazz.new_($I$(10,1).c$$D$D$D$D,[-w / 2, -h / 2, w, h]);
return Clazz.new_(C$.c$$java_awt_Shape$D$D,[shape, x, y]);
}, 1);

Clazz.newMeth(C$, 'createBoundedCircle$D$D$D',  function (x, y, d) {
var shape=Clazz.new_($I$(10,1).c$$D$D$D$D,[-d / 2, -d / 2, d, d]);
return Clazz.new_(C$.c$$java_awt_Shape$D$D,[shape, x, y]);
}, 1);

Clazz.newMeth(C$, 'setSelected$Z',  function (selected) {
this.selected=selected;
});

Clazz.newMeth(C$, 'isSelected$',  function () {
return this.selected;
});

Clazz.newMeth(C$, 'setXYDrag$Z',  function (enable) {
this.xyDrag=enable;
});

Clazz.newMeth(C$, 'isXYDrag$',  function () {
return this.xyDrag;
});

Clazz.newMeth(C$, 'setRotateDrag$Z',  function (enable) {
this.rotateDrag=enable;
});

Clazz.newMeth(C$, 'isRotateDrag$',  function () {
return this.rotateDrag;
});

Clazz.newMeth(C$, 'setWidthDrag$Z',  function (enable) {
this.widthDrag=enable;
});

Clazz.newMeth(C$, 'isWidthDrag$',  function () {
return this.widthDrag;
});

Clazz.newMeth(C$, 'setHeightDrag$Z',  function (enable) {
this.heightDrag=enable;
});

Clazz.newMeth(C$, 'isHeightDrag$',  function () {
return this.heightDrag;
});

Clazz.newMeth(C$, 'getPreferredCursor$',  function () {
var c=12;
if (this.xyDrag && (this.hotspot == 0) ) {
c=13;
} else if (this.rotateDrag && (this.hotspot == 5) ) {
} else if (this.widthDrag && (this.hotspot == 2) ) {
if (this.theta == 0 ) c=10;
} else if (this.widthDrag && (this.hotspot == 4) ) {
if (this.theta == 0 ) c=11;
} else if (this.heightDrag && (this.hotspot == 3) ) {
if (this.theta == 0 ) c=8;
} else if (this.heightDrag && (this.hotspot == 1) ) {
if (this.theta == 0 ) c=9;
} else if (this.selected) {
c=1;
}return $I$(11).getPredefinedCursor$I(c);
});

Clazz.newMeth(C$, 'toggleSelected$',  function () {
this.selected=!this.selected;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (this.isInside$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix)) {
return this.xyDelegate;
}return null;
});

Clazz.newMeth(C$, 'isInside$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
this.hotspot=6;
if (!this.enabled) {
return false;
}if (this.selected) {
this.hotspot=this.getHotSpotIndex$I$I$java_awt_geom_Point2D_DoubleA(xpix, ypix, this.hotSpots);
return true;
}return this.pixelBounds.contains$D$D(xpix, ypix);
});

Clazz.newMeth(C$, 'getHotSpotIndex$I$I$java_awt_geom_Point2D_DoubleA',  function (xpix, ypix, hotSpots) {
for (var i=0, n=hotSpots.length; i < n; i++) {
var dx=xpix - hotSpots[i].x;
var dy=ypix - hotSpots[i].y;
if (dx * dx + dy * dy <= this.deltaSqr ) {
return i;
}}
return 6;
});

Clazz.newMeth(C$, 'computeScaledHotSpots$java_awt_Shape$D',  function (temp, ar) {
var rect=this.getBounds2D$java_awt_Shape(temp);
var sin=Math.sin(this.theta);
var cos=Math.cos(this.theta);
var w2=rect.width / 2;
var h2=rect.height / 2;
var xoff=this.xoff * this.toPixels.getScaleX$();
var yoff=this.yoff * this.toPixels.getScaleY$();
var left=xoff - w2;
var right=xoff + w2;
var top=yoff - h2;
var bottom=yoff + h2;
var cx=rect.x - left;
var cy=rect.y - top;
this.hotSpots[0].setLocation$D$D(cx, cy);
this.hotSpots[1].setLocation$D$D(cx + xoff * cos + bottom * sin / ar, cy - xoff * sin + bottom * cos);
this.hotSpots[2].setLocation$D$D(cx + left * cos + yoff * sin, cy - left * sin * ar  + yoff * cos);
this.hotSpots[3].setLocation$D$D(cx + xoff * cos + top * sin / ar, cy - xoff * sin + top * cos);
this.hotSpots[4].setLocation$D$D(cx + right * cos + yoff * sin, cy - right * sin * ar  + yoff * cos);
this.hotSpots[5].setLocation$D$D(cx + right * cos + top * sin / ar, cy - right * sin * ar  + top * cos);
return rect;
});

Clazz.newMeth(C$, 'computeFixedHotSpots$java_awt_Shape',  function (temp) {
var rect=this.getBounds2D$java_awt_Shape(temp);
var sin=Math.sin(this.theta);
var cos=Math.cos(this.theta);
var w2=rect.width / 2;
var h2=rect.height / 2;
var xoff=this.xoff;
var yoff=this.yoff;
var left=xoff - w2;
var right=xoff + w2;
var top=yoff + h2;
var bottom=yoff - h2;
var cx=rect.x - left;
var cy=rect.y + top;
this.hotSpots[0].setLocation$D$D(cx, cy);
this.hotSpots[1].setLocation$D$D(cx + xoff * cos - bottom * sin, cy - xoff * sin - bottom * cos);
this.hotSpots[2].setLocation$D$D(cx + left * cos - yoff * sin, cy - left * sin - yoff * cos);
this.hotSpots[3].setLocation$D$D(cx + xoff * cos - top * sin, cy - xoff * sin - top * cos);
this.hotSpots[4].setLocation$D$D(cx + right * cos - yoff * sin, cy - right * sin - yoff * cos);
this.hotSpots[5].setLocation$D$D(cx + right * cos - top * sin, cy - right * sin - top * cos);
return rect;
});

Clazz.newMeth(C$, 'getBounds2D$java_awt_Shape',  function (temp) {
return (Clazz.instanceOf(temp, "java.awt.geom.Rectangle2D.Double") ? temp : temp.getBounds2D$());
});

Clazz.newMeth(C$, 'setHotSpotXY$D$D',  function (x, y) {
if (this.hideBounds) {
this.setXY$D$D(x, y);
return;
}if (this.xyDrag && this.selected && (this.hotspot == 0)  ) {
this.setXY$D$D(x, y);
} else if (this.rotateDrag && this.selected && (this.hotspot == 5)  ) {
if (this.pixelSized) {
var r=-this.toPixels.getScaleY$() / this.toPixels.getScaleX$();
var dx=x - this.x;
var dy=y - this.y;
this.theta=Math.atan2(r * dy, dx) - Math.atan2(this.height / 2 + this.yoff, (this.width / 2 + this.xoff));
} else {
var dx=x - this.x;
var dy=y - this.y;
var theta1=Math.atan2(this.height / 2 + this.yoff, this.width / 2 + this.xoff);
var theta2=Math.atan2(dy, dx);
this.setTheta$D(theta2 - theta1);
}} else if (this.widthDrag && this.selected && ((this.hotspot == 2) || (this.hotspot == 4) )  ) {
if (this.pixelSized) {
var dx=this.toPixels.getScaleX$() * (x - this.x) - this.xoff;
var dy=this.toPixels.getScaleY$() * (y - this.y) + this.yoff;
this.setWidth$D(2 * Math.sqrt(dx * dx + dy * dy));
} else {
var dx=(x - this.x - this.xoff );
var dy=(y - this.y - this.yoff );
this.setWidth$D(2 * Math.sqrt(dx * dx + dy * dy));
}} else if (this.heightDrag && this.selected && ((this.hotspot == 3) || (this.hotspot == 1) )  ) {
if (this.pixelSized) {
var dx=this.toPixels.getScaleX$() * (x - this.x) - this.xoff;
var dy=this.toPixels.getScaleY$() * (y - this.y) + this.yoff;
this.setHeight$D(2 * Math.sqrt(dx * dx + dy * dy));
} else {
var dx=(x - this.x - this.xoff );
var dy=(y - this.y - this.yoff );
this.setHeight$D(2 * Math.sqrt(dx * dx + dy * dy));
}}});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
if (this.pixelSized) {
p$1.getFixedBounds.apply(this, []);
if (!this.selected || this.hideBounds ) return;
p$1.drawFixedBounds$java_awt_Graphics.apply(this, [g]);
} else {
p$1.getScaledBounds$org_opensourcephysics_display_DrawingPanel.apply(this, [panel]);
if (!this.selected || this.hideBounds ) return;
p$1.drawScaledBounds$java_awt_Graphics.apply(this, [g]);
}});

Clazz.newMeth(C$, 'getScaledBounds$org_opensourcephysics_display_DrawingPanel',  function (panel) {
var ar=-this.toPixels.getScaleY$() / this.toPixels.getScaleX$();
var temp;
if (this.theta == 0 ) {
temp=this.toPixels.createTransformedShape$java_awt_Shape(this.getBounds2D$java_awt_Shape(this.shape));
this.pixelBounds=this.computeScaledHotSpots$java_awt_Shape$D(temp, ar);
} else {
temp=this.getRotateInstance$D$D$D(-this.theta, this.x, this.y).createTransformedShape$java_awt_Shape(this.shape);
temp=this.toPixels.createTransformedShape$java_awt_Shape(temp);
temp=this.computeScaledHotSpots$java_awt_Shape$D(temp, ar);
var px=(temp).getCenterX$() - this.xoff * this.toPixels.getScaleX$();
var py=(temp).getCenterY$() - this.yoff * this.toPixels.getScaleY$();
if (panel.isSquareAspect$()) {
this.pixelBounds=this.getRotateInstance$D$D$D(-this.theta, px, py).createTransformedShape$java_awt_Shape(temp);
} else {
this.trIS.setToTranslation$D$D(px, py);
this.trIS.scale$D$D(1, ar);
this.trIS.rotate$D(-this.theta);
this.trIS.scale$D$D(1, 1 / ar);
this.trIS.translate$D$D(-px, -py);
this.pixelBounds=this.trIS.createTransformedShape$java_awt_Shape(temp);
}}}, p$1);

Clazz.newMeth(C$, 'drawScaledBounds$java_awt_Graphics',  function (g) {
var g2=(g);
g2.setPaint$java_awt_Paint(this.boundsColor);
g2.draw$java_awt_Shape(this.pixelBounds);
if (this.rotateDrag) {
g2.fillOval$I$I$I$I((this.hotSpots[5].getX$()|0) - this.delta, (this.hotSpots[5].getY$()|0) - this.delta, this.d2, this.d2);
}if (this.heightDrag) {
g2.fillRect$I$I$I$I((this.hotSpots[3].getX$()|0) - this.delta, (this.hotSpots[3].getY$()|0) - this.delta, this.d2, this.d2);
g2.fillRect$I$I$I$I((this.hotSpots[1].getX$()|0) - this.delta, (this.hotSpots[1].getY$()|0) - this.delta, this.d2, this.d2);
}if (this.widthDrag) {
g2.fillRect$I$I$I$I((this.hotSpots[2].getX$()|0) - this.delta, (this.hotSpots[2].getY$()|0) - this.delta, this.d2, this.d2);
g2.fillRect$I$I$I$I((this.hotSpots[4].getX$()|0) - this.delta, (this.hotSpots[4].getY$()|0) - this.delta, this.d2, this.d2);
}if (this.xyDrag) {
g2.fillRect$I$I$I$I((this.hotSpots[0].getX$()|0) - this.delta, (this.hotSpots[0].getY$()|0) - this.delta, this.d2, this.d2);
g2.setColor$java_awt_Color(this.edgeColor);
g2.fillOval$I$I$I$I((this.hotSpots[0].getX$()|0) - 1, (this.hotSpots[0].getY$()|0) - 1, 3, 3);
g2.setPaint$java_awt_Paint(this.boundsColor);
}g.setColor$java_awt_Color($I$(3).BLACK);
}, p$1);

Clazz.newMeth(C$, 'getFixedBounds',  function () {
var temp;
if (this.theta == 0 ) {
temp=this.getTranslateInstance$D$D(-this.x + this.pixelPt.x + this.xoff , -this.y + this.pixelPt.y - this.yoff).createTransformedShape$java_awt_Shape(this.getBounds2D$java_awt_Shape(this.shape));
this.pixelBounds=this.computeFixedHotSpots$java_awt_Shape(temp);
} else {
temp=this.getTranslateInstance$D$D(-this.x + this.pixelPt.x + this.xoff , -this.y + this.pixelPt.y - this.yoff).createTransformedShape$java_awt_Shape(this.shape);
this.pixelBounds=this.getRotateInstance$D$D$D(-this.theta, this.pixelPt.getX$(), this.pixelPt.getY$()).createTransformedShape$java_awt_Shape(this.computeFixedHotSpots$java_awt_Shape(temp));
}}, p$1);

Clazz.newMeth(C$, 'drawFixedBounds$java_awt_Graphics',  function (g) {
var g2=(g);
g2.setPaint$java_awt_Paint(this.boundsColor);
g2.draw$java_awt_Shape(this.pixelBounds);
if (this.rotateDrag) {
g2.fillOval$I$I$I$I((this.hotSpots[5].getX$()|0) - this.delta, (this.hotSpots[5].getY$()|0) - this.delta, this.d2, this.d2);
}if (this.heightDrag) {
g2.fillRect$I$I$I$I((this.hotSpots[3].getX$()|0) - this.delta, (this.hotSpots[3].getY$()|0) - this.delta, this.d2, this.d2);
g2.fillRect$I$I$I$I((this.hotSpots[1].getX$()|0) - this.delta, (this.hotSpots[1].getY$()|0) - this.delta, this.d2, this.d2);
}if (this.widthDrag) {
g2.fillRect$I$I$I$I((this.hotSpots[2].getX$()|0) - this.delta, (this.hotSpots[2].getY$()|0) - this.delta, this.d2, this.d2);
g2.fillRect$I$I$I$I((this.hotSpots[4].getX$()|0) - this.delta, (this.hotSpots[4].getY$()|0) - this.delta, this.d2, this.d2);
}if (this.xyDrag) {
g2.fillRect$I$I$I$I((this.hotSpots[0].getX$()|0) - this.delta, (this.hotSpots[0].getY$()|0) - this.delta, this.d2, this.d2);
g2.setColor$java_awt_Color(this.edgeColor);
g2.fillOval$I$I$I$I((this.hotSpots[0].getX$()|0) - 1, (this.hotSpots[0].getY$()|0) - 1, 3, 3);
g2.setPaint$java_awt_Paint(this.boundsColor);
}g.setColor$java_awt_Color($I$(3).BLACK);
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
return "BoundedShape:\n \t shape=" + this.shapeClass + "\n \t x=" + new Double(this.x).toString() + "\n \t y=" + new Double(this.y).toString() + "\n \t width=" + new Double(this.width).toString() + "\n \t height=" + new Double(this.height).toString() + "\n \t theta=" + new Double(this.theta).toString() ;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(12,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.BoundedShape, "BoundedShapeLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display.InteractiveShape','.InteractiveShapeLoader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var boundedShape=obj;
control.setValue$S$Z("xy drag", boundedShape.isXYDrag$());
control.setValue$S$Z("width drag", boundedShape.isWidthDrag$());
control.setValue$S$Z("height drag", boundedShape.isHeightDrag$());
control.setValue$S$Z("rotate drag", boundedShape.isRotateDrag$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_([Clazz.new_($I$(2,1).c$$D$D$D$D,[0, 0, 0, 0]), 0, 0],$I$(1,1).c$$java_awt_Shape$D$D);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var boundedShape=obj;
boundedShape.setXYDrag$Z(control.getBoolean$S("xy drag"));
boundedShape.setWidthDrag$Z(control.getBoolean$S("width drag"));
boundedShape.setHeightDrag$Z(control.getBoolean$S("height drag"));
boundedShape.setRotateDrag$Z(control.getBoolean$S("rotate drag"));
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
return boundedShape;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BoundedShape, "XYDelegate", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.AbstractInteractive', 'org.opensourcephysics.display.Selectable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
});

Clazz.newMeth(C$, 'isInside$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
return this.b$['org.opensourcephysics.display.BoundedShape'].isInside$org_opensourcephysics_display_DrawingPanel$I$I.apply(this.b$['org.opensourcephysics.display.BoundedShape'], [panel, xpix, ypix]);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.b$['org.opensourcephysics.display.BoundedShape'].setHotSpotXY$D$D.apply(this.b$['org.opensourcephysics.display.BoundedShape'], [x, y]);
});

Clazz.newMeth(C$, 'setSelected$Z',  function (selectable) {
this.b$['org.opensourcephysics.display.BoundedShape'].setSelected$Z.apply(this.b$['org.opensourcephysics.display.BoundedShape'], [selectable]);
});

Clazz.newMeth(C$, 'toggleSelected$',  function () {
this.b$['org.opensourcephysics.display.BoundedShape'].toggleSelected$.apply(this.b$['org.opensourcephysics.display.BoundedShape'], []);
});

Clazz.newMeth(C$, 'isSelected$',  function () {
return this.b$['org.opensourcephysics.display.BoundedShape'].isSelected$.apply(this.b$['org.opensourcephysics.display.BoundedShape'], []);
});

Clazz.newMeth(C$, 'getPreferredCursor$',  function () {
return this.b$['org.opensourcephysics.display.BoundedShape'].getPreferredCursor$.apply(this.b$['org.opensourcephysics.display.BoundedShape'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
