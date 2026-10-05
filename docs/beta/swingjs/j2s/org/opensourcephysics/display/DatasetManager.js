(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.display.DatasetManager','java.util.Collection','java.util.ArrayList','java.util.TreeMap',['org.opensourcephysics.display.DatasetManager','.Model'],'org.opensourcephysics.display.TeXParser','javax.swing.event.TableModelEvent','StringBuffer','org.opensourcephysics.display.Dataset','org.opensourcephysics.display.DisplayColors',['org.opensourcephysics.display.DatasetManager','.Loader'],'org.opensourcephysics.display.GUIUtils','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.tools.FunctionTool','org.opensourcephysics.numerics.SuryonoParser']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DatasetManager", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['org.opensourcephysics.display.DataTable','.DataModel'], ['org.opensourcephysics.display.Measurable', 'org.opensourcephysics.display.LogMeasurable', 'org.opensourcephysics.display.Data']);
C$.$classes$=[['Model',1],['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.datasets=Clazz.new_($I$(3,1));
this.stride=1;
this.linked=false;
this.xColumnName="x";
this.yColumnName="y";
this.constantNames=Clazz.new_($I$(3,1));
this.constantValues=Clazz.new_($I$(4,1));
this.constantExpressions=Clazz.new_($I$(4,1));
this.constantDescriptions=Clazz.new_($I$(4,1));
this.name="";
this.datasetID=this.hashCode$();
},1);

C$.$fields$=[['Z',['connected','sorted','linked'],'I',['markerShape','stride','datasetID'],'S',['xColumnName','yColumnName','name'],'O',['model','org.opensourcephysics.display.DatasetManager.Model','datasets','java.util.ArrayList','+constantNames','constantValues','java.util.Map','+constantExpressions','+constantDescriptions','dsFound','org.opensourcephysics.display.Dataset','+frameDataset']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z$Z$Z$I.apply(this, [false, false, false, 2]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (linked) {
C$.c$$Z$Z$Z$I.apply(this, [false, false, linked, 2]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z',  function (_connected, _sorted) {
C$.c$$Z$Z$Z$I.apply(this, [_connected, _sorted, false, 2]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z$Z$I',  function (_connected, _sorted, _linked, _markerShape) {
Clazz.super_(C$, this);
this.connected=_connected;
this.sorted=_sorted;
this.markerShape=_markerShape;
this.linked=_linked;
this.model=Clazz.new_($I$(5,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'setXPointsLinked$Z',  function (_linked) {
this.linked=_linked;
for (var i=1; i < this.datasets.size$(); i++) {
var dataset=this.datasets.get$I(i);
dataset.setXColumnVisible$Z(!this.linked);
}
});

Clazz.newMeth(C$, 'isXPointsLinked$',  function () {
return this.linked;
});

Clazz.newMeth(C$, 'setSorted$I$Z',  function (datasetIndex, _sorted) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setSorted$Z(_sorted);
});

Clazz.newMeth(C$, 'setSorted$Z',  function (_sorted) {
this.sorted=_sorted;
for (var i=0; i < this.datasets.size$(); i++) {
(this.datasets.get$I(i)).setSorted$Z(_sorted);
}
});

Clazz.newMeth(C$, 'setConnected$I$Z',  function (datasetIndex, _connected) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setConnected$Z(_connected);
});

Clazz.newMeth(C$, 'setConnected$Z',  function (_connected) {
this.connected=_connected;
for (var i=0; i < this.datasets.size$(); i++) {
(this.datasets.get$I(i)).setConnected$Z(_connected);
}
});

Clazz.newMeth(C$, 'setStride$I$I',  function (datasetIndex, stride) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setStride$I(stride);
});

Clazz.newMeth(C$, 'setStride$I',  function (_stride) {
this.stride=_stride;
for (var i=0; i < this.datasets.size$(); i++) {
(this.datasets.get$I(i)).setStride$I(this.stride);
}
});

Clazz.newMeth(C$, 'setMarkerColor$I$java_awt_Color',  function (datasetIndex, _markerColor) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setMarkerColor$java_awt_Color(_markerColor);
});

Clazz.newMeth(C$, 'setMarkerColor$I$java_awt_Color$java_awt_Color',  function (datasetIndex, fillColor, edgeColor) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setMarkerColor$java_awt_Color$java_awt_Color(fillColor, edgeColor);
});

Clazz.newMeth(C$, 'setMarkerShape$I$I',  function (datasetIndex, _markerShape) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setMarkerShape$I(_markerShape);
});

Clazz.newMeth(C$, 'setCustomMarker$I$java_awt_Shape',  function (datasetIndex, marker) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setCustomMarker$java_awt_Shape(marker);
});

Clazz.newMeth(C$, 'setXColumnVisible$I$Z',  function (datasetIndex, visible) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setXColumnVisible$Z(visible);
});

Clazz.newMeth(C$, 'setYColumnVisible$I$Z',  function (datasetIndex, visible) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setYColumnVisible$Z(visible);
});

Clazz.newMeth(C$, 'setMarkerSize$I$I',  function (datasetIndex, _markerSize) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setMarkerSize$I(_markerSize);
});

Clazz.newMeth(C$, 'setLineColor$I$java_awt_Color',  function (datasetIndex, _lineColor) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setLineColor$java_awt_Color(_lineColor);
});

Clazz.newMeth(C$, 'getLineColors$',  function () {
return null;
});

Clazz.newMeth(C$, 'getFillColors$',  function () {
return null;
});

Clazz.newMeth(C$, 'setXYColumnNames$I$S$S$S',  function (datasetIndex, xColumnName, yColumnName, datsetName) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setXYColumnNames$S$S$S(xColumnName, yColumnName, datsetName);
});

Clazz.newMeth(C$, 'setXYColumnNames$I$S$S',  function (datasetIndex, xColumnName, yColumnName) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.setXYColumnNames$S$S(xColumnName, yColumnName);
if ("frame".equals$O(yColumnName)) this.frameDataset=dataset;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
if (d.isMeasured$()) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'setID$I',  function (id) {
this.datasetID=id;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.datasetID;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
var xmin=1.7976931348623157E308;
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
if (d.isMeasured$()) {
xmin=Math.min(xmin, d.getXMin$());
}}
return xmin;
});

Clazz.newMeth(C$, 'getXMinLogscale$',  function () {
var xmin=1.7976931348623157E308;
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
if (d.isMeasured$()) {
xmin=Math.min(xmin, d.getXMinLogscale$());
}}
return Math.max(1.4E-45, xmin);
});

Clazz.newMeth(C$, 'getXMax$',  function () {
var xmax=-1.7976931348623157E308;
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
if (d.isMeasured$()) {
xmax=Math.max(xmax, d.getXMax$());
}}
return xmax;
});

Clazz.newMeth(C$, 'getXMaxLogscale$',  function () {
var xmax=-1.7976931348623157E308;
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
if (d.isMeasured$()) {
xmax=Math.max(xmax, d.getXMaxLogscale$());
}}
return Math.max(1.4E-45, xmax);
});

Clazz.newMeth(C$, 'getYMin$',  function () {
var ymin=1.7976931348623157E308;
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
if (d.isMeasured$()) {
ymin=Math.min(ymin, d.getYMin$());
}}
return ymin;
});

Clazz.newMeth(C$, 'getYMinLogscale$',  function () {
var ymin=1.7976931348623157E308;
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
if (d.isMeasured$()) {
ymin=Math.min(ymin, d.getYMinLogscale$());
}}
return Math.max(1.4E-45, ymin);
});

Clazz.newMeth(C$, 'getYMax$',  function () {
var ymax=-1.7976931348623157E308;
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
if (d.isMeasured$()) {
ymax=Math.max(ymax, d.getYMax$());
}}
return ymax;
});

Clazz.newMeth(C$, 'getYMaxLogscale$',  function () {
var ymax=-1.7976931348623157E308;
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
if (d.isMeasured$()) {
ymax=Math.max(ymax, d.getYMaxLogscale$());
}}
return Math.max(1.4E-45, ymax);
});

Clazz.newMeth(C$, 'getXPoints$I',  function (datasetIndex) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
return dataset.getXPoints$();
});

Clazz.newMeth(C$, 'getYPoints$I',  function (datasetIndex) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
return dataset.getYPoints$();
});

Clazz.newMeth(C$, 'isSorted$I',  function (datasetIndex) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
return dataset.isSorted$();
});

Clazz.newMeth(C$, 'isConnected$I',  function (datasetIndex) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
return dataset.isConnected$();
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
var columnCount=0;
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
if (d == null ) continue;
columnCount+=d.getColumnCount$();
}
return columnCount;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
var rowCount=0;
for (var i=0; i < this.datasets.size$(); i++) {
var d=this.datasets.get$I(i);
rowCount=Math.max(rowCount, d.getRowCount$());
}
return rowCount;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
if (name != null ) {
this.name=$I$(6).parseTeX$S(name);
}});

Clazz.newMeth(C$, 'getColumnName$I',  function (tableColumnIndex) {
if (this.datasets.size$() == 0) {
return null;
}var ds=p$1.find$I.apply(this, [tableColumnIndex]);
return (ds == null  ? null : ds.getColumnName$I(ds.foundColumn));
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
if (this.datasets.size$() == 0 || col < 0 ) {
return NaN;
}var ds=p$1.find$I.apply(this, [col]);
return (ds == null  || row >= ds.getRowCount$()  ? NaN : ds.getValueAt$I$I(row, ds.foundColumn));
});

Clazz.newMeth(C$, 'find$I',  function (icol) {
if (icol >= 0) for (var i=0, ncol=0, n=this.datasets.size$(); i < n; i++) {
var ds=this.datasets.get$I(i);
var nVis=ds.getColumnCount$();
if (ncol + nVis > icol) {
ds.foundColumn=icol - ncol;
return this.dsFound=ds;
}ncol+=nVis;
}
return this.dsFound=null;
}, p$1);

Clazz.newMeth(C$, 'append$I$D$D',  function (datasetIndex, x, y) {
this.checkDatasetIndex$I(datasetIndex);
this.datasets.get$I(datasetIndex).append$D$D(x, y);
});

Clazz.newMeth(C$, 'append$I$D$D$D$D',  function (datasetIndex, x, y, delx, dely) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.append$D$D$D$D(x, y, delx, dely);
});

Clazz.newMeth(C$, 'append$I$DA$DA',  function (datasetIndex, xpoints, ypoints) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.append$DA$DA(xpoints, ypoints);
});

Clazz.newMeth(C$, 'append$I$DA$DA$DA$DA',  function (datasetIndex, xpoints, ypoints, delx, dely) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.append$DA$DA$DA$DA(xpoints, ypoints, delx, dely);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
for (var i=0; i < this.datasets.size$(); i++) {
(this.datasets.get$I(i)).draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(drawingPanel, g);
}
});

Clazz.newMeth(C$, 'clear$I',  function (datasetIndex) {
this.checkDatasetIndex$I(datasetIndex);
var dataset=this.datasets.get$I(datasetIndex);
dataset.clear$();
});

Clazz.newMeth(C$, 'clear$',  function () {
for (var i=0; i < this.datasets.size$(); i++) {
this.datasets.get$I(i).clear$();
}
});

Clazz.newMeth(C$, 'removeDatasets$',  function () {
this.clear$();
this.datasets.clear$();
this.model.fireTableChanged$javax_swing_event_TableModelEvent(Clazz.new_($I$(7,1).c$$javax_swing_table_TableModel$I$I$I$I,[this.model, 0, 2147483647, -1, -1]));
});

Clazz.newMeth(C$, 'getDataset$I',  function (datasetIndex) {
this.checkDatasetIndex$I(datasetIndex);
return this.datasets.get$I(datasetIndex);
});

Clazz.newMeth(C$, 'getDatasets$',  function () {
return Clazz.new_($I$(3,1).c$$java_util_Collection,[this.datasets]);
});

Clazz.newMeth(C$, 'getDatasetsRaw$',  function () {
return this.datasets;
});

Clazz.newMeth(C$, 'getDataList$',  function () {
return null;
});

Clazz.newMeth(C$, 'getColumnNames$',  function () {
var n=this.datasets.size$();
var names=Clazz.array(String, [n]);
for (var i=0; i < n; i++) {
if (this.datasets.get$I(i) != null ) {
names[i]=this.datasets.get$I(i).getName$();
}}
return names;
});

Clazz.newMeth(C$, 'getData2D$',  function () {
if (this.isXPointsLinked$()) {
var count=this.datasets.size$();
var index=0;
for (var next, $next = this.datasets.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
index=Math.max(index, next.getIndex$());
}
var data=Clazz.array(Double.TYPE, [count + 1, index]);
var src=this.datasets.get$I(0);
var d=src.getXPointsRaw$();
var n=src.getIndex$();
System.arraycopy$O$I$O$I$I(d, 0, data[0], 0, n);
for (var i=0; i < count; i++) {
src=this.datasets.get$I(i);
d=(src.isShifted$() ? src.getYPoints$() : src.getYPointsRaw$());
System.arraycopy$O$I$O$I$I(d, 0, data[i + 1], 0, n);
}
return data;
}return null;
});

Clazz.newMeth(C$, 'getData3D$',  function () {
return null;
});

Clazz.newMeth(C$, 'addDataset$org_opensourcephysics_display_Dataset',  function (dataset) {
if (this.linked && !this.datasets.isEmpty$() ) {
dataset.setXColumnVisible$Z(false);
}var n=this.datasets.size$();
this.datasets.add$O(dataset);
if ("frame".equals$O(dataset.getYColumnName$())) {
this.frameDataset=dataset;
}this.model.fireTableChanged$javax_swing_event_TableModelEvent(Clazz.new_($I$(7,1).c$$javax_swing_table_TableModel$I$I$I$I,[this.model, 0, 2147483647, n, 1]));
return n;
});

Clazz.newMeth(C$, 'removeDataset$I',  function (index) {
if ((index < 0) || (index > this.datasets.size$() - 1) ) {
return null;
}var d=this.datasets.remove$I(index);
this.model.fireTableChanged$javax_swing_event_TableModelEvent(Clazz.new_($I$(7,1).c$$javax_swing_table_TableModel$I$I$I$I,[this.model, 0, 2147483647, index, -1]));
return d;
});

Clazz.newMeth(C$, 'getDatasetIndex$S',  function (yColumnName) {
for (var i=0; i < this.datasets.size$(); i++) {
if (this.datasets.get$I(i).getYColumnName$().equals$O(yColumnName)) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'getConstantNames$',  function () {
return this.constantNames;
});

Clazz.newMeth(C$, 'getConstantValue$S',  function (name) {
return this.constantValues.get$O(name);
});

Clazz.newMeth(C$, 'getConstantExpression$S',  function (name) {
return this.constantExpressions.get$O(name);
});

Clazz.newMeth(C$, 'getConstantDescription$S',  function (name) {
return this.constantDescriptions.get$O(name);
});

Clazz.newMeth(C$, 'setConstant$S$D$S',  function (name, val, expression) {
if (!this.constantNames.contains$O(name)) this.constantNames.add$O(name);
this.constantValues.put$O$O(name, Double.valueOf$D(val));
this.constantExpressions.put$O$O(name, expression);
});

Clazz.newMeth(C$, 'setConstant$S$D$S$S',  function (name, val, expression, desc) {
if (!this.constantNames.contains$O(name)) this.constantNames.add$O(name);
this.constantValues.put$O$O(name, Double.valueOf$D(val));
this.constantExpressions.put$O$O(name, expression);
this.constantDescriptions.put$O$O(name, desc);
});

Clazz.newMeth(C$, 'clearConstant$S',  function (name) {
this.constantNames.remove$O(name);
this.constantValues.remove$O(name);
this.constantExpressions.remove$O(name);
this.constantDescriptions.remove$O(name);
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.datasets.size$() == 0) {
return "No data in datasets.";
}var b=Clazz.new_($I$(8,1));
for (var i=0; i < this.datasets.size$(); i++) {
b.append$S("Dataset ");
b.append$I(i);
b.append$C("\n");
b.append$S(this.datasets.get$I(i).toString());
}
return b.toString();
});

Clazz.newMeth(C$, 'setXYColumnNames$S$S',  function (_xColumnName, _yColumnName) {
this.xColumnName=_xColumnName;
this.yColumnName=_yColumnName;
for (var i=0, size=this.datasets.size$(); i < size; i++) {
(this.datasets.get$I(i)).setXYColumnNames$S$S(_xColumnName, _yColumnName);
}
});

Clazz.newMeth(C$, 'checkDatasetIndex$I',  function (datasetIndex) {
while (datasetIndex >= this.datasets.size$()){
var d=Clazz.new_([$I$(10).getMarkerColor$I(datasetIndex), $I$(10).getLineColor$I(datasetIndex), this.connected],$I$(9,1).c$$java_awt_Color$java_awt_Color$Z);
if (this.linked && (this.datasets.size$() > 0) ) {
d.setXColumnVisible$Z(false);
}d.setSorted$Z(this.sorted);
d.setXYColumnNames$S$S(this.xColumnName, this.yColumnName);
d.setMarkerShape$I(this.markerShape);
this.datasets.add$O(d);
}
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(11,1));
}, 1);

Clazz.newMeth(C$, 'getFrameDataset$',  function () {
return this.frameDataset;
});

Clazz.newMeth(C$, 'isDuplicateName$org_opensourcephysics_display_Dataset$S',  function (d, name) {
if (this.datasets.isEmpty$()) {
return false;
}if (this.getDataset$I(0).getXColumnName$().equals$O(name)) {
return true;
}name=$I$(6).removeSubscripting$S(name);
for (var i=0, n=this.datasets.size$(); i < n; i++) {
var next=this.datasets.get$I(i);
if (next !== d  && $I$(6,"removeSubscripting$S",[next.getYColumnName$()]).equals$O(name) ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getUniqueYColumnName$java_awt_Component$org_opensourcephysics_display_Dataset$S',  function (c, d, proposed) {
proposed=$I$(12,"showInputDialog$java_awt_Component$S$S$I$S",[c, $I$(13).getString$S("DataToolTab.Dialog.NameColumn.Message"), $I$(13).getString$S("DataToolTab.Dialog.NameColumn.Title"), 3, this.uniquifyColumnName$org_opensourcephysics_display_Dataset$S(d, proposed)]);
if (proposed == null  || (proposed=proposed.trim$()).length$() == 0 ) {
return null;
}proposed=proposed.replaceAll$S$S(" ", "");
var containsOperators=$I$(14,"arrayContains$SA$S",[$I$(14).parserOperators, proposed]);
var tries=0;
var maxTries=3;
while (tries < maxTries){
++tries;
if (this.isDuplicateName$org_opensourcephysics_display_Dataset$S(d, proposed)) {
var response=$I$(12,"showInputDialog$java_awt_Component$S$S$I$S",[c, "\"" + proposed + "\" " + $I$(13).getString$S("DataFunctionPanel.Dialog.DuplicateName.Message") , $I$(13).getString$S("DataFunctionPanel.Dialog.DuplicateName.Title"), 2, proposed]);
proposed=(response == null ) ? null : response.toString();
}if ((proposed == null ) || proposed.equals$O("") ) {
return null;
}if ($I$(14).isReservedName$S(proposed)) {
var response=$I$(12,"showInputDialog$java_awt_Component$S$S$I$S",[c, "\"" + proposed + "\" " + $I$(13).getString$S("DataToolTab.Dialog.ReservedName.Message") , $I$(13).getString$S("DataToolTab.Dialog.ReservedName.Title"), 2, proposed]);
proposed=(response == null ) ? null : response.toString();
}if ((proposed == null ) || proposed.equals$O("") ) {
return null;
}containsOperators=$I$(14,"arrayContains$SA$S",[$I$(14).parserOperators, proposed]);
if (containsOperators) {
var response=$I$(12,"showInputDialog$java_awt_Component$S$S$I$S",[c, $I$(13).getString$S("DataToolTab.Dialog.OperatorInName.Message"), $I$(13).getString$S("DataToolTab.Dialog.OperatorInName.Title"), 2, proposed]);
proposed=(response == null ) ? null : response.toString();
}if ((proposed == null ) || proposed.equals$O("") ) {
return null;
}}
return (containsOperators ? null : this.uniquifyColumnName$org_opensourcephysics_display_Dataset$S(d, proposed));
});

Clazz.newMeth(C$, 'uniquifyColumnName$org_opensourcephysics_display_Dataset$S',  function (d, name) {
if (name == null ) return null;
var i=0;
if (!Double.isNaN$D($I$(15).getNumber$S(name))) {
name=$I$(13).getString$S("DataToolTab.NewColumn.Name");
}var subscriptRemoved=false;
if (this.isDuplicateName$org_opensourcephysics_display_Dataset$S(d, name)) {
var subscript=$I$(6).getSubscript$S(name);
var di;
if ((di=$I$(15).getNumber$S(subscript)) == (di|0) ) {
name=$I$(6).removeSubscript$S(name);
subscriptRemoved=true;
}}while (subscriptRemoved || this.isDuplicateName$org_opensourcephysics_display_Dataset$S(d, name) || $I$(14).isReservedName$S(name)  ){
name=$I$(6).addSubscript$S$S(name, "" + ++i);
subscriptRemoved=false;
}
return name;
});

Clazz.newMeth(C$, 'get$S$I$I',  function ($var, row, col) {
return this.getDataset$I(this.getDatasetIndex$S($var)).getValueAt$I$I(row, col);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatasetManager, "Model", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.display.DataTable','.OSPTableModel']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isFoundOrdered$',  function () {
return (this.b$['org.opensourcephysics.display.DatasetManager'].dsFound == null  || this.b$['org.opensourcephysics.display.DatasetManager'].dsFound.model.isFoundOrdered$() );
});

Clazz.newMeth(C$, 'getStride$',  function () {
return this.b$['org.opensourcephysics.display.DatasetManager'].stride;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.b$['org.opensourcephysics.display.DatasetManager'].getRowCount$.apply(this.b$['org.opensourcephysics.display.DatasetManager'], []);
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.b$['org.opensourcephysics.display.DatasetManager'].getColumnCount$.apply(this.b$['org.opensourcephysics.display.DatasetManager'], []);
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (rowIndex, columnIndex) {
return Double.valueOf$D(this.b$['org.opensourcephysics.display.DatasetManager'].getValueAt$I$I.apply(this.b$['org.opensourcephysics.display.DatasetManager'], [rowIndex, columnIndex]));
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (columnIndex) {
return Clazz.getClass(Double);
});

Clazz.newMeth(C$, 'getColumnName$I',  function (column) {
return this.b$['org.opensourcephysics.display.DatasetManager'].getColumnName$I.apply(this.b$['org.opensourcephysics.display.DatasetManager'], [column]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatasetManager, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var dsm=obj;
control.setValue$S$Z("connected", dsm.connected);
control.setValue$S$Z("sorted", dsm.sorted);
control.setValue$S$I("maker_shape", dsm.markerShape);
control.setValue$S$I("stride", dsm.stride);
control.setValue$S$Z("linked", dsm.linked);
control.setValue$S$O("x_column_name", dsm.xColumnName);
control.setValue$S$O("y_column_name", dsm.yColumnName);
control.setValue$S$O("data_name", dsm.name);
control.setValue$S$O("datasets", dsm.datasets);
control.setValue$S$I("id", dsm.datasetID);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var dsm=obj;
dsm.connected=control.getBoolean$S("connected");
dsm.sorted=control.getBoolean$S("sorted");
dsm.markerShape=control.getInt$S("maker_shape");
dsm.stride=control.getInt$S("stride");
dsm.linked=control.getBoolean$S("linked");
dsm.xColumnName=control.getString$S("x_column_name");
dsm.yColumnName=control.getString$S("y_column_name");
dsm.setName$S(control.getString$S("data_name"));
if (control.getPropertyNamesRaw$().contains$O("id")) {
dsm.setID$I(control.getInt$S("id"));
}dsm.removeDatasets$();
var datasets=Clazz.getClass($I$(2),['add$O','addAll$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','hashCode$','isEmpty$','iterator$','parallelStream$','remove$O','removeAll$java_util_Collection','removeIf$java_util_function_Predicate','retainAll$java_util_Collection','size$','spliterator$','stream$','toArray$','toArray$OA','toArray$java_util_function_IntFunction']).cast$O(control.getObject$S("datasets"));
if (datasets != null ) {
var it=datasets.iterator$();
while (it.hasNext$()){
dsm.datasets.add$O(it.next$());
}
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
