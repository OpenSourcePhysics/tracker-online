(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Color','java.awt.geom.AffineTransform',['java.awt.geom.Ellipse2D','.Double'],['java.awt.geom.Rectangle2D','.Double'],'org.opensourcephysics.display.DrawableShapeLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawableShape", null, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=Clazz.new_($I$(1,1).c$$I$I$I$I,[255, 128, 128, 128]);
this.edgeColor=$I$(1).RED;
this.trDS=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['D',['x','y','theta'],'S',['shapeClass'],'O',['color','java.awt.Color','+edgeColor','shape','java.awt.Shape','trDS','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$java_awt_Shape$D$D',  function (shape, x, y) {
;C$.$init$.apply(this);
this.x=x;
this.y=y;
this.shapeClass=shape.getClass$().getName$();
this.trDS.setToTranslation$D$D(x, y);
this.shape=this.trDS.createTransformedShape$java_awt_Shape(shape);
}, 1);

Clazz.newMeth(C$, 'createCircle$D$D$D',  function (x, y, d) {
return Clazz.new_(C$.c$$java_awt_Shape$D$D,[Clazz.new_($I$(3,1).c$$D$D$D$D,[-d / 2, -d / 2, d, d]), x, y]);
}, 1);

Clazz.newMeth(C$, 'createRectangle$D$D$D$D',  function (x, y, w, h) {
return Clazz.new_(C$.c$$java_awt_Shape$D$D,[Clazz.new_($I$(4,1).c$$D$D$D$D,[-w / 2, -h / 2, w, h]), x, y]);
}, 1);

Clazz.newMeth(C$, 'setMarkerColor$java_awt_Color$java_awt_Color',  function (fillColor, edgeColor) {
this.color=fillColor;
this.edgeColor=edgeColor;
});

Clazz.newMeth(C$, 'setTheta$D',  function (theta) {
if (this.theta == theta ) return;
this.trDS.setToRotation$D$D$D(theta - this.theta, this.x, this.y);
this.shape=this.trDS.createTransformedShape$java_awt_Shape(this.shape);
this.theta=theta;
});

Clazz.newMeth(C$, 'getTheta$',  function () {
return this.theta;
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (transformation) {
this.shape=transformation.createTransformedShape$java_awt_Shape(this.shape);
});

Clazz.newMeth(C$, 'tranform$DAA',  function (mat) {
this.trDS.setTransform$D$D$D$D$D$D(mat[0][0], mat[1][0], mat[0][1], mat[1][1], mat[0][2], mat[1][2]);
this.shape=this.trDS.createTransformedShape$java_awt_Shape(this.shape);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (_x, _y) {
if (this.x == _x  && this.y == _y  ) return;
this.trDS.setToTranslation$D$D(_x - this.x, _y - this.y);
this.shape=this.trDS.createTransformedShape$java_awt_Shape(this.shape);
this.x=_x;
this.y=_y;
});

Clazz.newMeth(C$, 'setX$D',  function (_x) {
if (this.x == _x ) return;
this.trDS.setToTranslation$D$D(_x - this.x, 0);
this.shape=this.trDS.createTransformedShape$java_awt_Shape(this.shape);
this.x=_x;
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'setY$D',  function (_y) {
if (this.y == _y ) return;
this.trDS.setToTranslation$D$D(0, _y - this.y);
this.shape=this.trDS.createTransformedShape$java_awt_Shape(this.shape);
this.y=_y;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'toString',  function () {
var name=this.getClass$().getName$();
name=name.substring$I(1 + name.lastIndexOf$S(".")) + '[';
name+="x=" + new Double(this.x).toString();
name+=",y=" + new Double(this.y).toString() + ']' ;
return name;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var temp=panel.transformShape$java_awt_Shape(this.shape);
var g2=(g);
g2.setPaint$java_awt_Paint(this.color);
g2.fill$java_awt_Shape(temp);
g2.setPaint$java_awt_Paint(this.edgeColor);
g2.draw$java_awt_Shape(temp);
g2.setPaint$java_awt_Paint($I$(1).BLACK);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
