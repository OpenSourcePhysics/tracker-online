(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'javax.swing.BorderFactory','org.opensourcephysics.tools.FontSizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackRenderer", null, 'javax.swing.JLabel', 'javax.swing.ListCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(true);
this.setHorizontalAlignment$I(2);
this.setVerticalAlignment$I(0);
this.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(1, 4, 1, 0));
}, 1);

Clazz.newMeth(C$, 'getListCellRendererComponent$javax_swing_JList$O$I$Z$Z',  function (list, value, index, isSelected, cellHasFocus) {
if (isSelected) {
this.setBackground$java_awt_Color(list.getSelectionBackground$());
this.setForeground$java_awt_Color(list.getSelectionForeground$());
} else {
this.setBackground$java_awt_Color(list.getBackground$());
this.setForeground$java_awt_Color(list.getForeground$());
}if (value != null ) {
var array=value;
this.setText$S(array[1]);
this.setIcon$javax_swing_Icon(array[0]);
$I$(2).setFonts$java_awt_Container(this);
}return this;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
