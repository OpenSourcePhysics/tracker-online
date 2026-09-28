(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.BitSet','java.awt.Shape','java.util.Arrays','java.awt.Stroke']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MultiShape", null, null, 'java.awt.Shape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bsFills=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['shapes','java.awt.Shape[]','bsFills','java.util.BitSet','strokes','java.awt.Stroke[]']]]

Clazz.newMeth(C$, 'c$$java_awt_ShapeA',  function (shapes) {
;C$.$init$.apply(this);
this.shapes=shapes;
}, 1);

Clazz.newMeth(C$, 'andFill$ZA',  function (fills) {
for (var i=0; i < fills.length; i++) if (fills[i]) {
this.bsFills.set$I(i);
}
return this;
});

Clazz.newMeth(C$, 'andStroke$java_awt_StrokeA',  function (strokes) {
this.strokes=strokes;
return this;
});

Clazz.newMeth(C$, 'getBounds$',  function () {
var r=this.shapes[0].getBounds$();
for (var i=this.shapes.length; --i >= 1; ) r=r.union$java_awt_Rectangle(this.shapes[i].getBounds$());

return r;
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
var r=this.shapes[0].getBounds$();
for (var i=this.shapes.length; --i >= 1; ) r=r.createUnion$java_awt_geom_Rectangle2D(this.shapes[i].getBounds$());

return r;
});

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
for (var i=this.shapes.length; --i >= 0; ) if (this.shapes[i].contains$D$D(x, y)) return true;

return false;
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Point2D',  function (p) {
for (var i=this.shapes.length; --i >= 0; ) if (this.shapes[i].contains$java_awt_geom_Point2D(p)) return true;

return false;
});

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
for (var i=this.shapes.length; --i >= 0; ) if (this.shapes[i].intersects$D$D$D$D(x, y, w, h)) return true;

return false;
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_Rectangle2D',  function (r) {
for (var i=this.shapes.length; --i >= 0; ) if (this.shapes[i].intersects$java_awt_geom_Rectangle2D(r)) return true;

return false;
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
for (var i=this.shapes.length; --i >= 0; ) if (this.shapes[i].contains$D$D$D$D(x, y, w, h)) return true;

return false;
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D',  function (r) {
for (var i=this.shapes.length; --i >= 0; ) if (this.shapes[i].contains$java_awt_geom_Rectangle2D(r)) return true;

return false;
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return this.shapes[0].getPathIterator$java_awt_geom_AffineTransform(at);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D',  function (at, flatness) {
return this.shapes[0].getPathIterator$java_awt_geom_AffineTransform$D(at, flatness);
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D',  function (g) {
for (var i=this.shapes.length; --i >= 0; ) {
if (Clazz.instanceOf(this.shapes[i], "org.opensourcephysics.cabrillo.tracker.MultiShape")) {
(this.shapes[i]).draw$java_awt_Graphics2D(g);
} else if (this.bsFills.get$I(i)) g.fill$java_awt_Shape(this.shapes[i]);
 else if (this.strokes != null  && i < this.strokes.length  && this.strokes[i] != null  ) {
var gstroke=g.getStroke$();
g.setStroke$java_awt_Stroke(this.strokes[i]);
g.draw$java_awt_Shape(this.shapes[i]);
g.setStroke$java_awt_Stroke(gstroke);
} else g.draw$java_awt_Shape(this.shapes[i]);
}
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (transform) {
var transformedShapes=Clazz.array($I$(2), [this.shapes.length]);
for (var i=0; i < this.shapes.length; i++) {
if (Clazz.instanceOf(this.shapes[i], "org.opensourcephysics.cabrillo.tracker.MultiShape")) {
transformedShapes[i]=(this.shapes[i]).transform$java_awt_geom_AffineTransform(transform);
} else {
transformedShapes[i]=transform.createTransformedShape$java_awt_Shape(this.shapes[i]);
}}
var shape=Clazz.new_(C$.c$$java_awt_ShapeA,[transformedShapes]);
shape.bsFills=this.bsFills.clone$();
if (this.strokes != null ) shape.andStroke$java_awt_StrokeA(this.strokes);
return shape;
});

Clazz.newMeth(C$, 'addDrawShape$java_awt_Shape$java_awt_Stroke',  function (shape, stroke) {
if (shape != null ) {
var newLength=this.shapes.length + 1;
this.shapes=$I$(3).copyOf$OA$I(this.shapes, newLength);
this.shapes[newLength - 1]=shape;
if (stroke != null ) {
if (this.strokes != null ) {
this.strokes=$I$(3).copyOf$OA$I(this.strokes, newLength);
} else {
this.strokes=Clazz.array($I$(4), [newLength]);
}this.strokes[newLength - 1]=stroke;
}}return this;
});

Clazz.newMeth(C$, 'addFillShape$java_awt_Shape',  function (shape) {
if (shape != null ) {
var newLength=this.shapes.length;
this.bsFills.set$I(newLength++);
this.shapes=$I$(3).copyOf$OA$I(this.shapes, newLength);
this.shapes[newLength - 1]=shape;
}return this;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
