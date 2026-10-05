(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.display.DrawingFrame','java.awt.Toolkit','java.util.ArrayList','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.InteractivePanel','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XMLTreeChooser','org.opensourcephysics.display.Drawable','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','org.opensourcephysics.display.PrintUtils','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.Tool','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.controls.ControlUtils','org.opensourcephysics.tools.FontSizer','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.tools.SnapshotTool','java.lang.reflect.Modifier','org.opensourcephysics.controls.XMLTreePanel','javax.swing.JDialog','java.awt.Dimension','java.io.File','javax.swing.JOptionPane',['org.opensourcephysics.display.DrawingFrame','.DrawingFrameLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawingFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.OSPFrame', 'java.awt.datatransfer.ClipboardOwner');
C$.$classes$=[['DrawingFrameLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.EMPTY_LIST=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['fileMenu','javax.swing.JMenu','+editMenu','copyItem','javax.swing.JMenuItem','+pasteItem','+replaceItem','drawingPanel','org.opensourcephysics.display.DrawingPanel','customInspector','java.awt.Window','reply','org.opensourcephysics.tools.Tool','EMPTY_LIST','java.util.ArrayList']]
,['I',['MENU_SHORTCUT_KEY_MASK']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$org_opensourcephysics_display_DrawingPanel.apply(this, [$I$(4).getString$S("DrawingFrame.DefaultTitle"), Clazz.new_($I$(5,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DrawingPanel',  function (drawingPanel) {
C$.c$$S$org_opensourcephysics_display_DrawingPanel.apply(this, [$I$(4).getString$S("DrawingFrame.DefaultTitle"), drawingPanel]);
}, 1);

Clazz.newMeth(C$, 'c$$S$org_opensourcephysics_display_DrawingPanel',  function (title, _drawingPanel) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
this.drawingPanel=_drawingPanel;
if (this.drawingPanel != null ) {
this.getContentPane$().add$java_awt_Component$O(this.drawingPanel, "Center");
}this.getContentPane$().add$java_awt_Component$O(this.buttonPanel, "South");
this.pack$();
if (!$I$(6).appletMode) {
p$1.createMenuBar.apply(this, []);
}this.reply=((P$.DrawingFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.tools.Tool', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, noReply) {
this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel.receiveToolReply$org_opensourcephysics_tools_Job(job);
this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel.repaint$();
});
})()
), Clazz.new_(P$.DrawingFrame$1.$init$,[this, null]));
}, 1);

Clazz.newMeth(C$, 'render$',  function () {
if (this.isIconified$() || !this.isShowing$() ) {
return;
}if (this.drawingPanel != null ) {
this.drawingPanel.render$();
} else {
this.repaint$();
}});

Clazz.newMeth(C$, 'invalidateImage$',  function () {
if (this.drawingPanel != null ) {
this.drawingPanel.invalidateImage$();
}});

Clazz.newMeth(C$, 'getDrawingPanel$',  function () {
return this.drawingPanel;
});

Clazz.newMeth(C$, 'setXLabel$S',  function (label) {
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setXLabel$S(label);
}});

Clazz.newMeth(C$, 'setYLabel$S',  function (label) {
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setYLabel$S(label);
}});

Clazz.newMeth(C$, 'setPolar$S$D',  function (plotTitle, deltaR) {
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setPolar$S$D(plotTitle, deltaR);
}});

Clazz.newMeth(C$, 'setCartesian$S$S$S',  function (xLabel, yLabel, plotTitle) {
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).setCartesian$S$S$S(xLabel, yLabel, plotTitle);
}});

Clazz.newMeth(C$, 'limitAutoscaleX$D$D',  function (floor, ceil) {
if (this.drawingPanel != null ) this.drawingPanel.limitAutoscaleX$D$D(floor, ceil);
});

Clazz.newMeth(C$, 'limitAutoscaleY$D$D',  function (floor, ceil) {
if (this.drawingPanel != null ) this.drawingPanel.limitAutoscaleY$D$D(floor, ceil);
});

Clazz.newMeth(C$, 'setAutoscaleX$Z',  function (autoscale) {
if (this.drawingPanel != null ) {
this.drawingPanel.setAutoscaleX$Z(autoscale);
}});

Clazz.newMeth(C$, 'isAutoscaleX$',  function () {
if (this.drawingPanel != null ) {
return this.drawingPanel.isAutoscaleX$();
}return false;
});

Clazz.newMeth(C$, 'setAutoscaleY$Z',  function (autoscale) {
if (this.drawingPanel != null ) {
this.drawingPanel.setAutoscaleY$Z(autoscale);
}});

Clazz.newMeth(C$, 'isAutoscaleY$',  function () {
if (this.drawingPanel != null ) {
return this.drawingPanel.isAutoscaleY$();
}return false;
});

Clazz.newMeth(C$, 'setSquareAspect$Z',  function (isSquare) {
if (this.drawingPanel != null ) {
this.drawingPanel.setSquareAspect$Z(isSquare);
}});

Clazz.newMeth(C$, 'setLogScale$Z$Z',  function (logX, logY) {
if ((this.drawingPanel != null ) && (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) ) {
(this.drawingPanel).setLogScale$Z$Z(logX, logY);
}});

Clazz.newMeth(C$, 'setPixelsPerUnit$Z$D$D',  function (enable, xPixPerUnit, yPixPerUnit) {
if (this.drawingPanel != null ) this.drawingPanel.setPixelsPerUnit$Z$D$D(enable, xPixPerUnit, yPixPerUnit);
});

Clazz.newMeth(C$, 'setPreferredMinMax$D$D$D$D',  function (xmin, xmax, ymin, ymax) {
if (this.drawingPanel != null ) {
this.drawingPanel.setPreferredMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
}});

Clazz.newMeth(C$, 'setPreferredMinMaxY$D$D',  function (ymin, ymax) {
if (this.drawingPanel != null ) {
this.drawingPanel.setPreferredMinMaxY$D$D(ymin, ymax);
}});

Clazz.newMeth(C$, 'setPreferredMinMaxX$D$D',  function (xmin, xmax) {
if (this.drawingPanel != null ) {
this.drawingPanel.setPreferredMinMaxX$D$D(xmin, xmax);
}});

Clazz.newMeth(C$, 'clearDataAndRepaint$',  function () {
this.clearData$();
if (this.drawingPanel != null ) this.drawingPanel.repaint$();
});

Clazz.newMeth(C$, 'clearDrawables$',  function () {
if (this.drawingPanel != null ) this.drawingPanel.clear$();
});

Clazz.newMeth(C$, 'addDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
if (this.drawingPanel != null ) {
this.drawingPanel.addDrawable$org_opensourcephysics_display_Drawable(drawable);
}});

Clazz.newMeth(C$, 'replaceDrawable$org_opensourcephysics_display_Drawable$org_opensourcephysics_display_Drawable',  function (oldDrawable, newDrawable) {
if (this.drawingPanel != null ) {
this.drawingPanel.replaceDrawable$org_opensourcephysics_display_Drawable$org_opensourcephysics_display_Drawable(oldDrawable, newDrawable);
}});

Clazz.newMeth(C$, 'removeDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
if (this.drawingPanel != null ) {
this.drawingPanel.removeDrawable$org_opensourcephysics_display_Drawable(drawable);
}});

Clazz.newMeth(C$, 'setMessage$S',  function (msg) {
if (this.drawingPanel != null ) this.drawingPanel.setMessage$S(msg);
});

Clazz.newMeth(C$, 'setMessage$S$I',  function (msg, location) {
if (this.drawingPanel != null ) this.drawingPanel.setMessage$S$I(msg, location);
});

Clazz.newMeth(C$, 'getObjectOfClass$Class',  function (c) {
if (this.drawingPanel != null ) {
return this.drawingPanel.getObjectOfClass$Class(c);
}return null;
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
if (this.drawingPanel != null ) {
return this.drawingPanel.getDrawables$();
}return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getDrawablesNoClone$',  function () {
return (this.drawingPanel == null  ? this.EMPTY_LIST : this.drawingPanel.getDrawablesNoClone$());
});

Clazz.newMeth(C$, 'getAxes$',  function () {
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
return (this.drawingPanel).getAxes$();
}return null;
});

Clazz.newMeth(C$, 'getDrawables$Class',  function (c) {
if (this.drawingPanel != null ) {
return this.drawingPanel.getDrawables$Class(c);
}return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getDrawablesExcept$Class$org_opensourcephysics_display_Drawable',  function (c, except) {
if (this.drawingPanel != null ) {
return this.drawingPanel.getDrawablesExcept$Class$org_opensourcephysics_display_Drawable(c, except);
}return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'removeObjectsOfClass$Class',  function (c) {
if (this.drawingPanel != null ) this.drawingPanel.removeObjectsOfClass$Class(c);
});

Clazz.newMeth(C$, 'setInteractiveMouseHandler$org_opensourcephysics_display_InteractiveMouseHandler',  function (handler) {
(this.drawingPanel).setInteractiveMouseHandler$org_opensourcephysics_display_InteractiveMouseHandler(handler);
});

Clazz.newMeth(C$, 'setDrawingPanel$org_opensourcephysics_display_DrawingPanel',  function (_drawingPanel) {
if (this.drawingPanel != null ) {
this.getContentPane$().remove$java_awt_Component(this.drawingPanel);
}this.drawingPanel=_drawingPanel;
if (this.drawingPanel != null ) {
this.getContentPane$().add$java_awt_Component$O(this.drawingPanel, "Center");
}});

Clazz.newMeth(C$, 'setInteriorBackground$java_awt_Color',  function (color) {
if (Clazz.instanceOf(this.drawingPanel, "org.opensourcephysics.display.PlottingPanel")) {
(this.drawingPanel).getAxes$().setInteriorBackground$java_awt_Color(color);
} else {
if (this.drawingPanel != null ) this.drawingPanel.setBackground$java_awt_Color(color);
}});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (!$I$(6).appletMode) {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
return;
}try {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("OSPFrame paint error: " + ex.toString());
System.err.println$S("Title: " + this.getTitle$());
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'setEnabledPaste$Z',  function (enable) {
this.pasteItem.setEnabled$Z(enable);
});

Clazz.newMeth(C$, 'pasteAction$org_opensourcephysics_controls_XMLControlElement',  function (control) {
System.err.println$S("DrawingFrame Line 568");
var chooser=Clazz.new_([$I$(4).getString$S("DrawingFrame.SelectDrawables_chooser_title"), $I$(4).getString$S("DrawingFrame.SelectDrawables_chooser_message"), this],$I$(7,1).c$$S$S$java_awt_Component);
chooser.chooseAsync$org_opensourcephysics_controls_XMLControl$Class$Runnable(control, Clazz.getClass($I$(8),['draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics','isInteractive$']), ((P$.DrawingFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var props=this.$finals$.chooser.getList$();
if (!props.isEmpty$()) {
var it=props.iterator$();
while (it.hasNext$()){
var prop=it.next$();
var drawable=prop.loadObject$O(null);
this.b$['org.opensourcephysics.display.DrawingFrame'].addDrawable$org_opensourcephysics_display_Drawable.apply(this.b$['org.opensourcephysics.display.DrawingFrame'], [drawable]);
}
}this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel.repaint$();
});
})()
), Clazz.new_(P$.DrawingFrame$2.$init$,[this, {chooser:chooser}])));
});

Clazz.newMeth(C$, 'setEnabledReplace$Z',  function (enable) {
this.replaceItem.setEnabled$Z(enable);
});

Clazz.newMeth(C$, 'replaceAction$org_opensourcephysics_controls_XMLControlElement',  function (control) {
this.clearDrawables$();
this.pasteAction$org_opensourcephysics_controls_XMLControlElement(control);
});

Clazz.newMeth(C$, 'copyAction$org_opensourcephysics_controls_XMLControlElement',  function (control) {
$I$(6,"copy$S$java_awt_datatransfer_ClipboardOwner",[control.toXML$(), this]);
});

Clazz.newMeth(C$, 'lostOwnership$java_awt_datatransfer_Clipboard$java_awt_datatransfer_Transferable',  function (clipboard, contents) {
});

Clazz.newMeth(C$, 'setEnabledCopy$Z',  function (enable) {
this.copyItem.setEnabled$Z(enable);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
p$1.createMenuBar.apply(this, []);
this.addMenuItems$();
this.pack$();
});

Clazz.newMeth(C$, 'addMenuItems$',  function () {
});

Clazz.newMeth(C$, 'createMenuBar',  function () {
var menuBar=Clazz.new_($I$(9,1));
this.fileMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.File_menu_item")],$I$(10,1).c$$S);
var printMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Print_menu_title")],$I$(10,1).c$$S);
var printItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.Print_menu_item")],$I$(11,1).c$$S);
if (!$I$(6).isJS) {
printMenu.add$javax_swing_JMenuItem(printItem);
printItem.setAccelerator$javax_swing_KeyStroke($I$(12,"getKeyStroke$I$I",["P".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
printItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(13).printComponent$java_awt_Component(this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda1.$init$,[this, null])));
var printFrameItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.PrintFrame_menu_item")],$I$(11,1).c$$S);
printMenu.add$javax_swing_JMenuItem(printFrameItem);
printFrameItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(13).printComponent$java_awt_Component(this.b$['org.opensourcephysics.display.DrawingFrame']);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda2.$init$,[this, null])));
}var saveXMLItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.SaveXML_menu_item")],$I$(11,1).c$$S);
saveXMLItem.setAccelerator$javax_swing_KeyStroke($I$(12,"getKeyStroke$I$I",["S".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
saveXMLItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.display.DrawingFrame'].saveXML$.apply(this.b$['org.opensourcephysics.display.DrawingFrame'], []);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda3.$init$,[this, null])));
var exportItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.Export_menu_item")],$I$(11,1).c$$S);
exportItem.setAccelerator$javax_swing_KeyStroke($I$(12,"getKeyStroke$I$I",["E".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
if ($I$(6).loadExportTool) {
$I$(14).fine$S("Loading ExportTool");
if (!$I$(15).setSendAction$javax_swing_JMenuItem$S$O$org_opensourcephysics_tools_Tool$Z(exportItem, "ExportTool", this.drawingPanel, this.reply, false)) {
$I$(6).loadExportTool=false;
exportItem.setEnabled$Z(false);
}}$I$(14).info$S("Done with Export Tool");
var saveImage=Clazz.new_([$I$(4).getString$S("DrawingFrame.SaveImage_menu_title")],$I$(10,1).c$$S);
var epsMenuItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.EPS_menu_item")],$I$(11,1).c$$S);
var jpegMenuItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.JPEG_menu_item")],$I$(11,1).c$$S);
var pngMenuItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.PNG_menu_item")],$I$(11,1).c$$S);
saveImage.add$javax_swing_JMenuItem(epsMenuItem);
saveImage.add$javax_swing_JMenuItem(jpegMenuItem);
saveImage.add$javax_swing_JMenuItem(pngMenuItem);
epsMenuItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(16).saveImage$javax_swing_JComponent$S$java_awt_Component(this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel, "eps", this.b$['org.opensourcephysics.display.DrawingFrame']);
});
})()
), Clazz.new_(P$.DrawingFrame$3.$init$,[this, null])));
jpegMenuItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(16).saveImage$javax_swing_JComponent$S$java_awt_Component(this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel, "jpeg", this.b$['org.opensourcephysics.display.DrawingFrame']);
});
})()
), Clazz.new_(P$.DrawingFrame$4.$init$,[this, null])));
pngMenuItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(16).saveImage$javax_swing_JComponent$S$java_awt_Component(this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel, "png", this.b$['org.opensourcephysics.display.DrawingFrame']);
});
})()
), Clazz.new_(P$.DrawingFrame$5.$init$,[this, null])));
var inspectItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.InspectMenuItem")],$I$(11,1).c$$S);
inspectItem.setAccelerator$javax_swing_KeyStroke($I$(12,"getKeyStroke$I$I",["I".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
inspectItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.DrawingFrame'].inspectXML$.apply(this.b$['org.opensourcephysics.display.DrawingFrame'], []);
});
})()
), Clazz.new_(P$.DrawingFrame$6.$init$,[this, null])));
if (!$I$(6).isJS) this.fileMenu.add$javax_swing_JMenuItem(printMenu);
this.fileMenu.add$javax_swing_JMenuItem(saveXMLItem);
this.fileMenu.add$javax_swing_JMenuItem(exportItem);
if (!$I$(6).isJS) this.fileMenu.add$javax_swing_JMenuItem(saveImage);
this.fileMenu.add$javax_swing_JMenuItem(inspectItem);
menuBar.add$javax_swing_JMenu(this.fileMenu);
this.editMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Edit_menu_title")],$I$(10,1).c$$S);
menuBar.add$javax_swing_JMenu(this.editMenu);
this.copyItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.Copy_menu_item")],$I$(11,1).c$$S);
this.copyItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var control=Clazz.new_($I$(17,1).c$$O,[this.b$['org.opensourcephysics.display.DrawingFrame']]);
control.saveObject$O(null);
this.b$['org.opensourcephysics.display.DrawingFrame'].copyAction$org_opensourcephysics_controls_XMLControlElement.apply(this.b$['org.opensourcephysics.display.DrawingFrame'], [control]);
});
})()
), Clazz.new_(P$.DrawingFrame$7.$init$,[this, null])));
this.editMenu.add$javax_swing_JMenuItem(this.copyItem);
this.pasteItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.Paste_menu_item")],$I$(11,1).c$$S);
this.pasteItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(6,"paste$java_util_function_Consumer",[((P$.DrawingFrame$lambda4$5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda4$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (s) /*block*/{
var control=Clazz.new_($I$(17,1));
control.readXML$S.apply(control, [s]);
this.b$['org.opensourcephysics.display.DrawingFrame'].pasteAction$org_opensourcephysics_controls_XMLControlElement.apply(this.b$['org.opensourcephysics.display.DrawingFrame'], [control]);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda4$5.$init$,[this, null]))]);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda4.$init$,[this, null])));
this.pasteItem.setEnabled$Z(false);
this.editMenu.add$javax_swing_JMenuItem(this.pasteItem);
this.replaceItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.Replace_menu_item")],$I$(11,1).c$$S);
this.replaceItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(6,"paste$java_util_function_Consumer",[((P$.DrawingFrame$lambda5$6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda5$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (s) /*block*/{
if (s != null ) {
var control=Clazz.new_($I$(17,1));
control.readXML$S.apply(control, [s]);
this.b$['org.opensourcephysics.display.DrawingFrame'].replaceAction$org_opensourcephysics_controls_XMLControlElement.apply(this.b$['org.opensourcephysics.display.DrawingFrame'], [control]);
}});
})()
), Clazz.new_(P$.DrawingFrame$lambda5$6.$init$,[this, null]))]);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda5.$init$,[this, null])));
this.replaceItem.setEnabled$Z(false);
this.editMenu.add$javax_swing_JMenuItem(this.replaceItem);
this.setJMenuBar$javax_swing_JMenuBar(menuBar);
this.loadDisplayMenu$();
this.loadToolsMenu$();
var helpMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Help_menu_item")],$I$(10,1).c$$S);
menuBar.add$javax_swing_JMenu(helpMenu);
var aboutItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.AboutOSP_menu_item")],$I$(11,1).c$$S);
aboutItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(6).showAboutDialog$java_awt_Component(this.b$['org.opensourcephysics.display.DrawingFrame']);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda6.$init$,[this, null])));
helpMenu.add$javax_swing_JMenuItem(aboutItem);
var sysItem=Clazz.new_([$I$(18).getString$S("ControlFrame.System")],$I$(11,1).c$$S);
sysItem.addActionListener$java_awt_event_ActionListener((P$.DrawingFrame$lambda7$||(P$.DrawingFrame$lambda7$=(((P$.DrawingFrame$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(19).showSystemProperties$Z(true);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda7.$init$,[this, null]))))));
helpMenu.add$javax_swing_JMenuItem(sysItem);
helpMenu.addSeparator$();
var logItem=Clazz.new_([$I$(18).getString$S("ControlFrame.Message_Log")],$I$(11,1).c$$S);
logItem.addActionListener$java_awt_event_ActionListener((P$.DrawingFrame$lambda8$||(P$.DrawingFrame$lambda8$=(((P$.DrawingFrame$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(14).showLog$();
});
})()
), Clazz.new_(P$.DrawingFrame$lambda8.$init$,[this, null]))))));
helpMenu.add$javax_swing_JMenuItem(logItem);
}, p$1);

Clazz.newMeth(C$, 'loadDisplayMenu$',  function () {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return null;
}var displayMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Display_menu_title")],$I$(10,1).c$$S);
menuBar.add$javax_swing_JMenu(displayMenu);
var fontMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Font_menu_title")],$I$(10,1).c$$S);
displayMenu.add$javax_swing_JMenuItem(fontMenu);
var sizeUpItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.IncreaseFontSize_menu_item")],$I$(11,1).c$$S);
sizeUpItem.addActionListener$java_awt_event_ActionListener((P$.DrawingFrame$lambda9$||(P$.DrawingFrame$lambda9$=(((P$.DrawingFrame$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(20).levelUp$();
});
})()
), Clazz.new_(P$.DrawingFrame$lambda9.$init$,[this, null]))))));
fontMenu.add$javax_swing_JMenuItem(sizeUpItem);
var sizeDownItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.DecreaseFontSize_menu_item")],$I$(11,1).c$$S);
sizeDownItem.addActionListener$java_awt_event_ActionListener((P$.DrawingFrame$lambda10$||(P$.DrawingFrame$lambda10$=(((P$.DrawingFrame$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(20).levelDown$();
});
})()
), Clazz.new_(P$.DrawingFrame$lambda10.$init$,[this, null]))))));
fontMenu.add$javax_swing_JMenuItem(sizeDownItem);
fontMenu.addChangeListener$javax_swing_event_ChangeListener(((P$.DrawingFrame$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
this.$finals$.sizeDownItem.setEnabled$Z.apply(this.$finals$.sizeDownItem, [$I$(20).getLevel$() > 0]);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda11.$init$,[this, {sizeDownItem:sizeDownItem}])));
var aliasMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.AntiAlias_menu_title")],$I$(10,1).c$$S);
if (!$I$(6).isJS) displayMenu.add$javax_swing_JMenuItem(aliasMenu);
var textAliasItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.Text_checkbox_label"), false],$I$(21,1).c$$S$Z);
textAliasItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel.antialiasTextOn=this.$finals$.textAliasItem.isSelected$.apply(this.$finals$.textAliasItem, []);
this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel.repaint$.apply(this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel, []);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda12.$init$,[this, {textAliasItem:textAliasItem}])));
aliasMenu.add$javax_swing_JMenuItem(textAliasItem);
var shapeAliasItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.Drawing_textbox_label"), false],$I$(21,1).c$$S$Z);
shapeAliasItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel.antialiasShapeOn=this.$finals$.shapeAliasItem.isSelected$.apply(this.$finals$.shapeAliasItem, []);
this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel.repaint$.apply(this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel, []);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda13.$init$,[this, {shapeAliasItem:shapeAliasItem}])));
aliasMenu.addChangeListener$javax_swing_event_ChangeListener(((P$.DrawingFrame$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
this.$finals$.textAliasItem.setSelected$Z.apply(this.$finals$.textAliasItem, [this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel.antialiasTextOn]);
this.$finals$.shapeAliasItem.setSelected$Z.apply(this.$finals$.shapeAliasItem, [this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel.antialiasShapeOn]);
});
})()
), Clazz.new_(P$.DrawingFrame$lambda14.$init$,[this, {shapeAliasItem:shapeAliasItem,textAliasItem:textAliasItem}])));
aliasMenu.add$javax_swing_JMenuItem(shapeAliasItem);
menuBar.add$javax_swing_JMenu(displayMenu);
return displayMenu;
});

Clazz.newMeth(C$, 'loadToolsMenu$',  function () {
if ($I$(6).isJS) {
}var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return null;
}var toolsMenu=Clazz.new_([$I$(4).getString$S("DrawingFrame.Tools_menu_title")],$I$(10,1).c$$S);
menuBar.add$javax_swing_JMenu(toolsMenu);
var datasetItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.DatasetTool_menu_item")],$I$(11,1).c$$S);
toolsMenu.add$javax_swing_JMenuItem(datasetItem);
if ($I$(6).loadDataTool) {
if (!$I$(15).setSendAction$javax_swing_JMenuItem$S$O$org_opensourcephysics_tools_Tool$Z(datasetItem, "DataTool", this.drawingPanel, this.reply, true)) {
$I$(6).loadDataTool=false;
datasetItem.setEnabled$Z(false);
}}var fourierToolItem=Clazz.new_([$I$(4).getString$S("DrawingFrame.FourierTool_menu_item")],$I$(11,1).c$$S);
toolsMenu.add$javax_swing_JMenuItem(fourierToolItem);
fourierToolItem.setVisible$Z(false);
var snapshotItem=Clazz.new_([$I$(4).getString$S("DisplayPanel.Snapshot_menu_item")],$I$(11,1).c$$S);
if (!$I$(6).isApplet && !$I$(6).isJS ) {
toolsMenu.add$javax_swing_JMenuItem(snapshotItem);
}if (!$I$(6).isJS) snapshotItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tool=$I$(22).getTool$();
if (this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel != null ) {
tool.saveImage$S$java_awt_Component(null, this.b$['org.opensourcephysics.display.DrawingFrame'].drawingPanel);
} else {
tool.saveImage$S$java_awt_Component(null, this.b$['javax.swing.JFrame'].getContentPane$.apply(this.b$['javax.swing.JFrame'], []));
}});
})()
), Clazz.new_(P$.DrawingFrame$8.$init$,[this, null])));
return toolsMenu;
});

Clazz.newMeth(C$, 'setCustomInspector$java_awt_Window',  function (w) {
if (this.customInspector != null ) {
this.customInspector.setVisible$Z(false);
}this.customInspector=w;
});

Clazz.newMeth(C$, 'inspectXML$',  function () {
if (this.customInspector != null ) {
this.customInspector.setVisible$Z(true);
return;
}var xml=null;
try {
var method=this.drawingPanel.getClass$().getMethod$S$ClassA("getLoader", null);
if ((method != null ) && $I$(23,"isStatic$I",[method.getModifiers$()]) ) {
xml=Clazz.new_($I$(17,1).c$$O,[this.drawingPanel]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
System.err.println$S("DrawingFram line 1039 NoSuchMethodException xml=" + xml);
return;
} else {
throw ex;
}
}
var treePanel=Clazz.new_($I$(24,1).c$$org_opensourcephysics_controls_XMLControl,[xml]);
var dialog=Clazz.new_($I$(25,1).c$$java_awt_Frame$Z,[null, true]);
dialog.setTitle$S("XML Inspector");
dialog.setContentPane$java_awt_Container(treePanel);
dialog.setSize$java_awt_Dimension(Clazz.new_($I$(26,1).c$$I$I,[600, 300]));
dialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'saveXML$',  function () {
var chooser=$I$(6).getChooser$();
if (chooser == null ) {
return;
}var oldTitle=chooser.getDialogTitle$();
chooser.setDialogTitle$S("Save XML Data");
var result=-1;
try {
result=chooser.showSaveDialog$java_awt_Component(null);
} catch (e) {
System.err.println$S("InterruptedException in saveXML()().");
e.printStackTrace$();
}
chooser.setDialogTitle$S(oldTitle);
if (result == 0) {
var file=chooser.getSelectedFile$();
$I$(6).chooserDir=chooser.getCurrentDirectory$().toString();
var fileName=file.getAbsolutePath$();
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return;
}var i=fileName.toLowerCase$().lastIndexOf$S(".xml");
if (i != fileName.length$() - 4) {
fileName+=".xml";
file=Clazz.new_($I$(27,1).c$$S,[fileName]);
}if (!$I$(6).isJS && file.exists$() ) {
var selected=$I$(28,"showConfirmDialog$java_awt_Component$O$S$I",[null, "Replace existing " + file.getName$() + "?" , "Replace File", 1]);
if (selected != 0) {
return;
}}var xml=Clazz.new_($I$(17,1).c$$O,[this.drawingPanel]);
xml.write$S(fileName);
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(29,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MENU_SHORTCUT_KEY_MASK=$I$(2).getDefaultToolkit$().getMenuShortcutKeyMask$();
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DrawingFrame, "DrawingFrameLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var frame=Clazz.new_($I$(1,1));
frame.setTitle$S(control.getString$S("title"));
frame.setLocation$I$I(control.getInt$S("location x"), control.getInt$S("location y"));
frame.setSize$I$I(control.getInt$S("width"), control.getInt$S("height"));
if (control.getBoolean$S("showing")) {
frame.setVisible$Z(true);
}return frame;
});

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var frame=obj;
control.setValue$S$O("title", frame.getTitle$());
control.setValue$S$Z("showing", frame.isShowing$());
control.setValue$S$I("location x", frame.getLocation$().x);
control.setValue$S$I("location y", frame.getLocation$().y);
control.setValue$S$I("width", frame.getSize$().width);
control.setValue$S$I("height", frame.getSize$().height);
control.setValue$S$O("drawing panel", frame.getDrawingPanel$());
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var frame=(obj);
var panel=frame.getDrawingPanel$();
panel.clear$();
var panelControl=control.getChildControl$S("drawing panel");
panelControl.loadObject$O(panel);
panel.repaint$();
frame.setTitle$S(control.getString$S("title"));
frame.setLocation$I$I(control.getInt$S("location x"), control.getInt$S("location y"));
frame.setSize$I$I(control.getInt$S("width"), control.getInt$S("height"));
if (control.getBoolean$S("showing")) {
frame.setVisible$Z(true);
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
