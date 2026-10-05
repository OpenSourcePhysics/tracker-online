(function(){var P$=Clazz.newPackage("test"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Test_");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
System.out.println$S("\n\n==============\nTesting " + this.getClass$().getName$());
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
System.out.println$S(Clazz.new_(java.util.Date).toGMTString$());
System.out.println$S("Test_ all tests completed successfully.");
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "testing " + this.getClass$().getName$();
});

C$.$static$=function(){C$.$static$=0;
{
ClassLoader.getSystemClassLoader$().setDefaultAssertionStatus$Z(true);
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
