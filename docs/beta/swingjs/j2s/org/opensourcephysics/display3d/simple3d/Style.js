(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.Style','java.awt.Color','java.awt.BasicStroke',['org.opensourcephysics.display3d.simple3d.Style','.StyleLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Style", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.display3d.core.Style');
C$.$classes$=[['StyleLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.drawsFill=true;
this.drawsLines=true;
this.lineColor=$I$(2).black;
this.lineWidth=1.0;
this.fillColor=$I$(2).blue;
this.resolution=null;
this.depthFactor=1.0;
this.position=0;
this.drawFillsSet=false;
this.drawLinesSet=false;
this.textureFile1=null;
this.textureFile2=null;
this.transpTexture=NaN;
this.combineTexture=false;
this.element=null;
this.lineStroke=Clazz.new_($I$(3,1).c$$F,[this.lineWidth]);
},1);

C$.$fields$=[['Z',['drawsFill','drawsLines','drawFillsSet','drawLinesSet','combineTexture'],'D',['depthFactor','transpTexture'],'F',['lineWidth'],'I',['position'],'S',['textureFile1','textureFile2'],'O',['lineColor','java.awt.Color','+fillColor','resolution','org.opensourcephysics.display3d.core.Resolution','element','org.opensourcephysics.display3d.simple3d.Element','lineStroke','java.awt.Stroke']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display3d_simple3d_Element',  function (_element) {
;C$.$init$.apply(this);
this.element=_element;
}, 1);

Clazz.newMeth(C$, 'setElement$org_opensourcephysics_display3d_simple3d_Element',  function (_element) {
this.element=_element;
});

Clazz.newMeth(C$, 'setLineColor$java_awt_Color',  function (_color) {
if (_color == null ) {
return;
}this.lineColor=_color;
if (this.element != null ) {
this.element.styleChanged$I(0);
}});

Clazz.newMeth(C$, 'getLineColor$',  function () {
return this.lineColor;
});

Clazz.newMeth(C$, 'setLineWidth$F',  function (_width) {
if (this.lineWidth == _width ) {
return;
}this.lineStroke=Clazz.new_([this.lineWidth=_width],$I$(3,1).c$$F);
if (this.element != null ) {
this.element.styleChanged$I(1);
}});

Clazz.newMeth(C$, 'getLineWidth$',  function () {
return this.lineWidth;
});

Clazz.newMeth(C$, 'getLineStroke$',  function () {
return this.lineStroke;
});

Clazz.newMeth(C$, 'setFillColor$java_awt_Color',  function (_color) {
if (_color == null ) {
return;
}this.fillColor=_color;
if (this.element != null ) {
this.element.styleChanged$I(2);
}});

Clazz.newMeth(C$, 'getFillColor$',  function () {
return this.fillColor;
});

Clazz.newMeth(C$, 'setResolution$org_opensourcephysics_display3d_core_Resolution',  function (_res) {
this.resolution=_res;
if (this.element != null ) {
this.element.styleChanged$I(3);
}});

Clazz.newMeth(C$, 'getResolution$',  function () {
return this.resolution;
});

Clazz.newMeth(C$, 'isDrawingFill$',  function () {
return this.drawsFill;
});

Clazz.newMeth(C$, 'setDrawingFill$Z',  function (_drawsFill) {
this.drawsFill=_drawsFill;
this.drawFillsSet=true;
if (this.element != null ) {
this.element.styleChanged$I(4);
}});

Clazz.newMeth(C$, 'isDrawingLines$',  function () {
return this.drawsLines;
});

Clazz.newMeth(C$, 'setDrawingLines$Z',  function (_drawsLines) {
this.drawsLines=_drawsLines;
this.drawLinesSet=true;
if (this.element != null ) {
this.element.styleChanged$I(5);
}});

Clazz.newMeth(C$, 'setDepthFactor$D',  function (factor) {
this.depthFactor=factor;
});

Clazz.newMeth(C$, 'getDepthFactor$',  function () {
return this.depthFactor;
});

Clazz.newMeth(C$, 'setTexture$S$S$D$Z',  function (file1, file2, transparency, combine) {
this.textureFile1=file1;
this.textureFile2=file2;
this.transpTexture=transparency;
this.combineTexture=combine;
});

Clazz.newMeth(C$, 'getTextures$',  function () {
return Clazz.array(String, -1, [this.textureFile1, this.textureFile2]);
});

Clazz.newMeth(C$, 'getTransparency$',  function () {
return this.transpTexture;
});

Clazz.newMeth(C$, 'getCombine$',  function () {
return this.combineTexture;
});

Clazz.newMeth(C$, 'setRelativePosition$I',  function (_position) {
this.position=_position;
this.element.styleChanged$I(6);
});

Clazz.newMeth(C$, 'getRelativePosition$',  function () {
return this.position;
});

Clazz.newMeth(C$, 'copyTo$org_opensourcephysics_display3d_core_Style',  function (target) {
target.setDrawingFill$Z(this.drawsFill);
target.setDrawingLines$Z(this.drawsLines);
target.setLineColor$java_awt_Color(this.lineColor);
target.setLineWidth$F(this.lineWidth);
target.setFillColor$java_awt_Color(this.fillColor);
target.setResolution$org_opensourcephysics_display3d_core_Resolution(this.resolution);
target.setDepthFactor$D(this.depthFactor);
target.setRelativePosition$I(this.position);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Style, "StyleLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.Style','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$org_opensourcephysics_display3d_simple3d_Element,[null]);
});

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var style=obj;
control.setValue$S$O("line color", style.getLineColor$());
control.setValue$S$D("line width", style.getLineWidth$());
control.setValue$S$O("fill color", style.getFillColor$());
control.setValue$S$O("resolution", style.getResolution$());
if (style.drawFillsSet) {
control.setValue$S$Z("drawing fill", style.isDrawingFill$());
}if (style.drawLinesSet) {
control.setValue$S$Z("drawing lines", style.isDrawingLines$());
}});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var style=obj;
style.setLineColor$java_awt_Color(control.getObject$S("line color"));
style.setLineWidth$F(control.getDouble$S("line width"));
style.setFillColor$java_awt_Color(control.getObject$S("fill color"));
style.setResolution$org_opensourcephysics_display3d_core_Resolution(control.getObject$S("resolution"));
if (control.getPropertyType$S("drawing fill") != -1) {
System.out.println$S("Reading drawFills");
style.setDrawingFill$Z(control.getBoolean$S("drawing fill"));
} else {
System.out.println$S("Not reading drawFills");
}if (control.getPropertyType$S("drawing lines") != -1) {
System.out.println$S("Reading drawLines");
style.setDrawingLines$Z(control.getBoolean$S("drawing lines"));
} else {
System.out.println$S("Not reading drawLines");
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
