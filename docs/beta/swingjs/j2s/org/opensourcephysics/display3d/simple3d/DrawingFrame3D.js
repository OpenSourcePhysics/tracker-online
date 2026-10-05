(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),p$1={},I$=[[0,'java.awt.Toolkit','javax.swing.JMenuBar','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.XMLTreeChooser','org.opensourcephysics.display.Drawable','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','java.awt.print.PrinterJob','javax.swing.JOptionPane','org.opensourcephysics.tools.ExportTool','org.opensourcephysics.tools.LocalJob','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.display3d.core.CameraInspector','org.opensourcephysics.tools.SnapshotTool','java.lang.reflect.Modifier','javax.swing.JDialog','org.opensourcephysics.controls.XMLTreePanel','java.awt.Dimension','org.opensourcephysics.controls.XML',['org.opensourcephysics.display3d.core.DrawingFrame3D','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawingFrame3D", null, 'org.opensourcephysics.display.OSPFrame', ['java.awt.datatransfer.ClipboardOwner', 'org.opensourcephysics.display3d.core.DrawingFrame3D']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$menuBar=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['fileMenu','javax.swing.JMenu','+editMenu','copyItem','javax.swing.JMenuItem','+pasteItem','+replaceItem','visualMenu','javax.swing.JMenu','+displayMenu','+decorationMenu','+cursorMenu','displayPerspectiveItem','javax.swing.JMenuItem','+displayNoPerspectiveItem','+displayXYItem','+displayXZItem','+displayYZItem','+decorationCubeItem','+decorationNoneItem','+decorationAxesItem','+cursorNoneItem','+cursorCubeItem','+cursorXYZItem','+cursorCrosshairItem','+zoomToFitItem','+resetCameraItem','+cameraItem','+lightItem','cameraInspectorFrame','javax.swing.JFrame','+lightInspectorFrame','$menuBar','javax.swing.JMenuBar','drawingPanel','org.opensourcephysics.display3d.core.DrawingPanel3D']]
,['I',['MENU_SHORTCUT_KEY_MASK']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$org_opensourcephysics_display3d_simple3d_DrawingPanel3D.apply(this, [$I$(3).getString$S("DrawingFrame.DefaultTitle"), null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display3d_simple3d_DrawingPanel3D',  function (drawingPanel) {
C$.c$$S$org_opensourcephysics_display3d_simple3d_DrawingPanel3D.apply(this, [$I$(3).getString$S("DrawingFrame.DefaultTitle"), drawingPanel]);
}, 1);

Clazz.newMeth(C$, 'c$$S$org_opensourcephysics_display3d_simple3d_DrawingPanel3D',  function (title, _drawingPanel) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
this.drawingPanel=_drawingPanel;
if (this.drawingPanel != null ) {
this.getContentPane$().add$java_awt_Component$O(this.drawingPanel, "Center");
}this.pack$();
if (!$I$(4).appletMode) {
p$1.createMenuBar.apply(this, []);
}this.setAnimated$Z(true);
this.setEnabledPaste$Z(true);
this.setEnabledReplace$Z(true);
}, 1);

Clazz.newMeth(C$, 'render$',  function () {
this.drawingPanel.render$();
});

Clazz.newMeth(C$, 'setMessage$S',  function (msg) {
(this.drawingPanel).setMessage$S(msg);
});

Clazz.newMeth(C$, 'setMessage$S$I',  function (msg, location) {
(this.drawingPanel).setMessage$S$I(msg, location);
});

Clazz.newMeth(C$, 'getDrawingPanel3D$',  function () {
return this.drawingPanel;
});

Clazz.newMeth(C$, 'setDrawingPanel3D$org_opensourcephysics_display3d_core_DrawingPanel3D',  function (_drawingPanel) {
if (this.drawingPanel != null ) {
this.getContentPane$().remove$java_awt_Component(this.drawingPanel);
}this.drawingPanel=_drawingPanel;
if (this.drawingPanel != null ) {
this.getContentPane$().add$java_awt_Component$O(this.drawingPanel, "Center");
}this.pack$();
});

Clazz.newMeth(C$, 'getJFrame$',  function () {
return this;
});

Clazz.newMeth(C$, 'setEnabledPaste$Z',  function (enable) {
this.pasteItem.setEnabled$Z(enable);
});

Clazz.newMeth(C$, 'pasteAction$',  function () {
$I$(4,"paste$java_util_function_Consumer",[((P$.DrawingFrame3D$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame3D$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (s) /*block*/{
if (s != null ) {
var control=Clazz.new_($I$(5,1));
control.readXML$S.apply(control, [s]);
var chooser=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.XMLChooser.Title"), $I$(3).getString$S("DrawingFrame3D.XMLChooser.Message"), this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D']],$I$(6,1).c$$S$S$java_awt_Component);
chooser.chooseAsync$org_opensourcephysics_controls_XMLControl$Class$Runnable.apply(chooser, [control, Clazz.getClass($I$(7),['draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics','isInteractive$']), ((P$.DrawingFrame3D$lambda1$2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DrawingFrame3D$lambda1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var props=this.$finals$.chooser.getList$.apply(this.$finals$.chooser, []);
if (!props.isEmpty$.apply(props, [])) {
var it=props.iterator$.apply(props, []);
while (it.hasNext$.apply(it, [])){
var prop=it.next$.apply(it, []);
var element=prop.loadObject$O.apply(prop, [null]);
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.addElement$org_opensourcephysics_display3d_core_Element.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel, [element]);
}
}if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.repaint$.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel, []);
}});
})()
), Clazz.new_(P$.DrawingFrame3D$lambda1$2.$init$,[this, {chooser:chooser}]))]);
}});
})()
), Clazz.new_(P$.DrawingFrame3D$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'setEnabledReplace$Z',  function (enable) {
this.replaceItem.setEnabled$Z(enable);
});

Clazz.newMeth(C$, 'replaceAction$',  function () {
this.drawingPanel.removeAllElements$();
this.pasteAction$();
});

Clazz.newMeth(C$, 'copyAction$',  function () {
var control=Clazz.new_($I$(5,1).c$$O,[this]);
control.saveObject$O(null);
$I$(4,"copy$S$java_awt_datatransfer_ClipboardOwner",[control.toXML$(), this]);
});

Clazz.newMeth(C$, 'lostOwnership$java_awt_datatransfer_Clipboard$java_awt_datatransfer_Transferable',  function (clipboard, contents) {
});

Clazz.newMeth(C$, 'setEnabledCopy$Z',  function (enable) {
this.copyItem.setEnabled$Z(enable);
});

Clazz.newMeth(C$, 'supportsLightInspectors$',  function () {
return false;
});

Clazz.newMeth(C$, 'createLightInspectorFrame$org_opensourcephysics_display3d_core_DrawingPanel3D',  function (drawingPanel) {
return null;
});

Clazz.newMeth(C$, 'createMenuBar',  function () {
this.fileMenu=Clazz.new_([$I$(3).getString$S("DrawingFrame.File_menu_item")],$I$(8,1).c$$S);
var printItem=Clazz.new_([$I$(3).getString$S("DrawingFrame.Print_menu_item")],$I$(9,1).c$$S);
if (!$I$(4).isJS) printItem.setAccelerator$javax_swing_KeyStroke($I$(10,"getKeyStroke$I$I",["P".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
if (!$I$(4).isJS) printItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var printerJob=$I$(11).getPrinterJob$();
printerJob.setPrintable$java_awt_print_Printable(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel);
if (printerJob.printDialog$()) {
try {
printerJob.print$();
} catch (pe) {
if (Clazz.exceptionOf(pe,"java.awt.print.PrinterException")){
$I$(12,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'], $I$(3).getString$S("DrawingFrame.PrintErrorMessage"), $I$(3).getString$S("DrawingFrame.Error"), 0]);
} else {
throw pe;
}
}
}});
})()
), Clazz.new_(P$.DrawingFrame3D$1.$init$,[this, null])));
var saveXMLItem=Clazz.new_([$I$(3).getString$S("DrawingFrame.SaveXML_menu_item")],$I$(9,1).c$$S);
saveXMLItem.setAccelerator$javax_swing_KeyStroke($I$(10,"getKeyStroke$I$I",["S".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
saveXMLItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].saveXML$.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'], []);
});
})()
), Clazz.new_(P$.DrawingFrame3D$2.$init$,[this, null])));
var exportItem=Clazz.new_([$I$(3).getString$S("DrawingFrame.Export_menu_item")],$I$(9,1).c$$S);
exportItem.setAccelerator$javax_swing_KeyStroke($I$(10,"getKeyStroke$I$I",["E".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
exportItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(13).getTool$().send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool(Clazz.new_($I$(14,1).c$$O,[this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel]), null);
});
})()
), Clazz.new_(P$.DrawingFrame3D$3.$init$,[this, null])));
var saveAsPSItem=Clazz.new_([$I$(3).getString$S("DrawingFrame.SaveFrameAsEPS_menu_item")],$I$(9,1).c$$S);
saveAsPSItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(15,"saveImage$javax_swing_JComponent$S$java_awt_Component",[this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.getComponent$(), "eps", this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D']]);
});
})()
), Clazz.new_(P$.DrawingFrame3D$4.$init$,[this, null])));
var inspectItem=Clazz.new_([$I$(3).getString$S("DrawingFrame.InspectMenuItem")],$I$(9,1).c$$S);
inspectItem.setAccelerator$javax_swing_KeyStroke($I$(10,"getKeyStroke$I$I",["I".$c(), C$.MENU_SHORTCUT_KEY_MASK]));
inspectItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].inspectXML$.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'], []);
});
})()
), Clazz.new_(P$.DrawingFrame3D$5.$init$,[this, null])));
if (!$I$(4).isJS) this.fileMenu.add$javax_swing_JMenuItem(printItem);
this.fileMenu.add$javax_swing_JMenuItem(saveXMLItem);
if (!$I$(4).isJS) this.fileMenu.add$javax_swing_JMenuItem(exportItem);
if (!$I$(4).isJS) this.fileMenu.add$javax_swing_JMenuItem(saveAsPSItem);
this.fileMenu.add$javax_swing_JMenuItem(inspectItem);
this.$menuBar.add$javax_swing_JMenu(this.fileMenu);
this.editMenu=Clazz.new_([$I$(3).getString$S("DrawingFrame.Edit_menu_title")],$I$(8,1).c$$S);
this.$menuBar.add$javax_swing_JMenu(this.editMenu);
this.copyItem=Clazz.new_([$I$(3).getString$S("DrawingFrame.Copy_menu_item")],$I$(9,1).c$$S);
this.copyItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].copyAction$.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'], []);
});
})()
), Clazz.new_(P$.DrawingFrame3D$6.$init$,[this, null])));
this.editMenu.add$javax_swing_JMenuItem(this.copyItem);
this.pasteItem=Clazz.new_([$I$(3).getString$S("DrawingFrame.Paste_menu_item")],$I$(9,1).c$$S);
this.pasteItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].pasteAction$.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'], []);
});
})()
), Clazz.new_(P$.DrawingFrame3D$7.$init$,[this, null])));
this.pasteItem.setEnabled$Z(false);
this.editMenu.add$javax_swing_JMenuItem(this.pasteItem);
this.replaceItem=Clazz.new_([$I$(3).getString$S("DrawingFrame.Replace_menu_item")],$I$(9,1).c$$S);
this.replaceItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].replaceAction$.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'], []);
});
})()
), Clazz.new_(P$.DrawingFrame3D$8.$init$,[this, null])));
this.replaceItem.setEnabled$Z(false);
this.editMenu.add$javax_swing_JMenuItem(this.replaceItem);
this.setJMenuBar$javax_swing_JMenuBar(this.$menuBar);
this.cameraItem=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.Camera_menu_item")],$I$(9,1).c$$S);
this.cameraItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].cameraInspectorFrame == null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].cameraInspectorFrame=$I$(16).createFrame$org_opensourcephysics_display3d_core_DrawingPanel3D(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel);
}this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].cameraInspectorFrame.setVisible$Z(true);
}});
})()
), Clazz.new_(P$.DrawingFrame3D$9.$init$,[this, null])));
if (this.supportsLightInspectors$()) {
this.lightItem=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.Light_menu_item")],$I$(9,1).c$$S);
this.lightItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].lightInspectorFrame == null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].lightInspectorFrame=this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].createLightInspectorFrame$org_opensourcephysics_display3d_core_DrawingPanel3D.apply(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'], [this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel]);
}this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].lightInspectorFrame.setVisible$Z(true);
}});
})()
), Clazz.new_(P$.DrawingFrame3D$10.$init$,[this, null])));
}this.decorationMenu=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.Decoration_menu")],$I$(8,1).c$$S);
this.decorationNoneItem=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.DecorationNone_menu_item")],$I$(9,1).c$$S);
this.decorationNoneItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.getVisualizationHints$().setDecorationType$I(0);
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.repaint$();
}});
})()
), Clazz.new_(P$.DrawingFrame3D$11.$init$,[this, null])));
this.decorationMenu.add$javax_swing_JMenuItem(this.decorationNoneItem);
this.decorationCubeItem=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.DecorationCube_menu_item")],$I$(9,1).c$$S);
this.decorationCubeItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.getVisualizationHints$().setDecorationType$I(2);
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.repaint$();
}});
})()
), Clazz.new_(P$.DrawingFrame3D$12.$init$,[this, null])));
this.decorationMenu.add$javax_swing_JMenuItem(this.decorationCubeItem);
this.decorationAxesItem=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.DecorationAxes_menu_item")],$I$(9,1).c$$S);
this.decorationAxesItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.getVisualizationHints$().setDecorationType$I(1);
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.repaint$();
}});
})()
), Clazz.new_(P$.DrawingFrame3D$13.$init$,[this, null])));
this.decorationMenu.add$javax_swing_JMenuItem(this.decorationAxesItem);
this.cursorMenu=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.Cursor_menu")],$I$(8,1).c$$S);
this.cursorNoneItem=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.CursorNone_menu_item")],$I$(9,1).c$$S);
this.cursorNoneItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.getVisualizationHints$().setCursorType$I(0);
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.repaint$();
}});
})()
), Clazz.new_(P$.DrawingFrame3D$14.$init$,[this, null])));
this.cursorMenu.add$javax_swing_JMenuItem(this.cursorNoneItem);
this.cursorCubeItem=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.CursorCube_menu_item")],$I$(9,1).c$$S);
this.cursorCubeItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.getVisualizationHints$().setCursorType$I(2);
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.repaint$();
}});
})()
), Clazz.new_(P$.DrawingFrame3D$15.$init$,[this, null])));
this.cursorMenu.add$javax_swing_JMenuItem(this.cursorCubeItem);
this.cursorXYZItem=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.CursorXYZ_menu_item")],$I$(9,1).c$$S);
this.cursorXYZItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.getVisualizationHints$().setCursorType$I(1);
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.repaint$();
}});
})()
), Clazz.new_(P$.DrawingFrame3D$16.$init$,[this, null])));
this.cursorMenu.add$javax_swing_JMenuItem(this.cursorXYZItem);
this.cursorCrosshairItem=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.CursorCrosshair_menu_item")],$I$(9,1).c$$S);
this.cursorCrosshairItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.getVisualizationHints$().setCursorType$I(3);
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.repaint$();
}});
})()
), Clazz.new_(P$.DrawingFrame3D$17.$init$,[this, null])));
this.cursorMenu.add$javax_swing_JMenuItem(this.cursorCrosshairItem);
this.zoomToFitItem=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.ZoomToFit_menu_item")],$I$(9,1).c$$S);
this.zoomToFitItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.zoomToFit$();
this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.repaint$();
}});
})()
), Clazz.new_(P$.DrawingFrame3D$18.$init$,[this, null])));
this.visualMenu=Clazz.new_([$I$(3).getString$S("DrawingFrame3D.Visual_menu")],$I$(8,1).c$$S);
this.visualMenu.add$javax_swing_JMenuItem(this.cameraItem);
if (this.supportsLightInspectors$()) {
this.visualMenu.add$javax_swing_JMenuItem(this.lightItem);
}this.visualMenu.add$javax_swing_JMenuItem(this.decorationMenu);
this.visualMenu.add$javax_swing_JMenuItem(this.cursorMenu);
this.visualMenu.add$javax_swing_JMenuItem(this.zoomToFitItem);
this.$menuBar.add$javax_swing_JMenu(this.visualMenu);
this.loadToolsMenu$();
var helpMenu=Clazz.new_([$I$(3).getString$S("DrawingFrame.Help_menu_item")],$I$(8,1).c$$S);
this.$menuBar.add$javax_swing_JMenu(helpMenu);
var aboutItem=Clazz.new_([$I$(3).getString$S("DrawingFrame.AboutOSP_menu_item")],$I$(9,1).c$$S);
aboutItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(4).showAboutDialog$java_awt_Component(this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D']);
});
})()
), Clazz.new_(P$.DrawingFrame3D$19.$init$,[this, null])));
helpMenu.add$javax_swing_JMenuItem(aboutItem);
}, p$1);

Clazz.newMeth(C$, 'loadToolsMenu$',  function () {
if ($I$(4).isJS) {
return null;
}var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return null;
}var toolsMenu=Clazz.new_([$I$(3).getString$S("DrawingFrame.Tools_menu_title")],$I$(8,1).c$$S);
menuBar.add$javax_swing_JMenu(toolsMenu);
var snapshotItem=Clazz.new_([$I$(3).getString$S("DisplayPanel.Snapshot_menu_item")],$I$(9,1).c$$S);
toolsMenu.add$javax_swing_JMenuItem(snapshotItem);
snapshotItem.addActionListener$java_awt_event_ActionListener(((P$.DrawingFrame3D$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "DrawingFrame3D$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tool=$I$(17).getTool$();
if (this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel != null ) {
tool.saveImage$S$java_awt_Component(null, this.b$['org.opensourcephysics.display3d.simple3d.DrawingFrame3D'].drawingPanel.getComponent$());
} else {
tool.saveImage$S$java_awt_Component(null, this.b$['javax.swing.JFrame'].getContentPane$.apply(this.b$['javax.swing.JFrame'], []));
}});
})()
), Clazz.new_(P$.DrawingFrame3D$20.$init$,[this, null])));
return toolsMenu;
});

Clazz.newMeth(C$, 'getMenuItem$S',  function (menuName) {
menuName=menuName.trim$();
var menu=null;
for (var i=0; i < this.$menuBar.getMenuCount$(); i++) {
var next=this.$menuBar.getMenu$I(i);
if (next.getText$().equals$O(menuName)) {
menu=next;
break;
}}
return menu;
});

Clazz.newMeth(C$, 'removeMenuItem$S',  function (menuName) {
menuName=menuName.trim$();
var menu=null;
for (var i=0; i < this.$menuBar.getMenuCount$(); i++) {
var next=this.$menuBar.getMenu$I(i);
if (next.getText$().equals$O(menuName)) {
menu=next;
this.$menuBar.remove$I(i);
break;
}}
return menu;
});

Clazz.newMeth(C$, 'inspectXML$',  function () {
var xml=null;
try {
var method=this.drawingPanel.getClass$().getMethod$S$ClassA("getLoader", null);
if ((method != null ) && $I$(18,"isStatic$I",[method.getModifiers$()]) ) {
xml=Clazz.new_($I$(5,1).c$$O,[this.drawingPanel]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
return;
} else {
throw ex;
}
}
var dialog=Clazz.new_($I$(19,1).c$$java_awt_Frame$Z,[null, true]);
var treePanel=Clazz.new_($I$(20,1).c$$org_opensourcephysics_controls_XMLControl,[xml]);
dialog.setTitle$S("XML Inspector");
dialog.setContentPane$java_awt_Container(treePanel);
dialog.setSize$java_awt_Dimension(Clazz.new_($I$(21,1).c$$I$I,[600, 300]));
dialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'saveXML$',  function () {
var chooser=$I$(4).getChooser$();
var result=chooser.showSaveDialog$java_awt_Component(null);
if (result == 0) {
var file=chooser.getSelectedFile$();
if (file.exists$()) {
var selected=$I$(12,"showConfirmDialog$java_awt_Component$O$S$I",[null, $I$(3).getString$S("DrawingFrame.ReplaceExisting_message") + file.getName$() + $I$(3).getString$S("DrawingFrame.QuestionMark") , $I$(3).getString$S("DrawingFrame.ReplaceFile_option_title"), 1]);
if (selected != 0) {
return;
}}var fileName=$I$(22,"getRelativePath$S",[file.getAbsolutePath$()]);
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return;
}var i=fileName.toLowerCase$().lastIndexOf$S(".xml");
if (i != fileName.length$() - 4) {
fileName+=".xml";
}try {
var method=this.drawingPanel.getClass$().getMethod$S$ClassA("getLoader", null);
if ((method != null ) && $I$(18,"isStatic$I",[method.getModifiers$()]) ) {
var xml=Clazz.new_($I$(5,1).c$$O,[this.drawingPanel]);
xml.write$S(fileName);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
return;
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(23,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MENU_SHORTCUT_KEY_MASK=$I$(1).getDefaultToolkit$().getMenuShortcutKeyMask$();
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
