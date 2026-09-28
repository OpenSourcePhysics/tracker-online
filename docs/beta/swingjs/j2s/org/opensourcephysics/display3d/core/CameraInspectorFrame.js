(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[[0,'java.text.DecimalFormat','java.util.ArrayList','org.opensourcephysics.display3d.core.CameraInspectorFrame','org.opensourcephysics.tools.ToolsRes','java.awt.event.ActionEvent','java.awt.BorderLayout','javax.swing.JPanel','java.awt.GridLayout','javax.swing.border.TitledBorder','javax.swing.ButtonGroup','javax.swing.JRadioButton','javax.swing.JButton','javax.swing.JLabel','javax.swing.border.EmptyBorder','javax.swing.JTextField']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CameraInspectorFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['inspector','org.opensourcephysics.display3d.core.CameraInspector']]]

Clazz.newMeth(C$, 'c$$S$org_opensourcephysics_display3d_core_CameraInspector',  function (title, anInspector) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
this.inspector=anInspector;
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
this.getContentPane$().add$java_awt_Component$O(this.inspector, "Center");
this.pack$();
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (vis) {
this.inspector.updateFields$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
