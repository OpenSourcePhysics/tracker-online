(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.tools.InitialValueEditor','org.opensourcephysics.tools.FunctionEditor','org.opensourcephysics.cabrillo.tracker.TrackerRes']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ModelFunctionPanel", null, 'org.opensourcephysics.tools.FunctionPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['initEditor','org.opensourcephysics.tools.InitialValueEditor','model','org.opensourcephysics.cabrillo.tracker.ParticleModel']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_UserFunctionEditor$org_opensourcephysics_cabrillo_tracker_ParticleModel',  function (editor, track) {
;C$.superclazz.c$$org_opensourcephysics_tools_FunctionEditor.apply(this,[editor]);C$.$init$.apply(this);
this.model=track;
this.setName$S(track.getName$S("model"));
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
C$.superclazz.prototype.init$.apply(this, []);
this.initEditor=Clazz.new_([this.getParamEditor$()],$I$(1,1).c$$org_opensourcephysics_tools_ParamEditor);
this.initEditor.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.paramEditor.addPropertyChangeListener$java_beans_PropertyChangeListener(this.initEditor);
this.functionEditor.addPropertyChangeListener$java_beans_PropertyChangeListener(this.initEditor);
this.initEditor.addPropertyChangeListener$java_beans_PropertyChangeListener(this.paramEditor);
this.initEditor.addPropertyChangeListener$java_beans_PropertyChangeListener(this.functionEditor);
var editors=Clazz.array($I$(2), -1, [this.functionEditor, this.initEditor]);
this.paramEditor.setFunctionEditors$org_opensourcephysics_tools_FunctionEditorA(editors);
});

Clazz.newMeth(C$, 'checkGUI$',  function () {
if (this.haveGUI$()) return;
C$.superclazz.prototype.checkGUI$.apply(this, []);
this.initEditor.checkGUI$();
this.paramEditor.checkGUI$();
this.functionEditor.checkGUI$();
});

Clazz.newMeth(C$, 'createGUI$',  function () {
C$.superclazz.prototype.createGUI$.apply(this, []);
this.box.add$java_awt_Component$I(this.initEditor, 1);
if (this.haveGUI$()) this.getParamEditor$().setSyncing$Z(true);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (!this.haveGUI$()) return;
C$.superclazz.prototype.refreshGUI$.apply(this, []);
this.initEditor.refreshGUI$();
});

Clazz.newMeth(C$, 'getLabel$',  function () {
return $I$(3).getString$S("ModelFunctionPanel.Label");
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
if (this.model != null ) return this.model.getDisplayName$();
return C$.superclazz.prototype.getDisplayName$.apply(this, []);
});

Clazz.newMeth(C$, 'getUserFunctionEditor$',  function () {
return this.functionEditor;
});

Clazz.newMeth(C$, 'getInitEditor$',  function () {
return this.initEditor;
});

Clazz.newMeth(C$, 'getIcon$',  function () {
if (this.model != null ) return this.model.getIcon$I$I$S(21, 16, "model");
return null;
});

Clazz.newMeth(C$, 'refreshFunctions$',  function () {
if (this.paramEditor != null ) {
var functions=(this.functionEditor).getMainFunctions$();
for (var i=0; i < functions.length; i++) {
functions[i].setParameters$SA$DA$SA(this.paramEditor.getNames$(), this.paramEditor.getValues$(), this.paramEditor.getDescriptions$());
}
functions=(this.functionEditor).getSupportFunctions$();
for (var i=0; i < functions.length; i++) {
functions[i].setParameters$SA$DA$SA(this.paramEditor.getNames$(), this.paramEditor.getValues$(), this.paramEditor.getDescriptions$());
}
}this.initEditor.evaluateAll$();
this.functionEditor.evaluateAll$();
});

Clazz.newMeth(C$, 'clearSelection$',  function () {
C$.superclazz.prototype.clearSelection$.apply(this, []);
if (this.initEditor != null ) this.initEditor.getTable$().clearSelection$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.paramEditor == null ) {
return;
}this.initEditor.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.paramEditor.removePropertyChangeListener$java_beans_PropertyChangeListener(this.initEditor);
this.functionEditor.removePropertyChangeListener$java_beans_PropertyChangeListener(this.initEditor);
this.initEditor.removePropertyChangeListener$java_beans_PropertyChangeListener(this.paramEditor);
this.initEditor.removePropertyChangeListener$java_beans_PropertyChangeListener(this.functionEditor);
this.initEditor.setFunctionPanel$org_opensourcephysics_tools_FunctionPanel(null);
this.initEditor.setFunctionEditors$org_opensourcephysics_tools_FunctionEditorA(null);
this.paramEditor.setFunctionEditors$org_opensourcephysics_tools_FunctionEditorA(null);
this.model=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'tabToNext$org_opensourcephysics_tools_FunctionEditor',  function (editor) {
if (editor === this.paramEditor ) {
this.initEditor.getTable$().requestFocusInWindow$();
} else C$.superclazz.prototype.tabToNext$org_opensourcephysics_tools_FunctionEditor.apply(this, [editor]);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
switch (e.getPropertyName$()) {
case "synced":
if (this.functionTool != null ) {
var builder=this.functionTool;
builder.syncParameters$org_opensourcephysics_tools_Parameter(e.getNewValue$());
}break;
case "edit":
if (e.getSource$() === this.paramEditor ) {
this.initEditor.getTable$().selectOnFocus=false;
if (this.functionTool != null ) {
var paramName=e.getOldValue$();
var param=this.paramEditor.getObject$S(paramName);
if (param == null ) break;
if (param.isSynced$() && Clazz.instanceOf(e.getNewValue$(), "org.opensourcephysics.tools.FunctionEditor.DefaultEdit") ) {
var edit=e.getNewValue$();
if (edit.getEditType$() == 3) {
var builder=this.functionTool;
builder.syncParameters$org_opensourcephysics_tools_Parameter(param);
} else if (edit.getEditType$() == 2) {
param.setSynced$Z(false);
}}}}break;
case "angles_in_radians":
if (this.model.tp != null ) {
this.model.tp.anglesInRadians=(e.getNewValue$()).valueOf();
break;
}}
});

Clazz.newMeth(C$, 'hasInvalidExpressions$',  function () {
return C$.superclazz.prototype.hasInvalidExpressions$.apply(this, []) || this.initEditor.containsInvalidExpressions$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
