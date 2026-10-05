(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'org.opensourcephysics.tools.ResourceLoader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataLoaderApp");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var fileName="falling.txt";
var res=$I$(1,"getResource$S$Class",[fileName, Clazz.getClass(C$)]);
var data=res.getString$();
var lines=data.split$S("\n");
for (var i=0, n=lines.length; i < n; i++) {
if (lines[i].trim$().startsWith$S("//")) {
continue;
}var numbers=lines[i].trim$().split$S("\\s");
System.out.print$S("t = " + numbers[0]);
System.out.println$S("  y = " + numbers[1]);
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
