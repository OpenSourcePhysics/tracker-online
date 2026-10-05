(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'javax.swing.JButton','javax.swing.BorderFactory','org.opensourcephysics.media.core.BarrelPincushionFilter','javax.swing.JSlider','javax.swing.JLabel','org.opensourcephysics.media.core.NumberField','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout','javax.swing.Box','org.opensourcephysics.media.core.MediaRes',['org.opensourcephysics.media.core.BarrelPincushionFilter','.Inspector'],['java.awt.geom.Point2D','.Double'],['org.opensourcephysics.media.core.BarrelPincushionFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BarrelPincushionFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isValidTransform=false;
this.updatingDisplay=false;
this.dimensionsChanged=false;
this.interpolation=1;
this.alpha=0;
this.scaleFactor=1;
},1);

C$.$fields$=[['Z',['isValidTransform','updatingDisplay','dimensionsChanged'],'D',['pixelsToCorner','alpha','scaleFactor'],'I',['interpolation'],'O',['xOut','double[]','+yOut','+xIn','+yIn','inspector','org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector']]
,['D',['minAlpha','maxAlpha','minScale','maxScale']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.refresh$();
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(12,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.ableButton.setText$S(this.isEnabled$() ? $I$(11).getString$S("Filter.Button.Disable") : $I$(11).getString$S("Filter.Button.Enable"));
this.inspector.refreshGUI$();
});

Clazz.newMeth(C$, 'setAlpha$D',  function (a) {
this.alpha=Math.max(C$.minAlpha, Math.min(C$.maxAlpha, a));
this.isValidTransform=false;
this.firePropertyChange$S$O$O("image", null, null);
});

Clazz.newMeth(C$, 'setScale$D',  function (scale) {
this.scaleFactor=scale;
this.isValidTransform=false;
this.firePropertyChange$S$O$O("image", null, null);
});

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
var xCenter=this.w / 2.0;
var yCenter=this.h / 2.0;
var str=p$1.getStretchFactor$D.apply(this, [0.9 * xCenter]);
this.scaleFactor=1 / str;
var n=xSource.length;
for (var i=0; i < n; i++) {
var dx=xSource[i] - xCenter;
var dy=ySource[i] - yCenter;
var r=Math.sqrt(dx * dx + dy * dy);
var stretch=p$1.getStretchFactor$D.apply(this, [r]);
var extra=1.0E-6;
xTrans[i]=xCenter + stretch * dx + extra;
yTrans[i]=yCenter + stretch * dy + extra;
}
this.isValidTransform=true;
}, p$1);

Clazz.newMeth(C$, 'getStretchFactor$D',  function (rOut) {
if (rOut == 0 ) return 1;
var rn=rOut / this.pixelsToCorner;
var n=0;
var rnPrev=rn;
var rnNext=p$1.transform$D$D.apply(this, [rn, rnPrev]);
while (n < 1 && Math.abs(rnPrev - rnNext) > 0.1 / this.pixelsToCorner  ){
++n;
rnPrev=rnNext;
rnNext=p$1.transform$D$D.apply(this, [rn, rnPrev]);
}
var rIn=rnNext * this.pixelsToCorner;
var ratio=rIn / rOut;
return ratio;
}, p$1);

Clazz.newMeth(C$, 'transform$D$D',  function (rOrig, rPrev) {
return rOrig / (1.0 - this.alpha * rPrev * rPrev );
}, p$1);

Clazz.newMeth(C$, 'getRadialX$F$F$F$F$F',  function (x, y, cx, cy, k) {
var xscale=1;
var xshift=1;
var yscale=1;
var yshift=1;
x=(x * xscale + xshift);
y=(y * yscale + yshift);
var res=x + ((x - cx) * k * ((x - cx) * (x - cx) + (y - cy) * (y - cy)) );
return res;
});

Clazz.newMeth(C$, 'getRadialY$F$F$F$F$F',  function (x, y, cx, cy, k) {
var xscale=1;
var xshift=1;
var yscale=1;
var yshift=1;
x=(x * xscale + xshift);
y=(y * yscale + yshift);
var res=y + ((y - cy) * k * ((x - cx) * (x - cx) + (y - cy) * (y - cy)) );
return res;
});

Clazz.newMeth(C$, 'getSourcePoint$java_awt_geom_Point2D$D$D$D$D',  function (p, halfW, halfH, a, zoom) {
if (a == 0 ) a=1.0E-5;
var correctionR=Math.sqrt(halfW * halfW + halfH * halfH) / a;
var newX=p.getX$() - halfW;
var newY=p.getY$() - halfH;
var d=Math.sqrt(newX * newX + newY * newY);
var r=d / correctionR;
var theta=1;
if (r > 0 ) theta=Math.atan(r) / r;
 else if (r < 0 ) theta=r / Math.atan(r);
System.out.println$S("pig theta " + new Double(theta).toString() + "     r " + new Double(r).toString() );
var x=halfW + theta * newX * zoom ;
var y=halfH + theta * newY * zoom ;
return Clazz.new_($I$(13,1).c$$D$D,[x, y]);
}, 1);

Clazz.newMeth(C$, 'getTransformedPoint$java_awt_geom_Point2D$D$D$D$Z',  function (p, w, h, a, inverse) {
var aY;
var aX;
aY=aX=0;
var thetaW=3.141592653589793;
var thetaH=thetaW * h / w;
var angX=thetaW * p.getX$() / w;
var caX=2 * a * (h / 2 - p.getY$())  / h;
var angY=thetaH * p.getY$() / h;
var caY=2 * a * (w / 2 - p.getX$())  / w;
if (inverse) {
var iAng=-1.5707963267948966;
aX=(caX * Math.sin(iAng));
aY=(caY * Math.sin(iAng));
}var pX=p.getX$() + aY + caY * Math.sin(angY) ;
var pY=p.getY$() + aX + caX * Math.sin(angX) ;
return Clazz.new_($I$(13,1).c$$D$D,[pX, pY]);
}, 1);

Clazz.newMeth(C$, 'getColor$D$D$I$I$IA',  function (x, y, w, h, pixelValues) {
var dx=x - (w/2|0);
var dy=y - (h/2|0);
x=(w/2|0) + dx * this.scaleFactor;
y=(h/2|0) + dy * this.scaleFactor;
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
return Clazz.new_($I$(14,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.minAlpha=-1.5;
C$.maxAlpha=0.5;
C$.minScale=0.5;
C$.maxScale=2.0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.BarrelPincushionFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['helpButton','javax.swing.JButton','contentPane','javax.swing.JPanel','alphaSlider','javax.swing.JSlider','+scaleSlider','alphaLabel','javax.swing.JLabel','+scaleLabel','alphaField','org.opensourcephysics.media.core.NumberField','+scaleField']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["RadialDistortionFilter.Inspector.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.helpButton=Clazz.new_($I$(1,1));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.BarrelPincushionFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BarrelPincushionFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
});
})()
), Clazz.new_(P$.BarrelPincushionFilter$Inspector$1.$init$,[this, null])));
var space=$I$(2).createEmptyBorder$I$I$I$I(2, 2, 2, 2);
space=$I$(2).createEmptyBorder$I$I$I$I(2, 4, 2, 4);
var aMax=((300 * $I$(3).maxAlpha)|0);
var aMin=((300 * $I$(3).minAlpha)|0);
var a=((300 * this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].alpha)|0);
this.alphaSlider=Clazz.new_($I$(4,1).c$$I$I$I,[aMin, aMax, a]);
this.alphaSlider.setBorder$javax_swing_border_Border(space);
this.alphaSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.BarrelPincushionFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "BarrelPincushionFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var i=this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].alphaSlider.getValue$();
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].setAlpha$D.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'], [i / 300.0]);
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].setAlpha$D.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'], [i / 100.0]);
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.BarrelPincushionFilter$Inspector$2.$init$,[this, null])));
space=$I$(2).createEmptyBorder$I$I$I$I(2, 4, 2, 2);
this.alphaLabel=Clazz.new_($I$(5,1));
this.alphaLabel.setBorder$javax_swing_border_Border(space);
this.scaleLabel=Clazz.new_($I$(5,1));
this.scaleLabel.setBorder$javax_swing_border_Border(space);
this.alphaField=Clazz.new_($I$(6,1).c$$I,[4]);
this.alphaField.setMaxValue$D($I$(3).maxAlpha);
this.alphaField.setMinValue$D($I$(3).minAlpha);
this.alphaField.setFixedPattern$S("0.000");
this.alphaField.addActionListener$java_awt_event_ActionListener(((P$.BarrelPincushionFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "BarrelPincushionFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].alpha=this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].alphaField.getValue$();
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'], []);
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].alphaField.selectAll$();
});
})()
), Clazz.new_(P$.BarrelPincushionFilter$Inspector$3.$init$,[this, null])));
this.alphaField.addFocusListener$java_awt_event_FocusListener(((P$.BarrelPincushionFilter$Inspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "BarrelPincushionFilter$Inspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].alphaField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].alpha=this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].alphaField.getValue$();
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.BarrelPincushionFilter$Inspector$4.$init$,[this, null])));
var sMax=((100 * $I$(3).maxScale)|0);
var sMin=((100 * $I$(3).minScale)|0);
var s=((100 * this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].scaleFactor)|0);
this.scaleSlider=Clazz.new_($I$(4,1).c$$I$I$I,[sMin, sMax, s]);
this.scaleSlider.setBorder$javax_swing_border_Border(space);
this.scaleSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.BarrelPincushionFilter$Inspector$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "BarrelPincushionFilter$Inspector$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var i=this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].scaleSlider.getValue$();
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].setScale$D.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'], [i / 100.0]);
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.BarrelPincushionFilter$Inspector$5.$init$,[this, null])));
this.scaleField=Clazz.new_($I$(6,1).c$$I,[4]);
this.scaleField.setMaxValue$D($I$(3).maxScale);
this.scaleField.setMinValue$D($I$(3).minScale);
this.scaleField.setFixedPattern$S("0.00");
this.scaleField.addActionListener$java_awt_event_ActionListener(((P$.BarrelPincushionFilter$Inspector$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "BarrelPincushionFilter$Inspector$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].scaleFactor=this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].scaleField.getValue$();
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'], []);
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].scaleField.selectAll$();
});
})()
), Clazz.new_(P$.BarrelPincushionFilter$Inspector$6.$init$,[this, null])));
this.scaleField.addFocusListener$java_awt_event_FocusListener(((P$.BarrelPincushionFilter$Inspector$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "BarrelPincushionFilter$Inspector$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].scaleField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].scaleFactor=this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].scaleField.getValue$();
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.BarrelPincushionFilter$Inspector$7.$init$,[this, null])));
this.contentPane=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(this.contentPane);
var buttonbar=Clazz.new_([Clazz.new_($I$(9,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.contentPane.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.helpButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].closeButton);
space=$I$(2).createEmptyBorder$I$I$I$I(2, 2, 2, 4);
var vbox=$I$(10).createVerticalBox$();
vbox.setBorder$javax_swing_border_Border(space);
this.contentPane.add$java_awt_Component$O(vbox, "Center");
var box=$I$(10).createHorizontalBox$();
box.setBorder$javax_swing_border_Border(space);
box.add$java_awt_Component(this.alphaLabel);
box.add$java_awt_Component(this.alphaField);
box.add$java_awt_Component(this.alphaSlider);
vbox.add$java_awt_Component(box);
box=$I$(10).createHorizontalBox$();
box.setBorder$javax_swing_border_Border(space);
box.add$java_awt_Component(this.scaleLabel);
box.add$java_awt_Component(this.scaleField);
box.add$java_awt_Component(this.scaleSlider);
vbox.add$java_awt_Component(box);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setTitle$S($I$(11).getString$S("RadialDistortionFilter.Inspector.Title"));
this.setTitle$S("Barrel/Pincushion Correction");
this.alphaLabel.setText$S($I$(11).getString$S("RadialDistortionFilter.Label.Diameter") + ":");
this.alphaLabel.setText$S("alpha:");
this.scaleLabel.setText$S("scale:");
this.helpButton.setText$S($I$(11).getString$S("PerspectiveFilter.Button.Help"));
var enabled=this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].isEnabled$.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'], []);
this.alphaLabel.setEnabled$Z(enabled);
this.alphaField.setEnabled$Z(enabled);
this.alphaSlider.setEnabled$Z(enabled);
this.scaleLabel.setEnabled$Z(enabled);
this.scaleField.setEnabled$Z(enabled);
this.scaleSlider.setEnabled$Z(enabled);
this.repaint$();
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.updateDisplay$();
});

Clazz.newMeth(C$, 'updateDisplay$',  function () {
if (this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].updatingDisplay) return;
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].updatingDisplay=true;
this.alphaField.setValue$D(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].alpha);
this.alphaSlider.setValue$I(((this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].alpha * 300)|0));
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].updatingDisplay=false;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
this.refreshGUI$();
if (this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].vidPanel != null ) {
if (vis) {
this.firePropertyChange$S$O$O("filter_visible", null, null);
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].addPropertyChangeListener$S$java_beans_PropertyChangeListener.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'], ["filter_visible", this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].vidPanel]);
} else {
this.firePropertyChange$S$O$O("filter_visible", null, null);
this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].removePropertyChangeListener$S$java_beans_PropertyChangeListener.apply(this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'], ["filter_visible", this.b$['org.opensourcephysics.media.core.BarrelPincushionFilter'].vidPanel]);
}}this.firePropertyChange$S$O$O("image", null, null);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BarrelPincushionFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
filter.addLocation$org_opensourcephysics_controls_XMLControl(control);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
