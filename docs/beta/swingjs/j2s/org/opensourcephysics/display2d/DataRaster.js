(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},p$2={},I$=[[0,'java.util.ArrayList','java.awt.image.BufferedImage','java.awt.Color',['org.opensourcephysics.display2d.DataRaster','.ImageData'],'org.opensourcephysics.display.DisplayColors']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataRaster", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.display.Measurable');
C$.$classes$=[['ImageData',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.primaryDrawingPanel=null;
this.imageDatasets=Clazz.new_($I$(1,1));
this.visible=true;
this.xmin=-1;
this.xmax=1;
this.ymin=-1;
this.ymax=1;
this.maxPoints=196607;
this.xppu=0;
this.yppu=0;
},1);

C$.$fields$=[['Z',['visible'],'D',['xmin','xmax','ymin','ymax','xrange','yrange','xppu','yppu','xMin','yMax'],'I',['imageWidth','imageHeight','maxPoints'],'O',['primaryDrawingPanel','org.opensourcephysics.display.DrawingPanel','backgroundColor','java.awt.Color','imageDatasets','java.util.ArrayList','image','java.awt.image.BufferedImage','pixels','int[]']]]

Clazz.newMeth(C$, 'getDrawingPanel$',  function () {
return this.primaryDrawingPanel;
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DrawingPanel$D$D$D$D',  function (dp, _xmin, _xmax, _ymin, _ymax) {
;C$.$init$.apply(this);
this.primaryDrawingPanel=dp;
if (this.primaryDrawingPanel != null ) {
this.primaryDrawingPanel.setPixelScale$();
}this.setMinMax$D$D$D$D(Math.min(_xmin, _xmax), Math.max(_xmin, _xmax), Math.min(_ymin, _ymax), Math.max(_ymin, _ymax));
this.setImage$java_awt_image_BufferedImage(Clazz.new_($I$(2,1).c$$I$I$I,[1, 1, 2]));
this.backgroundColor=Clazz.new_([this.image.getRGB$I$I(0, 0)],$I$(3,1).c$$I);
}, 1);

Clazz.newMeth(C$, 'append$I$D$D',  function (dataIndex, x, y) {
this.checkIndex$I(dataIndex).append$D$D(x, y);
});

Clazz.newMeth(C$, 'setColor$I$java_awt_Color',  function (dataIndex, color) {
this.checkIndex$I(dataIndex).setColor$java_awt_Color(color);
});

Clazz.newMeth(C$, 'clear$',  function () {
for (var i=0, n=this.imageDatasets.size$(); i < n; i++) {
(this.imageDatasets.get$I(i)).clear$();
}
this.render$();
});

Clazz.newMeth(C$, 'clear$I',  function (i) {
if (i < this.imageDatasets.size$()) {
this.imageDatasets.get$I(i).clear$();
this.render$();
}});

Clazz.newMeth(C$, 'checkIndex$I',  function (dataIndex) {
for (var i=this.imageDatasets.size$() - 1; i < dataIndex; i++) {
var d=Clazz.new_([this, null, $I$(5).getLineColor$I(dataIndex)],$I$(4,1).c$$java_awt_Color);
this.imageDatasets.add$O(d);
}
return this.imageDatasets.get$I(dataIndex);
});

Clazz.newMeth(C$, 'render$',  function () {
if (this.primaryDrawingPanel == null ) {
return null;
}var xrange=this.primaryDrawingPanel.xToPix$D(this.xmax) - this.primaryDrawingPanel.xToPix$D(this.xmin);
var yrange=this.primaryDrawingPanel.yToPix$D(this.ymin) - this.primaryDrawingPanel.yToPix$D(this.ymax);
xrange=Math.min(xrange, this.primaryDrawingPanel.getWidth$());
yrange=Math.min(yrange, this.primaryDrawingPanel.getHeight$());
if ((Math.abs(xrange) == 0) || (Math.abs(yrange) == 0) ) {
return null;
}this.image=Clazz.new_([Math.abs(xrange), Math.abs(yrange), 2],$I$(2,1).c$$I$I$I);
this.backgroundColor=Clazz.new_([this.image.getRGB$I$I(0, 0)],$I$(3,1).c$$I);
for (var i=0, n=this.imageDatasets.size$(); i < n; i++) {
(this.imageDatasets.get$I(i)).render$();
}
return this.image;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible || this.primaryDrawingPanel !== panel  ) {
return;
}var xrange=panel.xToPix$D(this.xmax) - panel.xToPix$D(this.xmin);
var yrange=panel.yToPix$D(this.ymin) - panel.yToPix$D(this.ymax);
xrange=Math.min(xrange, panel.getWidth$());
yrange=Math.min(yrange, panel.getHeight$());
if ((xrange == 0) || (xrange == 0) ) {
return;
}if ((Math.abs(xrange) != this.imageWidth) || (Math.abs(yrange) != this.imageHeight) || (this.xppu != panel.getXPixPerUnit$() ) || (this.yppu != panel.getYPixPerUnit$() )  ) {
this.render$();
}if (this.image != null  && this.imageWidth > 1 ) {
var xmin=Math.max(panel.getXMin$(), this.xmin);
var ymax=Math.min(panel.getYMax$(), this.ymax);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, panel.xToPix$D(xmin), panel.yToPix$D(ymax), panel);
}});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return true;
});

Clazz.newMeth(C$, 'setXMin$D',  function (_value) {
this.xmin=_value;
p$2.setRanges.apply(this, []);
});

Clazz.newMeth(C$, 'setXMax$D',  function (_value) {
this.xmax=_value;
p$2.setRanges.apply(this, []);
});

Clazz.newMeth(C$, 'setYMin$D',  function (_value) {
this.ymin=_value;
p$2.setRanges.apply(this, []);
});

Clazz.newMeth(C$, 'setYMax$D',  function (_value) {
this.ymax=_value;
p$2.setRanges.apply(this, []);
});

Clazz.newMeth(C$, 'setMinMax$D$D$D$D',  function (_minx, _maxx, _miny, _maxy) {
this.xmin=_minx;
this.xmax=_maxx;
this.ymin=_miny;
this.ymax=_maxy;
p$2.setRanges.apply(this, []);
});

Clazz.newMeth(C$, 'setRanges',  function () {
this.xrange=(this.xmax - this.xmin);
this.yrange=(this.ymax - this.ymin);
}, p$2);

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

Clazz.newMeth(C$, 'setImage$java_awt_image_BufferedImage',  function (image) {
this.image=image;
this.imageWidth=image.getWidth$();
this.imageHeight=image.getHeight$();
this.pixels=(image.getRaster$().getDataBuffer$()).getData$();
return image;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.imageWidth;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.imageHeight;
});

Clazz.newMeth(C$, 'getBackgroundColor$',  function () {
return this.backgroundColor;
});

Clazz.newMeth(C$, 'xToPix$I',  function (x) {
return ((this.imageWidth * (x - this.xmin) / this.xrange)|0);
});

Clazz.newMeth(C$, 'yToPix$I',  function (y) {
return ((this.imageHeight * (this.ymax - y) / this.yrange)|0);
});

Clazz.newMeth(C$, 'getPixColor$I$I',  function (xpix, ypix) {
return Clazz.new_([this.image.getRGB$I$I(xpix, ypix)],$I$(3,1).c$$I);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.visible=isVisible;
});

Clazz.newMeth(C$, 'setPixel$D$D$I',  function (x, y, color) {
var i=((this.xppu * (x - this.xMin) + 0.5)|0);
var j=((this.yppu * (this.yMax - y) + 0.5)|0);
if (i >= 0 && j >= 0  && i < this.imageWidth  && j < this.imageHeight ) {
this.pixels[j * this.imageWidth + i]=color;
}});

Clazz.newMeth(C$, 'renderData$FAA$I$I',  function (data, nextPoint, color) {
this.xppu=this.primaryDrawingPanel.getXPixPerUnit$();
this.yppu=this.primaryDrawingPanel.getYPixPerUnit$();
this.xMin=Math.max(this.primaryDrawingPanel.getXMin$(), this.xmin);
this.yMax=Math.min(this.primaryDrawingPanel.getYMax$(), this.ymax);
for (var c=0; c < nextPoint; c++) {
var i=((this.xppu * (data[0][c] - this.xMin) + 0.5)|0);
var j=((this.yppu * (this.yMax - data[1][c]) + 0.5)|0);
if (i >= 0 && j >= 0  && i < this.imageWidth  && j < this.imageHeight ) {
this.pixels[j * this.imageWidth + i]=color;
}}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataRaster, "ImageData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nextPoint=0;
},1);

C$.$fields$=[['I',['color','nextPoint'],'O',['data','float[][]']]]

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (c) {
;C$.$init$.apply(this);
this.setColor$java_awt_Color(c);
this.data=Clazz.array(Float.TYPE, [2, 64]);
}, 1);

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (c) {
this.color=c.getRGB$();
});

Clazz.newMeth(C$, 'increaseCapacity$I',  function (size) {
size=Math.min(size, this.b$['org.opensourcephysics.display2d.DataRaster'].maxPoints);
var newData=Clazz.array(Float.TYPE, [2, size]);
var newNext=Math.min(this.nextPoint, ((3 * size)/4|0));
System.arraycopy$O$I$O$I$I(this.data[0], this.nextPoint - newNext, newData[0], 0, newNext);
System.arraycopy$O$I$O$I$I(this.data[1], this.nextPoint - newNext, newData[1], 0, newNext);
this.nextPoint=newNext;
this.data=newData;
}, p$1);

Clazz.newMeth(C$, 'clear$',  function () {
this.data=Clazz.array(Float.TYPE, [2, 64]);
this.nextPoint=0;
});

Clazz.newMeth(C$, 'append$D$D',  function (x, y) {
if (Double.isNaN$D(x) || Double.isInfinite$D(x) || Double.isNaN$D(y) || Double.isInfinite$D(y)  ) {
return;
}if (this.nextPoint >= this.data[0].length) {
p$1.increaseCapacity$I.apply(this, [this.data[0].length * 2]);
}this.data[0][this.nextPoint]=x;
this.data[1][this.nextPoint]=y;
++this.nextPoint;
if (this.b$['org.opensourcephysics.display2d.DataRaster'].imageWidth < 2) {
return;
}this.b$['org.opensourcephysics.display2d.DataRaster'].xppu=this.b$['org.opensourcephysics.display2d.DataRaster'].primaryDrawingPanel.getXPixPerUnit$();
this.b$['org.opensourcephysics.display2d.DataRaster'].yppu=this.b$['org.opensourcephysics.display2d.DataRaster'].primaryDrawingPanel.getYPixPerUnit$();
this.b$['org.opensourcephysics.display2d.DataRaster'].xMin=Math.max(this.b$['org.opensourcephysics.display2d.DataRaster'].primaryDrawingPanel.getXMin$(), this.b$['org.opensourcephysics.display2d.DataRaster'].xmin);
this.b$['org.opensourcephysics.display2d.DataRaster'].yMax=Math.min(this.b$['org.opensourcephysics.display2d.DataRaster'].primaryDrawingPanel.getYMax$(), this.b$['org.opensourcephysics.display2d.DataRaster'].ymax);
this.b$['org.opensourcephysics.display2d.DataRaster'].setPixel$D$D$I.apply(this.b$['org.opensourcephysics.display2d.DataRaster'], [x, y, this.color]);
});

Clazz.newMeth(C$, 'render$',  function () {
this.b$['org.opensourcephysics.display2d.DataRaster'].renderData$FAA$I$I.apply(this.b$['org.opensourcephysics.display2d.DataRaster'], [this.data, this.nextPoint, this.color]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
