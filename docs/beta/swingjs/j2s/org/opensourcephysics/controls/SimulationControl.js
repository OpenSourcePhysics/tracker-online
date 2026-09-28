(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.controls.SimulationControl','java.awt.Color','java.util.HashSet','org.opensourcephysics.controls.Control',['org.opensourcephysics.controls.SimulationControl','.SimulationControlLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SimulationControl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.controls.AnimationControl', 'org.opensourcephysics.controls.SimControl');
C$.$classes$=[['SimulationControlLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixedParameters=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['fixedParameters','java.util.Set']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_Simulation',  function (animation) {
;C$.superclazz.c$$org_opensourcephysics_controls_Animation.apply(this,[animation]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setParameterToFixed$S$Z',  function (name, fixed) {
if (fixed) {
this.fixedParameters.add$O(name);
} else {
this.fixedParameters.remove$O(name);
}this.table.refresh$();
});

Clazz.newMeth(C$, 'isParamterFixed$S',  function (name) {
return this.fixedParameters.contains$O(name);
});

Clazz.newMeth(C$, 'setValue$S$O',  function (name, val) {
C$.superclazz.prototype.setValue$S$O.apply(this, [name, val]);
this.fixedParameters.add$O(name);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$O',  function (name, val) {
C$.superclazz.prototype.setValue$S$O.apply(this, [name, val]);
this.fixedParameters.remove$O(name);
});

Clazz.newMeth(C$, 'setValue$S$D',  function (name, val) {
C$.superclazz.prototype.setValue$S$D.apply(this, [name, val]);
this.fixedParameters.add$O(name);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$D',  function (name, val) {
C$.superclazz.prototype.setValue$S$D.apply(this, [name, val]);
this.fixedParameters.remove$O(name);
});

Clazz.newMeth(C$, 'setValue$S$I',  function (name, val) {
C$.superclazz.prototype.setValue$S$I.apply(this, [name, val]);
this.fixedParameters.add$O(name);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$I',  function (name, val) {
C$.superclazz.prototype.setValue$S$I.apply(this, [name, val]);
this.fixedParameters.remove$O(name);
});

Clazz.newMeth(C$, 'setValue$S$Z',  function (name, val) {
C$.superclazz.prototype.setValue$S$Z.apply(this, [name, val]);
this.fixedParameters.add$O(name);
});

Clazz.newMeth(C$, 'removeParameter$S',  function (name) {
C$.superclazz.prototype.removeParameter$S.apply(this, [name]);
this.fixedParameters.remove$O(name);
});

Clazz.newMeth(C$, 'setAdjustableValue$S$Z',  function (name, val) {
C$.superclazz.prototype.setValue$S$Z.apply(this, [name, val]);
this.fixedParameters.remove$O(name);
});

Clazz.newMeth(C$, 'resetBtnActionPerformed$java_awt_event_ActionEvent',  function (e) {
var it=this.fixedParameters.iterator$();
while (it.hasNext$()){
var par=it.next$();
this.table.setEditable$S$Z(par, true);
this.table.setBackgroundColor$S$java_awt_Color(par, $I$(2).WHITE);
}
this.table.refresh$();
C$.superclazz.prototype.resetBtnActionPerformed$java_awt_event_ActionEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'startBtnActionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getActionCommand$().equals$O(this.initText)) {
this.table.setEditable$Z(true);
var it=this.fixedParameters.iterator$();
while (it.hasNext$()){
var par=it.next$();
this.table.setEditable$S$Z(par, false);
this.table.setBackgroundColor$S$java_awt_Color(par, $I$(4).NOT_EDITABLE_BACKGROUND);
}
} else if (e.getActionCommand$().equals$O(this.startText)) {
var it=this.table.getPropertyNamesRaw$().iterator$();
while (it.hasNext$()){
var par=it.next$();
this.table.setEditable$S$Z(par, false);
this.table.setBackgroundColor$S$java_awt_Color(par, $I$(4).NOT_EDITABLE_BACKGROUND);
}
} else if (e.getActionCommand$().equals$O(this.stopText)) {
var it=this.table.getPropertyNamesRaw$().iterator$();
while (it.hasNext$()){
var par=it.next$();
if (this.fixedParameters.contains$O(par)) {
continue;
}this.table.setEditable$S$Z(par, true);
this.table.setBackgroundColor$S$java_awt_Color(par, $I$(2).WHITE);
}
}this.table.refresh$();
C$.superclazz.prototype.startBtnActionPerformed$java_awt_event_ActionEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);

Clazz.newMeth(C$, 'createApp$org_opensourcephysics_controls_Simulation',  function (model) {
var control=Clazz.new_(C$.c$$org_opensourcephysics_controls_Simulation,[model]);
model.setControl$org_opensourcephysics_controls_Control(control);
return control;
}, 1);

Clazz.newMeth(C$, 'createApp$org_opensourcephysics_controls_Simulation$SA',  function (model, xml) {
var control=C$.createApp$org_opensourcephysics_controls_Simulation(model);
control.loadXML$SA(xml);
return control;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SimulationControl, "SimulationControlLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.controls.AnimationControl','.AnimationControlLoader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$org_opensourcephysics_controls_Simulation,[null]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var sc=obj;
var fixedParm=sc.fixedParameters.toArray$OA(Clazz.array(String, [0]));
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
sc.fixedParameters.clear$();
for (var i=0, n=fixedParm.length; i < n; i++) {
sc.fixedParameters.add$O(fixedParm[i]);
}
var it=sc.table.getPropertyNamesRaw$().iterator$();
while (it.hasNext$()){
var parm=it.next$();
if (sc.fixedParameters.contains$O(parm)) {
continue;
}sc.table.setEditable$S$Z(parm, true);
sc.table.setBackgroundColor$S$java_awt_Color(parm, $I$(2).WHITE);
}
if ((Clazz.instanceOf(sc.model, "org.opensourcephysics.controls.AbstractSimulation")) && (control.getObject$S("steps per display") != null ) ) {
(sc.model).enableStepsPerDisplay$Z(true);
(sc.model).setStepsPerDisplay$I(Integer.parseInt$S(control.getString$S("steps per display")));
} else {
(sc.model).enableStepsPerDisplay$Z(false);
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
