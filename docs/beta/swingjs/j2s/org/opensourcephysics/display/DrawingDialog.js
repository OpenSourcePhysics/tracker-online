(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawingDialog", null, 'org.opensourcephysics.display.OSPDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['drawingPanel','org.opensourcephysics.display.DrawingPanel']]]

Clazz.newMeth(C$, 'c$$java_awt_Frame$org_opensourcephysics_display_DrawingPanel',  function (_ownerFrame, _drawingPanel) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[_ownerFrame, "Drawing Dialog", false]);C$.$init$.apply(this);
if ($I$(1).appletMode) {
this.keepHidden=true;
}this.drawingPanel=_drawingPanel;
var contentPane=this.getContentPane$();
if (this.drawingPanel != null ) {
contentPane.add$java_awt_Component$O(this.drawingPanel, "Center");
}this.setSize$I$I(300, 300);
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'setDrawingPanel$org_opensourcephysics_display_DrawingPanel',  function (_drawingPanel) {
if (this.drawingPanel != null ) {
this.getContentPane$().remove$java_awt_Component(this.drawingPanel);
}this.drawingPanel=_drawingPanel;
if (this.drawingPanel != null ) {
this.getContentPane$().add$java_awt_Component$O(this.drawingPanel, "Center");
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
