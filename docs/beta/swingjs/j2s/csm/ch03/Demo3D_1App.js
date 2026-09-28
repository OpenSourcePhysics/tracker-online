(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'org.opensourcephysics.frames.Display3DFrame','org.opensourcephysics.display3d.simple3d.ElementCylinder','org.opensourcephysics.display3d.simple3d.Resolution','org.opensourcephysics.display3d.simple3d.ElementEllipsoid','org.opensourcephysics.display3d.simple3d.ElementCone','java.awt.Color','org.opensourcephysics.display3d.simple3d.ElementSurface']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Demo3D_1App");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var frame=Clazz.new_($I$(1,1).c$$S,["3D Demo 1"]);
frame.setPreferredMinMax$D$D$D$D$D$D(-1.0, 1.0, -1.0, 1.0, -1.0, 1.0);
frame.setDecorationType$I(1);
frame.setAltitude$D(0.6);
frame.setAzimuth$D(0.2);
var cylinder1=Clazz.new_($I$(2,1));
cylinder1.setXYZ$D$D$D(0, 0, -0.4);
cylinder1.setSizeXYZ$D$D$D(0.4, 0.4, 0.8);
cylinder1.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(3,1).c$$I$I$I,[5, 5, 2]));
frame.addElement$org_opensourcephysics_display3d_core_Element(cylinder1);
var cylinder2=Clazz.new_($I$(2,1));
cylinder2.setXYZ$D$D$D(0.8, -0.8, -0.4);
cylinder2.setSizeXYZ$D$D$D(0.0, 0.0, 0.8);
cylinder2.setSizeZ$D(0.2);
cylinder2.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(3,1).c$$I$I$I,[5, 5, 2]));
frame.addElement$org_opensourcephysics_display3d_core_Element(cylinder2);
var sphere1=Clazz.new_($I$(4,1));
sphere1.setXYZ$D$D$D(-0.8, 0.8, 0);
sphere1.setSizeXYZ$D$D$D(0.4, 0.4, 0.4);
frame.addElement$org_opensourcephysics_display3d_core_Element(sphere1);
var cone1=Clazz.new_($I$(5,1));
cone1.setXYZ$D$D$D(-0.8, -0.8, 0.0);
cone1.setSizeXYZ$D$D$D(0.4, 0.4, 0.8);
cone1.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(3,1).c$$I$I$I,[5, 5, 5]));
cone1.getStyle$().setFillColor$java_awt_Color($I$(6).PINK);
frame.addElement$org_opensourcephysics_display3d_core_Element(cone1);
var surface1=Clazz.new_($I$(7,1));
surface1.setXYZ$D$D$D(-1, -1, -1);
surface1.getStyle$().setFillColor$java_awt_Color($I$(6).RED);
frame.addElement$org_opensourcephysics_display3d_core_Element(surface1);
var nu=16;
var nv=32;
var data=Clazz.array(Double.TYPE, [nu, nv, 3]);
for (var i=0; i < nu; i++) {
for (var j=0; j < nv; j++) {
data[i][j][1]=0.0 + i * 2.0 / (nu - 1);
data[i][j][0]=0.0 + j * 2.0 / (nv - 1);
data[i][j][2]=Math.cos(3.0 * (data[i][j][1] - 1)) * (data[i][j][0] - 1) * (1.5 - data[i][j][0])  / 2.0;
}
}
surface1.setData$DAAA(data);
frame.setSize$I$I(600, 600);
frame.setDefaultCloseOperation$I(3);
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
