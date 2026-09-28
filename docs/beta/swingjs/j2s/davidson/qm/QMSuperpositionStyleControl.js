(function(){var P$=Clazz.newPackage("davidson.qm"),I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XMLControlElement','davidson.qm.QMSuperpositionApp','org.opensourcephysics.controls.AnimationControl','org.opensourcephysics.display.GUIUtils','Thread','javax.swing.JMenuItem','davidson.qm.QMSuperpositionStyleControl','javax.swing.JPanel','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "QMSuperpositionStyleControl", null, 'davidson.qm.QMSuperpositionControl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$davidson_qm_QMSuperpositionWRApp$SA',  function (model, args) {
;C$.superclazz.c$$davidson_qm_QMSuperpositionApp$SA.apply(this,[model, args]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'customize$',  function () {
this.add$S$S("Panel", "name=checkPanel;parent=controlPanel;position=east;layout=flow:left,0,0");
this.add$S$S("Label", "position=west; parent=checkPanel;text= Phase Color = ;horizontalAlignment=right;tooltip=Change wave function representation.");
this.add$S$S("CheckBox", "parent=checkPanel;name=checkBox;actionon=model.changeOn();actionoff=model.changeOff();selected=true;tooltip=Change wave function representation.");
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
