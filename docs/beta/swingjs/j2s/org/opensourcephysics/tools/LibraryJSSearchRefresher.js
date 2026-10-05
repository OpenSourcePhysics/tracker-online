(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.util.ArrayList','java.util.TreeMap','java.io.File','javax.swing.JOptionPane','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.LibraryBrowser','java.awt.Toolkit','org.opensourcephysics.tools.LibraryComPADRE','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.tools.Library','org.opensourcephysics.controls.ListChooser','org.opensourcephysics.controls.XML','java.net.URL','java.io.FileInputStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LibraryJSSearchRefresher", null, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.BUFFER_SIZE=4096;
this.host="opensourcephysics.github.io/tracker-website/search/";
this.ftpURLFormat="ftp://%s@%s;type=i";
this.libraryPaths=Clazz.array(String, -1, ["https://opensourcephysics.github.io/resources/CAB/tracker_library.xml", "https://opensourcephysics.github.io/resources/CAB/shared_library.xml"]);
this.paths=Clazz.new_($I$(1,1));
this.names=Clazz.new_($I$(1,1));
this.nameToPathMap=Clazz.new_($I$(2,1));
this.currentIndex=0;
},1);

C$.$fields$=[['I',['BUFFER_SIZE','currentIndex'],'S',['host','ftpURLFormat','usernameAndPW'],'O',['libraryPaths','String[]','browser','org.opensourcephysics.tools.LibraryBrowser','paths','java.util.ArrayList','+names','nameToPathMap','java.util.TreeMap']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$).refreshSearchData$();
}, 1);

Clazz.newMeth(C$, 'refreshSearchData$',  function () {
this.readFTPLoginData$();
this.openLibraryBrowser$();
this.chooseCollectionsToRefresh$();
this.refreshNext$();
});

Clazz.newMeth(C$, 'readFTPLoginData$',  function () {
var userhome=System.getProperty$S("user.home");
var file=Clazz.new_($I$(3,1).c$$S$S,[userhome, "ftp_login.txt"]);
if (!file.exists$()) {
$I$(4,"showMessageDialog$java_awt_Component$O",[null, "File " + file.getPath$() + " not found.\n" + "The file should contain the single line \"FTPusername:pw\"" ]);
System.exit$I(0);
}this.usernameAndPW=$I$(5,"getString$S",[file.getPath$()]).trim$();
});

Clazz.newMeth(C$, 'openLibraryBrowser$',  function () {
this.browser=$I$(6).getBrowser$();
this.browser.addMetadataLoaderListener$java_beans_PropertyChangeListener(this);
var dim=$I$(7).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.browser.getBounds$().width)/2|0);
var y=((dim.height - this.browser.getBounds$().height)/2|0);
this.browser.setLocation$I$I(x, y);
this.browser.setVisible$Z(true);
});

Clazz.newMeth(C$, 'chooseCollectionsToRefresh$',  function () {
var query="https://www.compadre.org/osp/services/REST/osp_tracker.cfm?verb=Identify&OSPType=Tracker&OSPPrimary=Subject";
var compadreName="ComPADRE " + $I$(8).getCollectionName$S(query);
this.nameToPathMap.put$O$O(compadreName, query);
for (var i=0; i < this.libraryPaths.length; i++) {
var control=Clazz.new_($I$(9,1).c$$S,[this.libraryPaths[i]]);
var lib=Clazz.new_($I$(10,1));
control.loadObject$O(lib);
var map=lib.getNameMap$();
var paths=lib.getAllPaths$();
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
this.nameToPathMap.put$O$O(map.get$O(path), path);
}
}
for (var name, $name = this.nameToPathMap.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
this.names.add$O(name);
this.paths.add$O(this.nameToPathMap.get$O(name));
}
var dialog=Clazz.new_($I$(11,1).c$$S$S$javax_swing_JDialog$java_awt_event_ActionListener,["", "Refresh search data for:", null, null]);
if (!dialog.choose$java_util_Collection$java_util_Collection$java_util_Collection$java_util_Collection$ZA$ZA(this.paths, this.names, null, null, null, null)) this.paths.clear$();
});

Clazz.newMeth(C$, 'refreshNext$',  function () {
if (this.currentIndex < this.paths.size$()) {
var next=this.paths.get$I(this.currentIndex);
++this.currentIndex;
this.browser.open$S(next);
} else {
System.exit$I(0);
}});

Clazz.newMeth(C$, 'uploadToWeb$S',  function (localFilePath) {
var ftpURL=String.format$S$OA("ftp://%s@%s;type=i", Clazz.array(java.lang.Object, -1, [this.usernameAndPW, "opensourcephysics.github.io/tracker-website/search/" + $I$(12).getName$S(localFilePath)]));
try {
var url=Clazz.new_($I$(13,1).c$$S,[ftpURL]);
var conn=url.openConnection$();
var outputStream=conn.getOutputStream$();
var inputStream=Clazz.new_($I$(14,1).c$$S,[localFilePath]);
var buffer=Clazz.array(Byte.TYPE, [4096]);
var bytesRead=-1;
while ((bytesRead=inputStream.read$BA(buffer)) != -1){
outputStream.write$BA$I$I(buffer, 0, bytesRead);
}
inputStream.close$();
outputStream.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
System.exit$I(-1);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var file=e.getNewValue$();
if (file.exists$()) this.uploadToWeb$S(file.getAbsolutePath$());
this.browser.closeTab$I(0);
this.refreshNext$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
