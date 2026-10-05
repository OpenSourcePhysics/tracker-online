(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.FitBuilder','org.opensourcephysics.controls.XML','java.io.File','java.util.TreeMap','org.opensourcephysics.tools.ToolsRes','java.util.TreeSet','javax.swing.JButton','org.opensourcephysics.tools.UserFunction','org.opensourcephysics.display.TeXParser','java.util.HashMap','java.util.ArrayList','org.opensourcephysics.tools.UserFunctionEditor','org.opensourcephysics.tools.FitFunctionPanel','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.tools.ResourceLoader','java.awt.Component',['javax.swing.JToolBar','.Separator'],'javax.swing.Box','org.opensourcephysics.controls.XMLControlElement','javax.swing.JOptionPane','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.controls.ListChooser',['org.opensourcephysics.tools.FitBuilder','.AutoloadManager'],'java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FitBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.tools.FunctionTool');
C$.$classes$=[['AutoloadManager',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.addedFits=Clazz.new_($I$(7,1));
},1);

C$.$fields$=[['S',['defaultFitName'],'O',['newFitButton','javax.swing.JButton','+deleteFitButton','+cloneFitButton','+loadButton','+saveButton','+autoloadButton','myParent','java.awt.Component','addedFits','java.util.TreeSet','autoloadManager','org.opensourcephysics.tools.FitBuilder.AutoloadManager']]
,['O',['xmlFilter','java.io.FileFilter','initialAutoloadSearchPaths','java.util.Collection','autoloadExclusionsMap','java.util.Map','preferredAutoloadSearchPaths','String[]','chooser','javajs.async.AsyncFileChooser']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (c) {
C$.c$$java_awt_Component$Z.apply(this, [c, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$Z',  function (c, lazyGUI) {
;C$.superclazz.c$$java_awt_Component$Z$Z.apply(this,[c, true, lazyGUI]);C$.$init$.apply(this);
this.myParent=c;
if (!lazyGUI) this.createGUI$();
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
if (this.haveGUI$()) return;
C$.superclazz.prototype.createGUI$.apply(this, []);
this.newFitButton=Clazz.new_([$I$(6).getString$S("DatasetCurveFitter.Button.NewFit.Text")],$I$(8,1).c$$S);
this.newFitButton.setToolTipText$S($I$(6).getString$S("DatasetCurveFitter.Button.NewFit.Tooltip"));
this.newFitButton.addActionListener$java_awt_event_ActionListener(((P$.FitBuilder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.tools.FunctionTool'].getUniqueName$S.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], [$I$(6).getString$S("DatasetCurveFitter.NewFit.Name")]);
var f=Clazz.new_($I$(9,1).c$$S,[name]);
var dataset=null;
var fitter=this.b$['org.opensourcephysics.tools.FitBuilder'].getSelectedCurveFitter$.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], []);
if (fitter != null ) {
dataset=fitter.getData$();
}var $var=(dataset == null ) ? "x" : $I$(10,"removeSubscripting$S",[dataset.getColumnName$I(0)]);
f.setExpression$S$SA("0", Clazz.array(String, -1, [$var]));
this.b$['org.opensourcephysics.tools.FitBuilder'].addFitFunctionPanel$org_opensourcephysics_tools_UserFunction.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], [f]);
});
})()
), Clazz.new_(P$.FitBuilder$2.$init$,[this, null])));
this.deleteFitButton=Clazz.new_([$I$(6).getString$S("DatasetCurveFitter.Button.DeleteFit.Text")],$I$(8,1).c$$S);
this.deleteFitButton.setToolTipText$S($I$(6).getString$S("DatasetCurveFitter.Button.DeleteFit.Tooltip"));
this.deleteFitButton.addActionListener$java_awt_event_ActionListener(((P$.FitBuilder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedName$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []);
this.b$['org.opensourcephysics.tools.FunctionTool'].removePanel$S.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], [name]);
});
})()
), Clazz.new_(P$.FitBuilder$3.$init$,[this, null])));
this.cloneFitButton=Clazz.new_([$I$(6).getString$S("DatasetCurveFitter.Button.Clone.Text")],$I$(8,1).c$$S);
this.cloneFitButton.setToolTipText$S($I$(6).getString$S("DatasetCurveFitter.Button.Clone.Tooltip"));
this.cloneFitButton.addActionListener$java_awt_event_ActionListener(((P$.FitBuilder$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var fits=Clazz.new_($I$(11,1));
var fitnames=Clazz.new_($I$(12,1));
for (var fitter, $fitter = this.b$['org.opensourcephysics.tools.FitBuilder'].curveFitters.iterator$(); $fitter.hasNext$()&&((fitter=($fitter.next$())),1);) {
fitter.getFits$java_util_Map$java_util_ArrayList(fits, fitnames);
}
var listener=((P$.FitBuilder$4$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var name, $name = this.$finals$.fitnames.iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (name.equals$O(e.getActionCommand$())) {
var fitter=this.b$['org.opensourcephysics.tools.FitBuilder'].getSelectedCurveFitter$.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], []);
if (fitter != null ) {
var f=this.$finals$.fits.get$O(name);
var uf=fitter.createClone$org_opensourcephysics_tools_KnownFunction$S(f, name);
var editor=Clazz.new_($I$(13,1));
editor.setMainFunctions$org_opensourcephysics_tools_UserFunctionA(Clazz.array($I$(9), -1, [uf]));
var panel=Clazz.new_($I$(14,1).c$$org_opensourcephysics_tools_UserFunctionEditor,[editor]);
this.b$['org.opensourcephysics.tools.FunctionTool'].addPanel$S$org_opensourcephysics_tools_FunctionPanel.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], [uf.getName$(), panel]);
}}}
});
})()
), Clazz.new_(P$.FitBuilder$4$1.$init$,[this, {fitnames:fitnames,fits:fits}]));
var popup=Clazz.new_($I$(15,1));
for (var name, $name = fitnames.iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var item=Clazz.new_($I$(16,1).c$$S,[name]);
item.setActionCommand$S(name);
item.addActionListener$java_awt_event_ActionListener(listener);
popup.add$javax_swing_JMenuItem(item);
}
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.FitBuilder'].cloneFitButton, 0, this.b$['org.opensourcephysics.tools.FitBuilder'].cloneFitButton.getHeight$());
});
})()
), Clazz.new_(P$.FitBuilder$4.$init$,[this, null])));
var imageFile="/org/opensourcephysics/resources/tools/images/open.gif";
var openIcon=$I$(17).getImageIcon$S(imageFile);
this.loadButton=Clazz.new_($I$(8,1).c$$javax_swing_Icon,[openIcon]);
this.loadButton.addActionListener$java_awt_event_ActionListener(((P$.FitBuilder$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.loadFits.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], []);
});
})()
), Clazz.new_(P$.FitBuilder$5.$init$,[this, null])));
imageFile="/org/opensourcephysics/resources/tools/images/save.gif";
var saveIcon=$I$(17).getImageIcon$S(imageFile);
this.saveButton=Clazz.new_($I$(8,1).c$$javax_swing_Icon,[saveIcon]);
this.saveButton.addActionListener$java_awt_event_ActionListener(((P$.FitBuilder$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.saveFits.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], []);
});
})()
), Clazz.new_(P$.FitBuilder$6.$init$,[this, null])));
this.autoloadButton=Clazz.new_($I$(8,1));
this.autoloadButton.addActionListener$java_awt_event_ActionListener(((P$.FitBuilder$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var manager=this.b$['org.opensourcephysics.tools.FitBuilder'].getAutoloadManager$.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], []);
manager.refreshAutoloadData$();
manager.setVisible$Z(true);
});
})()
), Clazz.new_(P$.FitBuilder$7.$init$,[this, null])));
this.setToolbarComponents$java_awt_ComponentA(Clazz.array($I$(18), -1, [this.loadButton, this.saveButton, Clazz.new_($I$(19,1)), this.newFitButton, this.cloneFitButton, this.deleteFitButton, $I$(20).createHorizontalGlue$(), this.autoloadButton]));
});

Clazz.newMeth(C$, 'getSelectedCurveFitter$',  function () {
var win=this.getOwner$();
if (win != null  && Clazz.instanceOf(win, "org.opensourcephysics.tools.DataTool") ) {
var dataTool=win;
var tab=dataTool.getSelectedTab$();
if (tab != null ) {
return tab.getCurveFitter$();
}}return null;
});

Clazz.newMeth(C$, 'refreshDropdown$S',  function (name) {
if (name == null ) {
name=this.defaultFitName;
}this.deleteFitButton.setEnabled$Z(!this.getPanelNames$().isEmpty$());
if (this.getPanelNames$().isEmpty$()) {
var label=$I$(6).getString$S("FitFunctionPanel.Label");
this.dropdownLabelText=(label + ":");
} else {
this.dropdownLabelText=null;
}C$.superclazz.prototype.refreshDropdown$S.apply(this, [name]);
});

Clazz.newMeth(C$, 'addFitFunction$org_opensourcephysics_tools_KnownFunction',  function (f) {
if (Clazz.instanceOf(f, "org.opensourcephysics.tools.UserFunction")) {
var name=f.getName$();
if (this.addedFits.contains$O(name)) return true;
for (var next, $next = this.getPanelNames$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var panel=this.getPanel$S(next);
if (name.equals$O(panel.originalName)) {
return false;
}}
var panel=this.addFitFunctionPanel$org_opensourcephysics_tools_UserFunction(f);
panel.originalName=name;
this.addedFits.add$O(name);
} else if (Clazz.instanceOf(f, "org.opensourcephysics.tools.KnownPolynomial")) {
var uf=Clazz.new_($I$(9,1).c$$org_opensourcephysics_tools_KnownPolynomial,[f]);
return this.addFitFunction$org_opensourcephysics_tools_KnownFunction(uf);
}return true;
});

Clazz.newMeth(C$, 'loadFits',  function () {
if (C$.chooser == null ) {
C$.chooser=$I$(1).getChooser$();
for (var filter, $filter = 0, $$filter = C$.chooser.getChoosableFileFilters$(); $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) {
if (filter.getDescription$().toLowerCase$().indexOf$S("xml") > -1) {
C$.chooser.setFileFilter$javax_swing_filechooser_FileFilter(filter);
break;
}}
}C$.chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(this, ((P$.FitBuilder$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(1).chooserDir=$I$(2).chooser.getCurrentDirectory$().toString();
p$1.loadFits$java_io_File$Z.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], [$I$(2).chooser.getSelectedFile$(), false]);
});
})()
), Clazz.new_(P$.FitBuilder$8.$init$,[this, null])), null);
return null;
}, p$1);

Clazz.newMeth(C$, 'loadFits$java_io_File$Z',  function (path, loadAll) {
if (path == null ) {
p$1.loadFits.apply(this, []);
return;
}var control=Clazz.new_($I$(21,1).c$$java_io_File,[path]);
if (control.failedToRead$()) {
$I$(22,"showMessageDialog$java_awt_Component$O$S$I",[this, $I$(6).getString$S("Dialog.Invalid.Message"), $I$(6).getString$S("Dialog.Invalid.Title"), 0]);
return;
}var type=control.getObjectClass$();
if (type != null  && Clazz.getClass(C$).isAssignableFrom$Class(type) ) {
if (loadAll) control.loadObject$O(this);
 else this.chooseFitFunctions$org_opensourcephysics_controls_XMLControl$S$java_awt_event_ActionListener(control, "Load", ((P$.FitBuilder$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.control.loadObject$O(this.b$['org.opensourcephysics.tools.FitBuilder']);
});
})()
), Clazz.new_(P$.FitBuilder$9.$init$,[this, {control:control}])));
} else {
$I$(22,"showMessageDialog$java_awt_Component$O$S$I",[this, $I$(6).getString$S("DatasetCurveFitter.FitBuilder.Dialog.WrongType.Message"), $I$(6).getString$S("DatasetCurveFitter.FitBuilder.Dialog.WrongType.Title"), 0]);
}}, p$1);

Clazz.newMeth(C$, 'saveFits',  function () {
var control=Clazz.new_($I$(21,1).c$$O,[this]);
this.chooseFitFunctions$org_opensourcephysics_controls_XMLControl$S$java_awt_event_ActionListener(control, "Save", ((P$.FitBuilder$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ($I$(2).chooser == null ) {
$I$(2).chooser=$I$(1).getChooser$();
for (var filter, $filter = 0, $$filter = $I$(2).chooser.getChoosableFileFilters$(); $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) {
if (filter.getDescription$().toLowerCase$().indexOf$S("xml") > -1) {
$I$(2).chooser.setFileFilter$javax_swing_filechooser_FileFilter(filter);
break;
}}
}$I$(23,"setFonts$O$I",[$I$(2).chooser, $I$(23).getLevel$()]);
var result=$I$(2).chooser.showSaveDialog$java_awt_Component(this.b$['org.opensourcephysics.tools.FitBuilder']);
if (result == 0) {
$I$(1).chooserDir=$I$(2).chooser.getCurrentDirectory$().toString();
var file=$I$(2).chooser.getSelectedFile$();
if (file.exists$()) {
var isSelected=$I$(22,"showConfirmDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.tools.FitBuilder'], $I$(6).getString$S("Tool.Dialog.ReplaceFile.Message") + " " + file.getName$() + "?" , $I$(6).getString$S("Tool.Dialog.ReplaceFile.Title"), 1]);
if (isSelected != 0) {
return;
}}p$1.saveFits$S$org_opensourcephysics_controls_XMLControl.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], [file.getAbsolutePath$(), this.$finals$.control]);
}});
})()
), Clazz.new_(P$.FitBuilder$10.$init$,[this, {control:control}])));
}, p$1);

Clazz.newMeth(C$, 'saveFits$S$org_opensourcephysics_controls_XMLControl',  function (path, control) {
if (path == null ) {
p$1.saveFits.apply(this, []);
return;
}if ($I$(3).getExtension$S(path) == null ) {
path+=".xml";
}if (control == null  || control.getObjectClass$() !== this.getClass$()  ) {
control=Clazz.new_($I$(21,1).c$$O,[this]);
}control.write$S(path);
}, p$1);

Clazz.newMeth(C$, 'autoloadFits$',  function () {
if (this.myParent != null  && Clazz.instanceOf(this.myParent, "org.opensourcephysics.tools.DataTool") ) {
for (var dir, $dir = C$.getInitialSearchPaths$().iterator$(); $dir.hasNext$()&&((dir=($dir.next$())),1);) {
p$1.autoloadFits$S.apply(this, [dir]);
}
}});

Clazz.newMeth(C$, 'autoloadFits$S',  function (dirPath) {
if (dirPath == null ) return;
var dir=Clazz.new_($I$(4,1).c$$S,[dirPath]);
if (!dir.exists$()) return;
var files=dir.listFiles$java_io_FileFilter(C$.xmlFilter);
if (files != null ) {
for (var file, $file = 0, $$file = files; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
var control=Clazz.new_($I$(21,1).c$$java_io_File,[file]);
if (control.failedToRead$()) {
continue;
}var type=control.getObjectClass$();
if (type != null  && Clazz.getClass(C$).isAssignableFrom$Class(type) ) {
var copyControl=Clazz.new_($I$(21,1).c$$org_opensourcephysics_controls_XMLControl,[control]);
var filePath=$I$(3,"forwardSlash$S",[file.getAbsolutePath$()]);
this.eliminateExcludedFunctions$org_opensourcephysics_controls_XMLControl$S(copyControl, filePath);
copyControl.loadObject$O(this);
}}
}}, p$1);

Clazz.newMeth(C$, 'findFitFunctions$S',  function (dirPath) {
var results=Clazz.new_($I$(5,1));
if (dirPath == null ) return results;
var dir=Clazz.new_($I$(4,1).c$$S,[dirPath]);
if (!dir.exists$()) return results;
var files=dir.listFiles$java_io_FileFilter(C$.xmlFilter);
if (files != null ) {
for (var file, $file = 0, $$file = files; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
var control=Clazz.new_($I$(21,1).c$$java_io_File,[file]);
if (control.failedToRead$()) {
continue;
}var type=control.getObjectClass$();
if (type != null  && Clazz.getClass(C$).isAssignableFrom$Class(type) ) {
var functions=Clazz.new_($I$(12,1));
for (var next, $next = control.getPropsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.getPropertyName$().equals$O("functions")) {
var panels=next.getChildControls$();
for (var panelControl, $panelControl = 0, $$panelControl = panels; $panelControl<$$panelControl.length&&((panelControl=($$panelControl[$panelControl])),1);$panelControl++) {
var name=panelControl.getString$S("name");
var expression=panelControl.getString$S("description");
var data=Clazz.array(String, -1, [name, expression]);
functions.add$O(data);
}
break;
}}
results.put$O$O(file.getName$(), functions);
}}
}return results;
}, p$1);

Clazz.newMeth(C$, 'eliminateExcludedFunctions$org_opensourcephysics_controls_XMLControl$S',  function (fitBuilderControl, filePath) {
for (var obj, $obj = fitBuilderControl.getPropsRaw$().iterator$(); $obj.hasNext$()&&((obj=($obj.next$())),1);) {
if (obj.getPropertyName$().equals$O("functions")) {
var prop=obj;
var items=prop.getPropertyContent$();
var toRemove=Clazz.new_($I$(12,1));
var panels=prop.getChildControls$();
for (var i=0; i < panels.length; i++) {
var panelControl=panels[i];
var name=panelControl.getString$S("name");
if (p$1.isFunctionExcluded$S$S.apply(this, [filePath, name])) {
toRemove.add$O(items.get$I(i));
}}
for (var next, $next = toRemove.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
items.remove$O(next);
}
}}
});

Clazz.newMeth(C$, 'isFunctionExcluded$S$S',  function (filePath, functionName) {
var functions=C$.autoloadExclusionsMap.get$O(filePath);
if (functions == null ) return false;
for (var name, $name = 0, $$name = functions; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
if (name.equals$O("*")) return true;
if (name.equals$O(functionName)) return true;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'setTitles$',  function () {
if (this.getPanelNames$().isEmpty$()) {
var label=$I$(6).getString$S("FitFunctionPanel.Label");
this.dropdownLabelText=(label + ":");
} else {
this.dropdownLabelText=null;
}this.titleText=$I$(6).getString$S("DatasetCurveFitter.FitBuilder.Title");
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (!this.haveGUI$()) return;
C$.superclazz.prototype.refreshGUI$.apply(this, []);
if (this.deleteFitButton != null ) {
this.saveButton.setEnabled$Z(!this.getPanelNames$().isEmpty$());
this.loadButton.setToolTipText$S($I$(6).getString$S("DatasetCurveFitter.FitBuilder.Button.Load.Tooltip"));
this.saveButton.setToolTipText$S($I$(6).getString$S("DatasetCurveFitter.FitBuilder.Button.Save.Tooltip"));
var panel=this.getSelectedPanel$();
this.deleteFitButton.setEnabled$Z(panel != null  && !this.getPanelNames$().isEmpty$()  && panel.originalName == null  );
this.newFitButton.setText$S($I$(6).getString$S("DatasetCurveFitter.Button.NewFit.Text"));
this.newFitButton.setToolTipText$S($I$(6).getString$S("DatasetCurveFitter.Button.NewFit.Tooltip"));
this.deleteFitButton.setText$S($I$(6).getString$S("DatasetCurveFitter.Button.DeleteFit.Text"));
this.deleteFitButton.setToolTipText$S($I$(6).getString$S("DatasetCurveFitter.Button.DeleteFit.Tooltip"));
var fitter=this.getSelectedCurveFitter$();
this.cloneFitButton.setEnabled$Z(fitter != null );
this.autoloadButton.setText$S($I$(6).getString$S("FitBuilder.Button.Autoload") + "...");
this.autoloadButton.setToolTipText$S($I$(6).getString$S("FitBuilder.Button.Autoload.Tooltip"));
}});

Clazz.newMeth(C$, 'chooseFitFunctions$org_opensourcephysics_controls_XMLControl$S$java_awt_event_ActionListener',  function (control, description, listener) {
var originals=Clazz.new_($I$(12,1));
var choices=Clazz.new_($I$(12,1));
var names=Clazz.new_($I$(12,1));
var expressions=Clazz.new_($I$(12,1));
for (var prop, $prop = control.getPropsRaw$().iterator$(); $prop.hasNext$()&&((prop=($prop.next$())),1);) {
for (var obj, $obj = prop.getPropertyContent$().iterator$(); $obj.hasNext$()&&((obj=($obj.next$())),1);) {
if (Clazz.instanceOf(obj, "org.opensourcephysics.controls.XMLProperty")) {
var f=obj;
var $function=f.getChildControls$()[0];
originals.add$O($function);
choices.add$O($function);
names.add$O($function.getString$S("name"));
var desc=$function.getString$S("description");
expressions.add$O(desc);
}}
}
var selected=Clazz.array(Boolean.TYPE, [choices.size$()]);
for (var i=0; i < selected.length; i++) {
selected[i]=true;
}
var listChooser=Clazz.new_([$I$(6).getString$S("DatasetCurveFitter.FitBuilder." + description + ".Title" ), $I$(6).getString$S("DatasetCurveFitter.FitBuilder." + description + ".Message" ), this, ((P$.FitBuilder$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 1001) {
for (var next, $next = this.$finals$.originals.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!this.$finals$.choices.contains$O(next)) {
var prop=next.getParentProperty$();
var parent=prop.getParentProperty$();
parent.getPropertyContent$().remove$O(prop);
}}
}this.$finals$.listener.actionPerformed$java_awt_event_ActionEvent(e);
});
})()
), Clazz.new_(P$.FitBuilder$11.$init$,[this, {choices:choices,listener:listener,originals:originals}]))],$I$(24,1).c$$S$S$javax_swing_JDialog$java_awt_event_ActionListener);
listChooser.choose$java_util_Collection$java_util_Collection$java_util_Collection$java_util_Collection$ZA$ZA(choices, names, expressions, null, selected, null);
});

Clazz.newMeth(C$, 'addFitFunctionPanel$org_opensourcephysics_tools_UserFunction',  function (f) {
var editor=Clazz.new_($I$(13,1));
editor.setMainFunctions$org_opensourcephysics_tools_UserFunctionA(Clazz.array($I$(9), -1, [f]));
var panel=Clazz.new_($I$(14,1).c$$org_opensourcephysics_tools_UserFunctionEditor,[editor]);
this.addPanel$S$org_opensourcephysics_tools_FunctionPanel(f.getName$(), panel);
return panel;
});

Clazz.newMeth(C$, 'getAutoloadManager$',  function () {
if (this.autoloadManager == null ) {
this.autoloadManager=Clazz.new_($I$(25,1).c$$javax_swing_JDialog,[this, null, this]);
var dim=$I$(26).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.autoloadManager.getBounds$().width)/2|0);
var y=((dim.height - this.autoloadManager.getBounds$().height)/2|0);
this.autoloadManager.setLocation$I$I(x, y);
}this.autoloadManager.setFontLevel$I($I$(23).getLevel$());
return this.autoloadManager;
});

Clazz.newMeth(C$, 'localize$S',  function (functionName) {
var s=$I$(6).getString$S("Function." + functionName + ".Name" );
return (s.startsWith$S("!") ? functionName : s);
}, 1);

Clazz.newMeth(C$, 'getInitialSearchPaths$',  function () {
if (C$.initialAutoloadSearchPaths.isEmpty$()) {
if (C$.preferredAutoloadSearchPaths != null ) {
for (var next, $next = 0, $$next = C$.preferredAutoloadSearchPaths; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
C$.initialAutoloadSearchPaths.add$O(next);
}
} else {
for (var next, $next = $I$(1).getDefaultSearchPaths$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
C$.initialAutoloadSearchPaths.add$O(next);
}
}}return C$.initialAutoloadSearchPaths;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.initialAutoloadSearchPaths=Clazz.new_($I$(7,1));
C$.autoloadExclusionsMap=Clazz.new_($I$(5,1));
{
C$.xmlFilter=((P$.FitBuilder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FitBuilder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FileFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null  || f.isDirectory$() ) return false;
var ext=$I$(3,"getExtension$S",[f.getName$()]);
if (ext != null  && "xml".equals$O(ext.toLowerCase$()) ) return true;
return false;
});
})()
), Clazz.new_(P$.FitBuilder$1.$init$,[this, null]));
C$.preferredAutoloadSearchPaths=$I$(1).getPreference$S("autoload_search_paths");
var autoloadData=$I$(1).getPreference$S("autoload_exclusions");
if (autoloadData != null ) {
for (var next, $next = 0, $$next = autoloadData; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
var filePath=$I$(3).forwardSlash$S(next[0]);
var functions=Clazz.array(String, [next.length - 1]);
System.arraycopy$O$I$O$I$I(next, 1, functions, 0, functions.length);
C$.autoloadExclusionsMap.put$O$O(filePath, functions);
}
}};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FitBuilder, "AutoloadManager", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.tools.AbstractAutoloadManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_JDialog',  function (dialog) {
;C$.superclazz.c$$javax_swing_JDialog.apply(this,[dialog]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (!vis) {
var name=this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedDropdownName$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []);
for (var dir, $dir = this.getSearchPaths$().iterator$(); $dir.hasNext$()&&((dir=($dir.next$())),1);) {
p$1.autoloadFits$S.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], [dir]);
}
this.b$['org.opensourcephysics.tools.FitBuilder'].refreshDropdown$S.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], [name]);
var searchPaths=this.getSearchPaths$();
var defaultPaths=$I$(1).getDefaultSearchPaths$();
var isDefault=searchPaths.size$() == defaultPaths.size$();
for (var next, $next = searchPaths.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
isDefault=isDefault && defaultPaths.contains$O(next) ;
}
if (isDefault) {
$I$(2).preferredAutoloadSearchPaths=null;
} else {
$I$(2).preferredAutoloadSearchPaths=searchPaths.toArray$OA(Clazz.array(String, [searchPaths.size$()]));
}$I$(1,"setPreference$S$O",["autoload_search_paths", $I$(2).preferredAutoloadSearchPaths]);
for (var it=this.getExclusionsMap$().keySet$().iterator$(); it.hasNext$(); ) {
var filePath=it.next$();
var parentPath=$I$(3).getDirectoryPath$S(filePath);
var keep=false;
for (var dir, $dir = searchPaths.iterator$(); $dir.hasNext$()&&((dir=($dir.next$())),1);) {
keep=keep || parentPath.equals$O(dir) ;
}
if (!keep || !Clazz.new_($I$(4,1).c$$S,[filePath]).exists$() ) {
it.remove$();
}}
if (this.getExclusionsMap$().isEmpty$()) {
$I$(1).setPreference$S$O("autoload_exclusions", null);
} else {
var autoloadData=Clazz.array(String, [this.getExclusionsMap$().size$(), null]);
var i=0;
for (var filePath, $filePath = this.getExclusionsMap$().keySet$().iterator$(); $filePath.hasNext$()&&((filePath=($filePath.next$())),1);) {
var functions=this.getExclusionsMap$().get$O(filePath);
var fileAndFunctions=Clazz.array(String, [functions.length + 1]);
fileAndFunctions[0]=filePath;
System.arraycopy$O$I$O$I$I(functions, 0, fileAndFunctions, 1, functions.length);
autoloadData[i]=fileAndFunctions;
++i;
}
$I$(1).setPreference$S$O("autoload_exclusions", autoloadData);
}$I$(1).savePreferences$();
}});

Clazz.newMeth(C$, 'getSearchPaths$',  function () {
var paths=C$.superclazz.prototype.getSearchPaths$.apply(this, []);
if (paths.isEmpty$() && !this.$initialized ) {
this.$initialized=true;
for (var next, $next = $I$(2).getInitialSearchPaths$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
paths.add$O(next);
this.addSearchPath$S(next);
}
}return paths;
});

Clazz.newMeth(C$, 'refreshAutoloadData$',  function () {
var data=Clazz.new_($I$(5,1));
for (var path, $path = this.getSearchPaths$().iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var functionMap=p$1.findFitFunctions$S.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], [path]);
data.put$O$O(path, functionMap);
}
this.setAutoloadData$java_util_Map(data);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.refreshAutoloadData$();
C$.superclazz.prototype.refreshGUI$.apply(this, []);
var title=this.b$['org.opensourcephysics.tools.FitBuilder'].getTitle$.apply(this.b$['org.opensourcephysics.tools.FitBuilder'], []) + " " + this.getTitle$() ;
this.setTitle$S(title);
this.setInstructions$S($I$(6).getString$S("FitBuilder.Instructions.SelectToAutoload") + "\n\n" + $I$(6).getString$S("FitBuilder.Instructions.WhereDefined") + " " + $I$(6).getString$S("FitBuilder.Instructions.HowToAddFunction") + " " + $I$(6).getString$S("FitBuilder.Instructions.HowToAddDirectory") );
});

Clazz.newMeth(C$, 'getExclusionsMap$',  function () {
return $I$(2).autoloadExclusionsMap;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
