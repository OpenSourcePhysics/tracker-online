(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.display.DisplayColors','org.opensourcephysics.display.ComplexDataset','java.awt.Color','org.opensourcephysics.display.Trail','java.awt.geom.GeneralPath','java.awt.geom.AffineTransform',['org.opensourcephysics.display.ComplexDataset','.Model'],'org.opensourcephysics.display.InteractivePanel','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.display.DisplayRes',['org.opensourcephysics.display.ComplexDataset','.Phase'],'org.opensourcephysics.display.axes.XAxis','org.opensourcephysics.display.TeXParser','StringBuffer',['java.awt.geom.Rectangle2D','.Double'],['org.opensourcephysics.display.ComplexDataset','.Loader'],'org.opensourcephysics.display.Dataset','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComplexDataset", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['org.opensourcephysics.display.DataTable','.DataModel'], ['org.opensourcephysics.display.Drawable', 'org.opensourcephysics.display.Measurable', 'org.opensourcephysics.display.Data']);
C$.$classes$=[['Model',1],['Phase',0],['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=true;
this.measurable=true;
this.markerShape=2;
this.markerSize=5;
this.centered=true;
this.showPhase=true;
this.sorted=false;
this.connected=true;
this.lineColor=$I$(3).black;
this.reTrail=Clazz.new_($I$(4,1));
this.imTrail=Clazz.new_($I$(4,1));
this.name="Complex Data";
this.xColumnName="x";
this.reColumnName="re";
this.imColumnName="im";
this.stride=1;
this.datasetID=this.hashCode$();
},1);

C$.$fields$=[['Z',['visible','measurable','centered','showPhase','sorted','connected'],'D',['xmin','xmax','ampmin','ampmax','remax','remin','immax','immin'],'I',['index','markerShape','markerSize','initialSize','stride','datasetID'],'S',['name','xColumnName','reColumnName','imColumnName'],'O',['model','org.opensourcephysics.display.ComplexDataset.Model','xpoints','double[]','+re_points','+im_points','+amp_points','lineColor','java.awt.Color','ampPath','java.awt.geom.GeneralPath','reTrail','org.opensourcephysics.display.Trail','+imTrail','flip','java.awt.geom.AffineTransform','reDataset','org.opensourcephysics.display.Dataset','+imDataset']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.reTrail.color=$I$(3).RED;
this.imTrail.color=$I$(3).BLUE;
this.initialSize=10;
this.xpoints=Clazz.array(Double.TYPE, [this.initialSize]);
this.re_points=Clazz.array(Double.TYPE, [this.initialSize]);
this.im_points=Clazz.array(Double.TYPE, [this.initialSize]);
this.amp_points=Clazz.array(Double.TYPE, [this.initialSize]);
this.xColumnName="x";
this.reColumnName="re";
this.imColumnName="im";
this.ampPath=Clazz.new_($I$(5,1));
this.index=0;
this.flip=Clazz.new_($I$(6,1).c$$F$F$F$F$F$F,[1, 0, 0, -1, 0, 0]);
this.clear$();
this.model=Clazz.new_($I$(7,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'showLegend$',  function () {
var panel=Clazz.new_($I$(8,1));
panel.setPreferredGutters$I$I$I$I(5, 5, 5, 25);
var frame=Clazz.new_([$I$(10).getString$S("GUIUtils.PhaseLegend"), panel],$I$(9,1).c$$S$org_opensourcephysics_display_DrawingPanel);
frame.setDefaultCloseOperation$I(2);
frame.setJMenuBar$javax_swing_JMenuBar(null);
panel.addDrawable$org_opensourcephysics_display_Drawable(Clazz.new_($I$(11,1),[this, null]));
var xaxis=Clazz.new_([$I$(10).getString$S("ComplexDataset.Legend.XAxis")],$I$(12,1).c$$S);
xaxis.setLocationType$I(2);
xaxis.setEnabled$Z(true);
panel.setClipAtGutter$Z(false);
panel.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
panel.setSquareAspect$Z(false);
panel.setPreferredMinMax$D$D$D$D(-3.141592653589793, 3.141592653589793, -1, 1);
frame.setSize$I$I(300, 120);
frame.setVisible$Z(true);
return frame;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
if (this.index < 1) {
return false;
}return this.measurable;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xmin;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xmax;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
if (this.markerShape == 1) {
return -this.ampmax;
} else if (this.centered && ((this.markerShape == 3) || (this.markerShape == 2) ) ) {
return -this.ampmax / 2;
} else {
return 0;
}});

Clazz.newMeth(C$, 'getYMax$',  function () {
if (this.markerShape == 1) {
return this.ampmax;
} else if (this.centered && ((this.markerShape == 3) || (this.markerShape == 2) ) ) {
return this.ampmax / 2;
}if (this.markerShape == 4) {
return 1.1 * this.ampmax;
}return this.ampmax;
});

Clazz.newMeth(C$, 'getXPoints$',  function () {
var temp=Clazz.array(Double.TYPE, [this.index]);
System.arraycopy$O$I$O$I$I(this.xpoints, 0, temp, 0, this.index);
return temp;
});

Clazz.newMeth(C$, 'getRePoints$',  function () {
var temp=Clazz.array(Double.TYPE, [this.index]);
System.arraycopy$O$I$O$I$I(this.re_points, 0, temp, 0, this.index);
return temp;
});

Clazz.newMeth(C$, 'getImPoints$',  function () {
var temp=Clazz.array(Double.TYPE, [this.index]);
System.arraycopy$O$I$O$I$I(this.im_points, 0, temp, 0, this.index);
return temp;
});

Clazz.newMeth(C$, 'getYPoints$',  function () {
var temp=Clazz.array(Double.TYPE, [this.index]);
System.arraycopy$O$I$O$I$I(this.amp_points, 0, temp, 0, this.index);
return temp;
});

Clazz.newMeth(C$, 'getPoints$',  function () {
var temp=Clazz.array(Double.TYPE, [this.index, 3]);
for (var i=0; i < this.index; i++) {
temp[i]=Clazz.array(Double.TYPE, -1, [this.xpoints[i], this.re_points[i], this.im_points[i]]);
}
return temp;
});

Clazz.newMeth(C$, 'setMarkerShape$I',  function (_markerShape) {
this.markerShape=_markerShape;
});

Clazz.newMeth(C$, 'getMarkerShape$',  function () {
return this.markerShape;
});

Clazz.newMeth(C$, 'getMarkerSize$',  function () {
return this.markerSize;
});

Clazz.newMeth(C$, 'setMarkerSize$I',  function (size) {
this.markerSize=size;
});

Clazz.newMeth(C$, 'setSorted$Z',  function (_sorted) {
this.sorted=_sorted;
if (this.sorted) {
this.insertionSort$();
}});

Clazz.newMeth(C$, 'setStride$I',  function (_stride) {
this.stride=_stride;
this.stride=Math.max(1, this.stride);
});

Clazz.newMeth(C$, 'isSorted$',  function () {
return this.sorted;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
this.visible=b;
});

Clazz.newMeth(C$, 'getVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setMeasurable$Z',  function (b) {
this.measurable=b;
});

Clazz.newMeth(C$, 'getMeasurable$',  function () {
return this.measurable;
});

Clazz.newMeth(C$, 'setConnected$Z',  function (_connected) {
this.connected=_connected;
});

Clazz.newMeth(C$, 'setCentered$Z',  function (_centered) {
this.centered=_centered;
});

Clazz.newMeth(C$, 'isConnected$',  function () {
return this.connected;
});

Clazz.newMeth(C$, 'setLineColor$java_awt_Color',  function (_lineColor) {
this.lineColor=_lineColor;
this.reTrail.color=this.lineColor;
this.imTrail.color=this.lineColor;
});

Clazz.newMeth(C$, 'setLineColor$java_awt_Color$java_awt_Color',  function (reColor, imColor) {
this.lineColor=reColor;
this.reTrail.color=reColor;
this.imTrail.color=imColor;
});

Clazz.newMeth(C$, 'getLineColors$',  function () {
return Clazz.array($I$(3), -1, [this.lineColor, this.lineColor]);
});

Clazz.newMeth(C$, 'getLineColor$',  function () {
return this.lineColor;
});

Clazz.newMeth(C$, 'getFillColors$',  function () {
return Clazz.array($I$(3), -1, [this.lineColor, this.lineColor]);
});

Clazz.newMeth(C$, 'getFillColor$',  function () {
return this.lineColor;
});

Clazz.newMeth(C$, 'setXYColumnNames$S$S$S',  function (_xColumnName, _reColumnName, _imColumnName) {
this.xColumnName=$I$(13).parseTeX$S(_xColumnName);
this.reColumnName=$I$(13).parseTeX$S(_reColumnName);
this.imColumnName=$I$(13).parseTeX$S(_imColumnName);
});

Clazz.newMeth(C$, 'setXYColumnNames$S$S$S$S',  function (_xColumnName, _reColumnName, _imColumnName, datasetName) {
this.setXYColumnNames$S$S$S(_xColumnName, _reColumnName, _imColumnName);
this.name=$I$(13).parseTeX$S(datasetName);
});

Clazz.newMeth(C$, 'append$D$D$D',  function (x, re, im) {
if (Double.isNaN$D(x) || Double.isInfinite$D(x) || Double.isNaN$D(re) || Double.isInfinite$D(re) || Double.isNaN$D(im) || Double.isInfinite$D(im)  ) {
return;
}if (this.index >= this.xpoints.length) {
p$1.setCapacity$I.apply(this, [this.xpoints.length * 2]);
}this.xpoints[this.index]=x;
this.re_points[this.index]=re;
this.im_points[this.index]=im;
var amp=Math.sqrt(re * re + im * im);
if (this.index == 0) {
this.ampPath.moveTo$F$F(x, amp);
} else {
this.ampPath.lineTo$F$F(x, amp);
}this.reTrail.addPoint$D$D(x, re);
this.imTrail.addPoint$D$D(x, im);
this.xmax=Math.max(x, this.xmax);
this.xmin=Math.min(x, this.xmin);
this.remin=Math.min(re, this.remin);
this.remax=Math.max(re, this.remax);
this.immin=Math.min(im, this.immin);
this.immax=Math.max(im, this.immax);
this.ampmin=Math.min(amp, this.ampmin);
this.ampmax=Math.max(amp, this.ampmax);
++this.index;
if (this.sorted && (this.index > 1) && (x < this.xpoints[this.index - 2] )  ) {
this.moveDatum$I(this.index - 1);
this.recalculatePath$();
}});

Clazz.newMeth(C$, 'append$DA$DA$DA',  function (_xpoints, _repoints, _impoints) {
if (_xpoints == null ) {
return;
}if ((_repoints == null ) || (_impoints == null ) || (_xpoints.length != _repoints.length) || (_xpoints.length != _impoints.length)  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array lenghts must be equal to append data."]);
}var badData=false;
for (var i=0; i < _xpoints.length; i++) {
if (Double.isNaN$D(_xpoints[i]) || Double.isInfinite$D(_xpoints[i]) || Double.isNaN$D(_repoints[i]) || Double.isInfinite$D(_repoints[i]) || Double.isNaN$D(_impoints[i]) || Double.isInfinite$D(_impoints[i])  ) {
badData=true;
continue;
}this.xmax=Math.max(_xpoints[i], this.xmax);
this.xmin=Math.min(_xpoints[i], this.xmin);
this.remin=Math.min(_repoints[i], this.remin);
this.remax=Math.max(_repoints[i], this.remax);
this.immin=Math.min(_impoints[i], this.immin);
this.immax=Math.max(_impoints[i], this.immax);
var amp=Math.sqrt(_repoints[i] * _repoints[i] + _impoints[i] * _impoints[i]);
this.ampmin=Math.min(amp, this.ampmin);
this.ampmax=Math.max(amp, this.ampmax);
if ((this.index == 0) && (i == 0) ) {
this.ampPath.moveTo$F$F(_xpoints[i], amp);
} else {
this.ampPath.lineTo$F$F(_xpoints[i], amp);
}this.reTrail.addPoint$D$D(_xpoints[i], _repoints[i]);
this.imTrail.addPoint$D$D(_xpoints[i], _impoints[i]);
}
var pointsAdded=_xpoints.length;
var availableSpots=this.xpoints.length - this.index;
if (pointsAdded > availableSpots) {
p$1.setCapacity$I.apply(this, [2 * (this.xpoints.length + pointsAdded)]);
}System.arraycopy$O$I$O$I$I(_xpoints, 0, this.xpoints, this.index, pointsAdded);
System.arraycopy$O$I$O$I$I(_repoints, 0, this.re_points, this.index, pointsAdded);
System.arraycopy$O$I$O$I$I(_impoints, 0, this.im_points, this.index, pointsAdded);
this.index+=pointsAdded;
if (badData) {
p$1.cleanBadData.apply(this, []);
}if (this.sorted) {
this.insertionSort$();
}});

Clazz.newMeth(C$, 'append$DA$DA',  function (_xpoints, _zpoints) {
if (_xpoints == null ) {
return;
}if ((_zpoints == null ) || (2 * _xpoints.length != _zpoints.length) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of z array must be twice the length of the x array."]);
}var badData=false;
var pointsAdded=_xpoints.length;
var availableSpots=this.xpoints.length - this.index;
if (pointsAdded > availableSpots) {
p$1.setCapacity$I.apply(this, [2 * (this.xpoints.length + pointsAdded)]);
}for (var i=0; i < _xpoints.length; i++) {
if (Double.isNaN$D(_xpoints[i]) || Double.isInfinite$D(_xpoints[i]) || Double.isNaN$D(_zpoints[2 * i]) || Double.isInfinite$D(_zpoints[2 * i]) || Double.isNaN$D(_zpoints[2 * i + 1]) || Double.isInfinite$D(_zpoints[2 * i + 1])  ) {
badData=true;
continue;
}this.xmax=Math.max(_xpoints[i], this.xmax);
this.xmin=Math.min(_xpoints[i], this.xmin);
this.remin=Math.min(_zpoints[2 * i], this.remin);
this.remax=Math.max(_zpoints[2 * i], this.remax);
this.immin=Math.min(_zpoints[2 * i + 1], this.immin);
this.immax=Math.max(_zpoints[2 * i + 1], this.immax);
var amp=Math.sqrt(_zpoints[2 * i] * _zpoints[2 * i] + _zpoints[2 * i + 1] * _zpoints[2 * i + 1]);
this.ampmin=Math.min(amp, this.ampmin);
this.ampmax=Math.max(amp, this.ampmax);
this.xpoints[this.index + i]=_xpoints[i];
this.re_points[this.index + i]=_zpoints[2 * i];
this.im_points[this.index + i]=_zpoints[2 * i + 1];
if ((this.index == 0) && (i == 0) ) {
this.ampPath.moveTo$F$F(_xpoints[i], amp);
} else {
this.ampPath.lineTo$F$F(_xpoints[i], amp);
}this.reTrail.addPoint$D$D(_xpoints[i], _zpoints[2 * i]);
this.imTrail.addPoint$D$D(_xpoints[i], _zpoints[2 * i + 1]);
}
this.index+=pointsAdded;
if (badData) {
p$1.cleanBadData.apply(this, []);
}if (this.sorted) {
this.insertionSort$();
}});

Clazz.newMeth(C$, 'setID$I',  function (id) {
this.datasetID=id;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.datasetID;
});

Clazz.newMeth(C$, 'cleanBadData',  function () {
for (var i=0; i < this.index; i++) {
if (Double.isNaN$D(this.xpoints[i]) || Double.isInfinite$D(this.xpoints[i]) || Double.isNaN$D(this.re_points[i]) || Double.isInfinite$D(this.re_points[i]) || Double.isNaN$D(this.im_points[i]) || Double.isInfinite$D(this.im_points[i])  ) {
if ((this.index == 1) || (i == this.index - 1) ) {
--this.index;
break;
}System.arraycopy$O$I$O$I$I(this.xpoints, i + 1, this.xpoints, i, this.index - i - 1 );
System.arraycopy$O$I$O$I$I(this.re_points, i + 1, this.re_points, i, this.index - i - 1 );
System.arraycopy$O$I$O$I$I(this.im_points, i + 1, this.im_points, i, this.index - i - 1 );
--this.index;
}}
}, p$1);

Clazz.newMeth(C$, 'setCapacity$I',  function (newCapacity) {
var tempx=this.xpoints;
this.xpoints=Clazz.array(Double.TYPE, [newCapacity]);
System.arraycopy$O$I$O$I$I(tempx, 0, this.xpoints, 0, tempx.length);
var tempre=this.re_points;
this.re_points=Clazz.array(Double.TYPE, [newCapacity]);
System.arraycopy$O$I$O$I$I(tempre, 0, this.re_points, 0, tempre.length);
var tempim=this.im_points;
this.im_points=Clazz.array(Double.TYPE, [newCapacity]);
System.arraycopy$O$I$O$I$I(tempim, 0, this.im_points, 0, tempim.length);
var tempamp=this.amp_points;
this.amp_points=Clazz.array(Double.TYPE, [newCapacity]);
System.arraycopy$O$I$O$I$I(tempamp, 0, this.amp_points, 0, tempamp.length);
}, p$1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
if (!this.visible) {
return;
}var g2=g;
switch (this.markerShape) {
case 0:
this.drawLinePlot$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D(drawingPanel, g2);
break;
case 1:
this.drawReImPlot$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D(drawingPanel, g2);
break;
case 2:
this.drawPhaseCurve$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D(drawingPanel, g2);
break;
case 3:
this.drawPhaseBars$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D(drawingPanel, g2);
break;
case 4:
this.drawPhasePosts$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D(drawingPanel, g2);
break;
}
});

Clazz.newMeth(C$, 'clear$',  function () {
this.index=0;
this.ampPath.reset$();
this.reTrail.clear$();
this.imTrail.clear$();
p$1.resetXYMinMax.apply(this, []);
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.index == 0) {
return "Dataset empty.";
}var s=new Double(this.xpoints[0]).toString() + "\t" + new Double(this.re_points[0]).toString() + "\t" + new Double(this.im_points[0]).toString() + "\n" ;
var b=Clazz.new_([this.index * s.length$()],$I$(14,1).c$$I);
for (var i=0; i < this.index; i++) {
b.append$D(this.xpoints[i]);
b.append$C("\t");
b.append$D(this.re_points[i]);
b.append$C("\t");
b.append$D(this.im_points[i]);
b.append$C("\n");
}
return b.toString();
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return 3;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return ((this.index + this.stride - 1)/this.stride|0);
});

Clazz.newMeth(C$, 'getColumnName$I',  function (columnIndex) {
switch (columnIndex) {
case 0:
return this.xColumnName;
case 1:
return this.reColumnName;
case 2:
return this.imColumnName;
}
return "";
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (rowIndex, columnIndex) {
rowIndex=rowIndex * this.stride;
switch (columnIndex) {
case 0:
return this.xpoints[rowIndex];
case 1:
return this.re_points[rowIndex];
case 2:
return this.im_points[rowIndex];
}
return 0;
});

Clazz.newMeth(C$, 'resetXYMinMax',  function () {
this.xmin=1.7976931348623157E308;
this.xmax=-1.7976931348623157E308;
this.remax=-1.7976931348623157E308;
this.remin=1.7976931348623157E308;
this.immax=-1.7976931348623157E308;
this.immin=1.7976931348623157E308;
this.ampmax=-1.7976931348623157E308;
this.ampmin=1.7976931348623157E308;
for (var i=0; i < this.index; i++) {
this.xmin=Math.min(this.xpoints[i], this.xmin);
this.xmax=Math.max(this.xpoints[i], this.xmax);
this.remax=Math.max(this.re_points[i], this.remax);
this.remin=Math.min(this.re_points[i], this.remin);
this.immax=Math.max(this.im_points[i], this.immax);
this.immin=Math.min(this.im_points[i], this.immin);
this.ampmax=Math.max(this.amp_points[i], this.ampmax);
this.ampmin=Math.min(this.amp_points[i], this.ampmin);
}
}, p$1);

Clazz.newMeth(C$, 'insertionSort$',  function () {
var dataChanged=false;
if (this.index < 2) {
return;
}for (var i=1; i < this.index; i++) {
if (this.xpoints[i] < this.xpoints[i - 1] ) {
dataChanged=true;
this.moveDatum$I(i);
}}
if (dataChanged) {
this.recalculatePath$();
}});

Clazz.newMeth(C$, 'recalculatePath$',  function () {
this.ampPath.reset$();
if (this.index < 1) {
return;
}var amp=Math.sqrt(this.re_points[0] * this.re_points[0] + this.im_points[0] * this.im_points[0]);
this.ampPath.moveTo$F$F(this.xpoints[0], amp);
for (var i=1; i < this.index; i++) {
amp=Math.sqrt(this.re_points[i] * this.re_points[i] + this.im_points[i] * this.im_points[i]);
this.ampPath.lineTo$F$F(this.xpoints[i], amp);
}
});

Clazz.newMeth(C$, 'moveDatum$I',  function (loc) {
if (loc < 1) {
return;
}var x=this.xpoints[loc];
var re=this.re_points[loc];
var im=this.im_points[loc];
for (var i=0; i < this.index; i++) {
if (this.xpoints[i] > x ) {
System.arraycopy$O$I$O$I$I(this.xpoints, i, this.xpoints, i + 1, loc - i);
this.xpoints[i]=x;
System.arraycopy$O$I$O$I$I(this.re_points, i, this.re_points, i + 1, loc - i);
this.re_points[i]=re;
System.arraycopy$O$I$O$I$I(this.im_points, i, this.im_points, i + 1, loc - i);
this.im_points[i]=im;
return;
}}
});

Clazz.newMeth(C$, 'drawLinePlot$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D',  function (drawingPanel, g2) {
var at=drawingPanel.getPixelTransform$();
g2.setColor$java_awt_Color(this.lineColor);
g2.draw$java_awt_Shape(this.ampPath.createTransformedShape$java_awt_geom_AffineTransform(at));
if (this.showPhase) {
at.concatenate$java_awt_geom_AffineTransform(this.flip);
g2.draw$java_awt_Shape(this.ampPath.createTransformedShape$java_awt_geom_AffineTransform(at));
}});

Clazz.newMeth(C$, 'drawReImPlot$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D',  function (drawingPanel, g2) {
this.reTrail.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(drawingPanel, g2);
this.imTrail.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(drawingPanel, g2);
});

Clazz.newMeth(C$, 'drawPhaseCurve$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D',  function (drawingPanel, g2) {
var xpoints=this.xpoints;
var re_points=this.re_points;
var im_points=this.im_points;
var index=this.index;
if (index < 1) {
return;
}if ((xpoints.length < index) || (xpoints.length != re_points.length) || (xpoints.length != im_points.length)  ) {
return;
}var yorigin=drawingPanel.yToPix$D(0);
var xpix=Clazz.array(Integer.TYPE, [4]);
var ypix=Clazz.array(Integer.TYPE, [4]);
xpix[2]=drawingPanel.xToPix$D(xpoints[0]);
var oldY=Math.sqrt(re_points[0] * re_points[0] + im_points[0] * im_points[0]);
ypix[3]=drawingPanel.yToPix$D(-oldY);
ypix[2]=drawingPanel.yToPix$D(oldY);
var oldRe=re_points[0];
var oldIm=im_points[0];
for (var i=0; i < index; i++) {
var re=re_points[i];
var im=im_points[i];
var y=Math.sqrt(re * re + im * im);
if (y > 0 ) {
g2.setColor$java_awt_Color($I$(1,"phaseToColor$D",[Math.atan2((im + oldIm) / 2, (oldRe + re) / 2)]));
}xpix[0]=drawingPanel.xToPix$D(xpoints[i]);
if (this.centered) {
ypix[0]=drawingPanel.yToPix$D(-y / 2);
ypix[1]=drawingPanel.yToPix$D(y / 2);
} else {
ypix[0]=yorigin;
ypix[1]=drawingPanel.yToPix$D(y);
}xpix[1]=xpix[0];
xpix[3]=xpix[2];
g2.fillPolygon$IA$IA$I(xpix, ypix, 4);
xpix[2]=xpix[0];
ypix[3]=ypix[0];
ypix[2]=ypix[1];
oldIm=im;
oldRe=re;
oldY=y;
}
});

Clazz.newMeth(C$, 'drawPhaseBars$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D',  function (drawingPanel, g2) {
if (this.index < 1) {
return;
}var xpoints=this.xpoints;
var re_points=this.re_points;
var im_points=this.im_points;
if ((xpoints.length < this.index) || (xpoints.length != re_points.length) || (xpoints.length != im_points.length)  ) {
return;
}var barWidth=((0.5 + (drawingPanel.xToPix$D(this.xmax) - drawingPanel.xToPix$D(this.xmin)) / (2.0 * (this.index - 1)))|0);
barWidth=Math.min(this.markerSize, barWidth);
var yorigin=drawingPanel.yToPix$D(0);
for (var i=0; i < this.index; i++) {
var re=re_points[i];
var im=im_points[i];
var y=Math.sqrt(re * re + im * im);
g2.setColor$java_awt_Color($I$(1,"phaseToColor$D",[Math.atan2(im, re)]));
var xpix=drawingPanel.xToPix$D(xpoints[i]);
var height=Math.abs(yorigin - drawingPanel.yToPix$D(y));
if (this.centered) {
g2.fillRect$I$I$I$I(xpix - barWidth, yorigin - (height/2|0), 2 * barWidth + 1, height);
} else {
g2.fillRect$I$I$I$I(xpix - barWidth, yorigin - height, 2 * barWidth + 1, height);
}}
});

Clazz.newMeth(C$, 'drawPhasePosts$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D',  function (drawingPanel, g2) {
if (this.index < 1) {
return;
}var xpoints=this.xpoints;
var re_points=this.re_points;
var im_points=this.im_points;
if ((xpoints.length < this.index) || (xpoints.length != re_points.length) || (xpoints.length != im_points.length)  ) {
return;
}var postWidth=((0.5 + (drawingPanel.xToPix$D(this.xmax) - drawingPanel.xToPix$D(this.xmin)) / (2.0 * (this.index - 1)))|0);
postWidth=Math.min(this.markerSize, postWidth);
for (var i=0; i < this.index; i++) {
var re=re_points[i];
var im=im_points[i];
var y=Math.sqrt(re * re + im * im);
p$1.drawPost$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D$D$D$I$java_awt_Color.apply(this, [drawingPanel, g2, xpoints[i], y, postWidth, $I$(1,"phaseToColor$D",[Math.atan2(im, re)])]);
}
});

Clazz.newMeth(C$, 'drawPost$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D$D$D$I$java_awt_Color',  function (drawingPanel, g2, x, y, postWidth, fillColor) {
var edgeColor=$I$(3).BLACK;
var xp=drawingPanel.xToPix$D(x);
var yp=drawingPanel.yToPix$D(y);
var size=postWidth * 2 + 1;
var bottom=Math.min(drawingPanel.yToPix$D(0), drawingPanel.yToPix$D(drawingPanel.getYMin$()));
var shape=Clazz.new_($I$(15,1).c$$D$D$D$D,[xp - postWidth, yp - postWidth, size, size]);
g2.setColor$java_awt_Color(edgeColor);
g2.drawLine$I$I$I$I(xp, yp, xp, bottom);
g2.setColor$java_awt_Color(fillColor);
g2.fill$java_awt_Shape(shape);
g2.setColor$java_awt_Color(edgeColor);
g2.draw$java_awt_Shape(shape);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(16,1));
}, 1);

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getColumnNames$',  function () {
return Clazz.array(String, -1, ["Re", "Im"]);
});

Clazz.newMeth(C$, 'getData2D$',  function () {
var data=Clazz.array(Double.TYPE, [3, this.index]);
data[0]=this.getXPoints$();
data[1]=this.getRePoints$();
data[2]=this.getImPoints$();
return data;
});

Clazz.newMeth(C$, 'getData3D$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDatasets$',  function () {
if ((this.reDataset == null ) || (this.imDataset == null ) ) {
this.reDataset=Clazz.new_([$I$(3).RED, $I$(3).RED, true],$I$(17,1).c$$java_awt_Color$java_awt_Color$Z);
this.imDataset=Clazz.new_([$I$(3).BLUE, $I$(3).BLUE, true],$I$(17,1).c$$java_awt_Color$java_awt_Color$Z);
}this.reDataset.setXYColumnNames$S$S$S(this.xColumnName, this.reColumnName, "Re(" + this.name + ")" );
this.imDataset.setXYColumnNames$S$S$S(this.xColumnName, this.imColumnName, "Im(" + this.name + ")" );
this.reDataset.set$DA$DA(this.getXPoints$(), this.getRePoints$());
this.imDataset.set$DA$DA(this.getXPoints$(), this.getImPoints$());
var list=Clazz.new_($I$(18,1));
list.add$O(this.reDataset);
list.add$O(this.imDataset);
return list;
});

Clazz.newMeth(C$, 'getDataList$',  function () {
if ((this.reDataset == null ) || (this.imDataset == null ) ) {
this.reDataset=Clazz.new_([$I$(3).RED, $I$(3).RED, true],$I$(17,1).c$$java_awt_Color$java_awt_Color$Z);
this.imDataset=Clazz.new_([$I$(3).BLUE, $I$(3).BLUE, true],$I$(17,1).c$$java_awt_Color$java_awt_Color$Z);
}this.reDataset.setXYColumnNames$S$S$S(this.xColumnName, this.reColumnName, "Re(" + this.name + ")" );
this.imDataset.setXYColumnNames$S$S$S(this.xColumnName, this.imColumnName, "Im(" + this.name + ")" );
this.reDataset.set$DA$DA(this.getXPoints$(), this.getRePoints$());
this.imDataset.set$DA$DA(this.getXPoints$(), this.getImPoints$());
var list=Clazz.new_($I$(18,1));
list.add$O(this.reDataset);
list.add$O(this.imDataset);
return list;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ComplexDataset, "Model", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.display.DataTable','.OSPTableModel']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getStride$',  function () {
return this.b$['org.opensourcephysics.display.ComplexDataset'].stride;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.b$['org.opensourcephysics.display.ComplexDataset'].getRowCount$.apply(this.b$['org.opensourcephysics.display.ComplexDataset'], []);
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.b$['org.opensourcephysics.display.ComplexDataset'].getColumnCount$.apply(this.b$['org.opensourcephysics.display.ComplexDataset'], []);
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (rowIndex, columnIndex) {
return Double.valueOf$D(this.b$['org.opensourcephysics.display.ComplexDataset'].getValueAt$I$I.apply(this.b$['org.opensourcephysics.display.ComplexDataset'], [rowIndex, columnIndex]));
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (columnIndex) {
return Clazz.getClass(Double);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ComplexDataset, "Phase", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var w=panel.getWidth$() - 5 + 1;
var h=panel.getHeight$() - 25;
for (var i=5; i < w; i++) {
var theta=3.141592653589793 * (-1 + 2 * (i) / w);
var c=$I$(1).phaseToColor$D(theta);
g.setColor$java_awt_Color(c);
g.drawLine$I$I$I$I(i, 5, i, h);
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ComplexDataset, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
control.setValue$S$O("points", data.getPoints$());
control.setValue$S$I("marker_shape", data.getMarkerShape$());
control.setValue$S$I("marker_size", data.getMarkerSize$());
control.setValue$S$Z("sorted", data.isSorted$());
control.setValue$S$Z("connected", data.isConnected$());
control.setValue$S$O("name", data.name);
control.setValue$S$O("x_name", data.xColumnName);
control.setValue$S$O("re_name", data.reColumnName);
control.setValue$S$O("im_name", data.imColumnName);
control.setValue$S$O("line_color", data.lineColor);
control.setValue$S$I("index", data.index);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
var points=control.getObject$S("points");
if ((points != null ) && (points[0] != null ) ) {
data.clear$();
for (var i=0; i < points.length; i++) {
data.append$D$D$D(points[i][0], points[i][1], points[i][2]);
}
}var xPoints=control.getObject$S("x_points");
var yPoints=control.getObject$S("y_points");
if ((xPoints != null ) && (yPoints != null ) ) {
data.clear$();
data.append$DA$DA(xPoints, yPoints);
}if (control.getPropertyNamesRaw$().contains$O("marker_shape")) {
data.setMarkerShape$I(control.getInt$S("marker_shape"));
}if (control.getPropertyNamesRaw$().contains$O("marker_size")) {
data.setMarkerSize$I(control.getInt$S("marker_size"));
}data.setSorted$Z(control.getBoolean$S("sorted"));
data.setConnected$Z(control.getBoolean$S("connected"));
data.name=control.getString$S("name");
data.xColumnName=control.getString$S("x_name");
data.reColumnName=control.getString$S("re_name");
data.imColumnName=control.getString$S("im_name");
var color=control.getObject$S("line_color");
if (color != null ) {
data.lineColor=color;
}data.index=control.getInt$S("index");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
