(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'javax.swing.Icon','org.opensourcephysics.cabrillo.tracker.PlotTView','org.opensourcephysics.cabrillo.tracker.TableTView','org.opensourcephysics.cabrillo.tracker.WorldTView','org.opensourcephysics.cabrillo.tracker.PageTView','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TView", null, 'javax.swing.JPanel', ['java.beans.PropertyChangeListener', ['org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.OSPRuntime.Disposable']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.toolbarComponents=Clazz.new_($I$(6,1));
},1);

C$.$fields$=[['O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','toolbarComponents','java.util.ArrayList']]
,['O',['VIEW_ICONS','javax.swing.Icon[]','VIEW_NAMES','String[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
Clazz.super_(C$, this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
}, 1);

Clazz.newMeth(C$, 'getToolBarComponents$',  function () {
return this.toolbarComponents;
});

Clazz.newMeth(C$, 'refreshPopup$javax_swing_JPopupMenu',  function (popup) {
});

Clazz.newMeth(C$, 'isCustomState$',  function () {
return false;
});

Clazz.newMeth(C$, 'isViewPaneVisible$',  function () {
var trackerPanel=this.getTrackerPanel$();
var tf;
if (trackerPanel == null  || (tf=trackerPanel.getTFrame$()) == null   || tf.getTabCount$() == 0 ) return false;
var id=trackerPanel.getID$();
var views=tf.getTViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(trackerPanel, false);
if (views == null ) return false;
for (var i=0; i < views.length; i++) {
if (views[i] != null ) for (var j=0; j < views[i].length; j++) {
if (views[i][j] === this ) {
var order=($I$(7).isPortraitLayout$() ? $I$(7).PORTRAIT_VIEW_ORDER : $I$(7).DEFAULT_ORDER);
return tf.isViewPaneVisible$I$Integer(order[i], id);
}}
}
return false;
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.frame=null;
this.panelID=null;
this.toolbarComponents=null;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(8).finalized$O(this);
});

C$.$static$=function(){C$.$static$=0;
C$.VIEW_ICONS=Clazz.array($I$(1), -1, [$I$(2).PLOTVIEW_ICON, $I$(3).TABLEVIEW_ICON, $I$(4).WORLDVIEW_ICON, $I$(5).PAGEVIEW_ICON]);
C$.VIEW_NAMES=Clazz.array(String, -1, ["TFrame.View.Plot", "TFrame.View.Table", "TFrame.View.World", "TFrame.View.Text"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
