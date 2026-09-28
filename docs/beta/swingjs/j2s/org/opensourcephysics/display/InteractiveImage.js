(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InteractiveImage", null, 'org.opensourcephysics.display.InteractiveShape', 'java.awt.image.ImageObserver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['image','java.awt.Image']]]

Clazz.newMeth(C$, 'c$$java_awt_Image$D$D',  function (image, x, y) {
;C$.superclazz.c$$java_awt_Shape$D$D.apply(this,[null, x, y]);C$.$init$.apply(this);
this.image=image;
this.width=image.getWidth$java_awt_image_ImageObserver(this);
this.width=Math.max(0, this.width);
this.height=image.getHeight$java_awt_image_ImageObserver(this);
this.height=Math.max(0, this.height);
this.shapeClass=image.getClass$().getName$();
this.setPixelSized$Z(true);
}, 1);

Clazz.newMeth(C$, 'isInside$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if ((this.image == null ) || !this.enabled ) {
return false;
}var r=Math.min((this.image.getWidth$java_awt_image_ImageObserver(null)/2|0), (this.image.getHeight$java_awt_image_ImageObserver(null)/2|0)) + 1;
if ((Math.abs(panel.xToPix$D(this.x) - xpix) < r) && (Math.abs(panel.yToPix$D(this.y) - ypix) < r) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.getPixelPt$org_opensourcephysics_display_DrawingPanel(panel);
var g2=g;
g2.translate$D$D(this.pixelPt.x, this.pixelPt.y);
this.trIS.setToTranslation$D$D(-this.width / 2, -this.height / 2);
this.trIS.rotate$D$D$D(-this.theta, this.width / 2, this.height / 2);
this.trIS.scale$D$D(this.width / this.image.getWidth$java_awt_image_ImageObserver(null), this.height / this.image.getHeight$java_awt_image_ImageObserver(null));
g2.drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(this.image, this.trIS, null);
g2.translate$D$D(-this.pixelPt.x, -this.pixelPt.y);
});

Clazz.newMeth(C$, 'imageUpdate$java_awt_Image$I$I$I$I$I',  function (img, infoflags, x, y, width, height) {
if ((infoflags & 1) == 1) {
this.width=width;
}if ((infoflags & 2) == 1) {
this.height=height;
}if ((infoflags & 32) == 1) {
return false;
}return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
