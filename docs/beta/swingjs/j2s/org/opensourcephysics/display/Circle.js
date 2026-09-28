(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Color','org.opensourcephysics.display.CircleLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Circle", null, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=$I$(1).red;
this.pixRadius=6;
this.x=0;
this.y=0;
},1);

C$.$fields$=[['D',['x','y'],'I',['pixRadius'],'O',['color','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$D$D.apply(this, [0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$D$D',  function (_x, _y) {
;C$.$init$.apply(this);
this.x=_x;
this.y=_y;
}, 1);

Clazz.newMeth(C$, 'c$$D$D$I',  function (_x, _y, _r) {
;C$.$init$.apply(this);
this.x=_x;
this.y=_y;
this.pixRadius=_r;
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var xpix=panel.xToPix$D(this.x) - this.pixRadius;
var ypix=panel.yToPix$D(this.y) - this.pixRadius;
g.setColor$java_awt_Color(this.color);
g.fillOval$I$I$I$I(xpix, ypix, 2 * this.pixRadius, 2 * this.pixRadius);
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
this.x=x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
this.y=y;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.x=x;
this.y=y;
});

Clazz.newMeth(C$, 'toString',  function () {
var name=this.getClass$().getName$();
name=name.substring$I(1 + name.lastIndexOf$S(".")) + '[';
name+="x=" + new Double(this.x).toString();
name+=",y=" + new Double(this.y).toString();
name+=",r_pix=" + this.pixRadius + ']' ;
return name;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
