(function(){var P$=Clazz.newPackage("davidson.gr"),I$=[[0,'davidson.gr.ClassicalApp','org.opensourcephysics.controls.SimulationControl','org.opensourcephysics.display.TeXParser','javax.swing.event.SwingPropertyChangeSupport','org.opensourcephysics.numerics.DoubleArray','org.opensourcephysics.display.PlottingPanelFactory','org.opensourcephysics.display.DrawingFrame','java.util.ArrayList','org.opensourcephysics.controls.ControlUtils','davidson.gr.AbstractTrajectory','davidson.gr.ClassicalInspector','java.awt.Color','davidson.gr.ShellParticle','davidson.gr.Trajectory','java.awt.event.WindowAdapter','davidson.gr.ClassicalTrajectory',['davidson.gr.ClassicalApp','.ClassicalLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClassicalApp", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.controls.AbstractSimulation', ['org.opensourcephysics.display.InteractiveMouseHandler', 'java.beans.PropertyChangeListener']);
C$.$classes$=[['ClassicalLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.support=Clazz.new_($I$(4,1).c$$O,[this]);
this.scale=Clazz.new_($I$(5,1).c$$S,["{-4,4,-4,4}"]);
this.plottingPanel=$I$(6).createPolarType2$S$D("Newtonian Orbits", 1.0);
this.drawingFrame=Clazz.new_($I$(7,1).c$$S$org_opensourcephysics_display_DrawingPanel,["Particle Trajectories", this.plottingPanel]);
this.trajectories=Clazz.new_($I$(8,1));
this.markers=Clazz.new_($I$(8,1));
this.enableInspector=true;
this.dt=0.1;
this.time=0;
this.maxTime=100000.0;
},1);

C$.$fields$=[['Z',['enableInspector'],'D',['dt','time','maxTime'],'O',['support','java.beans.PropertyChangeSupport','scale','org.opensourcephysics.numerics.DoubleArray','plottingPanel','org.opensourcephysics.display.PlottingPanel','drawingFrame','org.opensourcephysics.display.DrawingFrame','trajectories','java.util.ArrayList','+markers','defaultTrajectory','davidson.gr.ClassicalTrajectory','inspector','davidson.gr.ClassicalInspector']]
,['S',['PHIRATE','PHI']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.plottingPanel.setAntialiasShapeOn$Z(true);
this.plottingPanel.getCoordinateStringBuilder$().setCoordinateLabels$S$S("r=", " $\\phi$=");
this.drawingFrame.setSize$I$I(450, 450);
this.drawingFrame.setAnimated$Z(true);
this.plottingPanel.setInteractiveMouseHandler$org_opensourcephysics_display_InteractiveMouseHandler(this);
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
var running=this.isRunning$();
if (evt.getPropertyName$().equals$O("inspectorChange")) {
if (!running) {
this.inspector.initializeParticle$davidson_gr_ClassicalTrajectory(this.defaultTrajectory);
this.plottingPanel.repaint$();
}}if (evt.getPropertyName$().equals$O("xmlDefault")) {
if (running) {
this.stopSimulation$();
}if (running) {
this.startSimulation$();
}}});

Clazz.newMeth(C$, 'doStep$',  function () {
if (this.inspector != null  && this.inspector.newInspectorData ) {
this.inspector.initializeParticle$davidson_gr_ClassicalTrajectory(this.defaultTrajectory);
}for (var i=0, n=this.trajectories.size$(); i < n; i++) {
this.trajectories.get$I(i).stepTime$();
}
this.time+=this.dt;
this.plottingPanel.setMessage$S("t=" + $I$(9).f2$D(this.time));
if (this.defaultTrajectory != null ) {
if (this.inspector != null ) {
this.inspector.updateData$davidson_gr_ClassicalTrajectory(this.defaultTrajectory);
}this.support.firePropertyChange$S$O$O("trajectoryChange", null, this.defaultTrajectory);
}if (this.time >= this.maxTime ) {
this.$control.calculationDone$S(null);
this.stopSimulation$();
this.plottingPanel.setMessage$S$I("Simulation done.", 3);
}});

Clazz.newMeth(C$, 'reset$',  function () {
this.$control.setValue$S$I("M", 1);
this.$control.setValue$S$D("dt", 0.1);
this.$control.setValue$S$Z("editable inspector", true);
this.$control.setValue$S$Z("autoscale", false);
this.$control.setValue$S$O("scale min max", this.scale.getDefault$());
this.$control.setValue$S$D("maximum time", 10000.0);
this.enableStepsPerDisplay$Z(true);
this.initialize$();
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.plottingPanel.setMessage$S$I(null, 3);
this.plottingPanel.removeDrawables$Class(Clazz.getClass($I$(10)));
this.trajectories.clear$();
this.markers.clear$();
this.maxTime=this.$control.getDouble$S("maximum time");
this.enableInspector=this.$control.getBoolean$S("enable inspector");
if ((this.inspector != null ) && !this.enableInspector ) {
this.inspector.plot.setVisible$Z(false);
}this.dt=this.$control.getDouble$S("dt");
this.time=0;
this.plottingPanel.setMessage$S("t=" + $I$(9).f2$D(this.time));
if (this.$control.getBoolean$S("autoscale")) {
var array=this.scale.getArray$S(this.$control.getString$S("scale min max"));
(this.plottingPanel.getAxes$()).autospaceRings$Z(true);
this.plottingPanel.setAutoscaleX$Z(true);
this.plottingPanel.setAutoscaleY$Z(true);
this.plottingPanel.limitAutoscaleX$D$D(array[0], array[1]);
this.plottingPanel.limitAutoscaleY$D$D(array[2], array[3]);
} else {
var array=this.scale.getArray$S(this.$control.getString$S("scale min max"));
(this.plottingPanel.getAxes$()).setDeltaR$D(1.0);
this.plottingPanel.setPreferredMinMax$D$D$D$D(array[0], array[1], array[2], array[3]);
}});

Clazz.newMeth(C$, 'handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent',  function (panel, evt) {
if (evt.getClickCount$() > 1) {
if ((this.inspector == null ) || !this.inspector.plot.isDisplayable$() && this.defaultTrajectory != null   ) {
this.inspector=Clazz.new_($I$(11,1).c$$org_opensourcephysics_controls_AbstractSimulation$davidson_gr_ClassicalTrajectory,[this, this.defaultTrajectory]);
this.inspector.enableInteraction$Z(this.$control.getBoolean$S("editable inspector"));
this.inspector.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
} else {
this.inspector.updateDataAndScale$davidson_gr_ClassicalTrajectory(this.defaultTrajectory);
this.inspector.show$();
}this.defaultTrajectory.color=$I$(12).MAGENTA;
}panel.handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent(panel, evt);
var ia=panel.getInteractive$();
if (ia == null ) return;
if ((Clazz.instanceOf(ia, "davidson.gr.ClassicalTrajectory")) && ((panel.getMouseAction$() == 4) || (panel.getMouseAction$() == 1) ) ) {
this.defaultTrajectory.color=$I$(12).RED;
this.defaultTrajectory=ia;
if ((this.inspector != null ) && this.inspector.plot.isVisible$() ) {
this.inspector.updateDataAndScale$davidson_gr_ClassicalTrajectory(this.defaultTrajectory);
}this.defaultTrajectory.color=$I$(12).MAGENTA;
panel.repaint$();
}if ((ia === this.defaultTrajectory ) && (this.inspector != null ) && (panel.getMouseAction$() == 3)  ) {
this.inspector.updateDataAndScale$davidson_gr_ClassicalTrajectory(this.defaultTrajectory);
}});

Clazz.newMeth(C$, 'createMarker$',  function () {
var marker=Clazz.new_($I$(13,1));
marker.setStepSize$D(this.dt);
var editor=marker.edit$();
editor.setLocationRelativeTo$java_awt_Component(this.plottingPanel);
var control=editor.getControl$();
editor.addWindowListener$java_awt_event_WindowListener(((P$.ClassicalApp$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClassicalApp$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent',  function (e) {
this.$finals$.marker.setEnabled$Z(this.$finals$.control.getBoolean$S("draggable state"));
this.$finals$.marker.label=this.$finals$.control.getString$S("label");
var r=this.$finals$.control.getDouble$S("r");
var phi=this.$finals$.control.getDouble$S($I$(14).PHI);
this.$finals$.marker.setXY$D$D(r * Math.cos(phi), r * Math.sin(phi));
this.b$['davidson.gr.ClassicalApp'].markers.add$O(this.$finals$.marker);
this.b$['davidson.gr.ClassicalApp'].plottingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.$finals$.marker);
this.b$['davidson.gr.ClassicalApp'].plottingPanel.repaint$();
});
})()
), Clazz.new_($I$(15,1),[this, {marker:marker,control:control}],P$.ClassicalApp$1)));
editor.setVisible$Z(true);
});

Clazz.newMeth(C$, 'createDefaultParticle$',  function () {
this.defaultTrajectory=Clazz.new_($I$(16,1));
this.defaultTrajectory.setStepSize$D(this.dt);
this.defaultTrajectory.M=this.$control.getDouble$S("M");
this.defaultTrajectory.initialize$DA(Clazz.array(Double.TYPE, -1, [1.0, 0.0, 0.0, 1.0, 0.0]));
this.defaultTrajectory.color=$I$(12).MAGENTA;
this.trajectories.add$O(this.defaultTrajectory);
this.plottingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.defaultTrajectory);
if (this.inspector != null ) {
this.inspector.updateDataAndScale$davidson_gr_ClassicalTrajectory(this.defaultTrajectory);
}});

Clazz.newMeth(C$, 'createParticle$',  function () {
var particle=Clazz.new_($I$(16,1));
particle.setStepSize$D(this.dt);
particle.M=this.$control.getDouble$S("M");
var editor=particle.edit$();
editor.setLocationRelativeTo$java_awt_Component(this.plottingPanel);
var control=editor.getControl$();
editor.addWindowListener$java_awt_event_WindowListener(((P$.ClassicalApp$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClassicalApp$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent',  function (e) {
this.$finals$.particle.setEnabled$Z(this.$finals$.control.getBoolean$S("draggable state"));
this.$finals$.particle.trackPoints=this.$finals$.control.getInt$S("track points");
this.$finals$.particle.label=this.$finals$.control.getString$S("label");
var state=this.$finals$.particle.getState$();
state[0]=this.$finals$.control.getDouble$S("r");
state[1]=this.$finals$.control.getDouble$S("dr/dt");
state[2]=this.$finals$.control.getDouble$S($I$(14).PHI);
state[3]=this.$finals$.control.getDouble$S($I$(14).PHIRATE);
state[4]=0;
this.$finals$.particle.initialize$DA(state);
this.b$['davidson.gr.ClassicalApp'].defaultTrajectory=this.$finals$.particle;
this.b$['davidson.gr.ClassicalApp'].defaultTrajectory.color=$I$(12).MAGENTA;
this.b$['davidson.gr.ClassicalApp'].trajectories.add$O(this.b$['davidson.gr.ClassicalApp'].defaultTrajectory);
this.b$['davidson.gr.ClassicalApp'].plottingPanel.addDrawable$org_opensourcephysics_display_Drawable(this.b$['davidson.gr.ClassicalApp'].defaultTrajectory);
if (this.b$['davidson.gr.ClassicalApp'].inspector != null ) {
this.b$['davidson.gr.ClassicalApp'].inspector.updateDataAndScale$davidson_gr_ClassicalTrajectory(this.b$['davidson.gr.ClassicalApp'].defaultTrajectory);
}this.b$['davidson.gr.ClassicalApp'].support.firePropertyChange$S$O$O("trajectoryChange", null, this.b$['davidson.gr.ClassicalApp'].defaultTrajectory);
this.b$['davidson.gr.ClassicalApp'].plottingPanel.repaint$();
});
})()
), Clazz.new_($I$(15,1),[this, {particle:particle,control:control}],P$.ClassicalApp$2)));
editor.setVisible$Z(true);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(17,1));
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var c=$I$(2,"createApp$org_opensourcephysics_controls_Simulation$SA",[Clazz.new_(C$), args]);
c.addButton$S$S$S("createParticle", "Particle", "Adds a particle after the program has been initialized.");
c.addButton$S$S$S("createMarker", "Marker", "Adds a shell marker after the program has been initialized.");
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PHIRATE=$I$(3).parseTeX$S("d$\\phi$/dt");
C$.PHI=$I$(3).parseTeX$S("$\\phi$");
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClassicalApp, "ClassicalLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (element) {
var app=Clazz.new_($I$(1,1));
var c=Clazz.new_($I$(2,1).c$$org_opensourcephysics_controls_Simulation,[app]);
app.setControl$org_opensourcephysics_controls_Control(c);
return app;
});

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var app=obj;
control.setValue$S$O("trajectories", app.trajectories);
control.setValue$S$O("markers", app.markers);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var app=obj;
app.initialize$();
app.trajectories=control.getObject$S("trajectories");
app.markers=control.getObject$S("markers");
var n=app.markers.size$();
for (var i=0; i < n; i++) {
app.plottingPanel.addDrawable$org_opensourcephysics_display_Drawable(app.markers.get$I(i));
}
n=app.trajectories.size$();
for (var i=0; i < n; i++) {
app.plottingPanel.addDrawable$org_opensourcephysics_display_Drawable(app.trajectories.get$I(i));
}
if (n > 0) {
app.defaultTrajectory=app.trajectories.get$I(0);
if (app.inspector != null ) {
app.inspector.updateDataAndScale$davidson_gr_ClassicalTrajectory(app.defaultTrajectory);
}}app.plottingPanel.repaint$();
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
