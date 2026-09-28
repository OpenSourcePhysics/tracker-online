(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'java.util.ArrayList','org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.XMLProperty','java.lang.reflect.Array','org.opensourcephysics.controls.XMLControl','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLPropertyElement", null, 'org.opensourcephysics.controls.XMLNode', 'org.opensourcephysics.controls.XMLProperty');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.content=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['writeNullFinalElement'],'O',['content','java.util.List']]
,['Z',['defaultWriteNullFinalArrayElements']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLProperty',  function (mother) {
Clazz.super_(C$, this);
this.parent=mother;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLProperty$S$I$O',  function (mother, propertyName, propertyType, value) {
C$.c$$org_opensourcephysics_controls_XMLProperty$S$I$O$Z.apply(this, [mother, propertyName, propertyType, value, C$.defaultWriteNullFinalArrayElements]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_controls_XMLProperty$S$I$O$Z',  function (mother, propertyName, propertyType, value, writeNullFinalArrayElement) {
C$.c$$org_opensourcephysics_controls_XMLProperty.apply(this, [mother]);
this.name=propertyName;
this.type=propertyType;
this.writeNullFinalElement=writeNullFinalArrayElement;
switch (this.type) {
case 3:
if ($I$(2).requiresCDATA$S(value)) {
this.content.add$O("<![CDATA[" + value + "]]>" );
} else {
this.content.add$O(value.toString());
}break;
case 0:
case 1:
case 2:
this.content.add$O(value.toString());
break;
case 6:
if (value == null ) {
this.content.add$O("null");
} else {
this.className=value.getClass$().getName$();
var control=Clazz.new_($I$(3,1).c$$org_opensourcephysics_controls_XMLProperty,[this]);
control.saveObject$O(value);
this.content.add$O(control);
}break;
case 5:
this.className=value.getClass$().getName$();
var it=(value).iterator$();
while (it.hasNext$()){
var next=it.next$();
var type=$I$(4).getDataType$O(next);
if (type != -1) {
this.content.add$O(Clazz.new_(C$.c$$org_opensourcephysics_controls_XMLProperty$S$I$O$Z,[this, "item", type, next, this.writeNullFinalElement]));
}}
break;
case 7:
this.className="[D";
this.content.add$O(Clazz.new_(C$.c$$org_opensourcephysics_controls_XMLProperty$S$I$O$Z,[this, "array", 3, (value).toString(), this.writeNullFinalElement]));
break;
case 4:
this.className=value.getClass$().getName$();
var baseType=value.getClass$().getComponentType$();
var array=value;
var count=$I$(5).getLength$O(array);
while ((count > 0) && (baseType.getComponentType$() != null ) ){
baseType=baseType.getComponentType$();
array=$I$(5).get$O$I(array, 0);
if (array == null ) {
break;
}count=count * $I$(5).getLength$O(array);
}
var primitive=(baseType === Integer.TYPE  || baseType === Double.TYPE   || baseType === Boolean.TYPE  );
if (primitive && (count > $I$(3).compactArraySize) ) {
this.content.add$O(Clazz.new_(C$.c$$org_opensourcephysics_controls_XMLProperty$S$I$O$Z,[this, "array", 3, this.getArrayString$O(value), this.writeNullFinalElement]));
} else {
var length=$I$(5).getLength$O(value);
var last=this.writeNullFinalElement ? length - 1 : length;
for (var j=0; j < length; j++) {
var next=$I$(5).get$O$I(value, j);
var type=$I$(4).getDataType$O(next);
if (type == -1) {
if (j < last) continue;
type=6;
}this.content.add$O(Clazz.new_(C$.c$$org_opensourcephysics_controls_XMLProperty$S$I$O$Z,[this, "[" + j + "]" , type, next, this.writeNullFinalElement]));
}
}break;
}
}, 1);

Clazz.newMeth(C$, 'getPropertyName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getPropertyClass$',  function () {
switch (this.type) {
case 0:
return Integer.TYPE;
case 1:
return Double.TYPE;
case 2:
return Boolean.TYPE;
case 3:
return Clazz.getClass(String);
default:
try {
return Clazz.forName(this.className);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return null;
} else {
throw ex;
}
}
}
});

Clazz.newMeth(C$, 'getLevel$',  function () {
return this.parent.getLevel$() + 1;
});

Clazz.newMeth(C$, 'getPropertyContent$',  function () {
return this.content;
});

Clazz.newMeth(C$, 'getChildControl$S',  function (name) {
var children=this.getChildControls$();
for (var i=0; i < children.length; i++) {
if (children[i].getPropertyName$().equals$O(name)) {
return children[i];
}}
return null;
});

Clazz.newMeth(C$, 'getChildControls$',  function () {
switch (this.type) {
case 6:
if (!this.content.isEmpty$()) {
return Clazz.array($I$(6), -1, [this.content.get$I(0)]);
}break;
case 4:
case 5:
var list=Clazz.new_($I$(1,1));
var it=this.content.iterator$();
while (it.hasNext$()){
var prop=it.next$();
if (prop.getPropertyType$() == 6 && !prop.getPropertyContent$().isEmpty$() ) {
list.add$O(prop.getPropertyContent$().get$I(0));
}}
return list.toArray$OA(Clazz.array($I$(6), [0]));
}
return Clazz.array($I$(6), [0]);
});

Clazz.newMeth(C$, 'setValue$S',  function (stringValue) {
try {
switch (this.type) {
case 0:
Integer.parseInt$S(stringValue);
break;
case 1:
Double.parseDouble$S(stringValue);
break;
case 2:
stringValue=stringValue.equals$O("true") ? "true" : "false";
break;
case 3:
stringValue="<![CDATA[" + stringValue + "]]>" ;
break;
case 6:
case 4:
case 5:
return;
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
return;
} else {
throw ex;
}
}
this.content.clear$();
this.content.add$O(stringValue);
});

Clazz.newMeth(C$, 'toString',  function () {
var xml=Clazz.new_([$I$(2).NEW_LINE + this.indent$I(this.getLevel$()) + "<property name=\"" + this.name + "\" type=\"" + $I$(4).getTypeName$I(this.type) + "\"" ],$I$(7,1).c$$S);
switch (this.type) {
case 4:
case 7:
case 5:
xml.append$S(" class=\"" + this.className + "\"" );
break;
}
var c=this.content;
if (this.type == 6 && c.isEmpty$() ) {
c=Clazz.new_($I$(1,1));
c.add$O("null");
}if (c.isEmpty$()) {
xml.append$S("/>");
return xml.toString();
}xml.append$S(">");
var hasChildren=false;
var it=c.iterator$();
while (it.hasNext$()){
var next=it.next$();
hasChildren=hasChildren || (Clazz.instanceOf(next, "org.opensourcephysics.controls.XMLProperty")) ;
xml.append$O(next);
}
if (hasChildren) {
xml.append$S($I$(2).NEW_LINE + this.indent$I(this.getLevel$()));
}xml.append$S("</property>");
return xml.toString();
});

Clazz.newMeth(C$, 'indent$I',  function (level) {
var space="";
for (var i=0; i < 4 * level; i++) {
space+=" ";
}
return space;
});

Clazz.newMeth(C$, 'getArrayString$O',  function (array) {
var sb=Clazz.new_($I$(7,1).c$$S,["{"]);
var length=$I$(5).getLength$O(array);
for (var j=0; j < length; j++) {
if (j > 0) {
sb.append$C(",");
}var element=$I$(5).get$O$I(array, j);
if ((element != null ) && element.getClass$().isArray$() ) {
sb.append$S(this.getArrayString$O(element));
} else {
sb.append$O(element);
}}
sb.append$C("}");
return sb.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.defaultWriteNullFinalArrayElements=true;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
