(function(){var P$=Clazz.newPackage("test"),p$1={},I$=[[0,'java.awt.Dimension','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.OSPLog','javajs.async.Assets','javax.swing.ImageIcon','javax.swing.JFrame',['test.AssetsTest','.IconPanel'],'java.awt.BorderLayout','java.util.ArrayList','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AssetsTest", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'test.Test_');
C$.$classes$=[['IconPanel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
if (!$I$(2).isJS) {
System.out.println$S("Assets are JavaScript only now.");
System.exit$I(0);
}var imageName="org/opensourcephysics/resources/cover.gif";
var url=$I$(4).getURLFromPath$S$Z(imageName, true);
if (url == null ) {
$I$(3).debug$S(imageName + " was not found in an asset ZIP file");
url=$I$(4).getURLFromPath$S$Z(imageName, false);
}System.out.println$S("url=" + url);
if (url != null ) {
var icon=Clazz.new_($I$(5,1).c$$java_net_URL,[url]);
var frame=Clazz.new_($I$(6,1).c$$S,["Asset Loader Example"]);
var imagePanel=Clazz.new_($I$(7,1).c$$javax_swing_ImageIcon,[this, null, icon]);
imagePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
frame.add$java_awt_Component(imagePanel);
frame.setDefaultCloseOperation$I(3);
frame.setSize$I$I(400, 400);
frame.setVisible$Z(true);
}this.getFileList$S("osp-assets.zip");
var bytes=$I$(4).getURLContents$java_net_URL(url);
var magic= String.instantialize(Clazz.array(Byte.TYPE, -1, [bytes[0], bytes[1], bytes[2], bytes[3]]));
$I$(3).debug$S("\n\n" + magic + " " + bytes.length );
bytes=$I$(4).getAssetBytes$S(imageName);
Clazz.assert(C$, this, function(){return (bytes.length == 30189)});
bytes=$I$(4).getAssetBytes$S("org/opensourcephysics/resources/display/drawing_tools.xml");
Clazz.assert(C$, this, function(){return (bytes.length == 964)});
url=$I$(4).getURLFromPath$S("test/spacetest.zip!/Car in a loop with friction.trk");
bytes=$I$(4).getURLContents$java_net_URL(url);
Clazz.assert(C$, this, function(){return (bytes.length == 50356)});
System.out.println$S("AssetsTest OK");
}, 1);

Clazz.newMeth(C$, 'getFileList$S',  function (zipPath) {
var map=$I$(4).getZipContents$S(zipPath);
if (map == null ) {
System.err.println$S("Map is null: " + zipPath);
return;
}var list=Clazz.new_($I$(9,1));
list.add$O("");
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var val=entry.getValue$();
list.add$O(p$1.rightFill$S$I.apply(this, [val.getName$(), 70]) + p$1.leftFill$S$I.apply(this, ["" + Long.$s(val.getSize$()), 8]) + " bytes" );
}
var s=list.toArray$OA(Clazz.array(String, [list.size$()]));
$I$(10).sort$OA(s);
$I$(3,"debug$S",[$I$(10).toString$OA(s).replace$CharSequence$CharSequence(",", "\n").replaceAll$S$S("[\\[\\]]", "")]);
});

Clazz.newMeth(C$, 'leftFill$S$I',  function (name, n) {
name="                                                                      " + name;
return name.substring$I(name.length$() - n);
}, p$1);

Clazz.newMeth(C$, 'rightFill$S$I',  function (name, n) {
return (name + "                                                                      ").substring$I$I(0, n);
}, p$1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
{
if ($I$(2).isJS) {
$I$(3,"debug$S",["assets=" + $I$(4).getInstance$().toString()]);
}};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AssetsTest, "IconPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['icon','javax.swing.ImageIcon']]]

Clazz.newMeth(C$, 'c$$javax_swing_ImageIcon',  function (icon) {
Clazz.super_(C$, this);
this.icon=icon;
this.setPreferredSize$java_awt_Dimension(Clazz.new_([icon.getIconWidth$(), icon.getIconHeight$()],$I$(1,1).c$$I$I));
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
this.icon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(this, g, 10, 10);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
