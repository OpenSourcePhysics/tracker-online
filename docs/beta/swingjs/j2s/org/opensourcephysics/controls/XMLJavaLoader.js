(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'java.io.ByteArrayOutputStream','java.io.BufferedOutputStream','java.beans.XMLEncoder','java.io.ByteArrayInputStream','java.beans.XMLDecoder','java.io.BufferedInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLJavaLoader", null, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['out','java.io.ByteArrayOutputStream','buf','java.io.BufferedOutputStream']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.out=Clazz.new_($I$(1,1));
this.buf=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[this.out]);
}, 1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var enc=Clazz.new_($I$(3,1).c$$java_io_OutputStream,[this.buf]);
enc.writeObject$O(obj);
enc.close$();
var xml=this.out.toString();
control.setValue$S$O("java_xml", xml);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var xml=control.getString$S("java_xml");
var $in;
try {
$in=Clazz.new_([xml.getBytes$S("UTF-8")],$I$(4,1).c$$BA);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.UnsupportedEncodingException")){
$in=Clazz.new_([xml.getBytes$()],$I$(4,1).c$$BA);
} else {
throw ex;
}
}
var dec=Clazz.new_([Clazz.new_($I$(6,1).c$$java_io_InputStream,[$in])],$I$(5,1).c$$java_io_InputStream);
var obj=dec.readObject$();
dec.close$();
return obj;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
return this.createObject$org_opensourcephysics_controls_XMLControl(control);
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
