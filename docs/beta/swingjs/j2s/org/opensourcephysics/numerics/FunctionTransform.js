(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={},I$=[[0,['java.awt.geom.Point2D','.Double'],['java.awt.geom.Point2D','.Float']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FunctionTransform", null, 'java.awt.geom.AffineTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$m10=1;
this.$m01=1;
this.flatmatrix=Clazz.array(Double.TYPE, [6]);
this.applyXFunction=false;
this.applyYFunction=false;
},1);

C$.$fields$=[['Z',['applyXFunction','applyYFunction'],'D',['$m00','$m10','$m01','$m11','$m02','$m12'],'O',['flatmatrix','double[]','xFunction','org.opensourcephysics.numerics.InvertibleFunction','+yFunction']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D$D$D',  function (m00, m10, m01, m11, m02, m12) {
;C$.superclazz.c$$D$D$D$D$D$D.apply(this,[m00, m10, m01, m11, m02, m12]);C$.$init$.apply(this);
this.$m00=m00;
this.$m10=m10;
this.$m01=m01;
this.$m11=m11;
this.$m02=m02;
this.$m12=m12;
}, 1);

Clazz.newMeth(C$, 'setXFunction$org_opensourcephysics_numerics_InvertibleFunction',  function (x) {
if (x == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["x function can not be null."]);
}this.xFunction=x;
});

Clazz.newMeth(C$, 'setYFunction$org_opensourcephysics_numerics_InvertibleFunction',  function (y) {
if (y == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["y function can not be null."]);
}this.yFunction=y;
});

Clazz.newMeth(C$, 'setApplyXFunction$Z',  function (b) {
this.applyXFunction=b;
});

Clazz.newMeth(C$, 'setApplyYFunction$Z',  function (b) {
this.applyYFunction=b;
});

Clazz.newMeth(C$, 'translate$D$D',  function (tx, ty) {
C$.superclazz.prototype.translate$D$D.apply(this, [tx, ty]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'rotate$D',  function (theta) {
C$.superclazz.prototype.rotate$D.apply(this, [theta]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'rotate$D$D$D',  function (theta, x, y) {
C$.superclazz.prototype.rotate$D$D$D.apply(this, [theta, x, y]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'scale$D$D',  function (sx, sy) {
C$.superclazz.prototype.scale$D$D.apply(this, [sx, sy]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'shear$D$D',  function (shx, shy) {
C$.superclazz.prototype.shear$D$D.apply(this, [shx, shy]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'setToIdentity$',  function () {
C$.superclazz.prototype.setToIdentity$.apply(this, []);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'setToTranslation$D$D',  function (tx, ty) {
C$.superclazz.prototype.setToTranslation$D$D.apply(this, [tx, ty]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'setToRotation$D',  function (theta) {
C$.superclazz.prototype.setToRotation$D.apply(this, [theta]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'setToRotation$D$D$D',  function (theta, x, y) {
C$.superclazz.prototype.setToRotation$D$D$D.apply(this, [theta, x, y]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'setToScale$D$D',  function (sx, sy) {
C$.superclazz.prototype.setToScale$D$D.apply(this, [sx, sy]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'setToShear$D$D',  function (shx, shy) {
C$.superclazz.prototype.setToShear$D$D.apply(this, [shx, shy]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'setTransform$java_awt_geom_AffineTransform',  function (Tx) {
C$.superclazz.prototype.setTransform$java_awt_geom_AffineTransform.apply(this, [Tx]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'setTransform$D$D$D$D$D$D',  function (m00, m10, m01, m11, m02, m12) {
C$.superclazz.prototype.setTransform$D$D$D$D$D$D.apply(this, [m00, m10, m01, m11, m02, m12]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'concatenate$java_awt_geom_AffineTransform',  function (Tx) {
C$.superclazz.prototype.concatenate$java_awt_geom_AffineTransform.apply(this, [Tx]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'preConcatenate$java_awt_geom_AffineTransform',  function (Tx) {
C$.superclazz.prototype.preConcatenate$java_awt_geom_AffineTransform.apply(this, [Tx]);
p$1.updateMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'createInverse$',  function () {
var at=C$.superclazz.prototype.createInverse$.apply(this, []);
var ft=Clazz.new_(C$);
ft.setTransform$java_awt_geom_AffineTransform(at);
var xFunction=((P$.FunctionTransform$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionTransform$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.numerics.InvertibleFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return this.b$['org.opensourcephysics.numerics.FunctionTransform'].xFunction.getInverse$D(x);
});

Clazz.newMeth(C$, 'getInverse$D',  function (y) {
return this.b$['org.opensourcephysics.numerics.FunctionTransform'].xFunction.evaluate$D(y);
});
})()
), Clazz.new_(P$.FunctionTransform$1.$init$,[this, null]));
var yFunction=((P$.FunctionTransform$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionTransform$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.numerics.InvertibleFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return this.b$['org.opensourcephysics.numerics.FunctionTransform'].yFunction.getInverse$D(x);
});

Clazz.newMeth(C$, 'getInverse$D',  function (y) {
return this.b$['org.opensourcephysics.numerics.FunctionTransform'].yFunction.evaluate$D(y);
});
})()
), Clazz.new_(P$.FunctionTransform$2.$init$,[this, null]));
ft.setXFunction$org_opensourcephysics_numerics_InvertibleFunction(xFunction);
ft.setYFunction$org_opensourcephysics_numerics_InvertibleFunction(yFunction);
return ft;
});

Clazz.newMeth(C$, 'transform$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (ptSrc, ptDst) {
if (ptDst == null ) {
if (Clazz.instanceOf(ptSrc, "java.awt.geom.Point2D.Double")) {
ptDst=Clazz.new_($I$(1,1));
} else {
ptDst=Clazz.new_($I$(2,1));
}}var x=ptSrc.getX$();
var y=ptSrc.getY$();
if (this.applyXFunction) {
x=this.xFunction.evaluate$D(x);
}if (this.applyYFunction) {
y=this.yFunction.evaluate$D(y);
}ptDst.setLocation$D$D(x * this.$m00 + y * this.$m01 + this.$m02, x * this.$m10 + y * this.$m11 + this.$m12);
return ptDst;
});

Clazz.newMeth(C$, 'transform$java_awt_geom_Point2DA$I$java_awt_geom_Point2DA$I$I',  function (ptSrc, srcOff, ptDst, dstOff, numPts) {
while (--numPts >= 0){
var src=ptSrc[srcOff++];
var x=src.getX$();
var y=src.getY$();
if (this.applyXFunction) {
x=this.xFunction.evaluate$D(x);
}if (this.applyYFunction) {
y=this.yFunction.evaluate$D(y);
}var dst=ptDst[dstOff++];
if (dst == null ) {
if (Clazz.instanceOf(src, "java.awt.geom.Point2D.Double")) {
dst=Clazz.new_($I$(1,1));
} else {
dst=Clazz.new_($I$(2,1));
}ptDst[dstOff - 1]=dst;
}dst.setLocation$D$D(x * this.$m00 + y * this.$m01 + this.$m02, x * this.$m10 + y * this.$m11 + this.$m12);
}
});

Clazz.newMeth(C$, 'transform$FA$I$FA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
var M00;
var M01;
var M02;
var M10;
var M11;
var M12;
if ((dstPts === srcPts ) && (dstOff > srcOff) && (dstOff < srcOff + numPts * 2)  ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
srcOff=dstOff;
}M00=this.$m00;
M01=this.$m01;
M02=this.$m02;
M10=this.$m10;
M11=this.$m11;
M12=this.$m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
if (this.applyXFunction) {
x=this.xFunction.evaluate$D(x);
}if (this.applyYFunction) {
y=this.yFunction.evaluate$D(y);
}dstPts[dstOff++]=(M00 * x + M01 * y + M02);
dstPts[dstOff++]=(M10 * x + M11 * y + M12);
}
});

Clazz.newMeth(C$, 'transform$DA$I$DA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
var M00;
var M01;
var M02;
var M10;
var M11;
var M12;
if ((dstPts === srcPts ) && (dstOff > srcOff) && (dstOff < srcOff + numPts * 2)  ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
srcOff=dstOff;
}M00=this.$m00;
M01=this.$m01;
M02=this.$m02;
M10=this.$m10;
M11=this.$m11;
M12=this.$m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
if (this.applyXFunction) {
x=this.xFunction.evaluate$D(x);
}if (this.applyYFunction) {
y=this.yFunction.evaluate$D(y);
}dstPts[dstOff++]=M00 * x + M01 * y + M02;
dstPts[dstOff++]=M10 * x + M11 * y + M12;
}
});

Clazz.newMeth(C$, 'transform$FA$I$DA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
var M00;
var M01;
var M02;
var M10;
var M11;
var M12;
M00=this.$m00;
M01=this.$m01;
M02=this.$m02;
M10=this.$m10;
M11=this.$m11;
M12=this.$m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
if (this.applyXFunction) {
x=this.xFunction.evaluate$D(x);
}if (this.applyYFunction) {
y=this.yFunction.evaluate$D(y);
}dstPts[dstOff++]=M00 * x + M01 * y + M02;
dstPts[dstOff++]=M10 * x + M11 * y + M12;
}
});

Clazz.newMeth(C$, 'transform$DA$I$FA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
var M00;
var M01;
var M02;
var M10;
var M11;
var M12;
M00=this.$m00;
M01=this.$m01;
M02=this.$m02;
M10=this.$m10;
M11=this.$m11;
M12=this.$m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
if (this.applyXFunction) {
x=this.xFunction.evaluate$D(x);
}if (this.applyYFunction) {
y=this.yFunction.evaluate$D(y);
}dstPts[dstOff++]=(M00 * x + M01 * y + M02);
dstPts[dstOff++]=(M10 * x + M11 * y + M12);
}
});

Clazz.newMeth(C$, 'inverseTransform$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (ptSrc, ptDst) {
if (ptDst == null ) {
if (Clazz.instanceOf(ptSrc, "java.awt.geom.Point2D.Double")) {
ptDst=Clazz.new_($I$(1,1));
} else {
ptDst=Clazz.new_($I$(2,1));
}}return ptDst;
});

Clazz.newMeth(C$, 'inverseTransform$DA$I$DA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
if ((dstPts === srcPts ) && (dstOff > srcOff) && (dstOff < srcOff + numPts * 2)  ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
srcOff=dstOff;
}var det=this.$m00 * this.$m11 - this.$m01 * this.$m10;
if (Math.abs(det) <= 4.9E-324 ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is " + new Double(det).toString()]);
}});

Clazz.newMeth(C$, 'deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (ptSrc, ptDst) {
if (ptDst == null ) {
if (Clazz.instanceOf(ptSrc, "java.awt.geom.Point2D.Double")) {
ptDst=Clazz.new_($I$(1,1));
} else {
ptDst=Clazz.new_($I$(2,1));
}}var x=ptSrc.getX$();
var y=ptSrc.getY$();
if (this.applyXFunction) {
x=this.xFunction.evaluate$D(x);
}if (this.applyYFunction) {
y=this.yFunction.evaluate$D(y);
}ptDst.setLocation$D$D(x * this.$m00 + y * this.$m01, x * this.$m10 + y * this.$m11);
return ptDst;
});

Clazz.newMeth(C$, 'deltaTransform$DA$I$DA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
var M00;
var M01;
var M10;
var M11;
if ((dstPts === srcPts ) && (dstOff > srcOff) && (dstOff < srcOff + numPts * 2)  ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
srcOff=dstOff;
}M00=this.$m00;
M01=this.$m01;
M10=this.$m10;
M11=this.$m11;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
if (this.applyXFunction) {
x=this.xFunction.evaluate$D(x);
}if (this.applyYFunction) {
y=this.yFunction.evaluate$D(y);
}dstPts[dstOff++]=x * M00 + y * M01;
dstPts[dstOff++]=x * M10 + y * M11;
}
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "org.opensourcephysics.numerics.FunctionTransform")) {
var a=obj;
var matrix=Clazz.array(Double.TYPE, [6]);
a.getMatrix$DA(matrix);
if ((this.$m00 == matrix[0] ) && (this.$m01 == matrix[1] ) && (this.$m02 == matrix[2] ) && (this.$m10 == matrix[3] ) && (this.$m11 == matrix[4] ) && (this.$m12 == matrix[5] )  ) {
if ((this.applyXFunction == a.applyXFunction ) && (this.applyYFunction == a.applyYFunction ) ) {
return (this.xFunction.getClass$() === a.xFunction.getClass$() ) && (this.yFunction.getClass$() === a.yFunction.getClass$() ) ;
}}} else if (Clazz.instanceOf(obj, "java.awt.geom.AffineTransform")) {
if (!this.applyXFunction && !this.applyYFunction ) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
}}return false;
});

Clazz.newMeth(C$, 'updateMatrix',  function () {
this.getMatrix$DA(this.flatmatrix);
this.$m00=this.flatmatrix[0];
this.$m10=this.flatmatrix[1];
this.$m01=this.flatmatrix[2];
this.$m11=this.flatmatrix[3];
this.$m02=this.flatmatrix[4];
this.$m12=this.flatmatrix[5];
}, p$1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
