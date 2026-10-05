(function(){var P$=Clazz.newPackage("test"),I$=[[0,'javax.swing.JFrame','javax.swing.JDialog','org.opensourcephysics.controls.XMLTreePanel','java.awt.Dimension','org.opensourcephysics.controls.XMLControlElement']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SetXMLControlTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.useFrame=false;
},1);

C$.$fields$=[['Z',['useFrame'],'O',['frame','javax.swing.JFrame']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControlElement',  function (xml) {
;C$.$init$.apply(this);
if (this.useFrame) {
this.frame=Clazz.new_($I$(1,1).c$$S,["Test XML Tree Panel"]);
}var dialog=Clazz.new_($I$(2,1).c$$java_awt_Frame$Z,[null, true]);
var treePanel=Clazz.new_($I$(3,1).c$$org_opensourcephysics_controls_XMLControl,[xml]);
dialog.setContentPane$java_awt_Container(treePanel);
dialog.setSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[600, 300]));
dialog.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var control=Clazz.new_($I$(5,1));
var myName="myName";
control.setValue$S$O("name", myName);
var pi=3.14;
control.setValue$S$D("pi", pi);
var array=Clazz.array(Double.TYPE, -1, [10.0, 20.0, 30.0]);
control.setValue$S$O("data", array);
var array2D=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [1, 10.0]), Clazz.array(Double.TYPE, -1, [2, 20.0]), Clazz.array(Double.TYPE, -1, [3, 30.0])]);
control.setValue$S$O("data2", array2D);
Clazz.new_(C$.c$$org_opensourcephysics_controls_XMLControlElement,[control]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
