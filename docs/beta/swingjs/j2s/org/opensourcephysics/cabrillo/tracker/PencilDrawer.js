(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.HashMap','java.awt.BasicStroke','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.display.GUIUtils','java.awt.Point','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Color','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.PencilDrawing','java.util.Collections','org.opensourcephysics.cabrillo.tracker.PencilScene','org.opensourcephysics.cabrillo.tracker.PencilCaption','org.opensourcephysics.cabrillo.tracker.PencilControl','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PencilDrawer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.drawingsVisible=true;
this.scenes=Clazz.new_($I$(8,1));
this.color=C$.colors[0][0];
},1);

C$.$fields$=[['Z',['drawingsVisible'],'I',['style'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','newDrawing','org.opensourcephysics.cabrillo.tracker.PencilDrawing','scenes','java.util.ArrayList','color','java.awt.Color','drawingControl','org.opensourcephysics.cabrillo.tracker.PencilControl']]
,['O',['colors','java.awt.Color[][]','pencilCursor','java.awt.Cursor','lightStroke','java.awt.BasicStroke','+heavyStroke','panelDrawers','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
}, 1);

Clazz.newMeth(C$, 'getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var panelID=panel.getID$();
var drawer=C$.panelDrawers.get$O(panelID);
if (drawer == null ) {
drawer=Clazz.new_(C$.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[panel]);
C$.panelDrawers.put$O$O(panelID, drawer);
}return drawer;
}, 1);

Clazz.newMeth(C$, 'isDrawing$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var drawer=C$.getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
return drawer.drawingControl != null  && drawer.drawingControl.isVisible$() ;
}, 1);

Clazz.newMeth(C$, 'hasDrawings$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var drawer=C$.panelDrawers.get$O(panel.getID$());
if (drawer == null  || drawer.scenes.isEmpty$() ) return false;
for (var scene, $scene = drawer.scenes.iterator$(); $scene.hasNext$()&&((scene=($scene.next$())),1);) {
if (!scene.getDrawings$().isEmpty$()) return true;
if (!"".equals$O(scene.getCaption$().getText$())) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'dispose$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var drawer=C$.panelDrawers.get$O(panel.getID$());
if (drawer != null ) {
drawer.dispose$();
C$.panelDrawers.remove$O(panel.getID$());
}}, 1);

Clazz.newMeth(C$, 'areDrawingsVisible$',  function () {
return this.drawingsVisible;
});

Clazz.newMeth(C$, 'setDrawingsVisible$Z$Z',  function (vis, andRepaint) {
this.drawingsVisible=vis;
for (var scene, $scene = this.scenes.iterator$(); $scene.hasNext$()&&((scene=($scene.next$())),1);) {
scene.setVisible$Z(vis);
}
if (andRepaint) {
$I$(9,"repaintT$java_awt_Component",[p$1.panel.apply(this, [])]);
}});

Clazz.newMeth(C$, 'addNewDrawingtoSelectedScene$',  function () {
var scene=this.getSelectedScene$();
if (scene == null ) {
scene=this.addNewScene$();
}var drawing=Clazz.new_($I$(10,1).c$$java_awt_Color,[this.color]);
drawing.setStroke$java_awt_Stroke(scene.isHeavy$() ? C$.heavyStroke : C$.lightStroke);
drawing.setStyle$I(this.style);
if (this.style == 0) {
var w=p$1.panel.apply(this, []).getMatBounds$().width;
drawing.setArrowheadLength$I((w/30|0));
}scene.getDrawings$().add$O(drawing);
return drawing;
});

Clazz.newMeth(C$, 'addDrawingtoSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilDrawing',  function (drawing) {
var scene=this.getSelectedScene$();
if (scene == null ) {
scene=this.addNewScene$();
}scene.getDrawings$().add$O(drawing);
p$1.panel.apply(this, []).changed=true;
return drawing;
});

Clazz.newMeth(C$, 'panel',  function () {
return this.frame.getTrackerPanelForID$Integer(this.panelID);
}, p$1);

Clazz.newMeth(C$, 'getActiveDrawing$',  function () {
var scene=this.getSelectedScene$();
if (scene != null  && !scene.getDrawings$().isEmpty$() ) {
return scene.getDrawings$().get$I(scene.getDrawings$().size$() - 1);
}return null;
});

Clazz.newMeth(C$, 'clearScenes$Z',  function (andRepaint) {
var trackerPanel=p$1.panel.apply(this, []);
for (var scene, $scene = this.scenes.iterator$(); $scene.hasNext$()&&((scene=($scene.next$())),1);) {
trackerPanel.removeDrawable$org_opensourcephysics_display_Drawable(scene);
}
this.scenes.clear$();
if (andRepaint) {
trackerPanel.changed=true;
$I$(9).repaintT$java_awt_Component(trackerPanel);
}});

Clazz.newMeth(C$, 'removeScene$org_opensourcephysics_cabrillo_tracker_PencilScene',  function (scene) {
if (scene == null ) return;
var trackerPanel=p$1.panel.apply(this, []);
trackerPanel.removeDrawable$org_opensourcephysics_display_Drawable(scene);
this.scenes.remove$O(scene);
trackerPanel.changed=true;
$I$(9).repaintT$java_awt_Component(trackerPanel);
});

Clazz.newMeth(C$, 'addScene$org_opensourcephysics_cabrillo_tracker_PencilScene',  function (scene) {
if (scene == null ) return;
var trackerPanel=p$1.panel.apply(this, []);
trackerPanel.addDrawable$org_opensourcephysics_display_Drawable(scene);
this.scenes.add$O(scene);
$I$(11).sort$java_util_List(this.scenes);
trackerPanel.changed=true;
$I$(9).repaintT$java_awt_Component(trackerPanel);
});

Clazz.newMeth(C$, 'addNewScene$',  function () {
var scene=Clazz.new_($I$(12,1));
var trackerPanel=p$1.panel.apply(this, []);
scene.setStartFrame$I(trackerPanel.getFrameNumber$());
trackerPanel.addDrawable$org_opensourcephysics_display_Drawable(scene);
this.scenes.add$O(scene);
$I$(11).sort$java_util_List(this.scenes);
if (this.drawingControl != null ) {
var size=(this.drawingControl.fontSizeSpinner.getValue$()).valueOf();
var font=$I$(13).baseFont.deriveFont$F(size);
scene.getCaption$().setFont$java_awt_Font(font);
scene.setColor$java_awt_Color(this.color);
scene.setHeavy$Z(this.drawingControl.heavyCheckbox.isSelected$());
this.drawingControl.setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene(scene);
this.drawingControl.refreshGUI$();
}$I$(9).repaintT$java_awt_Component(trackerPanel);
return scene;
});

Clazz.newMeth(C$, 'setScenes$java_util_ArrayList',  function (pencilScenes) {
if (pencilScenes == null  || pencilScenes === this.scenes  ) return;
this.clearScenes$Z(true);
this.scenes=Clazz.new_($I$(8,1).c$$java_util_Collection,[pencilScenes]);
$I$(11).sort$java_util_List(this.scenes);
var trackerPanel=p$1.panel.apply(this, []);
for (var scene, $scene = this.scenes.iterator$(); $scene.hasNext$()&&((scene=($scene.next$())),1);) {
trackerPanel.addDrawable$org_opensourcephysics_display_Drawable(scene);
}
});

Clazz.newMeth(C$, 'getSelectedScene$',  function () {
return this.drawingControl != null  ? this.drawingControl.getSelectedScene$() : null;
});

Clazz.newMeth(C$, 'getSceneAtFrame$I',  function (frame) {
for (var scene, $scene = this.scenes.iterator$(); $scene.hasNext$()&&((scene=($scene.next$())),1);) {
if (scene.startframe == frame) {
return scene;
}}
for (var scene, $scene = this.scenes.iterator$(); $scene.hasNext$()&&((scene=($scene.next$())),1);) {
if (scene.startframe < frame && scene.endframe >= frame ) {
return scene;
}}
return null;
});

Clazz.newMeth(C$, 'getSceneWithCaption$org_opensourcephysics_cabrillo_tracker_PencilCaption',  function (caption) {
for (var scene, $scene = this.scenes.iterator$(); $scene.hasNext$()&&((scene=($scene.next$())),1);) {
if (scene.getCaption$() === caption ) {
return scene;
}}
return null;
});

Clazz.newMeth(C$, 'getDrawingControl$',  function () {
if (this.drawingControl == null ) {
this.drawingControl=Clazz.new_($I$(14,1).c$$org_opensourcephysics_cabrillo_tracker_PencilDrawer,[this]);
}this.drawingControl.setFontLevel$I($I$(15).getLevel$());
this.drawingControl.refreshGUI$();
return this.drawingControl;
});

Clazz.newMeth(C$, 'getPencilCursor$',  function () {
return C$.pencilCursor;
});

Clazz.newMeth(C$, 'handleMouseAction$java_awt_event_MouseEvent',  function (e) {
var trackerPanel=p$1.panel.apply(this, []);
var ia=trackerPanel.getInteractive$();
if (Clazz.instanceOf(ia, "org.opensourcephysics.cabrillo.tracker.PencilCaption")) {
if ((ia).handleMouseAction$java_awt_event_MouseEvent$org_opensourcephysics_cabrillo_tracker_TrackerPanel(e, trackerPanel)) {
this.getDrawingControl$().refreshGUI$();
}return;
}switch (trackerPanel.getMouseAction$()) {
case 7:
trackerPanel.setMouseCursor$java_awt_Cursor(this.getPencilCursor$());
if ($I$(3).showHints) {
trackerPanel.setMessage$S($I$(6).getString$S("PencilDrawer.Hint"));
}break;
case 1:
this.newDrawing=this.addNewDrawingtoSelectedScene$();
this.newDrawing.markPoint$D$D(trackerPanel.getMouseX$(), trackerPanel.getMouseY$());
trackerPanel.setMouseCursor$java_awt_Cursor(this.getPencilCursor$());
if ($I$(3).showHints) {
trackerPanel.setMessage$S($I$(6).getString$S("PencilDrawer.Hint"));
}break;
case 3:
if (this.newDrawing == null ) break;
this.newDrawing.markPoint$D$D(trackerPanel.getMouseX$(), trackerPanel.getMouseY$());
$I$(9).repaintT$java_awt_Component(trackerPanel);
trackerPanel.setMouseCursor$java_awt_Cursor(this.getPencilCursor$());
break;
case 2:
if (this.newDrawing != null ) {
this.getSelectedScene$().getDrawings$().remove$O(this.newDrawing);
if (this.newDrawing.getPointCount$() <= 1) {
$I$(9).repaintT$java_awt_Component(trackerPanel);
} else {
this.getSelectedScene$().getDrawings$().add$O(this.newDrawing);
this.drawingControl.postDrawingEdit$org_opensourcephysics_cabrillo_tracker_PencilDrawing$org_opensourcephysics_cabrillo_tracker_PencilScene(this.newDrawing, this.getSelectedScene$());
trackerPanel.changed=true;
this.getDrawingControl$().refreshGUI$();
}}this.newDrawing=null;
trackerPanel.setMouseCursor$java_awt_Cursor(this.getPencilCursor$());
}
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.clearScenes$Z(false);
if (this.drawingControl != null ) this.drawingControl.dispose$();
this.panelID=null;
this.frame=null;
this.drawingControl=null;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.drawingControl != null ) {
this.drawingControl.refreshGUI$();
}});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(16).finalized$O(this);
});

C$.$static$=function(){C$.$static$=0;
C$.panelDrawers=Clazz.new_($I$(1,1));
{
C$.lightStroke=Clazz.new_($I$(2,1).c$$F,[2]);
C$.heavyStroke=Clazz.new_($I$(2,1).c$$F,[4]);
var icon=$I$(3).getResourceIcon$S$Z("pencil_cursor.gif", false);
C$.pencilCursor=$I$(4,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[icon.getImage$(), Clazz.new_($I$(5,1).c$$I$I,[1, 15]), $I$(6).getString$S("PencilDrawer.Cursor.Description"), 13]);
var baseColors=Clazz.array($I$(7), -1, [$I$(7).BLACK, $I$(7).RED, $I$(7).GREEN, $I$(7).BLUE, $I$(7).YELLOW, $I$(7).MAGENTA, $I$(7).CYAN, $I$(7).WHITE]);
var moreColors=Clazz.array($I$(7), -1, [Clazz.new_($I$(7,1).c$$I$I$I,[150, 150, 150]), Clazz.new_($I$(7,1).c$$I$I$I,[170, 0, 0]), Clazz.new_($I$(7,1).c$$I$I$I,[0, 140, 0]), Clazz.new_($I$(7,1).c$$I$I$I,[60, 0, 160]), Clazz.new_($I$(7,1).c$$I$I$I,[255, 180, 0]), Clazz.new_($I$(7,1).c$$I$I$I,[160, 0, 160]), Clazz.new_($I$(7,1).c$$I$I$I,[0, 160, 160]), Clazz.new_($I$(7,1).c$$I$I$I,[180, 180, 255])]);
C$.colors=Clazz.array($I$(7), -2, [baseColors, moreColors]);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
