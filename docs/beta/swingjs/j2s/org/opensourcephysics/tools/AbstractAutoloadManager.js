(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.tools.ToolsRes','java.util.ArrayList','java.io.File','org.opensourcephysics.controls.XML','java.util.HashSet','java.util.TreeSet','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.DefaultListModel','javax.swing.JList','javax.swing.JScrollPane','java.awt.Dimension','javax.swing.JButton','javax.swing.JFileChooser','org.opensourcephysics.display.OSPRuntime','javax.swing.filechooser.FileFilter','org.opensourcephysics.tools.FontSizer','javax.swing.JLabel','javax.swing.JTextArea','javax.swing.BorderFactory','java.awt.Color','javax.swing.Box',['org.opensourcephysics.tools.AbstractAutoloadManager','.SearchPathDialog'],'java.util.TreeMap',['org.opensourcephysics.tools.AbstractAutoloadManager','.AutoloadFileCheckbox'],['org.opensourcephysics.tools.AbstractAutoloadManager','.AutoloadFunctionCheckbox']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractAutoloadManager", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['AutoloadFunctionCheckbox',2],['AutoloadFileCheckbox',2],['SearchPathDialog',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.searchPathChooserDir=$I$(15).getUserHome$();
this.searchPaths=Clazz.new_($I$(6,1));
this.defaultSize=Clazz.new_($I$(12,1).c$$I$I,[450, 400]);
this.inset0=6;
this.inset1=20;
this.inset2=40;
this.refreshing=false;
this.$initialized=false;
},1);

C$.$fields$=[['Z',['refreshing','$initialized'],'I',['inset0','inset1','inset2'],'S',['searchPathChooserDir'],'O',['searchPathDialog','org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog','searchPaths','java.util.Collection','functionPanel','javax.swing.JPanel','+instructionPanel','functionBox','javax.swing.Box','lightFont','java.awt.Font','+heavyFont','closeButton','javax.swing.JButton','+searchPathsButton','instructionArea','javax.swing.JTextArea','defaultSize','java.awt.Dimension','autoloadData','java.util.Map']]]

Clazz.newMeth(C$, 'c$$javax_swing_JDialog',  function (dialog) {
;C$.superclazz.c$$java_awt_Dialog$Z.apply(this,[dialog, true]);C$.$init$.apply(this);
this.setDefaultCloseOperation$I(1);
this.createGUI$();
var dim=Clazz.new_($I$(12,1).c$$java_awt_Dimension,[this.defaultSize]);
var factor=1 + $I$(17).getLevel$() * 0.25;
dim.width=((dim.width * factor)|0);
dim.height=((dim.height * factor)|0);
this.setSize$java_awt_Dimension(dim);
}, 1);

Clazz.newMeth(C$, 'setAutoloadData$java_util_Map',  function (data) {
this.autoloadData=data;
this.refreshFunctionList$();
});

Clazz.newMeth(C$, 'setInstructions$S',  function (instructions) {
this.instructionArea.setText$S(instructions);
if (instructions != null ) {
this.getContentPane$().add$java_awt_Component$O(this.instructionPanel, "North");
} else {
this.getContentPane$().remove$java_awt_Component(this.instructionPanel);
}});

Clazz.newMeth(C$, 'addSearchPath$S',  function (dir) {
this.searchPaths.add$O($I$(4).forwardSlash$S(dir));
});

Clazz.newMeth(C$, 'getSearchPaths$',  function () {
var paths=Clazz.new_($I$(6,1));
paths.addAll$java_util_Collection(this.searchPaths);
return paths;
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.heavyFont=Clazz.new_($I$(18,1)).getFont$().deriveFont$I(1);
this.lightFont=this.heavyFont.deriveFont$I(0);
this.instructionArea=Clazz.new_($I$(19,1));
this.instructionArea.setEditable$Z(false);
this.instructionArea.setLineWrap$Z(true);
this.instructionArea.setWrapStyleWord$Z(true);
var etched=$I$(20).createEtchedBorder$();
var empty=$I$(20).createEmptyBorder$I$I$I$I(2, 4, 2, 4);
this.instructionArea.setBorder$javax_swing_border_Border($I$(20).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, empty));
this.instructionArea.setForeground$java_awt_Color($I$(21).blue);
this.instructionPanel=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.instructionPanel.setBorder$javax_swing_border_Border($I$(20).createEmptyBorder$I$I$I$I(6, 6, 6, 6));
this.instructionPanel.add$java_awt_Component$O(this.instructionArea, "Center");
this.functionPanel=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.functionBox=$I$(22).createVerticalBox$();
this.functionBox.setBackground$java_awt_Color($I$(21).white);
this.functionBox.setOpaque$Z(true);
this.refreshFunctionList$();
var scroller=Clazz.new_($I$(11,1).c$$java_awt_Component,[this.functionBox]);
scroller.getVerticalScrollBar$().setUnitIncrement$I(8);
this.functionPanel.add$java_awt_Component$O(scroller, "Center");
this.functionPanel.setBorder$javax_swing_border_Border($I$(20).createEmptyBorder$I$I$I$I(0, 6, 0, 6));
this.closeButton=Clazz.new_($I$(13,1));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.AbstractAutoloadManager$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAutoloadManager$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.AbstractAutoloadManager$1.$init$,[this, null])));
this.searchPathsButton=Clazz.new_($I$(13,1));
this.searchPathsButton.addActionListener$java_awt_event_ActionListener(((P$.AbstractAutoloadManager$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAutoloadManager$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPathDialog == null ) {
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPathDialog=Clazz.new_($I$(23,1),[this, null]);
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPathDialog.setLocationRelativeTo$java_awt_Component(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager']);
}$I$(17,"setFonts$O$I",[this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPathDialog, $I$(17).getLevel$()]);
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPathDialog.refreshGUI$();
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPathDialog.refreshFileList$();
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPathDialog.setVisible$Z(true);
});
})()
), Clazz.new_(P$.AbstractAutoloadManager$2.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(7,1));
buttonbar.add$java_awt_Component(this.searchPathsButton);
buttonbar.add$java_awt_Component(this.closeButton);
var contentPane=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
contentPane.add$java_awt_Component$O(this.functionPanel, "Center");
contentPane.add$java_awt_Component$O(buttonbar, "South");
this.refreshGUI$();
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setTitle$S($I$(1).getString$S("AutoloadManager.Title"));
this.closeButton.setText$S($I$(1).getString$S("Button.OK"));
this.searchPathsButton.setText$S($I$(1).getString$S("AutoloadManager.Button.SearchPaths") + "...");
this.refreshFunctionList$();
});

Clazz.newMeth(C$, 'refreshFunctionList$',  function () {
this.refreshing=true;
this.functionBox.removeAll$();
if (this.autoloadData == null ) return;
var directoryTitle=$I$(1).getString$S("AutoloadManager.Directory") + ": ";
for (var dir, $dir = this.autoloadData.keySet$().iterator$(); $dir.hasNext$()&&((dir=($dir.next$())),1);) {
var dirBox=$I$(22).createVerticalBox$();
var border=$I$(20,"createTitledBorder$S",[directoryTitle + $I$(4).forwardSlash$S(dir)]);
var titleFont=$I$(17,"getResizedFont$java_awt_Font$I",[this.heavyFont, $I$(17).getLevel$()]);
border.setTitleFont$java_awt_Font(titleFont);
var spacer=$I$(20).createEmptyBorder$I$I$I$I(6, 0, 6, 0);
dirBox.setBorder$javax_swing_border_Border($I$(20).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(spacer, border));
this.functionBox.add$java_awt_Component(dirBox);
var functionMap=this.autoloadData.get$O(dir);
var lowercaseNames=Clazz.new_($I$(24,1));
for (var fileName, $fileName = functionMap.keySet$().iterator$(); $fileName.hasNext$()&&((fileName=($fileName.next$())),1);) {
lowercaseNames.put$O$O(fileName.toLowerCase$(), fileName);
}
for (var lowercase, $lowercase = lowercaseNames.keySet$().iterator$(); $lowercase.hasNext$()&&((lowercase=($lowercase.next$())),1);) {
var top=dirBox.getComponentCount$() == 0 ? 0 : 10;
var fileName=lowercaseNames.get$O(lowercase);
var file=Clazz.new_($I$(3,1).c$$S$S,[dir, fileName]);
var filePath=$I$(4,"forwardSlash$S",[file.getAbsolutePath$()]);
var fileCheckbox=Clazz.new_($I$(25,1).c$$S$S,[this, null, dir, fileName]);
fileCheckbox.setBorder$javax_swing_border_Border($I$(20).createEmptyBorder$I$I$I$I(top, this.inset1, 2, 0));
fileCheckbox.setFont$java_awt_Font(this.heavyFont);
fileCheckbox.setSelected$Z(this.isFileSelected$S(filePath));
var bar=$I$(22).createHorizontalBox$();
bar.add$java_awt_Component(fileCheckbox);
bar.add$java_awt_Component($I$(22).createHorizontalGlue$());
dirBox.add$java_awt_Component(bar);
var empty=$I$(20).createEmptyBorder$I$I$I$I(0, 0, 0, 40);
var functionList=functionMap.get$O(fileName);
if (functionList.isEmpty$()) {
var labelBox=p$2.getEmptyMessage$I.apply(this, [this.inset2]);
dirBox.add$java_awt_Component(labelBox);
}for (var f, $f = functionList.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
var label=null;
if (f.length > 3) {
var s="[" + f[3] + "]" ;
label=Clazz.new_($I$(18,1).c$$S,[s]);
label.setBorder$javax_swing_border_Border(empty);
label.setFont$java_awt_Font(this.lightFont);
}var checkbox=Clazz.new_($I$(26,1).c$$org_opensourcephysics_tools_AbstractAutoloadManager_AutoloadFileCheckbox$SA,[this, null, fileCheckbox, f]);
checkbox.setFont$java_awt_Font(this.lightFont);
checkbox.setSelected$Z(this.isFunctionSelected$S$SA(filePath, f));
bar=$I$(22).createHorizontalBox$();
bar.add$java_awt_Component(checkbox);
bar.add$java_awt_Component($I$(22).createHorizontalGlue$());
if (label != null ) bar.add$java_awt_Component(label);
bar.setBorder$javax_swing_border_Border($I$(20).createEmptyBorder$I$I$I$I(0, this.inset2, 0, 0));
dirBox.add$java_awt_Component(bar);
}
}
if (dirBox.getComponentCount$() == 0) {
dirBox.add$java_awt_Component(p$2.getEmptyMessage$I.apply(this, [this.inset1]));
}}
if (this.functionBox.getComponentCount$() == 0) {
this.functionBox.add$java_awt_Component(p$2.getEmptyMessage$I.apply(this, [this.inset0]));
}$I$(17,"setFonts$O$I",[this.functionBox, $I$(17).getLevel$()]);
this.refreshing=false;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(17).setFonts$O$I(this, level);
$I$(17).setFonts$O$I(this.instructionArea, level);
});

Clazz.newMeth(C$, 'getAllFunctions$S',  function (filePath) {
var dir=$I$(4).getDirectoryPath$S(filePath);
var functionMap=this.autoloadData.get$O(dir);
if (functionMap == null ) return null;
var functionList=functionMap.get$O($I$(4).getName$S(filePath));
if (functionList == null ) return null;
return functionList.toArray$OA(Clazz.array(String, [functionList.size$(), null]));
});

Clazz.newMeth(C$, 'setFunctionSelected$S$SA$Z',  function (filePath, $function, select) {
var oldExclusions=this.getExclusionsMap$().get$O(filePath);
var newExclusions=null;
if (!select) {
if (oldExclusions == null ) {
newExclusions=Clazz.array(String, -1, [$function[0]]);
} else {
var n=oldExclusions.length;
if (this.getAllFunctions$S(filePath).length == n + 1) {
newExclusions=Clazz.array(String, -1, ["*"]);
} else {
newExclusions=Clazz.array(String, [n + 1]);
System.arraycopy$O$I$O$I$I(oldExclusions, 0, newExclusions, 0, n);
newExclusions[n]=$function[0];
}}} else if (oldExclusions != null ) {
var exclusions=Clazz.new_($I$(2,1));
if (oldExclusions.length == 1 && oldExclusions[0].equals$O("*") ) {
var allFunctions=this.getAllFunctions$S(filePath);
for (var i=0; i < allFunctions.length; i++) {
if ($function[0].equals$O(allFunctions[i][0])) continue;
exclusions.add$O(allFunctions[i][0]);
}
} else {
for (var f, $f = 0, $$f = oldExclusions; $f<$$f.length&&((f=($$f[$f])),1);$f++) {
if (f.equals$O($function[0])) continue;
exclusions.add$O(f);
}
}newExclusions=exclusions.toArray$OA(Clazz.array(String, [exclusions.size$()]));
}this.getExclusionsMap$().remove$O(filePath);
if (newExclusions != null ) {
this.getExclusionsMap$().put$O$O(filePath, newExclusions);
}});

Clazz.newMeth(C$, 'isFunctionSelected$S$SA',  function (filePath, $function) {
var functions=this.getExclusionsMap$().get$O(filePath);
if (functions == null ) return true;
for (var name, $name = 0, $$name = functions; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
if (name.equals$O("*")) return false;
if (name.equals$O($function[0])) return false;
}
return true;
});

Clazz.newMeth(C$, 'setFileSelected$S$Z',  function (filePath, select) {
this.getExclusionsMap$().remove$O(filePath);
if (!select) {
var $function=Clazz.array(String, -1, ["*"]);
this.getExclusionsMap$().put$O$O(filePath, $function);
}});

Clazz.newMeth(C$, 'isFileSelected$S',  function (filePath) {
var functions=this.getExclusionsMap$().get$O(filePath);
if (functions == null  || functions.length == 0 ) {
return true;
}if (functions[0].equals$O("*") || functions.length == this.getAllFunctions$S(filePath).length ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'getEmptyMessage$I',  function (inset) {
var label=Clazz.new_([$I$(1).getString$S("AutoloadManager.Label.NoFunctionsFound")],$I$(18,1).c$$S);
label.setFont$java_awt_Font(this.lightFont);
label.setBorder$javax_swing_border_Border($I$(20).createEmptyBorder$I$I$I$I(2, inset, 4, 0));
var bar=$I$(22).createHorizontalBox$();
bar.add$java_awt_Component(label);
bar.add$java_awt_Component($I$(22).createHorizontalGlue$());
return bar;
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractAutoloadManager, "AutoloadFunctionCheckbox", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JCheckBox');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$function','String[]','fileCheckBox','org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFileCheckbox']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_AbstractAutoloadManager_AutoloadFileCheckbox$SA',  function (fileCheckbox, f) {
Clazz.super_(C$, this);
this.fileCheckBox=fileCheckbox;
this.$function=f;
this.fileCheckBox.functionCheckBoxes.add$O(this);
this.setSelected$Z(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].isFunctionSelected$S$SA.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'], [this.fileCheckBox.filePath, this.$function]));
this.setText$S(f[0] + " = " + f[1] );
this.setIconTextGap$I(10);
this.setOpaque$Z(false);
this.setToolTipText$S($I$(1).getString$S("AutoloadManager.FunctionCheckbox.Tooltip"));
this.addActionListener$java_awt_event_ActionListener(((P$.AbstractAutoloadManager$AutoloadFunctionCheckbox$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAutoloadManager$AutoloadFunctionCheckbox$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var hasSelections=false;
for (var i=0; i < this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFunctionCheckbox'].fileCheckBox.functionCheckBoxes.size$(); i++) {
hasSelections=hasSelections || this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFunctionCheckbox'].fileCheckBox.functionCheckBoxes.get$I(i).isSelected$() ;
}
if (hasSelections && !this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFunctionCheckbox'].fileCheckBox.isSelected$() ) this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFunctionCheckbox'].fileCheckBox.setSelected$Z(true);
 else if (!hasSelections && this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFunctionCheckbox'].fileCheckBox.isSelected$() ) this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFunctionCheckbox'].fileCheckBox.setSelected$Z(false);
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].setFunctionSelected$S$SA$Z.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'], [this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFunctionCheckbox'].fileCheckBox.filePath, this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFunctionCheckbox'].$function, this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFunctionCheckbox'].isSelected$.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFunctionCheckbox'], [])]);
this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
});
})()
), Clazz.new_(P$.AbstractAutoloadManager$AutoloadFunctionCheckbox$1.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractAutoloadManager, "AutoloadFileCheckbox", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JCheckBox');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.functionCheckBoxes=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['S',['fileName','filePath'],'O',['functionCheckBoxes','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$S$S',  function (dir, name) {
Clazz.super_(C$, this);
this.fileName=name;
var file=Clazz.new_($I$(3,1).c$$S$S,[dir, this.fileName]);
this.filePath=$I$(4,"forwardSlash$S",[file.getAbsolutePath$()]);
this.setText$S(this.fileName);
this.setIconTextGap$I(10);
this.setOpaque$Z(false);
this.setToolTipText$S($I$(1).getString$S("AutoloadManager.FileCheckbox.Tooltip"));
this.addActionListener$java_awt_event_ActionListener(((P$.AbstractAutoloadManager$AutoloadFileCheckbox$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAutoloadManager$AutoloadFileCheckbox$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var select=this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFileCheckbox'].isSelected$.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFileCheckbox'], []);
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].setFileSelected$S$Z.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'], [this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFileCheckbox'].filePath, select]);
for (var i=0; i < this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFileCheckbox'].functionCheckBoxes.size$(); i++) {
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.AutoloadFileCheckbox'].functionCheckBoxes.get$I(i).setSelected$Z(select);
}
this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
});
})()
), Clazz.new_(P$.AbstractAutoloadManager$AutoloadFileCheckbox$1.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractAutoloadManager, "SearchPathDialog", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.addedFiles=Clazz.new_($I$(5,1));
this.directoryPaths=Clazz.new_($I$(6,1));
},1);

C$.$fields$=[['O',['addedFiles','java.util.HashSet','directoryPaths','java.util.TreeSet','okButton','javax.swing.JButton','+addButton','+removeButton','directoryList','javax.swing.JList','directoryListModel','javax.swing.DefaultListModel']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Dialog$Z.apply(this,[this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'], true]);C$.$init$.apply(this);
p$1.createGUI.apply(this, []);
for (var dir, $dir = this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPaths.iterator$(); $dir.hasNext$()&&((dir=($dir.next$())),1);) {
var file=Clazz.new_($I$(3,1).c$$S,[dir]);
this.addedFiles.add$O(file);
}
this.refreshFileList$();
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
var contentPane=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
this.directoryListModel=Clazz.new_($I$(9,1));
this.directoryList=Clazz.new_($I$(10,1).c$$javax_swing_ListModel,[this.directoryListModel]);
this.directoryList.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.AbstractAutoloadManager$SearchPathDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAutoloadManager$SearchPathDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
var dir=this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog'].directoryList.getSelectedValue$();
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog'].removeButton.setEnabled$Z(dir != null );
});
})()
), Clazz.new_(P$.AbstractAutoloadManager$SearchPathDialog$1.$init$,[this, null])));
var scroller=Clazz.new_($I$(11,1).c$$java_awt_Component,[this.directoryList]);
scroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(12,1).c$$I$I,[300, 150]));
contentPane.add$java_awt_Component$O(scroller, "Center");
var buttonbar=Clazz.new_($I$(7,1));
this.addButton=Clazz.new_($I$(13,1));
this.addButton.addActionListener$java_awt_event_ActionListener(((P$.AbstractAutoloadManager$SearchPathDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAutoloadManager$SearchPathDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var file=p$1.chooseSearchDirectory$java_awt_Component.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog'], [this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog']]);
if (file == null ) return;
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog'].addedFiles.add$O(file);
var path=$I$(4,"forwardSlash$S",[file.getAbsolutePath$()]);
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].addSearchPath$S.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'], [path]);
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog'].refreshFileList$.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog'], []);
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].refreshAutoloadData$.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'], []);
});
})()
), Clazz.new_(P$.AbstractAutoloadManager$SearchPathDialog$2.$init$,[this, null])));
this.removeButton=Clazz.new_($I$(13,1));
this.removeButton.addActionListener$java_awt_event_ActionListener(((P$.AbstractAutoloadManager$SearchPathDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAutoloadManager$SearchPathDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog'].directoryList.getSelectedValue$();
if (name != null ) {
for (var it=this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog'].addedFiles.iterator$(); it.hasNext$(); ) {
var next=it.next$();
var nextPath=$I$(4,"forwardSlash$S",[next.getAbsolutePath$()]);
if (name.equals$O(nextPath)) {
it.remove$();
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPaths.remove$O(nextPath);
break;
}}
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog'].refreshFileList$.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager.SearchPathDialog'], []);
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].refreshAutoloadData$.apply(this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'], []);
}});
})()
), Clazz.new_(P$.AbstractAutoloadManager$SearchPathDialog$3.$init$,[this, null])));
this.okButton=Clazz.new_($I$(13,1));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.AbstractAutoloadManager$SearchPathDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAutoloadManager$SearchPathDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.AbstractAutoloadManager$SearchPathDialog$4.$init$,[this, null])));
buttonbar.add$java_awt_Component(this.addButton);
buttonbar.add$java_awt_Component(this.removeButton);
buttonbar.add$java_awt_Component(this.okButton);
contentPane.add$java_awt_Component$O(buttonbar, "South");
this.pack$();
}, p$1);

Clazz.newMeth(C$, 'chooseSearchDirectory$java_awt_Component',  function (parent) {
var chooser=Clazz.new_($I$(14,1).c$$S,[this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPathChooserDir]);
if ($I$(15).isMac$()) chooser.setFileSelectionMode$I(2);
 else chooser.setFileSelectionMode$I(1);
var folderFilter=((P$.AbstractAutoloadManager$SearchPathDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAutoloadManager$SearchPathDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) return false;
return f.isDirectory$();
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(1).getString$S("LibraryTreePanel.FolderFileFilter.Description");
});
})()
), Clazz.new_($I$(16,1),[this, null],P$.AbstractAutoloadManager$SearchPathDialog$5));
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(folderFilter);
var text=$I$(1).getString$S("LibraryManager.Button.Add");
chooser.setDialogTitle$S(text);
$I$(17,"setFonts$O$I",[chooser, $I$(17).getLevel$()]);
var result=chooser.showDialog$java_awt_Component$S(parent, text);
if (result == 0) {
this.b$['org.opensourcephysics.tools.AbstractAutoloadManager'].searchPathChooserDir=chooser.getCurrentDirectory$().getAbsolutePath$();
return chooser.getSelectedFile$();
}return null;
}, p$1);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setTitle$S($I$(1).getString$S("AutoloadManager.Button.SearchPaths"));
this.okButton.setText$S($I$(1).getString$S("Button.OK"));
this.addButton.setText$S($I$(1).getString$S("LibraryManager.Button.Add") + "...");
this.removeButton.setText$S($I$(1).getString$S("LibraryManager.Button.Remove"));
var dir=this.directoryList.getSelectedValue$();
this.removeButton.setEnabled$Z(dir != null );
});

Clazz.newMeth(C$, 'refreshFileList$',  function () {
this.directoryListModel.clear$();
this.directoryPaths.clear$();
for (var next, $next = this.addedFiles.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.directoryPaths.add$O($I$(4,"forwardSlash$S",[next.getAbsolutePath$()]));
}
for (var next, $next = this.directoryPaths.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.directoryListModel.addElement$O(next);
}
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
