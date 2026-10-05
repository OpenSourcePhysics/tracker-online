(function(){var P$=Clazz.newPackage("davidson.gr"),I$=[[0,'java.awt.Color','javax.swing.event.SwingPropertyChangeSupport','org.opensourcephysics.frames.PlotFrame','org.opensourcephysics.display.FunctionDrawer',['davidson.gr.ClassicalInspector','.EffectivePotential'],'org.opensourcephysics.controls.OSPControlTable',['davidson.gr.ClassicalInspector','.Mass'],['davidson.gr.ClassicalInspector','.EnergyLine'],'java.awt.Dimension','org.opensourcephysics.display.TeXParser','davidson.gr.ClassicalApp','davidson.gr.Trajectory']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClassicalInspector", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['EffectivePotential',0],['Mass',0],['EnergyLine',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.support=Clazz.new_($I$(2,1).c$$O,[this]);
this.plot=Clazz.new_(["r", "U(r)", "Newtonian Effective Potential"],$I$(3,1).c$$S$S$S);
this.functionDrawer=Clazz.new_([Clazz.new_($I$(5,1),[this, null])],$I$(4,1).c$$org_opensourcephysics_numerics_Function);
this.controlTable=Clazz.new_($I$(6,1));
this.E=-0.5;
this.L=0.5;
this.r=1.0;
this.M=1;
this.mass=Clazz.new_($I$(7,1),[this, null]);
this.energyLine=Clazz.new_($I$(8,1),[this, null]);
this.newInspectorData=false;
},1);

C$.$fields$=[['Z',['newInspectorData'],'D',['E','L','r','M'],'O',['support','java.beans.PropertyChangeSupport','plot','org.opensourcephysics.frames.PlotFrame','functionDrawer','org.opensourcephysics.display.FunctionDrawer','controlTable','org.opensourcephysics.controls.OSPControlTable','simulation','org.opensourcephysics.controls.AbstractSimulation','mass','davidson.gr.ClassicalInspector.Mass','energyLine','davidson.gr.ClassicalInspector.EnergyLine']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_AbstractSimulation$davidson_gr_ClassicalTrajectory',  function (app, trajectory) {
;C$.$init$.apply(this);
var drdt=0;
var dphidt=0;
var phi=0;
this.mass.color=$I$(1).MAGENTA;
if (app != null ) {
this.simulation=app;
this.r=trajectory.state[0];
drdt=trajectory.state[1];
phi=trajectory.state[2];
phi=(3.141592653589793 + trajectory.state[2]) % (6.283185307179586) - 3.141592653589793;
dphidt=trajectory.state[3];
this.L=this.r * this.r * trajectory.state[3] ;
this.E=trajectory.state[1] * trajectory.state[1] / 2 + this.L * this.L / 2 / this.r / this.r - this.M / this.r;
}this.controlTable.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9,1).c$$I$I,[100, 100]));
this.controlTable.setDecimalFormat$S("#0.0000");
this.controlTable.setEditable$Z(false);
this.controlTable.addControlListener$S$O("propertyChange", this);
this.controlTable.setValue$S$D("r", this.r);
this.controlTable.setValue$S$D($I$(10).parseTeX$S("$\\phi$"), phi);
this.controlTable.setValue$S$D("E", this.E);
this.controlTable.setValue$S$D("L", this.L);
this.controlTable.setValue$S$D("dr/dt", drdt);
this.controlTable.setValue$S$D($I$(11).PHIRATE, dphidt);
this.plot.getDrawingPanel$().getCoordinateStringBuilder$().setCoordinateLabels$S$S("r=", " E=");
this.plot.setJMenuBar$javax_swing_JMenuBar(null);
this.plot.addDrawable$org_opensourcephysics_display_Drawable(this.functionDrawer);
this.plot.addDrawable$org_opensourcephysics_display_Drawable(this.energyLine);
this.plot.addDrawable$org_opensourcephysics_display_Drawable(this.mass);
this.setScale$();
this.plot.setSize$I$I(500, 300);
this.controlTable.setBackground$java_awt_Color(this.plot.getDrawingPanel$().getBackground$());
this.plot.getContentPane$().add$java_awt_Component$O(this.controlTable, "West");
}, 1);

Clazz.newMeth(C$, 'enableInteraction$Z',  function (enabled) {
this.energyLine.setEnabled$Z(enabled);
this.mass.setEnabled$Z(enabled);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
this.support.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'setScale$',  function () {
if ((this.r <= 1.4E-45 ) || Double.isNaN$D(this.r) ) {
this.r=1.4E-45;
}var ymin=(this.L == 0 ) ? -100 : (-this.M * this.M) / 2 / this.L / this.L ;
ymin=Math.min(ymin, 1.1 * this.E);
var ymax=-2 * ymin;
ymax=Math.max(ymax, 1.1 * this.E);
var disc=this.M * this.M / this.E / this.E + 4 * this.L * this.L  / 2 / this.E;
if (this.E == 0 ) {
this.r=Math.max(this.r, this.L * this.L / 2 / this.M);
} else if (disc <= 0 ) {
this.r=(this.L * this.L) / this.M;
} else if (this.E >= 0 ) {
this.r=Math.max(this.r, ((-this.M / this.E) + Math.sqrt(disc)) / 2);
} else {
var root1=((-this.M / this.E) - Math.sqrt(disc)) / 2.0;
var root2=((-this.M / this.E) + Math.sqrt(disc)) / 2.0;
if (this.r < root1 ) {
this.r=root1;
} else if (this.r > root2 ) {
this.r=root2;
}}this.plot.setPreferredMinMax$D$D$D$D(0, Math.max(4, 1.1 * this.r), ymin, ymax);
var drdt=Math.sqrt(Math.max(0, (2 * this.E + 2 * this.M / this.r - this.L * this.L / this.r / this.r)));
this.functionDrawer.functionChanged=true;
this.controlTable.setValue$S$D("r", this.r);
this.controlTable.setValue$S$D("dr/dt", drdt);
this.controlTable.setValue$S$D($I$(11).PHIRATE, this.L / this.r / this.r );
this.controlTable.refresh$();
this.plot.repaint$();
});

Clazz.newMeth(C$, 'updateDataAndScale$davidson_gr_ClassicalTrajectory',  function (trajectory) {
if (trajectory == null ) {
return;
}this.r=trajectory.state[0];
var phi=(3.141592653589793 + trajectory.state[2]) % (6.283185307179586) - 3.141592653589793;
this.L=this.r * this.r * trajectory.state[3] ;
this.E=trajectory.state[1] * trajectory.state[1] / 2 + this.L * this.L / 2 / this.r / this.r - this.M / this.r;
this.controlTable.setValue$S$D($I$(10).parseTeX$S("$\\phi$"), phi);
this.controlTable.setValue$S$D("E", this.E);
this.controlTable.setValue$S$D("L", this.L);
this.setScale$();
});

Clazz.newMeth(C$, 'updateData$davidson_gr_ClassicalTrajectory',  function (trajectory) {
if (trajectory == null ) {
return;
}this.r=trajectory.state[0];
var drdt=trajectory.state[1];
var phi=(3.141592653589793 + trajectory.state[2]) % (6.283185307179586) - 3.141592653589793;
var dphidt=trajectory.state[3];
this.controlTable.setValue$S$D($I$(10).parseTeX$S("$\\phi$"), phi);
this.controlTable.setValue$S$D("r", this.r);
this.controlTable.setValue$S$D("dr/dt", drdt);
this.controlTable.setValue$S$D($I$(11).PHIRATE, dphidt);
this.controlTable.refresh$();
this.plot.repaint$();
});

Clazz.newMeth(C$, 'initializeParticle$davidson_gr_ClassicalTrajectory',  function (particle) {
if (particle == null ) {
return;
}this.newInspectorData=false;
var state=particle.state;
state[0]=this.r;
state[1]=this.controlTable.getDouble$S("dr/dt");
state[3]=this.controlTable.getDouble$S($I$(12).PHIRATE);
particle.initialize$DA(state);
});

Clazz.newMeth(C$, 'propertyChange$S',  function (par) {
if (par.equals$O("L")) {
this.L=this.controlTable.getDouble$S("L");
if (this.controlTable.inputError$S("L")) {
return;
}if (this.E < -this.M * this.M / 2 / this.L / this.L ) {
this.E=-this.M * this.M / 2 / this.L / this.L;
this.controlTable.setValue$S$D("E", this.E);
}} else if (par.equals$O("E")) {
this.E=this.controlTable.getDouble$S("E");
if (this.controlTable.inputError$S("E")) {
return;
}if (this.E < -this.M * this.M / 2 / this.L / this.L ) {
this.E=-this.M * this.M / 2 / this.L / this.L;
this.controlTable.setValue$S$D("E", this.E);
}} else if (par.equals$O("dr/dt")) {
var drdt=this.controlTable.getDouble$S("dr/dt");
if (this.controlTable.inputError$S("dr/dt")) {
return;
}this.E=drdt * drdt / 2 + this.L * this.L / 2 / this.r / this.r - this.M / this.r;
this.E=Math.max(this.E, (-this.M * this.M) / 2 / this.L / this.L );
this.controlTable.setValue$S$D("E", this.E);
} else if (par.equals$O($I$(11).PHIRATE)) {
var dphidt=this.controlTable.getDouble$S($I$(11).PHIRATE);
if (this.controlTable.inputError$S($I$(11).PHIRATE)) {
return;
}this.L=this.r * this.r * dphidt ;
var newE=(this.L == 0 ) ? this.E : Math.max(this.E, (-this.M * this.M) / 2 / this.L / this.L );
if (newE != this.E ) {
this.E=newE;
this.controlTable.setValue$S$D("E", this.E);
}this.controlTable.setValue$S$D("L", this.L);
} else if (par.equals$O("r")) {
this.r=this.controlTable.getDouble$S("r");
if (this.controlTable.inputError$S("r")) {
return;
}if (this.r < 1.4E-45 ) {
this.r=1.4E-45;
this.controlTable.setValue$S$D("r", this.r);
}}this.setScale$();
this.newInspectorData=true;
this.support.firePropertyChange$S$O$O("inspectorChange", null, null);
});

Clazz.newMeth(C$, 'show$',  function () {
this.plot.setVisible$Z(true);
this.plot.toFront$();
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var app=Clazz.new_(C$.c$$org_opensourcephysics_controls_AbstractSimulation$davidson_gr_ClassicalTrajectory,[null, null]);
app.controlTable.setEditable$Z(true);
app.plot.setDefaultCloseOperation$I(3);
app.show$();
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClassicalInspector, "EffectivePotential", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (r) {
return (r == 0 ) ? 0 : ((-this.b$['davidson.gr.ClassicalInspector'].M / r) + ((this.b$['davidson.gr.ClassicalInspector'].L * this.b$['davidson.gr.ClassicalInspector'].L) / (2 * r * r )));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClassicalInspector, "Mass", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.InteractiveCircle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.x=this.b$['davidson.gr.ClassicalInspector'].r;
this.y=this.b$['davidson.gr.ClassicalInspector'].E;
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (rr, pot) {
this.b$['davidson.gr.ClassicalInspector'].E=(this.b$['davidson.gr.ClassicalInspector'].L == 0 ) ? pot : Math.max(pot, (-this.b$['davidson.gr.ClassicalInspector'].M * this.b$['davidson.gr.ClassicalInspector'].M) / 2 / this.b$['davidson.gr.ClassicalInspector'].L / this.b$['davidson.gr.ClassicalInspector'].L );
this.b$['davidson.gr.ClassicalInspector'].controlTable.setValue$S$D("E", this.b$['davidson.gr.ClassicalInspector'].E);
this.b$['davidson.gr.ClassicalInspector'].r=Math.max(rr, 1.4E-45);
this.b$['davidson.gr.ClassicalInspector'].controlTable.setValue$S$D("r", this.b$['davidson.gr.ClassicalInspector'].r);
this.b$['davidson.gr.ClassicalInspector'].setScale$.apply(this.b$['davidson.gr.ClassicalInspector'], []);
this.b$['davidson.gr.ClassicalInspector'].newInspectorData=true;
this.b$['davidson.gr.ClassicalInspector'].support.firePropertyChange$S$O$O("inspectorChange", null, null);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClassicalInspector, "EnergyLine", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.AbstractInteractive');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
g.setColor$java_awt_Color($I$(1).RED);
var ypix=panel.yToPix$D(this.b$['davidson.gr.ClassicalInspector'].E);
g.drawLine$I$I$I$I(0, ypix, panel.getWidth$(), ypix);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (r, pot) {
this.b$['davidson.gr.ClassicalInspector'].E=Math.max(pot, (-this.b$['davidson.gr.ClassicalInspector'].M * this.b$['davidson.gr.ClassicalInspector'].M) / 2 / this.b$['davidson.gr.ClassicalInspector'].L / this.b$['davidson.gr.ClassicalInspector'].L );
this.b$['davidson.gr.ClassicalInspector'].controlTable.setValue$S$D("E", this.b$['davidson.gr.ClassicalInspector'].E);
this.b$['davidson.gr.ClassicalInspector'].setScale$.apply(this.b$['davidson.gr.ClassicalInspector'], []);
this.b$['davidson.gr.ClassicalInspector'].newInspectorData=true;
this.b$['davidson.gr.ClassicalInspector'].support.firePropertyChange$S$O$O("inspectorChange", null, null);
});

Clazz.newMeth(C$, 'isInside$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var pix=panel.yToPix$D(this.b$['davidson.gr.ClassicalInspector'].E);
if (Math.abs(ypix - pix) < 3) {
return true;
}return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
