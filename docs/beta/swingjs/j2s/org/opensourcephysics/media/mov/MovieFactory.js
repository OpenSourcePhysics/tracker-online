(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.mov"),I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.media.mov.JSMovieVideoType','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.ResourceLoader','java.beans.PropertyChangeListener','org.opensourcephysics.media.mov.MovieFactory','org.opensourcephysics.media.mov.JSMovieVideo','java.awt.Dimension','org.opensourcephysics.media.core.MediaRes']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MovieFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['hadXuggleError','xuggleIsPresent','xuggleNeeds32bitVM'],'S',['xuggleClassPath','xugglePropertiesPath','movieEngineName'],'O',['errorListener','java.beans.PropertyChangeListener[]']]]

Clazz.newMeth(C$, 'createThumbnailFile$java_awt_Dimension$S$S',  function (defaultThumbnailDimension, sourcePath, thumbPath) {
if (C$.hasVideoEngine$()) {
if ($I$(1).isJS) return $I$(7).createThumbnailFile$java_awt_Dimension$S$S(defaultThumbnailDimension, sourcePath, thumbPath);
var className=C$.xuggleClassPath + "XuggleThumbnailTool";
var types=Clazz.array(Class, -1, [Clazz.getClass($I$(8)), Clazz.getClass(String), Clazz.getClass(String)]);
try {
var xuggleClass=Clazz.forName(className);
var method=xuggleClass.getMethod$S$ClassA("createThumbnailFile", types);
return method.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, [defaultThumbnailDimension, sourcePath, thumbPath]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(3,"fine$S",["failed to create thumbnail: " + ex.toString()]);
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var err = e$$;
{
}
} else {
throw e$$;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'getMovieEngineName$Z',  function (forDialog) {
return forDialog && C$.movieEngineName == "none"  ? $I$(9).getString$S("VideoIO.Engine.None") : C$.movieEngineName;
}, 1);

Clazz.newMeth(C$, 'hasVideoEngine$',  function () {
return C$.movieEngineName != "none";
}, 1);

Clazz.newMeth(C$, 'startMovieThumbnailTool$',  function () {
if ($I$(1).isJS) {
return;
}if (C$.hasVideoEngine$()) {
try {
Clazz.forName(C$.xuggleClassPath + "XuggleThumbnailTool");
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
} else {
throw e;
}
}
}}, 1);

Clazz.newMeth(C$, 'getUpdatedVideoEngines$',  function () {

{}
return null;
}, 1);

Clazz.newMeth(C$, 'showAbout$S$S',  function (engineName, requester) {
if (engineName == "Xuggle") {
try {
var clas=Clazz.forName("org.opensourcephysics.media.xuggle.DiagnosticsForXuggle");
var method=clas.getMethod$S$ClassA("aboutXuggle", Clazz.array(Class, -1, [Clazz.getClass(String)]));
method.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, [requester]));
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
} else {
throw e1;
}
}
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.xuggleClassPath="org.opensourcephysics.media.xuggle.";
C$.xugglePropertiesPath="org/opensourcephysics/resources/xuggle/xuggle.properties";
C$.movieEngineName="none";
C$.hadXuggleError=false;
C$.xuggleIsPresent=false;
C$.xuggleNeeds32bitVM=false;
{
var code=-1;
try {
if ($I$(1).isJS) {
if ($I$(2).registered) {
C$.movieEngineName="JS";
C$.xuggleIsPresent=false;
}} else 
{}
} catch (e) {
if (!$I$(1).isJS) {
if (code == 7) {
C$.xuggleNeeds32bitVM=true;
$I$(3).config$S("Xuggle installed but must be run in a 32-bit Java VM on Windows.");
} else {
$I$(3).config$S("Xuggle not installed? " + C$.xuggleClassPath + "XuggleVideo failed" );
}var jarPath=$I$(1).getLaunchJarPath$();
C$.xuggleIsPresent=(jarPath != null  && $I$(4).getResource$S(jarPath + "!/" + C$.xugglePropertiesPath ) != null  );
}}
};
C$.errorListener=Clazz.array($I$(5), -1, [((P$.MovieFactory$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MovieFactory$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("xuggle_error")) {
$I$(6).hadXuggleError=true;
$I$(3,"removePropertyChangeListener$java_beans_PropertyChangeListener",[$I$(6).errorListener[0]]);
$I$(6).errorListener[0]=null;
}});
})()
), Clazz.new_(P$.MovieFactory$1.$init$,[this, null]))]);
{
$I$(3).addPropertyChangeListener$java_beans_PropertyChangeListener(C$.errorListener[0]);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
