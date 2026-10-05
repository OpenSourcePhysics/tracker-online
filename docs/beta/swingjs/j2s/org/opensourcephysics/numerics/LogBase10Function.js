(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.Util']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LogBase10Function", null, null, 'org.opensourcephysics.numerics.InvertibleFunction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
if (x <= 0 ) {
x=1.4E-45;
}return Math.log(x) / $I$(1).LOG10;
});

Clazz.newMeth(C$, 'getInverse$D',  function (y) {
return Math.pow(10, y);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
