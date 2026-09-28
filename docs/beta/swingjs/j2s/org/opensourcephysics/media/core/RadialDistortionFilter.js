(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'javax.swing.JButton','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.media.core.RadialDistortionFilter','javax.swing.JOptionPane','org.opensourcephysics.display.OSPRuntime','javax.swing.BorderFactory','javax.swing.JComboBox','javax.swing.JSlider','java.awt.event.MouseAdapter','javax.swing.JLabel','org.opensourcephysics.media.core.IntegerField','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout','javax.swing.Box','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.media.core.TPoint',['java.awt.geom.Ellipse2D','.Double'],'java.awt.BasicStroke','java.awt.RenderingHints','java.util.ArrayList','java.awt.Color',['org.opensourcephysics.media.core.RadialDistortionFilter','.Circle'],['org.opensourcephysics.media.core.RadialDistortionFilter','.Inspector'],['org.opensourcephysics.media.core.RadialDistortionFilter','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RadialDistortionFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Circle',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isValidTransform=false;
this.updatingDisplay=false;
this.dimensionsChanged=false;
this.lowerRadiusLimit=((100 * C$.minRadius)|0);
this.interpolation=1;
this.fixedRadius=0.75;
this.sourceFOV=1.5707963267948966;
this.sourceProjectionType="Rectilinear";
this.outputProjectionType="Rectilinear";
this.color=$I$(22).GREEN;
},1);

C$.$fields$=[['Z',['isValidTransform','updatingDisplay','dimensionsChanged','hasLowerLimit'],'D',['pixelsToCorner','outputFOV','fixedRadius','sourceFOV'],'I',['lowerRadiusLimit','interpolation'],'S',['sourceProjectionType','outputProjectionType'],'O',['xOut','double[]','+yOut','+xIn','+yIn','color','java.awt.Color','inspector','org.opensourcephysics.media.core.RadialDistortionFilter.Inspector','circle','org.opensourcephysics.media.core.RadialDistortionFilter.Circle']]
,['D',['minRadius','maxRadius','minFOV','maxFOV'],'O',['PROJECTION_TYPES','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.circle=Clazz.new_($I$(23,1),[this, null]);
this.refresh$();
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(24,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.ableButton.setText$S(this.isEnabled$() ? $I$(2).getString$S("Filter.Button.Disable") : $I$(2).getString$S("Filter.Button.Enable"));
this.inspector.refreshGUI$();
});

Clazz.newMeth(C$, 'setFixedRadius$D',  function (fraction) {
if (Double.isNaN$D(fraction)) return;
fraction=Math.abs(fraction);
fraction=Math.min(fraction, C$.maxRadius);
fraction=Math.max(fraction, C$.minRadius);
if (this.fixedRadius != fraction ) {
this.fixedRadius=fraction;
if (this.inspector != null ) this.inspector.updateDisplay$();
this.isValidTransform=false;
this.firePropertyChange$S$O$O("image", null, null);
}});

Clazz.newMeth(C$, 'getFixedRadius$',  function () {
return this.fixedRadius;
});

Clazz.newMeth(C$, 'setSourceFOV$D',  function (fov) {
if (Double.isNaN$D(fov)) return;
fov=Math.abs(fov);
fov=Math.min(fov, 3.141092653589793);
fov=Math.max(fov, C$.minFOV);
if (this.sourceFOV != fov ) {
this.sourceFOV=fov;
if (this.inspector != null ) this.inspector.updateDisplay$();
this.isValidTransform=false;
this.firePropertyChange$S$O$O("image", null, null);
}});

Clazz.newMeth(C$, 'getSourceFOV$',  function () {
return this.sourceFOV;
});

Clazz.newMeth(C$, 'setSourceProjectionType$S',  function (type) {
if (!this.sourceProjectionType.equals$O(type) && C$.PROJECTION_TYPES.contains$O(type) ) {
this.sourceProjectionType=type;
this.hasLowerLimit=p$1.getAngleAtRadius$D$S$D.apply(this, [0.5, this.outputProjectionType, 1.5707963267948966]) < p$1.getAngleAtRadius$D$S$D.apply(this, [0.5, this.sourceProjectionType, 1.5707963267948966]) ;
this.isValidTransform=false;
if (this.inspector != null ) this.inspector.updateDisplay$();
this.firePropertyChange$S$O$O("image", null, null);
}});

Clazz.newMeth(C$, 'getSourceProjectionType$',  function () {
return this.sourceProjectionType;
});

Clazz.newMeth(C$, 'setOutputProjectionType$S',  function (type) {
if (!this.outputProjectionType.equals$O(type) && C$.PROJECTION_TYPES.contains$O(type) ) {
this.outputProjectionType=type;
this.hasLowerLimit=p$1.getAngleAtRadius$D$S$D.apply(this, [0.5, this.outputProjectionType, 1.5707963267948966]) < p$1.getAngleAtRadius$D$S$D.apply(this, [0.5, this.sourceProjectionType, 1.5707963267948966]) ;
this.isValidTransform=false;
if (this.inspector != null ) this.inspector.updateDisplay$();
this.firePropertyChange$S$O$O("image", null, null);
}});

Clazz.newMeth(C$, 'getOutputProjectionType$',  function () {
return this.outputProjectionType;
});

Clazz.newMeth(C$, 'getProjectionTypeDescriptions',  function () {
var types=Clazz.array(String, [C$.PROJECTION_TYPES.size$()]);
for (var i=0; i < types.length; i++) {
var next=C$.PROJECTION_TYPES.get$I(i);
types[i]=$I$(2).getString$S("RadialDistortionFilter.ProjectionType." + next);
}
return types;
}, p$1);

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
this.pixelsToCorner=Math.sqrt(this.w * this.w + this.h * this.h) / 2;
this.isValidTransform=false;
});

Clazz.newMeth(C$, 'initializeSource$java_awt_image_BufferedImage',  function (image) {
var prevW=this.w;
var prevH=this.h;
C$.superclazz.prototype.initializeSource$java_awt_image_BufferedImage.apply(this, [image]);
this.dimensionsChanged=(this.w != prevW || this.h != prevH );
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
if (this.dimensionsChanged) {
this.xOut=Clazz.array(Double.TYPE, [this.w * this.h]);
this.yOut=Clazz.array(Double.TYPE, [this.w * this.h]);
for (var i=0; i < this.w; i++) {
for (var j=0; j < this.h; j++) {
this.xOut[j * this.w + i]=i;
this.yOut[j * this.w + i]=j;
}
}
}if (!this.isValidTransform || this.xIn == null   || this.dimensionsChanged ) {
this.xIn=Clazz.array(Double.TYPE, [this.w * this.h]);
this.yIn=Clazz.array(Double.TYPE, [this.w * this.h]);
p$1.transform$DA$DA$DA$DA.apply(this, [this.xOut, this.yOut, this.xIn, this.yIn]);
}for (var i=0; i < this.nPixelsIn; i++) {
this.pixelsOut[i]=p$1.getColor$D$D$I$I$IA.apply(this, [this.xIn[i], this.yIn[i], this.w, this.h, this.pixelsIn]);
}
this.dimensionsChanged=false;
});

Clazz.newMeth(C$, 'transform$DA$DA$DA$DA',  function (xSource, ySource, xTrans, yTrans) {
p$1.refreshScale.apply(this, []);
var xCenter=this.w / 2.0;
var yCenter=this.h / 2.0;
var n=xSource.length;
for (var i=0; i < n; i++) {
var dx=xSource[i] - xCenter;
var dy=ySource[i] - yCenter;
var r=Math.sqrt(dx * dx + dy * dy);
var stretch=p$1.getStretchFactor$D.apply(this, [r]);
var extra=1.0E-4;
xTrans[i]=xCenter + stretch * dx + extra;
yTrans[i]=yCenter + stretch * dy + extra;
}
this.isValidTransform=true;
}, p$1);

Clazz.newMeth(C$, 'findRadiusLimit',  function () {
var tolerance=1.0E-6;
var maxInterations=10;
var rLimit=0.8;
var f=p$1.getAngleAtRadius$D$S$D.apply(this, [rLimit, this.sourceProjectionType, this.sourceFOV]) - p$1.getAngleAtRadius$D$S$D.apply(this, [rLimit, this.outputProjectionType, 3.141592653589793]);
var dfdr=p$1.getDerivativeAtRadius$D$S$D.apply(this, [rLimit, this.sourceProjectionType, this.sourceFOV]) - p$1.getDerivativeAtRadius$D$S$D.apply(this, [rLimit, this.outputProjectionType, 3.141592653589793]);
var i=0;
for (; Math.abs(f) > tolerance  && i < maxInterations ; i++) {
rLimit=rLimit - f / dfdr;
f=p$1.getAngleAtRadius$D$S$D.apply(this, [rLimit, this.sourceProjectionType, this.sourceFOV]) - p$1.getAngleAtRadius$D$S$D.apply(this, [rLimit, this.outputProjectionType, 3.141592653589793]);
dfdr=p$1.getDerivativeAtRadius$D$S$D.apply(this, [rLimit, this.sourceProjectionType, this.sourceFOV]) - p$1.getDerivativeAtRadius$D$S$D.apply(this, [rLimit, this.outputProjectionType, 3.141592653589793]);
}
return i < maxInterations ? rLimit : NaN;
}, p$1);

Clazz.newMeth(C$, 'getAngleAtRadius$D$S$D',  function (r, projectionType, fov) {
if ("Rectilinear".equals$O(projectionType)) {
return Math.atan(r * Math.tan(fov / 2));
} else if ("Equidistant".equals$O(projectionType)) {
return r * fov / 2;
} else if ("Equisolid".equals$O(projectionType)) {
return 2 * Math.asin(r * Math.sin(fov / 4));
} else if ("Stereographic".equals$O(projectionType)) {
return 2 * Math.atan(r * Math.tan(fov / 4));
} else if ("Orthographic".equals$O(projectionType)) {
return Math.asin(r * Math.sin(fov / 2));
}return r * fov / 2;
}, p$1);

Clazz.newMeth(C$, 'getDerivativeAtRadius$D$S$D',  function (r, projectionType, fov) {
if ("Rectilinear".equals$O(projectionType)) {
var tan=Math.tan(fov / 2);
return tan / (1 + r * r * tan * tan );
} else if ("Equidistant".equals$O(projectionType)) {
return fov / 2;
} else if ("Equisolid".equals$O(projectionType)) {
var sin=Math.sin(fov / 4);
return 2 * sin / Math.sqrt(1 - r * r * sin * sin );
} else if ("Stereographic".equals$O(projectionType)) {
var tan=Math.tan(fov / 4);
return 2 * tan / (1 + r * r * tan * tan );
} else if ("Orthographic".equals$O(projectionType)) {
var sin=Math.sin(fov / 2);
return sin / Math.sqrt(1 - r * r * sin * sin );
}return fov / 2;
}, p$1);

Clazz.newMeth(C$, 'refreshScale',  function () {
if (this.sourceFOV == 0 ) return;
var theta=p$1.getAngleAtRadius$D$S$D.apply(this, [this.fixedRadius, this.sourceProjectionType, this.sourceFOV]);
if ("Rectilinear".equals$O(this.outputProjectionType)) {
this.outputFOV=2 * Math.atan(Math.tan(theta) / this.fixedRadius);
} else if ("Equidistant".equals$O(this.outputProjectionType)) {
this.outputFOV=2 * theta / this.fixedRadius;
} else if ("Equisolid".equals$O(this.outputProjectionType)) {
this.outputFOV=4 * Math.asin(Math.sin(theta / 2) / this.fixedRadius);
} else if ("Stereographic".equals$O(this.outputProjectionType)) {
this.outputFOV=4 * Math.atan(Math.tan(theta / 2) / this.fixedRadius);
} else if ("Orthographic".equals$O(this.outputProjectionType)) {
this.outputFOV=2 * Math.asin(Math.sin(theta) / this.fixedRadius);
}if (Double.isNaN$D(this.outputFOV)) this.outputFOV=C$.maxFOV;
if (this.hasLowerLimit) {
var limit=p$1.findRadiusLimit.apply(this, []);
if (!Double.isNaN$D(limit) && limit > 0.005   && limit < 1.01  ) {
this.lowerRadiusLimit=Math.max((Math.floor(100 * limit)|0), ((100 * C$.minRadius)|0));
}if (this.outputFOV > C$.maxFOV  && this.fixedRadius != this.lowerRadiusLimit / 100.0  ) {
this.fixedRadius=this.lowerRadiusLimit / 100.0;
p$1.refreshScale.apply(this, []);
}} else {
this.lowerRadiusLimit=((100 * C$.minRadius)|0);
}}, p$1);

Clazz.newMeth(C$, 'getStretchFactor$D',  function (rOut) {
if (rOut == 0  || this.sourceFOV == 0  ) return 1;
var radius=rOut / this.pixelsToCorner;
var theta=p$1.getAngleAtRadius$D$S$D.apply(this, [radius, this.outputProjectionType, this.outputFOV]);
var rSource=rOut;
if ("Rectilinear".equals$O(this.sourceProjectionType)) {
var L=this.pixelsToCorner / Math.tan(this.sourceFOV / 2);
rSource=L * Math.tan(theta);
} else if ("Equidistant".equals$O(this.sourceProjectionType)) {
var L=2 * this.pixelsToCorner / this.sourceFOV;
rSource=L * theta;
} else if ("Equisolid".equals$O(this.sourceProjectionType)) {
var twoL=this.pixelsToCorner / Math.sin(this.sourceFOV / 4);
rSource=twoL * Math.sin(theta / 2);
} else if ("Stereographic".equals$O(this.sourceProjectionType)) {
var twoL=this.pixelsToCorner / Math.tan(this.sourceFOV / 4);
rSource=twoL * Math.tan(theta / 2);
} else if ("Orthographic".equals$O(this.sourceProjectionType)) {
var L=this.pixelsToCorner / Math.sin(this.sourceFOV / 2);
rSource=L * Math.sin(theta);
}return rSource / rOut;
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
var values=Clazz.array(Integer.TYPE, -1, [pixelValues[row * w + col], pixelValues[row * w + col + 1], pixelValues[(row + 1) * w + col], pixelValues[(row + 1) * w + col + 1]]);
var rgb=Clazz.array(Integer.TYPE, [4]);
for (var j=0; j < 4; j++) {
rgb[j]=(values[j] >> 16) & 255;
}
var r=p$1.bilinearInterpolation$D$D$IA.apply(this, [u, v, rgb]);
for (var j=0; j < 4; j++) {
rgb[j]=(values[j] >> 8) & 255;
}
var g=p$1.bilinearInterpolation$D$D$IA.apply(this, [u, v, rgb]);
for (var j=0; j < 4; j++) {
rgb[j]=(values[j]) & 255;
}
var b=p$1.bilinearInterpolation$D$D$IA.apply(this, [u, v, rgb]);
return (r << 16) | (g << 8) | b ;
}return u < 0.5  ? v < 0.5  ? pixelValues[row * w + col] : pixelValues[(row + 1) * w + col] : v < 0.5  ? pixelValues[row * w + col + 1] : pixelValues[(row + 1) * w + col + 1];
}, p$1);

Clazz.newMeth(C$, 'bilinearInterpolation$D$D$IA',  function (x, y, values) {
return (((1 - y) * ((1 - x) * values[0] + x * values[2]) + y * ((1 - x) * values[1] + x * values[3]))|0);
}, p$1);

Clazz.newMeth(C$, 'superIsEnabled$',  function () {
return C$.superclazz.prototype.isEnabled$.apply(this, []);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(25,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PROJECTION_TYPES=Clazz.new_($I$(21,1));
C$.minRadius=0.2;
C$.maxRadius=1.0;
C$.minFOV=0.17453292519943295;
C$.maxFOV=3.1405926535897932;
{
C$.PROJECTION_TYPES.add$O("Rectilinear");
C$.PROJECTION_TYPES.add$O("Equisolid");
C$.PROJECTION_TYPES.add$O("Equidistant");
C$.PROJECTION_TYPES.add$O("Stereographic");
C$.PROJECTION_TYPES.add$O("Orthographic");
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.RadialDistortionFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['helpButton','javax.swing.JButton','+colorButton','contentPane','javax.swing.JPanel','radiusSlider','javax.swing.JSlider','+sourceAngleSlider','sourceTypeDropdown','javax.swing.JComboBox','+outputTypeDropdown','radiusLabel','javax.swing.JLabel','+sourceAngleLabel','+outputAngleLabel','+sourceTypeLabel','+outputTypeLabel','radiusField','org.opensourcephysics.media.core.IntegerField','+sourceAngleField','+outputAngleField','sourceBorder','javax.swing.border.TitledBorder','+outputBorder','+circleBorder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["RadialDistortionFilter.Inspector.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.helpButton=Clazz.new_($I$(1,1));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.RadialDistortionFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var s=$I$(2).getString$S("RadialDistortionFilter.Help.Message1") + "\n" + $I$(2).getString$S("RadialDistortionFilter.Help.Message2") + "\n" + $I$(2).getString$S("RadialDistortionFilter.Help.Message3") + "\n" + $I$(2).getString$S("RadialDistortionFilter.Help.Message4") + "\n" + $I$(2).getString$S("RadialDistortionFilter.Help.Message5") + "\n\n" + $I$(2).getString$S("RadialDistortionFilter.Help.Message6") + "\n" + $I$(2).getString$S("RadialDistortionFilter.Help.Message7") ;
for (var i=0; i < $I$(3).PROJECTION_TYPES.size$(); i++) {
var type=$I$(3).PROJECTION_TYPES.get$I(i);
s+="\n    " + (i + 1) + ". " + $I$(2).getString$S("RadialDistortionFilter.Help.Message." + type) ;
}
s+="\n\n" + $I$(2).getString$S("RadialDistortionFilter.Help.Message8") + "\n    " + $I$(2).getString$S("RadialDistortionFilter.Help.Message9") + "\n    " + $I$(2).getString$S("RadialDistortionFilter.Help.Message10") + "\n    " + $I$(2).getString$S("RadialDistortionFilter.Help.Message11") ;
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[$I$(4).getFrameForComponent$java_awt_Component(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].vidPanel), s, $I$(2).getString$S("RadialDistortionFilter.Help.Title"), 1]);
});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$1.$init$,[this, null])));
this.colorButton=Clazz.new_($I$(1,1));
this.colorButton.addActionListener$java_awt_event_ActionListener(((P$.RadialDistortionFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(5,"chooseColor$java_awt_Color$S$java_util_function_Consumer",[this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].color, $I$(2).getString$S("PerspectiveFilter.Dialog.Color.Title"), ((P$.RadialDistortionFilter$Inspector$2$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$2$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_awt_Color','accept$O'],  function (newColor) /*block*/{
if (newColor != null ) {
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].color=newColor;
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["filter_color", null, newColor]);
}});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$2$lambda1.$init$,[this, null]))]);
});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$2.$init$,[this, null])));
var space=$I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2);
var types=p$1.getProjectionTypeDescriptions.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], []);
this.sourceTypeDropdown=Clazz.new_($I$(7,1).c$$OA,[types]);
this.sourceTypeDropdown.setSelectedItem$O($I$(2).getString$S("RadialDistortionFilter.ProjectionType." + this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].sourceProjectionType));
this.sourceTypeDropdown.setBorder$javax_swing_border_Border(space);
this.sourceTypeDropdown.addItemListener$java_awt_event_ItemListener(((P$.RadialDistortionFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var desired=this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].sourceTypeDropdown.getSelectedItem$().toString();
var types=p$1.getProjectionTypeDescriptions.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], []);
for (var i=0; i < types.length; i++) {
if (types[i].equals$O(desired)) {
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].setSourceProjectionType$S.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], [$I$(3).PROJECTION_TYPES.get$I(i)]);
}}
});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$3.$init$,[this, null])));
this.outputTypeDropdown=Clazz.new_($I$(7,1).c$$OA,[types]);
this.outputTypeDropdown.setSelectedItem$O($I$(2).getString$S("RadialDistortionFilter.ProjectionType." + this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].outputProjectionType));
this.outputTypeDropdown.setBorder$javax_swing_border_Border(space);
this.outputTypeDropdown.addItemListener$java_awt_event_ItemListener(((P$.RadialDistortionFilter$Inspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var desired=this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].outputTypeDropdown.getSelectedItem$().toString();
var types=p$1.getProjectionTypeDescriptions.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], []);
for (var i=0; i < types.length; i++) {
if (types[i].equals$O(desired)) {
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].setOutputProjectionType$S.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], [$I$(3).PROJECTION_TYPES.get$I(i)]);
}}
});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$4.$init$,[this, null])));
space=$I$(6).createEmptyBorder$I$I$I$I(2, 4, 2, 4);
this.sourceAngleSlider=Clazz.new_($I$(8,1).c$$I$I$I,[5, 180, 90]);
this.sourceAngleSlider.setBorder$javax_swing_border_Border(space);
this.sourceAngleSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.RadialDistortionFilter$Inspector$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var n=this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].sourceAngleSlider.getValue$();
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].setSourceFOV$D.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], [n * 3.141592653589793 / 180]);
});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$5.$init$,[this, null])));
var rMax=((100 * $I$(3).maxRadius)|0);
var rMin=((100 * $I$(3).minRadius)|0);
var rFixed=((100 * this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].fixedRadius)|0);
this.radiusSlider=Clazz.new_($I$(8,1).c$$I$I$I,[rMin, rMax, rFixed]);
this.radiusSlider.setBorder$javax_swing_border_Border(space);
this.radiusSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.RadialDistortionFilter$Inspector$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var i=this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].radiusSlider.getValue$();
i=Math.max(i, this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].lowerRadiusLimit);
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].setFixedRadius$D.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], [i / 100.0]);
});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$6.$init$,[this, null])));
this.radiusSlider.addMouseListener$java_awt_event_MouseListener(((P$.RadialDistortionFilter$Inspector$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'], []);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.RadialDistortionFilter$Inspector$7)));
space=$I$(6).createEmptyBorder$I$I$I$I(2, 4, 2, 2);
this.sourceTypeLabel=Clazz.new_($I$(10,1));
this.sourceTypeLabel.setBorder$javax_swing_border_Border(space);
this.outputTypeLabel=Clazz.new_($I$(10,1));
this.outputTypeLabel.setBorder$javax_swing_border_Border(space);
this.sourceAngleLabel=Clazz.new_($I$(10,1));
this.sourceAngleLabel.setBorder$javax_swing_border_Border(space);
this.outputAngleLabel=Clazz.new_($I$(10,1));
this.outputAngleLabel.setBorder$javax_swing_border_Border(space);
this.radiusLabel=Clazz.new_($I$(10,1));
this.radiusLabel.setBorder$javax_swing_border_Border(space);
this.sourceAngleField=Clazz.new_($I$(11,1).c$$I,[3]);
this.sourceAngleField.setMaxValue$D(180);
this.sourceAngleField.setMinValue$D(5);
this.sourceAngleField.setUnits$S("\u00b0");
this.sourceAngleField.addActionListener$java_awt_event_ActionListener(((P$.RadialDistortionFilter$Inspector$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var n=this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].sourceAngleField.getIntValue$();
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].setSourceFOV$D.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], [n * 3.141592653589793 / 180]);
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'], []);
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].sourceAngleField.selectAll$();
});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$8.$init$,[this, null])));
this.sourceAngleField.addFocusListener$java_awt_event_FocusListener(((P$.RadialDistortionFilter$Inspector$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].sourceAngleField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var n=this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].sourceAngleField.getIntValue$();
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].setSourceFOV$D.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], [n * 3.141592653589793 / 180]);
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$9.$init$,[this, null])));
this.outputAngleField=Clazz.new_($I$(11,1).c$$I,[3]);
this.outputAngleField.setMaxValue$D(180);
this.outputAngleField.setMinValue$D(0);
this.outputAngleField.setEditable$Z(false);
this.outputAngleField.setUnits$S("\u00b0");
this.radiusField=Clazz.new_($I$(11,1).c$$I,[3]);
this.radiusField.setMaxValue$D(rMax);
this.radiusField.setMinValue$D(rMin);
this.radiusField.setUnits$S("%");
this.radiusField.addActionListener$java_awt_event_ActionListener(((P$.RadialDistortionFilter$Inspector$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var n=this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].radiusField.getIntValue$();
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].setFixedRadius$D.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], [n / 100.0]);
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'], []);
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].radiusField.selectAll$();
});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$10.$init$,[this, null])));
this.radiusField.addFocusListener$java_awt_event_FocusListener(((P$.RadialDistortionFilter$Inspector$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadialDistortionFilter$Inspector$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].radiusField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var n=this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].radiusField.getIntValue$();
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].setFixedRadius$D.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], [n / 100.0]);
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.RadialDistortionFilter$Inspector$11.$init$,[this, null])));
this.contentPane=Clazz.new_([Clazz.new_($I$(13,1))],$I$(12,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(this.contentPane);
var buttonbar=Clazz.new_([Clazz.new_($I$(14,1))],$I$(12,1).c$$java_awt_LayoutManager);
this.contentPane.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.helpButton);
buttonbar.add$java_awt_Component(this.colorButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].closeButton);
space=$I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 4);
var controlPanel=$I$(15).createVerticalBox$();
this.contentPane.add$java_awt_Component$O(controlPanel, "Center");
var sourceStack=$I$(15).createVerticalBox$();
this.sourceBorder=$I$(6).createTitledBorder$S("");
sourceStack.setBorder$javax_swing_border_Border(this.sourceBorder);
controlPanel.add$java_awt_Component(sourceStack);
var box=$I$(15).createHorizontalBox$();
box.setBorder$javax_swing_border_Border(space);
box.add$java_awt_Component(this.sourceTypeLabel);
box.add$java_awt_Component(this.sourceTypeDropdown);
box.add$java_awt_Component(this.sourceAngleLabel);
box.add$java_awt_Component(this.sourceAngleField);
sourceStack.add$java_awt_Component(box);
box=$I$(15).createHorizontalBox$();
box.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
box.add$java_awt_Component(this.sourceAngleSlider);
sourceStack.add$java_awt_Component(box);
var outputStack=$I$(15).createVerticalBox$();
this.outputBorder=$I$(6).createTitledBorder$S("");
outputStack.setBorder$javax_swing_border_Border(this.outputBorder);
controlPanel.add$java_awt_Component(outputStack);
box=$I$(15).createHorizontalBox$();
box.setBorder$javax_swing_border_Border(space);
box.add$java_awt_Component(this.outputTypeLabel);
box.add$java_awt_Component(this.outputTypeDropdown);
box.add$java_awt_Component(this.outputAngleLabel);
box.add$java_awt_Component(this.outputAngleField);
outputStack.add$java_awt_Component(box);
var circleBox=$I$(15).createVerticalBox$();
this.circleBorder=$I$(6).createTitledBorder$S("");
circleBox.setBorder$javax_swing_border_Border(this.circleBorder);
controlPanel.add$java_awt_Component(circleBox);
box=$I$(15).createHorizontalBox$();
box.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
box.add$java_awt_Component(this.radiusLabel);
box.add$java_awt_Component(this.radiusField);
box.add$java_awt_Component(this.radiusSlider);
circleBox.add$java_awt_Component(box);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setTitle$S($I$(2).getString$S("RadialDistortionFilter.Inspector.Title"));
this.sourceTypeLabel.setText$S($I$(2).getString$S("RadialDistortionFilter.Label.ProjectionType") + ":");
this.outputTypeLabel.setText$S($I$(2).getString$S("RadialDistortionFilter.Label.ProjectionType") + ":");
this.sourceAngleLabel.setText$S($I$(2).getString$S("RadialDistortionFilter.Label.Angle") + ":");
this.outputAngleLabel.setText$S($I$(2).getString$S("RadialDistortionFilter.Label.Angle") + ":");
this.radiusLabel.setText$S($I$(2).getString$S("RadialDistortionFilter.Label.Diameter") + ":");
this.helpButton.setText$S($I$(2).getString$S("PerspectiveFilter.Button.Help"));
this.colorButton.setText$S($I$(2).getString$S("PerspectiveFilter.Button.Color"));
this.sourceBorder.setTitle$S($I$(2).getString$S("RadialDistortionFilter.BorderTitle.Source"));
this.outputBorder.setTitle$S($I$(2).getString$S("RadialDistortionFilter.BorderTitle.Output"));
this.circleBorder.setTitle$S($I$(2).getString$S("RadialDistortionFilter.BorderTitle.Circle"));
var enabled=this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].isEnabled$.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], []);
this.sourceTypeLabel.setEnabled$Z(enabled);
this.outputTypeLabel.setEnabled$Z(enabled);
this.radiusLabel.setEnabled$Z(enabled);
this.sourceAngleLabel.setEnabled$Z(enabled);
this.outputAngleLabel.setEnabled$Z(enabled);
this.radiusField.setEnabled$Z(enabled);
this.sourceAngleField.setEnabled$Z(enabled);
this.outputAngleField.setEnabled$Z(enabled);
this.radiusSlider.setEnabled$Z(enabled);
this.sourceAngleSlider.setEnabled$Z(enabled);
this.sourceTypeDropdown.setEnabled$Z(enabled);
this.outputTypeDropdown.setEnabled$Z(enabled);
this.colorButton.setEnabled$Z(enabled);
var color=enabled ? $I$(16).getEnabledTextColor$() : $I$(16).getDisabledTextColor$();
this.sourceBorder.setTitleColor$java_awt_Color(color);
this.outputBorder.setTitleColor$java_awt_Color(color);
this.circleBorder.setTitleColor$java_awt_Color(color);
this.repaint$();
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.updateDisplay$();
});

Clazz.newMeth(C$, 'updateDisplay$',  function () {
if (this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].updatingDisplay) return;
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].updatingDisplay=true;
p$1.refreshScale.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], []);
var n=Long.$ival(Math.round$D(180 * this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].sourceFOV / 3.141592653589793));
this.sourceAngleField.setIntValue$I(n);
this.sourceAngleSlider.setValue$I(n);
n=Long.$ival(Math.round$D(180 * this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].outputFOV / 3.141592653589793));
this.outputAngleField.setIntValue$I(n);
n=Long.$ival(Math.round$D(100 * this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].fixedRadius));
this.radiusSlider.setValue$I(n);
this.radiusField.setIntValue$I(n);
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].updatingDisplay=false;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (vis) this.refreshGUI$();
if (this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].vidPanel != null ) {
if (vis) {
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].vidPanel.addDrawable$org_opensourcephysics_display_Drawable(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].circle);
this.firePropertyChange$S$O$O("filter_visible", null, null);
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].addPropertyChangeListener$S$java_beans_PropertyChangeListener.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], ["filter_visible", this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].vidPanel]);
} else {
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].vidPanel.removeDrawable$org_opensourcephysics_display_Drawable(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].circle);
this.firePropertyChange$S$O$O("filter_visible", null, null);
this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].removePropertyChangeListener$S$java_beans_PropertyChangeListener.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], ["filter_visible", this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].vidPanel]);
}}this.firePropertyChange$S$O$O("image", null, null);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RadialDistortionFilter, "Circle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.media.core.Trackable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.center=Clazz.new_($I$(17,1));
this.corner=Clazz.new_($I$(17,1));
this.ellipse=Clazz.new_($I$(18,1));
this.stroke=Clazz.new_($I$(19,1).c$$F,[2]);
},1);

C$.$fields$=[['O',['center','org.opensourcephysics.media.core.TPoint','+corner','ellipse','java.awt.geom.Ellipse2D','stroke','java.awt.Stroke']]]

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].superIsEnabled$.apply(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'], [])) return;
var vidPanel=panel;
var d=vidPanel.getVideo$().getImageSize$Z(true);
var x=(d.width/2|0);
var y=(d.height/2|0);
var r=this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].fixedRadius * this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].pixelsToCorner;
this.center.setLocation$D$D(x, y);
this.corner.setLocation$D$D(x - r, y - r);
var centerScreen=this.center.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
var cornerScreen=this.corner.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(vidPanel);
this.ellipse.setFrameFromCenter$java_awt_geom_Point2D$java_awt_geom_Point2D(centerScreen, cornerScreen);
var shape=this.stroke.createStrokedShape$java_awt_Shape(this.ellipse);
var g2=g;
var gcolor=g2.getColor$();
g2.setColor$java_awt_Color(this.b$['org.opensourcephysics.media.core.RadialDistortionFilter'].color);
if ($I$(5).setRenderingHints) g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(20).KEY_ANTIALIASING, $I$(20).VALUE_ANTIALIAS_ON);
g2.fill$java_awt_Shape(shape);
g2.setColor$java_awt_Color(gcolor);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RadialDistortionFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
control.setValue$S$D("fixed_radius", filter.fixedRadius);
control.setValue$S$O("input_type", filter.sourceProjectionType);
control.setValue$S$D("input_fov", filter.sourceFOV);
control.setValue$S$O("output_type", filter.outputProjectionType);
control.setValue$S$O("color", filter.color);
filter.addLocation$org_opensourcephysics_controls_XMLControl(control);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
filter.setFixedRadius$D(control.getDouble$S("fixed_radius"));
filter.setSourceFOV$D(control.getDouble$S("input_fov"));
filter.setSourceProjectionType$S(control.getString$S("input_type"));
filter.setOutputProjectionType$S(control.getString$S("output_type"));
var color=control.getObject$S("color");
if (color != null ) filter.color=color;
filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
