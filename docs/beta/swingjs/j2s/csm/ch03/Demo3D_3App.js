(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'org.opensourcephysics.frames.Display3DFrame','org.opensourcephysics.display3d.simple3d.ElementArrow','org.opensourcephysics.display3d.simple3d.Group','java.awt.Color','org.opensourcephysics.display3d.simple3d.Resolution','org.opensourcephysics.display3d.simple3d.ElementBox','org.opensourcephysics.display3d.simple3d.ElementSurface','org.opensourcephysics.display3d.simple3d.ElementPlane','org.opensourcephysics.display3d.simple3d.ElementCone','org.opensourcephysics.numerics.Matrix3DTransformation','org.opensourcephysics.controls.SimulationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Demo3D_3App", null, 'org.opensourcephysics.controls.AbstractSimulation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frame=Clazz.new_($I$(1,1).c$$S,["3D Elements"]);
this.angle=0;
this.axis=Clazz.array(Double.TYPE, -1, [0, 0, 1]);
},1);

C$.$fields$=[['D',['angle'],'O',['frame','org.opensourcephysics.frames.Display3DFrame','trihedron','org.opensourcephysics.display3d.simple3d.Group','arrow','org.opensourcephysics.display3d.simple3d.ElementArrow','+extraDir','box','org.opensourcephysics.display3d.simple3d.ElementBox','torus','org.opensourcephysics.display3d.simple3d.ElementSurface','plane','org.opensourcephysics.display3d.simple3d.ElementPlane','cone','org.opensourcephysics.display3d.simple3d.ElementCone','axis','double[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.arrow=Clazz.new_($I$(2,1));
this.arrow.setXYZ$D$D$D(-0.5, -0.5, -1);
this.arrow.setSizeXYZ$D$D$D(1, 0, 0);
this.frame.addElement$org_opensourcephysics_display3d_core_Element(this.arrow);
this.trihedron=Clazz.new_($I$(3,1));
this.trihedron.setXYZ$D$D$D(0.5, 0.5, 1);
this.trihedron.setSizeXYZ$D$D$D(2, 2, 2);
this.frame.addElement$org_opensourcephysics_display3d_core_Element(this.trihedron);
var xDir=Clazz.new_($I$(2,1));
xDir.setXYZ$D$D$D(0, 0, 0);
xDir.setSizeXYZ$D$D$D(0.3, 0, 0);
this.trihedron.addElement$org_opensourcephysics_display3d_core_Element(xDir);
var yDir=Clazz.new_($I$(2,1));
yDir.setXYZ$D$D$D(0, 0, 0);
yDir.setSizeXYZ$D$D$D(0, 0.3, 0);
this.trihedron.addElement$org_opensourcephysics_display3d_core_Element(yDir);
var zDir=Clazz.new_($I$(2,1));
zDir.setXYZ$D$D$D(0, 0, 0);
zDir.setSizeXYZ$D$D$D(0, 0, 0.3);
this.trihedron.addElement$org_opensourcephysics_display3d_core_Element(zDir);
this.extraDir=Clazz.new_($I$(2,1));
this.extraDir.setXYZ$D$D$D(0.1, 0.1, 0.1);
this.extraDir.setSizeXYZ$D$D$D(0.4, 0, 0);
this.extraDir.getStyle$().setLineColor$java_awt_Color($I$(4).RED);
this.extraDir.getStyle$().setFillColor$java_awt_Color(null);
this.extraDir.getStyle$().setLineWidth$F(1.5);
this.extraDir.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(5,1).c$$I$I$I,[5, 1, 1]));
this.trihedron.addElement$org_opensourcephysics_display3d_core_Element(this.extraDir);
this.box=Clazz.new_($I$(6,1));
this.box.setXYZ$D$D$D(0.5, -0.5, -0.75);
this.box.setSizeXYZ$D$D$D(0.5, 0.5, 0.3);
this.box.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(5,1).c$$I$I$I,[5, 3, 2]));
this.box.setClosedTop$Z(false);
this.frame.addElement$org_opensourcephysics_display3d_core_Element(this.box);
var nu=20;
var nv=15;
var R=0.7;
var r=0.2;
var data=Clazz.array(Double.TYPE, [nu, nv, 3]);
for (var i=0; i < nu; i++) {
var u=i * 2 * 3.141592653589793  / (nu - 1);
for (var j=0; j < nv; j++) {
var v=j * 2 * 3.141592653589793  / (nv - 1);
data[i][j][0]=(R + r * Math.cos(v)) * Math.cos(u);
data[i][j][1]=(R + r * Math.cos(v)) * Math.sin(u);
data[i][j][2]=r * Math.sin(v);
}
}
this.torus=Clazz.new_($I$(7,1));
this.torus.setXYZ$D$D$D(0, 0.5, 0.5);
this.torus.setData$DAAA(data);
this.frame.addElement$org_opensourcephysics_display3d_core_Element(this.torus);
this.plane=Clazz.new_($I$(8,1));
this.plane.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(5,1).c$$I$I$I,[5, 5, 1]));
this.plane.setFirstDirection$DA(Clazz.array(Double.TYPE, -1, [1, 0, 0]));
this.plane.setSecondDirection$DA(Clazz.array(Double.TYPE, -1, [0, 1 / Math.sqrt(2), -1 / Math.sqrt(2)]));
this.plane.setXYZ$D$D$D(0, 0, 0);
this.plane.setSizeXYZ$D$D$D(2, Math.sqrt(8), 0);
this.plane.getStyle$().setFillColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, 255, 128]));
this.frame.addElement$org_opensourcephysics_display3d_core_Element(this.plane);
this.cone=Clazz.new_($I$(9,1));
this.cone.setXYZ$D$D$D(1, 0, -0.75);
this.cone.setSizeXYZ$D$D$D(0.5, 0.5, 0.5);
this.cone.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(5,1).c$$I$I$I,[3, 12, 3]));
this.cone.setTruncationHeight$D(0.2);
this.frame.addElement$org_opensourcephysics_display3d_core_Element(this.cone);
}, 1);

Clazz.newMeth(C$, 'doStep$',  function () {
this.angle+=0.1;
this.trihedron.setTransformation$org_opensourcephysics_numerics_Transformation($I$(10).rotation$D$DA(this.angle, this.axis));
this.extraDir.setTransformation$org_opensourcephysics_numerics_Transformation($I$(10).rotation$D$DA(-this.angle, this.axis));
this.arrow.setTransformation$org_opensourcephysics_numerics_Transformation($I$(10).rotation$D$DA(this.angle, this.axis));
this.box.setTransformation$org_opensourcephysics_numerics_Transformation($I$(10).rotation$D$DA(this.angle, this.axis));
this.torus.setTransformation$org_opensourcephysics_numerics_Transformation($I$(10).rotation$D$DA(this.angle, this.axis));
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(11,"createApp$org_opensourcephysics_controls_Simulation",[Clazz.new_(C$)]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
