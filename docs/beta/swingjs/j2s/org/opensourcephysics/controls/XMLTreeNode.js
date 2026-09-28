(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "XMLTreeNode", null, 'javax.swing.tree.DefaultMutableTreeNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inspectable=false;
},1);

C$.$fields$=[['Z',['inspectable'],'O',['prop','org.opensourcephysics.controls.XMLProperty']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLProperty',  function (property) {
Clazz.super_(C$, this);
this.prop=property;
this.setUserObject$O(this);
var it=(Clazz.instanceOf(property, "org.opensourcephysics.controls.XMLControl") ? (property).getPropsRaw$() : property.getPropertyContent$()).iterator$();
while (it.hasNext$()){
var next=it.next$();
if (Clazz.instanceOf(next, "org.opensourcephysics.controls.XMLProperty")) {
var prop=next;
var content=prop.getPropertyContent$();
if (content.size$() == 1) {
next=content.get$I(0);
if (Clazz.instanceOf(next, "org.opensourcephysics.controls.XMLControl")) {
prop=next;
}}this.add$javax_swing_tree_MutableTreeNode(Clazz.new_(C$.c$$org_opensourcephysics_controls_XMLProperty,[prop]));
}}
if (this.prop.getPropertyType$() == 4) {
var type=this.prop.getPropertyClass$();
if (type == null ) {
return;
}while (type.getComponentType$() != null ){
type=type.getComponentType$();
}
if (type === Double.TYPE  || type === Integer.TYPE  ) {
var proper=this.prop;
var parent=proper.getParentProperty$();
while (!(Clazz.instanceOf(parent, "org.opensourcephysics.controls.XMLControl"))){
proper=parent;
parent=parent.getParentProperty$();
}
type=proper.getPropertyClass$();
var i=0;
while (type.getComponentType$() != null ){
type=type.getComponentType$();
++i;
}
if (i <= 3) {
this.inspectable=true;
}}}}, 1);

Clazz.newMeth(C$, 'getProperty$',  function () {
return this.prop;
});

Clazz.newMeth(C$, 'isInspectable$',  function () {
return this.inspectable;
});

Clazz.newMeth(C$, 'toString',  function () {
if (Clazz.instanceOf(this.prop, "org.opensourcephysics.controls.XMLControl")) {
var control=this.prop;
var name=control.getString$S("name");
if ((name != null ) && !name.equals$O("") ) {
return name;
}}return this.prop.getPropertyName$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
