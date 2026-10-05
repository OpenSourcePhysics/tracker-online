(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.controls.XML','java.awt.geom.GeneralPath','org.opensourcephysics.display.GeneralPathLoader','java.awt.geom.AffineTransform','org.opensourcephysics.display.InteractiveShape',['java.awt.geom.Rectangle2D','.Double'],['java.awt.geom.Ellipse2D','.Double'],'java.awt.Color',['java.awt.geom.Point2D','.Double'],'org.opensourcephysics.display.InteractiveImage','org.opensourcephysics.display.InteractiveTextLine','org.opensourcephysics.display.InteractiveArrow','org.opensourcephysics.display.InteractiveCenteredArrow',['org.opensourcephysics.display.InteractiveShape','.InteractiveShapeLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InteractiveShape", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.AbstractInteractive', 'org.opensourcephysics.display.Measurable');
C$.$classes$=[['InteractiveShapeLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.edgeColor=$I$(8).red;
this.pixelSized=false;
this.toPixels=Clazz.new_($I$(4,1));
this.pixelPt=Clazz.new_($I$(9,1));
this.enableMeasure=false;
this.trIS=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['Z',['pixelSized','enableMeasure'],'D',['theta','width','height','xoff','yoff'],'S',['shapeClass'],'O',['edgeColor','java.awt.Color','shape','java.awt.Shape','toPixels','java.awt.geom.AffineTransform','pixelPt','java.awt.geom.Point2D.Double','trIS','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$java_awt_Shape$D$D',  function (s, _x, _y) {
Clazz.super_(C$, this);
this.color=Clazz.new_($I$(8,1).c$$I$I$I$I,[255, 128, 128, 128]);
this.shape=s;
this.x=_x;
this.y=_y;
if (this.shape == null ) {
return;
}var bounds=this.shape.getBounds2D$();
this.width=bounds.getWidth$();
this.height=bounds.getHeight$();
this.shapeClass=this.shape.getClass$().getName$();
this.shape=this.getTranslateInstance$D$D(this.x, this.y).createTransformedShape$java_awt_Shape(this.shape);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Shape',  function (s) {
C$.c$$java_awt_Shape$D$D.apply(this, [s, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'createEllipse$D$D$D$D',  function (x, y, w, h) {
var shape=Clazz.new_($I$(7,1).c$$D$D$D$D,[-w / 2, -h / 2, w, h]);
var is=Clazz.new_(C$.c$$java_awt_Shape$D$D,[shape, x, y]);
is.width=w;
is.height=h;
return is;
}, 1);

Clazz.newMeth(C$, 'createCircle$D$D$D',  function (x, y, d) {
return C$.createEllipse$D$D$D$D(x, y, d, d);
}, 1);

Clazz.newMeth(C$, 'createRectangle$D$D$D$D',  function (x, y, w, h) {
var shape=Clazz.new_($I$(6,1).c$$D$D$D$D,[-w / 2, -h / 2, w, h]);
var is=Clazz.new_(C$.c$$java_awt_Shape$D$D,[shape, x, y]);
is.width=w;
is.height=h;
return is;
}, 1);

Clazz.newMeth(C$, 'createTriangle$D$D$D$D',  function (x, y, b, h) {
var path=Clazz.new_($I$(2,1));
path.moveTo$F$F((-b / 2), (-h / 2));
path.lineTo$F$F((b / 2), (-h / 2));
path.lineTo$F$F(0, (h / 2));
path.closePath$();
var shape=path;
var is=Clazz.new_(C$.c$$java_awt_Shape$D$D,[shape, x, y]);
is.width=b;
is.height=h;
return is;
}, 1);

Clazz.newMeth(C$, 'createImage$java_awt_Image$D$D',  function (image, x, y) {
var is=Clazz.new_($I$(10,1).c$$java_awt_Image$D$D,[image, x, y]);
return is;
}, 1);

Clazz.newMeth(C$, 'createTextLine$D$D$S',  function (x, y, text) {
var is=Clazz.new_($I$(11,1).c$$S$D$D,[text, x, y]);
return is;
}, 1);

Clazz.newMeth(C$, 'createArrow$D$D$D$D',  function (x, y, w, h) {
var is=Clazz.new_($I$(12,1).c$$D$D$D$D,[x, y, w, h]);
is.setHeightDrag$Z(false);
is.setWidthDrag$Z(false);
is.hideBounds=true;
return is;
}, 1);

Clazz.newMeth(C$, 'createCenteredArrow$D$D$D$D',  function (x, y, w, h) {
var is=Clazz.new_($I$(13,1).c$$D$D$D$D,[x, y, w, h]);
is.setHeightDrag$Z(false);
is.setWidthDrag$Z(false);
is.hideBounds=true;
return is;
}, 1);

Clazz.newMeth(C$, 'createSquare$D$D$D',  function (x, y, w) {
var shape=Clazz.new_($I$(6,1).c$$D$D$D$D,[-w / 2, -w / 2, w, w]);
return Clazz.new_(C$.c$$java_awt_Shape$D$D,[shape, x, y]);
}, 1);

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (transformation) {
this.shape=transformation.createTransformedShape$java_awt_Shape(this.shape);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var g2=(g);
var temp;
this.getPixelPt$org_opensourcephysics_display_DrawingPanel(panel);
if (this.pixelSized) {
this.trIS.setTransform$D$D$D$D$D$D(1, 0, 0, -1, -this.x + this.pixelPt.x + this.xoff , this.y + this.pixelPt.y - this.yoff);
this.trIS.rotate$D$D$D(-this.theta, this.pixelPt.x, this.pixelPt.y);
temp=this.trIS.createTransformedShape$java_awt_Shape(this.shape);
} else {
temp=this.toPixels.createTransformedShape$java_awt_Shape(this.shape);
}g2.setPaint$java_awt_Paint(this.color);
g2.fill$java_awt_Shape(temp);
g2.setPaint$java_awt_Paint(this.edgeColor);
g2.draw$java_awt_Shape(temp);
});

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
if (this.shape.contains$D$D(x, y)) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getShape$',  function () {
return this.shape;
});

Clazz.newMeth(C$, 'tranform$DAA',  function (mat) {
this.shape=(Clazz.new_($I$(4,1).c$$D$D$D$D$D$D,[mat[0][0], mat[1][0], mat[0][1], mat[1][1], mat[0][2], mat[1][2]])).createTransformedShape$java_awt_Shape(this.shape);
});

Clazz.newMeth(C$, 'isInside$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
return this.enabled && this.shape != null   && this.shape.contains$D$D(panel.pixToX$I(xpix), panel.pixToY$I(ypix)) ;
});

Clazz.newMeth(C$, 'setMarkerColor$java_awt_Color$java_awt_Color',  function (_fillColor, _edgeColor) {
this.color=_fillColor;
this.edgeColor=_edgeColor;
});

Clazz.newMeth(C$, 'setTheta$D',  function (theta) {
if (!this.pixelSized && theta != this.theta  ) {
this.shape=this.getRotateInstance$D$D$D(theta - this.theta, this.x, this.y).createTransformedShape$java_awt_Shape(this.shape);
}this.theta=theta;
});

Clazz.newMeth(C$, 'setPixelSized$Z',  function (enable) {
this.pixelSized=enable;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$D',  function (width) {
width=Math.abs(width);
var w=width / this.width;
if (w < 0.02  || w == 1  ) {
return;
}this.trIS.setToTranslation$D$D(this.x, this.y);
if (this.pixelSized || this.theta == 0  ) {
this.trIS.scale$D$D(w, 1);
} else {
this.trIS.rotate$D(this.theta);
this.trIS.scale$D$D(w, 1);
this.trIS.rotate$D(-this.theta);
}this.trIS.translate$D$D(-this.x, -this.y);
this.shape=this.trIS.createTransformedShape$java_awt_Shape(this.shape);
this.xoff*=w;
this.width=width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$D',  function (height) {
height=Math.abs(height);
var h=height / this.height;
if (h < 0.02  || h == 1  ) {
return;
}this.trIS.setToTranslation$D$D(this.x, this.y);
if (this.pixelSized || this.theta == 0  ) {
this.trIS.scale$D$D(1, h);
} else {
this.trIS.rotate$D(this.theta);
this.trIS.scale$D$D(1, h);
this.trIS.rotate$D(-this.theta);
this.trIS.translate$D$D(-this.x, -this.y);
}this.yoff*=h;
this.height=height;
});

Clazz.newMeth(C$, 'setOffset$D$D',  function (xoffset, yoffset) {
if (!this.pixelSized && (xoffset != this.xoff  || yoffset != this.yoff  ) ) {
this.shape=this.getTranslateInstance$D$D(this.x + xoffset, this.y + yoffset).createTransformedShape$java_awt_Shape(this.shape);
}this.xoff=xoffset;
this.yoff=yoffset;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (_x, _y) {
if (_x == this.x  && _y == this.y  ) return;
this.shape=this.getTranslateInstance$D$D(_x - this.x, _y - this.y).createTransformedShape$java_awt_Shape(this.shape);
this.x=_x;
this.y=_y;
});

Clazz.newMeth(C$, 'setX$D',  function (_x) {
if (this.x == _x ) return;
this.shape=this.getTranslateInstance$D$D(_x - this.x, 0).createTransformedShape$java_awt_Shape(this.shape);
this.x=_x;
});

Clazz.newMeth(C$, 'setY$D',  function (_y) {
if (_y == this.y ) return;
this.shape=this.getTranslateInstance$D$D(0, _y - this.y).createTransformedShape$java_awt_Shape(this.shape);
this.y=_y;
});

Clazz.newMeth(C$, 'toString',  function () {
return "InteractiveShape:\n \t shape=" + this.shapeClass + "\n \t x=" + new Double(this.x).toString() + "\n \t y=" + new Double(this.y).toString() + "\n \t width=" + new Double(this.width).toString() + "\n \t height=" + new Double(this.height).toString() + "\n \t theta=" + new Double(this.theta).toString() ;
});

Clazz.newMeth(C$, 'setMeasured$Z',  function (_enableMeasure) {
this.enableMeasure=_enableMeasure;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.enableMeasure;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
if (this.pixelSized) {
return this.x - this.width / this.toPixels.getScaleX$() / 2 ;
}return this.shape.getBounds2D$().getX$();
});

Clazz.newMeth(C$, 'getXMax$',  function () {
if (this.pixelSized) {
return this.x + this.width / this.toPixels.getScaleX$() / 2 ;
}return this.shape.getBounds2D$().getX$() + this.shape.getBounds2D$().getWidth$();
});

Clazz.newMeth(C$, 'getYMin$',  function () {
if (this.pixelSized) {
return this.y - this.height / this.toPixels.getScaleY$() / 2 ;
}return this.shape.getBounds2D$().getY$();
});

Clazz.newMeth(C$, 'getYMax$',  function () {
if (this.pixelSized) {
return this.y + this.height / this.toPixels.getScaleY$() / 2 ;
}return this.shape.getBounds2D$().getY$() + this.shape.getBounds2D$().getHeight$();
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(14,1));
}, 1);

Clazz.newMeth(C$, 'getPixelPt$org_opensourcephysics_display_DrawingPanel',  function (panel) {
this.toPixels.setTransform$java_awt_geom_AffineTransform(panel.getPixelTransform$());
this.pixelPt.setLocation$D$D(this.x, this.y);
this.toPixels.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.pixelPt, this.pixelPt);
});

Clazz.newMeth(C$, 'getRotateInstance$D',  function (theta) {
this.trIS.setToRotation$D(theta);
return this.trIS;
});

Clazz.newMeth(C$, 'getRotateInstance$D$D$D',  function (theta, x, y) {
this.trIS.setToRotation$D$D$D(theta, x, y);
return this.trIS;
});

Clazz.newMeth(C$, 'getScaleInstance$D$D',  function (sx, sy) {
this.trIS.setToScale$D$D(sx, sy);
return this.trIS;
});

Clazz.newMeth(C$, 'getTranslateInstance$D$D',  function (tx, ty) {
this.trIS.setToTranslation$D$D(tx, ty);
return this.trIS;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.InteractiveShape, "InteractiveShapeLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var interactiveShape=obj;
control.setValue$S$O("geometry", interactiveShape.shapeClass);
control.setValue$S$D("x", interactiveShape.x);
control.setValue$S$D("y", interactiveShape.y);
control.setValue$S$D("width", interactiveShape.width);
control.setValue$S$D("height", interactiveShape.height);
control.setValue$S$D("x offset", interactiveShape.xoff);
control.setValue$S$D("y offset", interactiveShape.yoff);
control.setValue$S$D("theta", interactiveShape.theta);
control.setValue$S$Z("pixel sized", interactiveShape.pixelSized);
control.setValue$S$Z("is enabled", interactiveShape.isEnabled$());
control.setValue$S$Z("is measured", interactiveShape.isMeasured$());
control.setValue$S$O("color", interactiveShape.color);
var shape=$I$(4).getRotateInstance$D$D$D(-interactiveShape.theta, interactiveShape.x, interactiveShape.y).createTransformedShape$java_awt_Shape(interactiveShape.shape);
control.setValue$S$O("general path", shape);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_([Clazz.new_($I$(6,1).c$$D$D$D$D,[0, 0, 0, 0])],$I$(5,1).c$$java_awt_Shape);
});

Clazz.newMeth(C$, 'getShape$S$D$D$D$D',  function (type, x, y, w, h) {
if (type.equals$O(Clazz.getClass($I$(7)).getName$())) {
return Clazz.new_($I$(7,1).c$$D$D$D$D,[x - w / 2, y - h / 2, w, h]);
} else if (type.equals$O(Clazz.getClass($I$(6)).getName$())) {
return Clazz.new_($I$(6,1).c$$D$D$D$D,[x - w / 2, y - h / 2, w, h]);
} else {
return null;
}});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var interactiveShape=obj;
var type=control.getString$S("geometry");
var x=control.getDouble$S("x");
var y=control.getDouble$S("y");
var theta=control.getDouble$S("theta");
var shape=this.getShape$S$D$D$D$D(type, x, y, control.getDouble$S("width"), control.getDouble$S("height"));
if (shape == null ) {
interactiveShape.shape=control.getObject$S("general path");
} else {
interactiveShape.shape=shape;
}interactiveShape.width=control.getDouble$S("width");
interactiveShape.height=control.getDouble$S("height");
interactiveShape.xoff=control.getDouble$S("x offset");
interactiveShape.yoff=control.getDouble$S("y offset");
interactiveShape.x=x;
interactiveShape.y=y;
interactiveShape.setPixelSized$Z(control.getBoolean$S("pixel sized"));
interactiveShape.setEnabled$Z(control.getBoolean$S("is enabled"));
interactiveShape.setMeasured$Z(control.getBoolean$S("is measured"));
interactiveShape.color=control.getObject$S("color");
interactiveShape.setTheta$D(theta);
return obj;
});

C$.$static$=function(){C$.$static$=0;
{
$I$(1,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(2)), Clazz.new_($I$(3,1))]);
};
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
