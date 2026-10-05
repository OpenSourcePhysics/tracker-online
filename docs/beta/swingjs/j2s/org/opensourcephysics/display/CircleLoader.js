(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.Circle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CircleLoader", null, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var circle=obj;
control.setValue$S$D("x", circle.x);
control.setValue$S$D("y", circle.y);
control.setValue$S$I("drawing r", circle.pixRadius);
control.setValue$S$O("color", circle.color);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var circle=obj;
circle.x=control.getDouble$S("x");
circle.y=control.getDouble$S("y");
var r=6;
if (control.getObject$S("drawing r") != null ) {
r=control.getInt$S("drawing r");
} else if (control.getObject$S("r") != null ) {
r=control.getInt$S("r");
}circle.pixRadius=(r <= 0) ? 6 : r;
circle.color=control.getObject$S("color");
return obj;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
