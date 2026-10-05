(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),I$=[[0,'javax.swing.border.EtchedBorder','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.GUIUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EjsCalculationControl", null, 'org.opensourcephysics.ejs.control.EjsControlFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['controlPanel','javax.swing.JPanel','drawingPanel','org.opensourcephysics.display.DrawingPanel','$model','org.opensourcephysics.controls.Calculation']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_Calculation$org_opensourcephysics_display_DrawingFrame$SA',  function (model, frame, args) {
;C$.superclazz.c$$O$S.apply(this,[model, "name=controlFrame;title=QM Superposition;location=400,0;layout=border;exit=true; visible=false"]);C$.$init$.apply(this);
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
this.add$S$S("Button", "parent=buttonPanel;tooltip=Calculate;image=/org/opensourcephysics/resources/controls/images/play.gif; action=control.calculate();name=calculateButton");
this.add$S$S("Button", "parent=buttonPanel; tooltip=Reset calculation;image=/org/opensourcephysics/resources/controls/images/reset.gif; action=control.resetCalculation()");
this.controlPanel=(this.getElement$S("controlPanel").getComponent$());
this.controlPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(1,1)));
this.customize$();
model.setControl$org_opensourcephysics_controls_Control(this);
model.resetCalculation$();
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

Clazz.newMeth(C$, 'resetCalculation$',  function () {
this.$messageArea.setText$S("");
$I$(3).clearDrawingFrameData$Z(true);
this.$model.resetCalculation$();
if (this.xmlDefault != null ) {
this.xmlDefault.loadObject$O(this.getOSPApp$());
} else {
this.$model.calculate$();
}$I$(3).showDrawingAndTableFrames$();
});

Clazz.newMeth(C$, 'calculate$',  function () {
$I$(3).clearDrawingFrameData$Z(true);
this.$model.calculate$();
$I$(3).showDrawingAndTableFrames$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
