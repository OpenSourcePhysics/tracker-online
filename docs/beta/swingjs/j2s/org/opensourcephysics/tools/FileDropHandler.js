(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'java.awt.datatransfer.DataFlavor','org.opensourcephysics.tools.ResourceLoader','java.io.FileInputStream','java.net.URL']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileDropHandler", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.TransferHandler');
C$.$classes$=[['FileImporter',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isDropOK=null;
},1);

C$.$fields$=[['O',['frame','org.opensourcephysics.tools.FileDropHandler.FileImporter','uriListFlavor','java.awt.datatransfer.DataFlavor','isDropOK','Boolean']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_FileDropHandler_FileImporter',  function (frame) {
Clazz.super_(C$, this);
this.frame=frame;
}, 1);

Clazz.newMeth(C$, 'canImport$javax_swing_TransferHandler_TransferSupport',  function (support) {
return (support.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(1).javaFileListFlavor));
});

Clazz.newMeth(C$, 'importData$javax_swing_TransferHandler_TransferSupport',  function (support) {
if (!this.canImport$javax_swing_TransferHandler_TransferSupport(support)) return false;
var fileList=p$1.getFileList$java_awt_datatransfer_Transferable.apply(this, [support.getTransferable$()]);
var ret=fileList;
try {
if (fileList != null ) {
var f=fileList.get$I(0);
if (f.getName$().endsWith$S(".url")) {
var s=$I$(2,"readAllAsString$java_io_InputStream",[Clazz.new_($I$(3,1).c$$java_io_File,[f])]);
s=s.substring$I(s.indexOf$S("URL=") + 4);
ret=Clazz.new_([s.substring$I$I(0, s.indexOf$S("\n")).trim$()],$I$(4,1).c$$S);
}return this.frame.importData$O$java_awt_Component(ret, support.getComponent$());
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return false;
});

Clazz.newMeth(C$, 'getFileList$java_awt_datatransfer_Transferable',  function (t) {
try {
return t.getTransferData$java_awt_datatransfer_DataFlavor($I$(1).javaFileListFlavor);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, p$1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.FileDropHandler, "FileImporter", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
