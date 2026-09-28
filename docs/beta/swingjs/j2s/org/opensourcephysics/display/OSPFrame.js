(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.OSPRuntime','java.util.ArrayList','Thread','javax.swing.JPanel','org.opensourcephysics.display.TeXParser','java.awt.Toolkit','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.tools.ResourceLoader','java.awt.event.WindowAdapter','java.awt.event.ComponentAdapter',['org.opensourcephysics.display.OSPFrame','.TranslatableButton']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame', ['org.opensourcephysics.display.Hidable', 'org.opensourcephysics.display.AppFrame']);
C$.$classes$=[['TranslatableButton',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.customButtons=Clazz.new_($I$(2,1));
this.animated=false;
this.autoclear=false;
this.wishesToExit=false;
this.constructorThreadGroup=$I$(3).currentThread$().getThreadGroup$();
this.keepHidden=false;
this.buttonPanel=Clazz.new_($I$(4,1));
this.childFrames=Clazz.new_($I$(2,1));
this.action=null;
this.adapter=null;
},1);

C$.$fields$=[['Z',['animated','autoclear','wishesToExit','keepHidden'],'I',['myFontLevel'],'S',['action'],'O',['customButtons','java.util.ArrayList','constructorThreadGroup','ThreadGroup','strategy','java.awt.image.BufferStrategy','buttonPanel','javax.swing.JPanel','childFrames','java.util.Collection','adapter','java.awt.event.ComponentAdapter']]
,['I',['topx','topy']]]

Clazz.newMeth(C$, 'getChooser$',  function () {
return $I$(1).getChooser$();
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
;C$.superclazz.c$$S.apply(this,[$I$(5).parseTeX$S(title)]);C$.$init$.apply(this);
if ($I$(1).appletMode) {
this.keepHidden=true;
}this.buttonPanel.setVisible$Z(false);
this.setLocation$I$I(C$.topx, C$.topy);
var d=$I$(6).getDefaultToolkit$().getScreenSize$();
C$.topx=Math.min(C$.topx + 20, (d.getWidth$()|0) - 100);
C$.topy=Math.min(C$.topy + 20, (d.getHeight$()|0) - 100);
this.setDefaultCloseOperation$I(1);
$I$(7,"addListener$S$java_beans_PropertyChangeListener",["level", ((P$.OSPFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.display.OSPFrame'].setFontLevel$I.apply(this.b$['org.opensourcephysics.display.OSPFrame'], [$I$(7).getLevel$()]);
});
})()
), Clazz.new_(P$.OSPFrame$1.$init$,[this, null]))]);
$I$(8,"addPropertyChangeListener$S$java_beans_PropertyChangeListener",["locale", ((P$.OSPFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.display.OSPFrame'].refreshGUI$.apply(this.b$['org.opensourcephysics.display.OSPFrame'], []);
});
})()
), Clazz.new_(P$.OSPFrame$2.$init$,[this, null]))]);
if (!$I$(1).isJS) try {
this.setIconImage$java_awt_Image($I$(9).getImageIcon$S("/org/opensourcephysics/resources/controls/images/osp_icon.gif").getImage$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.addWindowListener$java_awt_event_WindowListener(((P$.OSPFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent',  function (e) {
this.b$['org.opensourcephysics.display.OSPFrame'].disposeChildWindows$.apply(this.b$['org.opensourcephysics.display.OSPFrame'], []);
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.OSPFrame$3)));
}, 1);

Clazz.newMeth(C$, ['setResizeAction$S','setResizeAction'],  function (o) {
if (o == null ) {
if (this.adapter != null ) {
this.removeComponentListener$java_awt_event_ComponentListener(this.adapter);
}this.action=o;
return;
}if (o.equals$O(this.action)) return;
this.removeComponentListener$java_awt_event_ComponentListener(this.adapter);
this.action=o;
this.addComponentListener$java_awt_event_ComponentListener(this.adapter=((P$.OSPFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {

// find object
var fn = window[o];
// is object a function?
if (typeof fn === "function") fn();
});
})()
), Clazz.new_($I$(11,1),[this, null],P$.OSPFrame$4)));
});

Clazz.newMeth(C$, 'disposeChildWindows$',  function () {
var it=this.childFrames.iterator$();
while (it.hasNext$()){
var f=it.next$();
if (!f.isDisplayable$()) {
continue;
}if (Clazz.instanceOf(f, "org.opensourcephysics.display.OSPFrame")) {
(f).setKeepHidden$Z(true);
} else {
f.setVisible$Z(false);
}f.dispose$();
}
this.childFrames.clear$();
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, ["Open Source Physics"]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Container',  function (contentPane) {
C$.c$.apply(this, []);
this.setContentPane$java_awt_Container(contentPane);
}, 1);

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
C$.superclazz.prototype.setTitle$S.apply(this, [$I$(5).parseTeX$S(title)]);
});

Clazz.newMeth(C$, 'addChildFrame$javax_swing_JFrame',  function (frame) {
if ((frame == null ) || !frame.isDisplayable$() ) {
return;
}this.childFrames.add$O(frame);
});

Clazz.newMeth(C$, 'clearChildFrames$',  function () {
this.childFrames.clear$();
});

Clazz.newMeth(C$, 'getChildFrames$',  function () {
return Clazz.new_($I$(2,1).c$$java_util_Collection,[this.childFrames]);
});

Clazz.newMeth(C$, 'isIconified$',  function () {
return (this.getExtendedState$() & 1) == 1;
});

Clazz.newMeth(C$, 'invalidateImage$',  function () {
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
try {
$I$(7).setFonts$java_awt_Container(this);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Err: OSPFrame line 220.");
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'isAnimated$',  function () {
return this.animated;
});

Clazz.newMeth(C$, 'setAnimated$Z',  function (animated) {
this.animated=animated;
});

Clazz.newMeth(C$, 'isAutoclear$',  function () {
return this.autoclear;
});

Clazz.newMeth(C$, 'setAutoclear$Z',  function (autoclear) {
this.autoclear=autoclear;
});

Clazz.newMeth(C$, 'loadDisplayMenu$',  function () {
return null;
});

Clazz.newMeth(C$, 'loadToolsMenu$',  function () {
return null;
});

Clazz.newMeth(C$, 'clearData$',  function () {
});

Clazz.newMeth(C$, 'clearDataAndRepaint$',  function () {
});

Clazz.newMeth(C$, 'setSize$I$I',  function (width, height) {
C$.superclazz.prototype.setSize$I$I.apply(this, [width, height]);
this.validate$();
});

Clazz.newMeth(C$, 'show$',  function () {
if (!this.keepHidden) {
C$.superclazz.prototype.show$.apply(this, []);
}});

Clazz.newMeth(C$, 'dispose$',  function () {
this.keepHidden=true;
this.clearData$();
this.disposeChildWindows$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (!this.keepHidden) {
var shouldRender=(!this.isVisible$()) && this.animated ;
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (shouldRender) {
this.render$();
}}});

Clazz.newMeth(C$, 'setKeepHidden$Z',  function (_keepHidden) {
this.keepHidden=_keepHidden;
if (this.keepHidden) {
C$.superclazz.prototype.setVisible$Z.apply(this, [false]);
}});

Clazz.newMeth(C$, 'isKeepHidden$',  function () {
return this.keepHidden;
});

Clazz.newMeth(C$, 'getConstructorThreadGroup$',  function () {
return this.constructorThreadGroup;
});

Clazz.newMeth(C$, 'createBufferStrategy$',  function () {
this.createBufferStrategy$I(2);
this.strategy=this.getBufferStrategy$();
});

Clazz.newMeth(C$, 'bufferStrategyShow$',  function () {
if ((this.strategy) == null ) {
this.createBufferStrategy$();
}if (this.isIconified$() || !this.isShowing$() ) {
return;
}var g=this.strategy.getDrawGraphics$();
this.paintComponents$java_awt_Graphics(g);
g.dispose$();
this.strategy.show$();
});

Clazz.newMeth(C$, 'render$',  function () {
});

Clazz.newMeth(C$, 'getMenu$S',  function (menuName) {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return null;
}menuName=menuName.trim$();
var menu=null;
for (var i=0; i < menuBar.getMenuCount$(); i++) {
var next=menuBar.getMenu$I(i);
if (next.getText$().trim$().equals$O(menuName)) {
menu=next;
break;
}}
return menu;
});

Clazz.newMeth(C$, 'removeMenu$S',  function (menuName) {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return null;
}menuName=menuName.trim$();
var menu=null;
for (var i=0; i < menuBar.getMenuCount$(); i++) {
var next=menuBar.getMenu$I(i);
if (next.getText$().trim$().equals$O(menuName)) {
menu=next;
menuBar.remove$I(i);
break;
}}
return menu;
});

Clazz.newMeth(C$, 'removeMenuItem$S$S',  function (menuName, itemName) {
var menu=this.getMenu$S(menuName);
if (menu == null ) {
return null;
}itemName=itemName.trim$();
var item=null;
for (var i=0; i < menu.getItemCount$(); i++) {
var next=menu.getItem$I(i);
if (next.getText$().trim$().equals$O(itemName)) {
item=next;
menu.remove$I(i);
break;
}}
return item;
});

Clazz.newMeth(C$, 'parseXMLMenu$S',  function (xmlMenu) {
this.parseXMLMenu$S$Class(xmlMenu, null);
});

Clazz.newMeth(C$, 'parseXMLMenu$S$Class',  function (xmlMenu, type) {
System.out.println$S("The parseXMLMenu method has been disabled to reduce the size OSP jar files.");
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
var it=this.customButtons.iterator$();
while (it.hasNext$()){
var b=it.next$();
b.refreshGUI$();
}
this.buttonPanel.validate$();
});

Clazz.newMeth(C$, 'addButton$S$S$S$O',  function (methodName, text, toolTipText, target) {
var b=Clazz.new_($I$(12,1).c$$S$S$O,[this, null, text, toolTipText, target]);
if ($I$(1).loadTranslatorTool) {
text=$I$(1).getTranslator$().getProperty$Class$S$S(target.getClass$(), "custom_button." + text, text);
toolTipText=$I$(1).getTranslator$().getProperty$Class$S$S(target.getClass$(), "custom_button." + toolTipText, toolTipText);
}b.setText$S(text);
b.setToolTipText$S(toolTipText);
var parameters=Clazz.array(Class, -1, []);
try {
var m=target.getClass$().getMethod$S$ClassA(methodName, parameters);
b.addActionListener$java_awt_event_ActionListener(((P$.OSPFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var args=Clazz.array(java.lang.Object, -1, []);
try {
this.$finals$.m.invoke$O$OA(this.$finals$.target, args);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var iae = e$$;
{
System.err.println$O(iae);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ite = e$$;
{
System.err.println$O(ite);
}
} else {
throw e$$;
}
}
});
})()
), Clazz.new_(P$.OSPFrame$5.$init$,[this, {m:m,target:target}])));
this.buttonPanel.setVisible$Z(true);
this.buttonPanel.add$java_awt_Component(b);
this.validate$();
this.pack$();
} catch (nsme) {
if (Clazz.exceptionOf(nsme,"NoSuchMethodException")){
System.err.println$S("Error adding custom button " + text + ". The method " + methodName + "() does not exist." );
} else {
throw nsme;
}
}
this.customButtons.add$O(b);
return b;
});

Clazz.newMeth(C$, 'setDefaultCloseOperation$I',  function (operation) {
if ((operation == 3) && $I$(1).launchingInSingleVM ) {
operation=2;
this.wishesToExit=true;
}try {
C$.superclazz.prototype.setDefaultCloseOperation$I.apply(this, [operation]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'wishesToExit$',  function () {
return this.wishesToExit;
});

C$.$static$=function(){C$.$static$=0;
C$.topx=10;
C$.topy=100;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPFrame, "TranslatableButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['$text','tip'],'O',['target','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$S$S$O',  function (text, tip, target) {
Clazz.super_(C$, this);
this.$text=text;
this.tip=tip;
this.target=target;
}, 1);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if ($I$(1).loadTranslatorTool) {
this.setText$S($I$(1).getTranslator$().getProperty$Class$S$S(this.target.getClass$(), "custom_button." + this.$text, this.$text));
this.setToolTipText$S($I$(1).getTranslator$().getProperty$Class$S$S(this.target.getClass$(), "custom_button." + this.tip, this.tip));
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
