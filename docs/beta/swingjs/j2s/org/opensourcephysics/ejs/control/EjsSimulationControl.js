(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),I$=[[0,'javax.swing.border.EtchedBorder','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.GUIUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EjsSimulationControl", null, 'org.opensourcephysics.ejs.control.EjsControlFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$model','org.opensourcephysics.controls.Simulation','drawingPanel','org.opensourcephysics.display.DrawingPanel','controlPanel','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_Simulation$org_opensourcephysics_display_DrawingFrame$SA',  function (model, frame, args) {
;C$.superclazz.c$$O$S.apply(this,[model, "name=controlFrame;title=OSP Simulation;location=400,0;layout=border;exit=true; visible=false"]);C$.$init$.apply(this);
this.$model=model;
this.addTarget$S$O("control", this);
this.addTarget$S$O("model", model);
if (frame != null ) {
this.getMainFrame$().setAnimated$Z(frame.isAnimated$());
this.getMainFrame$().setAutoclear$Z(frame.isAutoclear$());
this.getMainFrame$().setBackground$java_awt_Color(frame.getBackground$());
this.getMainFrame$().setTitle$S(frame.getTitle$());
this.drawingPanel=frame.getDrawingPanel$();
this.addObject$O$S$S(this.drawingPanel, "Panel", "name=drawingPanel; parent=controlFrame; position=center");
frame.setDrawingPanel$org_opensourcephysics_display_DrawingPanel(null);
frame.dispose$();
}this.add$S$S("Panel", "name=controlPanel; parent=controlFrame; layout=border; position=south");
this.add$S$S("Panel", "name=buttonPanel;position=west;parent=controlPanel;layout=flow");
this.add$S$S("Button", "parent=buttonPanel;tooltip=Start and stop simulation;image=/org/opensourcephysics/resources/controls/images/play.gif; action=control.runSimulation();name=runButton");
this.add$S$S("Button", "parent=buttonPanel;tooltip=Step simulation;image=/org/opensourcephysics/resources/controls/images/step.gif; action=control.stepSimulation();name=stepButton");
this.add$S$S("Button", "parent=buttonPanel; tooltip=Reset simulation;image=/org/opensourcephysics/resources/controls/images/reset.gif; action=control.resetSimulation();name=resetButton");
this.controlPanel=(this.getElement$S("controlPanel").getComponent$());
this.controlPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(1,1)));
this.customize$();
model.setControl$org_opensourcephysics_controls_Control(this);
this.initialize$();
this.loadXML$SA(args);
var cont=this.getElement$S("controlFrame").getComponent$();
if (!$I$(2).appletMode) {
cont.setVisible$Z(true);
}if (Clazz.instanceOf(model, "java.beans.PropertyChangeListener")) {
this.addPropertyChangeListener$java_beans_PropertyChangeListener(model);
}this.getMainFrame$().pack$();
this.getMainFrame$().doLayout$();
$I$(3).showDrawingAndTableFrames$();
}, 1);

Clazz.newMeth(C$, 'customize$',  function () {
});

Clazz.newMeth(C$, 'render$',  function () {
if (this.drawingPanel != null ) {
this.drawingPanel.render$();
}});

Clazz.newMeth(C$, 'clearDefaultXML$',  function () {
if ((this.xmlDefault == null ) || (this.$model == null ) ) {
return;
}this.xmlDefault=null;
this.clearItem.setEnabled$Z(false);
this.resetSimulation$();
});

Clazz.newMeth(C$, 'resetSimulation$',  function () {
this.$model.stopAnimation$();
this.$messageArea.setText$S("");
$I$(3).clearDrawingFrameData$Z(true);
this.$model.resetAnimation$();
if (this.xmlDefault != null ) {
this.xmlDefault.loadObject$O(this.getOSPApp$());
} else {
this.initialize$();
}this.getControl$S("runButton").setProperty$S$S("image", "/org/opensourcephysics/resources/controls/images/play.gif");
$I$(3).showDrawingAndTableFrames$();
});

Clazz.newMeth(C$, 'stepSimulation$',  function () {
if (this.$model.isRunning$()) {
this.$model.stopAnimation$();
}this.getControl$S("runButton").setProperty$S$S("image", "/org/opensourcephysics/resources/controls/images/play.gif");
this.$model.stepAnimation$();
$I$(3).repaintAnimatedFrames$();
});

Clazz.newMeth(C$, 'runSimulation$',  function () {
if (this.$model.isRunning$()) {
this.$model.stopSimulation$();
this.getControl$S("runButton").setProperty$S$S("image", "/org/opensourcephysics/resources/controls/images/play.gif");
} else {
this.getControl$S("runButton").setProperty$S$S("image", "/org/opensourcephysics/resources/controls/images/pause.gif");
this.$model.startSimulation$();
}});

Clazz.newMeth(C$, 'initialize$',  function () {
this.$model.stopAnimation$();
this.getControl$S("runButton").setProperty$S$S("image", "/org/opensourcephysics/resources/controls/images/play.gif");
$I$(3).clearDrawingFrameData$Z(true);
this.$model.initializeAnimation$();
$I$(3).showDrawingAndTableFrames$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
