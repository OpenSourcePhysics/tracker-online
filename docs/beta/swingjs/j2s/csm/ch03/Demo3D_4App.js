(function(){var P$=Clazz.newPackage("csm.ch03"),p$1={},I$=[[0,'org.opensourcephysics.frames.Display3DFrame','org.opensourcephysics.display3d.simple3d.Group','org.opensourcephysics.display3d.simple3d.ElementCircle','org.opensourcephysics.display3d.simple3d.ElementText','org.opensourcephysics.display3d.simple3d.ElementTrail','java.awt.Color','org.opensourcephysics.controls.SimulationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Demo3D_4App", null, 'org.opensourcephysics.controls.AbstractSimulation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numElectrons=50;
this.radius=7.0;
this.frame=Clazz.new_($I$(1,1).c$$S,["OSP 3D"]);
this.group=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['D',['radius'],'I',['numElectrons'],'O',['alphas','double[]','+betas','electrons','org.opensourcephysics.display3d.simple3d.ElementCircle[]','traces','org.opensourcephysics.display3d.simple3d.ElementTrail[]','frame','org.opensourcephysics.frames.Display3DFrame','group','org.opensourcephysics.display3d.simple3d.Group']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.frame.setPreferredMinMax$D$D$D$D$D$D(-10.0, 10.0, -10.0, 10.0, -10.0, 10.0);
var nucleus=Clazz.new_($I$(3,1));
nucleus.setXYZ$D$D$D(0.0, 0.0, 0.0);
nucleus.setSizeXYZ$D$D$D(3.0, 3.0, 3.0);
this.group.addElement$org_opensourcephysics_display3d_core_Element(nucleus);
this.frame.addElement$org_opensourcephysics_display3d_core_Element(this.group);
var caption=Clazz.new_($I$(4,1));
caption.setText$S("OSP 3D Simulation");
caption.setXYZ$D$D$D(0.0, 0.0, -10.0);
this.frame.addElement$org_opensourcephysics_display3d_core_Element(caption);
p$1.createElectrons.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'doStep$',  function () {
p$1.moveElectrons$D.apply(this, [0.02]);
});

Clazz.newMeth(C$, 'createElectrons',  function () {
this.alphas=Clazz.array(Double.TYPE, [this.numElectrons]);
this.betas=Clazz.array(Double.TYPE, [this.numElectrons]);
this.electrons=Clazz.array($I$(3), [this.numElectrons]);
this.traces=Clazz.array($I$(5), [this.numElectrons]);
for (var i=0; i < this.numElectrons; i++) {
this.alphas[i]=Math.random() * 3.141592653589793 * 2.0 ;
this.betas[i]=-1.5707963267948966 + Math.random() * 3.141592653589793;
this.electrons[i]=Clazz.new_($I$(3,1));
this.electrons[i].setSizeXYZ$D$D$D(0.6, 0.6, 0.6);
this.electrons[i].getStyle$().setFillColor$java_awt_Color($I$(6).RED);
this.group.addElement$org_opensourcephysics_display3d_core_Element(this.electrons[i]);
this.traces[i]=Clazz.new_($I$(5,1));
this.traces[i].getStyle$().setLineColor$java_awt_Color($I$(6).GRAY);
this.traces[i].setMaximumPoints$I(5);
this.group.addElement$org_opensourcephysics_display3d_core_Element(this.traces[i]);
}
p$1.moveElectrons$D.apply(this, [0]);
}, p$1);

Clazz.newMeth(C$, 'moveElectrons$D',  function (_dt) {
var x;
var y;
var z;
for (var i=0; i < this.numElectrons; i++) {
this.alphas[i]+=3.141592653589793 * 2.0 * _dt ;
this.betas[i]+=3.141592653589793 * _dt;
x=this.radius * Math.cos(this.alphas[i]) * Math.cos(this.betas[i]) ;
y=this.radius * Math.sin(this.alphas[i]) * Math.cos(this.betas[i]) ;
z=this.radius * Math.sin(this.betas[i]);
this.electrons[i].setXYZ$D$D$D(x, y, z);
this.traces[i].addPoint$D$D$D(x, y, z);
}
}, p$1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(7,"createApp$org_opensourcephysics_controls_Simulation",[Clazz.new_(C$)]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
