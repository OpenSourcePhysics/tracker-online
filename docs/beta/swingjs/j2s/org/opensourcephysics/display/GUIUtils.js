(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'javax.swing.UIManager','java.awt.Color','org.opensourcephysics.display.TeXParser','java.awt.Frame','org.opensourcephysics.display.OSPFrame','org.opensourcephysics.display.DataTableFrame','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.display.DisplayRes','javax.swing.JOptionPane','org.opensourcephysics.display.DrawingPanel','java.io.FileOutputStream','org.jibble.epsgraphics.EpsGraphics2D','java.awt.image.BufferedImage','javax.imageio.ImageIO','org.opensourcephysics.controls.XML','java.io.File','java.awt.Toolkit','java.awt.Cursor','java.awt.RenderingHints','org.opensourcephysics.display.GUIUtils','javax.swing.JTextPane','javax.swing.JTextArea']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GUIUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['enabledColor','java.awt.Color','+disabledColor']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parseTeX$S',  function (input) {
return $I$(3).parseTeX$S(input);
}, 1);

Clazz.newMeth(C$, 'removeSubscripting$S',  function (input) {
return $I$(3).removeSubscripting$S(input);
}, 1);

Clazz.newMeth(C$, 'findInstance$java_awt_Container$Class',  function (container, c) {
if ((container == null ) || c.isInstance$O(container) ) {
return container;
}var components=container.getComponents$();
for (var i=0, n=components.length; i < n; i++) {
if (c.isInstance$O(components[i])) {
return components[i];
}if (Clazz.instanceOf(components[i], "java.awt.Container")) {
var comp=C$.findInstance$java_awt_Container$Class(components[i], c);
if (c.isInstance$O(comp)) {
return comp;
}}}
return null;
}, 1);

Clazz.newMeth(C$, 'showDrawingAndTableFrames$',  function () {
var frames=$I$(4).getFrames$();
for (var i=0; i < frames.length; i++) {
if (!frames[i].isDisplayable$()) {
continue;
}if ((frames[i].getName$() != null ) && (frames[i].getName$().indexOf$S("Tool") > -1) ) {
continue;
}if (Clazz.getClass($I$(5)).isInstance$O(frames[i])) {
if (Clazz.getClass($I$(6)).isInstance$O(frames[i])) {
(frames[i]).refreshTable$I(3);
}frames[i].setVisible$Z(true);
(frames[i]).invalidateImage$();
frames[i].repaint$();
frames[i].toFront$();
}}
if ($I$(7).isApplet) {
$I$(7).applet.getRootPane$().repaint$();
}}, 1);

Clazz.newMeth(C$, 'renderAnimatedFrames$',  function () {
var frames=$I$(4).getFrames$();
for (var i=0; i < frames.length; i++) {
if (!frames[i].isDisplayable$() || !Clazz.getClass($I$(5)).isInstance$O(frames[i]) ) {
continue;
}if ((frames[i]).isAnimated$()) {
(frames[i]).render$();
}}
if ($I$(7).isApplet && Clazz.instanceOf($I$(7).applet, "org.opensourcephysics.display.Renderable") ) {
($I$(7).applet).render$();
}}, 1);

Clazz.newMeth(C$, 'repaintAnimatedFrames$',  function () {
var frames=$I$(4).getFrames$();
for (var i=0; i < frames.length; i++) {
if (!frames[i].isDisplayable$() || !Clazz.getClass($I$(5)).isInstance$O(frames[i]) ) {
continue;
}if ((frames[i]).isAnimated$()) {
(frames[i]).invalidateImage$();
(frames[i]).repaint$();
}}
}, 1);

Clazz.newMeth(C$, 'repaintOSPFrames$',  function () {
var frames=$I$(4).getFrames$();
for (var i=0; i < frames.length; i++) {
if (!frames[i].isVisible$() || !frames[i].isDisplayable$() || !Clazz.getClass($I$(5)).isInstance$O(frames[i])  ) {
continue;
}(frames[i]).repaint$();
}
}, 1);

Clazz.newMeth(C$, 'clearDrawingFrameData$Z',  function (clearAll) {
var frames=$I$(4).getFrames$();
for (var i=0; i < frames.length; i++) {
if (!frames[i].isDisplayable$()) {
continue;
}if (Clazz.getClass($I$(5)).isInstance$O(frames[i])) {
var frame=(frames[i]);
if (clearAll || frame.isAutoclear$() ) {
frame.clearDataAndRepaint$();
}}}
}, 1);

Clazz.newMeth(C$, 'setAnimatedFrameIgnoreRepaint$Z',  function (ignoreRepaint) {
var frames=$I$(4).getFrames$();
for (var i=0; i < frames.length; i++) {
if (!frames[i].isDisplayable$() || !Clazz.getClass($I$(8)).isInstance$O(frames[i]) ) {
continue;
}if ((frames[i]).isAnimated$()) {
var dp=(frames[i]).getDrawingPanel$();
if (dp != null ) {
dp.setIgnoreRepaint$Z(ignoreRepaint);
}}}
}, 1);

Clazz.newMeth(C$, 'enableMenubars$Z',  function (enable) {
var frames=$I$(4).getFrames$();
for (var i=0; i < frames.length; i++) {
if (!frames[i].isDisplayable$()) {
continue;
}if ((frames[i].getName$() != null ) && (frames[i].getName$().indexOf$S("Tool") > -1) ) {
continue;
}var frame3d=null;
try {
frame3d=Clazz.forName("org.opensourcephysics.display3d.core.DrawingFrame3D");
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
} else {
throw ex;
}
}
if (Clazz.getClass($I$(8)).isInstance$O(frames[i]) || ((frame3d != null ) && frame3d.isInstance$O(frames[i]) ) ) {
var bar=(frames[i]).getJMenuBar$();
if (bar != null ) {
for (var j=0, n=bar.getMenuCount$(); j < n; j++) {
bar.getMenu$I(j).setEnabled$Z(enable);
}
}}}
}, 1);

Clazz.newMeth(C$, 'closeAndDisposeOSPFrames$java_awt_Frame',  function (frame) {
var frames=$I$(4).getFrames$();
for (var i=0; i < frames.length; i++) {
if (frames[i] === frame ) {
continue;
}if (Clazz.getClass($I$(5)).isInstance$O(frames[i])) {
(frames[i]).setDefaultCloseOperation$I(2);
(frames[i]).setVisible$Z(false);
(frames[i]).dispose$();
}}
}, 1);

Clazz.newMeth(C$, 'showSaveDialog$java_awt_Component',  function (parent) {
return C$.showSaveDialog$java_awt_Component$S(parent, $I$(9).getString$S("GUIUtils.Title.Save"));
}, 1);

Clazz.newMeth(C$, 'showSaveDialog$java_awt_Component$S',  function (parent, title) {
var fileChooser=$I$(7).getChooser$();
if (fileChooser == null ) {
return null;
}var oldTitle=fileChooser.getDialogTitle$();
fileChooser.setDialogTitle$S(title);
var result=fileChooser.showSaveDialog$java_awt_Component(parent);
fileChooser.setDialogTitle$S(oldTitle);
if (result != 0) {
return null;
}$I$(7).chooserDir=fileChooser.getCurrentDirectory$().toString();
var file=fileChooser.getSelectedFile$();
if (!$I$(7).isJS && file.exists$() ) {
var selected=$I$(10,"showConfirmDialog$java_awt_Component$O$S$I",[parent, $I$(9).getString$S("DrawingFrame.ReplaceExisting_message") + " " + file.getName$() + $I$(9).getString$S("DrawingFrame.QuestionMark") , $I$(9).getString$S("DrawingFrame.ReplaceFile_option_title"), 1]);
if (selected != 0) {
return null;
}}return file;
}, 1);

Clazz.newMeth(C$, 'showOpenDialog$java_awt_Component',  function (parent) {
if ($I$(7).isJS) {
return null;
}var fileChooser=$I$(7).getChooser$();
var result=fileChooser.showOpenDialog$java_awt_Component(parent);
if (result != 0) {
return null;
}$I$(7).chooserDir=fileChooser.getCurrentDirectory$().toString();
var file=fileChooser.getSelectedFile$();
return file;
}, 1);

Clazz.newMeth(C$, 'getEnabledTextColor$',  function () {
return C$.enabledColor;
}, 1);

Clazz.newMeth(C$, 'getDisabledTextColor$',  function () {
return C$.disabledColor;
}, 1);

Clazz.newMeth(C$, 'timingTest$org_opensourcephysics_display_Drawable',  function (drawable) {
var dp=Clazz.new_($I$(11,1));
var df=Clazz.new_($I$(8,1).c$$org_opensourcephysics_display_DrawingPanel,[dp]);
df.setVisible$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(drawable);
dp.scale$();
dp.setPixelScale$();
var g2=dp.getGraphics$();
if (g2 == null ) {
return;
}var startTime=System.currentTimeMillis$();
drawable.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(dp, g2);
System.out.print$S("first drawing=" + (Long.$s(Long.$sub(System.currentTimeMillis$(),startTime))));
startTime=System.currentTimeMillis$();
for (var i=0; i < 5; i++) {
drawable.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(dp, g2);
}
System.out.println$S("  avg time/drawing=" + (Long.$s(Long.$div((Long.$sub(System.currentTimeMillis$(),startTime)),5))));
g2.dispose$();
}, 1);

Clazz.newMeth(C$, 'saveImage$javax_swing_JComponent$java_io_File$S',  function (comp, outputFile, outputFileFormat) {
var fos=null;
try {
var file=C$.fixExtension$java_io_File$S(outputFile, outputFileFormat);
fos=Clazz.new_($I$(12,1).c$$java_io_File,[file]);
if (outputFileFormat.equals$O("eps")) {
var g=Clazz.new_(["", fos, 0, 0, comp.getWidth$(), comp.getHeight$()],$I$(13,1).c$$S$java_io_OutputStream$I$I$I$I);
comp.paint$java_awt_Graphics(g);
g.scale$D$D(0.24, 0.24);
g.close$();
} else {
var bi=Clazz.new_([comp.getWidth$(), comp.getHeight$(), 5],$I$(14,1).c$$I$I$I);
var g=bi.getGraphics$();
comp.paint$java_awt_Graphics(g);
g.dispose$();
$I$(15).write$java_awt_image_RenderedImage$S$java_io_OutputStream(bi, outputFileFormat, fos);
fos.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
} finally {
if (fos != null ) {
fos.close$();
}}
}, 1);

Clazz.newMeth(C$, 'fixExtension$java_io_File$S',  function (file, ext) {
var fileName=file.getAbsolutePath$();
var extension=$I$(16).getExtension$S(fileName);
if ((extension == null ) || ".".equals$O(extension) ) {
fileName=$I$(16).stripExtension$S(fileName) + "." + (ext.equals$O("jpeg") ? "jpg" : ext) ;
file=Clazz.new_($I$(17,1).c$$S,[fileName]);
}return file;
}, 1);

Clazz.newMeth(C$, 'saveImage$javax_swing_JComponent$S$java_awt_Component',  function (component, outputFileFormat, parent) {
var outputFile=C$.showSaveDialog$java_awt_Component$S(component, $I$(9).getString$S("GUIUtils.Title.SaveImage"));
if (outputFile == null ) {
return;
}try {
C$.saveImage$javax_swing_JComponent$java_io_File$S(component, outputFile, outputFileFormat);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
$I$(10,"showMessageDialog$java_awt_Component$O",[parent, "An error occurred while saving the file " + outputFile.getName$() + ".'" ]);
} else {
throw ioe;
}
}
}, 1);

Clazz.newMeth(C$, 'saveImageAs$javax_swing_JComponent$S$S$S$SA',  function (component, type, title, description, extensions) {
var chooser=$I$(7).createChooser$S$S$SA(title, description, extensions);
var fileName=$I$(7).chooseFilename$javax_swing_JFileChooser(chooser);
if (fileName == null ) {
return;
}var file=C$.fixExtension$java_io_File$S(Clazz.new_($I$(17,1).c$$S,[fileName]), extensions[0]);
if (!$I$(7).isJS && file.exists$() ) {
var selected=$I$(10,"showConfirmDialog$java_awt_Component$O$S$I",[null, $I$(9).getString$S("DrawingFrame.ReplaceExisting_message") + " " + file.getName$() + $I$(9).getString$S("DrawingFrame.QuestionMark") , $I$(9).getString$S("DrawingFrame.ReplaceFile_option_title"), 1]);
if (selected != 0) {
return;
}}try {
C$.saveImage$javax_swing_JComponent$java_io_File$S(component, file, type);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'createCustomCursor$java_awt_Image$java_awt_Point$S$I',  function (image, hotspot, name, predefinedCursorType) {
try {
return $I$(18).getDefaultToolkit$().createCustomCursor$java_awt_Image$java_awt_Point$S(image, hotspot, name);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
try {
return $I$(19).getPredefinedCursor$I(predefinedCursorType);
} catch (ex1) {
if (Clazz.exceptionOf(ex1,"Exception")){
} else {
throw ex1;
}
}
} else {
throw ex;
}
}
return $I$(19).getPredefinedCursor$I(12);
}, 1);

Clazz.newMeth(C$, 'newJTextPane$',  function () {
return ($I$(7).antiAliasText ? ((P$.GUIUtils$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GUIUtils$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTextPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
var g2=g;
var rh=g2.getRenderingHints$();
rh.put$O$O($I$(20).KEY_TEXT_ANTIALIASING, $I$(20).VALUE_TEXT_ANTIALIAS_ON);
rh.put$O$O($I$(20).KEY_ANTIALIASING, $I$(20).VALUE_ANTIALIAS_ON);
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'setPage$java_net_URL',  function (url) {
if (!$I$(21).checkScrollPage$javax_swing_JTextPane$java_net_URL(this, url)) C$.superclazz.prototype.setPage$java_net_URL.apply(this, [url]);
});
})()
), Clazz.new_($I$(22,1),[this, null],P$.GUIUtils$1)) : ((P$.GUIUtils$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GUIUtils$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTextPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setPage$java_net_URL',  function (url) {
if (!$I$(21).checkScrollPage$javax_swing_JTextPane$java_net_URL(this, url)) C$.superclazz.prototype.setPage$java_net_URL.apply(this, [url]);
});
})()
), Clazz.new_($I$(22,1),[this, null],P$.GUIUtils$2)));
}, 1);

Clazz.newMeth(C$, 'checkScrollPage$javax_swing_JTextPane$java_net_URL',  function (pane, url) {
var stream=pane.getDocument$().getProperty$O("stream");
if (stream == null  || url == null   || !stream.getPath$().equals$O(url.getPath$())  || !"file".equals$O(stream.getProtocol$()) ) {
return false;
}var reference=url.getRef$();
if (reference != null ) {
pane.scrollToReference$S(reference);
}return true;
}, 1);

Clazz.newMeth(C$, 'newJTextArea$',  function () {
return ($I$(7).antiAliasText ? ((P$.GUIUtils$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GUIUtils$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTextArea'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
{
var g2=g;
var rh=g2.getRenderingHints$();
rh.put$O$O($I$(20).KEY_TEXT_ANTIALIASING, $I$(20).VALUE_TEXT_ANTIALIAS_ON);
rh.put$O$O($I$(20).KEY_ANTIALIASING, $I$(20).VALUE_ANTIALIAS_ON);
}C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
});
})()
), Clazz.new_($I$(23,1),[this, null],P$.GUIUtils$3)) : Clazz.new_($I$(23,1)));
}, 1);

Clazz.newMeth(C$, 'getParentToolBar$java_awt_Container',  function (c) {
while ((c=c.getParent$()) != null  && !(Clazz.instanceOf(c, "javax.swing.JToolBar")) ){
}
return c;
}, 1);

Clazz.newMeth(C$, 'getParentOrSelfToolBar$java_awt_Container',  function (c) {
if (!(Clazz.instanceOf(c, "javax.swing.JToolBar"))) {
while ((c=c.getParent$()) != null  && !(Clazz.instanceOf(c, "javax.swing.JToolBar")) ){
}
}return c;
}, 1);

Clazz.newMeth(C$, 'getParentViewport$java_awt_Container',  function (c) {
while ((c=c.getParent$()) != null  && !(Clazz.instanceOf(c, "javax.swing.JViewport")) ){
}
return c;
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$S$S$I$S',  function (c, message, title, messageType, value) {
return $I$(10,"showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O",[$I$(7).isJS ? null : c, message, title, messageType, null, null, value]);
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.enabledColor=$I$(1).getColor$O("Label.foreground");
if (C$.enabledColor == null ) C$.enabledColor=$I$(2).BLACK;
C$.disabledColor=$I$(1).getColor$O("Label.disabledForeground");
if (C$.disabledColor == null ) C$.disabledColor=$I$(1).getColor$O("Label.disabledText");
if (C$.disabledColor == null ) C$.disabledColor=$I$(2).LIGHT_GRAY;
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
