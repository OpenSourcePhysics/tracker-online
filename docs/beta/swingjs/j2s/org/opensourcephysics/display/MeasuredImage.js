(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','java.awt.geom.AffineTransform']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MeasuredImage", null, null, 'org.opensourcephysics.display.Measurable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=true;
this.minmax=Clazz.array(Double.TYPE, [2]);
},1);

C$.$fields$=[['Z',['visible'],'D',['xmin','xmax','ymin','ymax'],'O',['image','java.awt.image.BufferedImage','minmax','double[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_image_BufferedImage$D$D$D$D.apply(this, [null, 0, 0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage',  function (image) {
C$.c$$java_awt_image_BufferedImage$D$D$D$D.apply(this, [image, 0, image.getWidth$(), 0, image.getHeight$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage$D$D$D$D',  function (_image, _xmin, _xmax, _ymin, _ymax) {
;C$.$init$.apply(this);
this.image=_image;
this.xmin=_xmin;
this.xmax=_xmax;
this.ymin=_ymin;
this.ymax=_ymax;
}, 1);

Clazz.newMeth(C$, 'setImage$java_awt_image_BufferedImage',  function (_image) {
this.image=_image;
});

Clazz.newMeth(C$, 'getImage$',  function () {
return this.image;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.visible=isVisible;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}if (this.image == null ) {
panel.setMessage$S($I$(1).getString$S("MeasuredImage.NoImage"));
return;
}var g2=g.create$();
var hints=null;
if ($I$(2).setRenderingHints) {
hints=g2.getRenderingHints$();
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(3).KEY_DITHERING, $I$(3).VALUE_DITHER_DISABLE);
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(3).KEY_ANTIALIASING, $I$(3).VALUE_ANTIALIAS_OFF);
}var sx=(this.xmax - this.xmin) * panel.xPixPerUnit / this.image.getWidth$();
var sy=(this.ymax - this.ymin) * panel.yPixPerUnit / this.image.getHeight$();
g2.transform$java_awt_geom_AffineTransform($I$(4,"getTranslateInstance$D$D",[panel.leftGutter + panel.xPixPerUnit * (this.xmin - panel.xmin), panel.topGutter + panel.yPixPerUnit * (panel.ymax - this.ymax)]));
g2.transform$java_awt_geom_AffineTransform($I$(4).getScaleInstance$D$D(sx, sy));
g2.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, panel);
if (hints != null ) g2.setRenderingHints$java_util_Map(hints);
g2.dispose$();
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return (this.image != null );
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

Clazz.newMeth(C$, 'setXMin$D',  function (_xmin) {
this.xmin=_xmin;
});

Clazz.newMeth(C$, 'setXMax$D',  function (_xmax) {
this.xmax=_xmax;
});

Clazz.newMeth(C$, 'setYMin$D',  function (_ymin) {
this.ymin=_ymin;
});

Clazz.newMeth(C$, 'setYMax$D',  function (_ymax) {
this.ymax=_ymax;
});

Clazz.newMeth(C$, 'setMinMax$D$D$D$D',  function (_xmin, _xmax, _ymin, _ymax) {
this.xmin=_xmin;
this.xmax=_xmax;
this.ymin=_ymin;
this.ymax=_ymax;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
