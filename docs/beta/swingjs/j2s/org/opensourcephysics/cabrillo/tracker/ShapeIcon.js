(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Color','java.awt.Rectangle','java.awt.geom.AffineTransform','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShapeIcon", null, null, 'javax.swing.Icon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=$I$(1).black;
this.decoColor=$I$(1).black;
},1);

C$.$fields$=[['D',['offsetX','offsetY'],'I',['w','h'],'O',['shape','org.opensourcephysics.cabrillo.tracker.MultiShape','+decoration','color','java.awt.Color','+decoColor','stroke','java.awt.BasicStroke']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_MultiShape$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I',  function (shape, decoration, width, height) {
;C$.$init$.apply(this);
this.w=width;
this.h=height;
this.shape=shape;
this.decoration=decoration;
var rect=shape == null  ? Clazz.new_($I$(2,1)) : shape.getBounds$();
if (decoration != null ) rect=rect.union$java_awt_Rectangle(decoration.getBounds$());
this.offsetX=(this.w/2|0) - (rect.width/2|0) - rect.x;
this.offsetY=(this.h/2|0) - (rect.height/2|0) - rect.y;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I',  function (shape, width, height) {
C$.c$$org_opensourcephysics_cabrillo_tracker_MultiShape$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I.apply(this, [shape, null, width, height]);
}, 1);

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
this.color=color;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color$java_awt_Color',  function (color, decorationColor) {
this.color=color;
this.decoColor=decorationColor;
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
this.stroke=stroke;
});

Clazz.newMeth(C$, 'getIconWidth$',  function () {
return this.w;
});

Clazz.newMeth(C$, 'getIconHeight$',  function () {
return this.h;
});

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I',  function (c, _g, x, y) {
if (this.shape == null  && this.decoration == null  ) return;
var g=_g.create$();
var at=$I$(3).getTranslateInstance$D$D(x + this.offsetX, y + this.offsetY);
g.setPaint$java_awt_Paint(this.color);
if ($I$(4).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(5).KEY_ANTIALIASING, $I$(5).VALUE_ANTIALIAS_ON);
g.clipRect$I$I$I$I(x, y, this.w, this.h);
if (this.shape != null ) {
if (this.stroke != null ) {
g.setStroke$java_awt_Stroke(this.stroke);
}this.shape.transform$java_awt_geom_AffineTransform(at).draw$java_awt_Graphics2D(g);
}if (this.decoration != null ) {
g.setPaint$java_awt_Paint(this.decoColor);
this.decoration.transform$java_awt_geom_AffineTransform(at).draw$java_awt_Graphics2D(g);
}g.dispose$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
