(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core.interaction"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InteractionEvent", null, 'java.awt.event.ActionEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['info','java.lang.Object','mouseEvent','java.awt.event.MouseEvent']]]

Clazz.newMeth(C$, 'c$$O$I$S$O$java_awt_event_MouseEvent',  function (_source, _id, _command, _info, _mouseEvent) {
;C$.superclazz.c$$O$I$S.apply(this,[_source, _id, _command]);C$.$init$.apply(this);
this.info=_info;
this.mouseEvent=_mouseEvent;
}, 1);

Clazz.newMeth(C$, 'getInfo$',  function () {
return this.info;
});

Clazz.newMeth(C$, 'getMouseEvent$',  function () {
return this.mouseEvent;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
