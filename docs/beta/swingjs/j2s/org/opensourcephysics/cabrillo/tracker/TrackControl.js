(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.HashMap','javax.swing.JToolBar','javax.swing.JPanel','java.awt.event.KeyAdapter','org.opensourcephysics.cabrillo.tracker.TMenuBar','org.opensourcephysics.cabrillo.tracker.TButton','javax.swing.JPopupMenu','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.TToolBar','java.awt.GridLayout','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackControl", null, 'javax.swing.JDialog', [['org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.OSPRuntime.Disposable'], 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.trackBars=Clazz.array($I$(2), [0]);
this.positioned=false;
},1);

C$.$fields$=[['Z',['positioned','wasVisible'],'I',['trackCount'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','popup','javax.swing.JPopupMenu','trackBarPanel','javax.swing.JPanel','trackBars','javax.swing.JToolBar[]','shiftKeyListener','java.awt.event.KeyListener','newTrackButton','org.opensourcephysics.cabrillo.tracker.TButton','myFollower','java.awt.event.ComponentListener']]
,['O',['panelProps','String[]','panelTrackcontrols','java.util.Map']]]

Clazz.newMeth(C$, 'getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var control=C$.panelTrackcontrols.get$O(panel.getID$());
if (control == null ) {
control=Clazz.new_(C$.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[panel]);
C$.panelTrackcontrols.put$O$O(panel.getID$(), control);
panel.trackControl=control;
}return control;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[panel.getTFrame$(), false]);C$.$init$.apply(this);
this.panelID=panel.getID$();
this.frame=panel.getTFrame$();
this.trackBarPanel=Clazz.new_($I$(3,1));
this.setContentPane$java_awt_Container(this.trackBarPanel);
this.shiftKeyListener=((P$.TrackControl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackControl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TrackControl'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TrackControl'].panelID);
if (e.getKeyCode$() == 16) {
trackerPanel.requestFocus$();
trackerPanel.requestFocusInWindow$();
} else if (e.getKeyCode$() == 65) {
var mainView=trackerPanel.getTFrame$().getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
mainView.keyAdapter.keyPressed$java_awt_event_KeyEvent(e);
trackerPanel.requestFocus$();
trackerPanel.requestFocusInWindow$();
}});
})()
), Clazz.new_($I$(4,1),[this, null],P$.TrackControl$1));
this.newTrackButton=((P$.TrackControl$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackControl$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
$I$(5).refreshPopup$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S$javax_swing_JPopupMenu(this.$finals$.panel, "TrackControl.tracks", this.b$['org.opensourcephysics.cabrillo.tracker.TrackControl'].popup);
return this.b$['org.opensourcephysics.cabrillo.tracker.TrackControl'].popup;
});
})()
), Clazz.new_($I$(6,1),[this, {panel:panel}],P$.TrackControl$2));
this.setResizable$Z(false);
this.pack$();
this.popup=Clazz.new_($I$(7,1));
panel.addListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
this.myFollower=this.frame.addFollower$java_awt_Component$java_awt_Point(this, null);
}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.width=Math.max(150, dim.width);
return dim;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (this.panelID == null ) return;
if (!this.positioned && vis ) {
p$1.positionForFrame.apply(this, []);
}if (vis && this.trackCount == 0  && !this.isEmpty$() ) this.refresh$();
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
this.wasVisible=vis;
var toolbar=this.frame.getToolBar$Integer$Z(this.panelID, false);
if (toolbar != null ) toolbar.trackControlButton.setSelected$Z(vis);
});

Clazz.newMeth(C$, 'positionForFrame',  function () {
if (this.positioned) return;
if (!this.frame.isVisible$()) return;
var p=this.frame.getLocationOnScreen$();
this.setLocation$I$I(p.x + (this.frame.getWidth$()/2|0) - (this.getWidth$()/2|0), p.y + 90);
this.positioned=true;
}, p$1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "tab":
var p=e.getNewValue$();
if (p == null ) return;
if (p.getID$() === this.panelID  && !this.frame.isRemovingAll$() ) {
this.setVisible$Z(this.wasVisible);
} else {
var vis=this.wasVisible;
this.setVisible$Z(false);
this.wasVisible=vis;
}break;
case "track":
if (e.getOldValue$() != null ) {
(e.getOldValue$()).removeListenerNCF$java_beans_PropertyChangeListener(this);
}break;
case "clear":
for (var t, $t = $I$(8).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removeListenerNCF$java_beans_PropertyChangeListener(this);
}
return;
}
this.refresh$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return false;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.panelID == null ) return;
this.setTitle$S($I$(9).getString$S("TrackControl.Name"));
if (Clazz.instanceOf($I$(10).pointmassOffIcon, "org.opensourcephysics.display.ResizableIcon")) {
var icon=$I$(10).pointmassOffIcon;
if (Clazz.instanceOf(icon.getBaseIcon$(), "javax.swing.ImageIcon")) {
var imgIcon=icon.getBaseIcon$();
this.setIconImage$java_awt_Image(imgIcon.getImage$());
};}var perbar=4;
var tracks=this.frame.getTrackerPanelForID$Integer(this.panelID).getUserTracks$();
for (var i=0; i < this.trackBars.length; i++) {
this.trackBars[i].removeAll$();
}
var barCount=1 + (tracks.size$()/perbar|0);
this.trackBarPanel.removeAll$();
this.trackBarPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11,1).c$$I$I,[barCount, 1]));
if (barCount > this.trackBars.length) {
var newBars=Clazz.array($I$(2), [barCount]);
System.arraycopy$O$I$O$I$I(this.trackBars, 0, newBars, 0, this.trackBars.length);
for (var i=this.trackBars.length; i < barCount; i++) {
newBars[i]=Clazz.new_($I$(2,1));
newBars[i].setFloatable$Z(false);
}
this.trackBars=newBars;
}for (var i=0; i < barCount; i++) {
this.trackBarPanel.add$java_awt_Component(this.trackBars[i]);
}
this.newTrackButton.setText$S($I$(9).getString$S("TMenuBar.MenuItem.NewTrack"));
this.newTrackButton.setToolTipText$S($I$(9).getString$S("TrackControl.Button.NewTrack.ToolTip"));
$I$(12).setFont$javax_swing_AbstractButton(this.newTrackButton);
this.trackBars[0].add$java_awt_Component(this.newTrackButton);
this.trackCount=0;
var track=null;
var it=tracks.iterator$();
while (it.hasNext$()){
var barIndex=((this.trackCount + 1)/perbar|0);
track=it.next$();
track.removeListenerNCF$java_beans_PropertyChangeListener(this);
track.addListenerNCF$java_beans_PropertyChangeListener(this);
var button=Clazz.new_($I$(6,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[track]);
button.addKeyListener$java_awt_event_KeyListener(this.shiftKeyListener);
this.trackBars[barIndex].add$java_awt_Component(button);
++this.trackCount;
}
$I$(12).setFonts$java_awt_Container(this);
this.pack$();
$I$(13).repaintT$java_awt_Component(this);
if (this.frame != null ) {
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
this.frame.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.panelID != null ) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.removeListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
if (this.frame != null ) {
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
this.frame.removeComponentListener$java_awt_event_ComponentListener(this.myFollower);
this.myFollower=null;
}C$.panelTrackcontrols.remove$O(this.panelID);
trackerPanel.trackControl=null;
var tracks=trackerPanel.getTracks$();
for (var i=tracks.size$(); --i >= 0; ) {
tracks.get$I(i).removeListenerNCF$java_beans_PropertyChangeListener(this);
}
trackerPanel=null;
}C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(14).finalized$O(this);
});

C$.$static$=function(){C$.$static$=0;
C$.panelProps=Clazz.array(String, -1, ["track", "clear", "mass", "footprint", "data"]);
C$.panelTrackcontrols=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
