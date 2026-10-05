(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.util.ArrayList','org.opensourcephysics.tools.Parameter','org.opensourcephysics.display.DataFunction','org.opensourcephysics.tools.DataFunctionEditor','org.opensourcephysics.tools.ToolsRes',['org.opensourcephysics.tools.DataFunctionPanel','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataFunctionPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.tools.FunctionPanel');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DatasetManager',  function (input) {
C$.c$$org_opensourcephysics_tools_DataFunctionEditor.apply(this, [Clazz.new_($I$(4,1).c$$org_opensourcephysics_display_DatasetManager,[input])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_DataFunctionEditor',  function (editor) {
;C$.superclazz.c$$org_opensourcephysics_tools_FunctionEditor.apply(this,[editor]);C$.$init$.apply(this);
var name=editor.getData$().getName$();
this.setName$S(name.equals$O("") ? "data" : name);
}, 1);

Clazz.newMeth(C$, 'getData$',  function () {
return (this.functionEditor).getData$();
});

Clazz.newMeth(C$, 'getLabel$',  function () {
return $I$(5).getString$S("DataFunctionPanel.SpinnerLabel");
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "edit":
this.refreshFunctions$();
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
break;
case "function":
if (e.getNewValue$() != null ) {
var f=e.getNewValue$();
this.getData$().addDataset$org_opensourcephysics_display_Dataset(f);
} else if (e.getOldValue$() != null ) {
var f=e.getOldValue$();
var i=this.getData$().getDatasetIndex$S(f.getYColumnName$());
this.getData$().removeDataset$I(i);
}this.refreshFunctions$();
this.refreshGUI$();
if (this.functionTool != null ) {
this.functionTool.refreshGUI$();
this.functionTool.firePropertyChange$S$O$O("function", e.getOldValue$(), e.getNewValue$());
}break;
}
});

Clazz.newMeth(C$, 'refreshFunctions$',  function () {
var names=this.getData$().getConstantNames$().toArray$OA(Clazz.array(String, [0]));
for (var name, $name = 0, $$name = names; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
this.getData$().clearConstant$S(name);
}
var objects=this.paramEditor.getObjects$();
for (var i=0, n=objects.size$(); i < n; i++) {
var p=objects.get$I(i);
var name=p.getName$();
var val=p.getValue$();
this.getData$().setConstant$S$D$S$S(name, val, p.getExpression$(), p.getDescription$());
}
this.functionEditor.evaluateAll$();
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(6,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataFunctionPanel, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var panel=obj;
control.setValue$S$O("description", panel.getDescription$());
var params=panel.getParamEditor$().getParameters$();
control.setValue$S$O("user_parameters", params);
var editor=panel.getFunctionEditor$();
var functions=Clazz.new_($I$(1,1));
for (var next, $next = editor.getObjects$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
functions.add$O(Clazz.array(String, -1, [editor.getName$org_opensourcephysics_tools_FunctionEditor_FObject(next), editor.getExpression$org_opensourcephysics_tools_FunctionEditor_FObject(next)]));
}
control.setValue$S$O("functions", functions);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var panel=obj;
panel.setDescription$S(control.getString$S("description"));
var params=control.getObject$S("user_parameters");
var existing=panel.getParamEditor$().getParameters$();
var allParams=Clazz.new_($I$(1,1));
var names=Clazz.new_($I$(1,1));
for (var param, $param = 0, $$param = existing; $param<$$param.length&&((param=($$param[$param])),1);$param++) {
allParams.add$O(param);
names.add$O(param.getName$());
}
for (var param, $param = 0, $$param = params; $param<$$param.length&&((param=($$param[$param])),1);$param++) {
if (names.contains$O(param.getName$())) continue;
allParams.add$O(param);
}
params=allParams.toArray$OA(Clazz.array($I$(2), [allParams.size$()]));
panel.getParamEditor$().setParameters$org_opensourcephysics_tools_ParameterA(params);
var functionsToImport=control.getObject$S("functions");
var editor=panel.getFunctionEditor$();
var existingFunctions=editor.getObjects$();
var data=panel.getData$();
 outer : for (var next, $next = functionsToImport.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var $function=next;
for (var f, $f = existingFunctions.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
var dataFunction=f;
if (dataFunction.getYColumnName$().equals$O($function[0]) && dataFunction.getInputString$().equals$O($function[1]) ) {
continue outer;
}}
var newFunction=Clazz.new_($I$(3,1).c$$org_opensourcephysics_display_DatasetManager$S$S,[data, $function[0], $function[1]]);
editor.addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(newFunction, false);
}
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
