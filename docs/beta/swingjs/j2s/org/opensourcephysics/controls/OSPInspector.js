(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.controls.XMLControlElement','java.awt.Color','org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XMLLoader','javax.swing.JDialog','org.opensourcephysics.controls.XMLTreePanel','java.awt.Dimension','org.opensourcephysics.controls.ControlsRes']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPInspector");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xml=Clazz.new_($I$(1,1));
this.shortObjectName="null";
this.highlightColor=Clazz.new_($I$(2,1).c$$I$I$I,[224, 255, 224]);
},1);

C$.$fields$=[['S',['shortObjectName'],'O',['obj','java.lang.Object','xml','org.opensourcephysics.controls.XMLControlElement','highlightColor','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$O',  function (obj) {
;C$.$init$.apply(this);
this.obj=obj;
var name=obj.getClass$().getName$();
this.shortObjectName=name.substring$I(1 + name.lastIndexOf$S("."));
this.xml.saveObject$O(obj);
}, 1);

Clazz.newMeth(C$, 'getInspector$O',  function (obj) {
var loader=$I$(3,"getLoader$Class",[obj.getClass$()]);
if ((loader.getClass$() === Clazz.getClass($I$(4)) ) || (Clazz.instanceOf(obj, "java.lang.Double")) || (Clazz.instanceOf(obj, "java.lang.Integer")) || (Clazz.instanceOf(obj, "java.lang.Boolean"))  ) {
return null;
}return Clazz.new_(C$.c$$O,[obj]);
}, 1);

Clazz.newMeth(C$, 'getShortObjectName$',  function () {
return this.shortObjectName;
});

Clazz.newMeth(C$, 'toXML$',  function () {
return this.xml.toXML$();
});

Clazz.newMeth(C$, 'show$',  function () {
this.xml.saveObject$O(this.obj);
var dialog=Clazz.new_($I$(5,1).c$$java_awt_Frame$Z,[null, true]);
dialog.setContentPane$java_awt_Container(Clazz.new_($I$(6,1).c$$org_opensourcephysics_controls_XMLControl,[this.xml]));
dialog.setSize$java_awt_Dimension(Clazz.new_($I$(7,1).c$$I$I,[600, 300]));
dialog.setTitle$S(this.shortObjectName + " " + $I$(8).getString$S("OSPInspector.Title") );
dialog.setVisible$Z(true);
this.obj=this.xml.loadObject$O(null);
return this.obj;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
