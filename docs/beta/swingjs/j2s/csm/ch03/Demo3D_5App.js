(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'org.opensourcephysics.frames.Display3DFrame','org.opensourcephysics.display3d.simple3d.ElementCircle','org.opensourcephysics.display3d.simple3d.ElementTrail','java.awt.Color','org.opensourcephysics.controls.SimulationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Demo3D_5App", null, 'org.opensourcephysics.controls.AbstractSimulation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frame=Clazz.new_($I$(1,1).c$$S,["Ball in box."]);
this.ballRadius=0.05;
this.dt=0.1;
this.min=-1.0;
this.max=1.0;
},1);

C$.$fields$=[['D',['ballRadius','x','y','z','vx','vy','vz','dt','min','max'],'O',['frame','org.opensourcephysics.frames.Display3DFrame','ball','org.opensourcephysics.display3d.simple3d.ElementCircle','trail','org.opensourcephysics.display3d.simple3d.ElementTrail']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.frame.setPreferredMinMax$D$D$D$D$D$D(this.min, this.max, this.min, this.max, this.min, this.max);
this.ball=Clazz.new_($I$(2,1));
this.ball.setSizeXYZ$D$D$D(2 * this.ballRadius, 2 * this.ballRadius, 2 * this.ballRadius);
this.frame.addElement$org_opensourcephysics_display3d_core_Element(this.ball);
this.trail=Clazz.new_($I$(3,1));
this.trail.setMaximumPoints$I(30);
this.trail.getStyle$().setLineColor$java_awt_Color($I$(4).GRAY);
this.frame.addElement$org_opensourcephysics_display3d_core_Element(this.trail);
}, 1);

Clazz.newMeth(C$, 'initialize$',  function () {
this.x=(this.max - this.min) * (Math.random() - 0.5);
this.y=(this.max - this.min) * (Math.random() - 0.5);
this.z=(this.max - this.min) * (Math.random() - 0.5);
this.vx=(this.max - this.min) * (Math.random() - 0.5);
this.vy=(this.max - this.min) * (Math.random() - 0.5);
this.vz=(this.max - this.min) * (Math.random() - 0.5);
this.ball.setXYZ$D$D$D(this.x, this.y, this.z);
this.trail.clear$();
});

Clazz.newMeth(C$, 'doStep$',  function () {
this.x+=this.vx * this.dt;
this.y+=this.vy * this.dt;
this.z+=this.vz * this.dt;
if (this.x < this.min  || this.x > this.max  ) {
this.vx=-this.vx;
}if (this.y < this.min  || this.y > this.max  ) {
this.vy=-this.vy;
}if (this.z < this.min  || this.z > this.max  ) {
this.vz=-this.vz;
}this.ball.setXYZ$D$D$D(this.x, this.y, this.z);
this.trail.addPoint$D$D$D(this.x, this.y, this.z);
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(5,"createApp$org_opensourcephysics_controls_Simulation",[Clazz.new_(C$)]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
