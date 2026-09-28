(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'javax.swing.border.EtchedBorder','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.GUIUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "QMWignerControl", null, 'org.opensourcephysics.ejs.control.EjsControlFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cont=null;
},1);

C$.$fields$=[['O',['cont','java.awt.Container','$model','davidson.qm.QMSuperpositionWignerApp']]]

Clazz.newMeth(C$, 'c$$davidson_qm_QMSuperpositionWignerApp$SA',  function (model, args) {
;C$.superclazz.c$$O$S.apply(this,[model, "name=controlFrame;title=Wigner Function;location=400,0;layout=border;exit=true; visible=false"]);C$.$init$.apply(this);
this.$model=model;
this.addTarget$S$O("control", this);
this.addTarget$S$O("model", model);
var p=model.wigner.wignerFrame.getDrawingPanel$();
this.addObject$O$S$S(p, "Panel", "name=drawingPanel; parent=controlFrame; position=center");
this.cont=this.getMainFrame$();
model.wigner.wignerFrame.dispose$();
this.add$S$S("Panel", "name=controlPanel; parent=controlFrame; layout=border; position=south");
this.add$S$S("Panel", "name=buttonPanel;position=west;parent=controlPanel;layout=flow");
this.add$S$S("Button", "parent=buttonPanel;tooltip=Start and stop time evolution.;image=/org/opensourcephysics/resources/controls/images/play.gif; action=control.runAnimation();name=runButton");
this.add$S$S("Button", "parent=buttonPanel;tooltip=Step simulation;image=/org/opensourcephysics/resources/controls/images/step.gif; action=control.stepAnimation()");
this.add$S$S("Button", "parent=buttonPanel; tooltip=Reset simulation;image=/org/opensourcephysics/resources/controls/images/reset.gif; action=control.resetAnimation()");
(this.getElement$S("controlPanel").getComponent$()).setBorder$javax_swing_border_Border(Clazz.new_($I$(1,1)));
this.customize$();
model.setControl$org_opensourcephysics_controls_Control(this);
this.loadXML$SA(args);
var cont=this.getElement$S("controlFrame").getComponent$();
if (!$I$(2).appletMode) {
cont.setVisible$Z(true);
}this.addPropertyChangeListener$java_beans_PropertyChangeListener(model);
this.getMainFrame$().doLayout$();
this.getMainFrame$().setSize$I$I(400, 500);
$I$(3).showDrawingAndTableFrames$();
}, 1);

Clazz.newMeth(C$, 'customize$',  function () {
this.add$S$S("Panel", "name=tPanel;parent=controlPanel;position=east;layout=flow");
this.add$S$S("Label", "position=west; parent=tPanel;text= t = ;horizontalAlignment=right;tooltip=Time");
this.add$S$S("NumberField", "parent=tPanel;variable=time;action=model.setTime();format=0.0000;size=50,22;tooltip=Time");
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
