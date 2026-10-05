(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.InteractiveCircle',['org.opensourcephysics.display.InteractiveCircle','.InteractiveCircleLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InteractiveCircle", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.MeasuredCircle', 'org.opensourcephysics.display.Interactive');
C$.$classes$=[['InteractiveCircleLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enableInteraction=true;
},1);

C$.$fields$=[['Z',['enableInteraction']]]

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$D$D.apply(this,[x, y]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$D$D.apply(this, [0, 0]);
}, 1);

Clazz.newMeth(C$, 'setEnabled$Z',  function (_enableInteraction) {
this.enableInteraction=_enableInteraction;
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enableInteraction;
});

Clazz.newMeth(C$, 'isInside$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
return (this.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix) != null );
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (!this.enableInteraction) {
return null;
}var xcpix=panel.xToPix$D(this.x);
var ycpix=panel.yToPix$D(this.y);
if ((Math.abs(xcpix - xpix) <= this.pixRadius) && (Math.abs(ycpix - ypix) <= this.pixRadius) ) {
return this;
}return null;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.InteractiveCircle, "InteractiveCircleLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.display.CircleLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var circle=obj;
control.setValue$S$Z("interaction enabled", circle.enableInteraction);
control.setValue$S$Z("measure enabled", circle.enableInteraction);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var circle=obj;
circle.enableInteraction=control.getBoolean$S("interaction enabled");
circle.enableMeasure=control.getBoolean$S("measure enabled");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
