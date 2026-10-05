(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.controls.XMLControlElement']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocalJob", null, null, ['org.opensourcephysics.tools.Job', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['xml']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setXML$O( Clazz.new_());
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (xml) {
;C$.$init$.apply(this);
this.setXML$S(xml);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (obj) {
;C$.$init$.apply(this);
this.setXML$O(obj);
}, 1);

Clazz.newMeth(C$, 'getXML$',  function () {
return this.xml;
});

Clazz.newMeth(C$, 'setXML$S',  function (xml) {
if (xml != null ) {
this.xml=xml;
}});

Clazz.newMeth(C$, 'setXML$O',  function (obj) {
var control=Clazz.new_($I$(1,1).c$$O,[obj]);
this.setXML$S(control.toXML$());
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
