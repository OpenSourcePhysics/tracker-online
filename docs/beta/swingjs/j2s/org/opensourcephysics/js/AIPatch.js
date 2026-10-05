(function(){var P$=Clazz.newPackage("org.opensourcephysics.js"),I$=[[0,'org.opensourcephysics.js.AIPatch','java.awt.event.ComponentAdapter','org.opensourcephysics.display.OSPRuntime','swingjs.api.js.DOMNode','java.awt.Point']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AIPatch");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'installResizeHandler$java_awt_Window',  function (window) {
if (window == null ) return;
if (Clazz.instanceOf(window, "javax.swing.RootPaneContainer")) {
var rp=(window).getRootPane$();
if (rp != null ) {
if (rp.getClientProperty$O("TWindowResizeHandler_Installed") != null ) {
C$.setupResizer$java_awt_Window(window);
C$.isolateWindowGestures$java_awt_Window(window);
return;
}rp.putClientProperty$O$O("TWindowResizeHandler_Installed", Boolean.TRUE);
}}window.addComponentListener$java_awt_event_ComponentListener(((P$.AIPatch$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AIPatch$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (e) {
$I$(1).setupResizer$java_awt_Window(this.$finals$.window);
$I$(1).isolateWindowGestures$java_awt_Window(this.$finals$.window);
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
$I$(1).setupResizer$java_awt_Window(this.$finals$.window);
$I$(1).isolateWindowGestures$java_awt_Window(this.$finals$.window);
});
})()
), Clazz.new_($I$(2,1),[this, {window:window}],P$.AIPatch$1)));
C$.setupResizer$java_awt_Window(window);
C$.isolateWindowGestures$java_awt_Window(window);
if ($I$(3).isJS) {
$I$(3,"trigger$I$java_awt_event_ActionListener",[100, ((P$.AIPatch$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AIPatch$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(1).setupResizer$java_awt_Window(this.$finals$.window);
$I$(1).isolateWindowGestures$java_awt_Window(this.$finals$.window);
});
})()
), Clazz.new_(P$.AIPatch$lambda1.$init$,[this, {window:window}]))]);
$I$(3,"trigger$I$java_awt_event_ActionListener",[500, ((P$.AIPatch$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AIPatch$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(1).setupResizer$java_awt_Window(this.$finals$.window);
$I$(1).isolateWindowGestures$java_awt_Window(this.$finals$.window);
});
})()
), Clazz.new_(P$.AIPatch$lambda2.$init$,[this, {window:window}]))]);
$I$(3,"trigger$I$java_awt_event_ActionListener",[1500, ((P$.AIPatch$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "AIPatch$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(1).setupResizer$java_awt_Window(this.$finals$.window);
$I$(1).isolateWindowGestures$java_awt_Window(this.$finals$.window);
});
})()
), Clazz.new_(P$.AIPatch$lambda3.$init$,[this, {window:window}]))]);
}}, 1);

Clazz.newMeth(C$, 'isolateWindowGestures$java_awt_Window',  function (window) {
if (window == null ) return;
if (!$I$(3).isJS) return;
{
try { var frame = window;
var viewer = (frame.getFrameViewer$ ? frame.getFrameViewer$() : (frame.秘frameViewer || null));
if (!viewer && window.getRootPane$) { var rp = window.getRootPane$();
viewer = (rp && rp.getFrameViewer$ ? rp.getFrameViewer$() : (rp ? rp.秘frameViewer : null));
} var frameNode = (frame.ui && frame.ui.frameNode ? frame.ui.frameNode : (frame.ui && frame.ui.domNode ? frame.ui.domNode : null));
if (!frameNode && frame.秘htmlName) { frameNode = document.getElementById(frame.秘htmlName + "_frame") || document.getElementById(frame.秘htmlName);
} if (!frameNode && window.getRootPane$) { var rp = window.getRootPane$();
frameNode = (rp && rp.ui && rp.ui.domNode ? rp.ui.domNode : (rp && rp.秘htmlName ? document.getElementById(rp.秘htmlName) : null));
} var rp = (window.getRootPane$ ? window.getRootPane$() : null);
var rpNode = (rp ? (rp.ui && rp.ui.domNode ? rp.ui.domNode : (rp.秘htmlName ? document.getElementById(rp.秘htmlName) : null)) : null);
var isolate = function(node) { if (!node || node._tGestureIsolated) return;
node._tGestureIsolated = true;
// 1. CSS Touch & Overscroll Containment
node.style.touchAction = "none";
node.style.overscrollBehavior = "none";
node.style.webkitUserSelect = "none";
node.style.userSelect = "none";
node.style.webkitTouchCallout = "none";
// 2. Suppress iOS Safari gesture events (pinch zoom & rotate)
var killGesture = function(e) { e.preventDefault();
e.stopPropagation();
};
node.addEventListener("gesturestart", killGesture, { passive: false });
node.addEventListener("gesturechange", killGesture, { passive: false });
node.addEventListener("gestureend", killGesture, { passive: false });
// 3. Prevent multi-touch pinch/pan & stop bubbling to host HTML page
node.addEventListener("touchmove", function(e) { if (e.touches && e.touches.length > 1) { e.preventDefault();
} e.stopPropagation();
}, { passive: false });
node.addEventListener("touchstart", function(e) { e.stopPropagation();
}, { passive: false });
node.addEventListener("touchend", function(e) { e.stopPropagation();
}, { passive: false });
// 4. Suppress trackpad pinch-to-zoom (ctrl + wheel)
node.addEventListener("wheel", function(e) { if (e.ctrlKey) { e.preventDefault();
e.stopPropagation();
} }, { passive: false });
};
isolate(frameNode);
if (rpNode && rpNode !== frameNode) { isolate(rpNode);
} var appletViewer = (viewer && viewer.appletViewer ? viewer.appletViewer : null);
if (appletViewer && appletViewer.fullName) { var appletNode = document.getElementById(appletViewer.fullName + "_appletdiv");
if (appletNode && !appletNode._tGestureIsolated) { appletNode._tGestureIsolated = true;
appletNode.style.touchAction = "none";
appletNode.style.overscrollBehavior = "none";
var killGesture = function(e) { e.preventDefault();
e.stopPropagation();
};
appletNode.addEventListener("gesturestart", killGesture, { passive: false });
appletNode.addEventListener("gesturechange", killGesture, { passive: false });
appletNode.addEventListener("gestureend", killGesture, { passive: false });
appletNode.addEventListener("touchmove", function(e) { if (e.touches && e.touches.length > 1) { e.preventDefault();
} e.stopPropagation();
}, { passive: false });
} } } catch (ex) {}
}
}, 1);

Clazz.newMeth(C$, 'setupResizer$java_awt_Window',  function (window) {
if (window == null  || !$I$(3).isJS ) return;
C$.isolateWindowGestures$java_awt_Window(window);
var minw=320;
var minh=220;
{
try { var frame = window;
var viewer = (frame.getFrameViewer$ ? frame.getFrameViewer$() : (frame.秘frameViewer || null));
if (!viewer && window.getRootPane$) { var rp = window.getRootPane$();
viewer = (rp && rp.getFrameViewer$ ? rp.getFrameViewer$() : (rp ? rp.秘frameViewer : null));
} var resizer = (viewer && viewer.getResizer$ ? viewer.getResizer$() : null);
if (!resizer && viewer && viewer.newResizer) { resizer = viewer.newResizer();
} if (resizer && resizer.show$) { resizer.show$();
} if (!resizer) return;
var resizerNode = (resizer.getDOMNode$ ? resizer.getDOMNode$() : (resizer.resizer || null));
if (!resizerNode && resizer.rootPane) { var id = resizer.rootPane.秘htmlName + "_resizer";
resizerNode = document.getElementById(id);
} if (!resizerNode) return;
var rubberBandNode = resizer.rubberBand;
if (!rubberBandNode && resizer.rootPane) { var rbid = resizer.rootPane.秘htmlName + "_resizer_rb";
rubberBandNode = document.getElementById(rbid);
} // Ensure rubberBand does not block touch / pointer interactions
if (rubberBandNode) { rubberBandNode.style.pointerEvents = "none";
} // 1. Keep the 20x20 hotspot inside the frame to avoid page overflow
resizerNode.style.width = "20px";
resizerNode.style.height = "20px";
resizerNode.style.marginLeft = "-20px";
resizerNode.style.marginTop = "-20px";
resizerNode.style.touchAction = "none";
resizerNode.style.zIndex = "100002";
resizerNode.style.userSelect = "none";
resizerNode.style.webkitUserSelect = "none";
resizerNode.style.cursor = "nwse-resize";
// 2. Visible diagonal corner grip lines for clear visual feedback on touch screens
resizerNode.style.opacity = "0.75";
resizerNode.style.backgroundImage = "linear-gradient(135deg, transparent 0%, transparent 50%, #888888 50%, #888888 56%, transparent 56%, transparent 68%, #888888 68%, #888888 74%, transparent 74%, transparent 86%, #888888 86%, #888888 92%, transparent 92%)";
resizerNode.style.backgroundRepeat = "no-repeat";
resizerNode.style.backgroundPosition = "right bottom";
resizerNode.style.backgroundSize = "10px 10px";
// 3. Attach dedicated touch listeners with passive: false to prevent iOS Safari scrolling
if (!resizerNode._tTouchAttached) { resizerNode._tTouchAttached = true;
resizerNode.addEventListener("touchstart", function(e) { if (!e.touches || e.touches.length === 0) return;
e.preventDefault();
e.stopPropagation();
var touch0 = e.touches[0];
var startX = touch0.pageX;
var startY = touch0.pageY;
var startW = frame.getWidth$ ? frame.getWidth$() : (frame.width || 800);
var startH = frame.getHeight$ ? frame.getHeight$() : (frame.height || 600);
var startLoc = frame.getLocation$ ? frame.getLocation$() : { x: 0, y: 0 };
resizerNode.style.opacity = "1.0";
if (rubberBandNode) { rubberBandNode.style.width = startW + "px";
rubberBandNode.style.height = startH + "px";
rubberBandNode.style.display = "block";
rubberBandNode.style.pointerEvents = "none";
} var onTouchMove = function(me) { if (!me.touches || me.touches.length === 0) return;
me.preventDefault();
me.stopPropagation();
var t = me.touches[0];
var dx = t.pageX - startX;
var dy = t.pageY - startY;
var curW = Math.max(minw, Math.round(startW + dx));
var curH = Math.max(minh, Math.round(startH + dy));
if (rubberBandNode) { rubberBandNode.style.width = curW + "px";
rubberBandNode.style.height = curH + "px";
} resizerNode.style.left = (curW - 4) + "px";
resizerNode.style.top = (curH - 4) + "px";
};
var onTouchEnd = function(ue) { ue.preventDefault();
ue.stopPropagation();
window.removeEventListener("touchmove", onTouchMove, { passive: false, capture: true });
window.removeEventListener("touchend", onTouchEnd, { passive: false, capture: true });
window.removeEventListener("touchcancel", onTouchEnd, { passive: false, capture: true });
resizerNode.style.opacity = "0.75";
if (rubberBandNode) { rubberBandNode.style.display = "none";
} var endTouch = (ue.changedTouches && ue.changedTouches.length > 0 ? ue.changedTouches[0] : touch0);
var dx = endTouch.pageX - startX;
var dy = endTouch.pageY - startY;
var finalW = Math.max(minw, Math.round(startW + dx));
var finalH = Math.max(minh, Math.round(startH + dy));
if (frame.setSize$I$I) { frame.setSize$I$I(finalW, finalH);
} else if (frame.setBounds$I$I$I$I) { frame.setBounds$I$I$I$I(startLoc.x, startLoc.y, finalW, finalH);
} if (frame.setPreferredSize$java_awt_Dimension) { frame.setPreferredSize$java_awt_Dimension(Clazz.new_(java.awt.Dimension.c$$I$I, [finalW, finalH]));
} if (frame.validate$) { frame.validate$();
} if (frame.repaint$) { frame.repaint$();
} if (resizer && resizer.setPosition$I$I) { resizer.setPosition$I$I(0, 0);
} else { resizerNode.style.left = (finalW - 4) + "px";
resizerNode.style.top = (finalH - 4) + "px";
} if (frame.frameResized$) { frame.frameResized$();
} if (frame.getSelectedPanel$) { var tp = frame.getSelectedPanel$();
if (tp && org.opensourcephysics.cabrillo.tracker.TFrame && org.opensourcephysics.cabrillo.tracker.TFrame.repaintT) { org.opensourcephysics.cabrillo.tracker.TFrame.repaintT(tp);
} } };
window.addEventListener("touchmove", onTouchMove, { passive: false, capture: true });
window.addEventListener("touchend", onTouchEnd, { passive: false, capture: true });
window.addEventListener("touchcancel", onTouchEnd, { passive: false, capture: true });
}, { passive: false });
} } catch (ex) {}
}
}, 1);

Clazz.newMeth(C$, 'closeAllMenus$',  function () {

try { if (swingjs && swingjs.plaf && swingjs.plaf.JSPopupMenuUI) { swingjs.plaf.JSPopupMenuUI.closeAllMenus$();
} if (swingjs && swingjs.plaf && swingjs.plaf.JSComponentUI) { swingjs.plaf.JSComponentUI.hideMenusAndToolTip$();
} var applet = this.getFrameViewer$ ? (this.getFrameViewer$() && this.getFrameViewer$().applet) : null;
if (!applet && window.J2S && J2S._applets) { for (var a in J2S._applets) { applet = J2S._applets[a];
if (applet && applet._menus) break;
} } if (applet && applet._menus && window.J2S && J2S.Swing && J2S.Swing.hideMenu) { for (var i in applet._menus) { J2S.Swing.hideMenu(applet._menus[i], true);
} } if (window.$) { $(".ui-j2smenu:visible, .swingjsPopupMenu:visible").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
$(".ui-j2smenu-node").removeClass("ui-state-active").removeClass("ui-state-focus");
} } catch (e) {}
}, 1);

Clazz.newMeth(C$, 'haveAnyVisibleMenusInAnyApplication$',  function () {

return (window.$ && $(".ui-j2smenu:visible, .swingjsPopupMenu:visible").length > 0);
return false;
}, 1);

Clazz.newMeth(C$, 'hackUIDOMNodeStyle$javax_swing_JComponent$SA',  function (jc, styles) {
var node=jc.ui.domNode ||null;
$I$(4).setStyles(node, styles);
}, 1);

Clazz.newMeth(C$, 'disposeElement$S',  function (id) {
$I$(4,"dispose",[$I$(4).getElement(id)]);
}, 1);

Clazz.newMeth(C$, 'addWindowOrientationChangeListener$Runnable',  function (onOrient) {

window.addEventListener(window.onorientationchange ? "orientationchange" : "resize", function() { console.log("Orientation changed");
onOrient.run$();
}, false);
}, 1);

Clazz.newMeth(C$, 'hackWelcomePane$javax_swing_JEditorPane$S',  function (ep, rawHTML) {
var thePane=ep;
var ui=thePane.getUI$();
var domNode=(ui.domNode ||null);
var injectDOM=((P$.AIPatch$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "AIPatch$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
System.err.println$S.apply(System.err, ["!!!AIP inject"]);
var dnode=(domNode ||null);
var rHTML=(rawHTML ||null);

ui.mytext = null; ui.rawHTML = null; ui.currentHTML = null;
ui.setText$S(rHTML);
var target=(ui.bodyNode ||dnode);
var html=$I$(4).getAttr(target, "innerHTML");
if (html.indexOf$S.apply(html, ["Open Source Physics"]) < 0) {
$I$(4).setAttr(target, "innerHTML", rHTML);
}$I$(4).setStyles(dnode, ["width", "100%", "height", "100%", "minHeight", "350px", "display", "block", "backgroundColor", "#ffffff", "webkitOverflowScrolling", "touch", "boxSizing", "border-box"]);
$I$(4).setStyles(target, ["width", "100%", "display", "block", "color", "#000000", "backgroundColor", "#ffffff", "padding", "20px", "fontFamily", "-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif", "boxSizing", "border-box"]);
var parentElement=$I$(4).getAttr(dnode, "parentElement");
if (parentElement != null ) {
$I$(4).setStyles(parentElement, ["width", "100%", "overflow", "auto", "backgroundColor", "#ffffff"]);
parentElement=$I$(4).getAttr(parentElement, "parentElement");
if (parentElement != null ) {
$I$(4).setStyles(parentElement, ["width", "100%", "height", "100%", "backgroundColor", "#ffffff"]);
}}});
})()
), Clazz.new_(P$.AIPatch$lambda4.$init$,[this, null]));
injectDOM.run$();

if (window.requestAnimationFrame) { window.requestAnimationFrame(injectDOM.run$); }
C$.setTimeout$Runnable$I(injectDOM, 30);
C$.setTimeout$Runnable$I(injectDOM, 100);
C$.setTimeout$Runnable$I(injectDOM, 250);
C$.setTimeout$Runnable$I(injectDOM, 500);
C$.setTimeout$Runnable$I(injectDOM, 1000);
}, 1);

Clazz.newMeth(C$, 'setTimeout$Runnable$I',  function (r, ms) {

setTimeout(r.run$, ms);
}, 1);

Clazz.newMeth(C$, 'getScreenLocation$java_awt_event_MouseEvent$java_awt_Component$S',  function (e, comp, from) {
var p=e.getLocationOnScreen$();
System.err.println$S("\nAIP getScLoc testing simple: " + p + " from " + from );
var pt=null;
if (false) {

try { var je = (e && e.bdata ? e.bdata.jqevent : null);
if (je) { var oe = je.originalEvent || je;
var t = (oe.targetTouches && oe.targetTouches.length > 0 ? oe.targetTouches[0] : null);
var px = (t ? t.pageX : (je.pageX != null ? je.pageX : null));
var py = (t ? t.pageY : (je.pageY != null ? je.pageY : null));
if (px == null && window.J2S && J2S._mousePageX != null) { System.err.println("AIP getScLoc using J2S._mousePageX/Y ");
px = J2S._mousePageX;
py = J2S._mousePageY;
} if (px != null && isFinite(px) && py != null && isFinite(py)) { pt = [Math.round(px), Math.round(py)];
} } } catch (ex) {}
}if (pt != null ) {
p=Clazz.new_($I$(5,1).c$$I$I,[pt[0], pt[1]]);
System.err.println$S("AIP getScLoc AI calc " + p);
return p;
}if (p != null  && (p.x != 0 || p.y != 0 ) ) {
return p;
}if (comp != null  && comp.isShowing$() ) {
try {
p=comp.getLocationOnScreen$();
p=Clazz.new_([p.x + e.getX$(), p.y + e.getY$()],$I$(5,1).c$$I$I);
System.err.println$S("AIP getScLoc returning component offset " + p);
} catch (t) {
}
}p=e.getPoint$();
System.err.println$S("AIP getScLoc returning e.getPoint() " + p);
return p;
}, 1);

Clazz.newMeth(C$, 'virtualNumberPad$org_opensourcephysics_media_core_NumberField$S',  function (nf, action) {
switch (action) {
case "add":
{
J2S.Mobile.addNumberPad(nf);
}
case "show":
{
J2S.Mobile.showNumberPad(nf);
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
