(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.display.OSPRuntime','java.awt.event.MouseAdapter','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.TTrack','javax.swing.JMenu']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TButton", null, 'javax.swing.JButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hidePopup=false;
this.context="track";
this.alignPopup=2;
},1);

C$.$fields$=[['Z',['hidePopup','alwaysShowBorder'],'I',['trackID','alignPopup'],'S',['context'],'O',['popup','javax.swing.JPopupMenu']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(false);
this.setBorderPainted$Z(false);
this.addMouseListener$java_awt_event_MouseListener(((P$.TButton$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TButton$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].isEnabled$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TButton'], [])) return;
this.b$['javax.swing.AbstractButton'].setBorderPainted$Z.apply(this.b$['javax.swing.AbstractButton'], [true]);
this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].hidePopup=this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].popup != null  && this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].popup.isVisible$() ;
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TButton'], []);
if ($I$(1).showHints && track != null   && track.tp != null  ) {
if (track.tp.getSelectedTrack$() === track ) track.tp.setMessage$S(track.getMessage$());
 else {
var s=track.getClass$().getSimpleName$() + " " + track.getName$() + " (" + $I$(2).getString$S("TTrack.Unselected.Hint") + ")" ;
track.tp.setMessage$S(s);
}}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].alwaysShowBorder) this.b$['javax.swing.AbstractButton'].setBorderPainted$Z.apply(this.b$['javax.swing.AbstractButton'], [false]);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TButton'], []);
if (track != null  && track.tp != null   && track !== track.tp.getSelectedTrack$()  ) {
track.tp.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
track.tp.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
track.tp.selectedSteps.clear$();
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].isEnabled$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TButton'], [])) return;
this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].popup=this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].getPopup$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TButton'], []);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].popup != null ) {
if (e.getClickCount$() == 2) this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].hidePopup=false;
if (this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].hidePopup) {
this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].hidePopup=false;
this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].popup.setVisible$Z(false);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].hidePopup=true;
var popupWidth=this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].popup.getPreferredSize$().width;
var offset=this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].alignPopup == 2 ? 0 : this.b$['javax.swing.JComponent'].getWidth$.apply(this.b$['javax.swing.JComponent'], []) - popupWidth;
this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.TButton'], offset, this.b$['javax.swing.JComponent'].getHeight$.apply(this.b$['javax.swing.JComponent'], []));
if ($I$(3).isJS && this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].alignPopup == 4 ) {
p$1.alignComponentRight$javax_swing_JComponent$javax_swing_JComponent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TButton'], [this.b$['org.opensourcephysics.cabrillo.tracker.TButton'].popup, this.b$['org.opensourcephysics.cabrillo.tracker.TButton']]);
}}}});
})()
), Clazz.new_($I$(4,1),[this, null],P$.TButton$1)));
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
C$.c$.apply(this, []);
this.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (icon) {
C$.c$.apply(this, []);
this.setIcon$javax_swing_Icon(icon);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon$javax_swing_Icon',  function (off, on) {
C$.c$.apply(this, []);
this.setIcons$javax_swing_Icon$javax_swing_Icon(off, on);
}, 1);

Clazz.newMeth(C$, 'setIcons$javax_swing_Icon$javax_swing_Icon',  function (off, on) {
C$.superclazz.prototype.setIcon$javax_swing_Icon.apply(this, [off]);
this.setSelectedIcon$javax_swing_Icon(on);
});

Clazz.newMeth(C$, 'setTrack$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (track == null ) {
this.trackID=-1;
this.setIcon$javax_swing_Icon(null);
this.setText$S(" ");
this.setToolTipText$S(null);
} else {
this.trackID=track.getID$();
this.setIcon$javax_swing_Icon(track.getIcon$I$I$S(21, 16, this.context));
this.setText$S(track.getName$S(this.context));
this.setToolTipText$S($I$(2).getString$S("TButton.Track.ToolTip") + " " + track.getName$S(this.context) );
$I$(5).setFont$javax_swing_AbstractButton(this);
}});

Clazz.newMeth(C$, 'alignComponentRight$javax_swing_JComponent$javax_swing_JComponent',  function (c, ref) {
$I$(3).jsutil.alignComponentRight$javax_swing_JComponent$javax_swing_JComponent$I(c, ref, 0);
}, p$1);

Clazz.newMeth(C$, 'getTrack$',  function () {
return $I$(6).getTrack$I(this.trackID);
});

Clazz.newMeth(C$, 'getPopup$',  function () {
var track=this.getTrack$();
if (track != null  && track.tp != null  ) {
var trackMenu=track.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu(track.tp, Clazz.new_($I$(7,1)));
$I$(5,"setFonts$O$I",[trackMenu, $I$(5).getLevel$()]);
return trackMenu.getPopupMenu$();
}return null;
});

Clazz.newMeth(C$, 'alwaysShowBorder$Z',  function (showBorder) {
this.alwaysShowBorder=showBorder;
this.setOpaque$Z(this.alwaysShowBorder);
this.setBorderPainted$Z(this.alwaysShowBorder);
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
