import{A as ec}from"./ArrowIcon-18d69717.js";import{d as Kn,o as it,c as xt,a as Ee,r as tc,n as nc,_ as fn,b as Er,e as Ou,w as Je,f as un,g as le,F as eo,h as ic,i as La,p as Ur,j as zr,k as Ct,T as rc,K as Nu,l as Uu,m as zu,q as ku,t as Bu,s as Gu,u as Vu,v as Wu}from"./index-1fe2bd6e.js";const Hu="/assets/images/hero/hero-02.jpg",Xu="/assets/images/hero/hero-03.jpg",qu=["href","target"],Yu=Kn({__name:"ArrowLink",props:{href:null,isWhite:{type:Boolean},isNewWindow:{type:Boolean}},setup(o){return(e,t)=>(it(),xt("a",{href:o.href,class:nc(["arrow-link",o.isWhite?"arrow-link--white":""]),target:o.isNewWindow?"_blank":""},[Ee(ec),tc(e.$slots,"default",{},void 0,!0)],10,qu))}});const ds=fn(Yu,[["__scopeId","data-v-4fdce601"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const to="149",$u=0,To=1,ju=2,sc=1,Zu=2,vr=3,Yn=0,Vt=1,Bn=2,Hn=0,qi=1,Eo=2,Ao=3,Co=4,Ku=5,Vi=100,Ju=101,Qu=102,Lo=103,Po=104,eh=200,th=201,nh=202,ih=203,ac=204,oc=205,rh=206,sh=207,ah=208,oh=209,lh=210,ch=0,uh=1,hh=2,Pa=3,fh=4,dh=5,ph=6,mh=7,lc=0,_h=1,gh=2,Rn=0,xh=1,vh=2,yh=3,Mh=4,Sh=5,cc=300,Ki=301,Ji=302,Da=303,Ra=304,As=306,Ia=1e3,ln=1001,Fa=1002,Tt=1003,Do=1004,Bs=1005,We=1006,bh=1007,Ar=1008,Mi=1009,wh=1010,Th=1011,uc=1012,Eh=1013,fi=1014,di=1015,Cr=1016,Ah=1017,Ch=1018,Yi=1020,Lh=1021,cn=1023,Ph=1024,Dh=1025,mi=1026,Qi=1027,Rh=1028,Ih=1029,Fh=1030,Oh=1031,Nh=1033,Gs=33776,Vs=33777,Ws=33778,Hs=33779,Ro=35840,Io=35841,Fo=35842,Oo=35843,Uh=36196,No=37492,Uo=37496,zo=37808,ko=37809,Bo=37810,Go=37811,Vo=37812,Wo=37813,Ho=37814,Xo=37815,qo=37816,Yo=37817,$o=37818,jo=37819,Zo=37820,Ko=37821,Xs=36492,zh=36283,Jo=36284,Qo=36285,el=36286,Si=3e3,Be=3001,kh=3200,Bh=3201,Gh=0,Vh=1,dn="srgb",Lr="srgb-linear",qs=7680,Wh=519,tl=35044,nl="300 es",Oa=1035;class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,il=180/Math.PI;function kr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[o&255]+_t[o>>8&255]+_t[o>>16&255]+_t[o>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function kt(o,e,t){return Math.max(e,Math.min(t,o))}function Hh(o,e){return(o%e+e)%e}function $s(o,e,t){return(1-t)*o+t*e}function rl(o){return(o&o-1)===0&&o!==0}function Na(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Hr(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ot(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],_=n[8],h=i[0],p=i[3],g=i[6],M=i[1],v=i[4],y=i[7],w=i[2],A=i[5],C=i[8];return r[0]=a*h+s*M+l*w,r[3]=a*p+s*v+l*A,r[6]=a*g+s*y+l*C,r[1]=c*h+u*M+d*w,r[4]=c*p+u*v+d*A,r[7]=c*g+u*y+d*C,r[2]=f*h+m*M+_*w,r[5]=f*p+m*v+_*A,r[8]=f*g+m*y+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=u*a-s*c,f=s*l-u*r,m=c*r-a*l,_=t*d+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/_;return e[0]=d*h,e[1]=(i*c-u*n)*h,e[2]=(s*n-i*a)*h,e[3]=f*h,e[4]=(u*t-i*l)*h,e[5]=(i*r-s*t)*h,e[6]=m*h,e[7]=(n*l-c*t)*h,e[8]=(a*t-n*r)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(js.makeScale(e,t)),this}rotate(e){return this.premultiply(js.makeRotation(-e)),this}translate(e,t){return this.premultiply(js.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const js=new Gt;function hc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Pr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _i(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Zs={[dn]:{[Lr]:_i},[Lr]:{[dn]:ps}},bt={legacyMode:!0,get workingColorSpace(){return Lr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Zs[e]&&Zs[e][t]!==void 0){const n=Zs[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},rn={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Ks(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function qr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=Hh(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ks(a,r,e+1/3),this.g=Ks(a,r,e),this.b=Ks(a,r,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,bt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,bt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,bt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=dn){const n=fc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return bt.fromWorkingColorSpace(qr(this,tt),e),kt(tt.r*255,0,255)<<16^kt(tt.g*255,0,255)<<8^kt(tt.b*255,0,255)<<0}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(qr(this,tt),t);const n=tt.r,i=tt.g,r=tt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const d=a-s;switch(c=u<=.5?d/(a+s):d/(2-a-s),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(qr(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=dn){return bt.fromWorkingColorSpace(qr(this,tt),e),e!==dn?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Xr);const n=$s(rn.h,Xr.h,t),i=$s(rn.s,Xr.s,t),r=$s(rn.l,Xr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Xe.NAMES=fc;let Ai;class dc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Pr("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class pc{constructor(e=null){this.isSource=!0,this.uuid=kr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Js(i[a].image)):r.push(Js(i[a]))}else r=Js(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Js(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?dc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xh=0;class Et extends lr{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=ln,i=ln,r=We,a=Ar,s=cn,l=Mi,c=Et.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=kr(),this.name="",this.source=new pc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=cc;Et.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],_=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-h)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+h)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(m+1)/2,w=(g+1)/2,A=(u+f)/4,C=(d+h)/4,x=(_+p)/4;return v>y&&v>w?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=C/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=x/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=C/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(d-h)*(d-h)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-h)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bi extends lr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:We,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mc extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qh extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=r[a+0],m=r[a+1],_=r[a+2],h=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=h;return}if(d!==h||l!==f||c!==m||u!==_){let p=1-s;const g=l*f+c*m+u*_+d*h,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const w=Math.sqrt(v),A=Math.atan2(w,g*M);p=Math.sin(p*A)/w,s=Math.sin(s*A)/w}const y=s*M;if(l=l*p+f*y,c=c*p+m*y,u=u*p+_*y,d=d*p+h*y,p===1-s){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return e[t]=s*_+u*d+l*m-c*f,e[t+1]=l*_+u*f+c*d-s*m,e[t+2]=c*_+u*m+s*f-l*d,e[t+3]=u*_-s*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),d=s(r/2),f=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"YZX":this._x=f*u*d+c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d-f*m*_;break;case"XZY":this._x=f*u*d-c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+s+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>d){const m=2*Math.sqrt(1+n-s-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,d=l*i+r*n-a*t,f=-r*t-a*n-s*i;return this.x=c*l+f*-r+u*-s-d*-a,this.y=u*l+f*-a+d*-r-c*-s,this.z=d*l+f*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new z,sl=new Br;class Gr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],f=e[l+2];u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>a&&(a=d),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),f=e.getZ(l);u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>a&&(a=d),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)ii.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ii)}else n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox),ea.applyMatrix4(e.matrixWorld),this.union(ea);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Yr.subVectors(this.max,hr),Ci.subVectors(e.a,hr),Li.subVectors(e.b,hr),Pi.subVectors(e.c,hr),Nn.subVectors(Li,Ci),Un.subVectors(Pi,Li),ri.subVectors(Ci,Pi);let t=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-ri.z,ri.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,ri.z,0,-ri.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-ri.y,ri.x,0];return!ta(t,Ci,Li,Pi,Yr)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,Ci,Li,Pi,Yr))?!1:($r.crossVectors(Nn,Un),t=[$r.x,$r.y,$r.z],ta(t,Ci,Li,Pi,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ii.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new z,new z,new z,new z,new z,new z,new z,new z],ii=new z,ea=new Gr,Ci=new z,Li=new z,Pi=new z,Nn=new z,Un=new z,ri=new z,hr=new z,Yr=new z,$r=new z,si=new z;function ta(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){si.fromArray(o,r);const s=i.x*Math.abs(si.x)+i.y*Math.abs(si.y)+i.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),u=n.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Yh=new Gr,fr=new z,na=new z;class no{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(na)),this.expandByPoint(fr.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new z,ia=new z,jr=new z,zn=new z,ra=new z,Zr=new z,sa=new z;class $h{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.direction).multiplyScalar(t).add(this.origin),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ia.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(ia);const r=e.distanceTo(t)*.5,a=-this.direction.dot(jr),s=zn.dot(this.direction),l=-zn.dot(jr),c=zn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,_;if(u>0)if(d=a*l-s,f=a*s-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const h=1/u;d*=h,f*=h,m=d*(d+a*f+2*s)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+s)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+s)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(jr).multiplyScalar(f).add(ia),m}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(s=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,r){ra.subVectors(t,e),Zr.subVectors(n,e),sa.crossVectors(ra,Zr);let a=this.direction.dot(sa),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=s*this.direction.dot(Zr.crossVectors(zn,Zr));if(l<0)return null;const c=s*this.direction.dot(ra.cross(zn));if(c<0||l+c>a)return null;const u=-s*zn.dot(sa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,d,f,m,_,h,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=s,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=m,g[7]=_,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),r=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*d,_=s*u,h=s*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-h*c,t[9]=-s*l,t[2]=h-f*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,_=c*u,h=c*d;t[0]=f+h*s,t[4]=_*s-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-s,t[2]=m*s-_,t[6]=h+f*s,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,_=c*u,h=c*d;t[0]=f-h*s,t[4]=-a*d,t[8]=_+m*s,t[1]=m+_*s,t[5]=a*u,t[9]=h-f*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,_=s*u,h=s*d;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+h,t[1]=l*d,t[5]=h*c+f,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=s*l,h=s*c;t[0]=l*u,t[4]=h-f*d,t[8]=_*d+m,t[1]=d,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*d+_,t[10]=f-h*d}else if(e.order==="XZY"){const f=a*l,m=a*c,_=s*l,h=s*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+h,t[5]=a*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=s*u,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jh,e,Zh)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),kn.crossVectors(n,Nt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),kn.crossVectors(n,Nt)),kn.normalize(),Kr.crossVectors(Nt,kn),i[0]=kn.x,i[4]=Kr.x,i[8]=Nt.x,i[1]=kn.y,i[5]=Kr.y,i[9]=Nt.y,i[2]=kn.z,i[6]=Kr.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],_=n[2],h=n[6],p=n[10],g=n[14],M=n[3],v=n[7],y=n[11],w=n[15],A=i[0],C=i[4],x=i[8],S=i[12],L=i[1],U=i[5],G=i[9],R=i[13],D=i[2],N=i[6],q=i[10],$=i[14],k=i[3],K=i[7],j=i[11],ce=i[15];return r[0]=a*A+s*L+l*D+c*k,r[4]=a*C+s*U+l*N+c*K,r[8]=a*x+s*G+l*q+c*j,r[12]=a*S+s*R+l*$+c*ce,r[1]=u*A+d*L+f*D+m*k,r[5]=u*C+d*U+f*N+m*K,r[9]=u*x+d*G+f*q+m*j,r[13]=u*S+d*R+f*$+m*ce,r[2]=_*A+h*L+p*D+g*k,r[6]=_*C+h*U+p*N+g*K,r[10]=_*x+h*G+p*q+g*j,r[14]=_*S+h*R+p*$+g*ce,r[3]=M*A+v*L+y*D+w*k,r[7]=M*C+v*U+y*N+w*K,r[11]=M*x+v*G+y*q+w*j,r[15]=M*S+v*R+y*$+w*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],_=e[3],h=e[7],p=e[11],g=e[15];return _*(+r*l*d-i*c*d-r*s*f+n*c*f+i*s*m-n*l*m)+h*(+t*l*m-t*c*f+r*a*f-i*a*m+i*c*u-r*l*u)+p*(+t*c*d-t*s*m-r*a*d+n*a*m+r*s*u-n*c*u)+g*(-i*s*u-t*l*d+t*s*f+i*a*d-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],_=e[12],h=e[13],p=e[14],g=e[15],M=d*p*c-h*f*c+h*l*m-s*p*m-d*l*g+s*f*g,v=_*f*c-u*p*c-_*l*m+a*p*m+u*l*g-a*f*g,y=u*h*c-_*d*c+_*s*m-a*h*m-u*s*g+a*d*g,w=_*d*l-u*h*l-_*s*f+a*h*f+u*s*p-a*d*p,A=t*M+n*v+i*y+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=M*C,e[1]=(h*f*r-d*p*r-h*i*m+n*p*m+d*i*g-n*f*g)*C,e[2]=(s*p*r-h*l*r+h*i*c-n*p*c-s*i*g+n*l*g)*C,e[3]=(d*l*r-s*f*r-d*i*c+n*f*c+s*i*m-n*l*m)*C,e[4]=v*C,e[5]=(u*p*r-_*f*r+_*i*m-t*p*m-u*i*g+t*f*g)*C,e[6]=(_*l*r-a*p*r-_*i*c+t*p*c+a*i*g-t*l*g)*C,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*m+t*l*m)*C,e[8]=y*C,e[9]=(_*d*r-u*h*r-_*n*m+t*h*m+u*n*g-t*d*g)*C,e[10]=(a*h*r-_*s*r+_*n*c-t*h*c-a*n*g+t*s*g)*C,e[11]=(u*s*r-a*d*r-u*n*c+t*d*c+a*n*m-t*s*m)*C,e[12]=w*C,e[13]=(u*h*i-_*d*i+_*n*f-t*h*f-u*n*p+t*d*p)*C,e[14]=(_*s*i-a*h*i-_*n*l+t*h*l+a*n*p-t*s*p)*C,e[15]=(a*d*i-u*s*i+u*n*l-t*d*l-a*n*f+t*s*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,d=s+s,f=r*c,m=r*u,_=r*d,h=a*u,p=a*d,g=s*d,M=l*c,v=l*u,y=l*d,w=n.x,A=n.y,C=n.z;return i[0]=(1-(h+g))*w,i[1]=(m+y)*w,i[2]=(_-v)*w,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(f+g))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(_+v)*C,i[9]=(p-M)*C,i[10]=(1-(f+h))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Di.set(i[0],i[1],i[2]).length();const a=Di.set(i[4],i[5],i[6]).length(),s=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const c=1/r,u=1/a,d=1/s;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new z,sn=new dt,jh=new z(0,0,0),Zh=new z(1,1,1),kn=new z,Kr=new z,Nt=new z,al=new dt,ol=new Br;class Cs{constructor(e=0,t=0,n=0,i=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kh=0;const ll=new z,Ri=new Br,Tn=new dt,Jr=new z,dr=new z,Jh=new z,Qh=new Br,cl=new z(1,0,0),ul=new z(0,1,0),hl=new z(0,0,1),ef={type:"added"},fl={type:"removed"};class Wt extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new z,t=new Cs,n=new Br,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new Gt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(cl,e)}rotateY(e){return this.rotateOnAxis(ul,e)}rotateZ(e){return this.rotateOnAxis(hl,e)}translateOnAxis(e,t){return ll.copy(e).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cl,e)}translateY(e){return this.translateOnAxis(ul,e)}translateZ(e){return this.translateOnAxis(hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(dr,Jr,this.up):Tn.lookAt(Jr,dr,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ef)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Wt.DEFAULT_UP=new z(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new z,En=new z,aa=new z,An=new z,Ii=new z,Fi=new z,dl=new z,oa=new z,la=new z,ca=new z;class Pn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){an.subVectors(i,t),En.subVectors(n,t),aa.subVectors(e,t);const a=an.dot(an),s=an.dot(En),l=an.dot(aa),c=En.dot(En),u=En.dot(aa),d=a*c-s*s;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-s*u)*f,_=(a*u-s*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,An),l.set(0,0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(s,An.z),l}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),En.subVectors(e,t),an.cross(En).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Pn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Ii.subVectors(i,n),Fi.subVectors(r,n),oa.subVectors(e,n);const l=Ii.dot(oa),c=Fi.dot(oa);if(l<=0&&c<=0)return t.copy(n);la.subVectors(e,i);const u=Ii.dot(la),d=Fi.dot(la);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ii,a);ca.subVectors(e,r);const m=Ii.dot(ca),_=Fi.dot(ca);if(_>=0&&m<=_)return t.copy(r);const h=m*c-l*_;if(h<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(n).addScaledVector(Fi,s);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return dl.subVectors(r,i),s=(d-u)/(d-u+(m-_)),t.copy(i).addScaledVector(dl,s);const g=1/(p+h+f);return a=h*g,s=f*g,t.copy(n).addScaledVector(Ii,a).addScaledVector(Fi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let tf=0;class Ls extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=qi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gc extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new z,Qr=new ke;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xc extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vc extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nf=0;const jt=new dt,ua=new Wt,Oi=new z,Ut=new Gr,pr=new Gr,ut=new z;class Ti extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hc(e)?vc:xc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];pr.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(Ut.min,pr.min),Ut.expandByPoint(ut),ut.addVectors(Ut.max,pr.max),Ut.expandByPoint(ut)):(Ut.expandByPoint(pr.min),Ut.expandByPoint(pr.max))}Ut.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ut.fromBufferAttribute(s,c),l&&(Oi.fromBufferAttribute(e,c),ut.add(Oi)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new z,u[L]=new z;const d=new z,f=new z,m=new z,_=new ke,h=new ke,p=new ke,g=new z,M=new z;function v(L,U,G){d.fromArray(i,L*3),f.fromArray(i,U*3),m.fromArray(i,G*3),_.fromArray(a,L*2),h.fromArray(a,U*2),p.fromArray(a,G*2),f.sub(d),m.sub(d),h.sub(_),p.sub(_);const R=1/(h.x*p.y-p.x*h.y);isFinite(R)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(R),M.copy(m).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(R),c[L].add(g),c[U].add(g),c[G].add(g),u[L].add(M),u[U].add(M),u[G].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let L=0,U=y.length;L<U;++L){const G=y[L],R=G.start,D=G.count;for(let N=R,q=R+D;N<q;N+=3)v(n[N+0],n[N+1],n[N+2])}const w=new z,A=new z,C=new z,x=new z;function S(L){C.fromArray(r,L*3),x.copy(C);const U=c[L];w.copy(U),w.sub(C.multiplyScalar(C.dot(U))).normalize(),A.crossVectors(x,U);const R=A.dot(u[L])<0?-1:1;l[L*4]=w.x,l[L*4+1]=w.y,l[L*4+2]=w.z,l[L*4+3]=R}for(let L=0,U=y.length;L<U;++L){const G=y[L],R=G.start,D=G.count;for(let N=R,q=R+D;N<q;N+=3)S(n[N+0]),S(n[N+1]),S(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,a=new z,s=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,h),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),s.fromBufferAttribute(n,_),l.fromBufferAttribute(n,h),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(_,s.x,s.y,s.z),n.setXYZ(h,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,d=s.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let h=0,p=l.length;h<p;h++){s.isInterleavedBufferAttribute?m=l[h]*s.data.stride+s.offset:m=l[h]*u;for(let g=0;g<u;g++)f[_++]=c[m++]}return new gn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new dt,Ni=new $h,ha=new no,mr=new z,_r=new z,gr=new z,fa=new z,es=new z,ts=new ke,ns=new ke,is=new ke,da=new z,rs=new z;class Dn extends Wt{constructor(e=new Ti,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],d=r[l];u!==0&&(fa.fromBufferAttribute(d,e),a?es.addScaledVector(fa,u):es.addScaledVector(fa.sub(t),u))}t.add(es)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),e.ray.intersectsSphere(ha)===!1)||(pl.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(pl),n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,d=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){const h=d[m],p=i[h.materialIndex],g=Math.max(h.start,f.start),M=Math.min(s.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,y=M;v<y;v+=3){const w=s.getX(v),A=s.getX(v+1),C=s.getX(v+2);a=ss(this,p,e,Ni,c,u,w,A,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),_=Math.min(s.count,f.start+f.count);for(let h=m,p=_;h<p;h+=3){const g=s.getX(h),M=s.getX(h+1),v=s.getX(h+2);a=ss(this,i,e,Ni,c,u,g,M,v),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){const h=d[m],p=i[h.materialIndex],g=Math.max(h.start,f.start),M=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,y=M;v<y;v+=3){const w=v,A=v+1,C=v+2;a=ss(this,p,e,Ni,c,u,w,A,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let h=m,p=_;h<p;h+=3){const g=h,M=h+1,v=h+2;a=ss(this,i,e,Ni,c,u,g,M,v),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}}}function rf(o,e,t,n,i,r,a,s){let l;if(e.side===Vt?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===Yn,s),l===null)return null;rs.copy(s),rs.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(rs);return c<t.near||c>t.far?null:{distance:c,point:rs.clone(),object:o}}function ss(o,e,t,n,i,r,a,s,l){o.getVertexPosition(a,mr),o.getVertexPosition(s,_r),o.getVertexPosition(l,gr);const c=rf(o,e,t,n,mr,_r,gr,da);if(c){i&&(ts.fromBufferAttribute(i,a),ns.fromBufferAttribute(i,s),is.fromBufferAttribute(i,l),c.uv=Pn.getUV(da,mr,_r,gr,ts,ns,is,new ke)),r&&(ts.fromBufferAttribute(r,a),ns.fromBufferAttribute(r,s),is.fromBufferAttribute(r,l),c.uv2=Pn.getUV(da,mr,_r,gr,ts,ns,is,new ke));const u={a,b:s,c:l,normal:new z,materialIndex:0};Pn.getNormal(mr,_r,gr,u.normal),c.face=u}return c}class Vr extends Ti{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(d,2));function _(h,p,g,M,v,y,w,A,C,x,S){const L=y/C,U=w/x,G=y/2,R=w/2,D=A/2,N=C+1,q=x+1;let $=0,k=0;const K=new z;for(let j=0;j<q;j++){const ce=j*U-R;for(let O=0;O<N;O++){const Z=O*L-G;K[h]=Z*M,K[p]=ce*v,K[g]=D,c.push(K.x,K.y,K.z),K[h]=0,K[p]=0,K[g]=A>0?1:-1,u.push(K.x,K.y,K.z),d.push(O/C),d.push(1-j/x),$+=1}}for(let j=0;j<x;j++)for(let ce=0;ce<C;ce++){const O=f+ce+N*j,Z=f+ce+N*(j+1),ee=f+(ce+1)+N*(j+1),te=f+(ce+1)+N*j;l.push(O,Z,te),l.push(Z,ee,te),k+=6}s.addGroup(m,k,S),m+=k,f+=$}}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(o){const e={};for(let t=0;t<o.length;t++){const n=er(o[t]);for(const i in n)e[i]=n[i]}return e}function sf(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function yc(o){return o.getRenderTarget()===null&&o.outputEncoding===Be?dn:Lr}const af={clone:er,merge:wt};var of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mc extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Mc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return il*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,zi=1;class cf extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new on(Ui,zi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new on(Ui,zi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new on(Ui,zi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new on(Ui,zi,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new on(Ui,zi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new on(Ui,zi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Rn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Sc extends Et{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uf extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Sc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:We}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vr(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Hn});r.uniforms.tEquirect.value=t;const a=new Dn(i,r),s=t.minFilter;return t.minFilter===Ar&&(t.minFilter=We),new cf(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const pa=new z,hf=new z,ff=new Gt;class li{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pa.subVectors(n,t).cross(hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ff.getNormalMatrix(e),i=this.coplanarPoint(pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new no,as=new z;class bc{constructor(e=new li,t=new li,n=new li,i=new li,r=new li,a=new li){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],d=n[7],f=n[8],m=n[9],_=n[10],h=n[11],p=n[12],g=n[13],M=n[14],v=n[15];return t[0].setComponents(s-i,d-l,h-f,v-p).normalize(),t[1].setComponents(s+i,d+l,h+f,v+p).normalize(),t[2].setComponents(s+r,d+c,h+m,v+g).normalize(),t[3].setComponents(s-r,d-c,h-m,v-g).normalize(),t[4].setComponents(s-a,d-u,h-_,v-M).normalize(),t[5].setComponents(s+a,d+u,h+_,v+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(as.x=i.normal.x>0?e.max.x:e.min.x,as.y=i.normal.y>0?e.max.y:e.min.y,as.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wc(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function df(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const f=u.array,m=u.updateRange;o.bindBuffer(d,c),m.count===-1?o.bufferSubData(d,0,f):(t?o.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:a,remove:s,update:l}}class Ps extends Ti{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,d=e/s,f=t/l,m=[],_=[],h=[],p=[];for(let g=0;g<u;g++){const M=g*f-a;for(let v=0;v<c;v++){const y=v*d-r;_.push(y,-M,0),h.push(0,0,1),p.push(v/s),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<s;M++){const v=M+c*g,y=M+c*(g+1),w=M+1+c*(g+1),A=M+1+c*g;m.push(v,y,A),m.push(y,w,A)}this.setIndex(m),this.setAttribute("position",new gi(_,3)),this.setAttribute("normal",new gi(h,3)),this.setAttribute("uv",new gi(p,2))}static fromJSON(e){return new Ps(e.width,e.height,e.widthSegments,e.heightSegments)}}var pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf="vec3 transformed = vec3( position );",Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,If=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Of=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,id=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,cd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ud=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Td=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Cd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$d=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,np=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ip=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,sp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ap=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,op=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,lp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,cp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,up=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Up=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Hp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:_f,alphatest_pars_fragment:gf,aomap_fragment:xf,aomap_pars_fragment:vf,begin_vertex:yf,beginnormal_vertex:Mf,bsdfs:Sf,iridescence_fragment:bf,bumpmap_pars_fragment:wf,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Cf,color_fragment:Lf,color_pars_fragment:Pf,color_pars_vertex:Df,color_vertex:Rf,common:If,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Nf,displacementmap_vertex:Uf,emissivemap_fragment:zf,emissivemap_pars_fragment:kf,encodings_fragment:Bf,encodings_pars_fragment:Gf,envmap_fragment:Vf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Hf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:id,envmap_vertex:qf,fog_vertex:Yf,fog_pars_vertex:$f,fog_fragment:jf,fog_pars_fragment:Zf,gradientmap_pars_fragment:Kf,lightmap_fragment:Jf,lightmap_pars_fragment:Qf,lights_lambert_fragment:ed,lights_lambert_pars_fragment:td,lights_pars_begin:nd,lights_toon_fragment:rd,lights_toon_pars_fragment:sd,lights_phong_fragment:ad,lights_phong_pars_fragment:od,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:ud,lights_fragment_maps:hd,lights_fragment_end:fd,logdepthbuf_fragment:dd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:_d,map_fragment:gd,map_pars_fragment:xd,map_particle_fragment:vd,map_particle_pars_fragment:yd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:Sd,morphcolor_vertex:bd,morphnormal_vertex:wd,morphtarget_pars_vertex:Td,morphtarget_vertex:Ed,normal_fragment_begin:Ad,normal_fragment_maps:Cd,normal_pars_fragment:Ld,normal_pars_vertex:Pd,normal_vertex:Dd,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Id,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Nd,output_fragment:Ud,packing:zd,premultiplied_alpha_fragment:kd,project_vertex:Bd,dithering_fragment:Gd,dithering_pars_fragment:Vd,roughnessmap_fragment:Wd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:Xd,shadowmap_pars_vertex:qd,shadowmap_vertex:Yd,shadowmask_pars_fragment:$d,skinbase_vertex:jd,skinning_pars_vertex:Zd,skinning_vertex:Kd,skinnormal_vertex:Jd,specularmap_fragment:Qd,specularmap_pars_fragment:ep,tonemapping_fragment:tp,tonemapping_pars_fragment:np,transmission_fragment:ip,transmission_pars_fragment:rp,uv_pars_fragment:sp,uv_pars_vertex:ap,uv_vertex:op,uv2_pars_fragment:lp,uv2_pars_vertex:cp,uv2_vertex:up,worldpos_vertex:hp,background_vert:fp,background_frag:dp,backgroundCube_vert:pp,backgroundCube_frag:mp,cube_vert:_p,cube_frag:gp,depth_vert:xp,depth_frag:vp,distanceRGBA_vert:yp,distanceRGBA_frag:Mp,equirect_vert:Sp,equirect_frag:bp,linedashed_vert:wp,linedashed_frag:Tp,meshbasic_vert:Ep,meshbasic_frag:Ap,meshlambert_vert:Cp,meshlambert_frag:Lp,meshmatcap_vert:Pp,meshmatcap_frag:Dp,meshnormal_vert:Rp,meshnormal_frag:Ip,meshphong_vert:Fp,meshphong_frag:Op,meshphysical_vert:Np,meshphysical_frag:Up,meshtoon_vert:zp,meshtoon_frag:kp,points_vert:Bp,points_frag:Gp,shadow_vert:Vp,shadow_frag:Wp,sprite_vert:Hp,sprite_frag:Xp},ie={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Gt},uv2Transform:{value:new Gt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gt}}},pn={basic:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Xe(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:wt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:wt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Xe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:wt([ie.points,ie.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:wt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:wt([ie.common,ie.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:wt([ie.sprite,ie.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:wt([ie.common,ie.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:wt([ie.lights,ie.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};pn.physical={uniforms:wt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ke(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const os={r:0,b:0,g:0};function qp(o,e,t,n,i,r,a){const s=new Xe(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function _(p,g){let M=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const y=o.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?h(s,l):v&&v.isColor&&(h(v,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===As)?(u===void 0&&(u=new Dn(new Vr(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:er(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=v.encoding!==Be,(d!==v||f!==v.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Dn(new Ps(2,2),new $n({name:"BackgroundMaterial",uniforms:er(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==Be,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function h(p,g){p.getRGB(os,yc(o)),n.buffers.color.setClear(os.r,os.g,os.b,g,a)}return{getClearColor:function(){return s},setClearColor:function(p,g=1){s.set(p),l=g,h(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(s,l)},render:_}}function Yp(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function d(D,N,q,$,k){let K=!1;if(a){const j=h($,q,N);c!==j&&(c=j,m(c.object)),K=g(D,$,q,k),K&&M(D,$,q,k)}else{const j=N.wireframe===!0;(c.geometry!==$.id||c.program!==q.id||c.wireframe!==j)&&(c.geometry=$.id,c.program=q.id,c.wireframe=j,K=!0)}k!==null&&t.update(k,34963),(K||u)&&(u=!1,x(D,N,q,$),k!==null&&o.bindBuffer(34963,t.get(k).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function h(D,N,q){const $=q.wireframe===!0;let k=s[D.id];k===void 0&&(k={},s[D.id]=k);let K=k[N.id];K===void 0&&(K={},k[N.id]=K);let j=K[$];return j===void 0&&(j=p(f()),K[$]=j),j}function p(D){const N=[],q=[],$=[];for(let k=0;k<i;k++)N[k]=0,q[k]=0,$[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:$,object:D,attributes:{},index:null}}function g(D,N,q,$){const k=c.attributes,K=N.attributes;let j=0;const ce=q.getAttributes();for(const O in ce)if(ce[O].location>=0){const ee=k[O];let te=K[O];if(te===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),ee===void 0||ee.attribute!==te||te&&ee.data!==te.data)return!0;j++}return c.attributesNum!==j||c.index!==$}function M(D,N,q,$){const k={},K=N.attributes;let j=0;const ce=q.getAttributes();for(const O in ce)if(ce[O].location>=0){let ee=K[O];ee===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const te={};te.attribute=ee,ee&&ee.data&&(te.data=ee.data),k[O]=te,j++}c.attributes=k,c.attributesNum=j,c.index=$}function v(){const D=c.newAttributes;for(let N=0,q=D.length;N<q;N++)D[N]=0}function y(D){w(D,0)}function w(D,N){const q=c.newAttributes,$=c.enabledAttributes,k=c.attributeDivisors;q[D]=1,$[D]===0&&(o.enableVertexAttribArray(D),$[D]=1),k[D]!==N&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,N),k[D]=N)}function A(){const D=c.newAttributes,N=c.enabledAttributes;for(let q=0,$=N.length;q<$;q++)N[q]!==D[q]&&(o.disableVertexAttribArray(q),N[q]=0)}function C(D,N,q,$,k,K){n.isWebGL2===!0&&(q===5124||q===5125)?o.vertexAttribIPointer(D,N,q,k,K):o.vertexAttribPointer(D,N,q,$,k,K)}function x(D,N,q,$){if(n.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const k=$.attributes,K=q.getAttributes(),j=N.defaultAttributeValues;for(const ce in K){const O=K[ce];if(O.location>=0){let Z=k[ce];if(Z===void 0&&(ce==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),ce==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const ee=Z.normalized,te=Z.itemSize,B=t.get(Z);if(B===void 0)continue;const Se=B.buffer,fe=B.type,de=B.bytesPerElement;if(Z.isInterleavedBufferAttribute){const oe=Z.data,ze=oe.stride,be=Z.offset;if(oe.isInstancedInterleavedBuffer){for(let ve=0;ve<O.locationSize;ve++)w(O.location+ve,oe.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<O.locationSize;ve++)y(O.location+ve);o.bindBuffer(34962,Se);for(let ve=0;ve<O.locationSize;ve++)C(O.location+ve,te/O.locationSize,fe,ee,ze*de,(be+te/O.locationSize*ve)*de)}else{if(Z.isInstancedBufferAttribute){for(let oe=0;oe<O.locationSize;oe++)w(O.location+oe,Z.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let oe=0;oe<O.locationSize;oe++)y(O.location+oe);o.bindBuffer(34962,Se);for(let oe=0;oe<O.locationSize;oe++)C(O.location+oe,te/O.locationSize,fe,ee,te*de,te/O.locationSize*oe*de)}}else if(j!==void 0){const ee=j[ce];if(ee!==void 0)switch(ee.length){case 2:o.vertexAttrib2fv(O.location,ee);break;case 3:o.vertexAttrib3fv(O.location,ee);break;case 4:o.vertexAttrib4fv(O.location,ee);break;default:o.vertexAttrib1fv(O.location,ee)}}}}A()}function S(){G();for(const D in s){const N=s[D];for(const q in N){const $=N[q];for(const k in $)_($[k].object),delete $[k];delete N[q]}delete s[D]}}function L(D){if(s[D.id]===void 0)return;const N=s[D.id];for(const q in N){const $=N[q];for(const k in $)_($[k].object),delete $[k];delete N[q]}delete s[D.id]}function U(D){for(const N in s){const q=s[N];if(q[D.id]===void 0)continue;const $=q[D.id];for(const k in $)_($[k].object),delete $[k];delete q[D.id]}}function G(){R(),u=!0,c!==l&&(c=l,m(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function $p(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,d),t.update(u,r,d)}this.setMode=a,this.render=s,this.renderInstances=l}function jp(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),_=o.getParameter(34076),h=o.getParameter(34921),p=o.getParameter(36347),g=o.getParameter(36348),M=o.getParameter(36349),v=f>0,y=a||e.has("OES_texture_float"),w=v&&y,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:A}}function Zp(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new li,s=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,g=o.get(d);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,v=M*4;let y=g.clippingState||null;l.value=y,y=u(_,f,v,m);for(let w=0;w!==v;++w)y[w]=t[w];g.clippingState=y,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,_){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,_!==!0||p===null){const g=m+h*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=m;v!==h;++v,y+=4)a.copy(d[v]).applyMatrix4(M,s),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function Kp(o){let e=new WeakMap;function t(a,s){return s===Da?a.mapping=Ki:s===Ra&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Da||s===Ra)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new uf(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Tc extends Mc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,ml=[.125,.215,.35,.446,.526,.582],hi=20,ma=new Tc,_l=new Xe;let _a=null;const ci=(1+Math.sqrt(5))/2,Bi=1/ci,gl=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ci,Bi),new z(0,ci,-Bi),new z(Bi,0,ci),new z(-Bi,0,ci),new z(ci,Bi,0),new z(-ci,Bi,0)];class xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_a=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_a),e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Cr,format:cn,encoding:Si,depthBuffer:!1},i=vl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jp(r)),this._blurMaterial=Qp(r,e,t)}return i}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,i){const s=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_l),u.toneMapping=Rn,u.autoClear=!1;const m=new gc({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),_=new Dn(new Vr,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(_l),h=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(s.up.set(0,l[g],0),s.lookAt(c[g],0,0)):M===1?(s.up.set(0,0,l[g]),s.lookAt(0,c[g],0)):(s.up.set(0,l[g],0),s.lookAt(0,0,c[g]));const v=this._cubeSize;ls(i,M*v,g>2?v:0,v,v),u.setRenderTarget(i),h&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ki||e.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Dn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=gl[(i-1)%gl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Dn(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hi-1),h=r/_,p=isFinite(r)?1+Math.floor(u*h):hi;p>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const g=[];let M=0;for(let C=0;C<hi;++C){const x=C/h,S=Math.exp(-x*x/2);g.push(S),C===0?M+=S:C<p&&(M+=2*S)}for(let C=0;C<g.length;C++)g[C]=g[C]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const y=this._sizeLods[i],w=3*y*(i>v-Wi?i-v+Wi:0),A=4*(this._cubeSize-y);ls(t,w,A,3*y,2*y),l.setRenderTarget(t),l.render(d,ma)}}function Jp(o){const e=[],t=[],n=[];let i=o;const r=o-Wi+1+ml.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-Wi?l=ml[a-o+Wi-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,h=3,p=2,g=1,M=new Float32Array(h*_*m),v=new Float32Array(p*_*m),y=new Float32Array(g*_*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,x=A>2?0:-1,S=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(S,h*_*A),v.set(f,p*_*A);const L=[A,A,A,A,A,A];y.set(L,g*_*A)}const w=new Ti;w.setAttribute("position",new gn(M,h)),w.setAttribute("uv",new gn(v,p)),w.setAttribute("faceIndex",new gn(y,g)),e.push(w),i>Wi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vl(o,e,t){const n=new bi(o,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Qp(o,e,t){const n=new Float32Array(hi),i=new z(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function yl(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ml(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function em(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Da||l===Ra,u=l===Ki||l===Ji;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new xl(o)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new xl(o));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function tm(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nm(o,e,t,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],34962);const m=d.morphAttributes;for(const _ in m){const h=m[_];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let h=0;if(m!==null){const M=m.array;h=m.version;for(let v=0,y=M.length;v<y;v+=3){const w=M[v+0],A=M[v+1],C=M[v+2];f.push(w,A,A,C,C,w)}}else{const M=_.array;h=_.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const w=v+0,A=v+1,C=v+2;f.push(w,A,A,C,C,w)}}const p=new(hc(f)?vc:xc)(f,1);p.version=h;const g=r.get(d);g&&e.remove(g),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function im(o,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*l),t.update(m,r,1)}function d(f,m,_){if(_===0)return;let h,p;if(i)h=o,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,m,s,f*l,_),t.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function rm(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sm(o,e){return o[0]-e[0]}function am(o,e){return Math.abs(e[1])-Math.abs(o[1])}function om(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new rt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,d,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==h){let N=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",N)};p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),w===!0&&(S=3);let L=u.attributes.position.count*S,U=1;L>e.maxTextureSize&&(U=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const G=new Float32Array(L*U*4*h),R=new mc(G,L,U,h);R.type=di,R.needsUpdate=!0;const D=S*4;for(let q=0;q<h;q++){const $=A[q],k=C[q],K=x[q],j=L*U*4*q;for(let ce=0;ce<$.count;ce++){const O=ce*D;v===!0&&(a.fromBufferAttribute($,ce),G[j+O+0]=a.x,G[j+O+1]=a.y,G[j+O+2]=a.z,G[j+O+3]=0),y===!0&&(a.fromBufferAttribute(k,ce),G[j+O+4]=a.x,G[j+O+5]=a.y,G[j+O+6]=a.z,G[j+O+7]=0),w===!0&&(a.fromBufferAttribute(K,ce),G[j+O+8]=a.x,G[j+O+9]=a.y,G[j+O+10]=a.z,G[j+O+11]=K.itemSize===4?a.w:1)}}p={count:h,texture:R,size:new ke(L,U)},r.set(u,p),u.addEventListener("dispose",N)}let g=0;for(let v=0;v<m.length;v++)g+=m[v];const M=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(o,"morphTargetBaseInfluence",M),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{const _=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==_){h=[];for(let y=0;y<_;y++)h[y]=[y,0];n[u.id]=h}for(let y=0;y<_;y++){const w=h[y];w[0]=y,w[1]=m[y]}h.sort(am);for(let y=0;y<8;y++)y<_&&h[y][1]?(s[y][0]=h[y][0],s[y][1]=h[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(sm);const p=u.morphAttributes.position,g=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const w=s[y],A=w[0],C=w[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+y)!==p[A]&&u.setAttribute("morphTarget"+y,p[A]),g&&u.getAttribute("morphNormal"+y)!==g[A]&&u.setAttribute("morphNormal"+y,g[A]),i[y]=C,M+=C):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),g&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const v=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",v),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function lm(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Ec=new Et,Ac=new mc,Cc=new qh,Lc=new Sc,Sl=[],bl=[],wl=new Float32Array(16),Tl=new Float32Array(9),El=new Float32Array(4);function cr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=Sl[i];if(r===void 0&&(r=new Float32Array(i),Sl[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function st(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function at(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Ds(o,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function cm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function um(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;o.uniform2fv(this.addr,e),at(t,e)}}function hm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;o.uniform3fv(this.addr,e),at(t,e)}}function fm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;o.uniform4fv(this.addr,e),at(t,e)}}function dm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;El.set(n),o.uniformMatrix2fv(this.addr,!1,El),at(t,n)}}function pm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Tl.set(n),o.uniformMatrix3fv(this.addr,!1,Tl),at(t,n)}}function mm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;wl.set(n),o.uniformMatrix4fv(this.addr,!1,wl),at(t,n)}}function _m(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function gm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;o.uniform2iv(this.addr,e),at(t,e)}}function xm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;o.uniform3iv(this.addr,e),at(t,e)}}function vm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;o.uniform4iv(this.addr,e),at(t,e)}}function ym(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Mm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;o.uniform2uiv(this.addr,e),at(t,e)}}function Sm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;o.uniform3uiv(this.addr,e),at(t,e)}}function bm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;o.uniform4uiv(this.addr,e),at(t,e)}}function wm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ec,i)}function Tm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cc,i)}function Em(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lc,i)}function Am(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ac,i)}function Cm(o){switch(o){case 5126:return cm;case 35664:return um;case 35665:return hm;case 35666:return fm;case 35674:return dm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return _m;case 35667:case 35671:return gm;case 35668:case 35672:return xm;case 35669:case 35673:return vm;case 5125:return ym;case 36294:return Mm;case 36295:return Sm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Am}}function Lm(o,e){o.uniform1fv(this.addr,e)}function Pm(o,e){const t=cr(e,this.size,2);o.uniform2fv(this.addr,t)}function Dm(o,e){const t=cr(e,this.size,3);o.uniform3fv(this.addr,t)}function Rm(o,e){const t=cr(e,this.size,4);o.uniform4fv(this.addr,t)}function Im(o,e){const t=cr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Fm(o,e){const t=cr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Om(o,e){const t=cr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Nm(o,e){o.uniform1iv(this.addr,e)}function Um(o,e){o.uniform2iv(this.addr,e)}function zm(o,e){o.uniform3iv(this.addr,e)}function km(o,e){o.uniform4iv(this.addr,e)}function Bm(o,e){o.uniform1uiv(this.addr,e)}function Gm(o,e){o.uniform2uiv(this.addr,e)}function Vm(o,e){o.uniform3uiv(this.addr,e)}function Wm(o,e){o.uniform4uiv(this.addr,e)}function Hm(o,e,t){const n=this.cache,i=e.length,r=Ds(t,i);st(n,r)||(o.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ec,r[a])}function Xm(o,e,t){const n=this.cache,i=e.length,r=Ds(t,i);st(n,r)||(o.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Cc,r[a])}function qm(o,e,t){const n=this.cache,i=e.length,r=Ds(t,i);st(n,r)||(o.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Lc,r[a])}function Ym(o,e,t){const n=this.cache,i=e.length,r=Ds(t,i);st(n,r)||(o.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ac,r[a])}function $m(o){switch(o){case 5126:return Lm;case 35664:return Pm;case 35665:return Dm;case 35666:return Rm;case 35674:return Im;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return Nm;case 35667:case 35671:return Um;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Bm;case 36294:return Gm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}class jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Cm(t.type)}}class Zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=$m(t.type)}}class Km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function Al(o,e){o.seq.push(e),o.map[e.id]=e}function Jm(o,e,t){const n=o.name,i=n.length;for(ga.lastIndex=0;;){const r=ga.exec(n),a=ga.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){Al(t,c===void 0?new jm(s,o,e):new Zm(s,o,e));break}else{let d=t.map[s];d===void 0&&(d=new Km(s),Al(t,d)),t=d}}}class ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Jm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Cl(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Qm=0;function e_(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function t_(o){switch(o){case Si:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Ll(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+e_(o.getShaderSource(e),a)}else return i}function n_(o,e){const t=t_(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function i_(o,e){let t;switch(e){case xh:t="Linear";break;case vh:t="Reinhard";break;case yh:t="OptimizedCineon";break;case Mh:t="ACESFilmic";break;case Sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function r_(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yr).join(`
`)}function s_(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function a_(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function yr(o){return o!==""}function Pl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(o){return o.replace(o_,l_)}function l_(o,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ua(t)}const c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(o){return o.replace(c_,u_)}function u_(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Il(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h_(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function f_(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ki:case Ji:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d_(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function p_(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case lc:e="ENVMAP_BLENDING_MULTIPLY";break;case _h:e="ENVMAP_BLENDING_MIX";break;case gh:e="ENVMAP_BLENDING_ADD";break}return e}function m_(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function __(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=h_(t),c=f_(t),u=d_(t),d=p_(t),f=m_(t),m=t.isWebGL2?"":r_(t),_=s_(r),h=i.createProgram();let p,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(yr).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(yr).join(`
`),g.length>0&&(g+=`
`)):(p=[Il(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),g=[m,Il(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?we.tonemapping_pars_fragment:"",t.toneMapping!==Rn?i_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,n_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=Ua(a),a=Pl(a,t),a=Dl(a,t),s=Ua(s),s=Pl(s,t),s=Dl(s,t),a=Rl(a),s=Rl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=M+p+a,y=M+g+s,w=Cl(i,35633,v),A=Cl(i,35632,y);if(i.attachShader(h,w),i.attachShader(h,A),t.index0AttributeName!==void 0?i.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h),o.debug.checkShaderErrors){const S=i.getProgramInfoLog(h).trim(),L=i.getShaderInfoLog(w).trim(),U=i.getShaderInfoLog(A).trim();let G=!0,R=!0;if(i.getProgramParameter(h,35714)===!1){G=!1;const D=Ll(i,w,"vertex"),N=Ll(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,35715)+`

Program Info Log: `+S+`
`+D+`
`+N)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(L===""||U==="")&&(R=!1);R&&(this.diagnostics={runnable:G,programLog:S,vertexShader:{log:L,prefix:p},fragmentShader:{log:U,prefix:g}})}i.deleteShader(w),i.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new ms(i,h)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=a_(i,h)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=Qm++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=A,this}let g_=0;class x_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new v_(e),t.set(e,n)),n}}class v_{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}}function y_(o,e,t,n,i,r,a){const s=new _c,l=new x_,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x,S,L,U,G){const R=U.fog,D=G.geometry,N=x.isMeshStandardMaterial?U.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||N),$=q&&q.mapping===As?q.image.height:null,k=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=K!==void 0?K.length:0;let ce=0;D.morphAttributes.position!==void 0&&(ce=1),D.morphAttributes.normal!==void 0&&(ce=2),D.morphAttributes.color!==void 0&&(ce=3);let O,Z,ee,te;if(k){const ze=pn[k];O=ze.vertexShader,Z=ze.fragmentShader}else O=x.vertexShader,Z=x.fragmentShader,l.update(x),ee=l.getVertexShaderID(x),te=l.getFragmentShaderID(x);const B=o.getRenderTarget(),Se=x.alphaTest>0,fe=x.clearcoat>0,de=x.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:x.type,vertexShader:O,fragmentShader:Z,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?o.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Si,map:!!x.map,matcap:!!x.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:$,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Vh,tangentSpaceNormalMap:x.normalMapType===Gh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Be,clearcoat:fe,clearcoatMap:fe&&!!x.clearcoatMap,clearcoatRoughnessMap:fe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!x.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!x.iridescenceMap,iridescenceThicknessMap:de&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===qi,alphaMap:!!x.alphaMap,alphaTest:Se,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!R,useFog:x.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Rn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bn,flipSided:x.side===Vt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(g(S,x),M(S,x),S.push(o.outputEncoding)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputEncoding),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.combine),x.push(S.vertexUvs),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){s.disableAll(),S.isWebGL2&&s.enable(0),S.supportsVertexTextures&&s.enable(1),S.instancing&&s.enable(2),S.instancingColor&&s.enable(3),S.map&&s.enable(4),S.matcap&&s.enable(5),S.envMap&&s.enable(6),S.lightMap&&s.enable(7),S.aoMap&&s.enable(8),S.emissiveMap&&s.enable(9),S.bumpMap&&s.enable(10),S.normalMap&&s.enable(11),S.objectSpaceNormalMap&&s.enable(12),S.tangentSpaceNormalMap&&s.enable(13),S.clearcoat&&s.enable(14),S.clearcoatMap&&s.enable(15),S.clearcoatRoughnessMap&&s.enable(16),S.clearcoatNormalMap&&s.enable(17),S.iridescence&&s.enable(18),S.iridescenceMap&&s.enable(19),S.iridescenceThicknessMap&&s.enable(20),S.displacementMap&&s.enable(21),S.specularMap&&s.enable(22),S.roughnessMap&&s.enable(23),S.metalnessMap&&s.enable(24),S.gradientMap&&s.enable(25),S.alphaMap&&s.enable(26),S.alphaTest&&s.enable(27),S.vertexColors&&s.enable(28),S.vertexAlphas&&s.enable(29),S.vertexUvs&&s.enable(30),S.vertexTangents&&s.enable(31),S.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.physicallyCorrectLights&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.specularIntensityMap&&s.enable(15),S.specularColorMap&&s.enable(16),S.transmission&&s.enable(17),S.transmissionMap&&s.enable(18),S.thicknessMap&&s.enable(19),S.sheen&&s.enable(20),S.sheenColorMap&&s.enable(21),S.sheenRoughnessMap&&s.enable(22),S.decodeVideoTexture&&s.enable(23),S.opaque&&s.enable(24),x.push(s.mask)}function v(x){const S=_[x.type];let L;if(S){const U=pn[S];L=af.clone(U.uniforms)}else L=x.uniforms;return L}function y(x,S){let L;for(let U=0,G=c.length;U<G;U++){const R=c[U];if(R.cacheKey===S){L=R,++L.usedTimes;break}}return L===void 0&&(L=new __(o,S,x,r),c.push(L)),L}function w(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:C}}function M_(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function S_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Fl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ol(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,m,_,h,p){let g=o[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:h,group:p},o[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=d.renderOrder,g.z=h,g.group=p),e++,g}function s(d,f,m,_,h,p){const g=a(d,f,m,_,h,p);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(d,f,m,_,h,p){const g=a(d,f,m,_,h,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||S_),n.length>1&&n.sort(f||Fl),i.length>1&&i.sort(f||Fl)}function u(){for(let d=e,f=o.length;d<f;d++){const m=o[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function b_(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new Ol,o.set(n,[a])):i>=r.length?(a=new Ol,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function w_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Xe};break;case"SpotLight":t={position:new z,direction:new z,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new z,halfWidth:new z,halfHeight:new z};break}return o[e.id]=t,t}}}function T_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let E_=0;function A_(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function C_(o,e){const t=new w_,n=T_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,a=new dt,s=new dt;function l(u,d){let f=0,m=0,_=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let h=0,p=0,g=0,M=0,v=0,y=0,w=0,A=0,C=0,x=0;u.sort(A_);const S=d!==!0?Math.PI:1;for(let U=0,G=u.length;U<G;U++){const R=u[U],D=R.color,N=R.intensity,q=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=D.r*N*S,m+=D.g*N*S,_+=D.b*N*S;else if(R.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],N);else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const K=R.shadow,j=n.get(R);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,i.directionalShadow[h]=j,i.directionalShadowMap[h]=$,i.directionalShadowMatrix[h]=R.shadow.matrix,y++}i.directional[h]=k,h++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(D).multiplyScalar(N*S),k.distance=q,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[g]=k;const K=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,K.updateMatrices(R),R.castShadow&&x++),i.spotLightMatrix[g]=K.matrix,R.castShadow){const j=n.get(R);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,i.spotShadow[g]=j,i.spotShadowMap[g]=$,A++}g++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(D).multiplyScalar(N),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),i.rectArea[M]=k,M++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*S),k.distance=R.distance,k.decay=R.decay,R.castShadow){const K=R.shadow,j=n.get(R);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=R.shadow.matrix,w++}i.point[p]=k,p++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(N*S),k.groundColor.copy(R.groundColor).multiplyScalar(N*S),i.hemi[v]=k,v++}}M>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const L=i.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==g||L.rectAreaLength!==M||L.hemiLength!==v||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==A||L.numSpotMaps!==C)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=M,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,L.directionalLength=h,L.pointLength=p,L.spotLength=g,L.rectAreaLength=M,L.hemiLength=v,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=A,L.numSpotMaps=C,i.version=E_++)}function c(u,d){let f=0,m=0,_=0,h=0,p=0;const g=d.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const y=u[M];if(y.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),f++}else if(y.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),_++}else if(y.isRectAreaLight){const w=i.rectArea[h];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),s.identity(),a.copy(y.matrixWorld),a.premultiply(g),s.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),h++}else if(y.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function Nl(o,e){const t=new C_(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function s(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function L_(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new Nl(o,e),t.set(r,[l])):a>=s.length?(l=new Nl(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class P_ extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class D_ extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function F_(o,e,t){let n=new bc;const i=new ke,r=new ke,a=new rt,s=new P_({depthPacking:Bh}),l=new D_,c={},u=t.maxTextureSize,d={[Yn]:Vt,[Vt]:Yn,[Bn]:Bn},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:R_,fragmentShader:I_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ti;_.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Dn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc,this.render=function(y,w,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const C=o.getRenderTarget(),x=o.getActiveCubeFace(),S=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Hn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let U=0,G=y.length;U<G;U++){const R=y[U],D=R.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const N=D.getFrameExtents();if(i.multiply(N),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/N.x),i.x=r.x*N.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/N.y),i.y=r.y*N.y,D.mapSize.y=r.y)),D.map===null){const $=this.type!==vr?{minFilter:Tt,magFilter:Tt}:{};D.map=new bi(i.x,i.y,$),D.map.texture.name=R.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const q=D.getViewportCount();for(let $=0;$<q;$++){const k=D.getViewport($);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),L.viewport(a),D.updateMatrices(R,$),n=D.getFrustum(),v(w,A,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===vr&&g(D,A),D.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,S)};function g(y,w){const A=e.update(h);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new bi(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(w,null,A,f,h,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(w,null,A,m,h,null)}function M(y,w,A,C,x,S){let L=null;const U=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(U!==void 0)L=U;else if(L=A.isPointLight===!0?l:s,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=L.uuid,R=w.uuid;let D=c[G];D===void 0&&(D={},c[G]=D);let N=D[R];N===void 0&&(N=L.clone(),D[R]=N),L=N}return L.visible=w.visible,L.wireframe=w.wireframe,S===vr?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:d[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=C,L.farDistance=x),L}function v(y,w,A,C,x){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===vr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const U=e.update(y),G=y.material;if(Array.isArray(G)){const R=U.groups;for(let D=0,N=R.length;D<N;D++){const q=R[D],$=G[q.materialIndex];if($&&$.visible){const k=M(y,$,C,A.near,A.far,x);o.renderBufferDirect(A,null,U,k,y,q)}}}else if(G.visible){const R=M(y,G,C,A.near,A.far,x);o.renderBufferDirect(A,null,U,R,y,null)}}const L=y.children;for(let U=0,G=L.length;U<G;U++)v(L[U],w,A,C,x)}}function O_(o,e,t){const n=t.isWebGL2;function i(){let P=!1;const V=new rt;let J=null;const ae=new rt(0,0,0,0);return{setMask:function(he){J!==he&&!P&&(o.colorMask(he,he,he,he),J=he)},setLocked:function(he){P=he},setClear:function(he,Fe,lt,mt,Qn){Qn===!0&&(he*=mt,Fe*=mt,lt*=mt),V.set(he,Fe,lt,mt),ae.equals(V)===!1&&(o.clearColor(he,Fe,lt,mt),ae.copy(V))},reset:function(){P=!1,J=null,ae.set(-1,0,0,0)}}}function r(){let P=!1,V=null,J=null,ae=null;return{setTest:function(he){he?Se(2929):fe(2929)},setMask:function(he){V!==he&&!P&&(o.depthMask(he),V=he)},setFunc:function(he){if(J!==he){switch(he){case ch:o.depthFunc(512);break;case uh:o.depthFunc(519);break;case hh:o.depthFunc(513);break;case Pa:o.depthFunc(515);break;case fh:o.depthFunc(514);break;case dh:o.depthFunc(518);break;case ph:o.depthFunc(516);break;case mh:o.depthFunc(517);break;default:o.depthFunc(515)}J=he}},setLocked:function(he){P=he},setClear:function(he){ae!==he&&(o.clearDepth(he),ae=he)},reset:function(){P=!1,V=null,J=null,ae=null}}}function a(){let P=!1,V=null,J=null,ae=null,he=null,Fe=null,lt=null,mt=null,Qn=null;return{setTest:function(Ve){P||(Ve?Se(2960):fe(2960))},setMask:function(Ve){V!==Ve&&!P&&(o.stencilMask(Ve),V=Ve)},setFunc:function(Ve,Mn,$t){(J!==Ve||ae!==Mn||he!==$t)&&(o.stencilFunc(Ve,Mn,$t),J=Ve,ae=Mn,he=$t)},setOp:function(Ve,Mn,$t){(Fe!==Ve||lt!==Mn||mt!==$t)&&(o.stencilOp(Ve,Mn,$t),Fe=Ve,lt=Mn,mt=$t)},setLocked:function(Ve){P=Ve},setClear:function(Ve){Qn!==Ve&&(o.clearStencil(Ve),Qn=Ve)},reset:function(){P=!1,V=null,J=null,ae=null,he=null,Fe=null,lt=null,mt=null,Qn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,h=[],p=null,g=!1,M=null,v=null,y=null,w=null,A=null,C=null,x=null,S=!1,L=null,U=null,G=null,R=null,D=null;const N=o.getParameter(35661);let q=!1,$=0;const k=o.getParameter(7938);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=$>=2);let K=null,j={};const ce=o.getParameter(3088),O=o.getParameter(2978),Z=new rt().fromArray(ce),ee=new rt().fromArray(O);function te(P,V,J){const ae=new Uint8Array(4),he=o.createTexture();o.bindTexture(P,he),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let Fe=0;Fe<J;Fe++)o.texImage2D(V+Fe,0,6408,1,1,0,6408,5121,ae);return he}const B={};B[3553]=te(3553,3553,1),B[34067]=te(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(Pa),pt(!1),Yt(To),Se(2884),Mt(Hn);function Se(P){f[P]!==!0&&(o.enable(P),f[P]=!0)}function fe(P){f[P]!==!1&&(o.disable(P),f[P]=!1)}function de(P,V){return m[P]!==V?(o.bindFramebuffer(P,V),m[P]=V,n&&(P===36009&&(m[36160]=V),P===36160&&(m[36009]=V)),!0):!1}function oe(P,V){let J=h,ae=!1;if(P)if(J=_.get(V),J===void 0&&(J=[],_.set(V,J)),P.isWebGLMultipleRenderTargets){const he=P.texture;if(J.length!==he.length||J[0]!==36064){for(let Fe=0,lt=he.length;Fe<lt;Fe++)J[Fe]=36064+Fe;J.length=he.length,ae=!0}}else J[0]!==36064&&(J[0]=36064,ae=!0);else J[0]!==1029&&(J[0]=1029,ae=!0);ae&&(t.isWebGL2?o.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function ze(P){return p!==P?(o.useProgram(P),p=P,!0):!1}const be={[Vi]:32774,[Ju]:32778,[Qu]:32779};if(n)be[Lo]=32775,be[Po]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(be[Lo]=P.MIN_EXT,be[Po]=P.MAX_EXT)}const ve={[eh]:0,[th]:1,[nh]:768,[ac]:770,[lh]:776,[ah]:774,[rh]:772,[ih]:769,[oc]:771,[oh]:775,[sh]:773};function Mt(P,V,J,ae,he,Fe,lt,mt){if(P===Hn){g===!0&&(fe(3042),g=!1);return}if(g===!1&&(Se(3042),g=!0),P!==Ku){if(P!==M||mt!==S){if((v!==Vi||A!==Vi)&&(o.blendEquation(32774),v=Vi,A=Vi),mt)switch(P){case qi:o.blendFuncSeparate(1,771,1,771);break;case Eo:o.blendFunc(1,1);break;case Ao:o.blendFuncSeparate(0,769,0,1);break;case Co:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case qi:o.blendFuncSeparate(770,771,1,771);break;case Eo:o.blendFunc(770,1);break;case Ao:o.blendFuncSeparate(0,769,0,1);break;case Co:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,w=null,C=null,x=null,M=P,S=mt}return}he=he||V,Fe=Fe||J,lt=lt||ae,(V!==v||he!==A)&&(o.blendEquationSeparate(be[V],be[he]),v=V,A=he),(J!==y||ae!==w||Fe!==C||lt!==x)&&(o.blendFuncSeparate(ve[J],ve[ae],ve[Fe],ve[lt]),y=J,w=ae,C=Fe,x=lt),M=P,S=!1}function qt(P,V){P.side===Bn?fe(2884):Se(2884);let J=P.side===Vt;V&&(J=!J),pt(J),P.blending===qi&&P.transparent===!1?Mt(Hn):Mt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const ae=P.stencilWrite;c.setTest(ae),ae&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Oe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(32926):fe(32926)}function pt(P){L!==P&&(P?o.frontFace(2304):o.frontFace(2305),L=P)}function Yt(P){P!==$u?(Se(2884),P!==U&&(P===To?o.cullFace(1029):P===ju?o.cullFace(1028):o.cullFace(1032))):fe(2884),U=P}function et(P){P!==G&&(q&&o.lineWidth(P),G=P)}function Oe(P,V,J){P?(Se(32823),(R!==V||D!==J)&&(o.polygonOffset(V,J),R=V,D=J)):fe(32823)}function yn(P){P?Se(3089):fe(3089)}function nn(P){P===void 0&&(P=33984+N-1),K!==P&&(o.activeTexture(P),K=P)}function E(P,V,J){J===void 0&&(K===null?J=33984+N-1:J=K);let ae=j[J];ae===void 0&&(ae={type:void 0,texture:void 0},j[J]=ae),(ae.type!==P||ae.texture!==V)&&(K!==J&&(o.activeTexture(J),K=J),o.bindTexture(P,V||B[P]),ae.type=P,ae.texture=V)}function b(){const P=j[K];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{o.compressedTexImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(P){Z.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function pe(P){ee.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),ee.copy(P))}function Re(P,V){let J=d.get(V);J===void 0&&(J=new WeakMap,d.set(V,J));let ae=J.get(P);ae===void 0&&(ae=o.getUniformBlockIndex(V,P.name),J.set(P,ae))}function Ge(P,V){const ae=d.get(V).get(P);u.get(V)!==ae&&(o.uniformBlockBinding(V,ae,P.__bindingPointIndex),u.set(V,ae))}function ot(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},K=null,j={},m={},_=new WeakMap,h=[],p=null,g=!1,M=null,v=null,y=null,w=null,A=null,C=null,x=null,S=!1,L=null,U=null,G=null,R=null,D=null,Z.set(0,0,o.canvas.width,o.canvas.height),ee.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Se,disable:fe,bindFramebuffer:de,drawBuffers:oe,useProgram:ze,setBlending:Mt,setMaterial:qt,setFlipSided:pt,setCullFace:Yt,setLineWidth:et,setPolygonOffset:Oe,setScissorTest:yn,activeTexture:nn,bindTexture:E,unbindTexture:b,compressedTexImage2D:H,compressedTexImage3D:Q,texImage2D:xe,texImage3D:ue,updateUBOMapping:Re,uniformBlockBinding:Ge,texStorage2D:Y,texStorage3D:_e,texSubImage2D:ne,texSubImage3D:re,compressedTexSubImage2D:ye,compressedTexSubImage3D:se,scissor:ge,viewport:pe,reset:ot}}function N_(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,b){return g?new OffscreenCanvas(E,b):Pr("canvas")}function v(E,b,H,Q){let ne=1;if((E.width>Q||E.height>Q)&&(ne=Q/Math.max(E.width,E.height)),ne<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const re=b?Na:Math.floor,ye=re(ne*E.width),se=re(ne*E.height);h===void 0&&(h=M(ye,se));const Y=H?M(ye,se):h;return Y.width=ye,Y.height=se,Y.getContext("2d").drawImage(E,0,0,ye,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ye+"x"+se+")."),Y}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return rl(E.width)&&rl(E.height)}function w(E){return s?!1:E.wrapS!==ln||E.wrapT!==ln||E.minFilter!==Tt&&E.minFilter!==We}function A(E,b){return E.generateMipmaps&&b&&E.minFilter!==Tt&&E.minFilter!==We}function C(E){o.generateMipmap(E)}function x(E,b,H,Q,ne=!1){if(s===!1)return b;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let re=b;return b===6403&&(H===5126&&(re=33326),H===5131&&(re=33325),H===5121&&(re=33321)),b===33319&&(H===5126&&(re=33328),H===5131&&(re=33327),H===5121&&(re=33323)),b===6408&&(H===5126&&(re=34836),H===5131&&(re=34842),H===5121&&(re=Q===Be&&ne===!1?35907:32856),H===32819&&(re=32854),H===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function S(E,b,H){return A(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==Tt&&E.minFilter!==We?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function L(E){return E===Tt||E===Do||E===Bs?9728:9729}function U(E){const b=E.target;b.removeEventListener("dispose",U),R(b),b.isVideoTexture&&_.delete(b)}function G(E){const b=E.target;b.removeEventListener("dispose",G),N(b)}function R(E){const b=n.get(E);if(b.__webglInit===void 0)return;const H=E.source,Q=p.get(H);if(Q){const ne=Q[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(E),Object.keys(Q).length===0&&p.delete(H)}n.remove(E)}function D(E){const b=n.get(E);o.deleteTexture(b.__webglTexture);const H=E.source,Q=p.get(H);delete Q[b.__cacheKey],a.memory.textures--}function N(E){const b=E.texture,H=n.get(E),Q=n.get(b);if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)o.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,re=b.length;ne<re;ne++){const ye=n.get(b[ne]);ye.__webglTexture&&(o.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(b[ne])}n.remove(b),n.remove(E)}let q=0;function $(){q=0}function k(){const E=q;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),q+=1,E}function K(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.encoding),b.join()}function j(E,b){const H=n.get(E);if(E.isVideoTexture&&yn(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(H,E,b);return}}t.bindTexture(3553,H.__webglTexture,33984+b)}function ce(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){fe(H,E,b);return}t.bindTexture(35866,H.__webglTexture,33984+b)}function O(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){fe(H,E,b);return}t.bindTexture(32879,H.__webglTexture,33984+b)}function Z(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){de(H,E,b);return}t.bindTexture(34067,H.__webglTexture,33984+b)}const ee={[Ia]:10497,[ln]:33071,[Fa]:33648},te={[Tt]:9728,[Do]:9984,[Bs]:9986,[We]:9729,[bh]:9985,[Ar]:9987};function B(E,b,H){if(H?(o.texParameteri(E,10242,ee[b.wrapS]),o.texParameteri(E,10243,ee[b.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,ee[b.wrapR]),o.texParameteri(E,10240,te[b.magFilter]),o.texParameteri(E,10241,te[b.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(b.wrapS!==ln||b.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,L(b.magFilter)),o.texParameteri(E,10241,L(b.minFilter)),b.minFilter!==Tt&&b.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Tt||b.minFilter!==Bs&&b.minFilter!==Ar||b.type===di&&e.has("OES_texture_float_linear")===!1||s===!1&&b.type===Cr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Se(E,b){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",U));const Q=b.source;let ne=p.get(Q);ne===void 0&&(ne={},p.set(Q,ne));const re=K(b);if(re!==E.__cacheKey){ne[re]===void 0&&(ne[re]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[re].usedTimes++;const ye=ne[E.__cacheKey];ye!==void 0&&(ne[E.__cacheKey].usedTimes--,ye.usedTimes===0&&D(b)),E.__cacheKey=re,E.__webglTexture=ne[re].texture}return H}function fe(E,b,H){let Q=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=35866),b.isData3DTexture&&(Q=32879);const ne=Se(E,b),re=b.source;t.bindTexture(Q,E.__webglTexture,33984+H);const ye=n.get(re);if(re.version!==ye.__version||ne===!0){t.activeTexture(33984+H),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const se=w(b)&&y(b.image)===!1;let Y=v(b.image,se,!1,u);Y=nn(b,Y);const _e=y(Y)||s,xe=r.convert(b.format,b.encoding);let ue=r.convert(b.type),ge=x(b.internalFormat,xe,ue,b.encoding,b.isVideoTexture);B(Q,b,_e);let pe;const Re=b.mipmaps,Ge=s&&b.isVideoTexture!==!0,ot=ye.__version===void 0||ne===!0,P=S(b,Y,_e);if(b.isDepthTexture)ge=6402,s?b.type===di?ge=36012:b.type===fi?ge=33190:b.type===Yi?ge=35056:ge=33189:b.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===mi&&ge===6402&&b.type!==uc&&b.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=fi,ue=r.convert(b.type)),b.format===Qi&&ge===6402&&(ge=34041,b.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Yi,ue=r.convert(b.type))),ot&&(Ge?t.texStorage2D(3553,1,ge,Y.width,Y.height):t.texImage2D(3553,0,ge,Y.width,Y.height,0,xe,ue,null));else if(b.isDataTexture)if(Re.length>0&&_e){Ge&&ot&&t.texStorage2D(3553,P,ge,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)pe=Re[V],Ge?t.texSubImage2D(3553,V,0,0,pe.width,pe.height,xe,ue,pe.data):t.texImage2D(3553,V,ge,pe.width,pe.height,0,xe,ue,pe.data);b.generateMipmaps=!1}else Ge?(ot&&t.texStorage2D(3553,P,ge,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,xe,ue,Y.data)):t.texImage2D(3553,0,ge,Y.width,Y.height,0,xe,ue,Y.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&ot&&t.texStorage3D(35866,P,ge,Re[0].width,Re[0].height,Y.depth);for(let V=0,J=Re.length;V<J;V++)pe=Re[V],b.format!==cn?xe!==null?Ge?t.compressedTexSubImage3D(35866,V,0,0,0,pe.width,pe.height,Y.depth,xe,pe.data,0,0):t.compressedTexImage3D(35866,V,ge,pe.width,pe.height,Y.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(35866,V,0,0,0,pe.width,pe.height,Y.depth,xe,ue,pe.data):t.texImage3D(35866,V,ge,pe.width,pe.height,Y.depth,0,xe,ue,pe.data)}else{Ge&&ot&&t.texStorage2D(3553,P,ge,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)pe=Re[V],b.format!==cn?xe!==null?Ge?t.compressedTexSubImage2D(3553,V,0,0,pe.width,pe.height,xe,pe.data):t.compressedTexImage2D(3553,V,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(3553,V,0,0,pe.width,pe.height,xe,ue,pe.data):t.texImage2D(3553,V,ge,pe.width,pe.height,0,xe,ue,pe.data)}else if(b.isDataArrayTexture)Ge?(ot&&t.texStorage3D(35866,P,ge,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,xe,ue,Y.data)):t.texImage3D(35866,0,ge,Y.width,Y.height,Y.depth,0,xe,ue,Y.data);else if(b.isData3DTexture)Ge?(ot&&t.texStorage3D(32879,P,ge,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,xe,ue,Y.data)):t.texImage3D(32879,0,ge,Y.width,Y.height,Y.depth,0,xe,ue,Y.data);else if(b.isFramebufferTexture){if(ot)if(Ge)t.texStorage2D(3553,P,ge,Y.width,Y.height);else{let V=Y.width,J=Y.height;for(let ae=0;ae<P;ae++)t.texImage2D(3553,ae,ge,V,J,0,xe,ue,null),V>>=1,J>>=1}}else if(Re.length>0&&_e){Ge&&ot&&t.texStorage2D(3553,P,ge,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)pe=Re[V],Ge?t.texSubImage2D(3553,V,0,0,xe,ue,pe):t.texImage2D(3553,V,ge,xe,ue,pe);b.generateMipmaps=!1}else Ge?(ot&&t.texStorage2D(3553,P,ge,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,xe,ue,Y)):t.texImage2D(3553,0,ge,xe,ue,Y);A(b,_e)&&C(Q),ye.__version=re.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function de(E,b,H){if(b.image.length!==6)return;const Q=Se(E,b),ne=b.source;t.bindTexture(34067,E.__webglTexture,33984+H);const re=n.get(ne);if(ne.version!==re.__version||Q===!0){t.activeTexture(33984+H),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const ye=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,Y=[];for(let V=0;V<6;V++)!ye&&!se?Y[V]=v(b.image[V],!1,!0,c):Y[V]=se?b.image[V].image:b.image[V],Y[V]=nn(b,Y[V]);const _e=Y[0],xe=y(_e)||s,ue=r.convert(b.format,b.encoding),ge=r.convert(b.type),pe=x(b.internalFormat,ue,ge,b.encoding),Re=s&&b.isVideoTexture!==!0,Ge=re.__version===void 0||Q===!0;let ot=S(b,_e,xe);B(34067,b,xe);let P;if(ye){Re&&Ge&&t.texStorage2D(34067,ot,pe,_e.width,_e.height);for(let V=0;V<6;V++){P=Y[V].mipmaps;for(let J=0;J<P.length;J++){const ae=P[J];b.format!==cn?ue!==null?Re?t.compressedTexSubImage2D(34069+V,J,0,0,ae.width,ae.height,ue,ae.data):t.compressedTexImage2D(34069+V,J,pe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+V,J,0,0,ae.width,ae.height,ue,ge,ae.data):t.texImage2D(34069+V,J,pe,ae.width,ae.height,0,ue,ge,ae.data)}}}else{P=b.mipmaps,Re&&Ge&&(P.length>0&&ot++,t.texStorage2D(34067,ot,pe,Y[0].width,Y[0].height));for(let V=0;V<6;V++)if(se){Re?t.texSubImage2D(34069+V,0,0,0,Y[V].width,Y[V].height,ue,ge,Y[V].data):t.texImage2D(34069+V,0,pe,Y[V].width,Y[V].height,0,ue,ge,Y[V].data);for(let J=0;J<P.length;J++){const he=P[J].image[V].image;Re?t.texSubImage2D(34069+V,J+1,0,0,he.width,he.height,ue,ge,he.data):t.texImage2D(34069+V,J+1,pe,he.width,he.height,0,ue,ge,he.data)}}else{Re?t.texSubImage2D(34069+V,0,0,0,ue,ge,Y[V]):t.texImage2D(34069+V,0,pe,ue,ge,Y[V]);for(let J=0;J<P.length;J++){const ae=P[J];Re?t.texSubImage2D(34069+V,J+1,0,0,ue,ge,ae.image[V]):t.texImage2D(34069+V,J+1,pe,ue,ge,ae.image[V])}}}A(b,xe)&&C(34067),re.__version=ne.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function oe(E,b,H,Q,ne){const re=r.convert(H.format,H.encoding),ye=r.convert(H.type),se=x(H.internalFormat,re,ye,H.encoding);n.get(b).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,se,b.width,b.height,b.depth,0,re,ye,null):t.texImage2D(ne,0,se,b.width,b.height,0,re,ye,null)),t.bindFramebuffer(36160,E),Oe(b)?f.framebufferTexture2DMultisampleEXT(36160,Q,ne,n.get(H).__webglTexture,0,et(b)):(ne===3553||ne>=34069&&ne<=34074)&&o.framebufferTexture2D(36160,Q,ne,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(E,b,H){if(o.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let Q=33189;if(H||Oe(b)){const ne=b.depthTexture;ne&&ne.isDepthTexture&&(ne.type===di?Q=36012:ne.type===fi&&(Q=33190));const re=et(b);Oe(b)?f.renderbufferStorageMultisampleEXT(36161,re,Q,b.width,b.height):o.renderbufferStorageMultisample(36161,re,Q,b.width,b.height)}else o.renderbufferStorage(36161,Q,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){const Q=et(b);H&&Oe(b)===!1?o.renderbufferStorageMultisample(36161,Q,35056,b.width,b.height):Oe(b)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0;ne<Q.length;ne++){const re=Q[ne],ye=r.convert(re.format,re.encoding),se=r.convert(re.type),Y=x(re.internalFormat,ye,se,re.encoding),_e=et(b);H&&Oe(b)===!1?o.renderbufferStorageMultisample(36161,_e,Y,b.width,b.height):Oe(b)?f.renderbufferStorageMultisampleEXT(36161,_e,Y,b.width,b.height):o.renderbufferStorage(36161,Y,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function be(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const Q=n.get(b.depthTexture).__webglTexture,ne=et(b);if(b.depthTexture.format===mi)Oe(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ne):o.framebufferTexture2D(36160,36096,3553,Q,0);else if(b.depthTexture.format===Qi)Oe(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ne):o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function ve(E){const b=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");be(b.__webglFramebuffer,E)}else if(H){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=o.createRenderbuffer(),ze(b.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),ze(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Mt(E,b,H){const Q=n.get(E);b!==void 0&&oe(Q.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&ve(E)}function qt(E){const b=E.texture,H=n.get(E),Q=n.get(b);E.addEventListener("dispose",G),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=b.version,a.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,re=E.isWebGLMultipleRenderTargets===!0,ye=y(E)||s;if(ne){H.__webglFramebuffer=[];for(let se=0;se<6;se++)H.__webglFramebuffer[se]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),re)if(i.drawBuffers){const se=E.texture;for(let Y=0,_e=se.length;Y<_e;Y++){const xe=n.get(se[Y]);xe.__webglTexture===void 0&&(xe.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Oe(E)===!1){const se=re?b:[b];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let Y=0;Y<se.length;Y++){const _e=se[Y];H.__webglColorRenderbuffer[Y]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[Y]);const xe=r.convert(_e.format,_e.encoding),ue=r.convert(_e.type),ge=x(_e.internalFormat,xe,ue,_e.encoding,E.isXRRenderTarget===!0),pe=et(E);o.renderbufferStorageMultisample(36161,pe,ge,E.width,E.height),o.framebufferRenderbuffer(36160,36064+Y,36161,H.__webglColorRenderbuffer[Y])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),ze(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,Q.__webglTexture),B(34067,b,ye);for(let se=0;se<6;se++)oe(H.__webglFramebuffer[se],E,b,36064,34069+se);A(b,ye)&&C(34067),t.unbindTexture()}else if(re){const se=E.texture;for(let Y=0,_e=se.length;Y<_e;Y++){const xe=se[Y],ue=n.get(xe);t.bindTexture(3553,ue.__webglTexture),B(3553,xe,ye),oe(H.__webglFramebuffer,E,xe,36064+Y,3553),A(xe,ye)&&C(3553)}t.unbindTexture()}else{let se=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?se=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,Q.__webglTexture),B(se,b,ye),oe(H.__webglFramebuffer,E,b,36064,se),A(b,ye)&&C(se),t.unbindTexture()}E.depthBuffer&&ve(E)}function pt(E){const b=y(E)||s,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,ne=H.length;Q<ne;Q++){const re=H[Q];if(A(re,b)){const ye=E.isWebGLCubeRenderTarget?34067:3553,se=n.get(re).__webglTexture;t.bindTexture(ye,se),C(ye),t.unbindTexture()}}}function Yt(E){if(s&&E.samples>0&&Oe(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,Q=E.height;let ne=16384;const re=[],ye=E.stencilBuffer?33306:36096,se=n.get(E),Y=E.isWebGLMultipleRenderTargets===!0;if(Y)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,se.__webglFramebuffer),o.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,se.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){re.push(36064+_e),E.depthBuffer&&re.push(ye);const xe=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(xe===!1&&(E.depthBuffer&&(ne|=256),E.stencilBuffer&&(ne|=1024)),Y&&o.framebufferRenderbuffer(36008,36064,36161,se.__webglColorRenderbuffer[_e]),xe===!0&&(o.invalidateFramebuffer(36008,[ye]),o.invalidateFramebuffer(36009,[ye])),Y){const ue=n.get(b[_e]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ue,0)}o.blitFramebuffer(0,0,H,Q,0,0,H,Q,ne,9728),m&&o.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+_e,36161,se.__webglColorRenderbuffer[_e]);const xe=n.get(b[_e]).__webglTexture;t.bindFramebuffer(36160,se.__webglFramebuffer),o.framebufferTexture2D(36009,36064+_e,3553,xe,0)}t.bindFramebuffer(36009,se.__webglMultisampledFramebuffer)}}function et(E){return Math.min(d,E.samples)}function Oe(E){const b=n.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function yn(E){const b=a.render.frame;_.get(E)!==b&&(_.set(E,b),E.update())}function nn(E,b){const H=E.encoding,Q=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Oa||H!==Si&&(H===Be?s===!1?e.has("EXT_sRGB")===!0&&Q===cn?(E.format=Oa,E.minFilter=We,E.generateMipmaps=!1):b=dc.sRGBToLinear(b):(Q!==cn||ne!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),b}this.allocateTextureUnit=k,this.resetTextureUnits=$,this.setTexture2D=j,this.setTexture2DArray=ce,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=Mt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Oe}function U_(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===Mi)return 5121;if(r===Ah)return 32819;if(r===Ch)return 32820;if(r===wh)return 5120;if(r===Th)return 5122;if(r===uc)return 5123;if(r===Eh)return 5124;if(r===fi)return 5125;if(r===di)return 5126;if(r===Cr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Lh)return 6406;if(r===cn)return 6408;if(r===Ph)return 6409;if(r===Dh)return 6410;if(r===mi)return 6402;if(r===Qi)return 34041;if(r===Oa)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Rh)return 6403;if(r===Ih)return 36244;if(r===Fh)return 33319;if(r===Oh)return 33320;if(r===Nh)return 36249;if(r===Gs||r===Vs||r===Ws||r===Hs)if(a===Be)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ro||r===Io||r===Fo||r===Oo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===No||r===Uo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===No)return a===Be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Uo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zo||r===ko||r===Bo||r===Go||r===Vo||r===Wo||r===Ho||r===Xo||r===qo||r===Yo||r===$o||r===jo||r===Zo||r===Ko)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===zo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ko)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Go)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ho)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$o)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ko)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Xs)return a===Be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===zh||r===Jo||r===Qo||r===el)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===Xs)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===el)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yi?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class z_ extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cs extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k_={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,n),g=this._getHandJoint(c,h);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class B_ extends Et{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:mi,u!==mi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mi&&(n=fi),n===void 0&&u===Qi&&(n=Yi),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1}}class G_ extends lr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,_=null;const h=t.getContextAttributes();let p=null,g=null;const M=[],v=[],y=new Set,w=new Map,A=new on;A.layers.enable(1),A.viewport=new rt;const C=new on;C.layers.enable(2),C.viewport=new rt;const x=[A,C],S=new z_;S.layers.enable(1),S.layers.enable(2);let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Z=M[O];return Z===void 0&&(Z=new xa,M[O]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(O){let Z=M[O];return Z===void 0&&(Z=new xa,M[O]=Z),Z.getGripSpace()},this.getHand=function(O){let Z=M[O];return Z===void 0&&(Z=new xa,M[O]=Z),Z.getHandSpace()};function G(O){const Z=v.indexOf(O.inputSource);if(Z===-1)return;const ee=M[Z];ee!==void 0&&ee.dispatchEvent({type:O.type,data:O.inputSource})}function R(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",D);for(let O=0;O<M.length;O++){const Z=v[O];Z!==null&&(v[O]=null,M[O].disconnect(Z))}L=null,U=null,e.setRenderTarget(p),m=null,f=null,d=null,i=null,g=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",R),i.addEventListener("inputsourceschange",D),h.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),g=new bi(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Mi,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let Z=null,ee=null,te=null;h.depth&&(te=h.stencil?35056:33190,Z=h.stencil?Qi:mi,ee=h.stencil?Yi:fi);const B={colorFormat:32856,depthFormat:te,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(B),i.updateRenderState({layers:[f]}),g=new bi(f.textureWidth,f.textureHeight,{format:cn,type:Mi,depthTexture:new B_(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const Se=e.properties.get(g);Se.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(s),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(O){for(let Z=0;Z<O.removed.length;Z++){const ee=O.removed[Z],te=v.indexOf(ee);te>=0&&(v[te]=null,M[te].disconnect(ee))}for(let Z=0;Z<O.added.length;Z++){const ee=O.added[Z];let te=v.indexOf(ee);if(te===-1){for(let Se=0;Se<M.length;Se++)if(Se>=v.length){v.push(ee),te=Se;break}else if(v[Se]===null){v[Se]=ee,te=Se;break}if(te===-1)break}const B=M[te];B&&B.connect(ee)}}const N=new z,q=new z;function $(O,Z,ee){N.setFromMatrixPosition(Z.matrixWorld),q.setFromMatrixPosition(ee.matrixWorld);const te=N.distanceTo(q),B=Z.projectionMatrix.elements,Se=ee.projectionMatrix.elements,fe=B[14]/(B[10]-1),de=B[14]/(B[10]+1),oe=(B[9]+1)/B[5],ze=(B[9]-1)/B[5],be=(B[8]-1)/B[0],ve=(Se[8]+1)/Se[0],Mt=fe*be,qt=fe*ve,pt=te/(-be+ve),Yt=pt*-be;Z.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Yt),O.translateZ(pt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const et=fe+pt,Oe=de+pt,yn=Mt-Yt,nn=qt+(te-Yt),E=oe*de/Oe*et,b=ze*de/Oe*et;O.projectionMatrix.makePerspective(yn,nn,E,b,et,Oe)}function k(O,Z){Z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;S.near=C.near=A.near=O.near,S.far=C.far=A.far=O.far,(L!==S.near||U!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,U=S.far);const Z=O.parent,ee=S.cameras;k(S,Z);for(let B=0;B<ee.length;B++)k(ee[B],Z);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),O.matrix.copy(S.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const te=O.children;for(let B=0,Se=te.length;B<Se;B++)te[B].updateMatrixWorld(!0);ee.length===2?$(S,A,C):S.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.getPlanes=function(){return y};let K=null;function j(O,Z){if(u=Z.getViewerPose(c||a),_=Z,u!==null){const ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let te=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,te=!0);for(let B=0;B<ee.length;B++){const Se=ee[B];let fe=null;if(m!==null)fe=m.getViewport(Se);else{const oe=d.getViewSubImage(f,Se);fe=oe.viewport,B===0&&(e.setRenderTargetTextures(g,oe.colorTexture,f.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(g))}let de=x[B];de===void 0&&(de=new on,de.layers.enable(B),de.viewport=new rt,x[B]=de),de.matrix.fromArray(Se.transform.matrix),de.projectionMatrix.fromArray(Se.projectionMatrix),de.viewport.set(fe.x,fe.y,fe.width,fe.height),B===0&&S.matrix.copy(de.matrix),te===!0&&S.cameras.push(de)}}for(let ee=0;ee<M.length;ee++){const te=v[ee],B=M[ee];te!==null&&B!==void 0&&B.update(te,Z,c||a)}if(K&&K(O,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ee=null;for(const te of y)Z.detectedPlanes.has(te)||(ee===null&&(ee=[]),ee.push(te));if(ee!==null)for(const te of ee)y.delete(te),w.delete(te),n.dispatchEvent({type:"planeremoved",data:te});for(const te of Z.detectedPlanes)if(!y.has(te))y.add(te),w.set(te,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:te});else{const B=w.get(te);te.lastChangedTime>B&&(w.set(te,te.lastChangedTime),n.dispatchEvent({type:"planechanged",data:te}))}}_=null}const ce=new wc;ce.setAnimationLoop(j),this.setAnimationLoop=function(O){K=O},this.dispose=function(){}}}function V_(o,e){function t(h,p){p.color.getRGB(h.fogColor.value,yc(o)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function n(h,p,g,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(h,p):p.isMeshToonMaterial?(i(h,p),u(h,p)):p.isMeshPhongMaterial?(i(h,p),c(h,p)):p.isMeshStandardMaterial?(i(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,v)):p.isMeshMatcapMaterial?(i(h,p),m(h,p)):p.isMeshDepthMaterial?i(h,p):p.isMeshDistanceMaterial?(i(h,p),_(h,p)):p.isMeshNormalMaterial?i(h,p):p.isLineBasicMaterial?(r(h,p),p.isLineDashedMaterial&&a(h,p)):p.isPointsMaterial?s(h,p,g,M):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===Vt&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===Vt&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),h.uvTransform.value.copy(M.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uv2Transform.value.copy(v.matrix))}function r(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function a(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function s(h,p,g,M){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=M*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Vt&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function W_(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=i[M.id];y===void 0&&(_(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",p));const w=v.program;n.updateUBOMapping(M,w);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){const v=d();M.__bindingPointIndex=v;const y=o.createBuffer(),w=M.__size,A=M.usage;return o.bindBuffer(35345,y),o.bufferData(35345,w,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,y),y}function d(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=i[M.id],y=M.uniforms,w=M.__cache;o.bindBuffer(35345,v);for(let A=0,C=y.length;A<C;A++){const x=y[A];if(m(x,A,w)===!0){const S=x.__offset,L=Array.isArray(x.value)?x.value:[x.value];let U=0;for(let G=0;G<L.length;G++){const R=L[G],D=h(R);typeof R=="number"?(x.__data[0]=R,o.bufferSubData(35345,S+U,x.__data)):R.isMatrix3?(x.__data[0]=R.elements[0],x.__data[1]=R.elements[1],x.__data[2]=R.elements[2],x.__data[3]=R.elements[0],x.__data[4]=R.elements[3],x.__data[5]=R.elements[4],x.__data[6]=R.elements[5],x.__data[7]=R.elements[0],x.__data[8]=R.elements[6],x.__data[9]=R.elements[7],x.__data[10]=R.elements[8],x.__data[11]=R.elements[0]):(R.toArray(x.__data,U),U+=D.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,S,x.__data)}}o.bindBuffer(35345,null)}function m(M,v,y){const w=M.value;if(y[v]===void 0){if(typeof w=="number")y[v]=w;else{const A=Array.isArray(w)?w:[w],C=[];for(let x=0;x<A.length;x++)C.push(A[x].clone());y[v]=C}return!0}else if(typeof w=="number"){if(y[v]!==w)return y[v]=w,!0}else{const A=Array.isArray(y[v])?y[v]:[y[v]],C=Array.isArray(w)?w:[w];for(let x=0;x<A.length;x++){const S=A[x];if(S.equals(C[x])===!1)return S.copy(C[x]),!0}}return!1}function _(M){const v=M.uniforms;let y=0;const w=16;let A=0;for(let C=0,x=v.length;C<x;C++){const S=v[C],L={boundary:0,storage:0},U=Array.isArray(S.value)?S.value:[S.value];for(let G=0,R=U.length;G<R;G++){const D=U[G],N=h(D);L.boundary+=N.boundary,L.storage+=N.storage}if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,C>0){A=y%w;const G=w-A;A!==0&&G-L.boundary<0&&(y+=w-A,S.__offset=y)}y+=L.storage}return A=y%w,A>0&&(y+=w-A),M.__size=y,M.__cache={},this}function h(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function g(){for(const M in i)o.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}function H_(){const o=Pr("canvas");return o.style.display="block",o}function Pc(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:H_(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let d=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Si,this.physicallyCorrectLights=!1,this.toneMapping=Rn,this.toneMappingExposure=1;const h=this;let p=!1,g=0,M=0,v=null,y=-1,w=null;const A=new rt,C=new rt;let x=null,S=e.width,L=e.height,U=1,G=null,R=null;const D=new rt(0,0,S,L),N=new rt(0,0,S,L);let q=!1;const $=new bc;let k=!1,K=!1,j=null;const ce=new dt,O=new ke,Z=new z,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return v===null?U:1}let B=t;function Se(T,F){for(let W=0;W<T.length;W++){const I=T[W],X=e.getContext(I,F);if(X!==null)return X}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${to}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Re,!1),B===null){const F=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&F.shift(),B=Se(F,T),B===null)throw Se(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let fe,de,oe,ze,be,ve,Mt,qt,pt,Yt,et,Oe,yn,nn,E,b,H,Q,ne,re,ye,se,Y,_e;function xe(){fe=new tm(B),de=new jp(B,fe,o),fe.init(de),se=new U_(B,fe,de),oe=new O_(B,fe,de),ze=new rm,be=new M_,ve=new N_(B,fe,oe,be,de,se,ze),Mt=new Kp(h),qt=new em(h),pt=new df(B,de),Y=new Yp(B,fe,pt,de),Yt=new nm(B,pt,ze,Y),et=new lm(B,Yt,pt,ze),ne=new om(B,de,ve),b=new Zp(be),Oe=new y_(h,Mt,qt,fe,de,Y,b),yn=new V_(h,be),nn=new b_,E=new L_(fe,de),Q=new qp(h,Mt,qt,oe,et,u,a),H=new F_(h,et,de),_e=new W_(B,ze,de,oe),re=new $p(B,fe,ze,de),ye=new im(B,fe,ze,de),ze.programs=Oe.programs,h.capabilities=de,h.extensions=fe,h.properties=be,h.renderLists=nn,h.shadowMap=H,h.state=oe,h.info=ze}xe();const ue=new G_(h,B);this.xr=ue,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(S,L,!1))},this.getSize=function(T){return T.set(S,L)},this.setSize=function(T,F,W){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=T,L=F,e.width=Math.floor(T*U),e.height=Math.floor(F*U),W!==!1&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(S*U,L*U).floor()},this.setDrawingBufferSize=function(T,F,W){S=T,L=F,U=W,e.width=Math.floor(T*W),e.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,F,W,I){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,F,W,I),oe.viewport(A.copy(D).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,F,W,I){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,F,W,I),oe.scissor(C.copy(N).multiplyScalar(U).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(T){oe.setScissorTest(q=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,F=!0,W=!0){let I=0;T&&(I|=16384),F&&(I|=256),W&&(I|=1024),B.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),nn.dispose(),E.dispose(),be.dispose(),Mt.dispose(),qt.dispose(),et.dispose(),Y.dispose(),_e.dispose(),Oe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ae),ue.removeEventListener("sessionend",he),j&&(j.dispose(),j=null),Fe.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=ze.autoReset,F=H.enabled,W=H.autoUpdate,I=H.needsUpdate,X=H.type;xe(),ze.autoReset=T,H.enabled=F,H.autoUpdate=W,H.needsUpdate=I,H.type=X}function Re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){const F=T.target;F.removeEventListener("dispose",Ge),ot(F)}function ot(T){P(T),be.remove(T)}function P(T){const F=be.get(T).programs;F!==void 0&&(F.forEach(function(W){Oe.releaseProgram(W)}),T.isShaderMaterial&&Oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,I,X,me){F===null&&(F=ee);const Me=X.isMesh&&X.matrixWorld.determinant()<0,Te=Du(T,F,W,I,X);oe.setMaterial(I,Me);let Ae=W.index,Ie=1;I.wireframe===!0&&(Ae=Yt.getWireframeAttribute(W),Ie=2);const Le=W.drawRange,Pe=W.attributes.position;let je=Le.start*Ie,It=(Le.start+Le.count)*Ie;me!==null&&(je=Math.max(je,me.start*Ie),It=Math.min(It,(me.start+me.count)*Ie)),Ae!==null?(je=Math.max(je,0),It=Math.min(It,Ae.count)):Pe!=null&&(je=Math.max(je,0),It=Math.min(It,Pe.count));const Sn=It-je;if(Sn<0||Sn===1/0)return;Y.setup(X,I,Te,W,Ae);let ei,Ze=re;if(Ae!==null&&(ei=pt.get(Ae),Ze=ye,Ze.setIndex(ei)),X.isMesh)I.wireframe===!0?(oe.setLineWidth(I.wireframeLinewidth*te()),Ze.setMode(1)):Ze.setMode(4);else if(X.isLine){let De=I.linewidth;De===void 0&&(De=1),oe.setLineWidth(De*te()),X.isLineSegments?Ze.setMode(1):X.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else X.isPoints?Ze.setMode(0):X.isSprite&&Ze.setMode(4);if(X.isInstancedMesh)Ze.renderInstances(je,Sn,X.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ns=Math.min(W.instanceCount,De);Ze.renderInstances(je,Sn,Ns)}else Ze.render(je,Sn)},this.compile=function(T,F){function W(I,X,me){I.transparent===!0&&I.side===Bn&&I.forceSinglePass===!1?(I.side=Vt,I.needsUpdate=!0,$t(I,X,me),I.side=Yn,I.needsUpdate=!0,$t(I,X,me),I.side=Bn):$t(I,X,me)}f=E.get(T),f.init(),_.push(f),T.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(h.physicallyCorrectLights),T.traverse(function(I){const X=I.material;if(X)if(Array.isArray(X))for(let me=0;me<X.length;me++){const Me=X[me];W(Me,T,I)}else W(X,T,I)}),_.pop(),f=null};let V=null;function J(T){V&&V(T)}function ae(){Fe.stop()}function he(){Fe.start()}const Fe=new wc;Fe.setAnimationLoop(J),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(T){V=T,ue.setAnimationLoop(T),T===null?Fe.stop():Fe.start()},ue.addEventListener("sessionstart",ae),ue.addEventListener("sessionend",he),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(h,T,F,v),f=E.get(T,_.length),f.init(),_.push(f),ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(ce),K=this.localClippingEnabled,k=b.init(this.clippingPlanes,K),d=nn.get(T,m.length),d.init(),m.push(d),lt(T,F,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(G,R),k===!0&&b.beginShadows();const W=f.state.shadowsArray;if(H.render(W,T,F),k===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(d,T),f.setupLights(h.physicallyCorrectLights),F.isArrayCamera){const I=F.cameras;for(let X=0,me=I.length;X<me;X++){const Me=I[X];mt(d,T,Me,Me.viewport)}}else mt(d,T,F);v!==null&&(ve.updateMultisampleRenderTarget(v),ve.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(h,T,F),Y.resetDefaultState(),y=-1,w=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function lt(T,F,W,I){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){I&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const Me=et.update(T),Te=T.material;Te.visible&&d.push(T,Me,Te,W,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ze.render.frame&&(T.skeleton.update(),T.skeleton.frame=ze.render.frame),!T.frustumCulled||$.intersectsObject(T))){I&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const Me=et.update(T),Te=T.material;if(Array.isArray(Te)){const Ae=Me.groups;for(let Ie=0,Le=Ae.length;Ie<Le;Ie++){const Pe=Ae[Ie],je=Te[Pe.materialIndex];je&&je.visible&&d.push(T,Me,je,W,Z.z,Pe)}}else Te.visible&&d.push(T,Me,Te,W,Z.z,null)}}const me=T.children;for(let Me=0,Te=me.length;Me<Te;Me++)lt(me[Me],F,W,I)}function mt(T,F,W,I){const X=T.opaque,me=T.transmissive,Me=T.transparent;f.setupLightsView(W),k===!0&&b.setGlobalState(h.clippingPlanes,W),me.length>0&&Qn(X,F,W),I&&oe.viewport(A.copy(I)),X.length>0&&Ve(X,F,W),me.length>0&&Ve(me,F,W),Me.length>0&&Ve(Me,F,W),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Qn(T,F,W){const I=de.isWebGL2;j===null&&(j=new bi(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Cr:Mi,minFilter:Ar,samples:I&&r===!0?4:0})),h.getDrawingBufferSize(O),I?j.setSize(O.x,O.y):j.setSize(Na(O.x),Na(O.y));const X=h.getRenderTarget();h.setRenderTarget(j),h.clear();const me=h.toneMapping;h.toneMapping=Rn,Ve(T,F,W),h.toneMapping=me,ve.updateMultisampleRenderTarget(j),ve.updateRenderTargetMipmap(j),h.setRenderTarget(X)}function Ve(T,F,W){const I=F.isScene===!0?F.overrideMaterial:null;for(let X=0,me=T.length;X<me;X++){const Me=T[X],Te=Me.object,Ae=Me.geometry,Ie=I===null?Me.material:I,Le=Me.group;Te.layers.test(W.layers)&&Mn(Te,F,W,Ae,Ie,Le)}}function Mn(T,F,W,I,X,me){T.onBeforeRender(h,F,W,I,X,me),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(h,F,W,I,T,me),X.transparent===!0&&X.side===Bn&&X.forceSinglePass===!1?(X.side=Vt,X.needsUpdate=!0,h.renderBufferDirect(W,F,I,X,T,me),X.side=Yn,X.needsUpdate=!0,h.renderBufferDirect(W,F,I,X,T,me),X.side=Bn):h.renderBufferDirect(W,F,I,X,T,me),T.onAfterRender(h,F,W,I,X,me)}function $t(T,F,W){F.isScene!==!0&&(F=ee);const I=be.get(T),X=f.state.lights,me=f.state.shadowsArray,Me=X.state.version,Te=Oe.getParameters(T,X.state,me,F,W),Ae=Oe.getProgramCacheKey(Te);let Ie=I.programs;I.environment=T.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(T.isMeshStandardMaterial?qt:Mt).get(T.envMap||I.environment),Ie===void 0&&(T.addEventListener("dispose",Ge),Ie=new Map,I.programs=Ie);let Le=Ie.get(Ae);if(Le!==void 0){if(I.currentProgram===Le&&I.lightsStateVersion===Me)return So(T,Te),Le}else Te.uniforms=Oe.getUniforms(T),T.onBuild(W,Te,h),T.onBeforeCompile(Te,h),Le=Oe.acquireProgram(Te,Ae),Ie.set(Ae,Le),I.uniforms=Te.uniforms;const Pe=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=b.uniform),So(T,Te),I.needsLights=Iu(T),I.lightsStateVersion=Me,I.needsLights&&(Pe.ambientLightColor.value=X.state.ambient,Pe.lightProbe.value=X.state.probe,Pe.directionalLights.value=X.state.directional,Pe.directionalLightShadows.value=X.state.directionalShadow,Pe.spotLights.value=X.state.spot,Pe.spotLightShadows.value=X.state.spotShadow,Pe.rectAreaLights.value=X.state.rectArea,Pe.ltc_1.value=X.state.rectAreaLTC1,Pe.ltc_2.value=X.state.rectAreaLTC2,Pe.pointLights.value=X.state.point,Pe.pointLightShadows.value=X.state.pointShadow,Pe.hemisphereLights.value=X.state.hemi,Pe.directionalShadowMap.value=X.state.directionalShadowMap,Pe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pe.spotShadowMap.value=X.state.spotShadowMap,Pe.spotLightMatrix.value=X.state.spotLightMatrix,Pe.spotLightMap.value=X.state.spotLightMap,Pe.pointShadowMap.value=X.state.pointShadowMap,Pe.pointShadowMatrix.value=X.state.pointShadowMatrix);const je=Le.getUniforms(),It=ms.seqWithValue(je.seq,Pe);return I.currentProgram=Le,I.uniformsList=It,Le}function So(T,F){const W=be.get(T);W.outputEncoding=F.outputEncoding,W.instancing=F.instancing,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Du(T,F,W,I,X){F.isScene!==!0&&(F=ee),ve.resetTextureUnits();const me=F.fog,Me=I.isMeshStandardMaterial?F.environment:null,Te=v===null?h.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Si,Ae=(I.isMeshStandardMaterial?qt:Mt).get(I.envMap||Me),Ie=I.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Le=!!I.normalMap&&!!W.attributes.tangent,Pe=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,It=!!W.morphAttributes.color,Sn=I.toneMapped?h.toneMapping:Rn,ei=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ze=ei!==void 0?ei.length:0,De=be.get(I),Ns=f.state.lights;if(k===!0&&(K===!0||T!==w)){const Ft=T===w&&I.id===y;b.setState(I,T,Ft)}let ct=!1;I.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ns.state.version||De.outputEncoding!==Te||X.isInstancedMesh&&De.instancing===!1||!X.isInstancedMesh&&De.instancing===!0||X.isSkinnedMesh&&De.skinning===!1||!X.isSkinnedMesh&&De.skinning===!0||De.envMap!==Ae||I.fog===!0&&De.fog!==me||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==b.numPlanes||De.numIntersection!==b.numIntersection)||De.vertexAlphas!==Ie||De.vertexTangents!==Le||De.morphTargets!==Pe||De.morphNormals!==je||De.morphColors!==It||De.toneMapping!==Sn||de.isWebGL2===!0&&De.morphTargetsCount!==Ze)&&(ct=!0):(ct=!0,De.__version=I.version);let ti=De.currentProgram;ct===!0&&(ti=$t(I,F,X));let bo=!1,ur=!1,Us=!1;const St=ti.getUniforms(),ni=De.uniforms;if(oe.useProgram(ti.program)&&(bo=!0,ur=!0,Us=!0),I.id!==y&&(y=I.id,ur=!0),bo||w!==T){if(St.setValue(B,"projectionMatrix",T.projectionMatrix),de.logarithmicDepthBuffer&&St.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,ur=!0,Us=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Ft=St.map.cameraPosition;Ft!==void 0&&Ft.setValue(B,Z.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&St.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||X.isSkinnedMesh)&&St.setValue(B,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){St.setOptional(B,X,"bindMatrix"),St.setOptional(B,X,"bindMatrixInverse");const Ft=X.skeleton;Ft&&(de.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),St.setValue(B,"boneTexture",Ft.boneTexture,ve),St.setValue(B,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zs=W.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0&&de.isWebGL2===!0)&&ne.update(X,W,I,ti),(ur||De.receiveShadow!==X.receiveShadow)&&(De.receiveShadow=X.receiveShadow,St.setValue(B,"receiveShadow",X.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ni.envMap.value=Ae,ni.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ur&&(St.setValue(B,"toneMappingExposure",h.toneMappingExposure),De.needsLights&&Ru(ni,Us),me&&I.fog===!0&&yn.refreshFogUniforms(ni,me),yn.refreshMaterialUniforms(ni,I,U,L,j),ms.upload(B,De.uniformsList,ni,ve)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ms.upload(B,De.uniformsList,ni,ve),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&St.setValue(B,"center",X.center),St.setValue(B,"modelViewMatrix",X.modelViewMatrix),St.setValue(B,"normalMatrix",X.normalMatrix),St.setValue(B,"modelMatrix",X.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Ft=I.uniformsGroups;for(let ks=0,Fu=Ft.length;ks<Fu;ks++)if(de.isWebGL2){const wo=Ft[ks];_e.update(wo,ti),_e.bind(wo,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function Ru(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Iu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,F,W){be.get(T.texture).__webglTexture=F,be.get(T.depthTexture).__webglTexture=W;const I=be.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=W===void 0,I.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const W=be.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){v=T,g=F,M=W;let I=!0,X=null,me=!1,Me=!1;if(T){const Ae=be.get(T);Ae.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),I=!1):Ae.__webglFramebuffer===void 0?ve.setupRenderTarget(T):Ae.__hasExternalTextures&&ve.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Le=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=Le[F],me=!0):de.isWebGL2&&T.samples>0&&ve.useMultisampledRTT(T)===!1?X=be.get(T).__webglMultisampledFramebuffer:X=Le,A.copy(T.viewport),C.copy(T.scissor),x=T.scissorTest}else A.copy(D).multiplyScalar(U).floor(),C.copy(N).multiplyScalar(U).floor(),x=q;if(oe.bindFramebuffer(36160,X)&&de.drawBuffers&&I&&oe.drawBuffers(T,X),oe.viewport(A),oe.scissor(C),oe.setScissorTest(x),me){const Ae=be.get(T.texture);B.framebufferTexture2D(36160,36064,34069+F,Ae.__webglTexture,W)}else if(Me){const Ae=be.get(T.texture),Ie=F||0;B.framebufferTextureLayer(36160,36064,Ae.__webglTexture,W||0,Ie)}y=-1},this.readRenderTargetPixels=function(T,F,W,I,X,me,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){oe.bindFramebuffer(36160,Te);try{const Ae=T.texture,Ie=Ae.format,Le=Ae.type;if(Ie!==cn&&se.convert(Ie)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Le===Cr&&(fe.has("EXT_color_buffer_half_float")||de.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Le!==Mi&&se.convert(Le)!==B.getParameter(35738)&&!(Le===di&&(de.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-I&&W>=0&&W<=T.height-X&&B.readPixels(F,W,I,X,se.convert(Ie),se.convert(Le),me)}finally{const Ae=v!==null?be.get(v).__webglFramebuffer:null;oe.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(T,F,W=0){const I=Math.pow(2,-W),X=Math.floor(F.image.width*I),me=Math.floor(F.image.height*I);ve.setTexture2D(F,0),B.copyTexSubImage2D(3553,W,0,0,T.x,T.y,X,me),oe.unbindTexture()},this.copyTextureToTexture=function(T,F,W,I=0){const X=F.image.width,me=F.image.height,Me=se.convert(W.format),Te=se.convert(W.type);ve.setTexture2D(W,0),B.pixelStorei(37440,W.flipY),B.pixelStorei(37441,W.premultiplyAlpha),B.pixelStorei(3317,W.unpackAlignment),F.isDataTexture?B.texSubImage2D(3553,I,T.x,T.y,X,me,Me,Te,F.image.data):F.isCompressedTexture?B.compressedTexSubImage2D(3553,I,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Me,F.mipmaps[0].data):B.texSubImage2D(3553,I,T.x,T.y,Me,Te,F.image),I===0&&W.generateMipmaps&&B.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W,I,X=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,Ae=se.convert(I.format),Ie=se.convert(I.type);let Le;if(I.isData3DTexture)ve.setTexture3D(I,0),Le=32879;else if(I.isDataArrayTexture)ve.setTexture2DArray(I,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,I.flipY),B.pixelStorei(37441,I.premultiplyAlpha),B.pixelStorei(3317,I.unpackAlignment);const Pe=B.getParameter(3314),je=B.getParameter(32878),It=B.getParameter(3316),Sn=B.getParameter(3315),ei=B.getParameter(32877),Ze=W.isCompressedTexture?W.mipmaps[0]:W.image;B.pixelStorei(3314,Ze.width),B.pixelStorei(32878,Ze.height),B.pixelStorei(3316,T.min.x),B.pixelStorei(3315,T.min.y),B.pixelStorei(32877,T.min.z),W.isDataTexture||W.isData3DTexture?B.texSubImage3D(Le,X,F.x,F.y,F.z,me,Me,Te,Ae,Ie,Ze.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Le,X,F.x,F.y,F.z,me,Me,Te,Ae,Ze.data)):B.texSubImage3D(Le,X,F.x,F.y,F.z,me,Me,Te,Ae,Ie,Ze),B.pixelStorei(3314,Pe),B.pixelStorei(32878,je),B.pixelStorei(3316,It),B.pixelStorei(3315,Sn),B.pixelStorei(32877,ei),X===0&&I.generateMipmaps&&B.generateMipmap(Le),oe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ve.setTextureCube(T,0):T.isData3DTexture?ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ve.setTexture2DArray(T,0):ve.setTexture2D(T,0),oe.unbindTexture()},this.resetState=function(){g=0,M=0,v=null,oe.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class X_ extends Pc{}X_.prototype.isWebGL1Renderer=!0;class q_ extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class us extends Et{constructor(e,t,n,i,r,a,s,l,c){super(e,t,n,i,r,a,s,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:We,this.magFilter=r!==void 0?r:We,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const Ul={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Y_{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const $_=new Y_;class Dc{constructor(e){this.manager=e!==void 0?e:$_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class j_ extends Dc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ul.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=Pr("img");function l(){u(),Ul.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class Z_ extends Dc{constructor(e){super(e)}load(e,t,n,i){const r=new Et,a=new j_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);function Cn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Rc(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ht={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},tr={duration:.5,overwrite:!1,delay:0},ro,vt,Qe,Jt=1e8,Ue=1/Jt,za=Math.PI*2,K_=za/4,J_=0,Ic=Math.sqrt,Q_=Math.cos,eg=Math.sin,ht=function(e){return typeof e=="string"},Ye=function(e){return typeof e=="function"},In=function(e){return typeof e=="number"},so=function(e){return typeof e>"u"},vn=function(e){return typeof e=="object"},Lt=function(e){return e!==!1},ao=function(){return typeof window<"u"},hs=function(e){return Ye(e)||ht(e)},Fc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yt=Array.isArray,ka=/(?:-?\.?\d|\.)+/gi,Oc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,va=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nc=/[+-]=-?[.\d]+/,Uc=/[^,'"\[\]\s]+/gi,tg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,Kt,Ba,oo,Xt={},vs={},zc,kc=function(e){return(vs=wi(e,Xt))&&Rt},lo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ys=function(e,t){return!t&&console.warn(e)},Bc=function(e,t){return e&&(Xt[e]=t)&&vs&&(vs[e]=t)||Xt},Dr=function(){return 0},ng={suppressEvents:!0,isStart:!0,kill:!1},_s={suppressEvents:!0,kill:!1},ig={suppressEvents:!0},co={},Xn=[],Ga={},Gc,zt={},ya={},zl=30,gs=[],uo="",ho=function(e){var t=e[0],n,i;if(vn(t)||Ye(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=gs.length;i--&&!gs[i].targetTest(t););n=gs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new hu(e[i],n)))||e.splice(i,1);return e},xi=function(e){return e._gsap||ho(Qt(e))[0]._gsap},Vc=function(e,t,n){return(n=e[t])&&Ye(n)?e[t]():so(n)&&e.getAttribute&&e.getAttribute(t)||n},Pt=function(e,t){return(e=e.split(",")).forEach(t)||e},$e=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},$i=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},rg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ms=function(){var e=Xn.length,t=Xn.slice(0),n,i;for(Ga={},Xn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wc=function(e,t,n,i){Xn.length&&!vt&&Ms(),e.render(t,n,i||vt&&t<0&&(e._initted||e._startAt)),Xn.length&&!vt&&Ms()},Hc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Uc).length<2?t:ht(e)?e.trim():e},Xc=function(e){return e},tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},sg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},wi=function(e,t){for(var n in t)e[n]=t[n];return e},kl=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=vn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Ss=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},br=function(e){var t=e.parent||He,n=e.keyframes?sg(yt(e.keyframes)):tn;if(Lt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ag=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},qc=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Rs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},jn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},vi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},og=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Va=function(e,t,n,i){return e._startAt&&(vt?e._startAt.revert(_s):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},lg=function o(e){return!e||e._ts&&o(e.parent)},Bl=function(e){return e._repeat?nr(e._tTime,e=e.duration()+e._rDelay)*e:0},nr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},bs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Is=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ue)||0))},Fs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Is(e),n._dirty||vi(n,e)),e},Yc=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=bs(e.rawTime(),t),(!t._dur||Wr(0,t.totalDuration(),n)-t._tTime>Ue)&&t.render(n,!0)),vi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ue}},mn=function(e,t,n,i){return t.parent&&jn(t),t._start=ft((In(n)?n:n||e!==He?Zt(e,n,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qc(e,t,"_first","_last",e._sort?"_start":0),Wa(t)||(e._recent=t),i||Yc(e,t),e._ts<0&&Fs(e,e._tTime),e},$c=function(e,t){return(Xt.ScrollTrigger||lo("scrollTrigger",t))&&Xt.ScrollTrigger.create(t,e)},jc=function(e,t,n,i,r){if(po(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gc!==Bt.frame)return Xn.push(e),e._lazy=[r,i],1},cg=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Wa=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ug=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&cg(e)&&!(!e._initted&&Wa(e))||(e._ts<0||e._dp._ts<0)&&!Wa(e))?0:1,s=e._rDelay,l=0,c,u,d;if(s&&e._repeat&&(l=Wr(0,e._tDur,t),u=nr(l,s),e._yoyo&&u&1&&(a=1-a),u!==nr(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||vt||i||e._zTime===Ue||!t&&e._zTime){if(!e._initted&&jc(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ue:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Va(e,t,n,!0),e._onUpdate&&!n&&en(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&en(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&jn(e,1),!n&&!vt&&(en(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},hg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ir=function(e,t,n,i){var r=e._repeat,a=ft(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ft(a*(r+1)+e._rDelay*r):a,s>0&&!i&&Fs(e,e._tTime=e._tDur*s),e.parent&&Is(e),n||vi(e.parent,e),e},Gl=function(e){return e instanceof At?vi(e):ir(e,e._dur)},fg={_start:0,endTime:Dr,totalDuration:Dr},Zt=function o(e,t,n){var i=e.labels,r=e._recent||fg,a=e.duration()>=Jt?r.endTime(!1):e._dur,s,l,c;return ht(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(yt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},wr=function(e,t,n){var i=In(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Lt(l.vars.inherit)&&l.parent;a.immediateRender=Lt(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new nt(t[0],a,t[r+1])},Jn=function(e,t){return e||e===0?t(e):t},Wr=function(e,t,n){return n<e?e:n>t?t:n},gt=function(e,t){return!ht(e)||!(t=tg.exec(e))?"":t[1]},dg=function(e,t,n){return Jn(n,function(i){return Wr(e,t,i)})},Ha=[].slice,Zc=function(e,t){return e&&vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vn(e[0]))&&!e.nodeType&&e!==Kt},pg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ht(i)&&!t||Zc(i,1)?(r=n).push.apply(r,Qt(i)):n.push(i)})||n},Qt=function(e,t,n){return Qe&&!t&&Qe.selector?Qe.selector(e):ht(e)&&!n&&(Ba||!rr())?Ha.call((t||oo).querySelectorAll(e),0):yt(e)?pg(e,n):Zc(e)?Ha.call(e,0):e?[e]:[]},Xa=function(e){return e=Qt(e)[0]||ys("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Qt(t,n.querySelectorAll?n:n===e?ys("Invalid scope")||oo.createElement("div"):e)}},Kc=function(e){return e.sort(function(){return .5-Math.random()})},Jc=function(e){if(Ye(e))return e;var t=vn(e)?e:{each:e},n=yi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,d=i;return ht(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],d=i[1]),function(f,m,_){var h=(_||t).length,p=a[h],g,M,v,y,w,A,C,x,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,Jt])[1],!S){for(C=-Jt;C<(C=_[S++].getBoundingClientRect().left)&&S<h;);S--}for(p=a[h]=[],g=l?Math.min(S,h)*u-.5:i%S,M=S===Jt?0:l?h*d/S-.5:i/S|0,C=0,x=Jt,A=0;A<h;A++)v=A%S-g,y=M-(A/S|0),p[A]=w=c?Math.abs(c==="y"?y:v):Ic(v*v+y*y),w>C&&(C=w),w<x&&(x=w);i==="random"&&Kc(p),p.max=C-x,p.min=x,p.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(S>h?h-1:c?c==="y"?h/S:S:Math.max(S,h/S))||0)*(i==="edges"?-1:1),p.b=h<0?r-h:r,p.u=gt(t.amount||t.each)||0,n=n&&h<0?lu(n):n}return h=(p[f]-p.min)/p.max||0,ft(p.b+(n?n(h):h)*p.v)+p.u}},qa=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(In(n)?0:gt(n))}},Qc=function(e,t){var n=yt(e),i,r;return!n&&vn(e)&&(i=n=e.radius||Jt,e.values?(e=Qt(e.values),(r=!In(e[0]))&&(i*=i)):e=qa(e.increment)),Jn(t,n?Ye(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Jt,u=0,d=e.length,f,m;d--;)r?(f=e[d].x-s,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-s),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:a,r||u===a||In(a)?u:u+gt(a)}:qa(e))},eu=function(e,t,n,i){return Jn(yt(e)?!t:n===!0?!!(n=0):!i,function(){return yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},mg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},_g=function(e,t){return function(n){return e(parseFloat(n))+(t||gt(n))}},gg=function(e,t,n){return nu(e,t,0,1,n)},tu=function(e,t,n){return Jn(n,function(i){return e[~~t(i)]})},xg=function o(e,t,n){var i=t-e;return yt(e)?tu(e,o(0,e.length),t):Jn(n,function(r){return(i+(r-e)%i)%i+e})},vg=function o(e,t,n){var i=t-e,r=i*2;return yt(e)?tu(e,o(0,e.length-1),t):Jn(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Rr=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?Uc:ka),n+=e.substr(t,i-t)+eu(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},nu=function(e,t,n,i,r){var a=t-e,s=i-n;return Jn(r,function(l){return n+((l-e)/a*s||0)})},yg=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=ht(e),s={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(yt(e)&&!yt(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(o(e[c-1],e[c]));d--,r=function(_){_*=d;var h=Math.min(f,~~_);return u[h](_-h)},n=t}else i||(e=wi(yt(e)?[]:{},e));if(!u){for(l in t)fo.call(s,e,l,"get",t[l]);r=function(_){return go(_,s)||(a?e.p:e)}}}return Jn(n,r)},Vl=function(e,t,n){var i=e.labels,r=Jt,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},en=function(e,t,n){var i=e.vars,r=i[t],a=Qe,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xn.length&&Ms(),s&&(Qe=s),u=l?r.apply(c,l):r.call(c),Qe=a,u},Mr=function(e){return jn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vt),e.progress()<1&&en(e,"onInterrupt"),e},Xi,iu=[],ru=function(e){if(!ao()){iu.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Ye(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Dr,render:go,add:fo,kill:Ng,modifier:Og,rawVars:0},a={targetTest:0,get:0,getSetter:_o,aliases:{},register:0};if(rr(),e!==i){if(zt[t])return;tn(i,tn(Ss(e,r),a)),wi(i.prototype,wi(r,Ss(e,a))),zt[i.prop=t]=i,e.targetTest&&(gs.push(i),co[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Bc(t,i),e.register&&e.register(Rt,i,Dt)},Ne=255,Sr={aqua:[0,Ne,Ne],lime:[0,Ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ne],navy:[0,0,128],white:[Ne,Ne,Ne],olive:[128,128,0],yellow:[Ne,Ne,0],orange:[Ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ne,0,0],pink:[Ne,192,203],cyan:[0,Ne,Ne],transparent:[Ne,Ne,Ne,0]},Ma=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ne+.5|0},su=function(e,t,n){var i=e?In(e)?[e>>16,e>>8&Ne,e&Ne]:0:Sr.black,r,a,s,l,c,u,d,f,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Sr[e])i=Sr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ne,i&Ne,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ne,e&Ne]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(ka),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ma(l+1/3,r,a),i[1]=Ma(l,r,a),i[2]=Ma(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Oc),n&&i.length<4&&(i[3]=1),i}else i=e.match(ka)||Sr.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Ne,a=i[1]/Ne,s=i[2]/Ne,d=Math.max(r,a,s),f=Math.min(r,a,s),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===r?(a-s)/m+(a<s?6:0):d===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},au=function(e){var t=[],n=[],i=-1;return e.split(qn).forEach(function(r){var a=r.match(Hi)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Wl=function(e,t,n){var i="",r=(e+i).match(qn),a=t?"hsla(":"rgba(",s=0,l,c,u,d;if(!r)return e;if(r=r.map(function(f){return(f=su(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=au(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(qn,"1").split(Hi),d=c.length-1;s<d;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(qn),d=c.length-1;s<d;s++)i+=c[s]+r[s];return i+c[d]},qn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Sr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),Mg=/hsl[a]?\(/,ou=function(e){var t=e.join(" "),n;if(qn.lastIndex=0,qn.test(t))return n=Mg.test(t),e[1]=Wl(e[1],n),e[0]=Wl(e[0],n,au(e[1])),!0},Ir,Bt=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,d,f,m,_=function h(p){var g=o()-i,M=p===!0,v,y,w,A;if(g>e&&(n+=g-t),i+=g,w=i-n,v=w-a,(v>0||M)&&(A=++d.frame,f=w-d.time*1e3,d.time=w=w/1e3,a+=v+(v>=r?4:r-v),y=1),M||(l=c(h)),y)for(m=0;m<s.length;m++)s[m](w,f,A,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){zc&&(!Ba&&ao()&&(Kt=Ba=window,oo=Kt.document||{},Xt.gsap=Rt,(Kt.gsapVersions||(Kt.gsapVersions=[])).push(Rt.version),kc(vs||Kt.GreenSockGlobals||!Kt.gsap&&Kt||{}),u=Kt.requestAnimationFrame,iu.forEach(ru)),l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Ir=1,_(2))},sleep:function(){(u?Kt.cancelAnimationFrame:clearTimeout)(l),Ir=0,c=Dr},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),a=d.time*1e3+r},add:function(p,g,M){var v=g?function(y,w,A,C){p(y,w,A,C),d.remove(v)}:p;return d.remove(p),s[M?"unshift":"push"](v),rr(),v},remove:function(p,g){~(g=s.indexOf(p))&&s.splice(g,1)&&m>=g&&m--},_listeners:s},d}(),rr=function(){return!Ir&&Bt.wake()},Ce={},Sg=/^[\d.\-M][\d.\-,\s]/,bg=/["']/g,wg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(bg,"").trim():+c,i=l.substr(s+1).trim();return t},Tg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Eg=function(e){var t=(e+"").split("("),n=Ce[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[wg(t[1])]:Tg(e).split(",").map(Hc)):Ce._CE&&Sg.test(e)?Ce._CE("",e):n},lu=function(e){return function(t){return 1-e(1-t)}},cu=function o(e,t){for(var n=e._first,i;n;)n instanceof At?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},yi=function(e,t){return e&&(Ye(e)?e:Ce[e]||Eg(e))||t},Ei=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Pt(e,function(s){Ce[s]=Xt[s]=r,Ce[a=s.toLowerCase()]=n;for(var l in r)Ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[s+"."+l]=r[l]}),r},uu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sa=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/za*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*eg((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:uu(s);return r=za/r,l.config=function(c,u){return o(e,c,u)},l},ba=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:uu(n);return i.config=function(r){return o(e,r)},i};Pt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Ei(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Ei("Elastic",Sa("in"),Sa("out"),Sa());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};Ei("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ei("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Ei("Circ",function(o){return-(Ic(1-o*o)-1)});Ei("Sine",function(o){return o===1?1:-Q_(o*K_)+1});Ei("Back",ba("in"),ba("out"),ba());Ce.SteppedEase=Ce.steps=Xt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ue;return function(s){return((i*Wr(0,a,s)|0)+r)*n}}};tr.ease=Ce["quad.out"];Pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return uo+=o+","+o+"Params,"});var hu=function(e,t){this.id=J_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vc,this.set=t?t.getSetter:_o},sr=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ir(this,+t.duration,1,1),this.data=t.data,Qe&&(this._ctx=Qe,Qe.data.push(this)),Ir||Bt.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ir(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(rr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Fs(this,n),!r._dp||r.parent||Yc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ue||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wc(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?nr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ue?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?bs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ue?0:this._rts,this.totalTime(Wr(-Math.abs(this._delay),this._tDur,i),!0),Is(this),og(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ue&&(this._tTime-=Ue)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Lt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bs(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ig);var i=vt;return vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gl(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gl(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zt(this,n),Lt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Lt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ue:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ue,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ue)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Ye(n)?n:Xc,s=function(){var c=i.then;i.then=null,Ye(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){Mr(this)},o}();tn(sr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ue,_prom:0,_ps:!1,_rts:1});var At=function(o){Rc(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Lt(n.sortChildren),He&&mn(n.parent||He,Cn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&$c(Cn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return wr(0,arguments,this),this},t.from=function(i,r,a){return wr(1,arguments,this),this},t.fromTo=function(i,r,a,s){return wr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,br(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new nt(i,r,Zt(this,a),1),this},t.call=function(i,r,a){return mn(this,nt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new nt(i,a,Zt(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,br(a).immediateRender=Lt(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,d){return s.startAt=a,br(s).immediateRender=Lt(s.immediateRender),this.staggerTo(i,r,s,l,c,u,d)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ft(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,m,_,h,p,g,M,v,y,w,A,C;if(this!==He&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,y=this._start,v=this._ts,g=!v,d&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=ft(u%p),u===l?(h=this._repeat,f=c):(h=~~(u/p),h&&h===u/p&&(f=c,h--),f>c&&(f=c)),w=nr(this._tTime,p),!s&&this._tTime&&w!==h&&this._tTime-w*p-this._dur<=0&&(w=h),A&&h&1&&(f=c-f,C=1),h!==w&&!this._lock){var x=A&&w&1,S=x===(A&&h&1);if(h<w&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(C?0:ft(h*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&en(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;cu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=hg(this,ft(s),ft(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&!h&&(en(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!g){M=0,_&&(u+=this._zTime=-Ue);break}}m=_}else{m=this._last;for(var L=i<0?i:f;m;){if(_=m._prev,(m._act||L<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||vt&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!g){M=0,_&&(u+=this._zTime=L?-Ue:Ue);break}}m=_}}if(M&&!r&&(this.pause(),M.render(f>=s?0:-Ue)._zTime=f>=s?1:-1,this._ts))return this._start=y,Is(this),this.render(i,r,a);this._onUpdate&&!r&&en(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&jn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(en(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(In(r)||(r=Zt(this,r,i)),!(i instanceof sr)){if(yt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ht(i))return this.addLabel(i,r);if(Ye(i))i=nt.delayedCall(0,i);else return this}return this!==i?mn(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Jt);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof nt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ht(i)?this.removeLabel(i):Ye(i)?this.killTweensOf(i):(Rs(this,i),i===this._recent&&(this._recent=this._last),vi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(Bt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Zt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=nt.delayedCall(0,r||Dr,a);return s.data="isPause",this._hasPause=1,mn(this,s,Zt(this,i))},t.removePause=function(i){var r=this._first;for(i=Zt(this,i);r;)r._start===i&&r.data==="isPause"&&jn(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Gn!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=Qt(i),l=this._first,c=In(r),u;l;)l instanceof nt?rg(l._targets,s)&&(c?(!Gn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=Zt(a,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,_=nt.to(a,tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ue,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&ir(_,p,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,d||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,tn({startAt:{time:Zt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Vl(this,Zt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Vl(this,Zt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ue)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return vi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vi(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=Jt,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,mn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;ir(a,a===He&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(He._ts&&(Wc(He,bs(i,He)),Gc=Bt.frame),Bt.frame>=zl){zl+=Ht.autoSleep||120;var r=He._first;if((!r||!r._ts)&&Ht.autoSleep&&Bt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Bt.sleep()}}},e}(sr);tn(At.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ag=function(e,t,n,i,r,a,s){var l=new Dt(this._pt,e,t,0,1,gu,null,r),c=0,u=0,d,f,m,_,h,p,g,M;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Rr(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),f=n.match(va)||[];d=va.exec(i);)_=d[0],h=i.substring(c,d.index),m?m=(m+1)%5:h.substr(-5)==="rgba("&&(m=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:h||u===1?h:",",s:p,c:_.charAt(1)==="="?$i(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=va.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Nc.test(i)||g)&&(l.e=0),this._pt=l,l},fo=function(e,t,n,i,r,a,s,l,c,u){Ye(i)&&(i=i(r||0,e,a));var d=e[t],f=n!=="get"?n:Ye(d)?c?e[t.indexOf("set")||!Ye(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=Ye(d)?c?Rg:mu:mo,_;if(ht(i)&&(~i.indexOf("random(")&&(i=Rr(i)),i.charAt(1)==="="&&(_=$i(f,i)+(gt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Ya)return!isNaN(f*i)&&i!==""?(_=new Dt(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?Fg:_u,0,m),c&&(_.fp=c),s&&_.modifier(s,this,e),this._pt=_):(!d&&!(t in e)&&lo(t,i),Ag.call(this,e,t,f,i,m,l||Ht.stringFilter,c))},Cg=function(e,t,n,i,r){if(Ye(e)&&(e=Tr(e,r,t,n,i)),!vn(e)||e.style&&e.nodeType||yt(e)||Fc(e))return ht(e)?Tr(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=Tr(e[s],r,t,n,i);return a},fu=function(e,t,n,i,r,a){var s,l,c,u;if(zt[e]&&(s=new zt[e]).init(r,s.rawVars?t[e]:Cg(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Dt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Xi))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Gn,Ya,po=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,d=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,_=i.keyframes,h=i.autoRevert,p=e._dur,g=e._startAt,M=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:M,w=e._overwrite==="auto"&&!ro,A=e.timeline,C,x,S,L,U,G,R,D,N,q,$,k,K;if(A&&(!_||!r)&&(r="none"),e._ease=yi(r,tr.ease),e._yEase=m?lu(yi(m===!0?r:m,tr.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!A&&!!i.runBackwards,!A||_&&!i.stagger){if(D=M[0]?xi(M[0]).harness:0,k=D&&i[D.prop],C=Ss(i,co),g&&(g._zTime<0&&g.progress(1),t<0&&f&&s&&!h?g.render(-1,!0):g.revert(f&&p?_s:ng),g._lazy=0),a){if(jn(e._startAt=nt.set(M,tn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!g&&Lt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:d,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vt||!s&&!h)&&e._startAt.revert(_s),s&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!g){if(t&&(s=!1),S=tn({overwrite:!1,data:"isFromStart",lazy:s&&!g&&Lt(l),immediateRender:s,stagger:0,parent:v},C),k&&(S[D.prop]=k),jn(e._startAt=nt.set(M,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vt?e._startAt.revert(_s):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,Ue,Ue);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Lt(l)||l&&!p,x=0;x<M.length;x++){if(U=M[x],R=U._gsap||ho(M)[x]._gsap,e._ptLookup[x]=q={},Ga[R.id]&&Xn.length&&Ms(),$=y===M?x:y.indexOf(U),D&&(N=new D).init(U,k||C,e,$,y)!==!1&&(e._pt=L=new Dt(e._pt,U,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(j){q[j]=L}),N.priority&&(G=1)),!D||k)for(S in C)zt[S]&&(N=fu(S,C,e,$,U,y))?N.priority&&(G=1):q[S]=L=fo.call(e,U,S,"get",C[S],$,y,0,i.stringFilter);e._op&&e._op[x]&&e.kill(U,e._op[x]),w&&e._pt&&(Gn=e,He.killTweensOf(U,q,e.globalTime(t)),K=!e.parent,Gn=0),e._pt&&l&&(Ga[R.id]=1)}G&&xu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,_&&t<=0&&A.render(Jt,!0,!0)},Lg=function(e,t,n,i,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(c=d[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ya=1,e.vars[t]="+=0",po(e,s),Ya=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=$e(n)+gt(u.e)),u.b&&(u.b=c.s+gt(u.b))},Pg=function(e,t){var n=e[0]?xi(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=wi({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},Dg=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(yt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},Tr=function(e,t,n,i,r){return Ye(e)?e.call(t,n,i,r):ht(e)&&~e.indexOf("random(")?Rr(e):e},du=uo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",pu={};Pt(du+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return pu[o]=1});var nt=function(o){Rc(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:br(i))||this;var l=s.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,_=l.keyframes,h=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,M=i.parent||He,v=(yt(n)||Fc(n)?In(n[0]):"length"in i)?[n]:Qt(n),y,w,A,C,x,S,L,U;if(s._targets=v.length?ho(v):ys("GSAP target "+n+" not found. https://greensock.com",!Ht.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,_||f||hs(c)||hs(u)){if(i=s.vars,y=s.timeline=new At({data:"nested",defaults:h||{},targets:M&&M.data==="nested"?M.vars.targets:v}),y.kill(),y.parent=y._dp=Cn(s),y._start=0,f||hs(c)||hs(u)){if(C=v.length,L=f&&Jc(f),vn(f))for(x in f)~du.indexOf(x)&&(U||(U={}),U[x]=f[x]);for(w=0;w<C;w++)A=Ss(i,pu),A.stagger=0,g&&(A.yoyoEase=g),U&&wi(A,U),S=v[w],A.duration=+Tr(c,Cn(s),w,S,v),A.delay=(+Tr(u,Cn(s),w,S,v)||0)-s._delay,!f&&C===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),y.to(S,A,L?L(w,S,v):0),y._ease=Ce.none;y.duration()?c=u=0:s.timeline=0}else if(_){br(tn(y.vars.defaults,{ease:"none"})),y._ease=yi(_.ease||i.ease||"none");var G=0,R,D,N;if(yt(_))_.forEach(function(q){return y.to(v,q,">")}),y.duration();else{A={};for(x in _)x==="ease"||x==="easeEach"||Dg(x,_[x],A,_.easeEach);for(x in A)for(R=A[x].sort(function(q,$){return q.t-$.t}),G=0,w=0;w<R.length;w++)D=R[w],N={ease:D.e,duration:(D.t-(w?R[w-1].t:0))/100*c},N[x]=D.v,y.to(v,N,G),G+=N.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||s.duration(c=y.duration())}else s.timeline=0;return m===!0&&!ro&&(Gn=Cn(s),He.killTweensOf(v),Gn=0),mn(M,Cn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(d||!c&&!_&&s._start===ft(M._time)&&Lt(d)&&lg(Cn(s))&&M.data!=="nested")&&(s._tTime=-Ue,s.render(Math.max(0,-u)||0)),p&&$c(Cn(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Ue&&!u?l:i<Ue?0:i,f,m,_,h,p,g,M,v,y;if(!c)ug(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=d,v=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(h*100+i,r,a);if(f=ft(d%h),d===l?(_=this._repeat,f=c):(_=~~(d/h),_&&_===d/h&&(f=c,_--),f>c&&(f=c)),g=this._yoyo&&_&1,g&&(y=this._yEase,f=c-f),p=nr(this._tTime,h),f===s&&!a&&this._initted)return this._tTime=d,this;_!==p&&(v&&this._yEase&&cu(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=a=1,this.render(ft(h*_),!0).invalidate()._lock=0))}if(!this._initted){if(jc(this,u?i:f,a,r,d))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!s&&!r&&!_&&(en(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;v&&v.render(i<0?i:!f&&g?-Ue:v._dur*v._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Va(this,i,r,a),en(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&en(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Va(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&jn(this,1),!r&&!(u&&!s)&&(d||s||g)&&(en(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s){Ir||Bt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||po(this,l),c=this._ease(l/this._dur),Lg(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(Fs(this,0),this.parent||qc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Mr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Gn&&Gn.vars.overwrite!==!0)._first||Mr(this),this.parent&&a!==this.timeline.totalDuration()&&ir(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Qt(i):s,c=this._ptLookup,u=this._pt,d,f,m,_,h,p,g;if((!r||r==="all")&&ag(s,l))return r==="all"&&(this._pt=0),Mr(this);for(d=this._op=this._op||[],r!=="all"&&(ht(r)&&(h={},Pt(r,function(M){return h[M]=1}),r=h),r=Pg(s,r)),g=s.length;g--;)if(~l.indexOf(s[g])){f=c[g],r==="all"?(d[g]=r,_=f,m={}):(m=d[g]=d[g]||{},_=r);for(h in _)p=f&&f[h],p&&((!("kill"in p.d)||p.d.kill(h)===!0)&&Rs(this,p,"_pt"),delete f[h]),m!=="all"&&(m[h]=1)}return this._initted&&!this._pt&&u&&Mr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return wr(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return wr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return He.killTweensOf(i,r,a)},e}(sr);tn(nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pt("staggerTo,staggerFrom,staggerFromTo",function(o){nt[o]=function(){var e=new At,t=Ha.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var mo=function(e,t,n){return e[t]=n},mu=function(e,t,n){return e[t](n)},Rg=function(e,t,n,i){return e[t](i.fp,n)},Ig=function(e,t,n){return e.setAttribute(t,n)},_o=function(e,t){return Ye(e[t])?mu:so(e[t])&&e.setAttribute?Ig:mo},_u=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Fg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},gu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},go=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Og=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Ng=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Rs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ug=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},xu=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Dt=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||_u,this.d=l||this,this.set=c||mo,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ug,this.m=n,this.mt=r,this.tween=i},o}();Pt(uo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return co[o]=1});Xt.TweenMax=Xt.TweenLite=nt;Xt.TimelineLite=Xt.TimelineMax=At;He=new At({sortChildren:!1,defaults:tr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ht.stringFilter=ou;var ar=[],xs={},zg=[],Hl=0,wa=function(e){return(xs[e]||zg).map(function(t){return t()})},$a=function(){var e=Date.now(),t=[];e-Hl>2&&(wa("matchMediaInit"),ar.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=Kt.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),wa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Hl=e,wa("matchMedia"))},vu=function(){function o(t,n){this.selector=n&&Xa(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){Ye(n)&&(r=i,i=n,n=Ye);var a=this,s=function(){var c=Qe,u=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Xa(r)),Qe=a,d=i.apply(a,arguments),Ye(d)&&a._r.push(d),Qe=c,a.selector=u,a.isReverted=!1,d};return a.last=s,n===Ye?s(a):n?a[n]=s:s},e.ignore=function(n){var i=Qe;Qe=null,n(this),Qe=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof sr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=ar.indexOf(this);~s&&ar.splice(s,1)}},e.revert=function(n){this.kill(n||{})},o}(),kg=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){vn(n)||(n={matches:n});var a=new vu(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Kt.matchMedia(n[c]),l&&(ar.indexOf(a)<0&&ar.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener($a):l.addEventListener("change",$a)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ws={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ru(i)})},timeline:function(e){return new At(e)},getTweensOf:function(e,t){return He.getTweensOf(e,t)},getProperty:function(e,t,n,i){ht(e)&&(e=Qt(e)[0]);var r=xi(e||{}).get,a=n?Xc:Hc;return n==="native"&&(n=""),e&&(t?a((zt[t]&&zt[t].get||r)(e,t,n,i)):function(s,l,c){return a((zt[s]&&zt[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=Qt(e),e.length>1){var i=e.map(function(u){return Rt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var a=zt[t],s=xi(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Xi._pt=0,d.init(e,n?u+n:u,Xi,0,[e]),d.render(1,d),Xi._pt&&go(1,Xi)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=Rt.to(e,wi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return He.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yi(e.ease,tr.ease)),kl(tr,e||{})},config:function(e){return kl(Ht,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!zt[s]&&!Xt[s]&&ys(t+" effect requires "+s+" plugin.")}),ya[t]=function(s,l,c){return n(Qt(s),tn(l||{},r),c)},a&&(At.prototype[t]=function(s,l,c){return this.add(ya[t](s,vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ce[e]=yi(t)},parseEase:function(e,t){return arguments.length?yi(e,t):Ce},getById:function(e){return He.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new At(e),i,r;for(n.smoothChildTiming=Lt(e.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)r=i._next,(t||!(!i._dur&&i instanceof nt&&i.vars.onComplete===i._targets[0]))&&mn(n,i,i._start-i._delay),i=r;return mn(He,n,0),n},context:function(e,t){return e?new vu(e,t):Qe},matchMedia:function(e){return new kg(e)},matchMediaRefresh:function(){return ar.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||$a()},addEventListener:function(e,t){var n=xs[e]||(xs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:xg,wrapYoyo:vg,distribute:Jc,random:eu,snap:Qc,normalize:gg,getUnit:gt,clamp:dg,splitColor:su,toArray:Qt,selector:Xa,mapRange:nu,pipe:mg,unitize:_g,interpolate:yg,shuffle:Kc},install:kc,effects:ya,ticker:Bt,updateRoot:At.updateRoot,plugins:zt,globalTimeline:He,core:{PropTween:Dt,globals:Bc,Tween:nt,Timeline:At,Animation:sr,getCache:xi,_removeLinkedListItem:Rs,reverting:function(){return vt},context:function(e){return e&&Qe&&(Qe.data.push(e),e._ctx=Qe),Qe},suppressOverwrites:function(e){return ro=e}}};Pt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ws[o]=nt[o]});Bt.add(At.updateRoot);Xi=ws.to({},{duration:0});var Bg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Gg=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Bg(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Ta=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(ht(r)&&(l={},Pt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Gg(s,r)}}}},Rt=ws.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ta("roundProps",qa),Ta("modifiers"),Ta("snap",Qc))||ws;nt.version=At.version=Rt.version="3.11.5";zc=1;ao()&&rr();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xl,Vn,ji,xo,pi,ql,vo,Vg=function(){return typeof window<"u"},Fn={},ui=180/Math.PI,Zi=Math.PI/180,Gi=Math.atan2,Yl=1e8,yo=/([A-Z])/g,Wg=/(left|right|width|margin|padding|x)/i,Hg=/[\s,\(]\S/,_n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ja=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Yg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},yu=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Mu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$g=function(e,t,n){return e.style[t]=n},jg=function(e,t,n){return e.style.setProperty(t,n)},Zg=function(e,t,n){return e._gsap[t]=n},Kg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Jg=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Qg=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},qe="transform",hn=qe+"Origin",e0=function o(e,t){var n=this,i=this.target,r=i.style;if(e in Fn){if(this.tfm=this.tfm||{},e!=="transform")e=_n[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ln(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Ln(i,e);else return _n.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(qe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hn,t,"")),e=qe}(r||t)&&this.props.push(e,t,r[e])},Su=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},t0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(yo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=vo(),(!r||!r.isStart)&&!n[qe]&&(Su(n),i.uncache=1)}},bu=function(e,t){var n={target:e,props:[],revert:t0,save:e0};return e._gsap||Rt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},wu,Za=function(e,t){var n=Vn.createElementNS?Vn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vn.createElement(e);return n.style?n:Vn.createElement(e)},xn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(yo,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,or(t)||t,1)||""},$l="O,Moz,ms,Ms,Webkit".split(","),or=function(e,t,n){var i=t||pi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!($l[a]+e in r););return a<0?null:(a===3?"ms":a>=0?$l[a]:"")+e},Ka=function(){Vg()&&window.document&&(Xl=window,Vn=Xl.document,ji=Vn.documentElement,pi=Za("div")||{style:{}},Za("div"),qe=or(qe),hn=qe+"Origin",pi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wu=!!or("perspective"),vo=Rt.core.reverting,xo=1)},Ea=function o(e){var t=Za("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(ji.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ji.removeChild(t),this.style.cssText=r,a},jl=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Tu=function(e){var t;try{t=e.getBBox()}catch{t=Ea.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ea||(t=Ea.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+jl(e,["x","cx","x1"])||0,y:+jl(e,["y","cy","y1"])||0,width:0,height:0}:t},Eu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Tu(e))},Fr=function(e,t){if(t){var n=e.style;t in Fn&&t!==hn&&(t=qe),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(yo,"-$1").toLowerCase())):n.removeAttribute(t)}},Wn=function(e,t,n,i,r,a){var s=new Dt(e._pt,t,n,0,1,a?Mu:yu);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Zl={deg:1,rad:1,turn:1},n0={grid:1,flex:1},Zn=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=pi.style,l=Wg.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",m=i==="%",_,h,p,g;return i===a||!r||Zl[i]||Zl[a]?r:(a!=="px"&&!f&&(r=o(e,t,n,"px")),g=e.getCTM&&Eu(e),(m||a==="%")&&(Fn[t]||~t.indexOf("adius"))?(_=g?e.getBBox()[l?"width":"height"]:e[u],$e(m?r/_*d:r/100*_)):(s[l?"width":"height"]=d+(f?a:i),h=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===Vn||!h.appendChild)&&(h=Vn.body),p=h._gsap,p&&m&&p.width&&l&&p.time===Bt.time&&!p.uncache?$e(r/p.width*d):((m||a==="%")&&!n0[xn(h,"display")]&&(s.position=xn(e,"position")),h===e&&(s.position="static"),h.appendChild(pi),_=pi[u],h.removeChild(pi),s.position="absolute",l&&m&&(p=xi(h),p.time=Bt.time,p.width=h[u]),$e(f?_*r/d:_&&r?d/_*r:0))))},Ln=function(e,t,n,i){var r;return xo||Ka(),t in _n&&t!=="transform"&&(t=_n[t],~t.indexOf(",")&&(t=t.split(",")[0])),Fn[t]&&t!=="transform"?(r=Nr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Es(xn(e,hn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ts[t]&&Ts[t](e,t,n)||xn(e,t)||Vc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zn(e,t,r,n)+n:r},i0=function(e,t,n,i){if(!n||n==="none"){var r=or(t,e,1),a=r&&xn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=xn(e,"borderTopColor"))}var s=new Dt(this._pt,e.style,t,0,1,gu),l=0,c=0,u,d,f,m,_,h,p,g,M,v,y,w;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=xn(e,t)||i,e.style[t]=n),u=[n,i],ou(u),n=u[0],i=u[1],f=n.match(Hi)||[],w=i.match(Hi)||[],w.length){for(;d=Hi.exec(i);)p=d[0],M=i.substring(l,d.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(h=f[c++]||"")&&(m=parseFloat(h)||0,y=h.substr((m+"").length),p.charAt(1)==="="&&(p=$i(m,p)+y),g=parseFloat(p),v=p.substr((g+"").length),l=Hi.lastIndex-v.length,v||(v=v||Ht.units[t]||y,l===i.length&&(i+=v,s.e+=v)),y!==v&&(m=Zn(e,t,h,v)||0),s._pt={_next:s._pt,p:M||c===1?M:",",s:m,c:g-m,m:_&&_<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?Mu:yu;return Nc.test(i)&&(s.e=0),this._pt=s,s},Kl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},r0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Kl[n]||n,t[1]=Kl[i]||i,t.join(" ")},s0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Fn[s]&&(l=1,s=s==="transformOrigin"?hn:qe),Fr(n,s);l&&(Fr(n,qe),a&&(a.svg&&n.removeAttribute("transform"),Nr(n,1),a.uncache=1,Su(i)))}},Ts={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Dt(e._pt,t,n,0,0,s0);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Or=[1,0,0,1,0,0],Au={},Cu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Jl=function(e){var t=xn(e,qe);return Cu(t)?Or:t.substr(7).match(Oc).map($e)},Mo=function(e,t){var n=e._gsap||xi(e),i=e.style,r=Jl(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Or:r):(r===Or&&!e.offsetParent&&e!==ji&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,s=e.nextElementSibling,ji.appendChild(e)),r=Jl(e),l?i.display=l:Fr(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):ji.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ja=function(e,t,n,i,r,a){var s=e._gsap,l=r||Mo(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,d=s.xOffset||0,f=s.yOffset||0,m=l[0],_=l[1],h=l[2],p=l[3],g=l[4],M=l[5],v=t.split(" "),y=parseFloat(v[0])||0,w=parseFloat(v[1])||0,A,C,x,S;n?l!==Or&&(C=m*p-_*h)&&(x=y*(p/C)+w*(-h/C)+(h*M-p*g)/C,S=y*(-_/C)+w*(m/C)-(m*M-_*g)/C,y=x,w=S):(A=Tu(e),y=A.x+(~v[0].indexOf("%")?y/100*A.width:y),w=A.y+(~(v[1]||v[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&s.smooth?(g=y-c,M=w-u,s.xOffset=d+(g*m+M*h)-g,s.yOffset=f+(g*_+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=y,s.yOrigin=w,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[hn]="0px 0px",a&&(Wn(a,s,"xOrigin",c,y),Wn(a,s,"yOrigin",u,w),Wn(a,s,"xOffset",d,s.xOffset),Wn(a,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Nr=function(e,t){var n=e._gsap||new hu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=xn(e,hn)||"0",u,d,f,m,_,h,p,g,M,v,y,w,A,C,x,S,L,U,G,R,D,N,q,$,k,K,j,ce,O,Z,ee,te;return u=d=f=h=p=g=M=v=y=0,m=_=1,n.svg=!!(e.getCTM&&Eu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[qe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qe]!=="none"?l[qe]:"")),i.scale=i.rotate=i.translate="none"),C=Mo(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Ja(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,C)),w=n.xOrigin||0,A=n.yOrigin||0,C!==Or&&(U=C[0],G=C[1],R=C[2],D=C[3],u=N=C[4],d=q=C[5],C.length===6?(m=Math.sqrt(U*U+G*G),_=Math.sqrt(D*D+R*R),h=U||G?Gi(G,U)*ui:0,M=R||D?Gi(R,D)*ui+h:0,M&&(_*=Math.abs(Math.cos(M*Zi))),n.svg&&(u-=w-(w*U+A*R),d-=A-(w*G+A*D))):(te=C[6],Z=C[7],j=C[8],ce=C[9],O=C[10],ee=C[11],u=C[12],d=C[13],f=C[14],x=Gi(te,O),p=x*ui,x&&(S=Math.cos(-x),L=Math.sin(-x),$=N*S+j*L,k=q*S+ce*L,K=te*S+O*L,j=N*-L+j*S,ce=q*-L+ce*S,O=te*-L+O*S,ee=Z*-L+ee*S,N=$,q=k,te=K),x=Gi(-R,O),g=x*ui,x&&(S=Math.cos(-x),L=Math.sin(-x),$=U*S-j*L,k=G*S-ce*L,K=R*S-O*L,ee=D*L+ee*S,U=$,G=k,R=K),x=Gi(G,U),h=x*ui,x&&(S=Math.cos(x),L=Math.sin(x),$=U*S+G*L,k=N*S+q*L,G=G*S-U*L,q=q*S-N*L,U=$,N=k),p&&Math.abs(p)+Math.abs(h)>359.9&&(p=h=0,g=180-g),m=$e(Math.sqrt(U*U+G*G+R*R)),_=$e(Math.sqrt(q*q+te*te)),x=Gi(N,q),M=Math.abs(x)>2e-4?x*ui:0,y=ee?1/(ee<0?-ee:ee):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Cu(xn(e,qe)),$&&e.setAttribute("transform",$))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=h<=0?180:-180,h+=h<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=$e(m),n.scaleY=$e(_),n.rotation=$e(h)+s,n.rotationX=$e(p)+s,n.rotationY=$e(g)+s,n.skewX=M+s,n.skewY=v+s,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[hn]=Es(c)),n.xOffset=n.yOffset=0,n.force3D=Ht.force3D,n.renderTransform=n.svg?o0:wu?Lu:a0,n.uncache=0,n},Es=function(e){return(e=e.split(" "))[0]+" "+e[1]},Aa=function(e,t,n){var i=gt(t);return $e(parseFloat(t)+parseFloat(Zn(e,"x",n+"px",i)))+i},a0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Lu(e,t)},ai="0deg",xr="0px",oi=") ",Lu=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,_=n.scaleX,h=n.scaleY,p=n.transformPerspective,g=n.force3D,M=n.target,v=n.zOrigin,y="",w=g==="auto"&&e&&e!==1||g===!0;if(v&&(d!==ai||u!==ai)){var A=parseFloat(u)*Zi,C=Math.sin(A),x=Math.cos(A),S;A=parseFloat(d)*Zi,S=Math.cos(A),a=Aa(M,a,C*S*-v),s=Aa(M,s,-Math.sin(A)*-v),l=Aa(M,l,x*S*-v+v)}p!==xr&&(y+="perspective("+p+oi),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(w||a!==xr||s!==xr||l!==xr)&&(y+=l!==xr||w?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+oi),c!==ai&&(y+="rotate("+c+oi),u!==ai&&(y+="rotateY("+u+oi),d!==ai&&(y+="rotateX("+d+oi),(f!==ai||m!==ai)&&(y+="skew("+f+", "+m+oi),(_!==1||h!==1)&&(y+="scale("+_+", "+h+oi),M.style[qe]=y||"translate(0, 0)"},o0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,_=n.xOrigin,h=n.yOrigin,p=n.xOffset,g=n.yOffset,M=n.forceCSS,v=parseFloat(a),y=parseFloat(s),w,A,C,x,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zi,c*=Zi,w=Math.cos(l)*d,A=Math.sin(l)*d,C=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=Zi,S=Math.tan(c-u),S=Math.sqrt(1+S*S),C*=S,x*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,A*=S)),w=$e(w),A=$e(A),C=$e(C),x=$e(x)):(w=d,x=f,A=C=0),(v&&!~(a+"").indexOf("px")||y&&!~(s+"").indexOf("px"))&&(v=Zn(m,"x",a,"px"),y=Zn(m,"y",s,"px")),(_||h||p||g)&&(v=$e(v+_-(_*w+h*C)+p),y=$e(y+h-(_*A+h*x)+g)),(i||r)&&(S=m.getBBox(),v=$e(v+i/100*S.width),y=$e(y+r/100*S.height)),S="matrix("+w+","+A+","+C+","+x+","+v+","+y+")",m.setAttribute("transform",S),M&&(m.style[qe]=S)},l0=function(e,t,n,i,r){var a=360,s=ht(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?ui:1),c=l-i,u=i+c+"deg",d,f;return s&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Yl)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Yl)%a-~~(c/a)*a)),e._pt=f=new Dt(e._pt,t,n,i,c,Xg),f.e=u,f.u="deg",e._props.push(n),f},Ql=function(e,t){for(var n in t)e[n]=t[n];return e},c0=function(e,t,n){var i=Ql({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,d,f,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[qe]=t,s=Nr(n,1),Fr(n,qe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[qe],a[qe]=t,s=Nr(n,1),a[qe]=c);for(l in Fn)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=gt(c),_=gt(u),d=m!==_?Zn(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Dt(e._pt,s,l,d,f-d,ja),e._pt.u=_||0,e._props.push(l));Ql(s,i)};Pt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});Ts[e>1?"border"+o:o]=function(s,l,c,u,d){var f,m;if(arguments.length<4)return f=a.map(function(_){return Ln(s,_,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(_,h){return m[_]=f[h]=f[h]||f[(h-1)/2|0]}),s.init(l,m,d)}});var Pu={name:"css",register:Ka,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,d,f,m,_,h,p,g,M,v,y,w,A,C,x;xo||Ka(),this.styles=this.styles||bu(e),x=this.styles.props,this.tween=n;for(h in t)if(h!=="autoRound"&&(u=t[h],!(zt[h]&&fu(h,t,n,i,e,r)))){if(m=typeof u,_=Ts[h],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Rr(u)),_)_(this,e,h,u,n)&&(C=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),u+="",qn.lastIndex=0,qn.test(c)||(p=gt(c),g=gt(u)),g?p!==g&&(c=Zn(e,h,c,g)+g):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,h),a.push(h),x.push(h,0,s[h]);else if(m!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(n,i,e,r):l[h],ht(c)&&~c.indexOf("random(")&&(c=Rr(c)),gt(c+"")||(c+=Ht.units[h]||gt(Ln(e,h))||""),(c+"").charAt(1)==="="&&(c=Ln(e,h))):c=Ln(e,h),f=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),h in _n&&(h==="autoAlpha"&&(f===1&&Ln(e,"visibility")==="hidden"&&d&&(f=0),x.push("visibility",0,s.visibility),Wn(this,s,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),h!=="scale"&&h!=="transform"&&(h=_n[h],~h.indexOf(",")&&(h=h.split(",")[0]))),v=h in Fn,v){if(this.styles.save(h),y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Nr(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new Dt(this._pt,s,qe,0,1,w.renderTransform,w,0,-1),y.dep=1),h==="scale")this._pt=new Dt(this._pt,w,"scaleY",w.scaleY,(M?$i(w.scaleY,M+d):d)-w.scaleY||0,ja),this._pt.u=0,a.push("scaleY",h),h+="X";else if(h==="transformOrigin"){x.push(hn,0,s[hn]),u=r0(u),w.svg?Ja(e,u,0,A,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==w.zOrigin&&Wn(this,w,"zOrigin",w.zOrigin,g),Wn(this,s,h,Es(c),Es(u)));continue}else if(h==="svgOrigin"){Ja(e,u,1,A,0,this);continue}else if(h in Au){l0(this,w,h,f,M?$i(f,M+u):u);continue}else if(h==="smoothOrigin"){Wn(this,w,"smooth",w.smooth,u);continue}else if(h==="force3D"){w[h]=u;continue}else if(h==="transform"){c0(this,u,e);continue}}else h in s||(h=or(h)||h);if(v||(d||d===0)&&(f||f===0)&&!Hg.test(u)&&h in s)p=(c+"").substr((f+"").length),d||(d=0),g=gt(u)||(h in Ht.units?Ht.units[h]:p),p!==g&&(f=Zn(e,h,c,g)),this._pt=new Dt(this._pt,v?w:s,h,f,(M?$i(f,M+d):d)-f,!v&&(g==="px"||h==="zIndex")&&t.autoRound!==!1?Yg:ja),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=qg);else if(h in s)i0.call(this,e,h,c,M?M+u:u);else if(h in e)this.add(e,h,c||e[h],M?M+u:u,i,r);else if(h!=="parseTransform"){lo(h,u);continue}v||(h in s?x.push(h,0,s[h]):x.push(h,1,c||e[h])),a.push(h)}}C&&xu(this)},render:function(e,t){if(t.tween._time||!vo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ln,aliases:_n,getSetter:function(e,t,n){var i=_n[t];return i&&i.indexOf(",")<0&&(t=i),t in Fn&&t!==hn&&(e._gsap.x||Ln(e,"x"))?n&&ql===n?t==="scale"?Kg:Zg:(ql=n||{})&&(t==="scale"?Jg:Qg):e.style&&!so(e.style[t])?$g:~t.indexOf("-")?jg:_o(e,t)},core:{_removeProperty:Fr,_getMatrix:Mo}};Rt.utils.checkPrefix=or;Rt.core.getStyleSaver=bu;(function(o,e,t,n){var i=Pt(o+","+e+","+t,function(r){Fn[r]=1});Pt(e,function(r){Ht.units[r]="deg",Au[r]=1}),_n[i[13]]=o+","+e,Pt(n,function(r){var a=r.split(":");_n[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ht.units[o]="px"});Rt.registerPlugin(Pu);var Qa=Rt.registerPlugin(Pu)||Rt;Qa.core.Tween;function u0(o){function e(){for(var k=0;k<arguments.length;k++)if(arguments[k]!==void 0)return arguments[k]}console.log("%c Hover effect plugin: https://github.com/robin-dela/hover-effect ","color: #bada55; font-size: 0.8rem");var t=o.parent,n=o.displacementImage,i=o.image1,r=o.image2,a=e(o.imagesRatio,1),s=e(o.intensity1,o.intensity,1),l=e(o.intensity2,o.intensity,1),c=e(o.angle,Math.PI/4),u=e(o.angle1,c),d=e(o.angle2,3*-c),f=e(o.speedIn,o.speed,1.6),m=e(o.speedOut,o.speed,1.2),_=e(o.hover,!0),h=e(o.easing,"expo.out"),p=e(o.video,!1);if(t)if(i&&r&&n){var g=new q_,M=new Tc(t.offsetWidth/-2,t.offsetWidth/2,t.offsetHeight/2,t.offsetHeight/-2,1,1e3);M.position.z=1;var v=new Pc({antialias:!1,alpha:!0});v.setPixelRatio(2),v.setClearColor(16777215,0),v.setSize(t.offsetWidth,t.offsetHeight),t.appendChild(v.domElement);var y=function(){v.render(g,M)},w=new Z_;w.crossOrigin="";var A,C,x=w.load(n,y);if(x.magFilter=x.minFilter=We,p){(function k(){requestAnimationFrame(k),v.render(g,M)})(),(p=document.createElement("video")).autoplay=!0,p.loop=!0,p.muted=!0,p.src=i,p.load();var S=document.createElement("video");S.autoplay=!0,S.loop=!0,S.muted=!0,S.src=r,S.load();var L=new us(p),U=new us(S);L.magFilter=U.magFilter=We,L.minFilter=U.minFilter=We,S.addEventListener("loadeddata",function(){S.play(),(U=new us(S)).magFilter=We,U.minFilter=We,R.uniforms.texture2.value=U},!1),p.addEventListener("loadeddata",function(){p.play(),(L=new us(p)).magFilter=We,L.minFilter=We,R.uniforms.texture1.value=L},!1)}else L=w.load(i,y),U=w.load(r,y),L.magFilter=U.magFilter=We,L.minFilter=U.minFilter=We;var G=a;t.offsetHeight/t.offsetWidth<G?(A=1,C=t.offsetHeight/t.offsetWidth/G):(A=t.offsetWidth/t.offsetHeight*G,C=1);var R=new $n({uniforms:{intensity1:{type:"f",value:s},intensity2:{type:"f",value:l},dispFactor:{type:"f",value:0},angle1:{type:"f",value:u},angle2:{type:"f",value:d},texture1:{type:"t",value:L},texture2:{type:"t",value:U},disp:{type:"t",value:x},res:{type:"vec4",value:new rt(t.offsetWidth,t.offsetHeight,A,C)},dpr:{type:"f",value:window.devicePixelRatio}},vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,fragmentShader:`
varying vec2 vUv;

uniform float dispFactor;
uniform float dpr;
uniform sampler2D disp;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float angle1;
uniform float angle2;
uniform float intensity1;
uniform float intensity2;
uniform vec4 res;
uniform vec2 parent;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

void main() {
  vec4 disp = texture2D(disp, vUv);
  vec2 dispVec = vec2(disp.r, disp.g);

  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;
  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);


  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;
  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
  vec4 _texture1 = texture2D(texture1, distortedPosition1);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);
  gl_FragColor = mix(_texture1, _texture2, dispFactor);
}
`,transparent:!0,opacity:1}),D=new Ps(t.offsetWidth,t.offsetHeight,1),N=new Dn(D,R);g.add(N),_&&(t.addEventListener("mouseenter",q),t.addEventListener("touchstart",q),t.addEventListener("mouseleave",$),t.addEventListener("touchend",$)),window.addEventListener("resize",function(k){t.offsetHeight/t.offsetWidth<G?(A=1,C=t.offsetHeight/t.offsetWidth/G):(A=t.offsetWidth/t.offsetHeight*G,C=1),N.material.uniforms.res.value=new rt(t.offsetWidth,t.offsetHeight,A,C),v.setSize(t.offsetWidth,t.offsetHeight),y()}),this.next=q,this.previous=$}else console.warn("One or more images are missing");else console.warn("Parent missing");function q(){Qa.to(R.uniforms.dispFactor,{duration:f,value:1,ease:h,onUpdate:y,onComplete:y})}function $(){Qa.to(R.uniforms.dispFactor,{duration:m,value:0,ease:h,onUpdate:y,onComplete:y})}}const h0=Kn({__name:"HeroImage",props:{src:null},setup(o){const e=o,t="/assets/images/portfolio/background.png",n=Er();Er();const i=r=>{r.style.setProperty("--image-height",`${r.offsetWidth}px`)};return Ou(()=>{n.value&&(i(n.value),new u0({parent:n.value,intensity:3,image1:e.src,image2:e.src,displacementImage:t}))}),(r,a)=>(it(),xt("div",{class:"image",ref_key:"imageRef",ref:n},null,512))}});const f0=fn(h0,[["__scopeId","data-v-20ae6f21"]]),Os=o=>(Ur("data-v-8704d90e"),o=o(),zr(),o),d0={class:"hero"},p0=Os(()=>le("div",{class:"hero__name"},"Студия Натальи Семёновой",-1)),m0=Os(()=>le("h1",{class:"hero__title letter-spacing"},"Bизуальная упаковка брендов",-1)),_0=Os(()=>le("h2",{class:"hero__subtitle"}," Сайт и визуал, который увеличит ваши продажи за счет грамотной структуры и крутого дизайна ",-1)),g0=Os(()=>le("div",{class:"hero__images mobile"},[le("img",{src:Hu,alt:""}),le("img",{src:Xu,alt:""})],-1)),x0={class:"hero__images desktop"},v0=Kn({__name:"HeroSection",setup(o){const e=Er([{src:"/assets/images/hero/hero-01.jpg"},{src:"/assets/images/hero/hero-02.jpg"},{src:"/assets/images/hero/hero-03.jpg"}]);return(t,n)=>(it(),xt("section",d0,[p0,m0,_0,Ee(ds,{href:"tg://resolve?domain=n_smnv",class:"hero__link",isNewWindow:""},{default:Je(()=>[un(" Обсудить проект ")]),_:1}),g0,le("div",x0,[(it(!0),xt(eo,null,ic(e.value,(i,r)=>(it(),La(f0,{key:r,src:i.src},null,8,["src"]))),128))])]))}});const y0=fn(v0,[["__scopeId","data-v-8704d90e"]]);const M0={},S0=o=>(Ur("data-v-ea52ef45"),o=o(),zr(),o),b0={class:"about section-padding",id:"about"},w0={class:"about__content"},T0=S0(()=>le("div",{class:"about__text"},[le("p",null," Помогаем раскрыть личный бренд через дорого упакованный продукт в виде сайта на Taplink и Tilda и упаковку Instagram. Упаковываем профиль Instagram так, что на него хотят подписаться и купить. "),le("p",null," Мы уверены, что дизайн и визуал – это не только внешний вид, но и удобство, узнаваемость бренда, функциональность. Это возможность представить свой бизнес в лучшем свете и донести до своих клиентов его смысловое ядро. ")],-1));function E0(o,e){const t=Ct("SectionTitle"),n=Ct("AppContainer");return it(),xt("section",b0,[Ee(n,null,{default:Je(()=>[le("div",w0,[Ee(t,{title:"О нас"}),T0])]),_:1})])}const A0=fn(M0,[["render",E0],["__scopeId","data-v-ea52ef45"]]);const C0={},L0={class:"portfolio section-padding",id:"portfolio"},P0={class:"portfolio__header"},D0={class:"portfolio__tabs"},R0={class:"portfolio__content"};function I0(o,e){const t=Ct("SectionTitle"),n=Ct("RouterLink"),i=Ct("Router-view"),r=Ct("AppContainer");return it(),xt("section",L0,[Ee(r,null,{default:Je(()=>[le("div",P0,[Ee(t,{title:"Портфолио"}),le("div",D0,[Ee(n,{to:{name:"taplink"},class:"portfolio__link"},{default:Je(()=>[un(" Taplink ")]),_:1}),Ee(n,{to:{name:"tilda"},class:"portfolio__link"},{default:Je(()=>[un(" Tilda ")]),_:1}),Ee(n,{to:{name:"instagram"},class:"portfolio__link"},{default:Je(()=>[un(" Упаковка Instagram ")]),_:1})])]),le("div",R0,[Ee(i,null,{default:Je(({Component:a})=>[Ee(rc,null,{default:Je(()=>[(it(),La(Nu,null,[(it(),La(Uu(a)))],1024))]),_:2},1024)]),_:1})])]),_:1})])}const F0=fn(C0,[["render",I0],["__scopeId","data-v-9e433dc4"]]),O0=["onClick"],N0=Kn({__name:"ServiceHint",props:{list:null},setup(o){const e=Er(!1),t=()=>{e.value=!e.value},n=window.matchMedia("(min-width: 1200px)"),i=window.matchMedia("(pointer: fine)"),r=window.matchMedia("(pointer: coarse)"),a=()=>{!n.matches&&r.matches&&t()},s=()=>{n.matches&&i.matches&&t()},l=zu(()=>({"service-hint--active":e.value}));return(c,u)=>(it(),xt("div",{class:nc(["service-hint",Vu(l)])},[le("button",{type:"button",class:"service-hint__button",onClick:ku(a,["prevent"]),onMouseenter:s,onMouseleave:s}," Что входит ",40,O0),Ee(rc,{name:"slide-up"},{default:Je(()=>[e.value?(it(),xt("ul",{key:0,class:"service-hint__list",onClick:t},[(it(!0),xt(eo,null,ic(o.list,(d,f)=>(it(),xt("li",{class:"service-hint__item",key:f},Bu(d),1))),128))])):Gu("",!0)]),_:1})],2))}});const Ca=fn(N0,[["__scopeId","data-v-1704c289"]]),On=o=>(Ur("data-v-064490e8"),o=o(),zr(),o),U0={class:"services",id:"services"},z0={class:"services__list"},k0={class:"services__item"},B0={class:"service"},G0={class:"service__header"},V0=On(()=>le("h3",{class:"service__title"},"Сайт на Таплинк",-1)),W0=On(()=>le("p",{class:"service__description"}," Таплинк – идеальное решение для любого бизнеса, чтобы продемонстрировать свои товары или услуги для продвижения в соцсетях при помощи таргета. ",-1)),H0={class:"service__footer"},X0=On(()=>le("div",{class:"service__days"},"(от 7 дней)",-1)),q0={class:"services__item"},Y0={class:"service"},$0={class:"service__header"},j0=On(()=>le("h3",{class:"service__title"},"Сайт на Тильде",-1)),Z0=On(()=>le("p",{class:"service__description"}," Тильда – отличное решение для любого вида бизнеса, чтобы продемонстрировать свои товары или услуги с последующим продвижением в соцсетях и поисковых системах при помощи таргета и SEO, с возможностью создания адаптивного дизайна под все виды устройств. ",-1)),K0={class:"service__footer"},J0=On(()=>le("div",{class:"service__days"},[le("span",null,"(от 14 дней)")],-1)),Q0={class:"services__item"},ex={class:"service"},tx={class:"service__header"},nx=On(()=>le("h3",{class:"service__title"},"Упаковка Instagram",-1)),ix=On(()=>le("p",{class:"service__description"}," Уникальный и запоминающийся визуал для коммерческих и личных профилей в Instagram, который выделит вас среди конкурентов и повысит продажи. ",-1)),rx={class:"service__footer"},sx=On(()=>le("div",{class:"service__days"},[le("span",null,"(от 4 дней)")],-1)),ax=Kn({__name:"ServicesSection",setup(o){const e=Er({taplink:["Анализ ниши и конкурентов","Проработка структуры","Подбор референсов, цветовой палитры, шрифтов, индивидуальных элементов оформления, формирование дизайн-концепции","2 итерации бесплатных правок","Верстка на Таплинк","Настройка функционала","Инструкция по редактированию Таплинк"],website:["Анализ ниши, конкурентов","Проработка структуры, карта сайта","Подбор референсов, цветовой палитры, шрифтов, индивидуальных элементов оформления","Текстовый прототип","Дизайн-концепция","Адаптив под мобильные разрешения","2 итерации бесплатных правок на каждом этапе работы","Верстка на Тильда под все устройства","Настройка функционала и анимации","Базовое SEO для хорошей индексации","Инструкция по пользованию сайтом"],instagram:["Анализ визуала аккаунта. Анализ вашей ниши, конкурентов","Формирование новой концепции и стилистики аккаунта","Подбор цветовой палитры, фирменных шрифтов, индивидуальных элементов оформления","Составление ленты из ваших фотографий (желательно не менее 30 шт). Если ваших фото недостаточно или их нет совсем, я отправляю вам подбор референсов, по которым вы сможете сделать фотографии для своего профиля","Составление визуала ленты на основе снимков, созданных по референсам","Создание дизайна текстовых блоков (при необходимости)","Оформление аватара профиля (при необходимости)","Оформление обложек для актуальных сторис (при необходимости)","Отправка визуальной концепции для дальнейшего использования с инструкцией cсылкой на Google Диск и Figma"]});return(t,n)=>{const i=Ct("SectionTitle"),r=Ct("AppContainer");return it(),xt("section",U0,[Ee(r,null,{default:Je(()=>[Ee(i,{title:"Услуги"}),le("ul",z0,[le("li",k0,[le("article",B0,[le("header",G0,[V0,Ee(Ca,{list:e.value.taplink},null,8,["list"])]),W0,le("footer",H0,[Ee(ds,{href:"https://docs.google.com/forms/d/e/1FAIpQLScY3RmA8G7SzkGXXl81uwL5LwaTPd5tX8G0m3nPZyXXTTjn8w/viewform?usp=sf_link",isNewWindow:"",isWhite:""},{default:Je(()=>[un(" Заполнить бриф ")]),_:1}),X0])])]),le("li",q0,[le("article",Y0,[le("header",$0,[j0,Ee(Ca,{list:e.value.website},null,8,["list"])]),Z0,le("footer",K0,[Ee(ds,{href:"tg://resolve?domain=n_smnv",isNewWindow:"",isWhite:""},{default:Je(()=>[un(" Оставить заявку ")]),_:1}),J0])])]),le("li",Q0,[le("article",ex,[le("header",tx,[nx,Ee(Ca,{list:e.value.instagram},null,8,["list"])]),ix,le("footer",rx,[Ee(ds,{href:"https://docs.google.com/forms/d/e/1FAIpQLSe8nuapFHZ4ggu67t8T_-hjtXKU4l5Vcnxi-f1tnIZcwBeRpw/viewform?usp=sf_link",isNewWindow:"",isWhite:""},{default:Je(()=>[un(" Заполнить бриф ")]),_:1}),sx])])])])]),_:1})])}}});const ox=fn(ax,[["__scopeId","data-v-064490e8"]]),lx="/assets/team-01-a9c6d343.jpg",cx="/assets/team-02-4df13f5b.jpg";const ux={},hx=o=>(Ur("data-v-2a2ebdea"),o=o(),zr(),o),fx={class:"team section-padding"},dx=hx(()=>le("ul",{class:"team__list"},[le("li",{class:"team__item"},[le("article",{class:"team-member"},[le("div",{class:"team-member__photo"},[le("img",{src:lx,alt:""})]),le("div",{class:"team-member__caption"},[le("div",{class:"team-member__name"},"Наталья Семёнова"),le("div",{class:"team-member__occupation"},"Арт-директор")])])]),le("li",{class:"team__item"},[le("article",{class:"team-member team-member--reversed"},[le("div",{class:"team-member__photo"},[le("img",{src:cx,alt:""})]),le("div",{class:"team-member__caption"},[le("div",{class:"team-member__name"},"Надежда Евкина"),le("div",{class:"team-member__occupation"},"Веб-дизайнер")])])])],-1));function px(o,e){const t=Ct("SectionTitle"),n=Ct("AppContainer");return it(),xt("section",fx,[Ee(n,null,{default:Je(()=>[Ee(t,{title:"Команда"}),dx]),_:1})])}const mx=fn(ux,[["render",px],["__scopeId","data-v-2a2ebdea"]]),_x="/assets/instagram-01-2a5efd9a.jpg",gx="/assets/instagram-02-74604ea9.jpg",xx="/assets/instagram-03-aabcfc9f.jpg",vx="/assets/instagram-04-7f89bb96.jpg";const yx={},Mx={class:"instagram section-padding"},Sx=Wu('<div class="instagram__content" data-v-7c33e6bd><a href="https://www.instagram.com/p/CYgmTuXgqQD/" class="instagram__link animated" target="_blank" data-v-7c33e6bd><img src="'+_x+'" alt="пост из инстаграмм" data-v-7c33e6bd></a><a href="https://www.instagram.com/p/CgBu05hjsnC/" class="instagram__link animated" target="_blank" data-v-7c33e6bd><img src="'+gx+'" alt="пост из инстаграмм" data-v-7c33e6bd></a><a href="https://www.instagram.com/p/Ckpry_NjMFX/" class="instagram__link animated" target="_blank" data-v-7c33e6bd><img src="'+xx+'" alt="пост из инстаграмм" data-v-7c33e6bd></a><a href="https://www.instagram.com/p/CmV8uUrjy1S/" class="instagram__link animated" target="_blank" data-v-7c33e6bd><img src="'+vx+'" alt="пост из инстаграмм" data-v-7c33e6bd></a></div>',1);function bx(o,e){const t=Ct("SectionTitle"),n=Ct("AppContainer");return it(),xt("section",Mx,[Ee(n,null,{default:Je(()=>[Ee(t,{title:"Мы в Instagram"})]),_:1}),Sx])}const wx=fn(yx,[["render",bx],["__scopeId","data-v-7c33e6bd"]]),Tx=["href","target"],Ex=Kn({__name:"ContactLink",props:{href:null,isNewWindow:{type:Boolean}},setup(o){return(e,t)=>(it(),xt("a",{href:o.href,class:"contact-link",target:o.isNewWindow?"_blank":""},[Ee(ec),tc(e.$slots,"default",{},void 0,!0)],8,Tx))}});const fs=fn(Ex,[["__scopeId","data-v-106c715c"]]),Ax=o=>(Ur("data-v-72722d21"),o=o(),zr(),o),Cx={class:"contacts section-padding",id:"contacts"},Lx={class:"contacts__body"},Px={class:"contacts__links"},Dx=Ax(()=>le("a",{href:"https://www.instagram.com/natalia.semenova.studio/",class:"contacts__btn",target:"_blank"},[le("span",null,"Связаться")],-1)),Rx=Kn({__name:"ContactsSection",setup(o){return(e,t)=>{const n=Ct("SectionTitle"),i=Ct("AppContainer");return it(),xt("section",Cx,[Ee(i,null,{default:Je(()=>[Ee(n,{title:"Контакты",color:"white"}),le("div",Lx,[le("ul",Px,[le("li",null,[Ee(fs,{href:"tg://resolve?domain=n_smnv",isNewWindow:""},{default:Je(()=>[un(" Telegram ")]),_:1})]),le("li",null,[Ee(fs,{href:"https://instagram.com/natalia.semenova.studio",isNewWindow:""},{default:Je(()=>[un(" Instagram ")]),_:1})]),le("li",null,[Ee(fs,{href:"mailto: smnvn97@gmail.com",isNewWindow:""},{default:Je(()=>[un(" Email ")]),_:1})]),le("li",null,[Ee(fs,{href:"https://wa.me/79384097068",isNewWindow:""},{default:Je(()=>[un(" Whatsapp ")]),_:1})])]),Dx])]),_:1})])}}});const Ix=fn(Rx,[["__scopeId","data-v-72722d21"]]),Nx=Kn({__name:"HomeView",setup(o){return(e,t)=>(it(),xt(eo,null,[Ee(y0),Ee(A0),Ee(F0),Ee(ox),Ee(mx),Ee(wx),Ee(Ix)],64))}});export{Nx as default};
