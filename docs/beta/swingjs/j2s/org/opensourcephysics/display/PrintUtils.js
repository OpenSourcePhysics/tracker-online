(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,['javax.print.DocFlavor','.SERVICE_FORMATTED'],'javax.print.StreamPrintServiceFactory','org.opensourcephysics.display.OSPRuntime','java.io.FileOutputStream','javax.print.PrintServiceLookup','javax.print.attribute.HashPrintRequestAttributeSet','javax.print.attribute.standard.OrientationRequested','javax.print.attribute.standard.Chromaticity','javax.print.attribute.standard.PrintQuality','javax.print.ServiceUI',['org.opensourcephysics.display.PrintUtils','.PrintableComponent'],'javax.print.SimpleDoc','javax.swing.JOptionPane','org.opensourcephysics.display.DisplayRes','javax.print.event.PrintJobAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PrintUtils", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['PrintableComponent',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'saveComponentAsEPS$java_awt_Component',  function (c) {
var flavor=$I$(1).PRINTABLE;
var format="application/postscript";
var factory=$I$(2).lookupStreamPrintServiceFactories$javax_print_DocFlavor$S(flavor, format)[0];
var chooser=$I$(3).getChooser$();
if (chooser.showSaveDialog$java_awt_Component(c) != 0) {
return;
}var f=chooser.getSelectedFile$();
var out=Clazz.new_($I$(4,1).c$$java_io_File,[f]);
var service=factory.getPrintService$java_io_OutputStream(out);
C$.printToService$java_awt_Component$javax_print_PrintService$javax_print_attribute_PrintRequestAttributeSet(c, service, null);
out.close$();
}, 1);

Clazz.newMeth(C$, 'printComponent$java_awt_Component',  function (c) {
var flavor=$I$(1).PRINTABLE;
var services=$I$(5).lookupPrintServices$javax_print_DocFlavor$javax_print_attribute_AttributeSet(flavor, null);
var printAttributes=Clazz.new_($I$(6,1));
printAttributes.add$javax_print_attribute_Attribute($I$(7).PORTRAIT);
printAttributes.add$javax_print_attribute_Attribute($I$(8).MONOCHROME);
printAttributes.add$javax_print_attribute_Attribute($I$(9).HIGH);
var service=$I$(10).printDialog$java_awt_GraphicsConfiguration$I$I$javax_print_PrintServiceA$javax_print_PrintService$javax_print_DocFlavor$javax_print_attribute_PrintRequestAttributeSet(null, 100, 100, services, null, null, printAttributes);
if (service == null ) {
return;
}C$.printToService$java_awt_Component$javax_print_PrintService$javax_print_attribute_PrintRequestAttributeSet(c, service, printAttributes);
}, 1);

Clazz.newMeth(C$, 'printToService$java_awt_Component$javax_print_PrintService$javax_print_attribute_PrintRequestAttributeSet',  function (c, service, printAttributes) {
var printable=Clazz.new_($I$(11,1).c$$java_awt_Component,[c]);
var flavor=$I$(1).PRINTABLE;
var doc=Clazz.new_($I$(12,1).c$$O$javax_print_DocFlavor$javax_print_attribute_DocAttributeSet,[printable, flavor, null]);
var job=service.createPrintJob$();
var pane=Clazz.new_([$I$(14).getString$S("PrintUtils.Printing.Message"), -1],$I$(13,1).c$$O$I);
var dialog=pane.createDialog$java_awt_Component$S(c, $I$(14).getString$S("PrintUtils.PrintDialog.Title"));
job.addPrintJobListener$javax_print_event_PrintJobListener(((P$.PrintUtils$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrintUtils$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.print.event.PrintJobAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'printJobCompleted$javax_print_event_PrintJobEvent',  function (e) {
this.$finals$.pane.setMessage$O($I$(14).getString$S("PrintUtils.PrintComplete.Message"));
});

Clazz.newMeth(C$, 'printDataTransferCompleted$javax_print_event_PrintJobEvent',  function (e) {
this.$finals$.pane.setMessage$O($I$(14).getString$S("PrintUtils.PrintTransferred.Message"));
});

Clazz.newMeth(C$, 'printJobRequiresAttention$javax_print_event_PrintJobEvent',  function (e) {
this.$finals$.pane.setMessage$O($I$(14).getString$S("PrintUtils.OutOfPaper.Message"));
});

Clazz.newMeth(C$, 'printJobFailed$javax_print_event_PrintJobEvent',  function (e) {
this.$finals$.pane.setMessage$O($I$(14).getString$S("PrintUtils.PrintFailed.Message"));
});
})()
), Clazz.new_($I$(15,1),[this, {pane:pane}],P$.PrintUtils$1)));
dialog.setModal$Z(false);
dialog.setVisible$Z(true);
try {
job.print$javax_print_Doc$javax_print_attribute_PrintRequestAttributeSet(doc, printAttributes);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.print.PrintException")){
pane.setMessage$O(e.toString());
} else {
throw e;
}
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.PrintUtils, "PrintableComponent", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.print.Printable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['c','java.awt.Component']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (c) {
;C$.$init$.apply(this);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'print$java_awt_Graphics$java_awt_print_PageFormat$I',  function (g, format, pagenum) {
if (pagenum > 0) {
return 1;
}var g2=g;
g2.translate$D$D(format.getImageableX$(), format.getImageableY$());
var size=this.c.getSize$();
var pageWidth=format.getImageableWidth$();
var pageHeight=format.getImageableHeight$();
if (size.width > pageWidth ) {
var factor=pageWidth / size.width;
g2.scale$D$D(factor, factor);
pageWidth/=factor;
pageHeight/=factor;
}if (size.height > pageHeight ) {
var factor=pageHeight / size.height;
g2.scale$D$D(factor, factor);
pageWidth/=factor;
pageHeight/=factor;
}g2.translate$D$D((pageWidth - size.width) / 2, (pageHeight - size.height) / 2);
g2.drawRect$I$I$I$I(-1, -1, size.width + 2, size.height + 2);
g2.setClip$I$I$I$I(0, 0, size.width, size.height);
this.c.paint$java_awt_Graphics(g);
return 0;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
