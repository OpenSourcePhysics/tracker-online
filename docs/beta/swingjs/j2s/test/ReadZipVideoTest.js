(function(){var P$=Clazz.newPackage("test"),I$=[[0,'org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.media.core.VideoIO']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReadZipVideoTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['webpath','localpath']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
var res=$I$(1).getResource$S(C$.webpath);
if (res != null ) {
var paths=$I$(2).getZippedImagePaths$S(C$.webpath);
System.out.println$S("Found in zip file: " + (paths == null  ? null : paths.length + " images " + paths[0] ));
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.webpath="https://physlets.org/tracker/library/JS/basketball.zip";
C$.localpath="C:/Users/Doug/Website/tracker-davidson/library/JS/basketball.zip";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
