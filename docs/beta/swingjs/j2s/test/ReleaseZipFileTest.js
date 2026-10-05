(function(){var P$=Clazz.newPackage("test"),p$1={},I$=[[0,'org.opensourcephysics.display.OSPFrame','javax.swing.JMenuBar','javax.swing.JMenuItem','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.media.core.VideoIO',['org.opensourcephysics.media.core.VideoIO','.SingleExtFileFilter'],'java.io.File','org.opensourcephysics.tools.ResourceLoader','java.net.URL','org.opensourcephysics.tools.Resource','java.nio.file.Files','javax.swing.JMenu','java.awt.Point','java.net.URLConnection']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReleaseZipFileTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frame=Clazz.new_($I$(1,1).c$$S,["TRZ File Catch & Release Test"]);
},1);

C$.$fields$=[['O',['frame','org.opensourcephysics.display.OSPFrame','openItem','javax.swing.JMenuItem','menuBar','javax.swing.JMenuBar']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.menuBar=Clazz.new_($I$(2,1));
this.openItem=Clazz.new_($I$(3,1).c$$S,["Open TRZ"]);
this.openItem.addActionListener$java_awt_event_ActionListener(((P$.ReleaseZipFileTest$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReleaseZipFileTest$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(4).getChooser$();
$I$(5).trzFileFilter=Clazz.new_($I$(6,1).c$$S$S,["trz", "TRZ files--MAY BE DELETED!!"]);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter($I$(5).trzFileFilter);
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(5).trzFileFilter);
chooser.setCurrentDirectory$java_io_File(Clazz.new_([$I$(4).getPreference$S("file_chooser_directory")],$I$(7,1).c$$S));
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(this.b$['test.ReleaseZipFileTest'].frame, ((P$.ReleaseZipFileTest$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReleaseZipFileTest$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var file=this.$finals$.chooser.getSelectedFile$();
var path=file.getAbsolutePath$();
if (!path.endsWith$S(".trz")) return;
System.out.println$S("TRZ path " + path);
$I$(4,"setPreference$S$O",["file_chooser_directory", file.getParent$()]);
$I$(4).savePreferences$();
var map=$I$(8).getZipContents$S$Z(path, false);
for (var next, $next = map.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.contains$CharSequence(".htm")) {
System.out.println$S("zip entry: " + next);
var url0=null;
var res=null;
try {
url0=Clazz.new_(["jar", null, Clazz.new_($I$(9,1).c$$S$S$S,["file", null, path + "!/" + next ]).toString()],$I$(9,1).c$$S$S$S);
res=Clazz.new_($I$(10,1).c$$java_net_URL,[url0]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
} else {
throw e;
}
}
if (res != null ) try {
var url=res.getURL$();
var stream=this.b$['test.ReleaseZipFileTest'].getInputStreamNoCache1$java_net_URL.apply(this.b$['test.ReleaseZipFileTest'], [url]);
stream.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$O(e);
} else {
throw e;
}
}
try {
$I$(11,"delete$java_nio_file_Path",[file.toPath$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$O(e);
} else {
throw e;
}
}
System.out.println$S("file deleted? " + !file.exists$());
}}
});
})()
), Clazz.new_(P$.ReleaseZipFileTest$1$1.$init$,[this, {chooser:chooser}])), null);
});
})()
), Clazz.new_(P$.ReleaseZipFileTest$1.$init$,[this, null])));
var menu=Clazz.new_($I$(12,1).c$$S,["File"]);
this.menuBar.add$javax_swing_JMenu(menu);
menu.add$javax_swing_JMenuItem(this.openItem);
this.frame.setJMenuBar$javax_swing_JMenuBar(this.menuBar);
this.frame.setSize$I$I(500, 500);
this.frame.setLocation$java_awt_Point(Clazz.new_($I$(13,1).c$$I$I,[500, 100]));
this.frame.setVisible$Z(true);
this.frame.setDefaultCloseOperation$I(3);
this.openItem.doClick$I(100);
}, 1);

Clazz.newMeth(C$, 'getInputStreamNoCache1$java_net_URL',  function (url) {
var c=url.openConnection$();
c.setUseCaches$Z(false);
return c.getInputStream$();
});

Clazz.newMeth(C$, 'getInputStreamNoCache2$java_net_URL',  function (url) {
p$1.enableDefaultURLCache$Z.apply(this, [false]);
var stream=url.openStream$();
p$1.enableDefaultURLCache$Z.apply(this, [true]);
return stream;
});

Clazz.newMeth(C$, 'enableDefaultURLCache$Z',  function (b) {
try {
var url=Clazz.new_($I$(9,1).c$$S,["http://x"]);
var c=((P$.ReleaseZipFileTest$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReleaseZipFileTest$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.net.URLConnection'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'connect$',  function () {
});
})()
), Clazz.new_($I$(14,1).c$$java_net_URL,[this, null, url],P$.ReleaseZipFileTest$2));
c.setDefaultUseCaches$Z(b);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
e.printStackTrace$();
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
