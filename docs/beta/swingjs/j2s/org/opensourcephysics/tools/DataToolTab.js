(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.tools.FontSizer','java.awt.Color','java.awt.BasicStroke','java.awt.Rectangle','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.display.GUIUtils','java.awt.Point',['java.awt.geom.Line2D','.Double'],['java.awt.geom.Ellipse2D','.Double'],'org.opensourcephysics.numerics.Util','org.opensourcephysics.display.OSPRuntime',['org.opensourcephysics.tools.DataToolTab','.DataToolPlotter','.LimitLine'],['org.opensourcephysics.tools.DataToolTab','.DataToolPlotter','.SelectionBox'],['org.opensourcephysics.tools.DataToolTab','.DataToolPlotter','.Crossbars'],['org.opensourcephysics.tools.DataToolTab','.DataToolPlotter','.SlopeLine'],['org.opensourcephysics.tools.DataToolTab','.DataToolPlotter','.XYAxes'],'java.util.BitSet','org.opensourcephysics.tools.DataToolTab','java.awt.Cursor','java.awt.event.KeyAdapter','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.display.Dataset','StringBuffer','org.opensourcephysics.display.TeXParser','javax.swing.Timer','org.opensourcephysics.display.DatasetManager','java.util.ArrayList','org.opensourcephysics.display.DataFunction','javax.swing.SwingUtilities','java.text.NumberFormat','java.util.TreeMap','org.opensourcephysics.tools.JobManager','org.opensourcephysics.tools.DataToolTable','org.opensourcephysics.tools.DataTool','java.util.Arrays',['org.opensourcephysics.tools.DataToolTable','.TableEdit'],'org.opensourcephysics.tools.FunctionTool','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.display.Data','java.util.HashSet','org.opensourcephysics.tools.DataFunctionPanel','org.opensourcephysics.display.DisplayColors','org.opensourcephysics.tools.DataColumn','org.opensourcephysics.controls.OSPLog','java.io.File','org.opensourcephysics.controls.XML','org.opensourcephysics.media.core.VideoIO','java.text.DateFormat','java.awt.BorderLayout','javax.swing.JSplitPane','java.awt.event.ComponentAdapter','java.awt.event.WindowAdapter','javax.swing.JScrollPane','java.awt.event.MouseAdapter','javax.swing.AbstractAction','org.opensourcephysics.display.FunctionDrawer','javax.swing.JMenu','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.tools.FourierPanel','javax.swing.JDialog','java.awt.Dimension','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.tools.FitBuilder','javax.swing.UIManager','javax.swing.Box','org.opensourcephysics.tools.DatasetCurveFitter',['org.opensourcephysics.tools.DataToolTab','.DataToolPlotter'],['org.opensourcephysics.tools.DataToolTab','.DataToolAxes'],['org.opensourcephysics.tools.DataToolTab','.DataToolPlotter','.PlotCoordinateStringBuilder'],'javax.swing.event.MouseInputAdapter','javax.swing.JToolBar','javax.swing.BorderFactory','org.opensourcephysics.tools.DataToolStatsTable','org.opensourcephysics.tools.DataToolPropsTable','javax.swing.JLabel','javax.swing.JTextField','javax.swing.JPanel','javax.swing.undo.UndoManager','javax.swing.undo.UndoableEditSupport',['org.opensourcephysics.tools.DataToolTab','.ShiftEditListener'],'java.awt.event.FocusAdapter',['org.opensourcephysics.tools.DatasetCurveFitter','.DCFNumberField'],['org.opensourcephysics.tools.DataToolTab','.CrawlerSpinnerModel'],'javax.swing.JSpinner',['org.opensourcephysics.tools.DataToolTable','.WorkingDataset'],'java.util.HashMap',['org.opensourcephysics.tools.DataToolTab','.ShiftEdit'],['org.opensourcephysics.tools.DataToolTab','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataToolTab", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['org.opensourcephysics.tools.Tool', 'java.beans.PropertyChangeListener']);
C$.$classes$=[['DataToolAxes',4],['DataToolPlotter',4],['ShiftEdit',4],['CrawlerSpinnerModel',0],['ShiftEditListener',0],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.originatorID=0;
this.dataManager=Clazz.new_($I$(26,1));
this.ownedColumns=Clazz.new_($I$(31,1));
this.colorIndex=0;
this.userEditable=false;
this.jobManager=Clazz.new_($I$(32,1).c$$org_opensourcephysics_tools_Tool,[this]);
this.positionVisible=false;
this.slopeVisible=false;
this.areaVisible=false;
this.originShiftEnabled=false;
this.originShiftJustEnabled=false;
this.measureFit=false;
this.isInitialized=false;
this.replaceColumnsWithMatchingNames=false;
this.selectedDataIndex=-1;
this.mouseState=0;
this.rowsInside=Clazz.new_($I$(17,1));
this.recent=Clazz.new_($I$(17,1));
this.haveGUI=false;
this.fitTimerAction=((P$.DataToolTab$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].fitTimer != null ) {
if (p$2.isFitterVisible.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []) && !this.b$['org.opensourcephysics.tools.DataToolTab'].plotAxes.getScaleSetter$().isVisible$() && this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.isAutoFit$() && this.b$['org.opensourcephysics.tools.DataToolTab'].dataTool.isVisible$()  ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.fit$org_opensourcephysics_tools_KnownFunction(this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.fit);
} else this.b$['org.opensourcephysics.tools.DataToolTab'].plot.repaint$();
}});
})()
), Clazz.new_(P$.DataToolTab$1.$init$,[this, null]));
},1);

C$.$fields$=[['Z',['tabChanged','userEditable','positionVisible','slopeVisible','areaVisible','originShiftEnabled','originShiftJustEnabled','measureFit','isHorzVarPopup','isInitialized','replaceColumnsWithMatchingNames','toggleMeasurement','freezeMeasurement','selectionChanged','readyToFindHits','selectionBoxChanged','fitterWasVisible','haveGUI'],'D',['prevShiftX','prevShiftY'],'I',['originatorID','colorIndex','selectedDataIndex','mouseState'],'S',['fileName','ownerName'],'O',['curveFitter','org.opensourcephysics.tools.DatasetCurveFitter','dataTool','org.opensourcephysics.tools.DataTool','dataManager','org.opensourcephysics.display.DatasetManager','splitPanes','javax.swing.JSplitPane[]','plot','org.opensourcephysics.tools.DataToolTab.DataToolPlotter','dataTable','org.opensourcephysics.tools.DataToolTable','statsTable','org.opensourcephysics.tools.DataToolStatsTable','propsTable','org.opensourcephysics.tools.DataToolPropsTable','dataScroller','javax.swing.JScrollPane','+statsScroller','+propsScroller','+tableScroller','toolbar','javax.swing.JToolBar','statsCheckbox','javax.swing.JCheckBoxMenuItem','+propsCheckbox','+fourierCheckbox','fourierPanel','org.opensourcephysics.tools.FourierPanel','fourierDialog','javax.swing.JDialog','measureButton','javax.swing.JButton','+analyzeButton','+dataBuilderButton','+newColumnButton','+refreshDataButton','valueCheckbox','javax.swing.JCheckBoxMenuItem','+slopeCheckbox','+areaCheckbox','showFitterAction','javax.swing.Action','+hideFitterAction','+propsAndStatsAction','fitMenu','javax.swing.JMenu','ownedColumns','java.util.Map','helpButton','javax.swing.JButton','+editDataButton','undoSupport','javax.swing.undo.UndoableEditSupport','undoManager','javax.swing.undo.UndoManager','dataBuilder','org.opensourcephysics.tools.FunctionTool','jobManager','org.opensourcephysics.tools.JobManager','statusLabel','javax.swing.JLabel','+editableLabel','plotAxes','org.opensourcephysics.tools.DataToolTab.DataToolAxes','varPopup','javax.swing.JPopupMenu','setVarAction','javax.swing.Action','constantsLoadedFromXML','Object[][]','measureFitCheckbox','javax.swing.JCheckBoxMenuItem','+originShiftCheckbox','shiftXField','org.opensourcephysics.tools.DatasetCurveFitter.DCFNumberField','+shiftYField','+selectedXField','+selectedYField','shiftXSpinner','javax.swing.JSpinner','+shiftYSpinner','shiftEditListener','org.opensourcephysics.tools.DataToolTab.ShiftEditListener','shiftXLabel','javax.swing.JLabel','+shiftYLabel','+selectedXLabel','+selectedYLabel','rowsInside','java.util.BitSet','+recent','mouseDrawable','org.opensourcephysics.display.Interactive','timerToFindHits','javax.swing.Timer','+fitTimer','fitTimerAction','java.awt.event.ActionListener']]
,['I',['fitDelayMS'],'O',['correlationFormat','java.text.DecimalFormat','SELECT_CURSOR','java.awt.Cursor','+SELECT_ZOOM_CURSOR','+SELECT_REMOVE_CURSOR','+SELECT_ADD_CURSOR']]]

Clazz.newMeth(C$, 'getCurveFitter$',  function () {
this.checkGUI$();
return this.curveFitter;
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_Data$org_opensourcephysics_tools_DataTool',  function (data, tool) {
Clazz.super_(C$, this);
this.dataTool=tool;
this.dataTable=Clazz.new_($I$(33,1).c$$org_opensourcephysics_tools_DataToolTab,[this]);
var name=$I$(21).getString$S("DataToolTab.DefaultName");
if (data != null ) {
var s=data.getName$();
if ((s != null ) && !s.equals$O("") ) {
name=s;
}}this.setName$S(name);
this.loadData$org_opensourcephysics_display_Data$Z(data, false);
this.tabChanged$Z(false);
}, 1);

Clazz.newMeth(C$, 'addNotify$',  function () {
this.checkGUI$();
C$.superclazz.prototype.addNotify$.apply(this, []);
});

Clazz.newMeth(C$, 'checkGUI$',  function () {
if (this.haveGUI) return;
this.createGUI$();
});

Clazz.newMeth(C$, 'loadData$org_opensourcephysics_display_Data$Z',  function (data, replaceIfSameName) {
var loadedColumns=Clazz.new_($I$(27,1));
if (data == null ) {
return loadedColumns;
}var inputColumns=$I$(34).getAllDataColumns$org_opensourcephysics_display_Data(data);
if (inputColumns == null ) {
return loadedColumns;
}var updatedColumns=false;
if (this.dataManager.getDatasetsRaw$().isEmpty$()) {
this.originatorID=data.getID$();
for (var next, $next = inputColumns.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.addColumn$org_opensourcephysics_tools_DataColumn(next);
loadedColumns.add$O(next);
}
} else {
for (var local, $local = this.dataManager.getDatasetsRaw$().iterator$(); $local.hasNext$()&&((local=($local.next$())),1);) {
var match=p$2.getIDMatch$org_opensourcephysics_display_Dataset$java_util_ArrayList.apply(this, [local, inputColumns]);
if (match != null ) {
var localName=local.getYColumnName$();
var name=match.getYColumnName$();
local.setXYColumnNames$S$S("row", "");
name=this.dataManager.uniquifyColumnName$org_opensourcephysics_display_Dataset$S(match, name);
local.setXYColumnNames$S$S("row", localName);
if (!$I$(35,"equals$DA$DA",[local.getYPoints$(), match.getYPoints$()]) || !name.equals$O(localName) ) {
local.clear$();
var rows=$I$(34,"getRowArray$I",[match.getIndex$()]);
local.append$DA$DA(rows, match.getYPoints$());
local.setXYColumnNames$S$S("row", name);
updatedColumns=true;
}inputColumns.remove$O(match);
} else if (replaceIfSameName) {
match=p$2.getNameMatch$org_opensourcephysics_display_Dataset$java_util_ArrayList.apply(this, [local, inputColumns]);
if (match != null ) {
if (!$I$(35,"equals$DA$DA",[local.getYPoints$(), match.getYPoints$()])) {
local.clear$();
var rows=$I$(34,"getRowArray$I",[match.getIndex$()]);
local.append$DA$DA(rows, match.getYPoints$());
updatedColumns=true;
}inputColumns.remove$O(match);
}}}
for (var next, $next = inputColumns.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.addColumn$org_opensourcephysics_tools_DataColumn(next);
loadedColumns.add$O(next);
}
}if (this.haveGUI && (updatedColumns || !loadedColumns.isEmpty$() ) ) {
this.dataTable.refreshTable$I(16640);
this.statsTable.refreshStatistics$();
this.refreshPlot$();
this.refreshGUI$();
this.tabChanged$Z(true);
this.varPopup=null;
}return loadedColumns;
});

Clazz.newMeth(C$, 'addColumns$org_opensourcephysics_display_Data$Z$Z$Z',  function (source, deletable, addDuplicates, postEdit) {
var datasets=this.dataManager.getDatasetsRaw$();
var indepVar=datasets.isEmpty$() ? null : datasets.get$I(0);
var indepVarPts=(indepVar == null ) ? null : indepVar.getYPoints$();
if (indepVarPts != null ) {
var n=indepVarPts.length;
while (--n >= 0 && Double.isNaN$D(indepVarPts[n]) ){
}
var newVals=Clazz.array(Double.TYPE, [++n]);
System.arraycopy$O$I$O$I$I(indepVarPts, 0, newVals, 0, n);
indepVarPts=newVals;
}indepVar=(indepVarPts == null  || $I$(34).containsDuplicateValues$DA(indepVarPts)  ? null : indepVar);
var inputColumns=$I$(34).getDataColumns$org_opensourcephysics_display_Data(source);
var duplicate=null;
if (indepVar != null  && indepVarPts != null  ) {
var indepVarName=indepVar.getYColumnName$();
for (var next, $next = inputColumns.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (duplicate == null  && next.getYColumnName$().equals$O(indepVarName) ) {
var inputPts=next.getYPoints$();
while ((inputPts.length > 0) && Double.isNaN$D(inputPts[inputPts.length - 1]) ){
var newVals=Clazz.array(Double.TYPE, [inputPts.length - 1]);
System.arraycopy$O$I$O$I$I(inputPts, 0, newVals, 0, newVals.length);
inputPts=newVals;
}
if ($I$(34).containsDuplicateValues$DA(inputPts)) {
continue;
}var foundMatchingPoint=false;
for (var value, $value = 0, $$value = inputPts; $value<$$value.length&&((value=($$value[$value])),1);$value++) {
if ($I$(34).getIndex$D$DA$I(value, indepVarPts, -1) > -1) {
foundMatchingPoint=true;
break;
}}
if (!foundMatchingPoint) {
continue;
}duplicate=next;
var trend=1;
var prev=-1.7976931348623157E308;
for (var d, $d = 0, $$d = indepVarPts; $d<$$d.length&&((d=($$d[$d])),1);$d++) {
if (d > prev ) {
prev=d;
} else {
trend=-1;
break;
}}
if (trend == -1) {
prev=1.7976931348623157E308;
for (var d, $d = 0, $$d = indepVarPts; $d<$$d.length&&((d=($$d[$d])),1);$d++) {
if (d < prev ) {
prev=d;
} else {
trend=0;
break;
}}
}var newIndepVarPts=Clazz.array(Double.TYPE, [indepVarPts.length]);
System.arraycopy$O$I$O$I$I(indepVarPts, 0, newIndepVarPts, 0, indepVarPts.length);
var valuesInserted=Clazz.array(Double.TYPE, [inputPts.length]);
var len=0;
for (var i=0; i < inputPts.length; i++) {
var index=$I$(34).getIndex$D$DA$I(inputPts[i], indepVarPts, -1);
if (index == -1) {
valuesInserted[len]=inputPts[i];
++len;
newIndepVarPts=$I$(34).insert$D$DA$I(inputPts[i], newIndepVarPts, trend);
}}
if (len > 0) {
var rowsInserted=Clazz.array(Double.TYPE, [len]);
var rowsToInsert=Clazz.array(Integer.TYPE, [len]);
for (var i=0; i < len; i++) {
var val=valuesInserted[i];
var index=$I$(34).getIndex$D$DA$I(val, newIndepVarPts, -1);
rowsInserted[i]=index;
rowsToInsert[i]=index;
}
$I$(35).sort$IA(rowsToInsert);
var valuesToInsert=Clazz.array(Double.TYPE, [len]);
for (var i=0; i < len; i++) {
var row=rowsToInsert[i];
var index=$I$(34).getIndex$D$DA$I(row, rowsInserted, -1);
valuesToInsert[i]=valuesInserted[index];
}
this.dataTable.pasteValues.clear$();
this.dataTable.pasteValues.put$O$O(indepVarName, valuesToInsert);
var prevState=this.dataTable.insertRows$IA$java_util_HashMap(rowsToInsert, this.dataTable.pasteValues);
var edit=Clazz.new_($I$(36,1).c$$I$S$O$O,[this.dataTable, null, 6, null, rowsToInsert, prevState]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
for (var d, $d = inputColumns.iterator$(); $d.hasNext$()&&((d=($d.next$())),1);) {
if (d === duplicate ) {
continue;
}var prevY=d.getYPoints$();
var rows=$I$(34).getRowArray$I(newIndepVarPts.length);
var newY=Clazz.array(Double.TYPE, [rows.length]);
$I$(35).fill$DA$D(newY, NaN);
var k=Math.min(inputPts.length, prevY.length);
for (var i=0; i < k; i++) {
var index=$I$(34).getIndex$D$DA$I(inputPts[i], newIndepVarPts, -1);
newY[index]=prevY[i];
}
d.set$DA$DA(rows, newY);
}
}}}
}inputColumns.remove$O(duplicate);
this.addColumns$java_util_ArrayList$Z$Z$Z(inputColumns, deletable, addDuplicates, postEdit);
});

Clazz.newMeth(C$, 'addColumns$java_util_ArrayList$Z$Z$Z',  function (columns, deletable, addDuplicates, postEdit) {
for (var next, $next = columns.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var id=next.getID$();
if (addDuplicates) {
next.setID$I(-id);
}var loadedColumns=this.loadData$org_opensourcephysics_display_Data$Z(next, false);
next.setID$I(id);
if (!loadedColumns.isEmpty$()) {
for (var dc, $dc = loadedColumns.iterator$(); $dc.hasNext$()&&((dc=($dc.next$())),1);) {
dc.deletable=deletable;
}
if (postEdit) {
var col=this.dataTable.getColumnCount$() - 1;
var edit=Clazz.new_([this.dataTable, null, 1, next.getYColumnName$(), Integer.valueOf$I(col), next],$I$(36,1).c$$I$S$O$O);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
}this.refreshDataBuilder$();
}}
this.dataTable.refreshUndoItems$();
this.refreshGUI$();
});

Clazz.newMeth(C$, 'setWorkingColumns$S$S',  function (xColName, yColName) {
this.dataTable.setWorkingColumns$S$S(xColName, yColName);
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
name=this.replaceSpacesWithUnderscores$S(name);
C$.superclazz.prototype.setName$S.apply(this, [name]);
if (this.dataTool != null ) {
this.dataTool.refreshTabTitles$();
}});

Clazz.newMeth(C$, 'setUserEditable$Z',  function (editable) {
if (this.userEditable == editable ) {
return;
}this.userEditable=editable;
this.refreshGUI$();
});

Clazz.newMeth(C$, 'isUserEditable$',  function () {
return this.userEditable && !this.originShiftEnabled ;
});

Clazz.newMeth(C$, 'getDataBuilder$',  function () {
if (this.dataTool != null ) {
return this.dataTool.getDataBuilder$();
}if (this.dataBuilder == null ) {
this.dataBuilder=((P$.DataToolTab$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.tools.FunctionTool'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setTitles$',  function () {
this.dropdownTipText=($I$(21).getString$S("DataTool.DataBuilder.Dropdown.Tooltip"));
this.titleText=($I$(21).getString$S("DataTool.DataBuilder.Title"));
});
})()
), Clazz.new_($I$(37,1).c$$java_awt_Component,[this, null, this],P$.DataToolTab$2));
this.dataBuilder.setFontLevel$I($I$(1).getLevel$());
this.dataBuilder.setHelpPath$S("data_builder_help.html");
this.dataBuilder.addPropertyChangeListener$S$java_beans_PropertyChangeListener("function", this);
}this.refreshDataBuilder$();
return this.dataBuilder;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
p$2.stopFitTimer.apply(this, []);
switch (e.getPropertyName$()) {
case "function":
this.tabChanged$Z(true);
this.dataTable.refreshTable$I(8519680);
this.statsTable.refreshStatistics$();
if (Clazz.instanceOf(e.getNewValue$(), "org.opensourcephysics.display.DataFunction")) {
var funcName=e.getNewValue$().toString();
this.dataTable.getWorkingData$S(funcName);
}if (Clazz.instanceOf(e.getOldValue$(), "org.opensourcephysics.display.DataFunction")) {
var funcName=e.getOldValue$().toString();
this.dataTable.removeWorkingData$S(funcName);
}if (Clazz.instanceOf(e.getNewValue$(), "java.lang.String")) {
var funcName=e.getNewValue$().toString();
if (Clazz.instanceOf(e.getOldValue$(), "java.lang.String")) {
var prevName=e.getOldValue$().toString();
this.columnNameChanged$S$S(prevName, funcName);
} else {
this.dataTable.getWorkingData$S(funcName);
}}this.refreshPlot$();
this.varPopup=null;
break;
}
});

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, replyTo) {
var control=Clazz.new_([job.getXML$()],$I$(38,1).c$$S);
if (control.failedToRead$() || (control.getObjectClass$() === Clazz.getClass(java.lang.Object) ) ) {
return;
}this.receiveJobControl$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool$org_opensourcephysics_controls_XMLControlElement(job, replyTo, control);
});

Clazz.newMeth(C$, 'receiveJobControl$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool$org_opensourcephysics_controls_XMLControlElement',  function (job, replyTo, control) {
this.jobManager.log$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool(job, replyTo);
if (Clazz.getClass($I$(39),['getColumnNames$','getData2D$','getData3D$','getDataList$','getDatasets$','getFillColors$','getID$','getLineColors$','getName$','setID$I']).isAssignableFrom$Class(control.getObjectClass$())) {
var data=control.loadObject$O$Z$Z(null, true, true);
this.loadData$org_opensourcephysics_display_Data$Z(data, this.replaceColumnsWithMatchingNames);
this.jobManager.associate$org_opensourcephysics_tools_Job$O(job, this.dataManager);
this.refreshGUI$();
} else if (Clazz.getClass(C$).isAssignableFrom$Class(control.getObjectClass$())) {
control.loadObject$O(this);
this.refreshGUI$();
}});

Clazz.newMeth(C$, 'addFitFunction$org_opensourcephysics_tools_KnownFunction$Z',  function (f, addToFitBuilder) {
this.getCurveFitter$().addFitFunction$org_opensourcephysics_tools_KnownFunction$Z(f, addToFitBuilder);
});

Clazz.newMeth(C$, 'clearData$Z',  function (postEdit) {
var colNames=Clazz.new_($I$(27,1));
for (var next, $next = this.dataManager.getDatasetsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
colNames.add$O(next.getYColumnName$());
}
this.dataTable.setSelectedColumnNames$java_util_Collection(colNames);
this.dataTable.deleteSelectedColumns$Z(postEdit);
});

Clazz.newMeth(C$, 'setReplaceColumnsWithMatchingNames$Z',  function (replace) {
this.replaceColumnsWithMatchingNames=replace;
});

Clazz.newMeth(C$, 'isInterestedIn$org_opensourcephysics_display_Data',  function (data) {
if (data == null ) return false;
if (this.isOwnedBy$org_opensourcephysics_display_Data(data)) return true;
var tools=this.jobManager.getTools$O(this.dataManager);
for (var tool, $tool = tools.iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (Clazz.instanceOf(tool, "org.opensourcephysics.tools.DataRefreshTool")) {
var refresher=tool;
if (refresher.moreData.contains$O(data)) return true;
}}
return false;
});

Clazz.newMeth(C$, 'setOwnedColumnIDs$S$org_opensourcephysics_display_Data',  function (columnOwnerName, data) {
var namesToMatch=Clazz.new_($I$(40,1));
for (var colName, $colName = this.ownedColumns.keySet$().iterator$(); $colName.hasNext$()&&((colName=($colName.next$())),1);) {
var dataNames=this.ownedColumns.get$O(colName);
if (dataNames != null  && dataNames[0].equals$O(columnOwnerName) ) {
namesToMatch.add$O(colName);
}}
var matches=this.getColumnMatchesByName$java_util_Set$org_opensourcephysics_display_Data(namesToMatch, data);
for (var column, $column = matches.keySet$().iterator$(); $column.hasNext$()&&((column=($column.next$())),1);) {
var match=matches.get$O(column);
column.setID$I(match.getID$());
}
return !matches.isEmpty$();
});

Clazz.newMeth(C$, 'saveOwnedColumnNames$S$org_opensourcephysics_display_Data',  function (columnOwnerName, data) {
var matches=this.getColumnMatchesByID$org_opensourcephysics_display_Data(data);
for (var column, $column = matches.keySet$().iterator$(); $column.hasNext$()&&((column=($column.next$())),1);) {
var match=matches.get$O(column);
this.ownedColumns.put$O$O(column.getYColumnName$(), Clazz.array(String, -1, [columnOwnerName, match.getYColumnName$()]));
}
});

Clazz.newMeth(C$, 'getColumnName$I',  function (ID) {
for (var column, $column = this.dataManager.getDatasetsRaw$().iterator$(); $column.hasNext$()&&((column=($column.next$())),1);) {
if (column.getID$() == ID) return column.getYColumnName$();
}
return null;
});

Clazz.newMeth(C$, 'isOwnedBy$org_opensourcephysics_display_Data',  function (data) {
if (data == null ) return false;
var name=data.getName$();
if ((name != null ) && this.replaceSpacesWithUnderscores$S(name).equals$O(this.getName$()) ) {
return true;
}return data.getID$() == this.originatorID;
});

Clazz.newMeth(C$, 'setOwner$S$org_opensourcephysics_display_Data',  function (name, data) {
this.ownerName=name;
this.originatorID=data.getID$();
});

Clazz.newMeth(C$, 'getOwnerName$',  function () {
return this.ownerName;
});

Clazz.newMeth(C$, 'refreshData$',  function () {
this.dataManager.setName$S(this.getName$());
this.jobManager.sendReplies$O(this.dataManager);
});

Clazz.newMeth(C$, 'addColumn$org_opensourcephysics_tools_DataColumn',  function (column) {
var name=column.getYColumnName$();
var yName=this.dataManager.uniquifyColumnName$org_opensourcephysics_display_Dataset$S(column, name);
if (!name.equals$O(yName)) {
var xName=column.getXColumnName$();
column.setXYColumnNames$S$S(xName, yName);
}if (this.dataManager.getDatasetsRaw$().isEmpty$()) {
column.setMarkerColor$java_awt_Color($I$(2).BLACK);
column.setLineColor$java_awt_Color($I$(2).BLACK);
}this.dataManager.addDataset$org_opensourcephysics_display_Dataset(column);
this.dataTable.getWorkingData$S(yName);
});

Clazz.newMeth(C$, 'isDeletable$org_opensourcephysics_display_Dataset',  function (data) {
if (data == null ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'replaceSpacesWithUnderscores$S',  function (name) {
name.trim$();
var n=name.indexOf$S(" ");
while (n > -1){
name=name.substring$I$I(0, n) + "_" + name.substring$I(n + 1) ;
n=name.indexOf$S(" ");
}
return name;
});

Clazz.newMeth(C$, 'refreshDataBuilder$',  function () {
if (this.dataTool != null ) {
this.dataTool.refreshDataBuilder$();
return;
}if (this.dataBuilder == null ) {
return;
}if (this.dataBuilder.getPanel$S(this.getName$()) == null ) {
var panel=Clazz.new_($I$(41,1).c$$org_opensourcephysics_display_DatasetManager,[this.dataManager]);
this.dataBuilder.addPanel$S$org_opensourcephysics_tools_FunctionPanel(this.getName$(), panel);
}for (var name, $name = this.dataBuilder.trackFunctionPanels.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (!name.equals$O(this.getName$())) {
this.dataBuilder.removePanel$S(name);
}}
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(1).setFonts$O$I(this, level);
this.getCurveFitter$().setFontLevel$I(level);
var factor=$I$(1).getFactor$I(level);
this.plot.getAxes$().resizeFonts$D$org_opensourcephysics_display_DrawingPanel(factor, this.plot);
$I$(1,"setFonts$O$I",[this.plot.getPopupMenu$(), level]);
if (this.propsTable.styleDialog != null ) {
$I$(1).setFonts$O$I(this.propsTable.styleDialog, level);
this.propsTable.styleDialog.pack$();
}if (this.dataBuilder != null ) {
this.dataBuilder.setFontLevel$I(level);
}var a=p$2.isFitterVisible.apply(this, []) ? this.showFitterAction : this.hideFitterAction;
a.actionPerformed$java_awt_event_ActionEvent(null);
this.propsTable.refreshTable$();
$I$(1).setFonts$O$I(this.shiftXLabel, level);
$I$(1).setFonts$O$I(this.shiftYLabel, level);
$I$(1).setFonts$O$I(this.selectedXLabel, level);
$I$(1).setFonts$O$I(this.selectedYLabel, level);
$I$(1).setFonts$O$I(this.shiftXField, level);
$I$(1).setFonts$O$I(this.shiftYField, level);
$I$(1).setFonts$O$I(this.selectedXField, level);
$I$(1).setFonts$O$I(this.selectedYField, level);
this.shiftXField.refreshPreferredWidth$();
this.shiftYField.refreshPreferredWidth$();
this.selectedXField.refreshPreferredWidth$();
this.selectedYField.refreshPreferredWidth$();
this.toolbar.revalidate$();
this.refreshStatusBar$S(null);
this.propsAndStatsAction.actionPerformed$java_awt_event_ActionEvent(null);
$I$(11,"trigger$I$java_awt_event_ActionListener",[1, ((P$.DataToolTab$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolTab$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.tools.DataToolTab'].propsAndStatsAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_(P$.DataToolTab$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'tabChanged$Z',  function (changed) {
this.tabChanged=changed;
});

Clazz.newMeth(C$, 'getWorkingData$',  function () {
return this.dataTable.workingData;
});

Clazz.newMeth(C$, 'columnNameChanged$S$S',  function (oldName, newName) {
this.tabChanged$Z(true);
this.varPopup=null;
var pattern=this.dataTable.getFormatPattern$S(oldName);
this.dataTable.removeWorkingData$S(oldName);
this.dataTable.getWorkingData$S(newName);
this.dataTable.setFormatPattern$S$S(newName, pattern);
if ((this.propsTable.styleDialog != null ) && this.propsTable.styleDialog.isVisible$() && this.propsTable.styleDialog.getName$().equals$O(oldName)  ) {
this.propsTable.styleDialog.setName$S(newName);
var title=$I$(21).getString$S("DataToolPropsTable.Dialog.Title");
var $var=$I$(24).removeSubscripting$S(newName);
this.propsTable.styleDialog.setTitle$S(title + " \"" + $var + "\"" );
}this.statsTable.refreshStatistics$();
var working=this.getWorkingData$();
if (working == null ) {
return;
}this.refreshPlot$();
});

Clazz.newMeth(C$, 'createDataColumn$',  function () {
var markerColor=$I$(42).getMarkerColor$I(this.colorIndex);
var lineColor=$I$(42).getLineColor$I(this.colorIndex);
if (!this.dataManager.getDatasetsRaw$().isEmpty$()) {
++this.colorIndex;
}var column=Clazz.new_($I$(43,1));
column.setMarkerColor$java_awt_Color(markerColor);
column.setLineColor$java_awt_Color(lineColor);
column.setConnected$Z(false);
var rowCount=Math.max(1, this.dataTable.getRowCount$());
var y=Clazz.array(Double.TYPE, [rowCount]);
$I$(35).fill$DA$D(y, NaN);
column.setPoints$DA$I(y, rowCount);
column.setXColumnVisible$Z(false);
return column;
});

Clazz.newMeth(C$, 'saveTableDataToFile$Z',  function (asFormatted) {
var tabName=this.getName$();
$I$(44).finest$S("saving table data from " + tabName);
var chooser=$I$(11).getChooser$();
chooser.setSelectedFile$java_io_File(Clazz.new_($I$(45,1).c$$S,[tabName + ".txt"]));
$I$(1,"setFonts$O$I",[chooser, $I$(1).getLevel$()]);
var result=chooser.showSaveDialog$java_awt_Component(this);
if (result == 0) {
$I$(11).chooserDir=chooser.getCurrentDirectory$().toString();
var fileName=chooser.getSelectedFile$().getAbsolutePath$();
fileName=$I$(46).getRelativePath$S(fileName);
var data=this.getSelectedTableData$Z$S(asFormatted, $I$(47).getDelimiter$());
return $I$(34).write$S$S(data, fileName);
}return null;
});

Clazz.newMeth(C$, 'copyTableDataToClipboard$Z',  function (asFormatted) {
$I$(11,"copy$S$java_awt_datatransfer_ClipboardOwner",[this.getSelectedTableData$Z$S(asFormatted, $I$(47).getDelimiter$()), null]);
});

Clazz.newMeth(C$, 'getSelectedTableData$Z$S',  function (asFormatted, delimiter) {
var buf=Clazz.new_($I$(23,1));
if (this.getName$() != null ) {
buf.append$S(this.getName$() + "\n");
}if (asFormatted) {
if (this.dataTable.getSelectedRows$().length == 0) {
this.dataTable.selectAllCells$();
}buf.append$StringBuffer(this.dataTable.getData$Z(true));
return buf.toString();
}var columns=null;
if (this.dataTable.getRowCount$() == 0) {
columns=Clazz.array(Integer.TYPE, [this.dataTable.getColumnCount$() - 1]);
for (var i=0; i < columns.length; i++) columns[i]=i + 1;

}this.dataTable.clearSelectionIfEmptyEndRow$();
var rows=this.dataTable.getSelectedRows$();
if (rows.length == 0) {
this.dataTable.selectAllCells$();
rows=this.dataTable.getSelectedRows$();
}if (columns == null ) columns=this.dataTable.getSelectedColumns$();
for (var j=0; j < columns.length; j++) {
var col=columns[j];
var modelCol=this.dataTable.convertColumnIndexToModel$I(col);
if (this.dataTable.isRowNumberVisible$() && (modelCol == 0) ) {
continue;
}buf.append$S(this.dataTable.getColumnName$I(col));
buf.append$S(delimiter);
}
buf.setLength$I(buf.length$() - 1);
buf.append$S("\n");
var df=$I$(48).getInstance$();
for (var i=0; i < rows.length; i++) {
for (var j=0; j < columns.length; j++) {
var col=columns[j];
var modelCol=this.dataTable.convertColumnIndexToModel$I(col);
if (this.dataTable.isRowNumberVisible$() && (modelCol == 0) ) {
continue;
}var value=this.dataTable.getValueAt$I$I(rows[i], col);
if (Clazz.instanceOf(value, "java.lang.Double") && Double.isNaN$D((value).doubleValue$()) ) value=null;
if (value != null ) {
if (Clazz.instanceOf(value, "java.util.Date")) {
value=df.format$O(value);
}buf.append$O(value);
}buf.append$S(delimiter);
}
buf.setLength$I(buf.length$() - 1);
buf.append$S("\n");
}
return buf.toString();
});

Clazz.newMeth(C$, 'createGUI$',  function () {
if (this.haveGUI) return;
this.haveGUI=true;
$I$(21,"addPropertyChangeListener$S$java_beans_PropertyChangeListener",["locale", ((P$.DataToolTab$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
});
})()
), Clazz.new_(P$.DataToolTab$3.$init$,[this, null]))]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(49,1)));
this.splitPanes=Clazz.array($I$(50), [3]);
this.splitPanes[0]=Clazz.new_($I$(50,1).c$$I,[1]);
this.splitPanes[0].setResizeWeight$D(0.7);
this.splitPanes[0].setOneTouchExpandable$Z(true);
this.splitPanes[1]=Clazz.new_($I$(50,1).c$$I,[0]);
this.splitPanes[1].setResizeWeight$D(1);
this.splitPanes[1].setDividerSize$I(0);
this.splitPanes[2]=((P$.DataToolTab$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JSplitPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.width=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getMinimumTableWidth$() + 6;
var scrollbar=this.b$['org.opensourcephysics.tools.DataToolTab'].dataScroller.getVerticalScrollBar$();
if (scrollbar.isVisible$()) {
dim.width+=scrollbar.getWidth$();
}dim.height=1;
return dim;
});
})()
), Clazz.new_($I$(50,1).c$$I,[this, null, 0],P$.DataToolTab$4));
this.splitPanes[2].setDividerSize$I(0);
this.splitPanes[2].setEnabled$Z(false);
this.addAncestorListener$javax_swing_event_AncestorListener(((P$.DataToolTab$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.AncestorListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'ancestorAdded$javax_swing_event_AncestorEvent',  function (e) {
if (this.b$['java.awt.Component'].getSize$.apply(this.b$['java.awt.Component'], []).width > 0) {
p$2.init.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
}});

Clazz.newMeth(C$, 'ancestorRemoved$javax_swing_event_AncestorEvent',  function (event) {
});

Clazz.newMeth(C$, 'ancestorMoved$javax_swing_event_AncestorEvent',  function (event) {
});
})()
), Clazz.new_(P$.DataToolTab$5.$init$,[this, null])));
this.addComponentListener$java_awt_event_ComponentListener(((P$.DataToolTab$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
var a=p$2.isFitterVisible.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []) ? this.b$['org.opensourcephysics.tools.DataToolTab'].showFitterAction : this.b$['org.opensourcephysics.tools.DataToolTab'].hideFitterAction;
a.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.DataToolTab$6)));
this.dataTool.addWindowListener$java_awt_event_WindowListener(((P$.DataToolTab$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
var a=p$2.isFitterVisible.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []) ? this.b$['org.opensourcephysics.tools.DataToolTab'].showFitterAction : this.b$['org.opensourcephysics.tools.DataToolTab'].hideFitterAction;
a.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(52,1),[this, null],P$.DataToolTab$7)));
this.dataTable.setRowNumberVisible$Z(true);
this.dataScroller=Clazz.new_($I$(53,1).c$$java_awt_Component,[this.dataTable]);
this.dataTable.refreshTable$I(1);
this.dataTable.addPropertyChangeListener$S$java_beans_PropertyChangeListener("format", ((P$.DataToolTab$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolTab$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshShiftFields$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
});
})()
), Clazz.new_(P$.DataToolTab$lambda2.$init$,[this, null])));
this.dataScroller.addMouseListener$java_awt_event_MouseListener(((P$.DataToolTab$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.clearSelection$();
});
})()
), Clazz.new_($I$(54,1),[this, null],P$.DataToolTab$8)));
this.dataScroller.setToolTipText$S($I$(21).getString$S("DataToolTab.Scroller.Tooltip"));
this.dataTable.getColumnModel$().addColumnModelListener$javax_swing_event_TableColumnModelListener(((P$.DataToolTab$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TableColumnModelListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'columnAdded$javax_swing_event_TableColumnModelEvent',  function (e) {
});

Clazz.newMeth(C$, 'columnRemoved$javax_swing_event_TableColumnModelEvent',  function (e) {
});

Clazz.newMeth(C$, 'columnSelectionChanged$javax_swing_event_ListSelectionEvent',  function (e) {
});

Clazz.newMeth(C$, 'columnMarginChanged$javax_swing_event_ChangeEvent',  function (e) {
});

Clazz.newMeth(C$, 'columnMoved$javax_swing_event_TableColumnModelEvent',  function (e) {
if (e.getFromIndex$() - e.getToIndex$() != 0) this.b$['org.opensourcephysics.tools.DataToolTab'].columnOrderChanged$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
});
})()
), Clazz.new_(P$.DataToolTab$9.$init$,[this, null])));
this.showFitterAction=((P$.DataToolTab$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[1].setEnabled$Z(true);
this.b$['org.opensourcephysics.tools.DataToolTab'].getCurveFitter$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []).setFontLevel$I($I$(1).getLevel$());
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[1].setBottomComponent$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter);
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[1].setDividerSize$I(this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[0].getDividerSize$());
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[1].setDividerLocation$I(-1);
if (this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.getDrawer$() != null ) this.b$['org.opensourcephysics.tools.DataToolTab'].plot.addDrawable$org_opensourcephysics_display_Drawable(this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.getDrawer$());
if (e != null ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.setSelectedItem$S(e.getActionCommand$());
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshPlot$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
}this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.splitPane.setDividerLocation$I(this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.splitPane.getMaximumDividerLocation$());
if (!this.b$['org.opensourcephysics.tools.DataToolTab'].fitterWasVisible) {
this.b$['org.opensourcephysics.tools.DataToolTab'].fitterWasVisible=true;
this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.setAutofit$Z(true);
}});
})()
), Clazz.new_($I$(55,1),[this, null],P$.DataToolTab$10));
this.hideFitterAction=((P$.DataToolTab$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[1].remove$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter);
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[1].setDividerSize$I(this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[2].getDividerSize$());
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[1].setDividerLocation$D(1.0);
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.removeDrawables$Class(Clazz.getClass($I$(56)));
if (e != null ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshPlot$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
}});
})()
), Clazz.new_($I$(55,1),[this, null],P$.DataToolTab$11));
this.fitMenu=Clazz.new_($I$(57,1));
this.fourierCheckbox=Clazz.new_($I$(58,1));
this.fourierCheckbox.setSelected$Z(false);
this.fourierCheckbox.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].fourierPanel == null  && this.b$['org.opensourcephysics.tools.DataToolTab'].dataTool != null  ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].fourierPanel=Clazz.new_($I$(59,1));
this.b$['org.opensourcephysics.tools.DataToolTab'].fourierDialog=((P$.DataToolTab$12$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$12$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JDialog'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
this.b$['org.opensourcephysics.tools.DataToolTab'].fourierCheckbox.setSelected$Z(vis);
});
})()
), Clazz.new_($I$(60,1).c$$java_awt_Frame$Z,[this, null, this.b$['org.opensourcephysics.tools.DataToolTab'].dataTool, false],P$.DataToolTab$12$1));
this.b$['org.opensourcephysics.tools.DataToolTab'].fourierDialog.setContentPane$java_awt_Container(this.b$['org.opensourcephysics.tools.DataToolTab'].fourierPanel);
var dim=Clazz.new_($I$(61,1).c$$I$I,[640, 400]);
this.b$['org.opensourcephysics.tools.DataToolTab'].fourierDialog.setSize$java_awt_Dimension(dim);
this.b$['org.opensourcephysics.tools.DataToolTab'].fourierPanel.splitPane.setDividerLocation$I((dim.width/2|0));
this.b$['org.opensourcephysics.tools.DataToolTab'].fourierPanel.refreshFourierData$org_opensourcephysics_display_Dataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getSelectedData$(), this.b$['org.opensourcephysics.tools.DataToolTab'].getName$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []));
this.b$['org.opensourcephysics.tools.DataToolTab'].fourierDialog.setLocationRelativeTo$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTool);
}this.b$['org.opensourcephysics.tools.DataToolTab'].fourierDialog.setVisible$Z(this.b$['org.opensourcephysics.tools.DataToolTab'].fourierCheckbox.isSelected$());
});
})()
), Clazz.new_(P$.DataToolTab$12.$init$,[this, null])));
this.originShiftCheckbox=Clazz.new_($I$(58,1));
this.originShiftCheckbox.setSelected$Z(this.originShiftEnabled);
this.originShiftCheckbox.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var previouslyEnabled=this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled;
this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled=this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftCheckbox.isSelected$();
this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftJustEnabled=this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled && !previouslyEnabled ;
var shiftX=0;
for (var i=1; i < this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnCount$(); i++) {
var colName=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnName$I(i);
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(colName);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var dataCol=data;
dataCol.setShifted$Z(this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled);
if (i == 1) {
shiftX=dataCol.getShift$();
}}}
if (this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled) {
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.add$java_awt_Component$I(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXLabel, 2);
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.add$java_awt_Component$I(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXSpinner, 3);
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.add$java_awt_Component$I(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYLabel, 4);
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.add$java_awt_Component$I(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYSpinner, 5);
if (!previouslyEnabled) {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].pointIndex > -1 && this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].pointIndex > -1 ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].refreshX$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].refreshX$();
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].getX$() + shiftX);
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].getX$() + shiftX);
}}(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXSpinner.getModel$()).refreshDelta$();
(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYSpinner.getModel$()).refreshDelta$();
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXLabel);
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXSpinner);
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYLabel);
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYSpinner);
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].selectedXLabel);
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].selectedXField);
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].selectedYLabel);
this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.remove$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].selectedYField);
if (previouslyEnabled) {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].pointIndex > -1 && this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].pointIndex > -1 ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].refreshX$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].refreshX$();
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].getX$() - shiftX);
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].getX$() - shiftX);
}}}this.b$['org.opensourcephysics.tools.DataToolTab'].toolbar.validate$();
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshAll$I.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [32768]);
this.b$['org.opensourcephysics.tools.DataToolTab'].prevShiftX=-this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXField.getValue$();
this.b$['org.opensourcephysics.tools.DataToolTab'].prevShiftY=-this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYField.getValue$();
this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftJustEnabled=false;
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
});
})()
), Clazz.new_(P$.DataToolTab$13.$init$,[this, null])));
this.measureFitCheckbox=Clazz.new_($I$(58,1));
this.measureFitCheckbox.setSelected$Z(false);
this.measureFitCheckbox.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].measureFit=this.b$['org.opensourcephysics.tools.DataToolTab'].measureFitCheckbox.isSelected$();
if (this.b$['org.opensourcephysics.tools.DataToolTab'].areaVisible) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.refreshArea$();
}this.b$['org.opensourcephysics.tools.DataToolTab'].plot.refreshMeasurements$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.repaint$();
});
})()
), Clazz.new_(P$.DataToolTab$14.$init$,[this, null])));
this.newColumnButton=$I$(34).createButton$S("");
this.newColumnButton.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var column=this.b$['org.opensourcephysics.tools.DataToolTab'].createDataColumn$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
var newName=this.b$['org.opensourcephysics.tools.DataToolTab'].dataManager.getUniqueYColumnName$java_awt_Component$org_opensourcephysics_display_Dataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'], column, $I$(21).getString$S("DataToolTab.NewColumn.Name"));
if (newName == null ) {
return;
}if (newName.equals$O("")) {
var colName=$I$(21).getString$S("DataToolTab.NewColumn.Name");
newName=this.b$['org.opensourcephysics.tools.DataToolTab'].dataManager.uniquifyColumnName$org_opensourcephysics_display_Dataset$S(column, colName);
}column.setXYColumnNames$S$S("row", newName);
var loadedColumns=this.b$['org.opensourcephysics.tools.DataToolTab'].loadData$org_opensourcephysics_display_Data$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [column, false]);
if (!loadedColumns.isEmpty$()) {
for (var next, $next = loadedColumns.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.deletable=true;
}
}var edit=Clazz.new_([this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable, null, 1, newName, Integer.valueOf$I(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnCount$() - 1), column],$I$(36,1).c$$I$S$O$O);
this.b$['org.opensourcephysics.tools.DataToolTab'].undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.refreshUndoItems$();
$I$(29,"invokeLater$Runnable",[((P$.DataToolTab$15$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolTab$15$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var col=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnCount$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable, []) - 1;
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.changeSelection$I$I$Z$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable, [0, col, false, false]);
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.editCellAt$I$I$java_util_EventObject.apply(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable, [0, col, this.$finals$.e]);
$I$(29,"invokeLater$Runnable",[((P$.DataToolTab$15$lambda3$4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolTab$15$lambda3$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.editor.field.requestFocus$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.editor.field, []);
});
})()
), Clazz.new_(P$.DataToolTab$15$lambda3$4.$init$,[this, null]))]);
});
})()
), Clazz.new_(P$.DataToolTab$15$lambda3.$init$,[this, {e:e}]))]);
});
})()
), Clazz.new_(P$.DataToolTab$15.$init$,[this, null])));
this.newColumnButton.addMouseListener$java_awt_event_MouseListener(((P$.DataToolTab$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnCount$() == 2) {
this.b$['org.opensourcephysics.tools.DataToolTab'].newColumnButton.requestFocusInWindow$();
}});
})()
), Clazz.new_($I$(54,1),[this, null],P$.DataToolTab$16)));
this.newColumnButton.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.DataToolTab$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnCount$() == 2) {
this.b$['org.opensourcephysics.tools.DataToolTab'].newColumnButton.requestFocusInWindow$();
}});
})()
), Clazz.new_($I$(54,1),[this, null],P$.DataToolTab$17)));
this.editDataButton=$I$(34,"createButton$S",[$I$(21).getString$S("DataToolTab.Button.EditAsText.Text")]);
this.editDataButton.setToolTipText$S($I$(21).getString$S("DataToolTab.Button.EditAsText.Tooltip"));
this.editDataButton.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTool.editDataAction$();
});
})()
), Clazz.new_(P$.DataToolTab$18.$init$,[this, null])));
this.dataBuilderButton=$I$(34,"createButton$S",[$I$(21).getString$S("DataToolTab.Button.DataBuilder.Text")]);
this.dataBuilderButton.setToolTipText$S($I$(21).getString$S("DataToolTab.Button.DataBuilder.Tooltip"));
this.dataBuilderButton.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].getDataBuilder$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []).setVisible$Z(true);
this.b$['org.opensourcephysics.tools.DataToolTab'].getDataBuilder$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []).setSelectedPanel$S(this.b$['java.awt.Component'].getName$.apply(this.b$['java.awt.Component'], []));
});
})()
), Clazz.new_(P$.DataToolTab$19.$init$,[this, null])));
this.refreshDataButton=$I$(34,"createButton$S",[$I$(21).getString$S("DataToolTab.Button.Refresh.Text")]);
this.refreshDataButton.setToolTipText$S($I$(21).getString$S("DataToolTab.Button.Refresh.Tooltip"));
this.refreshDataButton.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshData$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
});
})()
), Clazz.new_(P$.DataToolTab$20.$init$,[this, null])));
this.helpButton=$I$(34,"createButton$S",[$I$(21).getString$S("Tool.Button.Help")]);
this.helpButton.setToolTipText$S($I$(21).getString$S("Tool.Button.Help.ToolTip"));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(34).showHelp$();
});
})()
), Clazz.new_(P$.DataToolTab$21.$init$,[this, null])));
this.valueCheckbox=Clazz.new_([$I$(21).getString$S("DataToolTab.Checkbox.Position")],$I$(58,1).c$$S);
this.valueCheckbox.setSelected$Z(false);
this.valueCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.Position.Tooltip"));
this.valueCheckbox.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].freezeMeasurement=false;
this.b$['org.opensourcephysics.tools.DataToolTab'].positionVisible=this.b$['org.opensourcephysics.tools.DataToolTab'].valueCheckbox.isSelected$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMessage$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.createMessage$());
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshStatusBar$S.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [null]);
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshFitDrawer$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
});
})()
), Clazz.new_(P$.DataToolTab$22.$init$,[this, null])));
this.slopeCheckbox=Clazz.new_([$I$(21).getString$S("DataToolTab.Checkbox.Slope")],$I$(58,1).c$$S);
this.slopeCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.Slope.Tooltip"));
this.slopeCheckbox.setSelected$Z(false);
this.slopeCheckbox.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].freezeMeasurement=false;
this.b$['org.opensourcephysics.tools.DataToolTab'].slopeVisible=this.b$['org.opensourcephysics.tools.DataToolTab'].slopeCheckbox.isSelected$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMessage$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.createMessage$());
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshStatusBar$S.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [null]);
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshFitDrawer$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
});
})()
), Clazz.new_(P$.DataToolTab$23.$init$,[this, null])));
this.areaCheckbox=Clazz.new_([$I$(21).getString$S("DataToolTab.Checkbox.Area")],$I$(58,1).c$$S);
this.areaCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.Area.Tooltip"));
this.areaCheckbox.setSelected$Z(false);
this.areaCheckbox.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setAreaVisible$Z(this.b$['org.opensourcephysics.tools.DataToolTab'].areaCheckbox.isSelected$());
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshFitDrawer$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
});
})()
), Clazz.new_(P$.DataToolTab$24.$init$,[this, null])));
this.measureButton=$I$(34,"createButton$S",[$I$(21).getString$S("DataToolTab.Button.Measure.Label")]);
this.measureButton.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var popup=Clazz.new_($I$(62,1));
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataToolTab'].valueCheckbox);
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataToolTab'].slopeCheckbox);
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataToolTab'].areaCheckbox);
popup.addSeparator$();
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftCheckbox);
if (p$2.isFitterVisible.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [])) {
popup.addSeparator$();
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataToolTab'].measureFitCheckbox);
}$I$(1,"setFonts$O$I",[popup, $I$(1).getLevel$()]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.DataToolTab'].measureButton, 0, this.b$['org.opensourcephysics.tools.DataToolTab'].measureButton.getHeight$());
});
})()
), Clazz.new_(P$.DataToolTab$25.$init$,[this, null])));
this.analyzeButton=$I$(34,"createButton$S",[$I$(21).getString$S("DataToolTab.Button.Analyze.Label")]);
this.analyzeButton.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var popup=Clazz.new_($I$(62,1));
this.b$['org.opensourcephysics.tools.DataToolTab'].fitMenu.removeAll$();
var fitNames=this.b$['org.opensourcephysics.tools.DataToolTab'].getCurveFitter$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []).getFitNames$();
for (var i=0; i < fitNames.length; i++) {
var item=Clazz.new_([$I$(64).localize$S(fitNames[i])],$I$(63,1).c$$S);
item.setActionCommand$S(fitNames[i]);
item.addActionListener$java_awt_event_ActionListener(this.b$['org.opensourcephysics.tools.DataToolTab'].showFitterAction);
this.b$['org.opensourcephysics.tools.DataToolTab'].fitMenu.add$javax_swing_JMenuItem(item);
}
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataToolTab'].fitMenu);
if (p$2.isFitterVisible.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [])) {
var item=Clazz.new_([$I$(21).getString$S("DataToolTab.MenuItem.CloseFitter.Text")],$I$(63,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(this.b$['org.opensourcephysics.tools.DataToolTab'].hideFitterAction);
popup.add$javax_swing_JMenuItem(item);
}popup.addSeparator$();
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataToolTab'].statsCheckbox);
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.tools.DataToolTab'].fourierCheckbox);
$I$(1,"setFonts$O$I",[popup, $I$(1).getLevel$()]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.DataToolTab'].analyzeButton, 0, this.b$['org.opensourcephysics.tools.DataToolTab'].analyzeButton.getHeight$());
});
})()
), Clazz.new_(P$.DataToolTab$26.$init$,[this, null])));
this.propsAndStatsAction=((P$.DataToolTab$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var statsVis=this.b$['org.opensourcephysics.tools.DataToolTab'].statsCheckbox.isSelected$();
var propsVis=this.b$['org.opensourcephysics.tools.DataToolTab'].propsCheckbox.isSelected$();
if (statsVis) {
this.b$['org.opensourcephysics.tools.DataToolTab'].statsTable.refreshStatistics$();
}this.b$['org.opensourcephysics.tools.DataToolTab'].refreshStatusBar$S.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [null]);
var statsHeight=this.b$['org.opensourcephysics.tools.DataToolTab'].statsTable.getPreferredSize$().height;
var propsHeight=this.b$['org.opensourcephysics.tools.DataToolTab'].propsTable.getPreferredSize$().height;
var currentLF=$I$(65).getLookAndFeel$();
var h=(currentLF.getClass$().getName$().indexOf$S("Nimbus") > -1) ? 8 : 4;
if (statsVis && propsVis ) {
var box=$I$(66).createVerticalBox$();
box.add$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].statsScroller);
box.add$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].propsScroller);
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[2].setTopComponent$java_awt_Component(box);
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[2].setDividerLocation$I(statsHeight + propsHeight + 2 * h );
} else if (statsVis) {
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[2].setTopComponent$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].statsScroller);
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[2].setDividerLocation$I(statsHeight + h);
} else if (propsVis) {
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[2].setTopComponent$java_awt_Component(this.b$['org.opensourcephysics.tools.DataToolTab'].propsScroller);
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[2].setDividerLocation$I(propsHeight + h);
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].splitPanes[2].setDividerLocation$I(0);
}});
})()
), Clazz.new_($I$(55,1),[this, null],P$.DataToolTab$27));
this.statsCheckbox=Clazz.new_([$I$(21).getString$S("Checkbox.Statistics.Label"), false],$I$(58,1).c$$S$Z);
this.statsCheckbox.setToolTipText$S($I$(21).getString$S("Checkbox.Statistics.ToolTip"));
this.statsCheckbox.addActionListener$java_awt_event_ActionListener(this.propsAndStatsAction);
this.propsCheckbox=Clazz.new_([$I$(21).getString$S("DataToolTab.Checkbox.Properties.Text"), true],$I$(58,1).c$$S$Z);
this.propsCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.Properties.Tooltip"));
this.propsCheckbox.addActionListener$java_awt_event_ActionListener(this.propsAndStatsAction);
var fitBuilder=this.dataTool.getFitBuilder$();
this.curveFitter=Clazz.new_([this.getWorkingData$(), fitBuilder],$I$(67,1).c$$org_opensourcephysics_display_Dataset$org_opensourcephysics_tools_FitBuilder);
this.curveFitter.setDataToolTab$org_opensourcephysics_tools_DataToolTab(this);
fitBuilder.curveFitters.add$O(this.curveFitter);
this.curveFitter.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.DataToolTab$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "changed":
this.b$['org.opensourcephysics.tools.DataToolTab'].tabChanged$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [true]);
if (p$2.isFitterVisible.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [])) this.b$['org.opensourcephysics.tools.DataToolTab'].plot.repaint$();
break;
case "drawer":
if (p$2.isFitterVisible.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [])) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.removeDrawables$Class(Clazz.getClass($I$(56)));
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.addDrawable$org_opensourcephysics_display_Drawable(e.getNewValue$());
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.repaint$();
}break;
}
});
})()
), Clazz.new_(P$.DataToolTab$28.$init$,[this, null])));
this.plot=Clazz.new_([this, null, this.getWorkingData$()],$I$(68,1).c$$org_opensourcephysics_display_Dataset);
this.plotAxes=Clazz.new_($I$(69,1).c$$org_opensourcephysics_display_PlottingPanel,[this, null, this.plot]);
if (this.getWorkingData$() != null ) {
this.plot.addDrawable$org_opensourcephysics_display_Drawable(this.getWorkingData$());
this.plot.setTitle$S(this.getWorkingData$().getName$());
}this.plot.stringBuilder=Clazz.new_($I$(70,1),[this.plot, null]);
this.plot.setCoordinateStringBuilder$org_opensourcephysics_display_axes_CoordinateStringBuilder(this.plot.stringBuilder);
var mouseSelector=((P$.DataToolTab$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState=p$2.getMouseState$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [e]);
switch (this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState) {
case 4:
return;
case 5:
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor($I$(18).SELECT_ZOOM_CURSOR);
return;
case 1:
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.interactive == null ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor($I$(18).SELECT_CURSOR);
}break;
case 2:
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.interactive == null ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor($I$(18).SELECT_ADD_CURSOR);
}break;
case 3:
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.interactive == null ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor($I$(18).SELECT_REMOVE_CURSOR);
}}
this.b$['org.opensourcephysics.tools.DataToolTab'].mousePressedAction$java_awt_event_MouseEvent$Z$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [e, e.isControlDown$(), e.isShiftDown$()]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
var add=e.isShiftDown$();
var remove=e.isControlDown$();
switch (this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState) {
case 5:
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor($I$(18).SELECT_ZOOM_CURSOR);
case 4:
return;
case 1:
case 2:
case 3:
this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState=remove ? 3 : add ? 2 : 1;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor(remove ? $I$(18).SELECT_REMOVE_CURSOR : add ? $I$(18).SELECT_ADD_CURSOR : $I$(18).SELECT_CURSOR);
}
this.b$['org.opensourcephysics.tools.DataToolTab'].mouseDraggedAction$java_awt_event_MouseEvent$Z$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [e, e.isControlDown$(), add]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState=0;
this.b$['org.opensourcephysics.tools.DataToolTab'].mouseReleasedAction$java_awt_event_MouseEvent$Z$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [e, e.isControlDown$(), e.isShiftDown$()]);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.tools.DataToolTab'].freezeMeasurement) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.measurementX=e.getX$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.measurementIndex=-1;
}this.b$['org.opensourcephysics.tools.DataToolTab'].plot.refreshMeasurements$();
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.dataToolTab.refreshStatusBar$S(null);
});
})()
), Clazz.new_($I$(71,1),[this, null],P$.DataToolTab$29));
this.plot.addMouseListener$java_awt_event_MouseListener(mouseSelector);
this.plot.addMouseMotionListener$java_awt_event_MouseMotionListener(mouseSelector);
this.toolbar=Clazz.new_($I$(72,1));
this.toolbar.setFloatable$Z(false);
this.toolbar.setBorder$javax_swing_border_Border($I$(73).createEtchedBorder$());
this.toolbar.add$java_awt_Component(this.measureButton);
this.toolbar.add$java_awt_Component(this.analyzeButton);
this.toolbar.add$java_awt_Component($I$(66).createGlue$());
this.toolbar.add$java_awt_Component(this.newColumnButton);
this.toolbar.add$java_awt_Component(this.dataBuilderButton);
this.toolbar.add$java_awt_Component(this.refreshDataButton);
if (this.isUserEditable$()) this.toolbar.add$java_awt_Component(this.editDataButton);
this.toolbar.add$java_awt_Component(this.helpButton);
this.statsTable=Clazz.new_($I$(74,1).c$$org_opensourcephysics_tools_DataToolTable,[this.dataTable]);
this.statsScroller=((P$.DataToolTab$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JScrollPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=this.b$['org.opensourcephysics.tools.DataToolTab'].statsTable.getPreferredSize$();
return dim;
});
})()
), Clazz.new_($I$(53,1).c$$java_awt_Component,[this, null, this.statsTable],P$.DataToolTab$30));
this.statsScroller.setVerticalScrollBarPolicy$I(21);
this.statsScroller.setHorizontalScrollBarPolicy$I(31);
this.propsTable=Clazz.new_($I$(75,1).c$$org_opensourcephysics_tools_DataToolTable,[this.dataTable]);
this.propsTable.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.DataToolTab$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("display")) {
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshPlot$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
}});
})()
), Clazz.new_(P$.DataToolTab$31.$init$,[this, null])));
this.propsScroller=((P$.DataToolTab$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JScrollPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=this.b$['org.opensourcephysics.tools.DataToolTab'].propsTable.getPreferredSize$();
return dim;
});
})()
), Clazz.new_($I$(53,1).c$$java_awt_Component,[this, null, this.propsTable],P$.DataToolTab$32));
this.propsScroller.setVerticalScrollBarPolicy$I(21);
this.propsScroller.setHorizontalScrollBarPolicy$I(31);
this.statusLabel=Clazz.new_($I$(76,1).c$$S$I,[" ", 10]);
this.statusLabel.setFont$java_awt_Font(Clazz.new_($I$(77,1)).getFont$());
this.statusLabel.setBorder$javax_swing_border_Border($I$(73).createEmptyBorder$I$I$I$I(1, 2, 1, 2));
this.editableLabel=Clazz.new_($I$(76,1).c$$S$I,[" ", 11]);
this.editableLabel.setFont$java_awt_Font(this.statusLabel.getFont$());
this.editableLabel.setBorder$javax_swing_border_Border($I$(73).createEmptyBorder$I$I$I$I(1, 12, 1, 2));
this.add$java_awt_Component$O(this.toolbar, "North");
this.add$java_awt_Component$O(this.splitPanes[0], "Center");
var south=Clazz.new_([Clazz.new_($I$(49,1))],$I$(78,1).c$$java_awt_LayoutManager);
south.add$java_awt_Component$O(this.statusLabel, "West");
south.add$java_awt_Component$O(this.editableLabel, "East");
this.add$java_awt_Component$O(south, "South");
this.tableScroller=Clazz.new_($I$(53,1).c$$java_awt_Component,[this.splitPanes[2]]);
this.tableScroller.setVerticalScrollBarPolicy$I(21);
this.splitPanes[0].setLeftComponent$java_awt_Component(this.splitPanes[1]);
this.splitPanes[0].setRightComponent$java_awt_Component(this.tableScroller);
this.splitPanes[1].setTopComponent$java_awt_Component(this.plot);
this.splitPanes[2].setBottomComponent$java_awt_Component(this.dataScroller);
this.undoManager=Clazz.new_($I$(79,1));
this.undoSupport=Clazz.new_($I$(80,1));
this.undoSupport.addUndoableEditListener$javax_swing_event_UndoableEditListener(this.undoManager);
this.shiftXLabel=Clazz.new_($I$(76,1));
this.shiftXLabel.setBorder$javax_swing_border_Border($I$(73).createEmptyBorder$I$I$I$I(2, 12, 2, 2));
this.shiftYLabel=Clazz.new_($I$(76,1));
this.shiftYLabel.setBorder$javax_swing_border_Border($I$(73).createEmptyBorder$I$I$I$I(2, 8, 2, 2));
this.selectedXLabel=Clazz.new_($I$(76,1));
this.selectedXLabel.setBorder$javax_swing_border_Border($I$(73).createEmptyBorder$I$I$I$I(2, 12, 2, 2));
this.selectedYLabel=Clazz.new_($I$(76,1));
this.selectedYLabel.setBorder$javax_swing_border_Border($I$(73).createEmptyBorder$I$I$I$I(2, 8, 2, 2));
this.shiftEditListener=Clazz.new_($I$(81,1),[this, null]);
var numberFieldKeyListener=((P$.DataToolTab$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var comp=e.getSource$();
if (e.getKeyCode$() == 10) {
comp.setBackground$java_awt_Color($I$(2).white);
} else {
comp.setBackground$java_awt_Color($I$(2).yellow);
}});
})()
), Clazz.new_($I$(20,1),[this, null],P$.DataToolTab$33));
var numberFieldFocusListener=((P$.DataToolTab$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var field=e.getSource$();
if (field.getBackground$() !== $I$(2).white ) {
field.setBackground$java_awt_Color($I$(2).white);
field.postActionEvent$();
}});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
var field=e.getSource$();
field.selectAll$();
});
})()
), Clazz.new_($I$(82,1),[this, null],P$.DataToolTab$34));
this.shiftXField=((P$.DataToolTab$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.tools.DatasetCurveFitter','.DCFNumberField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=this.getPreferredSize$();
dim.height=C$.superclazz.prototype.getMaximumSize$.apply(this, []).height;
return dim;
});
})()
), Clazz.new_($I$(83,1).c$$I,[this, null, 4],P$.DataToolTab$35));
this.shiftXField.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var col=data;
var prevX=col.getShift$();
var shiftX=-this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXField.getValue$();
if (col.setShift$D(shiftX)) {
this.b$['org.opensourcephysics.tools.DataToolTab'].tabChanged$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [true]);
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].pointIndex > -1 && this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].pointIndex > -1 ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].refreshX$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].refreshX$();
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].getX$() + shiftX - prevX);
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].getX$() + shiftX - prevX);
}this.b$['org.opensourcephysics.tools.DataToolTab'].refreshAll$I.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [32768]);
(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXSpinner.getModel$()).refreshDelta$();
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.dorepaint$I(5);
}}this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXField.selectAll$();
});
})()
), Clazz.new_(P$.DataToolTab$36.$init$,[this, null])));
this.shiftXField.addKeyListener$java_awt_event_KeyListener(numberFieldKeyListener);
this.shiftXField.addFocusListener$java_awt_event_FocusListener(numberFieldFocusListener);
var spinModel=Clazz.new_($I$(84,1),[this, null]);
this.shiftXSpinner=((P$.DataToolTab$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JSpinner'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.width=this.getPreferredSize$().width;
return dim;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
for (var c, $c = 0, $$c = this.getComponents$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (Clazz.instanceOf(c, "javax.swing.JButton")) {
dim.width=this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXField.getPreferredSize$().width + c.getWidth$() - 2;
return dim;
}}
return dim;
});
})()
), Clazz.new_($I$(85,1).c$$javax_swing_SpinnerModel,[this, null, spinModel],P$.DataToolTab$37));
this.shiftXSpinner.setEditor$javax_swing_JComponent(this.shiftXField);
var xChangeListener=((P$.DataToolTab$38||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var col=data;
var prevX=col.getShift$();
var shiftX=(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXSpinner.getValue$().$neg$()).$c();
if (this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftJustEnabled) {
shiftX=col.getPreviousShift$();
}if (col.setShift$D(shiftX)) {
this.b$['org.opensourcephysics.tools.DataToolTab'].tabChanged$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [true]);
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].pointIndex > -1 && this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].pointIndex > -1 ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].refreshX$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].refreshX$();
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].getX$() + shiftX - prevX);
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].getX$() + shiftX - prevX);
}this.b$['org.opensourcephysics.tools.DataToolTab'].refreshAll$I.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [32768]);
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.dorepaint$I(5);
}}});
})()
), Clazz.new_(P$.DataToolTab$38.$init$,[this, null]));
this.shiftXSpinner.addChangeListener$javax_swing_event_ChangeListener(xChangeListener);
this.shiftXSpinner.addChangeListener$javax_swing_event_ChangeListener(this.shiftEditListener);
this.shiftYField=((P$.DataToolTab$39||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.tools.DatasetCurveFitter','.DCFNumberField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=this.getPreferredSize$();
dim.height=C$.superclazz.prototype.getMaximumSize$.apply(this, []).height;
return dim;
});
})()
), Clazz.new_($I$(83,1).c$$I,[this, null, 4],P$.DataToolTab$39));
this.shiftYField.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$40||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.yVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var col=data;
if (col.setShift$D(-this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYField.getValue$())) {
this.b$['org.opensourcephysics.tools.DataToolTab'].tabChanged$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [true]);
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshAll$I.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [32768]);
(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYSpinner.getModel$()).refreshDelta$();
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.dorepaint$I(5);
}}this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYField.selectAll$();
});
})()
), Clazz.new_(P$.DataToolTab$40.$init$,[this, null])));
this.shiftYField.addKeyListener$java_awt_event_KeyListener(numberFieldKeyListener);
this.shiftYField.addFocusListener$java_awt_event_FocusListener(numberFieldFocusListener);
spinModel=Clazz.new_($I$(84,1),[this, null]);
this.shiftYSpinner=((P$.DataToolTab$41||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JSpinner'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.width=this.getPreferredSize$().width;
return dim;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
for (var c, $c = 0, $$c = this.getComponents$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (Clazz.instanceOf(c, "javax.swing.JButton")) {
dim.width=this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYField.getPreferredSize$().width + c.getWidth$() - 2;
return dim;
}}
return dim;
});
})()
), Clazz.new_($I$(85,1).c$$javax_swing_SpinnerModel,[this, null, spinModel],P$.DataToolTab$41));
this.shiftYSpinner.setEditor$javax_swing_JComponent(this.shiftYField);
var yChangeListener=((P$.DataToolTab$42||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.yVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var col=data;
var shiftY=(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYSpinner.getValue$().$neg$()).$c();
if (this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftJustEnabled) {
shiftY=col.getPreviousShift$();
}if (col.setShift$D(shiftY)) {
this.b$['org.opensourcephysics.tools.DataToolTab'].tabChanged$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [true]);
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshAll$I.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [32768]);
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.dorepaint$I(5);
}}});
})()
), Clazz.new_(P$.DataToolTab$42.$init$,[this, null]));
this.shiftYSpinner.addChangeListener$javax_swing_event_ChangeListener(yChangeListener);
this.shiftYSpinner.addChangeListener$javax_swing_event_ChangeListener(this.shiftEditListener);
this.selectedXField=((P$.DataToolTab$43||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.tools.DatasetCurveFitter','.DCFNumberField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=this.getPreferredSize$();
dim.height=C$.superclazz.prototype.getMaximumSize$.apply(this, []).height;
return dim;
});
})()
), Clazz.new_($I$(83,1).c$$I,[this, null, 4],P$.DataToolTab$43));
this.selectedXField.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$44||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var col=data;
var prev=col.getShift$();
var val=this.b$['org.opensourcephysics.tools.DataToolTab'].selectedXField.getValue$();
if (col.setShiftedValue$I$D(this.b$['org.opensourcephysics.tools.DataToolTab'].selectedDataIndex, val)) {
this.b$['org.opensourcephysics.tools.DataToolTab'].tabChanged$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [true]);
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].pointIndex > -1 && this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].pointIndex > -1 ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].refreshX$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].refreshX$();
} else {
var shift=col.getShift$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].getX$() + shift - prev);
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].getX$() + shift - prev);
}this.b$['org.opensourcephysics.tools.DataToolTab'].refreshAll$I.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [16777216]);
(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXSpinner.getModel$()).refreshDelta$();
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.dorepaint$I(5);
}}this.b$['org.opensourcephysics.tools.DataToolTab'].selectedXField.requestFocusInWindow$();
this.b$['org.opensourcephysics.tools.DataToolTab'].selectedXField.selectAll$();
this.b$['org.opensourcephysics.tools.DataToolTab'].shiftEditListener.stateChanged$javax_swing_event_ChangeEvent(null);
});
})()
), Clazz.new_(P$.DataToolTab$44.$init$,[this, null])));
this.selectedXField.addKeyListener$java_awt_event_KeyListener(numberFieldKeyListener);
this.selectedXField.addFocusListener$java_awt_event_FocusListener(numberFieldFocusListener);
this.selectedYField=((P$.DataToolTab$45||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.tools.DatasetCurveFitter','.DCFNumberField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=this.getPreferredSize$();
dim.height=C$.superclazz.prototype.getMaximumSize$.apply(this, []).height;
return dim;
});
})()
), Clazz.new_($I$(83,1).c$$I,[this, null, 4],P$.DataToolTab$45));
this.selectedYField.addActionListener$java_awt_event_ActionListener(((P$.DataToolTab$46||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.yVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var col=data;
var val=this.b$['org.opensourcephysics.tools.DataToolTab'].selectedYField.getValue$();
if (col.setShiftedValue$I$D(this.b$['org.opensourcephysics.tools.DataToolTab'].selectedDataIndex, val)) {
this.b$['org.opensourcephysics.tools.DataToolTab'].tabChanged$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [true]);
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshAll$I.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [16777216]);
(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYSpinner.getModel$()).refreshDelta$();
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.dorepaint$I(5);
}}this.b$['org.opensourcephysics.tools.DataToolTab'].selectedYField.requestFocusInWindow$();
this.b$['org.opensourcephysics.tools.DataToolTab'].selectedYField.selectAll$();
this.b$['org.opensourcephysics.tools.DataToolTab'].shiftEditListener.stateChanged$javax_swing_event_ChangeEvent(null);
});
})()
), Clazz.new_(P$.DataToolTab$46.$init$,[this, null])));
this.selectedYField.addKeyListener$java_awt_event_KeyListener(numberFieldKeyListener);
this.selectedYField.addFocusListener$java_awt_event_FocusListener(numberFieldFocusListener);
});

Clazz.newMeth(C$, 'columnOrderChanged$',  function () {
this.tabChanged$Z(true);
this.plot.selectionBox.setSize$I$I(0, 0);
this.refreshPlot$Z(true);
this.plot.repaint$();
this.prevShiftY=this.refreshShiftFields$();
});

Clazz.newMeth(C$, 'getMouseState$java_awt_event_MouseEvent',  function (e) {
var button3=(e.getModifiersEx$() & 4096) == 4096;
var shift=e.isShiftDown$();
var ctrl=e.isControlDown$();
var zoom=button3 || $I$(11).isPopupTrigger$java_awt_event_InputEvent(e) ;
var remove=$I$(11).isMac$() ? shift && ctrl  : ctrl;
return zoom ? 5 : e.isAltDown$() ? 4 : remove ? 3 : shift ? 2 : 1;
}, p$2);

Clazz.newMeth(C$, 'mouseDraggedAction$java_awt_event_MouseEvent$Z$Z',  function (e, controlDown, shiftDown) {
var point=e.getPoint$();
this.selectionChanged=true;
if (this.mouseDrawable === this.plot.origin ) {
this.plot.selectionBox.visible=false;
var deltaX=0;
var deltaY=0;
var dx=this.plot.origin.mouseDownPt.x - point.x;
var dy=this.plot.origin.mouseDownPt.y - point.y;
if (shiftDown) {
if (Math.abs(dx) >= Math.abs(dy)) dy=0;
 else dx=0;
}var data=this.dataTable.getDataset$S(this.plot.xVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn")  && this.plot.origin.isVertHit ) {
deltaX=dx / this.plot.getXPixPerUnit$();
var shift=this.prevShiftX + deltaX;
var col=data;
var prev=col.getShift$();
col.setShift$D(shift);
this.tabChanged$Z(true);
if (this.plot.areaLimits[0].pointIndex > -1 && this.plot.areaLimits[1].pointIndex > -1 ) {
this.plot.areaLimits[0].refreshX$();
this.plot.areaLimits[1].refreshX$();
} else {
this.plot.areaLimits[0].setX$D(this.plot.areaLimits[0].getX$() + shift - prev);
this.plot.areaLimits[1].setX$D(this.plot.areaLimits[1].getX$() + shift - prev);
}}data=this.dataTable.getDataset$S(this.plot.yVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn")  && this.plot.origin.isHorzHit ) {
deltaY=-dy / this.plot.getYPixPerUnit$();
var shiftY=this.prevShiftY + deltaY;
var col=data;
col.setShift$D(shiftY);
this.tabChanged$Z(true);
}this.refreshAll$I(32768);
this.plot.lockedXMin=this.plot.mouseDownXMin + deltaX;
this.plot.lockedXMax=this.plot.mouseDownXMax + deltaX;
this.plot.lockedYMin=this.plot.mouseDownYMin + deltaY;
this.plot.lockedYMax=this.plot.mouseDownYMax + deltaY;
this.plot.repaint$();
return;
}if (this.mouseState == 0) {
return;
}var data=this.getWorkingData$();
if (data == null ) {
return;
}var isSelectionBoxActive=this.mouseState != 5 && this.mouseDrawable !== this.plot.areaLimits[0]   && this.mouseDrawable !== this.plot.areaLimits[1]  ;
this.plot.selectionBox.visible=isSelectionBoxActive;
var dx=point.x - this.plot.selectionBox.xstart;
var dy=point.y - this.plot.selectionBox.ystart;
this.plot.selectionBox.setSize$I$I(dx, dy);
this.selectionBoxChanged=true;
this.refreshFit$();
this.plot.repaint$();
});

Clazz.newMeth(C$, 'mouseReleasedAction$java_awt_event_MouseEvent$Z$Z',  function (e, controlDown, shiftDown) {
var point=e.getPoint$();
if (!this.selectionChanged && this.freezeMeasurement ) {
this.freezeMeasurement=false;
this.plot.measurementX=point.x;
this.plot.measurementIndex=-1;
this.plot.refreshMeasurements$();
}this.selectionChanged=false;
this.plot.lockScale$Z(false);
this.plot.selectionBox.visible=false;
if (this.mouseDrawable != null ) {
if (this.mouseDrawable === this.plot.origin ) {
this.postShiftEdit$();
(this.shiftXSpinner.getModel$()).refreshDelta$();
(this.shiftYSpinner.getModel$()).refreshDelta$();
this.dataTable.dorepaint$I(5);
}if (this.mouseDrawable === this.plot.areaLimits[0] ) this.plot.areaLimits[0].isAdjusting=false;
 else if (this.mouseDrawable === this.plot.areaLimits[1] ) this.plot.areaLimits[1].isAdjusting=false;
this.plot.setMouseCursor$java_awt_Cursor(Clazz.instanceOf(this.mouseDrawable, "org.opensourcephysics.display.Selectable") ? (this.mouseDrawable).getPreferredCursor$() : $I$(19).getPredefinedCursor$I(12));
if (Clazz.instanceOf(this.mouseDrawable, "org.opensourcephysics.display.HighlightableDataset")) {
var data=this.mouseDrawable;
var tableModel=this.dataTable.getModel$();
var yCol=this.dataTable.getYColumn$();
var model=this.dataTable.getColumnModel$().getSelectionModel$();
for (var i=tableModel.getColumnCount$(); --i >= 1; ) {
if (data.getYColumnName$().equals$O(this.dataTable.getColumnName$I(i)) && yCol != i ) {
data.setHighlightColor$java_awt_Color($I$(2).YELLOW);
model.removeSelectionInterval$I$I(i, i);
break;
}}
}}this.plot.repaint$();
if (this.timerToFindHits != null ) {
this.timerToFindHits.stop$();
this.timerToFindHits=null;
}if (this.selectionBoxChanged) {
p$2.findHits$Z.apply(this, [true]);
this.selectionBoxChanged=false;
}});

Clazz.newMeth(C$, 'mousePressedAction$java_awt_event_MouseEvent$Z$Z',  function (e, controlDown, shiftDown) {
var point=e.getPoint$();
this.mouseDrawable=this.plot.getInteractive$();
if (this.mouseDrawable === this.plot.origin ) {
this.plot.selectionBox.visible=false;
this.plot.origin.mouseDownPt=point;
this.plot.lockScale$Z(true);
return;
}if (this.mouseDrawable === this.plot.areaLimits[0] ) {
this.plot.areaLimits[0].setX$D(this.plot.areaLimits[0].trueLimit);
this.plot.areaLimits[0].isAdjusting=true;
} else if (this.mouseDrawable === this.plot.areaLimits[1] ) {
this.plot.areaLimits[1].setX$D(this.plot.areaLimits[1].trueLimit);
this.plot.areaLimits[1].isAdjusting=true;
}if (Clazz.instanceOf(this.mouseDrawable, "org.opensourcephysics.display.HighlightableDataset")) {
var data=this.mouseDrawable;
var index=data.getHitIndex$();
var model=this.dataTable.getColumnModel$().getSelectionModel$();
var col=this.dataTable.getXColumn$();
model.setSelectionInterval$I$I(col, col);
col=this.dataTable.getYColumn$();
model.addSelectionInterval$I$I(col, col);
var tableModel=this.dataTable.getModel$();
for (var i=1; i < tableModel.getColumnCount$(); i++) {
if (data.getYColumnName$().equals$O(this.dataTable.getColumnName$I(i))) {
model.addSelectionInterval$I$I(i, i);
if (col != i) data.setHighlightColor$java_awt_Color(data.getFillColor$());
data.setHighlighted$I$Z(index, true);
break;
}}
if (controlDown || shiftDown ) {
var rows=this.dataTable.getSelectedModelRowsBS$();
if (shiftDown) {
rows.set$I(index);
} else if (rows.get$I(index)) {
rows.clear$I(index);
} else {
rows.set$I(index);
}if (!$I$(11).isJS) {
this.dataTable.setSelectedModelRowsBS$java_util_BitSet(rows);
this.dataTable.selectModelRowsBS$java_util_BitSet(rows);
}} else {
this.dataTable.selectModelRows$IA(Clazz.array(Integer.TYPE, -1, [index]));
}this.dataTable.getSelectedData$();
this.mouseState=0;
this.selectionChanged=true;
if (this.curveFitter.isAutoFit$()) this.refreshFit$();
this.plot.repaint$();
return;
}if (this.mouseDrawable != null ) {
this.mouseState=0;
return;
}if (this.timerToFindHits == null  && !$I$(11).isJS ) {
this.timerToFindHits=Clazz.new_([200, ((P$.DataToolTab$47||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$2.findHits$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [!$I$(11).isJS]);
this.b$['org.opensourcephysics.tools.DataToolTab'].timerToFindHits.restart$();
});
})()
), Clazz.new_(P$.DataToolTab$47.$init$,[this, null]))],$I$(25,1).c$$I$java_awt_event_ActionListener);
this.timerToFindHits.setRepeats$Z(false);
}if (!controlDown && !shiftDown ) {
this.dataTable.clearSelection$();
}this.rowsInside.clear$();
this.rowsInside.or$java_util_BitSet(this.dataTable.getSelectedModelRowsBS$());
this.recent.clear$();
this.plot.selectionBox.xstart=point.x;
this.plot.selectionBox.ystart=point.y;
this.readyToFindHits=true;
if (this.timerToFindHits != null ) this.timerToFindHits.start$();
});

Clazz.newMeth(C$, 'isFitterVisible',  function () {
return this.curveFitter != null  && this.splitPanes[1].getBottomComponent$() === this.curveFitter  ;
}, p$2);

Clazz.newMeth(C$, 'findHits$Z',  function (showInTable) {
if (!this.readyToFindHits || showInTable && !this.selectionBoxChanged  ) return;
this.selectionBoxChanged=false;
var runner=((P$.DataToolTab$48||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
p$2.findHitsRun$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [this.$finals$.showInTable]);
});
})()
), Clazz.new_(P$.DataToolTab$48.$init$,[this, {showInTable:showInTable}]));
runner.run$();
}, p$2);

Clazz.newMeth(C$, 'findHitsRun$Z',  function (showInTable) {
if (this.dataTable.workingData == null  || this.dataTable.workingRowToModelRow == null  ) return;
var screenPoints=this.dataTable.workingData.getScreenCoordinates$();
var columnSelectionModel=this.dataTable.getColumnModel$().getSelectionModel$();
if (this.mouseState == 1) {
this.rowsInside.clear$();
this.recent.clear$();
}if (screenPoints != null  && screenPoints.length > 0  && screenPoints[0] != null  ) {
for (var i=0; i < screenPoints[0].length; i++) {
var row=this.dataTable.workingRowToModelRow.get$O(Integer.valueOf$I(i));
if (row == null ) {
this.readyToFindHits=true;
return;
}var irow=row.intValue$();
if (!Double.isNaN$D(screenPoints[1][i]) && this.plot.selectionBox.contains$D$D(screenPoints[0][i], screenPoints[1][i]) ) {
if (this.rowsInside.isEmpty$()) {
columnSelectionModel.setSelectionInterval$I$I(1, 2);
}if (this.mouseState == 3) {
if (this.rowsInside.get$I(irow)) this.recent.set$I(irow);
this.rowsInside.clear$I(irow);
} else {
if (!this.rowsInside.get$I(irow)) this.recent.set$I(irow);
this.rowsInside.set$I(irow);
}} else if (this.recent.get$I(irow)) {
if (this.mouseState == 3) {
this.rowsInside.set$I(irow);
} else {
this.rowsInside.clear$I(irow);
}this.recent.clear$I(irow);
}}
}if (showInTable) {
if (this.rowsInside.isEmpty$()) {
if (this.dataTable.getSelectedRowCount$() > 0) {
columnSelectionModel.removeSelectionInterval$I$I(0, this.dataTable.getColumnCount$() - 1);
this.dataTable.getSelectionModel$().clearSelection$();
this.dataTable.getSelectedData$();
}} else {
this.dataTable.selectModelRowsBS$java_util_BitSet(this.rowsInside);
var r0=this.rowsInside.nextSetBit$I(0);
var r=this.dataTable.getCellRect$I$I$Z(r0, 0, false);
if (r != null ) {
r.height+=(this.rowsInside.length$() - 1 - r0 ) * this.dataTable.getRowHeight$();
this.dataTable.scrollRectToVisible$java_awt_Rectangle(r);
}}}this.readyToFindHits=true;
this.plot.repaint$();
}, p$2);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
$I$(29,"invokeLater$Runnable",[((P$.DataToolTab$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataToolTab$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshGUIAsync$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
});
})()
), Clazz.new_(P$.DataToolTab$lambda3.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'refreshGUIAsync$',  function () {
if (!this.haveGUI) return;
var changed=this.tabChanged;
this.editDataButton.setText$S($I$(21).getString$S("DataToolTab.Button.EditData.Text") + "...");
this.editDataButton.setToolTipText$S($I$(21).getString$S("DataToolTab.Button.EditData.Tooltip"));
this.newColumnButton.setText$S($I$(21).getString$S("DataToolTab.Button.NewColumn.Text"));
this.newColumnButton.setToolTipText$S($I$(21).getString$S("DataToolTab.Button.NewColumn.Tooltip"));
this.dataBuilderButton.setText$S($I$(21).getString$S("DataToolTab.Button.DataBuilder.Text"));
this.dataBuilderButton.setToolTipText$S($I$(21).getString$S("DataToolTab.Button.DataBuilder.Tooltip"));
this.dataBuilderButton.setEnabled$Z(this.originatorID != 0);
this.refreshDataButton.setText$S($I$(21).getString$S("DataToolTab.Button.Refresh.Text"));
this.refreshDataButton.setToolTipText$S($I$(21).getString$S("DataToolTab.Button.Refresh.Tooltip"));
this.measureButton.setText$S($I$(21).getString$S("DataToolTab.Button.Measure.Label"));
this.measureButton.setToolTipText$S($I$(21).getString$S("DataToolTab.Button.Measure.Tooltip"));
this.analyzeButton.setText$S($I$(21).getString$S("DataToolTab.Button.Analyze.Label"));
this.analyzeButton.setToolTipText$S($I$(21).getString$S("DataToolTab.Button.Analyze.Tooltip"));
this.statsCheckbox.setText$S($I$(21).getString$S("Checkbox.Statistics.Label"));
this.statsCheckbox.setToolTipText$S($I$(21).getString$S("Checkbox.Statistics.ToolTip"));
this.fitMenu.setText$S($I$(21).getString$S("Checkbox.Fits.Label"));
this.fourierCheckbox.setText$S($I$(21).getString$S("DataToolTab.Checkbox.Fourier.Label"));
this.fourierCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.Fourier.ToolTip"));
this.originShiftCheckbox.setText$S($I$(21).getString$S("DataToolTab.Checkbox.DataShift.Label"));
this.originShiftCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.DataShift.ToolTip"));
this.originShiftCheckbox.setEnabled$Z(!this.plot.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(Clazz.getClass($I$(86)), null).isEmpty$());
this.measureFitCheckbox.setText$S($I$(21).getString$S("DataToolTab.Checkbox.MeasureFit.Label"));
this.measureFitCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.MeasureFit.ToolTip"));
this.propsCheckbox.setText$S($I$(21).getString$S("DataToolTab.Checkbox.Properties.Text"));
this.propsCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.Properties.Tooltip"));
this.valueCheckbox.setText$S($I$(21).getString$S("DataToolTab.Checkbox.Position"));
this.valueCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.Position.Tooltip"));
this.slopeCheckbox.setText$S($I$(21).getString$S("DataToolTab.Checkbox.Slope"));
this.slopeCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.Slope.Tooltip"));
this.areaCheckbox.setText$S($I$(21).getString$S("DataToolTab.Checkbox.Area"));
this.areaCheckbox.setToolTipText$S($I$(21).getString$S("DataToolTab.Checkbox.Area.Tooltip"));
this.helpButton.setText$S($I$(21).getString$S("Tool.Button.Help"));
this.helpButton.setToolTipText$S($I$(21).getString$S("Tool.Button.Help.ToolTip"));
var label=$I$(21).getString$S("DataToolTab.Origin.Label") + ":  ";
this.shiftXLabel.setText$S(label + this.plot.xVar);
this.shiftYLabel.setText$S(this.plot.yVar);
this.shiftXLabel.setToolTipText$S($I$(21).getString$S("DataToolTab.Origin.Tooltip"));
label=$I$(21).getString$S("DataToolTab.Selection.Label") + ":  ";
this.selectedXLabel.setText$S(label + this.plot.xVar);
this.selectedXLabel.setToolTipText$S($I$(21).getString$S("DataToolTab.Selection.Tooltip"));
this.selectedYLabel.setText$S(this.plot.yVar);
this.toolbar.remove$java_awt_Component(this.newColumnButton);
this.toolbar.remove$java_awt_Component(this.editDataButton);
if (this.isUserEditable$()) {
var n=this.toolbar.getComponentIndex$java_awt_Component(this.helpButton);
this.toolbar.add$java_awt_Component$I(this.newColumnButton, n);
this.toolbar.add$java_awt_Component$I(this.editDataButton, n);
this.toolbar.validate$();
}this.toolbar.remove$java_awt_Component(this.refreshDataButton);
var tools=this.jobManager.getTools$O(this.dataManager);
for (var tool, $tool = tools.iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (Clazz.instanceOf(tool, "org.opensourcephysics.tools.DataRefreshTool")) {
var n=this.toolbar.getComponentIndex$java_awt_Component(this.helpButton);
this.toolbar.add$java_awt_Component$I(this.refreshDataButton, n);
this.toolbar.validate$();
break;
}}
this.curveFitter.refreshGUI$();
this.statsTable.refreshGUI$();
this.refreshPlot$();
this.refreshStatusBar$S(null);
this.tabChanged=changed;
});

Clazz.newMeth(C$, 'refreshDecimalSeparators$',  function () {
var sym=$I$(11).getDecimalFormatSymbols$();
this.plot.sciFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols(sym);
this.plot.fixedFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols(sym);
C$.correlationFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols(sym);
this.plot.stringBuilder.refreshFormats$();
this.dataTable.refreshTable$I(8585216);
this.plotAxes.refreshDecimalSeparators$();
this.plot.repaint$();
this.getCurveFitter$().refreshDecimalSeparators$();
});

Clazz.newMeth(C$, 'init',  function () {
if (this.isInitialized) {
return;
}this.splitPanes[1].setDividerLocation$D(1.0);
this.propsAndStatsAction.actionPerformed$java_awt_event_ActionEvent(null);
for (var i=0; i < this.dataTable.getColumnCount$(); i++) {
var colName=this.dataTable.getColumnName$I(i);
this.dataTable.getWorkingData$S(colName);
}
this.refreshPlot$();
this.refreshGUI$();
this.isInitialized=true;
}, p$2);

Clazz.newMeth(C$, 'buildVarPopup$',  function () {
if (this.setVarAction == null ) {
this.setVarAction=((P$.DataToolTab$49||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var item=e.getSource$();
var $var=item.getActionCommand$();
var otherVar=this.b$['org.opensourcephysics.tools.DataToolTab'].isHorzVarPopup ? this.b$['org.opensourcephysics.tools.DataToolTab'].plot.yVar : this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xVar;
var labelCol=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.convertColumnIndexToView$I(0);
var col=this.b$['org.opensourcephysics.tools.DataToolTab'].isHorzVarPopup ? this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getXColumn$() : this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getYColumn$();
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.moveColumn$S$I($var, col);
if (!$var.equals$O(otherVar)) {
col=this.b$['org.opensourcephysics.tools.DataToolTab'].isHorzVarPopup ? this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getYColumn$() : this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getXColumn$();
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.moveColumn$S$I(otherVar, col);
}col=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.convertColumnIndexToView$I(0);
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnModel$().moveColumn$I$I(col, labelCol);
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshPlot$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
});
})()
), Clazz.new_($I$(55,1),[this, null],P$.DataToolTab$49));
}this.varPopup=Clazz.new_($I$(62,1));
var font=Clazz.new_($I$(77,1)).getFont$();
for (var next, $next = this.dataManager.getDatasetsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var s=$I$(24,"removeSubscripting$S",[next.getYColumnName$()]);
var item=Clazz.new_($I$(63,1).c$$S,[s]);
item.setActionCommand$S(next.getYColumnName$());
item.addActionListener$java_awt_event_ActionListener(this.setVarAction);
item.setFont$java_awt_Font(font);
this.varPopup.add$javax_swing_JMenuItem(item);
}
});

Clazz.newMeth(C$, 'getIDMatch$org_opensourcephysics_display_Dataset$java_util_ArrayList',  function (local, columnsToSearch) {
if ((columnsToSearch == null ) || (local == null ) ) {
return null;
}for (var it=columnsToSearch.iterator$(); it.hasNext$(); ) {
var next=it.next$();
if ((local.getID$() == next.getID$()) && (local.getColumnID$() == next.getColumnID$()) ) {
return next;
}}
return null;
}, p$2);

Clazz.newMeth(C$, 'getNameMatch$org_opensourcephysics_display_Dataset$java_util_ArrayList',  function (local, columnsToSearch) {
if ((columnsToSearch == null ) || (local == null ) ) {
return null;
}for (var it=columnsToSearch.iterator$(); it.hasNext$(); ) {
var next=it.next$();
if (local.getYColumnName$().equals$O(next.getYColumnName$())) {
return next;
}}
return null;
}, p$2);

Clazz.newMeth(C$, 'isDuplicateColumn$S$DA',  function (name, data) {
var datasets=this.dataManager.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var next=datasets.get$I(i);
var y=next.getYPointsRaw$();
if (name.equals$O(next.getYColumnName$()) && C$.isDuplicate$DA$DA$I(data, y, next.getIndex$()) ) {
if (data.length > y.length) {
next.set$DA$DA(data, data);
}return true;
}}
return false;
});

Clazz.newMeth(C$, 'isDuplicate$DA$DA$I',  function (data0, data1, len1) {
var len=Math.min(data0.length, len1);
for (var i=0; i < len; i++) {
if (Double.isNaN$D(data0[i]) && Double.isNaN$D(data1[i]) ) {
continue;
}if (data0[i] != data1[i] ) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'getColumnMatchesByID$org_opensourcephysics_display_Data',  function (data) {
var matches=Clazz.new_($I$(87,1));
var datasets=$I$(34).getDatasets$org_opensourcephysics_display_Data(data);
for (var next, $next = this.dataManager.getDatasetsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (Clazz.instanceOf(next, "org.opensourcephysics.tools.DataColumn")) {
var column=next;
var match=this.getMatchByID$org_opensourcephysics_tools_DataColumn$java_util_ArrayList(column, datasets);
if (match != null ) {
matches.put$O$O(column, match);
}}}
return matches;
});

Clazz.newMeth(C$, 'getColumnMatchesByName$java_util_Set$org_opensourcephysics_display_Data',  function (columnNames, data) {
var matches=Clazz.new_($I$(87,1));
var datasets=$I$(34).getDatasets$org_opensourcephysics_display_Data(data);
for (var next, $next = this.dataManager.getDatasetsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (Clazz.instanceOf(next, "org.opensourcephysics.tools.DataColumn")) {
var column=next;
if (columnNames != null  && !columnNames.contains$O(column.getYColumnName$()) ) continue;
var match=this.getMatchByName$org_opensourcephysics_tools_DataColumn$java_util_ArrayList(column, datasets);
if (match != null ) {
matches.put$O$O(column, match);
}}}
return matches;
});

Clazz.newMeth(C$, 'getMatchByName$org_opensourcephysics_tools_DataColumn$java_util_ArrayList',  function (column, datasets) {
var dataNames=this.ownedColumns.get$O(column.getYColumnName$());
if (dataNames == null ) return null;
var dataName=dataNames[1];
for (var i=0; i < datasets.size$(); i++) {
var next=datasets.get$I(i);
if (next == null ) continue;
if (i == 0 && dataName.equals$O(next.getXColumnName$()) ) return next;
if (dataName.equals$O(next.getYColumnName$())) return next;
}
return null;
});

Clazz.newMeth(C$, 'getMatchByID$org_opensourcephysics_tools_DataColumn$java_util_ArrayList',  function (column, datasets) {
for (var next, $next = datasets.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next == null ) continue;
if (column.getID$() == next.getID$()) return next;
}
return null;
});

Clazz.newMeth(C$, 'setDelimitedData$S$S',  function (dataString, prevString) {
if (dataString == null ) {
return false;
}if (dataString.length$() == 0) {
this.clearData$Z(false);
return false;
}var parsableData=dataString.replace$CharSequence$CharSequence(" ", "").replace$CharSequence$CharSequence(",", "\t");
var data=$I$(34).parseData$S$S(parsableData, "edited");
this.clearData$Z(false);
if (data != null ) {
this.loadData$org_opensourcephysics_display_Data$Z(data[0], false);
this.tabChanged$Z(true);
if (prevString != null ) {
var edit=Clazz.new_($I$(36,1).c$$I$S$O$O,[this.dataTable, null, 8, null, prevString, dataString]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.refreshUndoItems$();
return true;
}}return false;
});

Clazz.newMeth(C$, 'setSelectedData$org_opensourcephysics_display_Dataset$Z',  function (selectedData, dofit) {
this.getCurveFitter$().setData$org_opensourcephysics_display_Dataset$Z(selectedData, dofit);
if (this.fourierPanel != null ) {
try {
this.fourierPanel.refreshFourierData$org_opensourcephysics_display_Dataset$S(selectedData, this.getName$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}if (this.originShiftEnabled && selectedData != null  ) {
if (selectedData.getIndex$() == 1) {
this.selectedDataIndex=this.dataTable.getSelectedRow$();
this.toolbar.add$java_awt_Component$I(this.selectedXLabel, 6);
this.toolbar.add$java_awt_Component$I(this.selectedXField, 7);
this.toolbar.add$java_awt_Component$I(this.selectedYLabel, 8);
this.toolbar.add$java_awt_Component$I(this.selectedYField, 9);
this.selectedXField.setValue$D(selectedData.getX$I(0));
this.selectedXField.refreshPreferredWidth$();
this.selectedYField.setValue$D(selectedData.getY$I(0));
this.selectedYField.refreshPreferredWidth$();
this.toolbar.revalidate$();
} else {
this.toolbar.remove$java_awt_Component(this.selectedXLabel);
this.toolbar.remove$java_awt_Component(this.selectedXField);
this.toolbar.remove$java_awt_Component(this.selectedYLabel);
this.toolbar.remove$java_awt_Component(this.selectedYField);
this.toolbar.revalidate$();
this.selectedDataIndex=-1;
}}if (this.positionVisible || this.slopeVisible ) {
this.plot.refreshMeasurements$();
}if (this.areaVisible) {
this.plot.refreshArea$();
}});

Clazz.newMeth(C$, 'refreshPlot$',  function () {
this.refreshPlot$Z(false);
});

Clazz.newMeth(C$, 'refreshPlot$Z',  function (andFit) {
if (!this.haveGUI) return;
var d=this.dataTable.getSelectedData$();
this.setSelectedData$org_opensourcephysics_display_Dataset$Z(d, andFit);
this.plot.removeDrawables$Class(Clazz.getClass($I$(22)));
var workingData=this.getWorkingData$();
this.valueCheckbox.setEnabled$Z((workingData != null ) && (workingData.getIndex$() > 0) );
if (!this.valueCheckbox.isEnabled$()) {
this.valueCheckbox.setSelected$Z(false);
this.positionVisible=false;
}this.slopeCheckbox.setEnabled$Z((workingData != null ) && (workingData.getIndex$() > 2) );
if (!this.slopeCheckbox.isEnabled$()) {
this.slopeCheckbox.setSelected$Z(false);
this.slopeVisible=false;
}this.areaCheckbox.setEnabled$Z((workingData != null ) && (workingData.getIndex$() > 1) );
if (!this.areaCheckbox.isEnabled$()) {
this.areaCheckbox.setSelected$Z(false);
this.areaVisible=false;
}this.plot.dataPresent=false;
if (workingData != null ) {
this.plot.dataPresent=workingData.getIndex$() > 0;
var labelCol=this.dataTable.convertColumnIndexToView$I(0);
var xName=this.dataTable.getColumnName$I((labelCol == 0) ? 1 : 0);
var datasets=this.dataTable.workingMap;
for (var it=datasets.values$().iterator$(); it.hasNext$(); ) {
var next=it.next$();
next.setXSource$org_opensourcephysics_display_Dataset(workingData.getXSource$());
var colName=next.getYColumnName$();
if (next === workingData  || colName.equals$O(xName)  || (this.originShiftEnabled && (colName + "`").equals$O(xName) ) ) {
continue;
}if (next.isMarkersVisible$() || next.isConnected$() ) {
if (!next.isMarkersVisible$()) {
next.setMarkerShape$I(0);
}this.plot.addDrawable$org_opensourcephysics_display_Drawable(next);
this.plot.dataPresent=this.plot.dataPresent || next.getIndex$() > 0 ;
}}
this.plot.addDrawable$org_opensourcephysics_display_Drawable(workingData);
workingData.restoreHighlights$();
if (p$2.isFitterVisible.apply(this, [])) {
this.plot.removeDrawable$org_opensourcephysics_display_Drawable(this.curveFitter.getDrawer$());
this.plot.addDrawable$org_opensourcephysics_display_Drawable(this.curveFitter.getDrawer$());
}var xLabel=workingData.getColumnName$I(0);
var yLabel=workingData.getColumnName$I(1);
this.plot.setAxisLabels$S$S(xLabel, yLabel);
if (this.curveFitter.fit != null ) {
var depVar=$I$(24,"removeSubscripting$S",[workingData.getColumnName$I(1)]);
var indepVar=$I$(24,"removeSubscripting$S",[workingData.getColumnName$I(0)]);
if (this.originShiftEnabled) {
depVar+="`";
indepVar+="`";
}this.curveFitter.setText$S(depVar + " = " + (Clazz.instanceOf(this.curveFitter.fit, "org.opensourcephysics.tools.UserFunction") ? (this.curveFitter.fit).getFullExpression$SA(Clazz.array(String, -1, [indepVar])) : this.curveFitter.fit.getExpression$S(indepVar)) );
}} else {
this.plot.setXLabel$S("");
this.plot.setYLabel$S("");
}if (this.dataTool != null ) {
this.dataTool.refreshTabTitles$();
}if (this.positionVisible || this.slopeVisible ) {
this.plot.refreshMeasurements$();
}if (this.areaVisible) {
this.plot.refreshArea$();
}if (this.fitTimer == null  || !this.fitTimer.isRunning$()  || !this.curveFitter.isAutoFit$() ) this.plot.repaint$();
this.refreshFit$();
});

Clazz.newMeth(C$, 'refreshStatusBar$S',  function (hint) {
if (hint != null ) {
this.statusLabel.setText$S(hint);
} else if (this.slopeCheckbox.isSelected$()) {
var s=$I$(21).getString$S("DataToolTab.Status.Slope");
if (p$2.isFitterVisible.apply(this, [])) {
s+=" " + $I$(21).getString$S("DataToolTab.Status.MeasureFit");
}this.statusLabel.setText$S(s);
} else if (this.areaCheckbox.isSelected$()) {
var s=$I$(21).getString$S("DataToolTab.Status.Area");
if (p$2.isFitterVisible.apply(this, [])) {
s+=" " + $I$(21).getString$S("DataToolTab.Status.MeasureFit");
}this.statusLabel.setText$S(s);
} else if (this.valueCheckbox.isSelected$()) {
var s=$I$(21).getString$S("DataToolTab.Status.Value");
if (p$2.isFitterVisible.apply(this, [])) {
s+=" " + $I$(21).getString$S("DataToolTab.Status.MeasureFit");
}this.statusLabel.setText$S(s);
} else if (this.originShiftCheckbox.isSelected$()) {
this.statusLabel.setText$S($I$(21).getString$S("DataToolTab.Status.ShiftOrigin"));
} else if (this.statsCheckbox.isSelected$()) {
this.statusLabel.setText$S(this.getCorrelationString$());
} else {
if (this.dataManager.getDatasetsRaw$().size$() < 2) {
this.statusLabel.setText$S(this.userEditable ? $I$(21).getString$S("DataToolTab.StatusBar.Text.CreateColumns") : $I$(21).getString$S("DataToolTab.StatusBar.Text.PasteColumns"));
} else {
this.statusLabel.setText$S($I$(21).getString$S("DataToolTab.StatusBar.Text.DragColumns"));
}}this.editableLabel.setText$S(this.isUserEditable$() ? $I$(21).getString$S("DataTool.MenuItem.Editable").toLowerCase$() : $I$(21).getString$S("DataTool.MenuItem.Noneditable").toLowerCase$());
this.editableLabel.setForeground$java_awt_Color(this.isUserEditable$() ? $I$(2).GREEN.darker$() : $I$(2).RED.darker$());
});

Clazz.newMeth(C$, 'getCorrelationString$',  function () {
var s=$I$(21).getString$S("DataToolTab.Status.Correlation");
if (Double.isNaN$D(this.curveFitter.correlation)) {
s+=" " + $I$(21).getString$S("DataToolTab.Status.Correlation.Undefined");
} else {
s+=" = " + C$.correlationFormat.format$D(this.curveFitter.correlation);
}return s;
});

Clazz.newMeth(C$, 'refreshShiftFields$',  function () {
var doRevalidate=false;
var data=this.dataTable.getDataset$S(this.plot.xVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var pattern=this.dataTable.getFormatPattern$S(this.plot.xVar);
if (pattern == null  || "".equals$O(pattern) ) {
pattern="#0.0#";
}var existing=this.shiftXField.getPattern$();
if (!pattern.equals$O(existing)) {
this.shiftXField.applyPattern$S(pattern);
this.selectedXField.applyPattern$S(pattern);
}var shift=(data).getShift$();
this.shiftXField.setValue$D(shift == 0  ? 0 : -shift);
this.shiftXSpinner.setValue$O(Double.valueOf$D(shift == 0  ? 0 : -shift));
if (this.selectedDataIndex > -1) {
this.selectedXField.setValue$D(data.getYPoints$()[this.selectedDataIndex]);
}if (shift != this.prevShiftX  || !pattern.equals$O(existing) ) {
this.shiftXField.refreshPreferredWidth$();
this.selectedXField.refreshPreferredWidth$();
doRevalidate=true;
}}var currentShift=this.prevShiftY;
data=this.dataTable.getDataset$S(this.plot.yVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var pattern=this.dataTable.getFormatPattern$S(this.plot.yVar);
if (pattern == null  || "".equals$O(pattern) ) {
pattern="#0.0#";
}var existing=this.shiftYField.getPattern$();
if (!pattern.equals$O(existing)) {
this.shiftYField.applyPattern$S(pattern);
this.selectedYField.applyPattern$S(pattern);
}currentShift=(data).getShift$();
this.shiftYField.setValue$D(currentShift == 0  ? 0 : -currentShift);
this.shiftYSpinner.setValue$O(Double.valueOf$D(currentShift == 0  ? 0 : -currentShift));
if (this.selectedDataIndex > -1) {
this.selectedYField.setValue$D(data.getYPoints$()[this.selectedDataIndex]);
}if (currentShift != this.prevShiftY  || !pattern.equals$O(existing) ) {
this.shiftYField.refreshPreferredWidth$();
this.selectedYField.refreshPreferredWidth$();
doRevalidate=true;
}}if (doRevalidate) this.toolbar.revalidate$();
return currentShift;
});

Clazz.newMeth(C$, 'refreshAll$I',  function (mode) {
this.refreshPlot$Z(false);
this.refreshShiftFields$();
this.dataTable.refreshTable$I(mode);
});

Clazz.newMeth(C$, 'refreshFit$',  function () {
if (this.fitTimer == null ) {
this.fitTimer=$I$(11).trigger$I$java_awt_event_ActionListener(C$.fitDelayMS, this.fitTimerAction);
} else {
this.fitTimer.restart$();
}});

Clazz.newMeth(C$, 'stopFitTimer',  function () {
if (this.fitTimer != null ) {
this.fitTimer.stop$();
this.fitTimer=null;
}}, p$2);

Clazz.newMeth(C$, 'refreshFitDrawer$',  function () {
var drawer=this.curveFitter.getDrawer$();
var measuring=this.positionVisible || this.slopeVisible || this.areaVisible  ;
drawer.setUncertain$Z(!measuring);
});

Clazz.newMeth(C$, 'refreshUndoItems$',  function () {
if (this.dataTool != null ) {
this.dataTool.undoItem.setEnabled$Z(this.undoManager.canUndo$());
this.dataTool.redoItem.setEnabled$Z(this.undoManager.canRedo$());
}});

Clazz.newMeth(C$, 'postShiftEdit$',  function () {
var shiftX=-this.shiftXField.getValue$();
var shiftY=-this.shiftYField.getValue$();
if (this.prevShiftX == shiftX  && this.prevShiftY == shiftY  ) return;
var newShift=Clazz.array(Double.TYPE, -1, [shiftX, shiftY]);
var prevShift=Clazz.array(Double.TYPE, -1, [this.prevShiftX, this.prevShiftY]);
var colNames=Clazz.array(String, -1, [this.plot.xVar, this.plot.yVar]);
var edit=Clazz.new_($I$(88,1).c$$SA$DA$DA,[this, null, colNames, newShift, prevShift]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.refreshUndoItems$();
this.prevShiftX=shiftX;
this.prevShiftY=shiftY;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(89,1));
}, 1);

Clazz.newMeth(C$, 'findNearestXIndex$D$DA$DA$I$D$D',  function (x, xpoints, ypoints, len, min, max) {
x=Math.min(max, Math.max(min, x));
var imin=-1;
var dxmin=1.7976931348623157E308;
for (var i=0; i < len; i++) {
if (Double.isNaN$D(ypoints[i])) continue;
var dx=Math.abs(x - xpoints[i]);
if (dx < dxmin ) {
dxmin=dx;
imin=i;
}}
if (xpoints[imin] < min ) ++imin;
if (imin == len || xpoints[imin] > max  ) imin=len - 1;
return imin;
}, 1);

Clazz.newMeth(C$, 'removeNotify$',  function () {
C$.superclazz.prototype.removeNotify$.apply(this, []);
this.dispose$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
System.out.println$S("DataToolTab.dispose");
if (this.propsTable != null ) this.propsTable.dispose$();
this.propsTable=null;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(44).finalized$O(this);
});

C$.$static$=function(){C$.$static$=0;
C$.correlationFormat=$I$(30).getInstance$();
{
if (Clazz.instanceOf(C$.correlationFormat, "java.text.DecimalFormat")) {
var format=C$.correlationFormat;
format.applyPattern$S("0.000");
}var imageFile="/org/opensourcephysics/resources/tools/images/selectcursor.gif";
var im=$I$(5).getImage$S(imageFile);
C$.SELECT_CURSOR=$I$(6,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(7,1).c$$I$I,[0, 0]), "Select points", 1]);
imageFile="/org/opensourcephysics/resources/tools/images/selectremovecursor.gif";
im=$I$(5).getImage$S(imageFile);
C$.SELECT_REMOVE_CURSOR=$I$(6,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(7,1).c$$I$I,[0, 0]), "Remove points", 1]);
imageFile="/org/opensourcephysics/resources/tools/images/selectaddcursor.gif";
im=$I$(5).getImage$S(imageFile);
C$.SELECT_ADD_CURSOR=$I$(6,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(7,1).c$$I$I,[0, 0]), "Add points", 1]);
imageFile="/org/opensourcephysics/resources/tools/images/selectzoomcursor.gif";
im=$I$(5).getImage$S(imageFile);
C$.SELECT_ZOOM_CURSOR=$I$(6,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(7,1).c$$I$I,[8, 8]), "Zoom", 1]);
};
C$.fitDelayMS=($I$(11).isJS ? 250 : 200);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab, "DataToolAxes", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.axes.CartesianInteractive');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_PlottingPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_display_PlottingPanel.apply(this,[panel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'hasHorzVariablesPopup$',  function () {
return this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData != null ;
});

Clazz.newMeth(C$, 'getHorzVariablesPopup$',  function () {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].varPopup == null ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].buildVarPopup$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
}this.b$['org.opensourcephysics.tools.DataToolTab'].isHorzVarPopup=true;
$I$(1,"setFonts$O$I",[this.b$['org.opensourcephysics.tools.DataToolTab'].varPopup, $I$(1).getLevel$()]);
for (var c, $c = 0, $$c = this.b$['org.opensourcephysics.tools.DataToolTab'].varPopup.getComponents$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
var item=c;
if (this.xLine.getText$().equals$O(item.getActionCommand$())) {
item.setFont$java_awt_Font(item.getFont$().deriveFont$I(1));
} else {
item.setFont$java_awt_Font(item.getFont$().deriveFont$I(0));
}}
return this.b$['org.opensourcephysics.tools.DataToolTab'].varPopup;
});

Clazz.newMeth(C$, 'hasVertVariablesPopup$',  function () {
return this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData != null ;
});

Clazz.newMeth(C$, 'getVertVariablesPopup$',  function () {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].varPopup == null ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].buildVarPopup$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
}this.b$['org.opensourcephysics.tools.DataToolTab'].isHorzVarPopup=false;
$I$(1,"setFonts$O$I",[this.b$['org.opensourcephysics.tools.DataToolTab'].varPopup, $I$(1).getLevel$()]);
for (var c, $c = 0, $$c = this.b$['org.opensourcephysics.tools.DataToolTab'].varPopup.getComponents$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
var item=c;
if (this.yLine.getText$().equals$O(item.getActionCommand$())) {
item.setFont$java_awt_Font(item.getFont$().deriveFont$I(1));
} else {
item.setFont$java_awt_Font(item.getFont$().deriveFont$I(0));
}}
return this.b$['org.opensourcephysics.tools.DataToolTab'].varPopup;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab, "DataToolPlotter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.PlottingPanel');
C$.$classes$=[['SelectionBox',4],['Crossbars',4],['SlopeLine',4],['LimitLine',4],['XYAxes',4],['PlotCoordinateStringBuilder',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.areaLimits=Clazz.array($I$(12), [2]);
this.value=NaN;
this.slope=NaN;
this.sciFormat=$I$(10).newDecimalFormat$S("0.00E0");
this.fixedFormat=$I$(10).newDecimalFormat$S("0.00");
this.measurementIndex=-1;
this.measurementX=-1;
},1);

C$.$fields$=[['Z',['scaleLocked','dataPresent'],'D',['value','slope','area','lockedXMin','lockedXMax','lockedYMin','lockedYMax','mouseDownXMin','mouseDownXMax','mouseDownYMin','mouseDownYMax'],'I',['measurementIndex','measurementX'],'S',['xVar','yVar','message'],'O',['selectionBox','org.opensourcephysics.tools.DataToolTab.DataToolPlotter.SelectionBox','valueCrossbars','org.opensourcephysics.tools.DataToolTab.DataToolPlotter.Crossbars','slopeLine','org.opensourcephysics.tools.DataToolTab.DataToolPlotter.SlopeLine','origin','org.opensourcephysics.tools.DataToolTab.DataToolPlotter.XYAxes','areaLimits','org.opensourcephysics.tools.DataToolTab.DataToolPlotter.LimitLine[]','areaDataset','org.opensourcephysics.display.Dataset','sciFormat','java.text.DecimalFormat','+fixedFormat','stringBuilder','org.opensourcephysics.tools.DataToolTab.DataToolPlotter.PlotCoordinateStringBuilder','interactive','org.opensourcephysics.display.Interactive']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_Dataset',  function (dataset) {
;C$.superclazz.c$$S$S$S.apply(this,[(dataset == null ) ? "x" : dataset.getColumnName$I(0), (dataset == null ) ? "y" : dataset.getColumnName$I(1), ""]);C$.$init$.apply(this);
this.setAntialiasShapeOn$Z(true);
this.selectionBox=Clazz.new_($I$(13,1),[this, null]);
this.valueCrossbars=Clazz.new_($I$(14,1),[this, null]);
this.slopeLine=Clazz.new_($I$(15,1),[this, null]);
this.origin=Clazz.new_($I$(16,1),[this, null]);
this.areaLimits[0]=Clazz.new_($I$(12,1),[this, null]);
this.areaLimits[1]=Clazz.new_($I$(12,1),[this, null]);
this.addDrawable$org_opensourcephysics_display_Drawable(this.areaLimits[0]);
this.addDrawable$org_opensourcephysics_display_Drawable(this.areaLimits[1]);
this.addDrawable$org_opensourcephysics_display_Drawable(this.selectionBox);
this.addDrawable$org_opensourcephysics_display_Drawable(this.origin);
this.addKeyListener$java_awt_event_KeyListener(((P$.DataToolTab$DataToolPlotter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$DataToolPlotter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keyBits=Clazz.new_($I$(17,1).c$$I,[256]);
},1);

C$.$fields$=[['O',['keyBits','java.util.BitSet']]]

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var keyCode=e.getKeyCode$();
if (this.keyBits.get$I(keyCode)) return;
this.keyBits.set$I(keyCode);
if (e.getKeyCode$() == 18) {
this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState=4;
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.selectionBox.visible) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.selectionBox.visible=false;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.repaint$();
}return;
}if (keyCode == 16) {
if (this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].interactive != null ) return;
var remove=e.isControlDown$();
switch (this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState) {
case 5:
case 4:
return;
case 1:
case 2:
case 3:
this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState=remove ? 3 : 2;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor(remove ? $I$(18).SELECT_REMOVE_CURSOR : $I$(18).SELECT_ADD_CURSOR);
return;
case 0:
return;
}
return;
}if (keyCode == 17) {
if (this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].interactive != null ) return;
switch (this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState) {
case 5:
case 4:
return;
case 1:
case 2:
case 3:
this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState=3;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor($I$(18).SELECT_REMOVE_CURSOR);
break;
case 0:
break;
}
if (this.b$['org.opensourcephysics.tools.DataToolTab'].toggleMeasurement) return;
this.b$['org.opensourcephysics.tools.DataToolTab'].toggleMeasurement=true;
this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].refreshMeasurements$.apply(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'], []);
this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].refreshArea$.apply(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'], []);
return;
}if (keyCode == 32) {
if (!this.b$['org.opensourcephysics.tools.DataToolTab'].freezeMeasurement && e.isShiftDown$() ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].freezeMeasurement=true;
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].freezeMeasurement=false;
};if (!this.b$['org.opensourcephysics.tools.DataToolTab'].freezeMeasurement && this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].mouseEvent != null  ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.measurementX=this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].mouseEvent.getX$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.measurementIndex=-1;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.refreshMeasurements$();
}return;
}if (keyCode == 83 && e.isShiftDown$() ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTool.slopeExtended=!this.b$['org.opensourcephysics.tools.DataToolTab'].dataTool.slopeExtended;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.refreshMeasurements$();
return;
}if (!this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled) return;
var dy=NaN;
var dx=NaN;
if (e.getKeyCode$() == 38) {
if (e.isShiftDown$()) {
dy=-10 / this.b$['org.opensourcephysics.display.DrawingPanel'].getYPixPerUnit$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
} else {
dy=-1 / this.b$['org.opensourcephysics.display.DrawingPanel'].getYPixPerUnit$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
}} else if (e.getKeyCode$() == 40) {
if (e.isShiftDown$()) {
dy=10 / this.b$['org.opensourcephysics.display.DrawingPanel'].getYPixPerUnit$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
} else {
dy=1 / this.b$['org.opensourcephysics.display.DrawingPanel'].getYPixPerUnit$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
}} else if (e.getKeyCode$() == 37) {
if (e.isShiftDown$()) {
dx=-10 / this.b$['org.opensourcephysics.display.DrawingPanel'].getXPixPerUnit$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
} else {
dx=-1 / this.b$['org.opensourcephysics.display.DrawingPanel'].getXPixPerUnit$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
}} else if (e.getKeyCode$() == 39) {
if (e.isShiftDown$()) {
dx=10 / this.b$['org.opensourcephysics.display.DrawingPanel'].getXPixPerUnit$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
} else {
dx=1 / this.b$['org.opensourcephysics.display.DrawingPanel'].getXPixPerUnit$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
}}if (!Double.isNaN$D(dx) || !Double.isNaN$D(dy) ) {
if (!Double.isNaN$D(dx)) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var col=data;
col.setShift$D(col.getShift$() - dx);
this.b$['org.opensourcephysics.tools.DataToolTab'].tabChanged$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [true]);
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].pointIndex > -1 && this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].pointIndex > -1 ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].refreshX$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].refreshX$();
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].getX$() - dx);
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].getX$() - dx);
}}} else if (!Double.isNaN$D(dy)) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.yVar);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var col=data;
col.setShift$D(col.getShift$() + dy);
this.b$['org.opensourcephysics.tools.DataToolTab'].tabChanged$Z.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [true]);
}}this.b$['org.opensourcephysics.tools.DataToolTab'].refreshAll$I.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [32768]);
(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXSpinner.getModel$()).refreshDelta$();
(this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYSpinner.getModel$()).refreshDelta$();
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.dorepaint$I(5);
}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
this.keyBits.clear$I(e.getKeyCode$());
if (e.getKeyCode$() == 18) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor($I$(19).getPredefinedCursor$I(1));
return;
}if (e.getKeyCode$() == 16) {
if (this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].interactive != null ) return;
switch (this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState) {
case 0:
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor(e.isControlDown$() && !$I$(11).isMac$()  ? $I$(18).SELECT_REMOVE_CURSOR : $I$(19).getPredefinedCursor$I(1));
return;
case 5:
case 4:
return;
case 1:
case 2:
case 3:
var remove=e.isControlDown$();
this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState=remove ? 3 : 1;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor(remove ? $I$(18).SELECT_REMOVE_CURSOR : $I$(18).SELECT_CURSOR);
}
return;
}if (e.getKeyCode$() == 17) {
if (this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].interactive != null ) return;
switch (this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState) {
case 0:
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor(e.isShiftDown$() ? $I$(18).SELECT_ADD_CURSOR : $I$(19).getPredefinedCursor$I(1));
return;
case 5:
case 4:
return;
case 1:
case 2:
case 3:
this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState=e.isShiftDown$() ? 2 : 1;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMouseCursor$java_awt_Cursor(e.isShiftDown$() ? $I$(18).SELECT_ADD_CURSOR : $I$(18).SELECT_CURSOR);
}
if (!this.b$['org.opensourcephysics.tools.DataToolTab'].toggleMeasurement) return;
this.b$['org.opensourcephysics.tools.DataToolTab'].toggleMeasurement=false;
this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].refreshMeasurements$.apply(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'], []);
this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].refreshArea$.apply(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'], []);
return;
}if (!this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled) return;
if (e.getKeyCode$() == 38 || e.getKeyCode$() == 40  || e.getKeyCode$() == 37  || e.getKeyCode$() == 39 ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].postShiftEdit$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
}});
})()
), Clazz.new_($I$(20,1),[this, null],P$.DataToolTab$DataToolPlotter$1)));
}, 1);

Clazz.newMeth(C$, 'isZoomEvent$java_awt_event_MouseEvent',  function (e) {
return $I$(11).isPopupTrigger$java_awt_event_InputEvent(e) && !(this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState == 1 || this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState == 2  || this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState == 3 ) ;
});

Clazz.newMeth(C$, 'getInteractive$',  function () {
this.interactive=this.origin.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(this, this.mouseEvent.getX$(), this.mouseEvent.getY$());
if (this.interactive == null ) this.interactive=C$.superclazz.prototype.getInteractive$.apply(this, []);
return this.interactive;
});

Clazz.newMeth(C$, 'refreshDecimalSeparators$',  function () {
C$.superclazz.prototype.refreshDecimalSeparators$.apply(this, []);
if (this.b$['org.opensourcephysics.tools.DataToolTab'].dataTool.getSelectedTab$() === this.b$['org.opensourcephysics.tools.DataToolTab'] ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].dataTool.refreshDecimalSeparators$();
}});

Clazz.newMeth(C$, 'lockScale$Z',  function (lock) {
this.scaleLocked=lock;
if (lock) {
this.lockedXMax=this.mouseDownXMax=this.xmax;
this.lockedXMin=this.mouseDownXMin=this.xmin;
this.lockedYMax=this.mouseDownYMax=this.ymax;
this.lockedYMin=this.mouseDownYMin=this.ymin;
}});

Clazz.newMeth(C$, 'scale$java_util_ArrayList',  function (tempList) {
if (this.scaleLocked) {
this.xminPreferred=this.lockedXMin;
this.xmaxPreferred=this.lockedXMax;
this.yminPreferred=this.lockedYMin;
this.ymaxPreferred=this.lockedYMax;
} else {
C$.superclazz.prototype.scale$java_util_ArrayList.apply(this, [tempList]);
}});

Clazz.newMeth(C$, 'paintDrawableList$java_awt_Graphics$java_util_ArrayList',  function (g, tempList) {
var s=this.message;
if (tempList.contains$O(this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.getDrawer$())) {
var auto=this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.isAutoFit$();
var inactive=(this.b$['org.opensourcephysics.tools.DataToolTab'].mouseState == 0);
this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.setFitVisible$Z(!auto || this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.isFitFittable$org_opensourcephysics_tools_KnownFunction$Z(this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.fit, inactive) );
var ylimits=this.b$['org.opensourcephysics.tools.DataToolTab'].curveFitter.getDrawer$().getYRange$();
if (ylimits[0] != ylimits[1]  && (ylimits[0] >= this.getYMax$()  || ylimits[1] <= this.getYMin$()  ) ) {
s=$I$(21).getString$S("DataToolTab.Plot.Message.FitNotVisible") + (this.message == null  || s === ""   ? "" : "  " + s);
}}C$.superclazz.prototype.paintDrawableList$java_awt_Graphics$java_util_ArrayList.apply(this, [g, tempList]);
this.setMessage$S(s);
this.slopeLine.draw$java_awt_Graphics(g);
this.valueCrossbars.draw$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'setAreaVisible$Z',  function (visible) {
this.b$['org.opensourcephysics.tools.DataToolTab'].areaVisible=visible;
if (this.areaDataset == null ) {
this.areaDataset=Clazz.new_($I$(22,1));
this.areaDataset.setMarkerShape$I(5);
this.areaDataset.setConnected$Z(false);
this.areaDataset.setMarkerColor$java_awt_Color(Clazz.new_($I$(2,1).c$$I$I$I$I,[102, 102, 102, 51]));
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData;
if ((data != null ) && (data.getIndex$() > 1) ) {
this.areaLimits[0].x=data.getXMin$();
this.areaLimits[1].x=data.getXMax$();
var pts=data.getXPointsRaw$();
var n=data.getIndex$();
for (var i=0; i < n; i++) {
if (pts[i] == this.areaLimits[0].x ) {
this.areaLimits[0].pointIndex=i;
}if (pts[i] == this.areaLimits[1].x ) {
this.areaLimits[1].pointIndex=i;
}if (this.areaLimits[0].pointIndex > -1 && this.areaLimits[1].pointIndex > -1 ) {
break;
}}
}}this.b$['org.opensourcephysics.tools.DataToolTab'].refreshPlot$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
this.setMessage$S(this.createMessage$());
});

Clazz.newMeth(C$, 'refreshMeasurements$',  function () {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData;
if (this.mouseEvent != null ) {
var ia=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getInteractive$();
if (Clazz.instanceOf(ia, "org.opensourcephysics.display.HighlightableDataset")) {
data=ia;
}}if (data != null  && (this.b$['org.opensourcephysics.tools.DataToolTab'].positionVisible || this.b$['org.opensourcephysics.tools.DataToolTab'].slopeVisible || this.b$['org.opensourcephysics.tools.DataToolTab'].areaVisible  ) ) {
var j=this.measurementIndex;
var x=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.pixToX$I(this.measurementX);
if (data.getIndex$() > 0 && j < 0 ) {
this.measurementIndex=j=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.findIndexNearestX$D$org_opensourcephysics_display_Dataset(x, data);
}var xpoints=data.getXPointsRaw$();
var ypoints=data.getYPointsRaw$();
var measureData=!p$2.isFitterVisible.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []) || (this.b$['org.opensourcephysics.tools.DataToolTab'].measureFit && this.b$['org.opensourcephysics.tools.DataToolTab'].toggleMeasurement ) || (!this.b$['org.opensourcephysics.tools.DataToolTab'].measureFit && !this.b$['org.opensourcephysics.tools.DataToolTab'].toggleMeasurement )  ;
var drawer=this.b$['org.opensourcephysics.tools.DataToolTab'].getCurveFitter$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []).getDrawer$();
var positionOrSlopeChanged=false;
if (this.b$['org.opensourcephysics.tools.DataToolTab'].positionVisible) {
var xtemp=NaN;
var ytemp=NaN;
if (measureData && j > -1  && !Double.isNaN$D(ypoints[j]) ) {
xtemp=xpoints[j];
ytemp=ypoints[j];
} else if (!measureData) {
xtemp=x;
ytemp=drawer.evaluate$D(x);
}positionOrSlopeChanged=(!Double.isNaN$D(xtemp) && !Double.isNaN$D(ytemp) && (xtemp != this.b$['org.opensourcephysics.tools.DataToolTab'].plot.valueCrossbars.x  || ytemp != this.b$['org.opensourcephysics.tools.DataToolTab'].plot.valueCrossbars.y  )  );
if (positionOrSlopeChanged) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.value=ytemp;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.valueCrossbars.x=xtemp;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.valueCrossbars.y=ytemp;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xVar=data.getXColumnName$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.yVar=data.getYColumnName$();
}}if (this.b$['org.opensourcephysics.tools.DataToolTab'].slopeVisible) {
var xtemp=NaN;
var ytemp=NaN;
var slopetemp=NaN;
if (measureData && j > 0  && j < data.getIndex$() - 1  && !Double.isNaN$D(ypoints[j]) ) {
xtemp=xpoints[j];
ytemp=ypoints[j];
slopetemp=(ypoints[j + 1] - ypoints[j - 1]) / (xpoints[j + 1] - xpoints[j - 1]);
} else if (!measureData) {
xtemp=x;
ytemp=drawer.evaluate$D(x);
var dx=1 / this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getXPixPerUnit$();
slopetemp=(drawer.evaluate$D(x + dx) - drawer.evaluate$D(x - dx)) / (2 * dx);
}positionOrSlopeChanged=positionOrSlopeChanged || (!Double.isNaN$D(xtemp) && !Double.isNaN$D(ytemp) && !Double.isNaN$D(slopetemp) && (xtemp != this.b$['org.opensourcephysics.tools.DataToolTab'].plot.slopeLine.x  || ytemp != this.b$['org.opensourcephysics.tools.DataToolTab'].plot.slopeLine.y   || slopetemp != this.b$['org.opensourcephysics.tools.DataToolTab'].plot.slope  )  ) ;
if (positionOrSlopeChanged) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.slopeLine.x=xtemp;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.slopeLine.y=ytemp;
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.slope=slopetemp;
}}this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMessage$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.createMessage$());
if (positionOrSlopeChanged || !true ) this.b$['org.opensourcephysics.tools.DataToolTab'].plot.repaint$();
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.slope=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.value=NaN;
}});

Clazz.newMeth(C$, 'refreshArea$',  function () {
if (!this.b$['org.opensourcephysics.tools.DataToolTab'].areaVisible) {
return;
}this.area=0;
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData;
if (data == null ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].areaVisible=false;
this.setMessage$S(this.createMessage$());
return;
}var measureData=!p$2.isFitterVisible.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []) || (this.b$['org.opensourcephysics.tools.DataToolTab'].measureFit && this.b$['org.opensourcephysics.tools.DataToolTab'].toggleMeasurement ) || (!this.b$['org.opensourcephysics.tools.DataToolTab'].measureFit && !this.b$['org.opensourcephysics.tools.DataToolTab'].toggleMeasurement )  ;
var drawer=this.b$['org.opensourcephysics.tools.DataToolTab'].getCurveFitter$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []).getDrawer$();
this.areaLimits[0].refreshX$();
this.areaLimits[1].refreshX$();
var lower=Math.min(this.areaLimits[0].x, this.areaLimits[1].x);
var upper=Math.max(this.areaLimits[0].x, this.areaLimits[1].x);
var del=(upper - lower) / 200000;
if (del > 0 ) {
lower-=del;
upper+=del;
}var xpoints;
var ypoints;
var xp;
var yp;
var numpts;
if (measureData) {
numpts=data.getIndex$();
xp=data.getXPointsRaw$();
yp=data.getYPointsRaw$();
} else {
numpts=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xToPix$D(upper) - this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xToPix$D(lower);
var delta=(upper - lower) / numpts;
xp=Clazz.array(Double.TYPE, [numpts]);
yp=Clazz.array(Double.TYPE, [numpts]);
for (var i=0; i < numpts; i++) {
xp[i]=lower + i * delta;
yp[i]=drawer.evaluate$D(xp[i]);
}
}this.areaDataset.clear$();
var bsPoints=Clazz.new_($I$(17,1).c$$I,[numpts]);
var n=0;
for (var i=0; i < numpts; i++) {
if (xp[i] >= lower  && xp[i] <= upper   && !Double.isNaN$D(yp[i]) ) {
bsPoints.set$I(i);
++n;
}}
if (!bsPoints.isEmpty$()) {
xpoints=Clazz.array(Double.TYPE, [n]);
ypoints=Clazz.array(Double.TYPE, [n]);
for (var p=0, i=bsPoints.nextSetBit$I(0); i >= 0; i=bsPoints.nextSetBit$I(i + 1), p++) {
xpoints[p]=xp[i];
ypoints[p]=yp[i];
}
this.areaDataset.append$D$D(xpoints[0], 0);
this.areaDataset.append$DA$DA(xpoints, ypoints);
this.areaDataset.append$D$D(xpoints[n - 1], 0);
if (n > 1) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.addDrawableAtIndex$I$org_opensourcephysics_display_Drawable(0, this.areaDataset);
this.area=ypoints[0] * (xpoints[1] - xpoints[0]);
this.area+=ypoints[n - 1] * (xpoints[n - 1] - xpoints[n - 2]);
for (var i=1; i < n - 1; i++) {
this.area+=ypoints[i] * (xpoints[i + 1] - xpoints[i - 1]);
}
this.area/=2;
}}this.areaLimits[0].trueLimit=this.areaDataset.getXMin$();
this.areaLimits[1].trueLimit=this.areaDataset.getXMax$();
this.setMessage$S(this.createMessage$());
});

Clazz.newMeth(C$, 'findIndexNearestX$D$org_opensourcephysics_display_Dataset',  function (x, data) {
if (data == null ) {
return -1;
}var len=data.getIndex$();
if (len == 0) {
return -1;
}var xpoints=data.getXPointsRaw$();
var ypoints=data.getYPointsRaw$();
var min=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getXMin$();
var max=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getXMax$();
return $I$(18).findNearestXIndex$D$DA$DA$I$D$D(x, xpoints, ypoints, len, min, max);
});

Clazz.newMeth(C$, 'createMessage$',  function () {
var xAxis=this.xVar;
var yAxis=this.yVar;
if (this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled) {
xAxis+="`";
yAxis+="`";
}var buf=Clazz.new_($I$(23,1));
if (this.b$['org.opensourcephysics.tools.DataToolTab'].positionVisible && !Double.isNaN$D(this.value) ) {
buf.append$S($I$(24).removeSubscripting$S(xAxis) + "=");
buf.append$S(this.format$D$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.valueCrossbars.x, this.getXMax$() - this.getXMin$()));
buf.append$S("  ");
buf.append$S($I$(24).removeSubscripting$S(yAxis) + "=");
buf.append$S(this.format$D$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.valueCrossbars.y, this.getYMax$() - this.getYMin$()));
}if (this.b$['org.opensourcephysics.tools.DataToolTab'].slopeVisible && !Double.isNaN$D(this.slope) ) {
if (buf.length$() > 0) {
buf.append$S("  ");
}buf.append$S($I$(21).getString$S("DataToolPlotter.Message.Slope"));
buf.append$S(this.format$D$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.slope, 0));
}if (this.b$['org.opensourcephysics.tools.DataToolTab'].areaVisible) {
if (buf.length$() > 0) {
buf.append$S("  ");
}buf.append$S($I$(21).getString$S("DataToolPlotter.Message.Area"));
buf.append$S(this.format$D$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.area, 0));
}this.message=buf.toString();
return this.message;
});

Clazz.newMeth(C$, 'format$D$D',  function (value, range) {
var zero=Math.min(1, range) / 1000;
if (Math.abs(value) < zero ) {
value=0;
}if ((range < 1 ) && (value != 0 ) ) {
return this.sciFormat.format$D(value);
}return (Math.abs(value) <= 10 ) ? this.fixedFormat.format$D(value) : this.sciFormat.format$D(value);
});

Clazz.newMeth(C$, 'setAxisLabels$S$S',  function (xAxis, yAxis) {
if (xAxis == null  || yAxis == null  ) return;
this.xVar=xAxis;
this.yVar=yAxis;
xAxis=$I$(24).removeSubscripting$S(xAxis);
yAxis=$I$(24).removeSubscripting$S(yAxis);
if (this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled) {
xAxis=xAxis + "`";
yAxis=yAxis + "`";
}this.setXLabel$S(xAxis);
this.setYLabel$S(yAxis);
this.coordinateStrBuilder.setCoordinateLabels$S$S(xAxis + "=", "  " + yAxis + "=" );
var label=$I$(21).getString$S("DataToolTab.Origin.Label") + ":  ";
this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXLabel.setText$S(label + this.xVar);
this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYLabel.setText$S(this.yVar);
label=$I$(21).getString$S("DataToolTab.Selection.Label") + ":  ";
this.b$['org.opensourcephysics.tools.DataToolTab'].selectedXLabel.setText$S(label + this.xVar);
this.b$['org.opensourcephysics.tools.DataToolTab'].selectedYLabel.setText$S(this.yVar);
});

Clazz.newMeth(C$, 'getMouseController$',  function () {
return this.mouseController;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab.DataToolPlotter, "SelectionBox", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.Rectangle', 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=true;
this.color=Clazz.new_($I$(2,1).c$$I$I$I$I,[0, 255, 0, 127]);
},1);

C$.$fields$=[['Z',['visible'],'I',['xstart','ystart'],'O',['color','java.awt.Color']]]

Clazz.newMeth(C$, 'setSize$I$I',  function (w, h) {
var xoffset=Math.min(0, w);
var yoffset=Math.min(0, h);
w=Math.abs(w);
h=Math.abs(h);
C$.superclazz.prototype.setLocation$I$I.apply(this, [this.xstart + xoffset, this.ystart + yoffset]);
C$.superclazz.prototype.setSize$I$I.apply(this, [w, h]);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
if (this.visible) {
var g2=g;
g2.setColor$java_awt_Color(this.color);
g2.draw$java_awt_Shape(this);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab.DataToolPlotter, "Crossbars", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=Clazz.new_($I$(2,1).c$$I$I$I,[0, 0, 0]);
},1);

C$.$fields$=[['D',['x','y'],'O',['color','java.awt.Color']]]

Clazz.newMeth(C$, 'draw$java_awt_Graphics',  function (g) {
if (!this.b$['org.opensourcephysics.tools.DataToolTab'].positionVisible || java.lang.Double.isNaN$D(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].value) ) {
return;
}var c=g.getColor$();
g.setColor$java_awt_Color(this.color);
g.drawLine$I$I$I$I(this.b$['org.opensourcephysics.display.DrawingPanel'].getLeftGutter$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []), this.b$['org.opensourcephysics.display.PlottingPanel'].yToPix$D.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], [this.y]), this.b$['org.opensourcephysics.display.DrawingPanel'].getWidth$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []) - this.b$['org.opensourcephysics.display.DrawingPanel'].getRightGutter$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []) - 1 , this.b$['org.opensourcephysics.display.PlottingPanel'].yToPix$D.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], [this.y]));
g.drawLine$I$I$I$I(this.b$['org.opensourcephysics.display.PlottingPanel'].xToPix$D.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], [this.x]), this.b$['org.opensourcephysics.display.PlottingPanel'].getTopGutter$.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], []), this.b$['org.opensourcephysics.display.PlottingPanel'].xToPix$D.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], [this.x]), this.b$['org.opensourcephysics.display.DrawingPanel'].getHeight$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []) - this.b$['org.opensourcephysics.display.PlottingPanel'].getBottomGutter$.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], []) - 1 );
g.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab.DataToolPlotter, "SlopeLine", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.awt.geom.Line2D','.Double']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stroke=Clazz.new_($I$(3,1).c$$F,[2.5]);
this.length=30;
this.color=Clazz.new_($I$(2,1).c$$I$I$I,[102, 102, 102]);
},1);

C$.$fields$=[['D',['x','y'],'I',['length'],'O',['stroke','java.awt.Stroke','color','java.awt.Color']]]

Clazz.newMeth(C$, 'draw$java_awt_Graphics',  function (g) {
if (!this.b$['org.opensourcephysics.tools.DataToolTab'].slopeVisible || java.lang.Double.isNaN$D(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].slope) ) {
return;
}var g2=g.create$();
var dxPix=1 * this.b$['org.opensourcephysics.display.DrawingPanel'].getXPixPerUnit$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
var dyPix=this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].slope * this.b$['org.opensourcephysics.display.DrawingPanel'].getYPixPerUnit$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
var hyp=Math.sqrt(dxPix * dxPix + dyPix * dyPix);
var sin=dyPix / hyp;
var cos=dxPix / hyp;
var xCenter=this.b$['org.opensourcephysics.display.PlottingPanel'].xToPix$D.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], [this.x]);
var yCenter=this.b$['org.opensourcephysics.display.PlottingPanel'].yToPix$D.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], [this.y]);
var len=this.length;
if (this.b$['org.opensourcephysics.tools.DataToolTab'].dataTool.slopeExtended) {
len*=40;
var w=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getWidth$() - this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getRightGutter$() - this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getLeftGutter$() ;
var h=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getHeight$() - this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getTopGutter$() - this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getBottomGutter$() ;
var rect=Clazz.new_([this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getLeftGutter$(), this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getTopGutter$(), w, h],$I$(4,1).c$$I$I$I$I);
g2.setClip$java_awt_Shape(rect);
}this.setLine$D$D$D$D(xCenter - len * cos + 1, yCenter + len * sin + 1, xCenter + len * cos + 1, yCenter - len * sin + 1);
g2.setColor$java_awt_Color(this.color);
g2.setStroke$java_awt_Stroke(this.stroke);
g2.draw$java_awt_Shape(this);
g2.dispose$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab.DataToolPlotter, "LimitLine", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.awt.geom.Line2D','.Double'], 'org.opensourcephysics.display.Selectable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pointIndex=-1;
this.stroke=Clazz.new_($I$(3,1).c$$F,[1.5]);
this.hitRect=Clazz.new_($I$(4,1));
this.color=Clazz.new_($I$(2,1).c$$I$I$I,[51, 51, 51]);
},1);

C$.$fields$=[['Z',['isAdjusting'],'D',['x','trueLimit'],'I',['pointIndex'],'O',['stroke','java.awt.Stroke','hitRect','java.awt.Rectangle','color','java.awt.Color','+trueLimitColor','move','java.awt.Cursor']]]

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.b$['org.opensourcephysics.tools.DataToolTab'].areaVisible) {
return;
}if (this.trueLimitColor == null ) {
this.trueLimitColor=this.color.brighter$().brighter$().brighter$();
}var g2=g.create$();
var y0=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getTopGutter$();
var y1=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getBounds$().height - this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getBottomGutter$();
var x1=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xToPix$D(this.x);
this.setLine$D$D$D$D(x1 + 1, y0, x1 + 1, y1);
if (this.isAdjusting) {
g2.setColor$java_awt_Color(this.color);
g2.setStroke$java_awt_Stroke(this.stroke);
g2.draw$java_awt_Shape(this);
}x1=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xToPix$D(this.trueLimit);
g2.setColor$java_awt_Color(this.trueLimitColor);
g2.drawLine$I$I$I$I(x1 + 1, y0, x1 + 1, y1);
g2.dispose$();
this.hitRect.setBounds$I$I$I$I(x1 - 2, y0, 6, y1 - y0 - 20 );
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].areaVisible && this.hitRect.contains$I$I(xpix, ypix) ) {
return this;
}return null;
});

Clazz.newMeth(C$, 'getPreferredCursor$',  function () {
if (this.move == null ) {
var imageFile="/org/opensourcephysics/resources/tools/images/limitcursor.gif";
var im=$I$(5).getImage$S(imageFile);
this.move=$I$(6,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(7,1).c$$I$I,[16, 16]), "Move Integration Limit", 13]);
}return this.move;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.setX$D(x);
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData;
this.pointIndex=-1;
if (this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].mouseEvent != null  && this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].mouseEvent.isShiftDown$() ) {
this.pointIndex=this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].findIndexNearestX$D$org_opensourcephysics_display_Dataset.apply(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'], [x, data]);
}this.x=(this.pointIndex == -1) ? x : data.getX$I(this.pointIndex);
this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].refreshArea$.apply(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'], []);
this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].createMessage$.apply(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'], []);
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.setMessage$S(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].message);
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.b$['org.opensourcephysics.tools.DataToolTab'].areaVisible;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData;
var dx=0;
var min=0;
if ((data != null ) && (data.getIndex$() > 1) ) {
dx=Math.abs(data.getXMax$() - data.getXMin$());
min=Math.min(data.getXMax$(), data.getXMin$());
} else {
dx=Math.abs(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].areaLimits[0].x - this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].areaLimits[1].x);
min=Math.min(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].areaLimits[0].x, this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].areaLimits[1].x);
}return min - 0.02 * dx;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData;
var dx=0;
var max=0;
if ((data != null ) && (data.getIndex$() > 1) ) {
dx=Math.abs(data.getXMax$() - data.getXMin$());
max=Math.max(data.getXMax$(), data.getXMin$());
} else {
dx=Math.abs(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].areaLimits[0].x - this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].areaLimits[1].x);
max=Math.max(this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].areaLimits[0].x, this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].areaLimits[1].x);
}return max + 0.02 * dx;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getYMin$() + this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getYMax$()) / 2;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getYMin$() + this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getYMax$()) / 2;
});

Clazz.newMeth(C$, 'refreshX$',  function () {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData.getXPointsRaw$();
var n=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData.getIndex$();
if (this.pointIndex > -1 && this.pointIndex < n  && !java.lang.Double.isNaN$D(data[this.pointIndex]) ) {
this.x=data[this.pointIndex];
}});

Clazz.newMeth(C$, 'setY$D',  function (y) {
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return 0;
});

Clazz.newMeth(C$, 'setSelected$Z',  function (selectable) {
});

Clazz.newMeth(C$, 'isSelected$',  function () {
return false;
});

Clazz.newMeth(C$, 'toggleSelected$',  function () {
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return true;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enable) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab.DataToolPlotter, "XYAxes", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.axisLine=Clazz.new_($I$(8,1));
this.stroke=Clazz.new_($I$(3,1).c$$F,[1.0]);
this.color=$I$(2).green.darker$();
this.hitRectVert=Clazz.new_($I$(4,1));
this.hitRectHorz=Clazz.new_($I$(4,1));
this.hitOrigin=Clazz.new_($I$(9,1));
},1);

C$.$fields$=[['Z',['isHorzHit','isVertHit'],'D',['mouseDownShiftX','mouseDownShiftY'],'O',['axisLine','java.awt.geom.Line2D','stroke','java.awt.Stroke','color','java.awt.Color','hitRectVert','java.awt.Rectangle','+hitRectHorz','hitOrigin','java.awt.geom.Ellipse2D','mouseDownPt','java.awt.Point']]]

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var gcolor=g.getColor$();
g.setColor$java_awt_Color(this.color);
var g2=g;
var top=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getTopGutter$();
var h=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getBounds$().height;
var bottom=h - this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getBottomGutter$();
var xx=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xToPix$D(0);
var left=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getLeftGutter$();
var w=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getBounds$().width;
var right=w - this.b$['org.opensourcephysics.tools.DataToolTab'].plot.getRightGutter$();
var yy=this.b$['org.opensourcephysics.tools.DataToolTab'].plot.yToPix$D(0);
g2.drawLine$I$I$I$I(xx, top, xx, bottom);
g2.drawLine$I$I$I$I(left, yy, right, yy);
if (this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled) {
g2.drawOval$I$I$I$I(xx - 6, yy - 6, 12, 12);
}g.setColor$java_awt_Color(gcolor);
this.hitRectHorz.setBounds$I$I$I$I(left, yy - 4, w, 8);
this.hitRectVert.setBounds$I$I$I$I(xx - 4, top, 8, h);
this.hitOrigin.setFrameFromCenter$D$D$D$D(xx, yy, xx + 6, yy + 6);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
this.isHorzHit=false;
this.isVertHit=false;
if (this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled) {
this.isHorzHit=this.hitRectHorz.contains$I$I(xpix, ypix);
this.isVertHit=this.hitRectVert.contains$I$I(xpix, ypix);
if (this.hitOrigin.contains$D$D(xpix, ypix)) {
this.isHorzHit=this.isVertHit=true;
}if (this.isHorzHit || this.isVertHit ) {
return this;
}}return null;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.getX$() - p$1.getXSetback.apply(this, []);
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.getX$() + p$1.getXSetback.apply(this, []);
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.getY$() - p$1.getYSetback.apply(this, []);
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.getY$() + p$1.getYSetback.apply(this, []);
});

Clazz.newMeth(C$, 'getXSetback',  function () {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled && this.b$['org.opensourcephysics.tools.DataToolTab'].plot.dataPresent ) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData;
var w=Math.abs(data.getXMax$() - data.getXMin$());
w=Math.max(w, Math.abs(this.getX$() - data.getXMax$()));
w=Math.max(w, Math.abs(this.getX$() - data.getXMin$()));
return w / 20;
}return 0;
}, p$1);

Clazz.newMeth(C$, 'getYSetback',  function () {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].originShiftEnabled && this.b$['org.opensourcephysics.tools.DataToolTab'].plot.dataPresent ) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.workingData;
var h=Math.abs(data.getYMax$() - data.getYMin$());
h=Math.max(h, Math.abs(this.getY$() - data.getYMax$()));
h=Math.max(h, Math.abs(this.getY$() - data.getYMin$()));
return h / 20;
}return 0;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab.DataToolPlotter, "PlotCoordinateStringBuilder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.axes.CartesianCoordinateStringBuilder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultXLabel="x=";
this.defaultYLabel="  y=";
},1);

C$.$fields$=[['S',['defaultXLabel','defaultYLabel']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.decimalFormat=$I$(10).newDecimalFormat$S("0.00#");
this.scientificFormat=$I$(10).newDecimalFormat$S("0.00#E0");
}, 1);

Clazz.newMeth(C$, 'getCoordinateString$org_opensourcephysics_display_DrawingPanel$java_awt_event_MouseEvent',  function (panel, e) {
var xColDisplayed=false;
var yColDisplayed=false;
for (var i=0; i < this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnCount$(); i++) {
if (this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].xVar != null  && this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].xVar.equals$O(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnName$I(i)) ) {
xColDisplayed=true;
}if (this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].yVar != null  && this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].yVar.equals$O(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnName$I(i)) ) {
yColDisplayed=true;
}}
var labelX=xColDisplayed ? this.xLabel : this.defaultXLabel;
var labelY=yColDisplayed ? this.yLabel : this.defaultYLabel;
var x=panel.pixToX$I(e.getPoint$().x);
var y=panel.pixToY$I(e.getPoint$().y);
if ((panel.isInteractive) && (panel).getCurrentDraggable$() != null  ) {
x=(panel).getCurrentDraggable$().getX$();
y=(panel).getCurrentDraggable$().getY$();
}var xValue="";
var yValue="";
if (xColDisplayed) {
xValue=this.getFormattedValue$O$S(Double.valueOf$D(x), this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].xVar);
} else {
if (Math.abs(x) > 100  || Math.abs(x) < 1.0  ) {
xValue=this.scientificFormat.format$D(x);
} else {
xValue=this.decimalFormat.format$D(x);
}}if (yColDisplayed) {
yValue=this.getFormattedValue$O$S(Double.valueOf$D(y), this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].yVar);
} else {
if (Math.abs(y) > 100  || Math.abs(y) < 1.0  ) {
yValue=this.scientificFormat.format$D(y);
} else {
yValue=this.decimalFormat.format$D(y);
}}var msg="";
if (labelX != null ) {
msg=labelX + xValue;
}if (labelY != null ) {
msg+=labelY + yValue;
}return msg;
});

Clazz.newMeth(C$, 'refreshFormats$',  function () {
var symbols=$I$(11).getDecimalFormatSymbols$();
this.scientificFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols(symbols);
this.decimalFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols(symbols);
this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].sciFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols(symbols);
this.b$['org.opensourcephysics.tools.DataToolTab.DataToolPlotter'].fixedFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols(symbols);
});

Clazz.newMeth(C$, 'getFormattedValue$O$S',  function (value, colName) {
if (value == null ) return null;
var col=-1;
for (var i=0; i < this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnCount$(); i++) {
if (colName != null  && colName.equals$O(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getColumnName$I(i)) ) {
col=i;
break;
}}
if (col > -1) {
var renderer=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getCellRenderer$I$I(0, col);
var c=renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable, value, false, false, 0, col);
if (Clazz.instanceOf(c, "javax.swing.JLabel")) {
var s=(c).getText$().trim$();
return s;
}}return value;
});
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab, "ShiftEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['redoShift','double[]','+undoShift','columnName','String[]']]]

Clazz.newMeth(C$, 'c$$SA$DA$DA',  function (colNames, newShifts, prevShifts) {
Clazz.super_(C$, this);
this.columnName=colNames;
this.redoShift=newShifts;
this.undoShift=prevShifts;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
for (var i=0; i < this.columnName.length; i++) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.columnName[i]);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var dataCol=data;
dataCol.setShift$D(this.undoShift[i]);
if (i == 0) {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].pointIndex > -1 && this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].pointIndex > -1 ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].refreshX$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].refreshX$();
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].getX$() + this.undoShift[0] - this.redoShift[0]);
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].getX$() + this.undoShift[0] - this.redoShift[0]);
}}}}
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshAll$I.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [32768]);
this.b$['org.opensourcephysics.tools.DataToolTab'].shiftEditListener.valueChanged=false;
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
for (var i=0; i < this.columnName.length; i++) {
var data=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.columnName[i]);
if (data != null  && Clazz.instanceOf(data, "org.opensourcephysics.tools.DataColumn") ) {
var dataCol=data;
dataCol.setShift$D(this.redoShift[i]);
if (i == 0) {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].pointIndex > -1 && this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].pointIndex > -1 ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].refreshX$();
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].refreshX$();
} else {
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[0].getX$() + this.redoShift[0] - this.undoShift[0]);
this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].setX$D(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.areaLimits[1].getX$() + this.redoShift[0] - this.undoShift[0]);
}}}}
this.b$['org.opensourcephysics.tools.DataToolTab'].refreshAll$I.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], [32768]);
this.b$['org.opensourcephysics.tools.DataToolTab'].shiftEditListener.valueChanged=false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab, "CrawlerSpinnerModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractSpinnerModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.val=0;
this.delta=1;
this.percentDelta=1;
},1);

C$.$fields$=[['D',['val','delta','percentDelta']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return Double.valueOf$D(this.val);
});

Clazz.newMeth(C$, 'getNextValue$',  function () {
return Double.valueOf$D(this.val + this.delta);
});

Clazz.newMeth(C$, 'getPreviousValue$',  function () {
return Double.valueOf$D(this.val - this.delta);
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
if (value != null ) {
this.val=(value).doubleValue$();
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'refreshDelta$',  function () {
if (this.val != 0 ) {
this.delta=Math.abs(this.val * this.percentDelta / 100);
} else {
if (this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXSpinner.getModel$() === this ) {
var dataset=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.xVar);
if (dataset != null ) {
var range=dataset.getYMax$() - dataset.getYMin$();
this.delta=range * this.percentDelta / 100;
}} else if (this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYSpinner.getModel$() === this ) {
var dataset=this.b$['org.opensourcephysics.tools.DataToolTab'].dataTable.getDataset$S(this.b$['org.opensourcephysics.tools.DataToolTab'].plot.yVar);
if (dataset != null ) {
var range=dataset.getYMax$() - dataset.getYMin$();
this.delta=range * this.percentDelta / 100;
}}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab, "ShiftEditListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.ChangeListener', 'java.awt.event.ActionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastChange=System.currentTimeMillis$();
this.valueChanged=false;
},1);

C$.$fields$=[['Z',['valueChanged'],'J',['lastChange'],'O',['repeatTimer','javax.swing.Timer']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.repeatTimer=Clazz.new_($I$(25,1).c$$I$java_awt_event_ActionListener,[200, this]);
this.repeatTimer.start$();
}, 1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.valueChanged=true;
this.lastChange=System.currentTimeMillis$();
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.valueChanged && Long.$gt((Long.$sub(System.currentTimeMillis$(),this.lastChange)),400 ) ) {
this.valueChanged=false;
if (this.b$['org.opensourcephysics.tools.DataToolTab'].shiftXField.hasFocus$() || this.b$['org.opensourcephysics.tools.DataToolTab'].shiftYField.hasFocus$() ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].postShiftEdit$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
} else if (this.b$['org.opensourcephysics.tools.DataToolTab'].selectedXField.hasFocus$() || this.b$['org.opensourcephysics.tools.DataToolTab'].selectedYField.hasFocus$() ) {
this.b$['org.opensourcephysics.tools.DataToolTab'].postShiftEdit$.apply(this.b$['org.opensourcephysics.tools.DataToolTab'], []);
}}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataToolTab, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var tab=obj;
control.setValue$S$O("name", tab.getName$());
control.setValue$S$O("owner_name", tab.getOwnerName$());
if (!tab.ownedColumns.isEmpty$()) {
var columns=Clazz.array(String, [tab.ownedColumns.size$(), 3]);
var i=0;
for (var key, $key = tab.ownedColumns.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var data=tab.ownedColumns.get$O(key);
columns[i]=Clazz.array(String, -1, [key, data[0], data[1]]);
++i;
}
control.setValue$S$O("owned_columns", columns);
}control.setValue$S$Z("editable", tab.userEditable);
var data=Clazz.new_($I$(26,1));
var functions=Clazz.new_($I$(27,1));
var datasets=tab.dataManager.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var next=datasets.get$I(i);
if (Clazz.instanceOf(next, "org.opensourcephysics.display.DataFunction")) {
functions.add$O(next);
} else {
data.addDataset$org_opensourcephysics_display_Dataset(next);
}}
control.setValue$S$O("data", data);
var paramNames=tab.dataManager.getConstantNames$();
var n=paramNames.size$();
if (n > 0) {
var paramArray=Clazz.array(java.lang.Object, [n, 4]);
var i=0;
for (var name, $name = paramNames.iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
paramArray[i][0]=name;
paramArray[i][1]=tab.dataManager.getConstantValue$S(name);
paramArray[i][2]=tab.dataManager.getConstantExpression$S(name);
paramArray[i][3]=tab.dataManager.getConstantDescription$S(name);
++i;
}
control.setValue$S$O("constants", paramArray);
}if (!functions.isEmpty$()) {
var f=functions.toArray$OA(Clazz.array($I$(28), [0]));
control.setValue$S$O("data_functions", f);
}if (tab.originShiftEnabled) {
control.setValue$S$Z("origin_shifted", tab.originShiftEnabled);
}tab.getCurveFitter$();
if (tab.dataTool.fitBuilder != null  && tab.curveFitter.fit != null  ) {
var fitName=tab.curveFitter.fit.getName$();
var panel=tab.dataTool.fitBuilder.getPanel$S(fitName);
if (panel != null ) {
var fits=Clazz.new_($I$(27,1));
fits.add$O(panel);
control.setValue$S$O("fits", fits);
}control.setValue$S$O("selected_fit", tab.curveFitter.fit.getName$());
}control.setValue$S$Z("autofit", tab.curveFitter.isAutoFit$());
var params=Clazz.array(Double.TYPE, [tab.curveFitter.paramModel.getRowCount$()]);
for (var i=0; i < params.length; i++) {
var val=tab.curveFitter.paramModel.getValueAt$I$I(i, 2);
params[i]=val.doubleValue$();
}
control.setValue$S$O("fit_parameters", params);
control.setValue$S$O("fit_color", tab.curveFitter.color);
control.setValue$S$Z("fit_visible", p$2.isFitterVisible.apply(tab, []));
control.setValue$S$Z("props_visible", tab.propsCheckbox.isSelected$());
control.setValue$S$Z("stats_visible", tab.statsCheckbox.isSelected$());
var loc=tab.splitPanes[0].getDividerLocation$();
control.setValue$S$I("split_pane", loc);
loc=tab.curveFitter.getSplitPane$().getDividerLocation$();
control.setValue$S$I("fit_split_pane", loc);
var cols=tab.dataTable.getModelColumnOrder$();
control.setValue$S$O("column_order", cols);
var hidden=tab.dataTable.getHiddenMarkers$();
control.setValue$S$O("hidden_markers", hidden);
var patternColumns=tab.dataTable.getFormattedColumnNames$();
if (patternColumns.length > 0) {
var patterns=Clazz.new_($I$(27,1));
for (var i=0; i < patternColumns.length; i++) {
var colName=patternColumns[i];
var pattern=tab.dataTable.getFormatPattern$S(colName);
patterns.add$O(Clazz.array(String, -1, [colName, pattern]));
}
control.setValue$S$O("format_patterns", patterns);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var dataTool=control.getObject$S("datatool");
var data=control.getObject$S("data");
if (data == null ) {
return Clazz.new_($I$(18,1).c$$org_opensourcephysics_display_Data$org_opensourcephysics_tools_DataTool,[null, dataTool]);
}for (var next, $next = data.getDatasetsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setXColumnVisible$Z(false);
}
return Clazz.new_($I$(18,1).c$$org_opensourcephysics_display_Data$org_opensourcephysics_tools_DataTool,[data, dataTool]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var tab=obj;
tab.setName$S(control.getString$S("name"));
tab.ownerName=control.getString$S("owner_name");
var columns=control.getObject$S("owned_columns");
if (columns != null ) {
tab.ownedColumns.clear$();
for (var next, $next = 0, $$next = columns; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
var data=Clazz.array(String, -1, [next[1], next[2]]);
tab.ownedColumns.put$O$O(next[0], data);
}
}var constants=control.getObject$S("constants");
if (constants != null ) {
for (var i=0; i < constants.length; i++) {
var name=constants[i][0];
var val=(constants[i][1]).valueOf();
var expression=constants[i][2];
if (constants[i].length >= 4) {
var desc=constants[i][3];
tab.dataManager.setConstant$S$D$S$S(name, val, expression, desc);
} else tab.dataManager.setConstant$S$D$S(name, val, expression);
}
}var it=control.getPropsRaw$().iterator$();
while (it.hasNext$()){
var prop=it.next$();
if (prop.getPropertyName$().equals$O("data_functions")) {
var children=prop.getChildControls$();
for (var i=0; i < children.length; i++) {
var f=Clazz.new_($I$(28,1).c$$org_opensourcephysics_display_DatasetManager,[tab.dataManager]);
children[i].loadObject$O(f);
f.setXColumnVisible$Z(false);
tab.dataManager.addDataset$org_opensourcephysics_display_Dataset(f);
}
var datasets=tab.dataManager.getDatasetsRaw$();
for (var i=0; i < datasets.size$(); i++) {
var d=datasets.get$I(i);
if (Clazz.instanceOf(d, "org.opensourcephysics.display.DataFunction")) {
(d).refreshFunctionData$();
}}
tab.dataTable.refreshTable$I(1);
break;
}}
tab.userEditable=control.getBoolean$S("editable");
var fits=control.getObject$S("fits");
if (fits != null ) {
for (var iter=fits.iterator$(); iter.hasNext$(); ) {
var panel=iter.next$();
tab.dataTool.getFitBuilder$().addPanel$S$org_opensourcephysics_tools_FunctionPanel(panel.getName$(), panel);
}
}tab.getCurveFitter$();
var fitName=control.getString$S("selected_fit");
tab.curveFitter.setSelectedItem$S(fitName);
tab.curveFitter.selectFit$S(fitName);
var params=control.getObject$S("fit_parameters");
if (params != null ) {
for (var i=0; i < params.length; i++) {
tab.curveFitter.setParameterValue$I$D(i, params[i]);
}
}var autofit=control.getBoolean$S("autofit");
tab.curveFitter.setAutoFit$Z(autofit);
var color=control.getObject$S("fit_color");
tab.curveFitter.setColor$java_awt_Color(color);
if (control.getBoolean$S("fit_visible")) tab.showFitterAction.actionPerformed$java_awt_event_ActionEvent(null);
var vis=control.getBoolean$S("stats_visible");
tab.statsCheckbox.setSelected$Z(vis);
var loc=control.getInt$S("split_pane");
var fitLoc=control.getInt$S("fit_split_pane");
var cols=control.getObject$S("column_order");
tab.dataTable.setModelColumnOrder$IA(cols);
if (cols == null ) {
var names=control.getObject$S("working_columns");
if (names != null ) {
tab.dataTable.setWorkingColumns$S$S(names[0], names[1]);
}}var hidden=control.getObject$S("hidden_markers");
tab.dataTable.hideMarkers$SA(hidden);
var patterns=control.getObject$S("format_patterns");
if (patterns != null ) {
for (var iter=patterns.iterator$(); iter.hasNext$(); ) {
var next=iter.next$();
tab.dataTable.setFormatPattern$S$S(next[0], next[1]);
}
}var origin_shifted=control.getBoolean$S("origin_shifted");
var runner=((P$.DataToolTab$Loader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataToolTab$Loader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var a=p$2.isFitterVisible.apply(this.$finals$.tab, []) ? this.$finals$.tab.showFitterAction : this.$finals$.tab.hideFitterAction;
a.actionPerformed$java_awt_event_ActionEvent(null);
this.$finals$.tab.propsAndStatsAction.actionPerformed$java_awt_event_ActionEvent(null);
this.$finals$.tab.splitPanes[0].setDividerLocation$I(this.$finals$.loc);
this.$finals$.tab.curveFitter.getSplitPane$().setDividerLocation$I(this.$finals$.fitLoc);
if (this.$finals$.origin_shifted) {
this.$finals$.tab.originShiftCheckbox.doClick$I(0);
if (this.$finals$.params != null ) {
for (var i=0; i < this.$finals$.params.length; i++) {
this.$finals$.tab.curveFitter.setParameterValue$I$D(i, this.$finals$.params[i]);
}
}}this.$finals$.tab.dataTable.refreshTable$I(32768);
this.$finals$.tab.propsTable.refreshTable$();
this.$finals$.tab.tabChanged$Z(false);
});
})()
), Clazz.new_(P$.DataToolTab$Loader$1.$init$,[this, {fitLoc:fitLoc,loc:loc,origin_shifted:origin_shifted,tab:tab,params:params}]));
$I$(29).invokeLater$Runnable(runner);
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
