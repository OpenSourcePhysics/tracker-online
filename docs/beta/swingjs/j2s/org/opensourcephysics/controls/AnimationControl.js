(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},I$=[[0,'org.opensourcephysics.controls.AnimationControl','org.opensourcephysics.controls.ControlsRes','javax.swing.JButton',['org.opensourcephysics.controls.AnimationControl','.StartBtnListener'],['org.opensourcephysics.controls.AnimationControl','.StepBtnListener'],['org.opensourcephysics.controls.AnimationControl','.ResetBtnListener'],'org.opensourcephysics.display.OSPRuntime','java.awt.event.ActionEvent','org.opensourcephysics.display.GUIUtils',['org.opensourcephysics.controls.AnimationControl','.AnimationControlLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnimationControl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.controls.OSPControl');
C$.$classes$=[['StartBtnListener',0],['ResetBtnListener',0],['StepBtnListener',0],['AnimationControlLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.resetToolTipText=$I$(2).ANIMATION_RESET_TIP;
this.initToolTipText=$I$(2).ANIMATION_INIT_TIP;
this.startToolTipText=$I$(2).ANIMATION_START_TIP;
this.stopToolTipText=$I$(2).ANIMATION_STOP_TIP;
this.newToolTipText=$I$(2).ANIMATION_NEW_TIP;
this.stepToolTipText=$I$(2).ANIMATION_STEP_TIP;
this.initText=$I$(2).ANIMATION_INIT;
this.startText=$I$(2).ANIMATION_START;
this.stopText=$I$(2).ANIMATION_STOP;
this.resetText=$I$(2).ANIMATION_RESET;
this.newText=$I$(2).ANIMATION_NEW;
this.stepModeEditing=true;
this.startBtn=Clazz.new_([$I$(2).ANIMATION_INIT],$I$(3,1).c$$S);
this.stepBtn=Clazz.new_([$I$(2).ANIMATION_STEP],$I$(3,1).c$$S);
this.resetBtn=Clazz.new_([$I$(2).ANIMATION_RESET],$I$(3,1).c$$S);
},1);

C$.$fields$=[['Z',['stepModeEditing'],'S',['resetToolTipText','initToolTipText','startToolTipText','stopToolTipText','newToolTipText','stepToolTipText','initText','startText','stopText','resetText','newText'],'O',['startBtn','javax.swing.JButton','+stepBtn','+resetBtn']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_Animation',  function (animation) {
;C$.superclazz.c$$O.apply(this,[animation]);C$.$init$.apply(this);
if (this.model != null ) {
var name=this.model.getClass$().getName$();
this.setTitle$S(name.substring$I(1 + name.lastIndexOf$S(".")) + " Controller");
}this.startBtn.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(4,1),[this, null]));
this.startBtn.setToolTipText$S(this.initToolTipText);
this.stepBtn.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(5,1),[this, null]));
this.stepBtn.setToolTipText$S(this.stepToolTipText);
this.resetBtn.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(6,1),[this, null]));
this.resetBtn.setToolTipText$S(this.resetToolTipText);
this.stepBtn.setEnabled$Z(false);
this.buttonPanel.add$java_awt_Component(this.startBtn);
this.buttonPanel.add$java_awt_Component(this.stepBtn);
this.buttonPanel.add$java_awt_Component(this.resetBtn);
this.validate$();
this.pack$();
}, 1);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
C$.superclazz.prototype.refreshGUI$.apply(this, []);
this.resetToolTipText=$I$(2).ANIMATION_RESET_TIP;
this.initToolTipText=$I$(2).ANIMATION_INIT_TIP;
this.startToolTipText=$I$(2).ANIMATION_START_TIP;
this.stopToolTipText=$I$(2).ANIMATION_STOP_TIP;
this.newToolTipText=$I$(2).ANIMATION_NEW_TIP;
this.stepToolTipText=$I$(2).ANIMATION_STEP_TIP;
if (this.stepBtn == null ) {
return;
}this.stepBtn.setText$S($I$(2).ANIMATION_STEP);
this.stepBtn.setToolTipText$S(this.stepToolTipText);
if (this.startBtn.getText$().equals$O(this.startText)) {
this.startBtn.setText$S($I$(2).ANIMATION_START);
this.startBtn.setToolTipText$S(this.startToolTipText);
} else if (this.startBtn.getText$().equals$O(this.stopText)) {
this.startBtn.setText$S($I$(2).ANIMATION_STOP);
this.startBtn.setToolTipText$S(this.stopToolTipText);
} else {
this.startBtn.setText$S($I$(2).ANIMATION_INIT);
this.startBtn.setToolTipText$S(this.initToolTipText);
}if (this.resetBtn.getText$().equals$O(this.newText)) {
this.resetBtn.setText$S($I$(2).ANIMATION_NEW);
this.resetBtn.setToolTipText$S(this.newToolTipText);
} else {
this.resetBtn.setText$S($I$(2).ANIMATION_RESET);
this.resetBtn.setToolTipText$S(this.resetToolTipText);
}this.initText=$I$(2).ANIMATION_INIT;
this.startText=$I$(2).ANIMATION_START;
this.resetText=$I$(2).ANIMATION_RESET;
this.stopText=$I$(2).ANIMATION_STOP;
this.newText=$I$(2).ANIMATION_NEW;
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (Clazz.instanceOf(this.model, "org.opensourcephysics.controls.AbstractAnimation")) {
(this.model).animationThread=null;
if ((this.model).stateHelper != null ) {
(this.model).stateHelper.setState$I(2);
}}C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'calculationDone$S',  function (message) {
if (Clazz.instanceOf(this.model, "org.opensourcephysics.controls.Animation")) {
(this.model).stopAnimation$();
}$I$(7,"dispatchEventWait$Runnable",[((P$.AnimationControl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnimationControl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.controls.AnimationControl'].startBtnActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.opensourcephysics.controls.AnimationControl'], [Clazz.new_($I$(8,1).c$$O$I$S,[this, 0, this.b$['org.opensourcephysics.controls.AnimationControl'].stopText])]);
this.b$['org.opensourcephysics.controls.AnimationControl'].resetBtnActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.opensourcephysics.controls.AnimationControl'], [Clazz.new_($I$(8,1).c$$O$I$S,[this, 0, this.b$['org.opensourcephysics.controls.AnimationControl'].newText])]);
this.b$['org.opensourcephysics.controls.AnimationControl'].resetBtn.setEnabled$Z(true);
$I$(9).enableMenubars$Z(true);
if (this.$finals$.message != null ) {
this.b$['org.opensourcephysics.controls.OSPControl'].println$S.apply(this.b$['org.opensourcephysics.controls.OSPControl'], [this.$finals$.message]);
}});
})()
), Clazz.new_(P$.AnimationControl$1.$init$,[this, {message:message}]))]);
});

Clazz.newMeth(C$, 'startBtnActionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getActionCommand$().equals$O(this.initText)) {
this.stepBtn.setEnabled$Z(true);
this.startBtn.setText$S(this.startText);
this.startBtn.setToolTipText$S(this.startToolTipText);
this.resetBtn.setText$S(this.newText);
this.resetBtn.setToolTipText$S(this.newToolTipText);
this.resetBtn.setEnabled$Z(true);
this.readItem.setEnabled$Z(this.stepModeEditing);
this.table.setEnabled$Z(this.stepModeEditing);
this.messageTextArea.setEditable$Z(false);
$I$(9).clearDrawingFrameData$Z(false);
if (this.model == null ) {
this.println$S("This AnimationControl\'s model is null.");
} else {
(this.model).initializeAnimation$();
}$I$(9).showDrawingAndTableFrames$();
} else if (e.getActionCommand$().equals$O(this.startText)) {
p$1.setCustomButtonsEnabled$Z.apply(this, [false]);
this.startBtn.setText$S(this.stopText);
this.startBtn.setToolTipText$S(this.stopToolTipText);
this.stepBtn.setEnabled$Z(false);
this.resetBtn.setEnabled$Z(false);
this.readItem.setEnabled$Z(false);
this.table.setEnabled$Z(false);
$I$(9).enableMenubars$Z(false);
(this.model).startAnimation$();
} else {
this.startBtn.setText$S(this.startText);
p$1.setCustomButtonsEnabled$Z.apply(this, [true]);
this.startBtn.setToolTipText$S(this.startToolTipText);
this.stepBtn.setEnabled$Z(true);
this.resetBtn.setEnabled$Z(true);
$I$(9).enableMenubars$Z(true);
this.readItem.setEnabled$Z(this.stepModeEditing);
this.table.setEnabled$Z(this.stepModeEditing);
(this.model).stopAnimation$();
}});

Clazz.newMeth(C$, 'resetBtnActionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getActionCommand$().equals$O(this.resetText)) {
$I$(9).clearDrawingFrameData$Z(true);
if (this.model == null ) {
this.println$S("This AnimationControl\'s model is null.");
return;
}(this.model).resetAnimation$();
if (this.xmlDefault != null ) {
this.xmlDefault.loadObject$O$Z$Z(this.getOSPApp$(), true, true);
}this.table.refresh$();
} else {
this.startBtn.setText$S(this.initText);
this.startBtn.setToolTipText$S(this.initToolTipText);
this.resetBtn.setText$S(this.resetText);
this.resetBtn.setToolTipText$S(this.resetToolTipText);
this.stepBtn.setEnabled$Z(false);
this.readItem.setEnabled$Z(true);
this.table.setEnabled$Z(true);
this.messageTextArea.setEditable$Z(true);
p$1.setCustomButtonsEnabled$Z.apply(this, [true]);
}});

Clazz.newMeth(C$, 'stepBtnActionPerformed$java_awt_event_ActionEvent',  function (e) {
(this.model).stepAnimation$();
});

Clazz.newMeth(C$, 'setCustomButtonsEnabled$Z',  function (enabled) {
if (this.customButtons != null ) {
for (var it=this.customButtons.iterator$(); it.hasNext$(); ) {
(it.next$()).setEnabled$Z(enabled);
}
}}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(10,1));
}, 1);

Clazz.newMeth(C$, 'createApp$org_opensourcephysics_controls_Animation',  function (model) {
var control=Clazz.new_(C$.c$$org_opensourcephysics_controls_Animation,[model]);
model.setControl$org_opensourcephysics_controls_Control(control);
return control;
}, 1);

Clazz.newMeth(C$, 'createApp$org_opensourcephysics_controls_Animation$SA',  function (model, xml) {
var control=C$.createApp$org_opensourcephysics_controls_Animation(model);
control.loadXML$SA(xml);
return control;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnimationControl, "StartBtnListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.AnimationControl'].startBtnActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.opensourcephysics.controls.AnimationControl'], [e]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnimationControl, "ResetBtnListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.AnimationControl'].resetBtnActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.opensourcephysics.controls.AnimationControl'], [e]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnimationControl, "StepBtnListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.controls.AnimationControl'].stepBtnActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.opensourcephysics.controls.AnimationControl'], [e]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnimationControl, "AnimationControlLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.controls.OSPControl','.OSPControlLoader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var ac=obj;
if (ac.startBtn.getText$().equals$O(ac.stopText)) {
ac.startBtn.doClick$();
}control.setValue$S$Z("initialize_mode", ac.startBtn.getText$().equals$O(ac.initText));
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$org_opensourcephysics_controls_Animation,[null]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var ac=obj;
if (ac.startBtn.getText$().equals$O(ac.stopText)) {
ac.startBtn.doClick$();
}var initMode=control.getBoolean$S("initialize_mode");
control.setValue$S$O("initialize_mode", null);
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
if (initMode) {
control.setValue$S$Z("initialize_mode", true);
}if (initMode && ac.startBtn.getText$().equals$O(ac.startText) ) {
ac.resetBtn.doClick$();
}if (!initMode && ac.startBtn.getText$().equals$O(ac.initText) ) {
ac.startBtn.doClick$();
}ac.clearMessages$();
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
