(function(){var P$=Clazz.newPackage("test"),I$=[[0,'org.opensourcephysics.numerics.SuryonoParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParserTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fxStr="sin(x)";
},1);

C$.$fields$=[['S',['fxStr'],'O',['fxParser','org.opensourcephysics.numerics.SuryonoParser']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
try {
this.fxParser=Clazz.new_($I$(1,1).c$$S$S,["0", "x"]);
this.fxParser.setFunction$S(this.fxStr);
} catch (ex) {
if (Clazz.exceptionOf(ex,"org.opensourcephysics.numerics.ParserException")){
System.err.println$S(ex.getMessage$());
} else {
throw ex;
}
}
this.showValues$org_opensourcephysics_numerics_Function(this.fxParser);
}, 1);

Clazz.newMeth(C$, 'showValues$org_opensourcephysics_numerics_Function',  function (fun) {
for (var i=0; i <= 10; i++) {
var x=2 * 3.141592653589793 * i * 0.1 ;
var val=fun.evaluate$D(x);
System.out.println$S("f(x)=" + new Double(val).toString());
}
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
