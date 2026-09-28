(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.io.FileWriter','java.io.PrintWriter','javax.swing.JOptionPane','org.opensourcephysics.tools.ToolsRes']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExportGnuplotFormat", null, null, 'org.opensourcephysics.tools.ExportFormat');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'description$',  function () {
return "Text";
});

Clazz.newMeth(C$, 'extension$',  function () {
return "txt";
});

Clazz.newMeth(C$, 'exportDataset$java_io_PrintWriter$org_opensourcephysics_display_Dataset$I',  function (pw, data, index) {
var x=data.getXPointsRaw$();
var y=data.getYPointsRaw$();
var n=data.getIndex$();
pw.print$S("\n# name: data" + index + "\n" + "# type: matrix\n" + "# rows: " + x.length + "\n" + "# columns: " + 2 + "\n" );
for (var j=0; j < n; j++) {
pw.println$S(new Double(x[j]).toString() + " " + new Double(y[j]).toString() );
}
});

Clazz.newMeth(C$, 'exportGridData$java_io_PrintWriter$org_opensourcephysics_display2d_GridData$I',  function (pw, gridData, index) {
var nx=gridData.getNx$();
var ny=gridData.getNy$();
var x0=gridData.getLeft$();
var dx=gridData.getDx$();
pw.println$S("\n# name: col_range" + index + "\n" + "# type: matrix\n" + "# rows: 1\n" + "# columns: " + nx );
for (var i=0; i < nx; i++) {
pw.print$S((new Double(x0 + i * dx).toString()) + " ");
}
pw.println$S("\n");
var y0=gridData.getTop$();
var dy=gridData.getDy$();
pw.println$S("# name: row_range" + index + "\n" + "# type: matrix\n" + "# rows: 1\n" + "# columns: " + ny );
for (var i=0; i < ny; i++) {
pw.print$S((new Double(y0 + i * dy).toString()) + " ");
}
pw.println$S("\n");
var nc=gridData.getComponentCount$();
for (var c=0; c < nc; c++) {
var cname=gridData.getComponentName$I(c);
pw.println$S("# name: grid_" + index + '_' + cname + '\n' + "# type: matrix\n" + "# rows: " + ny + '\n' + "# columns: " + nx );
for (var i=0; i < ny; i++) {
for (var j=0; j < nx; j++) {
pw.print$S(new Double(gridData.getValue$I$I$I(j, i, c)).toString() + " ");
}
pw.println$();
}
}
});

Clazz.newMeth(C$, 'export$java_io_File$java_util_List',  function (file, data) {
try {
var fw=Clazz.new_($I$(1,1).c$$java_io_File,[file]);
var pw=Clazz.new_($I$(2,1).c$$java_io_Writer,[fw]);
pw.println$S("# Created by the Open Source Physics library");
var it=data.iterator$();
for (var i=0; it.hasNext$(); i++) {
var o=it.next$();
if (Clazz.instanceOf(o, "org.opensourcephysics.display.Dataset")) {
this.exportDataset$java_io_PrintWriter$org_opensourcephysics_display_Dataset$I(pw, o, i);
} else if (Clazz.instanceOf(o, "org.opensourcephysics.display2d.GridData")) {
this.exportGridData$java_io_PrintWriter$org_opensourcephysics_display2d_GridData$I(pw, o, i);
}}
pw.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(3,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(4).getString$S("ExportFormat.Dialog.WriteError.Message"), $I$(4).getString$S("ExportFormat.Dialog.WriteError.Title"), 0]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
