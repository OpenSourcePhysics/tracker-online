(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'java.awt.Color','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.display.TeXParser','StringBuffer','org.opensourcephysics.display.DataFunction']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataFunctionEditor", null, 'org.opensourcephysics.tools.FunctionEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','org.opensourcephysics.display.DatasetManager']]
,['O',['markerColors','java.awt.Color[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DatasetManager',  function (data) {
Clazz.super_(C$, this);
this.data=data;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init',  function () {
var sets=this.data.getDatasetsRaw$();
for (var i=0, n=sets.size$(); i < n; i++) {
var next=sets.get$I(i);
if (Clazz.instanceOf(next, "org.opensourcephysics.display.DataFunction")) {
this.objects.add$O(next);
}}
}, p$1);

Clazz.newMeth(C$, 'setTitles$',  function () {
this.titledBorderText=$I$(2).getString$S("DataFunctionEditor.Border.Title");
});

Clazz.newMeth(C$, 'getData$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'getName$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).getYColumnName$();
});

Clazz.newMeth(C$, 'getExpression$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).getInputString$();
});

Clazz.newMeth(C$, 'getDescription$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).getYColumnDescription$();
});

Clazz.newMeth(C$, 'setDescription$org_opensourcephysics_tools_FunctionEditor_FObject$S',  function (obj, desc) {
if (obj != null ) {
if (desc != null  && desc.trim$().equals$O("") ) {
desc=null;
}(obj).setYColumnDescription$S(desc);
C$.superclazz.prototype.setDescription$org_opensourcephysics_tools_FunctionEditor_FObject$S.apply(this, [obj, desc]);
}});

Clazz.newMeth(C$, 'getTooltip$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return (obj == null ) ? null : (obj).getYColumnDescription$();
});

Clazz.newMeth(C$, 'isNameEditable$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return true;
});

Clazz.newMeth(C$, 'isExpressionEditable$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return true;
});

Clazz.newMeth(C$, 'evaluateAll$',  function () {
this.setArrays$();
for (var i=0; i < this.evaluate.size$(); i++) {
var f=this.evaluate.get$I(i);
f.setExpression$S(f.getInputString$());
}
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

Clazz.newMeth(C$, 'isDisallowedName$org_opensourcephysics_tools_FunctionEditor_FObject$S',  function (obj, name) {
var datasets=this.data.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var next=datasets.get$I(i);
if (obj != null  && next === obj   && this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(obj).equals$O(name) ) return false;
if ((i == 0) && $I$(3,"removeSubscripting$S",[next.getXColumnName$()]).equals$O(name) ) {
return true;
}if ($I$(3,"removeSubscripting$S",[next.getYColumnName$()]).equals$O(name)) {
return true;
}}
return C$.superclazz.prototype.isDisallowedName$org_opensourcephysics_tools_FunctionEditor_FObject$S.apply(this, [obj, name]);
});

Clazz.newMeth(C$, 'getVariablesString$S',  function (separator) {
var vars=Clazz.new_($I$(4,1).c$$S,[""]);
if (this.paramEditor != null ) {
var parameters=this.paramEditor.getParameters$();
for (var i=0; i < parameters.length; i++) {
vars.append$S(" ");
vars.append$S(parameters[i].getName$());
}
}var nameToSkip=this.getName$org_opensourcephysics_tools_FunctionEditor_FObject(this.getSelectedObject$());
var datasets=this.data.getDatasetsRaw$();
for (var i=0; i < datasets.size$(); i++) {
var next=datasets.get$I(i);
if (i == 0) {
var name=next.getXColumnName$();
vars.append$S(" ");
vars.append$S($I$(3).removeSubscripting$S(name));
}var name=next.getYColumnName$();
if (name.equals$O(nameToSkip)) {
continue;
}vars.append$S(" ");
vars.append$S($I$(3).removeSubscripting$S(name));
}
return this.getVariablesString$StringBuffer$S(vars, separator);
});

Clazz.newMeth(C$, 'isInvalidExpression$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
var f=obj;
return !f.getInputString$().equals$O(f.getExpression$());
});

Clazz.newMeth(C$, 'createObject$S$S$org_opensourcephysics_tools_FunctionEditor_FObject',  function (name, expression, obj) {
var f=obj;
if ((f != null ) && f.getYColumnName$().equals$O(name) && f.getInputString$().equals$O(expression)  ) {
return f;
}if (f == null ) {
f=Clazz.new_($I$(5,1).c$$org_opensourcephysics_display_DatasetManager,[this.data]);
var i=this.objects.size$();
if (i < C$.markerColors.length) {
f.setMarkerColor$java_awt_Color$java_awt_Color(C$.markerColors[i], C$.markerColors[i].darker$());
f.setLineColor$java_awt_Color(C$.markerColors[i]);
}f.setYColumnName$S(name);
f.setExpression$S(expression);
} else if (!f.getYColumnName$().equals$O(name)) {
f.setYColumnName$S(name);
} else {
f.setExpression$S(expression);
}return f;
});

Clazz.newMeth(C$, 'pasteAction$',  function () {
this.getClipboardContentsAsync$java_util_function_Consumer(((P$.DataFunctionEditor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataFunctionEditor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$org_opensourcephysics_controls_XMLControlA','accept$O'],  function (controls) /*block*/{
if (controls == null ) {
return;
}for (var i=0; i < controls.length; i++) {
var f=Clazz.new_($I$(5,1).c$$org_opensourcephysics_display_DatasetManager,[this.b$['org.opensourcephysics.tools.DataFunctionEditor'].data]);
var obj=controls[i].loadObject$O.apply(controls[i], [f]);
this.b$['org.opensourcephysics.tools.FunctionEditor'].addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z.apply(this.b$['org.opensourcephysics.tools.FunctionEditor'], [obj, true]);
}
this.b$['org.opensourcephysics.tools.DataFunctionEditor'].evaluateAll$.apply(this.b$['org.opensourcephysics.tools.DataFunctionEditor'], []);
});
})()
), Clazz.new_(P$.DataFunctionEditor$lambda1.$init$,[this, null])));
});

Clazz.newMeth(C$, 'isImportant$org_opensourcephysics_tools_FunctionEditor_FObject',  function (obj) {
return false;
});

Clazz.newMeth(C$, 'setReferences$org_opensourcephysics_tools_FunctionEditor_FObject$java_util_BitSet',  function (obj, directRefrences) {
});

C$.$static$=function(){C$.$static$=0;
C$.markerColors=Clazz.array($I$(1), -1, [$I$(1).green.darker$(), $I$(1).red, $I$(1).cyan.darker$(), $I$(1).yellow.darker$(), $I$(1).blue]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
