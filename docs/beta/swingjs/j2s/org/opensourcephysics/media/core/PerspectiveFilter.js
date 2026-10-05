(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'javax.swing.JTabbedPane',['org.opensourcephysics.media.core.PerspectiveFilter','.QuadEditor'],'javax.swing.JButton','org.opensourcephysics.media.core.MediaRes','javax.swing.JOptionPane','org.opensourcephysics.display.OSPRuntime','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout','java.awt.Toolkit','java.awt.event.MouseEvent',['org.opensourcephysics.media.core.PerspectiveFilter','.Corner'],['java.awt.geom.Point2D','.Double'],'java.awt.geom.GeneralPath','java.awt.BasicStroke','java.awt.Rectangle',['java.awt.geom.Ellipse2D','.Double'],'java.awt.Shape','java.awt.geom.AffineTransform',['org.opensourcephysics.display.OSPRuntime','.TextLayout'],'javax.swing.JTextField','java.awt.Point','org.opensourcephysics.media.core.PerspectiveFilter','java.awt.RenderingHints','org.opensourcephysics.media.core.DecimalField','javax.swing.JComboBox','javax.swing.JLabel','javax.swing.Box','javax.swing.BorderFactory','javax.swing.AbstractAction','java.awt.GridLayout','javax.swing.JCheckBox','org.opensourcephysics.display.GUIUtils','java.awt.Color','java.util.TreeSet',['org.opensourcephysics.media.core.PerspectiveFilter','.Quadrilateral'],['org.opensourcephysics.media.core.PerspectiveFilter','.Inspector'],'java.beans.PropertyChangeEvent','org.opensourcephysics.controls.XMLControlElement',['org.opensourcephysics.media.core.PerspectiveFilter','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PerspectiveFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter', 'java.beans.PropertyChangeListener');
C$.$classes$=[['Inspector',2],['Corner',1],['Quadrilateral',2],['QuadEditor',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.matrix=Clazz.array(Double.TYPE, [3, 3]);
this.temp1=Clazz.array(Double.TYPE, [3, 3]);
this.temp2=Clazz.array(Double.TYPE, [3, 3]);
this.interpolation=2;
this.inCornerPoints=Clazz.array($I$(13), [10, null]);
this.outCornerPoints=Clazz.array($I$(13), [10, null]);
this.inKeyFrames=Clazz.new_($I$(35,1));
this.outKeyFrames=Clazz.new_($I$(35,1));
this.fixedIn=false;
this.fixedOut=true;
this.fixedKey=0;
this.disposing=false;
this.rgb=Clazz.array(Integer.TYPE, [4]);
this.values=Clazz.array(Integer.TYPE, [4]);
},1);

C$.$fields$=[['Z',['fixedIn','fixedOut','disposing'],'I',['interpolation','fixedKey'],'O',['matrix','double[][]','+temp1','+temp2','xOut','double[]','+yOut','+xIn','+yIn','quad','org.opensourcephysics.media.core.PerspectiveFilter.Quadrilateral','inputEditor','org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor','+outputEditor','inCornerPoints','java.awt.geom.Point2D.Double[][]','+outCornerPoints','inKeyFrames','java.util.TreeSet','+outKeyFrames','inspector','org.opensourcephysics.media.core.PerspectiveFilter.Inspector','rgb','int[]','+values']]
,['O',['defaultColor','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.quad=Clazz.new_($I$(36,1),[this, null]);
this.refresh$();
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "nextframe":
p$1.refreshCorners$I.apply(this, [(e.getNewValue$()).$c()]);
break;
}
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
var disabled=!this.superIsEnabled$();
var editingInput=this.inspector != null  && this.inspector.isVisible$()  && this.inspector.tabbedPane.getSelectedComponent$() === this.inputEditor  ;
if (disabled || editingInput ) return false;
return true;
});

Clazz.newMeth(C$, 'isSuperEnabled$',  function () {
return C$.superclazz.prototype.isEnabled$.apply(this, []);
});

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(37,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.inspector.setTitle$S($I$(4).getString$S("Filter.Perspective.Title"));
this.inspector.tabbedPane.setTitleAt$I$S(0, $I$(4).getString$S("PerspectiveFilter.Tab.Input"));
this.inspector.tabbedPane.setTitleAt$I$S(1, $I$(4).getString$S("PerspectiveFilter.Tab.Output"));
this.inspector.helpButton.setText$S($I$(4).getString$S("PerspectiveFilter.Button.Help"));
this.inspector.colorButton.setText$S($I$(4).getString$S("PerspectiveFilter.Button.Color"));
this.ableButton.setText$S(C$.superclazz.prototype.isEnabled$.apply(this, []) ? $I$(4).getString$S("Filter.Button.Disable") : $I$(4).getString$S("Filter.Button.Enable"));
this.inputEditor.refreshGUI$();
this.outputEditor.refreshGUI$();
this.inputEditor.refreshFields$();
this.outputEditor.refreshFields$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
if (this.vidPanel != null  && this.vidPanel.getVideo$() != null  ) {
this.vidPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("selectedpoint", this.quad);
var video=this.vidPanel.getVideo$();
video.removePropertyChangeListener$S$java_beans_PropertyChangeListener("nextframe", this);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("filter_visible", this.vidPanel);
}});

Clazz.newMeth(C$, 'setVideoPanel$org_opensourcephysics_media_core_VideoPanel',  function (panel) {
var prevPanel=this.vidPanel;
C$.superclazz.prototype.setVideoPanel$org_opensourcephysics_media_core_VideoPanel.apply(this, [panel]);
if (this.vidPanel != null ) {
var video=this.vidPanel.getVideo$();
video.removePropertyChangeListener$S$java_beans_PropertyChangeListener("nextframe", this);
video.addPropertyChangeListener$S$java_beans_PropertyChangeListener("nextframe", this);
this.vidPanel.propertyChange$java_beans_PropertyChangeEvent(Clazz.new_($I$(38,1).c$$O$S$O$O,[this, "perspective", null, this]));
} else if (prevPanel != null ) {
prevPanel.removeDrawable$org_opensourcephysics_display_Drawable(this.quad);
var video=prevPanel.getVideo$();
video.removePropertyChangeListener$S$java_beans_PropertyChangeListener("nextframe", this);
prevPanel.propertyChange$java_beans_PropertyChangeEvent(Clazz.new_($I$(38,1).c$$O$S$O$O,[this, "perspective", this, null]));
}});

Clazz.newMeth(C$, 'setFixed$Z$Z',  function (fix, $in) {
if (this.isFixed$Z($in) != fix ) {
var filterState=Clazz.new_($I$(39,1).c$$O,[this]).toXML$();
if ($in) this.fixedIn=fix;
 else this.fixedOut=fix;
if (this.isFixed$Z($in)) {
var keyFrames=$in ? this.inKeyFrames : this.outKeyFrames;
keyFrames.clear$();
p$1.saveCorners$I$Z.apply(this, [this.fixedKey, $in]);
}this.firePropertyChange$S$O$O("fixed", filterState, null);
}});

Clazz.newMeth(C$, 'isFixed$Z',  function ($in) {
return $in ? this.fixedIn : this.fixedOut;
});

Clazz.newMeth(C$, 'setCornerLocation$I$I$D$D',  function (frameNumber, cornerIndex, x, y) {
var $in=cornerIndex < 4;
var corners=$in ? this.quad.inCorners : this.quad.outCorners;
corners[cornerIndex].setXY$D$D(x, y);
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.quad.color;
});

Clazz.newMeth(C$, 'getCornerIndex$org_opensourcephysics_media_core_PerspectiveFilter_Corner',  function (corner) {
for (var i=0; i < 4; i++) {
if (corner === this.quad.inCorners[i] ) return i;
if (corner === this.quad.outCorners[i] ) return i + 4;
}
return -1;
});

Clazz.newMeth(C$, 'getCorner$I',  function (index) {
var corners=index < 4 ? this.quad.inCorners : this.quad.outCorners;
return corners[index % 4];
});

Clazz.newMeth(C$, 'deleteKeyFrame$I$org_opensourcephysics_media_core_PerspectiveFilter_Corner',  function (frameNumber, corner) {
var index=this.getCornerIndex$org_opensourcephysics_media_core_PerspectiveFilter_Corner(corner);
if (index == -1) return;
var isInput=index < 4 ? true : false;
var keyFrames=isInput ? this.inKeyFrames : this.outKeyFrames;
var key=p$1.getKeyFrame$I$Z.apply(this, [frameNumber, isInput]);
if (key == 0) return;
keyFrames.remove$O(Integer.valueOf$I(key));
var cornerPoints=index < 4 ? this.inCornerPoints : this.outCornerPoints;
cornerPoints[key]=null;
p$1.refreshCorners$I.apply(this, [this.vidPanel.getFrameNumber$()]);
});

Clazz.newMeth(C$, 'setInputEnabled$Z',  function (enable) {
if (this.inspector == null ) return;
this.inspector.tabbedPane.setSelectedComponent$java_awt_Component(enable ? this.inputEditor : this.outputEditor);
});

Clazz.newMeth(C$, 'isInputEnabled$',  function () {
if (this.inspector == null ) return false;
return this.inspector.tabbedPane.getSelectedComponent$() === this.inputEditor ;
});

Clazz.newMeth(C$, 'isActive$',  function () {
if (this.inspector == null ) return false;
return this.inspector.tabbedPane.isEnabled$();
});

Clazz.newMeth(C$, 'hasInspector$',  function () {
return this.inspector != null ;
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
this.xIn=Clazz.array(Double.TYPE, [this.nPixelsIn]);
this.yIn=Clazz.array(Double.TYPE, [this.nPixelsIn]);
this.xOut=Clazz.array(Double.TYPE, [this.nPixelsIn]);
this.yOut=Clazz.array(Double.TYPE, [this.nPixelsIn]);
for (var j=0, p=0; j < this.h; j++) {
for (var i=0; i < this.w; i++, p++) {
this.yOut[p]=j;
this.xOut[p]=i;
}
}
if (this.inKeyFrames.isEmpty$()) {
this.quad.inCorners[0].setLocation$D$D((this.w/4|0), (this.h/4|0));
this.quad.inCorners[1].setLocation$D$D((3 * this.w/4|0), (this.h/4|0));
this.quad.inCorners[2].setLocation$D$D((3 * this.w/4|0), (3 * this.h/4|0));
this.quad.inCorners[3].setLocation$D$D((this.w/4|0), (3 * this.h/4|0));
this.quad.outCorners[0].setLocation$D$D((this.w/4|0), (this.h/4|0));
this.quad.outCorners[1].setLocation$D$D((3 * this.w/4|0), (this.h/4|0));
this.quad.outCorners[2].setLocation$D$D((3 * this.w/4|0), (3 * this.h/4|0));
this.quad.outCorners[3].setLocation$D$D((this.w/4|0), (3 * this.h/4|0));
p$1.saveCorners$I$Z.apply(this, [0, true]);
p$1.saveCorners$I$Z.apply(this, [0, false]);
}});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
p$1.getQuadToSquare$DAA$D$D$D$D$D$D$D$D.apply(this, [this.temp1, this.quad.outCorners[0].x, this.quad.outCorners[0].y, this.quad.outCorners[1].x, this.quad.outCorners[1].y, this.quad.outCorners[2].x, this.quad.outCorners[2].y, this.quad.outCorners[3].x, this.quad.outCorners[3].y]);
p$1.getSquareToQuad$DAA$D$D$D$D$D$D$D$D.apply(this, [this.temp2, this.quad.inCorners[0].x, this.quad.inCorners[0].y, this.quad.inCorners[1].x, this.quad.inCorners[1].y, this.quad.inCorners[2].x, this.quad.inCorners[2].y, this.quad.inCorners[3].x, this.quad.inCorners[3].y]);
p$1.concatenate$DAA$DAA.apply(this, [this.temp1, this.temp2]);
p$1.transform$DA$DA$DA$DA.apply(this, [this.xOut, this.yOut, this.xIn, this.yIn]);
for (var i=0; i < this.nPixelsIn; i++) {
this.pixelsOut[i]=p$1.getColor$D$D$I$I$IA.apply(this, [this.xIn[i], this.yIn[i], this.w, this.h, this.pixelsIn]);
}
});

Clazz.newMeth(C$, 'transform$DA$DA$DA$DA',  function (xSource, ySource, xTrans, yTrans) {
var n=xSource.length;
for (var i=0; i < n; i++) {
var w=this.matrix[2][0] * xSource[i] + this.matrix[2][1] * ySource[i] + this.matrix[2][2];
if (w == 0 ) {
xTrans[i]=xSource[i];
yTrans[i]=ySource[i];
} else {
xTrans[i]=(this.matrix[0][0] * xSource[i] + this.matrix[0][1] * ySource[i] + this.matrix[0][2]) / w;
yTrans[i]=(this.matrix[1][0] * xSource[i] + this.matrix[1][1] * ySource[i] + this.matrix[1][2]) / w;
}}
}, p$1);

Clazz.newMeth(C$, 'getColor$D$D$I$I$IA',  function (x, y, w, h, pixelValues) {
var col=(Math.floor(x)|0);
var row=(Math.floor(y)|0);
if (col < 0 || col >= w  || row < 0  || row >= h ) {
return 0;
}if (col + 1 == w || row + 1 == h ) {
return pixelValues[row * w + col];
}var u=col == 0 ? x : x % col;
var v=row == 0 ? y : y % row;
if (this.interpolation == 2) {
this.values[0]=pixelValues[row * w + col];
this.values[1]=pixelValues[row * w + col + 1];
this.values[2]=pixelValues[(row + 1) * w + col];
this.values[3]=pixelValues[(row + 1) * w + col + 1];
for (var j=0; j < 4; j++) {
this.rgb[j]=(this.values[j] >> 16) & 255;
}
var r=p$1.bilinearInterpolation$D$D$IA.apply(this, [u, v, this.rgb]);
for (var j=0; j < 4; j++) {
this.rgb[j]=(this.values[j] >> 8) & 255;
}
var g=p$1.bilinearInterpolation$D$D$IA.apply(this, [u, v, this.rgb]);
for (var j=0; j < 4; j++) {
this.rgb[j]=(this.values[j]) & 255;
}
var b=p$1.bilinearInterpolation$D$D$IA.apply(this, [u, v, this.rgb]);
return (r << 16) | (g << 8) | b ;
}return u < 0.5  ? v < 0.5  ? pixelValues[row * w + col] : pixelValues[(row + 1) * w + col] : v < 0.5  ? pixelValues[row * w + col + 1] : pixelValues[(row + 1) * w + col + 1];
}, p$1);

Clazz.newMeth(C$, 'bilinearInterpolation$D$D$IA',  function (x, y, values) {
return (((1 - y) * ((1 - x) * values[0] + x * values[2]) + y * ((1 - x) * values[1] + x * values[3]))|0);
}, p$1);

Clazz.newMeth(C$, 'getSquareToQuad$DAA$D$D$D$D$D$D$D$D',  function (matrix, x0, y0, x1, y1, x2, y2, x3, y3) {
var dx3=x0 - x1 + x2 - x3;
var dy3=y0 - y1 + y2 - y3;
matrix[2][2]=1.0;
if ((dx3 == 0.0 ) && (dy3 == 0.0 ) ) {
matrix[0][0]=x1 - x0;
matrix[0][1]=x2 - x1;
matrix[0][2]=x0;
matrix[1][0]=y1 - y0;
matrix[1][1]=y2 - y1;
matrix[1][2]=y0;
matrix[2][0]=0.0;
matrix[2][1]=0.0;
} else {
var dx1=x1 - x2;
var dy1=y1 - y2;
var dx2=x3 - x2;
var dy2=y3 - y2;
var invdet=1.0 / (dx1 * dy2 - dx2 * dy1);
matrix[2][0]=(dx3 * dy2 - dx2 * dy3) * invdet;
matrix[2][1]=(dx1 * dy3 - dx3 * dy1) * invdet;
matrix[0][0]=x1 - x0 + matrix[2][0] * x1;
matrix[0][1]=x3 - x0 + matrix[2][1] * x3;
matrix[0][2]=x0;
matrix[1][0]=y1 - y0 + matrix[2][0] * y1;
matrix[1][1]=y3 - y0 + matrix[2][1] * y3;
matrix[1][2]=y0;
}}, p$1);

Clazz.newMeth(C$, 'getQuadToSquare$DAA$D$D$D$D$D$D$D$D',  function (matrix, x0, y0, x1, y1, x2, y2, x3, y3) {
p$1.getSquareToQuad$DAA$D$D$D$D$D$D$D$D.apply(this, [matrix, x0, y0, x1, y1, x2, y2, x3, y3]);
var m00=matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1];
var m01=matrix[1][2] * matrix[2][0] - matrix[1][0] * matrix[2][2];
var m02=matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0];
var m10=matrix[0][2] * matrix[2][1] - matrix[0][1] * matrix[2][2];
var m11=matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0];
var m12=matrix[0][1] * matrix[2][0] - matrix[0][0] * matrix[2][1];
var m20=matrix[0][1] * matrix[1][2] - matrix[0][2] * matrix[1][1];
var m21=matrix[0][2] * matrix[1][0] - matrix[0][0] * matrix[1][2];
var m22=matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
matrix[0][0]=m00;
matrix[0][1]=m10;
matrix[0][2]=m20;
matrix[1][0]=m01;
matrix[1][1]=m11;
matrix[1][2]=m21;
matrix[2][0]=m02;
matrix[2][1]=m12;
matrix[2][2]=m22;
}, p$1);

Clazz.newMeth(C$, 'concatenate$DAA$DAA',  function (m1, m2) {
this.matrix[0][0]=m1[0][0] * m2[0][0] + m1[1][0] * m2[0][1] + m1[2][0] * m2[0][2];
this.matrix[1][0]=m1[0][0] * m2[1][0] + m1[1][0] * m2[1][1] + m1[2][0] * m2[1][2];
this.matrix[2][0]=m1[0][0] * m2[2][0] + m1[1][0] * m2[2][1] + m1[2][0] * m2[2][2];
this.matrix[0][1]=m1[0][1] * m2[0][0] + m1[1][1] * m2[0][1] + m1[2][1] * m2[0][2];
this.matrix[1][1]=m1[0][1] * m2[1][0] + m1[1][1] * m2[1][1] + m1[2][1] * m2[1][2];
this.matrix[2][1]=m1[0][1] * m2[2][0] + m1[1][1] * m2[2][1] + m1[2][1] * m2[2][2];
this.matrix[0][2]=m1[0][2] * m2[0][0] + m1[1][2] * m2[0][1] + m1[2][2] * m2[0][2];
this.matrix[1][2]=m1[0][2] * m2[1][0] + m1[1][2] * m2[1][1] + m1[2][2] * m2[1][2];
this.matrix[2][2]=m1[0][2] * m2[2][0] + m1[1][2] * m2[2][1] + m1[2][2] * m2[2][2];
}, p$1);

Clazz.newMeth(C$, 'getCornerData$java_awt_geom_Point2D_DoubleA',  function (cornerPoints) {
var data=Clazz.array(Double.TYPE, [4, 2]);
for (var i=0; i < 4; i++) {
data[i][0]=cornerPoints[i].x;
data[i][1]=cornerPoints[i].y;
}
return data;
}, p$1);

Clazz.newMeth(C$, 'refreshCorners$I',  function (frameNumber) {
var key=p$1.getKeyFrame$I$Z.apply(this, [frameNumber, true]);
for (var i=0; i < 4; i++) {
this.quad.inCorners[i].setLocation$java_awt_geom_Point2D(this.inCornerPoints[key][i]);
}
key=p$1.getKeyFrame$I$Z.apply(this, [frameNumber, false]);
for (var i=0; i < 4; i++) {
this.quad.outCorners[i].setLocation$java_awt_geom_Point2D(this.outCornerPoints[key][i]);
}
}, p$1);

Clazz.newMeth(C$, 'saveCorners$I$Z',  function (frameNumber, $in) {
if (this.isFixed$Z($in)) frameNumber=this.fixedKey;
p$1.ensureCornerCapacity$I.apply(this, [frameNumber]);
var keyFrames=$in ? this.inKeyFrames : this.outKeyFrames;
var cornerPoints=$in ? this.inCornerPoints : this.outCornerPoints;
var corners=$in ? this.quad.inCorners : this.quad.outCorners;
keyFrames.add$O(Integer.valueOf$I(frameNumber));
if (cornerPoints[frameNumber] == null ) {
cornerPoints[frameNumber]=Clazz.array($I$(13), [4]);
for (var i=0; i < 4; i++) {
cornerPoints[frameNumber][i]=Clazz.new_($I$(13,1));
}
}for (var i=0; i < 4; i++) {
cornerPoints[frameNumber][i].setLocation$java_awt_geom_Point2D(corners[i]);
}
}, p$1);

Clazz.newMeth(C$, 'loadCornerData$DAAA$Z',  function (cornerData, $in) {
p$1.ensureCornerCapacity$I.apply(this, [cornerData.length]);
var keyFrames=$in ? this.inKeyFrames : this.outKeyFrames;
keyFrames.clear$();
var cornerPoints=$in ? this.inCornerPoints : this.outCornerPoints;
for (var j=0; j < cornerData.length; j++) {
if (cornerData[j] == null ) continue;
keyFrames.add$O(Integer.valueOf$I(j));
if (cornerPoints[j] == null ) {
cornerPoints[j]=Clazz.array($I$(13), [4]);
for (var i=0; i < 4; i++) {
cornerPoints[j][i]=Clazz.new_($I$(13,1));
}
}for (var i=0; i < 4; i++) {
cornerPoints[j][i].setLocation$D$D(cornerData[j][i][0], cornerData[j][i][1]);
}
}
}, p$1);

Clazz.newMeth(C$, 'ensureCornerCapacity$I',  function (index) {
var length=this.inCornerPoints.length;
if (length < index + 1) {
var newArray=Clazz.array($I$(13), [index + 10, null]);
System.arraycopy$O$I$O$I$I(this.inCornerPoints, 0, newArray, 0, length);
this.inCornerPoints=newArray;
}length=this.outCornerPoints.length;
if (length < index + 1) {
var newArray=Clazz.array($I$(13), [index + 10, null]);
System.arraycopy$O$I$O$I$I(this.outCornerPoints, 0, newArray, 0, length);
this.outCornerPoints=newArray;
}}, p$1);

Clazz.newMeth(C$, 'trimCornerPoints',  function () {
var length=this.inCornerPoints.length;
for (var i=length; i > 0; i--) {
if (this.inCornerPoints[i - 1] != null ) {
var newArray=Clazz.array($I$(13), [i, null]);
System.arraycopy$O$I$O$I$I(this.inCornerPoints, 0, newArray, 0, i);
this.inCornerPoints=newArray;
break;
}}
length=this.outCornerPoints.length;
for (var i=length; i > 0; i--) {
if (this.outCornerPoints[i - 1] != null ) {
var newArray=Clazz.array($I$(13), [i, null]);
System.arraycopy$O$I$O$I$I(this.outCornerPoints, 0, newArray, 0, i);
this.outCornerPoints=newArray;
break;
}}
}, p$1);

Clazz.newMeth(C$, 'getKeyFrame$I$Z',  function (frameNumber, $in) {
if (this.isFixed$Z($in)) return this.fixedKey;
var keyFrames=$in ? this.inKeyFrames : this.outKeyFrames;
var key=0;
for (var i, $i = keyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
if (i <= frameNumber) key=i;
}
return key;
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(40,1));
}, 1);

Clazz.newMeth(C$, 'superIsEnabled$',  function () {
return C$.superclazz.prototype.isEnabled$.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.defaultColor=$I$(34).RED;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PerspectiveFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['helpButton','javax.swing.JButton','+colorButton','tabbedPane','javax.swing.JTabbedPane','contentPane','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Filter.Perspective.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.tabbedPane=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].inputEditor=Clazz.new_($I$(2,1).c$$Z,[this, null, true]);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].outputEditor=Clazz.new_($I$(2,1).c$$Z,[this, null, false]);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].outputEditor.selectedShapeIndex=1;
this.tabbedPane.addTab$S$java_awt_Component("", this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].inputEditor);
this.tabbedPane.addTab$S$java_awt_Component("", this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].outputEditor);
this.tabbedPane.setSelectedComponent$java_awt_Component(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].inputEditor);
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.PerspectiveFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PerspectiveFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].disposing) return;
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], []);
var filter=this.b$['org.opensourcephysics.media.core.PerspectiveFilter'];
filter.firePropertyChange$S$O$O("image", null, null);
filter.firePropertyChange$S$O$O("tab", null, null);
});
})()
), Clazz.new_(P$.PerspectiveFilter$Inspector$1.$init$,[this, null])));
this.helpButton=Clazz.new_($I$(3,1));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.PerspectiveFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PerspectiveFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var s=$I$(4).getString$S("PerspectiveFilter.Help.Message1") + "\n" + $I$(4).getString$S("PerspectiveFilter.Help.Message2") + "\n" + $I$(4).getString$S("PerspectiveFilter.Help.Message3") + "\n" + $I$(4).getString$S("PerspectiveFilter.Help.Message4") + "\n\n" + $I$(4).getString$S("PerspectiveFilter.Help.Message5") + "\n  " + $I$(4).getString$S("PerspectiveFilter.Help.Message6") + "\n  " + $I$(4).getString$S("PerspectiveFilter.Help.Message7") + "\n  " + $I$(4).getString$S("PerspectiveFilter.Help.Message8") + "\n      " + $I$(4).getString$S("PerspectiveFilter.Help.Message9") ;
$I$(5,"showMessageDialog$java_awt_Component$O$S$I",[$I$(5).getFrameForComponent$java_awt_Component(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel), s, $I$(4).getString$S("PerspectiveFilter.Help.Title"), 1]);
});
})()
), Clazz.new_(P$.PerspectiveFilter$Inspector$2.$init$,[this, null])));
this.colorButton=Clazz.new_($I$(3,1));
this.colorButton.addActionListener$java_awt_event_ActionListener(((P$.PerspectiveFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PerspectiveFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(6,"chooseColor$java_awt_Color$S$java_util_function_Consumer",[this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad.color, $I$(4).getString$S("PerspectiveFilter.Dialog.Color.Title"), ((P$.PerspectiveFilter$Inspector$3$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PerspectiveFilter$Inspector$3$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_awt_Color','accept$O'],  function (newColor) /*block*/{
if (newColor != null ) {
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad.color=newColor;
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["filter_color", null, newColor]);
}});
})()
), Clazz.new_(P$.PerspectiveFilter$Inspector$3$lambda1.$init$,[this, null]))]);
});
})()
), Clazz.new_(P$.PerspectiveFilter$Inspector$3.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].ableButton.addActionListener$java_awt_event_ActionListener(((P$.PerspectiveFilter$Inspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PerspectiveFilter$Inspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var enable=!this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].superIsEnabled$.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], []);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter.Inspector'].colorButton.setEnabled$Z(enable);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter.Inspector'].tabbedPane.setEnabled$Z(enable);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].inputEditor.setEnabled$Z(enable);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].outputEditor.setEnabled$Z(enable);
});
})()
), Clazz.new_(P$.PerspectiveFilter$Inspector$4.$init$,[this, null])));
this.contentPane=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(this.contentPane);
var buttonbar=Clazz.new_([Clazz.new_($I$(9,1))],$I$(7,1).c$$java_awt_LayoutManager);
buttonbar.add$java_awt_Component(this.helpButton);
buttonbar.add$java_awt_Component(this.colorButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].closeButton);
this.contentPane.add$java_awt_Component$O(buttonbar, "South");
this.contentPane.add$java_awt_Component$O(this.tabbedPane, "Center");
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], []);
this.pack$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].disposing=true;
if (this.tabbedPane != null ) {
this.tabbedPane.removeAll$();
if (this.contentPane != null ) this.contentPane.remove$java_awt_Component(this.tabbedPane);
}C$.superclazz.prototype.dispose$.apply(this, []);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].disposing=false;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis == this.isVisible$() ) return;
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel != null ) {
var filter=this.b$['org.opensourcephysics.media.core.PerspectiveFilter'];
if (vis) {
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel.addDrawable$org_opensourcephysics_display_Drawable(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad);
filter.firePropertyChange$S$O$O("filter_visible", null, null);
filter.removePropertyChangeListener$S$java_beans_PropertyChangeListener("filter_visible", this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel);
filter.addPropertyChangeListener$S$java_beans_PropertyChangeListener("filter_visible", this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("selectedpoint", this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("selectedpoint", this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad);
} else {
filter.firePropertyChange$S$O$O("filter_visible", null, null);
filter.removePropertyChangeListener$S$java_beans_PropertyChangeListener("filter_visible", this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("selectedpoint", this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel.removeDrawable$org_opensourcephysics_display_Drawable(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad);
$I$(10).getDefaultToolkit$().getSystemEventQueue$().postEvent$java_awt_AWTEvent(Clazz.new_($I$(11,1).c$$java_awt_Component$I$J$I$I$I$I$Z,[this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel, 502, 0, 16, -100, -100, 1, false]));
}}var enable=this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].superIsEnabled$.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], []);
this.colorButton.setEnabled$Z(enable);
this.tabbedPane.setEnabled$Z(enable);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].inputEditor.setEnabled$Z(enable);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].outputEditor.setEnabled$Z(enable);
this.firePropertyChange$S$O$O("image", null, null);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PerspectiveFilter, "Corner", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
var $in=!this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].isEnabled$.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], []);
var corners=$in ? this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad.inCorners : this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad.outCorners;
var editor=$in ? this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].inputEditor : this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].outputEditor;
if (editor.shapes[editor.selectedShapeIndex].equals$O("Rectangle")) {
if (this === corners[0] ) {
corners[3].x=x;
corners[1].y=y;
} else if (this === corners[1] ) {
corners[2].x=x;
corners[0].y=y;
} else if (this === corners[2] ) {
corners[1].x=x;
corners[3].y=y;
} else if (this === corners[3] ) {
corners[0].x=x;
corners[2].y=y;
}}p$1.saveCorners$I$Z.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], [this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel == null  ? 0 : this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel.getFrameNumber$(), $in]);
editor.refreshFields$();
if (editor === this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].outputEditor ) {
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], ["image", null, null]);
}this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], ["cornerlocation", null, this]);
if (this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel != null ) this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel.repaint$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PerspectiveFilter, "Quadrilateral", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['org.opensourcephysics.media.core.Trackable', 'org.opensourcephysics.display.Interactive', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inCorners=Clazz.array($I$(12), [4]);
this.outCorners=Clazz.array($I$(12), [4]);
this.screenPts=Clazz.array($I$(13), [4]);
this.path=Clazz.new_($I$(14,1));
this.stroke=Clazz.new_($I$(15,1).c$$F,[2]);
this.cornerStroke=Clazz.new_($I$(15,1));
this.selectionShape=Clazz.new_($I$(16,1).c$$I$I$I$I,[-4, -4, 8, 8]);
this.cornerShape=Clazz.new_($I$(17,1).c$$D$D$D$D,[-5, -5, 10, 10]);
this.hitShapes=Clazz.array($I$(18), [4]);
this.drawShapes=Clazz.array($I$(18), [5]);
this.transform=Clazz.new_($I$(19,1));
this.textLayouts=Clazz.array($I$(20), [4]);
this.font=Clazz.new_($I$(21,1)).getFont$();
this.p=Clazz.new_($I$(22,1));
this.color=$I$(23).defaultColor;
},1);

C$.$fields$=[['O',['inCorners','org.opensourcephysics.media.core.PerspectiveFilter.Corner[]','+outCorners','screenPts','java.awt.geom.Point2D.Double[]','path','java.awt.geom.GeneralPath','stroke','java.awt.Stroke','+cornerStroke','selectionShape','java.awt.Shape','+cornerShape','hitShapes','java.awt.Shape[]','+drawShapes','selectedCorner','org.opensourcephysics.media.core.PerspectiveFilter.Corner','transform','java.awt.geom.AffineTransform','textLayouts','org.opensourcephysics.display.OSPRuntime.TextLayout[]','font','java.awt.Font','p','java.awt.Point','color','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
for (var i=0; i < this.inCorners.length; i++) {
this.inCorners[i]=Clazz.new_($I$(12,1),[this, null]);
this.outCorners[i]=Clazz.new_($I$(12,1),[this, null]);
this.textLayouts[i]=Clazz.new_([String.valueOf$I(i), this.font],$I$(20,1).c$$S$java_awt_Font);
this.screenPts[i]=Clazz.new_($I$(13,1));
}
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var prev=this.selectedCorner;
this.selectedCorner=null;
for (var i=0; i < 4; i++) {
if (e.getNewValue$() === this.inCorners[i] ) this.selectedCorner=this.inCorners[i];
 else if (e.getNewValue$() === this.outCorners[i] ) this.selectedCorner=this.outCorners[i];
}
if (this.selectedCorner !== prev  && this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel != null  ) this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel.repaint$();
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].superIsEnabled$.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], [])) return;
var vidPanel=panel;
var corners=this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].isEnabled$.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], []) ? this.outCorners : this.inCorners;
for (var i=0; i < 4; i++) {
var pt=corners[i].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
this.screenPts[i].setLocation$D$D(pt.x, pt.y);
this.transform.setToTranslation$D$D(this.screenPts[i].x, this.screenPts[i].y);
var s=corners[i] === this.selectedCorner  ? this.selectionShape : this.cornerShape;
var sk=corners[i] === this.selectedCorner  ? this.stroke : this.cornerStroke;
this.hitShapes[i]=this.transform.createTransformedShape$java_awt_Shape(s);
this.drawShapes[i]=sk.createStrokedShape$java_awt_Shape(this.hitShapes[i]);
}
this.path.reset$();
this.path.moveTo$F$F(this.screenPts[0].x, this.screenPts[0].y);
this.path.lineTo$F$F(this.screenPts[1].x, this.screenPts[1].y);
this.path.lineTo$F$F(this.screenPts[2].x, this.screenPts[2].y);
this.path.lineTo$F$F(this.screenPts[3].x, this.screenPts[3].y);
this.path.closePath$();
this.drawShapes[4]=this.stroke.createStrokedShape$java_awt_Shape(this.path);
var g2=g;
var gcolor=g2.getColor$();
g2.setColor$java_awt_Color(this.color);
var gfont=g.getFont$();
g2.setFont$java_awt_Font(this.font);
if ($I$(6).setRenderingHints) g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(24).KEY_ANTIALIASING, $I$(24).VALUE_ANTIALIAS_ON);
for (var i=0; i < this.drawShapes.length; i++) {
g2.fill$java_awt_Shape(this.drawShapes[i]);
}
for (var i=0; i < this.textLayouts.length; i++) {
this.p.setLocation$D$D(this.screenPts[i].x - 4 - this.font.getSize$() , this.screenPts[i].y - 6);
this.textLayouts[i].draw$java_awt_Graphics$F$F(g2, this.p.x, this.p.y);
}
g2.setFont$java_awt_Font(gfont);
g2.setColor$java_awt_Color(gcolor);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].superIsEnabled$.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], [])) return null;
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel")) || !this.isEnabled$() ) return null;
for (var i=0; i < this.hitShapes.length; i++) {
if (this.hitShapes[i] != null  && this.hitShapes[i].contains$D$D(xpix, ypix) ) {
if (!this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].isEnabled$.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], [])) return this.inCorners[i];
return this.outCorners[i];
}}
return null;
});

Clazz.newMeth(C$, 'getX$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getY$',  function () {
return 0;
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return true;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return false;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.getX$();
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.getX$();
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.getY$();
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.getY$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PerspectiveFilter, "QuadEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fields=Clazz.array($I$(25), [4, 2]);
this.shapes=Clazz.array(String, -1, ["Any", "Rectangle"]);
this.shapeDropdown=Clazz.new_($I$(26,1));
this.shapeLabel=Clazz.new_($I$(27,1));
this.boxes=Clazz.array($I$(28), [4]);
this.cornersBorder=$I$(29).createTitledBorder$S("");
},1);

C$.$fields$=[['Z',['isInput','refreshing'],'I',['selectedShapeIndex'],'O',['fields','org.opensourcephysics.media.core.DecimalField[][]','shapes','String[]','shapeDropdown','javax.swing.JComboBox','shapeLabel','javax.swing.JLabel','fixedCheckbox','javax.swing.JCheckBox','boxes','javax.swing.Box[]','cornersBorder','javax.swing.border.TitledBorder']]]

Clazz.newMeth(C$, 'c$$Z',  function (input) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(8,1))]);C$.$init$.apply(this);
this.isInput=input;
var cornerSetter=((P$.PerspectiveFilter$QuadEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PerspectiveFilter$QuadEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var corners=this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].isInput ? this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad.inCorners : this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad.outCorners;
for (var i=0; i < this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].fields.length; i++) {
if (e.getSource$() === this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].fields[i][0]  || e.getSource$() === this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].fields[i][1]  ) {
corners[i].setXY$D$D(this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].fields[i][0].getValue$(), this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].fields[i][1].getValue$());
}}
this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].refreshFields$.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'], []);
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], ["image", null, null]);
});
})()
), Clazz.new_($I$(30,1),[this, null],P$.PerspectiveFilter$QuadEditor$1));
var fieldPanel=Clazz.new_([Clazz.new_($I$(31,1).c$$I$I,[2, 2])],$I$(7,1).c$$java_awt_LayoutManager);
fieldPanel.setBorder$javax_swing_border_Border(this.cornersBorder);
for (var i=0; i < this.fields.length; i++) {
this.fields[i][0]=Clazz.new_($I$(25,1).c$$I$I,[4, 1]);
this.fields[i][0].addActionListener$java_awt_event_ActionListener(cornerSetter);
this.fields[i][1]=Clazz.new_($I$(25,1).c$$I$I,[4, 1]);
this.fields[i][1].addActionListener$java_awt_event_ActionListener(cornerSetter);
this.boxes[i]=$I$(28).createHorizontalBox$();
var label=Clazz.new_($I$(27,1).c$$S,[i + ":  x"]);
label.setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(2, 4, 2, 2));
this.boxes[i].add$java_awt_Component(label);
this.boxes[i].add$java_awt_Component(this.fields[i][0]);
label=Clazz.new_($I$(27,1).c$$S,["y"]);
label.setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(2, 4, 2, 2));
this.boxes[i].add$java_awt_Component(label);
this.boxes[i].add$java_awt_Component(this.fields[i][1]);
this.boxes[i].setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(4, 4, 4, 4));
}
fieldPanel.add$java_awt_Component(this.boxes[0]);
fieldPanel.add$java_awt_Component(this.boxes[1]);
fieldPanel.add$java_awt_Component(this.boxes[3]);
fieldPanel.add$java_awt_Component(this.boxes[2]);
this.shapeLabel.setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(4, 8, 4, 4));
this.shapeDropdown.setBorder$javax_swing_border_Border($I$(29).createEmptyBorder$I$I$I$I(4, 0, 4, 8));
this.shapeDropdown.addActionListener$java_awt_event_ActionListener(((P$.PerspectiveFilter$QuadEditor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PerspectiveFilter$QuadEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].refreshing) return;
this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].selectedShapeIndex=this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].shapeDropdown.getSelectedIndex$();
if (this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].shapes[this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].selectedShapeIndex].equals$O("Rectangle")) {
var corners=this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].isInput ? this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad.inCorners : this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad.outCorners;
for (var i=0; i < 4; i++) {
corners[i].setXY$D$D(corners[i].x, corners[i].y);
}
if (this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel != null ) this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].vidPanel.repaint$();
}});
})()
), Clazz.new_(P$.PerspectiveFilter$QuadEditor$2.$init$,[this, null])));
this.fixedCheckbox=Clazz.new_($I$(32,1));
this.fixedCheckbox.addActionListener$java_awt_event_ActionListener(((P$.PerspectiveFilter$QuadEditor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PerspectiveFilter$QuadEditor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].refreshing || this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].isFixed$Z.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], [this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].isInput]) == this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].fixedCheckbox.isSelected$()  ) return;
this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].setFixed$Z$Z.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], [this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].fixedCheckbox.isSelected$(), this.b$['org.opensourcephysics.media.core.PerspectiveFilter.QuadEditor'].isInput]);
});
})()
), Clazz.new_(P$.PerspectiveFilter$QuadEditor$3.$init$,[this, null])));
var box=$I$(28).createHorizontalBox$();
box.add$java_awt_Component(this.shapeLabel);
box.add$java_awt_Component(this.shapeDropdown);
box.add$java_awt_Component(this.fixedCheckbox);
this.add$java_awt_Component$O(box, "North");
this.add$java_awt_Component$O(fieldPanel, "Center");
this.refreshGUI$();
this.refreshFields$();
}, 1);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.refreshing=true;
this.shapeLabel.setText$S($I$(4).getString$S("PerspectiveFilter.Label.Shape"));
this.cornersBorder.setTitle$S($I$(4).getString$S("PerspectiveFilter.Corners.Title"));
this.fixedCheckbox.setText$S($I$(4).getString$S("PerspectiveFilter.Checkbox.Fixed"));
this.shapeDropdown.removeAllItems$();
if (this === this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].inputEditor ) {
this.shapeDropdown.addItem$O($I$(4).getString$S("PerspectiveFilter.Shape.Any"));
} else {
for (var i=0; i < this.shapes.length; i++) {
this.shapeDropdown.addItem$O($I$(4).getString$S("PerspectiveFilter.Shape." + this.shapes[i]));
}
}this.shapeDropdown.setSelectedIndex$I(this.selectedShapeIndex);
this.fixedCheckbox.setSelected$Z(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].isFixed$Z.apply(this.b$['org.opensourcephysics.media.core.PerspectiveFilter'], [this.isInput]));
this.refreshing=false;
});

Clazz.newMeth(C$, 'refreshFields$',  function () {
var corners=this === this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].outputEditor  ? this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad.outCorners : this.b$['org.opensourcephysics.media.core.PerspectiveFilter'].quad.inCorners;
for (var i=0; i < 4; i++) {
this.fields[i][0].setValue$D(corners[i].x);
this.fields[i][1].setValue$D(corners[i].y);
}
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
this.shapeDropdown.setEnabled$Z(b);
this.shapeLabel.setEnabled$Z(b);
this.fixedCheckbox.setEnabled$Z(b);
for (var i=0; i < this.boxes.length; i++) {
for (var c, $c = 0, $$c = this.boxes[i].getComponents$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
c.setEnabled$Z(b);
}
}
this.cornersBorder.setTitleColor$java_awt_Color(b ? this.shapeLabel.getForeground$() : $I$(33).getDisabledTextColor$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PerspectiveFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
p$1.trimCornerPoints.apply(filter, []);
var data=Clazz.array(Double.TYPE, [filter.inCornerPoints.length, null, null]);
for (var i, $i = filter.inKeyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
p$1.refreshCorners$I.apply(filter, [i]);
data[i]=p$1.getCornerData$java_awt_geom_Point2D_DoubleA.apply(filter, [filter.inCornerPoints[i]]);
}
control.setValue$S$O("in_corners", data);
data=Clazz.array(Double.TYPE, [filter.outCornerPoints.length, null, null]);
for (var i, $i = filter.outKeyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
p$1.refreshCorners$I.apply(filter, [i]);
data[i]=p$1.getCornerData$java_awt_geom_Point2D_DoubleA.apply(filter, [filter.outCornerPoints[i]]);
}
control.setValue$S$O("out_corners", data);
if (filter.vidPanel != null ) {
var clip=filter.vidPanel.getPlayer$().getVideoClip$();
control.setValue$S$I("startframe", clip.getStartFrameNumber$());
p$1.refreshCorners$I.apply(filter, [filter.vidPanel.getFrameNumber$()]);
}if (!filter.quad.color.equals$O($I$(23).defaultColor)) {
control.setValue$S$O("color", filter.quad.color);
}filter.addLocation$org_opensourcephysics_controls_XMLControl(control);
control.setValue$S$Z("disabled", !filter.isSuperEnabled$());
control.setValue$S$Z("fixed_in", filter.fixedIn);
control.setValue$S$Z("fixed_out", filter.fixedOut);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(23,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (control.getPropertyNamesRaw$().contains$O("fixed_out")) {
filter.fixedIn=control.getBoolean$S("fixed_in");
filter.fixedOut=control.getBoolean$S("fixed_out");
}var data=control.getObject$S("in_corners");
if (data != null ) {
p$1.loadCornerData$DAAA$Z.apply(filter, [data, true]);
}data=control.getObject$S("out_corners");
if (data != null ) {
p$1.loadCornerData$DAAA$Z.apply(filter, [data, false]);
}for (var i, $i = filter.inKeyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
p$1.refreshCorners$I.apply(filter, [i]);
}
for (var i, $i = filter.outKeyFrames.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
p$1.refreshCorners$I.apply(filter, [i]);
}
var frame=control.getInt$S("startframe");
if (frame != -2147483648) {
p$1.refreshCorners$I.apply(filter, [frame]);
}if (filter.vidPanel != null ) {
p$1.refreshCorners$I.apply(filter, [filter.vidPanel.getFrameNumber$()]);
}if (control.getPropertyNamesRaw$().contains$O("color")) {
filter.quad.color=control.getObject$S("color");
}filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
var disable=control.getBoolean$S("disabled");
if (disable && filter.isSuperEnabled$()  || (!disable && !filter.isSuperEnabled$() ) ) {
filter.ableButton.doClick$I(0);
}filter.refresh$();
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
