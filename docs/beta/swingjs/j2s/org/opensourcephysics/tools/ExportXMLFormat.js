(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.controls.OSPLog','java.io.FileWriter','javax.swing.JOptionPane','org.opensourcephysics.tools.ToolsRes','java.io.PrintWriter','org.opensourcephysics.controls.XMLControlElement']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExportXMLFormat", null, null, 'org.opensourcephysics.tools.ExportFormat');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'description$',  function () {
return "XML";
});

Clazz.newMeth(C$, 'extension$',  function () {
return "xml";
});

Clazz.newMeth(C$, 'export$java_io_File$java_util_List',  function (file, data) {
$I$(1,"finer$S",["Exporting XML data to file=" + file]);
var fw=null;
try {
fw=Clazz.new_($I$(2,1).c$$java_io_File,[file]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(3,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(4).getString$S("ExportFormat.Dialog.WriteError.Message"), $I$(4).getString$S("ExportFormat.Dialog.WriteError.Title"), 0]);
return;
} else {
throw ex;
}
}
var pw=Clazz.new_($I$(5,1).c$$java_io_Writer,[fw]);
var it=data.iterator$();
while (it.hasNext$()){
var control=Clazz.new_([it.next$()],$I$(6,1).c$$O);
pw.print$S(control.toXML$());
pw.println$();
}
pw.close$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
