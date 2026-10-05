(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker.analytics"),I$=[[0,'java.awt.Toolkit','java.awt.Robot','StringBuffer','java.awt.MouseInfo','java.io.File','java.io.BufferedReader','java.io.FileReader','java.io.FileOutputStream','java.nio.charset.Charset','java.io.OutputStreamWriter','java.io.BufferedWriter','java.text.SimpleDateFormat','java.util.Calendar','java.net.URL','org.opensourcephysics.tools.Resource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LaunchCounter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['dataFile','dataFile6','NEW_LINE']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(1).getDefaultToolkit$().beep$();
C$.recordCounts6$();
$I$(1).getDefaultToolkit$().beep$();
}, 1);

Clazz.newMeth(C$, 'recordCounts$S',  function (fileName) {
var robot=Clazz.new_($I$(2,1));
var increase=true;
var buffer=Clazz.new_($I$(3,1));
buffer.append$S(C$.getDateAndTime$());
fileName="C:\\Users\\dobro\\Documents\\Tracker\\Analytics\\" + fileName;
var filenames=C$.getFileNames$S(fileName);
for (var j=0; j < filenames.length; j++) {
increase=!increase;
var p=$I$(4).getPointerInfo$().getLocation$();
var x=increase ? p.x + 1 : p.x - 1;
var y=increase ? p.y + 1 : p.y - 1;
robot.mouseMove$I$I(x, y);
var count=C$.getCount$S(filenames[j]);
buffer.append$S("\t" + count);
}
var contents=C$.read$S(fileName);
contents+=buffer.toString();
C$.write$S$S(contents, fileName);
}, 1);

Clazz.newMeth(C$, 'recordCounts6$',  function () {
var robot=Clazz.new_($I$(2,1));
var increase=true;
var buffer=Clazz.new_($I$(3,1));
buffer.append$S(C$.getDateAndTime$());
var fileName="C:\\Users\\dobro\\Documents\\Tracker\\Analytics\\" + C$.dataFile6;
var filenames=C$.getFileNames$S(fileName);
for (var j=0; j < filenames.length; j++) {
increase=!increase;
var p=$I$(4).getPointerInfo$().getLocation$();
var x=increase ? p.x + 1 : p.x - 1;
var y=increase ? p.y + 1 : p.y - 1;
robot.mouseMove$I$I(x, y);
var count=-1;
try {
var countXuggle=C$.getCount$S(filenames[j] + "_Xuggle");
countXuggle=countXuggle.replaceAll$S$S(",", "");
var countNone=C$.getCount$S(filenames[j] + "_none");
countNone=countNone.replaceAll$S$S(",", "");
count=Integer.parseInt$S(countXuggle) + Integer.parseInt$S(countNone);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
buffer.append$S("\t" + count);
}
var contents=C$.read$S(fileName);
contents+=buffer.toString();
C$.write$S$S(contents, fileName);
}, 1);

Clazz.newMeth(C$, 'getFileNames$S',  function (dataFile) {
var file=Clazz.new_($I$(5,1).c$$S,[dataFile]);
try {
var $in=Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_File,[file])],$I$(6,1).c$$java_io_Reader);
var firstLine=$in.readLine$();
$in.close$();
if (firstLine != null ) {
var split=firstLine.split$S("\t");
if (split.length > 0) {
var fileNames=Clazz.array(String, [split.length - 1]);
System.arraycopy$O$I$O$I$I(split, 1, fileNames, 0, fileNames.length);
return fileNames;
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
return Clazz.array(String, [0]);
}, 1);

Clazz.newMeth(C$, 'read$S',  function (fileName) {
var file=Clazz.new_($I$(5,1).c$$S,[fileName]);
var buffer=null;
try {
var $in=Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_File,[file])],$I$(6,1).c$$java_io_Reader);
buffer=Clazz.new_($I$(3,1));
var line=$in.readLine$();
while (line != null ){
buffer.append$S(line + C$.NEW_LINE);
line=$in.readLine$();
}
$in.close$();
return buffer.toString();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
return null;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'write$S$S',  function (contents, fileName) {
var file=Clazz.new_($I$(5,1).c$$S,[fileName]);
try {
var stream=Clazz.new_($I$(8,1).c$$java_io_File,[file]);
var charset=$I$(9).forName$S("UTF-8");
var out=Clazz.new_($I$(10,1).c$$java_io_OutputStream$java_nio_charset_Charset,[stream, charset]);
var writer=Clazz.new_($I$(11,1).c$$java_io_Writer,[out]);
writer.write$S(contents);
writer.flush$();
writer.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getDateAndTime$',  function () {
var sdf=Clazz.new_($I$(12,1).c$$S,["yyyy-MM-dd HH:mm"]);
var cal=$I$(13).getInstance$();
return sdf.format$java_util_Date(cal.getTime$());
}, 1);

Clazz.newMeth(C$, 'getCount$S',  function (filename) {
var path="https://physlets.org/tracker/counter/counter.php?page=read_" + filename;
try {
var url=Clazz.new_($I$(14,1).c$$S,[path]);
var res=Clazz.new_($I$(15,1).c$$java_net_URL,[url]);
return res.getString$().trim$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.dataFile="launch_counts.csv";
C$.dataFile6="launch_counts_6.csv";
C$.NEW_LINE=System.getProperty$S$S("line.separator", "\n");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
