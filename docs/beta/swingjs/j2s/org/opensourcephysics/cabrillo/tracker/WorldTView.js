(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.awt.Rectangle','org.opensourcephysics.cabrillo.tracker.WorldTView','org.opensourcephysics.media.core.TPoint','java.awt.Dimension','org.opensourcephysics.display.OSPRuntime','java.awt.event.MouseAdapter','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.tools.FontSizer','javax.swing.AbstractAction','javax.swing.JMenuItem',['org.opensourcephysics.display.DrawingPanel','.PopupmenuListener'],['org.opensourcephysics.cabrillo.tracker.TrackerIO','.ComponentImage'],'org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.PencilScene','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.TViewChooser','org.opensourcephysics.cabrillo.tracker.Tracker','java.awt.Point',['org.opensourcephysics.cabrillo.tracker.WorldTView','.WorldPanel'],'javax.swing.JPopupMenu','org.opensourcephysics.cabrillo.tracker.TButton','javax.swing.JLabel','javax.swing.BorderFactory','javax.swing.Box','java.awt.Cursor','org.opensourcephysics.cabrillo.tracker.TToolBar','javax.swing.SwingUtilities','org.opensourcephysics.cabrillo.tracker.TrackerPanel',['org.opensourcephysics.cabrillo.tracker.WorldTView','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WorldTView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.ZoomTView');
C$.$classes$=[['WorldPanel',8],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['worldPanelID','Integer','worldViewLabel','javax.swing.JLabel','zoomButton','org.opensourcephysics.cabrillo.tracker.TButton','zoomAction','javax.swing.AbstractAction']]
,['O',['WORLDVIEW_ICON','javax.swing.Icon','panelProps','String[]','viewLoc','java.awt.Point','+mousePtRelativeToViewRect']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this,[Clazz.new_($I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[panel])]);C$.$init$.apply(this);
var worldPanel=C$.superclazz.prototype.getTrackerPanel$.apply(this, []);
this.worldPanelID=worldPanel.getID$();
worldPanel.view=this;
var zoomIcon=$I$(17).getResourceIcon$S$Z("zoom.gif", true);
this.zoomAction=((P$.WorldTView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "WorldTView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var rect=this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'].scrollPane.getViewport$().getViewRect$();
this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'].zoomCenter.setLocation$I$I(rect.x + (rect.width/2|0), rect.y + (rect.height/2|0));
var name=e.getActionCommand$();
if (name.equals$O("auto")) {
p$1.worldPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'], []).setMagnification$D(-1);
} else {
var mag=Double.parseDouble$S(name);
p$1.worldPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'], []).setMagnification$D(mag / 100);
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.WorldTView$1));
this.zoomButton=((P$.WorldTView$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "WorldTView$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'].refreshZoomPopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'], [Clazz.new_($I$(20,1))]);
});
})()
), Clazz.new_($I$(21,1).c$$javax_swing_Icon,[this, null, zoomIcon],P$.WorldTView$2));
this.worldViewLabel=Clazz.new_($I$(22,1));
this.worldViewLabel.setBorder$javax_swing_border_Border($I$(23).createEmptyBorder$I$I$I$I(2, 6, 2, 0));
this.toolbarComponents.add$O(this.worldViewLabel);
this.toolbarComponents.add$O($I$(24).createHorizontalStrut$I(8));
this.toolbarComponents.add$O(this.zoomButton);
}, 1);

Clazz.newMeth(C$, 'doResized$',  function () {
if (!C$.superclazz.prototype.doResized$.apply(this, [])) return false;
var trackerPanel=p$1.worldPanel.apply(this, []).getMainPanel$();
trackerPanel.eraseAll$();
this.refreshZoomButton$();
$I$(13,"repaintT$java_awt_Component",[p$1.worldPanel.apply(this, [])]);
return true;
});

Clazz.newMeth(C$, 'doMouseDragged$java_awt_event_MouseEvent',  function (e) {
var rect=this.scrollPane.getViewport$().getViewRect$();
var dim=Clazz.new_($I$(4,1));
this.scrollPane.getViewport$().getView$().getSize$java_awt_Dimension(dim);
var dx=C$.mousePtRelativeToViewRect.x - e.getPoint$().x + rect.x;
var dy=C$.mousePtRelativeToViewRect.y - e.getPoint$().y + rect.y;
if (e.isAltDown$()) {
this.zoomCenter.setLocation$java_awt_Point(e.getPoint$());
var zoomed=false;
if (dy - dx > 4) {
this.zoomIn$Z(true);
zoomed=true;
} else if (dx - dy > 4) {
this.zoomOut$Z(true);
zoomed=true;
}if (zoomed) {
C$.viewLoc.setLocation$java_awt_Point(rect.getLocation$());
C$.mousePtRelativeToViewRect.setLocation$I$I(e.getPoint$().x - rect.x, e.getPoint$().y - rect.y);
}return;
}var x=Math.max(0, C$.viewLoc.x + dx);
x=Math.min(x, dim.width - rect.width);
var y=Math.max(0, C$.viewLoc.y + dy);
y=Math.min(y, dim.height - rect.height);
if (x != rect.x || y != rect.y ) {
p$1.worldPanel.apply(this, []).setMouseCursor$java_awt_Cursor($I$(17).grabCursor);
rect.x=x;
rect.y=y;
p$1.worldPanel.apply(this, []).scrollRectToVisible$java_awt_Rectangle(rect);
} else {
C$.viewLoc.setLocation$java_awt_Point(rect.getLocation$());
C$.mousePtRelativeToViewRect.setLocation$I$I(e.getPoint$().x - rect.x, e.getPoint$().y - rect.y);
}});

Clazz.newMeth(C$, 'doMouseReleased$java_awt_event_MouseEvent',  function (e) {
p$1.worldPanel.apply(this, []).setMouseCursor$java_awt_Cursor($I$(25).getDefaultCursor$());
});

Clazz.newMeth(C$, 'doMousePressed$java_awt_event_MouseEvent',  function (e) {
this.zoomCenter.setLocation$java_awt_Point(e.getPoint$());
var rect=this.scrollPane.getViewport$().getViewRect$();
p$1.worldPanel.apply(this, []).setMouseCursor$java_awt_Cursor($I$(17).grabCursor);
C$.viewLoc.setLocation$java_awt_Point(rect.getLocation$());
C$.mousePtRelativeToViewRect.setLocation$I$I(e.getPoint$().x - rect.x, e.getPoint$().y - rect.y);
});

Clazz.newMeth(C$, 'refreshZoomButton$',  function () {
var runner=((P$.WorldTView$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "WorldTView$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (p$1.worldPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'], []) == null ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'].scrollPane.getViewport$().setView$java_awt_Component(p$1.worldPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'], []));
var full=p$1.worldPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'], []).getFullSize$();
var dim=p$1.worldPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'], []).getSize$();
var zoom=Math.min((100 * dim.height/full.height|0), (100 * dim.width/full.width|0));
this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'].zoomButton.setText$S($I$(26).zoomFormat.format$D(zoom) + "%");
if (zoom > 105 * p$1.worldPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'], []).getMagnification$() ) p$1.worldPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView'], []).setMagnification$D(-1);
});
})()
), Clazz.new_(P$.WorldTView$3.$init$,[this, null]));
$I$(27).invokeLater$Runnable(runner);
});

Clazz.newMeth(C$, 'refreshZoomPopup$javax_swing_JPopupMenu',  function (popup) {
popup.removeAll$();
var item=Clazz.new_([$I$(7).getString$S("MainTView.Popup.MenuItem.ToFit")],$I$(10,1).c$$S);
item.setActionCommand$S("auto");
item.addActionListener$java_awt_event_ActionListener(this.zoomAction);
popup.add$javax_swing_JMenuItem(item);
popup.addSeparator$();
for (var i=0, nz=$I$(28).ZOOM_LEVELS.length; i < nz; i++) {
if ($I$(28).ZOOM_LEVELS[i] > 8.0  || $I$(28).ZOOM_LEVELS[i] < 0.25  ) continue;
var n=((100 * $I$(28).ZOOM_LEVELS[i])|0);
var m=String.valueOf$I(n);
item=Clazz.new_($I$(10,1).c$$S,[m + "%"]);
item.setActionCommand$S(m);
item.addActionListener$java_awt_event_ActionListener(this.zoomAction);
popup.add$javax_swing_JMenuItem(item);
}
$I$(8,"setFonts$O$I",[popup, $I$(8).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'render$java_awt_image_BufferedImage',  function (image) {
return p$1.worldPanel.apply(this, []).render$java_awt_image_BufferedImage(image);
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (!this.isViewPaneVisible$()) return;
this.worldViewLabel.setText$S($I$(7).getString$S("TFrame.View.World"));
p$1.worldPanel.apply(this, []).refresh$();
});

Clazz.newMeth(C$, 'init$',  function () {
});

Clazz.newMeth(C$, 'cleanup$',  function () {
C$.superclazz.prototype.cleanup$.apply(this, []);
if (p$1.worldPanel.apply(this, []) != null ) p$1.worldPanel.apply(this, []).cleanup$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
p$1.worldPanel.apply(this, []).dispose$();
this.worldPanelID=null;
});

Clazz.newMeth(C$, 'isCustomState$',  function () {
var dim=p$1.worldPanel.apply(this, []).getPreferredSize$();
return dim.width > 1;
});

Clazz.newMeth(C$, 'getTrackerPanel$',  function () {
return p$1.worldPanel.apply(this, []).getMainPanel$();
});

Clazz.newMeth(C$, 'getViewName$',  function () {
return $I$(7).getString$S("TFrame.View.World");
});

Clazz.newMeth(C$, 'getViewIcon$',  function () {
return C$.WORLDVIEW_ICON;
});

Clazz.newMeth(C$, 'getViewType$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getToolBarComponents$',  function () {
this.worldViewLabel.setText$S($I$(7).getString$S("TFrame.View.World"));
this.refreshZoomButton$();
return C$.superclazz.prototype.getToolBarComponents$.apply(this, []);
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.scrollPane.getViewport$().getExtentSize$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
p$1.propertyChangeImpl$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'propertyChangeImpl$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "track":
if (e.getOldValue$() != null ) {
var removed=e.getOldValue$();
removed.removePropertyChangeListener$S$java_beans_PropertyChangeListener("color", this);
removed.removePropertyChangeListener$S$java_beans_PropertyChangeListener("visible", this);
}this.refresh$();
break;
case "clear":
for (var track, $track = $I$(15).getValues$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("color", this);
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("visible", this);
}
this.refresh$();
break;
case "stepnumber":
case "image":
case "video":
case "videovisible":
case "color":
case "visible":
$I$(13,"repaintT$java_awt_Component",[p$1.worldPanel.apply(this, [])]);
break;
case "transform":
case "size":
case "data":
this.refresh$();
break;
case "magnification":
break;
default:
System.err.println$S("WoldTView.propertyChange " + e.getPropertyName$() + " " + e.getSource$() );
break;
}
}, p$1);

Clazz.newMeth(C$, 'worldPanel',  function () {
return this.frame.getTrackerPanelForID$Integer(this.worldPanelID);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(29,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.WORLDVIEW_ICON=$I$(17).getResourceIcon$S$Z("axes.gif", true);
C$.panelProps=Clazz.array(String, -1, ["size", "stepnumber", "video", "image", "videovisible", "magnification", "transform", "data"]);
C$.viewLoc=Clazz.new_($I$(18,1));
C$.mousePtRelativeToViewRect=Clazz.new_($I$(18,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.WorldTView, "WorldPanel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TrackerPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.zoomFactor=0.25;
this.scrollRect=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['D',['zoomFactor'],'O',['copyImageItem','javax.swing.JMenuItem','+printItem','+helpItem','mainPanelID','Integer','scrollRect','java.awt.Rectangle','view','org.opensourcephysics.cabrillo.tracker.WorldTView']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this,[panel.frame, panel]);C$.$init$.apply(this);
this.mainPanelID=panel.getID$();
this.cleanup$();
var trackerPanel=this.getMainPanel$();
trackerPanel.addListeners$SA$java_beans_PropertyChangeListener($I$(2).panelProps, this);
for (var track, $track = trackerPanel.getTracks$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.addPropertyChangeListener$S$java_beans_PropertyChangeListener("color", this);
}
this.setPlayerVisible$Z(false);
this.setDrawingInImageSpace$Z(false);
this.setShowCoordinates$Z(false);
}, 1);

Clazz.newMeth(C$, 'setMagnification$D',  function (magnification) {
if (magnification == 0  || Double.isNaN$D(magnification) ) return;
var prevSize=this.getPreferredSize$();
var p1=Clazz.new_($I$(3,1).c$$D$D,[0, 0]).getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this);
if (prevSize.width == 1 && prevSize.height == 1 ) {
var w=this.getImageWidth$();
var h=this.getImageHeight$();
var p2=Clazz.new_($I$(3,1).c$$D$D,[w, h]).getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this);
prevSize.width=p2.x - p1.x;
prevSize.height=p2.y - p1.y;
}var d;
if (magnification < 0 ) {
d=Clazz.new_($I$(4,1).c$$I$I,[1, 1]);
} else {
this.zoom=Math.min(Math.max(magnification, 0.1), 20.0);
var w=((this.imageWidth * this.zoom)|0);
var h=((this.imageHeight * this.zoom)|0);
d=Clazz.new_($I$(4,1).c$$I$I,[w, h]);
}this.setPreferredSize$java_awt_Dimension(d);
if (this.view != null ) {
this.view.scrollPane.revalidate$();
this.view.scrollToZoomCenter$java_awt_Dimension$java_awt_Dimension$java_awt_Point(this.getPreferredSize$(), prevSize, p1);
this.eraseAll$();
}});

Clazz.newMeth(C$, 'getFullSize$',  function () {
var w=(this.getImageWidth$()|0);
var h=(this.getImageHeight$()|0);
return Clazz.new_($I$(4,1).c$$I$I,[w, h]);
});

Clazz.newMeth(C$, 'setGUI$',  function () {
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[1, 1]));
});

Clazz.newMeth(C$, 'setMouseListeners$',  function () {
this.addMouseListener$java_awt_event_MouseListener(((P$.WorldTView$WorldPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "WorldTView$WorldPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(5).isPopupTrigger$java_awt_event_InputEvent(e)) {
this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel'].createWorldPopup$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel'].popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel'], e.getX$(), e.getY$());
}});
})()
), Clazz.new_($I$(6,1),[this, null],P$.WorldTView$WorldPanel$1)));
this.setInteractiveMouseHandler$org_opensourcephysics_display_InteractiveMouseHandler(null);
});

Clazz.newMeth(C$, 'createWorldPopup$',  function () {
this.getPopup$().removeAll$();
this.getMenuItems$();
var trackerPanel=this.getMainPanel$();
if (trackerPanel.isEnabled$S("edit.copyImage")) {
this.copyImageItem.setText$S($I$(7).getString$S("TMenuBar.Menu.CopyImage"));
this.popup.add$javax_swing_JMenuItem(this.copyImageItem);
this.popup.add$javax_swing_JMenuItem(this.snapshotItem);
}if (trackerPanel.isEnabled$S("file.print")) {
if (this.popup.getComponentCount$() > 0) this.popup.addSeparator$();
this.printItem.setText$S($I$(7).getString$S("TActions.Action.Print"));
this.popup.add$javax_swing_JMenuItem(this.printItem);
}if (this.popup.getComponentCount$() > 0) this.popup.addSeparator$();
this.helpItem.setText$S($I$(7).getString$S("Tracker.Popup.MenuItem.Help"));
this.popup.add$javax_swing_JMenuItem(this.helpItem);
$I$(8,"setFonts$O$I",[this.popup, $I$(8).getLevel$()]);
});

Clazz.newMeth(C$, 'getMenuItems$',  function () {
if (this.copyImageItem != null ) return;
var copyImageAction=((P$.WorldTView$WorldPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "WorldTView$WorldPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel'].copyImage$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel'], ["clipboard"]);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.WorldTView$WorldPanel$2));
this.copyImageItem=Clazz.new_($I$(10,1).c$$javax_swing_Action,[copyImageAction]);
var printAction=((P$.WorldTView$WorldPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "WorldTView$WorldPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel'].copyImage$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel'], ["print"]);
});
})()
), Clazz.new_([this, null, $I$(7).getString$S("TActions.Action.Print")],$I$(9,1).c$$S,P$.WorldTView$WorldPanel$3));
this.printItem=Clazz.new_($I$(10,1).c$$javax_swing_Action,[printAction]);
this.helpItem=Clazz.new_($I$(10,1));
this.helpItem.addActionListener$java_awt_event_ActionListener(((P$.WorldTView$WorldPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "WorldTView$WorldPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel'].frame != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel'].frame.showHelp$S$I("worldview", 0);
}});
})()
), Clazz.new_(P$.WorldTView$WorldPanel$4.$init$,[this, null])));
this.snapshotItem=this.getSnapshotItem$java_awt_event_ActionListener(Clazz.new_($I$(11,1),[this, null]));
});

Clazz.newMeth(C$, 'copyImage$S',  function (where) {
var img=Clazz.new_($I$(12,1).c$$java_awt_Component,[this]);
switch (where) {
case "clipboard":
img.copyToClipboard$();
break;
case "print":
img.print$();
break;
}
});

Clazz.newMeth(C$, 'refresh$',  function () {
var trackerPanel=this.getMainPanel$();
var axes=trackerPanel.getAxes$();
if (axes != null ) {
axes.updateListenerVisible$java_beans_PropertyChangeListener(this);
}if (!trackerPanel.calibrationTools.isEmpty$()) {
for (var next, $next = trackerPanel.getTracks$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (trackerPanel.calibrationTools.contains$O(next)) {
next.updateListenerVisible$java_beans_PropertyChangeListener(this);
}}
}var it=this.getDrawables$().iterator$();
while (it.hasNext$()){
var next=it.next$();
if (Clazz.instanceOf(next, "org.opensourcephysics.cabrillo.tracker.TTrack")) {
var track=next;
track.erase$Integer(this.panelID);
}}
$I$(13).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'getMainPanel$',  function () {
return this.frame.getTrackerPanelForID$Integer(this.mainPanelID);
});

Clazz.newMeth(C$, 'getSnapPoint$',  function () {
return this.getMainPanel$().getSnapPoint$();
});

Clazz.newMeth(C$, 'getSelectedTrack$',  function () {
return this.getMainPanel$().getSelectedTrack$();
});

Clazz.newMeth(C$, 'setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (this.mainPanelID != null ) this.getMainPanel$().setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
if (this.mainPanelID == null ) {
return C$.superclazz.prototype.getDrawables$.apply(this, []);
}var trackerPanel=this.getMainPanel$();
var list=trackerPanel.getDrawables$();
list.addAll$java_util_Collection(C$.superclazz.prototype.getDrawables$.apply(this, []));
list.removeAll$java_util_Collection(trackerPanel.getDrawablesTemp$Class(Clazz.getClass($I$(14))));
trackerPanel.clearTemp$();
var mat=trackerPanel.getMat$();
if (mat != null  && list.get$I(0) !== mat  ) {
list.remove$O(mat);
list.add$I$O(0, mat);
}return list;
});

Clazz.newMeth(C$, 'getPlayer$',  function () {
return (this.mainPanelID == null  ? C$.superclazz.prototype.getPlayer$.apply(this, []) : this.getMainPanel$().getPlayer$());
});

Clazz.newMeth(C$, 'getCoords$',  function () {
return (this.mainPanelID == null  ? C$.superclazz.prototype.getCoords$.apply(this, []) : this.getMainPanel$().getCoords$());
});

Clazz.newMeth(C$, 'unTracked$',  function () {
return false;
});

Clazz.newMeth(C$, 'getInteractive$',  function () {
return null;
});

Clazz.newMeth(C$, 'cleanup$',  function () {
if (this.mainPanelID != null ) {
this.getMainPanel$().removeListeners$SA$java_beans_PropertyChangeListener($I$(2).panelProps, this);
for (var t, $t = $I$(15).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removePropertyChangeListener$S$java_beans_PropertyChangeListener("color", this);
}
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (this.view != null ) p$1.propertyChangeImpl$java_beans_PropertyChangeEvent.apply(this.view, [e]);
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.cleanup$();
this.title=this.getMainPanel$().getTitle$();
if (this.mainPanelID != null ) {
var trackerPanel=this.getMainPanel$();
trackerPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("clear", this);
trackerPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("function", this);
this.mainPanelID=null;
}this.frame.deallocatePanelID$Integer(this.panelID);
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'getWorldView$',  function () {
return this.view;
});

Clazz.newMeth(C$, 'isActive$',  function () {
if (this.view == null ) return false;
return ($I$(16).isSelectedView$org_opensourcephysics_cabrillo_tracker_TView(this.view) && this.view.isViewPaneVisible$() );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.WorldTView, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var view=obj;
control.setValue$S$D("zoom", p$1.worldPanel.apply(view, []).getMagnification$());
var rect=view.scrollPane.getViewport$().getViewRect$();
var rectData=Clazz.array(Integer.TYPE, -1, [rect.x, rect.y, rect.width, rect.height]);
control.setValue$S$O("viewrect", rectData);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var view=obj;
if (control.getPropertyNamesRaw$().contains$O("zoom")) {
p$1.worldPanel.apply(view, []).setMagnification$D(control.getDouble$S("zoom"));
var d=control.getObject$S("viewrect");
var rect=Clazz.new_($I$(1,1).c$$I$I$I$I,[d[0], d[1], d[2], d[3]]);
p$1.worldPanel.apply(view, []).scrollRectToVisible$java_awt_Rectangle(rect);
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
