(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'javax.swing.ImageIcon','java.awt.image.BufferedImage','java.awt.AlphaComposite','org.opensourcephysics.tools.FontSizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ResizableIcon", null, null, 'javax.swing.Icon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixedSizeFactor=0;
},1);

C$.$fields$=[['Z',['isDrawn'],'I',['baseWidth','baseHeight','sizeFactor','w','h','fixedSizeFactor'],'O',['baseImage','java.awt.image.BufferedImage','icon','javax.swing.Icon']]]

Clazz.newMeth(C$, 'c$$java_net_URL',  function (location) {
C$.c$$javax_swing_Icon.apply(this, [Clazz.new_($I$(1,1).c$$java_net_URL,[location])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (icon) {
;C$.$init$.apply(this);
while (Clazz.instanceOf(icon, "org.opensourcephysics.display.ResizableIcon")){
icon=(icon).icon;
}
this.icon=icon;
if (icon == null ) {
this.baseWidth=0;
this.baseHeight=0;
} else {
this.baseWidth=icon.getIconWidth$();
this.baseHeight=icon.getIconHeight$();
}this.isDrawn=!(Clazz.instanceOf(icon, "javax.swing.ImageIcon"));
}, 1);

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I',  function (c, g, x, y) {
if (this.icon == null  || this.baseHeight < 0  || this.baseWidth < 0 ) {
return;
}if (this.baseImage == null ) {
this.baseImage=Clazz.new_($I$(2,1).c$$I$I$I,[this.baseWidth, this.baseHeight, 2]);
}var g2=this.baseImage.createGraphics$();
if (this.isDrawn) {
g2.setComposite$java_awt_Composite($I$(3).Clear);
g2.fillRect$I$I$I$I(0, 0, this.baseWidth, this.baseHeight);
g2.setComposite$java_awt_Composite($I$(3).SrcOver);
}this.icon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, g2, 0, 0);
g2.dispose$();
g.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(this.baseImage, x, y, this.getIconWidth$(), this.getIconHeight$(), c);
});

Clazz.newMeth(C$, 'getIconWidth$',  function () {
if (this.fixedSizeFactor <= 0) p$1.setSizeFactor$I.apply(this, [$I$(4).getIntegerFactor$()]);
return this.w;
});

Clazz.newMeth(C$, 'getIconHeight$',  function () {
return this.h;
});

Clazz.newMeth(C$, 'getBaseIcon$',  function () {
return this.icon;
});

Clazz.newMeth(C$, 'setSizeFactor$I',  function (factor) {
if (factor != this.sizeFactor) {
this.sizeFactor=factor;
this.w=this.baseWidth * factor;
this.h=this.baseHeight * factor;
}}, p$1);

Clazz.newMeth(C$, 'setFixedSizeFactor$I',  function (factor) {
if (factor != this.fixedSizeFactor) {
this.fixedSizeFactor=factor;
this.w=this.baseWidth * factor;
this.h=this.baseHeight * factor;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
