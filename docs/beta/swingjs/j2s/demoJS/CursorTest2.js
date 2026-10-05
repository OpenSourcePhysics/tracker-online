(function(){var P$=Clazz.newPackage("demoJS"),I$=[[0,'javax.swing.JFrame','java.awt.BorderLayout','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JLabel','demoJS.CursorTest2','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CursorTest2");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['clickToggle','dragging','pressed','inside']]]

Clazz.newMeth(C$, 'jsCustomCursor$S$java_awt_event_MouseEvent',  function (action, e) {
if (action !== "moved" ) System.out.println$S(action + " " + Long.$s(e.getWhen$()) + " " + e );

switch (action) { case "pressed": $('#customCursor').css({"backgroundColor":'yellow'});
setCustomCursor(e);
break;
case "released": $('#customCursor').css({"background-color":'green'});
setCustomCursor(e);
break;
case "dragged": case "moved": setCustomCursor(e);
break;
case "entered": $('#customCursor').css({"backgroundColor":'green'});
$('#customCursor').css({"width":'20px'});
$('#customCursor').css({"height":'20px'});
showCustomCursor(e);
break;
case "exited": $('#customCursor').css({"backgroundColor":'transparent'});
$('#customCursor').css({"width":'0px'});
$('#customCursor').css({"height":'0px'});
hideCustomCursor(e);
break;
}
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var frame=Clazz.new_($I$(1,1).c$$S,["Custom Cursor Example"]);
frame.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1)));
var panel=Clazz.new_($I$(3,1));
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1)));
var label=Clazz.new_($I$(5,1).c$$S,["JavaScript Cursor"]);
panel.add$java_awt_Component(label);
var drawingPanel=((P$.CursorTest2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CursorTest2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
var width=this.getWidth$();
var height=this.getHeight$();
var centerX=(width/2|0);
var centerY=(height/2|0);
var radius=(Math.min(width, height)/4|0);
g.setColor$java_awt_Color($I$(6).clickToggle ? $I$(7).BLUE : $I$(7).RED);
g.fillOval$I$I$I$I(centerX - radius, centerY - radius, 2 * radius, 2 * radius);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.CursorTest2$1));
drawingPanel.setName$S("drawingPanel");
drawingPanel.addMouseListener$java_awt_event_MouseListener(((P$.CursorTest2$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CursorTest2$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if ($I$(6).dragging) {
$I$(6).dragging=false;
return;
}System.out.print$S("clickcount=" + e.getClickCount$());
$I$(6).clickToggle=!$I$(6).clickToggle;
this.$finals$.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(6).pressed) return;
$I$(6).dragging=false;
$I$(6).pressed=true;
$I$(6).jsCustomCursor$S$java_awt_event_MouseEvent("pressed", e);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
$I$(6).pressed=false;
$I$(6).dragging=false;
$I$(6).jsCustomCursor$S$java_awt_event_MouseEvent("released", e);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
$I$(6).inside=true;
$I$(6).jsCustomCursor$S$java_awt_event_MouseEvent("entered", e);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
$I$(6).inside=false;
$I$(6).dragging=false;
$I$(6).pressed=false;
$I$(6).jsCustomCursor$S$java_awt_event_MouseEvent("exited", e);
});
})()
), Clazz.new_(P$.CursorTest2$2.$init$,[this, {drawingPanel:drawingPanel}])));
drawingPanel.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.CursorTest2$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CursorTest2$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseMotionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
$I$(6).dragging=true;
$I$(6).jsCustomCursor$S$java_awt_event_MouseEvent("dragged", e);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
$I$(6).jsCustomCursor$S$java_awt_event_MouseEvent("moved", e);
});
})()
), Clazz.new_(P$.CursorTest2$3.$init$,[this, null])));
frame.add$java_awt_Component$O(drawingPanel, "Center");
frame.add$java_awt_Component$O(panel, "South");
frame.setSize$I$I(300, 300);
frame.setLocationRelativeTo$java_awt_Component(null);
frame.setDefaultCloseOperation$I(3);
frame.setVisible$Z(true);
}, 1);

C$.$static$=function(){C$.$static$=0;
{

$("body").append('<link href="./ipad.css" rel="stylesheet" type="text/css">');
$("body").append('<div class="custom-cursor" id="customCursor" style="z-index: 10000000;"></div>');
setCustomCursor = function(e) { var x = e.getXOnScreen$();
var y = e.getYOnScreen$();
var c = $('#customCursor') .css({"left": x + "px", "top": y + "px"});
}

hideCustomCursor = function(e) { var x = e.getXOnScreen$();
var y = e.getYOnScreen$();
var c = $('#customCursor') .css({"left": x + "px", "top": y + "px", "display": "none"});
}

showCustomCursor = function(e) { var x = e.getXOnScreen$();
var y = e.getYOnScreen$();
var c = $('#customCursor') .css({"left": x + "px", "top": y + "px", "display": "block"});
}
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
