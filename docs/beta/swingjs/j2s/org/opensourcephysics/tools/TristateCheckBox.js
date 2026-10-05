(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.tools.TristateCheckBox',['org.opensourcephysics.tools.TristateCheckBox','.State'],'java.awt.event.MouseAdapter','javax.swing.plaf.ActionMapUIResource','javax.swing.AbstractAction','javax.swing.SwingUtilities',['org.opensourcephysics.tools.TristateCheckBox','.TristateDecorator']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TristateCheckBox", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JCheckBox');
C$.$classes$=[['State',9],['TristateDecorator',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$model','org.opensourcephysics.tools.TristateCheckBox.TristateDecorator']]
,['O',['NOT_SELECTED','org.opensourcephysics.tools.TristateCheckBox.State','+SELECTED','+PART_SELECTED']]]

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon$org_opensourcephysics_tools_TristateCheckBox_State',  function (text, icon, initial) {
;C$.superclazz.c$$S$javax_swing_Icon.apply(this,[text, icon]);C$.$init$.apply(this);
C$.superclazz.prototype.addMouseListener$java_awt_event_MouseListener.apply(this, [((P$.TristateCheckBox$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TristateCheckBox$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['javax.swing.JComponent'].grabFocus$.apply(this.b$['javax.swing.JComponent'], []);
p$1.nextState.apply(this.b$['org.opensourcephysics.tools.TristateCheckBox'].$model, []);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.TristateCheckBox$1))]);
var map=Clazz.new_($I$(4,1));
map.put$O$javax_swing_Action("pressed", ((P$.TristateCheckBox$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TristateCheckBox$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['javax.swing.JComponent'].grabFocus$.apply(this.b$['javax.swing.JComponent'], []);
p$1.nextState.apply(this.b$['org.opensourcephysics.tools.TristateCheckBox'].$model, []);
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.TristateCheckBox$2)));
map.put$O$javax_swing_Action("released", null);
$I$(6).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this, map);
this.$model=Clazz.new_([this, null, this.getModel$()],$I$(7,1).c$$javax_swing_ButtonModel);
this.setModel$javax_swing_ButtonModel(this.$model);
this.setState$org_opensourcephysics_tools_TristateCheckBox_State(initial);
}, 1);

Clazz.newMeth(C$, 'c$$S$org_opensourcephysics_tools_TristateCheckBox_State',  function (text, initial) {
C$.c$$S$javax_swing_Icon$org_opensourcephysics_tools_TristateCheckBox_State.apply(this, [text, null, initial]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$S$org_opensourcephysics_tools_TristateCheckBox_State.apply(this, [text, C$.PART_SELECTED]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'addMouseListener$java_awt_event_MouseListener',  function (l) {
});

Clazz.newMeth(C$, 'setState$org_opensourcephysics_tools_TristateCheckBox_State',  function (state) {
p$1.setState$org_opensourcephysics_tools_TristateCheckBox_State.apply(this.$model, [state]);
});

Clazz.newMeth(C$, 'getState$',  function () {
return p$1.getState.apply(this.$model, []);
});

Clazz.newMeth(C$, 'setSelected$Z',  function (b) {
if (b) {
this.setState$org_opensourcephysics_tools_TristateCheckBox_State(C$.SELECTED);
} else {
this.setState$org_opensourcephysics_tools_TristateCheckBox_State(C$.NOT_SELECTED);
}});

C$.$static$=function(){C$.$static$=0;
C$.NOT_SELECTED=Clazz.new_($I$(2,1));
C$.SELECTED=Clazz.new_($I$(2,1));
C$.PART_SELECTED=Clazz.new_($I$(2,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TristateCheckBox, "State", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TristateCheckBox, "TristateDecorator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.ButtonModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['other','javax.swing.ButtonModel']]]

Clazz.newMeth(C$, 'c$$javax_swing_ButtonModel',  function (other) {
;C$.$init$.apply(this);
this.other=other;
}, 1);

Clazz.newMeth(C$, 'setState$org_opensourcephysics_tools_TristateCheckBox_State',  function (state) {
if (state === $I$(1).NOT_SELECTED ) {
this.other.setArmed$Z(false);
this.setPressed$Z(false);
this.setSelected$Z(false);
} else if (state === $I$(1).SELECTED ) {
this.other.setArmed$Z(false);
this.setPressed$Z(false);
this.setSelected$Z(true);
} else {
this.other.setArmed$Z(true);
this.setPressed$Z(true);
this.setSelected$Z(true);
}}, p$1);

Clazz.newMeth(C$, 'getState',  function () {
if (this.isSelected$() && !this.isArmed$() ) {
return $I$(1).SELECTED;
} else if (this.isSelected$() && this.isArmed$() ) {
return $I$(1).PART_SELECTED;
} else {
return $I$(1).NOT_SELECTED;
}}, p$1);

Clazz.newMeth(C$, 'nextState',  function () {
var current=p$1.getState.apply(this, []);
if (current === $I$(1).NOT_SELECTED ) {
p$1.setState$org_opensourcephysics_tools_TristateCheckBox_State.apply(this, [$I$(1).SELECTED]);
} else if (current === $I$(1).SELECTED ) {
p$1.setState$org_opensourcephysics_tools_TristateCheckBox_State.apply(this, [$I$(1).PART_SELECTED]);
} else if (current === $I$(1).PART_SELECTED ) {
p$1.setState$org_opensourcephysics_tools_TristateCheckBox_State.apply(this, [$I$(1).NOT_SELECTED]);
}}, p$1);

Clazz.newMeth(C$, 'setArmed$Z',  function (b) {
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
this.b$['java.awt.Component'].setFocusable$Z.apply(this.b$['java.awt.Component'], [b]);
this.other.setEnabled$Z(b);
});

Clazz.newMeth(C$, 'isArmed$',  function () {
return this.other.isArmed$();
});

Clazz.newMeth(C$, 'isSelected$',  function () {
return this.other.isSelected$();
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.other.isEnabled$();
});

Clazz.newMeth(C$, 'isPressed$',  function () {
return this.other.isPressed$();
});

Clazz.newMeth(C$, 'isRollover$',  function () {
return this.other.isRollover$();
});

Clazz.newMeth(C$, 'setSelected$Z',  function (b) {
this.other.setSelected$Z(b);
});

Clazz.newMeth(C$, 'setPressed$Z',  function (b) {
this.other.setPressed$Z(b);
});

Clazz.newMeth(C$, 'setRollover$Z',  function (b) {
this.other.setRollover$Z(b);
});

Clazz.newMeth(C$, 'setMnemonic$I',  function (key) {
this.other.setMnemonic$I(key);
});

Clazz.newMeth(C$, 'getMnemonic$',  function () {
return this.other.getMnemonic$();
});

Clazz.newMeth(C$, 'setActionCommand$S',  function (s) {
this.other.setActionCommand$S(s);
});

Clazz.newMeth(C$, 'getActionCommand$',  function () {
return this.other.getActionCommand$();
});

Clazz.newMeth(C$, 'setGroup$javax_swing_ButtonGroup',  function (group) {
this.other.setGroup$javax_swing_ButtonGroup(group);
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (l) {
this.other.addActionListener$java_awt_event_ActionListener(l);
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener',  function (l) {
this.other.removeActionListener$java_awt_event_ActionListener(l);
});

Clazz.newMeth(C$, 'addItemListener$java_awt_event_ItemListener',  function (l) {
this.other.addItemListener$java_awt_event_ItemListener(l);
});

Clazz.newMeth(C$, 'removeItemListener$java_awt_event_ItemListener',  function (l) {
this.other.removeItemListener$java_awt_event_ItemListener(l);
});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.other.addChangeListener$javax_swing_event_ChangeListener(l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.other.removeChangeListener$javax_swing_event_ChangeListener(l);
});

Clazz.newMeth(C$, 'getSelectedObjects$',  function () {
return this.other.getSelectedObjects$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
