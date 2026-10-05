(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Color',['org.opensourcephysics.display.InteractiveLabel','.Box'],'java.awt.Font','org.opensourcephysics.display.TeXParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InteractiveLabel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.MeasuredCircle', 'org.opensourcephysics.display.Interactive');
C$.$classes$=[['Box',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.connection_location=1;
this.enabled=true;
this.text=null;
this.fontname="TimesRoman";
this.fontsize=14;
this.fontstyle=0;
this.box=Clazz.new_($I$(2,1),[this, null]);
},1);

C$.$fields$=[['Z',['enabled'],'I',['connection_location','fontsize','fontstyle'],'S',['text','fontname'],'O',['font','java.awt.Font','box','org.opensourcephysics.display.InteractiveLabel.Box']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$D$D.apply(this,[0, 0]);C$.$init$.apply(this);
this.color=$I$(1).YELLOW;
this.pixRadius=1;
this.font=Clazz.new_($I$(3,1).c$$S$I$I,[this.fontname, this.fontstyle, this.fontsize]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (str) {
C$.c$.apply(this, []);
this.text=$I$(4).parseTeX$S(str);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (_x, _y) {
this.x=_x;
this.y=_y;
});

Clazz.newMeth(C$, 'setText$S',  function (_text) {
this.text=$I$(4).parseTeX$S(_text);
});

Clazz.newMeth(C$, 'setText$S$D$D',  function (_text, _x, _y) {
this.x=_x;
this.y=_y;
this.text=$I$(4).parseTeX$S(_text);
});

Clazz.newMeth(C$, 'resetBoxSize$',  function () {
this.box.boxHeight=0;
this.box.boxWidth=0;
});

Clazz.newMeth(C$, 'setConnectionPoint$I',  function (location) {
this.connection_location=location;
});

Clazz.newMeth(C$, 'setOffsetX$I',  function (offset) {
this.box.xoffset=offset;
});

Clazz.newMeth(C$, 'getOffsetX$',  function () {
return this.box.xoffset;
});

Clazz.newMeth(C$, 'setOffsetY$I',  function (offset) {
this.box.yoffset=offset;
});

Clazz.newMeth(C$, 'getOffsetY$',  function () {
return this.box.yoffset;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var tempText=this.text;
if (tempText == null ) {
return;
}C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
this.box.computeBoxMetrics$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
var xpix=panel.xToPix$D(this.x);
var ypix=panel.yToPix$D(this.y);
g.setColor$java_awt_Color($I$(1).YELLOW);
g.drawLine$I$I$I$I(xpix, ypix, this.box.connectX, this.box.connectY);
g.setColor$java_awt_Color($I$(1).BLACK);
this.box.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (this.box.isInside$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix)) {
return this.box;
}return null;
});

Clazz.newMeth(C$, 'isInside$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
return this.box.isInside$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix);
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
this.enabled=enabled;
this.box.setEnabled$Z(enabled);
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.InteractiveLabel, "Box", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.AbstractInteractive');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.boxHeight=0;
this.boxWidth=0;
this.xpix=0;
this.ypix=0;
this.xoffset=0;
this.yoffset=0;
},1);

C$.$fields$=[['I',['leftPix','topPix','boxHeight','boxWidth','xpix','ypix','xoffset','yoffset','connectX','connectY'],'O',['panel','org.opensourcephysics.display.DrawingPanel']]]

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.panel=panel.dref$O(this);
var tempText=this.b$['org.opensourcephysics.display.InteractiveLabel'].text;
if (tempText == null ) {
return;
}var g2=g.create$();
g2.setColor$java_awt_Color(this.color);
g2.setFont$java_awt_Font(this.b$['org.opensourcephysics.display.InteractiveLabel'].font);
g2.setClip$I$I$I$I(0, 0, panel.getWidth$(), panel.getHeight$());
g2.setColor$java_awt_Color($I$(1).YELLOW);
g2.fillRect$I$I$I$I(this.leftPix, this.topPix, this.boxWidth, this.boxHeight);
g2.setColor$java_awt_Color($I$(1).BLACK);
g2.drawRect$I$I$I$I(this.leftPix, this.topPix, this.boxWidth, this.boxHeight);
g2.drawString$S$I$I(tempText, this.leftPix + 3, this.topPix + this.boxHeight - 2);
g2.dispose$();
});

Clazz.newMeth(C$, 'computeBoxMetrics$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var tempText=this.b$['org.opensourcephysics.display.InteractiveLabel'].text;
if ((tempText == null ) || (panel == null ) ) {
return;
}var g2=g;
var oldFont=g2.getFont$();
g2.setFont$java_awt_Font(this.b$['org.opensourcephysics.display.InteractiveLabel'].font);
var fm=g2.getFontMetrics$();
var sh=fm.getAscent$() + 2;
var sw=fm.stringWidth$S(tempText) + 6;
this.boxHeight=Math.max(this.boxHeight, sh);
this.boxWidth=Math.max(this.boxWidth, sw);
this.xpix=panel.xToPix$D(this.b$['org.opensourcephysics.display.InteractiveLabel'].x);
this.ypix=panel.yToPix$D(this.b$['org.opensourcephysics.display.InteractiveLabel'].y);
this.connectX=this.leftPix=this.xpix + this.xoffset;
this.connectY=this.topPix=this.ypix + this.yoffset;
if (this.b$['org.opensourcephysics.display.InteractiveLabel'].connection_location == 2) {
this.connectX+=(this.boxWidth/2|0);
} else if (this.b$['org.opensourcephysics.display.InteractiveLabel'].connection_location == 1) {
this.connectX+=(this.boxWidth/2|0);
this.connectY+=(this.boxHeight/2|0);
}g2.setFont$java_awt_Font(oldFont);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
if (this.panel == null ) {
return;
}var x1=this.panel.xToPix$D(this.b$['org.opensourcephysics.display.InteractiveLabel'].x);
var x2=this.panel.xToPix$D(x);
this.xoffset=x2 - x1;
var y1=this.panel.yToPix$D(this.b$['org.opensourcephysics.display.InteractiveLabel'].y);
var y2=this.panel.yToPix$D(y);
this.yoffset=y2 - y1;
});

Clazz.newMeth(C$, 'isInside$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if ((xpix >= this.leftPix) && (xpix <= this.leftPix + this.boxWidth) && (ypix >= this.topPix) && (ypix <= this.topPix + this.boxHeight)  ) {
return true;
}return false;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
