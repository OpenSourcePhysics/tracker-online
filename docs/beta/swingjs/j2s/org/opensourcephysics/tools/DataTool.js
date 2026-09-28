(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},p$2={},p$3={},I$=[[0,'java.awt.datatransfer.DataFlavor','javax.swing.JOptionPane','java.awt.BorderLayout','org.opensourcephysics.tools.ToolsRes','javax.swing.JButton','org.opensourcephysics.display.DisplayRes','javax.swing.JTextArea','java.awt.Color','java.awt.Insets','javax.swing.JScrollPane','javax.swing.JPanel','javax.swing.BorderFactory','org.opensourcephysics.tools.FontSizer','java.awt.Dimension','java.util.ArrayList','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.display.OSPRuntime','java.io.File','org.opensourcephysics.tools.DataTool','java.awt.event.WindowAdapter','java.net.URL','java.io.BufferedReader','java.io.InputStreamReader','StringBuffer','org.opensourcephysics.tools.DataToolTab','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.Resource','org.opensourcephysics.display.DatasetManager','org.opensourcephysics.display.Data','org.opensourcephysics.tools.LocalJob','java.io.StringReader','org.opensourcephysics.controls.XML','java.util.Arrays','org.opensourcephysics.media.core.VideoIO','javax.swing.AbstractAction','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','org.opensourcephysics.display.TeXParser','java.util.HashSet','org.opensourcephysics.controls.XMLTreeChooser','org.opensourcephysics.controls.XMLTree','org.opensourcephysics.display.Dataset','org.opensourcephysics.tools.DataColumn','org.opensourcephysics.display.DisplayColors','java.awt.Toolkit','org.opensourcephysics.tools.FitBuilder','org.opensourcephysics.controls.ControlsRes','java.io.FileOutputStream','java.nio.charset.Charset','java.io.OutputStreamWriter','java.io.BufferedWriter','org.opensourcephysics.tools.Toolbox',['org.opensourcephysics.tools.DataTool','.FileDropHandler'],'org.opensourcephysics.tools.DataBuilder','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.desktop.OSPDesktop','org.opensourcephysics.display.TextFrame','javax.swing.JTabbedPane','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.display.GUIUtils','javax.swing.JMenu','java.awt.event.MouseAdapter','javax.swing.JMenuBar','javax.swing.KeyStroke','org.opensourcephysics.tools.SnapshotTool','java.awt.Frame',['org.opensourcephysics.tools.DataTool','.EditDataDialog'],'javax.swing.JLabel','javax.swing.JCheckBox','javax.swing.Box','javajs.async.AsyncDialog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataTool", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.OSPFrame', ['org.opensourcephysics.tools.Tool', 'java.beans.PropertyChangeListener']);
C$.$classes$=[['FileDropHandler',1],['ExpMovingAvg',9],['EditDataDialog',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.standAlone=false;
this.useChooser=true;
this.contentPane=Clazz.new_([Clazz.new_($I$(3,1))],$I$(11,1).c$$java_awt_LayoutManager);
this.control=Clazz.new_($I$(16,1));
this.addableData=null;
this.exitOnClose=false;
this.saveChangesOnClose=false;
this.isLoading=false;
this.slopeExtended=false;
this.editMenuChecker=((P$.DataTool$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
var tab=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
if (tab != null ) {
this.b$['org.opensourcephysics.tools.DataTool'].undoItem.setEnabled$Z(tab.undoManager.canUndo$());
this.b$['org.opensourcephysics.tools.DataTool'].redoItem.setEnabled$Z(tab.undoManager.canRedo$());
}var enabled=this.b$['org.opensourcephysics.tools.DataTool'].hasPastableData$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
this.b$['org.opensourcephysics.tools.DataTool'].emptyPasteMenu.setEnabled$Z(enabled);
this.b$['org.opensourcephysics.tools.DataTool'].pasteMenu.setEnabled$Z(enabled);
this.b$['org.opensourcephysics.tools.DataTool'].copyMenu.removeAll$();
if (tab != null ) {
var isEmpty=tab.dataManager.getDatasetsRaw$().isEmpty$();
this.b$['org.opensourcephysics.tools.DataTool'].copyDataMenu.setEnabled$Z(!isEmpty);
if (!isEmpty) {
this.b$['org.opensourcephysics.tools.DataTool'].copyTabItem.setText$S($I$(4).getString$S("DataTool.MenuItem.CopyTab"));
this.b$['org.opensourcephysics.tools.DataTool'].copyMenu.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataTool'].copyTabItem);
this.b$['org.opensourcephysics.tools.DataTool'].copyMenu.addSeparator$();
var s=$I$(4).getString$S("DataTool.MenuItem.CopyData");
var selectedRows=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).dataTable.getSelectedRows$();
var endRow=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).dataTable.getRowCount$() - 1;
var emptySelection=(selectedRows.length == 1) && (selectedRows[0] == endRow) && this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).dataTable.isEmptyRow$I(endRow)  ;
if ((selectedRows.length > 0) && !emptySelection ) {
s=$I$(4).getString$S("DataTool.MenuItem.CopySelectedData");
}this.b$['org.opensourcephysics.tools.DataTool'].copyDataMenu.setText$S(s);
this.b$['org.opensourcephysics.tools.DataTool'].copyDataMenu.removeAll$();
this.b$['org.opensourcephysics.tools.DataTool'].copyDataRawItem.setText$S($I$(4).getString$S("DataTool.MenuItem.Unformatted"));
this.b$['org.opensourcephysics.tools.DataTool'].copyDataAsFormattedItem.setText$S($I$(4).getString$S("DataTool.MenuItem.Formatted"));
this.b$['org.opensourcephysics.tools.DataTool'].setDelimiterMenu.setText$S($I$(4).getString$S("DataTool.Menu.SetDelimiter"));
this.b$['org.opensourcephysics.tools.DataTool'].copyDataMenu.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataTool'].copyDataAsFormattedItem);
this.b$['org.opensourcephysics.tools.DataTool'].copyDataMenu.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataTool'].copyDataRawItem);
this.b$['org.opensourcephysics.tools.DataTool'].copyDataMenu.addSeparator$();
this.b$['org.opensourcephysics.tools.DataTool'].copyDataMenu.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataTool'].setDelimiterMenu);
this.b$['org.opensourcephysics.tools.DataTool'].copyMenu.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataTool'].copyDataMenu);
this.b$['org.opensourcephysics.tools.DataTool'].copyMenu.addSeparator$();
}}this.b$['org.opensourcephysics.tools.DataTool'].copyMenu.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataTool'].copyImageItem);
$I$(13).setFonts$java_awt_Container(this.b$['org.opensourcephysics.tools.DataTool'].copyMenu);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.DataTool$1.$init$,[this, null]));
},1);

C$.$fields$=[['Z',['standAlone','useChooser','controlContainsData','exitOnClose','saveChangesOnClose','isLoading','slopeExtended'],'I',['myPopupFontLevel','myCopyMenuFontLevel'],'O',['tabbedPane','javax.swing.JTabbedPane','contentPane','javax.swing.JPanel','support','java.beans.PropertyChangeSupport','control','org.opensourcephysics.controls.XMLControlElement','addableData','org.opensourcephysics.display.Data','emptyMenubar','javax.swing.JMenuBar','emptyFileMenu','javax.swing.JMenu','emptyNewTabItem','javax.swing.JMenuItem','+emptyOpenItem','+emptyExitItem','emptyEditMenu','javax.swing.JMenu','emptyPasteMenu','javax.swing.JMenuItem','+emptyPasteTabItem','menubar','javax.swing.JMenuBar','fileMenu','javax.swing.JMenu','newTabItem','javax.swing.JMenuItem','+openItem','+importItem','+exportItem','+saveItem','+saveAsItem','+closeItem','+closeAllItem','+printItem','+exitItem','editMenu','javax.swing.JMenu','undoItem','javax.swing.JMenuItem','+redoItem','copyMenu','javax.swing.JMenu','copyImageItem','javax.swing.JMenuItem','+copyTabItem','copyDataMenu','javax.swing.JMenu','+setDelimiterMenu','copyDataAsFormattedItem','javax.swing.JMenuItem','+copyDataRawItem','pasteMenu','javax.swing.JMenu','pasteTabItem','javax.swing.JMenuItem','+pasteColumnsItem','displayMenu','javax.swing.JMenu','+languageMenu','languageItems','javax.swing.JMenuItem[]','fontSizeMenu','javax.swing.JMenu','defaultFontSizeItem','javax.swing.JMenuItem','fontSizeGroup','javax.swing.ButtonGroup','helpMenu','javax.swing.JMenu','helpItem','javax.swing.JMenuItem','+logItem','+aboutItem','dataBuilder','org.opensourcephysics.tools.DataBuilder','fitBuilder','org.opensourcephysics.tools.FitBuilder','loadDataFunctionsButton','javax.swing.JButton','+saveDataFunctionsButton','editMenuChecker','javax.swing.event.MenuListener','editDataItem','javax.swing.JMenuItem']]
,['Z',['loadClass','loadMultipleTracksInSingleTab','askToLoadMultipleTracksInSingleTab'],'I',['buttonHeight'],'S',['helpName','helpBase','NEW_LINE'],'O',['dim','java.awt.Dimension','delimiters','String[]','helpFrame','org.opensourcephysics.display.TextFrame','processedData','java.util.ArrayList','tool','org.opensourcephysics.tools.DataTool']]]

Clazz.newMeth(C$, 'getTool$',  function () {
return C$.getTool$Z(true);
}, 1);

Clazz.newMeth(C$, 'getTool$Z',  function (forceNew) {
return (C$.tool == null  && forceNew  ? (C$.tool=Clazz.new_(C$)) : C$.tool);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
C$.getTool$Z(true);
if ($I$(17).isJS) C$.tool.standAlone=true;
if (C$.tool.standAlone) C$.tool.setLocation$I$I(0, 0);
$I$(17).setAppClass$O(C$.tool);
C$.tool.exitOnClose=true;
C$.tool.saveChangesOnClose=true;
if ((args != null ) && (args.length > 0) && (args[0] != null )  ) {
C$.tool.setVisible$Z(true);
C$.tool.open$java_io_File(Clazz.new_($I$(18,1).c$$S,[args[0]]));
} else {
C$.tool.addWindowListener$java_awt_event_WindowListener(((P$.DataTool$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
if ($I$(19).tool.getTabCount$() == 0) {
var tab=$I$(19).tool.createTab$org_opensourcephysics_display_Data(null);
tab.setUserEditable$Z(true);
$I$(19).tool.addTab$org_opensourcephysics_tools_DataToolTab(tab);
}});
})()
), Clazz.new_($I$(20,1),[this, null],P$.DataTool$2)));
C$.tool.setVisible$Z(true);
}}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$S.apply(this, [$I$(4).getString$S("DataTool.Frame.Title"), "DataTool"]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (fileName) {
C$.c$.apply(this, []);
this.open$java_io_File(Clazz.new_($I$(18,1).c$$S,[fileName]));
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl',  function (control) {
C$.c$.apply(this, []);
this.addTabs$org_opensourcephysics_controls_XMLControl$java_util_function_Consumer(control, null);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_Data',  function (data) {
C$.c$.apply(this, []);
var tabs=this.createTabs$org_opensourcephysics_display_Data(data);
for (var tab, $tab = tabs.iterator$(); $tab.hasNext$()&&((tab=($tab.next$())),1);) {
this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
}
}, 1);

Clazz.newMeth(C$, ['loadDatasetURL$S','loadDatasetURL'],  function (path) {
if (this.getTabCount$() > 0) this.removeAllTabs$();
var f=Clazz.new_($I$(18,1).c$$S,[path]);
this.open$java_io_File(f);
});

Clazz.newMeth(C$, ['loadDatasetURI$S','loadDatasetURI'],  function (relpath) {
if (this.getTabCount$() > 0) this.removeAllTabs$();
var baseURI=(document.body.baseURI ||null);
var rootpath=(baseURI == null ) ? "" : baseURI.substring$I$I(0, baseURI.lastIndexOf$I("/") + 1);
var path=rootpath + relpath;
try {
System.err.println$S("Debugging: reading path=" + path);
var url=Clazz.new_($I$(21,1).c$$S,[path]);
var content=url.getContent$();
if (Clazz.instanceOf(content, "java.io.InputStream")) {
var is=content;
var reader=Clazz.new_([Clazz.new_($I$(23,1).c$$java_io_InputStream,[content])],$I$(22,1).c$$java_io_Reader);
var buffer=Clazz.new_($I$(24,1).c$$I,[0]);
var line;
while ((line=reader.readLine$()) != null ){
buffer.append$S(line + C$.NEW_LINE);
}
var dataset=buffer.toString();
System.out.print$S(dataset);
System.err.println$S("Debugging: Close stream \n");
this.loadDataset$S$S(dataset, path);
is.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, ['getMainFrame$','getMainFrame'],  function () {
return this;
});

Clazz.newMeth(C$, ['getMainFrameSize$','getMainFrameSize'],  function () {
var d=this.getSize$();
return Clazz.array(Integer.TYPE, -1, [d.width, d.height]);
});

Clazz.newMeth(C$, 'setSaveChangesOnClose$Z',  function (save) {
this.saveChangesOnClose=save && !$I$(17).appletMode ;
});

Clazz.newMeth(C$, 'addTabs$org_opensourcephysics_controls_XMLControl$java_util_function_Consumer',  function (control, whenDone) {
if (Clazz.getClass($I$(25)) === control.getObjectClass$() ) {
control.setValue$S$O("datatool", this);
this.isLoading=true;
var tab=control.loadObject$O(null);
this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
tab.refreshGUI$();
this.isLoading=false;
var tabs=Clazz.new_($I$(15,1));
tabs.add$O(tab);
if (whenDone != null ) whenDone.accept$O(tabs);
return;
}if (control.getObjectClassName$().endsWith$S("FourierToolTab")) {
var child=control.getChildControl$S("source_data");
var source=child.loadObject$O(null);
var tab=this.createTab$org_opensourcephysics_display_Data(source);
this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
tab.refreshGUI$();
var tabs=Clazz.new_($I$(15,1));
tabs.add$O(tab);
if (whenDone != null ) whenDone.accept$O(tabs);
return;
}p$3.loadTabsFromXMLAsync$org_opensourcephysics_controls_XMLControl$java_util_function_Consumer.apply(this, [control, ((P$.DataTool$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$java_util_ArrayList','accept$O'],  function (tabs) {
for (var tab, $tab = tabs.iterator$(); $tab.hasNext$()&&((tab=($tab.next$())),1);) {
this.b$['org.opensourcephysics.tools.DataTool'].addTab$org_opensourcephysics_tools_DataToolTab.apply(this.b$['org.opensourcephysics.tools.DataTool'], [tab]);
tab.refreshGUI$();
}
if (this.$finals$.whenDone != null ) this.$finals$.whenDone.accept$O(tabs);
});
})()
), Clazz.new_(P$.DataTool$3.$init$,[this, {whenDone:whenDone}]))]);
});

Clazz.newMeth(C$, 'createTabs$org_opensourcephysics_display_Data',  function (source) {
var dataList=C$.getSelfContainedData$org_opensourcephysics_display_Data(source);
var tabList=Clazz.new_($I$(15,1));
for (var next, $next = dataList.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var tab=this.createTab$org_opensourcephysics_display_Data(next);
if (tab != null ) {
tabList.add$O(tab);
}}
return tabList;
});

Clazz.newMeth(C$, 'createTab$org_opensourcephysics_display_Data',  function (data) {
this.fitBuilder=this.getFitBuilder$();
var tab=Clazz.new_($I$(25,1).c$$org_opensourcephysics_display_Data$org_opensourcephysics_tools_DataTool,[data, this]);
if (data != null ) {
var name=data.getName$();
if ((name != null ) && !name.equals$O("") ) {
tab.setName$S(name);
}}return tab;
});

Clazz.newMeth(C$, 'removeTab$I$Z',  function (index, saveChanges) {
if ((index >= 0) && (index < this.tabbedPane.getTabCount$()) ) {
if (saveChanges && !this.saveChangesAt$I(index) ) {
return null;
}var tab=this.getTab$I(index);
this.getFitBuilder$().curveFitters.remove$O(tab.getCurveFitter$());
tab.getCurveFitter$().notifyTabRemoved$();
this.tabbedPane.removeTabAt$I(index);
this.refreshTabTitles$();
this.refreshMenubar$();
this.refreshDataBuilder$();
return tab;
}return null;
});

Clazz.newMeth(C$, 'removeTab$org_opensourcephysics_tools_DataToolTab',  function (tab) {
return this.removeTab$I$Z(this.getTabIndex$org_opensourcephysics_tools_DataToolTab(tab), true);
});

Clazz.newMeth(C$, 'loadData$org_opensourcephysics_display_Data',  function (data) {
var tab=null;
var loadedTabs=Clazz.new_($I$(15,1));
for (var next, $next = C$.getSelfContainedData$org_opensourcephysics_display_Data(data).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
tab=this.getTab$org_opensourcephysics_display_Data(next);
if (tab != null ) {
tab.loadData$org_opensourcephysics_display_Data$Z(next, tab.replaceColumnsWithMatchingNames);
} else {
tab=this.createTab$org_opensourcephysics_display_Data(next);
this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
}loadedTabs.add$O(tab);
}
if (tab != null ) {
this.setSelectedTab$org_opensourcephysics_tools_DataToolTab(tab);
}return loadedTabs;
});

Clazz.newMeth(C$, 'loadData$org_opensourcephysics_display_DataA',  function (data) {
if (data == null ) {
return null;
}var selfContained=Clazz.new_($I$(15,1));
for (var next, $next = 0, $$next = data; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
selfContained.addAll$java_util_Collection(C$.getSelfContainedData$org_opensourcephysics_display_Data(next));
}
var tab=null;
for (var next, $next = selfContained.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (tab == null ) {
tab=this.getTab$org_opensourcephysics_display_Data(next);
if (tab != null ) {
tab.loadData$org_opensourcephysics_display_Data$Z(next, tab.replaceColumnsWithMatchingNames);
} else {
tab=this.createTab$org_opensourcephysics_display_Data(next);
this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
}} else {
var columns=C$.getDataColumns$org_opensourcephysics_display_Data(next);
columns.remove$I(0);
tab.addColumns$java_util_ArrayList$Z$Z$Z(columns, false, false, false);
}}
if (tab != null ) {
this.setSelectedTab$org_opensourcephysics_tools_DataToolTab(tab);
}return tab;
});

Clazz.newMeth(C$, 'getTab$org_opensourcephysics_display_Data',  function (data) {
var i=this.getTabIndex$org_opensourcephysics_display_Data(data);
return (i > -1) ? this.getTab$I(i) : null;
});

Clazz.newMeth(C$, 'getTab$I',  function (index) {
return ((index > -1) && (index < this.tabbedPane.getTabCount$()) ) ? this.tabbedPane.getComponentAt$I(index) : null;
});

Clazz.newMeth(C$, 'getTabCount$',  function () {
return this.tabbedPane.getTabCount$();
});

Clazz.newMeth(C$, 'getTabs$',  function () {
var tabs=Clazz.new_($I$(15,1));
for (var i=0; i < this.getTabCount$(); i++) {
tabs.add$O(this.getTab$I(i));
}
return tabs;
});

Clazz.newMeth(C$, 'open$java_io_File',  function (file) {
$I$(26).fine$S("opening " + file);
var res=Clazz.new_($I$(27,1).c$$java_io_File,[file]);
var $in=res.openReader$();
var firstLine=this.readFirstLine$java_io_Reader($in);
if (firstLine.startsWith$S("<?xml")) {
var control=Clazz.new_($I$(16,1).c$$java_io_File,[file]);
this.addTabs$org_opensourcephysics_controls_XMLControl$java_util_function_Consumer(control, ((P$.DataTool$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$java_util_ArrayList','accept$O'],  function (tabs) {
if (tabs.isEmpty$()) {
$I$(26).finest$S("no data found");
} else {
for (var tab, $tab = tabs.iterator$(); $tab.hasNext$()&&((tab=($tab.next$())),1);) {
this.b$['org.opensourcephysics.tools.DataTool'].refreshDataBuilder$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
if (tabs.size$() == 1) {
tab.fileName=this.$finals$.file.toString();
}tab.tabChanged$Z(false);
}
try {
this.$finals$.$in.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}});
})()
), Clazz.new_(P$.DataTool$4.$init$,[this, {file:file,$in:$in}])));
return;
}if (res.getString$() != null ) {
this.setMultipleTabPolicy$S(res.getString$());
var data=C$.parseData$S$S(res.getString$(), file.toString());
if (data != null ) {
var first=null;
for (var i=0; i < data.length; i++) {
var tab=this.createTab$org_opensourcephysics_display_Data(data[i]);
first=first == null  ? tab : first;
this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
if (data.length == 1) tab.fileName=file.getAbsolutePath$();
tab.tabChanged$Z(false);
}
this.setSelectedTab$org_opensourcephysics_tools_DataToolTab(first);
this.refreshDataBuilder$();
return;
}}$I$(26).finest$S("no data found");
});

Clazz.newMeth(C$, 'loadDataset$S$S',  function (content, title) {
if (content.startsWith$S("<?xml")) {
var control=Clazz.new_($I$(16,1).c$$S,[content]);
this.addTabs$org_opensourcephysics_controls_XMLControl$java_util_function_Consumer(control, ((P$.DataTool$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$java_util_ArrayList','accept$O'],  function (tabs) {
if (tabs.isEmpty$()) {
$I$(26).finest$S("no data found");
} else {
for (var tab, $tab = tabs.iterator$(); $tab.hasNext$()&&((tab=($tab.next$())),1);) {
this.b$['org.opensourcephysics.tools.DataTool'].refreshDataBuilder$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
if (tabs.size$() == 1) {
tab.fileName=this.$finals$.title;
}tab.tabChanged$Z(false);
}
}});
})()
), Clazz.new_(P$.DataTool$5.$init$,[this, {title:title}])));
return;
}this.setMultipleTabPolicy$S(content);
var data=C$.parseData$S$S(content, title);
if (data != null ) {
var first=null;
for (var i=0; i < data.length; i++) {
var tab=this.createTab$org_opensourcephysics_display_Data(data[i]);
first=first == null  ? tab : first;
this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
if (data.length == 1) tab.fileName=title;
tab.tabChanged$Z(false);
}
this.setSelectedTab$org_opensourcephysics_tools_DataToolTab(first);
return;
}$I$(26).finest$S("no data found");
});

Clazz.newMeth(C$, 'importFileIntoTab$org_opensourcephysics_tools_DataToolTab$java_io_File',  function (tab, file) {
$I$(26).fine$S("importing " + file);
var res=Clazz.new_($I$(27,1).c$$java_io_File,[file]);
var $in=res.openReader$();
var firstLine=this.readFirstLine$java_io_Reader($in);
if (firstLine.startsWith$S("<?xml")) {
var control=Clazz.new_($I$(16,1).c$$java_io_File,[file]);
p$3.getSelfContainedDataAsync$org_opensourcephysics_controls_XMLControl$Z$java_util_function_Consumer.apply(this, [control, false, ((P$.DataTool$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$java_util_ArrayList','accept$O'],  function (dataList) {
if (dataList.isEmpty$()) {
$I$(26).finest$S("no data found");
} else {
var manager=Clazz.new_($I$(28,1));
for (var next, $next = dataList.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
for (var column, $column = $I$(19).getDataColumns$org_opensourcephysics_display_Data(next).iterator$(); $column.hasNext$()&&((column=($column.next$())),1);) {
manager.addDataset$org_opensourcephysics_display_Dataset(column);
}
}
this.$finals$.tab.addColumns$org_opensourcephysics_display_Data$Z$Z$Z(manager, true, true, true);
}});
})()
), Clazz.new_(P$.DataTool$6.$init$,[this, {tab:tab}]))]);
return;
}if (res.getString$() != null ) {
var data=C$.parseData$S$S(res.getString$(), file.toString());
if (data != null ) {
tab.addColumns$org_opensourcephysics_display_Data$Z$Z$Z(data[0], true, true, true);
return;
}}$I$(26).finest$S("no data found");
});

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, replyTo) {
var control=Clazz.new_([job.getXML$()],$I$(16,1).c$$S);
if (control.failedToRead$() || (control.getObjectClass$() === Clazz.getClass(java.lang.Object) ) ) {
return;
}if (Clazz.getClass($I$(29),['getColumnNames$','getData2D$','getData3D$','getDataList$','getDatasets$','getFillColors$','getID$','getLineColors$','getName$','setID$I']).isAssignableFrom$Class(control.getObjectClass$())) {
var data=control.loadObject$O$Z$Z(null, true, true);
if (C$.isSelfContained$org_opensourcephysics_display_Data(data)) {
var tab=this.getTab$org_opensourcephysics_display_Data(data);
if (tab == null ) {
tab=this.createTab$org_opensourcephysics_display_Data(null);
var name=data.getName$();
if ((name != null ) && !name.equals$O("") ) {
tab.setName$S(name);
}this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
} else {
this.setSelectedTab$org_opensourcephysics_tools_DataToolTab(tab);
}tab.receiveJobControl$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool$org_opensourcephysics_controls_XMLControlElement(job, replyTo, control);
} else {
for (var next, $next = C$.getSelfContainedData$org_opensourcephysics_display_Data(data).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var tab=this.getTab$org_opensourcephysics_display_Data(next);
if (tab == null ) {
tab=this.createTab$org_opensourcephysics_display_Data(null);
var name=next.getName$();
if ((name != null ) && !name.equals$O("") ) {
tab.setName$S(name);
}this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
}tab.send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool(Clazz.new_($I$(30,1).c$$O,[next]), replyTo);
}
}} else {
this.addTabs$org_opensourcephysics_controls_XMLControl$java_util_function_Consumer(control, null);
}this.toFront$();
});

Clazz.newMeth(C$, 'setUseChooser$Z',  function (useChooser) {
this.useChooser=useChooser;
});

Clazz.newMeth(C$, 'isUseChooser$',  function () {
return this.useChooser;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "function":
var tab=this.getSelectedTab$();
if (tab == null ) return;
tab.tabChanged$Z(true);
tab.dataTable.refreshTable$I(8519680);
tab.statsTable.refreshStatistics$();
if (Clazz.instanceOf(e.getNewValue$(), "org.opensourcephysics.display.DataFunction")) {
var funcName=e.getNewValue$().toString();
tab.dataTable.getWorkingData$S(funcName);
}if (Clazz.instanceOf(e.getOldValue$(), "org.opensourcephysics.display.DataFunction")) {
var funcName=e.getOldValue$().toString();
tab.dataTable.removeWorkingData$S(funcName);
}if (Clazz.instanceOf(e.getNewValue$(), "java.lang.String")) {
var funcName=e.getNewValue$().toString();
if (Clazz.instanceOf(e.getOldValue$(), "java.lang.String")) {
var prevName=e.getOldValue$().toString();
tab.columnNameChanged$S$S(prevName, funcName);
} else {
tab.dataTable.getWorkingData$S(funcName);
}}tab.refreshPlot$();
tab.varPopup=null;
break;
}
});

Clazz.newMeth(C$, 'containsDuplicateValues$DA',  function (values) {
for (var i=0; i < values.length; i++) {
if (Double.isNaN$D(values[i])) {
return true;
}var n=C$.getIndex$D$DA$I(values[i], values, i);
if (n > -1) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'getIndex$D$DA$I',  function (value, array, ignoreIndex) {
for (var i=0; i < array.length; i++) {
if (i == ignoreIndex) {
continue;
}if (array[i] == value ) {
return i;
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'getRowArray$I',  function (rowCount) {
var rows=Clazz.array(Double.TYPE, [rowCount]);
for (var i=0; i < rowCount; i++) {
rows[i]=i;
}
return rows;
}, 1);

Clazz.newMeth(C$, 'parseStrings$S$S',  function (text, delimiter) {
var tokens=Clazz.new_($I$(15,1));
if (text != null ) {
var next=text;
var i=text.indexOf$S(delimiter);
if (i == -1) {
tokens.add$O(C$.stripQuotes$S(next));
text=null;
} else {
next=text.substring$I$I(0, i);
text=text.substring$I(i + 1);
while (" ".equals$O(delimiter) && (text.startsWith$S(" ") || text.startsWith$S("\t") ) ){
text=text.substring$I(1);
}
}while (text != null ){
tokens.add$O(C$.stripQuotes$S(next));
i=text.indexOf$S(delimiter);
if (i == -1) {
next=text;
tokens.add$O(C$.stripQuotes$S(next));
text=null;
} else {
next=text.substring$I$I(0, i).trim$();
text=text.substring$I(i + 1);
while (" ".equals$O(delimiter) && (text.startsWith$S(" ") || text.startsWith$S("\t") ) ){
text=text.substring$I(1);
}
}}
}return tokens.toArray$OA(Clazz.array(String, [0]));
}, 1);

Clazz.newMeth(C$, 'stripQuotes$S',  function (text) {
if (text.startsWith$S("\"")) {
var stripped=text.substring$I(1);
var n=stripped.indexOf$S("\"");
if (n > -1 && n == stripped.length$() - 1 ) {
return stripped.substring$I$I(0, n);
}}return text;
}, 1);

Clazz.newMeth(C$, 'parseDoubles$S$S',  function (text, delimiter) {
return C$.parseDoubles$SA$S(C$.parseStrings$S$S(text, delimiter), delimiter);
}, 1);

Clazz.newMeth(C$, 'parseDoubles$SA$S',  function (strings, delimiter) {
var doubles=Clazz.array(Double.TYPE, [strings.length]);
var checkComma=(delimiter != null  && !delimiter.equals$O(",") );
for (var i=0; i < strings.length; i++) {
var s=strings[i];
doubles[i]=NaN;
if (s !== ""  && s.indexOf$S("\t") < 0 ) {
try {
doubles[i]=Double.parseDouble$S(s);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
if (checkComma && s.indexOf$S(",") >= 0 ) {
try {
doubles[i]=Double.parseDouble$S(s.replace$CharSequence$CharSequence(",", "."));
} catch (e1) {
if (Clazz.exceptionOf(e1,"NumberFormatException")){
} else {
throw e1;
}
}
}} else {
throw e;
}
}
}}
return doubles;
}, 1);

Clazz.newMeth(C$, 'parseStrings$S$S$S',  function (text, rowDelimiter, colDelimiter) {
var rows=C$.parseStrings$S$S(text, rowDelimiter);
var tokens=Clazz.array(String, [rows.length, 0]);
for (var i=0; i < rows.length; i++) {
tokens[i]=C$.parseStrings$S$S(rows[i], colDelimiter);
}
return tokens;
}, 1);

Clazz.newMeth(C$, 'parseDoubles$S$S$S',  function (text, rowDelimiter, colDelimiter) {
var strings=C$.parseStrings$S$S$S(text, rowDelimiter, colDelimiter);
var doubles=Clazz.array(Double.TYPE, [strings.length, 0]);
for (var i=0; i < strings.length; i++) {
doubles[i]=C$.parseDoubles$SA$S(strings[i], null);
}
return doubles;
}, 1);

Clazz.newMeth(C$, 'containsDelimeter$S',  function (s) {
for (var i=0; i < C$.delimiters.length; i++) {
if (C$.delimiters[i] != " " && s.contains$CharSequence(C$.delimiters[i]) ) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'parseData$S$S',  function (dataString, fileName) {
var gnuPlotComment="#";
var input=null;
if (Clazz.new_($I$(18,1).c$$S,[dataString]).exists$()) return null;
if (dataString.trim$().startsWith$S("<?xml")) return null;
if (dataString.trim$().startsWith$S("<object class=")) return null;
try {
for (var i=0; i < C$.delimiters.length; i++) {
input=Clazz.new_([Clazz.new_($I$(31,1).c$$S,[dataString])],$I$(22,1).c$$java_io_Reader);
var textLine=input.readLine$();
var rows=Clazz.new_($I$(15,1));
var columns=2147483647;
var columnNames=null;
var title=null;
var titles=Clazz.new_($I$(15,1));
var isMulti=false;
var lineCount=0;
var columnStride=-1;
while (textLine != null ){
if (textLine.startsWith$S("//")) {
textLine=input.readLine$();
continue;
}if (textLine.contains$CharSequence("#")) {
textLine=textLine.trim$();
}if (textLine.startsWith$S("#")) {
var k=textLine.indexOf$S("name:");
if (k > -1) {
title=textLine.substring$I(k + 5).trim$();
}k=textLine.indexOf$S("columnNames:");
if (k > -1) {
textLine=textLine.substring$I(k + 12).trim$();
}k=textLine.indexOf$S("multi:");
if (k > -1) {
textLine=textLine.substring$I(k + 6).trim$();
isMulti=true;
if (textLine.length$() == 0) {
textLine=input.readLine$();
continue;
}} else {
textLine=input.readLine$();
continue;
}}if ((textLine.indexOf$S("Vernier Format") > -1) || (textLine.indexOf$S(".cmbl") > -1) ) {
textLine=input.readLine$();
continue;
}var strings=C$.parseStrings$S$S(textLine, C$.delimiters[i]);
var rowData=C$.parseDoubles$SA$S(strings, C$.delimiters[i]);
if (rows.isEmpty$() && (strings.length > 0) && (title == null )  ) {
for (var k=0; k < strings.length; k++) {
if (Double.isNaN$D(rowData[k]) && !strings[k].equals$O("") ) {
titles.add$O(strings[k]);
if (columnStride == -1) columnStride=k;
 else columnStride=k - columnStride;
}}
var s="";
switch (titles.size$()) {
case 0:
break;
case 1:
s=titles.get$I(0);
break;
default:
if (!isMulti) break;
s=titles.get$I(0) + "+" + (titles.size$() - 1) ;
}
if (!s.equals$O("") && !C$.containsDelimeter$S(s) ) {
title=s;
textLine=input.readLine$();
continue;
}}if (columnNames == null  && rows.isEmpty$()  && strings.length > 0 ) {
var valid=true;
for (var k=0; k < strings.length; k++) {
if (C$.containsDelimeter$S(strings[k]) || !Double.isNaN$D(rowData[k]) ) {
valid=false;
break;
}}
if (valid) {
for (var k=0; k < strings.length; k++) {
if ("".equals$O(strings[k])) {
strings[k]="?";
}}
columnNames=strings;
columns=strings.length;
textLine=input.readLine$();
continue;
}}var singleColumn=(columnNames != null  && columnNames.length == 1 );
if (strings.length > 0) {
++lineCount;
var validData=true;
var emptyData=true;
for (var k=0; k < strings.length; k++) {
if (Double.isNaN$D(rowData[k]) && !strings[k].equals$O("") ) {
validData=false;
}if (!strings[k].equals$O("")) {
emptyData=false;
}}
if (!singleColumn && emptyData && title == null    && rows.isEmpty$() ) {
validData=false;
}if (rowData.length == 1 && strings[0].contains$CharSequence(",")  && !singleColumn ) {
validData=false;
}if (validData) {
rows.add$O(rowData);
if (columns == 2147483647) {
columns=rowData.length;
} else {
columns=Math.max(rowData.length, columns);
}}}if (rows.isEmpty$() && lineCount > 10 ) {
break;
}textLine=input.readLine$();
}
if (columns > 0 && columns < 2147483647 ) {
input.close$();
var dataArray=Clazz.array(Double.TYPE, [columns, rows.size$()]);
for (var row=0; row < rows.size$(); row++) {
var rowData=rows.get$I(row);
for (var j=0; j < columns; j++) {
dataArray[j][row]=rowData.length > j ? rowData[j] : NaN;
}
}
var data=null;
var rowColumn=C$.getRowArray$I(rows.size$());
if (!isMulti || C$.loadMultipleTracksInSingleTab ) {
data=Clazz.array($I$(28), [1]);
data[0]=Clazz.new_($I$(28,1));
data[0].setName$S((title == null ) ? $I$(32).getName$S(fileName) : title);
var droppedCols=0;
 outer : for (var j=0; j < columns; j++) {
var dataset=data[0].getDataset$I(j - droppedCols);
var yColName=(columnNames != null  && columnNames.length > j  ? columnNames[j] : columns == 1 && title != null   ? title : "?");
dataset.setXYColumnNames$S$S("row", yColName);
dataset.setXColumnVisible$Z(false);
if (yColName.equals$O("?")) {
var allNaN=true;
for (var k=0; k < dataArray[j].length; k++) {
allNaN=allNaN && Double.isNaN$D(dataArray[j][k]) ;
if (!allNaN) break;
}
if (allNaN) {
data[0].removeDataset$I(j - droppedCols);
++droppedCols;
continue outer;
}}dataset.append$DA$DA(rowColumn, dataArray[j]);
}
} else {
data=Clazz.array($I$(28), [titles.size$()]);
for (var tab=0; tab < titles.size$(); tab++) {
data[tab]=Clazz.new_($I$(28,1));
data[tab].setName$S(titles.get$I(tab));
var dataset=data[tab].getDataset$I(0);
var yColName=columnNames != null  && columnNames.length > 0  ? columnNames[0] : "?";
dataset.setXYColumnNames$S$S("row", yColName);
dataset.setXColumnVisible$Z(false);
var values=dataArray[1 + (tab * columnStride)];
var rowNums=rowColumn;
var startIndex=0;
var endIndex=values.length - 1;
for (var k=0; k < values.length; k++) {
if (!Double.isNaN$D(values[k])) break;
++startIndex;
}
for (var k=values.length - 1; k >= 0; k--) {
if (!Double.isNaN$D(values[k])) break;
--endIndex;
}
if (startIndex > 0 || endIndex < values.length - 1 ) {
values=$I$(33).copyOfRange$DA$I$I(dataArray[0], startIndex, endIndex + 1);
rowNums=C$.getRowArray$I(endIndex - startIndex + 1);
}dataset.append$DA$DA(rowNums, values);
for (var j=0; j < columnStride; j++) {
var index=1 + (tab * columnStride) + j ;
dataset=data[tab].getDataset$I(1 + j);
yColName=columnNames != null  && columnNames.length > index  ? columnNames[index] : "?";
dataset.setXYColumnNames$S$S("row", yColName);
dataset.setXColumnVisible$Z(false);
values=$I$(33).copyOfRange$DA$I$I(dataArray[index], startIndex, endIndex + 1);
dataset.append$DA$DA(rowNums, values);
}
}
}$I$(26).finest$S("data found using delimiter \"" + C$.delimiters[i] + "\"" );
return data;
}input.close$();
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
try {
if (input != null ) input.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'readFirstLine$java_io_Reader',  function ($in) {
var input=null;
if (Clazz.instanceOf($in, "java.io.BufferedReader")) {
input=$in;
} else {
input=Clazz.new_($I$(22,1).c$$java_io_Reader,[$in]);
}var openingLine;
try {
openingLine=input.readLine$();
while ((openingLine == null ) || openingLine.equals$O("") ){
openingLine=input.readLine$();
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
try {
input.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return openingLine;
});

Clazz.newMeth(C$, 'setupDelimiterMenu$javax_swing_JMenu',  function (menu) {
var setDelimiterAction=((P$.DataTool$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(34,"setDelimiter$S",[e.getActionCommand$()]);
this.b$['org.opensourcephysics.tools.DataTool'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.DataTool$7));
var delimiterButtonGroup=Clazz.new_($I$(36,1));
menu.removeAll$();
var delimiter=$I$(34).getDelimiter$();
for (var key, $key = $I$(34).getDelimiters$().keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var nextDelimiter=$I$(34).getDelimiters$().get$O(key);
var item=Clazz.new_($I$(37,1).c$$S,[key]);
item.setActionCommand$S(nextDelimiter);
item.addActionListener$java_awt_event_ActionListener(setDelimiterAction);
delimiterButtonGroup.add$javax_swing_AbstractButton(item);
menu.add$javax_swing_JMenuItem(item);
if (delimiter.equals$O(nextDelimiter)) item.setSelected$Z(true);
}
});

Clazz.newMeth(C$, 'getUniqueTabName$S',  function (proposed) {
if ((proposed == null ) || proposed.equals$O("") ) {
proposed=$I$(4).getString$S("DataToolTab.DefaultName");
}var taken=Clazz.new_($I$(15,1));
for (var i=0; i < this.getTabCount$(); i++) {
var tab=this.getTab$I(i);
taken.add$O(tab.getName$());
}
if (!taken.contains$O(proposed)) {
return proposed;
}var subscript=$I$(38).getSubscript$S(proposed);
try {
Integer.parseInt$S(subscript);
proposed=$I$(38).removeSubscript$S(proposed);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
proposed+="_";
var i=1;
var name=proposed + i;
while (taken.contains$O(name)){
++i;
name=proposed + i;
}
return name;
});

Clazz.newMeth(C$, 'getSelfContainedDataAsync$org_opensourcephysics_controls_XMLControl$Z$java_util_function_Consumer',  function (control, useChooser, whenDone) {
var IDs=Clazz.new_($I$(39,1));
var dataList=Clazz.new_($I$(15,1));
var whenChosen=((P$.DataTool$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$java_util_List','accept$O'],  function (xmlControls) {
for (var prop, $prop = xmlControls.iterator$(); $prop.hasNext$()&&((prop=($prop.next$())),1);) {
var next=prop;
var data=null;
if (Clazz.instanceOf(next, "org.opensourcephysics.controls.XMLControlElement")) {
var element=next;
data=element.loadObject$O$Z$Z(null, true, true);
} else {
data=next.loadObject$O(null);
}if (data != null ) {
for (var nextData, $nextData = $I$(19).getSelfContainedData$org_opensourcephysics_display_Data(data).iterator$(); $nextData.hasNext$()&&((nextData=($nextData.next$())),1);) {
var id=Integer.valueOf$I(nextData.getID$());
if (!this.$finals$.IDs.contains$O(id)) {
this.$finals$.IDs.add$O(id);
this.$finals$.dataList.add$O(nextData);
if (Clazz.instanceOf(nextData, "org.opensourcephysics.display.DatasetManager")) {
for (var dataset, $dataset = (nextData).getDatasetsRaw$().iterator$(); $dataset.hasNext$()&&((dataset=($dataset.next$())),1);) {
this.$finals$.dataList.remove$O(dataset);
id=Integer.valueOf$I(dataset.getID$());
this.$finals$.IDs.add$O(id);
}
}}}
}}
if (this.$finals$.whenDone != null ) this.$finals$.whenDone.accept$O(this.$finals$.dataList);
});
})()
), Clazz.new_(P$.DataTool$8.$init$,[this, {dataList:dataList,IDs:IDs,whenDone:whenDone}]));
if (useChooser) {
var chooser=Clazz.new_([$I$(4).getString$S("Chooser.Title"), $I$(4).getString$S("Chooser.Label"), null],$I$(40,1).c$$S$S$java_awt_Component);
chooser.chooseAsync$org_opensourcephysics_controls_XMLControl$Class$Runnable(control, Clazz.getClass($I$(29),['getColumnNames$','getData2D$','getData3D$','getDataList$','getDatasets$','getFillColors$','getID$','getLineColors$','getName$','setID$I']), ((P$.DataTool$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.whenChosen.accept$O(this.$finals$.chooser.getList$());
});
})()
), Clazz.new_(P$.DataTool$9.$init$,[this, {whenChosen:whenChosen,chooser:chooser}])));
} else {
var tree=Clazz.new_($I$(41,1).c$$org_opensourcephysics_controls_XMLControl,[control]);
tree.setHighlightedClass$Class(Clazz.getClass($I$(29),['getColumnNames$','getData2D$','getData3D$','getDataList$','getDatasets$','getFillColors$','getID$','getLineColors$','getName$','setID$I']));
tree.selectHighlightedProperties$();
var xmlControls=tree.getSelectedProperties$();
if (xmlControls.isEmpty$()) {
$I$(2,"showMessageDialog$java_awt_Component$O",[null, $I$(4).getString$S("Dialog.NoDatasets.Message")]);
}whenChosen.accept$O(xmlControls);
}}, p$3);

Clazz.newMeth(C$, 'loadTabsFromXMLAsync$org_opensourcephysics_controls_XMLControl$java_util_function_Consumer',  function (control, whenLoaded) {
p$3.getSelfContainedDataAsync$org_opensourcephysics_controls_XMLControl$Z$java_util_function_Consumer.apply(this, [control, this.useChooser, ((P$.DataTool$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$java_util_ArrayList','accept$O'],  function (dataList) {
var loadedTabs=Clazz.new_($I$(15,1));
for (var next, $next = dataList.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
loadedTabs.add$O(this.b$['org.opensourcephysics.tools.DataTool'].createTab$org_opensourcephysics_display_Data.apply(this.b$['org.opensourcephysics.tools.DataTool'], [next]));
}
this.$finals$.whenLoaded.accept$O(loadedTabs);
});
})()
), Clazz.new_(P$.DataTool$10.$init$,[this, {whenLoaded:whenLoaded}]))]);
}, p$3);

Clazz.newMeth(C$, 'createDatasetFromYPoints$org_opensourcephysics_display_Dataset$org_opensourcephysics_display_Dataset',  function (xColumn, yColumn) {
var dataset=Clazz.new_($I$(42,1));
dataset.setXYColumnNames$S$S(xColumn.getYColumnName$(), yColumn.getYColumnName$());
dataset.setLineColor$java_awt_Color(yColumn.getLineColor$());
dataset.setMarkerShape$I(yColumn.getMarkerShape$());
dataset.setMarkerColor$java_awt_Color$java_awt_Color(yColumn.getFillColor$(), yColumn.getEdgeColor$());
var xPoints=xColumn.getYPoints$();
var yPoints=yColumn.getYPoints$();
if (xPoints.length != yPoints.length) {
var len=Math.min(xPoints.length, yPoints.length);
var newPoints=Clazz.array(Double.TYPE, [len]);
for (var i=0; i < len; i++) {
newPoints[i]=len < xPoints.length ? xPoints[i] : yPoints[i];
}
if (len < xPoints.length) xPoints=newPoints;
 else yPoints=newPoints;
}dataset.append$DA$DA(xPoints, yPoints);
return dataset;
}, 1);

Clazz.newMeth(C$, 'getDatasets$org_opensourcephysics_display_Data',  function (source) {
var datasets=(Clazz.instanceOf(source, "org.opensourcephysics.display.DatasetManager") ? (source).getDatasetsRaw$() : source.getDatasets$());
if (datasets != null ) {
return datasets;
}datasets=Clazz.new_($I$(15,1));
var data2D=source.getData2D$();
if ((data2D == null ) || (data2D.length == 0) || (data2D[0] == null )  ) {
return datasets;
}var colNames=source.getColumnNames$();
if (colNames == null ) {
colNames=Clazz.array(String, [2]);
if (data2D.length == 1) {
colNames[0]="n";
}}var n=Math.max(2, data2D.length);
if (colNames.length > n) {
++n;
}colNames=C$.getColumnNames$SA$I(colNames, n);
var xPointsAreRowNumbers=colNames.length > data2D.length;
var xPoints=xPointsAreRowNumbers ? C$.getRowArray$I(data2D[0].length) : data2D[0];
for (var i=1; i < colNames.length; i++) {
var yPoints=xPointsAreRowNumbers ? data2D[i - 1] : data2D[i];
var dataset=C$.createDataset$DA$DA$S$S$I$org_opensourcephysics_display_Data(xPoints, yPoints, colNames[0], colNames[i], i, source);
if (dataset != null ) {
datasets.add$O(dataset);
}}
return datasets;
}, 1);

Clazz.newMeth(C$, 'getAllDatasets$org_opensourcephysics_display_Data',  function (source) {
var datasets=Clazz.new_($I$(15,1));
for (var next, $next = C$.getSelfContainedData$org_opensourcephysics_display_Data(source).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
datasets.addAll$java_util_Collection(C$.getDatasets$org_opensourcephysics_display_Data(next));
}
return datasets;
}, 1);

Clazz.newMeth(C$, 'getSelfContainedData$org_opensourcephysics_display_Data',  function (container) {
C$.processedData.clear$();
var list=C$.getSelfContainedDataWithTrap$org_opensourcephysics_display_Data(container);
return list;
}, 1);

Clazz.newMeth(C$, 'getDataColumns$org_opensourcephysics_display_Data',  function (source) {
if (!C$.isSelfContained$org_opensourcephysics_display_Data(source)) {
return null;
}var columns=Clazz.new_($I$(15,1));
var datasetList=(Clazz.instanceOf(source, "org.opensourcephysics.display.DatasetManager") ? (source).getDatasetsRaw$() : source.getDatasets$());
if (datasetList != null ) {
for (var next, $next = datasetList.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var newColumns=C$.createDataColumns$org_opensourcephysics_display_Dataset(next);
for (var newCol, $newCol = newColumns.iterator$(); $newCol.hasNext$()&&((newCol=($newCol.next$())),1);) {
var isDup=false;
for (var existing, $existing = columns.iterator$(); $existing.hasNext$()&&((existing=($existing.next$())),1);) {
if (existing.getYColumnName$().equals$O(newCol.getYColumnName$())) {
var exPts=existing.getYPoints$();
var nextPts=newCol.getYPoints$();
if (exPts.length == nextPts.length) {
isDup=true;
for (var i=0; i < exPts.length; i++) {
isDup=exPts[i] == nextPts[i]  && isDup ;
}
}}}
if (!isDup) columns.add$O(newCol);
}
}
} else {
var data2D=source.getData2D$();
if ((data2D == null ) || (data2D.length == 0) || (data2D[0] == null )  ) {
return null;
}var colNames=source.getColumnNames$();
if (colNames == null ) {
colNames=Clazz.array(String, [2]);
if (data2D.length == 1) {
colNames[0]="n";
}}var n=Math.max(2, data2D.length);
if (colNames.length > n) {
++n;
}colNames=C$.getColumnNames$SA$I(colNames, n);
var includeRows=colNames.length > data2D.length;
var index=data2D[0].length;
for (var i=0; i < data2D.length; i++) {
if (data2D[i] != null ) {
index=Math.max(index, data2D[i].length);
}}
for (var i=0; i < colNames.length; i++) {
var colData=includeRows ? (i == 0) ? C$.getRowArray$I(index) : data2D[i - 1] : data2D[i];
var dataset=C$.createDataColumn$DA$S$I$org_opensourcephysics_display_Data(colData, colNames[i], i, source);
if (dataset != null ) {
columns.add$O(dataset);
}}
}return columns;
}, 1);

Clazz.newMeth(C$, 'getAllDataColumns$org_opensourcephysics_display_Data',  function (source) {
var columns=Clazz.new_($I$(15,1));
for (var next, $next = C$.getSelfContainedData$org_opensourcephysics_display_Data(source).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
columns.addAll$java_util_Collection(C$.getDataColumns$org_opensourcephysics_display_Data(next));
}
return columns;
}, 1);

Clazz.newMeth(C$, 'getColumnNames$SA$I',  function (proposed, nameCount) {
var colNames=proposed;
if (colNames.length != nameCount) {
colNames=Clazz.array(String, [nameCount]);
var len=Math.min(proposed.length, colNames.length);
System.arraycopy$O$I$O$I$I(proposed, 0, colNames, 0, len);
}var taken=Clazz.new_($I$(15,1));
var c="A";
for (var i=0; i < nameCount; i++) {
var next=colNames[i];
if ((next != null ) && !taken.contains$O(next) ) {
taken.add$O(next);
continue;
}if (next == null ) {
next=String.valueOf$C(($p$=c,c=String.fromCharCode(c.$c()+1),$p$));
while (taken.contains$O(next)){
next=String.valueOf$C(($p$=c,c=String.fromCharCode(c.$c()+1),$p$));
}
colNames[i]=next;
taken.add$O(next);
}}
return colNames;
}, 1);

Clazz.newMeth(C$, 'getSelfContainedDataWithTrap$org_opensourcephysics_display_Data',  function (source) {
var list=Clazz.new_($I$(15,1));
if ((source == null ) || C$.processedData.contains$O(source) ) {
return list;
}C$.processedData.add$O(source);
if (C$.isSelfContained$org_opensourcephysics_display_Data(source)) {
list.add$O(source);
} else {
for (var next, $next = source.getDataList$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var subList=C$.getSelfContainedDataWithTrap$org_opensourcephysics_display_Data(next);
list.addAll$java_util_Collection(subList);
}
}return list;
}, 1);

Clazz.newMeth(C$, 'isSelfContained$org_opensourcephysics_display_Data',  function (data) {
return data.getDataList$() == null ;
}, 1);

Clazz.newMeth(C$, 'createDataColumns$org_opensourcephysics_display_Dataset',  function (source) {
var columns=Clazz.new_($I$(15,1));
if (Clazz.instanceOf(source, "org.opensourcephysics.tools.DataColumn")) {
columns.add$O(source);
return columns;
}var colNames=source.getColumnNames$();
var rowName="row";
for (var i=0; i < 2; i++) {
if ((i == 0) && !source.isXColumnVisible$() ) {
continue;
}if ((i == 1) && !source.isYColumnVisible$() ) {
continue;
}var column=Clazz.new_($I$(43,1));
column.setName$S(source.getName$());
column.setXYColumnNames$S$S(rowName, colNames[i]);
column.setConnected$Z(source.isConnected$());
column.setLineColor$java_awt_Color(source.getLineColor$());
column.setMarkerSize$I(source.getMarkerSize$());
column.setMarkerShape$I(source.getMarkerShape$());
column.setMarkerColor$java_awt_Color$java_awt_Color(source.getFillColor$(), source.getLineColor$());
column.setID$I(source.getID$());
column.setColumnID$I(i);
column.setPoints$DA$I((i == 0) ? source.getXPointsRaw$() : source.isShifted$() ? source.getYPoints$() : source.getYPointsRaw$(), source.getIndex$());
column.setXColumnVisible$Z(false);
columns.add$O(column);
}
return columns;
}, 1);

Clazz.newMeth(C$, 'createDataColumn$DA$S$I$org_opensourcephysics_display_Data',  function (data, columnName, columnID, source) {
if (data == null ) {
return null;
}var column=Clazz.new_($I$(43,1));
column.setXYColumnNames$S$S("row", columnName);
column.setConnected$Z(true);
var lineColors=source.getLineColors$();
if ((lineColors != null ) && (lineColors[columnID] != null ) ) {
column.setLineColor$java_awt_Color(lineColors[columnID]);
} else {
column.setLineColor$java_awt_Color($I$(44).getLineColor$I(columnID));
}column.setMarkerShape$I(2);
var fillColors=source.getFillColors$();
if ((lineColors != null ) && (lineColors[columnID] != null ) && (fillColors != null ) && (fillColors[columnID] != null )  ) {
column.setMarkerColor$java_awt_Color$java_awt_Color(fillColors[columnID], lineColors[columnID]);
} else {
column.setMarkerColor$java_awt_Color$java_awt_Color($I$(44).getMarkerColor$I(columnID), $I$(44).getLineColor$I(columnID));
}column.setID$I(source.getID$());
column.setColumnID$I(columnID);
column.setPoints$DA$I(data, data.length);
return column;
}, 1);

Clazz.newMeth(C$, 'createDataset$DA$DA$S$S$I$org_opensourcephysics_display_Data',  function (xPoints, yPoints, xName, yName, columnID, source) {
if (yPoints == null ) {
return null;
}var dataset=Clazz.new_($I$(42,1));
dataset.setXYColumnNames$S$S(xName, yName);
dataset.setConnected$Z(true);
var lineColors=source.getLineColors$();
if ((lineColors != null ) && (lineColors[columnID] != null ) ) {
dataset.setLineColor$java_awt_Color(lineColors[columnID]);
} else {
dataset.setLineColor$java_awt_Color($I$(44).getLineColor$I(columnID));
}dataset.setMarkerShape$I(2);
var fillColors=source.getFillColors$();
if ((lineColors != null ) && (lineColors[columnID] != null ) && (fillColors != null ) && (fillColors[columnID] != null )  ) {
dataset.setMarkerColor$java_awt_Color$java_awt_Color(fillColors[columnID], lineColors[columnID]);
} else {
dataset.setMarkerColor$java_awt_Color$java_awt_Color($I$(44).getMarkerColor$I(columnID), $I$(44).getLineColor$I(columnID));
}dataset.setID$I(source.getID$());
dataset.append$DA$DA(xPoints, yPoints);
return dataset;
}, 1);

Clazz.newMeth(C$, 'copyDataset$org_opensourcephysics_display_Dataset$org_opensourcephysics_display_Dataset$Z',  function (source, target, includeDataAndID) {
if (target == null ) {
target=Clazz.new_($I$(42,1));
}if (includeDataAndID) {
target.clear$();
var x=source.getXPointsRaw$();
var y=(source.isShifted$() ? source.getYPoints$() : source.getYPointsRaw$());
target.append$DA$DA$I(x, y, source.getIndex$());
target.setID$I(source.getID$());
}target.setName$S(source.getName$());
target.setXYColumnNames$S$S(source.getXColumnName$(), source.getYColumnName$());
target.setMarkerShape$I(source.getMarkerShape$());
target.setMarkerSize$I(source.getMarkerSize$());
var fill=source.getFillColor$();
var edge=source.getEdgeColor$();
target.setMarkerColor$java_awt_Color$java_awt_Color(fill, edge);
target.setLineColor$java_awt_Color(source.getLineColor$());
target.setConnected$Z(source.isConnected$());
target.setXColumnVisible$Z(source.isXColumnVisible$());
target.setYColumnVisible$Z(source.isYColumnVisible$());
return target;
}, 1);

Clazz.newMeth(C$, 'insert$D$DA$I',  function (input, array, trend) {
var n=array.length;
var newArray=Clazz.array(Double.TYPE, [n + 1]);
if (trend == 0) {
System.arraycopy$O$I$O$I$I(array, 0, newArray, 0, n);
newArray[n]=input;
} else if (trend > 0) {
for (var i=0; i < n; i++) {
if (input < array[i] ) {
System.arraycopy$O$I$O$I$I(array, 0, newArray, 0, i);
System.arraycopy$O$I$O$I$I(array, i, newArray, i + 1, n - i);
newArray[i]=input;
return newArray;
}}
System.arraycopy$O$I$O$I$I(array, 0, newArray, 0, n);
newArray[n]=input;
} else {
for (var i=0; i < n; i++) {
if (input > array[i] ) {
System.arraycopy$O$I$O$I$I(array, 0, newArray, 0, i);
System.arraycopy$O$I$O$I$I(array, i, newArray, i + 1, n - i);
newArray[i]=input;
return newArray;
}}
System.arraycopy$O$I$O$I$I(array, 0, newArray, 0, n);
newArray[n]=input;
}return newArray;
}, 1);

Clazz.newMeth(C$, 'addTab$org_opensourcephysics_tools_DataToolTab',  function (tab) {
if (this.getTabCount$() == 1) {
var prev=this.getTab$I(0);
if (prev.originatorID == 0) {
prev.tabChanged$Z(false);
this.removeTab$I$Z(0, false);
}}tab.dataTool=this;
tab.setName$S(this.getUniqueTabName$S(tab.getName$()));
this.tabbedPane.addTab$S$java_awt_Component("", tab);
tab.setFontLevel$I($I$(13).getLevel$());
this.tabbedPane.setSelectedComponent$java_awt_Component(tab);
this.refreshTabTitles$();
this.refreshMenubar$();
});

Clazz.newMeth(C$, 'saveChangesAt$I',  function (i) {
if ($I$(17).appletMode) {
return true;
}var tab=this.getTab$I(i);
if (!tab.tabChanged) {
return true;
}var name=tab.getName$();
if ($I$(4).getString$S("DataToolTab.DefaultName").equals$O(name) && (tab.originatorID == 0) ) {
return true;
}var selected=$I$(2,"showConfirmDialog$java_awt_Component$O$S$I",[this, $I$(4).getString$S("DataTool.Dialog.SaveChanges.Message1") + " \"" + name + "\" " + $I$(4).getString$S("DataTool.Dialog.SaveChanges.Message2") , $I$(4).getString$S("DataTool.Dialog.SaveChanges.Title"), 1]);
if (selected == 2) {
return false;
}if (selected == 0) {
if (this.save$org_opensourcephysics_tools_DataToolTab$S(tab, tab.fileName) == null ) {
return false;
}}return true;
});

Clazz.newMeth(C$, 'getSelectedTab$',  function () {
return this.tabbedPane.getSelectedComponent$();
});

Clazz.newMeth(C$, 'setSelectedTab$org_opensourcephysics_tools_DataToolTab',  function (tab) {
this.tabbedPane.setSelectedComponent$java_awt_Component(tab);
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.removeAllTabs$();
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
if (this.getJMenuBar$() == null ) return;
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
$I$(13).setFonts$O$I(this.emptyMenubar, level);
$I$(13).setFonts$O$I(this.fileMenu, level);
$I$(13).setFonts$O$I(this.editMenu, level);
var factor=$I$(13).getFactor$I(level);
C$.buttonHeight=((factor * 28)|0);
if (this.tabbedPane != null ) {
for (var i=0; i < this.getTabCount$(); i++) {
this.getTab$I(i).setFontLevel$I(level);
}
}if (this.dataBuilder != null ) {
this.dataBuilder.setFontLevel$I(level);
}if (this.fontSizeGroup != null ) {
var e=this.fontSizeGroup.getElements$();
for (; e.hasMoreElements$(); ) {
var button=e.nextElement$();
var i=Integer.parseInt$S(button.getActionCommand$());
if (i == $I$(13).getLevel$()) {
button.setSelected$Z(true);
}}
}$I$(26).setFonts$I(level);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (this.contentPane.getPreferredSize$().equals$O(C$.dim)) {
var f=1 + (0.2 * $I$(13).getLevel$());
var screen=$I$(45).getDefaultToolkit$().getScreenSize$();
var w=Math.min(screen.width - 40, ((C$.dim.width * f)|0));
var h=Math.min(screen.height - 100, ((C$.dim.height * f)|0));
this.contentPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(14,1).c$$I$I,[w, h + 1]));
this.pack$();
var dim=$I$(45).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
if (!this.standAlone) this.setLocation$I$I(x, y);
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

Clazz.newMeth(C$, 'getFitBuilder$',  function () {
if (this.fitBuilder == null ) {
this.fitBuilder=Clazz.new_($I$(46,1).c$$java_awt_Component$Z,[this, false]);
this.fitBuilder.setFontLevel$I($I$(13).getLevel$());
this.fitBuilder.setHelpPath$S("fit_builder_help.html");
this.fitBuilder.autoloadFits$();
}return this.fitBuilder;
});

Clazz.newMeth(C$, 'write$S$S',  function (text, fileName) {
var n=fileName.lastIndexOf$S("/");
if (n < 0) {
n=fileName.lastIndexOf$S("\\");
}if (n > 0) {
var dir=fileName.substring$I$I(0, n + 1);
var file=Clazz.new_($I$(18,1).c$$S,[dir]);
if (!file.exists$() && !file.mkdir$() ) {
return null;
}}try {
var file=Clazz.new_($I$(18,1).c$$S,[fileName]);
if (file.exists$()) {
if (!file.canWrite$()) {
$I$(2,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(47).getString$S("Dialog.ReadOnly.Message"), $I$(47).getString$S("Dialog.ReadOnly.Title"), -1]);
return null;
}var selected=$I$(2,"showConfirmDialog$java_awt_Component$O$S$I",[null, $I$(4).getString$S("Tool.Dialog.ReplaceFile.Message") + " " + file.getName$() + "?" , $I$(4).getString$S("Tool.Dialog.ReplaceFile.Title"), 1]);
if (selected != 0) {
return null;
}}var stream=Clazz.new_($I$(48,1).c$$java_io_File,[file]);
var charset=$I$(49).forName$S("UTF-8");
C$.write$S$java_io_Writer(text, Clazz.new_($I$(50,1).c$$java_io_OutputStream$java_nio_charset_Charset,[stream, charset]));
if (file.exists$()) {
return file.getAbsolutePath$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'write$S$java_io_Writer',  function (text, out) {
try {
var output=Clazz.new_($I$(51,1).c$$java_io_Writer,[out]);
output.write$S(text);
output.flush$();
output.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'open$',  function () {
$I$(17).getChooser$().showOpenDialog$java_awt_Component$Runnable$Runnable(null, ((P$.DataTool$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(17).chooserDir=$I$(17).getChooser$().getCurrentDirectory$().toString();
this.b$['org.opensourcephysics.tools.DataTool'].open$java_io_File.apply(this.b$['org.opensourcephysics.tools.DataTool'], [$I$(17).getChooser$().getSelectedFile$()]);
});
})()
), Clazz.new_(P$.DataTool$11.$init$,[this, null])), null);
});

Clazz.newMeth(C$, 'importFileIntoTab$org_opensourcephysics_tools_DataToolTab',  function (tab) {
$I$(17).getChooser$().showOpenDialog$java_awt_Component$Runnable$Runnable(tab, ((P$.DataTool$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(17).chooserDir=$I$(17).getChooser$().getCurrentDirectory$().toString();
this.b$['org.opensourcephysics.tools.DataTool'].importFileIntoTab$org_opensourcephysics_tools_DataToolTab$java_io_File.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.$finals$.tab, $I$(17).getChooser$().getSelectedFile$()]);
});
})()
), Clazz.new_(P$.DataTool$12.$init$,[this, {tab:tab}])), null);
});

Clazz.newMeth(C$, 'save$S',  function (fileName) {
return this.save$org_opensourcephysics_tools_DataToolTab$S(this.getSelectedTab$(), fileName);
});

Clazz.newMeth(C$, 'save$org_opensourcephysics_tools_DataToolTab$S',  function (tab, fileName) {
if ((fileName == null ) || fileName.equals$O("") ) {
return this.saveAs$();
}var control=Clazz.new_($I$(16,1).c$$O,[tab]);
if (control.write$S(fileName) == null ) {
return null;
}tab.fileName=fileName;
tab.tabChanged$Z(false);
return fileName;
});

Clazz.newMeth(C$, 'saveAs$',  function () {
var result=$I$(17).getChooser$().showSaveDialog$java_awt_Component(this);
if (result == 0) {
$I$(17).chooserDir=$I$(17).getChooser$().getCurrentDirectory$().toString();
var file=$I$(17).getChooser$().getSelectedFile$();
if (file.exists$()) {
var selected=$I$(2,"showConfirmDialog$java_awt_Component$O$S$I",[null, $I$(4).getString$S("Tool.Dialog.ReplaceFile.Message") + " " + file.getName$() + "?" , $I$(4).getString$S("Tool.Dialog.ReplaceFile.Title"), 1]);
if (selected != 0) {
return null;
}}var fileName=file.getAbsolutePath$();
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return null;
}if ($I$(32).getExtension$S(fileName) == null ) {
fileName+=".xml";
}return this.save$S($I$(32).getRelativePath$S(fileName));
}return null;
});

Clazz.newMeth(C$, 'getTabIndex$org_opensourcephysics_display_Data',  function (data) {
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
var tab=this.tabbedPane.getComponentAt$I(i);
if (tab.isOwnedBy$org_opensourcephysics_display_Data(data)) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'getTabIndex$org_opensourcephysics_tools_DataToolTab',  function (tab) {
for (var i=0; i < this.tabbedPane.getTabCount$(); i++) {
if (tab === this.tabbedPane.getComponentAt$I(i) ) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'c$$S$S',  function (title, name) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
this.setName$S(name);
this.createGUI$();
$I$(52).addTool$S$org_opensourcephysics_tools_Tool(name, this);
$I$(4,"addPropertyChangeListener$S$java_beans_PropertyChangeListener",["locale", ((P$.DataTool$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$13.$init$,[this, null]))]);
var fileDropHandler=Clazz.new_($I$(53,1),[this, null]);
this.tabbedPane.setTransferHandler$javax_swing_TransferHandler(fileDropHandler);
this.setTransferHandler$javax_swing_TransferHandler(fileDropHandler);
}, 1);

Clazz.newMeth(C$, 'removeAllButTab$I',  function (index) {
for (var i=this.tabbedPane.getTabCount$() - 1; i >= 0; i--) {
if (i == index) {
continue;
}if (!this.saveChangesAt$I(i)) {
return false;
}var tab=this.getTab$I(i);
this.getFitBuilder$().curveFitters.remove$O(tab.getCurveFitter$());
tab.getCurveFitter$().notifyTabRemoved$();
this.tabbedPane.removeTabAt$I(i);
}
this.refreshTabTitles$();
this.refreshDataBuilder$();
return true;
});

Clazz.newMeth(C$, 'removeAllTabs$',  function () {
for (var i=this.tabbedPane.getTabCount$() - 1; i >= 0; i--) {
if (!this.saveChangesAt$I(i)) {
return false;
}var tab=this.getTab$I(i);
this.getFitBuilder$().curveFitters.remove$O(tab.getCurveFitter$());
tab.getCurveFitter$().notifyTabRemoved$();
this.tabbedPane.removeTabAt$I(i);
}
this.refreshMenubar$();
this.refreshDataBuilder$();
return true;
});

Clazz.newMeth(C$, 'refreshTabTitles$',  function () {
for (var i=0, n=this.tabbedPane.getTabCount$(); i < n; i++) {
this.tabbedPane.setTitleAt$I$S(i, (this.tabbedPane.getComponentAt$I(i)).getName$());
}
});

Clazz.newMeth(C$, 'refreshMenubar$',  function () {
if (this.getTabCount$() == 0) {
this.emptyMenubar.add$javax_swing_JMenu(this.displayMenu);
this.emptyMenubar.add$javax_swing_JMenu(this.helpMenu);
this.setJMenuBar$javax_swing_JMenuBar(this.emptyMenubar);
} else {
this.menubar.add$javax_swing_JMenu(this.displayMenu);
this.menubar.add$javax_swing_JMenu(this.helpMenu);
this.setJMenuBar$javax_swing_JMenuBar(this.menubar);
}});

Clazz.newMeth(C$, 'getDataBuilder$',  function () {
if (this.dataBuilder == null ) {
this.dataBuilder=Clazz.new_($I$(54,1).c$$org_opensourcephysics_tools_DataTool,[this]);
this.dataBuilder.setFontLevel$I($I$(13).getLevel$());
this.dataBuilder.addPropertyChangeListener$S$java_beans_PropertyChangeListener("function", this);
}this.refreshDataBuilder$();
return this.dataBuilder;
});

Clazz.newMeth(C$, 'refreshDataBuilder$',  function () {
if (this.dataBuilder != null ) {
this.dataBuilder.refreshPanels$();
}});

Clazz.newMeth(C$, 'showHelp$',  function () {
var fileName=C$.helpName;
var helpPath=$I$(32).getResolvedPath$S$S(fileName, C$.helpBase);
if ($I$(55).getResource$S(helpPath) != null ) {
$I$(56).displayURL$S(helpPath);
} else {
fileName="data_tool_help.html";
var classBase="/org/opensourcephysics/resources/tools/html/";
helpPath=$I$(32).getResolvedPath$S$S(fileName, classBase);
if ((C$.helpFrame == null ) || !helpPath.equals$O(C$.helpFrame.getTitle$()) ) {
C$.helpFrame=Clazz.new_($I$(57,1).c$$S,[helpPath]);
C$.helpFrame.enableHyperlinks$();
C$.helpFrame.setSize$I$I(800, 600);
var dim=$I$(45).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - C$.helpFrame.getBounds$().width)/2|0);
var y=((dim.height - C$.helpFrame.getBounds$().height)/2|0);
C$.helpFrame.setLocation$I$I(x, y);
}C$.helpFrame.setVisible$Z(true);
}}, 1);

Clazz.newMeth(C$, 'setDefaultCloseOperation$I',  function (operation) {
if ((operation == 3)) {
this.exitOnClose=true;
operation=0;
}if ((operation != 0)) {
this.saveChangesOnClose=false;
}C$.superclazz.prototype.setDefaultCloseOperation$I.apply(this, [operation]);
});

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'finalize$',  function () {
C$.superclazz.prototype.finalize$.apply(this, []);
});

Clazz.newMeth(C$, 'createGUI$',  function () {
var f=1 + 0.25 * $I$(13).getLevel$();
var used=Clazz.new_([((C$.dim.width * f)|0), ((C$.dim.height * f)|0)],$I$(14,1).c$$I$I);
this.contentPane.setPreferredSize$java_awt_Dimension(used);
this.setContentPane$java_awt_Container(this.contentPane);
var centerPanel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(11,1).c$$java_awt_LayoutManager);
this.contentPane.add$java_awt_Component$O(centerPanel, "Center");
this.setDefaultCloseOperation$I(0);
this.addWindowListener$java_awt_event_WindowListener(((P$.DataTool$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].exitItem.doClick$I(0);
});
})()
), Clazz.new_($I$(20,1),[this, null],P$.DataTool$14)));
this.tabbedPane=Clazz.new_($I$(58,1).c$$I,[1]);
centerPanel.add$java_awt_Component$O(this.tabbedPane, "Center");
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.DataTool$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var tab=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
if (tab != null ) {
tab.refreshData$();
tab.dataTable.refreshTable$I(4);
tab.statsTable.refreshStatistics$();
tab.propsTable.refreshTable$();
tab.refreshPlot$Z(true);
this.b$['org.opensourcephysics.tools.DataTool'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
tab.dataTable.requestFocusInWindow$();
if (tab.dataTable.workingData != null ) {
var $var=tab.dataTable.workingData.getXColumnName$();
$var=$I$(38).removeSubscripting$S($var);
this.b$['org.opensourcephysics.tools.DataTool'].getFitBuilder$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).setDefaultVariables$SA(Clazz.array(String, -1, [$var]));
}}});
})()
), Clazz.new_(P$.DataTool$15.$init$,[this, null])));
this.tabbedPane.addMouseListener$java_awt_event_MouseListener(((P$.DataTool$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(17).isPopupTrigger$java_awt_event_InputEvent(e)) {
var index=this.b$['org.opensourcephysics.tools.DataTool'].tabbedPane.getSelectedIndex$();
var popup=Clazz.new_($I$(59,1));
var item=Clazz.new_([$I$(4).getString$S("DataTool.MenuItem.Name")],$I$(60,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.DataTool$16$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$16$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tab=this.b$['org.opensourcephysics.tools.DataTool'].getTab$I.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.$finals$.index]);
var name=tab.getName$();
var input=$I$(61,"showInputDialog$java_awt_Component$S$S$I$S",[this.b$['org.opensourcephysics.tools.DataTool'], $I$(4).getString$S("DataTool.Dialog.Name.Message"), $I$(4).getString$S("DataTool.Dialog.Name.Title"), 3, name]);
if (input == null ) {
return;
}tab.setName$S("");
tab.setName$S(this.b$['org.opensourcephysics.tools.DataTool'].getUniqueTabName$S.apply(this.b$['org.opensourcephysics.tools.DataTool'], [input.toString()]));
tab.tabChanged$Z(true);
this.b$['org.opensourcephysics.tools.DataTool'].refreshTabTitles$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
this.b$['org.opensourcephysics.tools.DataTool'].refreshDataBuilder$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$16$1.$init$,[this, {index:index}])));
if (!this.b$['org.opensourcephysics.tools.DataTool'].getTab$I.apply(this.b$['org.opensourcephysics.tools.DataTool'], [index]).dataManager.getDatasetsRaw$().isEmpty$()) {
popup.addSeparator$();
item=Clazz.new_([$I$(4).getString$S("DataTool.MenuItem.NewTab")],$I$(60,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.DataTool$16$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$16$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].newTabItem.doClick$I(0);
});
})()
), Clazz.new_(P$.DataTool$16$2.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
var cloneMenu=Clazz.new_([$I$(4).getString$S("DataTool.Menu.Clone")],$I$(62,1).c$$S);
popup.add$javax_swing_JMenuItem(cloneMenu);
var cloneTabItem=Clazz.new_([$I$(4).getString$S("DataTool.MenuItem.Editable")],$I$(60,1).c$$S);
cloneMenu.add$javax_swing_JMenuItem(cloneTabItem);
cloneTabItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$16$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$16$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].cloneTab$I$Z.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.$finals$.index, true]);
});
})()
), Clazz.new_(P$.DataTool$16$3.$init$,[this, {index:index}])));
item=Clazz.new_([$I$(4).getString$S("DataTool.MenuItem.Noneditable")],$I$(60,1).c$$S);
cloneMenu.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.DataTool$16$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$16$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].cloneTab$I$Z.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.$finals$.index, false]);
});
})()
), Clazz.new_(P$.DataTool$16$4.$init$,[this, {index:index}])));
}popup.addSeparator$();
item=Clazz.new_([$I$(4).getString$S("MenuItem.Close")],$I$(60,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.DataTool$16$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$16$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].removeTab$I$Z.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.$finals$.index, true]);
});
})()
), Clazz.new_(P$.DataTool$16$5.$init$,[this, {index:index}])));
item=Clazz.new_([$I$(4).getString$S("MenuItem.CloseOthers")],$I$(60,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.DataTool$16$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$16$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].removeAllButTab$I.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.$finals$.index]);
});
})()
), Clazz.new_(P$.DataTool$16$6.$init$,[this, {index:index}])));
item=Clazz.new_([$I$(4).getString$S("MenuItem.CloseAll")],$I$(60,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.DataTool$16$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$16$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].removeAllTabs$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$16$7.$init$,[this, null])));
$I$(13).setFonts$java_awt_Container(popup);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.DataTool'].tabbedPane, e.getX$(), e.getY$() + 8);
}});
})()
), Clazz.new_($I$(63,1),[this, null],P$.DataTool$16)));
var keyMask=$I$(45).getDefaultToolkit$().getMenuShortcutKeyMask$();
this.menubar=Clazz.new_($I$(64,1));
this.fileMenu=Clazz.new_($I$(62,1));
this.menubar.add$javax_swing_JMenu(this.fileMenu);
var fileMenuChecker=((P$.DataTool$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.mousePressed$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var empty=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).originatorID == 0;
if (!$I$(17).appletMode) {
this.b$['org.opensourcephysics.tools.DataTool'].exportItem.setEnabled$Z(!empty);
this.b$['org.opensourcephysics.tools.DataTool'].saveItem.setEnabled$Z(!empty);
this.b$['org.opensourcephysics.tools.DataTool'].saveAsItem.setEnabled$Z(!empty);
var selectedRows=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).dataTable.getSelectedRows$();
var endRow=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).dataTable.getRowCount$() - 1;
if ((selectedRows.length == 0) || ((selectedRows.length == 1) && (selectedRows[0] == endRow) && this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).dataTable.isEmptyRow$I(endRow)  ) ) {
this.b$['org.opensourcephysics.tools.DataTool'].exportItem.setText$S($I$(4).getString$S("DataTool.MenuItem.Export"));
} else {
this.b$['org.opensourcephysics.tools.DataTool'].exportItem.setText$S($I$(4).getString$S("DataTool.MenuItem.ExportSelection"));
}}});
})()
), Clazz.new_($I$(63,1),[this, null],P$.DataTool$17));
this.fileMenu.addMouseListener$java_awt_event_MouseListener(fileMenuChecker);
this.newTabItem=Clazz.new_($I$(60,1));
this.newTabItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["N".$c(), keyMask]));
this.newTabItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tab=this.b$['org.opensourcephysics.tools.DataTool'].createTab$org_opensourcephysics_display_Data.apply(this.b$['org.opensourcephysics.tools.DataTool'], [null]);
tab.userEditable=true;
this.b$['org.opensourcephysics.tools.DataTool'].addTab$org_opensourcephysics_tools_DataToolTab.apply(this.b$['org.opensourcephysics.tools.DataTool'], [tab]);
tab.refreshGUI$();
});
})()
), Clazz.new_(P$.DataTool$18.$init$,[this, null])));
this.fileMenu.add$javax_swing_JMenuItem(this.newTabItem);
if (!$I$(17).appletMode) {
this.openItem=Clazz.new_($I$(60,1));
this.openItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["O".$c(), keyMask]));
this.openItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].open$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$19.$init$,[this, null])));
this.fileMenu.add$javax_swing_JMenuItem(this.openItem);
}this.fileMenu.addSeparator$();
this.closeItem=Clazz.new_($I$(60,1));
this.closeItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var index=this.b$['org.opensourcephysics.tools.DataTool'].tabbedPane.getSelectedIndex$();
this.b$['org.opensourcephysics.tools.DataTool'].removeTab$I$Z.apply(this.b$['org.opensourcephysics.tools.DataTool'], [index, true]);
});
})()
), Clazz.new_(P$.DataTool$20.$init$,[this, null])));
this.fileMenu.add$javax_swing_JMenuItem(this.closeItem);
this.closeAllItem=Clazz.new_($I$(60,1));
this.closeAllItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].removeAllTabs$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$21.$init$,[this, null])));
this.fileMenu.add$javax_swing_JMenuItem(this.closeAllItem);
this.fileMenu.addSeparator$();
if (!$I$(17).appletMode) {
this.importItem=Clazz.new_($I$(60,1));
this.importItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tab=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
this.b$['org.opensourcephysics.tools.DataTool'].importFileIntoTab$org_opensourcephysics_tools_DataToolTab.apply(this.b$['org.opensourcephysics.tools.DataTool'], [tab]);
});
})()
), Clazz.new_(P$.DataTool$22.$init$,[this, null])));
this.fileMenu.add$javax_swing_JMenuItem(this.importItem);
this.exportItem=Clazz.new_($I$(60,1));
this.exportItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).saveTableDataToFile$Z(false);
});
})()
), Clazz.new_(P$.DataTool$23.$init$,[this, null])));
this.fileMenu.add$javax_swing_JMenuItem(this.exportItem);
this.fileMenu.addSeparator$();
this.saveItem=Clazz.new_($I$(60,1));
this.saveItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["S".$c(), keyMask]));
this.saveItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tab=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
this.b$['org.opensourcephysics.tools.DataTool'].save$S.apply(this.b$['org.opensourcephysics.tools.DataTool'], [tab.fileName]);
});
})()
), Clazz.new_(P$.DataTool$24.$init$,[this, null])));
this.fileMenu.add$javax_swing_JMenuItem(this.saveItem);
this.saveAsItem=Clazz.new_($I$(60,1));
this.saveAsItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].saveAs$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$25.$init$,[this, null])));
this.fileMenu.add$javax_swing_JMenuItem(this.saveAsItem);
this.fileMenu.addSeparator$();
}this.printItem=Clazz.new_($I$(60,1));
this.printItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(66).getTool$().printImage$java_awt_Component(this.b$['org.opensourcephysics.tools.DataTool']);
});
})()
), Clazz.new_(P$.DataTool$26.$init$,[this, null])));
if (!$I$(17).isJS) this.printItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["P".$c(), keyMask]));
if (!$I$(17).isJS) this.fileMenu.add$javax_swing_JMenuItem(this.printItem);
this.fileMenu.addSeparator$();
this.exitItem=Clazz.new_($I$(60,1));
this.exitItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["Q".$c(), keyMask]));
this.exitItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!this.b$['org.opensourcephysics.tools.DataTool'].saveChangesOnClose || this.b$['org.opensourcephysics.tools.DataTool'].removeAllTabs$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []) ) {
if (this.b$['org.opensourcephysics.tools.DataTool'].exitOnClose) {
System.exit$I(0);
} else {
this.b$['org.opensourcephysics.tools.DataTool'].setVisible$Z.apply(this.b$['org.opensourcephysics.tools.DataTool'], [false]);
}}});
})()
), Clazz.new_(P$.DataTool$27.$init$,[this, null])));
this.fileMenu.add$javax_swing_JMenuItem(this.exitItem);
this.editMenu=Clazz.new_($I$(62,1));
this.editMenu.addMenuListener$javax_swing_event_MenuListener(this.editMenuChecker);
this.menubar.add$javax_swing_JMenu(this.editMenu);
this.undoItem=Clazz.new_($I$(60,1));
this.undoItem.setEnabled$Z(false);
this.undoItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["Z".$c(), keyMask]));
this.undoItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).undoManager.canUndo$()) {
this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).undoManager.undo$();
}});
})()
), Clazz.new_(P$.DataTool$28.$init$,[this, null])));
this.editMenu.add$javax_swing_JMenuItem(this.undoItem);
this.redoItem=Clazz.new_($I$(60,1));
this.redoItem.setEnabled$Z(false);
this.redoItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["Y".$c(), keyMask]));
this.redoItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).undoManager.canRedo$()) {
this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).undoManager.redo$();
}});
})()
), Clazz.new_(P$.DataTool$29.$init$,[this, null])));
this.editMenu.add$javax_swing_JMenuItem(this.redoItem);
this.editMenu.addSeparator$();
this.copyMenu=Clazz.new_($I$(62,1));
this.editMenu.add$javax_swing_JMenuItem(this.copyMenu);
this.copyTabItem=Clazz.new_($I$(60,1));
this.copyTabItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].copyTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$30.$init$,[this, null])));
this.copyDataMenu=Clazz.new_($I$(62,1));
this.copyDataAsFormattedItem=Clazz.new_($I$(60,1));
this.copyDataAsFormattedItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["C".$c(), keyMask]));
this.copyDataAsFormattedItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).copyTableDataToClipboard$Z(true);
});
})()
), Clazz.new_(P$.DataTool$31.$init$,[this, null])));
this.copyDataRawItem=Clazz.new_($I$(60,1));
this.copyDataRawItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).copyTableDataToClipboard$Z(false);
});
})()
), Clazz.new_(P$.DataTool$32.$init$,[this, null])));
this.setDelimiterMenu=Clazz.new_($I$(62,1));
this.setDelimiterMenu.addMenuListener$javax_swing_event_MenuListener(((P$.DataTool$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].setupDelimiterMenu$javax_swing_JMenu.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.b$['org.opensourcephysics.tools.DataTool'].setDelimiterMenu]);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.DataTool$33.$init$,[this, null])));
this.copyImageItem=Clazz.new_($I$(60,1));
this.copyImageItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tabName=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).getName$();
$I$(26).finest$S("copying image of " + tabName);
$I$(66).getTool$().copyImage$java_awt_Component(this.b$['org.opensourcephysics.tools.DataTool']);
});
})()
), Clazz.new_(P$.DataTool$34.$init$,[this, null])));
var pasteMenuChecker=((P$.DataTool$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.tools.DataTool'].pasteMenu.isEnabled$() || this.b$['org.opensourcephysics.tools.DataTool'].pasteMenu.isPopupMenuVisible$() ) {
return;
}if (this.b$['org.opensourcephysics.tools.DataTool'].hasPastableColumns$org_opensourcephysics_tools_DataToolTab.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], [])])) {
this.b$['org.opensourcephysics.tools.DataTool'].pasteMenu.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataTool'].pasteColumnsItem);
} else {
this.b$['org.opensourcephysics.tools.DataTool'].addableData=null;
this.b$['org.opensourcephysics.tools.DataTool'].pasteMenu.remove$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataTool'].pasteColumnsItem);
}$I$(13,"setFonts$O$I",[this.b$['org.opensourcephysics.tools.DataTool'].pasteMenu, $I$(13).getLevel$()]);
});
})()
), Clazz.new_($I$(63,1),[this, null],P$.DataTool$35));
this.pasteMenu=Clazz.new_($I$(62,1));
this.pasteMenu.addMouseListener$java_awt_event_MouseListener(pasteMenuChecker);
this.editMenu.add$javax_swing_JMenuItem(this.pasteMenu);
this.pasteTabItem=Clazz.new_($I$(60,1));
this.pasteTabItem.setAction$javax_swing_Action(((P$.DataTool$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].pasteTab$O.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.b$['org.opensourcephysics.tools.DataTool'].pasteTabItem]);
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.DataTool$36)));
this.pasteMenu.add$javax_swing_JMenuItem(this.pasteTabItem);
this.pasteColumnsItem=Clazz.new_($I$(60,1));
this.pasteColumnsItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataTool'].controlContainsData) {
p$3.getSelfContainedDataAsync$org_opensourcephysics_controls_XMLControl$Z$java_util_function_Consumer.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.b$['org.opensourcephysics.tools.DataTool'].control, this.b$['org.opensourcephysics.tools.DataTool'].useChooser, ((P$.DataTool$37$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$37$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$java_util_ArrayList','accept$O'],  function (dataList) {
if (!dataList.isEmpty$()) {
var manager=Clazz.new_($I$(28,1));
for (var next, $next = dataList.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
for (var column, $column = $I$(19).getDataColumns$org_opensourcephysics_display_Data(next).iterator$(); $column.hasNext$()&&((column=($column.next$())),1);) {
manager.addDataset$org_opensourcephysics_display_Dataset(column);
}
}
this.b$['org.opensourcephysics.tools.DataTool'].addableData=manager;
this.b$['org.opensourcephysics.tools.DataTool'].addColumnsFromPaste$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
}});
})()
), Clazz.new_(P$.DataTool$37$1.$init$,[this, null]))]);
} else {
this.b$['org.opensourcephysics.tools.DataTool'].addColumnsFromPaste$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
}});
})()
), Clazz.new_(P$.DataTool$37.$init$,[this, null])));
this.pasteMenu.add$javax_swing_JMenuItem(this.pasteColumnsItem);
this.editMenu.addSeparator$();
this.editDataItem=Clazz.new_([$I$(4).getString$S("DataToolTab.Button.EditData.Text") + "..."],$I$(60,1).c$$S);
this.editDataItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataTool$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.tools.DataTool'].editDataAction$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$lambda1.$init$,[this, null])));
this.editMenu.add$javax_swing_JMenuItem(this.editDataItem);
this.displayMenu=Clazz.new_($I$(62,1));
this.menubar.add$javax_swing_JMenu(this.displayMenu);
this.languageMenu=Clazz.new_($I$(62,1));
$I$(55).getImageIcon$S("resources/tools/images/open.gif");
var locales=$I$(17).getInstalledLocales$();
var languageAction=((P$.DataTool$38||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var language=e.getActionCommand$();
for (var i=0; i < this.$finals$.locales.length; i++) {
if (language.equals$O(this.$finals$.locales[i].toString())) {
$I$(4).setLocale$java_util_Locale(this.$finals$.locales[i]);
return;
}}
});
})()
), Clazz.new_($I$(35,1),[this, {locales:locales}],P$.DataTool$38));
var languageGroup=Clazz.new_($I$(36,1));
this.languageItems=Clazz.array($I$(60), [locales.length]);
for (var i=0; i < locales.length; i++) {
this.languageItems[i]=Clazz.new_([$I$(17).getDisplayLanguage$java_util_Locale(locales[i])],$I$(37,1).c$$S);
this.languageItems[i].setActionCommand$S(locales[i].toString());
this.languageItems[i].addActionListener$java_awt_event_ActionListener(languageAction);
this.languageMenu.add$javax_swing_JMenuItem(this.languageItems[i]);
languageGroup.add$javax_swing_AbstractButton(this.languageItems[i]);
}
this.displayMenu.add$javax_swing_JMenuItem(this.languageMenu);
this.fontSizeMenu=Clazz.new_($I$(62,1));
this.displayMenu.add$javax_swing_JMenuItem(this.fontSizeMenu);
this.fontSizeGroup=Clazz.new_($I$(36,1));
var fontSizeAction=((P$.DataTool$39||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var i=Integer.parseInt$S(e.getActionCommand$());
$I$(13).setLevel$I(i);
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.DataTool$39));
for (var i=0; i < 4; i++) {
var item=Clazz.new_($I$(37,1).c$$S,["+" + i]);
if (i == 0) {
this.defaultFontSizeItem=item;
item.setText$S($I$(4).getString$S("Tool.MenuItem.DefaultFontSize"));
}item.addActionListener$java_awt_event_ActionListener(fontSizeAction);
item.setActionCommand$S("" + i);
this.fontSizeMenu.add$javax_swing_JMenuItem(item);
this.fontSizeGroup.add$javax_swing_AbstractButton(item);
if (i == $I$(13).getLevel$()) {
item.setSelected$Z(true);
}}
this.helpMenu=Clazz.new_($I$(62,1));
this.menubar.add$javax_swing_JMenu(this.helpMenu);
this.helpItem=Clazz.new_($I$(60,1));
this.helpItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["H".$c(), keyMask]));
this.helpItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$40||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(19).showHelp$();
});
})()
), Clazz.new_(P$.DataTool$40.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.helpItem);
this.helpMenu.addSeparator$();
this.logItem=Clazz.new_($I$(60,1));
this.logItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["L".$c(), keyMask]));
this.logItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$41||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var p0=Clazz.new_($I$(67,1)).getLocation$();
var frame=$I$(26).getFrame$();
if ((frame.getLocation$().x == p0.x) && (frame.getLocation$().y == p0.y) ) {
var p=this.b$['java.awt.Component'].getLocation$.apply(this.b$['java.awt.Component'], []);
frame.setLocation$I$I(p.x + 28, p.y + 28);
}frame.setVisible$Z(true);
});
})()
), Clazz.new_(P$.DataTool$41.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.logItem);
this.helpMenu.addSeparator$();
this.aboutItem=Clazz.new_($I$(60,1));
this.aboutItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["A".$c(), keyMask]));
this.aboutItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$42||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].showAboutDialog$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$42.$init$,[this, null])));
this.helpMenu.add$javax_swing_JMenuItem(this.aboutItem);
this.setJMenuBar$javax_swing_JMenuBar(this.menubar);
this.emptyMenubar=Clazz.new_($I$(64,1));
this.emptyFileMenu=Clazz.new_($I$(62,1));
this.emptyMenubar.add$javax_swing_JMenu(this.emptyFileMenu);
this.emptyNewTabItem=Clazz.new_($I$(60,1));
this.emptyNewTabItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["N".$c(), keyMask]));
this.emptyNewTabItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$43||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tab=this.b$['org.opensourcephysics.tools.DataTool'].createTab$org_opensourcephysics_display_Data.apply(this.b$['org.opensourcephysics.tools.DataTool'], [null]);
tab.userEditable=true;
this.b$['org.opensourcephysics.tools.DataTool'].addTab$org_opensourcephysics_tools_DataToolTab.apply(this.b$['org.opensourcephysics.tools.DataTool'], [tab]);
tab.refreshGUI$();
});
})()
), Clazz.new_(P$.DataTool$43.$init$,[this, null])));
this.emptyFileMenu.add$javax_swing_JMenuItem(this.emptyNewTabItem);
this.emptyOpenItem=Clazz.new_($I$(60,1));
this.emptyOpenItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["O".$c(), keyMask]));
this.emptyOpenItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$44||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].open$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$44.$init$,[this, null])));
this.emptyFileMenu.add$javax_swing_JMenuItem(this.emptyOpenItem);
this.emptyFileMenu.addSeparator$();
this.emptyExitItem=Clazz.new_($I$(60,1));
this.emptyExitItem.setAccelerator$javax_swing_KeyStroke($I$(65,"getKeyStroke$I$I",["Q".$c(), keyMask]));
this.emptyExitItem.addActionListener$java_awt_event_ActionListener(((P$.DataTool$45||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataTool'].exitOnClose) {
System.exit$I(0);
} else {
this.b$['org.opensourcephysics.tools.DataTool'].setVisible$Z.apply(this.b$['org.opensourcephysics.tools.DataTool'], [false]);
}});
})()
), Clazz.new_(P$.DataTool$45.$init$,[this, null])));
this.emptyFileMenu.add$javax_swing_JMenuItem(this.emptyExitItem);
this.emptyEditMenu=Clazz.new_($I$(62,1));
this.emptyEditMenu.addMenuListener$javax_swing_event_MenuListener(this.editMenuChecker);
this.emptyMenubar.add$javax_swing_JMenu(this.emptyEditMenu);
this.emptyPasteMenu=Clazz.new_($I$(62,1));
this.emptyEditMenu.add$javax_swing_JMenuItem(this.emptyPasteMenu);
this.emptyPasteTabItem=Clazz.new_($I$(60,1));
this.emptyPasteTabItem.setAction$javax_swing_Action(((P$.DataTool$46||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].pasteTab$O.apply(this.b$['org.opensourcephysics.tools.DataTool'], [this.b$['org.opensourcephysics.tools.DataTool'].emptyPasteTabItem]);
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.DataTool$46)));
this.emptyPasteMenu.add$java_awt_Component(this.emptyPasteTabItem);
this.refreshGUI$();
this.refreshMenubar$();
var level=$I$(13).getLevel$();
if (level != 0) this.setFontLevel$I(level);
this.pack$();
var dim=$I$(45).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
if (!this.standAlone) this.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'pasteTab$O',  function (source) {
$I$(17,"paste$java_util_function_Consumer",[((P$.DataTool$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataTool$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (s) /*block*/{
this.b$['org.opensourcephysics.tools.DataTool'].pasteAction$S$O.apply(this.b$['org.opensourcephysics.tools.DataTool'], [s, this.$finals$.source]);
});
})()
), Clazz.new_(P$.DataTool$lambda2.$init$,[this, {source:source}]))]);
});

Clazz.newMeth(C$, 'copyTab$',  function () {
var i=this.tabbedPane.getSelectedIndex$();
var title=this.tabbedPane.getTitleAt$I(i);
$I$(26).finest$S("copying tab " + title);
$I$(17,"copy$S$java_awt_datatransfer_ClipboardOwner",[p$3.getTabXML.apply(this, []), null]);
});

Clazz.newMeth(C$, 'getTabXML',  function () {
return Clazz.new_([this.getSelectedTab$()],$I$(16,1).c$$O).toXML$();
}, p$3);

Clazz.newMeth(C$, 'cloneTab$I$Z',  function (index, editable) {
this.pasteAction$S$O(p$3.getTabXML.apply(this, []), this.pasteTabItem);
var name=this.getTab$I(index).getName$();
var postfix="_" + $I$(4).getString$S("DataTool.Clone.Subscript");
var pt=name.indexOf$S(postfix);
if (pt >= 0) {
name=name.substring$I$I(0, pt);
}var tab=this.getTab$I(this.getTabCount$() - 1);
tab.setName$S(this.getUniqueTabName$S(name + postfix));
if (!editable) {
tab.setUserEditable$Z(false);
for (var next, $next = tab.dataManager.getDatasetsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (Clazz.instanceOf(next, "org.opensourcephysics.tools.DataColumn")) {
(next).deletable=false;
}}
}this.refreshTabTitles$();
});

Clazz.newMeth(C$, 'pasteAction$S$O',  function (dataString, source) {
var failed=false;
try {
if (dataString == null ) {
return;
}if (dataString.startsWith$S("<?xml")) {
this.control=Clazz.new_($I$(16,1));
this.control.readXML$S(dataString);
if (this.control.failedToRead$()) {
failed=true;
return;
}if (Clazz.getClass($I$(29),['getColumnNames$','getData2D$','getData3D$','getDataList$','getDatasets$','getFillColors$','getID$','getLineColors$','getName$','setID$I']).isAssignableFrom$Class(this.control.getObjectClass$())) {
var data=this.control.loadObject$O$Z$Z(null, true, true);
if (data == null ) {
failed=true;
return;
}for (var next, $next = C$.getSelfContainedData$org_opensourcephysics_display_Data(data).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var tab=this.createTab$org_opensourcephysics_display_Data(next);
this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
}
var i=this.getTabCount$() - 1;
this.tabbedPane.setSelectedIndex$I(i);
return;
}this.addTabs$org_opensourcephysics_controls_XMLControl$java_util_function_Consumer(this.control, ((P$.DataTool$47||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$java_util_ArrayList','accept$O'],  function (tabs) {
for (var tab, $tab = tabs.iterator$(); $tab.hasNext$()&&((tab=($tab.next$())),1);) {
tab.setUserEditable$Z(true);
}
this.b$['org.opensourcephysics.tools.DataTool'].tabbedPane.setSelectedIndex$I(this.b$['org.opensourcephysics.tools.DataTool'].getTabCount$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []) - 1);
this.b$['org.opensourcephysics.tools.DataTool'].refreshDataBuilder$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
});
})()
), Clazz.new_(P$.DataTool$47.$init$,[this, null])));
} else {
this.setMultipleTabPolicy$S(dataString);
var importedData=C$.parseData$S$S(dataString, null);
if (importedData == null ) {
failed=true;
return;
}if (source != null ) {
var first=null;
for (var i=0; i < importedData.length; i++) {
var tab=this.createTab$org_opensourcephysics_display_Data(importedData[i]);
if (first == null ) first=tab;
this.addTab$org_opensourcephysics_tools_DataToolTab(tab);
tab.userEditable=true;
tab.refreshGUI$();
tab.tabChanged$Z(false);
}
this.setSelectedTab$org_opensourcephysics_tools_DataToolTab(first);
}}} finally {
if (failed) {
$I$(2,"showMessageDialog$java_awt_Component$O$S$I",[this, $I$(4).getString$S("Tool.Dialog.NoData.Message"), $I$(4).getString$S("Tool.Dialog.NoData.Title"), 2]);
} else {
this.refreshDataBuilder$();
}}
});

Clazz.newMeth(C$, 'addColumnsFromPaste$',  function () {
if (this.addableData != null ) {
var tab=this.getSelectedTab$();
tab.addColumns$org_opensourcephysics_display_Data$Z$Z$Z(this.addableData, true, true, true);
}});

Clazz.newMeth(C$, 'editDataAction$',  function () {
Clazz.new_($I$(68,1),[this, null]);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setTitle$S($I$(4).getString$S("DataTool.Frame.Title"));
this.emptyFileMenu.setText$S($I$(4).getString$S("Menu.File"));
this.emptyNewTabItem.setText$S($I$(4).getString$S("DataTool.MenuItem.NewTab"));
this.emptyOpenItem.setText$S($I$(4).getString$S("MenuItem.Open"));
this.emptyExitItem.setText$S($I$(4).getString$S("MenuItem.Exit"));
this.emptyEditMenu.setText$S($I$(4).getString$S("Menu.Edit"));
this.emptyPasteMenu.setText$S($I$(4).getString$S("MenuItem.Paste"));
this.emptyPasteTabItem.setText$S($I$(4).getString$S("DataTool.MenuItem.PasteNewTab"));
this.fileMenu.setText$S($I$(4).getString$S("Menu.File"));
this.newTabItem.setText$S($I$(4).getString$S("DataTool.MenuItem.NewTab"));
if (!$I$(17).appletMode) {
this.openItem.setText$S($I$(4).getString$S("MenuItem.Open"));
this.importItem.setText$S($I$(4).getString$S("DataTool.MenuItem.Import"));
this.saveItem.setText$S($I$(4).getString$S("DataTool.MenuItem.Save"));
this.saveAsItem.setText$S($I$(4).getString$S("DataTool.MenuItem.SaveAs"));
}this.closeItem.setText$S($I$(4).getString$S("MenuItem.Close"));
this.closeAllItem.setText$S($I$(4).getString$S("MenuItem.CloseAll"));
this.printItem.setText$S($I$(4).getString$S("DataTool.MenuItem.Print"));
this.exitItem.setText$S($I$(4).getString$S("MenuItem.Exit"));
this.editMenu.setText$S($I$(4).getString$S("Menu.Edit"));
this.undoItem.setText$S($I$(4).getString$S("DataTool.MenuItem.Undo"));
this.redoItem.setText$S($I$(4).getString$S("DataTool.MenuItem.Redo"));
this.copyMenu.setText$S($I$(4).getString$S("DataTool.Menu.Copy"));
this.copyImageItem.setText$S($I$(4).getString$S("DataTool.MenuItem.CopyImage"));
this.pasteMenu.setText$S($I$(4).getString$S("MenuItem.Paste"));
this.pasteTabItem.setText$S($I$(4).getString$S("DataTool.MenuItem.PasteNewTab"));
this.pasteColumnsItem.setText$S($I$(4).getString$S("DataTool.MenuItem.PasteNewColumns"));
this.displayMenu.setText$S($I$(4).getString$S("Tool.Menu.Display"));
this.languageMenu.setText$S($I$(4).getString$S("Tool.Menu.Language"));
this.fontSizeMenu.setText$S($I$(4).getString$S("Tool.Menu.FontSize"));
this.defaultFontSizeItem.setText$S($I$(4).getString$S("Tool.MenuItem.DefaultFontSize"));
this.editDataItem.setText$S($I$(4).getString$S("DataToolTab.Button.EditData.Text") + "...");
this.editDataItem.setEnabled$Z(this.getSelectedTab$() != null  && this.getSelectedTab$().isUserEditable$() );
this.helpMenu.setText$S($I$(4).getString$S("Menu.Help"));
this.helpItem.setText$S($I$(4).getString$S("DataTool.MenuItem.Help"));
this.logItem.setText$S($I$(4).getString$S("MenuItem.Log"));
this.aboutItem.setText$S($I$(4).getString$S("MenuItem.About"));
var locales=$I$(17).getInstalledLocales$();
for (var i=0; i < locales.length; i++) {
if (locales[i].getLanguage$().equals$O($I$(4).getLanguage$())) {
this.languageItems[i].setSelected$Z(true);
}}
});

Clazz.newMeth(C$, 'refreshDecimalSeparators$',  function () {
for (var i=0; i < this.getTabCount$(); i++) {
this.getTab$I(i).refreshDecimalSeparators$();
}
});

Clazz.newMeth(C$, 'hasPastableData$',  function () {
if ($I$(17).isJS) return true;
return p$3.isPastableData$S.apply(this, [$I$(17).paste$java_util_function_Consumer(null)]);
});

Clazz.newMeth(C$, 'isPastableData$S',  function (dataString) {
this.controlContainsData=false;
if (dataString == null ) return false;
if (!dataString.startsWith$S("<?xml")) {
var temp=C$.parseData$S$S(dataString, null);
this.addableData=temp == null  ? null : temp[0];
return (this.addableData != null );
}this.control=Clazz.new_($I$(16,1));
this.control.readXML$S(dataString);
var type=this.control.getObjectClass$();
if (Clazz.getClass($I$(29),['getColumnNames$','getData2D$','getData3D$','getDataList$','getDatasets$','getFillColors$','getID$','getLineColors$','getName$','setID$I']).isAssignableFrom$Class(type)) {
this.addableData=this.control.loadObject$O(null);
} else if (!Clazz.getClass($I$(25)).isAssignableFrom$Class(type)) {
var tree=Clazz.new_($I$(41,1).c$$org_opensourcephysics_controls_XMLControl,[this.control]);
tree.setHighlightedClass$Class(Clazz.getClass($I$(29),['getColumnNames$','getData2D$','getData3D$','getDataList$','getDatasets$','getFillColors$','getID$','getLineColors$','getName$','setID$I']));
tree.selectHighlightedProperties$();
if (!tree.getSelectedProperties$().isEmpty$()) {
this.controlContainsData=true;
}}return (this.addableData != null ) || Clazz.getClass($I$(25)).isAssignableFrom$Class(type) || this.controlContainsData  ;
}, p$3);

Clazz.newMeth(C$, 'hasPastableColumns$org_opensourcephysics_tools_DataToolTab',  function (tab) {
var pastable=false;
if (this.addableData != null ) {
var dataName=this.addableData.getName$();
if (tab.dataManager.getDatasetsRaw$().isEmpty$() || ((dataName != null ) && !dataName.equals$O(tab.getName$()) ) ) {
pastable=true;
}}return pastable || this.controlContainsData ;
});

Clazz.newMeth(C$, 'showAboutDialog$',  function () {
var date=$I$(17).getLaunchJarBuildDate$();
if ("".equals$O(date)) date="22 Sep 2026";
var toolname=$I$(4).getString$S("DataTool.Frame.Title");
var aboutString=$I$(4).getString$S("LibraryBrowser.Version") + " " + "6.3.5.260922" + "\nRelease date " + date + "\n" + "Open Source Physics\n" + "www.opensourcephysics.org" ;
$I$(2,"showMessageDialog$java_awt_Component$O$S$I",[this, aboutString, $I$(4).getString$S("Dialog.About.Title") + " " + toolname , 1]);
});

Clazz.newMeth(C$, 'setMultipleTabPolicy$S',  function (dataString) {
if (C$.askToLoadMultipleTracksInSingleTab && dataString.startsWith$S("#multi:") ) {
var panel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(11,1).c$$java_awt_LayoutManager);
var label1=Clazz.new_([$I$(4).getString$S("DataTool.Dialog.Multitab.Message1")],$I$(69,1).c$$S);
var label2=Clazz.new_([$I$(4).getString$S("DataTool.Dialog.Multitab.Message2")],$I$(69,1).c$$S);
var checkbox=Clazz.new_([$I$(4).getString$S("DataTool.Dialog.Multitab.Checkbox.Text")],$I$(70,1).c$$S);
checkbox.setBorder$javax_swing_border_Border($I$(12).createEmptyBorder$I$I$I$I(15, 0, 0, 0));
var box=$I$(71).createVerticalBox$();
box.add$java_awt_Component(label1);
box.add$java_awt_Component(label2);
panel.add$java_awt_Component$O(box, "North");
panel.add$java_awt_Component$O(checkbox, "South");
var multipleTabs=Clazz.array(Boolean.TYPE, -1, [true]);
Clazz.new_($I$(72,1)).showConfirmDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(null, panel, $I$(4).getString$S("DataTool.Dialog.Multitab.Title"), 0, ((P$.DataTool$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataTool$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
if (ev.getID$.apply(ev, []) == 1) this.$finals$.multipleTabs[0]=false;
});
})()
), Clazz.new_(P$.DataTool$lambda3.$init$,[this, {multipleTabs:multipleTabs}])));
C$.loadMultipleTracksInSingleTab=!multipleTabs[0];
C$.askToLoadMultipleTracksInSingleTab=!checkbox.isSelected$();
}});

Clazz.newMeth(C$, 'createButton$S',  function (text) {
return C$.createButton$S$Z(text, true);
}, 1);

Clazz.newMeth(C$, 'createButton$S$Z',  function (text, allowBorder) {
var button=((P$.DataTool$48||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=$I$(19).buttonHeight;
return dim;
});

Clazz.newMeth(C$, 'setBorder$javax_swing_border_Border',  function (b) {
if (this.$finals$.allowBorder || Clazz.instanceOf(b, "javax.swing.border.EmptyBorder") ) C$.superclazz.prototype.setBorder$javax_swing_border_Border.apply(this, [b]);
});
})()
), Clazz.new_($I$(5,1).c$$S,[this, {allowBorder:allowBorder}, text],P$.DataTool$48));
return button;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.loadClass=false;
C$.dim=Clazz.new_($I$(14,1).c$$I$I,[800, 540]);
C$.buttonHeight=28;
C$.delimiters=Clazz.array(String, -1, ["\t", ",", ";", " "]);
C$.helpName="datatool/datatool_help.html";
C$.helpBase="https://www.compadre.org/osp/online_help/tools/";
C$.processedData=Clazz.new_($I$(15,1));
C$.loadMultipleTracksInSingleTab=false;
C$.askToLoadMultipleTracksInSingleTab=true;
C$.NEW_LINE=System.getProperty$S$S("line.separator", "\n");
};
var $p$;
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTool, "FileDropHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.TransferHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isDropOK=null;
},1);

C$.$fields$=[['O',['isDropOK','Boolean']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'canImport$javax_swing_TransferHandler_TransferSupport',  function (support) {
return true;
});

Clazz.newMeth(C$, 'importData$javax_swing_TransferHandler_TransferSupport',  function (support) {
for (var f, $f = p$1.getFileList$java_awt_datatransfer_Transferable.apply(this, [support.getTransferable$()]).iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
this.b$['org.opensourcephysics.tools.DataTool'].open$java_io_File.apply(this.b$['org.opensourcephysics.tools.DataTool'], [f]);
}
return true;
});

Clazz.newMeth(C$, 'getFileList$java_awt_datatransfer_Transferable',  function (t) {
try {
return t.getTransferData$java_awt_datatransfer_DataFlavor($I$(1).javaFileListFlavor);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, p$1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTool, "ExpMovingAvg", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['alpha'],'O',['oldValue','Double']]]

Clazz.newMeth(C$, 'c$$D',  function (alpha) {
;C$.$init$.apply(this);
this.alpha=alpha;
}, 1);

Clazz.newMeth(C$, 'average$D',  function (value) {
if (this.oldValue == null ) {
this.oldValue=Double.valueOf$D(value);
return value;
}var newValue=(this.oldValue).$c() + this.alpha * (value - (this.oldValue).$c());
this.oldValue=Double.valueOf$D(newValue);
return newValue;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataTool, "EditDataDialog", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultColumnNameText="x, y\n";
this.undoCount=0;
},1);

C$.$fields$=[['Z',['canceled'],'I',['undoCount'],'S',['currentData','defaultColumnNameText'],'O',['okButton','javax.swing.JButton','+cancelButton','+applyButton','dataArea','javax.swing.JTextArea','+helpArea','undoButton','javax.swing.JButton','+redoButton']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(2).getFrameForComponent$java_awt_Component(this.b$['org.opensourcephysics.tools.DataTool']), true]);C$.$init$.apply(this);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.setTitle$S($I$(4).getString$S("DataToolTab.Button.EditData.Text"));
this.okButton=Clazz.new_([$I$(6).getString$S("Dialog.Button.Close.Text")],$I$(5,1).c$$S);
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.DataTool$EditDataDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$EditDataDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'], [false]);
});
})()
), Clazz.new_(P$.DataTool$EditDataDialog$1.$init$,[this, null])));
this.applyButton=Clazz.new_([$I$(6).getString$S("Dialog.Button.Apply.Text")],$I$(5,1).c$$S);
this.applyButton.addActionListener$java_awt_event_ActionListener(((P$.DataTool$EditDataDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$EditDataDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'].setData$S.apply(this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'], [null]);
p$2.refreshUndoButtons.apply(this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'], []);
});
})()
), Clazz.new_(P$.DataTool$EditDataDialog$2.$init$,[this, null])));
this.undoButton=Clazz.new_([$I$(4).getString$S("DataTool.MenuItem.Undo")],$I$(5,1).c$$S);
this.undoButton.addActionListener$java_awt_event_ActionListener(((P$.DataTool$EditDataDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$EditDataDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].undoItem.doClick$I(0);
p$2.refreshUndoButtons.apply(this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'], []);
--this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'].undoCount;
this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'].refreshDataTextFromTable$Z.apply(this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'], [false]);
});
})()
), Clazz.new_(P$.DataTool$EditDataDialog$3.$init$,[this, null])));
this.redoButton=Clazz.new_([$I$(4).getString$S("DataTool.MenuItem.Redo")],$I$(5,1).c$$S);
this.redoButton.addActionListener$java_awt_event_ActionListener(((P$.DataTool$EditDataDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$EditDataDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool'].redoItem.doClick$I(0);
p$2.refreshUndoButtons.apply(this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'], []);
++this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'].undoCount;
this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'].refreshDataTextFromTable$Z.apply(this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'], [false]);
});
})()
), Clazz.new_(P$.DataTool$EditDataDialog$4.$init$,[this, null])));
this.cancelButton=Clazz.new_([$I$(6).getString$S("GUIUtils.Cancel")],$I$(5,1).c$$S);
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.DataTool$EditDataDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTool$EditDataDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'].canceled=true;
this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.tools.DataTool.EditDataDialog'], [false]);
});
})()
), Clazz.new_(P$.DataTool$EditDataDialog$5.$init$,[this, null])));
this.dataArea=Clazz.new_($I$(7,1).c$$I$I,[20, 30]);
this.dataArea.setCaretColor$java_awt_Color($I$(8).red);
this.dataArea.setMargin$java_awt_Insets(Clazz.new_($I$(9,1).c$$I$I$I$I,[1, 1, 1, 1]));
this.add$java_awt_Component$O(Clazz.new_($I$(10,1).c$$java_awt_Component,[this.dataArea]), "Center");
var buttonPanel=Clazz.new_($I$(11,1));
buttonPanel.add$java_awt_Component(this.applyButton);
buttonPanel.add$java_awt_Component(this.undoButton);
buttonPanel.add$java_awt_Component(this.redoButton);
buttonPanel.add$java_awt_Component(this.okButton);
buttonPanel.add$java_awt_Component(this.cancelButton);
this.add$java_awt_Component$O(buttonPanel, "South");
this.helpArea=Clazz.new_($I$(7,1).c$$I$I,[2, 30]);
this.helpArea.setEditable$Z(false);
this.helpArea.setLineWrap$Z(true);
this.helpArea.setForeground$java_awt_Color($I$(8).green.darker$());
this.helpArea.setText$S($I$(4).getString$S("DataTool.Dialog.EditData.Help1") + "\n" + $I$(4).getString$S("DataTool.Dialog.EditData.Help2") );
var line=$I$(12,"createLineBorder$java_awt_Color",[$I$(8).LIGHT_GRAY]);
var space=$I$(12).createEmptyBorder$I$I$I$I(4, 6, 4, 6);
this.helpArea.setBorder$javax_swing_border_Border($I$(12).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(line, space));
this.add$java_awt_Component$O(this.helpArea, "North");
p$2.refreshUndoButtons.apply(this, []);
$I$(13).setFont$java_awt_Component(this.dataArea);
$I$(13).setFont$java_awt_Component(this.helpArea);
this.setLocation$I$I(15, 30);
this.pack$();
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'refreshUndoButtons',  function () {
this.undoButton.setEnabled$Z(this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).undoManager.canUndo$());
this.redoButton.setEnabled$Z(this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).undoManager.canRedo$());
}, p$2);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis) {
this.canceled=false;
this.refreshDataTextFromTable$Z(true);
} else {
if (this.canceled) {
this.resetData$();
} else {
if (!this.dataArea.getText$().equals$O(this.defaultColumnNameText)) this.setData$S(null);
}this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).dataTable.refreshTable$();
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

Clazz.newMeth(C$, 'refreshDataTextFromTable$Z',  function (init) {
this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).dataTable.selectAll$();
var data=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).getSelectedTableData$Z$S(false, ",");
this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []).dataTable.clearSelection$();
data=data.substring$I(data.indexOf$S("\n") + 1);
if (data.length$() == 0) {
this.currentData="";
this.dataArea.setText$S(init ? this.defaultColumnNameText : "");
} else {
data=data.replace$C$C("\t", ",");
this.currentData=p$2.cleanData$S.apply(this, [data]);
this.dataArea.setText$S(this.currentData);
}});

Clazz.newMeth(C$, 'cleanData$S',  function (data) {
var newData="";
if (data == null  || data.trim$().equals$O("") ) return ("");
var lines=data.trim$().split$S("\\r?\\n");
var colNames=lines[0].split$S(",");
var j=0;
for (j=0; j < colNames.length; j++) {
newData+=colNames[j].trim$() + ", ";
}
newData=newData.substring$I$I(0, newData.lastIndexOf$I(",")) + '\n';
for (var i=1; i < lines.length; i++) {
var line=lines[i].split$S(",");
for (j=0; j < line.length; j++) {
newData+=line[j].trim$() + ", ";
}
for (var k=j; k < colNames.length; k++) {
newData+=", ";
}
newData=newData.substring$I$I(0, newData.lastIndexOf$I(",")) + '\n';
}
return newData;
}, p$2);

Clazz.newMeth(C$, 'setData$S',  function (dataString) {
if (dataString == null ) {
dataString=this.dataArea.getText$().trim$() + "\n";
}dataString=p$2.cleanData$S.apply(this, [dataString]);
if (dataString.equals$O(this.currentData)) return;
var tab=this.b$['org.opensourcephysics.tools.DataTool'].getSelectedTab$.apply(this.b$['org.opensourcephysics.tools.DataTool'], []);
try {
if (tab.setDelimitedData$S$S(dataString, this.currentData)) ++this.undoCount;
this.currentData=dataString;
this.refreshDataTextFromTable$Z(false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.resetData$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'resetData$',  function () {
for (var i=0; i < this.undoCount; i++) {
this.b$['org.opensourcephysics.tools.DataTool'].undoItem.doClick$I(0);
}
for (var i=0; i < -this.undoCount; i++) {
this.b$['org.opensourcephysics.tools.DataTool'].redoItem.doClick$I(0);
}
});
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
