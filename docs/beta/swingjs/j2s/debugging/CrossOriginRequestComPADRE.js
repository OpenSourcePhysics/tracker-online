(function(){var P$=Clazz.newPackage("debugging"),I$=[[0,'java.net.URL']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CrossOriginRequestComPADRE");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
System.out.println$S("https://www.compadre.org/osp/services/REST/osp_tracker.cfm?OSPType=Tracker&OSPPrimary=Subject&OSPSubject=225&OSPSubjectDetail=248&OSPSubjectDetailDetail=1049");
try {
var u=Clazz.new_(["https://www.compadre.org/osp/services/REST/osp_tracker.cfm?OSPType=Tracker&OSPPrimary=Subject&OSPSubject=225&OSPSubjectDetail=248&OSPSubjectDetailDetail=1049"],$I$(1,1).c$$S);
var uc=u.openConnection$();
var fields=uc.getHeaderFields$();
System.out.println$S("URLConnection=\n\t" + uc);
System.out.println$S("Header Fields n=" + fields.size$());
for (var e, $e = fields.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
var list=e.getValue$();
System.out.println$S(key + "  " + list );
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.getStackTrace$();
} else {
throw e;
}
}
System.out.println$S("\nhttps://www.compadre.org/profiles/bubble.jpg");
try {
var u=Clazz.new_($I$(1,1).c$$S,["https://www.compadre.org/profiles/bubble.jpg"]);
var uc=u.openConnection$();
var fields=uc.getHeaderFields$();
System.out.println$S("URLConnection=\n\t" + uc);
System.out.println$S("Header Fields n=" + fields.size$());
for (var e, $e = fields.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
var list=e.getValue$();
System.out.println$S(key + "  " + list );
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.getStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
