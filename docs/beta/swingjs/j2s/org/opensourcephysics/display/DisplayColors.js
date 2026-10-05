(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.util.Hashtable','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DisplayColors");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['phaseColors','java.awt.Color[]','lineColors','java.util.Dictionary','+markerColors']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPhaseToColorArray$',  function () {
if (C$.phaseColors == null ) {
C$.phaseColors=Clazz.array($I$(2), [256]);
for (var i=0; i < 256; i++) {
var val=Math.abs(Math.sin(3.141592653589793 * i / 255));
var b=((255 * val * val )|0);
val=Math.abs(Math.sin(3.141592653589793 * i / 255 + 1.0471975511965976));
var g=((255 * val * val * Math.sqrt(val) )|0);
val=Math.abs(Math.sin(3.141592653589793 * i / 255 + 2.0943951023931953));
var r=((255 * val * val )|0);
C$.phaseColors[i]=Clazz.new_($I$(2,1).c$$I$I$I,[r, g, b]);
}
}return C$.phaseColors;
}, 1);

Clazz.newMeth(C$, 'phaseToColor$D',  function (phi) {
var index=((127.5 * (1 + phi / 3.141592653589793))|0);
index=index % 255;
if (C$.phaseColors == null ) {
return C$.getPhaseToColorArray$()[index];
}return C$.phaseColors[index];
}, 1);

Clazz.newMeth(C$, 'randomColor$',  function () {
return Clazz.new_([((Math.random() * 255)|0), ((Math.random() * 255)|0), ((Math.random() * 255)|0)],$I$(2,1).c$$I$I$I);
}, 1);

Clazz.newMeth(C$, 'getLineColor$I',  function (index) {
var color=C$.lineColors.get$O(Integer.valueOf$I(index));
if (color == null ) {
var h=((index * 3.141592653589793 / 12)) % 1;
var s=1.0;
var b=0.5;
color=$I$(2).getHSBColor$F$F$F(h, s, b);
C$.lineColors.put$O$O(Integer.valueOf$I(index), color);
}return color;
}, 1);

Clazz.newMeth(C$, 'getMarkerColor$I',  function (index) {
var color=C$.markerColors.get$O(Integer.valueOf$I(index));
if (color == null ) {
color=C$.getLineColor$I(index).brighter$().brighter$();
C$.markerColors.put$O$O(Integer.valueOf$I(index), color);
}return color;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.phaseColors=null;
C$.lineColors=Clazz.new_($I$(1,1));
C$.markerColors=Clazz.new_($I$(1,1));
{
C$.lineColors.put$O$O(Integer.valueOf$I(0), $I$(2).RED);
C$.lineColors.put$O$O(Integer.valueOf$I(1), $I$(2).GREEN.darker$());
C$.lineColors.put$O$O(Integer.valueOf$I(2), $I$(2).BLUE);
C$.lineColors.put$O$O(Integer.valueOf$I(3), $I$(2).YELLOW.darker$());
C$.lineColors.put$O$O(Integer.valueOf$I(4), $I$(2).CYAN.darker$());
C$.lineColors.put$O$O(Integer.valueOf$I(5), $I$(2).MAGENTA);
C$.markerColors.put$O$O(Integer.valueOf$I(0), $I$(2).RED);
C$.markerColors.put$O$O(Integer.valueOf$I(1), $I$(2).GREEN.darker$());
C$.markerColors.put$O$O(Integer.valueOf$I(2), $I$(2).BLUE);
C$.markerColors.put$O$O(Integer.valueOf$I(3), $I$(2).YELLOW.darker$());
C$.markerColors.put$O$O(Integer.valueOf$I(4), $I$(2).CYAN.darker$());
C$.markerColors.put$O$O(Integer.valueOf$I(5), $I$(2).MAGENTA);
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
