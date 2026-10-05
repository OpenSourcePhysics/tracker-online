(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.display.DataPanel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TableFrame", null, 'org.opensourcephysics.display.OSPFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataPanel=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['dataPanel','org.opensourcephysics.display.DataPanel']]]

Clazz.newMeth(C$, 'c$$S',  function (frameTitle) {
;C$.superclazz.c$$S.apply(this,[frameTitle]);C$.$init$.apply(this);
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
this.setContentPane$java_awt_Container(this.dataPanel);
this.setRowNumberVisible$Z(true);
this.setSize$I$I(400, 500);
}, 1);

Clazz.newMeth(C$, 'setRefreshDelay$I',  function (delay) {
this.dataPanel.setRefreshDelay$I(delay);
});

Clazz.newMeth(C$, 'setStride$I',  function (stride) {
this.dataPanel.setStride$I(stride);
});

Clazz.newMeth(C$, 'setRowNumberVisible$Z',  function (vis) {
this.dataPanel.setRowNumberVisible$Z(vis);
});

Clazz.newMeth(C$, 'setColumnNames$SA',  function (names) {
this.dataPanel.setColumnNames$SA(names);
});

Clazz.newMeth(C$, 'appendArray$O',  function (obj) {
this.dataPanel.appendArray$O(obj);
});

Clazz.newMeth(C$, 'appendRow$DA',  function (x) {
this.dataPanel.appendRow$DA(x);
});

Clazz.newMeth(C$, 'appendRow$IA',  function (x) {
this.dataPanel.appendRow$IA(x);
});

Clazz.newMeth(C$, 'appendRow$OA',  function (x) {
this.dataPanel.appendRow$OA(x);
});

Clazz.newMeth(C$, 'appendRow$BA',  function (x) {
this.dataPanel.appendRow$BA(x);
});

Clazz.newMeth(C$, 'setColumnNames$I$S',  function (column, name) {
this.dataPanel.setColumnNames$I$S(column, name);
});

Clazz.newMeth(C$, 'setColumnFormat$I$S',  function (column, format) {
this.dataPanel.setColumnFormat$I$S(column, format);
});

Clazz.newMeth(C$, 'setMaxPoints$I',  function (max) {
this.dataPanel.setMaxPoints$I(max);
});

Clazz.newMeth(C$, 'setFirstRowIndex$I',  function (index) {
this.dataPanel.setFirstRowIndex$I(index);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
var wasVisible=C$.superclazz.prototype.isVisible$.apply(this, []);
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (vis && !wasVisible ) {
this.dataPanel.refreshTable$S("TF.visible");
}});

Clazz.newMeth(C$, 'refreshTable$S',  function (from) {
this.dataPanel.refreshTable$S(from);
});

Clazz.newMeth(C$, 'refreshTable$',  function () {
this.refreshTable$S(null);
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.dataPanel.clearData$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
