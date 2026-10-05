(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.display.GUIUtils','org.opensourcephysics.controls.ControlsRes','javax.swing.JButton',['org.opensourcephysics.controls.CalculationControl','.CalcBtnListener'],['org.opensourcephysics.controls.CalculationControl','.ResetBtnListener']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CalculationControl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.controls.OSPControl');
C$.$classes$=[['CalcBtnListener',2],['ResetBtnListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['calculation','org.opensourcephysics.controls.Calculation','calcBtn','javax.swing.JButton','+resetBtn']]
,['S',['resetToolTipText','calcToolTipText']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_Calculation',  function (_calculation) {
;C$.superclazz.c$$O.apply(this,[_calculation]);C$.$init$.apply(this);
this.calculation=_calculation;
if (this.model != null ) {
var name=this.model.getClass$().getName$();
this.setTitle$S(name.substring$I(1 + name.lastIndexOf$S(".")) + " " + $I$(2).getString$S("CalculationControl.Title") );
}this.calcBtn=Clazz.new_([$I$(2).CALCULATION_CALC],$I$(3,1).c$$S);
this.calcBtn.setToolTipText$S(C$.calcToolTipText);
this.resetBtn=Clazz.new_([$I$(2).CALCULATION_RESET],$I$(3,1).c$$S);
this.resetBtn.setToolTipText$S(C$.resetToolTipText);
this.calcBtn.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(4,1),[this, null]));
this.resetBtn.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(5,1),[this, null]));
this.buttonPanel.add$java_awt_Component(this.calcBtn);
this.buttonPanel.add$java_awt_Component(this.resetBtn);
this.validate$();
this.pack$();
}, 1);

Clazz.newMeth(C$, 'getMainFrame$',  function () {
return this;
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
C$.superclazz.prototype.refreshGUI$.apply(this, []);
if (this.calcBtn == null ) {
return;
}this.calcBtn.setText$S($I$(2).CALCULATION_CALC);
this.resetBtn.setText$S($I$(2).CALCULATION_RESET);
});

Clazz.newMeth(C$, 'createApp$org_opensourcephysics_controls_Calculation',  function (model) {
var control=Clazz.new_(C$.c$$org_opensourcephysics_controls_Calculation,[model]);
model.setControl$org_opensourcephysics_controls_Control(control);
return control;
}, 1);

Clazz.newMeth(C$, 'createApp$org_opensourcephysics_controls_Calculation$SA',  function (model, xml) {
var control=C$.createApp$org_opensourcephysics_controls_Calculation(model);
control.loadXML$SA(xml);
return control;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.resetToolTipText=$I$(2).CALCULATION_RESET_TIP;
C$.calcToolTipText=$I$(2).CALCULATION_CALC_TIP;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CalculationControl, "CalcBtnListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(1).clearDrawingFrameData$Z(false);
if (this.b$['org.opensourcephysics.controls.CalculationControl'].calculation == null ) {
this.b$['org.opensourcephysics.controls.OSPControl'].println$S.apply(this.b$['org.opensourcephysics.controls.OSPControl'], ["The CalculationControl\'s model is null."]);
return;
}this.b$['org.opensourcephysics.controls.CalculationControl'].calculation.calculate$();
$I$(1).showDrawingAndTableFrames$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CalculationControl, "ResetBtnListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(1).clearDrawingFrameData$Z(true);
if (this.b$['org.opensourcephysics.controls.CalculationControl'].calculation == null ) {
this.b$['org.opensourcephysics.controls.OSPControl'].println$S.apply(this.b$['org.opensourcephysics.controls.OSPControl'], ["The CalculationControl\'s model is null."]);
return;
}this.b$['org.opensourcephysics.controls.CalculationControl'].calculation.resetCalculation$();
if (this.b$['org.opensourcephysics.controls.CalculationControl'].xmlDefault != null ) {
this.b$['org.opensourcephysics.controls.CalculationControl'].xmlDefault.loadObject$O$Z$Z(this.b$['org.opensourcephysics.controls.ControlFrame'].getOSPApp$.apply(this.b$['org.opensourcephysics.controls.ControlFrame'], []), true, true);
}this.b$['org.opensourcephysics.controls.CalculationControl'].table.refresh$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
