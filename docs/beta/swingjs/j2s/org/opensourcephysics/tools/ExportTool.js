(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.util.Hashtable','org.opensourcephysics.tools.ExportGnuplotFormat','org.opensourcephysics.tools.ExportXMLFormat','javax.swing.UIManager','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.display.OSPRuntime','java.io.File','javax.swing.JCheckBox','javax.swing.JPanel','java.awt.GridLayout','java.awt.Color','javax.swing.JScrollPane','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.BorderFactory','javax.swing.filechooser.FileFilter','java.util.ArrayList','org.opensourcephysics.display.Dataset','org.opensourcephysics.display2d.GridData','java.util.Vector','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.OSPLog','javax.swing.JOptionPane','org.opensourcephysics.tools.Toolbox']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExportTool", null, null, ['org.opensourcephysics.tools.Tool', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.exportName="default";
},1);

C$.$fields$=[['S',['exportName'],'O',['fc','javajs.async.AsyncFileChooser','checkBoxes','javax.swing.JCheckBox[]']]
,['S',['exportExtension'],'O',['TOOL','org.opensourcephysics.tools.ExportTool','formats','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.createFileChooser$();
this.fc.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
}, 1);

Clazz.newMeth(C$, 'createFileChooser$',  function () {
C$.formats=Clazz.new_($I$(1,1));
C$.registerFormat$org_opensourcephysics_tools_ExportFormat(Clazz.new_($I$(2,1)));
C$.registerFormat$org_opensourcephysics_tools_ExportFormat(Clazz.new_($I$(3,1)));
var oldFilesOfTypeLabelText=$I$(4,"put$O$O",["FileChooser.filesOfTypeLabelText", $I$(5).getString$S("ExportTool.FileChooser.Label.FileFormat")]);
this.fc=$I$(6).getChooser$();
$I$(4).put$O$O("FileChooser.filesOfTypeLabelText", oldFilesOfTypeLabelText);
this.fc.setDialogType$I(1);
this.fc.setDialogTitle$S($I$(5).getString$S("ExportTool.FileChooser.Title"));
this.fc.setApproveButtonText$S($I$(5).getString$S("ExportTool.FileChooser.Button.Export"));
this.setChooserFormats$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
var filter=this.fc.getFileFilter$();
if (filter == null ) {
return;
}var ef=C$.formats.get$O(filter.getDescription$());
if ((ef == null ) || C$.exportExtension.equals$O(ef.extension$()) ) {
return;
}C$.exportExtension=ef.extension$();
this.fc.setSelectedFile$java_io_File(Clazz.new_($I$(7,1).c$$S,[this.exportName + '.' + C$.exportExtension ]));
});

Clazz.newMeth(C$, 'buildAccessory$java_util_List',  function (data) {
this.checkBoxes=Clazz.array($I$(8), [data.size$()]);
var checkPanel=Clazz.new_([Clazz.new_($I$(10,1).c$$I$I,[0, 1])],$I$(9,1).c$$java_awt_LayoutManager);
for (var i=0; i < data.size$(); i++) {
var s=$I$(5).getString$S("ExportTool.FileChooser.DataType.Unknown") + i;
var c=$I$(11).BLACK;
var o=data.get$I(i);
if (Clazz.instanceOf(o, "org.opensourcephysics.display.Dataset")) {
var d=o;
s=$I$(5).getString$S("ExportTool.FileChooser.DataType.Dataset") + i;
c=d.getFillColor$();
} else if (Clazz.instanceOf(o, "org.opensourcephysics.display2d.GridData")) {
s=$I$(5).getString$S("ExportTool.FileChooser.DataType.GridData") + i;
}this.checkBoxes[i]=Clazz.new_($I$(8,1).c$$S,[s]);
this.checkBoxes[i].setSelected$Z(true);
this.checkBoxes[i].setForeground$java_awt_Color(c);
this.checkBoxes[i].setBackground$java_awt_Color($I$(11).WHITE);
checkPanel.add$java_awt_Component(this.checkBoxes[i]);
}
var scrollPane=Clazz.new_($I$(12,1).c$$java_awt_Component,[checkPanel]);
scrollPane.getViewport$().setBackground$java_awt_Color($I$(11).WHITE);
var p=Clazz.new_([Clazz.new_($I$(13,1))],$I$(9,1).c$$java_awt_LayoutManager);
if (data.size$() == 0) {
p.add$java_awt_Component$O(Clazz.new_([$I$(5).getString$S("ExportTool.FileChooser.Heading.NoData")],$I$(14,1).c$$S), "North");
} else {
p.add$java_awt_Component$O(Clazz.new_([$I$(5).getString$S("ExportTool.FileChooser.Heading.ExportableData")],$I$(14,1).c$$S), "North");
}p.add$java_awt_Component$O(scrollPane, "Center");
p.setBorder$javax_swing_border_Border($I$(15).createEmptyBorder$I$I$I$I(0, 10, 0, 10));
this.fc.setAccessory$javax_swing_JComponent(p);
});

Clazz.newMeth(C$, 'setChooserFormats$',  function () {
this.fc.resetChoosableFileFilters$();
this.fc.setAcceptAllFileFilterUsed$Z(false);
for (var e=C$.formats.keys$(); e.hasMoreElements$(); ) {
var desc=e.nextElement$();
this.fc.addChoosableFileFilter$javax_swing_filechooser_FileFilter(((P$.ExportTool$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExportTool$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
return f != null ;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.$finals$.desc;
});
})()
), Clazz.new_($I$(16,1),[this, {desc:desc}],P$.ExportTool$1)));
}
});

Clazz.newMeth(C$, 'getDataObjects$org_opensourcephysics_controls_XMLControlElement',  function (control) {
var ret=Clazz.new_($I$(17,1));
ret.addAll$java_util_Collection(control.getObjects$Class(Clazz.getClass($I$(18))));
ret.addAll$java_util_Collection(control.getObjects$Class(Clazz.getClass($I$(19),['getBottom$','getComponentCount$','getComponentName$I','getData$','getDx$','getDy$','getLeft$','getNx$','getNy$','getRight$','getTop$','getValue$I$I$I','getZRange$I','getZRange$I$DA','indexToX$I','indexToY$I','interpolate$D$D$I','interpolate$D$D$IA$DA','isCellData$','setCellScale$D$D$D$D','setCenteredCellScale$D$D$D$D','setComponentName$I$S','setScale$D$D$D$D','setValue$I$I$I$D','xToIndex$D','yToIndex$D'])));
return ret;
});

Clazz.newMeth(C$, 'filterDataObjects$java_util_List',  function (data) {
var ret=Clazz.new_($I$(20,1));
for (var i=0; i < data.size$(); i++) {
if (this.checkBoxes[i].isSelected$()) {
ret.add$O(data.get$I(i));
}}
return ret;
});

Clazz.newMeth(C$, 'registerFormat$org_opensourcephysics_tools_ExportFormat',  function (format) {
C$.formats.put$O$O(format.description$(), format);
}, 1);

Clazz.newMeth(C$, 'exportJS$org_opensourcephysics_tools_Job',  function (job) {
var control=Clazz.new_($I$(21,1));
try {
control.readXML$S(job.getXML$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Error reading XML for export.");
} else {
throw ex;
}
}
$I$(22).fine$S("Exporting XML");
$I$(22,"finer$S",["XML=" + control.toXML$()]);
var chooser=$I$(6).getChooser$();
if (chooser == null ) {
return;
}var oldTitle=chooser.getDialogTitle$();
chooser.setDialogTitle$S("Export");
var result=-1;
try {
result=chooser.showSaveDialog$java_awt_Component(null);
} catch (e) {
e.printStackTrace$();
}
chooser.setDialogTitle$S(oldTitle);
if (result == 0) {
var file=chooser.getSelectedFile$();
$I$(6).chooserDir=chooser.getCurrentDirectory$().toString();
var fileName=file.getAbsolutePath$();
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return;
}var i=fileName.toLowerCase$().lastIndexOf$S(".xml");
if (i != fileName.length$() - 4) {
fileName+=".xml";
file=Clazz.new_($I$(7,1).c$$S,[fileName]);
}if (!$I$(6).isJS && file.exists$() ) {
var selected=$I$(23,"showConfirmDialog$java_awt_Component$O$S$I",[null, "Replace existing " + file.getName$() + "?" , "Replace File", 1]);
if (selected != 0) {
return;
}}control.write$S(fileName);
}$I$(22).fine$S("Done Exporting");
});

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, noReply) {
if ($I$(6).isJS) {
this.exportJS$org_opensourcephysics_tools_Job(job);
return;
}var control=Clazz.new_($I$(21,1));
control.readXML$S(job.getXML$());
var data=this.getDataObjects$org_opensourcephysics_controls_XMLControlElement(control);
this.buildAccessory$java_util_List(data);
this.fc.setSelectedFile$java_io_File(Clazz.new_($I$(7,1).c$$S,[this.exportName + '.' + C$.exportExtension ]));
var returnVal=this.fc.showSaveDialog$java_awt_Component(null);
if (returnVal == 0) {
var file=this.fc.getSelectedFile$();
if (file.exists$()) {
var selected=$I$(23,"showConfirmDialog$java_awt_Component$O$S$I",[null, $I$(5).getString$S("Tool.Dialog.ReplaceFile.Message") + " " + file.getName$() + "?" , $I$(5).getString$S("Tool.Dialog.ReplaceFile.Title"), 1]);
if (selected != 0) {
return;
}}var description=this.fc.getFileFilter$().getDescription$();
if (!description.trim$().equals$O("not implemented")) C$.formats.get$O(description).export$java_io_File$java_util_List(file, this.filterDataObjects$java_util_List(data));
if (file.getName$().endsWith$S(C$.exportExtension)) {
this.exportName=file.getName$().substring$I$I(0, file.getName$().length$() - 1 - C$.exportExtension.length$() );
}}});

Clazz.newMeth(C$, 'getTool$',  function () {
if (C$.TOOL == null ) {
C$.TOOL=Clazz.new_(C$);
$I$(24).addTool$S$org_opensourcephysics_tools_Tool("ExportTool", C$.TOOL);
}return C$.TOOL;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.exportExtension="txt";
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
