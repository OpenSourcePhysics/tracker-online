(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'java.awt.Cursor']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoMouseHandler", null, null, 'org.opensourcephysics.display.InteractiveMouseHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iad=null;
this.p=null;
},1);

C$.$fields$=[['O',['iad','org.opensourcephysics.display.Interactive','p','org.opensourcephysics.media.core.TPoint','bounds','java.awt.Rectangle']]]

Clazz.newMeth(C$, 'handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent',  function (panel, e) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.media.core.VideoPanel"))) {
return;
}var vidPanel=panel;
switch (vidPanel.getMouseAction$()) {
case 1:
if ((this.iad != null ) && (Clazz.instanceOf(this.iad, "org.opensourcephysics.media.core.TPoint")) ) {
this.p=this.iad;
this.bounds=this.p.getBounds$org_opensourcephysics_media_core_VideoPanel(vidPanel);
this.p.setXY$D$D(vidPanel.getMouseX$(), vidPanel.getMouseY$());
if (this.bounds != null ) {
this.bounds.add$java_awt_Rectangle(this.p.getBounds$org_opensourcephysics_media_core_VideoPanel(vidPanel));
vidPanel.repaint$java_awt_Rectangle(this.bounds);
} else {
vidPanel.repaint$();
}}break;
case 2:
this.iad=this.p=null;
break;
case 3:
if (this.p != null ) {
this.bounds=this.p.getBounds$org_opensourcephysics_media_core_VideoPanel(vidPanel);
this.p.setXY$D$D(vidPanel.getMouseX$(), vidPanel.getMouseY$());
if (this.bounds != null ) {
this.bounds.add$java_awt_Rectangle(this.p.getBounds$org_opensourcephysics_media_core_VideoPanel(vidPanel));
vidPanel.repaint$java_awt_Rectangle(this.bounds);
} else {
vidPanel.repaint$();
}}break;
case 7:
if (vidPanel.isDrawingInImageSpace$()) {
this.iad=vidPanel.getInteractive$();
}if ((this.iad != null ) && (Clazz.instanceOf(this.iad, "org.opensourcephysics.media.core.TPoint")) ) {
vidPanel.setMouseCursor$java_awt_Cursor($I$(1).getPredefinedCursor$I(12));
} else {
vidPanel.setMouseCursor$java_awt_Cursor($I$(1).getDefaultCursor$());
}break;
}
if (this.p == null ) {
vidPanel.hideMouseBox$();
} else {
this.p.showCoordinates$org_opensourcephysics_media_core_VideoPanel(vidPanel);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
