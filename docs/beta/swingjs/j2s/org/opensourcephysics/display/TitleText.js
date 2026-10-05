(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Font']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TitleText", null, 'org.opensourcephysics.display.DrawableTextLine');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.location=3;
this.xoff=0;
this.yoff=0;
this.dirty=true;
},1);

C$.$fields$=[['Z',['dirty'],'I',['location','xoff','yoff']]]

Clazz.newMeth(C$, 'c$$S',  function (text) {
;C$.superclazz.c$$S$D$D.apply(this,[text, 0, 0]);C$.$init$.apply(this);
this.setFont$java_awt_Font(Clazz.new_($I$(1,1).c$$S$I$I,["TimesRoman", 1, 14]));
this.setJustification$I(0);
}, 1);

Clazz.newMeth(C$, 'setOffsets$I$I',  function (xoff, yoff) {
this.xoff=xoff;
this.yoff=yoff;
});

Clazz.newMeth(C$, 'setLocation$I',  function (location) {
this.location=location;
switch (location) {
case 2:
case 4:
this.theta=1.5707963267948966;
break;
default:
this.theta=0;
}
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
this.dirty=true;
});

Clazz.newMeth(C$, 'setText$S',  function (text) {
C$.superclazz.prototype.setText$S.apply(this, [text]);
this.dirty=true;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.dirty) {
this.parseText$java_awt_Graphics(g);
this.dirty=false;
}var xpix=0;
var ypix=0;
switch (this.location) {
case 0:
xpix=panel.getLeftGutter$() + ((panel.lastWidth - panel.getLeftGutter$() - panel.getRightGutter$() )/2|0);
ypix=panel.getTopGutter$() + ((panel.lastHeight - panel.getTopGutter$() - panel.getBottomGutter$() )/2|0);
break;
case 1:
xpix=panel.getLeftGutter$() + ((panel.lastWidth - panel.leftGutter - panel.rightGutter )/2|0);
ypix=(panel.getBottomGutter$() > this.height + this.yoff) ? panel.getHeight$() - panel.bottomGutter + this.yoff + this.height : panel.getHeight$() - panel.bottomGutter - this.yoff ;
break;
case 2:
xpix=(panel.leftGutter > this.height + this.xoff) ? panel.leftGutter - this.xoff : panel.leftGutter + this.xoff + this.height ;
ypix=panel.getTopGutter$() + ((panel.lastHeight - panel.getTopGutter$() - panel.getBottomGutter$() )/2|0);
break;
default:
case 3:
xpix=panel.getLeftGutter$() + ((panel.lastWidth - panel.leftGutter - panel.rightGutter )/2|0);
ypix=(panel.getTopGutter$() > this.ascent + this.yoff) ? panel.getTopGutter$() - this.yoff - this.descent - 1  : panel.getTopGutter$() + this.yoff + this.ascent + 1 ;
break;
case 4:
xpix=(panel.rightGutter > this.height + this.xoff) ? panel.lastWidth - panel.leftGutter + this.xoff + this.height : panel.lastWidth - panel.leftGutter - this.xoff ;
ypix=panel.getTopGutter$() + ((panel.lastHeight - panel.getTopGutter$() - panel.getBottomGutter$() )/2|0);
break;
case 5:
xpix=this.xoff;
ypix=this.yoff;
break;
}
var g2=g.create$();
var viewRect=panel.getViewRect$();
if (viewRect == null ) {
g2.setClip$I$I$I$I(0, 0, panel.getWidth$(), panel.getHeight$());
} else {
g2.setClip$I$I$I$I(viewRect.x, viewRect.y, viewRect.x + viewRect.width, viewRect.y + viewRect.height);
}this.drawText$java_awt_Graphics$I$I(g, xpix, ypix);
g2.dispose$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
