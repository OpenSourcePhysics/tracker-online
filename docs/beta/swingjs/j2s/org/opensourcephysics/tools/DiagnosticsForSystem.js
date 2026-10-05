(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'javax.swing.JDialog']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DiagnosticsForSystem", null, 'org.opensourcephysics.display.DataPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'aboutSystem$java_awt_Frame',  function (owner) {
var dialog=Clazz.new_($I$(1,1).c$$java_awt_Frame$S,[owner, "System Properties"]);
var viewer=Clazz.new_(C$);
dialog.setContentPane$java_awt_Container(viewer);
dialog.setSize$I$I(500, 300);
dialog.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setColumnNames$SA(Clazz.array(String, -1, ["#", "property", "value"]));
var propEnum=System.getProperties$().propertyNames$();
while (propEnum.hasMoreElements$()){
var next=propEnum.nextElement$();
var val=System.getProperty$S(next);
this.appendRow$OA(Clazz.array(String, -1, [next, val]));
}
this.refreshTable$S("DiagnosticsForSystem");
this.setRowNumberVisible$Z(false);
this.setAutoResizeMode$I(3);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
C$.aboutSystem$java_awt_Frame(null);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
