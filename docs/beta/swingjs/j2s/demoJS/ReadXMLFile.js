(function(){var P$=Clazz.newPackage("demoJS"),I$=[[0,'javax.swing.JFrame','javajs.async.AsyncFileChooser','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.XMLTreePanel']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReadXMLFile");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentLocation=null;
this.frame=Clazz.new_($I$(1,1).c$$S,["Read XML Example"]);
},1);

C$.$fields$=[['O',['currentLocation','java.io.File','frame','javax.swing.JFrame']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);

currentLocation = window.location.pathname.split('/').slice(0, -1).join('/')
this.frame.setSize$I$I(500, 500);
this.frame.setVisible$Z(true);
this.readXML$();
System.out.println$S("XML Read");
}, 1);

Clazz.newMeth(C$, 'readXML$',  function () {
var chooser=Clazz.new_($I$(2,1));
var oldTitle=chooser.getDialogTitle$();
chooser.setDialogTitle$S("Load XML Data");
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(null, ((P$.ReadXMLFile$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReadXMLFile$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (!$I$(3).isJS) {
$I$(3).chooserDir=this.$finals$.chooser.getCurrentDirectory$().toString();
}var file=this.$finals$.chooser.getSelectedFile$();
$I$(4,"fine$S",["reading file=" + file]);
var xml=Clazz.new_($I$(5,1).c$$java_io_File,[file]);
this.$finals$.chooser.setDialogTitle$S(this.$finals$.oldTitle);
this.b$['demoJS.ReadXMLFile'].displayXML$org_opensourcephysics_controls_XMLControlElement.apply(this.b$['demoJS.ReadXMLFile'], [xml]);
});
})()
), Clazz.new_(P$.ReadXMLFile$1.$init$,[this, {chooser:chooser,oldTitle:oldTitle}])), ((P$.ReadXMLFile$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReadXMLFile$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.chooser.setDialogTitle$S(this.$finals$.oldTitle);
});
})()
), Clazz.new_(P$.ReadXMLFile$2.$init$,[this, {chooser:chooser,oldTitle:oldTitle}])));
});

Clazz.newMeth(C$, 'displayXML$org_opensourcephysics_controls_XMLControlElement',  function (xml) {
var treePanel=Clazz.new_($I$(6,1).c$$org_opensourcephysics_controls_XMLControl,[xml]);
this.frame.setContentPane$java_awt_Container(treePanel);
this.frame.revalidate$();
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
