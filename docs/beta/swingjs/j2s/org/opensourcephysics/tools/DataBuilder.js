(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.tools.ResourceLoader','javax.swing.JButton','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.controls.XMLControlElement','javax.swing.JOptionPane','org.opensourcephysics.tools.DataFunctionPanel','org.opensourcephysics.controls.XML','java.io.File','org.opensourcephysics.media.core.MediaRes','java.awt.Component','java.util.ArrayList','org.opensourcephysics.controls.ListChooser']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataBuilder", null, 'org.opensourcephysics.tools.FunctionTool');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dataTool','org.opensourcephysics.tools.DataTool','loadButton','javax.swing.JButton','+saveButton']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_DataTool',  function (tool) {
C$.c$$org_opensourcephysics_tools_DataTool$Z.apply(this, [tool, false]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_DataTool$Z',  function (tool, lazyGUI) {
;C$.superclazz.c$$java_awt_Component$Z$Z.apply(this,[tool, false, lazyGUI]);C$.$init$.apply(this);
this.dataTool=tool;
this.setHelpPath$S("data_builder_help.html");
if (!lazyGUI) this.createGUI$();
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
if (this.haveGUI$()) return;
C$.superclazz.prototype.createGUI$.apply(this, []);
var imageFile="/org/opensourcephysics/resources/tools/images/open.gif";
var openIcon=$I$(1).getImageIcon$S(imageFile);
this.loadButton=Clazz.new_($I$(2,1).c$$javax_swing_Icon,[openIcon]);
this.loadButton.addActionListener$java_awt_event_ActionListener(((P$.DataBuilder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataBuilder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(3,"createChooser$S$S$SA",[$I$(4).getString$S("DataBuilder.Load.Title"), $I$(4).getString$S("FileChooser.Filter.XMLFiles"), Clazz.array(String, -1, ["xml"])]);
var result=chooser.showOpenDialog$java_awt_Component(this.b$['org.opensourcephysics.tools.DataBuilder'].dataTool);
if (result == 0) {
$I$(3).chooserDir=chooser.getCurrentDirectory$().toString();
var control=Clazz.new_([chooser.getSelectedFile$()],$I$(5,1).c$$java_io_File);
if (control.failedToRead$()) {
$I$(6,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.tools.DataBuilder'].dataTool, $I$(4).getString$S("Dialog.Invalid.Message"), $I$(4).getString$S("Dialog.Invalid.Title"), 0]);
return;
}var type=control.getObjectClass$();
if (Clazz.getClass($I$(7)).isAssignableFrom$Class(type)) {
this.b$['org.opensourcephysics.tools.DataBuilder'].chooseDataFunctions$org_opensourcephysics_controls_XMLControl$S$java_util_Collection$java_awt_event_ActionListener.apply(this.b$['org.opensourcephysics.tools.DataBuilder'], [control, "Load", null, ((P$.DataBuilder$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataBuilder$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 1001) {
this.$finals$.control.loadObject$O(this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []));
}});
})()
), Clazz.new_(P$.DataBuilder$1$1.$init$,[this, {control:control}]))]);
} else {
$I$(6,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.tools.DataBuilder'].dataTool, $I$(4).getString$S("DataBuilder.Dialog.WrongType.Message"), $I$(4).getString$S("DataBuilder.Dialog.WrongType.Title"), 0]);
}}});
})()
), Clazz.new_(P$.DataBuilder$1.$init$,[this, null])));
imageFile="/org/opensourcephysics/resources/tools/images/save.gif";
var saveIcon=$I$(1).getImageIcon$S(imageFile);
this.saveButton=Clazz.new_($I$(2,1).c$$javax_swing_Icon,[saveIcon]);
this.saveButton.addActionListener$java_awt_event_ActionListener(((P$.DataBuilder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataBuilder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var control=Clazz.new_([this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], [])],$I$(5,1).c$$O);
this.b$['org.opensourcephysics.tools.DataBuilder'].chooseDataFunctions$org_opensourcephysics_controls_XMLControl$S$java_util_Collection$java_awt_event_ActionListener.apply(this.b$['org.opensourcephysics.tools.DataBuilder'], [control, "Save", null, ((P$.DataBuilder$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataBuilder$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 1001) {
var chooser=$I$(3,"createChooser$S$S$SA",[$I$(4).getString$S("DataBuilder.Save.Title"), $I$(4).getString$S("FileChooser.Filter.XMLFiles"), Clazz.array(String, -1, ["xml"])]);
var result=chooser.showSaveDialog$java_awt_Component(this.b$['org.opensourcephysics.tools.DataBuilder'].dataTool);
if (result == 0) {
$I$(3).chooserDir=chooser.getCurrentDirectory$().toString();
var file=chooser.getSelectedFile$();
var fileName=file.getAbsolutePath$();
if (!"xml".equals$O($I$(8).getExtension$S(fileName))) {
fileName=$I$(8).stripExtension$S(fileName) + ".xml";
file=Clazz.new_($I$(9,1).c$$S,[fileName]);
}if (file.exists$()) {
var selected=$I$(6,"showConfirmDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.tools.DataBuilder'].dataTool, " \"" + file.getName$() + "\" " + $I$(10).getString$S("VideoIO.Dialog.FileExists.Message") , $I$(10).getString$S("VideoIO.Dialog.FileExists.Title"), 2]);
if (selected != 0) {
return;
}}this.$finals$.control.write$S(fileName);
}}});
})()
), Clazz.new_(P$.DataBuilder$2$1.$init$,[this, {control:control}]))]);
});
})()
), Clazz.new_(P$.DataBuilder$2.$init$,[this, null])));
this.setToolbarComponents$java_awt_ComponentA(Clazz.array($I$(11), -1, [this.loadButton, this.saveButton]));
});

Clazz.newMeth(C$, 'setTitles$',  function () {
this.dropdownTipText=$I$(4).getString$S("DataTool.DataBuilder.Dropdown.Tooltip");
this.titleText=$I$(4).getString$S("DataTool.DataBuilder.Title");
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (!this.haveGUI$()) return;
C$.superclazz.prototype.refreshGUI$.apply(this, []);
if (this.loadButton != null ) {
var panel=this.getSelectedPanel$();
this.loadButton.setEnabled$Z(panel != null );
this.saveButton.setEnabled$Z(panel != null );
this.loadButton.setToolTipText$S($I$(4).getString$S("DataBuilder.Button.Load.Tooltip"));
this.saveButton.setToolTipText$S($I$(4).getString$S("DataBuilder.Button.Save.Tooltip"));
}});

Clazz.newMeth(C$, 'refreshPanels$',  function () {
var tabNames=Clazz.new_($I$(12,1));
for (var i=0; i < this.dataTool.tabbedPane.getTabCount$(); i++) {
var tab=this.dataTool.getTab$I(i);
tabNames.add$O(tab.getName$());
if (this.getPanel$S(tab.getName$()) == null ) {
this.addPanel$S$org_opensourcephysics_tools_FunctionPanel(tab.getName$(), Clazz.new_($I$(7,1).c$$org_opensourcephysics_display_DatasetManager,[tab.dataManager]));
}}
var remove=Clazz.new_($I$(12,1));
for (var it=this.trackFunctionPanels.keySet$().iterator$(); it.hasNext$(); ) {
var name=it.next$().toString();
if (!tabNames.contains$O(name)) {
remove.add$O(name);
}}
for (var it=remove.iterator$(); it.hasNext$(); ) {
var name=it.next$().toString();
this.removePanel$S(name);
}
var p=this.getSelectedPanel$();
if (p != null ) {
p.getFunctionEditor$().enableMenuButtons$();
p.getParamEditor$().enableMenuButtons$();
}});

Clazz.newMeth(C$, 'chooseDataFunctions$org_opensourcephysics_controls_XMLControl$S$java_util_Collection$java_awt_event_ActionListener',  function (control, description, selectedFunctions, listener) {
var originals=Clazz.new_($I$(12,1));
var choices=Clazz.new_($I$(12,1));
var names=Clazz.new_($I$(12,1));
var expressions=Clazz.new_($I$(12,1));
var functions=control.getObject$S("functions");
for (var next, $next = functions.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var $function=next;
originals.add$O($function);
choices.add$O($function);
names.add$O($function[0]);
expressions.add$O($function[1]);
}
var selected=Clazz.array(Boolean.TYPE, [choices.size$()]);
for (var i=0; i < selected.length; i++) {
selected[i]=true;
}
var listChooser=Clazz.new_([$I$(4).getString$S("DataBuilder." + description + ".Title" ), $I$(4).getString$S("DataBuilder." + description + ".Message" ), this, ((P$.DataBuilder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataBuilder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 1001) {
for (var next, $next = this.$finals$.originals.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!this.$finals$.choices.contains$O(next)) {
this.$finals$.functions.remove$O(next);
}}
this.$finals$.control.setValue$S$O("functions", this.$finals$.functions);
}this.$finals$.listener.actionPerformed$java_awt_event_ActionEvent(e);
});
})()
), Clazz.new_(P$.DataBuilder$3.$init$,[this, {choices:choices,listener:listener,functions:functions,control:control,originals:originals}]))],$I$(13,1).c$$S$S$javax_swing_JDialog$java_awt_event_ActionListener);
listChooser.setSeparator$S(" = ");
listChooser.choose$java_util_Collection$java_util_Collection$java_util_Collection$java_util_Collection$ZA$ZA(choices, names, expressions, null, selected, null);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
