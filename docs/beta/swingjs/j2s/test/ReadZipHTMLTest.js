(function(){var P$=Clazz.newPackage("test"),I$=[[0,'org.opensourcephysics.tools.ResourceLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReadZipHTMLTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['path']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
var res=$I$(1).getResource$S(C$.path);
if (res != null ) {
var htmlCode=res.getString$();
}System.exit$I(0);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.path="https://physlets.org/tracker/library/JS/basketballGIF.trz!/html/basketballGIF_info.html";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
