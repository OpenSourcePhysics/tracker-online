(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.tools.FitFunctionPanel','org.opensourcephysics.tools.Parameter','org.opensourcephysics.tools.ToolsRes',['org.opensourcephysics.tools.FitFunctionPanel','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FitFunctionPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.tools.FunctionPanel');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['originalName']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_UserFunctionEditor',  function (editor) {
;C$.superclazz.c$$org_opensourcephysics_tools_FunctionEditor.apply(this,[editor]);C$.$init$.apply(this);
var functions=editor.getMainFunctions$();
var n=0;
for (var j=0; j < functions.length; j++) {
for (var i=0; i < functions[j].getParameterCount$(); i++) {
if (this.paramEditor.getObject$S(functions[j].getParameterName$I(i)) == null ) {
var param=Clazz.new_([functions[j].getParameterName$I(i), String.valueOf$D(functions[j].getParameterValue$I(i)), functions[j].getParameterDescription$I(i)],$I$(2,1).c$$S$S$S);
this.paramEditor.addObject$org_opensourcephysics_tools_FunctionEditor_FObject$I$Z$Z(param, n++, false, false);
}}
}
this.refreshFunctions$();
this.addForbiddenNames$SA(Clazz.array(String, -1, [this.getFitFunction$().getIndependentVariable$()]));
this.setName$S(this.getFitFunction$().getName$());
}, 1);

Clazz.newMeth(C$, 'getFitFunctionEditor$',  function () {
return this.functionEditor;
});

Clazz.newMeth(C$, 'getFitFunction$',  function () {
return (this.functionEditor).getMainFunctions$()[0];
});

Clazz.newMeth(C$, 'getSupportFunctions$',  function () {
return (this.functionEditor).getSupportFunctions$();
});

Clazz.newMeth(C$, 'getLabel$',  function () {
return $I$(3).getString$S("FitFunctionPanel.Label");
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("edit") && this.functionTool != null  ) {
var ufe=this.functionEditor;
var functions=ufe.getMainFunctions$();
if (functions != null  && functions.length > 0 ) {
if (e.getSource$() === this.functionEditor  && functions[0].getName$().equals$O(e.getOldValue$()) ) {
this.functionTool.renamePanel$S$S(this.getName$(), this.getFitFunction$().getName$());
if (Clazz.instanceOf(e.getNewValue$(), "org.opensourcephysics.tools.FunctionEditor.DefaultEdit")) {
var edit=e.getNewValue$();
this.functionEditor.getTable$().selectCell$I$I(edit.undoRow, edit.undoCol);
}this.functionTool.refreshGUI$();
}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
if (functions[0].polynomial != null ) {
this.functionTool.firePropertyChange$S$O$O("function", null, functions[0].getName$());
}return;
}} else if (e.getPropertyName$().equals$O("description") && this.functionTool != null  ) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
this.functionTool.firePropertyChange$S$O$O("function", null, this.getFitFunction$().getName$());
return;
}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'refreshFunctions$',  function () {
if (this.paramEditor != null ) {
(this.functionEditor).updateAllFunctions$org_opensourcephysics_tools_ParamEditor(this.paramEditor);
}this.functionEditor.evaluateAll$();
});

Clazz.newMeth(C$, 'refreshParameters$',  function () {
if (this.paramEditor != null ) {
var f=this.getFitFunction$();
this.paramEditor.refreshParametersFromFunction$org_opensourcephysics_tools_UserFunction(f);
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.FitFunctionPanel, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var panel=obj;
control.setValue$S$O("name", panel.getName$());
panel.setDescription$S("y = " + panel.getFitFunction$().getExpression$S("x"));
control.setValue$S$O("description", panel.getDescription$());
var params=panel.getParamEditor$().getParameters$();
control.setValue$S$O("user_parameters", params);
control.setValue$S$O("function_editor", panel.getFitFunctionEditor$());
control.setValue$S$O("original_name", panel.originalName);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var editor=control.getObject$S("function_editor");
return Clazz.new_($I$(1,1).c$$org_opensourcephysics_tools_UserFunctionEditor,[editor]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var panel=obj;
var params=control.getObject$S("user_parameters");
panel.getParamEditor$().setParameters$org_opensourcephysics_tools_ParameterA(params);
panel.getFitFunctionEditor$().parametersValid=false;
panel.getFitFunctionEditor$().evaluateAll$();
panel.originalName=control.getString$S("original_name");
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
