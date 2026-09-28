(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.awt.image.BufferedImage','java.awt.print.PrinterJob','java.awt.print.PageFormat','java.awt.print.Book','java.awt.datatransfer.DataFlavor','org.opensourcephysics.tools.ResourceLoader','javax.imageio.ImageIO','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.Toolbox','javax.swing.JLabel','javax.swing.ImageIcon','javax.swing.border.EmptyBorder','javax.swing.JTextField','javax.swing.JPanel','java.awt.BorderLayout','java.io.File','javax.swing.JOptionPane','java.io.FileOutputStream','org.jibble.epsgraphics.EpsGraphics2D','java.awt.geom.AffineTransform','org.opensourcephysics.media.gif.GIFEncoder',['org.opensourcephysics.tools.SnapshotTool','.TransferImage'],'java.awt.Toolkit',['org.opensourcephysics.tools.SnapshotTool','.ComponentImage']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SnapshotTool", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.tools.Tool');
C$.$classes$=[['ComponentImage',0],['TransferImage',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['res','org.opensourcephysics.tools.ResourceLoader.Bundle','TOOL','org.opensourcephysics.tools.SnapshotTool','chooser','javax.swing.JFileChooser']]]

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
C$.res=$I$(6).getBundle$S$java_util_Locale(null, locale);
}, 1);

Clazz.newMeth(C$, 'getString$S',  function (key) {
try {
return C$.res.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
return '!' + key + '!' ;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getTool$',  function () {
if (C$.TOOL == null ) {
C$.TOOL=Clazz.new_(C$);
}return C$.TOOL;
}, 1);

Clazz.newMeth(C$, 'createChooser$',  function () {
var names=$I$(7).getWriterFormatNames$();
var allNames=Clazz.array(String, [names.length + 2]);
allNames[0]="gif";
allNames[1]="eps";
for (var i=0; i < names.length; i++) {
allNames[i + 2]=names[i];
}
C$.chooser=$I$(8,"createChooser$S$SA",[C$.res.getString$S("SnapshotTool.ImageFiles"), allNames]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var name="SnapshotTool";
C$.createChooser$();
$I$(9).addTool$S$org_opensourcephysics_tools_Tool(name, this);
}, 1);

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, replyTo) {
});

Clazz.newMeth(C$, 'saveImage$S$java_awt_Component',  function (filename, component) {
return this.saveImage$S$java_awt_Component$java_io_OutputStream(filename, component, null);
});

Clazz.newMeth(C$, 'saveImage$S$java_awt_Component$java_io_OutputStream',  function (filename, component, output) {
return this.saveImage$S$java_awt_Component$java_io_OutputStream$D(filename, component, output, 1.0);
});

Clazz.newMeth(C$, 'saveImage$S$java_awt_Component$java_io_OutputStream$D',  function (filename, component, output, scale) {
if (component == null ) {
return false;
}var originalComponent=component;
if (Clazz.instanceOf(component, "javax.swing.JFrame")) {
component=(component).getContentPane$();
} else if (Clazz.instanceOf(component, "javax.swing.JDialog")) {
component=(component).getContentPane$();
}var bi=Clazz.new_([component.getWidth$(), component.getHeight$(), 5],$I$(1,1).c$$I$I$I);
if (Clazz.instanceOf(component, "org.opensourcephysics.display.Renderable")) {
bi=(component).render$java_awt_image_BufferedImage(bi);
} else {
var g=bi.getGraphics$();
component.paint$java_awt_Graphics(g);
g.dispose$();
}if ((output == null ) && (filename == null ) ) {
var label=Clazz.new_($I$(10,1));
label.setIcon$javax_swing_Icon(Clazz.new_($I$(11,1).c$$java_awt_Image,[bi]));
var labelScale=Clazz.new_([C$.res.getString$S("SnapshotTool.Scale")],$I$(10,1).c$$S);
labelScale.setBorder$javax_swing_border_Border(Clazz.new_($I$(12,1).c$$I$I$I$I,[0, 5, 0, 5]));
var scaleField=Clazz.new_([Double.toString$D(scale)],$I$(13,1).c$$S);
var scalePanel=Clazz.new_([Clazz.new_($I$(15,1))],$I$(14,1).c$$java_awt_LayoutManager);
scalePanel.add$java_awt_Component$O(labelScale, "West");
scalePanel.add$java_awt_Component$O(scaleField, "Center");
var panel=Clazz.new_([Clazz.new_($I$(15,1))],$I$(14,1).c$$java_awt_LayoutManager);
panel.add$java_awt_Component$O(label, "Center");
panel.add$java_awt_Component$O(scalePanel, "South");
C$.chooser.setAccessory$javax_swing_JComponent(panel);
C$.chooser.setSelectedFile$java_io_File(Clazz.new_($I$(16,1).c$$S,["default.jpg"]));
filename=$I$(8).chooseFilename$javax_swing_JFileChooser(C$.chooser);
scale=Double.parseDouble$S(scaleField.getText$());
}if (filename == null ) {
return false;
}var format="jpg";
var index=filename.lastIndexOf$I(".");
if (index >= 0) {
format=filename.substring$I(index + 1).toLowerCase$();
} else {
filename=filename + "." + format ;
}var supported=C$.isImageFormatSupported$S(format);
if (!(supported || "gif".equalsIgnoreCase$S(format) || "eps".equalsIgnoreCase$S(format)  )) {
var message=Clazz.array(String, -1, [C$.res.getString$S("SnapshotTool.FormatNotSupported"), C$.res.getString$S("SnapshotTool.PreferredFormats")]);
$I$(17,"showMessageDialog$java_awt_Component$O$S$I",[null, message, C$.res.getString$S("SnapshotTool.Error"), 2]);
return false;
}var originalSize=null;
var componentResized=null;
var finalWidth=component.getWidth$();
var finalHeight=component.getHeight$();
if (scale <= 0.0 ) {
scale=1.0;
}if (scale != 1.0 ) {
originalSize=originalComponent.getSize$();
finalWidth=((originalSize.width * scale)|0);
finalHeight=((originalSize.height * scale)|0);
if (Clazz.instanceOf(component, "org.opensourcephysics.display.Renderable")) {
bi=Clazz.new_($I$(1,1).c$$I$I$I,[finalWidth, finalHeight, 5]);
bi=(component).render$java_awt_image_BufferedImage(bi);
component.invalidate$();
} else {
componentResized=originalComponent;
componentResized.setSize$I$I(finalWidth, finalHeight);
componentResized.validate$();
bi=Clazz.new_([component.getWidth$(), component.getHeight$(), 5],$I$(1,1).c$$I$I$I);
var g=bi.getGraphics$();
component.paint$java_awt_Graphics(g);
g.dispose$();
finalWidth=component.getWidth$();
finalHeight=component.getHeight$();
}}var result=true;
try {
if (output == null ) {
output=Clazz.new_($I$(18,1).c$$S,[filename]);
}if (supported) {
result=$I$(7).write$java_awt_image_RenderedImage$S$java_io_OutputStream(bi, format, output);
} else if ("eps".equalsIgnoreCase$S(format)) {
var g=Clazz.new_($I$(19,1).c$$S$java_io_OutputStream$I$I$I$I,["", output, 0, 0, finalWidth, finalHeight]);
g.drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(bi, Clazz.new_($I$(20,1)), null);
g.scale$D$D(0.24, 0.24);
g.close$();
} else {
try {
var encoder=Clazz.new_($I$(21,1).c$$java_awt_Image,[bi]);
encoder.Write$java_io_OutputStream(output);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
result=false;
exc.printStackTrace$();
} else {
throw exc;
}
}
}output.close$();
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"Exception")){
_exc.printStackTrace$();
result=false;
} else {
throw _exc;
}
}
if (componentResized != null  && originalSize != null  ) {
componentResized.setSize$I$I(originalSize.width, originalSize.height);
componentResized.validate$();
}return result;
});

Clazz.newMeth(C$, 'isImageFormatSupported$S',  function (format) {
try {
var names=$I$(7).getWriterFormatNames$();
for (var i=0; i < names.length; i++) {
if (names[i].equalsIgnoreCase$S(format)) {
return true;
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return false;
}, 1);

Clazz.newMeth(C$, 'copyImage$java_awt_Image',  function (image) {
var transfer=Clazz.new_($I$(22,1).c$$java_awt_Image,[this, null, image]);
$I$(23).getDefaultToolkit$().getSystemClipboard$().setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(transfer, null);
});

Clazz.newMeth(C$, 'getClipboardImage$',  function () {
var t=$I$(23).getDefaultToolkit$().getSystemClipboard$().getContents$O(null);
try {
if ((t != null ) && t.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(5).imageFlavor) ) {
var image=t.getTransferData$java_awt_datatransfer_DataFlavor($I$(5).imageFlavor);
return image;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$, 'copyImage$java_awt_Component',  function (component) {
Clazz.new_($I$(24,1).c$$java_awt_Component,[this, null, component]).copyToClipboard$();
});

Clazz.newMeth(C$, 'printImage$java_awt_Component',  function (component) {
Clazz.new_($I$(24,1).c$$java_awt_Component,[this, null, component]).print$();
});

C$.$static$=function(){C$.$static$=0;
{
C$.setLocale$java_util_Locale(null);
};
C$.TOOL=Clazz.new_(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.SnapshotTool, "ComponentImage", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.print.Printable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['image','java.awt.image.BufferedImage','c','java.awt.Component']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (comp) {
;C$.$init$.apply(this);
this.c=comp;
if (Clazz.instanceOf(comp, "javax.swing.JFrame")) {
comp=(comp).getContentPane$();
} else if (Clazz.instanceOf(comp, "javax.swing.JDialog")) {
comp=(comp).getContentPane$();
}this.image=Clazz.new_([comp.getWidth$(), comp.getHeight$(), 5],$I$(1,1).c$$I$I$I);
if (Clazz.instanceOf(comp, "org.opensourcephysics.display.Renderable")) {
this.image=(comp).render$java_awt_image_BufferedImage(this.image);
} else {
var g=this.image.getGraphics$();
comp.paint$java_awt_Graphics(g);
g.dispose$();
}}, 1);

Clazz.newMeth(C$, 'getImage$',  function () {
return this.image;
});

Clazz.newMeth(C$, 'copyToClipboard$',  function () {
this.b$['org.opensourcephysics.tools.SnapshotTool'].copyImage$java_awt_Image.apply(this.b$['org.opensourcephysics.tools.SnapshotTool'], [this.image]);
});

Clazz.newMeth(C$, 'print$',  function () {
var printerJob=$I$(2).getPrinterJob$();
var format=Clazz.new_($I$(3,1));
var book=Clazz.new_($I$(4,1));
book.append$java_awt_print_Printable$java_awt_print_PageFormat(this, format);
printerJob.setPageable$java_awt_print_Pageable(book);
if (printerJob.printDialog$()) {
try {
printerJob.print$();
} catch (pe) {
if (Clazz.exceptionOf(pe,"java.awt.print.PrinterException")){
} else {
throw pe;
}
}
}});

Clazz.newMeth(C$, 'print$java_awt_Graphics$java_awt_print_PageFormat$I',  function (g, pageFormat, pageIndex) {
if (pageIndex >= 1) {
return 1;
}if (g == null ) {
return 1;
}var g2=g;
var scalex=pageFormat.getImageableWidth$() / this.image.getWidth$();
var scaley=pageFormat.getImageableHeight$() / this.image.getHeight$();
var scale=Math.min(scalex, scaley);
scale=Math.min(scale, 1.0);
g2.translate$I$I((pageFormat.getImageableX$()|0), (pageFormat.getImageableY$()|0));
g2.scale$D$D(scale, scale);
g2.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, null);
return 0;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SnapshotTool, "TransferImage", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.datatransfer.Transferable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['image','java.awt.Image']]]

Clazz.newMeth(C$, 'c$$java_awt_Image',  function (image) {
;C$.$init$.apply(this);
this.image=image;
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$',  function () {
return Clazz.array($I$(5), -1, [$I$(5).imageFlavor]);
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor',  function (flavor) {
return $I$(5).imageFlavor.equals$java_awt_datatransfer_DataFlavor(flavor);
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor',  function (flavor) {
if (!this.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(flavor)) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
}return this.image;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
