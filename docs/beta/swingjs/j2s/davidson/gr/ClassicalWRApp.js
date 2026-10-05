(function(){var P$=Clazz.newPackage("davidson.gr"),I$=[[0,'javax.swing.border.EtchedBorder','java.awt.event.WindowAdapter','org.opensourcephysics.display.OSPRuntime','davidson.gr.ClassicalInspector','java.awt.Color','org.opensourcephysics.display.GUIUtils','davidson.gr.ClassicalApp']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClassicalWRApp", null, 'org.opensourcephysics.ejs.control.EjsControlFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$model','davidson.gr.ClassicalApp','drawingPanel','org.opensourcephysics.display.DrawingPanel']]]

Clazz.newMeth(C$, 'c$$davidson_gr_ClassicalApp$SA',  function (model, args) {
;C$.superclazz.c$$O$S.apply(this,[model, "name=controlFrame;title=Newtonian Particle;location=400,0;size=350,450;layout=border;exit=true;visible=false"]);C$.$init$.apply(this);
this.$model=model;
this.drawingPanel=model.plottingPanel;
model.drawingFrame.setDrawingPanel$org_opensourcephysics_display_DrawingPanel(null);
model.drawingFrame.dispose$();
this.addTarget$S$O("control", this);
this.addObject$O$S$S(this.drawingPanel, "Panel", "name=drawingPanel; parent=controlFrame; position=center");
this.add$S$S("Panel", "name=controlPanel; parent=controlFrame; layout=border; position=south");
(this.getElement$S("controlPanel").getComponent$()).setBorder$javax_swing_border_Border(Clazz.new_($I$(1,1)));
this.add$S$S("Panel", "name=buttonPanel;position=south;parent=controlPanel;layout=flow");
this.add$S$S("Button", "parent=buttonPanel; text=Run; name=runButton; action=control.runSimulation");
this.add$S$S("Button", "parent=buttonPanel; text=Step; action=control.stepSimulation");
this.add$S$S("Button", "parent=buttonPanel; text=Reset; action=control.resetSimulation");
this.add$S$S("CheckBox", "parent=buttonPanel;variable=showInspector;text=U(r);selected=false;action=control.showInspector;");
this.getMainFrame$().setAnimated$Z(true);
model.setControl$org_opensourcephysics_controls_Control(this);
this.createDefaultParticle$();
this.loadXML$SA(args);
this.getMainFrame$().pack$();
this.addPropertyChangeListener$java_beans_PropertyChangeListener(model);
this.getMainFrame$().addWindowListener$java_awt_event_WindowListener(((P$.ClassicalWRApp$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClassicalWRApp$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['davidson.gr.ClassicalWRApp'].$model.stopSimulation$();
this.b$['org.opensourcephysics.ejs.control.GroupControl'].getControl$S.apply(this.b$['org.opensourcephysics.ejs.control.GroupControl'], ["runButton"]).setProperty$S$S("text", "Start");
});
})()
), Clazz.new_($I$(2,1),[this, null],P$.ClassicalWRApp$1)));
if (!$I$(3).appletMode) {
this.getMainFrame$().setVisible$Z(true);
}model.inspector=Clazz.new_($I$(4,1).c$$org_opensourcephysics_controls_AbstractSimulation$davidson_gr_ClassicalTrajectory,[model, model.defaultTrajectory]);
model.inspector.enableInteraction$Z(this.getBoolean$S("editable inspector"));
model.inspector.addPropertyChangeListener$java_beans_PropertyChangeListener(model);
model.inspector.plot.addWindowListener$java_awt_event_WindowListener(((P$.ClassicalWRApp$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ClassicalWRApp$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['org.opensourcephysics.ejs.control.GroupControl'].setValue$S$Z.apply(this.b$['org.opensourcephysics.ejs.control.GroupControl'], ["showInspector", false]);
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
this.b$['org.opensourcephysics.ejs.control.GroupControl'].setValue$S$Z.apply(this.b$['org.opensourcephysics.ejs.control.GroupControl'], ["showInspector", true]);
});
})()
), Clazz.new_($I$(2,1),[this, null],P$.ClassicalWRApp$2)));
}, 1);

Clazz.newMeth(C$, 'render$',  function () {
this.drawingPanel.render$();
});

Clazz.newMeth(C$, 'showInspector$',  function () {
if (this.getBoolean$S("showInspector")) {
this.$model.defaultTrajectory.color=$I$(5).MAGENTA;
this.$model.plottingPanel.repaint$();
this.$model.inspector.show$();
} else {
this.$model.inspector.plot.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'clearDefaultXML$',  function () {
if (this.xmlDefault == null  || this.$model == null  ) return;
this.xmlDefault=null;
this.clearItem.setEnabled$Z(false);
this.resetSimulation$();
$I$(6).repaintOSPFrames$();
});

Clazz.newMeth(C$, 'resetSimulation$',  function () {
this.$model.stopSimulation$();
this.getControl$S("runButton").setProperty$S$S("text", "Start");
this.$model.reset$();
this.createDefaultParticle$();
this.loadDefaultXML$();
if (this.getBoolean$S("showInspector") && (this.$model.defaultTrajectory != null ) && (this.$model.inspector != null )  ) {
this.$model.inspector.show$();
}this.$model.plottingPanel.repaint$();
});

Clazz.newMeth(C$, 'createDefaultParticle$',  function () {
this.$model.createDefaultParticle$();
});

Clazz.newMeth(C$, 'calculationDone$S',  function (message) {
this.$model.stopSimulation$();
this.getControl$S("runButton").setProperty$S$S("text", "Start");
C$.superclazz.prototype.calculationDone$S.apply(this, [message]);
});

Clazz.newMeth(C$, 'stepSimulation$',  function () {
this.$model.stopSimulation$();
if (this.$model.time >= this.getDouble$S("maximum time") ) {
return;
}this.getControl$S("runButton").setProperty$S$S("text", "Start");
this.$model.stepAnimation$();
$I$(6).repaintAnimatedFrames$();
});

Clazz.newMeth(C$, 'runSimulation$',  function () {
if (this.$model.time >= this.getDouble$S("maximum time") ) {
return;
}if (this.$model.isRunning$()) {
this.$model.stopSimulation$();
this.getControl$S("runButton").setProperty$S$S("text", "Start");
} else {
this.getControl$S("runButton").setProperty$S$S("text", "Stop");
this.$model.startSimulation$();
}});

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$.c$$davidson_gr_ClassicalApp$SA,[Clazz.new_($I$(7,1)), args]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
