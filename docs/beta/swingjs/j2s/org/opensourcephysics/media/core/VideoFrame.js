(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.display.OSPRuntime','javax.swing.JToolBar','java.awt.Toolkit','javax.swing.KeyStroke','javax.swing.JMenuItem','org.opensourcephysics.media.core.VideoIO','javax.swing.AbstractAction']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoFrame", null, 'org.opensourcephysics.display.DrawingFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['openAction','javax.swing.Action','+saveAction','+openVideoAction','openItem','javax.swing.JMenuItem','+saveAsItem','+saveItem','+openVideoItem','+exitItem']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_VideoPanel',  function (vidPanel) {
C$.c$$S$org_opensourcephysics_media_core_VideoPanel.apply(this, [$I$(1).getString$S("VideoFrame.Title"), vidPanel]);
}, 1);

Clazz.newMeth(C$, 'c$$S$org_opensourcephysics_media_core_VideoPanel',  function (title, vidPanel) {
;C$.superclazz.c$$S$org_opensourcephysics_display_DrawingPanel.apply(this,[title, vidPanel]);C$.$init$.apply(this);
if (!$I$(2).appletMode) {
this.createActions$();
this.modifyMenuBar$();
var playerBar=Clazz.new_($I$(3,1));
playerBar.setFloatable$Z(false);
this.add$java_awt_Component$O(playerBar, "South");
vidPanel.setPlayerVisible$Z(false);
playerBar.add$java_awt_Component(vidPanel.getPlayer$());
}}, 1);

Clazz.newMeth(C$, 'modifyMenuBar$',  function () {
var keyMask=$I$(4).getDefaultToolkit$().getMenuShortcutKeyMask$();
this.openItem=this.fileMenu.insert$javax_swing_Action$I(this.openAction, 0);
this.openItem.setAccelerator$javax_swing_KeyStroke($I$(5,"getKeyStroke$I$I",["O".$c(), keyMask]));
this.saveAsItem=Clazz.new_([$I$(1).getString$S("VideoFrame.MenuItem.SaveAs")],$I$(6,1).c$$S);
this.fileMenu.insert$javax_swing_JMenuItem$I(this.saveAsItem, 1);
this.saveAsItem.addActionListener$java_awt_event_ActionListener(((P$.VideoFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).save$java_io_File$org_opensourcephysics_media_core_VideoPanel(null, this.b$['org.opensourcephysics.media.core.VideoFrame'].drawingPanel);
});
})()
), Clazz.new_(P$.VideoFrame$1.$init$,[this, null])));
this.saveItem=this.fileMenu.insert$javax_swing_Action$I(this.saveAction, 2);
this.saveItem.setAccelerator$javax_swing_KeyStroke($I$(5,"getKeyStroke$I$I",["S".$c(), keyMask]));
this.fileMenu.insertSeparator$I(5);
this.fileMenu.addSeparator$();
this.exitItem=Clazz.new_([$I$(1).getString$S("VideoFrame.MenuItem.Exit")],$I$(6,1).c$$S);
this.fileMenu.add$javax_swing_JMenuItem(this.exitItem);
this.exitItem.setAccelerator$javax_swing_KeyStroke($I$(5,"getKeyStroke$I$I",["Q".$c(), keyMask]));
this.exitItem.addActionListener$java_awt_event_ActionListener(((P$.VideoFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
System.exit$I(0);
});
})()
), Clazz.new_(P$.VideoFrame$2.$init$,[this, null])));
this.setJMenuBar$javax_swing_JMenuBar(this.getJMenuBar$());
});

Clazz.newMeth(C$, 'createActions$',  function () {
this.openAction=((P$.VideoFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7).openVideoPanelFileAsync$java_io_File$org_opensourcephysics_media_core_VideoPanel(null, this.b$['org.opensourcephysics.media.core.VideoFrame'].drawingPanel);
});
})()
), Clazz.new_([this, null, $I$(1).getString$S("VideoFrame.MenuItem.Open")],$I$(8,1).c$$S,P$.VideoFrame$3));
this.saveAction=((P$.VideoFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "VideoFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var vidPanel=this.b$['org.opensourcephysics.media.core.VideoFrame'].drawingPanel;
$I$(7,"save$java_io_File$org_opensourcephysics_media_core_VideoPanel",[vidPanel.getDataFile$(), vidPanel]);
});
})()
), Clazz.new_([this, null, $I$(1).getString$S("VideoFrame.MenuItem.Save")],$I$(8,1).c$$S,P$.VideoFrame$4));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
