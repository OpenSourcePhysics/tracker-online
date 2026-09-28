(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'java.awt.geom.AffineTransform',['java.awt.geom.Rectangle2D','.Double'],'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BoundedImage", null, 'org.opensourcephysics.display.BoundedShape', 'java.awt.image.ImageObserver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.trBI=Clazz.new_($I$(1,1));
this.rectBI=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['image','java.awt.Image','trBI','java.awt.geom.AffineTransform','rectBI','java.awt.geom.Rectangle2D.Double']]]

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

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.getPixelPt$org_opensourcephysics_display_DrawingPanel(panel);
var g2=g;
g2.translate$D$D(this.pixelPt.x, this.pixelPt.y);
this.trBI.setToTranslation$D$D(-this.width / 2, -this.height / 2);
this.trBI.rotate$D$D$D(-this.theta, this.width / 2, this.height / 2);
this.trBI.scale$D$D(this.width / this.image.getWidth$java_awt_image_ImageObserver(null), this.height / this.image.getHeight$java_awt_image_ImageObserver(null));
g2.drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(this.image, this.trBI, null);
g2.translate$D$D(-this.pixelPt.x, -this.pixelPt.y);
p$1.getFixedBounds.apply(this, []);
if (this.selected) p$1.drawFixedBounds$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'getFixedBounds',  function () {
this.rectBI.setFrame$D$D$D$D(this.pixelPt.x - this.width / 2, this.pixelPt.y - this.height / 2, this.width, this.height);
this.pixelBounds=this.computeFixedHotSpots$java_awt_Shape(this.rectBI);
if (this.theta != 0 ) {
this.pixelBounds=this.getRotateInstance$D$D$D(-this.theta, this.pixelPt.x, this.pixelPt.y).createTransformedShape$java_awt_Shape(this.pixelBounds);
}}, p$1);

Clazz.newMeth(C$, 'drawFixedBounds$java_awt_Graphics',  function (g) {
var g2=(g);
g2.setPaint$java_awt_Paint(this.boundsColor);
g2.draw$java_awt_Shape(this.pixelBounds);
if (this.xyDrag) {
g2.fillRect$I$I$I$I((this.hotSpots[0].getX$()|0) - this.delta, (this.hotSpots[0].getY$()|0) - this.delta, this.d2, this.d2);
g2.setColor$java_awt_Color(this.edgeColor);
g2.fillOval$I$I$I$I((this.hotSpots[0].getX$()|0) - 1, (this.hotSpots[0].getY$()|0) - 1, 3, 3);
g2.setPaint$java_awt_Paint(this.boundsColor);
}if (this.rotateDrag) {
g2.fillOval$I$I$I$I((this.hotSpots[5].getX$()|0) - this.delta, (this.hotSpots[5].getY$()|0) - this.delta, this.d2, this.d2);
}if (this.heightDrag) {
g2.fillRect$I$I$I$I((this.hotSpots[3].getX$()|0) - this.delta, (this.hotSpots[3].getY$()|0) - this.delta, this.d2, this.d2);
g2.fillRect$I$I$I$I((this.hotSpots[1].getX$()|0) - this.delta, (this.hotSpots[1].getY$()|0) - this.delta, this.d2, this.d2);
}if (this.widthDrag) {
g2.fillRect$I$I$I$I((this.hotSpots[2].getX$()|0) - this.delta, (this.hotSpots[2].getY$()|0) - this.delta, this.d2, this.d2);
g2.fillRect$I$I$I$I((this.hotSpots[4].getX$()|0) - this.delta, (this.hotSpots[4].getY$()|0) - this.delta, this.d2, this.d2);
}g.setColor$java_awt_Color($I$(3).BLACK);
}, p$1);

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
