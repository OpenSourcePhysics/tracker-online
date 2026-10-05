(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.SuryonoParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParsedFunction", null, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['fStr'],'O',['$function','org.opensourcephysics.numerics.Function']]]

Clazz.newMeth(C$, 'c$$S',  function (fStr) {
C$.c$$S$S.apply(this, [fStr, "x"]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (_fStr, $var) {
;C$.$init$.apply(this);
this.fStr=_fStr;
var parser=null;
parser=Clazz.new_($I$(1,1).c$$S$S,[this.fStr, $var]);
this.$function=parser;
}, 1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return this.$function.evaluate$D(x);
});

Clazz.newMeth(C$, 'toString',  function () {
return "f(x) = " + this.fStr;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
