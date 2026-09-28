(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.display.GUIUtils','javax.swing.JScrollPane',['javax.swing.event.HyperlinkEvent','.EventType'],'org.opensourcephysics.desktop.OSPDesktop','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.textPane=$I$(1).newJTextPane$();
},1);

C$.$fields$=[['O',['hyperlinkListener','javax.swing.event.HyperlinkListener','textPane','javax.swing.JTextPane','textScroller','javax.swing.JScrollPane']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$Class.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (resourceName) {
C$.c$$S$Class.apply(this, [resourceName, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Class',  function (resourceName, type) {
Clazz.super_(C$, this);
this.setSize$I$I(300, 300);
this.textPane.setEditable$Z(false);
this.textScroller=Clazz.new_($I$(2,1).c$$java_awt_Component,[this.textPane]);
this.setContentPane$java_awt_Container(this.textScroller);
if (resourceName != null ) {
p$1.loadTextResource$S$Class.apply(this, [resourceName, type]);
}}, 1);

Clazz.newMeth(C$, 'getTextPane$',  function () {
return this.textPane;
});

Clazz.newMeth(C$, 'enableHyperlinks$',  function () {
if (this.hyperlinkListener != null ) {
this.textPane.removeHyperlinkListener$javax_swing_event_HyperlinkListener(this.hyperlinkListener);
}this.hyperlinkListener=((P$.TextFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
if (e.getEventType$() === $I$(3).ACTIVATED ) {
try {
this.b$['org.opensourcephysics.display.TextFrame'].textPane.setPage$java_net_URL(e.getURL$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
}});
})()
), Clazz.new_(P$.TextFrame$1.$init$,[this, null]));
this.textPane.addHyperlinkListener$javax_swing_event_HyperlinkListener(this.hyperlinkListener);
});

Clazz.newMeth(C$, 'enableDesktopHyperlinks$',  function () {
if (this.hyperlinkListener != null ) {
this.textPane.removeHyperlinkListener$javax_swing_event_HyperlinkListener(this.hyperlinkListener);
}this.hyperlinkListener=((P$.TextFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
if (e.getEventType$() === $I$(3).ACTIVATED ) {
$I$(4,"displayURL$S",[e.getURL$().toString()]);
}});
})()
), Clazz.new_(P$.TextFrame$2.$init$,[this, null]));
this.textPane.addHyperlinkListener$javax_swing_event_HyperlinkListener(this.hyperlinkListener);
});

Clazz.newMeth(C$, 'disableHyperlinks$',  function () {
if (this.hyperlinkListener != null ) {
this.textPane.removeHyperlinkListener$javax_swing_event_HyperlinkListener(this.hyperlinkListener);
}this.hyperlinkListener=null;
});

Clazz.newMeth(C$, 'loadTextResource$S$Class',  function (resourceName, type) {
var url=null;
try {
url=$I$(5).getTextURL$S$Class(resourceName, type);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(6).fine$S("Error getting resource: " + resourceName);
return false;
} else {
throw ex;
}
}
if (url == null ) {
$I$(6).fine$S("Resource not found: " + resourceName);
return false;
}try {
this.textPane.setPage$java_net_URL(url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(6).fine$S("Resource not loadeded: " + resourceName);
return false;
} else {
throw ex;
}
}
this.setTitle$S(resourceName);
return true;
}, p$1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
