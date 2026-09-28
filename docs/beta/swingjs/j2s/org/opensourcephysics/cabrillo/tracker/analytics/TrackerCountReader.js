(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker.analytics"),p$1={},I$=[[0,'javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.JComboBox','javax.swing.BorderFactory','javax.swing.Box','javax.swing.JButton','javax.swing.JTextArea','java.awt.Color','java.awt.event.KeyAdapter','javax.swing.JScrollPane','java.awt.Dimension','java.util.ArrayList','java.net.URL','org.opensourcephysics.tools.Resource','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackerCountReader", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.NEW_LINE=System.getProperty$S$S("line.separator", "\n");
this.launchListPage="list_";
this.downloadListFile="list__list";
this.launchClearPage="clear_";
this.downloadClearFile="clear__clear";
this.launchPHPPath="https://physlets.org/tracker/counter/counter.php?page=";
this.downloadPHPPath="https://physlets.org/tracker/installers/download.php?file=";
this.actions=Clazz.array(String, -1, ["read launch counts", "read downloads", "version", "list launch log failures", "list download failures", "clear launch log failures", "clear download failures", "test launch log", "test downloads"]);
this.versions=Clazz.array(String, -1, ["all", "6.", "5.", "4.", "6.3", "6.2", "6.1", "6.0", "6.3.5", "6.3.4", "6.3.3", "6.3.2", "6.3.1", "6.3.0", "6.2.0", "6.1.7", "6.1.6", "6.1.5", "6.1.4", "6.1.3", "6.1.2", "6.1.1", "6.1.0", "6.0.10", "6.0.9", "6.0.8", "6.0.7", "6.0.6", "6.0.5", "6.0.4", "6.0.3", "6.0.2", "6.0.1", "6.0.0", "5.5.0", "5.4.0", "5.3.7", "5.3.6", "5.3.5", "5.3.4", "5.3.3", "5.3.2", "5.3.1", "5.3.0", "5.2.10", "5.2.9", "5.2.8", "5.2.7", "5.2.6", "5.2.5", "5.2.4", "5.2.3", "5.2.2", "5.1.5", "5.1.4", "5.1.3", "5.1.2", "5.1.1", "5.1.0", "5.0.7", "5.0.6", "5.0.5", "5.0.4", "5.0.3", "5.0.2", "5.0.1", "5.0.0"]);
this.OSs=Clazz.array(String, -1, ["all", "windows", "osx", "linux"]);
this.engines=Clazz.array(String, -1, ["all", "Xuggle", "none"]);
},1);

C$.$fields$=[['S',['NEW_LINE','launchListPage','downloadListFile','launchClearPage','downloadClearFile','launchPHPPath','downloadPHPPath'],'O',['actions','String[]','+versions','+OSs','+engines','actionDropdown','javax.swing.JComboBox','+versionDropdown','+osDropdown','+engineDropdown','actionLabel','javax.swing.JLabel','+versionLabel','+osLabel','+engineLabel','textArea','javax.swing.JTextArea','sendButton','javax.swing.JButton']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Tracker Count Reader"]);C$.$init$.apply(this);
this.setDefaultCloseOperation$I(3);
var contentPane=Clazz.new_([Clazz.new_($I$(2,1))],$I$(1,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
this.actionLabel=Clazz.new_($I$(3,1).c$$S,["Action"]);
this.versionLabel=Clazz.new_($I$(3,1).c$$S,["Version"]);
this.osLabel=Clazz.new_($I$(3,1).c$$S,["OS"]);
this.engineLabel=Clazz.new_($I$(3,1).c$$S,["Engine"]);
this.actionDropdown=Clazz.new_($I$(4,1).c$$OA,[this.actions]);
this.versionDropdown=Clazz.new_($I$(4,1).c$$OA,[this.versions]);
this.osDropdown=Clazz.new_($I$(4,1).c$$OA,[this.OSs]);
this.engineDropdown=Clazz.new_($I$(4,1).c$$OA,[this.engines]);
this.actionDropdown.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(1, 4, 1, 4));
this.versionDropdown.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(1, 4, 1, 4));
this.osDropdown.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(1, 4, 1, 4));
this.engineDropdown.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(1, 4, 1, 4));
var actionBox=$I$(6).createVerticalBox$();
actionBox.add$java_awt_Component(p$1.leftJustify$java_awt_Component.apply(this, [this.actionLabel]));
actionBox.add$java_awt_Component(this.actionDropdown);
var versionBox=$I$(6).createVerticalBox$();
versionBox.add$java_awt_Component(p$1.leftJustify$java_awt_Component.apply(this, [this.versionLabel]));
versionBox.add$java_awt_Component(this.versionDropdown);
var osBox=$I$(6).createVerticalBox$();
osBox.add$java_awt_Component(p$1.leftJustify$java_awt_Component.apply(this, [this.osLabel]));
osBox.add$java_awt_Component(this.osDropdown);
var engineBox=$I$(6).createVerticalBox$();
engineBox.add$java_awt_Component(p$1.leftJustify$java_awt_Component.apply(this, [this.engineLabel]));
engineBox.add$java_awt_Component(this.engineDropdown);
var box=$I$(6).createHorizontalBox$();
box.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(4, 7, 2, 7));
box.add$java_awt_Component(actionBox);
box.add$java_awt_Component(versionBox);
box.add$java_awt_Component(osBox);
box.add$java_awt_Component(engineBox);
this.sendButton=Clazz.new_($I$(7,1).c$$S,["Send"]);
this.sendButton.addActionListener$java_awt_event_ActionListener(((P$.TrackerCountReader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerCountReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.send.apply(this.b$['org.opensourcephysics.cabrillo.tracker.analytics.TrackerCountReader'], []);
});
})()
), Clazz.new_(P$.TrackerCountReader$1.$init$,[this, null])));
var top=Clazz.new_([Clazz.new_($I$(2,1))],$I$(1,1).c$$java_awt_LayoutManager);
top.add$java_awt_Component$O(box, "North");
var buttonPanel=Clazz.new_([Clazz.new_($I$(2,1))],$I$(1,1).c$$java_awt_LayoutManager);
buttonPanel.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(2, 10, 2, 10));
buttonPanel.add$java_awt_Component$O(this.sendButton, "North");
top.add$java_awt_Component$O(buttonPanel, "South");
contentPane.add$java_awt_Component$O(top, "North");
this.textArea=Clazz.new_($I$(8,1));
this.textArea.addKeyListener$java_awt_event_KeyListener(((P$.TrackerCountReader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerCountReader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.analytics.TrackerCountReader'].textArea.setForeground$java_awt_Color($I$(9).RED.darker$());
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.TrackerCountReader$2)));
var scroller=Clazz.new_($I$(11,1).c$$java_awt_Component,[this.textArea]);
scroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(12,1).c$$I$I,[200, 400]));
contentPane.add$java_awt_Component$O(scroller, "Center");
this.pack$();
}, 1);

Clazz.newMeth(C$, 'send',  function () {
if (this.textArea.getForeground$().equals$O($I$(9).RED.darker$())) {
var text=this.textArea.getText$().trim$();
var result=p$1.send$S$S.apply(this, [this.launchPHPPath, text]);
this.textArea.setForeground$java_awt_Color($I$(9).BLACK);
this.textArea.setText$S(result);
return;
} else {
var ver=null;
var os=null;
var eng=null;
var action=this.actionDropdown.getSelectedItem$().toString();
if (action.contains$CharSequence("list")) {
var result=null;
if (action.contains$CharSequence("launch")) {
result=p$1.send$S$S.apply(this, [this.launchPHPPath, this.launchListPage]);
if ("".equals$O(result)) result="(no launch log failures)";
} else {
result=p$1.send$S$S.apply(this, [this.downloadPHPPath, this.downloadListFile]);
if ("".equals$O(result)) result="(no download failures)";
}this.textArea.setForeground$java_awt_Color($I$(9).BLACK);
this.textArea.setText$S(result);
return;
} else if (action.equals$O("version")) {
this.textArea.setForeground$java_awt_Color($I$(9).BLACK);
this.textArea.setText$S(p$1.send$S$S.apply(this, [this.launchPHPPath, "version"]));
return;
} else if (action.contains$CharSequence("clear")) {
var result=null;
if (action.contains$CharSequence("launch")) {
result=p$1.send$S$S.apply(this, [this.launchPHPPath, this.launchClearPage]);
if ("".equals$O(result)) result="(cleared launch log failures)";
} else {
result=p$1.send$S$S.apply(this, [this.downloadPHPPath, this.downloadClearFile]);
if ("".equals$O(result)) result="(cleared download failures)";
}this.textArea.setForeground$java_awt_Color($I$(9).BLACK);
this.textArea.setText$S(result);
return;
} else {
if (this.versionDropdown.getSelectedItem$().equals$O("all")) {
var vers=Clazz.new_($I$(13,1));
for (var i=0; i < this.versions.length; i++) {
if (this.versions[i].length$() >= 4) {
vers.add$O(this.versions[i]);
}}
ver=vers.toArray$OA(Clazz.array(String, [vers.size$()]));
} else if (this.versionDropdown.getSelectedItem$().equals$O("4.") || this.versionDropdown.getSelectedItem$().equals$O("5.") || this.versionDropdown.getSelectedItem$().equals$O("6.")  ) {
var vers=Clazz.new_($I$(13,1));
var s=this.versionDropdown.getSelectedItem$().toString();
for (var i=0; i < this.versions.length; i++) {
if (this.versions[i].startsWith$S(s) && !this.versions[i].equals$O(s) ) {
vers.add$O(this.versions[i]);
}}
ver=vers.toArray$OA(Clazz.array(String, [vers.size$()]));
} else if (this.versionDropdown.getSelectedItem$().equals$O("6.0") || this.versionDropdown.getSelectedItem$().equals$O("6.1") || this.versionDropdown.getSelectedItem$().equals$O("6.2") || this.versionDropdown.getSelectedItem$().equals$O("6.3")  ) {
var vers=Clazz.new_($I$(13,1));
var s=this.versionDropdown.getSelectedItem$().toString();
for (var i=0; i < this.versions.length; i++) {
if (this.versions[i].startsWith$S(s) && !this.versions[i].equals$O(s) ) {
vers.add$O(this.versions[i]);
}}
ver=vers.toArray$OA(Clazz.array(String, [vers.size$()]));
} else {
ver=Clazz.array(String, -1, [this.versionDropdown.getSelectedItem$().toString()]);
}if (this.osDropdown.getSelectedItem$().equals$O("all")) {
os=Clazz.array(String, [this.OSs.length - 1]);
for (var i=0; i < os.length; i++) {
os[i]=this.OSs[i + 1];
}
} else {
os=Clazz.array(String, -1, [this.osDropdown.getSelectedItem$().toString()]);
}if (this.engineDropdown.getSelectedItem$().equals$O("all")) {
eng=Clazz.array(String, [this.engines.length - 1]);
for (var i=0; i < eng.length; i++) {
eng[i]=this.engines[i + 1];
}
} else {
eng=Clazz.array(String, -1, [this.engineDropdown.getSelectedItem$().toString()]);
}}var result=p$1.send$S$SA$SA$SA.apply(this, [this.actionDropdown.getSelectedItem$().toString(), ver, os, eng]);
this.textArea.setForeground$java_awt_Color($I$(9).BLACK);
var command=this.versionDropdown.getSelectedItem$() + "_" + this.osDropdown.getSelectedItem$() ;
if (!action.contains$CharSequence("download")) {
command+="_" + this.engineDropdown.getSelectedItem$();
}this.textArea.setText$S(action + " " + command + ": " + result );
}}, p$1);

Clazz.newMeth(C$, 'send$S$S',  function (path, command) {
try {
var url=Clazz.new_($I$(14,1).c$$S,[path + command]);
var res=Clazz.new_($I$(15,1).c$$java_net_URL,[url]);
return res.getString$().trim$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'send$S$SA$SA$SA',  function (action, ver, os, eng) {
var counts=0;
var commands="";
for (var i=0; i < ver.length; i++) {
for (var j=0; j < os.length; j++) {
if ((action.contains$CharSequence("test") || action.contains$CharSequence("read") ) && action.contains$CharSequence("download") ) {
var suffix=action.contains$CharSequence("read") ? "__read" : "_test";
var osname=os[j];
var ext=osname.equals$O("windows") ? ".exe" : osname.equals$O("osx") ? ".dmg" : ".run";
if (osname.equals$O("osx")) {
for (var k=0; k < this.versions.length; k++) {
if (this.versions[k].equals$O(ver[i])) {
break;
}if (this.versions[k].equals$O("5.1.3")) {
ext=".zip";
break;
}}
}if (osname.equals$O("linux")) {
osname=ver[i].startsWith$S("6") ? "linux-64bit" : "linux-32bit";
if (ver[i].startsWith$S("6.2") || ver[i].startsWith$S("6.3") ) {
osname="linux-x64";
}}var command="Tracker-" + ver[i] + "-" + osname + "-installer" + ext ;
if (ver[i].equals$O("6.0.0") && osname.equals$O(this.OSs[1]) ) {
command="Tracker-" + ver[i] + "-" + osname + "-64bit-installer" + ext ;
} else if (ver[i].startsWith$S("6") && osname.equals$O(this.OSs[1]) ) {
command="Tracker-" + ver[i] + "-" + osname + "-x64-installer" + ext ;
} else if (ver[i].startsWith$S("5.2") && !osname.equals$O(this.OSs[2]) ) {
continue;
} else if (ver[i].startsWith$S("5.3") && !osname.equals$O(this.OSs[2]) ) {
continue;
} else if (ver[i].startsWith$S("5.4") && !osname.equals$O(this.OSs[2]) ) {
continue;
}var result=p$1.send$S$S.apply(this, [this.downloadPHPPath, command + suffix]);
commands+=this.NEW_LINE + command + ": " + result ;
if (action.contains$CharSequence("read")) {
try {
result=result.replaceAll$S$S(",", "");
var n=Integer.parseInt$S(result);
counts+=n;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return "failed to parse " + result;
} else {
throw e;
}
}
}if (osname.contains$CharSequence("linux") && !ver[i].startsWith$S("6") ) {
command="Tracker-" + ver[i] + "-linux-64bit-installer" + ext ;
result=p$1.send$S$S.apply(this, [this.downloadPHPPath, command + suffix]);
commands+=this.NEW_LINE + command + ": " + result ;
if (action.contains$CharSequence("read")) {
try {
result=result.replaceAll$S$S(",", "");
var n=Integer.parseInt$S(result);
counts+=n;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return "failed to parse " + result;
} else {
throw e;
}
}
}}} else {
for (var k=0; k < eng.length; k++) {
var osname=os[j];
if (osname.equals$O("osx")) osname="macosx";
var command="read_" + ver[i] + "_" + osname + "_" + eng[k] ;
if (action.contains$CharSequence("test")) {
command="log_" + ver[i] + "_" + osname + "_" + eng[k] + "test" ;
}var result=p$1.send$S$S.apply(this, [this.launchPHPPath, command]);
commands+=this.NEW_LINE + ver[i] + "_" + osname + "_" + eng[k] + ": " + result ;
if (action.contains$CharSequence("read")) {
try {
result=result.replaceAll$S$S(",", "");
var n=Integer.parseInt$S(result);
counts+=n;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return "failed to parse " + result;
} else {
throw e;
}
}
}}
}}
}
var s=String.valueOf$I(counts);
if (action.contains$CharSequence("test")) {
if (action.contains$CharSequence("launch")) s="launch log attempts";
 else s="download attempts";
}if (ver.length > 1 || os.length > 1  || eng.length > 1 ) {
s+=this.NEW_LINE + commands;
}return s;
}, p$1);

Clazz.newMeth(C$, 'leftJustify$java_awt_Component',  function (c) {
var b=$I$(6).createHorizontalBox$();
b.add$java_awt_Component(c);
b.add$java_awt_Component($I$(6).createHorizontalGlue$());
b.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
return b;
}, p$1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var app=Clazz.new_(C$);
var dim=$I$(16).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - app.getBounds$().width)/2|0);
var y=((dim.height - app.getBounds$().height)/2|0);
app.setLocation$I$I(x, y);
app.setVisible$Z(true);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
