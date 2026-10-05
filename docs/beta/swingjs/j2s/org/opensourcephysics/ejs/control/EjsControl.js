(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),I$=[[0,'org.opensourcephysics.ejs.control.value.StringValue']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EjsControl", null, 'org.opensourcephysics.ejs.control.GroupControl', 'org.opensourcephysics.controls.Control');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.messageArea=null;
this.inputArea=null;
this.strValue=Clazz.new_($I$(1,1).c$$S,[""]);
},1);

C$.$fields$=[['O',['messageArea','org.opensourcephysics.ejs.control.swing.ControlTextArea','inputArea','org.opensourcephysics.controls.ParsableTextArea','strValue','org.opensourcephysics.ejs.control.value.StringValue']]
,['S',['_RETURN_']]]

Clazz.newMeth(C$, 'c$$O',  function (_simulation) {
;C$.superclazz.c$$O.apply(this,[_simulation]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$O$S$java_awt_Frame',  function (_simulation, _replaceName, _replaceOwnerFrame) {
;C$.superclazz.c$$O$S$java_awt_Frame.apply(this,[_simulation, _replaceName, _replaceOwnerFrame]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addObject$O$S$S',  function (_object, _classname, _propList) {
var control=C$.superclazz.prototype.addObject$O$S$S.apply(this, [_object, _classname, _propList]);
if (Clazz.instanceOf(control, "org.opensourcephysics.ejs.control.swing.ControlTextArea")) {
this.messageArea=control;
} else if (Clazz.instanceOf(control, "org.opensourcephysics.ejs.control.swing.ControlInputArea")) {
this.inputArea=(control).getVisual$();
}return control;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.clearValues$();
this.clearMessages$();
C$.superclazz.prototype.reset$.apply(this, []);
});

Clazz.newMeth(C$, 'setLockValues$Z',  function (lock) {
});

Clazz.newMeth(C$, 'getPropertyNames$',  function () {
return this.variableTable.keySet$();
});

Clazz.newMeth(C$, 'getPropertyNamesRaw$',  function () {
return this.variableTable.keySet$();
});

Clazz.newMeth(C$, 'clearValues$',  function () {
if (this.inputArea != null ) {
this.inputArea.setText$S("");
this.inputArea.setCaretPosition$I(this.inputArea.getText$().length$());
}});

Clazz.newMeth(C$, 'clearMessages$',  function () {
if (this.messageArea != null ) {
this.messageArea.clear$();
}});

Clazz.newMeth(C$, 'println$S',  function (s) {
this.print$S(s + C$._RETURN_);
});

Clazz.newMeth(C$, 'println$',  function () {
this.println$S("");
});

Clazz.newMeth(C$, 'print$S',  function (s) {
if (this.messageArea != null ) {
this.messageArea.print$S(s);
} else {
System.out.print$S(s);
}});

Clazz.newMeth(C$, 'calculationDone$S',  function (message) {
this.println$S(message);
});

Clazz.newMeth(C$, 'setValue$S$org_opensourcephysics_ejs_control_value_Value',  function (_variable, _value) {
if (!this.isVariableRegistered$S(_variable) && (this.inputArea != null ) ) {
this.inputArea.setValue$S$S(_variable, _value.getString$());
} else {
C$.superclazz.prototype.setValue$S$org_opensourcephysics_ejs_control_value_Value.apply(this, [_variable, _value]);
}});

Clazz.newMeth(C$, 'getValue$S',  function (_variable) {
if (!this.isVariableRegistered$S(_variable) && (this.inputArea != null ) ) {
try {
this.strValue.value=this.inputArea.getValue$S(_variable);
return this.strValue;
} catch (e) {
if (Clazz.exceptionOf(e,"org.opensourcephysics.controls.VariableNotFoundException")){
} else {
throw e;
}
}
}return C$.superclazz.prototype.getValue$S.apply(this, [_variable]);
});

C$.$static$=function(){C$.$static$=0;
C$._RETURN_=System.getProperty$S("line.separator");
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
