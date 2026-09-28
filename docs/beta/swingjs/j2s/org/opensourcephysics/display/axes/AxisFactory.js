(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),I$=[[0,'org.opensourcephysics.display.axes.CartesianInteractive','org.opensourcephysics.display.axes.CartesianType2','org.opensourcephysics.display.axes.CartesianType3']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AxisFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newInstance$',  function () {
var axisClass="org.opensourcephysics.display.axes.CartesianType1Factory";
try {
axisClass=System.getProperty$S("org.opensourcephysics.display.axes.AxisFactory");
if (axisClass == null ) {
axisClass="org.opensourcephysics.display.axes.CartesianType1Factory";
}} catch (se) {
if (Clazz.exceptionOf(se,"SecurityException")){
} else {
throw se;
}
}
try {
var c=Clazz.forName(axisClass);
return c.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var cnfe = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var ie = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var iae = e$$;
{
}
} else {
throw e$$;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'newInstance$S',  function (axisClass) {
if (axisClass == null ) {
axisClass="org.opensourcephysics.display.axes.CartesianType1Factory";
}try {
var c=Clazz.forName(axisClass);
return c.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var cnfe = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var ie = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var iae = e$$;
{
}
} else {
throw e$$;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'createAxesType1$org_opensourcephysics_display_PlottingPanel',  function (panel) {
return Clazz.new_($I$(1,1).c$$org_opensourcephysics_display_PlottingPanel,[panel]);
}, 1);

Clazz.newMeth(C$, 'createAxesType2$org_opensourcephysics_display_PlottingPanel',  function (panel) {
return Clazz.new_($I$(2,1).c$$org_opensourcephysics_display_PlottingPanel,[panel]);
}, 1);

Clazz.newMeth(C$, 'createAxesType3$org_opensourcephysics_display_PlottingPanel',  function (panel) {
return Clazz.new_($I$(3,1).c$$org_opensourcephysics_display_PlottingPanel,[panel]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
