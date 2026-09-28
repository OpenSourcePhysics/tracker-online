(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d");
/*c*/var C$=Clazz.newClass(P$, "InteractionTarget", null, null, 'org.opensourcephysics.display3d.core.interaction.InteractionTarget');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enabled=false;
this.affectsGroup=false;
this.command=null;
},1);

C$.$fields$=[['Z',['enabled','affectsGroup'],'I',['type'],'S',['command'],'O',['element','org.opensourcephysics.display3d.simple3d.Element']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display3d_simple3d_Element$I',  function (_element, _type) {
;C$.$init$.apply(this);
this.element=_element;
this.type=_type;
}, 1);

Clazz.newMeth(C$, 'getElement$',  function () {
return this.element;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (value) {
this.enabled=value;
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'getActionCommand$',  function () {
return this.command;
});

Clazz.newMeth(C$, 'setActionCommand$S',  function (command) {
this.command=command;
});

Clazz.newMeth(C$, 'setAffectsGroup$Z',  function (value) {
this.affectsGroup=value;
});

Clazz.newMeth(C$, 'getAffectsGroup$',  function () {
return this.affectsGroup;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
