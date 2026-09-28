(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Rectangle','java.awt.Point','java.awt.Dimension','java.awt.event.ComponentAdapter','java.awt.BorderLayout','javax.swing.JScrollPane','javax.swing.SwingUtilities','java.awt.event.MouseAdapter','java.awt.event.KeyAdapter','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.PointMass','java.awt.Cursor','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.TrackerPanel','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.media.core.TPoint']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZoomTView", null, 'org.opensourcephysics.cabrillo.tracker.TView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scrollRect=Clazz.new_($I$(1,1));
this.zoomCenter=Clazz.new_($I$(2,1));
this.lastDim=Clazz.new_($I$(3,1));
this.resizeListener=((P$.ZoomTView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ZoomTView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].doResized$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'], []);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.ZoomTView$1));
},1);

C$.$fields$=[['O',['scrollPane','javax.swing.JScrollPane','scrollRect','java.awt.Rectangle','zoomCenter','java.awt.Point','mouseAdapter','java.awt.event.MouseAdapter','keyAdapter','java.awt.event.KeyAdapter','dim','java.awt.Dimension','+lastDim','resizeListener','java.awt.event.ComponentAdapter']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this,[panel]);C$.$init$.apply(this);
this.init$();
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
this.scrollPane=Clazz.new_($I$(6,1));
this.scrollPane.addComponentListener$java_awt_event_ComponentListener(this.resizeListener);
panel.addComponentListener$java_awt_event_ComponentListener(this.resizeListener);
$I$(7).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.scrollPane, null);
this.add$java_awt_Component$O(this.scrollPane, "Center");
panel.setPlayerVisible$Z(false);
this.scrollPane.setViewportView$java_awt_Component(panel);
panel.setScrollPane$javax_swing_JScrollPane(this.scrollPane);
this.mouseAdapter=((P$.ZoomTView$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ZoomTView$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].doMousePressed$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'], [e]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].doMouseReleased$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'], [e]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].doMouseDragged$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'], [e]);
});

Clazz.newMeth(C$, 'mouseWheelMoved$java_awt_event_MouseWheelEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].doMouseWheel$java_awt_event_MouseWheelEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'], [e]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.ZoomTView$2));
this.keyAdapter=((P$.ZoomTView$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ZoomTView$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].doKeyPressed$java_awt_event_KeyEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'], [e]);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].doKeyRelease$java_awt_event_KeyEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'], [e]);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.ZoomTView$3));
panel.addMouseListener$java_awt_event_MouseListener(this.mouseAdapter);
panel.addMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseAdapter);
panel.addMouseWheelListener$java_awt_event_MouseWheelListener(this.mouseAdapter);
panel.addKeyListener$java_awt_event_KeyListener(this.keyAdapter);
}, 1);

Clazz.newMeth(C$, 'doKeyPressed$java_awt_event_KeyEvent',  function (e) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var z=trackerPanel.getToolBar$Z(true).zoomButton;
var d=trackerPanel.getSelectedPoint$() == null  ? 10 : 0;
var rect=this.scrollPane.getViewport$().getViewRect$();
switch (e.getKeyCode$()) {
case 90:
if (!e.isControlDown$()) z.setSelected$Z(true);
break;
case 18:
break;
case 33:
if (!trackerPanel.getPlayer$().isEnabled$()) return;
if (e.isShiftDown$()) {
var n=trackerPanel.getPlayer$().getStepNumber$() - 5;
trackerPanel.getPlayer$().setStepNumber$I(n);
} else trackerPanel.getPlayer$().back$();
break;
case 34:
if (!trackerPanel.getPlayer$().isEnabled$()) return;
if (e.isShiftDown$()) {
var n=trackerPanel.getPlayer$().getStepNumber$() + 5;
trackerPanel.getPlayer$().setStepNumber$I(n);
} else trackerPanel.getPlayer$().step$();
break;
case 36:
if (!trackerPanel.getPlayer$().isEnabled$()) return;
trackerPanel.getPlayer$().setStepNumber$I(0);
break;
case 35:
if (!trackerPanel.getPlayer$().isEnabled$()) return;
var clip=trackerPanel.getPlayer$().getVideoClip$();
trackerPanel.getPlayer$().setStepNumber$I(clip.getStepCount$() - 1);
break;
case 38:
rect.y-=d;
trackerPanel.scrollRectToVisible$java_awt_Rectangle(rect);
break;
case 40:
rect.y+=d;
trackerPanel.scrollRectToVisible$java_awt_Rectangle(rect);
break;
case 39:
rect.x+=d;
trackerPanel.scrollRectToVisible$java_awt_Rectangle(rect);
break;
case 37:
rect.x-=d;
trackerPanel.scrollRectToVisible$java_awt_Rectangle(rect);
break;
case 65:
if ($I$(10).enableAutofill && !$I$(11).isAutoKeyDown ) {
$I$(11).isAutoKeyDown=true;
var track=trackerPanel.getSelectedTrack$();
if (track != null  && track.ttype == 5 ) {
var m=trackerPanel.getSelectedTrack$();
m.setAutoFill$Z(!m.isAutofill);
trackerPanel.getSelectedTrack$().repaint$Integer(this.panelID);
}}break;
}
if (z.isSelected$()) {
trackerPanel.setCursor$java_awt_Cursor(e.isAltDown$() ? $I$(10).getZoomOutCursor$() : $I$(10).getZoomInCursor$());
}});

Clazz.newMeth(C$, 'doKeyRelease$java_awt_event_KeyEvent',  function (e) {
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var z=panel.getToolBar$Z(true).zoomButton;
if (e.getKeyCode$() == 90) {
z.setSelected$Z(false);
panel.setCursor$java_awt_Cursor($I$(12).getDefaultCursor$());
}if (e.getKeyCode$() == 65) {
$I$(11).isAutoKeyDown=false;
}if (z.isSelected$()) {
var runner=((P$.ZoomTView$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ZoomTView$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.panel.setCursor$java_awt_Cursor(this.$finals$.e.isAltDown$() ? $I$(10).getZoomOutCursor$() : $I$(10).getZoomInCursor$());
});
})()
), Clazz.new_(P$.ZoomTView$4.$init$,[this, {e:e,panel:panel}]));
$I$(7).invokeLater$Runnable(runner);
}});

Clazz.newMeth(C$, 'doMousePressed$java_awt_event_MouseEvent',  function (e) {
this.zoomCenter.setLocation$java_awt_Point(e.getPoint$());
});

Clazz.newMeth(C$, 'doMouseReleased$java_awt_event_MouseEvent',  function (e) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if ($I$(10,"isZoomOutCursor$java_awt_Cursor",[trackerPanel.getCursor$()])) {
this.zoomOut$Z(false);
} else if ($I$(10,"isZoomInCursor$java_awt_Cursor",[trackerPanel.getCursor$()])) {
this.zoomIn$Z(false);
}});

Clazz.newMeth(C$, 'doMouseDragged$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'doMouseWheel$java_awt_event_MouseWheelEvent',  function (e) {
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var invert=e.isControlDown$() && !e.isShiftDown$() ;
var zoom=(!$I$(10).scrubMouseWheel && !invert ) || ($I$(10).scrubMouseWheel && invert ) ;
if (zoom) this.zoomCenter.setLocation$java_awt_Point(e.getPoint$());
var n=panel.getPlayer$().getStepNumber$();
if (e.getWheelRotation$() > 0) {
if (zoom) this.zoomOut$Z(true);
 else {
if (e.isAltDown$()) panel.getPlayer$().setStepNumber$I(n - 10);
 else panel.getPlayer$().back$();
}} else {
if (zoom) this.zoomIn$Z(true);
 else {
if (e.isAltDown$()) panel.getPlayer$().setStepNumber$I(n + 10);
 else panel.getPlayer$().step$();
}}});

Clazz.newMeth(C$, 'doResized$',  function () {
if (!this.getTopLevelAncestor$().isVisible$()) return false;
this.dim=this.scrollPane.getViewport$().getView$().getSize$java_awt_Dimension(this.dim);
if (this.dim.equals$O(this.lastDim)) return false;
this.lastDim.setSize$java_awt_Dimension(this.dim);
return true;
});

Clazz.newMeth(C$, 'getPopupMenu$',  function () {
if (!$I$(10).allowMenuRefresh) return null;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if ($I$(10,"isZoomInCursor$java_awt_Cursor",[trackerPanel.getCursor$()]) || $I$(10,"isZoomOutCursor$java_awt_Cursor",[trackerPanel.getCursor$()]) ) {
return null;
}return trackerPanel.updateMainPopup$();
});

Clazz.newMeth(C$, 'setZoomCenter$I$I',  function (x, y) {
this.zoomCenter.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'scrollToZoomCenter$java_awt_Dimension$java_awt_Dimension$java_awt_Point',  function (size, prevSize, panelLoc) {
if (this.zoomCenter.x == 0 && this.zoomCenter.y == 0 ) return;
var xRatio=size.getWidth$() / prevSize.getWidth$();
var yRatio=size.getHeight$() / prevSize.getHeight$();
var rect=this.scrollPane.getViewport$().getViewRect$();
if (prevSize.width < rect.width || prevSize.height < rect.height ) {
rect.setLocation$I$I(((-xRatio * panelLoc.x)|0), ((-yRatio * panelLoc.y)|0));
}var x=rect.x + (xRatio - 1) * this.zoomCenter.getX$();
var y=rect.y + (yRatio - 1) * this.zoomCenter.getY$();
rect.setLocation$I$I((x|0), (y|0));
this.scrollRect.setBounds$java_awt_Rectangle(rect);
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.scrollRectToVisible$java_awt_Rectangle(this.scrollRect);
var runner=((P$.ZoomTView$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ZoomTView$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].panelID);
var rect=this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].scrollPane.getViewport$().getViewRect$();
if (!rect.equals$O(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].scrollRect)) {
panel.scrollRectToVisible$java_awt_Rectangle(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].scrollRect);
}panel.eraseAll$();
$I$(13).repaintT$java_awt_Component(panel);
this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'].refreshZoomButton$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ZoomTView'], []);
});
})()
), Clazz.new_(P$.ZoomTView$5.$init$,[this, null]));
$I$(7).invokeLater$Runnable(runner);
});

Clazz.newMeth(C$, 'refreshZoomButton$',  function () {
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (panel.getClass$() === Clazz.getClass($I$(14)) ) {
panel.getToolBar$Z(true).refreshZoomButton$();
}});

Clazz.newMeth(C$, 'refresh$',  function () {
this.init$();
});

Clazz.newMeth(C$, 'init$',  function () {
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
panel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
panel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("clear", this);
panel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
panel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("clear", this);
for (var track, $track = panel.getTracksTemp$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("color", this);
track.addPropertyChangeListener$S$java_beans_PropertyChangeListener("color", this);
}
panel.clearTemp$();
});

Clazz.newMeth(C$, 'cleanup$',  function () {
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
panel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
panel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("clear", this);
for (var t, $t = $I$(15).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removePropertyChangeListener$S$java_beans_PropertyChangeListener("color", this);
}
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.cleanup$();
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (trackerPanel != null ) {
trackerPanel.clearTemp$();
trackerPanel.removeMouseListener$java_awt_event_MouseListener(this.mouseAdapter);
trackerPanel.removeMouseWheelListener$java_awt_event_MouseWheelListener(this.mouseAdapter);
trackerPanel.removeKeyListener$java_awt_event_KeyListener(this.keyAdapter);
trackerPanel.setScrollPane$javax_swing_JScrollPane(null);
}this.mouseAdapter=null;
this.keyAdapter=null;
this.scrollPane.removeComponentListener$java_awt_event_ComponentListener(this.resizeListener);
this.resizeListener=null;
this.scrollPane.setViewportView$java_awt_Component(null);
this.scrollPane=null;
this.removeAll$();
trackerPanel=null;
});

Clazz.newMeth(C$, 'getTrackerPanel$',  function () {
return this.frame.getTrackerPanelForID$Integer(this.panelID);
});

Clazz.newMeth(C$, 'getViewName$',  function () {
return "";
});

Clazz.newMeth(C$, 'getViewIcon$',  function () {
return null;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "track":
case "clear":
this.refresh$();
break;
case "color":
$I$(13).repaintT$java_awt_Component(this);
break;
}
});

Clazz.newMeth(C$, 'zoomIn$Z',  function (step) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var zoomBox=trackerPanel.getZoomBox$();
var m1=trackerPanel.getMagnification$();
var m2=$I$(14).ZOOM_STEP * m1;
if (step) {
var dm=Math.sqrt($I$(14).ZOOM_STEP);
for (var i=0; i < $I$(14).ZOOM_LEVELS.length; i++) {
if ($I$(14).ZOOM_LEVELS[i] < m2 * dm  && $I$(14).ZOOM_LEVELS[i] > m2 / dm  ) {
m2=$I$(14).ZOOM_LEVELS[i];
break;
}}
} else if (!zoomBox.isDragged$()) {
for (var i=0; i < $I$(14).ZOOM_LEVELS.length; i++) {
if ($I$(14).ZOOM_LEVELS[i] >= m2  && $I$(14).ZOOM_LEVELS[i] < m2 * 2  ) {
m2=$I$(14).ZOOM_LEVELS[i];
break;
}}
if (m2 > $I$(14).ZOOM_LEVELS[$I$(14).ZOOM_LEVELS.length - 1] ) {
m2=20.0;
}} else {
var vRect=this.scrollPane.getViewport$().getViewRect$();
var zRect=zoomBox.reportZoom$();
var tDim=trackerPanel.getPreferredSize$();
var p1=Clazz.new_($I$(16,1).c$$D$D,[0, 0]).getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (tDim.width == 1 && tDim.height == 1 ) {
var w=trackerPanel.getImageWidth$();
var h=trackerPanel.getImageHeight$();
var p2=Clazz.new_($I$(16,1).c$$D$D,[w, h]).getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
tDim.width=p2.x - p1.x;
tDim.height=p2.y - p1.y;
}var tRect=Clazz.new_($I$(1,1).c$$I$I$I$I,[p1.x, p1.y, tDim.width, tDim.height]);
if (1.0 * vRect.width / tDim.width < 1 ) {
tRect.x=-vRect.x;
}if (1.0 * vRect.height / tDim.height < 1 ) {
tRect.y=-vRect.y;
}zRect=zRect.intersection$java_awt_Rectangle(tRect);
var fX=1.0 * vRect.width / zRect.width;
var fY=1.0 * vRect.height / zRect.height;
var xyRatio=fX / fY;
var factor=xyRatio < 1  ? fX : fY;
m2=m1 * factor;
var dm=1.011;
for (var i=0; i < $I$(14).ZOOM_LEVELS.length; i++) {
if ($I$(14).ZOOM_LEVELS[i] < m2 * dm  && $I$(14).ZOOM_LEVELS[i] > m2 / dm  ) {
m2=$I$(14).ZOOM_LEVELS[i];
factor=m2 / m1;
break;
}}
if (factor * tDim.width > vRect.width  || factor * tDim.height > vRect.height  ) {
if (xyRatio < 1 ) {
zRect.height=((zRect.height / xyRatio)|0);
zRect.y-=((0.5 * zRect.height * (1 - xyRatio) )|0);
zRect.y=Math.max(zRect.y, tRect.y);
zRect.y=Math.min(zRect.y, tRect.y + tRect.height - zRect.height);
} else {
zRect.width=((zRect.width * xyRatio)|0);
zRect.x-=((0.5 * zRect.width * (1 - 1 / xyRatio) )|0);
zRect.x=Math.max(zRect.x, tRect.x);
zRect.x=Math.min(zRect.x, tRect.x + tRect.width - zRect.width);
}var small=m1 * tDim.width < vRect.width  && m1 * tDim.height < vRect.height  ;
var d=small ? 0 : m1 * p1.x / (m2 - m1);
var x=m2 * zRect.x / (m2 - m1) + d;
d=small ? 0 : m1 * p1.y / (m2 - m1);
var y=m2 * zRect.y / (m2 - m1) + d;
this.zoomCenter.setLocation$D$D(x, y);
}}trackerPanel.setMagnification$D(m2);
});

Clazz.newMeth(C$, 'zoomOut$Z',  function (step) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var m1=trackerPanel.getMagnification$();
var m2=m1 / $I$(14).ZOOM_STEP;
if (step) {
var dm=Math.sqrt($I$(14).ZOOM_STEP);
for (var i=0; i < $I$(14).ZOOM_LEVELS.length; i++) {
if ($I$(14).ZOOM_LEVELS[i] < m2 * dm  && $I$(14).ZOOM_LEVELS[i] > m2 / dm  ) {
m2=$I$(14).ZOOM_LEVELS[i];
break;
}}
} else {
for (var i=0; i < $I$(14).ZOOM_LEVELS.length; i++) {
if ($I$(14).ZOOM_LEVELS[i] <= m2  && $I$(14).ZOOM_LEVELS[i] > m2 / 2  ) {
m2=$I$(14).ZOOM_LEVELS[i];
break;
}}
if (m2 < $I$(14).ZOOM_LEVELS[0] ) {
m2=0.1;
}}trackerPanel.setMagnification$D(m2);
});

Clazz.newMeth(C$, 'getViewType$',  function () {
return -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
