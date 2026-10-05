(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.PencilScene','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.PencilCaption','org.opensourcephysics.cabrillo.tracker.PencilControl','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.PencilDrawer','org.opensourcephysics.cabrillo.tracker.Tracker',['org.opensourcephysics.cabrillo.tracker.PencilScene','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PencilScene", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['org.opensourcephysics.display.Interactive', 'org.opensourcephysics.media.core.Trackable', 'Comparable']);
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.drawings=Clazz.new_($I$(2,1));
this.visible=true;
this.startframe=0;
this.endframe=2147483647;
},1);

C$.$fields$=[['Z',['visible','heavy','isCaptionPositioned'],'D',['margin'],'I',['startframe','endframe'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','caption','org.opensourcephysics.cabrillo.tracker.PencilCaption','drawings','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.caption=Clazz.new_(["", 0, 0, $I$(3).baseFont],$I$(3,1).c$$S$D$D$java_awt_Font);
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) return;
if (Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
var trackerPanel=panel;
if (!trackerPanel.isDrawingInImageSpace$()) return;
if (this.panelID == null ) {
this.panelID=trackerPanel.getID$();
this.frame=trackerPanel.getTFrame$();
}if (!this.includesFrame$I(trackerPanel.getFrameNumber$())) {
return;
}}for (var drawing, $drawing = this.drawings.iterator$(); $drawing.hasNext$()&&((drawing=($drawing.next$())),1);) {
drawing.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
}
this.caption.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
});

Clazz.newMeth(C$, 'getDrawings$',  function () {
return this.drawings;
});

Clazz.newMeth(C$, 'getCaption$',  function () {
return this.caption;
});

Clazz.newMeth(C$, 'setCaption$org_opensourcephysics_cabrillo_tracker_PencilCaption',  function (caption) {
if (caption != null ) {
this.caption=caption;
this.isCaptionPositioned=true;
}});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
for (var drawing, $drawing = this.drawings.iterator$(); $drawing.hasNext$()&&((drawing=($drawing.next$())),1);) {
drawing.color=color;
}
this.caption.color=color;
});

Clazz.newMeth(C$, 'setStartFrame$I',  function (start) {
start=Math.max(0, start);
this.startframe=start;
this.endframe=Math.max(this.startframe, this.endframe);
return this.startframe;
});

Clazz.newMeth(C$, 'setEndFrame$I',  function (end) {
end=Math.max(this.startframe, end);
this.endframe=end;
return this.endframe;
});

Clazz.newMeth(C$, 'getDescription$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (this === $I$(4).dummyScene ) return null;
var last=this.endframe;
if (trackerPanel.isDisplayable$() && 2147483647 == last ) {
last=trackerPanel.getPlayer$().getVideoClip$().getLastFrameNumber$();
}var name=$I$(5).getString$S("PencilScene.Description.Default");
var len=Math.max(10, name.length$());
if (this.getCaption$() != null  && !"".equals$O(this.getCaption$().getText$()) ) {
name=this.getCaption$().getText$();
}if (name.length$() > len) {
name=name.substring$I$I(0, len) + "...";
}var s=name + " (" + this.startframe + "-" + last + ")" ;
return s;
});

Clazz.newMeth(C$, 'includesFrame$I',  function (frame) {
return this.startframe <= frame && this.endframe >= frame ;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
this.visible=vis;
});

Clazz.newMeth(C$, 'isHeavy$',  function () {
return this.heavy;
});

Clazz.newMeth(C$, 'setHeavy$Z',  function (heavy) {
this.heavy=heavy;
for (var drawing, $drawing = this.drawings.iterator$(); $drawing.hasNext$()&&((drawing=($drawing.next$())),1);) {
drawing.setStroke$java_awt_Stroke(heavy ? $I$(6).heavyStroke : $I$(6).lightStroke);
}
if (this.getCaption$() != null ) {
var font=this.getCaption$().getFont$();
font=font.deriveFont$I(heavy ? 1 : 0);
this.getCaption$().setFont$java_awt_Font(font);
}});

Clazz.newMeth(C$, 'getXMin$',  function () {
var d=0;
for (var drawing, $drawing = this.drawings.iterator$(); $drawing.hasNext$()&&((drawing=($drawing.next$())),1);) {
d=d == 0  ? drawing.getXMin$() : Math.min(d, drawing.getXMin$());
}
if (this.caption.isMeasured$()) {
d=d == 0  ? this.caption.getXMin$() : Math.min(d, this.caption.getXMin$());
}return d - this.margin;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
var d=0;
for (var drawing, $drawing = this.drawings.iterator$(); $drawing.hasNext$()&&((drawing=($drawing.next$())),1);) {
d=d == 0  ? drawing.getXMax$() : Math.max(d, drawing.getXMax$());
}
if (this.caption.isMeasured$()) {
d=d == 0  ? this.caption.getXMax$() : Math.max(d, this.caption.getXMax$());
}return d + this.margin;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
var d=0;
for (var drawing, $drawing = this.drawings.iterator$(); $drawing.hasNext$()&&((drawing=($drawing.next$())),1);) {
d=d == 0  ? drawing.getYMin$() : Math.min(d, drawing.getYMin$());
}
if (this.caption.isMeasured$()) {
d=d == 0  ? this.caption.getYMin$() : Math.min(d, this.caption.getYMin$());
}return d - this.margin;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
var d=0;
for (var drawing, $drawing = this.drawings.iterator$(); $drawing.hasNext$()&&((drawing=($drawing.next$())),1);) {
d=d == 0  ? drawing.getYMax$() : Math.max(d, drawing.getYMax$());
}
if (this.caption.isMeasured$()) {
d=d == 0  ? this.caption.getYMax$() : Math.max(d, this.caption.getYMax$());
}return d + this.margin;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return true;
});

Clazz.newMeth(C$, ['compareTo$org_opensourcephysics_cabrillo_tracker_PencilScene','compareTo$O'],  function (that) {
var diff=this.startframe - that.startframe;
return diff != 0 ? diff : (this.endframe - that.endframe);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var ia=this.caption.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(panel, xpix, ypix);
if (ia != null  && $I$(7).showHints  && this.panelID != null  ) {
this.frame.getTrackerPanelForID$Integer(this.panelID).setMessage$S($I$(5).getString$S("PencilCaption.Hint"));
return ia;
}return ia;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return true;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
});

Clazz.newMeth(C$, 'getX$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getY$',  function () {
return 0;
});

Clazz.newMeth(C$, 'measure$',  function () {
var xmin=0;
var xmax=0;
var ymin=0;
var ymax=0;
for (var drawing, $drawing = this.drawings.iterator$(); $drawing.hasNext$()&&((drawing=($drawing.next$())),1);) {
xmin=xmin == 0  ? drawing.getXMin$() : Math.min(xmin, drawing.getXMin$());
xmax=xmax == 0  ? drawing.getXMax$() : Math.max(xmax, drawing.getXMax$());
ymin=ymin == 0  ? drawing.getYMin$() : Math.min(ymin, drawing.getYMin$());
ymax=ymax == 0  ? drawing.getYMax$() : Math.max(ymax, drawing.getYMax$());
}
if (this.caption.isMeasured$()) {
xmin=xmin == 0  ? this.caption.getXMin$() : Math.min(xmin, this.caption.getXMin$());
xmax=xmax == 0  ? this.caption.getXMax$() : Math.max(xmax, this.caption.getXMax$());
ymin=ymin == 0  ? this.caption.getYMin$() : Math.min(ymin, this.caption.getYMin$());
ymax=ymax == 0  ? this.caption.getYMax$() : Math.max(ymax, this.caption.getYMax$());
}var range=Math.max(xmax - xmin, ymax - ymin);
this.margin=0.02 * range;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(8,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.PencilScene, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var scene=obj;
control.setValue$S$O("frame_range", Clazz.array(Integer.TYPE, -1, [scene.startframe, scene.endframe]));
if (!scene.getDrawings$().isEmpty$()) {
control.setValue$S$O("drawings", scene.getDrawings$());
}if (scene.getCaption$() != null  && !"".equals$O(scene.getCaption$().getText$()) ) {
control.setValue$S$O("caption", scene.getCaption$());
}if (scene.isHeavy$()) {
control.setValue$S$Z("heavy", scene.isHeavy$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var scene=Clazz.new_($I$(1,1));
return scene;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var scene=obj;
var frames=control.getObject$S("frame_range");
if (frames != null ) {
scene.startframe=frames[0];
scene.endframe=frames[1];
}var drawings=control.getObject$S("drawings");
if (drawings != null ) {
scene.drawings=drawings;
}scene.setCaption$org_opensourcephysics_cabrillo_tracker_PencilCaption(control.getObject$S("caption"));
scene.setHeavy$Z(control.getBoolean$S("heavy"));
return scene;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
