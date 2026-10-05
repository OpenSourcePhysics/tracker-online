(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,['org.opensourcephysics.display.InteractivePanel','.IADMouseController'],'java.awt.Cursor','org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InteractivePanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.DrawingPanel', 'org.opensourcephysics.display.InteractiveMouseHandler');
C$.$classes$=[['IADMouseController',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cursorColor="transparent";
this.containsInteractive=false;
this.mouseAction=0;
this.mouseEvent=null;
this.mouseHandler=null;
this.iaDraggable=null;
this.iaSelectable=null;
},1);

C$.$fields$=[['Z',['containsInteractive'],'I',['mouseAction'],'S',['cursorColor'],'O',['mouseEvent','java.awt.event.MouseEvent','mouseHandler','org.opensourcephysics.display.InteractiveMouseHandler','iaDraggable','org.opensourcephysics.display.Interactive','iaSelectable','org.opensourcephysics.display.Selectable','customCursor','java.lang.Object']]
,['S',['ipadStyle']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_InteractiveMouseHandler',  function ($in) {
C$.c$.apply(this, []);
this.mouseHandler=$in;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isInteractive=true;
this.mouseHandler=this;
}, 1);

Clazz.newMeth(C$, 'setMouseListeners$',  function () {
this.mouseController=Clazz.new_($I$(1,1),[this, null]);
this.addMouseListener$java_awt_event_MouseListener(this.mouseController);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseController);
this.addOptionController$();
});

Clazz.newMeth(C$, 'addDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
C$.superclazz.prototype.addDrawable$org_opensourcephysics_display_Drawable.apply(this, [drawable]);
if (drawable.isInteractive$()) {
this.containsInteractive=true;
}});

Clazz.newMeth(C$, 'clear$',  function () {
C$.superclazz.prototype.clear$.apply(this, []);
this.containsInteractive=false;
});

Clazz.newMeth(C$, 'scaleX$java_util_ArrayList',  function (tempList) {
var tempmin=this.xminPreferred;
var tempmax=this.xmaxPreferred;
C$.superclazz.prototype.scaleX$java_util_ArrayList.apply(this, [tempList]);
if (this.autoscaleX && (this.mouseAction == 3) ) {
if (this.xminPreferred > tempmin ) {
this.xminPreferred=tempmin;
}if (this.xmaxPreferred < tempmax ) {
this.xmaxPreferred=tempmax;
}}});

Clazz.newMeth(C$, 'scaleY$java_util_ArrayList',  function (tempList) {
var tempmin=this.yminPreferred;
var tempmax=this.ymaxPreferred;
C$.superclazz.prototype.scaleY$java_util_ArrayList.apply(this, [tempList]);
if (this.autoscaleY && (this.mouseAction == 3) ) {
if (this.yminPreferred > tempmin ) {
this.yminPreferred=tempmin;
}if (this.ymaxPreferred < tempmax ) {
this.ymaxPreferred=tempmax;
}}});

Clazz.newMeth(C$, 'setInteractiveMouseHandler$org_opensourcephysics_display_InteractiveMouseHandler',  function (handler) {
this.mouseHandler=handler;
});

Clazz.newMeth(C$, 'handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent',  function (panel, evt) {
switch (panel.getMouseAction$()) {
case 4:
C$.jsCustomCursor$S$S$java_awt_event_MouseEvent("released", "transparent", evt);
var clickedIA=this.getInteractive$();
if ((panel.getMouseClickCount$() < 2) || (clickedIA == null ) || !(Clazz.instanceOf(clickedIA, "org.opensourcephysics.display.Selectable"))  ) {
return;
}if ((this.iaSelectable != null ) && (this.iaSelectable !== clickedIA ) ) {
this.iaSelectable.setSelected$Z(false);
}this.iaSelectable=(clickedIA);
this.iaSelectable.toggleSelected$();
this.invalidateImage$();
if (!this.getIgnoreRepaint$()) {
panel.repaint$();
}break;
case 3:
C$.jsCustomCursor$S$S$java_awt_event_MouseEvent("dragged", this.cursorColor, evt);
if (this.iaDraggable == null ) {
return;
}var x=panel.getMouseX$();
var y=panel.getMouseY$();
if (!this.autoscaleX && (evt.getX$() < 1 + this.leftGutter) ) {
x=panel.pixToX$I(1 + this.leftGutter);
}if (!this.autoscaleX && (evt.getX$() > panel.getWidth$() - 1 - this.rightGutter ) ) {
x=panel.pixToX$I(panel.getWidth$() - 1 - this.rightGutter );
}if (!this.autoscaleY && (evt.getY$() < 1 + this.topGutter) ) {
y=panel.pixToY$I(1 + this.topGutter);
}if (!this.autoscaleY && (evt.getY$() > panel.getHeight$() - 1 - this.bottomGutter ) ) {
y=panel.pixToY$I(panel.getHeight$() - 1 - this.bottomGutter );
}this.iaDraggable.setXY$D$D(x, y);
this.invalidateImage$();
if (!this.getIgnoreRepaint$()) {
panel.repaint$();
}break;
case 2:
C$.jsCustomCursor$S$S$java_awt_event_MouseEvent("released", this.cursorColor, evt);
if ((this.autoscaleX || this.autoscaleY ) && !this.getIgnoreRepaint$() ) {
panel.repaint$();
}break;
}
});

Clazz.newMeth(C$, 'getCurrentDraggable$',  function () {
return this.iaDraggable;
});

Clazz.newMeth(C$, 'getInteractive$',  function () {
if (!this.containsInteractive) {
return null;
}if (this.iaDraggable != null ) {
return this.iaDraggable;
}if ((this.iaSelectable != null ) && this.iaSelectable.isSelected$() ) {
return (this.iaSelectable).findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(this, this.mouseEvent.getX$(), this.mouseEvent.getY$());
}var iad=null;
{
var x=this.mouseEvent.getX$();
var y=this.mouseEvent.getY$();
var n=this.drawableList.size$();
for (var i=n; --i >= 0; ) {
var obj=this.drawableList.get$I(i);
if (obj.isInteractive$() && (iad=(obj).findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(this, x, y)) != null  ) {
break;
}}
}return iad;
});

Clazz.newMeth(C$, 'setShowCoordinates$Z',  function (show) {
this.showCoordinates=show;
});

Clazz.newMeth(C$, 'getMouseButton$',  function () {
switch (this.mouseEvent.getModifiers$()) {
case 16:
return 1;
case 8:
return 2;
case 4:
return 3;
default:
return 0;
}
});

Clazz.newMeth(C$, 'getMouseClickCount$',  function () {
return this.mouseEvent.getClickCount$();
});

Clazz.newMeth(C$, 'getMouseAction$',  function () {
return this.mouseAction;
});

Clazz.newMeth(C$, 'getMouseIntX$',  function () {
return this.mouseEvent.getX$();
});

Clazz.newMeth(C$, 'getMouseIntY$',  function () {
return this.mouseEvent.getY$();
});

Clazz.newMeth(C$, 'getMouseX$',  function () {
return this.pixToX$I(this.mouseEvent.getX$());
});

Clazz.newMeth(C$, 'getMouseY$',  function () {
return this.pixToY$I(this.mouseEvent.getY$());
});

Clazz.newMeth(C$, 'saveMouseEvent$I$java_awt_event_MouseEvent',  function (type, evt) {
this.mouseAction=type;
this.mouseEvent=evt;
});

Clazz.newMeth(C$, 'doMousePressed$java_awt_event_MouseEvent',  function (e) {
this.mouseEvent=e;
this.mouseAction=1;
if (this.mouseHandler != null ) {
this.mouseHandler.handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent(this, e);
this.iaDraggable=null;
this.iaDraggable=this.getInteractive$();
if (this.iaDraggable != null ) {
if (Clazz.instanceOf(this.iaDraggable, "org.opensourcephysics.display.Selectable")) {
this.setMouseCursor$java_awt_Cursor((this.iaDraggable).getPreferredCursor$());
this.cursorColor="rgba(63, 255, 63, 0.5)";
} else {
this.setMouseCursor$java_awt_Cursor($I$(2).getPredefinedCursor$I(12));
this.cursorColor="rgba(63, 63, 255, 0.5)";
}} else {
this.cursorColor="transparent";
}}C$.jsCustomCursor$S$S$java_awt_event_MouseEvent("pressed", this.cursorColor, e);
if (this.isShowCoordinates$()) {
var s=this.coordinateStrBuilder.getCoordinateString$org_opensourcephysics_display_DrawingPanel$java_awt_event_MouseEvent(this, e);
if (this.setMessage$S$I(s, 0) && !true ) this.repaint$();
}});

Clazz.newMeth(C$, 'doMouseReleased$java_awt_event_MouseEvent',  function (e) {
C$.jsCustomCursor$S$S$java_awt_event_MouseEvent("released", this.cursorColor, e);
this.mouseEvent=e;
this.mouseAction=2;
if (this.mouseHandler != null ) {
this.mouseHandler.handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent(this, e);
}this.iaDraggable=null;
if (this.isShowCoordinates$()) {
if (this.setMessage$S$I(null, 0) && !true ) this.repaint$();
}this.setMouseCursor$java_awt_Cursor($I$(2).getPredefinedCursor$I(1));
});

Clazz.newMeth(C$, 'doMouseEntered$java_awt_event_MouseEvent',  function (e) {
C$.jsCustomCursor$S$S$java_awt_event_MouseEvent("entered", this.cursorColor, e);
if (this.isShowCoordinates$()) {
this.setMouseCursor$java_awt_Cursor($I$(2).getPredefinedCursor$I(1));
}this.mouseEvent=e;
this.mouseAction=5;
if (this.mouseHandler != null ) {
this.mouseHandler.handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent(this, e);
}});

Clazz.newMeth(C$, 'doMouseExit$java_awt_event_MouseEvent',  function (e) {
this.cursorColor="transparent";
C$.jsCustomCursor$S$S$java_awt_event_MouseEvent("exited", this.cursorColor, e);
this.setMouseCursor$java_awt_Cursor($I$(2).getPredefinedCursor$I(0));
this.mouseEvent=e;
this.mouseAction=6;
if (this.mouseHandler != null ) {
this.mouseHandler.handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent(this, e);
}});

Clazz.newMeth(C$, 'doMouseClicked$java_awt_event_MouseEvent',  function (e) {
C$.jsCustomCursor$S$S$java_awt_event_MouseEvent("pressed", this.cursorColor, e);
this.mouseEvent=e;
this.mouseAction=4;
if (this.mouseHandler == null ) {
return;
}this.mouseHandler.handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent(this, e);
});

Clazz.newMeth(C$, 'doMouseDragged$java_awt_event_MouseEvent',  function (e) {
C$.jsCustomCursor$S$S$java_awt_event_MouseEvent("dragged", this.cursorColor, e);
this.mouseEvent=e;
this.mouseAction=3;
if (this.mouseHandler != null ) {
this.mouseHandler.handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent(this, e);
}if (this.isShowCoordinates$()) {
var s=this.coordinateStrBuilder.getCoordinateString$org_opensourcephysics_display_DrawingPanel$java_awt_event_MouseEvent(this, e);
if (this.setMessage$S$I(s, 0) && !true ) this.repaint$();
}});

Clazz.newMeth(C$, 'doMouseMoved$java_awt_event_MouseEvent',  function (e) {
this.mouseEvent=e;
this.mouseAction=7;
this.iaDraggable=null;
if (this.mouseHandler != null ) {
this.mouseHandler.handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent(this, e);
var iad=this.getInteractive$();
if (iad == null ) {
this.setMouseCursor$java_awt_Cursor($I$(2).getPredefinedCursor$I(1));
this.cursorColor="transparent";
} else {
if (Clazz.instanceOf(iad, "org.opensourcephysics.display.Selectable")) {
this.setMouseCursor$java_awt_Cursor((iad).getPreferredCursor$());
this.cursorColor="rgba(63, 255, 63, 0.5)";
} else {
this.setMouseCursor$java_awt_Cursor($I$(2).getPredefinedCursor$I(12));
this.cursorColor="rgba(63, 63, 255, 0.5)";
}}}C$.jsCustomCursor$S$S$java_awt_event_MouseEvent("moved", this.cursorColor, e);
});

Clazz.newMeth(C$, 'jsCustomCursor$S$S$java_awt_event_MouseEvent',  function (action, cursorColor, e) {
if (!$I$(3).cssCursor) return;
if (C$.ipadStyle != null ) {

$("body").append('<style>'+ C$.ipadStyle + '</style>');
$("body").append('<div class="custom-cursor" id="customCursor" style="z-index: 10000000;"></div>');
C$.ipadStyle=null;
}var x=e.getXOnScreen$() + "px";
var y=e.getYOnScreen$() + "px";
switch (action) {
case "pressed":
case "released":
case "dragged":
case "moved":
C$.setCustomCursor$S$S$S(x, y, cursorColor);
break;
case "entered":
C$.showCustomCursor$S$S$S(x, y, cursorColor);
break;
case "exited":
C$.hideCustomCursor$S$S(x, y);
break;
default:
return;
}
}, 1);

Clazz.newMeth(C$, 'setCustomCursor$S$S$S',  function (x, y, c) {

$('#customCursor').css({"backgroundColor":c,"left": x, "top": y});
}, 1);

Clazz.newMeth(C$, 'showCustomCursor$S$S$S',  function (x, y, c) {

$('#customCursor').css({"backgroundColor":c, "left": x , "top": y, "display": "block", "width":'25px', "height":'25px'});
}, 1);

Clazz.newMeth(C$, 'hideCustomCursor$S$S',  function (x, y) {

$('#customCursor').css({"backgroundColor":'transparent', "left": x , "top": y, "display": "none", "width":'0px', "height":'0px'});
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.mouseController != null ) {
this.removeMouseListener$java_awt_event_MouseListener(this.mouseController);
this.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseController);
this.mouseController=null;
}if (this.optionController != null ) {
this.removeMouseListener$java_awt_event_MouseListener(this.optionController);
this.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.optionController);
this.optionController=null;
}C$.superclazz.prototype.dispose$.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.ipadStyle=".custom-cursor {\r\n  width: 25px;\r\n  height: 25px;\r\n  background-color: transparent;\r\n  /* Make the background transparent */\r\n  position: absolute;\r\n  pointer-events: none;\r\n  transform: translate(-50%, -50%);\r\n  display: none;\r\n}\r\n\r\n.custom-cursor::before,\r\n.custom-cursor::after {\r\n  content: \'\';\r\n  position: absolute;\r\n  background-color: black;\r\n  /* Color of the crosshair */\r\n}\r\n\r\n.custom-cursor::before {\r\n  width: 25px;\r\n  /* Horizontal line length */\r\n  height: 3px;\r\n  /* Horizontal line thickness */\r\n  border: 1px solid white;  /* White border */\r\n  box-sizing: border-box;   /* Ensures border is included in width/height */\r\n  top: 50%;\r\n  left: 0;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.custom-cursor::after {\r\n  width: 3px;\r\n  /* Vertical line thickness */\r\n  height: 25px;\r\n  /* Vertical line length */\r\n  border: 1px solid white;  /* White border */\r\n  box-sizing: border-box;   /* Ensures border is included in width/height */\r\n  top: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}";
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.InteractivePanel, "IADMouseController", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.event.MouseInputAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.InteractivePanel'].doMousePressed$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.InteractivePanel'], [e]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.InteractivePanel'].doMouseReleased$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.InteractivePanel'], [e]);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.InteractivePanel'].doMouseEntered$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.InteractivePanel'], [e]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.InteractivePanel'].doMouseExit$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.InteractivePanel'], [e]);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.InteractivePanel'].doMouseClicked$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.InteractivePanel'], [e]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.InteractivePanel'].doMouseDragged$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.InteractivePanel'], [e]);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.InteractivePanel'].doMouseMoved$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.InteractivePanel'], [e]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
