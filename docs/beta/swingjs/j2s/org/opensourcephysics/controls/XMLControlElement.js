(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},I$=[[0,'java.util.HashMap','java.util.ArrayList','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.controls.XMLPropertyElement',['org.opensourcephysics.controls.XMLProperty','.WrappedArray'],'org.opensourcephysics.controls.XMLProperty','org.opensourcephysics.controls.OSPCombo','org.opensourcephysics.controls.XML','org.opensourcephysics.controls.Cryptic','java.io.ByteArrayInputStream','java.io.BufferedReader','java.io.StringReader','org.opensourcephysics.display.OSPRuntime','java.io.File','javax.swing.JOptionPane','org.opensourcephysics.controls.ControlsRes','java.io.FileOutputStream','java.nio.charset.Charset','java.io.OutputStreamWriter','java.io.FileWriter','java.io.BufferedWriter','org.opensourcephysics.controls.XMLControl','StringBuffer','org.opensourcephysics.controls.XMLTreeChooser','org.opensourcephysics.controls.XMLTree','org.opensourcephysics.controls.ListChooser','org.opensourcephysics.controls.Password','java.lang.reflect.Array','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLControlElement", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.controls.XMLNode', 'org.opensourcephysics.controls.XMLControl');
C$.$classes$=[['FrameDataAdjusterI',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.theClass=null;
this.counts=Clazz.new_($I$(1,1));
this.propNames=Clazz.new_($I$(2,1));
this.props=Clazz.new_($I$(2,1));
this.valid=false;
this.readFailed=false;
this.doctype="osp10.dtd";
this.decryptPolicy=0;
},1);

C$.$fields$=[['Z',['canWrite','valid','readFailed','isFinalizable'],'I',['level','decryptPolicy'],'S',['version','doctype','basepath','password'],'O',['theClass','Class','counts','java.util.Map','object','java.lang.Object','propNames','java.util.ArrayList','+props','input','java.io.BufferedReader','output','java.io.BufferedWriter','data','java.lang.Object','childMap','java.util.Map','childControls','org.opensourcephysics.controls.XMLControl[]','propMap','java.util.Map','loader','org.opensourcephysics.controls.XML.ObjectLoader']]
,['I',['compactArraySize'],'S',['encoding'],'O',['sync','java.lang.Object']]]

Clazz.newMeth(C$, 'getBasepath$',  function () {
return this.basepath;
});

Clazz.newMeth(C$, 'setBasepath$S',  function (basepath) {
this.basepath=basepath;
});

Clazz.newMeth(C$, 'getData$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$Class',  function (type) {
Clazz.super_(C$, this);
this.setObjectClass$Class(type);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (obj) {
Clazz.super_(C$, this);
this.setObjectClass$Class(obj.getClass$());
this.saveObject$O(obj);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLProperty',  function (parent) {
Clazz.super_(C$, this);
this.parent=parent;
this.level=parent.getLevel$();
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (xmlFile) {
Clazz.super_(C$, this);
try {
var data=p$1.getFileData$java_io_File.apply(this, [xmlFile]);
if (data != null ) {
p$1.readData$S.apply(this, [data]);
return;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(3,"warning$S",["Failed to read xml: " + xmlFile + ex.getMessage$() ]);
} else {
throw ex;
}
}
this.readFailed=true;
}, 1);

Clazz.newMeth(C$, 'getFileData$java_io_File',  function (xmlFile) {
var bytes=null;
try {
bytes=$I$(4,"getURLContents$java_net_URL$Z",[xmlFile.toURI$().toURL$(), false]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
} else {
throw e;
}
}
return (bytes == null  ? null :  String.instantialize(bytes));
}, p$1);

Clazz.newMeth(C$, 'c$$S',  function (input) {
C$.c$.apply(this, []);
p$1.readData$S.apply(this, [input]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLControl',  function (control) {
C$.c$.apply(this, []);
this.readXML$S(control.toXML$());
}, 1);

Clazz.newMeth(C$, 'setLockValues$Z',  function (lock) {
});

Clazz.newMeth(C$, 'setValue$S$Z',  function (name, value) {
if (name == null ) {
return;
}p$1.setXMLProperty$S$I$O$Z.apply(this, [name, 2, String.valueOf$Z(value), false]);
});

Clazz.newMeth(C$, 'setValue$S$D',  function (name, value) {
if (name == null ) {
return;
}p$1.setXMLProperty$S$I$O$Z.apply(this, [name, 1, String.valueOf$D(value), false]);
});

Clazz.newMeth(C$, 'setValue$S$I',  function (name, value) {
if (name == null ) {
return;
}p$1.setXMLProperty$S$I$O$Z.apply(this, [name, 0, String.valueOf$I(value), false]);
});

Clazz.newMeth(C$, 'setValue$S$O',  function (name, obj) {
this.setValue$S$O$Z(name, obj, $I$(5).defaultWriteNullFinalArrayElements);
});

Clazz.newMeth(C$, 'setValue$S$DA$I',  function (name, val, decimalPlaces) {
this.setValue$S$O(name, Clazz.new_($I$(6,1).c$$DA$I,[val, decimalPlaces]));
});

Clazz.newMeth(C$, 'setValue$S$O$Z',  function (name, obj, writeNullFinalElement) {
if (name == null ) {
return;
}if (obj == null ) {
var childRemoved=false;
if (p$1.getPropMap.apply(this, []).containsKey$O(name)) {
var it=this.props.iterator$();
while (it.hasNext$()){
var prop=it.next$();
if (name.equals$O(prop.getPropertyName$())) {
it.remove$();
this.propNames.remove$O(name);
p$1.getPropMap.apply(this, []).remove$O(name);
if (p$1.getChildMap.apply(this, []).remove$O(name) != null ) {
childRemoved=true;
}break;
}}
}if (childRemoved) {
this.childControls=null;
}return;
}if (Clazz.instanceOf(obj, "java.lang.Boolean")) {
this.setValue$S$Z(name, (obj).booleanValue$());
return;
}var type=$I$(7).getDataType$O(obj);
switch (type) {
case -1:
break;
case 0:
case 1:
obj=obj.toString();
default:
p$1.setXMLProperty$S$I$O$Z.apply(this, [name, type, obj, writeNullFinalElement]);
break;
}
});

Clazz.newMeth(C$, 'getBoolean$S',  function (name) {
var prop=p$1.getXMLProperty$S.apply(this, [name]);
if (prop != null  && prop.getPropertyType$() == 2 ) {
return "true".equals$O(prop.getPropertyContent$().get$I(0));
} else if (prop != null  && prop.getPropertyType$() == 3 ) {
return "true".equals$O(prop.getPropertyContent$().get$I(0));
}return false;
});

Clazz.newMeth(C$, 'getDouble$S',  function (name) {
var prop=p$1.getXMLProperty$S.apply(this, [name]);
if (prop != null ) switch (prop.getPropertyType$()) {
case 1:
case 0:
case 3:
try {
return Double.parseDouble$S(prop.getPropertyContent$().get$I(0));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
break;
}
return NaN;
});

Clazz.newMeth(C$, 'getInt$S',  function (name) {
var prop=p$1.getXMLProperty$S.apply(this, [name]);
if (prop != null ) switch (prop.getPropertyType$()) {
case 0:
case 3:
try {
return Integer.parseInt$S(prop.getPropertyContent$().get$I(0));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
break;
case 6:
var control=prop.getPropertyContent$().get$I(0);
if (control.getObjectClass$() === Clazz.getClass($I$(8)) ) {
var combo=control.loadObject$O(null);
return combo.getSelectedIndex$();
}break;
}
return -2147483648;
});

Clazz.newMeth(C$, 'getString$S',  function (name) {
var prop=p$1.getXMLProperty$S.apply(this, [name]);
var type=(prop == null  ? -1 : prop.getPropertyType$());
if (type == 3) {
return $I$(9,"removeCDATA$S",[prop.getPropertyContent$().get$I(0)]);
}if (name.equals$O("basepath") && (this.getRootControl$() != null ) ) {
return this.getRootControl$().basepath;
}if (type == 6) {
var control=prop.getPropertyContent$().get$I(0);
if (control.getObjectClass$() === Clazz.getClass($I$(8)) ) {
var combo=control.loadObject$O(null);
return combo.toString();
}}return null;
});

Clazz.newMeth(C$, 'getObject$S',  function (name) {
var prop=p$1.getXMLProperty$S.apply(this, [name]);
if (prop == null ) return null;
var o=C$.getPropValue$org_opensourcephysics_controls_XMLProperty$O(prop, this.data);
return (this.data != null  && name.equals$O("framedata")  ? C$.getAdjustedFrameData$O$O(o, this.data) : o);
});

Clazz.newMeth(C$, 'getPropertyNames$',  function () {
{
return Clazz.new_($I$(2,1).c$$java_util_Collection,[this.propNames]);
}});

Clazz.newMeth(C$, 'getPropertyNamesRaw$',  function () {
return this.propNames;
});

Clazz.newMeth(C$, 'getPropertyType$S',  function (name) {
var prop=p$1.getXMLProperty$S.apply(this, [name]);
return (prop == null  ? -1 : prop.getPropertyType$());
});

Clazz.newMeth(C$, 'setPassword$S',  function (pass) {
this.password=pass;
if (this.getObjectClass$() !== Clazz.getClass($I$(10)) ) {
this.setValue$S$O("xml_password", pass);
}});

Clazz.newMeth(C$, 'getPassword$',  function () {
if (this.password == null ) {
this.password=this.getString$S("xml_password");
}return this.password;
});

Clazz.newMeth(C$, 'setDecryptPolicy$I',  function (policy) {
if (policy == 5) {
this.decryptPolicy=5;
} else if (policy == 3) {
this.decryptPolicy=3;
} else {
this.decryptPolicy=0;
}});

Clazz.newMeth(C$, 'readAsync$S$java_util_function_Function',  function (name, whenDone) {
{
var res=$I$(4).getResource$S(name);
if (res == null ) {
this.processReader$S$org_opensourcephysics_tools_Resource$java_io_BufferedReader$java_util_function_Function(name, null, null, whenDone);
} else if (res.getFile$() != null ) {
this.processReader$S$org_opensourcephysics_tools_Resource$java_io_BufferedReader$java_util_function_Function(name, res, res.openReader$(), whenDone);
} else {
$I$(4,"getURLContentsAsync$java_net_URL$java_util_function_Function",[res.getURL$(), ((P$.XMLControlElement$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "XMLControlElement$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$BA','apply$O'],  function (bytes) /*block*/{
if (bytes == null ) {
this.b$['org.opensourcephysics.controls.XMLControlElement'].processReader$S$org_opensourcephysics_tools_Resource$java_io_BufferedReader$java_util_function_Function.apply(this.b$['org.opensourcephysics.controls.XMLControlElement'], [this.$finals$.name, null, null, this.$finals$.whenDone]);
} else {
this.b$['org.opensourcephysics.controls.XMLControlElement'].processReader$S$org_opensourcephysics_tools_Resource$java_io_BufferedReader$java_util_function_Function.apply(this.b$['org.opensourcephysics.controls.XMLControlElement'], [this.$finals$.name, this.$finals$.res, $I$(4,"readerForStream$java_io_InputStream$S",[Clazz.new_($I$(11,1).c$$BA,[bytes]), null]), this.$finals$.whenDone]);
}return null;
});
})()
), Clazz.new_(P$.XMLControlElement$lambda1.$init$,[this, {name:name,res:res,whenDone:whenDone}]))]);
}}});

Clazz.newMeth(C$, 'processReader$S$org_opensourcephysics_tools_Resource$java_io_BufferedReader$java_util_function_Function',  function (name, res, $in, whenDone) {
if (res == null ) {
$I$(3).warning$S("Could not open " + name);
this.readFailed=true;
whenDone.apply$O(null);
return;
}this.read$java_io_Reader($in);
whenDone.apply$O(this.readFailed ? null : p$1.setPath$S$org_opensourcephysics_tools_Resource.apply(this, [name, res]));
});

Clazz.newMeth(C$, 'readData$S',  function (input) {
if (input.startsWith$S("<?xml")) {
this.readXML$S(input);
} else {
this.read$S(input);
}}, p$1);

Clazz.newMeth(C$, 'read$S',  function (fileName) {
{
var res=$I$(4).getResource$S(fileName);
if (res != null ) {
try {
var $in=res.openReader$();
if ($in != null ) {
this.read$java_io_Reader($in);
return p$1.setPath$S$org_opensourcephysics_tools_Resource.apply(this, [fileName, res]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}$I$(3).warning$S("Could not open " + fileName);
this.readFailed=true;
}return null;
});

Clazz.newMeth(C$, 'readXML$S',  function (xml) {
p$1.readXML$S$S.apply(this, [xml, null]);
});

Clazz.newMeth(C$, 'readXML$S$S',  function (xml, requiredType) {
if (p$1.readInput$java_io_BufferedReader$S.apply(this, [xml == null  ? null : Clazz.new_([Clazz.new_($I$(13,1).c$$S,[xml])],$I$(12,1).c$$java_io_Reader), requiredType])) {
this.canWrite=false;
}return !this.readFailed;
}, p$1);

Clazz.newMeth(C$, 'read$java_io_Reader',  function ($in) {
p$1.readInput$java_io_BufferedReader$S.apply(this, [$in == null  ? null : Clazz.instanceOf($in, "java.io.BufferedReader") ? $in : Clazz.new_($I$(12,1).c$$java_io_Reader,[$in]), null]);
try {
if (this.input != null ) this.input.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'readForClass$S$Class',  function (name, type) {
var res=$I$(4).getResource$S(name);
return (p$1.readInput$java_io_BufferedReader$S.apply(this, [res == null  ? null : Clazz.new_([res.openReader$()],$I$(12,1).c$$java_io_Reader), type.getName$()]) ? p$1.setPath$S$org_opensourcephysics_tools_Resource.apply(this, [name, res]) : null);
});

Clazz.newMeth(C$, 'readXMLForClass$S$Class',  function (xml, type) {
return p$1.readXML$S$S.apply(this, [xml, type.getName$()]);
});

Clazz.newMeth(C$, 'setPath$S$org_opensourcephysics_tools_Resource',  function (name, res) {
var path=$I$(9).getDirectoryPath$S(name);
if (path.length$() == 0) {
this.basepath=$I$(9,"getDirectoryPath$S",[res.getAbsolutePath$()]);
} else {
$I$(4).addSearchPath$S(path);
this.basepath=path;
}var file=res.getFile$();
this.canWrite=((file != null ) && file.canWrite$() );
return res.getAbsolutePath$();
}, p$1);

Clazz.newMeth(C$, 'failedToRead$',  function () {
return this.readFailed;
});

Clazz.newMeth(C$, 'write$S',  function (fileName) {
this.canWrite=true;
if (!$I$(14).isJS) {
var n=fileName.lastIndexOf$S("/");
if (n < 0) {
n=fileName.lastIndexOf$S("\\");
}if (n > 0) {
var dir=fileName.substring$I$I(0, n + 1);
var file=Clazz.new_($I$(15,1).c$$S,[dir]);
if (!file.exists$() && !file.mkdirs$() ) {
this.canWrite=false;
return null;
}}}try {
var file=Clazz.new_($I$(15,1).c$$S,[fileName]);
if (file.exists$() && !file.canWrite$() ) {
$I$(16,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(17).getString$S("Dialog.ReadOnly.Message") + ": " + file.getPath$() , $I$(17).getString$S("Dialog.ReadOnly.Title"), -1]);
this.canWrite=false;
return null;
}var stream=Clazz.new_($I$(18,1).c$$java_io_File,[file]);
var charset=$I$(19).forName$S(C$.encoding);
this.write$java_io_Writer(Clazz.new_($I$(20,1).c$$java_io_OutputStream$java_nio_charset_Charset,[stream, charset]));
if (file.exists$()) {
var path=$I$(9,"getDirectoryPath$S",[file.getCanonicalPath$()]);
$I$(4).addSearchPath$S(path);
}if (this.isValid$()) {
if (fileName.indexOf$S("/") != -1) {
fileName=fileName.substring$I$I(0, fileName.lastIndexOf$S("/") + 1) + this.getDoctype$();
} else if (fileName.indexOf$S("\\") != -1) {
fileName=fileName.substring$I$I(0, fileName.lastIndexOf$S("\\") + 1) + this.getDoctype$();
} else {
fileName=this.doctype;
}this.writeDocType$java_io_Writer(Clazz.new_($I$(21,1).c$$S,[fileName]));
}if ($I$(14).isJS || file.exists$() ) {
return $I$(9).getAbsolutePath$java_io_File(file);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
this.canWrite=false;
$I$(3,"warning$S",[ex.getMessage$()]);
} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$, 'write$java_io_Writer',  function (out) {
try {
this.output=Clazz.new_($I$(22,1).c$$java_io_Writer,[out]);
var xml=this.toXML$();
if (this.getPassword$() != null ) {
var cryptic=Clazz.new_($I$(10,1).c$$S,[xml]);
var control=Clazz.new_(C$.c$$O,[cryptic]);
xml=control.toXML$();
}this.output.write$S(xml);
this.output.flush$();
this.output.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(3,"info$S",[ex.getMessage$()]);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'writeDocType$java_io_Writer',  function (out) {
try {
this.output=Clazz.new_($I$(22,1).c$$java_io_Writer,[out]);
this.output.write$S($I$(9,"getDTD$S",[this.getDoctype$()]));
this.output.flush$();
this.output.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(3,"info$S",[ex.getMessage$()]);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'toXML$',  function () {
return this.toString();
});

Clazz.newMeth(C$, 'setValid$Z',  function (valid) {
this.valid=valid;
});

Clazz.newMeth(C$, 'isValid$',  function () {
return this.valid && ($I$(9,"getDTD$S",[this.getDoctype$()]) != null ) ;
});

Clazz.newMeth(C$, 'setVersion$S',  function (vers) {
this.version=vers;
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return this.version;
});

Clazz.newMeth(C$, 'setDoctype$S',  function (name) {
if ($I$(9).getDTD$S(name) != null ) {
}});

Clazz.newMeth(C$, 'getDoctype$',  function () {
return this.doctype;
});

Clazz.newMeth(C$, 'setObjectClass$Class',  function (type) {
if (this.object != null  && !type.isInstance$O(this.object) ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[this.object + " " + $I$(17).getString$S("XMLControlElement.Exception.NotInstanceOf") + " " + type ]);
}this.theClass=type;
this.className=type.getName$();
});

Clazz.newMeth(C$, 'getObjectClass$',  function () {
if (this.className == null  || (this.theClass != null  && this.theClass.getName$().equals$O(this.className) ) ) {
return this.theClass;
}this.theClass=null;
try {
return this.theClass=Clazz.forName(this.className);
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
try {
var loader=$I$(9).getClassLoader$();
return (loader == null  ? null : (this.theClass=loader.loadClass$S(this.className)));
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
} else {
throw e;
}
}
return this.theClass;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getObjectClassName$',  function () {
return this.className;
});

Clazz.newMeth(C$, 'saveObject$O',  function (obj) {
if (obj == null ) {
obj=this.object;
}var type=this.getObjectClass$();
if ((type == null ) || type.equals$O(Clazz.getClass(java.lang.Object)) ) {
if (obj == null ) {
return;
}type=obj.getClass$();
}if (type.isInstance$O(obj)) {
this.object=obj;
this.className=obj.getClass$().getName$();
this.clearValues$();
var loader=$I$(9).getLoader$Class(type);
loader.saveObject$org_opensourcephysics_controls_XMLControl$O(this, obj);
}});

Clazz.newMeth(C$, 'loadObject$O',  function (obj) {
return this.loadObject$O$Z$Z(obj, false, false);
});

Clazz.newMeth(C$, 'loadObject$O$O',  function (obj, data) {
this.data=data;
return this.loadObject$O$Z$Z(obj, false, false);
});

Clazz.newMeth(C$, 'loadObject$O$Z',  function (obj, autoImport) {
return this.loadObject$O$Z$Z(obj, autoImport, false);
});

Clazz.newMeth(C$, 'loadObject$O$Z$Z',  function (obj, autoImport, importAll) {
var myType=this.getObjectClass$();
var oclass=(obj == null  ? null : obj.getClass$());
if (myType == null ) {
if (oclass == null ) {
return null;
}if (!autoImport) {
var result=$I$(16,"showConfirmDialog$java_awt_Component$O$S$I$I",[null, $I$(17).getString$S("XMLControlElement.Dialog.UnknownClass.Message") + " \"" + this.className + "\"" + $I$(9).NEW_LINE + $I$(17).getString$S("XMLControlElement.Dialog.MismatchedClass.Query") + " \"" + obj.getClass$().getName$() + "\"" , $I$(17).getString$S("XMLControlElement.Dialog.MismatchedClass.Title"), 0, 3]);
if (result != 0) {
return obj;
}}if (!p$1.importInto$O$Z.apply(this, [obj, importAll])) {
return obj;
}myType=oclass;
} else if (obj == null ) {
oclass=myType;
}var needLoader=(this.object == null  || myType !== oclass   || this.loader == null  );
var loader=null;
try {
loader=(needLoader ? $I$(9).getLoader$Class(myType) : this.loader);
if (myType === oclass  || oclass != null  && loader.getClass$() === $I$(9).getLoader$Class(oclass).getClass$()   ) {
autoImport=true;
importAll=true;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (obj != null  && myType !== oclass   && !myType.isInstance$O(obj) ) {
if (!autoImport) {
var result=$I$(16,"showConfirmDialog$java_awt_Component$O$S$I$I",[null, $I$(17).getString$S("XMLControlElement.Dialog.MismatchedClass.Message") + " \"" + myType.getName$() + "\"" + $I$(9).NEW_LINE + $I$(17).getString$S("XMLControlElement.Dialog.MismatchedClass.Query") + " \"" + obj.getClass$().getName$() + "\"" , $I$(17).getString$S("XMLControlElement.Dialog.MismatchedClass.Title"), 0, 2]);
if (result != 0) {
return obj;
}}if (!p$1.importInto$O$Z.apply(this, [obj, importAll])) {
return obj;
}loader=$I$(9,"getLoader$Class",[myType=oclass]);
}if (obj == null ) {
obj=(this.object == null  ? loader.createObject$org_opensourcephysics_controls_XMLControl(this) : this.object);
if (obj == null  || !myType.isInstance$O(obj) ) {
return obj;
}}obj=loader.loadObject$org_opensourcephysics_controls_XMLControl$O(this, obj);
if (this.isFinalizable || Clazz.instanceOf(loader, "org.opensourcephysics.media.core.VideoIO.FinalizableLoader") ) {
this.isFinalizable=true;
if (!(loader).isFinalized$()) {
this.loader=loader;
this.object=obj;
}}return obj;
});

Clazz.newMeth(C$, 'clearValues$',  function () {
this.props.clear$();
this.propNames.clear$();
if (this.propMap != null ) this.propMap.clear$();
if (this.childMap != null ) {
this.childMap.clear$();
this.childControls=null;
}});

Clazz.newMeth(C$, 'println$S',  function (s) {
System.out.println$S(s);
});

Clazz.newMeth(C$, 'println$',  function () {
System.out.println$();
});

Clazz.newMeth(C$, 'print$S',  function (s) {
System.out.print$S(s);
});

Clazz.newMeth(C$, 'clearMessages$',  function () {
System.out.println$S("XMLControlElment.clearMessages");
});

Clazz.newMeth(C$, 'calculationDone$S',  function (s) {
});

Clazz.newMeth(C$, 'getPropertyName$',  function () {
var parent=this.getParentProperty$();
if (this.className == null ) {
if (parent == null ) {
return "null";
}return parent.getPropertyName$();
} else if (p$1.isArrayOrCollectionItem.apply(this, [])) {
if (this.name == null ) {
var myName=this.getString$S("name");
if (myName != null  && !"".equals$O(myName) ) {
this.name=this.className.substring$I(this.className.lastIndexOf$S(".") + 1);
this.name+=" \"" + myName + "\"" ;
} else {
var root=this;
while (root.getParentProperty$() != null ){
root=root.getParentProperty$();
}
if (Clazz.instanceOf(root, "org.opensourcephysics.controls.XMLControlElement")) {
var rootControl=root;
this.name=this.className.substring$I(this.className.lastIndexOf$S(".") + 1);
this.name=rootControl.addNumbering$S(this.name);
}}}return "" + this.name;
} else if (parent != null ) {
return parent.getPropertyName$();
} else {
return this.className.substring$I(this.className.lastIndexOf$S(".") + 1);
}});

Clazz.newMeth(C$, 'getPropertyClass$',  function () {
return this.getObjectClass$();
});

Clazz.newMeth(C$, 'getLevel$',  function () {
return this.level;
});

Clazz.newMeth(C$, 'getPropertyContent$',  function () {
return Clazz.new_($I$(2,1).c$$java_util_Collection,[this.props]);
});

Clazz.newMeth(C$, 'getPropsRaw$',  function () {
return this.props;
});

Clazz.newMeth(C$, 'getChildControl$S',  function (name) {
return p$1.getChildMap.apply(this, []).get$O(name);
});

Clazz.newMeth(C$, 'getChildControls$',  function () {
if (this.childControls == null ) {
var list=Clazz.new_($I$(2,1));
var it=this.props.iterator$();
while (it.hasNext$()){
var prop=it.next$();
if (prop.getPropertyType$() == 6) {
list.add$O(prop.getPropertyContent$().get$I(0));
}}
this.childControls=list.toArray$OA(Clazz.array($I$(23), [list.size$()]));
}return this.childControls;
});

Clazz.newMeth(C$, 'getRootControl$',  function () {
if (this.parent == null ) {
return this;
}var prop=this.parent;
while (prop.getParentProperty$() != null ){
prop=prop.getParentProperty$();
}
if (Clazz.instanceOf(prop, "org.opensourcephysics.controls.XMLControlElement")) {
return prop;
}return null;
});

Clazz.newMeth(C$, 'addNumbering$S',  function (name) {
var count=this.counts.get$O(name);
if (count == null ) {
count=Integer.valueOf$I(0);
}count=Integer.valueOf$I(count.intValue$() + 1);
this.counts.put$O$O(name, count);
return name + " " + count.toString() ;
});

Clazz.newMeth(C$, 'toString',  function () {
var xml=Clazz.new_($I$(24,1).c$$S,[""]);
if (this.getLevel$() == 0) {
xml.append$S("<?xml version=\"1.0\" encoding=\"" + C$.encoding + "\"?>" );
if (this.isValid$()) {
xml.append$S($I$(9).NEW_LINE + "<!DOCTYPE object SYSTEM \"" + this.doctype + "\">" );
}}xml.append$S($I$(9).NEW_LINE + C$.indent$I(this.getLevel$()) + "<object class=\"" + this.className + "\"" );
if ((this.version != null ) && (this.getLevel$() == 0) ) {
xml.append$S(" version=\"" + this.version + "\"" );
}if (this.props.isEmpty$()) {
xml.append$S("/>");
} else {
xml.append$S(">");
var it=this.props.iterator$();
while (it.hasNext$()){
xml.append$S(it.next$().toString());
}
xml.append$S($I$(9).NEW_LINE + C$.indent$I(this.getLevel$()) + "</object>" );
}return xml.toString();
});

Clazz.newMeth(C$, 'getObjects$Class',  function (type) {
return this.getObjects$Class$Z(type, false);
});

Clazz.newMeth(C$, 'getObjects$Class$Z',  function (type, useChooser) {
var props;
if (useChooser) {

alert("XMLControlElement.getObjects with chooser called -- not configured to be asynchronous");
var name=type.getName$();
name=name.substring$I(name.lastIndexOf$S(".") + 1);
var chooser=Clazz.new_([$I$(17).getString$S("XMLControlElement.Chooser.SelectObjectsOfClass.Title"), $I$(17).getString$S("XMLControlElement.Chooser.SelectObjectsOfClass.Label") + " " + name , null],$I$(25,1).c$$S$S$java_awt_Component);
props=chooser.choose$org_opensourcephysics_controls_XMLControl$Class(this, type);
} else {
var tree=Clazz.new_($I$(26,1).c$$org_opensourcephysics_controls_XMLControl,[this]);
tree.setHighlightedClass$Class(type);
tree.selectHighlightedProperties$();
props=tree.getSelectedProperties$();
}var objects=Clazz.new_($I$(2,1));
var it=props.iterator$();
while (it.hasNext$()){
var prop=it.next$();
objects.add$O(type.cast$O(prop.loadObject$O(null)));
}
return objects;
});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_(C$.c$$org_opensourcephysics_controls_XMLControl,[this]);
});

Clazz.newMeth(C$, 'isArrayOrCollectionItem',  function () {
var parent=this.getParentProperty$();
if (parent != null ) {
parent=parent.getParentProperty$();
return ((parent != null ) && ("arraycollection".indexOf$I(parent.getPropertyType$()) >= 0) );
}return false;
}, p$1);

Clazz.newMeth(C$, 'importInto$O$Z',  function (obj, importAll) {
var control=Clazz.new_(C$.c$$O,[obj]);
var list=control.getPropertyNames$();
list.retainAll$java_util_Collection(this.getPropertyNamesRaw$());
var names=Clazz.new_($I$(2,1));
var values=Clazz.new_($I$(2,1));
for (var it=this.props.iterator$(); it.hasNext$(); ) {
var prop=it.next$();
var propName=prop.getPropertyName$();
if (!list.contains$O(propName)) {
continue;
}names.add$O(propName);
if (prop.getPropertyType$() == 6) {
values.add$O(prop.getPropertyClass$().getSimpleName$());
} else {
values.add$O(prop.getPropertyContent$().get$I(0));
}}
if (names.isEmpty$() || importAll ) {
return p$1.processImport$org_opensourcephysics_controls_XMLControl$java_util_Collection.apply(this, [control, names]);
}var isOK=Clazz.array(Boolean.TYPE, [1]);
var chooser=Clazz.new_([$I$(17).getString$S("XMLControlElement.Chooser.ImportObjects.Title"), $I$(17).getString$S("XMLControlElement.Chooser.ImportObjects.Label"), ((P$.XMLControlElement$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "XMLControlElement$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 1001) {
p$1.processImport$org_opensourcephysics_controls_XMLControl$java_util_Collection.apply(this.b$['org.opensourcephysics.controls.XMLControlElement'], [this.$finals$.control, this.$finals$.names]);
this.$finals$.isOK[0]=true;
}});
})()
), Clazz.new_(P$.XMLControlElement$1.$init$,[this, {isOK:isOK,names:names,control:control}]))],$I$(27,1).c$$S$S$java_awt_event_ActionListener);
chooser.choose$java_util_Collection$java_util_Collection$java_util_Collection$java_util_Collection$ZA$ZA(names, names, values, null, null, null);
return isOK[0];
}, p$1);

Clazz.newMeth(C$, 'processImport$org_opensourcephysics_controls_XMLControl$java_util_Collection',  function (control, names) {
var it=this.props.iterator$();
while (it.hasNext$()){
var name=it.next$().getPropertyName$();
if (!names.contains$O(name)) {
it.remove$();
this.propNames.remove$O(name);
p$1.getPropMap.apply(this, []).remove$O(name);
}}
var it2=control.getPropertyNamesRaw$().iterator$();
while (it2.hasNext$()){
var name=it2.next$();
if (names.contains$O(name)) {
continue;
}switch (control.getPropertyType$S(name)) {
case 0:
this.setValue$S$I(name, control.getInt$S(name));
break;
case 1:
this.setValue$S$D(name, control.getDouble$S(name));
break;
case 2:
this.setValue$S$Z(name, control.getBoolean$S(name));
break;
case 3:
this.setValue$S$O(name, control.getString$S(name));
break;
default:
this.setValue$S$O(name, control.getObject$S(name));
break;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'setXMLProperty$S$I$O$Z',  function (name, type, value, writeNullFinalArrayElement) {
var prop=Clazz.new_($I$(5,1).c$$org_opensourcephysics_controls_XMLProperty$S$I$O$Z,[this, name, type, value, writeNullFinalArrayElement]);
if (this.propNames.contains$O(name)) {
var it=this.props.iterator$();
for (var i=0; it.hasNext$(); i++) {
var p=it.next$();
if (p.getPropertyName$().equals$O(name)) {
it.remove$();
p$1.setProperty$S$org_opensourcephysics_controls_XMLProperty$I.apply(this, [name, prop, i]);
return;
}}
} else {
this.propNames.add$O(name);
}p$1.setProperty$S$org_opensourcephysics_controls_XMLProperty$I.apply(this, [name, prop, -1]);
}, p$1);

Clazz.newMeth(C$, 'setProperty$S$org_opensourcephysics_controls_XMLProperty$I',  function (name, prop, i) {
if (i < 0) this.props.add$O(prop);
 else this.props.add$I$O(i, prop);
p$1.getPropMap.apply(this, []).put$O$O(name, prop);
if (prop.getPropertyType$() == 6) {
p$1.getChildMap.apply(this, []).put$O$O(name, (prop.getPropertyContent$().get$I(0)));
this.childControls=null;
}}, p$1);

Clazz.newMeth(C$, 'getPropMap',  function () {
if (this.propMap == null ) {
this.propMap=Clazz.new_($I$(1,1));
}return this.propMap;
}, p$1);

Clazz.newMeth(C$, 'getXMLProperty$S',  function (name) {
return (name == null  ? null : p$1.getPropMap.apply(this, []).get$O(name));
}, p$1);

Clazz.newMeth(C$, 'readInput$java_io_BufferedReader$S',  function ($in, className) {
if ($in == null ) {
this.readFailed=true;
return false;
}this.input=$in;
this.readFailed=false;
try {
var openingTag=this.input.readLine$();
var count=0;
while (openingTag != null  && openingTag.indexOf$S("<object class=") < 0 ){
++count;
if (count > 9) {
this.readFailed=true;
return false;
}openingTag=this.input.readLine$();
}
if (openingTag != null ) {
this.version=$I$(9).getAttr$S$S$S(openingTag, "version", this.version);
p$1.readObject$org_opensourcephysics_controls_XMLControlElement$S$S.apply(this, [this, openingTag, className]);
} else {
this.readFailed=true;
return false;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.readFailed=true;
$I$(3,"warning$S",["Failed to read xml: " + ex.getMessage$()]);
return false;
} else {
throw ex;
}
}
if (Clazz.getClass($I$(10)).equals$O(this.getObjectClass$())) {
var cryptic=this.loadObject$O(null);
var xml=cryptic.decrypt$();
var test=Clazz.new_(C$.c$$S,[xml]);
if (test.failedToRead$()) {
return false;
}var pass=this.password;
this.password=test.getString$S("xml_password");
switch (this.decryptPolicy) {
case 5:
return false;
case 3:
if ((this.password != null ) && !this.password.equals$O("") && !this.password.equals$O(pass)  ) {
if (!$I$(28).verify$S$S(this.password, null)) {
this.readFailed=true;
return false;
}}}
this.clearValues$();
this.object=null;
className=Clazz.getClass(java.lang.Object).getName$();
this.theClass=null;
return p$1.readXML$S$S.apply(this, [xml, null]);
}return !this.readFailed;
}, p$1);

Clazz.newMeth(C$, 'readObject$org_opensourcephysics_controls_XMLControlElement$S$S',  function (control, xml, requiredType) {
control.clearValues$();
var className=C$.getClassName$S(xml);
if (requiredType != null  && !className.equals$O(requiredType) ) {
this.readFailed=true;
return null;
}control.className=className;
if (xml.indexOf$S("/>") != -1) {
this.input.readLine$();
return control;
}var prop=control;
xml=this.input.readLine$();
while (xml != null ){
if (xml.indexOf$S("</object>") >= 0) {
this.input.readLine$();
return control;
} else if (xml.indexOf$S("<property") >= 0) {
p$1.addProperty$org_opensourcephysics_controls_XMLProperty.apply(control, [p$1.readProperty$org_opensourcephysics_controls_XMLPropertyElement$S.apply(this, [Clazz.new_($I$(5,1).c$$org_opensourcephysics_controls_XMLProperty,[prop]), xml])]);
}xml=this.input.readLine$();
}
return control;
}, p$1);

Clazz.newMeth(C$, 'addProperty$org_opensourcephysics_controls_XMLProperty',  function (child) {
var name=child.getPropertyName$();
this.propNames.add$O(name);
p$1.setProperty$S$org_opensourcephysics_controls_XMLProperty$I.apply(this, [name, child, -1]);
}, p$1);

Clazz.newMeth(C$, 'getChildMap',  function () {
if (this.childMap == null ) {
this.childMap=Clazz.new_($I$(1,1));
}return this.childMap;
}, p$1);

Clazz.newMeth(C$, 'readProperty$org_opensourcephysics_controls_XMLPropertyElement$S',  function (prop, xml) {
prop.name=$I$(9).getAttr$S$S$S(xml, "name", null);
prop.type=$I$(7,"getTypeCode$S",[$I$(9).getAttr$S$S$S(xml, "type", null)]);
switch (prop.type) {
case 4:
case 5:
prop.className=C$.getClassName$S(xml);
if (xml.indexOf$S("/>") >= 0) {
return prop;
}xml=this.input.readLine$();
while (xml.indexOf$S("<property") >= 0){
prop.content.add$O(p$1.readProperty$org_opensourcephysics_controls_XMLPropertyElement$S.apply(this, [Clazz.new_($I$(5,1).c$$org_opensourcephysics_controls_XMLProperty,[prop]), xml]));
xml=this.input.readLine$();
}
break;
case 6:
if (xml.indexOf$S(">null</property") < 0) {
var control=p$1.readObject$org_opensourcephysics_controls_XMLControlElement$S$S.apply(this, [Clazz.new_(C$.c$$org_opensourcephysics_controls_XMLProperty,[prop]), this.input.readLine$(), null]);
prop.content.add$O(control);
prop.className=control.className;
}break;
case 3:
var pt=xml.indexOf$S("<![CDATA[");
if (pt >= 0) {
var s=xml.substring$I(pt + 9);
while ((pt=s.indexOf$S("]]></property>")) < 0){
s+=$I$(9).NEW_LINE + this.input.readLine$();
}
prop.content.add$O(s.substring$I$I(0, pt));
break;
}default:
var s=xml.substring$I(xml.indexOf$S(">") + 1);
while ((pt=s.indexOf$S("</property>")) < 0){
s+=$I$(9).NEW_LINE + this.input.readLine$();
}
prop.content.add$O(s.substring$I$I(0, pt));
break;
}
return prop;
}, p$1);

Clazz.newMeth(C$, 'indent$I',  function (level) {
var space="";
for (var i=0; i < 4 * level; i++) {
space+=" ";
}
return space;
}, 1);

Clazz.newMeth(C$, 'getAdjustedFrameData$O$O',  function (o, data) {
if (!(Clazz.instanceOf(o, Clazz.array(java.lang.Object, -1)))) return o;
var a=o;
return (a.length <= 1 || !(Clazz.instanceOf(data, "org.opensourcephysics.controls.XMLControlElement.FrameDataAdjusterI"))  ? a : (data).adjustFrameData$OA(a));
}, 1);

Clazz.newMeth(C$, 'getPropValue$org_opensourcephysics_controls_XMLProperty$O',  function (prop, data) {
switch (prop.getPropertyType$()) {
case 6:
return C$.objectValue$org_opensourcephysics_controls_XMLProperty$O(prop, data);
case 4:
return C$.arrayValue$org_opensourcephysics_controls_XMLProperty$O(prop, data);
case 5:
return C$.collectionValue$org_opensourcephysics_controls_XMLProperty$O(prop, data);
case 0:
return Integer.valueOf$I(C$.intValue$org_opensourcephysics_controls_XMLProperty(prop));
case 1:
return Double.valueOf$D(C$.doubleValue$org_opensourcephysics_controls_XMLProperty(prop));
case 2:
return Boolean.valueOf$Z(C$.booleanValue$org_opensourcephysics_controls_XMLProperty(prop));
case 3:
return C$.stringValue$org_opensourcephysics_controls_XMLProperty(prop);
}
return null;
}, 1);

Clazz.newMeth(C$, 'objectValue$org_opensourcephysics_controls_XMLProperty$O',  function (prop, data) {
if (prop.getPropertyType$() != 6) {
return null;
}if (prop.getPropertyContent$().isEmpty$()) return null;
var content=prop.getPropertyContent$().get$I(0);
if (!(Clazz.instanceOf(content, "org.opensourcephysics.controls.XMLControl"))) return null;
var control=content;
return control.loadObject$O$O(null, data);
}, 1);

Clazz.newMeth(C$, 'doubleValue$org_opensourcephysics_controls_XMLProperty',  function (prop) {
if (prop.getPropertyType$() != 1) {
return NaN;
}return Double.parseDouble$S(prop.getPropertyContent$().get$I(0));
}, 1);

Clazz.newMeth(C$, 'intValue$org_opensourcephysics_controls_XMLProperty',  function (prop) {
if (prop.getPropertyType$() != 0) {
return -2147483648;
}return Integer.parseInt$S(prop.getPropertyContent$().get$I(0));
}, 1);

Clazz.newMeth(C$, 'booleanValue$org_opensourcephysics_controls_XMLProperty',  function (prop) {
return prop.getPropertyContent$().get$I(0).equals$O("true");
}, 1);

Clazz.newMeth(C$, 'stringValue$org_opensourcephysics_controls_XMLProperty',  function (prop) {
return (prop.getPropertyType$() == 3 ? $I$(9,"removeCDATA$S",[prop.getPropertyContent$().get$I(0)]) : null);
}, 1);

Clazz.newMeth(C$, 'arrayValue$org_opensourcephysics_controls_XMLProperty$O',  function (prop, data) {
if (prop.getPropertyType$() != 4) {
return null;
}var componentType=prop.getPropertyClass$().getComponentType$();
var content=prop.getPropertyContent$();
if (content.isEmpty$()) {
return Clazz.array(componentType, 0);
}var first=content.get$I(0);
if (first.getPropertyName$().equals$O("array")) {
var obj=first.getPropertyContent$().get$I(0);
if (Clazz.instanceOf(obj, "java.lang.String")) {
return C$.arrayValue$S$Class(obj, componentType);
}return null;
}var last=content.get$I(content.size$() - 1);
var index=last.getPropertyName$();
var n=Integer.parseInt$S(index.substring$I$I(1, index.indexOf$S("]")));
var array=Clazz.array(componentType, n + 1);
var it=content.iterator$();
while (it.hasNext$()){
var next=it.next$();
index=next.getPropertyName$();
n=Integer.parseInt$S(index.substring$I$I(1, index.indexOf$S("]")));
switch (next.getPropertyType$()) {
case 6:
$I$(29,"set$O$I$O",[array, n, C$.objectValue$org_opensourcephysics_controls_XMLProperty$O(next, data)]);
break;
case 0:
var val=C$.intValue$org_opensourcephysics_controls_XMLProperty(next);
if (Clazz.getClass(java.lang.Object).isAssignableFrom$Class(componentType)) {
$I$(29,"set$O$I$O",[array, n, Integer.valueOf$I(val)]);
} else {
$I$(29).setInt$O$I$I(array, n, val);
}break;
case 1:
var d=C$.doubleValue$org_opensourcephysics_controls_XMLProperty(next);
if (Clazz.getClass(java.lang.Object).isAssignableFrom$Class(componentType)) {
$I$(29,"set$O$I$O",[array, n, Double.valueOf$D(d)]);
} else {
$I$(29).setDouble$O$I$D(array, n, d);
}break;
case 2:
var b=C$.booleanValue$org_opensourcephysics_controls_XMLProperty(next);
if (Clazz.getClass(java.lang.Object).isAssignableFrom$Class(componentType)) {
$I$(29,"set$O$I$O",[array, n, Boolean.valueOf$Z(b)]);
} else {
$I$(29).setBoolean$O$I$Z(array, n, b);
}break;
case 3:
$I$(29,"set$O$I$O",[array, n, C$.stringValue$org_opensourcephysics_controls_XMLProperty(next)]);
break;
case 4:
$I$(29,"set$O$I$O",[array, n, C$.arrayValue$org_opensourcephysics_controls_XMLProperty$O(next, data)]);
break;
case 5:
$I$(29,"set$O$I$O",[array, n, C$.collectionValue$org_opensourcephysics_controls_XMLProperty$O(next, data)]);
break;
}
}
return array;
}, 1);

Clazz.newMeth(C$, 'arrayValue$S$Class',  function (s, componentType) {
System.out.println$S(s);
if (!(s.startsWith$S("{") && s.endsWith$S("}") )) {
return null;
}if (componentType.isArray$()) {
var list=Clazz.new_($I$(2,1));
var arrayType=componentType.getComponentType$();
var allowTrailingNull=false;
var n=s.length$() - (allowTrailingNull ? 0 : 1);
var wasArray=false;
for (var pt=1; pt < n; pt++) {
switch ((s.charCodeAt$I(pt))) {
case 44:
case 125:
if (wasArray) {
wasArray=false;
} else {
list.add$O(null);
}break;
case 123:
var pt1=C$.indexOfClosingBrace$S$I$I(s, pt, n);
list.add$O(C$.arrayValue$S$Class(s.substring$I$I(pt, pt1 + 1), arrayType));
pt=pt1;
wasArray=true;
break;
}
}
n=list.size$();
var array=Clazz.array(componentType, n);
for (var p=0; p < n; p++) {
var v=list.get$I(p);
if (v != null ) $I$(29).set$O$I$O(array, p, v);
}
return array;
}var list=(s.length$() == 0 ? Clazz.array(String, [0]) : s.substring$I$I(1, s.length$() - 1).split$S(","));
var array=Clazz.array(componentType, list.length);
if (componentType === Integer.TYPE ) {
for (var pt=list.length; --pt >= 0; ) (array)[pt]=Integer.parseInt$S(list[pt]);

System.out.println$S($I$(30).toString$IA(array));
} else if (componentType === Double.TYPE ) {
for (var pt=list.length; --pt >= 0; ) (array)[pt]=Double.parseDouble$S(list[pt]);

} else if (componentType === Boolean.TYPE ) {
for (var pt=list.length; --pt >= 0; ) (array)[pt]=Boolean.parseBoolean$S(list[pt]);

}return array;
}, 1);

Clazz.newMeth(C$, 'indexOfClosingBrace$S$I$I',  function (s, pt, n) {
for (var c=0, i=pt; i < n; i++) {
switch ((s.charCodeAt$I(i))) {
case 123:
++c;
break;
case 125:
--c;
if (c == 0) return i;
}
}
return -1;
}, 1);

Clazz.newMeth(C$, 'collectionValue$org_opensourcephysics_controls_XMLProperty$O',  function (prop, data) {
if (prop.getPropertyType$() != 5) {
return null;
}var classType=prop.getPropertyClass$();
try {
var c=classType.newInstance$();
var content=prop.getPropertyContent$();
var it=content.iterator$();
while (it.hasNext$()){
var next=it.next$();
switch (next.getPropertyType$()) {
case 6:
c.add$O(C$.objectValue$org_opensourcephysics_controls_XMLProperty$O(next, data));
break;
case 3:
c.add$O(C$.stringValue$org_opensourcephysics_controls_XMLProperty(next));
break;
case 4:
c.add$O(C$.arrayValue$org_opensourcephysics_controls_XMLProperty$O(next, data));
break;
case 5:
c.add$O(C$.collectionValue$org_opensourcephysics_controls_XMLProperty$O(next, data));
break;
}
}
return c;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getClassName$S',  function (xml) {
try {
var className=$I$(9).getAttr$S$S$S(xml, "class", "");
var i=className.lastIndexOf$S(".");
if (i >= 0) {
var packageName=className.substring$I$I(0, i);
if (packageName.endsWith$S("org.opensourcephysics.media")) {
className=packageName + ".core" + className.substring$I(i) ;
}}return className;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return "";
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'finalize$',  function () {
if (this.isFinalizable) $I$(3).finalized$O("XMLControlElement finalized " + this.className);
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.object=null;
this.loader=null;
this.data=null;
});

C$.$static$=function(){C$.$static$=0;
C$.compactArraySize=0;
C$.encoding="UTF-8";
C$.sync= Clazz.new_();
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.XMLControlElement, "FrameDataAdjusterI", function(){
});
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
