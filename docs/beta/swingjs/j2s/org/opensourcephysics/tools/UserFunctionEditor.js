(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.tools.UserFunctionEditor','org.opensourcephysics.tools.UserFunction','java.util.ArrayList','StringBuffer',['org.opensourcephysics.tools.UserFunctionEditor','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UserFunctionEditor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.tools.FunctionEditor');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mainFunctions=Clazz.array($I$(2), [0]);
this.defaultVariableNames=Clazz.array(String, -1, ["x"]);
this.parametersValid=true;
},1);

C$.$fields$=[['Z',['parametersValid'],'O',['mainFunctions','org.opensourcephysics.tools.UserFunction[]','defaultVariableNames','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setTitles$',  function () {
});

Clazz.newMeth(C$, 'getMainFunctions$',  function () {
return this.mainFunctions;
});

Clazz.newMeth(C$, 'setMainFunctions$org_opensourcephysics_tools_UserFunctionA',  function (functions) {
var f=this.getMainFunctions$();
for (var i=0, n=f.length; i < n; i++) {
this.objects.remove$O(f[i]);
}
for (var i=0, n=functions.length; i < n; i++) {
this.addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(functions[i], false);
}
this.mainFunctions=functions;
this.setDefaultVariables$SA(functions[0].getIndependentVariables$());
});

Clazz.newMeth(C$, 'getSupportFunctions$',  function () {
var temp=Clazz.new_($I$(3,1));
for (var it=this.objects.iterator$(); it.hasNext$(); ) {
var next=it.next$();
if (!p$1.isMainFunction$org_opensourcephysics_tools_FunctionEditor_FObject.apply(this, [next])) {
temp.add$O(next);
}}
return temp.toArray$OA(Clazz.array($I$(2), [0]));
});

Clazz.newMeth(C$, 'getName$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).getName$();
});

Clazz.newMeth(C$, 'getExpression$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).getInputString$();
});

Clazz.newMeth(C$, 'getDescription$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).getDescription$();
});

Clazz.newMeth(C$, 'setDescription$org_opensourcephysics_tools_FunctionEditor_FObject$S',  function (obj, desc) {
if (obj != null ) {
if (desc != null  && desc.trim$().equals$O("") ) {
desc=null;
}(obj).setDescription$S(desc);
C$.superclazz.prototype.setDescription$org_opensourcephysics_tools_FunctionEditor_FObject$S.apply(this, [obj, desc]);
}});

Clazz.newMeth(C$, 'isNameEditable$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj).isNameEditable$();
});

Clazz.newMeth(C$, 'isExpressionEditable$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
var f=obj;
return (f.polynomial == null );
});

Clazz.newMeth(C$, 'evaluateAll$',  function () {
this.setArrays$();
var paramEditor=this.getParamEditor$();
if (!this.parametersValid && (paramEditor != null ) ) {
paramEditor.evaluateAll$();
}for (var i=0; i < this.evaluate.size$(); i++) {
var f=this.evaluate.get$I(i);
if (!this.parametersValid && (paramEditor != null ) ) {
f.setParameters$SA$DA$SA(paramEditor.getNames$(), paramEditor.getValues$(), paramEditor.getDescriptions$());
}f.setExpression$S$SA(f.getInputString$(), f.getIndependentVariables$());
}
this.parametersValid=true;
});

Clazz.newMeth(C$, 'addObject$org_opensourcephysics_tools_FunctionEditor_FObject$I$Z$Z',  function (obj, row, postEdit, firePropertyChange) {
obj=C$.superclazz.prototype.addObject$org_opensourcephysics_tools_FunctionEditor_FObject$I$Z$Z.apply(this, [obj, row, postEdit, firePropertyChange]);
if (obj != null ) {
this.firePropertyChange$S$O$O("function", null, obj);
}return obj;
});

Clazz.newMeth(C$, 'removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z',  function (obj, postEdit) {
obj=C$.superclazz.prototype.removeObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z.apply(this, [obj, postEdit]);
if (obj != null ) {
this.firePropertyChange$S$O$O("function", obj, null);
}return obj;
});

Clazz.newMeth(C$, 'getTooltip$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).getDescription$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var propName=e.getPropertyName$();
if (propName.equals$O("param_description")) {
this.updateAllFunctions$org_opensourcephysics_tools_ParamEditor(this.paramEditor);
} else if (propName.equals$O("edit")) {
var mainFunctions=this.getMainFunctions$();
if (mainFunctions.length > 0) {
var newName=e.getOldValue$();
var oldName=null;
var obj=e.getNewValue$();
var func=this.getMainFunctions$()[0];
if (func.polynomial != null  && obj != null  ) {
if (Clazz.instanceOf(obj, "org.opensourcephysics.tools.FunctionEditor.DefaultEdit")) {
var edit=obj;
if (edit.editType != 2) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
return;
}oldName=edit.undoObj;
} else if (Clazz.instanceOf(obj, "java.lang.String")) {
oldName=obj;
}if (oldName != null ) {
for (var f, $f = 0, $$f = this.getMainFunctions$(); $f<$$f.length&&((f=($$f[$f])),1);$f++) {
f.setParameters$SA$DA$SA(this.paramEditor.getNames$(), this.paramEditor.getValues$(), this.paramEditor.getDescriptions$());
f.replaceParameterNameInExpression$S$S(oldName, newName);
}
for (var f, $f = 0, $$f = this.getSupportFunctions$(); $f<$$f.length&&((f=($$f[$f])),1);$f++) {
f.setParameters$SA$DA$SA(this.paramEditor.getNames$(), this.paramEditor.getValues$(), this.paramEditor.getDescriptions$());
f.replaceParameterNameInExpression$S$S(oldName, newName);
}
}}}}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'updateAllFunctions$org_opensourcephysics_tools_ParamEditor',  function (paramEditor) {
for (var i=0, n=this.objects.size$(); i < n; i++) {
(this.objects.get$I(i)).setParameters$SA$DA$SA(paramEditor.getNames$(), paramEditor.getValues$(), paramEditor.getDescriptions$());
}
});

Clazz.newMeth(C$, 'isImportant$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
for (var i=0; i < this.mainFunctions.length; i++) {
if (this.mainFunctions[i] === obj ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'setReferences$org_opensourcephysics_tools_FunctionEditor_FObject$java_util_BitSet',  function (obj, refs) {
var f=obj;
var references=Clazz.array($I$(2), [refs.cardinality$()]);
for (var pt=0, i=refs.nextSetBit$I(0); i >= 0; i=refs.nextSetBit$I(i + 1)) {
references[pt++]=this.objects.get$I(i);
}
f.setReferences$org_opensourcephysics_tools_UserFunctionA(references);
});

Clazz.newMeth(C$, 'setDefaultVariables$SA',  function (varNames) {
this.defaultVariableNames=varNames;
});

Clazz.newMeth(C$, 'isDisallowedName$org_opensourcephysics_tools_FunctionEditor_FObject$S',  function (obj, name) {
var disallowed=C$.superclazz.prototype.isDisallowedName$org_opensourcephysics_tools_FunctionEditor_FObject$S.apply(this, [obj, name]);
if (obj != null ) {
var $var=(obj).getIndependentVariable$();
disallowed=disallowed || $var.equals$O(name) ;
}if (disallowed) {
return true;
}if (obj != null  && this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj).equals$O(name) ) return false;
if (Clazz.instanceOf(this.functionPanel, "org.opensourcephysics.tools.FitFunctionPanel")) {
var fitPanel=this.functionPanel;
if (fitPanel.functionTool != null ) {
var s=fitPanel.functionTool.getUniqueName$S(name);
disallowed=!name.equals$O(s);
for (var next, $next = fitPanel.functionTool.curveFitters.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (disallowed) {
return true;
}disallowed=next.hasFit$S(name);
}
}}return disallowed;
});

Clazz.newMeth(C$, 'getVariablesString$S',  function (separator) {
var vars=Clazz.new_($I$(4,1).c$$S,[""]);
var paramNames=this.paramEditor.getNames$();
for (var i=0; i < paramNames.length; i++) {
vars.append$S(" ");
vars.append$S(paramNames[i]);
}
var f=this.getSelectedObject$();
if (f != null ) {
var s=f.getIndependentVariables$();
for (var i=0; i < s.length; i++) {
vars.append$S(" ");
vars.append$S(s[i]);
}
}var namesToSkip=Clazz.new_($I$(3,1));
namesToSkip.add$O(this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(this.getSelectedObject$()));
for (var i=0; i < this.mainFunctions.length; i++) {
namesToSkip.add$O(this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(this.mainFunctions[i]));
}
for (var i=0; i < this.names.length; i++) {
if (namesToSkip.contains$O(this.names[i])) {
continue;
}vars.append$S(" ");
vars.append$S(this.names[i]);
}
return this.getVariablesString$StringBuffer$S(vars, separator);
});

Clazz.newMeth(C$, 'isInvalidExpression$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return !(obj).isValid$();
});

Clazz.newMeth(C$, 'createObject$S$S$org_opensourcephysics_tools_FunctionEditor_FObject',  function (name, expression, obj) {
var f=obj;
if ((f != null ) && f.getName$().equals$O(name) && f.getInputString$().equals$O(expression)  ) {
return f;
}if (f == null ) {
f=Clazz.new_($I$(2,1).c$$S,[name]);
f.setParameters$SA$DA$SA(this.paramEditor.getNames$(), this.paramEditor.getValues$(), this.paramEditor.getDescriptions$());
f.setExpression$S$SA(expression, this.defaultVariableNames);
} else if (!f.getName$().equals$O(name)) {
f.setNameEditable$Z(true);
f.setName$S(name);
} else {
f.setParameters$SA$DA$SA(this.paramEditor.getNames$(), this.paramEditor.getValues$(), this.paramEditor.getDescriptions$());
f.setExpression$S$SA(expression, f.getIndependentVariables$());
}return f;
});

Clazz.newMeth(C$, 'isMainFunction$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
for (var i=this.mainFunctions.length; --i >= 0; ) {
if (obj === this.mainFunctions[i] ) {
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.UserFunctionEditor, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var editor=obj;
var functions=editor.getMainFunctions$();
control.setValue$S$O("main_functions", functions);
functions=editor.getSupportFunctions$();
if (functions.length > 0) {
control.setValue$S$O("support_functions", functions);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var editor=obj;
var functions=control.getObject$S("main_functions");
editor.setMainFunctions$org_opensourcephysics_tools_UserFunctionA(functions);
var row=functions.length;
functions=control.getObject$S("support_functions");
if (functions != null ) {
for (var i=0; i < functions.length; i++) {
editor.addObject$org_opensourcephysics_tools_FunctionEditor_FObject$I$Z$Z(functions[i], row + i, false, false);
}
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
