(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),p$1={},I$=[[0,'java.awt.Toolkit','org.opensourcephysics.display.DrawingPanel','java.awt.Dimension','org.opensourcephysics.display.DisplayRes','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.PrintUtils','org.opensourcephysics.display.GUIUtils','java.awt.image.BufferedImage','org.opensourcephysics.tools.SnapshotTool','org.opensourcephysics.tools.FontSizer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageFrame", null, 'org.opensourcephysics.display.OSPFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['chooserTitle'],'O',['image','java.awt.image.BufferedImage','fileMenu','javax.swing.JMenu','+editMenu','+saveImageMenu','copyItem','javax.swing.JMenuItem','+printItem','+exitItem','+epsItem','+gifItem','+jpgItem','+pngItem','drawingPanel','org.opensourcephysics.display.DrawingPanel']]
,['I',['MENU_SHORTCUT_KEY_MASK']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_MeasuredImage',  function (measuredImage) {
Clazz.super_(C$, this);
this.drawingPanel=Clazz.new_($I$(2,1));
this.setContentPane$java_awt_Container(this.drawingPanel);
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(measuredImage);
this.drawingPanel.setPreferredMinMax$D$D$D$D(measuredImage.getXMin$(), measuredImage.getXMax$(), measuredImage.getYMin$(), measuredImage.getYMax$());
this.image=measuredImage.getImage$();
var w=this.image.getWidth$();
var h=this.image.getHeight$();
this.drawingPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[w + 1, h + 1]));
p$1.createMenuBar.apply(this, []);
this.pack$();
this.chooserTitle=$I$(4).getString$S("GUIUtils.Title.SaveImage");
}, 1);

Clazz.newMeth(C$, 'createMenuBar',  function () {
var menuBar=Clazz.new_($I$(5,1));
this.fileMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.File_menu_item")],$I$(6,1).c$$S);
this.printItem=Clazz.new_([$I$(4).getString$S("ImageFrame.Print_menu_item")],$I$(7,1).c$$S);
this.printItem.setAccelerator$javax_swing_KeyStroke($I$(8,"getKeyStroke$I$I",["P".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
if (!$I$(9).isJS) this.printItem.addActionListener$java_awt_event_ActionListener(((P$.ImageFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(10).printComponent$java_awt_Component(this.b$['org.opensourcephysics.frames.ImageFrame'].drawingPanel);
});
})()
), Clazz.new_(P$.ImageFrame$1.$init$,[this, null])));
this.saveImageMenu=Clazz.new_([$I$(4).getString$S("ImageFrame.SaveAs_menu_item")],$I$(6,1).c$$S);
this.epsItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.EPS_menu_item")],$I$(7,1).c$$S);
this.gifItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.GIF_menu_item")],$I$(7,1).c$$S);
this.jpgItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.JPEG_menu_item")],$I$(7,1).c$$S);
this.pngItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.PNG_menu_item")],$I$(7,1).c$$S);
this.saveImageMenu.add$javax_swing_JMenuItem(this.epsItem);
this.saveImageMenu.add$javax_swing_JMenuItem(this.gifItem);
this.saveImageMenu.add$javax_swing_JMenuItem(this.jpgItem);
this.saveImageMenu.add$javax_swing_JMenuItem(this.pngItem);
this.epsItem.addActionListener$java_awt_event_ActionListener(((P$.ImageFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var description=$I$(4).getString$S("ImageFrame.EPS_filter_description");
var extensions=Clazz.array(String, -1, ["eps", "EPS"]);
$I$(11).saveImageAs$javax_swing_JComponent$S$S$S$SA(this.b$['org.opensourcephysics.frames.ImageFrame'].drawingPanel, "eps", this.b$['org.opensourcephysics.frames.ImageFrame'].chooserTitle, description, extensions);
});
})()
), Clazz.new_(P$.ImageFrame$2.$init$,[this, null])));
this.gifItem.addActionListener$java_awt_event_ActionListener(((P$.ImageFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var description=$I$(4).getString$S("ImageFrame.GIF_filter_description");
var extensions=Clazz.array(String, -1, ["gif", "GIF"]);
$I$(11).saveImageAs$javax_swing_JComponent$S$S$S$SA(this.b$['org.opensourcephysics.frames.ImageFrame'].drawingPanel, "gif", this.b$['org.opensourcephysics.frames.ImageFrame'].chooserTitle, description, extensions);
});
})()
), Clazz.new_(P$.ImageFrame$3.$init$,[this, null])));
this.jpgItem.addActionListener$java_awt_event_ActionListener(((P$.ImageFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var description=$I$(4).getString$S("ImageFrame.JPEG_filter_description");
var extensions=Clazz.array(String, -1, ["jpg", "jpeg", "JPG", "JPEG"]);
$I$(11).saveImageAs$javax_swing_JComponent$S$S$S$SA(this.b$['org.opensourcephysics.frames.ImageFrame'].drawingPanel, "jpeg", this.b$['org.opensourcephysics.frames.ImageFrame'].chooserTitle, description, extensions);
});
})()
), Clazz.new_(P$.ImageFrame$4.$init$,[this, null])));
this.pngItem.addActionListener$java_awt_event_ActionListener(((P$.ImageFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var description=$I$(4).getString$S("ImageFrame.PNG_filter_description");
var extensions=Clazz.array(String, -1, ["png", "PNG"]);
$I$(11).saveImageAs$javax_swing_JComponent$S$S$S$SA(this.b$['org.opensourcephysics.frames.ImageFrame'].drawingPanel, "png", this.b$['org.opensourcephysics.frames.ImageFrame'].chooserTitle, description, extensions);
});
})()
), Clazz.new_(P$.ImageFrame$5.$init$,[this, null])));
if (!$I$(9).isApplet) {
if (!$I$(9).isJS) this.fileMenu.add$javax_swing_JMenuItem(this.saveImageMenu);
this.fileMenu.addSeparator$();
if (!$I$(9).isJS) this.fileMenu.add$javax_swing_JMenuItem(this.printItem);
}menuBar.add$javax_swing_JMenu(this.fileMenu);
this.editMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Edit_menu_title")],$I$(6,1).c$$S);
menuBar.add$javax_swing_JMenu(this.editMenu);
this.copyItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.Copy_menu_item")],$I$(7,1).c$$S);
this.copyItem.setAccelerator$javax_swing_KeyStroke($I$(8,"getKeyStroke$I$I",["C".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
this.copyItem.addActionListener$java_awt_event_ActionListener(((P$.ImageFrame$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var bi=Clazz.new_([this.b$['org.opensourcephysics.frames.ImageFrame'].drawingPanel.getWidth$(), this.b$['org.opensourcephysics.frames.ImageFrame'].drawingPanel.getHeight$(), 5],$I$(12,1).c$$I$I$I);
var g=bi.getGraphics$();
this.b$['org.opensourcephysics.frames.ImageFrame'].drawingPanel.paint$java_awt_Graphics(g);
g.dispose$();
$I$(13).getTool$().copyImage$java_awt_Image(bi);
});
})()
), Clazz.new_(P$.ImageFrame$6.$init$,[this, null])));
this.editMenu.add$javax_swing_JMenuItem(this.copyItem);
this.setJMenuBar$javax_swing_JMenuBar(menuBar);
this.loadDisplayMenu$();
var helpMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Help_menu_item")],$I$(6,1).c$$S);
menuBar.add$javax_swing_JMenu(helpMenu);
var aboutItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.AboutOSP_menu_item")],$I$(7,1).c$$S);
aboutItem.setAccelerator$javax_swing_KeyStroke($I$(8,"getKeyStroke$I$I",["A".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
aboutItem.addActionListener$java_awt_event_ActionListener(((P$.ImageFrame$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageFrame$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9).showAboutDialog$java_awt_Component(this.b$['org.opensourcephysics.frames.ImageFrame']);
});
})()
), Clazz.new_(P$.ImageFrame$7.$init$,[this, null])));
helpMenu.add$javax_swing_JMenuItem(aboutItem);
}, p$1);

Clazz.newMeth(C$, 'loadDisplayMenu$',  function () {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return null;
}var displayMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Display_menu_title")],$I$(6,1).c$$S);
menuBar.add$javax_swing_JMenu(displayMenu);
var fontMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Font_menu_title")],$I$(6,1).c$$S);
displayMenu.add$javax_swing_JMenuItem(fontMenu);
var sizeUpItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.IncreaseFontSize_menu_item")],$I$(7,1).c$$S);
sizeUpItem.addActionListener$java_awt_event_ActionListener(((P$.ImageFrame$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageFrame$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(14).levelUp$();
});
})()
), Clazz.new_(P$.ImageFrame$8.$init$,[this, null])));
fontMenu.add$javax_swing_JMenuItem(sizeUpItem);
var sizeDownItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.DecreaseFontSize_menu_item")],$I$(7,1).c$$S);
sizeDownItem.addActionListener$java_awt_event_ActionListener(((P$.ImageFrame$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageFrame$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(14).levelDown$();
});
})()
), Clazz.new_(P$.ImageFrame$9.$init$,[this, null])));
fontMenu.add$javax_swing_JMenuItem(sizeDownItem);
fontMenu.addChangeListener$javax_swing_event_ChangeListener(((P$.ImageFrame$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageFrame$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.$finals$.sizeDownItem.setEnabled$Z($I$(14).getLevel$() > 0);
});
})()
), Clazz.new_(P$.ImageFrame$10.$init$,[this, {sizeDownItem:sizeDownItem}])));
return displayMenu;
});

Clazz.newMeth(C$, 'newFrame$org_opensourcephysics_display_MeasuredImage',  function (mi) {
return Clazz.new_(C$.c$$org_opensourcephysics_display_MeasuredImage,[mi]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MENU_SHORTCUT_KEY_MASK=$I$(1).getDefaultToolkit$().getMenuShortcutKeyMask$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
