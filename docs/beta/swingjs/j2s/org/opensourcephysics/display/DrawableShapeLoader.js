(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.controls.XML','java.awt.geom.GeneralPath','org.opensourcephysics.display.GeneralPathLoader','java.awt.geom.AffineTransform','org.opensourcephysics.display.DrawableShape']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawableShapeLoader", null, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var drawableShape=obj;
control.setValue$S$O("geometry", drawableShape.shapeClass);
control.setValue$S$D("x", drawableShape.x);
control.setValue$S$D("y", drawableShape.y);
control.setValue$S$D("theta", drawableShape.theta);
control.setValue$S$O("fill color", drawableShape.color);
control.setValue$S$O("edge color", drawableShape.edgeColor);
var shape=$I$(4).getRotateInstance$D$D$D(-drawableShape.theta, drawableShape.x, drawableShape.y).createTransformedShape$java_awt_Shape(drawableShape.shape);
control.setValue$S$O("general path", shape);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_([Clazz.new_($I$(2,1)), 0, 0],$I$(5,1).c$$java_awt_Shape$D$D);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var drawableShape=obj;
var geometry=control.getString$S("geometry");
var x=control.getDouble$S("x");
var y=control.getDouble$S("y");
var theta=control.getDouble$S("theta");
drawableShape.shape=control.getObject$S("general path");
drawableShape.shapeClass=geometry;
drawableShape.x=x;
drawableShape.y=y;
drawableShape.color=control.getObject$S("fill color");
drawableShape.edgeColor=control.getObject$S("edge color");
drawableShape.setTheta$D(theta);
return obj;
});

C$.$static$=function(){C$.$static$=0;
{
$I$(1,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(2)), Clazz.new_($I$(3,1))]);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
