(function(){var P$=Clazz.newPackage("test"),I$=[[0,'org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GetFileWithChooser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var chooser=$I$(1).getChooser$();
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, ((P$.GetFileWithChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GetFileWithChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var fileName=this.$finals$.chooser.getSelectedFile$().getAbsolutePath$();
System.out.println$S("File name=" + fileName);
});
})()
), Clazz.new_(P$.GetFileWithChooser$1.$init$,[this, {chooser:chooser}])), null);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
