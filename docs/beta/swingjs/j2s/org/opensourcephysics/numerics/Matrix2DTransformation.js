(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={},I$=[[0,'org.opensourcephysics.numerics.Matrix2DTransformation','java.awt.geom.AffineTransform',['org.opensourcephysics.numerics.Matrix2DTransformation','.Matrix2DTransformationLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Matrix2DTransformation", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.numerics.MatrixTransformation');
C$.$classes$=[['Matrix2DTransformationLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.origin=Clazz.array(Double.TYPE, -1, [0, 0]);
this.originTransform=Clazz.new_($I$(2,1));
this.internalTransform=Clazz.new_($I$(2,1));
this.originInverseTransform=Clazz.new_($I$(2,1));
this.totalTransform=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['origin','double[]','originTransform','java.awt.geom.AffineTransform','+internalTransform','+originInverseTransform','+totalTransform']]]

Clazz.newMeth(C$, 'c$$DAA',  function (matrix) {
;C$.$init$.apply(this);
if (matrix != null ) {
this.internalTransform.setTransform$D$D$D$D$D$D(matrix[0][0], matrix[1][0], matrix[0][1], matrix[1][1], matrix[0][2], matrix[1][2]);
}p$1.update.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform',  function (transform) {
;C$.$init$.apply(this);
this.internalTransform.setTransform$java_awt_geom_AffineTransform(transform);
p$1.update.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'rotation$D',  function (theta) {
return Clazz.new_(C$.c$$java_awt_geom_AffineTransform,[$I$(2).getRotateInstance$D(theta)]);
}, 1);

Clazz.newMeth(C$, 'rotation$D$D$D',  function (theta, anchorx, anchory) {
return Clazz.new_(C$.c$$java_awt_geom_AffineTransform,[$I$(2).getRotateInstance$D$D$D(theta, anchorx, anchory)]);
}, 1);

Clazz.newMeth(C$, 'getTotalTransform$',  function () {
return this.totalTransform;
});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_(C$.c$$java_awt_geom_AffineTransform,[this.internalTransform]);
});

Clazz.newMeth(C$, 'getFlatMatrix$DA',  function (mat) {
if (mat == null ) {
mat=Clazz.array(Double.TYPE, [6]);
}this.internalTransform.getMatrix$DA(mat);
return mat;
});

Clazz.newMeth(C$, 'createAlignmentTransformation$DA$DA',  function (v1, v2) {
return Clazz.new_(C$.c$$java_awt_geom_AffineTransform,[$I$(2,"getRotateInstance$D",[Math.atan2(v2[1], v2[0]) - Math.atan2(v1[1], v1[0])])]);
}, 1);

Clazz.newMeth(C$, 'update',  function () {
this.totalTransform.setTransform$java_awt_geom_AffineTransform(this.originTransform);
this.totalTransform.concatenate$java_awt_geom_AffineTransform(this.internalTransform);
this.totalTransform.concatenate$java_awt_geom_AffineTransform(this.originInverseTransform);
}, p$1);

Clazz.newMeth(C$, 'setOrigin$D$D',  function (ox, oy) {
this.origin[0]=ox;
this.origin[1]=oy;
this.originTransform=$I$(2).getTranslateInstance$D$D(ox, oy);
this.originInverseTransform=$I$(2).getTranslateInstance$D$D(-ox, -oy);
p$1.update.apply(this, []);
});

Clazz.newMeth(C$, 'setOrigin$DA',  function (origin) {
this.setOrigin$D$D(origin[0], origin[1]);
return origin;
});

Clazz.newMeth(C$, 'multiply$org_opensourcephysics_numerics_Matrix2DTransformation',  function (trans) {
this.internalTransform.concatenate$java_awt_geom_AffineTransform(trans.internalTransform);
p$1.update.apply(this, []);
});

Clazz.newMeth(C$, 'multiply$DAA',  function (mat) {
this.internalTransform.concatenate$java_awt_geom_AffineTransform(Clazz.new_(C$.c$$DAA,[mat]).internalTransform);
p$1.update.apply(this, []);
});

Clazz.newMeth(C$, 'direct$DA',  function (point) {
this.totalTransform.transform$DA$I$DA$I$I(point, 0, point, 0, 1);
return point;
});

Clazz.newMeth(C$, 'inverse$DA',  function (point) {
try {
this.totalTransform.inverseTransform$DA$I$DA$I$I(point, 0, point, 0, 1);
return point;
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.awt.geom.NoninvertibleTransformException")){
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["The inverse matrix does not exist."]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Matrix2DTransformation, "Matrix2DTransformationLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var transf=obj;
control.setValue$S$O("matrix", transf.getFlatMatrix$DA(null));
control.setValue$S$O("origin x", transf.origin);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_([Clazz.new_($I$(2,1))],$I$(1,1).c$$java_awt_geom_AffineTransform);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var transf=obj;
transf.internalTransform.setTransform$java_awt_geom_AffineTransform(Clazz.new_([control.getObject$S("matrix")],$I$(2,1).c$$DA));
transf.setOrigin$DA(control.getObject$S("origin"));
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
