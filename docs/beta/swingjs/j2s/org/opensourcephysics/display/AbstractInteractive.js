(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractInteractive", null, null, 'org.opensourcephysics.display.Interactive');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=Clazz.new_($I$(1,1).c$$I$I$I$I,[255, 128, 128, 128]);
this.x=0;
this.y=0;
this.enabled=true;
},1);

C$.$fields$=[['Z',['enabled'],'D',['x','y'],'O',['color','java.awt.Color']]]

Clazz.newMeth(C$, 'setEnabled$Z',  function (_enabled) {
this.enabled=_enabled;
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (_x, _y) {
this.x=_x;
this.y=_y;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (this.isInside$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix) && this.enabled ) {
return this;
}return null;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return false;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'setX$D',  function (_x) {
this.x=_x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'setY$D',  function (_y) {
this.y=_y;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
