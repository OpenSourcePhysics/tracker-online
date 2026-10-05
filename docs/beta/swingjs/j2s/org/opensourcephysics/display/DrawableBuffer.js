(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'java.util.ArrayList','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawableBuffer", null, null, ['org.opensourcephysics.display.Drawable', 'org.opensourcephysics.display.Measurable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.invalid=true;
this.drawableList=Clazz.new_($I$(1,1));
this.background=$I$(2).white;
this.measured=false;
this.visible=true;
},1);

C$.$fields$=[['Z',['invalid','measured','visible'],'D',['xmin','xmax','ymin','ymax'],'O',['image','java.awt.Image','drawableList','java.util.ArrayList','background','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_Drawable',  function (drawable) {
;C$.$init$.apply(this);
this.addDrawable$org_opensourcephysics_display_Drawable(drawable);
}, 1);

Clazz.newMeth(C$, 'addDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
if (!this.drawableList.contains$O(drawable)) {
this.drawableList.add$O(drawable);
}this.invalidateImage$();
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (color) {
this.background=color;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
this.visible=vis;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.drawableList.clear$();
this.invalidateImage$();
});

Clazz.newMeth(C$, 'invalidateImage$',  function () {
this.measured=false;
var tempList=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.drawableList]);
var it=tempList.iterator$();
this.xmin=1.7976931348623157E308;
this.xmax=-1.7976931348623157E308;
this.ymin=1.7976931348623157E308;
this.ymax=-1.7976931348623157E308;
while (it.hasNext$()){
var drawable=it.next$();
if ((Clazz.instanceOf(drawable, "org.opensourcephysics.display.Measurable")) && (drawable).isMeasured$() ) {
this.xmin=Math.min(this.xmin, (drawable).getXMin$());
this.xmax=Math.max(this.xmax, (drawable).getXMax$());
this.ymin=Math.min(this.ymin, (drawable).getYMin$());
this.ymax=Math.max(this.ymax, (drawable).getYMax$());
this.measured=true;
}}
this.invalid=true;
});

Clazz.newMeth(C$, 'updateImage$org_opensourcephysics_display_DrawingPanel',  function (drawingPanel) {
this.invalid=false;
var newImage=this.image;
var iw=drawingPanel.getWidth$();
var ih=drawingPanel.getHeight$();
if ((this.image == null ) || (this.image.getWidth$java_awt_image_ImageObserver(drawingPanel) != iw) || (this.image.getHeight$java_awt_image_ImageObserver(drawingPanel) != ih)  ) {
newImage=drawingPanel.createImage$I$I(iw, ih);
}if (newImage == null ) {
return;
}var g=newImage.getGraphics$();
if (g != null ) {
if (this.background == null ) {
g.clearRect$I$I$I$I(0, 0, iw, ih);
} else {
g.setColor$java_awt_Color(this.background);
g.fillRect$I$I$I$I(0, 0, iw, ih);
}p$1.paintMyDrawableList$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [drawingPanel, g]);
g.dispose$();
}this.image=newImage;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
if (!this.visible) {
return;
}if (this.invalid || (this.image == null ) || (this.image.getWidth$java_awt_image_ImageObserver(drawingPanel) != drawingPanel.getWidth$()) || (this.image.getHeight$java_awt_image_ImageObserver(drawingPanel) != drawingPanel.getHeight$())  ) {
this.updateImage$org_opensourcephysics_display_DrawingPanel(drawingPanel);
}if (this.image != null ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, drawingPanel);
}});

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

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.measured;
});

Clazz.newMeth(C$, 'paintMyDrawableList$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
var tempList=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.drawableList]);
var it=tempList.iterator$();
while (it.hasNext$()){
var drawable=it.next$();
drawable.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(drawingPanel, g);
}
}, p$1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
