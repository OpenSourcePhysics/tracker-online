(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.Resource','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.display.Data','java.io.BufferedReader','java.io.StringReader','java.util.ArrayList','org.opensourcephysics.controls.XML']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataFile", null, 'org.opensourcephysics.display.DataAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataList=null;
},1);

C$.$fields$=[['O',['dataList','java.util.List']]
,['O',['delimiters','String[]']]]

Clazz.newMeth(C$, 'c$$java_io_File',  function (file) {
;C$.superclazz.c$$DAA.apply(this,[null]);C$.$init$.apply(this);
if (file != null ) {
this.open$java_io_File(file);
}}, 1);

Clazz.newMeth(C$, 'getDataList$',  function () {
return this.dataList;
});

Clazz.newMeth(C$, 'open$java_io_File',  function (file) {
this.dataList=null;
this.data=null;
$I$(1).fine$S("opening " + file);
var res=Clazz.new_($I$(2,1).c$$java_io_File,[file]);
var $in=res.openReader$();
var firstLine=this.readFirstLine$java_io_Reader($in);
if (firstLine.startsWith$S("<?xml")) {
var control=Clazz.new_($I$(3,1).c$$java_io_File,[file]);
this.dataList=control.getObjects$Class(Clazz.getClass($I$(4),['getColumnNames$','getData2D$','getData3D$','getDataList$','getDatasets$','getFillColors$','getID$','getLineColors$','getName$','setID$I']));
} else if (res.getString$() != null ) {
this.data=this.parseData$S$S(res.getString$(), file.toString());
if (this.data != null ) {
}}$I$(1).finest$S("no data found");
});

Clazz.newMeth(C$, 'parseData$S$S',  function (dataString, fileName) {
var input=Clazz.new_([Clazz.new_($I$(6,1).c$$S,[dataString])],$I$(5,1).c$$java_io_Reader);
var gnuPlotComment="#";
try {
var textLine=input.readLine$();
for (var i=0; i < C$.delimiters.length; i++) {
var rows=Clazz.new_($I$(7,1));
var columns=2147483647;
var columnNames=null;
var title=null;
var lineCount=0;
while (textLine != null ){
if (textLine.contains$CharSequence(gnuPlotComment)) {
textLine=textLine.trim$();
}if (textLine.startsWith$S(gnuPlotComment)) {
var k=textLine.indexOf$S("name:");
if (k > -1) {
title=textLine.substring$I(k + 5).trim$();
}k=textLine.indexOf$S("columnNames:");
if (k > -1) {
textLine=textLine.substring$I(k + 12).trim$();
} else {
textLine=input.readLine$();
continue;
}}if ((textLine.indexOf$S("Vernier Format") > -1) || (textLine.indexOf$S(".cmbl") > -1) ) {
textLine=input.readLine$();
continue;
}var strings=C$.parseStrings$S$S(textLine, C$.delimiters[i]);
var rowData=C$.parseDoubles$SA(strings);
if (rows.isEmpty$() && (strings.length > 0) && (title == null )  ) {
var s="";
for (var k=0; k < strings.length; k++) {
if (Double.isNaN$D(rowData[k]) && !strings[k].equals$O("") ) {
if (s.equals$O("")) {
s=strings[k];
} else {
s="";
break;
}}}
if (!s.equals$O("")) {
title=s;
textLine=input.readLine$();
continue;
}}if (rows.isEmpty$() && (strings.length > 0) && (columnNames == null )  ) {
var valid=true;
for (var k=0; k < strings.length; k++) {
if (!Double.isNaN$D(rowData[k]) || strings[k].equals$O("") ) {
valid=false;
break;
}}
if (valid) {
columnNames=strings;
textLine=input.readLine$();
continue;
}}if (strings.length > 0) {
++lineCount;
var validData=true;
var emptyData=true;
for (var k=0; k < strings.length; k++) {
if (Double.isNaN$D(rowData[k]) && !strings[k].equals$O("") ) {
validData=false;
}if (!strings[k].equals$O("")) {
emptyData=false;
}}
if (rows.isEmpty$() && emptyData ) {
validData=false;
}if (validData) {
rows.add$O(rowData);
columns=Math.min(rowData.length, columns);
}}if (rows.isEmpty$() && (lineCount > 10) ) {
break;
}textLine=input.readLine$();
}
if (!rows.isEmpty$() && (columns > 0) ) {
input.close$();
var dataArray=Clazz.array(Double.TYPE, [columns, rows.size$()]);
for (var row=0; row < rows.size$(); row++) {
var next=rows.get$I(row);
for (var j=0; j < columns; j++) {
dataArray[j][row]=next[j];
}
}
this.setName$S((title == null ) ? $I$(8).getName$S(fileName) : title);
this.setColumnNames$SA(columnNames);
$I$(1).finest$S("data found using delimiter \"" + C$.delimiters[i] + "\"" );
return dataArray;
}input.close$();
input=Clazz.new_([Clazz.new_($I$(6,1).c$$S,[dataString])],$I$(5,1).c$$java_io_Reader);
textLine=input.readLine$();
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
try {
input.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$, 'readFirstLine$java_io_Reader',  function ($in) {
var input=null;
if (Clazz.instanceOf($in, "java.io.BufferedReader")) {
input=$in;
} else {
input=Clazz.new_($I$(5,1).c$$java_io_Reader,[$in]);
}var openingLine;
try {
openingLine=input.readLine$();
while ((openingLine == null ) || openingLine.equals$O("") ){
openingLine=input.readLine$();
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
try {
input.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return openingLine;
});

Clazz.newMeth(C$, 'parseStrings$S$S',  function (text, delimiter) {
var tokens=Clazz.new_($I$(7,1));
if (text != null ) {
var next=text;
var i=text.indexOf$S(delimiter);
if (i == -1) {
tokens.add$O(C$.stripQuotes$S(next));
text=null;
} else {
next=text.substring$I$I(0, i);
text=text.substring$I(i + 1);
}while (text != null ){
tokens.add$O(C$.stripQuotes$S(next));
i=text.indexOf$S(delimiter);
if (i == -1) {
next=text;
tokens.add$O(C$.stripQuotes$S(next));
text=null;
} else {
next=text.substring$I$I(0, i).trim$();
text=text.substring$I(i + 1);
}}
}return tokens.toArray$OA(Clazz.array(String, [0]));
}, 1);

Clazz.newMeth(C$, 'parseStrings$S$S$S',  function (text, rowDelimiter, colDelimiter) {
var rows=C$.parseStrings$S$S(text, rowDelimiter);
var tokens=Clazz.array(String, [rows.length, 0]);
for (var i=0; i < rows.length; i++) {
tokens[i]=C$.parseStrings$S$S(rows[i], colDelimiter);
}
return tokens;
}, 1);

Clazz.newMeth(C$, 'parseDoubles$SA',  function (strings) {
var doubles=Clazz.array(Double.TYPE, [strings.length]);
for (var i=0; i < strings.length; i++) {
if (strings[i].indexOf$S("\t") > -1) {
doubles[i]=NaN;
} else {
try {
doubles[i]=Double.parseDouble$S(strings[i]);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
doubles[i]=NaN;
} else {
throw e;
}
}
}}
return doubles;
}, 1);

Clazz.newMeth(C$, 'parseDoubles$S$S$S',  function (text, rowDelimiter, colDelimiter) {
var strings=C$.parseStrings$S$S$S(text, rowDelimiter, colDelimiter);
var doubles=Clazz.array(Double.TYPE, [strings.length, 0]);
for (var i=0; i < strings.length; i++) {
var row=Clazz.array(Double.TYPE, [strings[i].length]);
for (var j=0; j < row.length; j++) {
try {
row[j]=Double.parseDouble$S(strings[i][j]);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
row[j]=NaN;
} else {
throw e;
}
}
}
doubles[i]=row;
}
return doubles;
}, 1);

Clazz.newMeth(C$, 'stripQuotes$S',  function (text) {
if (text.startsWith$S("\"")) {
var stripped=text.substring$I(1);
var n=stripped.indexOf$S("\"");
if (n == stripped.length$() - 1) {
return stripped.substring$I$I(0, n);
}}return text;
}, 1);

Clazz.newMeth(C$, 'getRowArray$I',  function (rowCount) {
var rows=Clazz.array(Double.TYPE, [rowCount]);
for (var i=0; i < rowCount; i++) {
rows[i]=i;
}
return rows;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.delimiters=Clazz.array(String, -1, [" ", "\t", ",", ";"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
