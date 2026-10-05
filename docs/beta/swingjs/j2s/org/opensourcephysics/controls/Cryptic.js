(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.controls.Cryptic','javax.crypto.spec.PBEKeySpec','javax.crypto.SecretKeyFactory','javax.crypto.spec.PBEParameterSpec','javax.crypto.Cipher','org.opensourcephysics.controls.Base64Coder',['org.opensourcephysics.controls.Cryptic','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Cryptic", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['cryptic']]
,['I',['interactions'],'S',['encoding','keyFormat'],'O',['salt','byte[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (input) {
;C$.$init$.apply(this);
this.encrypt$S(input);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (input, password) {
;C$.$init$.apply(this);
this.encrypt$S$S(input, password);
}, 1);

Clazz.newMeth(C$, 'encrypt$S',  function (content) {
return this.encrypt$S$S(content, "ospWCMBACBJDB");
});

Clazz.newMeth(C$, 'encrypt$S$S',  function (content, password) {
try {
var keySpec=Clazz.new_([password.toCharArray$(), C$.salt, C$.interactions],$I$(2,1).c$$CA$BA$I);
var key=$I$(3).getInstance$S(C$.keyFormat).generateSecret$java_security_spec_KeySpec(keySpec);
var paramSpec=Clazz.new_($I$(4,1).c$$BA$I,[C$.salt, C$.interactions]);
var ecipher=$I$(5,"getInstance$S",[key.getAlgorithm$()]);
ecipher.init$I$java_security_Key$java_security_spec_AlgorithmParameterSpec(1, key, paramSpec);
var bytes=content.getBytes$S(C$.encoding);
var enc=ecipher.doFinal$BA(bytes);
this.cryptic= String.instantialize($I$(6).encode$BA(enc));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return this.cryptic;
});

Clazz.newMeth(C$, 'decrypt$',  function () {
return this.decrypt$S("ospWCMBACBJDB");
});

Clazz.newMeth(C$, 'decrypt$S',  function (password) {
try {
var keySpec=Clazz.new_([password.toCharArray$(), C$.salt, C$.interactions],$I$(2,1).c$$CA$BA$I);
var key=$I$(3).getInstance$S(C$.keyFormat).generateSecret$java_security_spec_KeySpec(keySpec);
var paramSpec=Clazz.new_($I$(4,1).c$$BA$I,[C$.salt, C$.interactions]);
var dcipher=$I$(5,"getInstance$S",[key.getAlgorithm$()]);
dcipher.init$I$java_security_Key$java_security_spec_AlgorithmParameterSpec(2, key, paramSpec);
var dec=null;
try {
dec=$I$(6).decode$S(this.cryptic);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
return null;
} else {
throw ex;
}
}
var bytes=dcipher.doFinal$BA(dec);
return  String.instantialize(bytes, C$.encoding);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$, 'getCryptic$',  function () {
return this.cryptic;
});

Clazz.newMeth(C$, 'setCryptic$S',  function (encrypted) {
this.cryptic=encrypted;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(7,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.encoding="UTF-8";
C$.keyFormat="PBEWithMD5AndDES";
C$.salt=Clazz.array(Byte.TYPE, -1, [9, -100, -56, 35, 30, -86, -77, 65]);
C$.interactions=19;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Cryptic, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var cryptic=obj;
control.setValue$S$O("cryptic", cryptic.getCryptic$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var cryptic=obj;
cryptic.setCryptic$S(control.getString$S("cryptic"));
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
