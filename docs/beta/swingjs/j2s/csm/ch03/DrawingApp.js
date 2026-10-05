(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'org.opensourcephysics.frames.DisplayFrame','csm.ch03.PixelRectangle','org.opensourcephysics.controls.CalculationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawingApp", null, 'org.opensourcephysics.controls.AbstractCalculation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frame=Clazz.new_($I$(1,1).c$$S$S$S,["x", "y", "Graphics"]);
},1);

C$.$fields$=[['O',['frame','org.opensourcephysics.frames.DisplayFrame']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.frame.setPreferredMinMax$D$D$D$D(0, 10, 0, 10);
}, 1);

Clazz.newMeth(C$, 'calculate$',  function () {
var left=this.control.getInt$S("xleft");
var top=this.control.getInt$S("ytop");
var width=this.control.getInt$S("width");
var height=this.control.getInt$S("height");
var rectangle=Clazz.new_($I$(2,1).c$$I$I$I$I,[left, top, width, height]);
this.frame.addDrawable$org_opensourcephysics_display_Drawable(rectangle);
});

Clazz.newMeth(C$, 'reset$',  function () {
this.frame.clearDrawables$();
this.control.setValue$S$I("xleft", 60);
this.control.setValue$S$I("ytop", 70);
this.control.setValue$S$I("width", 100);
this.control.setValue$S$I("height", 150);
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(3,"createApp$org_opensourcephysics_controls_Calculation",[Clazz.new_(C$)]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
