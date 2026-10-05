(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.Tracker','java.net.URL','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.desktop.OSPDesktop','org.opensourcephysics.controls.OSPLog','java.io.File','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.tools.ResourceLoader','javax.swing.JOptionPane','org.opensourcephysics.controls.XML','java.util.ArrayList','ProcessBuilder','org.opensourcephysics.cabrillo.tracker.TActions','Thread','org.opensourcephysics.cabrillo.tracker.deploy.TrackerStarter','java.io.BufferedReader','java.io.InputStreamReader','StringBuilder','org.opensourcephysics.tools.FontSizer','javax.swing.JTextField','java.awt.Color','java.awt.event.MouseAdapter','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.BorderFactory','javax.swing.Box','javax.swing.JFileChooser','org.opensourcephysics.tools.ToolsRes','javax.swing.filechooser.FileFilter','javax.swing.JDialog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Upgrader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['upgradeURL','trackerJarName'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','upgradeDialog','javax.swing.JDialog','downloadLabel','javax.swing.JLabel','+relaunchLabel']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame',  function (tFrame) {
;C$.$init$.apply(this);
this.frame=tFrame;
}, 1);

Clazz.newMeth(C$, 'upgrade$',  function () {
p$1.getUpgradeDialog.apply(this, []);
var failed=Clazz.array(Boolean.TYPE, -1, [false]);
var responseCode=0;
this.upgradeURL=this.getUpgradeURL$();
this.trackerJarName="tracker-" + $I$(1).newerVersion + ".jar" ;
if (this.upgradeURL != null  && $I$(1).trackerHome != null  ) {
var upgradeFile=this.upgradeURL + this.trackerJarName;
try {
var url=Clazz.new_($I$(2,1).c$$S,[upgradeFile]);
var huc=url.openConnection$();
responseCode=huc.getResponseCode$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}if (responseCode != 200) {
failed[0]=true;
} else if ($I$(3).isWindows$()) {
p$1.upgradeWindows$ZA.apply(this, [failed]);
} else if ($I$(3).isMac$()) {
p$1.upgradeOSX$ZA.apply(this, [failed]);
} else if ($I$(3).isLinux$()) {
p$1.upgradeLinux$ZA.apply(this, [failed]);
}if (failed[0]) {
p$1.closeUpgradeDialog.apply(this, []);
var websiteurl="https://" + $I$(1).trackerWebsite;
$I$(4).displayURL$S(websiteurl);
}});

Clazz.newMeth(C$, 'upgradeWindows$ZA',  function (failed) {
var upgradeInstallerName="TrackerUpgrade-" + $I$(1).newerVersion + "-windows-x64-installer.exe" ;
var upgradeInstallerURL=this.upgradeURL + upgradeInstallerName;
var responseCode=0;
try {
var url=Clazz.new_($I$(2,1).c$$S,[upgradeInstallerURL]);
var huc=url.openConnection$();
responseCode=huc.getResponseCode$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (responseCode == 200) {
var downloadDir=$I$(3).getDownloadDir$();
downloadDir=p$1.chooseDownloadDirectory$java_awt_Component$java_io_File.apply(this, [this.frame, downloadDir]);
if (downloadDir == null ) {
return;
}if (!downloadDir.exists$()) {
$I$(5).warning$S("download directory does not exist: " + downloadDir);
failed[0]=true;
} else {
var downloads=downloadDir;
var runner=((P$.Upgrader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Upgrader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var installer=Clazz.new_($I$(6,1).c$$java_io_File$S,[this.$finals$.downloads, this.$finals$.upgradeInstallerName]);
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].downloadLabel.setText$S(($I$(7).getString$S("TTrackBar.Dialog.Relaunch.DownloadLabel.Upgrade.Text") + " " + installer.getPath$() + "." ));
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].relaunchLabel.setText$S(($I$(7).getString$S("TTrackBar.Dialog.Relaunch.RelaunchLabel.Upgrade.Text")));
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.pack$();
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.setLocationRelativeTo$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].frame);
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.setVisible$Z(true);
var attempted=installer.getPath$();
installer=$I$(8).download$S$java_io_File$Z(this.$finals$.upgradeInstallerURL, installer, true);
p$1.closeUpgradeDialog.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], []);
if (installer != null  && installer.exists$() ) {
var ans=$I$(9,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].frame, $I$(7).getString$S("Upgrader.Dialog.Downloaded.Message1") + " " + $I$(10).NEW_LINE + $I$(7).getString$S("Upgrader.Dialog.Downloaded.Message2") + $I$(10).NEW_LINE , $I$(7).getString$S("TTrackBar.Dialog.Download.Title"), 2, 1]);
if (ans != 0) {
return;
}try {
var cmd=Clazz.new_($I$(11,1));
cmd.add$O("cmd");
cmd.add$O("/c");
cmd.add$O(installer.getPath$());
cmd.add$O("--tracker-home");
cmd.add$O($I$(1).trackerHome);
var message="";
for (var next, $next = cmd.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
message+=next + " ";
}
$I$(5).info$S("executing command: " + message);
var builder=Clazz.new_($I$(12,1).c$$java_util_List,[cmd]);
var p=builder.start$();
if (p$1.isAlive$Process.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], [p])) {
$I$(1).preferredTrackerJar=null;
$I$(1).savePreferences$();
$I$(13).exitAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel(null);
return;
}$I$(5).warning$S("failed to launch upgrade installer");
this.$finals$.failed[0]=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(5).warning$S("exception: " + ex);
this.$finals$.failed[0]=true;
} else {
throw ex;
}
}
} else {
$I$(5).warning$S("failed to download upgrade installer");
this.$finals$.failed[0]=true;
}if (this.$finals$.failed[0]) {
p$1.showDownloadFailure$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], [attempted]);
p$1.closeUpgradeDialog.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], []);
var websiteurl="https://" + $I$(1).trackerWebsite;
$I$(4).displayURL$S(websiteurl);
}});
})()
), Clazz.new_(P$.Upgrader$1.$init$,[this, {failed:failed,downloads:downloads,upgradeInstallerURL:upgradeInstallerURL,upgradeInstallerName:upgradeInstallerName}]));
Clazz.new_($I$(14,1).c$$Runnable,[runner]).start$();
}} else {
var ans=$I$(9,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.frame, $I$(7).getString$S("TTrackBar.Dialog.Download.Message1") + " " + $I$(1).trackerHome + "." + $I$(10).NEW_LINE + $I$(7).getString$S("TTrackBar.Dialog.Download.Message2") + $I$(10).NEW_LINE , $I$(7).getString$S("TTrackBar.Dialog.Download.Title"), 2, 1]);
if (ans != 0) {
return;
}var runner=((P$.Upgrader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Upgrader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].downloadLabel.setText$S(($I$(7).getString$S("TTrackBar.Dialog.Relaunch.DownloadLabel.Text") + " " + $I$(1).trackerHome + "." ));
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].relaunchLabel.setText$S(($I$(7).getString$S("TTrackBar.Dialog.Relaunch.RelaunchLabel.Text")));
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.pack$();
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.setLocationRelativeTo$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].frame);
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.setVisible$Z(true);
var jarFile=Clazz.new_([$I$(1).trackerHome, this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].trackerJarName],$I$(6,1).c$$S$S);
var attempted=jarFile.getPath$();
var jarURL=this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeURL + this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].trackerJarName;
jarFile=$I$(8).download$S$java_io_File$Z(jarURL, jarFile, true);
var starterName="Tracker.exe";
var starterURL=this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeURL + starterName;
var responseCode=0;
try {
var url=Clazz.new_($I$(2,1).c$$S,[starterURL]);
var huc=url.openConnection$();
responseCode=huc.getResponseCode$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (responseCode == 200) {
var starterTarget=Clazz.new_([$I$(1).trackerHome, starterName],$I$(6,1).c$$S$S);
$I$(8).download$S$java_io_File$Z(starterURL, starterTarget, true);
}if (jarFile != null  && jarFile.exists$() ) {
var jarPath=jarFile.getAbsolutePath$();
var filenames=Clazz.new_($I$(11,1));
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].frame.saveAllTabs$Z$java_util_function_Function$Runnable$Runnable(false, ((P$.Upgrader$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Upgrader$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$Integer','apply$O'],  function (panelID) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].frame.getTrackerPanelForID$Integer(panelID);
var datafile=trackerPanel.getDataFile$();
if (datafile == null ) {
var path=trackerPanel.openedFromPath;
if (path != null ) {
datafile=Clazz.new_($I$(6,1).c$$S,[path]);
}}if (datafile != null ) {
var fileName=datafile.getAbsolutePath$();
if (!this.$finals$.filenames.contains$O(fileName)) {
this.$finals$.filenames.add$O(fileName);
}}return null;
});
})()
), Clazz.new_(P$.Upgrader$2$1.$init$,[this, {filenames:filenames}])), ((P$.Upgrader$2$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Upgrader$2$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var args=this.$finals$.filenames.isEmpty$() ? null : this.$finals$.filenames.toArray$OA(Clazz.array(String, [0]));
System.setProperty$S$S("PREFERRED_TRACKER_JAR", this.$finals$.jarPath);
System.setProperty$S$S("TRACKER_NEW_VERSION", this.$finals$.jarURL);
$I$(15).relaunch$SA$Z(args, false);
});
})()
), Clazz.new_(P$.Upgrader$2$2.$init$,[this, {jarPath:jarPath,filenames:filenames,jarURL:jarURL}])), ((P$.Upgrader$2$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Upgrader$2$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
p$1.closeUpgradeDialog.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], []);
});
})()
), Clazz.new_(P$.Upgrader$2$3.$init$,[this, null])));
} else {
$I$(5).warning$S("failed to download new version");
this.$finals$.failed[0]=true;
}if (this.$finals$.failed[0]) {
p$1.showDownloadFailure$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], [attempted]);
p$1.closeUpgradeDialog.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], []);
var websiteurl="https://" + $I$(1).trackerWebsite;
$I$(4).displayURL$S(websiteurl);
}});
})()
), Clazz.new_(P$.Upgrader$2.$init$,[this, {failed:failed}]));
Clazz.new_($I$(14,1).c$$Runnable,[runner]).start$();
}}, p$1);

Clazz.newMeth(C$, 'upgradeOSX$ZA',  function (failed) {
var dmgFileName="TrackerUpgrade-" + $I$(1).newerVersion + "-osx-installer.dmg" ;
var dmgURL=this.upgradeURL + dmgFileName;
var responseCode=0;
try {
var url=Clazz.new_($I$(2,1).c$$S,[dmgURL]);
var huc=url.openConnection$();
responseCode=huc.getResponseCode$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (responseCode == 200) {
var downloadDir=$I$(3).getDownloadDir$();
downloadDir=p$1.chooseDownloadDirectory$java_awt_Component$java_io_File.apply(this, [this.frame, downloadDir]);
if (downloadDir == null ) {
return;
}if (!downloadDir.exists$()) {
var parent=downloadDir.getParentFile$();
if (parent != null  && parent.getName$().equals$O(downloadDir.getName$()) ) {
downloadDir=parent;
}}if (!downloadDir.exists$()) {
$I$(5).warning$S("download directory does not exist: " + downloadDir);
failed[0]=true;
} else {
var downloads=downloadDir;
var runner=((P$.Upgrader$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Upgrader$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var dmgFile=Clazz.new_($I$(6,1).c$$java_io_File$S,[this.$finals$.downloads, this.$finals$.dmgFileName]);
var appName="TrackerUpgrade-" + $I$(1).newerVersion + "-osx-installer.app" ;
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].downloadLabel.setText$S(($I$(7).getString$S("TTrackBar.Dialog.Relaunch.DownloadLabel.Upgrade.Text") + " " + dmgFile.getPath$() + "." ));
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].relaunchLabel.setText$S("");
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.pack$();
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.setLocationRelativeTo$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].frame);
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.setVisible$Z(true);
var attempted=dmgFile.getPath$();
dmgFile=$I$(8).download$S$java_io_File$Z(this.$finals$.dmgURL, dmgFile, true);
if (dmgFile != null  && dmgFile.exists$() ) {
var path=dmgFile.getPath$();
var cmd=Clazz.new_($I$(11,1));
cmd.add$O("hdiutil");
cmd.add$O("attach");
cmd.add$O("-noverify");
cmd.add$O("-autoopen");
cmd.add$O(path);
try {
var builder=Clazz.new_($I$(12,1).c$$java_util_List,[cmd]);
var p=builder.start$();
var reader=Clazz.new_([Clazz.new_([p.getInputStream$()],$I$(17,1).c$$java_io_InputStream)],$I$(16,1).c$$java_io_Reader);
var blder=Clazz.new_($I$(18,1));
var line=null;
while ((line=reader.readLine$()) != null ){
blder.append$S(line);
}
var output=blder.toString();
var chunks=output.split$S("\t");
p.waitFor$();
p$1.closeUpgradeDialog.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], []);
if (chunks.length > 1) {
var volume=chunks[chunks.length - 1];
var installer=Clazz.new_($I$(6,1).c$$S$S,[volume, appName]);
cmd=Clazz.new_($I$(11,1));
cmd.add$O("open");
cmd.add$O(installer.getCanonicalPath$());
try {
builder=Clazz.new_($I$(12,1).c$$java_util_List,[cmd]);
p=builder.start$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(5).warning$S("exception: " + ex);
this.$finals$.failed[0]=true;
} else {
throw ex;
}
}
p.waitFor$();
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].frame.getSelectedPanel$();
$I$(13).exitAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
return;
}$I$(5).warning$S("failed to mount upgrade installer");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(5).warning$S("exception: " + ex);
} else {
throw ex;
}
}
this.$finals$.failed[0]=true;
} else {
$I$(5).warning$S("failed to download upgrade installer");
this.$finals$.failed[0]=true;
}if (this.$finals$.failed[0]) {
p$1.showDownloadFailure$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], [attempted]);
p$1.closeUpgradeDialog.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], []);
var websiteurl="https://" + $I$(1).trackerWebsite;
$I$(4).displayURL$S(websiteurl);
}});
})()
), Clazz.new_(P$.Upgrader$3.$init$,[this, {failed:failed,downloads:downloads,dmgURL:dmgURL,dmgFileName:dmgFileName}]));
Clazz.new_($I$(14,1).c$$Runnable,[runner]).start$();
}} else {
$I$(5).warning$S("no upgrade installer found on server");
failed[0]=true;
}}, p$1);

Clazz.newMeth(C$, 'upgradeLinux$ZA',  function (failed) {
var runFileName="TrackerUpgrade-" + $I$(1).newerVersion + "-linux-x64-installer.run" ;
var fileURL=this.upgradeURL + runFileName;
var responseCode=0;
try {
var url=Clazz.new_($I$(2,1).c$$S,[fileURL]);
var huc=url.openConnection$();
responseCode=huc.getResponseCode$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (responseCode == 200) {
var downloadDir=$I$(3).getDownloadDir$();
downloadDir=p$1.chooseDownloadDirectory$java_awt_Component$java_io_File.apply(this, [this.frame, downloadDir]);
if (downloadDir == null ) {
return;
}if (!downloadDir.exists$()) {
$I$(5).warning$S("download directory does not exist: " + downloadDir);
failed[0]=true;
} else {
var downloads=downloadDir;
var runner=((P$.Upgrader$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Upgrader$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].downloadLabel.setText$S(($I$(7).getString$S("TTrackBar.Dialog.Relaunch.DownloadLabel.Upgrade.Text") + " " + this.$finals$.downloads.getPath$() + "/" + this.$finals$.runFileName + "." ));
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].relaunchLabel.setText$S("");
$I$(19,"setFonts$O$I",[this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog, $I$(19).getLevel$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.pack$();
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.setLocationRelativeTo$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].frame);
this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].upgradeDialog.setVisible$Z(true);
var installer=Clazz.new_($I$(6,1).c$$java_io_File$S,[this.$finals$.downloads, this.$finals$.runFileName]);
var attempted=installer.getPath$();
installer=$I$(8).download$S$java_io_File$Z(this.$finals$.fileURL, installer, true);
p$1.closeUpgradeDialog.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], []);
if (installer != null  && installer.exists$() ) {
installer.setExecutable$Z$Z(true, false);
var field=Clazz.new_($I$(20,1).c$$I,[10]);
field.setBackground$java_awt_Color($I$(21).white);
field.setEditable$Z(false);
field.addMouseListener$java_awt_event_MouseListener(((P$.Upgrader$4$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Upgrader$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.$finals$.field.selectAll$();
});
})()
), Clazz.new_($I$(22,1),[this, {field:field}],P$.Upgrader$4$1)));
var cmd="sudo " + installer.getPath$();
cmd+=" --tracker-home " + $I$(1).trackerHome;
$I$(5).info$S("execution command: " + cmd);
field.setText$S(cmd);
var panel=Clazz.new_([Clazz.new_($I$(24,1))],$I$(23,1).c$$java_awt_LayoutManager);
var label1=Clazz.new_([$I$(7).getString$S("Upgrader.Dialog.Downloaded.Message1")],$I$(25,1).c$$S);
label1.setBorder$javax_swing_border_Border($I$(26).createEmptyBorder$I$I$I$I(0, 0, 0, 4));
var label2=Clazz.new_([$I$(7).getString$S("Upgrader.Dialog.Downloaded.Linux.Message2")],$I$(25,1).c$$S);
label2.setBorder$javax_swing_border_Border($I$(26).createEmptyBorder$I$I$I$I(4, 0, 10, 4));
var label3=Clazz.new_([$I$(7).getString$S("Upgrader.Dialog.Downloaded.Linux.Message3")],$I$(25,1).c$$S);
label3.setBorder$javax_swing_border_Border($I$(26).createEmptyBorder$I$I$I$I(10, 0, 10, 4));
var box=$I$(27).createVerticalBox$();
box.add$java_awt_Component(label1);
box.add$java_awt_Component(label2);
box.add$java_awt_Component(field);
box.add$java_awt_Component(label3);
panel.add$java_awt_Component$O(box, "North");
var ans=$I$(9,"showConfirmDialog$java_awt_Component$O$S$I$I",[this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].frame, panel, $I$(7).getString$S("TTrackBar.Dialog.Download.Title"), 2, 1]);
if (ans != 0) {
return;
}var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'].frame.getSelectedPanel$();
$I$(13).exitAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
return;
}$I$(5).warning$S("failed to download upgrade installer");
this.$finals$.failed[0]=true;
if (this.$finals$.failed[0]) {
p$1.showDownloadFailure$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], [attempted]);
p$1.closeUpgradeDialog.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Upgrader'], []);
var websiteurl="https://" + $I$(1).trackerWebsite;
$I$(4).displayURL$S(websiteurl);
}});
})()
), Clazz.new_(P$.Upgrader$4.$init$,[this, {runFileName:runFileName,failed:failed,downloads:downloads,fileURL:fileURL}]));
Clazz.new_($I$(14,1).c$$Runnable,[runner]).start$();
}} else {
$I$(5).warning$S("no upgrade installer found on server");
failed[0]=true;
}}, p$1);

Clazz.newMeth(C$, 'closeUpgradeDialog',  function () {
if (this.upgradeDialog != null ) {
this.upgradeDialog.setVisible$Z(false);
this.upgradeDialog.dispose$();
this.upgradeDialog=null;
}}, p$1);

Clazz.newMeth(C$, 'chooseDownloadDirectory$java_awt_Component$java_io_File',  function (parent, likely) {
var chooser=((P$.Upgrader$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Upgrader$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JFileChooser'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'approveSelection$',  function () {
if (this.getSelectedFile$().isFile$()) {
return;
} else C$.superclazz.prototype.approveSelection$.apply(this, []);
});
})()
), Clazz.new_($I$(28,1),[this, null],P$.Upgrader$5));
chooser.setDialogTitle$S($I$(7).getString$S("TTrackBar.Chooser.DownloadDirectory"));
chooser.setFileSelectionMode$I(1);
var folderFilter=((P$.Upgrader$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Upgrader$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) return false;
if (f.getName$().endsWith$S(".app")) return false;
return f.isDirectory$();
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(29).getString$S("LibraryTreePanel.FolderFileFilter.Description");
});
})()
), Clazz.new_($I$(30,1),[this, null],P$.Upgrader$6));
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(folderFilter);
chooser.setCurrentDirectory$java_io_File(Clazz.new_([likely.getParent$()],$I$(6,1).c$$S));
chooser.setSelectedFile$java_io_File(likely);
if ($I$(3).isMac$()) {
chooser.updateUI$();
}$I$(19,"setFonts$O$I",[chooser, $I$(19).getLevel$()]);
var result=chooser.showDialog$java_awt_Component$S(parent, $I$(7).getString$S("Dialog.Button.OK"));
if (result == 0) {
return chooser.getSelectedFile$();
}return null;
}, p$1);

Clazz.newMeth(C$, 'getUpgradeURL$',  function () {
return "https://opensourcephysics.github.io/tracker-website/installers/upgrade/";
});

Clazz.newMeth(C$, 'getUpgradeDialog',  function () {
if (this.upgradeDialog == null ) {
this.upgradeDialog=Clazz.new_($I$(31,1).c$$java_awt_Frame$Z,[this.frame, false]);
var panel=Clazz.new_($I$(23,1));
panel.setBorder$javax_swing_border_Border($I$(26).createEtchedBorder$());
this.upgradeDialog.setContentPane$java_awt_Container(panel);
this.upgradeDialog.setTitle$S($I$(7).getString$S("TTrackBar.Dialog.Relaunch.Title.Text"));
var box=$I$(27).createVerticalBox$();
this.upgradeDialog.getContentPane$().add$java_awt_Component(box);
this.downloadLabel=Clazz.new_($I$(25,1));
this.downloadLabel.setBorder$javax_swing_border_Border($I$(26).createEmptyBorder$I$I$I$I(10, 6, 6, 6));
box.add$java_awt_Component(this.downloadLabel);
this.relaunchLabel=Clazz.new_($I$(25,1));
this.relaunchLabel.setBorder$javax_swing_border_Border($I$(26).createEmptyBorder$I$I$I$I(6, 6, 16, 6));
}return this.upgradeDialog;
}, p$1);

Clazz.newMeth(C$, 'showDownloadFailure$S',  function (target) {
var message=$I$(7).getString$S("Upgrader.Dialog.DownloadFailed.Message") + " " + target ;
$I$(9,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, message, $I$(7).getString$S("Upgrader.Dialog.DownloadFailed.Title"), 0]);
}, p$1);

Clazz.newMeth(C$, 'isAlive$Process',  function (process) {
try {
process.exitValue$();
return false;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return true;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
