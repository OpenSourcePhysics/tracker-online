(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.swing"),I$=[[0,'java.text.ParsePosition','org.opensourcephysics.numerics.SuryonoParser','javax.swing.JTextField','org.opensourcephysics.ejs.control.swing.ControlNumberField','org.opensourcephysics.ejs.control.value.DoubleValue',['org.opensourcephysics.ejs.control.swing.ControlParsedNumberField','.MyActionListener'],['org.opensourcephysics.ejs.control.swing.ControlNumberField','.MyKeyListener']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlParsedNumberField", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.ejs.control.swing.ControlNumberField');
C$.$classes$=[['MyActionListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.parser=Clazz.new_($I$(2,1).c$$I,[0]);
},1);

C$.$fields$=[['O',['parser','org.opensourcephysics.numerics.SuryonoParser']]]

Clazz.newMeth(C$, 'c$$O',  function (_visual) {
;C$.superclazz.c$$O.apply(this,[_visual]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVisual$O',  function (_visual) {
if (Clazz.instanceOf(_visual, "javax.swing.JTextField")) {
this.textfield=_visual;
} else {
this.textfield=Clazz.new_($I$(3,1));
}this.format=$I$(4).defaultFormat;
this.defaultValue=0.0;
this.defaultValueSet=false;
this.internalValue=Clazz.new_($I$(5,1).c$$D,[this.defaultValue]);
this.textfield.setText$S(this.format.format$D(this.internalValue.value));
this.textfield.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(6,1),[this, null]));
this.textfield.addKeyListener$java_awt_event_KeyListener(Clazz.new_($I$(7,1),[this, null]));
this.decideColors$java_awt_Color(this.textfield.getBackground$());
return this.textfield;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ControlParsedNumberField, "MyActionListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (_e) {
this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlParsedNumberField'].defaultColor]);
var text=this.b$['org.opensourcephysics.ejs.control.swing.ControlParsedNumberField'].textfield.getText$().trim$();
try {
var parsePosition=Clazz.new_($I$(1,1).c$$I,[0]);
this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].setInternalValue$D.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlParsedNumberField'].format.parse$S$java_text_ParsePosition(text, parsePosition).doubleValue$()]);
if (text.length$() == parsePosition.getIndex$()) {
return;
}} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
try {
this.b$['org.opensourcephysics.ejs.control.swing.ControlParsedNumberField'].parser.parse$S(text);
this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].setInternalValue$D.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlParsedNumberField'].parser.evaluate$()]);
return;
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.opensourcephysics.numerics.ParserException")){
this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'].setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.ejs.control.swing.ControlNumberField'], [this.b$['org.opensourcephysics.ejs.control.swing.ControlParsedNumberField'].errorColor]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
