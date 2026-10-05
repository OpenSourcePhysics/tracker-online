(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'java.util.HashMap','java.awt.Color','java.awt.Dimension','java.awt.Point','java.lang.reflect.Modifier','org.opensourcephysics.controls.XMLLoader','java.io.BufferedReader','java.io.InputStreamReader','StringBuffer','java.io.File','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XML", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['NonStaticLoader',9],['ObjectLoader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['NEW_LINE','dtdName','dtd','defaultName'],'O',['loaders','java.util.Map','defaultLoader','org.opensourcephysics.controls.XML.ObjectLoader','classLoader','ClassLoader']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader',  function (classtype, loader) {
if (!(Clazz.instanceOf(loader, "org.opensourcephysics.controls.XML.NonStaticLoader"))) C$.loaders.put$O$O(classtype, loader);
}, 1);

Clazz.newMeth(C$, 'getLoader$Class',  function (classtype) {
var loader=C$.loaders.get$O(classtype);
if (loader == null ) {
try {
var method=classtype.getMethod$S$ClassA("getLoader", null);
if ((method != null ) && $I$(5,"isStatic$I",[method.getModifiers$()]) ) {
loader=method.invoke$O$OA(null, null);
if (loader != null ) {
C$.setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader(classtype, loader);
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}if (loader == null ) {
if (C$.defaultLoader == null ) {
C$.defaultLoader=Clazz.new_($I$(6,1));
}loader=C$.defaultLoader;
}return loader;
}, 1);

Clazz.newMeth(C$, 'setDefaultLoader$org_opensourcephysics_controls_XML_ObjectLoader',  function (loader) {
C$.defaultLoader=loader;
}, 1);

Clazz.newMeth(C$, 'getAttr$S$S$S',  function (xml, attr, def) {
var i=xml.indexOf$S(attr + "=\"");
return (i < 0 ? def : xml.substring$I$I(i=i + attr.length$() + 2 , xml.indexOf$I$I("\"", i)));
}, 1);

Clazz.newMeth(C$, 'requiresCDATA$S',  function (text) {
if (text.indexOf$S("\"") != -1 || text.indexOf$S("<") != -1  || text.indexOf$S(">") != -1  || text.indexOf$S("&") != -1  || text.indexOf$S("\'") != -1 ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'getDTD$S',  function (doctype) {
if (C$.dtdName != doctype) {
C$.dtdName=C$.defaultName;
try {
var dtdPath="/org/opensourcephysics/resources/controls/doctypes/";
var url=Clazz.getClass(C$).getResource$S(dtdPath + doctype);
if (url == null ) {
return C$.dtd;
}var content=url.getContent$();
if (Clazz.instanceOf(content, "java.io.InputStream")) {
var reader=Clazz.new_([Clazz.new_($I$(8,1).c$$java_io_InputStream,[content])],$I$(7,1).c$$java_io_Reader);
var buffer=Clazz.new_($I$(9,1).c$$I,[0]);
var line;
while ((line=reader.readLine$()) != null ){
buffer.append$S(line + C$.NEW_LINE);
}
C$.dtd=buffer.toString();
C$.dtdName=doctype;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}return C$.dtd;
}, 1);

Clazz.newMeth(C$, 'setClassLoader$ClassLoader',  function (loader) {
C$.classLoader=loader;
}, 1);

Clazz.newMeth(C$, 'getClassLoader$',  function () {
return C$.classLoader;
}, 1);

Clazz.newMeth(C$, 'forwardSlash$S',  function (path) {
if (path == null ) {
return "";
}var i=path.indexOf$S("\\");
while (i != -1){
path=path.substring$I$I(0, i) + "/" + path.substring$I(i + 1) ;
i=path.indexOf$S("\\");
}
return path;
}, 1);

Clazz.newMeth(C$, 'getName$S',  function (path) {
if (path == null ) {
return "";
}var i=path.lastIndexOf$S("/");
if (i == -1) {
i=path.lastIndexOf$S("\\");
}if (i != -1) {
return path.substring$I(i + 1);
}return path;
}, 1);

Clazz.newMeth(C$, 'getExtension$S',  function (fileName) {
if (fileName == null ) {
return null;
}var i=fileName.lastIndexOf$I(".");
var j=C$.forwardSlash$S(fileName).lastIndexOf$I("/");
if (i > 0 && i < fileName.length$() - 1  && i > j ) {
return fileName.substring$I(i + 1);
}return null;
}, 1);

Clazz.newMeth(C$, 'getSimpleClassName$Class',  function (type) {
var name=type.getName$();
var i=name.indexOf$S(";");
if (i > -1) {
name=name.substring$I$I(0, i);
}while (name.startsWith$S("[")){
name=name.substring$I(1);
name=name + "[]";
}
var ext=C$.getExtension$S(name);
if (ext != null ) {
name=ext;
}i=name.indexOf$S("[");
if (i > -1) {
var s=name.substring$I$I(0, i);
if (s.equals$O("I")) {
s="int";
} else if (s.equals$O("D")) {
s="double";
} else if (s.equals$O("Z")) {
s="boolean";
}name=s + name.substring$I(i);
}return name;
}, 1);

Clazz.newMeth(C$, 'stripExtension$S',  function (fileName) {
if (fileName == null ) {
return null;
}fileName=C$.forwardSlash$S(fileName);
var n=C$.forwardSlash$S(fileName).lastIndexOf$S("/");
var name=C$.getName$S(fileName);
var i=name.lastIndexOf$I(".");
if ((i > 0) && (i < name.length$() - 1) ) {
name=name.substring$I$I(0, i);
}fileName=fileName.substring$I$I(0, n + 1) + name;
while (fileName.lastIndexOf$I(".") == fileName.length$() - 1 && fileName.length$() > 0 )fileName=fileName.substring$I$I(0, fileName.length$() - 1);

return fileName;
}, 1);

Clazz.newMeth(C$, 'getPathRelativeTo$S$S',  function (absolutePath, base) {
if ((base == null ) || base.equals$O("") ) {
base=C$.getUserDirectory$();
}absolutePath=C$.forwardSlash$S(absolutePath);
base=C$.forwardSlash$S(base);
if (!absolutePath.startsWith$S("/") && (absolutePath.indexOf$S(":") == -1) ) {
return absolutePath;
}if (!base.startsWith$S("/") && (base.indexOf$S(":") == -1) ) {
return absolutePath;
}var jar=absolutePath.indexOf$S("jar!");
if (jar > -1) {
absolutePath=absolutePath.substring$I(jar + 5);
return absolutePath;
}var relativePath="";
if (base.endsWith$S("/")) {
base=base.substring$I$I(0, base.length$() - 1);
}for (var j=0; j < 6; j++) {
if (j > 0) {
var k=base.lastIndexOf$S("/");
if (k != -1) {
base=base.substring$I$I(0, k);
relativePath+="../";
} else if (!base.equals$O("")) {
base="";
relativePath+="../";
} else {
break;
}}if (!base.equals$O("") && absolutePath.startsWith$S(base) ) {
var path=absolutePath.substring$I(base.length$());
var k=path.indexOf$S("/");
if (k == 0) {
path=path.substring$I(1);
}relativePath+=path;
return relativePath;
}}
return absolutePath;
}, 1);

Clazz.newMeth(C$, 'getRelativePath$S',  function (absolutePath) {
return C$.getPathRelativeTo$S$S(absolutePath, C$.getUserDirectory$());
}, 1);

Clazz.newMeth(C$, 'getUserDirectory$',  function () {
var userDir=System.getProperty$S$S("user.dir", ".");
return userDir;
}, 1);

Clazz.newMeth(C$, 'getDirectoryPath$S',  function (fileName) {
if (fileName == null ) {
return "";
}fileName=C$.forwardSlash$S(fileName);
var slash=fileName.lastIndexOf$S("/");
if (slash != -1) {
return fileName.substring$I$I(0, slash);
}return "";
}, 1);

Clazz.newMeth(C$, 'getAbsolutePath$java_io_File',  function (file) {
if (file == null ) {
return null;
}var path=C$.forwardSlash$S(file.getAbsolutePath$());
var n=path.indexOf$S("/../");
while (n >= 0){
var pre=path.substring$I$I(0, n);
var m=pre.lastIndexOf$S("/");
if (m < 0) break;
var post=path.substring$I(n + 3);
path=pre.substring$I$I(0, m) + post;
n=path.indexOf$S("/../");
}
n=path.indexOf$S("/./");
while (n >= 0){
path=path.substring$I$I(0, n) + path.substring$I(n + 2);
n=path.indexOf$S("/./");
}
return path;
}, 1);

Clazz.newMeth(C$, 'getResolvedPath$S$S',  function (relativePath, base) {
if (base != null  && base.endsWith$S("/") ) base=base.substring$I$I(0, base.length$() - 1);
relativePath=C$.forwardSlash$S(relativePath);
if (relativePath.startsWith$S("/") || (relativePath.indexOf$S(":/") >= 0) ) {
return relativePath;
}base=C$.forwardSlash$S(base);
while (relativePath.startsWith$S("../") && !base.equals$O("") ){
if (base.indexOf$S("/") == -1) {
base="/" + base;
}relativePath=relativePath.substring$I(3);
base=base.substring$I$I(0, base.lastIndexOf$S("/"));
}
if (relativePath.startsWith$S("./")) relativePath=relativePath.substring$I(2);
if (relativePath.equals$O(".")) relativePath="";
if (base.equals$O("")) {
return relativePath;
}if (base.endsWith$S("/") || relativePath.startsWith$S("&") ) {
return base + relativePath;
}return base + "/" + relativePath ;
}, 1);

Clazz.newMeth(C$, 'createFolders$S',  function (path) {
var dir=Clazz.new_($I$(10,1).c$$S,[path]);
var dirs=Clazz.new_($I$(11,1));
while (!dir.exists$()){
dirs.add$I$O(0, dir);
var j=path.lastIndexOf$S("/");
if (j == -1) {
break;
}path=path.substring$I$I(0, j);
dir=Clazz.new_($I$(10,1).c$$S,[path]);
}
var it=dirs.iterator$();
while (it.hasNext$()){
dir=it.next$();
dir.mkdir$();
}
}, 1);

Clazz.newMeth(C$, 'removeCDATA$S',  function (content) {
var pt=content.indexOf$S("<![CDATA[");
return (pt >= 0 ? content.substring$I$I(pt + 9, content.indexOf$S("]]>")) : content);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NEW_LINE=System.getProperty$S$S("line.separator", "\n");
C$.loaders=Clazz.new_($I$(1,1));
C$.defaultName="osp10.dtd";
{
try {
C$.NEW_LINE=System.getProperty$S$S("line.separator", "\n");
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
} else {
throw ex;
}
}
};
{
C$.setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader(Clazz.getClass($I$(2)), ((P$.XML$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "XML$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var color=obj;
control.setValue$S$I("red", color.getRed$());
control.setValue$S$I("green", color.getGreen$());
control.setValue$S$I("blue", color.getBlue$());
control.setValue$S$I("alpha", color.getAlpha$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var r=control.getInt$S("red");
var g=control.getInt$S("green");
var b=control.getInt$S("blue");
var a=control.getInt$S("alpha");
return Clazz.new_($I$(2,1).c$$I$I$I$I,[r, g, b, a]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var r=control.getInt$S("red");
var g=control.getInt$S("green");
var b=control.getInt$S("blue");
var a=control.getInt$S("alpha");
return Clazz.new_($I$(2,1).c$$I$I$I$I,[r, g, b, a]);
});
})()
), Clazz.new_(P$.XML$1.$init$,[this, null])));
C$.setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader(Clazz.getClass(Double), ((P$.XML$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "XML$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var dbl=obj;
control.setValue$S$D("value", dbl.doubleValue$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var val=control.getDouble$S("value");
return Double.valueOf$D(val);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var dbl=obj;
var val=control.getDouble$S("value");
if (dbl.doubleValue$() == val ) {
return dbl;
}return Double.valueOf$D(val);
});
})()
), Clazz.new_(P$.XML$2.$init$,[this, null])));
C$.setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader(Clazz.getClass(Integer), ((P$.XML$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "XML$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var i=obj;
control.setValue$S$I("value", i.intValue$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var val=control.getInt$S("value");
return Integer.valueOf$I(val);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var i=obj;
var val=control.getInt$S("value");
if (i.intValue$() == val) {
return i;
}return Integer.valueOf$I(val);
});
})()
), Clazz.new_(P$.XML$3.$init$,[this, null])));
C$.setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader(Clazz.getClass(Boolean), ((P$.XML$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "XML$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var bool=obj;
control.setValue$S$Z("value", bool.booleanValue$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var val=control.getBoolean$S("value");
return Boolean.valueOf$Z(val);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var bool=obj;
var val=control.getBoolean$S("value");
if (bool.booleanValue$() == val ) {
return bool;
}return Boolean.valueOf$Z(val);
});
})()
), Clazz.new_(P$.XML$4.$init$,[this, null])));
C$.setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader(Clazz.getClass($I$(3)), ((P$.XML$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "XML$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var dim=obj;
control.setValue$S$O("dimensions", Clazz.array(Integer.TYPE, -1, [dim.width, dim.height]));
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var dim=obj;
var dimensions=control.getObject$S("dimensions");
dim.width=dimensions[0];
dim.height=dimensions[1];
return dim;
});
})()
), Clazz.new_(P$.XML$5.$init$,[this, null])));
C$.setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader(Clazz.getClass($I$(4)), ((P$.XML$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "XML$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
control.setValue$S$O("location", Clazz.array(Integer.TYPE, -1, [p.x, p.y]));
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var p=obj;
var location=control.getObject$S("location");
p.x=location[0];
p.y=location[1];
return p;
});
})()
), Clazz.new_(P$.XML$6.$init$,[this, null])));
};
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.XML, "NonStaticLoader", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.XML, "ObjectLoader", function(){
});
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
