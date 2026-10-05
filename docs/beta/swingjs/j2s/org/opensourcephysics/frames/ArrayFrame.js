(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.ArrayPanel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayFrame", null, 'org.opensourcephysics.display.OSPFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['arrayPanel','org.opensourcephysics.display.ArrayPanel']]]

Clazz.newMeth(C$, 'c$$O',  function (arrayObj) {
C$.c$$O$S.apply(this, [arrayObj, $I$(1).getString$S("ArrayFrame.Title")]);
}, 1);

Clazz.newMeth(C$, 'c$$O$S',  function (arrayObj, title) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
this.arrayPanel=$I$(2).getArrayPanel$O(arrayObj);
this.setContentPane$java_awt_Container(this.arrayPanel);
this.pack$();
}, 1);

Clazz.newMeth(C$, 'setFirstRowIndex$I',  function (index) {
this.arrayPanel.setFirstRowIndex$I(index);
});

Clazz.newMeth(C$, 'setFirstColIndex$I',  function (index) {
this.arrayPanel.setFirstColIndex$I(index);
});

Clazz.newMeth(C$, 'setEditable$Z',  function (editable) {
this.arrayPanel.setEditable$Z(editable);
});

Clazz.newMeth(C$, 'setTransposed$Z',  function (transposed) {
this.arrayPanel.setTransposed$Z(transposed);
});

Clazz.newMeth(C$, 'setColumnLock$I$Z',  function (columnIndex, locked) {
this.arrayPanel.setColumnLock$I$Z(columnIndex, locked);
});

Clazz.newMeth(C$, 'setColumnLocks$ZA',  function (locked) {
this.arrayPanel.setColumnLocks$ZA(locked);
});

Clazz.newMeth(C$, 'setColumnNames$SA',  function (names) {
this.arrayPanel.setColumnNames$SA(names);
});

Clazz.newMeth(C$, 'setColumnNames$SAA',  function (names) {
this.arrayPanel.setColumnNames$SAA(names);
});

Clazz.newMeth(C$, 'setNumericFormat$S',  function (format) {
this.arrayPanel.setNumericFormat$S(format);
});

Clazz.newMeth(C$, 'setRowNumberVisible$Z',  function (vis) {
this.arrayPanel.setRowNumberVisible$Z(vis);
});

Clazz.newMeth(C$, 'setColumnFormat$I$S',  function (column, format) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
