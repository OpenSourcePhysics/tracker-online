(function(){var P$=Clazz.newPackage("debugging.applets"),I$=[[0,'debugging.applets.ObjectManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractEmbeddableAnimation", null, 'org.opensourcephysics.controls.AbstractAnimation', 'debugging.applets.Embeddable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.objectManager=Clazz.new_($I$(1,1));
this.timeMax=3.4028235E38;
this.timeMsg="Done";
},1);

C$.$fields$=[['D',['timeMax'],'S',['timeMsg'],'O',['objectManager','debugging.applets.ObjectManager']]]

Clazz.newMeth(C$, 'getControl$',  function () {
return this.control;
});

Clazz.newMeth(C$, 'getManager$',  function () {
return this.objectManager;
});

Clazz.newMeth(C$, 'setControl$org_opensourcephysics_controls_Control',  function (control) {
this.stopAnimation$();
this.control=control;
if (control == null ) return;
this.resetAnimation$();
});

Clazz.newMeth(C$, 'setMaxTime$D$S',  function (time, msg) {
this.timeMax=time;
this.timeMsg=msg;
});

Clazz.newMeth(C$, 'startStop$',  function () {
if (this.animationThread == null ) this.startAnimation$();
 else this.stopAnimation$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
