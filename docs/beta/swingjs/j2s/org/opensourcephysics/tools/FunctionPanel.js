(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.awt.BorderLayout','org.opensourcephysics.tools.ParamEditor','org.opensourcephysics.tools.FunctionEditor','org.opensourcephysics.display.GUIUtils','java.awt.Dimension','java.awt.Color','javax.swing.BorderFactory','javax.swing.text.StyleContext','javax.swing.text.StyleConstants','javax.swing.Box','javax.swing.JScrollPane','javax.swing.undo.UndoManager','javax.swing.undo.UndoableEditSupport','javax.swing.JButton','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FunctionPanel", null, 'javax.swing.JPanel', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lang=null;
},1);

C$.$fields$=[['Z',['haveGUI'],'S',['prevName','description','lang'],'O',['functionTool','org.opensourcephysics.tools.FunctionTool','paramEditor','org.opensourcephysics.tools.ParamEditor','functionEditor','org.opensourcephysics.tools.FunctionEditor','undoSupport','javax.swing.undo.UndoableEditSupport','undoManager','javax.swing.undo.UndoManager','box','java.awt.Container','instructions','javax.swing.JTextPane','tableEditorField','javax.swing.JTextField','undoButton','javax.swing.JButton','+redoButton','icon','javax.swing.Icon','lastInstruction','java.lang.Object']]]

Clazz.newMeth(C$, 'haveGUI$',  function () {
return this.haveGUI;
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_FunctionEditor',  function (editor) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
this.functionEditor=editor;
editor.functionPanel=this;
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
if (Clazz.instanceOf(this.functionEditor, "org.opensourcephysics.tools.DataFunctionEditor")) {
this.paramEditor=Clazz.new_([(this.functionEditor).getData$()],$I$(2,1).c$$org_opensourcephysics_display_DatasetManager);
} else {
this.paramEditor=Clazz.new_($I$(2,1));
}this.paramEditor.functionPanel=this;
this.functionEditor.setParamEditor$org_opensourcephysics_tools_ParamEditor(this.paramEditor);
this.paramEditor.setFunctionEditors$org_opensourcephysics_tools_FunctionEditorA(Clazz.array($I$(3), -1, [this.functionEditor]));
this.paramEditor.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.paramEditor.addPropertyChangeListener$java_beans_PropertyChangeListener(this.functionEditor);
this.functionEditor.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.functionEditor.addPropertyChangeListener$java_beans_PropertyChangeListener(this.paramEditor);
});

Clazz.newMeth(C$, 'checkGUI$',  function () {
if (!this.haveGUI) {
this.createGUI$();
this.refreshGUI$();
}});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.haveGUI=true;
this.instructions=$I$(4).newJTextPane$();
this.instructions.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(5,1).c$$I$I,[300, 60]));
this.instructions.setEditable$Z(false);
this.instructions.setOpaque$Z(false);
this.instructions.setFocusable$Z(false);
this.instructions.setBackground$java_awt_Color($I$(6).yellow);
this.instructions.setBorder$javax_swing_border_Border($I$(7).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
var doc=this.instructions.getStyledDocument$();
var def=$I$(8).getDefaultStyleContext$().getStyle$S("default");
$I$(9).setFontFamily$javax_swing_text_MutableAttributeSet$S(def, "SansSerif");
var blue=doc.addStyle$S$javax_swing_text_Style("blue", def);
$I$(9).setBold$javax_swing_text_MutableAttributeSet$Z(blue, false);
$I$(9,"setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color",[blue, $I$(6).blue]);
var red=doc.addStyle$S$javax_swing_text_Style("red", blue);
$I$(9).setBold$javax_swing_text_MutableAttributeSet$Z(red, true);
$I$(9,"setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color",[red, $I$(6).red]);
this.box=$I$(10).createVerticalBox$();
this.box.add$java_awt_Component(this.paramEditor);
this.box.add$java_awt_Component(this.functionEditor);
this.box.add$java_awt_Component(((P$.FunctionPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JScrollPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
var font=this.b$['org.opensourcephysics.tools.FunctionPanel'].instructions.getFont$();
dim.height=Math.max(dim.height, font.getSize$() * 4);
return dim;
});
})()
), Clazz.new_($I$(11,1).c$$java_awt_Component,[this, null, this.instructions],P$.FunctionPanel$1)));
this.undoManager=Clazz.new_($I$(12,1));
this.undoSupport=Clazz.new_($I$(13,1));
this.undoSupport.addUndoableEditListener$javax_swing_event_UndoableEditListener(this.undoManager);
this.undoButton=Clazz.new_($I$(14,1));
this.undoButton.addActionListener$java_awt_event_ActionListener(((P$.FunctionPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.FunctionPanel'].undoManager.undo$();
});
})()
), Clazz.new_(P$.FunctionPanel$2.$init$,[this, null])));
this.redoButton=Clazz.new_($I$(14,1));
this.redoButton.addActionListener$java_awt_event_ActionListener(((P$.FunctionPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.FunctionPanel'].undoManager.redo$();
});
})()
), Clazz.new_(P$.FunctionPanel$3.$init$,[this, null])));
this.clearSelection$();
this.add$java_awt_Component$O(this.box, "Center");
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (!this.haveGUI) return;
if (this.functionTool != null  && this.functionTool.getSelectedPanel$() === this  ) {
if (!this.functionTool.hasButton$javax_swing_JButton(this.undoButton)) {
this.functionTool.setButtonBar$OA(Clazz.array(java.lang.Object, -1, ["help", this.undoButton, this.redoButton, "close"]));
}}this.undoButton.setEnabled$Z(this.undoManager.canUndo$());
this.redoButton.setEnabled$Z(this.undoManager.canRedo$());
this.lastInstruction=null;
this.refreshInstructions$org_opensourcephysics_tools_FunctionEditor$I(null, -1);
if (this.lang == $I$(15).getLanguage$()) return;
this.lang=$I$(15).getLanguage$();
this.undoButton.setText$S($I$(15).getString$S("DataFunctionPanel.Button.Undo"));
this.undoButton.setToolTipText$S($I$(15).getString$S("DataFunctionPanel.Button.Undo.Tooltip"));
this.redoButton.setText$S($I$(15).getString$S("DataFunctionPanel.Button.Redo"));
this.redoButton.setToolTipText$S($I$(15).getString$S("DataFunctionPanel.Button.Redo.Tooltip"));
this.paramEditor.refreshGUI$();
this.functionEditor.refreshGUI$();
});

Clazz.newMeth(C$, 'getParamEditor$',  function () {
return this.paramEditor;
});

Clazz.newMeth(C$, 'getFunctionEditor$',  function () {
return this.functionEditor;
});

Clazz.newMeth(C$, 'getFunctionTable$',  function () {
return this.functionEditor.getTable$();
});

Clazz.newMeth(C$, 'getParamTable$',  function () {
return this.paramEditor.getTable$();
});

Clazz.newMeth(C$, 'getLabel$',  function () {
return $I$(15).getString$S("FunctionPanel.Label");
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
return this.getName$();
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
var bp=this.paramEditor.getButtonPanel$();
dim.width=bp.getPreferredSize$().width;
return dim;
});

Clazz.newMeth(C$, 'addForbiddenNames$SA',  function (names) {
for (var i=0; i < names.length; i++) {
this.functionEditor.forbiddenNames.add$O(names[i]);
if (this.paramEditor != null ) {
this.paramEditor.forbiddenNames.add$O(names[i]);
}}
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "edit":
if (Clazz.instanceOf(e.getNewValue$(), "javax.swing.undo.UndoableEdit")) {
var edit=e.getNewValue$();
if (!(Clazz.instanceOf(edit, "org.opensourcephysics.tools.FunctionEditor.DefaultEdit")) || (edit).isNew$() ) this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}this.refreshFunctions$();
this.refreshGUI$();
if (this.functionEditor.getObjects$().size$() > 0) {
var functionName=e.getOldValue$();
var prevName=null;
if (Clazz.instanceOf(e.getNewValue$(), "org.opensourcephysics.tools.FunctionEditor.DefaultEdit")) {
var edit=e.getNewValue$();
if (edit.editType == 2) {
prevName=edit.undoObj.toString();
}} else if (Clazz.instanceOf(e.getNewValue$(), "java.lang.String")) {
prevName=e.getNewValue$().toString();
}if (this.functionTool != null ) this.functionTool.firePropertyChange$S$O$O("function", prevName, functionName);
}break;
case "function":
this.refreshFunctions$();
this.refreshGUI$();
if (this.functionTool != null ) {
this.functionTool.refreshGUI$();
this.functionTool.firePropertyChange$S$O$O("function", null, null);
}break;
case "description":
if (this.functionTool != null ) {
this.functionTool.firePropertyChange$S$O$O("description", null, null);
}}
});

Clazz.newMeth(C$, 'clearSelection$',  function () {
if (!this.haveGUI) return;
this.getFunctionTable$().clearSelection$();
this.getParamTable$().clearSelection$();
this.refreshInstructions$org_opensourcephysics_tools_FunctionEditor$I(null, -1);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
this.lastInstruction=null;
$I$(16).setFonts$java_awt_Container(this);
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description == null  ? "" : this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (desc) {
this.description=desc;
});

Clazz.newMeth(C$, 'getIcon$',  function () {
return this.icon;
});

Clazz.newMeth(C$, 'setIcon$javax_swing_Icon',  function (icon) {
this.icon=icon;
});

Clazz.newMeth(C$, 'refreshFunctions$',  function () {
this.functionEditor.evaluateAll$();
});

Clazz.newMeth(C$, 'setFunctionTool$org_opensourcephysics_tools_FunctionTool',  function (tool) {
this.functionTool=tool;
});

Clazz.newMeth(C$, 'tabToNext$org_opensourcephysics_tools_FunctionEditor',  function (editor) {
if (!this.haveGUI) return;
if (editor === this.functionEditor ) {
this.functionTool.focusHelp$();
} else {
this.functionEditor.tabToNext$();
}});

Clazz.newMeth(C$, 'refreshInstructions$org_opensourcephysics_tools_FunctionEditor$I',  function (source, selectedColumn) {
if (this.instructions == null ) return;
var isError=false;
var s;
if (this.hasCircularErrors$()) {
s=$I$(15).getString$S("FunctionPanel.Instructions.CircularErrors");
isError=true;
} else if (this.hasInvalidExpressions$()) {
s=$I$(15).getString$S("FunctionPanel.Instructions.BadCell");
isError=true;
} else {
s=this.getCustomInstructions$org_opensourcephysics_tools_FunctionEditor$I(source, selectedColumn);
}if (s.equals$O(this.lastInstruction)) return;
this.lastInstruction=s;
this.instructions.setText$S(s);
var doc=this.instructions.getStyledDocument$();
doc.setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(0, s.length$(), doc.getStyle$S(isError ? "red" : "blue"), false);
});

Clazz.newMeth(C$, 'getCustomInstructions$org_opensourcephysics_tools_FunctionEditor$I',  function (source, selectedColumn) {
var s;
if (source != null  && selectedColumn >= 0 ) {
s=$I$(15).getString$S("FunctionPanel.Instructions.EditCell");
if (selectedColumn == 0) {
s+="  " + $I$(15).getString$S("FunctionPanel.Instructions.NameCell");
s+="\n" + $I$(15).getString$S("FunctionPanel.Instructions.EditDescription");
} else {
s+=" " + $I$(15).getString$S("FunctionPanel.Instructions.Help");
}} else {
s=(this.isEmpty$() ? $I$(15).getString$S("FunctionPanel.Instructions.GetStarted") : $I$(15).getString$S("FunctionPanel.Instructions.General") + "  " + $I$(15).getString$S("FunctionPanel.Instructions.EditDescription") );
}return s;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.functionEditor.getObjects$().size$() == 0) && (this.paramEditor.getObjects$().size$() == 0) ;
});

Clazz.newMeth(C$, 'hasInvalidExpressions$',  function () {
return this.functionEditor.containsInvalidExpressions$() || this.paramEditor.containsInvalidExpressions$() ;
});

Clazz.newMeth(C$, 'hasCircularErrors$',  function () {
return !this.functionEditor.circularErrors.isEmpty$() || !this.paramEditor.circularErrors.isEmpty$() ;
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.paramEditor.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.paramEditor.removePropertyChangeListener$java_beans_PropertyChangeListener(this.functionEditor);
this.functionEditor.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.functionEditor.removePropertyChangeListener$java_beans_PropertyChangeListener(this.paramEditor);
this.functionEditor.setParamEditor$org_opensourcephysics_tools_ParamEditor(null);
this.paramEditor.setFunctionEditors$org_opensourcephysics_tools_FunctionEditorA(Clazz.array($I$(3), [0]));
this.functionEditor.setFunctionPanel$org_opensourcephysics_tools_FunctionPanel(null);
this.functionEditor=null;
this.paramEditor.setFunctionPanel$org_opensourcephysics_tools_FunctionPanel(null);
this.paramEditor=null;
this.setFunctionTool$org_opensourcephysics_tools_FunctionTool(null);
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(17).finalized$O(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
