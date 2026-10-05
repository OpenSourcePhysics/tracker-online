(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'org.opensourcephysics.controls.OSPCombo','javax.swing.AbstractAction','javax.swing.JMenuItem',['org.opensourcephysics.controls.OSPCombo','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPCombo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPopupMenu');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['selected','row','column'],'O',['items','String[]']]]

Clazz.newMeth(C$, 'c$$SA$I',  function (choices, initial) {
Clazz.super_(C$, this);
this.items=choices;
this.selected=initial;
}, 1);

Clazz.newMeth(C$, 'c$$SA',  function (choices) {
C$.c$$SA$I.apply(this, [choices, 0]);
}, 1);

Clazz.newMeth(C$, 'getSelectedIndex$',  function () {
return this.selected;
});

Clazz.newMeth(C$, 'getItems$',  function () {
return this.items;
});

Clazz.newMeth(C$, 'showPopup$javax_swing_JTextField',  function (display) {
var selectAction=((P$.OSPCombo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPCombo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var prev=this.b$['org.opensourcephysics.controls.OSPCombo'].selected;
this.b$['org.opensourcephysics.controls.OSPCombo'].selected=Integer.parseInt$S(e.getActionCommand$());
this.$finals$.display.setText$S(this.b$['org.opensourcephysics.controls.OSPCombo'].items[this.b$['org.opensourcephysics.controls.OSPCombo'].selected]);
this.b$['org.opensourcephysics.controls.OSPCombo'].firePropertyChange$S$I$I.apply(this.b$['org.opensourcephysics.controls.OSPCombo'], ["index", prev, -1]);
});
})()
), Clazz.new_($I$(2,1),[this, {display:display}],P$.OSPCombo$1));
this.removeAll$();
for (var i=0; i < this.items.length; i++) {
var next=this.items[i].toString();
var item=Clazz.new_($I$(3,1).c$$S,[next]);
item.setFont$java_awt_Font(display.getFont$());
item.addActionListener$java_awt_event_ActionListener(selectAction);
item.setActionCommand$S(String.valueOf$I(i));
this.add$javax_swing_JMenuItem(item);
}
var popupHeight=8 + this.getComponentCount$() * display.getHeight$();
this.setPopupSize$I$I(display.getWidth$(), popupHeight);
this.show$java_awt_Component$I$I(display, 0, display.getHeight$());
});

Clazz.newMeth(C$, 'toString',  function () {
return this.items[this.selected];
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPCombo, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var combo=obj;
control.setValue$S$O("items", combo.items);
control.setValue$S$I("index", combo.selected);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var items=control.getObject$S("items");
var index=control.getInt$S("index");
return Clazz.new_($I$(1,1).c$$SA$I,[items, index]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
