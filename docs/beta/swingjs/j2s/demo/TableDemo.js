(function(){var P$=Clazz.newPackage("demo"),I$=[[0,'org.opensourcephysics.frames.TableFrame','java.awt.Color','javax.swing.Timer','demo.TableDemo']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TableDemo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['stride']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
var table=Clazz.new_($I$(1,1).c$$S,["Table Demo"]);
table.setSize$I$I(400, 400);
for (var x=-10, dx=0.1; x < 10 ; x+=dx) {
table.appendRow$DA(Clazz.array(Double.TYPE, -1, [x, Math.sin(x)]));
}
table.dataPanel.dataRowTable.getTableHeader$().setBackground$java_awt_Color($I$(2).blue);
table.setVisible$Z(true);
table.setDefaultCloseOperation$I(3);
Clazz.new_([1000, ((P$.TableDemo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableDemo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.table.setStride$I($I$(4).stride=$I$(4).stride * 2);
this.$finals$.table.refreshTable$();
if ($I$(4).stride > 50) {
(e.getSource$()).stop$();
this.$finals$.table.dataPanel.dataRowTable.getTableHeader$().setBackground$java_awt_Color($I$(2).yellow);
}});
})()
), Clazz.new_(P$.TableDemo$1.$init$,[this, {table:table}]))],$I$(3,1).c$$I$java_awt_event_ActionListener).start$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.stride=1;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
