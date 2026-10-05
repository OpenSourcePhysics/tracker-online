(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Color','java.awt.Font','org.opensourcephysics.display.TeXParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextBox", null, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.placement_mode=0;
this.alignment_mode=0;
this.xoffset=0;
this.yoffset=0;
this.text=null;
this.fontname="TimesRoman";
this.fontsize=14;
this.fontstyle=0;
this.color=$I$(1).black;
this.xpix=0;
this.ypix=0;
this.boxHeight=0;
this.boxWidth=0;
},1);

C$.$fields$=[['D',['x','y'],'I',['placement_mode','alignment_mode','xoffset','yoffset','fontsize','fontstyle','xpix','ypix','boxHeight','boxWidth'],'S',['text','fontname'],'O',['font','java.awt.Font','color','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.font=Clazz.new_($I$(2,1).c$$S$I$I,[this.fontname, this.fontstyle, this.fontsize]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (str) {
C$.c$.apply(this, []);
this.text=$I$(3).parseTeX$S(str);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (_x, _y) {
this.x=_x;
this.y=_y;
});

Clazz.newMeth(C$, 'setText$S',  function (_text) {
this.text=$I$(3).parseTeX$S(_text);
});

Clazz.newMeth(C$, 'setText$S$D$D',  function (_text, _x, _y) {
this.x=_x;
this.y=_y;
this.text=$I$(3).parseTeX$S(_text);
});

Clazz.newMeth(C$, 'resetBoxSize$',  function () {
this.boxHeight=0;
this.boxWidth=0;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var tempText=this.text;
if (tempText == null ) {
return;
}var fm=g.getFontMetrics$();
var sh=fm.getAscent$() + 2;
var sw=fm.stringWidth$S(tempText) + 6;
this.boxHeight=Math.max(this.boxHeight, sh);
this.boxWidth=Math.max(this.boxWidth, sw);
switch (this.placement_mode) {
case 1:
this.xpix=(this.x|0);
this.ypix=(this.y|0);
break;
case 2:
this.xpix=((this.x * panel.getWidth$())|0);
this.ypix=(((1 - this.y) * panel.getHeight$())|0);
break;
case 4:
this.xpix=0;
this.ypix=0;
break;
case 8:
this.xpix=panel.getLeftGutter$();
this.ypix=panel.getTopGutter$();
break;
case 3:
this.xpix=0;
this.ypix=panel.getHeight$() - this.boxHeight - this.yoffset - 1 ;
break;
case 7:
this.xpix=panel.getLeftGutter$();
this.ypix=panel.getHeight$() - this.boxHeight - this.yoffset - 1 - panel.getBottomGutter$() ;
break;
case 6:
this.xpix=panel.getWidth$() - this.boxWidth - 1 ;
this.ypix=0;
break;
case 10:
this.xpix=panel.getWidth$() - this.boxWidth - 1 - panel.getRightGutter$() ;
this.ypix=panel.getTopGutter$();
break;
case 5:
this.xpix=panel.getWidth$() - this.boxWidth - 1 ;
this.ypix=panel.getHeight$() - this.boxHeight - this.yoffset - 1 ;
break;
case 9:
this.xpix=panel.getWidth$() - this.boxWidth - 1 - panel.getRightGutter$() ;
this.ypix=panel.getHeight$() - this.boxHeight - this.yoffset - 1 - panel.getBottomGutter$() ;
break;
default:
this.xpix=panel.xToPix$D(this.x);
this.ypix=panel.yToPix$D(this.y);
break;
}
var xoffset=this.xoffset;
var yoffset=this.yoffset;
if (this.alignment_mode == 1) {
xoffset-=(this.boxWidth/2|0);
}var g2=g.create$();
g2.setColor$java_awt_Color(this.color);
g2.setFont$java_awt_Font(this.font);
g2.setClip$I$I$I$I(0, 0, panel.getWidth$(), panel.getHeight$());
g2.setColor$java_awt_Color($I$(1).yellow);
g2.fillRect$I$I$I$I(this.xpix + xoffset, this.ypix + yoffset, this.boxWidth, this.boxHeight);
g2.setColor$java_awt_Color($I$(1).black);
g2.drawRect$I$I$I$I(this.xpix + xoffset, this.ypix + yoffset, this.boxWidth, this.boxHeight);
g2.drawString$S$I$I(tempText, this.xpix + 3 + xoffset , this.ypix + this.boxHeight - 2 + yoffset);
g2.dispose$();
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
