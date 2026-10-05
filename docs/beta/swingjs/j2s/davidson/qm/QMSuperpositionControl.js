(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'javax.swing.border.EtchedBorder','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.GUIUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "QMSuperpositionControl", null, 'org.opensourcephysics.ejs.control.EjsControlFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$model','davidson.qm.QMSuperpositionApp']]]

Clazz.newMeth(C$, 'c$$davidson_qm_QMSuperpositionApp$SA',  function (model, args) {
;C$.superclazz.c$$O$S.apply(this,[model, "name=controlFrame;title=QM Position Space Wave Function;location=400,0;layout=border;exit=true; visible=false"]);C$.$init$.apply(this);
this.$model=model;
this.addTarget$S$O("control", this);
this.addTarget$S$O("model", model);
if (model.dataPanel == null ) {
this.addObject$O$S$S(model.psiPanel, "Panel", "name=drawingPanel; parent=controlFrame; position=center");
model.psiFrame.setDrawingPanel$org_opensourcephysics_display_DrawingPanel(null);
model.psiFrame.dispose$();
} else {
this.addObject$O$S$S(model.dataPanel, "Panel", "name=drawingPanel; parent=controlFrame; position=center");
model.dataFrame.dispose$();
if (Clazz.instanceOf(model.dataFrame, "org.opensourcephysics.display.DrawingFrame")) {
(model.dataFrame).setDrawingPanel$org_opensourcephysics_display_DrawingPanel(null);
}}this.add$S$S("Panel", "name=controlPanel; parent=controlFrame; layout=border;position=south");
this.add$S$S("Panel", "name=buttonPanel;position=west;parent=controlPanel;layout=flow");
this.add$S$S("Button", "parent=buttonPanel;tooltip=Start and stop time evolution.;image=/org/opensourcephysics/resources/controls/images/play.gif; action=control.runAnimation();name=runButton");
this.add$S$S("Button", "parent=buttonPanel;tooltip=Step simulation;image=/org/opensourcephysics/resources/controls/images/step.gif; action=control.stepAnimation();name=stepButton");
this.add$S$S("Button", "parent=buttonPanel; tooltip=Reset simulation;image=/org/opensourcephysics/resources/controls/images/reset.gif; action=control.resetAnimation();name=resetButton");
(this.getElement$S("controlPanel").getComponent$()).setBorder$javax_swing_border_Border(Clazz.new_($I$(1,1)));
this.customize$();
model.setControl$org_opensourcephysics_controls_Control(this);
this.loadXML$SA(args);
var cont=this.getElement$S("controlFrame").getComponent$();
if (!$I$(2).appletMode) {
cont.setVisible$Z(true);
}this.addPropertyChangeListener$java_beans_PropertyChangeListener(model);
this.getMainFrame$().pack$();
this.getMainFrame$().doLayout$();
$I$(3).showDrawingAndTableFrames$();
}, 1);

Clazz.newMeth(C$, 'customize$',  function () {
});

Clazz.newMeth(C$, 'resetAnimation$',  function () {
this.$model.resetAnimation$();
this.getControl$S("runButton").setProperty$S$S("image", "/org/opensourcephysics/resources/controls/images/play.gif");
$I$(3).showDrawingAndTableFrames$();
});

Clazz.newMeth(C$, 'stepAnimation$',  function () {
this.$model.stopAnimation$();
this.getControl$S("runButton").setProperty$S$S("image", "/org/opensourcephysics/resources/controls/images/play.gif");
this.$model.stepAnimation$();
$I$(3).repaintAnimatedFrames$();
});

Clazz.newMeth(C$, 'runAnimation$',  function () {
if (this.$model.isRunning$()) {
this.$model.stopAnimation$();
this.getControl$S("runButton").setProperty$S$S("image", "/org/opensourcephysics/resources/controls/images/play.gif");
} else {
this.getControl$S("runButton").setProperty$S$S("image", "/org/opensourcephysics/resources/controls/images/pause.gif");
this.$model.startAnimation$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
