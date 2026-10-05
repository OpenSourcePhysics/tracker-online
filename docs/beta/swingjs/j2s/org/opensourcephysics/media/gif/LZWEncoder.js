(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.gif"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "LZWEncoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxbits=12;
this.maxmaxcode=4096;
this.htab=Clazz.array(Integer.TYPE, [5003]);
this.codetab=Clazz.array(Integer.TYPE, [5003]);
this.hsize=5003;
this.free_ent=0;
this.clear_flg=false;
this.cur_accum=0;
this.cur_bits=0;
this.masks=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]);
this.accum=Clazz.array(Byte.TYPE, [256]);
},1);

C$.$fields$=[['Z',['clear_flg'],'I',['imgW','imgH','initCodeSize','remaining','curPixel','n_bits','maxbits','maxcode','maxmaxcode','hsize','free_ent','g_init_bits','ClearCode','EOFCode','cur_accum','cur_bits','a_count'],'O',['pixAry','byte[]','htab','int[]','+codetab','+masks','accum','byte[]']]]

Clazz.newMeth(C$, 'c$$I$I$BA$I',  function (width, height, pixels, color_depth) {
;C$.$init$.apply(this);
this.imgW=width;
this.imgH=height;
this.pixAry=pixels;
this.initCodeSize=Math.max(2, color_depth);
}, 1);

Clazz.newMeth(C$, 'char_out$B$java_io_OutputStream',  function (c, outs) {
this.accum[this.a_count++]=c;
if (this.a_count >= 254) {
this.flush_char$java_io_OutputStream(outs);
}});

Clazz.newMeth(C$, 'cl_block$java_io_OutputStream',  function (outs) {
this.cl_hash$I(this.hsize);
this.free_ent=this.ClearCode + 2;
this.clear_flg=true;
this.output$I$java_io_OutputStream(this.ClearCode, outs);
});

Clazz.newMeth(C$, 'cl_hash$I',  function (hsize) {
for (var i=0; i < hsize; ++i) {
this.htab[i]=-1;
}
});

Clazz.newMeth(C$, 'compress$I$java_io_OutputStream',  function (init_bits, outs) {
var fcode;
var i;
var c;
var ent;
var disp;
var hsize_reg;
var hshift;
this.g_init_bits=init_bits;
this.clear_flg=false;
this.n_bits=this.g_init_bits;
this.maxcode=this.MAXCODE$I(this.n_bits);
this.ClearCode=1 << (init_bits - 1);
this.EOFCode=this.ClearCode + 1;
this.free_ent=this.ClearCode + 2;
this.a_count=0;
ent=p$1.nextPixel.apply(this, []);
hshift=0;
for (fcode=this.hsize; fcode < 65536; fcode*=2) {
++hshift;
}
hshift=8 - hshift;
hsize_reg=this.hsize;
this.cl_hash$I(hsize_reg);
this.output$I$java_io_OutputStream(this.ClearCode, outs);
 outer_loop : while ((c=p$1.nextPixel.apply(this, [])) != -1){
fcode=(c << this.maxbits) + ent;
i=(c << hshift) ^ ent;
if (this.htab[i] == fcode) {
ent=this.codetab[i];
continue;
} else if (this.htab[i] >= 0) {
disp=hsize_reg - i;
if (i == 0) {
disp=1;
}do {
if ((i-=disp) < 0) {
i+=hsize_reg;
}if (this.htab[i] == fcode) {
ent=this.codetab[i];
continue outer_loop;
}} while (this.htab[i] >= 0);
}this.output$I$java_io_OutputStream(ent, outs);
ent=c;
if (this.free_ent < this.maxmaxcode) {
this.codetab[i]=this.free_ent++;
this.htab[i]=fcode;
} else {
this.cl_block$java_io_OutputStream(outs);
}}
this.output$I$java_io_OutputStream(ent, outs);
this.output$I$java_io_OutputStream(this.EOFCode, outs);
});

Clazz.newMeth(C$, 'encode$java_io_OutputStream',  function (os) {
os.write$I(this.initCodeSize);
this.remaining=this.imgW * this.imgH;
this.curPixel=0;
this.compress$I$java_io_OutputStream(this.initCodeSize + 1, os);
os.write$I(0);
});

Clazz.newMeth(C$, 'flush_char$java_io_OutputStream',  function (outs) {
if (this.a_count > 0) {
outs.write$I(this.a_count);
outs.write$BA$I$I(this.accum, 0, this.a_count);
this.a_count=0;
}});

Clazz.newMeth(C$, 'MAXCODE$I',  function (n_bits) {
return (1 << n_bits) - 1;
});

Clazz.newMeth(C$, 'nextPixel',  function () {
if (this.remaining == 0) {
return -1;
}--this.remaining;
var pix=this.pixAry[this.curPixel++];
return pix & 255;
}, p$1);

Clazz.newMeth(C$, 'output$I$java_io_OutputStream',  function (code, outs) {
this.cur_accum&=this.masks[this.cur_bits];
if (this.cur_bits > 0) {
this.cur_accum|=(code << this.cur_bits);
} else {
this.cur_accum=code;
}this.cur_bits+=this.n_bits;
while (this.cur_bits >= 8){
this.char_out$B$java_io_OutputStream(($b$[0] = (this.cur_accum & 255), $b$[0]), outs);
this.cur_accum>>=8;
this.cur_bits-=8;
}
if ((this.free_ent > this.maxcode) || this.clear_flg ) {
if (this.clear_flg) {
this.maxcode=this.MAXCODE$I(this.n_bits=this.g_init_bits);
this.clear_flg=false;
} else {
++this.n_bits;
if (this.n_bits == this.maxbits) {
this.maxcode=this.maxmaxcode;
} else {
this.maxcode=this.MAXCODE$I(this.n_bits);
}}}if (code == this.EOFCode) {
while (this.cur_bits > 0){
this.char_out$B$java_io_OutputStream(($b$[0] = (this.cur_accum & 255), $b$[0]), outs);
this.cur_accum>>=8;
this.cur_bits-=8;
}
this.flush_char$java_io_OutputStream(outs);
}});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
