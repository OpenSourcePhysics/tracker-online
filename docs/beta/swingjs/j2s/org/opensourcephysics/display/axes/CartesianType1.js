(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),p$1={},I$=[[0,'org.opensourcephysics.display.DrawableTextLine','java.text.DecimalFormat','java.util.Hashtable','java.awt.Font','org.opensourcephysics.display.axes.CoordinateStringBuilder','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CartesianType1", null, 'org.opensourcephysics.display.axes.AbstractAxes', ['org.opensourcephysics.display.axes.CartesianAxes', 'org.opensourcephysics.display.Dimensioned']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xlog=false;
this.ylog=false;
this.labelFontMetrics=null;
this.superscriptFontMetrics=null;
this.titleFontMetrics=null;
this.gridCurJuke=0;
this.xLine=Clazz.new_($I$(1,1).c$$S$D$D,["x", 0, 0]);
this.yLine=Clazz.new_($I$(1,1).c$$S$D$D,["y", 0, 0]);
this.xticks=null;
this.yticks=null;
this.xticklabels=null;
this.yticklabels=null;
this.numberFormat=Clazz.new_($I$(2,1));
this.scientificFormat=Clazz.new_($I$(2,1).c$$S,["0.0E0"]);
this.drawMajorXGrid=true;
this.drawMinorXGrid=false;
this.drawMajorYGrid=true;
this.drawMinorYGrid=false;
this.topGutter=25;
this.bottomGutter=45;
this.leftGutter=45;
this.rightGutter=25;
this.tickLength=5;
this.adjustGutters=true;
this.htFormats=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['xlog','ylog','drawMajorXGrid','drawMinorXGrid','drawMajorYGrid','drawMinorYGrid','adjustGutters'],'D',['yMax','yMin','xMax','xMin','ytickMax','ytickMin','xtickMax','xtickMin','gridBase'],'I',['yExponent','xExponent','gridCurJuke','topGutter','bottomGutter','leftGutter','rightGutter','tickLength'],'O',['labelFontMetrics','java.awt.FontMetrics','+superscriptFontMetrics','+titleFontMetrics','xLine','org.opensourcephysics.display.DrawableTextLine','+yLine','xticks','java.util.ArrayList','+yticks','+xticklabels','+yticklabels','numberFormat','java.text.DecimalFormat','+scientificFormat','htFormats','java.util.Hashtable']]
,['D',['LOG10SCALE']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_PlottingPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[panel]);C$.$init$.apply(this);
this.defaultTopGutter=this.topGutter;
this.defaultBottomGutter=this.bottomGutter;
this.defaultLeftGutter=this.leftGutter;
this.defaultRightGutter=this.rightGutter;
this.labelFont=Clazz.new_($I$(4,1).c$$S$I$I,["Dialog", 0, 12]);
this.superscriptFont=Clazz.new_($I$(4,1).c$$S$I$I,["Dialog", 0, 9]);
this.xLine.setJustification$I(0);
this.xLine.setFont$java_awt_Font(this.labelFont);
this.xLine.setPixelXY$Z(true);
this.yLine.setJustification$I(0);
this.yLine.setFont$java_awt_Font(this.labelFont);
this.yLine.setTheta$D(1.5707963267948966);
this.yLine.setPixelXY$Z(true);
this.titleLine.setJustification$I(0);
this.titleLine.setFont$java_awt_Font(this.titleFont);
this.titleLine.setPixelXY$Z(true);
if (panel == null ) {
return;
}panel.setPreferredGutters$I$I$I$I(this.leftGutter, this.topGutter, this.rightGutter, this.bottomGutter);
p$1.measureFonts$javax_swing_JPanel.apply(this, [panel]);
panel.setAxes$org_opensourcephysics_display_axes_DrawableAxes(this);
panel.setCoordinateStringBuilder$org_opensourcephysics_display_axes_CoordinateStringBuilder($I$(5).createCartesian$());
this.resizeFonts$D$org_opensourcephysics_display_DrawingPanel($I$(6,"getFactor$I",[$I$(6).getLevel$()]), panel);
}, 1);

Clazz.newMeth(C$, 'xToPix$D$org_opensourcephysics_display_DrawingPanel',  function (x, panel) {
var pixelMatrix=panel.getPixelMatrix$();
var pix=pixelMatrix[0] * x + pixelMatrix[4];
if (pix > 2147483647 ) {
return 2147483647;
}if (pix < -2147483648 ) {
return -2147483648;
}return (Math.floor(pix)|0);
}, p$1);

Clazz.newMeth(C$, 'yToPix$D$org_opensourcephysics_display_DrawingPanel',  function (y, panel) {
var pixelMatrix=panel.getPixelMatrix$();
var pix=pixelMatrix[3] * y + pixelMatrix[5];
if (pix > 2147483647 ) {
return 2147483647;
}if (pix < -2147483648 ) {
return -2147483648;
}return (Math.floor(pix)|0);
}, p$1);

Clazz.newMeth(C$, 'getLeftGutter$org_opensourcephysics_display_DrawingPanel',  function (panel) {
var gutter=40;
if (this.ylog) {
return gutter + 10;
}var height=panel.getHeight$() - this.topGutter - this.bottomGutter ;
var numberYTickMarks=2 + (height/(this.labelFontMetrics.getHeight$() + 10)|0);
numberYTickMarks=((numberYTickMarks / panel.getImageRatio$())|0);
var yTickSize=p$1.roundUp$D.apply(this, [(this.ytickMax - this.ytickMin) / numberYTickMarks]);
var yStart=yTickSize * Math.ceil(this.ytickMin / yTickSize);
var numfracdigits=p$1.numFracDigits$D.apply(this, [yTickSize]);
var chop=Math.abs(yTickSize / 100);
if ((yTickSize == 0 ) || (Math.abs((this.ytickMax - yStart) / yTickSize) > 50 ) ) {
return gutter;
}var ypos=yStart;
var sh=this.labelFontMetrics.getHeight$();
for (var i=0; i <= numberYTickMarks; i++) {
var yticklabel=p$1.formatNum$D$I$D.apply(this, [ypos, numfracdigits, chop]);
var sw=this.labelFontMetrics.stringWidth$S(yticklabel);
gutter=Math.max(sw + 2 * sh, gutter);
ypos+=yTickSize;
}
return Math.min(gutter, panel.getWidth$());
}, p$1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}this.topGutter=panel.getTopGutter$();
this.bottomGutter=panel.getBottomGutter$();
this.leftGutter=panel.getLeftGutter$();
this.rightGutter=panel.getRightGutter$();
this.yMax=panel.getYMax$();
this.yMin=panel.getYMin$();
this.xMax=panel.getXMax$();
this.xMin=panel.getXMin$();
if (this.xMax < this.xMin ) {
var temp=this.xMax;
this.xMax=this.xMin;
this.xMin=temp;
}if (this.yMax < this.yMin ) {
var temp=this.yMax;
this.yMax=this.yMin;
this.yMin=temp;
}p$1.setXRange$D$D.apply(this, [this.xMin, this.xMax]);
p$1.setYRange$D$D.apply(this, [this.yMin, this.yMax]);
if (this.adjustGutters) {
this.leftGutter=Math.max(this.leftGutter, p$1.getLeftGutter$org_opensourcephysics_display_DrawingPanel.apply(this, [panel]));
if (this.leftGutter != panel.getLeftGutter$()) {
panel.setGutters$I$I$I$I(this.leftGutter, this.topGutter, this.rightGutter, this.bottomGutter);
}panel.setPixelScale$();
}this.numberFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(7).getDecimalFormatSymbols$());
this.scientificFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(7).getDecimalFormatSymbols$());
this.drawPlot$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'addXTick$S$D',  function (label, position) {
if (this.xticks == null ) {
this.xticks=Clazz.new_($I$(8,1));
this.xticklabels=Clazz.new_($I$(8,1));
}this.xticks.add$O( new Double(position));
this.xticklabels.add$O(label);
});

Clazz.newMeth(C$, 'addYTick$S$D',  function (label, position) {
if (this.yticks == null ) {
this.yticks=Clazz.new_($I$(8,1));
this.yticklabels=Clazz.new_($I$(8,1));
}this.yticks.add$O( new Double(position));
this.yticklabels.add$O(label);
});

Clazz.newMeth(C$, 'setLabelFont$S',  function (name) {
if ((name == null ) || name.equals$O("") ) {
return;
}this.labelFont=$I$(4).decode$S(name);
});

Clazz.newMeth(C$, 'setTitle$S$S',  function (title, font_name) {
this.titleLine.setText$S(title);
if ((font_name == null ) || font_name.equals$O("") ) {
this.resizeFonts$D$org_opensourcephysics_display_DrawingPanel($I$(6,"getFactor$I",[$I$(6).getLevel$()]), this.drawingPanel);
return;
}this.titleLine.setFont$java_awt_Font($I$(4).decode$S(font_name));
this.setTitleFont$S(font_name);
this.resizeFonts$D$org_opensourcephysics_display_DrawingPanel($I$(6,"getFactor$I",[$I$(6).getLevel$()]), this.drawingPanel);
});

Clazz.newMeth(C$, 'setTitleFont$S',  function (name) {
if ((name == null ) || name.equals$O("") ) {
return;
}this.titleFont=$I$(4).decode$S(name);
this.titleLine.setFont$java_awt_Font(this.titleFont);
});

Clazz.newMeth(C$, 'setXLabel$S$S',  function (label, font_name) {
this.xLine.setText$S(label);
if ((font_name == null ) || font_name.equals$O("") ) {
return;
}this.xLine.setFont$java_awt_Font($I$(4).decode$S(font_name));
this.setLabelFont$S(font_name);
});

Clazz.newMeth(C$, 'setXLog$Z',  function (xlog) {
this.xlog=xlog;
});

Clazz.newMeth(C$, 'setYLabel$S$S',  function (label, font_name) {
this.yLine.setText$S(label);
if ((font_name == null ) || font_name.equals$O("") ) {
return;
}this.yLine.setFont$java_awt_Font($I$(4).decode$S(font_name));
this.setLabelFont$S(font_name);
});

Clazz.newMeth(C$, 'setYLog$Z',  function (ylog) {
this.ylog=ylog;
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.titleLine.getText$();
});

Clazz.newMeth(C$, 'getXLabel$',  function () {
return this.xLine.getText$();
});

Clazz.newMeth(C$, 'isXLog$',  function () {
return this.xlog;
});

Clazz.newMeth(C$, 'getYLabel$',  function () {
return this.yLine.getText$();
});

Clazz.newMeth(C$, 'isYLog$',  function () {
return this.ylog;
});

Clazz.newMeth(C$, 'resizeFonts$D$org_opensourcephysics_display_DrawingPanel',  function (factor, panel) {
C$.superclazz.prototype.resizeFonts$D$org_opensourcephysics_display_DrawingPanel.apply(this, [factor, panel]);
if (this.xLine == null ) {
return;
}this.xLine.setFont$java_awt_Font(this.labelFont);
this.yLine.setFont$java_awt_Font(this.labelFont);
var left=((this.defaultLeftGutter * factor)|0);
var bottom=((this.defaultBottomGutter * factor)|0);
var top=((this.defaultTopGutter * (1 + factor) / 2)|0);
if (this.getTitle$() != null  && !this.getTitle$().equals$O("") ) {
top=((this.defaultTopGutter * factor)|0);
}var right=((this.defaultRightGutter * (1 + factor) / 2)|0);
panel.setPreferredGutters$I$I$I$I(left, top, right, bottom);
p$1.measureFonts$javax_swing_JPanel.apply(this, [panel]);
});

Clazz.newMeth(C$, 'getTickLength$',  function () {
return this.tickLength;
});

Clazz.newMeth(C$, 'drawPlot$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, graphics) {
var foreground=panel.getForeground$();
var panelHeight=panel.getHeight$();
var panelWidth=panel.getWidth$();
graphics=graphics.create$();
graphics.clipRect$I$I$I$I(0, 0, panelWidth, panelHeight);
graphics.setFont$java_awt_Font(this.labelFont);
graphics.setColor$java_awt_Color(foreground);
var lrx=panelWidth - this.rightGutter;
var lry=panelHeight - this.bottomGutter;
var titlefontheight=this.titleFontMetrics.getHeight$();
var vSpaceForTitle=titlefontheight;
var labelheight=this.labelFontMetrics.getHeight$();
var halflabelheight=(labelheight/2|0);
var yStartPosition=panelHeight - 5;
var xStartPosition=panelWidth - 5 - $I$(7).macOffset ;
if (this.xlog) {
this.xExponent=(Math.floor(this.xtickMin)|0);
}if ((this.xExponent != 0) && (this.xticks == null ) ) {
var superscript=Integer.toString$I(this.xExponent);
xStartPosition-=this.superscriptFontMetrics.stringWidth$S(superscript);
graphics.setFont$java_awt_Font(this.superscriptFont);
if (!this.xlog) {
graphics.drawString$S$I$I(superscript, xStartPosition, yStartPosition - halflabelheight);
xStartPosition-=this.labelFontMetrics.stringWidth$S("x 10");
graphics.setFont$java_awt_Font(this.labelFont);
graphics.drawString$S$I$I("x 10", xStartPosition, yStartPosition);
}}var height=panelHeight - this.topGutter - this.bottomGutter ;
var numberYTickMarks=2 + (height/(labelheight + 10)|0);
numberYTickMarks=((numberYTickMarks / panel.getImageRatio$())|0);
var yTickSize=p$1.roundUp$D.apply(this, [(this.ytickMax - this.ytickMin) / numberYTickMarks]);
var yStart=yTickSize * Math.ceil(this.ytickMin / yTickSize);
var width=panelWidth - this.rightGutter - this.leftGutter ;
if (this.interiorColor != null ) {
graphics.setColor$java_awt_Color(this.interiorColor);
graphics.fillRect$I$I$I$I(this.leftGutter, this.topGutter, width, height);
}var xCoord1=this.leftGutter + this.getTickLength$();
var xCoord2=lrx - Math.abs(this.tickLength);
var numfracdigits=p$1.numFracDigits$D.apply(this, [yTickSize]);
var yTickWidth=12;
if (this.yticks == null ) {
var ygrid=null;
var yTmpStart=yStart;
if (this.ylog) {
ygrid=p$1.gridInit$D$D$Z$java_util_ArrayList.apply(this, [yStart, yTickSize, true, null]);
yTmpStart=p$1.gridStep$java_util_ArrayList$D$D$Z.apply(this, [ygrid, yStart, yTickSize, this.ylog]);
}var needExponent=this.ylog;
var firstIteration=true;
graphics.setColor$java_awt_Color(foreground);
var chop=Math.abs(yTickSize / 100);
var counter=numberYTickMarks;
for (var ypos=yTmpStart; ypos <= this.ytickMax ; ypos=p$1.gridStep$java_util_ArrayList$D$D$Z.apply(this, [ygrid, ypos, yTickSize, this.ylog])) {
if (--counter < 0) {
break;
}var yticklabel=null;
if (this.ylog) {
yticklabel=p$1.formatLogNum$D$I.apply(this, [ypos, numfracdigits]);
if (yticklabel.indexOf$I("e") != -1) {
needExponent=false;
}} else {
yticklabel=p$1.formatNum$D$I$D.apply(this, [ypos, numfracdigits, chop]);
}var yCoord1=0;
if (this.ylog || (this.yExponent == 0) ) {
yCoord1=p$1.yToPix$D$org_opensourcephysics_display_DrawingPanel.apply(this, [ypos, panel]);
} else {
yCoord1=p$1.yToPix$D$org_opensourcephysics_display_DrawingPanel.apply(this, [ypos * Math.pow(10, this.yExponent), panel]);
}var offset=(labelheight/4|0);
if (firstIteration && !this.ylog ) {
firstIteration=false;
offset=0;
}if (this.drawMajorYGrid && (yCoord1 >= this.topGutter) && (yCoord1 <= lry)  ) {
graphics.setColor$java_awt_Color(this.gridcolor);
graphics.drawLine$I$I$I$I(xCoord1, yCoord1, xCoord2, yCoord1);
graphics.setColor$java_awt_Color(foreground);
}graphics.drawLine$I$I$I$I(this.leftGutter, yCoord1, xCoord1, yCoord1);
graphics.drawLine$I$I$I$I(width + this.leftGutter - 1, yCoord1, xCoord2, yCoord1);
var labelWidth=this.labelFontMetrics.stringWidth$S(yticklabel);
graphics.drawString$S$I$I(yticklabel, this.leftGutter - labelWidth - 4 , yCoord1 + offset);
var sw=this.labelFontMetrics.stringWidth$S(yticklabel);
yTickWidth=Math.max(yTickWidth, sw);
}
if (this.ylog || this.drawMinorYGrid ) {
var unlabeledgrid=p$1.gridInit$D$D$Z$java_util_ArrayList.apply(this, [yStart, yTickSize, false, ygrid]);
if (unlabeledgrid.size$() > 0) {
var tmpStep=(yTickSize > 1.0 ) ? 1.0 : yTickSize;
for (var ypos=p$1.gridStep$java_util_ArrayList$D$D$Z.apply(this, [unlabeledgrid, yStart, tmpStep, this.ylog]); ypos <= this.ytickMax ; ypos=p$1.gridStep$java_util_ArrayList$D$D$Z.apply(this, [unlabeledgrid, ypos, tmpStep, this.ylog])) {
var yCoord1=p$1.yToPix$D$org_opensourcephysics_display_DrawingPanel.apply(this, [ypos, panel]);
if ((yCoord1 != this.topGutter) && (yCoord1 != lry) ) {
graphics.setColor$java_awt_Color(this.gridcolor);
graphics.drawLine$I$I$I$I(this.leftGutter + 1, yCoord1, lrx - 1, yCoord1);
graphics.setColor$java_awt_Color(foreground);
}}
}if (needExponent) {
this.yExponent=(Math.floor(yTmpStart)|0);
} else {
this.yExponent=0;
}}if (this.yExponent != 0) {
graphics.drawString$S$I$I("x 10", 2, vSpaceForTitle);
graphics.setFont$java_awt_Font(this.superscriptFont);
graphics.drawString$S$I$I(Integer.toString$I(this.yExponent), this.labelFontMetrics.stringWidth$S("x 10") + 2, vSpaceForTitle - halflabelheight);
graphics.setFont$java_awt_Font(this.labelFont);
}} else {
var nt=this.yticks.iterator$();
for (var nl=this.yticklabels.iterator$(); nl.hasNext$(); ) {
var label=nl.next$();
var sw=this.labelFontMetrics.stringWidth$S(label);
yTickWidth=Math.max(yTickWidth, sw);
var ypos=((nt.next$())).doubleValue$();
if ((ypos > this.yMax ) || (ypos < this.yMin ) ) {
continue;
}var yCoord1=p$1.yToPix$D$org_opensourcephysics_display_DrawingPanel.apply(this, [ypos * Math.pow(10, this.yExponent), panel]);
var offset=0;
if (ypos < lry - labelheight ) {
offset=halflabelheight;
}graphics.drawLine$I$I$I$I(this.leftGutter, yCoord1, xCoord1, yCoord1);
graphics.drawLine$I$I$I$I(width + this.leftGutter - 1, yCoord1, xCoord2, yCoord1);
if (this.drawMajorYGrid && (yCoord1 >= this.topGutter) && (yCoord1 <= lry)  ) {
graphics.setColor$java_awt_Color(this.gridcolor);
graphics.drawLine$I$I$I$I(xCoord1, yCoord1, xCoord2, yCoord1);
graphics.setColor$java_awt_Color(foreground);
}graphics.drawString$S$I$I(label, this.leftGutter - this.labelFontMetrics.stringWidth$S(label) - 3 , yCoord1 + offset);
}
}var yCoord1=this.topGutter + Math.abs(this.tickLength);
var yCoord2=lry - this.tickLength;
var charwidth=this.labelFontMetrics.stringWidth$S("8");
if (this.xticks == null ) {
var numberXTickMarks=10;
numberXTickMarks=((numberXTickMarks / panel.getImageRatio$())|0);
var xTickSize=0.0;
numfracdigits=0;
if (this.xlog) {
numberXTickMarks=4 + (width/((charwidth * 6) + 10)|0);
numberXTickMarks=((numberXTickMarks / panel.getImageRatio$())|0);
} else {
var count=0;
while (count++ <= 10){
xTickSize=p$1.roundUp$D.apply(this, [(this.xtickMax - this.xtickMin) / numberXTickMarks]);
numfracdigits=p$1.numFracDigits$D.apply(this, [xTickSize]);
var intdigits=p$1.numIntDigits$D.apply(this, [this.xtickMax]);
var inttemp=p$1.numIntDigits$D.apply(this, [this.xtickMin]);
if (intdigits < inttemp) {
intdigits=inttemp;
}var maxlabelwidth=charwidth * (numfracdigits + 2 + intdigits );
var savenx=numberXTickMarks;
numberXTickMarks=2 + (width/(maxlabelwidth + 10)|0);
numberXTickMarks=((numberXTickMarks / panel.getImageRatio$())|0);
if ((numberXTickMarks - savenx <= 1) || (savenx - numberXTickMarks <= 1) ) {
break;
}}
}xTickSize=(this.xlog) ? p$1.roundUp$D.apply(this, [0.8 * (this.xtickMax - this.xtickMin) / numberXTickMarks]) : p$1.roundUp$D.apply(this, [(this.xtickMax - this.xtickMin) / numberXTickMarks]);
numfracdigits=p$1.numFracDigits$D.apply(this, [xTickSize]);
var xStart=xTickSize * Math.ceil(this.xtickMin / xTickSize);
var xgrid=null;
var xTmpStart=xStart;
if (this.xlog) {
xStart=xTickSize * Math.floor(this.xtickMin / xTickSize);
xgrid=p$1.gridInit$D$D$Z$java_util_ArrayList.apply(this, [xStart, xTickSize, true, null]);
xTmpStart=p$1.gridRoundUp$java_util_ArrayList$D.apply(this, [xgrid, xStart]);
}var needExponent=this.xlog;
graphics.setColor$java_awt_Color(foreground);
var chop=Math.abs(yTickSize / 100);
var counter=numberXTickMarks;
for (var xpos=xTmpStart; xpos <= this.xtickMax ; xpos=p$1.gridStep$java_util_ArrayList$D$D$Z.apply(this, [xgrid, xpos, xTickSize, this.xlog])) {
if (--counter < 0) {
break;
}var xticklabel=null;
var hasExponent=false;
if (this.xlog) {
xticklabel=p$1.formatLogNum$D$I.apply(this, [xpos, numfracdigits]);
if (xticklabel.indexOf$I("e") != -1) {
needExponent=false;
hasExponent=true;
}} else {
xticklabel=p$1.formatNum$D$I$D.apply(this, [xpos, numfracdigits, chop]);
}if (this.xlog || (this.xExponent == 0) ) {
xCoord1=p$1.xToPix$D$org_opensourcephysics_display_DrawingPanel.apply(this, [xpos, panel]);
} else {
xCoord1=p$1.xToPix$D$org_opensourcephysics_display_DrawingPanel.apply(this, [xpos * Math.pow(10, this.xExponent), panel]);
}graphics.drawLine$I$I$I$I(xCoord1, this.topGutter, xCoord1, yCoord1);
graphics.drawLine$I$I$I$I(xCoord1, height + this.topGutter - 1, xCoord1, yCoord2);
if (this.drawMajorXGrid && (xCoord1 >= this.leftGutter) && (xCoord1 <= lrx)  ) {
graphics.setColor$java_awt_Color(this.gridcolor);
graphics.drawLine$I$I$I$I(xCoord1, yCoord1, xCoord1, yCoord2);
graphics.setColor$java_awt_Color(foreground);
}graphics.drawLine$I$I$I$I(xCoord1, lry, xCoord1, yCoord2);
var labxpos=xCoord1 - (this.labelFontMetrics.stringWidth$S(xticklabel)/2|0);
if (hasExponent) {
graphics.drawString$S$I$I(xticklabel, labxpos + 7, lry + 3 + labelheight );
} else {
graphics.drawString$S$I$I(xticklabel, labxpos, lry + 3 + labelheight );
}}
if (this.xlog || this.drawMinorXGrid ) {
var tmpStep=(xTickSize > 1.0 ) ? 1.0 : xTickSize;
xTmpStart=tmpStep * Math.ceil(this.xtickMin / tmpStep);
var unlabeledgrid=p$1.gridInit$D$D$Z$java_util_ArrayList.apply(this, [xTmpStart, tmpStep, false, xgrid]);
if (unlabeledgrid.size$() > 0) {
for (var xpos=p$1.gridStep$java_util_ArrayList$D$D$Z.apply(this, [unlabeledgrid, xTmpStart, tmpStep, this.xlog]); xpos <= this.xtickMax ; xpos=p$1.gridStep$java_util_ArrayList$D$D$Z.apply(this, [unlabeledgrid, xpos, tmpStep, this.xlog])) {
xCoord1=p$1.xToPix$D$org_opensourcephysics_display_DrawingPanel.apply(this, [xpos, panel]);
if ((xCoord1 != this.leftGutter) && (xCoord1 != lrx) ) {
graphics.setColor$java_awt_Color(this.gridcolor);
graphics.drawLine$I$I$I$I(xCoord1, this.topGutter + 1, xCoord1, lry - 1);
graphics.setColor$java_awt_Color(foreground);
}}
}if (needExponent) {
this.xExponent=(Math.floor(xTmpStart)|0);
graphics.setFont$java_awt_Font(this.superscriptFont);
graphics.drawString$S$I$I(Integer.toString$I(this.xExponent), xStartPosition, yStartPosition - halflabelheight);
xStartPosition-=this.labelFontMetrics.stringWidth$S("x 10");
graphics.setFont$java_awt_Font(this.labelFont);
graphics.drawString$S$I$I("x 10", xStartPosition, yStartPosition);
} else {
this.xExponent=0;
}}} else {
var nt=this.xticks.iterator$();
var nl=this.xticklabels.iterator$();
var preLength=0.0;
while (nl.hasNext$()){
var label=nl.next$();
var xpos=((nt.next$())).doubleValue$();
if ((xpos > this.xMax ) || (xpos < this.xMin ) ) {
continue;
}xCoord1=p$1.xToPix$D$org_opensourcephysics_display_DrawingPanel.apply(this, [xpos * Math.pow(10, this.xExponent), panel]);
var labxpos=xCoord1 - (this.labelFontMetrics.stringWidth$S(label)/2|0);
if (labxpos > preLength ) {
preLength=xCoord1 + (this.labelFontMetrics.stringWidth$S(label)/2|0) + 10;
graphics.drawString$S$I$I(label, labxpos, lry + 3 + labelheight );
if (this.drawMajorXGrid && (xCoord1 >= this.leftGutter) && (xCoord1 <= lrx)  ) {
graphics.setColor$java_awt_Color(this.gridcolor);
graphics.drawLine$I$I$I$I(xCoord1, yCoord1, xCoord1, yCoord2);
}graphics.setColor$java_awt_Color(foreground);
graphics.drawLine$I$I$I$I(xCoord1, this.topGutter, xCoord1, yCoord1);
graphics.drawLine$I$I$I$I(xCoord1, height + this.topGutter - 1, xCoord1, yCoord2);
}}
}graphics.setColor$java_awt_Color(foreground);
if (this.titleLine != null ) {
this.titleLine.setX$D((panel.getLeftGutter$()/2|0) + ((panel.getWidth$() - panel.getRightGutter$())/2|0));
if (panel.getTopGutter$() > 1.2 * this.labelFontMetrics.getHeight$() ) {
this.titleLine.setY$D(panel.getTopGutter$() - 0.6 * this.labelFontMetrics.getHeight$());
} else {
this.titleLine.setY$D(panel.getTopGutter$() + 1.5 * this.labelFontMetrics.getHeight$());
}this.titleLine.setColor$java_awt_Color(foreground);
this.titleLine.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, graphics);
}if (this.xLine != null ) {
var mid=this.leftGutter / 2.0 + (panel.getWidth$() - this.rightGutter) / 2.0;
this.xLine.setX$D(mid);
var yoff=panel.getBottomGutter$() - 2 * this.labelFontMetrics.getHeight$();
this.xLine.setY$D(panel.getHeight$() - Math.max(0, yoff));
this.xLine.setColor$java_awt_Color(foreground);
this.xLine.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, graphics);
}if (this.yLine != null ) {
var mid=this.topGutter / 2.0 + ((panel.getHeight$() - this.bottomGutter)/2|0);
this.yLine.setY$D(mid);
var x=panel.getLeftGutter$() - yTickWidth - 0.7 * this.labelFontMetrics.getHeight$() ;
this.yLine.setX$D(Math.max(12, x));
this.yLine.setColor$java_awt_Color(foreground);
this.yLine.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, graphics);
}graphics.setColor$java_awt_Color(foreground);
graphics.drawRect$I$I$I$I(this.leftGutter, this.topGutter, width - 1, height - 1);
graphics.dispose$();
});

Clazz.newMeth(C$, 'formatLogNum$D$I',  function (num, numfracdigits) {
var results;
var exponent=(num|0);
if ((exponent >= 0) && (exponent < 10) ) {
results="0" + exponent;
} else {
if ((exponent < 0) && (exponent > -10) ) {
results="-0" + (-exponent);
} else {
results=Integer.toString$I(exponent);
}}if (num >= 0.0 ) {
if (num - ((num)|0) < 0.001 ) {
results="1e" + results;
} else {
results=p$1.formatNum$D$I$D.apply(this, [Math.pow(10.0, (num - (num|0))), numfracdigits, 1.4E-45]);
}} else {
if (-num - ((-num)|0) < 0.001 ) {
results="1e" + results;
} else {
results=p$1.formatNum$D$I$D.apply(this, [Math.pow(10.0, (num - (num|0))) * 10, numfracdigits, 1.4E-45]);
}}return results;
}, p$1);

Clazz.newMeth(C$, 'formatNum$D$I$D',  function (num, numfracdigits, chop) {
if (num == 0 ) {
return "0";
}var key="" + numfracdigits + " " + new Double(chop).toString() + " " + new Double(num).toString() ;
var val=this.htFormats.get$O(key);
if (val != null ) return val;
var numberFormat;
if ((Math.abs(num) < 0.01 ) && (Math.abs(num) > chop ) ) {
numberFormat=this.scientificFormat;
} else {
numberFormat=this.numberFormat;
numberFormat.setMinimumFractionDigits$I(numfracdigits);
numberFormat.setMaximumFractionDigits$I(numfracdigits);
}var df=numberFormat;
var c=$I$(7).getCurrentDecimalSeparator$();
var cc=df.getDecimalFormatSymbols$().getDecimalSeparator$();
if (!Character.valueOf$C(c).equals$O(Character.valueOf$C(cc))) {
df.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(7).getDecimalFormatSymbols$());
}this.htFormats.put$O$O(key, val=numberFormat.format$D(num));
return val;
}, p$1);

Clazz.newMeth(C$, 'gridInit$D$D$Z$java_util_ArrayList',  function (low, step, labeled, oldgrid) {
var grid=Clazz.new_($I$(8,1).c$$I,[10]);
var ratio=Math.pow(10.0, step);
var ngrid=1;
if (labeled) {
if (ratio <= 3.5 ) {
if (ratio > 2.0 ) {
ngrid=2;
} else if (ratio > 1.26 ) {
ngrid=5;
} else if (ratio > 1.125 ) {
ngrid=10;
} else {
ngrid=(Math.rint(1.0 / step)|0);
ngrid=10;
}}} else {
if (ratio > 10.0 ) {
ngrid=1;
} else if (ratio > 3.0 ) {
ngrid=2;
} else if (ratio > 2.0 ) {
ngrid=5;
} else if (ratio > 1.125 ) {
ngrid=10;
} else {
ngrid=100;
}}var oldgridi=0;
for (var i=0; i < ngrid; i++) {
var gridval=i * 1.0 / ngrid * 10;
var logval=C$.LOG10SCALE * Math.log(gridval);
if (logval == -Infinity ) {
logval=0.0;
}if ((oldgrid != null ) && (oldgridi < oldgrid.size$()) ) {
while ((oldgridi < oldgrid.size$()) && (oldgrid.get$I(oldgridi)).doubleValue$() < logval  ){
++oldgridi;
}
if (oldgridi < oldgrid.size$()) {
if (Math.abs((oldgrid.get$I(oldgridi)).doubleValue$() - logval) > 1.0E-5 ) {
grid.add$O( new Double(logval));
}} else {
grid.add$O( new Double(logval));
}} else {
grid.add$O( new Double(logval));
}}
this.gridCurJuke=0;
if (low == -0.0 ) {
low=0.0;
}this.gridBase=Math.floor(low);
var x=low - this.gridBase;
for (this.gridCurJuke=-1; (this.gridCurJuke + 1) < grid.size$() && (x >= (grid.get$I(this.gridCurJuke + 1)).doubleValue$() ) ; this.gridCurJuke++) {
}
return grid;
}, p$1);

Clazz.newMeth(C$, 'gridRoundUp$java_util_ArrayList$D',  function (grid, pos) {
var x=pos - Math.floor(pos);
var i;
for (i=0; (i < grid.size$()) && (x >= (grid.get$I(i)).doubleValue$() ) ; i++) {
}
if (i >= grid.size$()) {
return pos;
}return Math.floor(pos) + (grid.get$I(i)).doubleValue$();
}, p$1);

Clazz.newMeth(C$, 'gridStep$java_util_ArrayList$D$D$Z',  function (grid, pos, step, logflag) {
if (step == 0 ) {
step=1;
}if (logflag) {
if (++this.gridCurJuke >= grid.size$()) {
this.gridCurJuke=0;
this.gridBase+=Math.ceil(step);
}if (this.gridCurJuke >= grid.size$()) {
return pos + step;
}return this.gridBase + (grid.get$I(this.gridCurJuke)).doubleValue$();
}if (pos + step == pos ) {
while (pos + step == pos ){
step*=2;
}
return pos + step;
}return pos + step;
}, p$1);

Clazz.newMeth(C$, 'measureFonts$javax_swing_JPanel',  function (panel) {
this.labelFontMetrics=panel.getFontMetrics$java_awt_Font(this.labelFont);
this.superscriptFontMetrics=panel.getFontMetrics$java_awt_Font(this.superscriptFont);
this.titleFontMetrics=panel.getFontMetrics$java_awt_Font(this.titleFont);
}, p$1);

Clazz.newMeth(C$, 'numFracDigits$D',  function (num) {
var numdigits=0;
while ((numdigits <= 15) && (num != Math.floor(num) ) ){
num*=10.0;
numdigits+=1;
}
return numdigits;
}, p$1);

Clazz.newMeth(C$, 'numIntDigits$D',  function (num) {
var numdigits=0;
while ((numdigits <= 15) && (num|0) != 0.0  ){
num/=10.0;
numdigits+=1;
}
return numdigits;
}, p$1);

Clazz.newMeth(C$, 'roundUp$D',  function (val) {
var exponent=(Math.floor(Math.log(val) * C$.LOG10SCALE)|0);
val*=Math.pow(10, -exponent);
if (val > 5.0 ) {
val=10.0;
} else if (val > 2.0 ) {
val=5.0;
} else if (val > 1.0 ) {
val=2.0;
} else {
val=1.0;
}val*=Math.pow(10, exponent);
return val;
}, p$1);

Clazz.newMeth(C$, 'setXRange$D$D',  function (min, max) {
var largest=Math.max(Math.abs(this.xMin), Math.abs(this.xMax));
var range=Math.abs(this.xMax - this.xMin);
if ((this.xMin >= 0 ) && (this.xMax <= 1000 ) && (range > 0.1 ) && !this.xlog  ) {
this.xExponent=0;
} else {
this.xExponent=(Math.floor(Math.log(largest) * C$.LOG10SCALE)|0);
}if ((this.xExponent > 1) || (this.xExponent < -1) ) {
var xs=1.0 / Math.pow(10.0, this.xExponent);
this.xtickMin=this.xMin * xs;
this.xtickMax=this.xMax * xs;
} else {
this.xtickMin=this.xMin;
this.xtickMax=this.xMax;
this.xExponent=0;
}}, p$1);

Clazz.newMeth(C$, 'setYRange$D$D',  function (min, max) {
var largest=Math.max(Math.abs(this.yMin), Math.abs(this.yMax));
if ((this.yMin >= 0 ) && (this.yMax <= 1000 ) && !this.ylog  ) {
this.yExponent=0;
} else {
this.yExponent=(Math.floor(Math.log(largest) * C$.LOG10SCALE)|0);
}if ((this.yExponent > 1) || (this.yExponent < -1) ) {
var ys=1.0 / Math.pow(10.0, this.yExponent);
this.ytickMin=this.yMin * ys;
this.ytickMax=this.yMax * ys;
} else {
this.ytickMin=this.yMin;
this.ytickMax=this.yMax;
this.yExponent=0;
}}, p$1);

Clazz.newMeth(C$, 'setShowMajorXGrid$Z',  function (showGrid) {
this.drawMajorXGrid=showGrid;
if (!showGrid) {
this.drawMinorXGrid=showGrid;
}});

Clazz.newMeth(C$, 'setShowMinorXGrid$Z',  function (showGrid) {
this.drawMinorXGrid=showGrid;
});

Clazz.newMeth(C$, 'setShowMajorYGrid$Z',  function (showGrid) {
this.drawMajorYGrid=showGrid;
if (!showGrid) {
this.drawMinorYGrid=showGrid;
}});

Clazz.newMeth(C$, 'setShowMinorYGrid$Z',  function (showGrid) {
this.drawMinorYGrid=showGrid;
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
});

Clazz.newMeth(C$, 'getX$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getY$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getInterior$org_opensourcephysics_display_DrawingPanel',  function (panel) {
if (panel.getDimensionSetter$() == null ) {
this.adjustGutters=true;
} else {
this.adjustGutters=false;
}return null;
});

Clazz.newMeth(C$, 'setTickLength$I',  function (len) {
this.tickLength=len;
});

C$.$static$=function(){C$.$static$=0;
C$.LOG10SCALE=1 / Math.log(10);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
