(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'javax.swing.JCheckBox','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.tools.Parameter','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParamEditor", null, 'org.opensourcephysics.tools.FunctionEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.paramValues=Clazz.array(Double.TYPE, [0]);
this.paramDescriptions=Clazz.array(String, [0]);
this.syncing=false;
},1);

C$.$fields$=[['Z',['syncing'],'O',['paramValues','double[]','data','org.opensourcephysics.display.DatasetManager','functionEditors','org.opensourcephysics.tools.FunctionEditor[]','paramDescriptions','String[]','syncedCheckbox','javax.swing.JCheckBox']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.paramEditor=this;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DatasetManager',  function (input) {
C$.c$.apply(this, []);
this.data=input;
this.loadParametersFromData$();
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
C$.superclazz.prototype.createGUI$.apply(this, []);
if (this.syncedCheckbox == null ) {
this.syncedCheckbox=Clazz.new_($I$(1,1));
this.syncedCheckbox.addActionListener$java_awt_event_ActionListener(((P$.ParamEditor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ParamEditor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.tools.ParamEditor'].doSyncAction$.apply(this.b$['org.opensourcephysics.tools.ParamEditor'], []);
});
})()
), Clazz.new_(P$.ParamEditor$lambda1.$init$,[this, null])));
}});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
C$.superclazz.prototype.refreshGUI$.apply(this, []);
if (this.syncedCheckbox != null ) {
this.syncedCheckbox.setText$S($I$(2).getString$S("ParamEditor.Checkbox.Synced.Text"));
}});

Clazz.newMeth(C$, 'enableMenuButtons$',  function () {
C$.superclazz.prototype.enableMenuButtons$.apply(this, []);
if (this.syncedCheckbox != null ) {
var param=this.getSelectedObject$();
this.syncedCheckbox.setEnabled$Z(param != null  && param.isNameEditable$() );
this.syncedCheckbox.setSelected$Z(param != null  && param.isSynced$() );
var tooltip=$I$(2).getString$S("ParamEditor.Checkbox.Synced.Tooltip");
if (param != null  && param.isNameEditable$() ) {
tooltip+=" \"" + param.getName$() + "\"" ;
}this.syncedCheckbox.setToolTipText$S(tooltip);
}});

Clazz.newMeth(C$, 'doSyncAction$',  function () {
var sync=this.syncedCheckbox.isSelected$();
var param=this.getSelectedObject$();
if (param == null  || !param.isNameEditable$()  || sync == param.isSynced$()  ) return;
param.setSynced$Z(sync);
this.firePropertyChange$S$O$O("synced", null, param);
});

Clazz.newMeth(C$, 'getParameters$',  function () {
var params=Clazz.array($I$(3), [this.objects.size$()]);
for (var i=0; i < this.objects.size$(); i++) {
var next=this.objects.get$I(i);
params[i]=Clazz.new_($I$(3,1).c$$S$S,[next.paramName, next.expression]);
params[i].setExpressionEditable$Z(next.isExpressionEditable$());
params[i].setNameEditable$Z(next.isNameEditable$());
params[i].setDescription$S(next.getDescription$());
params[i].value=next.value;
params[i].synced=next.synced;
}
return params;
});

Clazz.newMeth(C$, 'setParameters$org_opensourcephysics_tools_ParameterA',  function (params) {
var list=Clazz.new_($I$(4,1));
for (var i=0; i < params.length; i++) {
list.add$O(params[i]);
}
this.setObjects$java_util_List(list);
if (this.haveGUI$()) this.updateTable$();
});

Clazz.newMeth(C$, 'setFunctionEditors$org_opensourcephysics_tools_FunctionEditorA',  function (editors) {
this.functionEditors=editors;
if (this.functionEditors == null ) {
this.paramEditor=null;
}});

Clazz.newMeth(C$, 'getValues$',  function () {
return this.paramValues;
});

Clazz.newMeth(C$, 'getDescriptions$',  function () {
return this.paramDescriptions;
});

Clazz.newMeth(C$, 'getName$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).paramName;
});

Clazz.newMeth(C$, 'getExpression$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).expression;
});

Clazz.newMeth(C$, 'getDescription$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).getDescription$();
});

Clazz.newMeth(C$, 'setDescription$org_opensourcephysics_tools_FunctionEditor_FObject$S',  function (obj, desc) {
if (obj != null ) {
var p=obj;
if (desc != null  && desc.trim$().equals$O("") ) {
desc=null;
}p.setDescription$S(desc);
C$.superclazz.prototype.setDescription$org_opensourcephysics_tools_FunctionEditor_FObject$S.apply(this, [obj, desc]);
}});

Clazz.newMeth(C$, 'setDescription$S$S',  function (name, description) {
for (var obj, $obj = this.objects.iterator$(); $obj.hasNext$()&&((obj=($obj.next$())),1);) {
var param=obj;
if (param.getName$().equals$O(name)) {
this.setDescription$org_opensourcephysics_tools_FunctionEditor_FObject$S(obj, description);
break;
}}
});

Clazz.newMeth(C$, 'setSyncing$Z',  function (sync) {
this.syncing=sync;
if (this.getButtonPanel$() == null ) return;
if (this.syncing) this.getButtonPanel$().add$java_awt_Component(this.syncedCheckbox);
 else this.getButtonPanel$().remove$java_awt_Component(this.syncedCheckbox);
});

Clazz.newMeth(C$, 'getTooltip$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
var s=(obj).getDescription$();
if (s == null ) {
s=$I$(2).getString$S("ParamEditor.Table.Cell.Name.Tooltip");
s+=" (" + $I$(2).getString$S("FunctionEditor.Tooltip.HowToEdit") + ")" ;
}return s;
});

Clazz.newMeth(C$, 'isNameEditable$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj).isNameEditable$();
});

Clazz.newMeth(C$, 'isExpressionEditable$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj).isExpressionEditable$();
});

Clazz.newMeth(C$, 'evaluateObject$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
var p=obj;
p.evaluate$java_util_List(this.objects);
});

Clazz.newMeth(C$, 'evaluateDependents$org_opensourcephysics_tools_Parameter',  function (seed) {
var temp=Clazz.new_($I$(4,1));
for (var i=this.evaluate.size$(); --i >= 0; ) {
var param=this.evaluate.get$I(i);
if (param.paramName.equals$O(seed.paramName)) {
temp.add$O(seed);
for (var j=i + 1; j < this.evaluate.size$(); j++) {
var p=this.evaluate.get$I(j);
temp.add$O(Clazz.new_($I$(3,1).c$$S$S,[p.paramName, p.expression]));
}
for (var j=temp.size$(); --j >= 0; ) {
var p=temp.get$I(j);
p.evaluate$java_util_List(temp);
this.referencesChecked.clear$();
if (!this.references$S$java_util_HashSet(p.getName$(), this.referencesChecked)) {
temp.remove$I(j);
}}
temp.remove$O(seed);
return temp;
}}
return temp;
});

Clazz.newMeth(C$, 'evaluateAll$',  function () {
this.setArrays$();
if (this.getClass$() !== Clazz.getClass(C$) ) {
return;
}if (this.paramValues.length != this.objects.size$()) {
this.paramValues=Clazz.array(Double.TYPE, [this.objects.size$()]);
}for (var i=0; i < this.evaluate.size$(); i++) {
var p=this.evaluate.get$I(i);
p.evaluate$java_util_List(this.objects);
}
if (this.paramDescriptions.length != this.objects.size$()) {
this.paramDescriptions=Clazz.array(String, [this.objects.size$()]);
}for (var i=0; i < this.objects.size$(); i++) {
var p=this.objects.get$I(i);
this.paramValues[i]=p.getValue$();
this.paramDescriptions[i]=p.getDescription$();
}
});

Clazz.newMeth(C$, 'isDisallowedName$org_opensourcephysics_tools_FunctionEditor_FObject$S',  function (obj, name) {
var disallowed=C$.superclazz.prototype.isDisallowedName$org_opensourcephysics_tools_FunctionEditor_FObject$S.apply(this, [obj, name]);
if (!disallowed && obj != null   && this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj).equals$O(name) ) return false;
if (this.functionEditors != null ) {
for (var i=0; i < this.functionEditors.length; i++) {
disallowed=disallowed || this.functionEditors[i].isDisallowedName$org_opensourcephysics_tools_FunctionEditor_FObject$S(null, name) ;
}
}return disallowed;
});

Clazz.newMeth(C$, 'pasteAction$',  function () {
this.getClipboardContentsAsync$java_util_function_Consumer(((P$.ParamEditor$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ParamEditor$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$org_opensourcephysics_controls_XMLControlA','accept$O'],  function (controls) /*block*/{
if (controls == null ) {
return;
}for (var i=0; i < controls.length; i++) {
var param=controls[i].loadObject$O.apply(controls[i], [null]);
param.setNameEditable$Z.apply(param, [true]);
param.setExpressionEditable$Z.apply(param, [true]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [param, true]);
}
this.b$['org.opensourcephysics.tools.ParamEditor'].evaluateAll$.apply(this.b$['org.opensourcephysics.tools.ParamEditor'], []);
});
})()
), Clazz.new_(P$.ParamEditor$lambda2.$init$,[this, null])));
});

Clazz.newMeth(C$, 'isInvalidExpression$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return Double.isNaN$D((obj).getValue$());
});

Clazz.newMeth(C$, 'createObject$S$S$org_opensourcephysics_tools_FunctionEditor_FObject',  function (name, expression, obj) {
var original=obj;
if ((original != null ) && original.paramName.equals$O(name) && original.expression.equals$O(expression)  ) {
return original;
}var p=Clazz.new_($I$(3,1).c$$S$S,[name, expression]);
if (original != null ) {
p.setExpressionEditable$Z(original.isExpressionEditable$());
p.setNameEditable$Z(original.isNameEditable$());
p.setDescription$S(original.getDescription$());
p.setSynced$Z(original.isSynced$());
}return p;
});

Clazz.newMeth(C$, 'setTitles$',  function () {
this.newButtonTipText=$I$(2).getString$S("ParamEditor.Button.New.Tooltip");
this.titledBorderText=$I$(2).getString$S("ParamEditor.Border.Title");
});

Clazz.newMeth(C$, 'loadParametersFromData$',  function () {
if (this.data == null ) return;
for (var name, $name = this.data.getConstantNames$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var expression=this.data.getConstantExpression$S(name);
var p=this.getObject$S(name);
if (p == null ) {
p=Clazz.new_($I$(3,1).c$$S$S,[name, expression]);
p.setDescription$S(this.data.getConstantDescription$S(name));
this.addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(p, false);
} else {
this.setExpression$S$S$Z(name, expression, false);
}}
});

Clazz.newMeth(C$, 'refreshParametersFromFunction$org_opensourcephysics_tools_UserFunction',  function (f) {
for (var i=0; i < f.getParameterCount$(); i++) {
var name=f.getParameterName$I(i);
var val=String.valueOf$D(f.getParameterValue$I(i));
var p=this.getObject$S(name);
if (p == null ) {
p=Clazz.new_($I$(3,1).c$$S$S,[name, val]);
p.setNameEditable$Z(false);
p.setExpressionEditable$Z(false);
this.addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(p, false);
} else {
this.setExpression$S$S$Z(name, val, false);
}}
});

Clazz.newMeth(C$, 'getDefaultName$',  function () {
return $I$(2).getString$S("ParamEditor.New.Name.Default");
});

Clazz.newMeth(C$, 'isImportant$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return false;
});

Clazz.newMeth(C$, 'setReferences$org_opensourcephysics_tools_FunctionEditor_FObject$java_util_BitSet',  function (obj, directReferences) {
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
