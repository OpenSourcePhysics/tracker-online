(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NumericsLog");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['logName'],'O',['logClass','Class']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fine$S',  function (msg) {
if (C$.logClass == null ) {
return;
}try {
var m=C$.logClass.getMethod$S$ClassA("fine", Clazz.array(Class, -1, [Clazz.getClass(String)]));
m.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, [msg]));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.logName="org.opensourcephysics.controls.OSPLog";
{
if ($I$(1).loadOSPLog) {
try {
C$.logClass=Clazz.forName(C$.logName);
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
C$.logClass=null;
$I$(1).loadOSPLog=false;
} else {
throw ex;
}
}
}};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
