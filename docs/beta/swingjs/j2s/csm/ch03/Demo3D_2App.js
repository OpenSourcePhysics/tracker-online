(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'org.opensourcephysics.frames.Display3DFrame','org.opensourcephysics.display3d.simple3d.Group','org.opensourcephysics.display3d.simple3d.ElementEllipsoid','org.opensourcephysics.display3d.simple3d.ElementText','org.opensourcephysics.display3d.simple3d.ElementCircle','java.awt.Color','org.opensourcephysics.numerics.Quaternion','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Demo3D_2App");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var frame=Clazz.new_($I$(1,1).c$$S,["3D Demo 1"]);
frame.setPreferredMinMax$D$D$D$D$D$D(-10.0, 10.0, -10.0, 10.0, -10.0, 10.0);
var group=Clazz.new_($I$(2,1));
var planet=Clazz.new_($I$(3,1));
planet.setXYZ$D$D$D(0.0, 0.0, 0.0);
planet.setSizeXYZ$D$D$D(10.0, 10.0, 10.0);
group.addElement$org_opensourcephysics_display3d_core_Element(planet);
var caption=Clazz.new_($I$(4,1));
caption.setText$S("Test Program");
caption.setXYZ$D$D$D(0.0, 0.0, -10.0);
frame.addElement$org_opensourcephysics_display3d_core_Element(caption);
for (var i=0; i < 10; i++) {
var alpha=Math.random() * 3.141592653589793 * 2.0 ;
var beta=-1.5707963267948966 + Math.random() * 3.141592653589793;
var x=7 * Math.cos(alpha) * Math.cos(beta) ;
var y=7 * Math.sin(alpha) * Math.cos(beta) ;
var z=7 * Math.sin(beta);
var satellite=Clazz.new_($I$(5,1));
satellite.setSizeXYZ$D$D$D(2, 2, 2);
satellite.getStyle$().setFillColor$java_awt_Color($I$(6).RED);
satellite.setXYZ$D$D$D(x, y, z);
group.addElement$org_opensourcephysics_display3d_core_Element(satellite);
}
frame.addElement$org_opensourcephysics_display3d_core_Element(group);
frame.setSize$I$I(300, 300);
frame.setDefaultCloseOperation$I(3);
frame.setVisible$Z(true);
var theta=0;
var rotation=Clazz.new_($I$(7,1).c$$D$D$D$D,[1, 0, 0, 0]);
var n=Clazz.array(Double.TYPE, -1, [1, 1, 0]);
while (true){
try {
$I$(8).sleep$J(100);
} catch (ex) {
if (Clazz.exceptionOf(ex,"InterruptedException")){
} else {
throw ex;
}
}
theta+=0.15707963267948966;
var cos=Math.cos(theta);
var sin=Math.sin(theta);
rotation.setCoordinates$D$D$D$D(cos, sin * n[0], sin * n[1], sin * n[2]);
group.setTransformation$org_opensourcephysics_numerics_Transformation(rotation);
frame.render$();
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
