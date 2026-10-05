(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Toolkit','Thread','org.opensourcephysics.cabrillo.tracker.TrackerIO','org.opensourcephysics.display.OSPRuntime','java.awt.datatransfer.DataFlavor']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClipboardListener", null, 'Thread', 'java.awt.datatransfer.ClipboardOwner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sysClip=$I$(1).getDefaultToolkit$().getSystemClipboard$();
this.running=true;
},1);

C$.$fields$=[['Z',['running'],'O',['sysClip','java.awt.datatransfer.Clipboard','frame','org.opensourcephysics.cabrillo.tracker.TFrame','targetPanelID','Integer']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame',  function (frame) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.frame=frame;
}, 1);

Clazz.newMeth(C$, 'start$',  function () {
C$.superclazz.prototype.start$.apply(this, []);
var contents=this.sysClip.getContents$O(this);
this.processContents$java_awt_datatransfer_Transferable(contents);
});

Clazz.newMeth(C$, 'run$',  function () {
var trans=this.sysClip.getContents$O(this);
this.takeOwnership$java_awt_datatransfer_Transferable(trans);
while (this.running){
try {
$I$(2).sleep$J(5);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'lostOwnership$java_awt_datatransfer_Clipboard$java_awt_datatransfer_Transferable',  function (c, t) {
if (!this.running) return;
var success=false;
while (!success){
try {
$I$(2).sleep$J(200);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
try {
var contents=this.sysClip.getContents$O(this);
this.processContents$java_awt_datatransfer_Transferable(contents);
success=true;
this.takeOwnership$java_awt_datatransfer_Transferable(contents);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'processContents$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (target) {
this.targetPanelID=target.getID$();
this.processContents$java_awt_datatransfer_Transferable(this.sysClip.getContents$O(this));
});

Clazz.newMeth(C$, 'processContents$java_awt_datatransfer_Transferable',  function (t) {
if ($I$(3).$dataCopiedToClipboard) {
$I$(3).$dataCopiedToClipboard=false;
return;
}if (t == null ) {
return;
}try {
this.processContents$S(t.getTransferData$java_awt_datatransfer_DataFlavor($I$(4).isJS ? $I$(5).plainTextFlavor : $I$(5).stringFlavor));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'processContents$S',  function (dataString) {
if (dataString != null ) {
var trackerPanel;
if (this.targetPanelID == null ) {
trackerPanel=this.frame.getSelectedPanel$();
} else {
trackerPanel=this.frame.getTrackerPanelForID$Integer(this.targetPanelID);
this.targetPanelID=null;
}if (trackerPanel == null ) return;
trackerPanel.doAutoPaste$S(dataString);
}});

Clazz.newMeth(C$, 'takeOwnership$java_awt_datatransfer_Transferable',  function (t) {
this.sysClip.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(t, this);
});

Clazz.newMeth(C$, 'end$',  function () {
this.running=false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
