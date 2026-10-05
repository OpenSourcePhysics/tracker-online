(function(){var P$=Clazz.newPackage("csm.ch02"),I$=[[0,'org.opensourcephysics.controls.CalculationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CalculationApp", null, 'org.opensourcephysics.controls.AbstractCalculation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'calculate$',  function () {
this.control.println$S("Calculation button pressed.");
var x=this.control.getDouble$S("x value");
this.control.println$S("x*x = " + (new Double(x * x).toString()));
this.control.println$S("random = " + new Double(Math.random()).toString());
});

Clazz.newMeth(C$, 'reset$',  function () {
this.control.setValue$S$D("x value", 10.0);
});

Clazz.newMeth(C$, 'myFunction$',  function () {
System.out.println$S("Button pressed.");
this.control.println$S("Button pressed");
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var control=$I$(1,"createApp$org_opensourcephysics_controls_Calculation",[Clazz.new_(C$)]);
control.addButton$S$S("myFunction", "Press Me");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
