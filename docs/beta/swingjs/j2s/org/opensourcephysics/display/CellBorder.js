(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Insets']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CellBorder", null, 'javax.swing.border.AbstractBorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['thickness'],'O',['lineColor','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (color) {
C$.c$$java_awt_Color$I.apply(this, [color, 1]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$I',  function (color, thickness) {
Clazz.super_(C$, this);
this.lineColor=color;
this.thickness=thickness;
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
var oldColor=g.getColor$();
g.setColor$java_awt_Color(this.lineColor);
for (var i=0; i < this.thickness; i++) {
g.drawLine$I$I$I$I(x, y + i, x + width - 1, y + i);
g.drawLine$I$I$I$I(x + i, y, x + i, y + height - 1);
}
g.setColor$java_awt_Color(oldColor);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return Clazz.new_($I$(1,1).c$$I$I$I$I,[this.thickness + 1, this.thickness + 1, 1, 1]);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
insets.left=insets.top=this.thickness + 1;
insets.right=insets.bottom=1;
return insets;
});

Clazz.newMeth(C$, 'getLineColor$',  function () {
return this.lineColor;
});

Clazz.newMeth(C$, 'getThickness$',  function () {
return this.thickness;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
