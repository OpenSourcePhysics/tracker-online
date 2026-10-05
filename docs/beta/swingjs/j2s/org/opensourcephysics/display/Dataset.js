(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'javax.swing.event.TableModelEvent','org.opensourcephysics.display.Dataset',['java.awt.geom.Rectangle2D','.Double'],'java.util.BitSet','java.util.ArrayList','java.awt.geom.AffineTransform','java.awt.Color','java.awt.geom.GeneralPath',['org.opensourcephysics.display.Dataset','.Model'],'org.opensourcephysics.display.TeXParser',['org.opensourcephysics.display.Dataset','.ErrorBar'],'java.io.BufferedReader','java.io.FileReader','java.util.StringTokenizer','java.io.PrintWriter','java.io.BufferedWriter','java.io.FileWriter','org.opensourcephysics.display.OSPRuntime',['java.awt.geom.Ellipse2D','.Double'],'StringBuffer','java.util.Arrays',['org.opensourcephysics.display.Dataset','.Loader'],'org.opensourcephysics.controls.XMLControlElement']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Dataset", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['org.opensourcephysics.display.DataTable','.DataModel'], ['org.opensourcephysics.display.Measurable', 'org.opensourcephysics.display.LogMeasurable', 'org.opensourcephysics.display.Data']);
C$.$classes$=[['Model',1],['ErrorBar',0],['Loader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.datasetID=this.hashCode$();
this.columnID=0;
this.foundColumn=0;
this.xpoints=Clazz.array(Double.TYPE, [10]);
this.ypoints=Clazz.array(Double.TYPE, [10]);
this.sorted=false;
this.update=++C$.id;
this.markerSize=2;
this.markerShape=2;
this.name=null;
this.bsColVis=Clazz.new_($I$(4,1));
this.visible=true;
this.maxPoints=C$.defaultMaxPoints;
this.errorBars=Clazz.new_($I$(5,1));
this.customMarker=Clazz.new_([(-this.markerSize/2|0), (-this.markerSize/2|0), this.markerSize, this.markerSize],$I$(3,1).c$$D$D$D$D);
this.trD=Clazz.new_($I$(6,1));
},1);

C$.$fields$=[['Z',['sorted','connected','visible'],'D',['shift','xmax','ymax','xmin','ymin','xmaxLogscale','ymaxLogscale','xminLogscale','yminLogscale'],'I',['datasetID','columnID','foundColumn','index','update','markerSize','markerShape','maxPoints'],'S',['name','xColumnName','yColumnName','xColumnDescription','yColumnDescription'],'O',['model','org.opensourcephysics.display.Dataset.Model','xpoints','double[]','+ypoints','generalPath','java.awt.geom.GeneralPath','lineColor','java.awt.Color','+fillColor','+edgeColor','+errorBarColor','bsColVis','java.util.BitSet','errorBars','java.util.ArrayList','customMarker','java.awt.Shape','+myShape','pixelTransform','java.awt.geom.AffineTransform','+trD']]
,['D',['maxPointsMultiplier'],'I',['id','defaultMaxPoints'],'O',['tmpRect','java.awt.geom.Rectangle2D.Double']]]

Clazz.newMeth(C$, 'updateID',  function () {
this.update=++C$.id;
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_Color$java_awt_Color$Z.apply(this, [$I$(7).black, $I$(7).black, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (_markerColor) {
C$.c$$java_awt_Color$java_awt_Color$Z.apply(this, [_markerColor, $I$(7).black, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color$Z',  function (markerColor, _lineColor, _connected) {
Clazz.super_(C$, this);
this.fillColor=markerColor;
this.edgeColor=markerColor;
this.errorBarColor=markerColor;
this.lineColor=_lineColor;
this.connected=_connected;
this.markerSize=2;
this.xColumnName="x";
this.yColumnName="y";
this.generalPath=Clazz.new_($I$(8,1));
this.index=0;
this.bsColVis.set$I$I(0, 2);
this.clear$();
this.model=Clazz.new_($I$(9,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'set$DA$DA',  function (x, y) {
this.clear$();
this.append$DA$DA$I(x, y, y.length);
return this;
});

Clazz.newMeth(C$, 'setID$I',  function (id) {
this.datasetID=id;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.datasetID;
});

Clazz.newMeth(C$, 'setColumnID$I',  function (id) {
this.columnID=id;
});

Clazz.newMeth(C$, 'getColumnID$',  function () {
return this.columnID;
});

Clazz.newMeth(C$, 'setSorted$Z',  function (_sorted) {
this.sorted=_sorted;
if (this.sorted) {
this.insertionSort$();
}});

Clazz.newMeth(C$, 'setConnected$Z',  function (_connected) {
this.connected=_connected;
if (this.connected) {
this.recalculatePath$();
}});

Clazz.newMeth(C$, 'setMarkerColor$java_awt_Color',  function (markerColor) {
this.fillColor=markerColor;
this.edgeColor=markerColor;
this.errorBarColor=markerColor;
});

Clazz.newMeth(C$, 'setMarkerColor$java_awt_Color$java_awt_Color',  function (_fillColor, _edgeColor) {
this.fillColor=_fillColor;
this.edgeColor=_edgeColor;
this.errorBarColor=_edgeColor;
});

Clazz.newMeth(C$, 'setMarkerColor$java_awt_Color$java_awt_Color$java_awt_Color',  function (_fillColor, _edgeColor, _errorBarColor) {
this.fillColor=_fillColor;
this.edgeColor=_edgeColor;
this.errorBarColor=_errorBarColor;
});

Clazz.newMeth(C$, 'getFillColor$',  function () {
return this.fillColor;
});

Clazz.newMeth(C$, 'getFillColors$',  function () {
return Clazz.array($I$(7), -1, [$I$(7).BLACK, this.fillColor]);
});

Clazz.newMeth(C$, 'getEdgeColor$',  function () {
return this.edgeColor;
});

Clazz.newMeth(C$, 'getLineColor$',  function () {
return this.lineColor;
});

Clazz.newMeth(C$, 'getLineColors$',  function () {
return Clazz.array($I$(7), -1, [$I$(7).BLACK, this.lineColor]);
});

Clazz.newMeth(C$, 'setCustomMarker$java_awt_Shape',  function (marker) {
this.customMarker=marker;
if (this.customMarker == null ) {
this.markerShape=2;
this.customMarker=Clazz.new_([(-this.markerSize/2|0), (-this.markerSize/2|0), this.markerSize, this.markerSize],$I$(3,1).c$$D$D$D$D);
} else {
this.markerShape=-1;
}});

Clazz.newMeth(C$, 'setMarkerShape$I',  function (_markerShape) {
this.markerShape=_markerShape;
});

Clazz.newMeth(C$, 'getMarkerShape$',  function () {
return this.markerShape;
});

Clazz.newMeth(C$, 'setMarkerSize$I',  function (_markerSize) {
this.markerSize=_markerSize;
});

Clazz.newMeth(C$, 'setMaximumPoints$I',  function (maxPoints) {
this.maxPoints=maxPoints;
});

Clazz.newMeth(C$, 'getMarkerSize$',  function () {
return this.markerSize;
});

Clazz.newMeth(C$, 'setLineColor$java_awt_Color',  function (_lineColor) {
this.lineColor=_lineColor;
});

Clazz.newMeth(C$, 'setXYColumnNames$S$S',  function (_xColumnName, _yColumnName) {
this.xColumnName=$I$(10).parseTeX$S(_xColumnName);
this.yColumnName=$I$(10).parseTeX$S(_yColumnName);
});

Clazz.newMeth(C$, 'setXYColumnNames$S$S$S',  function (xColumnName, yColumnName, name) {
this.setXYColumnNames$S$S(xColumnName, yColumnName);
this.name=$I$(10).parseTeX$S(name);
});

Clazz.newMeth(C$, 'getXColumnName$',  function () {
return this.xColumnName;
});

Clazz.newMeth(C$, 'getYColumnName$',  function () {
return this.yColumnName;
});

Clazz.newMeth(C$, 'getXColumnDescription$',  function () {
return this.xColumnDescription;
});

Clazz.newMeth(C$, 'setXColumnDescription$S',  function (desc) {
this.xColumnDescription=desc;
});

Clazz.newMeth(C$, 'getYColumnDescription$',  function () {
return this.yColumnDescription;
});

Clazz.newMeth(C$, 'setYColumnDescription$S',  function (desc) {
this.yColumnDescription=desc;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getDataList$',  function () {
return null;
});

Clazz.newMeth(C$, 'getColumnNames$',  function () {
return Clazz.array(String, -1, [this.xColumnName, this.yColumnName]);
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
if (this.visible) {
return this.ymin < 1.7976931348623157E308 ;
}return false;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xmin;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xmax;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.ymin;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.ymax;
});

Clazz.newMeth(C$, 'getXMinLogscale$',  function () {
return this.xminLogscale;
});

Clazz.newMeth(C$, 'getXMaxLogscale$',  function () {
return this.xmaxLogscale;
});

Clazz.newMeth(C$, 'getYMinLogscale$',  function () {
return this.yminLogscale;
});

Clazz.newMeth(C$, 'getYMaxLogscale$',  function () {
return this.ymaxLogscale;
});

Clazz.newMeth(C$, 'getPoints$',  function () {
var temp=Clazz.array(Double.TYPE, [this.index, 2]);
var xValues=this.xpoints;
var yValues=this.ypoints;
var shift=(this.isShifted$() ? this.shift : 0);
for (var i=0; i < this.index; i++) {
temp[i]=Clazz.array(Double.TYPE, -1, [xValues[i], yValues[i] + shift]);
}
return temp;
});

Clazz.newMeth(C$, 'isShifted$',  function () {
return false;
});

Clazz.newMeth(C$, 'setShifted$Z',  function (shifted) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setShift$D',  function (shift) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getShift$',  function () {
return 0;
});

Clazz.newMeth(C$, 'setShiftedValue$I$D',  function (i, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getData2D$',  function () {
var data=Clazz.array(Double.TYPE, [2, this.index]);
data[0]=this.getXPoints$();
data[1]=this.getYPoints$();
return data;
});

Clazz.newMeth(C$, 'getData3D$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDatasets$',  function () {
var list=Clazz.new_($I$(5,1));
list.add$O(this);
return list;
});

Clazz.newMeth(C$, 'getXPoints$',  function () {
var temp=Clazz.array(Double.TYPE, [this.index]);
System.arraycopy$O$I$O$I$I(this.xpoints, 0, temp, 0, this.index);
return temp;
});

Clazz.newMeth(C$, 'getXPointsRaw$',  function () {
return this.xpoints;
});

Clazz.newMeth(C$, 'getYShifted$I',  function (i) {
return (this.isShifted$() ? this.ypoints[i] + this.shift : this.ypoints[i]);
});

Clazz.newMeth(C$, 'getYPoints$',  function () {
var temp=Clazz.array(Double.TYPE, [this.index]);
if (this.isShifted$()) {
for (var i=0; i < this.index; i++) {
temp[i]=this.ypoints[i] + this.shift;
}
} else {
System.arraycopy$O$I$O$I$I(this.ypoints, 0, temp, 0, this.index);
}return temp;
});

Clazz.newMeth(C$, 'getYPointsRaw$',  function () {
return (this.isShifted$() ? this.getYPoints$() : this.ypoints);
});

Clazz.newMeth(C$, 'getY$I',  function (i) {
return this.ypoints[i];
});

Clazz.newMeth(C$, 'getValidXPoints$',  function () {
return p$1.getValidPoints$DA.apply(this, [this.xpoints]);
});

Clazz.newMeth(C$, 'getValidYPoints$',  function () {
return p$1.getValidPoints$DA.apply(this, [this.ypoints]);
});

Clazz.newMeth(C$, 'isSorted$',  function () {
return this.sorted;
});

Clazz.newMeth(C$, 'isConnected$',  function () {
return this.connected;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.bsColVis.cardinality$();
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return ((this.index + this.model.stride - 1)/this.model.stride|0);
});

Clazz.newMeth(C$, 'getColumnName$I',  function (columnIndex) {
return (C$.convertTableColumnIndex$java_util_BitSet$I(this.bsColVis, columnIndex) == 0 ? this.xColumnName : this.yColumnName);
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (rowIndex, columnIndex) {
this.foundColumn=columnIndex=C$.convertTableColumnIndex$java_util_BitSet$I(this.bsColVis, columnIndex);
rowIndex=rowIndex * this.model.stride;
if (columnIndex == 0) {
return this.xpoints[rowIndex];
}return this.ypoints[rowIndex] + this.shift;
});

Clazz.newMeth(C$, 'append$D$D$D$D',  function (x, y, delx, dely) {
this.errorBars.add$O(Clazz.new_($I$(11,1).c$$D$D$D$D,[this, null, x, y, delx, dely]));
this.append$D$D(x, y);
});

Clazz.newMeth(C$, 'append$D$D',  function (x, y) {
if (Double.isNaN$D(x) || Double.isInfinite$D(x) || Double.isInfinite$D(y)  ) {
return;
}p$1.updateID.apply(this, []);
this.myShape=null;
if (p$1.addSorted$D$D.apply(this, [x, y])) this.recalculatePath$();
});

Clazz.newMeth(C$, 'addSorted$D$D',  function (x, y) {
if (!Double.isNaN$D(y)) {
var curPt=this.generalPath.getCurrentPoint$();
if (curPt == null ) {
this.generalPath.moveTo$F$F(x, y);
} else {
this.generalPath.lineTo$F$F(x, y);
}this.ymax=Math.max(y, this.ymax);
this.ymin=Math.min(y, this.ymin);
if (y > 0 ) {
this.ymaxLogscale=Math.max(y, this.ymaxLogscale);
this.yminLogscale=Math.min(y, this.yminLogscale);
}}this.xmax=Math.max(x, this.xmax);
this.xmin=Math.min(x, this.xmin);
if (x > 0 ) {
this.xmaxLogscale=Math.max(x, this.xmaxLogscale);
this.xminLogscale=Math.min(x, this.xminLogscale);
}if (this.index >= this.xpoints.length) {
p$1.increaseCapacity$I.apply(this, [this.xpoints.length * 2]);
}this.xpoints[this.index]=x;
this.ypoints[this.index]=y;
if (++this.index > 1 && this.sorted  && this.xpoints[this.index - 2] > x  ) {
C$.moveDatum$DA$DA$I(this.xpoints, this.ypoints, this.index - 1);
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'append$DA$DA$DA$DA',  function (xpoints, ypoints, delx, dely) {
for (var i=0, n=xpoints.length; i < n; i++) {
this.errorBars.add$O(Clazz.new_($I$(11,1).c$$D$D$D$D,[this, null, xpoints[i], ypoints[i], delx[i], dely[i]]));
}
this.append$DA$DA$I(xpoints, ypoints, xpoints.length);
});

Clazz.newMeth(C$, 'append$DA$DA',  function (_xpoints, _ypoints) {
this.append$DA$DA$I(_xpoints, _ypoints, _xpoints.length);
});

Clazz.newMeth(C$, 'append$DA$DA$I',  function (_xpoints, _ypoints, len) {
p$1.updateID.apply(this, []);
var badData=false;
this.myShape=null;
for (var i=0; i < len; i++) {
var xp=_xpoints[i];
var yp=_ypoints[i];
if (Double.isNaN$D(xp) || Double.isInfinite$D(xp) || Double.isInfinite$D(yp)  ) {
badData=true;
continue;
}this.xmax=Math.max(xp, this.xmax);
this.xmin=Math.min(xp, this.xmin);
if (xp > 0 ) {
this.xmaxLogscale=Math.max(xp, this.xmaxLogscale);
this.xminLogscale=Math.min(xp, this.xminLogscale);
}if (!Double.isNaN$D(yp)) {
this.ymax=Math.max(yp, this.ymax);
this.ymin=Math.min(yp, this.ymin);
if (yp > 0 ) {
this.ymaxLogscale=Math.max(yp, this.ymaxLogscale);
this.yminLogscale=Math.min(yp, this.yminLogscale);
}var curPt=this.generalPath.getCurrentPoint$();
if (curPt == null ) {
this.generalPath.moveTo$F$F(xp, yp);
} else {
this.generalPath.lineTo$F$F(xp, yp);
}}}
var pointsAdded=len;
var availableSpots=this.xpoints.length - this.index;
var increasedCapacity=false;
if (pointsAdded > availableSpots) {
p$1.increaseCapacity$I.apply(this, [this.xpoints.length + pointsAdded]);
increasedCapacity=true;
}var maxPts=this.maxPoints == C$.defaultMaxPoints ? ((this.maxPoints * C$.maxPointsMultiplier)|0) : this.maxPoints;
pointsAdded=Math.min(pointsAdded, maxPts);
System.arraycopy$O$I$O$I$I(_xpoints, Math.max(0, len - pointsAdded), this.xpoints, this.index, pointsAdded);
System.arraycopy$O$I$O$I$I(_ypoints, Math.max(0, len - pointsAdded), this.ypoints, this.index, pointsAdded);
this.index+=pointsAdded;
if (badData) {
C$.removeBadData$DA$DA$I(this.xpoints, this.ypoints, this.index);
}if (this.sorted) {
this.insertionSort$();
}if (increasedCapacity) {
p$1.resetXYMinMax$Z.apply(this, [false]);
}});

Clazz.newMeth(C$, 'read$S',  function (inputFile) {
try {
var reader=Clazz.new_([Clazz.new_($I$(13,1).c$$S,[inputFile])],$I$(12,1).c$$java_io_Reader);
var lines=C$.getLines$java_io_BufferedReader(reader);
var nlines=lines.size$();
var xy=Clazz.array(Double.TYPE, [2, nlines]);
var n=0;
for (var i=0; i < nlines; i++) {
var s=lines.get$I(i).trim$();
if ((s.length$() == 0) || (s.charAt$I(0) == "#") ) {
continue;
}var st=Clazz.new_($I$(14,1).c$$S$S,[s, "\t"]);
switch (st.countTokens$()) {
case 0:
continue;
case 2:
xy[0][n]=Double.parseDouble$S(st.nextToken$());
xy[1][n]=Double.parseDouble$S(st.nextToken$());
++n;
break;
default:
throw Clazz.new_(Clazz.load('java.io.IOException'));
}
}
this.append$DA$DA$I(xy[0], xy[1], n);
p$1.updateID.apply(this, []);
reader.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var fnfe = e$$;
{
System.err.println$S("File " + inputFile + " not found." );
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
System.err.println$S("Error reading file " + inputFile);
}
} else if (Clazz.exceptionOf(e$$,"NumberFormatException")){
var nfe = e$$;
{
System.err.println$S("Error reading file " + inputFile);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'getLines$java_io_BufferedReader',  function (reader) {
var s;
var list=Clazz.new_($I$(5,1));
while ((s=reader.readLine$()) != null ){
list.add$O(s);
}
return list;
}, 1);

Clazz.newMeth(C$, 'write$S',  function (outputFile) {
try {
var writer=Clazz.new_([Clazz.new_([Clazz.new_($I$(17,1).c$$S,[outputFile])],$I$(16,1).c$$java_io_Writer)],$I$(15,1).c$$java_io_Writer);
for (var i=0; i < this.index; i++) {
writer.println$S(new Double(this.xpoints[i]).toString() + "\t" + new Double(this.ypoints[i]).toString() );
}
writer.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var fnfe = e$$;
{
System.err.println$S("File " + outputFile + " not found." );
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
System.err.println$S("Error writing file " + outputFile);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
if (!this.drawable$()) {
return;
}var g2=(this.markerShape == 0 || this.markerShape == 5  ? g : g.create$());
if (this.markerShape != 0 && this.markerShape != 5 ) {
C$.drawClip$java_awt_Graphics2D$org_opensourcephysics_display_DrawingPanel$I(g2, drawingPanel, this.markerSize);
}this.drawData$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D(drawingPanel, g2);
if (g2 !== g ) g2.dispose$();
});

Clazz.newMeth(C$, 'drawClip$java_awt_Graphics2D$org_opensourcephysics_display_DrawingPanel$I',  function (g2, drawingPanel, offset) {
if (!$I$(18).allowDatasetClip) return;
g2.setClip$I$I$I$I(drawingPanel.leftGutter - offset - 1 , drawingPanel.topGutter - offset - 1 , drawingPanel.getWidth$() - drawingPanel.leftGutter - drawingPanel.rightGutter  + 2 + 2 * offset, drawingPanel.getHeight$() - drawingPanel.bottomGutter - drawingPanel.topGutter  + 2 + 2 * offset);
var viewRect=drawingPanel.getViewRect$();
if (viewRect != null ) {
g2.clipRect$I$I$I$I(viewRect.x, viewRect.y, viewRect.x + viewRect.width, viewRect.y + viewRect.height);
}}, 1);

Clazz.newMeth(C$, 'drawable$',  function () {
if (this.visible) for (var i=0; i < this.index; i++) {
if (!Double.isNaN$D(this.ypoints[i])) return true;
}
return false;
});

Clazz.newMeth(C$, 'drawData$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D',  function (drawingPanel, g2) {
if (!drawingPanel.getPixelTransform$().equals$O(this.pixelTransform)) {
this.myShape=null;
this.pixelTransform=drawingPanel.getPixelTransform$();
}try {
if (this.myShape == null  && (this.connected || this.markerShape == 5 ) ) this.myShape=drawingPanel.transformPath$java_awt_geom_GeneralPath(this.generalPath);
switch (this.markerShape) {
case 0:
break;
case 5:
g2.setColor$java_awt_Color(this.fillColor);
g2.fill$java_awt_Shape(this.myShape);
g2.setColor$java_awt_Color(this.edgeColor);
g2.draw$java_awt_Shape(this.myShape);
break;
default:
this.drawScatterPlot$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D(drawingPanel, g2);
break;
}
if (this.connected) {
g2.setColor$java_awt_Color(this.lineColor);
g2.draw$java_awt_Shape(this.myShape);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'drawScatterPlot$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D',  function (drawingPanel, g2) {
g2.setColor$java_awt_Color(this.markerShape == 6 ? this.edgeColor : this.fillColor);
var bottom=(this.markerShape == 7 || this.markerShape == 8  ? Math.min(drawingPanel.yToPix$D(0), drawingPanel.yToPix$D(drawingPanel.getYMin$())) : 0);
var width=this.markerSize * 2 + 1;
for (var i=0; i < this.index; i++) {
var x=this.xpoints[i];
var y=this.getY$I(i);
if (Double.isNaN$D(y) || x <= 0  && drawingPanel.isLogScaleX$()   || y <= 0  && drawingPanel.isLogScaleY$()  ) {
continue;
}var xp=drawingPanel.xToPix$D(x);
var yp=drawingPanel.yToPix$D(y);
var shape=C$.tmpRect;
switch (this.markerShape) {
case 8:
g2.setColor$java_awt_Color(this.edgeColor);
g2.drawLine$I$I$I$I(xp, yp, xp, (bottom|0));
g2.setColor$java_awt_Color(this.fillColor);
break;
default:
case 2:
C$.tmpRect.setRect$D$D$D$D(xp - this.markerSize, yp - this.markerSize, width, width);
break;
case 6:
C$.tmpRect.setRect$D$D$D$D(xp, yp, 1, 1);
g2.draw$java_awt_Shape(C$.tmpRect);
continue;
case 7:
var barHeight=bottom - yp;
if (barHeight > 0 ) {
C$.tmpRect.setRect$D$D$D$D(xp - this.markerSize, yp, width, barHeight);
} else {
C$.tmpRect.setRect$D$D$D$D(xp - this.markerSize, bottom, width, -barHeight);
}break;
case 1:
shape=Clazz.new_($I$(19,1).c$$D$D$D$D,[xp - this.markerSize, yp - this.markerSize, width, width]);
break;
case -1:
shape=this.getTranslateInstance$D$D(xp, yp).createTransformedShape$java_awt_Shape(this.customMarker);
break;
}
g2.fill$java_awt_Shape(shape);
if (this.edgeColor !== this.fillColor ) {
g2.setColor$java_awt_Color(this.edgeColor);
g2.draw$java_awt_Shape(shape);
g2.setColor$java_awt_Color(this.fillColor);
}}
if (this.errorBars.size$() > 0) {
for (var i=this.errorBars.size$(); --i >= 0; ) this.errorBars.get$I(i).draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(drawingPanel, g2);

}});

Clazz.newMeth(C$, 'clear$',  function () {
this.index=0;
this.generalPath.reset$();
this.errorBars.clear$();
p$1.resetXYMinMax$Z.apply(this, [true]);
this.myShape=null;
});

Clazz.newMeth(C$, 'toString',  function () {
var name="(" + this.xColumnName + "," + this.getYColumnName$() + ") " + this.bsColVis + " " ;
if (this.index == 0) {
return name + "No data in dataset.";
}var s=new Double(this.xpoints[0]).toString() + " " + new Double(this.ypoints[0]).toString() + "\n" ;
var b=Clazz.new_([this.index * s.length$()],$I$(20,1).c$$I);
for (var i=0; i < this.index; i++) {
b.append$D(this.xpoints[i]);
var eol="\n";
try {
eol=System.getProperty$S$S("line.separator", "\n");
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
} else {
throw ex;
}
}
b.append$S(" ");
if (Double.isNaN$D(this.ypoints[i])) {
b.append$S("null");
} else {
b.append$D(this.ypoints[i]);
}b.append$S(eol);
}
return name + b.toString();
});

Clazz.newMeth(C$, 'countColumnsVisible$ZA',  function (visible) {
var count=0;
for (var i=0; i < visible.length; i++) {
if (visible[i]) {
++count;
}}
return count;
}, 1);

Clazz.newMeth(C$, 'setXColumnVisible$Z',  function (b) {
this.bsColVis.set$I$Z(0, b);
});

Clazz.newMeth(C$, 'setYColumnVisible$Z',  function (b) {
this.bsColVis.set$I$Z(1, b);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
this.visible=b;
});

Clazz.newMeth(C$, 'getVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setStride$I',  function (stride) {
this.model.setStride$I(stride);
});

Clazz.newMeth(C$, 'isXColumnVisible$',  function () {
return this.bsColVis.get$I(0);
});

Clazz.newMeth(C$, 'isYColumnVisible$',  function () {
return this.bsColVis.get$I(1);
});

Clazz.newMeth(C$, 'recalculatePath$',  function () {
this.myShape=null;
this.generalPath.reset$();
if (this.index < 1) {
return;
}var i=0;
var xValues=this.xpoints;
var yValues=this.ypoints;
var shift=(this.isShifted$() ? this.shift : 0);
for (; i < this.index; i++) {
if (!Double.isNaN$D(yValues[i])) {
this.generalPath.moveTo$D$D(xValues[i], yValues[i] + shift);
break;
}}
for (++i; i < this.index; i++) {
if (!Double.isNaN$D(yValues[i])) {
this.generalPath.lineTo$D$D(xValues[i], yValues[i] + shift);
}}
});

Clazz.newMeth(C$, 'insertionSort$',  function () {
if (this.index >= 2 && C$.sort$DA$DA$I(this.xpoints, this.ypoints, this.index) ) {
this.recalculatePath$();
}});

Clazz.newMeth(C$, 'sort$DA$DA$I',  function (xpoints, ypoints, index) {
var dataChanged=false;
for (var i=1; i < index; i++) {
if (xpoints[i - 1] > xpoints[i] ) {
C$.moveDatum$DA$DA$I(xpoints, ypoints, i);
dataChanged=true;
}}
return dataChanged;
}, 1);

Clazz.newMeth(C$, 'moveDatum$DA$DA$I',  function (xpoints, ypoints, loc) {
if (loc < 1) {
return;
}var x=xpoints[loc];
var y=ypoints[loc];
var i=loc;
while (--i >= 0 && xpoints[i] > x  ){
}
;if (++i == loc) return;
System.arraycopy$O$I$O$I$I(xpoints, i, xpoints, i + 1, loc - i);
System.arraycopy$O$I$O$I$I(ypoints, i, ypoints, i + 1, loc - i);
xpoints[i]=x;
ypoints[i]=y;
}, 1);

Clazz.newMeth(C$, 'getTranslateInstance$D$D',  function (tx, ty) {
this.trD.setToTranslation$D$D(tx, ty);
return this.trD;
});

Clazz.newMeth(C$, 'removeBadData$DA$DA$I',  function (ax, ay, n) {
var off=0;
for (var i=0; i < n; i++) {
var x=ax[i];
var y=ay[i];
if (Double.isNaN$D(x) || Double.isInfinite$D(x) || Double.isInfinite$D(y)  ) {
++off;
continue;
}if (off > 0) {
ax[i - off]=x;
ay[i - off]=y;
}}
return n - off;
}, 1);

Clazz.newMeth(C$, 'increaseCapacity$I',  function (newCapacity) {
var pointsAdded=newCapacity - this.xpoints.length;
var maxPts=this.maxPoints == C$.defaultMaxPoints ? ((this.maxPoints * C$.maxPointsMultiplier)|0) : this.maxPoints;
newCapacity=Math.min(newCapacity, maxPts);
var newIndex=Math.min(this.index, ((3 * newCapacity)/4|0));
newIndex=Math.min(newIndex, newCapacity - pointsAdded);
if (newIndex < 0) {
newIndex=0;
}var tempx=this.xpoints;
this.xpoints=Clazz.array(Double.TYPE, [newCapacity]);
System.arraycopy$O$I$O$I$I(tempx, this.index - newIndex, this.xpoints, 0, newIndex);
var tempy=this.ypoints;
this.ypoints=Clazz.array(Double.TYPE, [newCapacity]);
System.arraycopy$O$I$O$I$I(tempy, this.index - newIndex, this.ypoints, 0, newIndex);
if (this.index != newIndex) {
this.index=newIndex;
p$1.resetXYMinMax$Z.apply(this, [false]);
this.recalculatePath$();
}this.index=newIndex;
}, p$1);

Clazz.newMeth(C$, 'resetXYMinMax$Z',  function (isCleared) {
this.xmaxLogscale=this.ymaxLogscale=-1.7976931348623157E308;
this.xminLogscale=this.yminLogscale=1.7976931348623157E308;
this.xmax=this.ymax=-1.7976931348623157E308;
this.xmin=this.ymin=1.7976931348623157E308;
if (isCleared) {
return;
}var xValues=this.xpoints;
var yValues=this.ypoints;
var shift=(this.isShifted$() ? this.shift : 0);
for (var i=0; i < this.index; i++) {
if (Double.isNaN$D(xValues[i]) || Double.isInfinite$D(xValues[i]) || Double.isInfinite$D(yValues[i])  ) {
continue;
}var xp=xValues[i];
this.xmax=Math.max(xp, this.xmax);
this.xmin=Math.min(xp, this.xmin);
if (xp > 0 ) {
this.xmaxLogscale=Math.max(xp, this.xmaxLogscale);
this.xminLogscale=Math.min(xp, this.xminLogscale);
}var yp=yValues[i] + shift;
if (!Double.isNaN$D(yp)) {
this.ymax=Math.max(yp, this.ymax);
this.ymin=Math.min(yp, this.ymin);
if (yp > 0 ) {
this.ymaxLogscale=Math.max(yp, this.ymaxLogscale);
this.yminLogscale=Math.min(yp, this.yminLogscale);
}}}
}, p$1);

Clazz.newMeth(C$, 'getValidPoints$DA',  function (pts) {
pts=$I$(21).copyOf$DA$I(pts, pts.length);
var nans=0;
for (var i=0; i < this.index; i++) {
if (nans > 0) {
pts[i - nans]=pts[i];
}if (Double.isNaN$D(this.ypoints[i])) {
++nans;
}}
if (this.index - nans == pts.length) {
return pts;
}var temp=Clazz.array(Double.TYPE, [this.index - nans]);
System.arraycopy$O$I$O$I$I(pts, 0, temp, 0, this.index - nans);
return temp;
}, p$1);

Clazz.newMeth(C$, 'findDataSet$java_util_ArrayList$org_opensourcephysics_display_Data',  function (datasets, newData) {
var id=newData.getID$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var ds=datasets.get$I(i);
if (ds.getID$() == id) {
return ds;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getNaNCount$DA$I',  function (pts, index) {
var nans=0;
for (var i=0; i < index; i++) {
if (Double.isNaN$D(pts[i])) {
++nans;
}}
return nans;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(22,1));
}, 1);

Clazz.newMeth(C$, 'toBoolArray$java_util_BitSet',  function (bs) {
var b=Clazz.array(Boolean.TYPE, -1, [false, false]);
for (var i=bs.nextSetBit$I(0); i >= 0 && i < 2 ; i=bs.nextSetBit$I(i + 1)) b[i]=true;

return b;
}, 1);

Clazz.newMeth(C$, 'convertTableColumnIndex$java_util_BitSet$I',  function (visible, columnIndex) {
return (visible.get$I(columnIndex) ? columnIndex : 1 - columnIndex);
}, 1);

Clazz.newMeth(C$, 'loadDatasets$java_util_ArrayList$java_util_Iterator',  function (datasets, it) {
while (it.hasNext$()){
var newData=it.next$();
var ds=C$.findDataSet$java_util_ArrayList$org_opensourcephysics_display_Data(datasets, newData);
if (ds != null ) {
C$.getLoader$().loadObject$org_opensourcephysics_controls_XMLControl$O(Clazz.new_($I$(23,1).c$$O,[newData]), ds);
}}
}, 1);

Clazz.newMeth(C$, 'getMean$I',  function (xcol) {
var data=(xcol == 1 ? this.ypoints : this.xpoints);
var sum=0.0;
var count=0;
for (var i=this.index; --i >= 0; ) {
if (Double.isNaN$D(data[i])) {
continue;
}++count;
sum+=data[i];
}
return sum / count;
});

Clazz.newMeth(C$, 'getX$I',  function (i) {
return this.xpoints[i];
});

C$.$static$=function(){C$.$static$=0;
C$.id=0;
C$.maxPointsMultiplier=1.0;
C$.defaultMaxPoints=16384;
C$.tmpRect=Clazz.new_($I$(3,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Dataset, "Model", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.display.DataTable','.OSPTableModel']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stride=1;
},1);

C$.$fields$=[['I',['stride']]]

Clazz.newMeth(C$, 'isFoundOrdered$',  function () {
var data=(this.b$['org.opensourcephysics.display.Dataset'].foundColumn == 0 ? this.b$['org.opensourcephysics.display.Dataset'].xpoints : this.b$['org.opensourcephysics.display.Dataset'].ypoints);
var d=1.7976931348623157E308;
for (var i=this.b$['org.opensourcephysics.display.Dataset'].index; --i >= 0; ) {
if (data[i] > d ) return false;
d=data[i];
}
return true;
});

Clazz.newMeth(C$, 'getStride$',  function () {
return this.stride;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.b$['org.opensourcephysics.display.Dataset'].getRowCount$.apply(this.b$['org.opensourcephysics.display.Dataset'], []);
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.b$['org.opensourcephysics.display.Dataset'].getColumnCount$.apply(this.b$['org.opensourcephysics.display.Dataset'], []);
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (rowIndex, columnIndex) {
return Double.valueOf$D(this.b$['org.opensourcephysics.display.Dataset'].getValueAt$I$I.apply(this.b$['org.opensourcephysics.display.Dataset'], [rowIndex, columnIndex]));
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (columnIndex) {
return Clazz.getClass(Double);
});

Clazz.newMeth(C$, 'setStride$I',  function (stride) {
this.stride=stride;
this.fireTableChanged$javax_swing_event_TableModelEvent(Clazz.new_($I$(1,1).c$$javax_swing_table_TableModel$I$I$I$I,[this, 0, 2147483647, stride, -1]));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Dataset, "ErrorBar", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tick=3;
},1);

C$.$fields$=[['D',['x','y','delx','dely'],'I',['tick']]]

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (_x, _y, _delx, _dely) {
;C$.$init$.apply(this);
this.x=_x;
this.y=_y;
this.delx=_delx;
this.dely=_dely;
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (Double.isNaN$D(this.y)) {
return;
}var xpix=panel.xToPix$D(this.x);
var xpix1=panel.xToPix$D(this.x - this.delx);
var xpix2=panel.xToPix$D(this.x + this.delx);
var ypix=panel.yToPix$D(this.y);
var ypix1=panel.yToPix$D(this.y - this.dely);
var ypix2=panel.yToPix$D(this.y + this.dely);
g.setColor$java_awt_Color(this.b$['org.opensourcephysics.display.Dataset'].errorBarColor);
g.drawLine$I$I$I$I(xpix1, ypix, xpix2, ypix);
g.drawLine$I$I$I$I(xpix, ypix1, xpix, ypix2);
g.drawLine$I$I$I$I(xpix1, ypix - this.tick, xpix1, ypix + this.tick);
g.drawLine$I$I$I$I(xpix2, ypix - this.tick, xpix2, ypix + this.tick);
g.drawLine$I$I$I$I(xpix - this.tick, ypix1, xpix + this.tick, ypix1);
g.drawLine$I$I$I$I(xpix - this.tick, ypix2, xpix + this.tick, ypix2);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Dataset, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
control.setValue$S$O("points", data.getPoints$());
control.setValue$S$I("index", data.index);
control.setValue$S$I("marker_shape", data.getMarkerShape$());
control.setValue$S$I("marker_size", data.getMarkerSize$());
control.setValue$S$Z("sorted", data.isSorted$());
control.setValue$S$Z("connected", data.isConnected$());
control.setValue$S$O("name", data.name);
control.setValue$S$O("x_name", data.xColumnName);
control.setValue$S$O("y_name", data.yColumnName);
control.setValue$S$O("x_description", data.xColumnDescription);
control.setValue$S$O("y_description", data.yColumnDescription);
control.setValue$S$O("line_color", data.lineColor);
control.setValue$S$O("fill_color", data.fillColor);
control.setValue$S$O("edge_color", data.edgeColor);
control.setValue$S$O("errorbar_color", data.errorBarColor);
control.setValue$S$I("datasetID", data.datasetID);
control.setValue$S$O("visible", $I$(2).toBoolArray$java_util_BitSet(data.bsColVis));
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var type=control.getObjectClass$();
if (Clazz.getClass($I$(2)).isAssignableFrom$Class(type) && !Clazz.getClass($I$(2)).equals$O(type) ) {
try {
return type.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException")){
var ex = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var ex = e$$;
{
}
} else {
throw e$$;
}
}
}return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
var points=control.getObject$S("points");
var n;
var xPoints=null;
var yPoints=null;
if (points != null  && (n=points.length) > 0  && points[0] != null  ) {
xPoints=Clazz.array(Double.TYPE, [n]);
yPoints=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
xPoints[i]=points[i][0];
yPoints[i]=points[i][1];
}
} else {
xPoints=control.getObject$S("x_points");
yPoints=control.getObject$S("y_points");
}if (xPoints != null  && yPoints != null  ) {
data.clear$();
data.append$DA$DA(xPoints, yPoints);
}data.index=control.getInt$S("index");
if (control.getPropertyNamesRaw$().contains$O("marker_shape")) {
data.setMarkerShape$I(control.getInt$S("marker_shape"));
}if (control.getPropertyNamesRaw$().contains$O("marker_size")) {
data.setMarkerSize$I(control.getInt$S("marker_size"));
}data.setSorted$Z(control.getBoolean$S("sorted"));
data.setConnected$Z(control.getBoolean$S("connected"));
data.name=control.getString$S("name");
data.xColumnName=control.getString$S("x_name");
data.yColumnName=control.getString$S("y_name");
data.xColumnDescription=control.getString$S("x_description");
data.yColumnDescription=control.getString$S("y_description");
var color=control.getObject$S("line_color");
if (color != null ) {
data.lineColor=color;
}color=control.getObject$S("fill_color");
if (color != null ) {
data.fillColor=color;
}color=control.getObject$S("edge_color");
if (color != null ) {
data.edgeColor=color;
}color=control.getObject$S("errorbar_color");
if (color != null ) {
data.errorBarColor=color;
}data.setID$I(control.getInt$S("datasetID"));
var colVisible=control.getObject$S("visible");
if (colVisible != null ) {
for (var i=0; i < colVisible.length; i++) data.bsColVis.set$I$Z(i, colVisible[i]);

}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
