(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'java.awt.geom.GeneralPath',['org.opensourcephysics.media.core.TCoordAxes','.Origin'],'java.awt.BasicStroke','java.awt.Color','org.opensourcephysics.media.core.TShape']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TCoordAxes", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.TShape');
C$.$classes$=[['Origin',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.axes=Clazz.new_($I$(1,1));
this.origin=Clazz.new_($I$(2,1),[this, null]);
this.originEnabled=true;
this.xaxisEnabled=true;
this.originShape=Clazz.new_($I$(1,1));
this.xaxis=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['originEnabled','xaxisEnabled'],'O',['vidPanel','org.opensourcephysics.media.core.VideoPanel','axes','java.awt.geom.GeneralPath','origin','org.opensourcephysics.media.core.TCoordAxes.Origin','originShape','java.awt.geom.GeneralPath','+xaxis']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoPanel',  function (panel) {
Clazz.super_(C$, this);
this.vidPanel=panel;
this.setStroke$java_awt_BasicStroke(Clazz.new_($I$(3,1).c$$F,[2]));
this.setColor$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[153, 0, 0]));
}, 1);

Clazz.newMeth(C$, 'getOrigin$',  function () {
return this.origin;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (panel === this.vidPanel ) {
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
}});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
var cos=this.origin.cos$java_awt_geom_Point2D_Double(this);
var sin=this.origin.sin$java_awt_geom_Point2D_Double(this);
var n=this.vidPanel.getFrameNumber$();
this.vidPanel.getCoords$().setCosineSine$I$D$D(n, cos, sin);
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
if (stroke != null ) {
this.stroke=stroke;
}});

Clazz.newMeth(C$, 'setOriginEnabled$Z',  function (enabled) {
this.originEnabled=enabled;
});

Clazz.newMeth(C$, 'isOriginEnabled$',  function () {
return this.originEnabled;
});

Clazz.newMeth(C$, 'setXAxisEnabled$Z',  function (enabled) {
this.xaxisEnabled=enabled;
});

Clazz.newMeth(C$, 'isXAxisEnabled$',  function () {
return this.xaxisEnabled;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (panel !== this.vidPanel ) {
return null;
}if (!this.isEnabled$() || !this.isVisible$() ) {
return null;
}this.setHitRectCenter$I$I(xpix, ypix);
if (this.originEnabled && this.originShape.intersects$java_awt_geom_Rectangle2D($I$(5).hitRect) ) {
return this.origin;
}if (this.xaxisEnabled && this.xaxis.intersects$java_awt_geom_Rectangle2D($I$(5).hitRect) ) {
return this;
}return null;
});

Clazz.newMeth(C$, 'toString',  function () {
return "Coordinate axes";
});

Clazz.newMeth(C$, 'getShape$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
var coords=vidPanel.getCoords$();
var n=this.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(vidPanel);
var w=vidPanel.getWidth$();
var h=vidPanel.getHeight$();
var d=Math.max(2 * w, 2 * h);
var x=coords.getOriginX$I(n);
var y=coords.getOriginY$I(n);
this.origin.setLocation$D$D(x, y);
var sin=coords.getSine$I(n);
var cos=coords.getCosine$I(n);
var wx;
var wy;
var dcos;
var dsin;
var bcos;
var bsin;
if (vidPanel.isDrawingInImageSpace$()) {
wx=vidPanel.xToPix$D(x);
wy=vidPanel.yToPix$D(y);
dcos=(d * cos);
dsin=(d * sin);
bcos=(3 * cos);
bsin=(3 * sin);
} else {
wx=vidPanel.xToPix$D(coords.imageToWorldX$I$D$D(n, x, y));
wy=vidPanel.yToPix$D(coords.imageToWorldY$I$D$D(n, x, y));
dcos=d;
dsin=0;
bcos=3;
bsin=0;
}this.axes.reset$();
this.axes.moveTo$F$F(wx - dcos, wy + dsin);
this.axes.lineTo$F$F(wx + dcos, wy - dsin);
this.axes.moveTo$F$F(wx - dsin, wy - dcos);
this.axes.lineTo$F$F(wx + dsin, wy + dcos);
this.axes.moveTo$F$F(wx + 5 * bcos - bsin, wy - 5 * bsin - bcos);
this.axes.lineTo$F$F(wx + 5 * bcos + bsin, wy - 5 * bsin + bcos);
this.originShape.reset$();
this.originShape.moveTo$F$F(wx - 3 * bcos, wy + 3 * bsin);
this.originShape.lineTo$F$F(wx + 3 * bcos, wy - 3 * bsin);
this.originShape.moveTo$F$F(wx - 3 * bsin, wy - 3 * bcos);
this.originShape.lineTo$F$F(wx + 3 * bsin, wy + 3 * bcos);
this.xaxis.reset$();
this.xaxis.moveTo$F$F(wx + 5 * bcos, wy - 5 * bsin);
this.xaxis.lineTo$F$F(wx + dcos, wy - dsin);
return this.stroke.createStrokedShape$java_awt_Shape(this.axes);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TCoordAxes, "Origin", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
var n=this.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(this.b$['org.opensourcephysics.media.core.TCoordAxes'].vidPanel);
this.b$['org.opensourcephysics.media.core.TCoordAxes'].vidPanel.getCoords$().setOriginXY$I$D$D(n, x, y);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
