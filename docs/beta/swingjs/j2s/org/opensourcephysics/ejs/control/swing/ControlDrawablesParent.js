(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlDrawablesParent", null, 'org.opensourcephysics.ejs.control.swing.ControlSwingElement', 'org.opensourcephysics.ejs.control.NeedsUpdate');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.preupdateList=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['preupdateList','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'update$',  function () {
for (var e=this.preupdateList.elements$(); e.hasMoreElements$(); ) {
e.nextElement$().preupdate$();
}
(this.getVisual$()).render$();
});

Clazz.newMeth(C$, 'addToPreupdateList$org_opensourcephysics_ejs_control_swing_NeedsPreUpdate',  function (_child) {
this.preupdateList.add$O(_child);
});

Clazz.newMeth(C$, 'removeFromPreupdateList$org_opensourcephysics_ejs_control_swing_NeedsPreUpdate',  function (_child) {
this.preupdateList.remove$O(_child);
});

Clazz.newMeth(C$, 'getSelectedDrawable$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
