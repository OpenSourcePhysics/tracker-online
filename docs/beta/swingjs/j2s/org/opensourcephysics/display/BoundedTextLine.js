(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Font','java.awt.image.BufferedImage','org.opensourcephysics.display.TextLine','java.awt.Color','java.awt.AlphaComposite']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BoundedTextLine", null, 'org.opensourcephysics.display.BoundedImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultFont=Clazz.new_($I$(1,1).c$$S$I$I,["Dialog", 1, 12]);
this.desent=0;
this.gutter=6;
},1);

C$.$fields$=[['I',['desent','gutter'],'O',['defaultFont','java.awt.Font','textLine','org.opensourcephysics.display.TextLine']]]

Clazz.newMeth(C$, 'c$$S$D$D',  function (text, x, y) {
;C$.superclazz.c$$java_awt_Image$D$D.apply(this,[Clazz.new_($I$(2,1).c$$I$I$I,[1, 1, 2]), x, y]);C$.$init$.apply(this);
this.textLine=Clazz.new_($I$(3,1).c$$S,[text]);
this.textLine.setFont$java_awt_Font(this.defaultFont);
this.color=$I$(4).BLACK;
}, 1);

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
this.textLine.setFont$java_awt_Font(font);
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.textLine.getFont$();
});

Clazz.newMeth(C$, 'checkImageSize$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var oldFont=g.getFont$();
var rect=oldFont.getStringBounds$S$java_awt_font_FontRenderContext(this.textLine.text, (g).getFontRenderContext$());
this.gutter=((rect.getHeight$()|0)/2|0);
if ((this.image.getWidth$java_awt_image_ImageObserver(null) != (rect.getWidth$()|0) + 1) || (this.image.getHeight$java_awt_image_ImageObserver(null) != (rect.getHeight$()|0) + 1 + this.gutter ) ) {
this.image=Clazz.new_([(rect.getWidth$()|0) + 1, (rect.getHeight$()|0) + 1 + this.gutter , 2],$I$(2,1).c$$I$I$I);
this.width=this.image.getWidth$java_awt_image_ImageObserver(null);
this.height=this.image.getHeight$java_awt_image_ImageObserver(null);
this.desent=-(rect.getY$()|0);
}g.setFont$java_awt_Font(oldFont);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.checkImageSize$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
var ig=this.image.getGraphics$();
this.textLine.setColor$java_awt_Color(this.color);
this.textLine.drawText$java_awt_Graphics$I$I(ig, 0, this.desent + (this.gutter/2|0));
ig.dispose$();
var composite=(g).getComposite$();
(g).setComposite$java_awt_Composite($I$(5).getInstance$I(10));
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
(g).setComposite$java_awt_Composite(composite);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
