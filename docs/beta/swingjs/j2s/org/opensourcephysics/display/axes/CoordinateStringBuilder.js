(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),I$=[[0,'org.opensourcephysics.numerics.Util','org.opensourcephysics.display.TeXParser','org.opensourcephysics.display.axes.CartesianCoordinateStringBuilder','org.opensourcephysics.display.axes.PolarCoordinateStringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CoordinateStringBuilder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scientificFormat=$I$(1).newDecimalFormat$S("0.###E0");
this.decimalFormat=$I$(1).newDecimalFormat$S("0.00");
this.xLabel="x=";
this.yLabel="  y=";
},1);

C$.$fields$=[['S',['xLabel','yLabel'],'O',['scientificFormat','java.text.DecimalFormat','+decimalFormat']]]

Clazz.newMeth(C$, 'setCoordinateLabels$S$S',  function (xLabel, yLabel) {
this.xLabel=$I$(2).parseTeX$S(xLabel);
this.yLabel=$I$(2).parseTeX$S(yLabel);
});

Clazz.newMeth(C$, 'createCartesian$',  function () {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'createPolar$',  function () {
return Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'createPolar$S$S$D',  function (rLabel, phiLabel, phiOffset) {
return Clazz.new_($I$(4,1).c$$S$S$D,[rLabel, phiLabel, phiOffset]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
