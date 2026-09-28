(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.dialogs"),I$=[[0,'java.awt.Dimension','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.XMLTreePanel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLDrawingPanelInspector", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['inspector','org.opensourcephysics.display.dialogs.XMLDrawingPanelInspector']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setSize$java_awt_Dimension(Clazz.new_($I$(1,1).c$$I$I,[600, 300]));
}, 1);

Clazz.newMeth(C$, 'getInspector$org_opensourcephysics_display_DrawingPanel',  function (dp) {
if (C$.inspector == null ) {
C$.inspector=Clazz.new_(C$);
}var control=Clazz.new_($I$(2,1).c$$O,[dp]);
var treePanel=Clazz.new_($I$(3,1).c$$org_opensourcephysics_controls_XMLControl,[control]);
C$.inspector.setContentPane$java_awt_Container(treePanel);
C$.inspector.setVisible$Z(true);
return C$.inspector;
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
