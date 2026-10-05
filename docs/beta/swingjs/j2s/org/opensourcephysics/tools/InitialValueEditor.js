(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'StringBuffer','org.opensourcephysics.tools.ToolsRes']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InitialValueEditor", null, 'org.opensourcephysics.tools.ParamEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_ParamEditor',  function (editor) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.skipAllName="t";
this.paramEditor=editor;
this.setFunctionPanel$org_opensourcephysics_tools_FunctionPanel(editor.getFunctionPanel$());
}, 1);

Clazz.newMeth(C$, 'isNameEditable$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return false;
});

Clazz.newMeth(C$, 'getVariablesString$S',  function (separator) {
var selectedName=this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(this.getSelectedObject$());
var vars=Clazz.new_($I$(1,1).c$$S,[""]);
var paramNames=this.paramEditor.getNames$();
for (var i=0; i < paramNames.length; i++) {
vars.append$S(" ");
vars.append$S(paramNames[i]);
}
if (this.skipAllName == null  || !this.skipAllName.equals$O(selectedName) ) {
for (var i=0; i < this.names.length; i++) {
if (this.names[i].equals$O(selectedName)) {
continue;
}vars.append$S(" ");
vars.append$S(this.names[i]);
}
}return this.getVariablesString$StringBuffer$S(vars, separator);
});

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.getPreferredSize$().height;
return dim;
});

Clazz.newMeth(C$, 'evaluateAll$',  function () {
this.setArrays$();
var nObj=this.objects.size$();
if (this.paramValues.length != nObj) {
this.paramValues=Clazz.array(Double.TYPE, [nObj]);
}var tempList=this.paramEditor.getObjects$();
tempList.addAll$java_util_Collection(this.getObjects$());
for (var i=0; i < this.evaluate.size$(); i++) {
var p=this.evaluate.get$I(i);
p.evaluate$java_util_List(tempList);
}
for (var i=0; i < nObj; i++) {
var p=this.objects.get$I(i);
this.paramValues[i]=p.getValue$();
}
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.addButtonPanel=false;
C$.superclazz.prototype.createGUI$.apply(this, []);
});

Clazz.newMeth(C$, 'setTitles$',  function () {
this.newButtonTipText=$I$(2).getString$S("ParamEditor.Button.New.Tooltip");
this.titledBorderText=$I$(2).getString$S("InitialValueEditor.Border.Title");
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
