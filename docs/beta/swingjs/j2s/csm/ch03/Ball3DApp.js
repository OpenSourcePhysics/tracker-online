(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'org.opensourcephysics.frames.Display3DFrame','org.opensourcephysics.display3d.simple3d.ElementEllipsoid','org.opensourcephysics.display3d.simple3d.ElementBox','java.awt.Color','org.opensourcephysics.display3d.core.Resolution','org.opensourcephysics.controls.ControlUtils','org.opensourcephysics.controls.SimulationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Ball3DApp", null, 'org.opensourcephysics.controls.AbstractSimulation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frame=Clazz.new_($I$(1,1).c$$S,["3D Ball"]);
this.ball=Clazz.new_($I$(2,1));
this.time=0;
this.dt=0.1;
this.vz=0;
},1);

C$.$fields$=[['D',['time','dt','vz'],'O',['frame','org.opensourcephysics.frames.Display3DFrame','ball','org.opensourcephysics.display3d.simple3d.Element']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.frame.setPreferredMinMax$D$D$D$D$D$D(-5.0, 5.0, -5.0, 5.0, 0.0, 10.0);
this.ball.setXYZ$D$D$D(0, 0, 9);
this.ball.setSizeXYZ$D$D$D(1, 1, 1);
this.frame.addElement$org_opensourcephysics_display3d_core_Element(this.ball);
var box=Clazz.new_($I$(3,1));
box.setXYZ$D$D$D(0, 0, 0);
box.setSizeXYZ$D$D$D(4, 4, 1);
box.getStyle$().setFillColor$java_awt_Color($I$(4).RED);
box.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(5,1).c$$I$I$I,[5, 5, 2]));
this.frame.addElement$org_opensourcephysics_display3d_core_Element(box);
this.frame.setMessage$S("time = " + $I$(6).f2$D(this.time));
}, 1);

Clazz.newMeth(C$, 'doStep$',  function () {
this.time+=0.1;
var z=this.ball.getZ$() + this.vz * this.dt - 4.9 * this.dt * this.dt ;
this.vz-=9.8 * this.dt;
if ((this.vz < 0 ) && (z < 1 ) ) {
this.vz=-this.vz;
}this.ball.setZ$D(z);
this.frame.setMessage$S("time = " + $I$(6).f2$D(this.time));
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(7,"createApp$org_opensourcephysics_controls_Simulation",[Clazz.new_(C$)]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
