(function(){var P$=Clazz.newPackage("demoJS"),I$=[[0,'org.opensourcephysics.display.OSPRuntime','java.io.File','javax.swing.JOptionPane','org.opensourcephysics.controls.XMLControlElement']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SaveXMLFile");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentLocation=null;
},1);

C$.$fields$=[['O',['currentLocation','java.io.File']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControlElement',  function (xml) {
;C$.$init$.apply(this);

currentLocation = window.location.pathname.split('/').slice(0, -1).join('/')
this.saveXML$org_opensourcephysics_controls_XMLControl(xml);
System.out.println$S("XML Saved");
}, 1);

Clazz.newMeth(C$, 'saveXML$org_opensourcephysics_controls_XMLControl',  function (xml) {
var ext=".xml";
var chooser=$I$(1).getChooser$();
var oldTitle=chooser.getDialogTitle$();
chooser.setDialogTitle$S("Save XML File");
chooser.setCurrentDirectory$java_io_File(this.currentLocation);
var result=-1;
try {
result=chooser.showSaveDialog$java_awt_Component(null);
} catch (e) {
e.printStackTrace$();
}
chooser.setDialogTitle$S(oldTitle);
if (result == 0) {
var file=chooser.getSelectedFile$();
$I$(1).chooserDir=chooser.getCurrentDirectory$().toString();
var fileName=file.getAbsolutePath$();
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return;
}var i=fileName.toLowerCase$().lastIndexOf$S(ext);
if (i != fileName.length$() - 4) {
fileName+=ext;
file=Clazz.new_($I$(2,1).c$$S,[fileName]);
}if (false &&file.exists$()) {
var selected=$I$(3,"showConfirmDialog$java_awt_Component$O$S$I",[null, "Replace existing " + file.getName$() + "?" , "Replace File", 1]);
if (selected != 0) {
return;
}}xml.write$S(fileName);
}});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var control=Clazz.new_($I$(4,1));
var myName="myName";
control.setValue$S$O("name", myName);
var pi=3.14;
control.setValue$S$D("pi", pi);
var array=Clazz.array(Double.TYPE, -1, [10.0, 20.0, 30.0]);
control.setValue$S$O("data", array);
var array2D=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [1, 10.0]), Clazz.array(Double.TYPE, -1, [2, 20.0]), Clazz.array(Double.TYPE, -1, [3, 30.0])]);
control.setValue$S$O("data2", array2D);
Clazz.new_(C$.c$$org_opensourcephysics_controls_XMLControlElement,[control]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
