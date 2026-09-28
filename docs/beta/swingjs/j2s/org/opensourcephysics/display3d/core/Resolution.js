(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.core"),I$=[[0,'org.opensourcephysics.display3d.core.Resolution',['org.opensourcephysics.display3d.core.Resolution','.ResolutionLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Resolution", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ResolutionLoader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=0;
this.maxLength=1.0;
this.n1=1;
this.n2=1;
this.n3=1;
},1);

C$.$fields$=[['D',['maxLength'],'I',['type','n1','n2','n3']]]

Clazz.newMeth(C$, 'c$$D',  function (max) {
;C$.$init$.apply(this);
this.type=1;
this.maxLength=max;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I',  function (n1, n2, n3) {
;C$.$init$.apply(this);
this.type=0;
this.n1=n1;
this.n2=n2;
this.n3=n3;
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getMaxLength$',  function () {
return this.maxLength;
});

Clazz.newMeth(C$, 'getN1$',  function () {
return this.n1;
});

Clazz.newMeth(C$, 'getN2$',  function () {
return this.n2;
});

Clazz.newMeth(C$, 'getN3$',  function () {
return this.n3;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Resolution, "ResolutionLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var res=obj;
control.setValue$S$I("type", res.type);
control.setValue$S$D("max length", res.maxLength);
control.setValue$S$I("n1", res.n1);
control.setValue$S$I("n2", res.n2);
control.setValue$S$I("n3", res.n3);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$I$I$I,[1, 1, 1]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var res=obj;
res.type=control.getInt$S("type");
res.maxLength=control.getDouble$S("max length");
res.n1=control.getInt$S("n1");
res.n2=control.getInt$S("n2");
res.n3=control.getInt$S("n3");
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
