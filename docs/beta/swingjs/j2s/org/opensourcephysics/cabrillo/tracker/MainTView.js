(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'javax.swing.JToolBar','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.TrackerRes']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MainTView", null, 'org.opensourcephysics.cabrillo.tracker.ZoomTView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['playerBar','javax.swing.JToolBar']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this,[panel]);C$.$init$.apply(this);
var tbar=panel.getTrackBar$Z(true);
if (tbar != null ) this.add$java_awt_Component$O(tbar, "North");
this.playerBar=Clazz.new_($I$(1,1));
this.add$java_awt_Component$O(this.playerBar, "South");
this.playerBar.setFloatable$Z(false);
panel.getPlayer$().setBorder$javax_swing_border_Border(null);
panel.setPlayerVisible$Z(false);
this.playerBar.add$java_awt_Component(panel.getPlayer$());
}, 1);

Clazz.newMeth(C$, 'doResized$',  function () {
if (!C$.superclazz.prototype.doResized$.apply(this, [])) return false;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var tbar=trackerPanel.getToolBar$Z(false);
if (tbar != null ) tbar.refreshZoomButton$();
trackerPanel.eraseAll$();
return true;
});

Clazz.newMeth(C$, 'getPopupMenu$',  function () {
if (!$I$(2).allowMenuRefresh) return null;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if ($I$(2,"isZoomInCursor$java_awt_Cursor",[trackerPanel.getCursor$()]) || $I$(2,"isZoomOutCursor$java_awt_Cursor",[trackerPanel.getCursor$()]) ) {
return null;
}return trackerPanel.updateMainPopup$();
});

Clazz.newMeth(C$, 'getPlayerBar$',  function () {
return this.playerBar;
});

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
var frame=this.playerBar.getTopLevelAncestor$();
if (Clazz.instanceOf(frame, "javax.swing.JDialog")) {
frame.removeAll$();
(frame).dispose$();
}this.playerBar.removeAll$();
this.playerBar=null;
});

Clazz.newMeth(C$, 'getViewName$',  function () {
return $I$(3).getString$S("TFrame.View.Video");
});

Clazz.newMeth(C$, 'getViewIcon$',  function () {
return $I$(2).getResourceIcon$S$Z("video_on.gif", true);
});

Clazz.newMeth(C$, 'getViewType$',  function () {
return 4;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
