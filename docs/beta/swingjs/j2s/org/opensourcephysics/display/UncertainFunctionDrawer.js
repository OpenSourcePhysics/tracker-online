(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'java.awt.geom.GeneralPath','java.awt.AlphaComposite','java.awt.geom.AffineTransform','java.util.Stack',['java.awt.geom.Point2D','.Double']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UncertainFunctionDrawer", null, 'org.opensourcephysics.display.FunctionDrawer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.upperPath=Clazz.new_($I$(1,1));
this.lowerPath=Clazz.new_($I$(1,1));
this.uncertain=true;
this.multiplier=Clazz.array(Double.TYPE, -1, [-1, 1, 0]);
this.composite=$I$(2).getInstance$I$F(3, 0.1);
},1);

C$.$fields$=[['Z',['uncertain'],'O',['upperPath','java.awt.geom.GeneralPath','+lowerPath','knownFunction','org.opensourcephysics.tools.KnownFunction','uncertainties','double[]','+paramValues','uncertainParams','double[][]','multiplier','double[]','composite','java.awt.AlphaComposite']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_KnownFunction',  function (f) {
;C$.superclazz.c$$org_opensourcephysics_numerics_Function.apply(this,[f]);C$.$init$.apply(this);
this.knownFunction=f;
this.uncertainties=Clazz.array(Double.TYPE, [f.getParameterCount$()]);
this.paramValues=Clazz.array(Double.TYPE, [f.getParameterCount$()]);
}, 1);

Clazz.newMeth(C$, 'evaluateMinMax$D$DA',  function (x, results) {
var n=this.paramValues.length;
if (results == null ) results=Clazz.array(Double.TYPE, [3]);
results[0]=results[1]=results[2]=this.knownFunction.evaluate$D(x);
if (this.uncertainParams == null ) return results;
for (var i=0; i < this.uncertainParams.length; i++) {
for (var j=0; j < n; j++) {
this.knownFunction.setParameterValue$I$D(j, this.uncertainParams[i][j]);
}
var y=this.knownFunction.evaluate$D(x);
results[0]=Math.min(results[0], y);
results[2]=Math.max(results[2], y);
}
for (var j=0; j < n; j++) {
this.knownFunction.setParameterValue$I$D(j, this.paramValues[j]);
}
return results;
});

Clazz.newMeth(C$, 'checkRange$org_opensourcephysics_display_DrawingPanel',  function (panel) {
if ((this.xrange[0] == panel.getXMin$() ) && (this.xrange[1] == panel.getXMax$() ) && (this.numpts == panel.getWidth$()) && !this.functionChanged  ) {
return;
}if (!p$1.isUncertain.apply(this, [])) {
C$.superclazz.prototype.checkRange$org_opensourcephysics_display_DrawingPanel.apply(this, [panel]);
return;
}this.functionChanged=false;
this.xrange[0]=panel.getXMin$();
this.xrange[1]=panel.getXMax$();
this.numpts=panel.getWidth$();
this.generalPath.reset$();
this.upperPath.reset$();
this.lowerPath.reset$();
if (this.numpts < 1) {
return;
}var vals=Clazz.array(Double.TYPE, [3]);
for (var i=0; i < this.paramValues.length; i++) {
this.paramValues[i]=this.knownFunction.getParameterValue$I(i);
}
this.evaluateMinMax$D$DA(this.xrange[0], vals);
this.yrange[0]=vals[0];
this.yrange[1]=vals[2];
this.lowerPath.moveTo$F$F(this.xrange[0], vals[0]);
this.generalPath.moveTo$F$F(this.xrange[0], vals[1]);
this.upperPath.moveTo$F$F(this.xrange[0], vals[2]);
var x=this.xrange[0];
var dx=(this.xrange[1] - this.xrange[0]) / (this.numpts);
for (var i=0; i < this.numpts; i++) {
x=x + dx;
this.evaluateMinMax$D$DA(x, vals);
var y=vals[1];
if (!Double.isNaN$D(x) && !Double.isNaN$D(y) ) {
y=Math.min(y, 1.0E12);
y=Math.max(y, -1.0E12);
this.generalPath.lineTo$F$F(x, y);
y=vals[0];
if (!Double.isNaN$D(y)) {
y=Math.min(y, 1.0E12);
y=Math.max(y, -1.0E12);
this.lowerPath.lineTo$F$F(x, y);
this.yrange[0]=Math.min(this.yrange[0], y);
}y=vals[2];
if (!Double.isNaN$D(y)) {
y=Math.min(y, 1.0E12);
y=Math.max(y, -1.0E12);
this.upperPath.lineTo$F$F(x, y);
this.yrange[1]=Math.max(this.yrange[1], y);
}}}
if (this.uncertain) {
this.lowerPath.append$java_awt_Shape$Z(p$1.reverse$java_awt_geom_GeneralPath.apply(this, [this.upperPath]), true);
this.lowerPath.closePath$();
}});

Clazz.newMeth(C$, 'reverse$java_awt_geom_GeneralPath',  function (path) {
var iterator=path.getPathIterator$java_awt_geom_AffineTransform(Clazz.new_($I$(3,1)));
var coords=Clazz.array(Double.TYPE, [6]);
var pts=Clazz.new_($I$(4,1));
while (!iterator.isDone$()){
var type=iterator.currentSegment$DA(coords);
if (type == 0 || type == 1 ) {
pts.push$O(Clazz.new_($I$(5,1).c$$D$D,[coords[0], coords[1]]));
}iterator.next$();
}
var reverse=Clazz.new_($I$(1,1));
var pt=pts.pop$();
reverse.moveTo$F$F(pt.x, pt.y);
while (!pts.empty$()){
pt=pts.pop$();
reverse.lineTo$F$F(pt.x, pt.y);
}
return reverse;
}, p$1);

Clazz.newMeth(C$, 'isUncertain',  function () {
if (this.filled || !this.uncertain ) return false;
var hasUncertainty=false;
for (var i=0; i < this.uncertainties.length; i++) {
hasUncertainty=hasUncertainty || this.uncertainties[i] != 0  ;
}
return hasUncertainty;
}, p$1);

Clazz.newMeth(C$, 'setUncertain$Z',  function (uncertain) {
if (uncertain == this.uncertain ) return;
this.uncertain=uncertain;
this.functionChanged=true;
});

Clazz.newMeth(C$, 'setUncertainties$DAA',  function (sigmasAndParams) {
var n=this.uncertainties.length;
if (sigmasAndParams == null  || sigmasAndParams.length < 1  || sigmasAndParams[0].length != n ) {
this.uncertainParams=null;
} else {
this.uncertainties=sigmasAndParams[0];
this.uncertainParams=Clazz.array(Double.TYPE, [sigmasAndParams.length - 1, null]);
System.arraycopy$O$I$O$I$I(sigmasAndParams, 1, this.uncertainParams, 0, this.uncertainParams.length);
}this.functionChanged=true;
});

Clazz.newMeth(C$, 'clearUncertainties$',  function () {
for (var i=0; i < this.uncertainties.length; i++) {
this.uncertainties[i]=0;
this.functionChanged=true;
}
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!p$1.isUncertain.apply(this, [])) {
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
return;
}if (!this.enabled) return;
if (!this.measured) {
this.checkRange$org_opensourcephysics_display_DrawingPanel(panel);
}var g2=g;
g2.setColor$java_awt_Color(this.color);
var s=this.generalPath.createTransformedShape$java_awt_geom_AffineTransform(panel.getPixelTransform$());
g2.draw$java_awt_Shape(s);
s=this.lowerPath.createTransformedShape$java_awt_geom_AffineTransform(panel.getPixelTransform$());
g2.setComposite$java_awt_Composite(this.composite);
g2.fill$java_awt_Shape(s);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
