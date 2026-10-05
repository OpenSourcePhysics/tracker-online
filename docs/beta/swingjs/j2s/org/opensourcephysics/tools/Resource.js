(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.tools.ResourceLoader','java.net.URL','org.opensourcephysics.controls.XML','javax.swing.ImageIcon','java.io.FileInputStream','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.display.ResizableIcon','java.awt.image.BufferedImage','StringBuffer','java.io.BufferedReader','org.opensourcephysics.controls.XMLControlElement','java.applet.Applet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Resource");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isAnImage=true;
},1);

C$.$fields$=[['Z',['isAnImage','isBytes'],'S',['string','shortClassName'],'O',['url','java.net.URL','file','java.io.File','icon','javax.swing.ImageIcon','clip','java.applet.AudioClip','image','java.awt.image.BufferedImage','contentURL','java.net.URL']]]

Clazz.newMeth(C$, 'getCharset$',  function () {
return $I$(1).defaultCharset;
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL',  function (url) {
;C$.$init$.apply(this);
this.url=url;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (file) {
;C$.$init$.apply(this);
if (file.toString().indexOf$S("!/") >= 0) {
this.url=$I$(1,"getJarURLForFile$S",[file.getAbsolutePath$()]);
} else {
this.file=file;
}}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$S',  function (zipURL, content) {
;C$.$init$.apply(this);
this.url=zipURL;
if (content != null ) try {
var path=zipURL.toExternalForm$() + "!/" + content ;
this.contentURL=Clazz.new_($I$(2,1).c$$S,[path]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.net.MalformedURLException")){
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getAbsolutePath$',  function () {
if (this.getFile$() != null ) {
try {
return $I$(3,"forwardSlash$S",[this.getFile$().getCanonicalPath$()]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return this.getFile$().getAbsolutePath$();
}if (this.getURL$() != null ) {
var path=this.getURL$().toExternalForm$();
return path;
}return null;
});

Clazz.newMeth(C$, 'getURL$',  function () {
if (this.url == null  && this.file != null  ) {
var path=this.getAbsolutePath$();
try {
if (path.startsWith$S("/")) {
this.url=Clazz.new_($I$(2,1).c$$S,["file:" + path]);
} else {
this.url=Clazz.new_($I$(2,1).c$$S,["file:/" + path]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.net.MalformedURLException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}if (this.contentURL != null ) {
return this.contentURL;
}return this.url;
});

Clazz.newMeth(C$, 'getFile$',  function () {
return this.file;
});

Clazz.newMeth(C$, 'getObject$Class',  function (type) {
if (Clazz.getClass($I$(4)).equals$O(type)) {
return this.getResizableIcon$();
}if (Clazz.getClass(String).equals$O(type)) {
return this.getString$();
}return null;
});

Clazz.newMeth(C$, 'openInputStream$',  function () {
if (this.getFile$() != null ) {
try {
return Clazz.new_([this.getFile$()],$I$(5,1).c$$java_io_File);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.FileNotFoundException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}if (this.url != null ) {
try {
if (this.contentURL != null ) return $I$(1).openZipEntryStream$java_net_URL$java_net_URL(this.contentURL, this.url);
return $I$(1).openStream$java_net_URL(this.url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(6).fine$S("Resource file not found " + this.url);
} else {
throw ex;
}
}
}return null;
});

Clazz.newMeth(C$, 'openReader$',  function () {
return p$1.openReader$S.apply(this, [null]);
});

Clazz.newMeth(C$, 'openReader$S',  function (encoding) {
return $I$(1,"readerForStream$java_io_InputStream$S",[this.openInputStream$(), encoding]);
}, p$1);

Clazz.newMeth(C$, 'getImageIcon$',  function () {
if ((this.icon == null ) && this.isAnImage ) {
this.icon=Clazz.new_([this.getURL$()],$I$(4,1).c$$java_net_URL);
if (this.icon.getIconWidth$() < 1) {
this.icon=null;
this.isAnImage=false;
return null;
}}return this.icon;
});

Clazz.newMeth(C$, 'getResizableIcon$',  function () {
var icon=this.getImageIcon$();
return icon == null  ? null : Clazz.new_($I$(7,1).c$$javax_swing_Icon,[icon]);
});

Clazz.newMeth(C$, 'getImage$',  function () {
if (this.isBytes) return this.icon.getImage$();
var icon=this.getImageIcon$();
return (icon == null  ? null : icon.getImage$());
});

Clazz.newMeth(C$, 'getBufferedImage$',  function () {
return this.getBufferedImage$I(1);
});

Clazz.newMeth(C$, 'getBufferedImage$I',  function (bufferedImageType) {
if (this.isAnImage && (this.image == null  || this.image.getType$() != bufferedImageType ) ) {
var im=this.getImage$();
if (im == null ) {
this.isAnImage=false;
} else {
this.image=Clazz.new_([im.getWidth$java_awt_image_ImageObserver(null), im.getHeight$java_awt_image_ImageObserver(null), bufferedImageType],$I$(8,1).c$$I$I$I);
var g2=this.image.createGraphics$();
g2.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(im, 0, 0, null);
g2.dispose$();
}}return this.image;
});

Clazz.newMeth(C$, 'getString$',  function () {
if (this.string == null ) {
var buffer=Clazz.new_($I$(9,1));
try {
var $in=this.openReader$();
var line=$in.readLine$();
while (line != null ){
buffer.append$S(line + $I$(3).NEW_LINE);
line=$in.readLine$();
}
$in.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.string=buffer.toString();
}return this.string;
});

Clazz.newMeth(C$, 'getString$S',  function (encoding) {
if (this.string == null ) {
var buffer=Clazz.new_($I$(9,1));
try {
var $in=Clazz.new_([p$1.openReader$S.apply(this, [encoding])],$I$(10,1).c$$java_io_Reader);
var line=$in.readLine$();
while (line != null ){
buffer.append$S(line + $I$(3).NEW_LINE);
line=$in.readLine$();
}
$in.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.string=buffer.toString();
}return this.string;
});

Clazz.newMeth(C$, 'getXMLClassName$',  function () {
if (this.shortClassName != null ) return this.shortClassName;
try {
var name=$I$(11,"getClassName$S",[ String.instantialize($I$(1,"getLimitedStreamBytes$java_io_InputStream$J$java_io_OutputStream$Z",[this.openInputStream$(), 300, null, true]))]);
return this.shortClassName=name.substring$I(name.lastIndexOf$I(".") + 1);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
return null;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getAudioClip$',  function () {
if ((this.clip == null ) && (this.getURL$() != null ) ) {
this.clip=$I$(12,"newAudioClip$java_net_URL",[this.getURL$()]);
}return this.clip;
});

Clazz.newMeth(C$, 'toString',  function () {
return "[resource " + (this.file != null  ? this.file.toString() : this.url != null  ? this.url.toString() : null) + "]" ;
});

Clazz.newMeth(C$, 'newImageResource$BA',  function (bytes) {
var res=Clazz.new_(C$.c$$java_net_URL,[null]);
res.icon=Clazz.new_($I$(4,1).c$$BA,[bytes]);
res.isBytes=true;
return res;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
