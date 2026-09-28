(function(){var P$=Clazz.newPackage("org.opensourcephysics.resources.tools"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "tools", null, 'java.util.PropertyResourceBundle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['res']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_io_InputStream.apply(this, [Clazz.getClass(C$).getResourceAsStream$S(C$.res)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (stream) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[stream]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.res="tools.properties";
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
