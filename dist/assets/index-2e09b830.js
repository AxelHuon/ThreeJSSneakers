(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kc="148",Br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hp=0,Eu=1,Wp=2,Ff=1,Xp=2,js=3,Qi=0,Wn=1,Uc=2,Pa=3,ji=0,ds=1,Au=2,Cu=3,Lu=4,qp=5,ss=100,Yp=101,jp=102,Pu=103,Du=104,$p=200,Zp=201,Kp=202,Jp=203,Of=204,Nf=205,Qp=206,em=207,tm=208,nm=209,im=210,rm=0,sm=1,am=2,nc=3,om=4,lm=5,cm=6,um=7,Bc=0,hm=1,fm=2,Pi=0,dm=1,pm=2,mm=3,Vo=4,gm=5,zf=300,ys=301,Ms=302,ic=303,rc=304,Ho=306,bs=1e3,An=1001,sc=1002,Bt=1003,Ru=1004,el=1005,Gt=1006,_m=1007,Ss=1008,Pr=1009,xm=1010,vm=1011,kf=1012,ym=1013,_r=1014,oi=1015,Ai=1016,Mm=1017,bm=1018,ps=1020,Sm=1021,wm=1022,Jn=1023,Tm=1024,Em=1025,yr=1026,ws=1027,Am=1028,Cm=1029,Lm=1030,Pm=1031,Dm=1033,tl=33776,nl=33777,il=33778,rl=33779,Iu=35840,Fu=35841,Ou=35842,Nu=35843,Rm=36196,zu=37492,ku=37496,Uu=37808,Bu=37809,Gu=37810,Vu=37811,Hu=37812,Wu=37813,Xu=37814,qu=37815,Yu=37816,ju=37817,$u=37818,Zu=37819,Ku=37820,Ju=37821,Qu=36492,er=3e3,ot=3001,Im=3200,Fm=3201,Gc=0,Om=1,ii="srgb",pa="srgb-linear",sl=7680,Nm=519,eh=35044,th="300 es",ac=1035;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],al=Math.PI/180,oc=180/Math.PI;function wa(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[o&255]+Xt[o>>8&255]+Xt[o>>16&255]+Xt[o>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Yt(o,e,t){return Math.max(e,Math.min(t,o))}function zm(o,e){return(o%e+e)%e}function ol(o,e,t){return(1-t)*o+t*e}function nh(o){return(o&o-1)===0&&o!==0}function lc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Da(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pn{constructor(){Pn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=i[0],m=i[3],x=i[6],b=i[1],v=i[4],M=i[7],y=i[2],w=i[5],E=i[8];return r[0]=a*d+s*b+l*y,r[3]=a*m+s*v+l*w,r[6]=a*x+s*M+l*E,r[1]=c*d+u*b+h*y,r[4]=c*m+u*v+h*w,r[7]=c*x+u*M+h*E,r[2]=f*d+p*b+g*y,r[5]=f*m+p*v+g*w,r[8]=f*x+p*M+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*a-s*c,f=s*l-u*r,p=c*r-a*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(s*n-i*a)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-s*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new Pn;function Uf(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ma(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Mr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const cl={[ii]:{[pa]:Mr},[pa]:{[ii]:mo}},Qt={legacyMode:!0,get workingColorSpace(){return pa},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(cl[e]&&cl[e][t]!==void 0){const n=cl[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ct={r:0,g:0,b:0},Yn={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function ul(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Ia(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qt.workingColorSpace){if(e=zm(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ul(a,r,e+1/3),this.g=ul(a,r,e),this.b=ul(a,r,e-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(e,t=ii){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Qt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Qt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Qt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Qt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ii){const n=Bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Qt.fromWorkingColorSpace(Ia(this,Ct),e),Yt(Ct.r*255,0,255)<<16^Yt(Ct.g*255,0,255)<<8^Yt(Ct.b*255,0,255)<<0}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ia(this,Ct),t);const n=Ct.r,i=Ct.g,r=Ct.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ia(this,Ct),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=ii){return Qt.fromWorkingColorSpace(Ia(this,Ct),e),e!==ii?`color(${e} ${Ct.r} ${Ct.g} ${Ct.b})`:`rgb(${Ct.r*255|0},${Ct.g*255|0},${Ct.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Yn),Yn.h+=e,Yn.s+=t,Yn.l+=n,this.setHSL(Yn.h,Yn.s,Yn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Ra);const n=ol(Yn.h,Ra.h,t),i=ol(Yn.s,Ra.s,t),r=ol(Yn.l,Ra.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}je.NAMES=Bf;let Vr;class Gf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vr===void 0&&(Vr=ma("canvas")),Vr.width=e.width,Vr.height=e.height;const n=Vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Mr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vf{constructor(e=null){this.isSource=!0,this.uuid=wa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(hl(i[a].image)):r.push(hl(i[a]))}else r=hl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function hl(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Gf.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let km=0;class Zt extends kr{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=An,i=An,r=Gt,a=Ss,s=Jn,l=Pr,c=Zt.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=wa(),this.name="",this.source=new Vf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=zf;Zt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(p+1)/2,y=(x+1)/2,w=(u+f)/4,E=(h+d)/4,_=(g+m)/4;return v>M&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=E/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=E/r,i=_/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-d)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dr extends kr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hf extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Um extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],d=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-s;const x=l*f+c*p+u*g+h*d,b=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){const y=Math.sqrt(v),w=Math.atan2(y,x*b);m=Math.sin(m*w)/y,s=Math.sin(s*w)/y}const M=s*b;if(l=l*m+f*M,c=c*m+p*M,u=u*m+g*M,h=h*m+d*M,m===1-s){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=s*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-s*p,e[t+2]=c*g+u*p+s*f-l*h,e[t+3]=u*g-s*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+s+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>s&&n>h){const p=2*Math.sqrt(1+n-s-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(s>h){const p=2*Math.sqrt(1+s-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-s);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ih.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-s*i;return this.x=c*l+f*-r+u*-s-h*-a,this.y=u*l+f*-a+h*-r-c*-s,this.z=h*l+f*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fl=new k,ih=new Rr;class Ta{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)sr.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(sr)}else n.boundingBox===null&&n.computeBoundingBox(),dl.copy(n.boundingBox),dl.applyMatrix4(e.matrixWorld),this.union(dl);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Fa.subVectors(this.max,zs),Hr.subVectors(e.a,zs),Wr.subVectors(e.b,zs),Xr.subVectors(e.c,zs),Oi.subVectors(Wr,Hr),Ni.subVectors(Xr,Wr),ar.subVectors(Hr,Xr);let t=[0,-Oi.z,Oi.y,0,-Ni.z,Ni.y,0,-ar.z,ar.y,Oi.z,0,-Oi.x,Ni.z,0,-Ni.x,ar.z,0,-ar.x,-Oi.y,Oi.x,0,-Ni.y,Ni.x,0,-ar.y,ar.x,0];return!pl(t,Hr,Wr,Xr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!pl(t,Hr,Wr,Xr,Fa))?!1:(Oa.crossVectors(Oi,Ni),t=[Oa.x,Oa.y,Oa.z],pl(t,Hr,Wr,Xr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return sr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new k,new k,new k,new k,new k,new k,new k,new k],sr=new k,dl=new Ta,Hr=new k,Wr=new k,Xr=new k,Oi=new k,Ni=new k,ar=new k,zs=new k,Fa=new k,Oa=new k,or=new k;function pl(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){or.fromArray(o,r);const s=i.x*Math.abs(or.x)+i.y*Math.abs(or.y)+i.z*Math.abs(or.z),l=e.dot(or),c=t.dot(or),u=n.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Bm=new Ta,ks=new k,ml=new k;class Ea{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(ml)),this.expandByPoint(ks.copy(e.center).sub(ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new k,gl=new k,Na=new k,zi=new k,_l=new k,za=new k,xl=new k;class Vc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.direction).multiplyScalar(t).add(this.origin),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gl.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(gl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Na),s=zi.dot(this.direction),l=-zi.dot(Na),c=zi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-s,f=a*s-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+a*f+2*s)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+s)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+s)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+s)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+s)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+s)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Na).multiplyScalar(f).add(gl),p}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const n=_i.dot(this.direction),i=_i.dot(_i)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(s=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,i,r){_l.subVectors(t,e),za.subVectors(n,e),xl.crossVectors(_l,za);let a=this.direction.dot(xl),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;zi.subVectors(this.origin,e);const l=s*this.direction.dot(za.crossVectors(zi,za));if(l<0)return null;const c=s*this.direction.dot(_l.cross(zi));if(c<0||l+c>a)return null;const u=-s*zi.dot(xl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,h,f,p,g,d,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=a,x[9]=s,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=p,x[7]=g,x[11]=d,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),a=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,g=s*u,d=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-s*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*s,t[4]=g*s-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-s,t[2]=p*s-g,t[6]=d+f*s,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*s,t[4]=-a*h,t[8]=g+p*s,t[1]=p+g*s,t[5]=a*u,t[9]=d-f*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=s*u,d=s*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=s*l,d=s*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=s*l,d=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=s*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Vm)}lookAt(e,t,n){const i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ki.crossVectors(n,yn),ki.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ki.crossVectors(n,yn)),ki.normalize(),ka.crossVectors(yn,ki),i[0]=ki.x,i[4]=ka.x,i[8]=yn.x,i[1]=ki.y,i[5]=ka.y,i[9]=yn.y,i[2]=ki.z,i[6]=ka.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],x=n[14],b=n[3],v=n[7],M=n[11],y=n[15],w=i[0],E=i[4],_=i[8],S=i[12],C=i[1],F=i[5],V=i[9],O=i[13],I=i[2],B=i[6],J=i[10],H=i[14],G=i[3],Q=i[7],L=i[11],W=i[15];return r[0]=a*w+s*C+l*I+c*G,r[4]=a*E+s*F+l*B+c*Q,r[8]=a*_+s*V+l*J+c*L,r[12]=a*S+s*O+l*H+c*W,r[1]=u*w+h*C+f*I+p*G,r[5]=u*E+h*F+f*B+p*Q,r[9]=u*_+h*V+f*J+p*L,r[13]=u*S+h*O+f*H+p*W,r[2]=g*w+d*C+m*I+x*G,r[6]=g*E+d*F+m*B+x*Q,r[10]=g*_+d*V+m*J+x*L,r[14]=g*S+d*O+m*H+x*W,r[3]=b*w+v*C+M*I+y*G,r[7]=b*E+v*F+M*B+y*Q,r[11]=b*_+v*V+M*J+y*L,r[15]=b*S+v*O+M*H+y*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],x=e[15];return g*(+r*l*h-i*c*h-r*s*f+n*c*f+i*s*p-n*l*p)+d*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*u-r*l*u)+m*(+t*c*h-t*s*p-r*a*h+n*a*p+r*s*u-n*c*u)+x*(-i*s*u-t*l*h+t*s*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],x=e[15],b=h*m*c-d*f*c+d*l*p-s*m*p-h*l*x+s*f*x,v=g*f*c-u*m*c-g*l*p+a*m*p+u*l*x-a*f*x,M=u*d*c-g*h*c+g*s*p-a*d*p-u*s*x+a*h*x,y=g*h*l-u*d*l-g*s*f+a*d*f+u*s*m-a*h*m,w=t*b+n*v+i*M+r*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=b*E,e[1]=(d*f*r-h*m*r-d*i*p+n*m*p+h*i*x-n*f*x)*E,e[2]=(s*m*r-d*l*r+d*i*c-n*m*c-s*i*x+n*l*x)*E,e[3]=(h*l*r-s*f*r-h*i*c+n*f*c+s*i*p-n*l*p)*E,e[4]=v*E,e[5]=(u*m*r-g*f*r+g*i*p-t*m*p-u*i*x+t*f*x)*E,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*x-t*l*x)*E,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*p+t*l*p)*E,e[8]=M*E,e[9]=(g*h*r-u*d*r-g*n*p+t*d*p+u*n*x-t*h*x)*E,e[10]=(a*d*r-g*s*r+g*n*c-t*d*c-a*n*x+t*s*x)*E,e[11]=(u*s*r-a*h*r-u*n*c+t*h*c+a*n*p-t*s*p)*E,e[12]=y*E,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*m+t*h*m)*E,e[14]=(g*s*i-a*d*i-g*n*l+t*d*l+a*n*m-t*s*m)*E,e[15]=(a*h*i-u*s*i+u*n*l-t*h*l-a*n*f+t*s*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,h=s+s,f=r*c,p=r*u,g=r*h,d=a*u,m=a*h,x=s*h,b=l*c,v=l*u,M=l*h,y=n.x,w=n.y,E=n.z;return i[0]=(1-(d+x))*y,i[1]=(p+M)*y,i[2]=(g-v)*y,i[3]=0,i[4]=(p-M)*w,i[5]=(1-(f+x))*w,i[6]=(m+b)*w,i[7]=0,i[8]=(g+v)*E,i[9]=(m-b)*E,i[10]=(1-(f+d))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=qr.set(i[0],i[1],i[2]).length();const a=qr.set(i[4],i[5],i[6]).length(),s=qr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);const c=1/r,u=1/a,h=1/s;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),p=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,f=(n+i)*c,p=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qr=new k,jn=new yt,Gm=new k(0,0,0),Vm=new k(1,1,1),ki=new k,ka=new k,yn=new k,rh=new yt,sh=new Rr;class Aa{constructor(e=0,t=0,n=0,i=Aa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Aa.DefaultOrder="XYZ";Aa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Wf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hm=0;const ah=new k,Yr=new Rr,xi=new yt,Ua=new k,Us=new k,Wm=new k,Xm=new Rr,oh=new k(1,0,0),lh=new k(0,1,0),ch=new k(0,0,1),qm={type:"added"},uh={type:"removed"};class Nt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DefaultUp.clone();const e=new k,t=new Aa,n=new Rr,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new Pn}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DefaultMatrixWorldAutoUpdate,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(oh,e)}rotateY(e){return this.rotateOnAxis(lh,e)}rotateZ(e){return this.rotateOnAxis(ch,e)}translateOnAxis(e,t){return ah.copy(e).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oh,e)}translateY(e){return this.translateOnAxis(lh,e)}translateZ(e){return this.translateOnAxis(ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Us,Ua,this.up):xi.lookAt(Ua,Us,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),Yr.setFromRotationMatrix(xi),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(uh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Nt.DefaultUp=new k(0,1,0);Nt.DefaultMatrixAutoUpdate=!0;Nt.DefaultMatrixWorldAutoUpdate=!0;const $n=new k,vi=new k,vl=new k,yi=new k,jr=new k,$r=new k,hh=new k,yl=new k,Ml=new k,bl=new k;class wi{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$n.subVectors(i,t),vi.subVectors(n,t),vl.subVectors(e,t);const a=$n.dot($n),s=$n.dot(vi),l=$n.dot(vl),c=vi.dot(vi),u=vi.dot(vl),h=a*c-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-s*u)*f,g=(a*u-s*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yi),yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,yi),l.set(0,0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(s,yi.z),l}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),vi.subVectors(e,t),$n.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),$n.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return wi.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;jr.subVectors(i,n),$r.subVectors(r,n),yl.subVectors(e,n);const l=jr.dot(yl),c=$r.dot(yl);if(l<=0&&c<=0)return t.copy(n);Ml.subVectors(e,i);const u=jr.dot(Ml),h=$r.dot(Ml);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(jr,a);bl.subVectors(e,r);const p=jr.dot(bl),g=$r.dot(bl);if(g>=0&&p<=g)return t.copy(r);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector($r,s);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return hh.subVectors(r,i),s=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(hh,s);const x=1/(m+d+f);return a=d*x,s=f*x,t.copy(n).addScaledVector(jr,a).addScaledVector($r,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ym=0;class di extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=ds,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Of,this.blendDst=Nf,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xf extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new k,Ba=new Ne;class ui{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Da(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Da(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Da(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class qf extends ui{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yf extends ui{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends ui{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jm=0;const On=new yt,Sl=new Nt,Zr=new k,Mn=new Ta,Bs=new Ta,Rt=new k;class ei extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uf(e)?Yf:qf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new an(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];Bs.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(Mn.min,Bs.min),Mn.expandByPoint(Rt),Rt.addVectors(Mn.max,Bs.max),Mn.expandByPoint(Rt)):(Mn.expandByPoint(Bs.min),Mn.expandByPoint(Bs.max))}Mn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Rt.fromBufferAttribute(s,c),l&&(Zr.fromBufferAttribute(e,c),Rt.add(Zr)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<s;C++)c[C]=new k,u[C]=new k;const h=new k,f=new k,p=new k,g=new Ne,d=new Ne,m=new Ne,x=new k,b=new k;function v(C,F,V){h.fromArray(i,C*3),f.fromArray(i,F*3),p.fromArray(i,V*3),g.fromArray(a,C*2),d.fromArray(a,F*2),m.fromArray(a,V*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const O=1/(d.x*m.y-m.x*d.y);isFinite(O)&&(x.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(O),b.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(O),c[C].add(x),c[F].add(x),c[V].add(x),u[C].add(b),u[F].add(b),u[V].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let C=0,F=M.length;C<F;++C){const V=M[C],O=V.start,I=V.count;for(let B=O,J=O+I;B<J;B+=3)v(n[B+0],n[B+1],n[B+2])}const y=new k,w=new k,E=new k,_=new k;function S(C){E.fromArray(r,C*3),_.copy(E);const F=c[C];y.copy(F),y.sub(E.multiplyScalar(E.dot(F))).normalize(),w.crossVectors(_,F);const O=w.dot(u[C])<0?-1:1;l[C*4]=y.x,l[C*4+1]=y.y,l[C*4+2]=y.z,l[C*4+3]=O}for(let C=0,F=M.length;C<F;++C){const V=M[C],O=V.start,I=V.count;for(let B=O,J=O+I;B<J;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,a=new k,s=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){s.isInterleavedBufferAttribute?p=l[d]*s.data.stride+s.offset:p=l[d]*u;for(let x=0;x<u;x++)f[g++]=c[p++]}return new ui(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fh=new yt,Kr=new Vc,wl=new Ea,Gs=new k,Vs=new k,Hs=new k,Tl=new k,Ga=new k,Va=new Ne,Ha=new Ne,Wa=new Ne,El=new k,Xa=new k;class Dn extends Nt{constructor(e=new ei,t=new Xf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],h=r[l];u!==0&&(Tl.fromBufferAttribute(h,e),a?Ga.addScaledVector(Tl,u):Ga.addScaledVector(Tl.sub(t),u))}t.add(Ga)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(r),e.ray.intersectsSphere(wl)===!1)||(fh.copy(r).invert(),Kr.copy(e.ray).applyMatrix4(fh),n.boundingBox!==null&&Kr.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],x=Math.max(d.start,f.start),b=Math.min(s.count,Math.min(d.start+d.count,f.start+f.count));for(let v=x,M=b;v<M;v+=3){const y=s.getX(v),w=s.getX(v+1),E=s.getX(v+2);a=qa(this,m,e,Kr,c,u,y,w,E),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const p=Math.max(0,f.start),g=Math.min(s.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const x=s.getX(d),b=s.getX(d+1),v=s.getX(d+2);a=qa(this,i,e,Kr,c,u,x,b,v),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],x=Math.max(d.start,f.start),b=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let v=x,M=b;v<M;v+=3){const y=v,w=v+1,E=v+2;a=qa(this,m,e,Kr,c,u,y,w,E),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const x=d,b=d+1,v=d+2;a=qa(this,i,e,Kr,c,u,x,b,v),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function $m(o,e,t,n,i,r,a,s){let l;if(e.side===Wn?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===Qi,s),l===null)return null;Xa.copy(s),Xa.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:o}}function qa(o,e,t,n,i,r,a,s,l){o.getVertexPosition(a,Gs),o.getVertexPosition(s,Vs),o.getVertexPosition(l,Hs);const c=$m(o,e,t,n,Gs,Vs,Hs,El);if(c){i&&(Va.fromBufferAttribute(i,a),Ha.fromBufferAttribute(i,s),Wa.fromBufferAttribute(i,l),c.uv=wi.getUV(El,Gs,Vs,Hs,Va,Ha,Wa,new Ne)),r&&(Va.fromBufferAttribute(r,a),Ha.fromBufferAttribute(r,s),Wa.fromBufferAttribute(r,l),c.uv2=wi.getUV(El,Gs,Vs,Hs,Va,Ha,Wa,new Ne));const u={a,b:s,c:l,normal:new k,materialIndex:0};wi.getNormal(Gs,Vs,Hs,u.normal),c.face=u}return c}class Ca extends ei{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(h,2));function g(d,m,x,b,v,M,y,w,E,_,S){const C=M/E,F=y/_,V=M/2,O=y/2,I=w/2,B=E+1,J=_+1;let H=0,G=0;const Q=new k;for(let L=0;L<J;L++){const W=L*F-O;for(let Y=0;Y<B;Y++){const re=Y*C-V;Q[d]=re*b,Q[m]=W*v,Q[x]=I,c.push(Q.x,Q.y,Q.z),Q[d]=0,Q[m]=0,Q[x]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Y/E),h.push(1-L/_),H+=1}}for(let L=0;L<_;L++)for(let W=0;W<E;W++){const Y=f+W+B*L,re=f+W+B*(L+1),ee=f+(W+1)+B*(L+1),se=f+(W+1)+B*L;l.push(Y,re,se),l.push(re,ee,se),G+=6}s.addGroup(p,G,S),p+=G,f+=H}}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(o){const e={};for(let t=0;t<o.length;t++){const n=Ts(o[t]);for(const i in n)e[i]=n[i]}return e}function Zm(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function jf(o){return o.getRenderTarget()===null&&o.outputEncoding===ot?ii:pa}const Km={clone:Ts,merge:tn};var Jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jm,this.fragmentShader=Qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $f extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jt extends $f{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oc*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(al*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jr=-90,Qr=1;class eg extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new jt(Jr,Qr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new jt(Jr,Qr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new jt(Jr,Qr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new jt(Jr,Qr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new jt(Jr,Qr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new jt(Jr,Qr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Pi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Zf extends Zt{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tg extends Dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ca(5,5,5),r=new Ir({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:ji});r.uniforms.tEquirect.value=t;const a=new Dn(i,r),s=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Gt),new eg(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Al=new k,ng=new k,ig=new Pn;class ur{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Al.subVectors(n,t).cross(ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ig.getNormalMatrix(e),i=this.coplanarPoint(Al).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Ea,Ya=new k;class Hc{constructor(e=new ur,t=new ur,n=new ur,i=new ur,r=new ur,a=new ur){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],x=n[13],b=n[14],v=n[15];return t[0].setComponents(s-i,h-l,d-f,v-m).normalize(),t[1].setComponents(s+i,h+l,d+f,v+m).normalize(),t[2].setComponents(s+r,h+c,d+p,v+x).normalize(),t[3].setComponents(s-r,h-c,d-p,v-x).normalize(),t[4].setComponents(s-a,h-u,d-g,v-b).normalize(),t[5].setComponents(s+a,h+u,d+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ya.x=i.normal.x>0?e.max.x:e.min.x,Ya.y=i.normal.y>0?e.max.y:e.min.y,Ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kf(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function rg(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=o.createBuffer();o.bindBuffer(u,p),o.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;o.bindBuffer(h,c),p.count===-1?o.bufferSubData(h,0,f):(t?o.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):o.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class Wc extends ei{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=e/s,f=t/l,p=[],g=[],d=[],m=[];for(let x=0;x<u;x++){const b=x*f-a;for(let v=0;v<c;v++){const M=v*h-r;g.push(M,-b,0),d.push(0,0,1),m.push(v/s),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let b=0;b<s;b++){const v=b+c*x,M=b+c*(x+1),y=b+1+c*(x+1),w=b+1+c*x;p.push(v,M,w),p.push(M,y,w)}this.setIndex(p),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(d,3)),this.setAttribute("uv",new an(m,2))}static fromJSON(e){return new Wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg="vec3 transformed = vec3( position );",fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,pg=`#ifdef USE_IRIDESCENCE
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
#endif`,mg=`#ifdef USE_BUMPMAP
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wg=`#define PI 3.141592653589793
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
}`,Tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vg=`#ifdef USE_GRADIENTMAP
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
}`,Hg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yg=`uniform bool receiveShadow;
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
#endif`,jg=`#if defined( USE_ENVMAP )
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
#endif`,$g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qg=`PhysicalMaterial material;
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
#endif`,e_=`struct PhysicalMaterial {
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
}`,t_=`
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
#endif`,n_=`#if defined( RE_IndirectDiffuse )
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,r_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,o_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,l_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m_=`#ifdef USE_MORPHNORMALS
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
#endif`,g_=`#ifdef USE_MORPHTARGETS
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
#endif`,__=`#ifdef USE_MORPHTARGETS
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
#endif`,x_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,v_=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S_=`#ifdef USE_NORMALMAP
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
#endif`,w_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,E_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,A_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,U_=`float getShadowMask() {
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
}`,B_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,V_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H_=`#ifdef USE_SKINNING
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
#endif`,W_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j_=`#ifdef USE_TRANSMISSION
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
#endif`,$_=`#ifdef USE_TRANSMISSION
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
#endif`,Z_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,K_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,J_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Q_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,e0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,t0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,c0=`#include <common>
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
}`,u0=`#if DEPTH_PACKING == 3200
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
}`,h0=`#define DISTANCE
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
}`,f0=`#define DISTANCE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,m0=`uniform float scale;
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,x0=`uniform vec3 diffuse;
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
}`,v0=`#define LAMBERT
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
}`,y0=`#define LAMBERT
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
}`,M0=`#define MATCAP
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
}`,b0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,w0=`#define NORMAL
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
}`,T0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,A0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
}`,L0=`#define TOON
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
}`,P0=`#define TOON
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
}`,D0=`uniform float size;
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
}`,R0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,F0=`uniform vec3 color;
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
}`,O0=`uniform float rotation;
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
}`,N0=`uniform vec3 diffuse;
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
}`,He={alphamap_fragment:sg,alphamap_pars_fragment:ag,alphatest_fragment:og,alphatest_pars_fragment:lg,aomap_fragment:cg,aomap_pars_fragment:ug,begin_vertex:hg,beginnormal_vertex:fg,bsdfs:dg,iridescence_fragment:pg,bumpmap_pars_fragment:mg,clipping_planes_fragment:gg,clipping_planes_pars_fragment:_g,clipping_planes_pars_vertex:xg,clipping_planes_vertex:vg,color_fragment:yg,color_pars_fragment:Mg,color_pars_vertex:bg,color_vertex:Sg,common:wg,cube_uv_reflection_fragment:Tg,defaultnormal_vertex:Eg,displacementmap_pars_vertex:Ag,displacementmap_vertex:Cg,emissivemap_fragment:Lg,emissivemap_pars_fragment:Pg,encodings_fragment:Dg,encodings_pars_fragment:Rg,envmap_fragment:Ig,envmap_common_pars_fragment:Fg,envmap_pars_fragment:Og,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:jg,envmap_vertex:zg,fog_vertex:kg,fog_pars_vertex:Ug,fog_fragment:Bg,fog_pars_fragment:Gg,gradientmap_pars_fragment:Vg,lightmap_fragment:Hg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:qg,lights_pars_begin:Yg,lights_toon_fragment:$g,lights_toon_pars_fragment:Zg,lights_phong_fragment:Kg,lights_phong_pars_fragment:Jg,lights_physical_fragment:Qg,lights_physical_pars_fragment:e_,lights_fragment_begin:t_,lights_fragment_maps:n_,lights_fragment_end:i_,logdepthbuf_fragment:r_,logdepthbuf_pars_fragment:s_,logdepthbuf_pars_vertex:a_,logdepthbuf_vertex:o_,map_fragment:l_,map_pars_fragment:c_,map_particle_fragment:u_,map_particle_pars_fragment:h_,metalnessmap_fragment:f_,metalnessmap_pars_fragment:d_,morphcolor_vertex:p_,morphnormal_vertex:m_,morphtarget_pars_vertex:g_,morphtarget_vertex:__,normal_fragment_begin:x_,normal_fragment_maps:v_,normal_pars_fragment:y_,normal_pars_vertex:M_,normal_vertex:b_,normalmap_pars_fragment:S_,clearcoat_normal_fragment_begin:w_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:E_,iridescence_pars_fragment:A_,output_fragment:C_,packing:L_,premultiplied_alpha_fragment:P_,project_vertex:D_,dithering_fragment:R_,dithering_pars_fragment:I_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:O_,shadowmap_pars_fragment:N_,shadowmap_pars_vertex:z_,shadowmap_vertex:k_,shadowmask_pars_fragment:U_,skinbase_vertex:B_,skinning_pars_vertex:G_,skinning_vertex:V_,skinnormal_vertex:H_,specularmap_fragment:W_,specularmap_pars_fragment:X_,tonemapping_fragment:q_,tonemapping_pars_fragment:Y_,transmission_fragment:j_,transmission_pars_fragment:$_,uv_pars_fragment:Z_,uv_pars_vertex:K_,uv_vertex:J_,uv2_pars_fragment:Q_,uv2_pars_vertex:e0,uv2_vertex:t0,worldpos_vertex:n0,background_vert:i0,background_frag:r0,backgroundCube_vert:s0,backgroundCube_frag:a0,cube_vert:o0,cube_frag:l0,depth_vert:c0,depth_frag:u0,distanceRGBA_vert:h0,distanceRGBA_frag:f0,equirect_vert:d0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:_0,meshbasic_frag:x0,meshlambert_vert:v0,meshlambert_frag:y0,meshmatcap_vert:M0,meshmatcap_frag:b0,meshnormal_vert:S0,meshnormal_frag:w0,meshphong_vert:T0,meshphong_frag:E0,meshphysical_vert:A0,meshphysical_frag:C0,meshtoon_vert:L0,meshtoon_frag:P0,points_vert:D0,points_frag:R0,shadow_vert:I0,shadow_frag:F0,sprite_vert:O0,sprite_frag:N0},fe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pn},uv2Transform:{value:new Pn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pn}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pn}}},si={basic:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:tn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:tn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:tn([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:tn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:tn([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:tn([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Pn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:tn([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:tn([fe.lights,fe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};si.physical={uniforms:tn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ja={r:0,b:0,g:0};function z0(o,e,t,n,i,r,a){const s=new je(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(m,x){let b=!1,v=x.isScene===!0?x.background:null;v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v));const M=o.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?d(s,l):v&&v.isColor&&(d(v,1),b=!0),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ho)?(u===void 0&&(u=new Dn(new Ca(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:Ts(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=v.encoding!==ot,(h!==v||f!==v.version||p!==o.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Dn(new Wc(2,2),new Ir({name:"BackgroundMaterial",uniforms:Ts(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=v.encoding!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==o.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,x){m.getRGB(ja,jf(o)),n.buffers.color.setClear(ja.r,ja.g,ja.b,x,a)}return{getClearColor:function(){return s},setClearColor:function(m,x=1){s.set(m),l=x,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(s,l)},render:g}}function k0(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=m(null);let c=l,u=!1;function h(I,B,J,H,G){let Q=!1;if(a){const L=d(H,J,B);c!==L&&(c=L,p(c.object)),Q=x(I,H,J,G),Q&&b(I,H,J,G)}else{const L=B.wireframe===!0;(c.geometry!==H.id||c.program!==J.id||c.wireframe!==L)&&(c.geometry=H.id,c.program=J.id,c.wireframe=L,Q=!0)}G!==null&&t.update(G,34963),(Q||u)&&(u=!1,_(I,B,J,H),G!==null&&o.bindBuffer(34963,t.get(G).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?o.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?o.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function d(I,B,J){const H=J.wireframe===!0;let G=s[I.id];G===void 0&&(G={},s[I.id]=G);let Q=G[B.id];Q===void 0&&(Q={},G[B.id]=Q);let L=Q[H];return L===void 0&&(L=m(f()),Q[H]=L),L}function m(I){const B=[],J=[],H=[];for(let G=0;G<i;G++)B[G]=0,J[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:H,object:I,attributes:{},index:null}}function x(I,B,J,H){const G=c.attributes,Q=B.attributes;let L=0;const W=J.getAttributes();for(const Y in W)if(W[Y].location>=0){const ee=G[Y];let se=Q[Y];if(se===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),ee===void 0||ee.attribute!==se||se&&ee.data!==se.data)return!0;L++}return c.attributesNum!==L||c.index!==H}function b(I,B,J,H){const G={},Q=B.attributes;let L=0;const W=J.getAttributes();for(const Y in W)if(W[Y].location>=0){let ee=Q[Y];ee===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const se={};se.attribute=ee,ee&&ee.data&&(se.data=ee.data),G[Y]=se,L++}c.attributes=G,c.attributesNum=L,c.index=H}function v(){const I=c.newAttributes;for(let B=0,J=I.length;B<J;B++)I[B]=0}function M(I){y(I,0)}function y(I,B){const J=c.newAttributes,H=c.enabledAttributes,G=c.attributeDivisors;J[I]=1,H[I]===0&&(o.enableVertexAttribArray(I),H[I]=1),G[I]!==B&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),G[I]=B)}function w(){const I=c.newAttributes,B=c.enabledAttributes;for(let J=0,H=B.length;J<H;J++)B[J]!==I[J]&&(o.disableVertexAttribArray(J),B[J]=0)}function E(I,B,J,H,G,Q){n.isWebGL2===!0&&(J===5124||J===5125)?o.vertexAttribIPointer(I,B,J,G,Q):o.vertexAttribPointer(I,B,J,H,G,Q)}function _(I,B,J,H){if(n.isWebGL2===!1&&(I.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=H.attributes,Q=J.getAttributes(),L=B.defaultAttributeValues;for(const W in Q){const Y=Q[W];if(Y.location>=0){let re=G[W];if(re===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),re!==void 0){const ee=re.normalized,se=re.itemSize,j=t.get(re);if(j===void 0)continue;const Ee=j.buffer,de=j.type,Me=j.bytesPerElement;if(re.isInterleavedBufferAttribute){const ge=re.data,Ie=ge.stride,Ce=re.offset;if(ge.isInstancedInterleavedBuffer){for(let oe=0;oe<Y.locationSize;oe++)y(Y.location+oe,ge.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let oe=0;oe<Y.locationSize;oe++)M(Y.location+oe);o.bindBuffer(34962,Ee);for(let oe=0;oe<Y.locationSize;oe++)E(Y.location+oe,se/Y.locationSize,de,ee,Ie*Me,(Ce+se/Y.locationSize*oe)*Me)}else{if(re.isInstancedBufferAttribute){for(let ge=0;ge<Y.locationSize;ge++)y(Y.location+ge,re.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ge=0;ge<Y.locationSize;ge++)M(Y.location+ge);o.bindBuffer(34962,Ee);for(let ge=0;ge<Y.locationSize;ge++)E(Y.location+ge,se/Y.locationSize,de,ee,se*Me,se/Y.locationSize*ge*Me)}}else if(L!==void 0){const ee=L[W];if(ee!==void 0)switch(ee.length){case 2:o.vertexAttrib2fv(Y.location,ee);break;case 3:o.vertexAttrib3fv(Y.location,ee);break;case 4:o.vertexAttrib4fv(Y.location,ee);break;default:o.vertexAttrib1fv(Y.location,ee)}}}}w()}function S(){V();for(const I in s){const B=s[I];for(const J in B){const H=B[J];for(const G in H)g(H[G].object),delete H[G];delete B[J]}delete s[I]}}function C(I){if(s[I.id]===void 0)return;const B=s[I.id];for(const J in B){const H=B[J];for(const G in H)g(H[G].object),delete H[G];delete B[J]}delete s[I.id]}function F(I){for(const B in s){const J=s[B];if(J[I.id]===void 0)continue;const H=J[I.id];for(const G in H)g(H[G].object),delete H[G];delete J[I.id]}}function V(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:M,disableUnusedAttributes:w}}function U0(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=o,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=l}function B0(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),p=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),m=o.getParameter(36347),x=o.getParameter(36348),b=o.getParameter(36349),v=f>0,M=a||e.has("OES_texture_float"),y=v&&M,w=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:w}}function G0(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ur,s=new Pn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,x=o.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,v=b*4;let M=x.clippingState||null;l.value=M,M=u(g,f,v,p);for(let y=0;y!==v;++y)M[y]=t[y];x.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const x=p+d*4,b=f.matrixWorldInverse;s.getNormalMatrix(b),(m===null||m.length<x)&&(m=new Float32Array(x));for(let v=0,M=p;v!==d;++v,M+=4)a.copy(h[v]).applyMatrix4(b,s),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function V0(o){let e=new WeakMap;function t(a,s){return s===ic?a.mapping=ys:s===rc&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===ic||s===rc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tg(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class H0 extends $f{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ls=4,dh=[.125,.215,.35,.446,.526,.582],gr=20,Cl=new H0,ph=new je;let Ll=null;const hr=(1+Math.sqrt(5))/2,ts=1/hr,mh=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,hr,ts),new k(0,hr,-ts),new k(ts,0,hr),new k(-ts,0,hr),new k(hr,ts,0),new k(-hr,ts,0)];class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ll=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Ai,format:Jn,encoding:er,depthBuffer:!1},i=gh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W0(r)),this._blurMaterial=X0(r,e,t)}return i}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,Cl)}_sceneToCubeUV(e,t,n,i){const s=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ph),u.toneMapping=Pi,u.autoClear=!1;const p=new Xf({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),g=new Dn(new Ca,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(ph),d=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(s.up.set(0,l[x],0),s.lookAt(c[x],0,0)):b===1?(s.up.set(0,0,l[x]),s.lookAt(0,c[x],0)):(s.up.set(0,l[x],0),s.lookAt(0,0,c[x]));const v=this._cubeSize;$a(i,b*v,x>2?v:0,v,v),u.setRenderTarget(i),d&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ys||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Dn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;$a(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Cl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=mh[(i-1)%mh.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Dn(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gr-1),d=r/g,m=isFinite(r)?1+Math.floor(u*d):gr;m>gr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);const x=[];let b=0;for(let E=0;E<gr;++E){const _=E/d,S=Math.exp(-_*_/2);x.push(S),E===0?b+=S:E<m&&(b+=2*S)}for(let E=0;E<x.length;E++)x[E]=x[E]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=x,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const M=this._sizeLods[i],y=3*M*(i>v-ls?i-v+ls:0),w=4*(this._cubeSize-M);$a(t,y,w,3*M,2*M),l.setRenderTarget(t),l.render(h,Cl)}}function W0(o){const e=[],t=[],n=[];let i=o;const r=o-ls+1+dh.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-ls?l=dh[a-o+ls-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,x=1,b=new Float32Array(d*g*p),v=new Float32Array(m*g*p),M=new Float32Array(x*g*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,_=w>2?0:-1,S=[E,_,0,E+2/3,_,0,E+2/3,_+1,0,E,_,0,E+2/3,_+1,0,E,_+1,0];b.set(S,d*g*w),v.set(f,m*g*w);const C=[w,w,w,w,w,w];M.set(C,x*g*w)}const y=new ei;y.setAttribute("position",new ui(b,d)),y.setAttribute("uv",new ui(v,m)),y.setAttribute("faceIndex",new ui(M,x)),e.push(y),i>ls&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gh(o,e,t){const n=new Dr(o,e,t);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function X0(o,e,t){const n=new Float32Array(gr),i=new k(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function _h(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function xh(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function q0(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===ic||l===rc,u=l===ys||l===Ms;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new cc(o)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new cc(o));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Y0(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function j0(o,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,x=d.length;m<x;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const b=p.array;d=p.version;for(let v=0,M=b.length;v<M;v+=3){const y=b[v+0],w=b[v+1],E=b[v+2];f.push(y,w,w,E,E,y)}}else{const b=g.array;d=g.version;for(let v=0,M=b.length/3-1;v<M;v+=3){const y=v+0,w=v+1,E=v+2;f.push(y,w,w,E,E,y)}}const m=new(Uf(f)?Yf:qf)(f,1);m.version=d;const x=r.get(h);x&&e.remove(x),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function $0(o,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,p){o.drawElements(r,p,s,f*l),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let d,m;if(i)d=o,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,p,s,f*l,g),t.update(p,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Z0(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function K0(o,e){return o[0]-e[0]}function J0(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Q0(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new dt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0;let x=r.get(u);if(x===void 0||x.count!==m){let J=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",J)};var g=J;x!==void 0&&x.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),y===!0&&(C=2),w===!0&&(C=3);let F=u.attributes.position.count*C,V=1;F>e.maxTextureSize&&(V=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*V*4*m),I=new Hf(O,F,V,m);I.type=oi,I.needsUpdate=!0;const B=C*4;for(let H=0;H<m;H++){const G=E[H],Q=_[H],L=S[H],W=F*V*4*H;for(let Y=0;Y<G.count;Y++){const re=Y*B;M===!0&&(a.fromBufferAttribute(G,Y),O[W+re+0]=a.x,O[W+re+1]=a.y,O[W+re+2]=a.z,O[W+re+3]=0),y===!0&&(a.fromBufferAttribute(Q,Y),O[W+re+4]=a.x,O[W+re+5]=a.y,O[W+re+6]=a.z,O[W+re+7]=0),w===!0&&(a.fromBufferAttribute(L,Y),O[W+re+8]=a.x,O[W+re+9]=a.y,O[W+re+10]=a.z,O[W+re+11]=L.itemSize===4?a.w:1)}}x={count:m,texture:I,size:new Ne(F,V)},r.set(u,x),u.addEventListener("dispose",J)}let b=0;for(let M=0;M<p.length;M++)b+=p[M];const v=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(o,"morphTargetBaseInfluence",v),f.getUniforms().setValue(o,"morphTargetInfluences",p),f.getUniforms().setValue(o,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const d=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let y=0;y<d;y++)m[y]=[y,0];n[u.id]=m}for(let y=0;y<d;y++){const w=m[y];w[0]=y,w[1]=p[y]}m.sort(J0);for(let y=0;y<8;y++)y<d&&m[y][1]?(s[y][0]=m[y][0],s[y][1]=m[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(K0);const x=u.morphAttributes.position,b=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=s[y],E=w[0],_=w[1];E!==Number.MAX_SAFE_INTEGER&&_?(x&&u.getAttribute("morphTarget"+y)!==x[E]&&u.setAttribute("morphTarget"+y,x[E]),b&&u.getAttribute("morphNormal"+y)!==b[E]&&u.setAttribute("morphNormal"+y,b[E]),i[y]=_,v+=_):(x&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),b&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const M=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(o,"morphTargetBaseInfluence",M),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function ex(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Jf=new Zt,Qf=new Hf,ed=new Um,td=new Zf,vh=[],yh=[],Mh=new Float32Array(16),bh=new Float32Array(9),Sh=new Float32Array(4);function Fs(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=vh[i];if(r===void 0&&(r=new Float32Array(i),vh[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function Pt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Dt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Wo(o,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function tx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function nx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;o.uniform2fv(this.addr,e),Dt(t,e)}}function ix(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;o.uniform3fv(this.addr,e),Dt(t,e)}}function rx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;o.uniform4fv(this.addr,e),Dt(t,e)}}function sx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Sh.set(n),o.uniformMatrix2fv(this.addr,!1,Sh),Dt(t,n)}}function ax(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;bh.set(n),o.uniformMatrix3fv(this.addr,!1,bh),Dt(t,n)}}function ox(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Mh.set(n),o.uniformMatrix4fv(this.addr,!1,Mh),Dt(t,n)}}function lx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function cx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;o.uniform2iv(this.addr,e),Dt(t,e)}}function ux(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;o.uniform3iv(this.addr,e),Dt(t,e)}}function hx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;o.uniform4iv(this.addr,e),Dt(t,e)}}function fx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function dx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;o.uniform2uiv(this.addr,e),Dt(t,e)}}function px(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;o.uniform3uiv(this.addr,e),Dt(t,e)}}function mx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;o.uniform4uiv(this.addr,e),Dt(t,e)}}function gx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Jf,i)}function _x(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ed,i)}function xx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||td,i)}function vx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qf,i)}function yx(o){switch(o){case 5126:return tx;case 35664:return nx;case 35665:return ix;case 35666:return rx;case 35674:return sx;case 35675:return ax;case 35676:return ox;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return ux;case 35669:case 35673:return hx;case 5125:return fx;case 36294:return dx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return vx}}function Mx(o,e){o.uniform1fv(this.addr,e)}function bx(o,e){const t=Fs(e,this.size,2);o.uniform2fv(this.addr,t)}function Sx(o,e){const t=Fs(e,this.size,3);o.uniform3fv(this.addr,t)}function wx(o,e){const t=Fs(e,this.size,4);o.uniform4fv(this.addr,t)}function Tx(o,e){const t=Fs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Ex(o,e){const t=Fs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Ax(o,e){const t=Fs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Cx(o,e){o.uniform1iv(this.addr,e)}function Lx(o,e){o.uniform2iv(this.addr,e)}function Px(o,e){o.uniform3iv(this.addr,e)}function Dx(o,e){o.uniform4iv(this.addr,e)}function Rx(o,e){o.uniform1uiv(this.addr,e)}function Ix(o,e){o.uniform2uiv(this.addr,e)}function Fx(o,e){o.uniform3uiv(this.addr,e)}function Ox(o,e){o.uniform4uiv(this.addr,e)}function Nx(o,e,t){const n=this.cache,i=e.length,r=Wo(t,i);Pt(n,r)||(o.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Jf,r[a])}function zx(o,e,t){const n=this.cache,i=e.length,r=Wo(t,i);Pt(n,r)||(o.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ed,r[a])}function kx(o,e,t){const n=this.cache,i=e.length,r=Wo(t,i);Pt(n,r)||(o.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||td,r[a])}function Ux(o,e,t){const n=this.cache,i=e.length,r=Wo(t,i);Pt(n,r)||(o.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Qf,r[a])}function Bx(o){switch(o){case 5126:return Mx;case 35664:return bx;case 35665:return Sx;case 35666:return wx;case 35674:return Tx;case 35675:return Ex;case 35676:return Ax;case 5124:case 35670:return Cx;case 35667:case 35671:return Lx;case 35668:case 35672:return Px;case 35669:case 35673:return Dx;case 5125:return Rx;case 36294:return Ix;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Ux}}class Gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=yx(t.type)}}class Vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Bx(t.type)}}class Hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const Pl=/(\w+)(\])?(\[|\.)?/g;function wh(o,e){o.seq.push(e),o.map[e.id]=e}function Wx(o,e,t){const n=o.name,i=n.length;for(Pl.lastIndex=0;;){const r=Pl.exec(n),a=Pl.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){wh(t,c===void 0?new Gx(s,o,e):new Vx(s,o,e));break}else{let h=t.map[s];h===void 0&&(h=new Hx(s),wh(t,h)),t=h}}}class go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Wx(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Th(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Xx=0;function qx(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function Yx(o){switch(o){case er:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Eh(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+qx(o.getShaderSource(e),a)}else return i}function jx(o,e){const t=Yx(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $x(o,e){let t;switch(e){case dm:t="Linear";break;case pm:t="Reinhard";break;case mm:t="OptimizedCineon";break;case Vo:t="ACESFilmic";break;case gm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zx(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($s).join(`
`)}function Kx(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jx(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function $s(o){return o!==""}function Ah(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(o){return o.replace(Qx,ev)}function ev(o,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return uc(t)}const tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(o){return o.replace(tv,nv)}function nv(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ph(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iv(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ff?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Xp?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===js&&(e="SHADOWMAP_TYPE_VSM"),e}function rv(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ys:case Ms:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sv(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function av(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Bc:e="ENVMAP_BLENDING_MULTIPLY";break;case hm:e="ENVMAP_BLENDING_MIX";break;case fm:e="ENVMAP_BLENDING_ADD";break}return e}function ov(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lv(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=iv(t),c=rv(t),u=sv(t),h=av(t),f=ov(t),p=t.isWebGL2?"":Zx(t),g=Kx(r),d=i.createProgram();let m,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter($s).join(`
`),m.length>0&&(m+=`
`),x=[p,g].filter($s).join(`
`),x.length>0&&(x+=`
`)):(m=[Ph(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),x=[p,Ph(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?He.tonemapping_pars_fragment:"",t.toneMapping!==Pi?$x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,jx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),a=uc(a),a=Ah(a,t),a=Ch(a,t),s=uc(s),s=Ah(s,t),s=Ch(s,t),a=Lh(a),s=Lh(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const v=b+m+a,M=b+x+s,y=Th(i,35633,v),w=Th(i,35632,M);if(i.attachShader(d,y),i.attachShader(d,w),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const S=i.getProgramInfoLog(d).trim(),C=i.getShaderInfoLog(y).trim(),F=i.getShaderInfoLog(w).trim();let V=!0,O=!0;if(i.getProgramParameter(d,35714)===!1){V=!1;const I=Eh(i,y,"vertex"),B=Eh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+S+`
`+I+`
`+B)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(C===""||F==="")&&(O=!1);O&&(this.diagnostics={runnable:V,programLog:S,vertexShader:{log:C,prefix:m},fragmentShader:{log:F,prefix:x}})}i.deleteShader(y),i.deleteShader(w);let E;this.getUniforms=function(){return E===void 0&&(E=new go(i,d)),E};let _;return this.getAttributes=function(){return _===void 0&&(_=Jx(i,d)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Xx++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=w,this}let cv=0;class uv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hv(e),t.set(e,n)),n}}class hv{constructor(e){this.id=cv++,this.code=e,this.usedTimes=0}}function fv(o,e,t,n,i,r,a){const s=new Wf,l=new uv,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_,S,C,F,V){const O=F.fog,I=V.geometry,B=_.isMeshStandardMaterial?F.environment:null,J=(_.isMeshStandardMaterial?t:e).get(_.envMap||B),H=J&&J.mapping===Ho?J.image.height:null,G=g[_.type];_.precision!==null&&(p=i.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,L=Q!==void 0?Q.length:0;let W=0;I.morphAttributes.position!==void 0&&(W=1),I.morphAttributes.normal!==void 0&&(W=2),I.morphAttributes.color!==void 0&&(W=3);let Y,re,ee,se;if(G){const Ie=si[G];Y=Ie.vertexShader,re=Ie.fragmentShader}else Y=_.vertexShader,re=_.fragmentShader,l.update(_),ee=l.getVertexShaderID(_),se=l.getFragmentShaderID(_);const j=o.getRenderTarget(),Ee=_.alphaTest>0,de=_.clearcoat>0,Me=_.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:_.type,vertexShader:Y,fragmentShader:re,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:f,outputEncoding:j===null?o.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:er,map:!!_.map,matcap:!!_.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:H,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Om,tangentSpaceNormalMap:_.normalMapType===Gc,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===ot,clearcoat:de,clearcoatMap:de&&!!_.clearcoatMap,clearcoatRoughnessMap:de&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!_.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!_.iridescenceMap,iridescenceThicknessMap:Me&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===ds,alphaMap:!!_.alphaMap,alphaTest:Ee,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!I.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!O,useFog:_.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:W,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:o.shadowMap.enabled&&C.length>0,shadowMapType:o.shadowMap.type,toneMapping:_.toneMapped?o.toneMapping:Pi,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Uc,flipSided:_.side===Wn,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function m(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)S.push(C),S.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(x(S,_),b(S,_),S.push(o.outputEncoding)),S.push(_.customProgramCacheKey),S.join()}function x(_,S){_.push(S.precision),_.push(S.outputEncoding),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.combine),_.push(S.vertexUvs),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function b(_,S){s.disableAll(),S.isWebGL2&&s.enable(0),S.supportsVertexTextures&&s.enable(1),S.instancing&&s.enable(2),S.instancingColor&&s.enable(3),S.map&&s.enable(4),S.matcap&&s.enable(5),S.envMap&&s.enable(6),S.lightMap&&s.enable(7),S.aoMap&&s.enable(8),S.emissiveMap&&s.enable(9),S.bumpMap&&s.enable(10),S.normalMap&&s.enable(11),S.objectSpaceNormalMap&&s.enable(12),S.tangentSpaceNormalMap&&s.enable(13),S.clearcoat&&s.enable(14),S.clearcoatMap&&s.enable(15),S.clearcoatRoughnessMap&&s.enable(16),S.clearcoatNormalMap&&s.enable(17),S.iridescence&&s.enable(18),S.iridescenceMap&&s.enable(19),S.iridescenceThicknessMap&&s.enable(20),S.displacementMap&&s.enable(21),S.specularMap&&s.enable(22),S.roughnessMap&&s.enable(23),S.metalnessMap&&s.enable(24),S.gradientMap&&s.enable(25),S.alphaMap&&s.enable(26),S.alphaTest&&s.enable(27),S.vertexColors&&s.enable(28),S.vertexAlphas&&s.enable(29),S.vertexUvs&&s.enable(30),S.vertexTangents&&s.enable(31),S.uvsVertexOnly&&s.enable(32),_.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.physicallyCorrectLights&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.specularIntensityMap&&s.enable(15),S.specularColorMap&&s.enable(16),S.transmission&&s.enable(17),S.transmissionMap&&s.enable(18),S.thicknessMap&&s.enable(19),S.sheen&&s.enable(20),S.sheenColorMap&&s.enable(21),S.sheenRoughnessMap&&s.enable(22),S.decodeVideoTexture&&s.enable(23),S.opaque&&s.enable(24),_.push(s.mask)}function v(_){const S=g[_.type];let C;if(S){const F=si[S];C=Km.clone(F.uniforms)}else C=_.uniforms;return C}function M(_,S){let C;for(let F=0,V=c.length;F<V;F++){const O=c[F];if(O.cacheKey===S){C=O,++C.usedTimes;break}}return C===void 0&&(C=new lv(o,S,_,r),c.push(C)),C}function y(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),_.destroy()}}function w(_){l.remove(_)}function E(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:E}}function dv(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function pv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Dh(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Rh(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,p,g,d,m){let x=o[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},o[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=p,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=d,x.group=m),e++,x}function s(h,f,p,g,d,m){const x=a(h,f,p,g,d,m);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function l(h,f,p,g,d,m){const x=a(h,f,p,g,d,m);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function c(h,f){t.length>1&&t.sort(h||pv),n.length>1&&n.sort(f||Dh),i.length>1&&i.sort(f||Dh)}function u(){for(let h=e,f=o.length;h<f;h++){const p=o[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function mv(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new Rh,o.set(n,[a])):i>=r.length?(a=new Rh,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function gv(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new je};break;case"SpotLight":t={position:new k,direction:new k,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=t,t}}}function _v(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let xv=0;function vv(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function yv(o,e){const t=new gv,n=_v(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,a=new yt,s=new yt;function l(u,h){let f=0,p=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,m=0,x=0,b=0,v=0,M=0,y=0,w=0,E=0,_=0;u.sort(vv);const S=h!==!0?Math.PI:1;for(let F=0,V=u.length;F<V;F++){const O=u[F],I=O.color,B=O.intensity,J=O.distance,H=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=I.r*B*S,p+=I.g*B*S,g+=I.b*B*S;else if(O.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(O.sh.coefficients[G],B);else if(O.isDirectionalLight){const G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const Q=O.shadow,L=n.get(O);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[d]=L,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=O.shadow.matrix,M++}i.directional[d]=G,d++}else if(O.isSpotLight){const G=t.get(O);G.position.setFromMatrixPosition(O.matrixWorld),G.color.copy(I).multiplyScalar(B*S),G.distance=J,G.coneCos=Math.cos(O.angle),G.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),G.decay=O.decay,i.spot[x]=G;const Q=O.shadow;if(O.map&&(i.spotLightMap[E]=O.map,E++,Q.updateMatrices(O),O.castShadow&&_++),i.spotLightMatrix[x]=Q.matrix,O.castShadow){const L=n.get(O);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=H,w++}x++}else if(O.isRectAreaLight){const G=t.get(O);G.color.copy(I).multiplyScalar(B),G.halfWidth.set(O.width*.5,0,0),G.halfHeight.set(0,O.height*.5,0),i.rectArea[b]=G,b++}else if(O.isPointLight){const G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*S),G.distance=O.distance,G.decay=O.decay,O.castShadow){const Q=O.shadow,L=n.get(O);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=O.shadow.matrix,y++}i.point[m]=G,m++}else if(O.isHemisphereLight){const G=t.get(O);G.skyColor.copy(O.color).multiplyScalar(B*S),G.groundColor.copy(O.groundColor).multiplyScalar(B*S),i.hemi[v]=G,v++}}b>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const C=i.hash;(C.directionalLength!==d||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==b||C.hemiLength!==v||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==w||C.numSpotMaps!==E)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=b,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=w+E-_,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=_,C.directionalLength=d,C.pointLength=m,C.spotLength=x,C.rectAreaLength=b,C.hemiLength=v,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=w,C.numSpotMaps=E,i.version=xv++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const x=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const M=u[b];if(M.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),f++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),g++}else if(M.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),s.identity(),a.copy(M.matrixWorld),a.premultiply(x),s.extractRotation(a),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),d++}else if(M.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),p++}else if(M.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(x),m++}}}return{setup:l,setupView:c,state:i}}function Ih(o,e){const t=new yv(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function Mv(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new Ih(o,e),t.set(r,[l])):a>=s.length?(l=new Ih(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class bv extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sv extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
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
}`;function Ev(o,e,t){let n=new Hc;const i=new Ne,r=new Ne,a=new dt,s=new bv({depthPacking:Fm}),l=new Sv,c={},u=t.maxTextureSize,h={0:Wn,1:Qi,2:Uc},f=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:wv,fragmentShader:Tv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ei;g.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Dn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff,this.render=function(M,y,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const E=o.getRenderTarget(),_=o.getActiveCubeFace(),S=o.getActiveMipmapLevel(),C=o.state;C.setBlending(ji),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let F=0,V=M.length;F<V;F++){const O=M[F],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const B=I.getFrameExtents();if(i.multiply(B),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,I.mapSize.y=r.y)),I.map===null){const H=this.type!==js?{minFilter:Bt,magFilter:Bt}:{};I.map=new Dr(i.x,i.y,H),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const J=I.getViewportCount();for(let H=0;H<J;H++){const G=I.getViewport(H);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),C.viewport(a),I.updateMatrices(O,H),n=I.getFrustum(),v(y,w,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===js&&x(I,w),I.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(E,_,S)};function x(M,y){const w=e.update(d);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Dr(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(y,null,w,f,d,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(y,null,w,p,d,null)}function b(M,y,w,E,_,S){let C=null;const F=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(F!==void 0)C=F;else if(C=w.isPointLight===!0?l:s,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const V=C.uuid,O=y.uuid;let I=c[V];I===void 0&&(I={},c[V]=I);let B=I[O];B===void 0&&(B=C.clone(),I[O]=B),C=B}return C.visible=y.visible,C.wireframe=y.wireframe,S===js?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:h[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(w.matrixWorld),C.nearDistance=E,C.farDistance=_),C}function v(M,y,w,E,_){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===js)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const F=e.update(M),V=M.material;if(Array.isArray(V)){const O=F.groups;for(let I=0,B=O.length;I<B;I++){const J=O[I],H=V[J.materialIndex];if(H&&H.visible){const G=b(M,H,E,w.near,w.far,_);o.renderBufferDirect(w,null,F,G,M,J)}}}else if(V.visible){const O=b(M,V,E,w.near,w.far,_);o.renderBufferDirect(w,null,F,O,M,null)}}const C=M.children;for(let F=0,V=C.length;F<V;F++)v(C[F],y,w,E,_)}}function Av(o,e,t){const n=t.isWebGL2;function i(){let R=!1;const Z=new dt;let ie=null;const ue=new dt(0,0,0,0);return{setMask:function(ve){ie!==ve&&!R&&(o.colorMask(ve,ve,ve,ve),ie=ve)},setLocked:function(ve){R=ve},setClear:function(ve,Xe,ht,ut,Le){Le===!0&&(ve*=ut,Xe*=ut,ht*=ut),Z.set(ve,Xe,ht,ut),ue.equals(Z)===!1&&(o.clearColor(ve,Xe,ht,ut),ue.copy(Z))},reset:function(){R=!1,ie=null,ue.set(-1,0,0,0)}}}function r(){let R=!1,Z=null,ie=null,ue=null;return{setTest:function(ve){ve?Ee(2929):de(2929)},setMask:function(ve){Z!==ve&&!R&&(o.depthMask(ve),Z=ve)},setFunc:function(ve){if(ie!==ve){switch(ve){case rm:o.depthFunc(512);break;case sm:o.depthFunc(519);break;case am:o.depthFunc(513);break;case nc:o.depthFunc(515);break;case om:o.depthFunc(514);break;case lm:o.depthFunc(518);break;case cm:o.depthFunc(516);break;case um:o.depthFunc(517);break;default:o.depthFunc(515)}ie=ve}},setLocked:function(ve){R=ve},setClear:function(ve){ue!==ve&&(o.clearDepth(ve),ue=ve)},reset:function(){R=!1,Z=null,ie=null,ue=null}}}function a(){let R=!1,Z=null,ie=null,ue=null,ve=null,Xe=null,ht=null,ut=null,Le=null;return{setTest:function(pe){R||(pe?Ee(2960):de(2960))},setMask:function(pe){Z!==pe&&!R&&(o.stencilMask(pe),Z=pe)},setFunc:function(pe,Ue,nt){(ie!==pe||ue!==Ue||ve!==nt)&&(o.stencilFunc(pe,Ue,nt),ie=pe,ue=Ue,ve=nt)},setOp:function(pe,Ue,nt){(Xe!==pe||ht!==Ue||ut!==nt)&&(o.stencilOp(pe,Ue,nt),Xe=pe,ht=Ue,ut=nt)},setLocked:function(pe){R=pe},setClear:function(pe){Le!==pe&&(o.clearStencil(pe),Le=pe)},reset:function(){R=!1,Z=null,ie=null,ue=null,ve=null,Xe=null,ht=null,ut=null,Le=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,x=!1,b=null,v=null,M=null,y=null,w=null,E=null,_=null,S=!1,C=null,F=null,V=null,O=null,I=null;const B=o.getParameter(35661);let J=!1,H=0;const G=o.getParameter(7938);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=H>=2);let Q=null,L={};const W=o.getParameter(3088),Y=o.getParameter(2978),re=new dt().fromArray(W),ee=new dt().fromArray(Y);function se(R,Z,ie){const ue=new Uint8Array(4),ve=o.createTexture();o.bindTexture(R,ve),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let Xe=0;Xe<ie;Xe++)o.texImage2D(Z+Xe,0,6408,1,1,0,6408,5121,ue);return ve}const j={};j[3553]=se(3553,3553,1),j[34067]=se(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(2929),l.setFunc(nc),st(!1),X(Eu),Ee(2884),Be(ji);function Ee(R){f[R]!==!0&&(o.enable(R),f[R]=!0)}function de(R){f[R]!==!1&&(o.disable(R),f[R]=!1)}function Me(R,Z){return p[R]!==Z?(o.bindFramebuffer(R,Z),p[R]=Z,n&&(R===36009&&(p[36160]=Z),R===36160&&(p[36009]=Z)),!0):!1}function ge(R,Z){let ie=d,ue=!1;if(R)if(ie=g.get(Z),ie===void 0&&(ie=[],g.set(Z,ie)),R.isWebGLMultipleRenderTargets){const ve=R.texture;if(ie.length!==ve.length||ie[0]!==36064){for(let Xe=0,ht=ve.length;Xe<ht;Xe++)ie[Xe]=36064+Xe;ie.length=ve.length,ue=!0}}else ie[0]!==36064&&(ie[0]=36064,ue=!0);else ie[0]!==1029&&(ie[0]=1029,ue=!0);ue&&(t.isWebGL2?o.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Ie(R){return m!==R?(o.useProgram(R),m=R,!0):!1}const Ce={[ss]:32774,[Yp]:32778,[jp]:32779};if(n)Ce[Pu]=32775,Ce[Du]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ce[Pu]=R.MIN_EXT,Ce[Du]=R.MAX_EXT)}const oe={[$p]:0,[Zp]:1,[Kp]:768,[Of]:770,[im]:776,[tm]:774,[Qp]:772,[Jp]:769,[Nf]:771,[nm]:775,[em]:773};function Be(R,Z,ie,ue,ve,Xe,ht,ut){if(R===ji){x===!0&&(de(3042),x=!1);return}if(x===!1&&(Ee(3042),x=!0),R!==qp){if(R!==b||ut!==S){if((v!==ss||w!==ss)&&(o.blendEquation(32774),v=ss,w=ss),ut)switch(R){case ds:o.blendFuncSeparate(1,771,1,771);break;case Au:o.blendFunc(1,1);break;case Cu:o.blendFuncSeparate(0,769,0,1);break;case Lu:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ds:o.blendFuncSeparate(770,771,1,771);break;case Au:o.blendFunc(770,1);break;case Cu:o.blendFuncSeparate(0,769,0,1);break;case Lu:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}M=null,y=null,E=null,_=null,b=R,S=ut}return}ve=ve||Z,Xe=Xe||ie,ht=ht||ue,(Z!==v||ve!==w)&&(o.blendEquationSeparate(Ce[Z],Ce[ve]),v=Z,w=ve),(ie!==M||ue!==y||Xe!==E||ht!==_)&&(o.blendFuncSeparate(oe[ie],oe[ue],oe[Xe],oe[ht]),M=ie,y=ue,E=Xe,_=ht),b=R,S=!1}function rt(R,Z){R.side===Uc?de(2884):Ee(2884);let ie=R.side===Wn;Z&&(ie=!ie),st(ie),R.blending===ds&&R.transparent===!1?Be(ji):Be(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),s.setMask(R.colorWrite);const ue=R.stencilWrite;c.setTest(ue),ue&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ge(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ee(32926):de(32926)}function st(R){C!==R&&(R?o.frontFace(2304):o.frontFace(2305),C=R)}function X(R){R!==Hp?(Ee(2884),R!==F&&(R===Eu?o.cullFace(1029):R===Wp?o.cullFace(1028):o.cullFace(1032))):de(2884),F=R}function tt(R){R!==V&&(J&&o.lineWidth(R),V=R)}function Ge(R,Z,ie){R?(Ee(32823),(O!==Z||I!==ie)&&(o.polygonOffset(Z,ie),O=Z,I=ie)):de(32823)}function bt(R){R?Ee(3089):de(3089)}function Je(R){R===void 0&&(R=33984+B-1),Q!==R&&(o.activeTexture(R),Q=R)}function P(R,Z,ie){ie===void 0&&(Q===null?ie=33984+B-1:ie=Q);let ue=L[ie];ue===void 0&&(ue={type:void 0,texture:void 0},L[ie]=ue),(ue.type!==R||ue.texture!==Z)&&(Q!==ie&&(o.activeTexture(ie),Q=ie),o.bindTexture(R,Z||j[R]),ue.type=R,ue.texture=Z)}function T(){const R=L[Q];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function K(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{o.compressedTexImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function D(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function U(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(R){re.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),re.copy(R))}function be(R){ee.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),ee.copy(R))}function ze(R,Z){let ie=h.get(Z);ie===void 0&&(ie=new WeakMap,h.set(Z,ie));let ue=ie.get(R);ue===void 0&&(ue=o.getUniformBlockIndex(Z,R.name),ie.set(R,ue))}function ke(R,Z){const ue=h.get(Z).get(R);u.get(Z)!==ue&&(o.uniformBlockBinding(Z,ue,R.__bindingPointIndex),u.set(Z,ue))}function $e(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},Q=null,L={},p={},g=new WeakMap,d=[],m=null,x=!1,b=null,v=null,M=null,y=null,w=null,E=null,_=null,S=!1,C=null,F=null,V=null,O=null,I=null,re.set(0,0,o.canvas.width,o.canvas.height),ee.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ee,disable:de,bindFramebuffer:Me,drawBuffers:ge,useProgram:Ie,setBlending:Be,setMaterial:rt,setFlipSided:st,setCullFace:X,setLineWidth:tt,setPolygonOffset:Ge,setScissorTest:bt,activeTexture:Je,bindTexture:P,unbindTexture:T,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:le,texImage3D:he,updateUBOMapping:ze,uniformBlockBinding:ke,texStorage2D:U,texStorage3D:ce,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:Te,compressedTexSubImage3D:D,scissor:Se,viewport:be,reset:$e}}function Cv(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,T){return x?new OffscreenCanvas(P,T):ma("canvas")}function v(P,T,K,te){let ne=1;if((P.width>te||P.height>te)&&(ne=te/Math.max(P.width,P.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ae=T?lc:Math.floor,Te=ae(ne*P.width),D=ae(ne*P.height);d===void 0&&(d=b(Te,D));const U=K?b(Te,D):d;return U.width=Te,U.height=D,U.getContext("2d").drawImage(P,0,0,Te,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Te+"x"+D+")."),U}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function M(P){return nh(P.width)&&nh(P.height)}function y(P){return s?!1:P.wrapS!==An||P.wrapT!==An||P.minFilter!==Bt&&P.minFilter!==Gt}function w(P,T){return P.generateMipmaps&&T&&P.minFilter!==Bt&&P.minFilter!==Gt}function E(P){o.generateMipmap(P)}function _(P,T,K,te,ne=!1){if(s===!1)return T;if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae=T;return T===6403&&(K===5126&&(ae=33326),K===5131&&(ae=33325),K===5121&&(ae=33321)),T===33319&&(K===5126&&(ae=33328),K===5131&&(ae=33327),K===5121&&(ae=33323)),T===6408&&(K===5126&&(ae=34836),K===5131&&(ae=34842),K===5121&&(ae=te===ot&&ne===!1?35907:32856),K===32819&&(ae=32854),K===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function S(P,T,K){return w(P,K)===!0||P.isFramebufferTexture&&P.minFilter!==Bt&&P.minFilter!==Gt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function C(P){return P===Bt||P===Ru||P===el?9728:9729}function F(P){const T=P.target;T.removeEventListener("dispose",F),O(T),T.isVideoTexture&&g.delete(T)}function V(P){const T=P.target;T.removeEventListener("dispose",V),B(T)}function O(P){const T=n.get(P);if(T.__webglInit===void 0)return;const K=P.source,te=m.get(K);if(te){const ne=te[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(P),Object.keys(te).length===0&&m.delete(K)}n.remove(P)}function I(P){const T=n.get(P);o.deleteTexture(T.__webglTexture);const K=P.source,te=m.get(K);delete te[T.__cacheKey],a.memory.textures--}function B(P){const T=P.texture,K=n.get(P),te=n.get(T);if(te.__webglTexture!==void 0&&(o.deleteTexture(te.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)o.deleteFramebuffer(K.__webglFramebuffer[ne]),K.__webglDepthbuffer&&o.deleteRenderbuffer(K.__webglDepthbuffer[ne]);else{if(o.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&o.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&o.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ne=0;ne<K.__webglColorRenderbuffer.length;ne++)K.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(K.__webglColorRenderbuffer[ne]);K.__webglDepthRenderbuffer&&o.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ne=0,ae=T.length;ne<ae;ne++){const Te=n.get(T[ne]);Te.__webglTexture&&(o.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(T[ne])}n.remove(T),n.remove(P)}let J=0;function H(){J=0}function G(){const P=J;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),J+=1,P}function Q(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.encoding),T.join()}function L(P,T){const K=n.get(P);if(P.isVideoTexture&&bt(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(K,P,T);return}}t.bindTexture(3553,K.__webglTexture,33984+T)}function W(P,T){const K=n.get(P);if(P.version>0&&K.__version!==P.version){de(K,P,T);return}t.bindTexture(35866,K.__webglTexture,33984+T)}function Y(P,T){const K=n.get(P);if(P.version>0&&K.__version!==P.version){de(K,P,T);return}t.bindTexture(32879,K.__webglTexture,33984+T)}function re(P,T){const K=n.get(P);if(P.version>0&&K.__version!==P.version){Me(K,P,T);return}t.bindTexture(34067,K.__webglTexture,33984+T)}const ee={[bs]:10497,[An]:33071,[sc]:33648},se={[Bt]:9728,[Ru]:9984,[el]:9986,[Gt]:9729,[_m]:9985,[Ss]:9987};function j(P,T,K){if(K?(o.texParameteri(P,10242,ee[T.wrapS]),o.texParameteri(P,10243,ee[T.wrapT]),(P===32879||P===35866)&&o.texParameteri(P,32882,ee[T.wrapR]),o.texParameteri(P,10240,se[T.magFilter]),o.texParameteri(P,10241,se[T.minFilter])):(o.texParameteri(P,10242,33071),o.texParameteri(P,10243,33071),(P===32879||P===35866)&&o.texParameteri(P,32882,33071),(T.wrapS!==An||T.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(P,10240,C(T.magFilter)),o.texParameteri(P,10241,C(T.minFilter)),T.minFilter!==Bt&&T.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Bt||T.minFilter!==el&&T.minFilter!==Ss||T.type===oi&&e.has("OES_texture_float_linear")===!1||s===!1&&T.type===Ai&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(o.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Ee(P,T){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",F));const te=T.source;let ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));const ae=Q(T);if(ae!==P.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ne[ae].usedTimes++;const Te=ne[P.__cacheKey];Te!==void 0&&(ne[P.__cacheKey].usedTimes--,Te.usedTimes===0&&I(T)),P.__cacheKey=ae,P.__webglTexture=ne[ae].texture}return K}function de(P,T,K){let te=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=35866),T.isData3DTexture&&(te=32879);const ne=Ee(P,T),ae=T.source;t.bindTexture(te,P.__webglTexture,33984+K);const Te=n.get(ae);if(ae.version!==Te.__version||ne===!0){t.activeTexture(33984+K),o.pixelStorei(37440,T.flipY),o.pixelStorei(37441,T.premultiplyAlpha),o.pixelStorei(3317,T.unpackAlignment),o.pixelStorei(37443,0);const D=y(T)&&M(T.image)===!1;let U=v(T.image,D,!1,u);U=Je(T,U);const ce=M(U)||s,le=r.convert(T.format,T.encoding);let he=r.convert(T.type),Se=_(T.internalFormat,le,he,T.encoding,T.isVideoTexture);j(te,T,ce);let be;const ze=T.mipmaps,ke=s&&T.isVideoTexture!==!0,$e=Te.__version===void 0||ne===!0,R=S(T,U,ce);if(T.isDepthTexture)Se=6402,s?T.type===oi?Se=36012:T.type===_r?Se=33190:T.type===ps?Se=35056:Se=33189:T.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===yr&&Se===6402&&T.type!==kf&&T.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=_r,he=r.convert(T.type)),T.format===ws&&Se===6402&&(Se=34041,T.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ps,he=r.convert(T.type))),$e&&(ke?t.texStorage2D(3553,1,Se,U.width,U.height):t.texImage2D(3553,0,Se,U.width,U.height,0,le,he,null));else if(T.isDataTexture)if(ze.length>0&&ce){ke&&$e&&t.texStorage2D(3553,R,Se,ze[0].width,ze[0].height);for(let Z=0,ie=ze.length;Z<ie;Z++)be=ze[Z],ke?t.texSubImage2D(3553,Z,0,0,be.width,be.height,le,he,be.data):t.texImage2D(3553,Z,Se,be.width,be.height,0,le,he,be.data);T.generateMipmaps=!1}else ke?($e&&t.texStorage2D(3553,R,Se,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,le,he,U.data)):t.texImage2D(3553,0,Se,U.width,U.height,0,le,he,U.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ke&&$e&&t.texStorage3D(35866,R,Se,ze[0].width,ze[0].height,U.depth);for(let Z=0,ie=ze.length;Z<ie;Z++)be=ze[Z],T.format!==Jn?le!==null?ke?t.compressedTexSubImage3D(35866,Z,0,0,0,be.width,be.height,U.depth,le,be.data,0,0):t.compressedTexImage3D(35866,Z,Se,be.width,be.height,U.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(35866,Z,0,0,0,be.width,be.height,U.depth,le,he,be.data):t.texImage3D(35866,Z,Se,be.width,be.height,U.depth,0,le,he,be.data)}else{ke&&$e&&t.texStorage2D(3553,R,Se,ze[0].width,ze[0].height);for(let Z=0,ie=ze.length;Z<ie;Z++)be=ze[Z],T.format!==Jn?le!==null?ke?t.compressedTexSubImage2D(3553,Z,0,0,be.width,be.height,le,be.data):t.compressedTexImage2D(3553,Z,Se,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(3553,Z,0,0,be.width,be.height,le,he,be.data):t.texImage2D(3553,Z,Se,be.width,be.height,0,le,he,be.data)}else if(T.isDataArrayTexture)ke?($e&&t.texStorage3D(35866,R,Se,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,le,he,U.data)):t.texImage3D(35866,0,Se,U.width,U.height,U.depth,0,le,he,U.data);else if(T.isData3DTexture)ke?($e&&t.texStorage3D(32879,R,Se,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,le,he,U.data)):t.texImage3D(32879,0,Se,U.width,U.height,U.depth,0,le,he,U.data);else if(T.isFramebufferTexture){if($e)if(ke)t.texStorage2D(3553,R,Se,U.width,U.height);else{let Z=U.width,ie=U.height;for(let ue=0;ue<R;ue++)t.texImage2D(3553,ue,Se,Z,ie,0,le,he,null),Z>>=1,ie>>=1}}else if(ze.length>0&&ce){ke&&$e&&t.texStorage2D(3553,R,Se,ze[0].width,ze[0].height);for(let Z=0,ie=ze.length;Z<ie;Z++)be=ze[Z],ke?t.texSubImage2D(3553,Z,0,0,le,he,be):t.texImage2D(3553,Z,Se,le,he,be);T.generateMipmaps=!1}else ke?($e&&t.texStorage2D(3553,R,Se,U.width,U.height),t.texSubImage2D(3553,0,0,0,le,he,U)):t.texImage2D(3553,0,Se,le,he,U);w(T,ce)&&E(te),Te.__version=ae.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Me(P,T,K){if(T.image.length!==6)return;const te=Ee(P,T),ne=T.source;t.bindTexture(34067,P.__webglTexture,33984+K);const ae=n.get(ne);if(ne.version!==ae.__version||te===!0){t.activeTexture(33984+K),o.pixelStorei(37440,T.flipY),o.pixelStorei(37441,T.premultiplyAlpha),o.pixelStorei(3317,T.unpackAlignment),o.pixelStorei(37443,0);const Te=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,U=[];for(let Z=0;Z<6;Z++)!Te&&!D?U[Z]=v(T.image[Z],!1,!0,c):U[Z]=D?T.image[Z].image:T.image[Z],U[Z]=Je(T,U[Z]);const ce=U[0],le=M(ce)||s,he=r.convert(T.format,T.encoding),Se=r.convert(T.type),be=_(T.internalFormat,he,Se,T.encoding),ze=s&&T.isVideoTexture!==!0,ke=ae.__version===void 0||te===!0;let $e=S(T,ce,le);j(34067,T,le);let R;if(Te){ze&&ke&&t.texStorage2D(34067,$e,be,ce.width,ce.height);for(let Z=0;Z<6;Z++){R=U[Z].mipmaps;for(let ie=0;ie<R.length;ie++){const ue=R[ie];T.format!==Jn?he!==null?ze?t.compressedTexSubImage2D(34069+Z,ie,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(34069+Z,ie,be,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(34069+Z,ie,0,0,ue.width,ue.height,he,Se,ue.data):t.texImage2D(34069+Z,ie,be,ue.width,ue.height,0,he,Se,ue.data)}}}else{R=T.mipmaps,ze&&ke&&(R.length>0&&$e++,t.texStorage2D(34067,$e,be,U[0].width,U[0].height));for(let Z=0;Z<6;Z++)if(D){ze?t.texSubImage2D(34069+Z,0,0,0,U[Z].width,U[Z].height,he,Se,U[Z].data):t.texImage2D(34069+Z,0,be,U[Z].width,U[Z].height,0,he,Se,U[Z].data);for(let ie=0;ie<R.length;ie++){const ve=R[ie].image[Z].image;ze?t.texSubImage2D(34069+Z,ie+1,0,0,ve.width,ve.height,he,Se,ve.data):t.texImage2D(34069+Z,ie+1,be,ve.width,ve.height,0,he,Se,ve.data)}}else{ze?t.texSubImage2D(34069+Z,0,0,0,he,Se,U[Z]):t.texImage2D(34069+Z,0,be,he,Se,U[Z]);for(let ie=0;ie<R.length;ie++){const ue=R[ie];ze?t.texSubImage2D(34069+Z,ie+1,0,0,he,Se,ue.image[Z]):t.texImage2D(34069+Z,ie+1,be,he,Se,ue.image[Z])}}}w(T,le)&&E(34067),ae.__version=ne.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ge(P,T,K,te,ne){const ae=r.convert(K.format,K.encoding),Te=r.convert(K.type),D=_(K.internalFormat,ae,Te,K.encoding);n.get(T).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,D,T.width,T.height,T.depth,0,ae,Te,null):t.texImage2D(ne,0,D,T.width,T.height,0,ae,Te,null)),t.bindFramebuffer(36160,P),Ge(T)?f.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(K).__webglTexture,0,tt(T)):(ne===3553||ne>=34069&&ne<=34074)&&o.framebufferTexture2D(36160,te,ne,n.get(K).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(P,T,K){if(o.bindRenderbuffer(36161,P),T.depthBuffer&&!T.stencilBuffer){let te=33189;if(K||Ge(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===oi?te=36012:ne.type===_r&&(te=33190));const ae=tt(T);Ge(T)?f.renderbufferStorageMultisampleEXT(36161,ae,te,T.width,T.height):o.renderbufferStorageMultisample(36161,ae,te,T.width,T.height)}else o.renderbufferStorage(36161,te,T.width,T.height);o.framebufferRenderbuffer(36160,36096,36161,P)}else if(T.depthBuffer&&T.stencilBuffer){const te=tt(T);K&&Ge(T)===!1?o.renderbufferStorageMultisample(36161,te,35056,T.width,T.height):Ge(T)?f.renderbufferStorageMultisampleEXT(36161,te,35056,T.width,T.height):o.renderbufferStorage(36161,34041,T.width,T.height),o.framebufferRenderbuffer(36160,33306,36161,P)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<te.length;ne++){const ae=te[ne],Te=r.convert(ae.format,ae.encoding),D=r.convert(ae.type),U=_(ae.internalFormat,Te,D,ae.encoding),ce=tt(T);K&&Ge(T)===!1?o.renderbufferStorageMultisample(36161,ce,U,T.width,T.height):Ge(T)?f.renderbufferStorageMultisampleEXT(36161,ce,U,T.width,T.height):o.renderbufferStorage(36161,U,T.width,T.height)}}o.bindRenderbuffer(36161,null)}function Ce(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),L(T.depthTexture,0);const te=n.get(T.depthTexture).__webglTexture,ne=tt(T);if(T.depthTexture.format===yr)Ge(T)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):o.framebufferTexture2D(36160,36096,3553,te,0);else if(T.depthTexture.format===ws)Ge(T)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):o.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function oe(P){const T=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ce(T.__webglFramebuffer,P)}else if(K){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=o.createRenderbuffer(),Ie(T.__webglDepthbuffer[te],P,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),Ie(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function Be(P,T,K){const te=n.get(P);T!==void 0&&ge(te.__webglFramebuffer,P,P.texture,36064,3553),K!==void 0&&oe(P)}function rt(P){const T=P.texture,K=n.get(P),te=n.get(T);P.addEventListener("dispose",V),P.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture()),te.__version=T.version,a.memory.textures++);const ne=P.isWebGLCubeRenderTarget===!0,ae=P.isWebGLMultipleRenderTargets===!0,Te=M(P)||s;if(ne){K.__webglFramebuffer=[];for(let D=0;D<6;D++)K.__webglFramebuffer[D]=o.createFramebuffer()}else{if(K.__webglFramebuffer=o.createFramebuffer(),ae)if(i.drawBuffers){const D=P.texture;for(let U=0,ce=D.length;U<ce;U++){const le=n.get(D[U]);le.__webglTexture===void 0&&(le.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&P.samples>0&&Ge(P)===!1){const D=ae?T:[T];K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer);for(let U=0;U<D.length;U++){const ce=D[U];K.__webglColorRenderbuffer[U]=o.createRenderbuffer(),o.bindRenderbuffer(36161,K.__webglColorRenderbuffer[U]);const le=r.convert(ce.format,ce.encoding),he=r.convert(ce.type),Se=_(ce.internalFormat,le,he,ce.encoding,P.isXRRenderTarget===!0),be=tt(P);o.renderbufferStorageMultisample(36161,be,Se,P.width,P.height),o.framebufferRenderbuffer(36160,36064+U,36161,K.__webglColorRenderbuffer[U])}o.bindRenderbuffer(36161,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Ie(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),j(34067,T,Te);for(let D=0;D<6;D++)ge(K.__webglFramebuffer[D],P,T,36064,34069+D);w(T,Te)&&E(34067),t.unbindTexture()}else if(ae){const D=P.texture;for(let U=0,ce=D.length;U<ce;U++){const le=D[U],he=n.get(le);t.bindTexture(3553,he.__webglTexture),j(3553,le,Te),ge(K.__webglFramebuffer,P,le,36064+U,3553),w(le,Te)&&E(3553)}t.unbindTexture()}else{let D=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(s?D=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,te.__webglTexture),j(D,T,Te),ge(K.__webglFramebuffer,P,T,36064,D),w(T,Te)&&E(D),t.unbindTexture()}P.depthBuffer&&oe(P)}function st(P){const T=M(P)||s,K=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let te=0,ne=K.length;te<ne;te++){const ae=K[te];if(w(ae,T)){const Te=P.isWebGLCubeRenderTarget?34067:3553,D=n.get(ae).__webglTexture;t.bindTexture(Te,D),E(Te),t.unbindTexture()}}}function X(P){if(s&&P.samples>0&&Ge(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],K=P.width,te=P.height;let ne=16384;const ae=[],Te=P.stencilBuffer?33306:36096,D=n.get(P),U=P.isWebGLMultipleRenderTargets===!0;if(U)for(let ce=0;ce<T.length;ce++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let ce=0;ce<T.length;ce++){ae.push(36064+ce),P.depthBuffer&&ae.push(Te);const le=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(le===!1&&(P.depthBuffer&&(ne|=256),P.stencilBuffer&&(ne|=1024)),U&&o.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[ce]),le===!0&&(o.invalidateFramebuffer(36008,[Te]),o.invalidateFramebuffer(36009,[Te])),U){const he=n.get(T[ce]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,he,0)}o.blitFramebuffer(0,0,K,te,0,0,K,te,ne,9728),p&&o.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),U)for(let ce=0;ce<T.length;ce++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ce,36161,D.__webglColorRenderbuffer[ce]);const le=n.get(T[ce]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ce,3553,le,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function tt(P){return Math.min(h,P.samples)}function Ge(P){const T=n.get(P);return s&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function bt(P){const T=a.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function Je(P,T){const K=P.encoding,te=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ac||K!==er&&(K===ot?s===!1?e.has("EXT_sRGB")===!0&&te===Jn?(P.format=ac,P.minFilter=Gt,P.generateMipmaps=!1):T=Gf.sRGBToLinear(T):(te!==Jn||ne!==Pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",K)),T}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=L,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=re,this.rebindTextures=Be,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ge}function Lv(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===Pr)return 5121;if(r===Mm)return 32819;if(r===bm)return 32820;if(r===xm)return 5120;if(r===vm)return 5122;if(r===kf)return 5123;if(r===ym)return 5124;if(r===_r)return 5125;if(r===oi)return 5126;if(r===Ai)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Sm)return 6406;if(r===Jn)return 6408;if(r===Tm)return 6409;if(r===Em)return 6410;if(r===yr)return 6402;if(r===ws)return 34041;if(r===wm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ac)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Am)return 6403;if(r===Cm)return 36244;if(r===Lm)return 33319;if(r===Pm)return 33320;if(r===Dm)return 36249;if(r===tl||r===nl||r===il||r===rl)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Iu||r===Fu||r===Ou||r===Nu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ou)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rm)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zu||r===ku)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===zu)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===ku)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uu||r===Bu||r===Gu||r===Vu||r===Hu||r===Wu||r===Xu||r===qu||r===Yu||r===ju||r===$u||r===Zu||r===Ku||r===Ju)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Uu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ju)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$u)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zu)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ku)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ju)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Qu)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ps?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Pv extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zs extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dv={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),x=this._getHandJoint(c,d);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=m.radius),x.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Rv extends Zt{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:yr,u!==yr&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yr&&(n=_r),n===void 0&&u===ws&&(n=ps),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1}}class Iv extends kr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let d=null,m=null;const x=[],b=[],v=new Set,M=new Map,y=new jt;y.layers.enable(1),y.viewport=new dt;const w=new jt;w.layers.enable(2),w.viewport=new dt;const E=[y,w],_=new Pv;_.layers.enable(1),_.layers.enable(2);let S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=x[W];return Y===void 0&&(Y=new Dl,x[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=x[W];return Y===void 0&&(Y=new Dl,x[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=x[W];return Y===void 0&&(Y=new Dl,x[W]=Y),Y.getHandSpace()};function F(W){const Y=b.indexOf(W.inputSource);if(Y===-1)return;const re=x[Y];re!==void 0&&re.dispatchEvent({type:W.type,data:W.inputSource})}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",O);for(let W=0;W<x.length;W++){const Y=b[W];Y!==null&&(b[W]=null,x[W].disconnect(Y))}S=null,C=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,m=null,L.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:f}),m=new Dr(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:Pr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let Y=null,re=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,Y=g.stencil?ws:yr,re=g.stencil?ps:_r);const se={colorFormat:32856,depthFormat:ee,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(se),i.updateRenderState({layers:[h]}),m=new Dr(h.textureWidth,h.textureHeight,{format:Jn,type:Pr,depthTexture:new Rv(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const j=e.properties.get(m);j.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),L.setContext(i),L.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(W){for(let Y=0;Y<W.removed.length;Y++){const re=W.removed[Y],ee=b.indexOf(re);ee>=0&&(b[ee]=null,x[ee].disconnect(re))}for(let Y=0;Y<W.added.length;Y++){const re=W.added[Y];let ee=b.indexOf(re);if(ee===-1){for(let j=0;j<x.length;j++)if(j>=b.length){b.push(re),ee=j;break}else if(b[j]===null){b[j]=re,ee=j;break}if(ee===-1)break}const se=x[ee];se&&se.connect(re)}}const I=new k,B=new k;function J(W,Y,re){I.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);const ee=I.distanceTo(B),se=Y.projectionMatrix.elements,j=re.projectionMatrix.elements,Ee=se[14]/(se[10]-1),de=se[14]/(se[10]+1),Me=(se[9]+1)/se[5],ge=(se[9]-1)/se[5],Ie=(se[8]-1)/se[0],Ce=(j[8]+1)/j[0],oe=Ee*Ie,Be=Ee*Ce,rt=ee/(-Ie+Ce),st=rt*-Ie;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(st),W.translateZ(rt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const X=Ee+rt,tt=de+rt,Ge=oe-st,bt=Be+(ee-st),Je=Me*de/tt*X,P=ge*de/tt*X;W.projectionMatrix.makePerspective(Ge,bt,Je,P,X,tt)}function H(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;_.near=w.near=y.near=W.near,_.far=w.far=y.far=W.far,(S!==_.near||C!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,C=_.far);const Y=W.parent,re=_.cameras;H(_,Y);for(let se=0;se<re.length;se++)H(re[se],Y);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),W.matrix.copy(_.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const ee=W.children;for(let se=0,j=ee.length;se<j;se++)ee[se].updateMatrixWorld(!0);re.length===2?J(_,y,w):_.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(W){h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.getPlanes=function(){return v};let G=null;function Q(W,Y){if(c=Y.getViewerPose(l||a),p=Y,c!==null){const re=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ee=!1;re.length!==_.cameras.length&&(_.cameras.length=0,ee=!0);for(let se=0;se<re.length;se++){const j=re[se];let Ee=null;if(f!==null)Ee=f.getViewport(j);else{const Me=u.getViewSubImage(h,j);Ee=Me.viewport,se===0&&(e.setRenderTargetTextures(m,Me.colorTexture,h.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(m))}let de=E[se];de===void 0&&(de=new jt,de.layers.enable(se),de.viewport=new dt,E[se]=de),de.matrix.fromArray(j.transform.matrix),de.projectionMatrix.fromArray(j.projectionMatrix),de.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),se===0&&_.matrix.copy(de.matrix),ee===!0&&_.cameras.push(de)}}for(let re=0;re<x.length;re++){const ee=b[re],se=x[re];ee!==null&&se!==void 0&&se.update(ee,Y,l||a)}if(G&&G(W,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let re=null;for(const ee of v)Y.detectedPlanes.has(ee)||(re===null&&(re=[]),re.push(ee));if(re!==null)for(const ee of re)v.delete(ee),M.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of Y.detectedPlanes)if(!v.has(ee))v.add(ee),M.set(ee,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const se=M.get(ee);ee.lastChangedTime>se&&(M.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}p=null}const L=new Kf;L.setAnimationLoop(Q),this.setAnimationLoop=function(W){G=W},this.dispose=function(){}}}function Fv(o,e){function t(d,m){m.color.getRGB(d.fogColor.value,jf(o)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,x,b,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,v)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?s(d,m,x,b):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===Wn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===Wn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*M}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function s(d,m,x,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*x,d.scale.value=b*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,x){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Wn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ov(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(b,v){const M=v.program;n.uniformBlockBinding(b,M)}function c(b,v){let M=i[b.id];M===void 0&&(g(b),M=u(b),i[b.id]=M,b.addEventListener("dispose",m));const y=v.program;n.updateUBOMapping(b,y);const w=e.render.frame;r[b.id]!==w&&(f(b),r[b.id]=w)}function u(b){const v=h();b.__bindingPointIndex=v;const M=o.createBuffer(),y=b.__size,w=b.usage;return o.bindBuffer(35345,M),o.bufferData(35345,y,w),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,M),M}function h(){for(let b=0;b<s;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=i[b.id],M=b.uniforms,y=b.__cache;o.bindBuffer(35345,v);for(let w=0,E=M.length;w<E;w++){const _=M[w];if(p(_,w,y)===!0){const S=_.__offset,C=Array.isArray(_.value)?_.value:[_.value];let F=0;for(let V=0;V<C.length;V++){const O=C[V],I=d(O);typeof O=="number"?(_.__data[0]=O,o.bufferSubData(35345,S+F,_.__data)):O.isMatrix3?(_.__data[0]=O.elements[0],_.__data[1]=O.elements[1],_.__data[2]=O.elements[2],_.__data[3]=O.elements[0],_.__data[4]=O.elements[3],_.__data[5]=O.elements[4],_.__data[6]=O.elements[5],_.__data[7]=O.elements[0],_.__data[8]=O.elements[6],_.__data[9]=O.elements[7],_.__data[10]=O.elements[8],_.__data[11]=O.elements[0]):(O.toArray(_.__data,F),F+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,S,_.__data)}}o.bindBuffer(35345,null)}function p(b,v,M){const y=b.value;if(M[v]===void 0){if(typeof y=="number")M[v]=y;else{const w=Array.isArray(y)?y:[y],E=[];for(let _=0;_<w.length;_++)E.push(w[_].clone());M[v]=E}return!0}else if(typeof y=="number"){if(M[v]!==y)return M[v]=y,!0}else{const w=Array.isArray(M[v])?M[v]:[M[v]],E=Array.isArray(y)?y:[y];for(let _=0;_<w.length;_++){const S=w[_];if(S.equals(E[_])===!1)return S.copy(E[_]),!0}}return!1}function g(b){const v=b.uniforms;let M=0;const y=16;let w=0;for(let E=0,_=v.length;E<_;E++){const S=v[E],C={boundary:0,storage:0},F=Array.isArray(S.value)?S.value:[S.value];for(let V=0,O=F.length;V<O;V++){const I=F[V],B=d(I);C.boundary+=B.boundary,C.storage+=B.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,E>0){w=M%y;const V=y-w;w!==0&&V-C.boundary<0&&(M+=y-w,S.__offset=M)}M+=C.storage}return w=M%y,w>0&&(M+=y-w),b.__size=M,b.__cache={},this}function d(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function x(){for(const b in i)o.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:x}}function Nv(){const o=ma("canvas");return o.style.display="block",o}function Xo(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Nv(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=er,this.physicallyCorrectLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;const d=this;let m=!1,x=0,b=0,v=null,M=-1,y=null;const w=new dt,E=new dt;let _=null,S=e.width,C=e.height,F=1,V=null,O=null;const I=new dt(0,0,S,C),B=new dt(0,0,S,C);let J=!1;const H=new Hc;let G=!1,Q=!1,L=null;const W=new yt,Y=new Ne,re=new k,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?F:1}let j=t;function Ee(A,N){for(let q=0;q<A.length;q++){const z=A[q],$=e.getContext(z,N);if($!==null)return $}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kc}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",ze,!1),j===null){const N=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&N.shift(),j=Ee(N,A),j===null)throw Ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let de,Me,ge,Ie,Ce,oe,Be,rt,st,X,tt,Ge,bt,Je,P,T,K,te,ne,ae,Te,D,U,ce;function le(){de=new Y0(j),Me=new B0(j,de,o),de.init(Me),D=new Lv(j,de,Me),ge=new Av(j,de,Me),Ie=new Z0,Ce=new dv,oe=new Cv(j,de,ge,Ce,Me,D,Ie),Be=new V0(d),rt=new q0(d),st=new rg(j,Me),U=new k0(j,de,st,Me),X=new j0(j,st,Ie,U),tt=new ex(j,X,st,Ie),ne=new Q0(j,Me,oe),T=new G0(Ce),Ge=new fv(d,Be,rt,de,Me,U,T),bt=new Fv(d,Ce),Je=new mv,P=new Mv(de,Me),te=new z0(d,Be,rt,ge,tt,u,a),K=new Ev(d,tt,Me),ce=new Ov(j,Ie,Me,ge),ae=new U0(j,de,Ie,Me),Te=new $0(j,de,Ie,Me),Ie.programs=Ge.programs,d.capabilities=Me,d.extensions=de,d.properties=Ce,d.renderLists=Je,d.shadowMap=K,d.state=ge,d.info=Ie}le();const he=new Iv(d,j);this.xr=he,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(S,C,!1))},this.getSize=function(A){return A.set(S,C)},this.setSize=function(A,N,q){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=A,C=N,e.width=Math.floor(A*F),e.height=Math.floor(N*F),q!==!1&&(e.style.width=A+"px",e.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(S*F,C*F).floor()},this.setDrawingBufferSize=function(A,N,q){S=A,C=N,F=q,e.width=Math.floor(A*q),e.height=Math.floor(N*q),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,N,q,z){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,N,q,z),ge.viewport(w.copy(I).multiplyScalar(F).floor())},this.getScissor=function(A){return A.copy(B)},this.setScissor=function(A,N,q,z){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,N,q,z),ge.scissor(E.copy(B).multiplyScalar(F).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(A){ge.setScissorTest(J=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,N=!0,q=!0){let z=0;A&&(z|=16384),N&&(z|=256),q&&(z|=1024),j.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),Je.dispose(),P.dispose(),Ce.dispose(),Be.dispose(),rt.dispose(),tt.dispose(),U.dispose(),ce.dispose(),Ge.dispose(),he.dispose(),he.removeEventListener("sessionstart",ue),he.removeEventListener("sessionend",ve),L&&(L.dispose(),L=null),Xe.stop()};function Se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const A=Ie.autoReset,N=K.enabled,q=K.autoUpdate,z=K.needsUpdate,$=K.type;le(),Ie.autoReset=A,K.enabled=N,K.autoUpdate=q,K.needsUpdate=z,K.type=$}function ze(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const N=A.target;N.removeEventListener("dispose",ke),$e(N)}function $e(A){R(A),Ce.remove(A)}function R(A){const N=Ce.get(A).programs;N!==void 0&&(N.forEach(function(q){Ge.releaseProgram(q)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,q,z,$,me){N===null&&(N=ee);const _e=$.isMesh&&$.matrixWorld.determinant()<0,Pe=Qe(A,N,q,z,$);ge.setMaterial(z,_e);let we=q.index,Fe=1;z.wireframe===!0&&(we=X.getWireframeAttribute(q),Fe=2);const Oe=q.drawRange,Re=q.attributes.position;let qe=Oe.start*Fe,at=(Oe.start+Oe.count)*Fe;me!==null&&(qe=Math.max(qe,me.start*Fe),at=Math.min(at,(me.start+me.count)*Fe)),we!==null?(qe=Math.max(qe,0),at=Math.min(at,we.count)):Re!=null&&(qe=Math.max(qe,0),at=Math.min(at,Re.count));const kt=at-qe;if(kt<0||kt===1/0)return;U.setup($,z,Pe,q,we);let Fn,Ze=ae;if(we!==null&&(Fn=st.get(we),Ze=Te,Ze.setIndex(Fn)),$.isMesh)z.wireframe===!0?(ge.setLineWidth(z.wireframeLinewidth*se()),Ze.setMode(1)):Ze.setMode(4);else if($.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),ge.setLineWidth(Ae*se()),$.isLineSegments?Ze.setMode(1):$.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else $.isPoints?Ze.setMode(0):$.isSprite&&Ze.setMode(4);if($.isInstancedMesh)Ze.renderInstances(qe,kt,$.count);else if(q.isInstancedBufferGeometry){const Ae=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,un=Math.min(q.instanceCount,Ae);Ze.renderInstances(qe,kt,un)}else Ze.render(qe,kt)},this.compile=function(A,N){function q(z,$,me){z.transparent===!0&&z.side===Pa?(z.side=Wn,z.needsUpdate=!0,nt(z,$,me),z.side=Qi,z.needsUpdate=!0,nt(z,$,me),z.side=Pa):nt(z,$,me)}f=P.get(A),f.init(),g.push(f),A.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(d.physicallyCorrectLights),A.traverse(function(z){const $=z.material;if($)if(Array.isArray($))for(let me=0;me<$.length;me++){const _e=$[me];q(_e,A,z)}else q($,A,z)}),g.pop(),f=null};let Z=null;function ie(A){Z&&Z(A)}function ue(){Xe.stop()}function ve(){Xe.start()}const Xe=new Kf;Xe.setAnimationLoop(ie),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(A){Z=A,he.setAnimationLoop(A),A===null?Xe.stop():Xe.start()},he.addEventListener("sessionstart",ue),he.addEventListener("sessionend",ve),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,N,v),f=P.get(A,g.length),f.init(),g.push(f),W.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H.setFromProjectionMatrix(W),Q=this.localClippingEnabled,G=T.init(this.clippingPlanes,Q,N),h=Je.get(A,p.length),h.init(),p.push(h),ht(A,N,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(V,O),G===!0&&T.beginShadows();const q=f.state.shadowsArray;if(K.render(q,A,N),G===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,A),f.setupLights(d.physicallyCorrectLights),N.isArrayCamera){const z=N.cameras;for(let $=0,me=z.length;$<me;$++){const _e=z[$];ut(h,A,_e,_e.viewport)}}else ut(h,A,N);v!==null&&(oe.updateMultisampleRenderTarget(v),oe.updateRenderTargetMipmap(v)),A.isScene===!0&&A.onAfterRender(d,A,N),U.resetDefaultState(),M=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function ht(A,N,q,z){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){z&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W);const _e=tt.update(A),Pe=A.material;Pe.visible&&h.push(A,_e,Pe,q,re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ie.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ie.render.frame),!A.frustumCulled||H.intersectsObject(A))){z&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W);const _e=tt.update(A),Pe=A.material;if(Array.isArray(Pe)){const we=_e.groups;for(let Fe=0,Oe=we.length;Fe<Oe;Fe++){const Re=we[Fe],qe=Pe[Re.materialIndex];qe&&qe.visible&&h.push(A,_e,qe,q,re.z,Re)}}else Pe.visible&&h.push(A,_e,Pe,q,re.z,null)}}const me=A.children;for(let _e=0,Pe=me.length;_e<Pe;_e++)ht(me[_e],N,q,z)}function ut(A,N,q,z){const $=A.opaque,me=A.transmissive,_e=A.transparent;f.setupLightsView(q),me.length>0&&Le($,N,q),z&&ge.viewport(w.copy(z)),$.length>0&&pe($,N,q),me.length>0&&pe(me,N,q),_e.length>0&&pe(_e,N,q),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Le(A,N,q){const z=Me.isWebGL2;L===null&&(L=new Dr(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Ai:Pr,minFilter:Ss,samples:z&&r===!0?4:0})),d.getDrawingBufferSize(Y),z?L.setSize(Y.x,Y.y):L.setSize(lc(Y.x),lc(Y.y));const $=d.getRenderTarget();d.setRenderTarget(L),d.clear();const me=d.toneMapping;d.toneMapping=Pi,pe(A,N,q),d.toneMapping=me,oe.updateMultisampleRenderTarget(L),oe.updateRenderTargetMipmap(L),d.setRenderTarget($)}function pe(A,N,q){const z=N.isScene===!0?N.overrideMaterial:null;for(let $=0,me=A.length;$<me;$++){const _e=A[$],Pe=_e.object,we=_e.geometry,Fe=z===null?_e.material:z,Oe=_e.group;Pe.layers.test(q.layers)&&Ue(Pe,N,q,we,Fe,Oe)}}function Ue(A,N,q,z,$,me){A.onBeforeRender(d,N,q,z,$,me),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(d,N,q,z,A,me),$.transparent===!0&&$.side===Pa?($.side=Wn,$.needsUpdate=!0,d.renderBufferDirect(q,N,z,$,A,me),$.side=Qi,$.needsUpdate=!0,d.renderBufferDirect(q,N,z,$,A,me),$.side=Pa):d.renderBufferDirect(q,N,z,$,A,me),A.onAfterRender(d,N,q,z,$,me)}function nt(A,N,q){N.isScene!==!0&&(N=ee);const z=Ce.get(A),$=f.state.lights,me=f.state.shadowsArray,_e=$.state.version,Pe=Ge.getParameters(A,$.state,me,N,q),we=Ge.getProgramCacheKey(Pe);let Fe=z.programs;z.environment=A.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(A.isMeshStandardMaterial?rt:Be).get(A.envMap||z.environment),Fe===void 0&&(A.addEventListener("dispose",ke),Fe=new Map,z.programs=Fe);let Oe=Fe.get(we);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===_e)return xe(A,Pe),Oe}else Pe.uniforms=Ge.getUniforms(A),A.onBuild(q,Pe,d),A.onBeforeCompile(Pe,d),Oe=Ge.acquireProgram(Pe,we),Fe.set(we,Oe),z.uniforms=Pe.uniforms;const Re=z.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=T.uniform),xe(A,Pe),z.needsLights=Ve(A),z.lightsStateVersion=_e,z.needsLights&&(Re.ambientLightColor.value=$.state.ambient,Re.lightProbe.value=$.state.probe,Re.directionalLights.value=$.state.directional,Re.directionalLightShadows.value=$.state.directionalShadow,Re.spotLights.value=$.state.spot,Re.spotLightShadows.value=$.state.spotShadow,Re.rectAreaLights.value=$.state.rectArea,Re.ltc_1.value=$.state.rectAreaLTC1,Re.ltc_2.value=$.state.rectAreaLTC2,Re.pointLights.value=$.state.point,Re.pointLightShadows.value=$.state.pointShadow,Re.hemisphereLights.value=$.state.hemi,Re.directionalShadowMap.value=$.state.directionalShadowMap,Re.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Re.spotShadowMap.value=$.state.spotShadowMap,Re.spotLightMatrix.value=$.state.spotLightMatrix,Re.spotLightMap.value=$.state.spotLightMap,Re.pointShadowMap.value=$.state.pointShadowMap,Re.pointShadowMatrix.value=$.state.pointShadowMatrix);const qe=Oe.getUniforms(),at=go.seqWithValue(qe.seq,Re);return z.currentProgram=Oe,z.uniformsList=at,Oe}function xe(A,N){const q=Ce.get(A);q.outputEncoding=N.outputEncoding,q.instancing=N.instancing,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function Qe(A,N,q,z,$){N.isScene!==!0&&(N=ee),oe.resetTextureUnits();const me=N.fog,_e=z.isMeshStandardMaterial?N.environment:null,Pe=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:er,we=(z.isMeshStandardMaterial?rt:Be).get(z.envMap||_e),Fe=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!z.normalMap&&!!q.attributes.tangent,Re=!!q.morphAttributes.position,qe=!!q.morphAttributes.normal,at=!!q.morphAttributes.color,kt=z.toneMapped?d.toneMapping:Pi,Fn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ze=Fn!==void 0?Fn.length:0,Ae=Ce.get(z),un=f.state.lights;if(G===!0&&(Q===!0||A!==y)){const xn=A===y&&z.id===M;T.setState(z,A,xn)}let _t=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==un.state.version||Ae.outputEncoding!==Pe||$.isInstancedMesh&&Ae.instancing===!1||!$.isInstancedMesh&&Ae.instancing===!0||$.isSkinnedMesh&&Ae.skinning===!1||!$.isSkinnedMesh&&Ae.skinning===!0||Ae.envMap!==we||z.fog===!0&&Ae.fog!==me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==T.numPlanes||Ae.numIntersection!==T.numIntersection)||Ae.vertexAlphas!==Fe||Ae.vertexTangents!==Oe||Ae.morphTargets!==Re||Ae.morphNormals!==qe||Ae.morphColors!==at||Ae.toneMapping!==kt||Me.isWebGL2===!0&&Ae.morphTargetsCount!==Ze)&&(_t=!0):(_t=!0,Ae.__version=z.version);let ti=Ae.currentProgram;_t===!0&&(ti=nt(z,N,$));let Fi=!1,Wt=!1,mi=!1;const St=ti.getUniforms(),_n=Ae.uniforms;if(ge.useProgram(ti.program)&&(Fi=!0,Wt=!0,mi=!0),z.id!==M&&(M=z.id,Wt=!0),Fi||y!==A){if(St.setValue(j,"projectionMatrix",A.projectionMatrix),Me.logarithmicDepthBuffer&&St.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),y!==A&&(y=A,Wt=!0,mi=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const xn=St.map.cameraPosition;xn!==void 0&&xn.setValue(j,re.setFromMatrixPosition(A.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||$.isSkinnedMesh)&&St.setValue(j,"viewMatrix",A.matrixWorldInverse)}if($.isSkinnedMesh){St.setOptional(j,$,"bindMatrix"),St.setOptional(j,$,"bindMatrixInverse");const xn=$.skeleton;xn&&(Me.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),St.setValue(j,"boneTexture",xn.boneTexture,oe),St.setValue(j,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Jo=q.morphAttributes;if((Jo.position!==void 0||Jo.normal!==void 0||Jo.color!==void 0&&Me.isWebGL2===!0)&&ne.update($,q,z,ti),(Wt||Ae.receiveShadow!==$.receiveShadow)&&(Ae.receiveShadow=$.receiveShadow,St.setValue(j,"receiveShadow",$.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(_n.envMap.value=we,_n.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Wt&&(St.setValue(j,"toneMappingExposure",d.toneMappingExposure),Ae.needsLights&&De(_n,mi),me&&z.fog===!0&&bt.refreshFogUniforms(_n,me),bt.refreshMaterialUniforms(_n,z,F,C,L),go.upload(j,Ae.uniformsList,_n,oe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(go.upload(j,Ae.uniformsList,_n,oe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(j,"center",$.center),St.setValue(j,"modelViewMatrix",$.modelViewMatrix),St.setValue(j,"normalMatrix",$.normalMatrix),St.setValue(j,"modelMatrix",$.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const xn=z.uniformsGroups;for(let Qo=0,Vp=xn.length;Qo<Vp;Qo++)if(Me.isWebGL2){const Tu=xn[Qo];ce.update(Tu,ti),ce.bind(Tu,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function De(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function Ve(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(A,N,q){Ce.get(A.texture).__webglTexture=N,Ce.get(A.depthTexture).__webglTexture=q;const z=Ce.get(A);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=q===void 0,z.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,N){const q=Ce.get(A);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,q=0){v=A,x=N,b=q;let z=!0,$=null,me=!1,_e=!1;if(A){const we=Ce.get(A);we.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),z=!1):we.__webglFramebuffer===void 0?oe.setupRenderTarget(A):we.__hasExternalTextures&&oe.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(_e=!0);const Oe=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?($=Oe[N],me=!0):Me.isWebGL2&&A.samples>0&&oe.useMultisampledRTT(A)===!1?$=Ce.get(A).__webglMultisampledFramebuffer:$=Oe,w.copy(A.viewport),E.copy(A.scissor),_=A.scissorTest}else w.copy(I).multiplyScalar(F).floor(),E.copy(B).multiplyScalar(F).floor(),_=J;if(ge.bindFramebuffer(36160,$)&&Me.drawBuffers&&z&&ge.drawBuffers(A,$),ge.viewport(w),ge.scissor(E),ge.setScissorTest(_),me){const we=Ce.get(A.texture);j.framebufferTexture2D(36160,36064,34069+N,we.__webglTexture,q)}else if(_e){const we=Ce.get(A.texture),Fe=N||0;j.framebufferTextureLayer(36160,36064,we.__webglTexture,q||0,Fe)}M=-1},this.readRenderTargetPixels=function(A,N,q,z,$,me,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Pe=Pe[_e]),Pe){ge.bindFramebuffer(36160,Pe);try{const we=A.texture,Fe=we.format,Oe=we.type;if(Fe!==Jn&&D.convert(Fe)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Oe===Ai&&(de.has("EXT_color_buffer_half_float")||Me.isWebGL2&&de.has("EXT_color_buffer_float"));if(Oe!==Pr&&D.convert(Oe)!==j.getParameter(35738)&&!(Oe===oi&&(Me.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-z&&q>=0&&q<=A.height-$&&j.readPixels(N,q,z,$,D.convert(Fe),D.convert(Oe),me)}finally{const we=v!==null?Ce.get(v).__webglFramebuffer:null;ge.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(A,N,q=0){const z=Math.pow(2,-q),$=Math.floor(N.image.width*z),me=Math.floor(N.image.height*z);oe.setTexture2D(N,0),j.copyTexSubImage2D(3553,q,0,0,A.x,A.y,$,me),ge.unbindTexture()},this.copyTextureToTexture=function(A,N,q,z=0){const $=N.image.width,me=N.image.height,_e=D.convert(q.format),Pe=D.convert(q.type);oe.setTexture2D(q,0),j.pixelStorei(37440,q.flipY),j.pixelStorei(37441,q.premultiplyAlpha),j.pixelStorei(3317,q.unpackAlignment),N.isDataTexture?j.texSubImage2D(3553,z,A.x,A.y,$,me,_e,Pe,N.image.data):N.isCompressedTexture?j.compressedTexSubImage2D(3553,z,A.x,A.y,N.mipmaps[0].width,N.mipmaps[0].height,_e,N.mipmaps[0].data):j.texSubImage2D(3553,z,A.x,A.y,_e,Pe,N.image),z===0&&q.generateMipmaps&&j.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(A,N,q,z,$=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=A.max.x-A.min.x+1,_e=A.max.y-A.min.y+1,Pe=A.max.z-A.min.z+1,we=D.convert(z.format),Fe=D.convert(z.type);let Oe;if(z.isData3DTexture)oe.setTexture3D(z,0),Oe=32879;else if(z.isDataArrayTexture)oe.setTexture2DArray(z,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,z.flipY),j.pixelStorei(37441,z.premultiplyAlpha),j.pixelStorei(3317,z.unpackAlignment);const Re=j.getParameter(3314),qe=j.getParameter(32878),at=j.getParameter(3316),kt=j.getParameter(3315),Fn=j.getParameter(32877),Ze=q.isCompressedTexture?q.mipmaps[0]:q.image;j.pixelStorei(3314,Ze.width),j.pixelStorei(32878,Ze.height),j.pixelStorei(3316,A.min.x),j.pixelStorei(3315,A.min.y),j.pixelStorei(32877,A.min.z),q.isDataTexture||q.isData3DTexture?j.texSubImage3D(Oe,$,N.x,N.y,N.z,me,_e,Pe,we,Fe,Ze.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Oe,$,N.x,N.y,N.z,me,_e,Pe,we,Ze.data)):j.texSubImage3D(Oe,$,N.x,N.y,N.z,me,_e,Pe,we,Fe,Ze),j.pixelStorei(3314,Re),j.pixelStorei(32878,qe),j.pixelStorei(3316,at),j.pixelStorei(3315,kt),j.pixelStorei(32877,Fn),$===0&&z.generateMipmaps&&j.generateMipmap(Oe),ge.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){x=0,b=0,v=null,ge.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class zv extends Xo{}zv.prototype.isWebGL1Renderer=!0;class qc extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class kv extends Zt{constructor(e=null,t=1,n=1,i,r,a,s,l,c=Bt,u=Bt,h,f){super(null,a,s,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fh=new k,Oh=new k,Nh=new yt,Rl=new Vc,Za=new Ea;class Uv extends Nt{constructor(e=new ei,t=new _o){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fh.fromBufferAttribute(t,i-1),Oh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fh.distanceTo(Oh);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(i),Za.radius+=r,e.ray.intersectsSphere(Za)===!1)return;Nh.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(Nh);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new k,u=new k,h=new k,f=new k,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const x=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let v=x,M=b-1;v<M;v+=p){const y=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,w),Rl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(f);_<e.near||_>e.far||t.push({distance:_,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,a.start),b=Math.min(m.count,a.start+a.count);for(let v=x,M=b-1;v<M;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Rl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const zh=new k,kh=new k;class Uh extends Uv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zh.fromBufferAttribute(t,i),kh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zh.distanceTo(kh);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ks extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bh=new yt,hc=new Vc,Ka=new Ea,Ja=new k;class Il extends Nt{constructor(e=new ei,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(i),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;Bh.copy(i).invert(),hc.copy(e.ray).applyMatrix4(Bh);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,d=p;g<d;g++){const m=c.getX(g);Ja.fromBufferAttribute(h,m),Gh(Ja,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,d=p;g<d;g++)Ja.fromBufferAttribute(h,g),Gh(Ja,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Gh(o,e,t,n,i,r,a){const s=hc.distanceSqToPoint(o);if(s<t){const l=new k;hc.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}class Bv extends Zt{constructor(e,t,n,i,r,a,s,l,c){super(e,t,n,i,r,a,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gv extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gc,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vv extends Gv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nd extends di{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gc,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Co={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Hv{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const id=new Hv;class Os{constructor(e){this.manager=e!==void 0?e:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Mi={};class Wv extends Error{constructor(e,t){super(e),this.response=t}}class Yc extends Os{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Co.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:i});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let d=0;const m=new ReadableStream({start(x){b();function b(){h.read().then(({done:v,value:M})=>{if(v)x.close();else{d+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let w=0,E=u.length;w<E;w++){const _=u[w];_.onProgress&&_.onProgress(y)}x.enqueue(M),b()}})}}});return new Response(m)}else throw new Wv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,s));case"json":return c.json();default:if(s===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(s),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Co.add(e,c);const u=Mi[e];delete Mi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xv extends Os{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Co.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=ma("img");function l(){u(),Co.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class qv extends Os{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new kv,s=new Yc(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(r.withCredentials),s.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:An,a.wrapT=c.wrapT!==void 0?c.wrapT:An,a.magFilter=c.magFilter!==void 0?c.magFilter:Gt,a.minFilter=c.minFilter!==void 0?c.minFilter:Gt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ss),c.mipmapCount===1&&(a.minFilter=Gt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}}class jc extends Os{constructor(e){super(e)}load(e,t,n,i){const r=new Zt,a=new Xv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class $c extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Fl=new yt,Vh=new k,Hh=new k;class rd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yv extends rd{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=oc*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sd extends $c{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wh=new yt,Ws=new k,Ol=new k;class jv extends rd{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),Ol.copy(n.position),Ol.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ol),n.updateMatrixWorld(),i.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh)}}class $v extends $c{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ad extends $c{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zv{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xh(){return(typeof performance>"u"?Date:performance).now()}class qh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ti=Jv();function Jv(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),s=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(s[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:s}}function Qv(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=Yt(o,-65504,65504),Ti.floatView[0]=o;const e=Ti.uint32View[0],t=e>>23&511;return Ti.baseTable[t]+((e&8388607)>>Ti.shiftTable[t])}function ey(o){const e=o>>10;return Ti.uint32View[0]=Ti.mantissaTable[Ti.offsetTable[e]+(o&1023)]+Ti.exponentTable[e],Ti.floatView[0]}var Qa=Object.freeze({__proto__:null,toHalfFloat:Qv,fromHalfFloat:ey});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);const Yh={type:"change"},Nl={type:"start"},jh={type:"end"};class Zc extends kr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Je),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Yh),n.update(),r=i.NONE},this.update=function(){const D=new k,U=new Rr().setFromUnitVectors(e.up,new k(0,1,0)),ce=U.clone().invert(),le=new k,he=new Rr,Se=2*Math.PI;return function(){const ze=n.object.position;D.copy(ze).sub(n.target),D.applyQuaternion(U),s.setFromVector3(D),n.autoRotate&&r===i.NONE&&S(E()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let ke=n.minAzimuthAngle,$e=n.maxAzimuthAngle;return isFinite(ke)&&isFinite($e)&&(ke<-Math.PI?ke+=Se:ke>Math.PI&&(ke-=Se),$e<-Math.PI?$e+=Se:$e>Math.PI&&($e-=Se),ke<=$e?s.theta=Math.max(ke,Math.min($e,s.theta)):s.theta=s.theta>(ke+$e)/2?Math.max(ke,s.theta):Math.min($e,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(s),D.applyQuaternion(ce),ze.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||le.distanceToSquared(n.object.position)>a||8*(1-he.dot(n.object.quaternion))>a?(n.dispatchEvent(Yh),le.copy(n.object.position),he.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",K),n.domElement.removeEventListener("pointerdown",Be),n.domElement.removeEventListener("pointercancel",X),n.domElement.removeEventListener("wheel",bt),n.domElement.removeEventListener("pointermove",rt),n.domElement.removeEventListener("pointerup",st),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Je)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new qh,l=new qh;let c=1;const u=new k;let h=!1;const f=new Ne,p=new Ne,g=new Ne,d=new Ne,m=new Ne,x=new Ne,b=new Ne,v=new Ne,M=new Ne,y=[],w={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function S(D){l.theta-=D}function C(D){l.phi-=D}const F=function(){const D=new k;return function(ce,le){D.setFromMatrixColumn(le,0),D.multiplyScalar(-ce),u.add(D)}}(),V=function(){const D=new k;return function(ce,le){n.screenSpacePanning===!0?D.setFromMatrixColumn(le,1):(D.setFromMatrixColumn(le,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(ce),u.add(D)}}(),O=function(){const D=new k;return function(ce,le){const he=n.domElement;if(n.object.isPerspectiveCamera){const Se=n.object.position;D.copy(Se).sub(n.target);let be=D.length();be*=Math.tan(n.object.fov/2*Math.PI/180),F(2*ce*be/he.clientHeight,n.object.matrix),V(2*le*be/he.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(ce*(n.object.right-n.object.left)/n.object.zoom/he.clientWidth,n.object.matrix),V(le*(n.object.top-n.object.bottom)/n.object.zoom/he.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(D){f.set(D.clientX,D.clientY)}function H(D){b.set(D.clientX,D.clientY)}function G(D){d.set(D.clientX,D.clientY)}function Q(D){p.set(D.clientX,D.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const U=n.domElement;S(2*Math.PI*g.x/U.clientHeight),C(2*Math.PI*g.y/U.clientHeight),f.copy(p),n.update()}function L(D){v.set(D.clientX,D.clientY),M.subVectors(v,b),M.y>0?I(_()):M.y<0&&B(_()),b.copy(v),n.update()}function W(D){m.set(D.clientX,D.clientY),x.subVectors(m,d).multiplyScalar(n.panSpeed),O(x.x,x.y),d.copy(m),n.update()}function Y(D){D.deltaY<0?B(_()):D.deltaY>0&&I(_()),n.update()}function re(D){let U=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),U=!0;break}U&&(D.preventDefault(),n.update())}function ee(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const D=.5*(y[0].pageX+y[1].pageX),U=.5*(y[0].pageY+y[1].pageY);f.set(D,U)}}function se(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const D=.5*(y[0].pageX+y[1].pageX),U=.5*(y[0].pageY+y[1].pageY);d.set(D,U)}}function j(){const D=y[0].pageX-y[1].pageX,U=y[0].pageY-y[1].pageY,ce=Math.sqrt(D*D+U*U);b.set(0,ce)}function Ee(){n.enableZoom&&j(),n.enablePan&&se()}function de(){n.enableZoom&&j(),n.enableRotate&&ee()}function Me(D){if(y.length==1)p.set(D.pageX,D.pageY);else{const ce=Te(D),le=.5*(D.pageX+ce.x),he=.5*(D.pageY+ce.y);p.set(le,he)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const U=n.domElement;S(2*Math.PI*g.x/U.clientHeight),C(2*Math.PI*g.y/U.clientHeight),f.copy(p)}function ge(D){if(y.length===1)m.set(D.pageX,D.pageY);else{const U=Te(D),ce=.5*(D.pageX+U.x),le=.5*(D.pageY+U.y);m.set(ce,le)}x.subVectors(m,d).multiplyScalar(n.panSpeed),O(x.x,x.y),d.copy(m)}function Ie(D){const U=Te(D),ce=D.pageX-U.x,le=D.pageY-U.y,he=Math.sqrt(ce*ce+le*le);v.set(0,he),M.set(0,Math.pow(v.y/b.y,n.zoomSpeed)),I(M.y),b.copy(v)}function Ce(D){n.enableZoom&&Ie(D),n.enablePan&&ge(D)}function oe(D){n.enableZoom&&Ie(D),n.enableRotate&&Me(D)}function Be(D){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",rt),n.domElement.addEventListener("pointerup",st)),te(D),D.pointerType==="touch"?P(D):tt(D))}function rt(D){n.enabled!==!1&&(D.pointerType==="touch"?T(D):Ge(D))}function st(D){ne(D),y.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",rt),n.domElement.removeEventListener("pointerup",st)),n.dispatchEvent(jh),r=i.NONE}function X(D){ne(D)}function tt(D){let U;switch(D.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case Br.DOLLY:if(n.enableZoom===!1)return;H(D),r=i.DOLLY;break;case Br.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;G(D),r=i.PAN}else{if(n.enableRotate===!1)return;J(D),r=i.ROTATE}break;case Br.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;J(D),r=i.ROTATE}else{if(n.enablePan===!1)return;G(D),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Nl)}function Ge(D){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(D);break;case i.DOLLY:if(n.enableZoom===!1)return;L(D);break;case i.PAN:if(n.enablePan===!1)return;W(D);break}}function bt(D){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(D.preventDefault(),n.dispatchEvent(Nl),Y(D),n.dispatchEvent(jh))}function Je(D){n.enabled===!1||n.enablePan===!1||re(D)}function P(D){switch(ae(D),y.length){case 1:switch(n.touches.ONE){case Gr.ROTATE:if(n.enableRotate===!1)return;ee(),r=i.TOUCH_ROTATE;break;case Gr.PAN:if(n.enablePan===!1)return;se(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Gr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(),r=i.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Nl)}function T(D){switch(ae(D),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ge(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;oe(D),n.update();break;default:r=i.NONE}}function K(D){n.enabled!==!1&&D.preventDefault()}function te(D){y.push(D)}function ne(D){delete w[D.pointerId];for(let U=0;U<y.length;U++)if(y[U].pointerId==D.pointerId){y.splice(U,1);return}}function ae(D){let U=w[D.pointerId];U===void 0&&(U=new Ne,w[D.pointerId]=U),U.set(D.pageX,D.pageY)}function Te(D){const U=D.pointerId===y[0].pointerId?y[1]:y[0];return w[U.pointerId]}n.domElement.addEventListener("contextmenu",K),n.domElement.addEventListener("pointerdown",Be),n.domElement.addEventListener("pointercancel",X),n.domElement.addEventListener("wheel",bt,{passive:!1}),this.update()}}const ty=/^[og]\s*(.+)?/,ny=/^mtllib /,iy=/^usemtl /,ry=/^usemap /,$h=/\s+/,Zh=new k,zl=new k,Kh=new k,Jh=new k,Nn=new k,eo=new je;function sy(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const s={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(s),s},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;Zh.fromArray(i,e),zl.fromArray(i,t),Kh.fromArray(i,n),Nn.subVectors(Kh,zl),Jh.subVectors(Zh,zl),Nn.cross(Jh),Nn.normalize(),r.push(Nn.x,Nn.y,Nn.z),r.push(Nn.x,Nn.y,Nn.z),r.push(Nn.x,Nn.y,Nn.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,a,s,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,f,p),this.addColor(h,f,p),s!==void 0&&s!==""){const g=this.normals.length;h=this.parseNormalIndex(s,g),f=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(h,f,p)}else this.addFaceNormal(h,f,p);if(i!==void 0&&i!==""){const g=this.uvs.length;h=this.parseUVIndex(i,g),f=this.parseUVIndex(r,g),p=this.parseUVIndex(a,g),this.addUV(h,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return o.startObject("",!1),o}class Kc extends Os{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,a=new Yc(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(s){try{t(r.parse(s))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new sy;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let s=0,l=n.length;s<l;s++){const c=n[s].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split($h);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(eo.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(eo.r,eo.g,eo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split($h),p=[];for(let d=0,m=f.length;d<m;d++){const x=f[d];if(x.length>0){const b=x.split("/");p.push(b)}}const g=p[0];for(let d=1,m=p.length-1;d<m;d++){const x=p[d],b=p[d+1];t.addFace(g[0],x[0],b[0],g[1],x[1],b[1],g[2],x[2],b[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const p=[];if(c.indexOf("/")===-1)f=h;else for(let g=0,d=h.length;g<d;g++){const m=h[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(f,p)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=ty.exec(c))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(iy.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(ny.test(c))t.materialLibraries.push(c.substring(7).trim());else if(ry.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=c.split(" "),i.length>1){const f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Zs;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let s=0,l=t.objects.length;s<l;s++){const c=t.objects[s],u=c.geometry,h=c.materials,f=u.type==="Line",p=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const d=new ei;d.setAttribute("position",new an(u.vertices,3)),u.normals.length>0&&d.setAttribute("normal",new an(u.normals,3)),u.colors.length>0&&(g=!0,d.setAttribute("color",new an(u.colors,3))),u.hasUVIndices===!0&&d.setAttribute("uv",new an(u.uvs,2));const m=[];for(let b=0,v=h.length;b<v;b++){const M=h[b],y=M.name+"_"+M.smooth+"_"+g;let w=t.materials[y];if(this.materials!==null){if(w=this.materials.create(M.name),f&&w&&!(w instanceof _o)){const E=new _o;di.prototype.copy.call(E,w),E.color.copy(w.color),w=E}else if(p&&w&&!(w instanceof Ks)){const E=new Ks({size:10,sizeAttenuation:!1});di.prototype.copy.call(E,w),E.color.copy(w.color),E.map=w.map,w=E}}w===void 0&&(f?w=new _o:p?w=new Ks({size:1,sizeAttenuation:!1}):w=new nd,w.name=M.name,w.flatShading=!M.smooth,w.vertexColors=g,t.materials[y]=w),m.push(w)}let x;if(m.length>1){for(let b=0,v=h.length;b<v;b++){const M=h[b];d.addGroup(M.groupStart,M.groupCount,b)}f?x=new Uh(d,m):p?x=new Il(d,m):x=new Dn(d,m)}else f?x=new Uh(d,m[0]):p?x=new Il(d,m[0]):x=new Dn(d,m[0]);x.name=c.name,r.add(x)}else if(t.vertices.length>0){const s=new Ks({size:1,sizeAttenuation:!1}),l=new ei;l.setAttribute("position",new an(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new an(t.colors,3)),s.vertexColors=!0);const c=new Il(l,s);r.add(c)}return r}}function bi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function od(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Es={duration:.5,overwrite:!1,delay:0},Jc,Kt,xt,Gn=1e8,ct=1/Gn,fc=Math.PI*2,ay=fc/4,oy=0,ld=Math.sqrt,ly=Math.cos,cy=Math.sin,zt=function(e){return typeof e=="string"},vt=function(e){return typeof e=="function"},Ri=function(e){return typeof e=="number"},Qc=function(e){return typeof e>"u"},pi=function(e){return typeof e=="object"},dn=function(e){return e!==!1},eu=function(){return typeof window<"u"},to=function(e){return vt(e)||zt(e)},cd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,dc=/(?:-?\.?\d|\.)+/gi,ud=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hd=/[+-]=-?[.\d]+/,fd=/[^,'"\[\]\s]+/gi,uy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,kn,pc,tu,In={},Lo={},dd,pd=function(e){return(Lo=Fr(e,In))&&gn},nu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Po=function(e,t){return!t&&console.warn(e)},md=function(e,t){return e&&(In[e]=t)&&Lo&&(Lo[e]=t)||In},ga=function(){return 0},hy={suppressEvents:!0,isStart:!0,kill:!1},xo={suppressEvents:!0,kill:!1},fy={suppressEvents:!0},iu={},$i=[],mc={},gd,En={},Ul={},Qh=30,vo=[],ru="",su=function(e){var t=e[0],n,i;if(pi(t)||vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=vo.length;i--&&!vo[i].targetTest(t););n=vo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Bd(e[i],n)))||e.splice(i,1);return e},br=function(e){return e._gsap||su(Vn(e))[0]._gsap},_d=function(e,t,n){return(n=e[t])&&vt(n)?e[t]():Qc(n)&&e.getAttribute&&e.getAttribute(t)||n},pn=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},ms=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},dy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Do=function(){var e=$i.length,t=$i.slice(0),n,i;for(mc={},$i.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xd=function(e,t,n,i){$i.length&&!Kt&&Do(),e.render(t,n,i||Kt&&t<0&&(e._initted||e._startAt)),$i.length&&!Kt&&Do()},vd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fd).length<2?t:zt(e)?e.trim():e},yd=function(e){return e},qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},py=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Fr=function(e,t){for(var n in t)e[n]=t[n];return e},ef=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=pi(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Ro=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ia=function(e){var t=e.parent||mt,n=e.keyframes?py(Jt(e.keyframes)):qn;if(dn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},my=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Md=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},qo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},tr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Sr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},gy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gc=function(e,t,n,i){return e._startAt&&(Kt?e._startAt.revert(xo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},_y=function o(e){return!e||e._ts&&o(e.parent)},tf=function(e){return e._repeat?As(e._tTime,e=e.duration()+e._rDelay)*e:0},As=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Io=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Yo=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},jo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Yo(e),n._dirty||Sr(n,e)),e},bd=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Io(e.rawTime(),t),(!t._dur||La(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),Sr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},ai=function(e,t,n,i){return t.parent&&tr(t),t._start=Vt((Ri(n)?n:n||e!==mt?zn(e,n,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Md(e,t,"_first","_last",e._sort?"_start":0),_c(t)||(e._recent=t),i||bd(e,t),e._ts<0&&jo(e,e._tTime),e},Sd=function(e,t){return(In.ScrollTrigger||nu("scrollTrigger",t))&&In.ScrollTrigger.create(t,e)},wd=function(e,t,n,i,r){if(ou(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gd!==Cn.frame)return $i.push(e),e._lazy=[r,i],1},xy=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},_c=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vy=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&xy(e)&&!(!e._initted&&_c(e))||(e._ts<0||e._dp._ts<0)&&!_c(e))?0:1,s=e._rDelay,l=0,c,u,h;if(s&&e._repeat&&(l=La(0,e._tDur,t),u=As(l,s),e._yoyo&&u&1&&(a=1-a),u!==As(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Kt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&wd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&gc(e,t,n,!0),e._onUpdate&&!n&&Hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&tr(e,1),!n&&!Kt&&(Hn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Cs=function(e,t,n,i){var r=e._repeat,a=Vt(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Vt(a*(r+1)+e._rDelay*r):a,s>0&&!i&&jo(e,e._tTime=e._tDur*s),e.parent&&Yo(e),n||Sr(e.parent,e),e},nf=function(e){return e instanceof on?Sr(e):Cs(e,e._dur)},My={_start:0,endTime:ga,totalDuration:ga},zn=function o(e,t,n){var i=e.labels,r=e._recent||My,a=e.duration()>=Gn?r.endTime(!1):e._dur,s,l,c;return zt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(Jt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},ra=function(e,t,n){var i=Ri(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=dn(l.vars.inherit)&&l.parent;a.immediateRender=dn(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Et(t[0],a,t[r+1])},rr=function(e,t){return e||e===0?t(e):t},La=function(e,t,n){return n<e?e:n>t?t:n},$t=function(e,t){return!zt(e)||!(t=uy.exec(e))?"":t[1]},by=function(e,t,n){return rr(n,function(i){return La(e,t,i)})},xc=[].slice,Td=function(e,t){return e&&pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pi(e[0]))&&!e.nodeType&&e!==kn},Sy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return zt(i)&&!t||Td(i,1)?(r=n).push.apply(r,Vn(i)):n.push(i)})||n},Vn=function(e,t,n){return xt&&!t&&xt.selector?xt.selector(e):zt(e)&&!n&&(pc||!Ls())?xc.call((t||tu).querySelectorAll(e),0):Jt(e)?Sy(e,n):Td(e)?xc.call(e,0):e?[e]:[]},vc=function(e){return e=Vn(e)[0]||Po("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Vn(t,n.querySelectorAll?n:n===e?Po("Invalid scope")||tu.createElement("div"):e)}},Ed=function(e){return e.sort(function(){return .5-Math.random()})},Ad=function(e){if(vt(e))return e;var t=pi(e)?e:{each:e},n=wr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,h=i;return zt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(f,p,g){var d=(g||t).length,m=a[d],x,b,v,M,y,w,E,_,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Gn])[1],!S){for(E=-Gn;E<(E=g[S++].getBoundingClientRect().left)&&S<d;);S--}for(m=a[d]=[],x=l?Math.min(S,d)*u-.5:i%S,b=S===Gn?0:l?d*h/S-.5:i/S|0,E=0,_=Gn,w=0;w<d;w++)v=w%S-x,M=b-(w/S|0),m[w]=y=c?Math.abs(c==="y"?M:v):ld(v*v+M*M),y>E&&(E=y),y<_&&(_=y);i==="random"&&Ed(m),m.max=E-_,m.min=_,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(S>d?d-1:c?c==="y"?d/S:S:Math.max(S,d/S))||0)*(i==="edges"?-1:1),m.b=d<0?r-d:r,m.u=$t(t.amount||t.each)||0,n=n&&d<0?zd(n):n}return d=(m[f]-m.min)/m.max||0,Vt(m.b+(n?n(d):d)*m.v)+m.u}},yc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Vt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ri(n)?0:$t(n))}},Cd=function(e,t){var n=Jt(e),i,r;return!n&&pi(e)&&(i=n=e.radius||Gn,e.values?(e=Vn(e.values),(r=!Ri(e[0]))&&(i*=i)):e=yc(e.increment)),rr(t,n?vt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Gn,u=0,h=e.length,f,p;h--;)r?(f=e[h].x-s,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-s),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||Ri(a)?u:u+$t(a)}:yc(e))},Ld=function(e,t,n,i){return rr(Jt(e)?!t:n===!0?!!(n=0):!i,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},wy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Ty=function(e,t){return function(n){return e(parseFloat(n))+(t||$t(n))}},Ey=function(e,t,n){return Dd(e,t,0,1,n)},Pd=function(e,t,n){return rr(n,function(i){return e[~~t(i)]})},Ay=function o(e,t,n){var i=t-e;return Jt(e)?Pd(e,o(0,e.length),t):rr(n,function(r){return(i+(r-e)%i)%i+e})},Cy=function o(e,t,n){var i=t-e,r=i*2;return Jt(e)?Pd(e,o(0,e.length-1),t):rr(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},_a=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?fd:dc),n+=e.substr(t,i-t)+Ld(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Dd=function(e,t,n,i,r){var a=t-e,s=i-n;return rr(r,function(l){return n+((l-e)/a*s||0)})},Ly=function o(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=zt(e),s={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(o(e[c-1],e[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=Fr(Jt(e)?[]:{},e));if(!u){for(l in t)au.call(s,e,l,"get",t[l]);r=function(g){return uu(g,s)||(a?e.p:e)}}}return rr(n,r)},rf=function(e,t,n){var i=e.labels,r=Gn,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Hn=function(e,t,n){var i=e.vars,r=i[t],a=xt,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&$i.length&&Do(),s&&(xt=s),u=l?r.apply(c,l):r.call(c),xt=a,u},Js=function(e){return tr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&Hn(e,"onInterrupt"),e},us,Rd=[],Id=function(e){if(eu()&&e){e=!e.name&&e.default||e;var t=e.name,n=vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ga,render:uu,add:au,kill:Xy,modifier:Wy,rawVars:0},a={targetTest:0,get:0,getSetter:cu,aliases:{},register:0};if(Ls(),e!==i){if(En[t])return;qn(i,qn(Ro(e,r),a)),Fr(i.prototype,Fr(r,Ro(e,a))),En[i.prop=t]=i,e.targetTest&&(vo.push(i),iu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}md(t,i),e.register&&e.register(gn,i,mn)}else e&&Rd.push(e)},lt=255,Qs={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},Bl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},Fd=function(e,t,n){var i=e?Ri(e)?[e>>16,e>>8&lt,e&lt]:0:Qs.black,r,a,s,l,c,u,h,f,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Qs[e])i=Qs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(dc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Bl(l+1/3,r,a),i[1]=Bl(l,r,a),i[2]=Bl(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(ud),n&&i.length<4&&(i[3]=1),i}else i=e.match(dc)||Qs.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/lt,a=i[1]/lt,s=i[2]/lt,h=Math.max(r,a,s),f=Math.min(r,a,s),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===r?(a-s)/p+(a<s?6:0):h===a?(s-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Od=function(e){var t=[],n=[],i=-1;return e.split(Zi).forEach(function(r){var a=r.match(cs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},sf=function(e,t,n){var i="",r=(e+i).match(Zi),a=t?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Fd(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Od(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Zi,"1").split(cs),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Zi),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},Zi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Qs)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),Py=/hsl[a]?\(/,Nd=function(e){var t=e.join(" "),n;if(Zi.lastIndex=0,Zi.test(t))return n=Py.test(t),e[1]=sf(e[1],n),e[0]=sf(e[0],n,Od(e[1])),!0},xa,Cn=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,h,f,p,g=function d(m){var x=o()-i,b=m===!0,v,M,y,w;if(x>e&&(n+=x-t),i+=x,y=i-n,v=y-a,(v>0||b)&&(w=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,a+=v+(v>=r?4:r-v),M=1),b||(l=c(d)),M)for(p=0;p<s.length;p++)s[p](y,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){dd&&(!pc&&eu()&&(kn=pc=window,tu=kn.document||{},In.gsap=gn,(kn.gsapVersions||(kn.gsapVersions=[])).push(gn.version),pd(Lo||kn.GreenSockGlobals||!kn.gsap&&kn||{}),u=kn.requestAnimationFrame,Rd.forEach(Id)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},xa=1,g(2))},sleep:function(){(u?kn.cancelAnimationFrame:clearTimeout)(l),xa=0,c=ga},lagSmoothing:function(m,x){e=m||1/0,t=Math.min(x||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,x,b){var v=x?function(M,y,w,E){m(M,y,w,E),h.remove(v)}:m;return h.remove(m),s[b?"unshift":"push"](v),Ls(),v},remove:function(m,x){~(x=s.indexOf(m))&&s.splice(x,1)&&p>=x&&p--},_listeners:s},h}(),Ls=function(){return!xa&&Cn.wake()},it={},Dy=/^[\d.\-M][\d.\-,\s]/,Ry=/["']/g,Iy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(Ry,"").trim():+c,i=l.substr(s+1).trim();return t},Fy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Oy=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Iy(t[1])]:Fy(e).split(",").map(vd)):it._CE&&Dy.test(e)?it._CE("",e):n},zd=function(e){return function(t){return 1-e(1-t)}},kd=function o(e,t){for(var n=e._first,i;n;)n instanceof on?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},wr=function(e,t){return e&&(vt(e)?e:it[e]||Oy(e))||t},Ur=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return pn(e,function(s){it[s]=In[s]=r,it[a=s.toLowerCase()]=n;for(var l in r)it[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[s+"."+l]=r[l]}),r},Ud=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Gl=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/fc*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*cy((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:Ud(s);return r=fc/r,l.config=function(c,u){return o(e,c,u)},l},Vl=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Ud(n);return i.config=function(r){return o(e,r)},i};pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Ur(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Ur("Elastic",Gl("in"),Gl("out"),Gl());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};Ur("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ur("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Ur("Circ",function(o){return-(ld(1-o*o)-1)});Ur("Sine",function(o){return o===1?1:-ly(o*ay)+1});Ur("Back",Vl("in"),Vl("out"),Vl());it.SteppedEase=it.steps=In.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ct;return function(s){return((i*La(0,a,s)|0)+r)*n}}};Es.ease=it["quad.out"];pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return ru+=o+","+o+"Params,"});var Bd=function(e,t){this.id=oy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_d,this.set=t?t.getSetter:cu},va=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cs(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),xa||Cn.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Cs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ls(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(jo(this,n),!r._dp||r.parent||bd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+tf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+tf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?As(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Io(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(La(-Math.abs(this._delay),this._tDur,i),!0),Yo(this),gy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ls(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ai(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Io(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=fy);var i=Kt;return Kt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Kt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,nf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(zn(this,n),dn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,dn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ct)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=vt(n)?n:yd,s=function(){var c=i.then;i.then=null,vt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){Js(this)},o}();qn(va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var on=function(o){od(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=dn(n.sortChildren),mt&&ai(n.parent||mt,bi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Sd(bi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return ra(0,arguments,this),this},t.from=function(i,r,a){return ra(1,arguments,this),this},t.fromTo=function(i,r,a,s){return ra(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,ia(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Et(i,r,zn(this,a),1),this},t.call=function(i,r,a){return ai(this,Et.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Et(i,a,zn(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,ia(a).immediateRender=dn(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,h){return s.startAt=a,ia(s).immediateRender=dn(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Vt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,d,m,x,b,v,M,y,w,E;if(this!==mt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,M=this._start,v=this._ts,x=!v,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=Vt(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),y=As(this._tTime,m),!s&&this._tTime&&y!==d&&this._tTime-y*m-this._dur<=0&&(y=d),w&&d&1&&(f=c-f,E=1),d!==y&&!this._lock){var _=w&&y&1,S=_===(w&&d&1);if(d<y&&(_=!_),s=_?0:c,this._lock=1,this.render(s||(E?0:Vt(d*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),s&&s!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,s=_?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;kd(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=yy(this,Vt(s),Vt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&!d&&(Hn(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,a),f!==this._time||!this._ts&&!x){b=0,g&&(u+=this._zTime=-ct);break}}p=g}else{p=this._last;for(var C=i<0?i:f;p;){if(g=p._prev,(p._act||C<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(C-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(C-p._start)*p._ts,r,a||Kt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!x){b=0,g&&(u+=this._zTime=C?-ct:ct);break}}p=g}}if(b&&!r&&(this.pause(),b.render(f>=s?0:-ct)._zTime=f>=s?1:-1,this._ts))return this._start=M,Yo(this),this.render(i,r,a);this._onUpdate&&!r&&Hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&tr(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Hn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Ri(r)||(r=zn(this,r,i)),!(i instanceof va)){if(Jt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(zt(i))return this.addLabel(i,r);if(vt(i))i=Et.delayedCall(0,i);else return this}return this!==i?ai(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Gn);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Et?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return zt(i)?this.removeLabel(i):vt(i)?this.killTweensOf(i):(qo(this,i),i===this._recent&&(this._recent=this._last),Sr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(Cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=zn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=Et.delayedCall(0,r||ga,a);return s.data="isPause",this._hasPause=1,ai(this,s,zn(this,i))},t.removePause=function(i){var r=this._first;for(i=zn(this,i);r;)r._start===i&&r.data==="isPause"&&tr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Hi!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=Vn(i),l=this._first,c=Ri(r),u;l;)l instanceof Et?dy(l._targets,s)&&(c?(!Hi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=zn(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Et.to(a,qn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Cs(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,qn({startAt:{time:zn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),rf(this,zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),rf(this,zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Sr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Sr(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=Gn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,ai(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;Cs(a,a===mt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(mt._ts&&(xd(mt,Io(i,mt)),gd=Cn.frame),Cn.frame>=Qh){Qh+=Rn.autoSleep||120;var r=mt._first;if((!r||!r._ts)&&Rn.autoSleep&&Cn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Cn.sleep()}}},e}(va);qn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ny=function(e,t,n,i,r,a,s){var l=new mn(this._pt,e,t,0,1,qd,null,r),c=0,u=0,h,f,p,g,d,m,x,b;for(l.b=n,l.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=_a(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),f=n.match(kl)||[];h=kl.exec(i);)g=h[0],d=i.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?ms(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=kl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(hd.test(i)||x)&&(l.e=0),this._pt=l,l},au=function(e,t,n,i,r,a,s,l,c,u){vt(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:vt(h)?c?e[t.indexOf("set")||!vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=vt(h)?c?Gy:Wd:lu,g;if(zt(i)&&(~i.indexOf("random(")&&(i=_a(i)),i.charAt(1)==="="&&(g=ms(f,i)+($t(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Mc)return!isNaN(f*i)&&i!==""?(g=new mn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Hy:Xd,0,p),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!h&&!(t in e)&&nu(t,i),Ny.call(this,e,t,f,i,p,l||Rn.stringFilter,c))},zy=function(e,t,n,i,r){if(vt(e)&&(e=sa(e,r,t,n,i)),!pi(e)||e.style&&e.nodeType||Jt(e)||cd(e))return zt(e)?sa(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=sa(e[s],r,t,n,i);return a},Gd=function(e,t,n,i,r,a){var s,l,c,u;if(En[e]&&(s=new En[e]).init(r,s.rawVars?t[e]:zy(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new mn(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==us))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Hi,Mc,ou=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,g=i.keyframes,d=i.autoRevert,m=e._dur,x=e._startAt,b=e._targets,v=e.parent,M=v&&v.data==="nested"?v.vars.targets:b,y=e._overwrite==="auto"&&!Jc,w=e.timeline,E,_,S,C,F,V,O,I,B,J,H,G,Q;if(w&&(!g||!r)&&(r="none"),e._ease=wr(r,Es.ease),e._yEase=p?zd(wr(p===!0?r:p,Es.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!w&&!!i.runBackwards,!w||g&&!i.stagger){if(I=b[0]?br(b[0]).harness:0,G=I&&i[I.prop],E=Ro(i,iu),x&&(x._zTime<0&&x.progress(1),t<0&&f&&s&&!d?x.render(-1,!0):x.revert(f&&m?xo:hy),x._lazy=0),a){if(tr(e._startAt=Et.set(b,qn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!x&&dn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!s&&!d)&&e._startAt.revert(xo),s&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!x){if(t&&(s=!1),S=qn({overwrite:!1,data:"isFromStart",lazy:s&&!x&&dn(l),immediateRender:s,stagger:0,parent:v},E),G&&(S[I.prop]=G),tr(e._startAt=Et.set(b,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(xo):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&dn(l)||l&&!m,_=0;_<b.length;_++){if(F=b[_],O=F._gsap||su(b)[_]._gsap,e._ptLookup[_]=J={},mc[O.id]&&$i.length&&Do(),H=M===b?_:M.indexOf(F),I&&(B=new I).init(F,G||E,e,H,M)!==!1&&(e._pt=C=new mn(e._pt,F,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(L){J[L]=C}),B.priority&&(V=1)),!I||G)for(S in E)En[S]&&(B=Gd(S,E,e,H,F,M))?B.priority&&(V=1):J[S]=C=au.call(e,F,S,"get",E[S],H,M,0,i.stringFilter);e._op&&e._op[_]&&e.kill(F,e._op[_]),y&&e._pt&&(Hi=e,mt.killTweensOf(F,J,e.globalTime(t)),Q=!e.parent,Hi=0),e._pt&&l&&(mc[O.id]=1)}V&&Yd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,g&&t<=0&&w.render(Gn,!0,!0)},ky=function(e,t,n,i,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Mc=1,e.vars[t]="+=0",ou(e,s),Mc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Mt(n)+$t(u.e)),u.b&&(u.b=c.s+$t(u.b))},Uy=function(e,t){var n=e[0]?br(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=Fr({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},By=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(Jt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},sa=function(e,t,n,i,r){return vt(e)?e.call(t,n,i,r):zt(e)&&~e.indexOf("random(")?_a(e):e},Vd=ru+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hd={};pn(Vd+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Hd[o]=1});var Et=function(o){od(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:ia(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,x=l.yoyoEase,b=i.parent||mt,v=(Jt(n)||cd(n)?Ri(n[0]):"length"in i)?[n]:Vn(n),M,y,w,E,_,S,C,F;if(s._targets=v.length?su(v):Po("GSAP target "+n+" not found. https://greensock.com",!Rn.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=p,g||f||to(c)||to(u)){if(i=s.vars,M=s.timeline=new on({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:v}),M.kill(),M.parent=M._dp=bi(s),M._start=0,f||to(c)||to(u)){if(E=v.length,C=f&&Ad(f),pi(f))for(_ in f)~Vd.indexOf(_)&&(F||(F={}),F[_]=f[_]);for(y=0;y<E;y++)w=Ro(i,Hd),w.stagger=0,x&&(w.yoyoEase=x),F&&Fr(w,F),S=v[y],w.duration=+sa(c,bi(s),y,S,v),w.delay=(+sa(u,bi(s),y,S,v)||0)-s._delay,!f&&E===1&&w.delay&&(s._delay=u=w.delay,s._start+=u,w.delay=0),M.to(S,w,C?C(y,S,v):0),M._ease=it.none;M.duration()?c=u=0:s.timeline=0}else if(g){ia(qn(M.vars.defaults,{ease:"none"})),M._ease=wr(g.ease||i.ease||"none");var V=0,O,I,B;if(Jt(g))g.forEach(function(J){return M.to(v,J,">")}),M.duration();else{w={};for(_ in g)_==="ease"||_==="easeEach"||By(_,g[_],w,g.easeEach);for(_ in w)for(O=w[_].sort(function(J,H){return J.t-H.t}),V=0,y=0;y<O.length;y++)I=O[y],B={ease:I.e,duration:(I.t-(y?O[y-1].t:0))/100*c},B[_]=I.v,M.to(v,B,V),V+=B.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||s.duration(c=M.duration())}else s.timeline=0;return p===!0&&!Jc&&(Hi=bi(s),mt.killTweensOf(v),Hi=0),ai(b,bi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!g&&s._start===Vt(b._time)&&dn(h)&&_y(bi(s))&&b.data!=="nested")&&(s._tTime=-ct,s.render(Math.max(0,-u)||0)),m&&Sd(bi(s),m),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ct&&!u?l:i<ct?0:i,f,p,g,d,m,x,b,v,M;if(!c)vy(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(f=Vt(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),x=this._yoyo&&g&1,x&&(M=this._yEase,f=c-f),m=As(this._tTime,d),f===s&&!a&&this._initted)return this._tTime=h,this;g!==m&&(v&&this._yEase&&kd(v,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=a=1,this.render(Vt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(wd(this,u?i:f,a,r,h))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(M||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!s&&!r&&!g&&(Hn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;v&&v.render(i<0?i:!f&&x?-ct:v._dur*v._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&gc(this,i,r,a),Hn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Hn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&gc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&tr(this,1),!r&&!(u&&!s)&&(h||s||x)&&(Hn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s){xa||Cn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ou(this,l),c=this._ease(l/this._dur),ky(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(jo(this,0),this.parent||Md(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Js(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Hi&&Hi.vars.overwrite!==!0)._first||Js(this),this.parent&&a!==this.timeline.totalDuration()&&Cs(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Vn(i):s,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,x;if((!r||r==="all")&&my(s,l))return r==="all"&&(this._pt=0),Js(this);for(h=this._op=this._op||[],r!=="all"&&(zt(r)&&(d={},pn(r,function(b){return d[b]=1}),r=d),r=Uy(s,r)),x=s.length;x--;)if(~l.indexOf(s[x])){f=c[x],r==="all"?(h[x]=r,g=f,p={}):(p=h[x]=h[x]||{},g=r);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&qo(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Js(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ra(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return ra(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return mt.killTweensOf(i,r,a)},e}(va);qn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pn("staggerTo,staggerFrom,staggerFromTo",function(o){Et[o]=function(){var e=new on,t=xc.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var lu=function(e,t,n){return e[t]=n},Wd=function(e,t,n){return e[t](n)},Gy=function(e,t,n,i){return e[t](i.fp,n)},Vy=function(e,t,n){return e.setAttribute(t,n)},cu=function(e,t){return vt(e[t])?Wd:Qc(e[t])&&e.setAttribute?Vy:lu},Xd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Hy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},uu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Wy=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Xy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?qo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},qy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yd=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},mn=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||Xd,this.d=l||this,this.set=c||lu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=qy,this.m=n,this.mt=r,this.tween=i},o}();pn(ru+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return iu[o]=1});In.TweenMax=In.TweenLite=Et;In.TimelineLite=In.TimelineMax=on;mt=new on({sortChildren:!1,defaults:Es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=Nd;var Tr=[],yo={},Yy=[],af=0,jy=0,Hl=function(e){return(yo[e]||Yy).map(function(t){return t()})},bc=function(){var e=Date.now(),t=[];e-af>2&&(Hl("matchMediaInit"),Tr.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=kn.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Hl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),af=e,Hl("matchMedia"))},jd=function(){function o(t,n){this.selector=n&&vc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=jy++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){vt(n)&&(r=i,i=n,n=vt);var a=this,s=function(){var c=xt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=vc(r)),xt=a,h=i.apply(a,arguments),vt(h)&&a._r.push(h),xt=c,a.selector=u,a.isReverted=!1,h};return a.last=s,n===vt?s(a):n?a[n]=s:s},e.ignore=function(n){var i=xt;xt=null,n(this),xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return l instanceof on?l.data!=="nested"&&l.kill():!(l instanceof Et)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var s=Tr.length;s--;)Tr[s].id===this.id&&Tr.splice(s,1)},e.revert=function(n){this.kill(n||{})},o}(),$y=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){pi(n)||(n={matches:n});var a=new jd(0,r||this.scope),s=a.conditions={},l,c,u;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=kn.matchMedia(n[c]),l&&(Tr.indexOf(a)<0&&Tr.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(bc):l.addEventListener("change",bc)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Fo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Id(i)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){zt(e)&&(e=Vn(e)[0]);var r=br(e||{}).get,a=n?yd:vd;return n==="native"&&(n=""),e&&(t?a((En[t]&&En[t].get||r)(e,t,n,i)):function(s,l,c){return a((En[s]&&En[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=Vn(e),e.length>1){var i=e.map(function(u){return gn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=En[t],s=br(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;us._pt=0,h.init(e,n?u+n:u,us,0,[e]),h.render(1,h),us._pt&&uu(1,us)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=gn.to(e,Fr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wr(e.ease,Es.ease)),ef(Es,e||{})},config:function(e){return ef(Rn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!En[s]&&!In[s]&&Po(t+" effect requires "+s+" plugin.")}),Ul[t]=function(s,l,c){return n(Vn(s),qn(l||{},r),c)},a&&(on.prototype[t]=function(s,l,c){return this.add(Ul[t](s,pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=wr(t)},parseEase:function(e,t){return arguments.length?wr(e,t):it},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new on(e),i,r;for(n.smoothChildTiming=dn(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&ai(n,i,i._start-i._delay),i=r;return ai(mt,n,0),n},context:function(e,t){return e?new jd(e,t):xt},matchMedia:function(e){return new $y(e)},matchMediaRefresh:function(){return Tr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bc()},addEventListener:function(e,t){var n=yo[e]||(yo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=yo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ay,wrapYoyo:Cy,distribute:Ad,random:Ld,snap:Cd,normalize:Ey,getUnit:$t,clamp:by,splitColor:Fd,toArray:Vn,selector:vc,mapRange:Dd,pipe:wy,unitize:Ty,interpolate:Ly,shuffle:Ed},install:pd,effects:Ul,ticker:Cn,updateRoot:on.updateRoot,plugins:En,globalTimeline:mt,core:{PropTween:mn,globals:md,Tween:Et,Timeline:on,Animation:va,getCache:br,_removeLinkedListItem:qo,reverting:function(){return Kt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return Jc=e}}};pn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Fo[o]=Et[o]});Cn.add(on.updateRoot);us=Fo.to({},{duration:0});var Zy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ky=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Zy(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Wl=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(zt(r)&&(l={},pn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Ky(s,r)}}}},gn=Fo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Wl("roundProps",yc),Wl("modifiers"),Wl("snap",Cd))||Fo;Et.version=on.version=gn.version="3.12.1";dd=1;eu()&&Ls();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var of,Wi,gs,hu,xr,lf,fu,Jy=function(){return typeof window<"u"},Ii={},fr=180/Math.PI,_s=Math.PI/180,ns=Math.atan2,cf=1e8,du=/([A-Z])/g,Qy=/(left|right|width|margin|padding|x)/i,eM=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$d=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},rM=function(e,t,n){return e.style[t]=n},sM=function(e,t,n){return e.style.setProperty(t,n)},aM=function(e,t,n){return e._gsap[t]=n},oM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},lM=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},cM=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},gt="transform",Qn=gt+"Origin",uM=function o(e,t){var n=this,i=this.target,r=i.style;if(e in Ii&&r){if(this.tfm=this.tfm||{},e!=="transform")e=li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Si(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Si(i,e);else return li.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(gt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,t,"")),e=gt}(r||t)&&this.props.push(e,t,r[e])},Kd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(du,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=fu(),(!r||!r.isStart)&&!n[gt]&&(Kd(n),i.uncache=1)}},Jd=function(e,t){var n={target:e,props:[],revert:hM,save:uM};return e._gsap||gn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Qd,wc=function(e,t){var n=Wi.createElementNS?Wi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wi.createElement(e);return n.style?n:Wi.createElement(e)},hi=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(du,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Ps(t)||t,1)||""},uf="O,Moz,ms,Ms,Webkit".split(","),Ps=function(e,t,n){var i=t||xr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(uf[a]+e in r););return a<0?null:(a===3?"ms":a>=0?uf[a]:"")+e},Tc=function(){Jy()&&window.document&&(of=window,Wi=of.document,gs=Wi.documentElement,xr=wc("div")||{style:{}},wc("div"),gt=Ps(gt),Qn=gt+"Origin",xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qd=!!Ps("perspective"),fu=gn.core.reverting,hu=1)},Xl=function o(e){var t=wc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(gs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),gs.removeChild(t),this.style.cssText=r,a},hf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ep=function(e){var t;try{t=e.getBBox()}catch{t=Xl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Xl||(t=Xl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+hf(e,["x","cx","x1"])||0,y:+hf(e,["y","cy","y1"])||0,width:0,height:0}:t},tp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ep(e))},ya=function(e,t){if(t){var n=e.style;t in Ii&&t!==Qn&&(t=gt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(du,"-$1").toLowerCase())):n.removeAttribute(t)}},Xi=function(e,t,n,i,r,a){var s=new mn(e._pt,t,n,0,1,a?Zd:$d);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},ff={deg:1,rad:1,turn:1},fM={grid:1,flex:1},nr=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=xr.style,l=Qy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,d,m,x;return i===a||!r||ff[i]||ff[a]?r:(a!=="px"&&!f&&(r=o(e,t,n,"px")),x=e.getCTM&&tp(e),(p||a==="%")&&(Ii[t]||~t.indexOf("adius"))?(g=x?e.getBBox()[l?"width":"height"]:e[u],Mt(p?r/g*h:r/100*g)):(s[l?"width":"height"]=h+(f?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,x&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Wi||!d.appendChild)&&(d=Wi.body),m=d._gsap,m&&p&&m.width&&l&&m.time===Cn.time&&!m.uncache?Mt(r/m.width*h):((p||a==="%")&&!fM[hi(d,"display")]&&(s.position=hi(e,"position")),d===e&&(s.position="static"),d.appendChild(xr),g=xr[u],d.removeChild(xr),s.position="absolute",l&&p&&(m=br(d),m.time=Cn.time,m.width=d[u]),Mt(f?g*r/h:g&&r?h/g*r:0))))},Si=function(e,t,n,i){var r;return hu||Tc(),t in li&&t!=="transform"&&(t=li[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ii[t]&&t!=="transform"?(r=ba(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:No(hi(e,Qn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Oo[t]&&Oo[t](e,t,n)||hi(e,t)||_d(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?nr(e,t,r,n)+n:r},dM=function(e,t,n,i){if(!n||n==="none"){var r=Ps(t,e,1),a=r&&hi(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var s=new mn(this._pt,e.style,t,0,1,qd),l=0,c=0,u,h,f,p,g,d,m,x,b,v,M,y;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=hi(e,t)||i,e.style[t]=n),u=[n,i],Nd(u),n=u[0],i=u[1],f=n.match(cs)||[],y=i.match(cs)||[],y.length){for(;h=cs.exec(i);)m=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,M=d.substr((p+"").length),m.charAt(1)==="="&&(m=ms(p,m)+M),x=parseFloat(m),v=m.substr((x+"").length),l=cs.lastIndex-v.length,v||(v=v||Rn.units[t]||M,l===i.length&&(i+=v,s.e+=v)),M!==v&&(p=nr(e,t,d,v)||0),s._pt={_next:s._pt,p:b||c===1?b:",",s:p,c:x-p,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?Zd:$d;return hd.test(i)&&(s.e=0),this._pt=s,s},df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=df[n]||n,t[1]=df[i]||i,t.join(" ")},mM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Ii[s]&&(l=1,s=s==="transformOrigin"?Qn:gt),ya(n,s);l&&(ya(n,gt),a&&(a.svg&&n.removeAttribute("transform"),ba(n,1),a.uncache=1,Kd(i)))}},Oo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new mn(e._pt,t,n,0,0,mM);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Ma=[1,0,0,1,0,0],np={},ip=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pf=function(e){var t=hi(e,gt);return ip(t)?Ma:t.substr(7).match(ud).map(Mt)},pu=function(e,t){var n=e._gsap||br(e),i=e.style,r=pf(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ma:r):(r===Ma&&!e.offsetParent&&e!==gs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,s=e.nextElementSibling,gs.appendChild(e)),r=pf(e),l?i.display=l:ya(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):gs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ec=function(e,t,n,i,r,a){var s=e._gsap,l=r||pu(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],x=l[4],b=l[5],v=t.split(" "),M=parseFloat(v[0])||0,y=parseFloat(v[1])||0,w,E,_,S;n?l!==Ma&&(E=p*m-g*d)&&(_=M*(m/E)+y*(-d/E)+(d*b-m*x)/E,S=M*(-g/E)+y*(p/E)-(p*b-g*x)/E,M=_,y=S):(w=ep(e),M=w.x+(~v[0].indexOf("%")?M/100*w.width:M),y=w.y+(~(v[1]||v[0]).indexOf("%")?y/100*w.height:y)),i||i!==!1&&s.smooth?(x=M-c,b=y-u,s.xOffset=h+(x*p+b*d)-x,s.yOffset=f+(x*g+b*m)-b):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=y,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[Qn]="0px 0px",a&&(Xi(a,s,"xOrigin",c,M),Xi(a,s,"yOrigin",u,y),Xi(a,s,"xOffset",h,s.xOffset),Xi(a,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",M+" "+y)},ba=function(e,t){var n=e._gsap||new Bd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=hi(e,Qn)||"0",u,h,f,p,g,d,m,x,b,v,M,y,w,E,_,S,C,F,V,O,I,B,J,H,G,Q,L,W,Y,re,ee,se;return u=h=f=d=m=x=b=v=M=0,p=g=1,n.svg=!!(e.getCTM&&tp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),E=pu(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Ec(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,E)),y=n.xOrigin||0,w=n.yOrigin||0,E!==Ma&&(F=E[0],V=E[1],O=E[2],I=E[3],u=B=E[4],h=J=E[5],E.length===6?(p=Math.sqrt(F*F+V*V),g=Math.sqrt(I*I+O*O),d=F||V?ns(V,F)*fr:0,b=O||I?ns(O,I)*fr+d:0,b&&(g*=Math.abs(Math.cos(b*_s))),n.svg&&(u-=y-(y*F+w*O),h-=w-(y*V+w*I))):(se=E[6],re=E[7],L=E[8],W=E[9],Y=E[10],ee=E[11],u=E[12],h=E[13],f=E[14],_=ns(se,Y),m=_*fr,_&&(S=Math.cos(-_),C=Math.sin(-_),H=B*S+L*C,G=J*S+W*C,Q=se*S+Y*C,L=B*-C+L*S,W=J*-C+W*S,Y=se*-C+Y*S,ee=re*-C+ee*S,B=H,J=G,se=Q),_=ns(-O,Y),x=_*fr,_&&(S=Math.cos(-_),C=Math.sin(-_),H=F*S-L*C,G=V*S-W*C,Q=O*S-Y*C,ee=I*C+ee*S,F=H,V=G,O=Q),_=ns(V,F),d=_*fr,_&&(S=Math.cos(_),C=Math.sin(_),H=F*S+V*C,G=B*S+J*C,V=V*S-F*C,J=J*S-B*C,F=H,B=G),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,x=180-x),p=Mt(Math.sqrt(F*F+V*V+O*O)),g=Mt(Math.sqrt(J*J+se*se)),_=ns(B,J),b=Math.abs(_)>2e-4?_*fr:0,M=ee?1/(ee<0?-ee:ee):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ip(hi(e,gt)),H&&e.setAttribute("transform",H))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(p*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Mt(p),n.scaleY=Mt(g),n.rotation=Mt(d)+s,n.rotationX=Mt(m)+s,n.rotationY=Mt(x)+s,n.skewX=b+s,n.skewY=v+s,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Qn]=No(c)),n.xOffset=n.yOffset=0,n.force3D=Rn.force3D,n.renderTransform=n.svg?_M:Qd?rp:gM,n.uncache=0,n},No=function(e){return(e=e.split(" "))[0]+" "+e[1]},ql=function(e,t,n){var i=$t(t);return Mt(parseFloat(t)+parseFloat(nr(e,"x",n+"px",i)))+i},gM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rp(e,t)},lr="0deg",Xs="0px",cr=") ",rp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,x=n.force3D,b=n.target,v=n.zOrigin,M="",y=x==="auto"&&e&&e!==1||x===!0;if(v&&(h!==lr||u!==lr)){var w=parseFloat(u)*_s,E=Math.sin(w),_=Math.cos(w),S;w=parseFloat(h)*_s,S=Math.cos(w),a=ql(b,a,E*S*-v),s=ql(b,s,-Math.sin(w)*-v),l=ql(b,l,_*S*-v+v)}m!==Xs&&(M+="perspective("+m+cr),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(y||a!==Xs||s!==Xs||l!==Xs)&&(M+=l!==Xs||y?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+cr),c!==lr&&(M+="rotate("+c+cr),u!==lr&&(M+="rotateY("+u+cr),h!==lr&&(M+="rotateX("+h+cr),(f!==lr||p!==lr)&&(M+="skew("+f+", "+p+cr),(g!==1||d!==1)&&(M+="scale("+g+", "+d+cr),b.style[gt]=M||"translate(0, 0)"},_M=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,x=n.yOffset,b=n.forceCSS,v=parseFloat(a),M=parseFloat(s),y,w,E,_,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_s,c*=_s,y=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-f,_=Math.cos(l-c)*f,c&&(u*=_s,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,_*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),y*=S,w*=S)),y=Mt(y),w=Mt(w),E=Mt(E),_=Mt(_)):(y=h,_=f,w=E=0),(v&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(v=nr(p,"x",a,"px"),M=nr(p,"y",s,"px")),(g||d||m||x)&&(v=Mt(v+g-(g*y+d*E)+m),M=Mt(M+d-(g*w+d*_)+x)),(i||r)&&(S=p.getBBox(),v=Mt(v+i/100*S.width),M=Mt(M+r/100*S.height)),S="matrix("+y+","+w+","+E+","+_+","+v+","+M+")",p.setAttribute("transform",S),b&&(p.style[gt]=S)},xM=function(e,t,n,i,r){var a=360,s=zt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?fr:1),c=l-i,u=i+c+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*cf)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*cf)%a-~~(c/a)*a)),e._pt=f=new mn(e._pt,t,n,i,c,tM),f.e=u,f.u="deg",e._props.push(n),f},mf=function(e,t){for(var n in t)e[n]=t[n];return e},vM=function(e,t,n){var i=mf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gt]=t,s=ba(n,1),ya(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],a[gt]=t,s=ba(n,1),a[gt]=c);for(l in Ii)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(p=$t(c),g=$t(u),h=p!==g?nr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new mn(e._pt,s,l,h,f-h,Sc),e._pt.u=g||0,e._props.push(l));mf(s,i)};pn("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});Oo[e>1?"border"+o:o]=function(s,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return Si(s,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(l,p,h)}});var sp={name:"css",register:Tc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,x,b,v,M,y,w,E,_;hu||Tc(),this.styles=this.styles||Jd(e),_=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(En[d]&&Gd(d,t,n,i,e,r)))){if(p=typeof u,g=Oo[d],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=_a(u)),g)g(this,e,d,u,n)&&(E=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Zi.lastIndex=0,Zi.test(c)||(m=$t(c),x=$t(u)),x?m!==x&&(c=nr(e,d,c,x)+x):m&&(u+=m),this.add(s,"setProperty",c,u,i,r,0,0,d),a.push(d),_.push(d,0,s[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],zt(c)&&~c.indexOf("random(")&&(c=_a(c)),$t(c+"")||(c+=Rn.units[d]||$t(Si(e,d))||""),(c+"").charAt(1)==="="&&(c=Si(e,d))):c=Si(e,d),f=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),d in li&&(d==="autoAlpha"&&(f===1&&Si(e,"visibility")==="hidden"&&h&&(f=0),_.push("visibility",0,s.visibility),Xi(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=li[d],~d.indexOf(",")&&(d=d.split(",")[0]))),v=d in Ii,v){if(this.styles.save(d),M||(y=e._gsap,y.renderTransform&&!t.parseTransform||ba(e,t.parseTransform),w=t.smoothOrigin!==!1&&y.smooth,M=this._pt=new mn(this._pt,s,gt,0,1,y.renderTransform,y,0,-1),M.dep=1),d==="scale")this._pt=new mn(this._pt,y,"scaleY",y.scaleY,(b?ms(y.scaleY,b+h):h)-y.scaleY||0,Sc),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){_.push(Qn,0,s[Qn]),u=pM(u),y.svg?Ec(e,u,0,w,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==y.zOrigin&&Xi(this,y,"zOrigin",y.zOrigin,x),Xi(this,s,d,No(c),No(u)));continue}else if(d==="svgOrigin"){Ec(e,u,1,w,0,this);continue}else if(d in np){xM(this,y,d,f,b?ms(f,b+u):u);continue}else if(d==="smoothOrigin"){Xi(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){vM(this,u,e);continue}}else d in s||(d=Ps(d)||d);if(v||(h||h===0)&&(f||f===0)&&!eM.test(u)&&d in s)m=(c+"").substr((f+"").length),h||(h=0),x=$t(u)||(d in Rn.units?Rn.units[d]:m),m!==x&&(f=nr(e,d,c,x)),this._pt=new mn(this._pt,v?y:s,d,f,(b?ms(f,b+h):h)-f,!v&&(x==="px"||d==="zIndex")&&t.autoRound!==!1?iM:Sc),this._pt.u=x||0,m!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=nM);else if(d in s)dM.call(this,e,d,c,b?b+u:u);else if(d in e)this.add(e,d,c||e[d],b?b+u:u,i,r);else if(d!=="parseTransform"){nu(d,u);continue}v||(d in s?_.push(d,0,s[d]):_.push(d,1,c||e[d])),a.push(d)}}E&&Yd(this)},render:function(e,t){if(t.tween._time||!fu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Si,aliases:li,getSetter:function(e,t,n){var i=li[t];return i&&i.indexOf(",")<0&&(t=i),t in Ii&&t!==Qn&&(e._gsap.x||Si(e,"x"))?n&&lf===n?t==="scale"?oM:aM:(lf=n||{})&&(t==="scale"?lM:cM):e.style&&!Qc(e.style[t])?rM:~t.indexOf("-")?sM:cu(e,t)},core:{_removeProperty:ya,_getMatrix:pu}};gn.utils.checkPrefix=Ps;gn.core.getStyleSaver=Jd;(function(o,e,t,n){var i=pn(o+","+e+","+t,function(r){Ii[r]=1});pn(e,function(r){Rn.units[r]="deg",np[r]=1}),li[i[13]]=o+","+e,pn(n,function(r){var a=r.split(":");li[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Rn.units[o]="px"});gn.registerPlugin(sp);var Ot=gn.registerPlugin(sp)||gn,ni=Ot.core.Tween;function gf(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function yM(o,e,t){return e&&gf(o.prototype,e),t&&gf(o,t),o}/*!
 * Observer 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ht,Ac,Ln,qi,Yi,xs,ap,dr,aa,op,Ci,Zn,lp,cp=function(){return Ht||typeof window<"u"&&(Ht=window.gsap)&&Ht.registerPlugin&&Ht},up=1,hs=[],Ke=[],fi=[],oa=Date.now,Cc=function(e,t){return t},MM=function(){var e=aa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ke),i.push.apply(i,fi),Ke=n,fi=i,Cc=function(a,s){return t[a](s)}},Ki=function(e,t){return~fi.indexOf(e)&&fi[fi.indexOf(e)+1][t]},la=function(e){return!!~op.indexOf(e)},hn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},no="scrollLeft",io="scrollTop",Lc=function(){return Ci&&Ci.isPressed||Ke.cache++},zo=function(e,t){var n=function i(r){if(r||r===0){up&&(Ln.history.scrollRestoration="manual");var a=Ci&&Ci.isPressed;r=i.v=Math.round(r)||(Ci&&Ci.iOS?1:0),e(r),i.cacheID=Ke.cache,a&&Cc("ss",r)}else(t||Ke.cache!==i.cacheID||Cc("ref"))&&(i.cacheID=Ke.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},ln={s:no,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zo(function(o){return arguments.length?Ln.scrollTo(o,Lt.sc()):Ln.pageXOffset||qi[no]||Yi[no]||xs[no]||0})},Lt={s:io,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ln,sc:zo(function(o){return arguments.length?Ln.scrollTo(ln.sc(),o):Ln.pageYOffset||qi[io]||Yi[io]||xs[io]||0})},fn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ht.utils.toArray)(e)[0]||(typeof e=="string"&&Ht.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ir=function(e,t){var n=t.s,i=t.sc;la(e)&&(e=qi.scrollingElement||Yi);var r=Ke.indexOf(e),a=i===Lt.sc?1:2;!~r&&(r=Ke.push(e)-1),Ke[r+a]||e.addEventListener("scroll",Lc);var s=Ke[r+a],l=s||(Ke[r+a]=zo(Ki(e,n),!0)||(la(e)?i:zo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,s||(l.smooth=Ht.getProperty(e,"scrollBehavior")==="smooth"),l},Pc=function(e,t,n){var i=e,r=e,a=oa(),s=a,l=t||50,c=Math.max(500,l*3),u=function(g,d){var m=oa();d||m-a>l?(r=i,i=g,s=a,a=m):n?i+=g:i=r+(g-r)/(m-s)*(a-s)},h=function(){r=i=n?0:i,s=a=0},f=function(g){var d=s,m=r,x=oa();return(g||g===0)&&g!==i&&u(g),a===s||x-s>c?0:(i+(n?m:-m))/((n?x:a)-d)*1e3};return{update:u,reset:h,getVelocity:f}},qs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},_f=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},hp=function(){aa=Ht.core.globals().ScrollTrigger,aa&&aa.core&&MM()},fp=function(e){return Ht=e||cp(),Ht&&typeof document<"u"&&document.body&&(Ln=window,qi=document,Yi=qi.documentElement,xs=qi.body,op=[Ln,qi,Yi,xs],Ht.utils.clamp,lp=Ht.core.context||function(){},dr="onpointerenter"in xs?"pointer":"mouse",ap=At.isTouch=Ln.matchMedia&&Ln.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ln||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zn=At.eventTypes=("ontouchstart"in Yi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Yi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return up=0},500),hp(),Ac=1),Ac};ln.op=Lt;Ke.cache=0;var At=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){Ac||fp(Ht)||console.warn("Please gsap.registerPlugin(Observer)"),aa||hp();var i=n.tolerance,r=n.dragMinimum,a=n.type,s=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,d=n.event,m=n.onDragStart,x=n.onDragEnd,b=n.onDrag,v=n.onPress,M=n.onRelease,y=n.onRight,w=n.onLeft,E=n.onUp,_=n.onDown,S=n.onChangeX,C=n.onChangeY,F=n.onChange,V=n.onToggleX,O=n.onToggleY,I=n.onHover,B=n.onHoverEnd,J=n.onMove,H=n.ignoreCheck,G=n.isNormalizer,Q=n.onGestureStart,L=n.onGestureEnd,W=n.onWheel,Y=n.onEnable,re=n.onDisable,ee=n.onClick,se=n.scrollSpeed,j=n.capture,Ee=n.allowClicks,de=n.lockAxis,Me=n.onLockAxis;this.target=s=fn(s)||Yi,this.vars=n,p&&(p=Ht.utils.toArray(p)),i=i||1e-9,r=r||0,g=g||1,se=se||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ln.getComputedStyle(xs).lineHeight)||22);var ge,Ie,Ce,oe,Be,rt,st,X=this,tt=0,Ge=0,bt=ir(s,ln),Je=ir(s,Lt),P=bt(),T=Je(),K=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Zn[0]==="pointerdown",te=la(s),ne=s.ownerDocument||qi,ae=[0,0,0],Te=[0,0,0],D=0,U=function(){return D=oa()},ce=function(pe,Ue){return(X.event=pe)&&p&&~p.indexOf(pe.target)||Ue&&K&&pe.pointerType!=="touch"||H&&H(pe,Ue)},le=function(){X._vx.reset(),X._vy.reset(),Ie.pause(),h&&h(X)},he=function(){var pe=X.deltaX=_f(ae),Ue=X.deltaY=_f(Te),nt=Math.abs(pe)>=i,xe=Math.abs(Ue)>=i;F&&(nt||xe)&&F(X,pe,Ue,ae,Te),nt&&(y&&X.deltaX>0&&y(X),w&&X.deltaX<0&&w(X),S&&S(X),V&&X.deltaX<0!=tt<0&&V(X),tt=X.deltaX,ae[0]=ae[1]=ae[2]=0),xe&&(_&&X.deltaY>0&&_(X),E&&X.deltaY<0&&E(X),C&&C(X),O&&X.deltaY<0!=Ge<0&&O(X),Ge=X.deltaY,Te[0]=Te[1]=Te[2]=0),(oe||Ce)&&(J&&J(X),Ce&&(b(X),Ce=!1),oe=!1),rt&&!(rt=!1)&&Me&&Me(X),Be&&(W(X),Be=!1),ge=0},Se=function(pe,Ue,nt){ae[nt]+=pe,Te[nt]+=Ue,X._vx.update(pe),X._vy.update(Ue),c?ge||(ge=requestAnimationFrame(he)):he()},be=function(pe,Ue){de&&!st&&(X.axis=st=Math.abs(pe)>Math.abs(Ue)?"x":"y",rt=!0),st!=="y"&&(ae[2]+=pe,X._vx.update(pe,!0)),st!=="x"&&(Te[2]+=Ue,X._vy.update(Ue,!0)),c?ge||(ge=requestAnimationFrame(he)):he()},ze=function(pe){if(!ce(pe,1)){pe=qs(pe,u);var Ue=pe.clientX,nt=pe.clientY,xe=Ue-X.x,Qe=nt-X.y,De=X.isDragging;X.x=Ue,X.y=nt,(De||Math.abs(X.startX-Ue)>=r||Math.abs(X.startY-nt)>=r)&&(b&&(Ce=!0),De||(X.isDragging=!0),be(xe,Qe),De||m&&m(X))}},ke=X.onPress=function(Le){ce(Le,1)||Le&&Le.button||(X.axis=st=null,Ie.pause(),X.isPressed=!0,Le=qs(Le),tt=Ge=0,X.startX=X.x=Le.clientX,X.startY=X.y=Le.clientY,X._vx.reset(),X._vy.reset(),hn(G?s:ne,Zn[1],ze,u,!0),X.deltaX=X.deltaY=0,v&&v(X))},$e=X.onRelease=function(Le){if(!ce(Le,1)){en(G?s:ne,Zn[1],ze,!0);var pe=!isNaN(X.y-X.startY),Ue=X.isDragging&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),nt=qs(Le);!Ue&&pe&&(X._vx.reset(),X._vy.reset(),u&&Ee&&Ht.delayedCall(.08,function(){if(oa()-D>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(ne.createEvent){var xe=ne.createEvent("MouseEvents");xe.initMouseEvent("click",!0,!0,Ln,1,nt.screenX,nt.screenY,nt.clientX,nt.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(xe)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,h&&!G&&Ie.restart(!0),x&&Ue&&x(X),M&&M(X,Ue)}},R=function(pe){return pe.touches&&pe.touches.length>1&&(X.isGesturing=!0)&&Q(pe,X.isDragging)},Z=function(){return(X.isGesturing=!1)||L(X)},ie=function(pe){if(!ce(pe)){var Ue=bt(),nt=Je();Se((Ue-P)*se,(nt-T)*se,1),P=Ue,T=nt,h&&Ie.restart(!0)}},ue=function(pe){if(!ce(pe)){pe=qs(pe,u),W&&(Be=!0);var Ue=(pe.deltaMode===1?l:pe.deltaMode===2?Ln.innerHeight:1)*g;Se(pe.deltaX*Ue,pe.deltaY*Ue,0),h&&!G&&Ie.restart(!0)}},ve=function(pe){if(!ce(pe)){var Ue=pe.clientX,nt=pe.clientY,xe=Ue-X.x,Qe=nt-X.y;X.x=Ue,X.y=nt,oe=!0,(xe||Qe)&&be(xe,Qe)}},Xe=function(pe){X.event=pe,I(X)},ht=function(pe){X.event=pe,B(X)},ut=function(pe){return ce(pe)||qs(pe,u)&&ee(X)};Ie=X._dc=Ht.delayedCall(f||.25,le).pause(),X.deltaX=X.deltaY=0,X._vx=Pc(0,50,!0),X._vy=Pc(0,50,!0),X.scrollX=bt,X.scrollY=Je,X.isDragging=X.isGesturing=X.isPressed=!1,lp(this),X.enable=function(Le){return X.isEnabled||(hn(te?ne:s,"scroll",Lc),a.indexOf("scroll")>=0&&hn(te?ne:s,"scroll",ie,u,j),a.indexOf("wheel")>=0&&hn(s,"wheel",ue,u,j),(a.indexOf("touch")>=0&&ap||a.indexOf("pointer")>=0)&&(hn(s,Zn[0],ke,u,j),hn(ne,Zn[2],$e),hn(ne,Zn[3],$e),Ee&&hn(s,"click",U,!1,!0),ee&&hn(s,"click",ut),Q&&hn(ne,"gesturestart",R),L&&hn(ne,"gestureend",Z),I&&hn(s,dr+"enter",Xe),B&&hn(s,dr+"leave",ht),J&&hn(s,dr+"move",ve)),X.isEnabled=!0,Le&&Le.type&&ke(Le),Y&&Y(X)),X},X.disable=function(){X.isEnabled&&(hs.filter(function(Le){return Le!==X&&la(Le.target)}).length||en(te?ne:s,"scroll",Lc),X.isPressed&&(X._vx.reset(),X._vy.reset(),en(G?s:ne,Zn[1],ze,!0)),en(te?ne:s,"scroll",ie,j),en(s,"wheel",ue,j),en(s,Zn[0],ke,j),en(ne,Zn[2],$e),en(ne,Zn[3],$e),en(s,"click",U,!0),en(s,"click",ut),en(ne,"gesturestart",R),en(ne,"gestureend",Z),en(s,dr+"enter",Xe),en(s,dr+"leave",ht),en(s,dr+"move",ve),X.isEnabled=X.isPressed=X.isDragging=!1,re&&re(X))},X.kill=X.revert=function(){X.disable();var Le=hs.indexOf(X);Le>=0&&hs.splice(Le,1),Ci===X&&(Ci=0)},hs.push(X),G&&la(s)&&(Ci=X),X.enable(d)},yM(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();At.version="3.12.1";At.create=function(o){return new At(o)};At.register=fp;At.getAll=function(){return hs.slice()};At.getById=function(o){return hs.filter(function(e){return e.vars.id===o})[0]};cp()&&Ht.registerPlugin(At);/*!
 * ScrollTrigger 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ye,as,et,ft,Kn,pt,dp,ko,Uo,fs,Mo,ro,qt,$o,Dc,nn,xf,vf,os,pp,Yl,mp,Sn,gp,_p,xp,Ui,Rc,mu,jl,so=1,sn=Date.now,$l=sn(),Xn=0,ea=0,yf=function(e,t,n){var i=Tn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Mf=function(e,t){return t&&(!Tn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},bM=function o(){return ea&&requestAnimationFrame(o)},bf=function(){return $o=1},Sf=function(){return $o=0},ri=function(e){return e},ta=function(e){return Math.round(e*1e5)/1e5||0},vp=function(){return typeof window<"u"},yp=function(){return ye||vp()&&(ye=window.gsap)&&ye.registerPlugin&&ye},Or=function(e){return!!~dp.indexOf(e)},Mp=function(e){return Ki(e,"getBoundingClientRect")||(Or(e)?function(){return Ao.width=et.innerWidth,Ao.height=et.innerHeight,Ao}:function(){return Ei(e)})},SM=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Ki(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?et["inner"+r]:e["client"+r])||0}},wM=function(e,t){return!t||~fi.indexOf(e)?Mp(e):function(){return Ao}},Li=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Ki(e,n))?a()-Mp(e)()[r]:Or(e)?(Kn[n]||pt[n])-(et["inner"+i]||Kn["client"+i]||pt["client"+i]):e[n]-e["offset"+i])},ao=function(e,t){for(var n=0;n<os.length;n+=3)(!t||~t.indexOf(os[n+1]))&&e(os[n],os[n+1],os[n+2])},Tn=function(e){return typeof e=="string"},cn=function(e){return typeof e=="function"},bo=function(e){return typeof e=="number"},pr=function(e){return typeof e=="object"},Ys=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Zl=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},is=Math.abs,bp="left",Sp="top",gu="right",_u="bottom",Er="width",Ar="height",ca="Right",ua="Left",ha="Top",fa="Bottom",Tt="padding",Un="margin",Ds="Width",xu="Height",Ut="px",Bn=function(e){return et.getComputedStyle(e)},TM=function(e){var t=Bn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},wf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ei=function(e,t){var n=t&&Bn(e)[Dc]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ic=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},wp=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},EM=function(e){return function(t){return ye.utils.snap(wp(e),t)}},vu=function(e){var t=ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var s;if(!r)return t(i);if(r>0){for(i-=a,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=a;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var s=t(i);return!r||Math.abs(s-i)<a||s-i<0==r<0?s:t(r<0?i-e:i+e)}},AM=function(e){return function(t,n){return vu(wp(e))(t,n.direction)}},oo=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Ft=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},It=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},lo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Tf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},co={toggleActions:"play",anticipatePin:0},Bo={top:0,left:0,center:.5,bottom:1,right:1},So=function(e,t){if(Tn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Bo?Bo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},uo=function(e,t,n,i,r,a,s,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,p=r.fontWeight,g=ft.createElement("div"),d=Or(n)||Ki(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,x=d?pt:n,b=e.indexOf("start")!==-1,v=b?c:u,M="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&d?"fixed;":"absolute;"),(m||l||!d)&&(M+=(i===Lt?gu:_u)+":"+(a+parseFloat(f))+"px;"),s&&(M+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(g,x.children[0]):x.appendChild(g),g._offset=g["offset"+i.op.d2],wo(g,0,i,b),g},wo=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+Ds]=1,r["border"+s+Ds]=0,r[n.p]=t+"px",ye.set(e,r)},Ye=[],Fc={},Sa,Ef=function(){return sn()-Xn>34&&(Sa||(Sa=requestAnimationFrame(Di)))},rs=function(){(!Sn||!Sn.isPressed||Sn.startX>pt.clientWidth)&&(Ke.cache++,Sn?Sa||(Sa=requestAnimationFrame(Di)):Di(),Xn||zr("scrollStart"),Xn=sn())},Kl=function(){xp=et.innerWidth,_p=et.innerHeight},na=function(){Ke.cache++,!qt&&!mp&&!ft.fullscreenElement&&!ft.webkitFullscreenElement&&(!gp||xp!==et.innerWidth||Math.abs(et.innerHeight-_p)>et.innerHeight*.25)&&ko.restart(!0)},Nr={},CM=[],Tp=function o(){return It(We,"scrollEnd",o)||vr(!0)},zr=function(e){return Nr[e]&&Nr[e].map(function(t){return t()})||CM},wn=[],Ep=function(e){for(var t=0;t<wn.length;t+=5)(!e||wn[t+4]&&wn[t+4].query===e)&&(wn[t].style.cssText=wn[t+1],wn[t].getBBox&&wn[t].setAttribute("transform",wn[t+2]||""),wn[t+3].uncache=1)},yu=function(e,t){var n;for(nn=0;nn<Ye.length;nn++)n=Ye[nn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Ep(t),t||zr("revert")},Ap=function(e,t){Ke.cache++,(t||!rn)&&Ke.forEach(function(n){return cn(n)&&n.cacheID++&&(n.rec=0)}),Tn(e)&&(et.history.scrollRestoration=mu=e)},rn,Cr=0,Af,LM=function(){if(Af!==Cr){var e=Af=Cr;requestAnimationFrame(function(){return e===Cr&&vr(!0)})}},vr=function(e,t){if(Xn&&!e){Ft(We,"scrollEnd",Tp);return}rn=We.isRefreshing=!0,Ke.forEach(function(i){return cn(i)&&++i.cacheID&&(i.rec=i())});var n=zr("refreshInit");pp&&We.sort(),t||yu(),Ke.forEach(function(i){cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ye.slice(0).forEach(function(i){return i.refresh()}),Ye.forEach(function(i,r){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-s),i.refresh()}}),Ye.forEach(function(i){var r=Li(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>r)&&i.setPositions(i.start,Math.max(i.start+1,r),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ke.forEach(function(i){cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ap(mu,1),ko.pause(),Cr++,rn=2,Di(2),Ye.forEach(function(i){return cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),rn=We.isRefreshing=!1,zr("refresh")},Oc=0,To=1,da,Di=function(e){if(!rn||e===2){We.isUpdating=!0,da&&da.update(0);var t=Ye.length,n=sn(),i=n-$l>=50,r=t&&Ye[0].scroll();if(To=Oc>r?-1:1,rn||(Oc=r),i&&(Xn&&!$o&&n-Xn>200&&(Xn=0,zr("scrollEnd")),Mo=$l,$l=n),To<0){for(nn=t;nn-- >0;)Ye[nn]&&Ye[nn].update(0,i);To=1}else for(nn=0;nn<t;nn++)Ye[nn]&&Ye[nn].update(0,i);We.isUpdating=!1}Sa=0},Nc=[bp,Sp,_u,gu,Un+fa,Un+ca,Un+ha,Un+ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Eo=Nc.concat([Er,Ar,"boxSizing","max"+Ds,"max"+xu,"position",Un,Tt,Tt+ha,Tt+ca,Tt+fa,Tt+ua]),PM=function(e,t,n){vs(n);var i=e._gsap;if(i.spacerIsNative)vs(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Jl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Nc.length,a=t.style,s=e.style,l;r--;)l=Nc[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),s[_u]=s[gu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Er]=Ic(e,ln)+Ut,a[Ar]=Ic(e,Lt)+Ut,a[Tt]=s[Un]=s[Sp]=s[bp]="0",vs(i),s[Er]=s["max"+Ds]=n[Er],s[Ar]=s["max"+xu]=n[Ar],s[Tt]=n[Tt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},DM=/([A-Z])/g,vs=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(DM,"-$1").toLowerCase())}},ho=function(e){for(var t=Eo.length,n=e.style,i=[],r=0;r<t;r++)i.push(Eo[r],n[Eo[r]]);return i.t=e,i},RM=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,s;a<r;a+=2)s=e[a],i.push(s,s in t?t[s]:e[a+1]);return i.t=e.t,i},Ao={left:0,top:0},Cf=function(e,t,n,i,r,a,s,l,c,u,h,f,p,g){cn(e)&&(e=e(l)),Tn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?So("0"+e.substr(3),n):0));var d=p?p.time():0,m,x,b;if(p&&p.seek(0),isNaN(e)||(e=+e),bo(e))p&&(e=ye.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),s&&wo(s,n,i,!0);else{cn(t)&&(t=t(l));var v=(e||"0").split(" "),M,y,w,E;b=fn(t,l)||pt,M=Ei(b)||{},(!M||!M.left&&!M.top)&&Bn(b).display==="none"&&(E=b.style.display,b.style.display="block",M=Ei(b),E?b.style.display=E:b.style.removeProperty("display")),y=So(v[0],M[i.d]),w=So(v[1]||"0",n),e=M[i.p]-c[i.p]-u+y+r-w,s&&wo(s,w,i,n-w<20||s._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var _=e+n,S=a._isStart;m="scroll"+i.d2,wo(a,_,i,S&&_>20||!S&&(h?Math.max(pt[m],Kn[m]):a.parentNode[m])<=_+1),h&&(c=Ei(s),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ut))}return p&&b&&(m=Ei(b),p.seek(f),x=Ei(b),p._caScrollDist=m[i.p]-x[i.p],e=e/p._caScrollDist*f),p&&p.seek(d),p?e:Math.round(e)},IM=/(webkit|moz|length|cssText|inset)/i,Lf=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,s;if(t===pt){e._stOrig=r.cssText,s=Bn(e);for(a in s)!+a&&!IM.test(a)&&s[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=s[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},Cp=function(e,t,n){var i=t,r=i;return function(a){var s=Math.round(e());return s!==i&&s!==r&&Math.abs(s-i)>3&&Math.abs(s-r)>3&&(a=s,n&&n()),r=i,i=a,a}},fo=function(e,t,n){var i={};i[t.p]="+="+n,ye.set(e,i)},Pf=function(e,t){var n=ir(e,t),i="_scroll"+t.p2,r=function a(s,l,c,u,h){var f=a.tween,p=l.onComplete,g={};c=c||n();var d=Cp(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||s-c,f&&f.kill(),l[i]=s,l.modifiers=g,g[i]=function(){return d(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){Ke.cache++,Di()},l.onComplete=function(){a.tween=0,p&&p.call(f)},f=a.tween=ye.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Ft(e,"wheel",n.wheelHandler),We.isTouch&&Ft(e,"touchmove",n.wheelHandler),r},We=function(){function o(t,n){as||o.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rc(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ea){this.update=this.refresh=this.kill=ri;return}n=wf(Tn(n)||bo(n)||n.nodeType?{trigger:n}:n,co);var r=n,a=r.onUpdate,s=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,p=r.pin,g=r.pinSpacing,d=r.invalidateOnRefresh,m=r.anticipatePin,x=r.onScrubComplete,b=r.onSnapComplete,v=r.once,M=r.snap,y=r.pinReparent,w=r.pinSpacer,E=r.containerAnimation,_=r.fastScrollEnd,S=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ln:Lt,F=!h&&h!==0,V=fn(n.scroller||et),O=ye.core.getCache(V),I=Or(V),B=("pinType"in n?n.pinType:Ki(V,"pinType")||I&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=F&&n.toggleActions.split(" "),G="markers"in n?n.markers:co.markers,Q=I?0:parseFloat(Bn(V)["border"+C.p2+Ds])||0,L=this,W=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Y=SM(V,I,C),re=wM(V,I),ee=0,se=0,j=0,Ee=ir(V,C),de,Me,ge,Ie,Ce,oe,Be,rt,st,X,tt,Ge,bt,Je,P,T,K,te,ne,ae,Te,D,U,ce,le,he,Se,be,ze,ke,$e,R,Z,ie,ue,ve,Xe,ht,ut;if(L._startClamp=L._endClamp=!1,L._dir=C,m*=45,L.scroller=V,L.scroll=E?E.time.bind(E):Ee,Ie=Ee(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(pp=1,n.refreshPriority===-9999&&(da=L)),O.tweenScroll=O.tweenScroll||{top:Pf(V,Lt),left:Pf(V,ln)},L.tweenTo=de=O.tweenScroll[C.p],L.scrubDuration=function(xe){Z=bo(xe)&&xe,Z?R?R.duration(xe):R=ye.to(i,{ease:"expo",totalProgress:"+=0",duration:Z,paused:!0,onComplete:function(){return x&&x(L)}}):(R&&R.progress(1).kill(),R=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),ke=0,l||(l=i.vars.id)),M&&((!pr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in pt.style&&ye.set(I?[pt,Kn]:V,{scrollBehavior:"auto"}),Ke.forEach(function(xe){return cn(xe)&&xe.target===(I?ft.scrollingElement||Kn:V)&&(xe.smooth=!1)}),ge=cn(M.snapTo)?M.snapTo:M.snapTo==="labels"?EM(i):M.snapTo==="labelsDirectional"?AM(i):M.directional!==!1?function(xe,Qe){return vu(M.snapTo)(xe,sn()-se<500?0:Qe.direction)}:ye.utils.snap(M.snapTo),ie=M.duration||{min:.1,max:2},ie=pr(ie)?fs(ie.min,ie.max):fs(ie,ie),ue=ye.delayedCall(M.delay||Z/2||.1,function(){var xe=Ee(),Qe=sn()-se<500,De=de.tween;if((Qe||Math.abs(L.getVelocity())<10)&&!De&&!$o&&ee!==xe){var Ve=(xe-oe)/Je,A=i&&!F?i.totalProgress():Ve,N=Qe?0:(A-$e)/(sn()-Mo)*1e3||0,q=ye.utils.clamp(-Ve,1-Ve,is(N/2)*N/.185),z=Ve+(M.inertia===!1?0:q),$=fs(0,1,ge(z,L)),me=Math.round(oe+$*Je),_e=M,Pe=_e.onStart,we=_e.onInterrupt,Fe=_e.onComplete;if(xe<=Be&&xe>=oe&&me!==xe){if(De&&!De._initted&&De.data<=is(me-xe))return;M.inertia===!1&&(q=$-Ve),de(me,{duration:ie(is(Math.max(is(z-A),is($-A))*.185/N/.05||0)),ease:M.ease||"power3",data:is(me-xe),onInterrupt:function(){return ue.restart(!0)&&we&&we(L)},onComplete:function(){L.update(),ee=Ee(),ke=$e=i&&!F?i.totalProgress():L.progress,b&&b(L),Fe&&Fe(L)}},xe,q*Je,me-xe-q*Je),Pe&&Pe(L,de.tween)}}else L.isActive&&ee!==xe&&ue.restart(!0)}).pause()),l&&(Fc[l]=L),f=L.trigger=fn(f||p!==!0&&p),ut=f&&f._gsap&&f._gsap.stRevert,ut&&(ut=ut(L)),p=p===!0?f:fn(p),Tn(s)&&(s={targets:f,className:s}),p&&(g===!1||g===Un||(g=!g&&p.parentNode&&p.parentNode.style&&Bn(p.parentNode).display==="flex"?!1:Tt),L.pin=p,Me=ye.core.getCache(p),Me.spacer?P=Me.pinState:(w&&(w=fn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Me.spacerIsNative=!!w,w&&(Me.spacerState=ho(w))),Me.spacer=te=w||ft.createElement("div"),te.classList.add("pin-spacer"),l&&te.classList.add("pin-spacer-"+l),Me.pinState=P=ho(p)),n.force3D!==!1&&ye.set(p,{force3D:!0}),L.spacer=te=Me.spacer,ze=Bn(p),ce=ze[g+C.os2],ae=ye.getProperty(p),Te=ye.quickSetter(p,C.a,Ut),Jl(p,te,ze),K=ho(p)),G){Ge=pr(G)?wf(G,Tf):Tf,X=uo("scroller-start",l,V,C,Ge,0),tt=uo("scroller-end",l,V,C,Ge,0,X),ne=X["offset"+C.op.d2];var Le=fn(Ki(V,"content")||V);rt=this.markerStart=uo("start",l,Le,C,Ge,ne,0,E),st=this.markerEnd=uo("end",l,Le,C,Ge,ne,0,E),E&&(ht=ye.quickSetter([rt,st],C.a,Ut)),!B&&!(fi.length&&Ki(V,"fixedMarkers")===!0)&&(TM(I?pt:V),ye.set([X,tt],{force3D:!0}),he=ye.quickSetter(X,C.a,Ut),be=ye.quickSetter(tt,C.a,Ut))}if(E){var pe=E.vars.onUpdate,Ue=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){L.update(0,0,1),pe&&pe.apply(E,Ue||[])})}if(L.previous=function(){return Ye[Ye.indexOf(L)-1]},L.next=function(){return Ye[Ye.indexOf(L)+1]},L.revert=function(xe,Qe){if(!Qe)return L.kill(!0);var De=xe!==!1||!L.enabled,Ve=qt;De!==L.isReverted&&(De&&(ve=Math.max(Ee(),L.scroll.rec||0),j=L.progress,Xe=i&&i.progress()),rt&&[rt,st,X,tt].forEach(function(A){return A.style.display=De?"none":"block"}),De&&(qt=L,L.update(De)),p&&(!y||!L.isActive)&&(De?PM(p,te,P):Jl(p,te,Bn(p),le)),De||L.update(De),qt=Ve,L.isReverted=De)},L.refresh=function(xe,Qe,De,Ve){if(!((qt||!L.enabled)&&!Qe)){if(p&&xe&&Xn){Ft(o,"scrollEnd",Tp);return}!rn&&W&&W(L),qt=L,de.tween&&(de.tween.kill(),de.tween=0),R&&R.pause(),d&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var A=Y(),N=re(),q=E?E.duration():Li(V,C),z=Je<=.01,$=0,me=Ve||0,_e=pr(De)?De.end:n.end,Pe=n.endTrigger||f,we=pr(De)?De.start:n.start||(n.start===0||!f?0:p?"0 0":"0 100%"),Fe=L.pinnedContainer=n.pinnedContainer&&fn(n.pinnedContainer,L),Oe=f&&Math.max(0,Ye.indexOf(L))||0,Re=Oe,qe,at,kt,Fn,Ze,Ae,un,_t,ti,Fi,Wt,mi,St;for(G&&pr(De)&&(mi=ye.getProperty(X,C.p),St=ye.getProperty(tt,C.p));Re--;)Ae=Ye[Re],Ae.end||Ae.refresh(0,1)||(qt=L),un=Ae.pin,un&&(un===f||un===p||un===Fe)&&!Ae.isReverted&&(Fi||(Fi=[]),Fi.unshift(Ae),Ae.revert(!0,!0)),Ae!==Ye[Re]&&(Oe--,Re--);for(cn(we)&&(we=we(L)),we=yf(we,"start",L),oe=Cf(we,f,A,C,Ee(),rt,X,L,N,Q,B,q,E,L._startClamp&&"_startClamp")||(p?-.001:0),cn(_e)&&(_e=_e(L)),Tn(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(Tn(we)?we.split(" ")[0]:"")+_e:($=So(_e.substr(2),A),_e=Tn(we)?we:(E?ye.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,oe):oe)+$,Pe=f)),_e=yf(_e,"end",L),Be=Math.max(oe,Cf(_e||(Pe?"100% 0":q),Pe,A,C,Ee()+$,st,tt,L,N,Q,B,q,E,L._endClamp&&"_endClamp"))||-.001,$=0,Re=Oe;Re--;)Ae=Ye[Re],un=Ae.pin,un&&Ae.start-Ae._pinPush<=oe&&!E&&Ae.end>0&&(qe=Ae.end-(L._startClamp?Math.max(0,Ae.start):Ae.start),(un===f&&Ae.start-Ae._pinPush<oe||un===Fe)&&isNaN(we)&&($+=qe*(1-Ae.progress)),un===p&&(me+=qe));if(oe+=$,Be+=$,L._startClamp&&(L._startClamp+=$),L._endClamp&&!rn&&(L._endClamp=Be||-.001,Be=Math.min(Be,Li(V,C))),Je=Be-oe||(oe-=.01)&&.001,z&&(j=ye.utils.clamp(0,1,ye.utils.normalize(oe,Be,ve))),L._pinPush=me,rt&&$&&(qe={},qe[C.a]="+="+$,Fe&&(qe[C.p]="-="+Ee()),ye.set([rt,st],qe)),p)qe=Bn(p),Fn=C===Lt,kt=Ee(),D=parseFloat(ae(C.a))+me,!q&&Be>1&&(Wt=(I?ft.scrollingElement||Kn:V).style,Wt={style:Wt,value:Wt["overflow"+C.a.toUpperCase()]},I&&Bn(pt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Wt.style["overflow"+C.a.toUpperCase()]="scroll")),Jl(p,te,qe),K=ho(p),at=Ei(p,!0),_t=B&&ir(V,Fn?ln:Lt)(),g&&(le=[g+C.os2,Je+me+Ut],le.t=te,Re=g===Tt?Ic(p,C)+Je+me:0,Re&&le.push(C.d,Re+Ut),vs(le),Fe&&Ye.forEach(function(_n){_n.pin===Fe&&_n.vars.pinSpacing!==!1&&(_n._subPinOffset=!0)}),B&&Ee(ve)),B&&(Ze={top:at.top+(Fn?kt-oe:_t)+Ut,left:at.left+(Fn?_t:kt-oe)+Ut,boxSizing:"border-box",position:"fixed"},Ze[Er]=Ze["max"+Ds]=Math.ceil(at.width)+Ut,Ze[Ar]=Ze["max"+xu]=Math.ceil(at.height)+Ut,Ze[Un]=Ze[Un+ha]=Ze[Un+ca]=Ze[Un+fa]=Ze[Un+ua]="0",Ze[Tt]=qe[Tt],Ze[Tt+ha]=qe[Tt+ha],Ze[Tt+ca]=qe[Tt+ca],Ze[Tt+fa]=qe[Tt+fa],Ze[Tt+ua]=qe[Tt+ua],T=RM(P,Ze,y),rn&&Ee(0)),i?(ti=i._initted,Yl(1),i.render(i.duration(),!0,!0),U=ae(C.a)-D+Je+me,Se=Math.abs(Je-U)>1,B&&Se&&T.splice(T.length-2,2),i.render(0,!0,!0),ti||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Yl(0)):U=Je,Wt&&(Wt.value?Wt.style["overflow"+C.a.toUpperCase()]=Wt.value:Wt.style.removeProperty("overflow-"+C.a));else if(f&&Ee()&&!E)for(at=f.parentNode;at&&at!==pt;)at._pinOffset&&(oe-=at._pinOffset,Be-=at._pinOffset),at=at.parentNode;Fi&&Fi.forEach(function(_n){return _n.revert(!1,!0)}),L.start=oe,L.end=Be,Ie=Ce=rn?ve:Ee(),!E&&!rn&&(Ie<ve&&Ee(ve),L.scroll.rec=0),L.revert(!1,!0),se=sn(),ue&&(ee=-1,L.isActive&&Ee(oe+Je*j),ue.restart(!0)),qt=0,i&&F&&(i._initted||Xe)&&i.progress()!==Xe&&i.progress(Xe||0,!0).render(i.time(),!0,!0),(z||j!==L.progress||E)&&(i&&!F&&i.totalProgress(E&&oe<-.001&&!j?ye.utils.normalize(oe,Be,0):j,!0),L.progress=z||(Ie-oe)/Je===j?0:j),p&&g&&(te._pinOffset=Math.round(L.progress*U)),R&&R.invalidate(),isNaN(mi)||(mi-=ye.getProperty(X,C.p),St-=ye.getProperty(tt,C.p),fo(X,C,mi),fo(rt,C,mi-(Ve||0)),fo(tt,C,St),fo(st,C,St-(Ve||0))),z&&!rn&&L.update(),u&&!rn&&!bt&&(bt=!0,u(L),bt=!1)}},L.getVelocity=function(){return(Ee()-Ce)/(sn()-Mo)*1e3||0},L.endAnimation=function(){Ys(L.callbackAnimation),i&&(R?R.progress(1):i.paused()?F||Ys(i,L.direction<0,1):Ys(i,i.reversed()))},L.labelToScroll=function(xe){return i&&i.labels&&(oe||L.refresh()||oe)+i.labels[xe]/i.duration()*Je||0},L.getTrailing=function(xe){var Qe=Ye.indexOf(L),De=L.direction>0?Ye.slice(0,Qe).reverse():Ye.slice(Qe+1);return(Tn(xe)?De.filter(function(Ve){return Ve.vars.preventOverlaps===xe}):De).filter(function(Ve){return L.direction>0?Ve.end<=oe:Ve.start>=Be})},L.update=function(xe,Qe,De){if(!(E&&!De&&!xe)){var Ve=rn===!0?ve:L.scroll(),A=xe?0:(Ve-oe)/Je,N=A<0?0:A>1?1:A||0,q=L.progress,z,$,me,_e,Pe,we,Fe,Oe;if(Qe&&(Ce=Ie,Ie=E?Ee():Ve,M&&($e=ke,ke=i&&!F?i.totalProgress():N)),m&&!N&&p&&!qt&&!so&&Xn&&oe<Ve+(Ve-Ce)/(sn()-Mo)*m&&(N=1e-4),N!==q&&L.enabled){if(z=L.isActive=!!N&&N<1,$=!!q&&q<1,we=z!==$,Pe=we||!!N!=!!q,L.direction=N>q?1:-1,L.progress=N,Pe&&!qt&&(me=N&&!q?0:N===1?1:q===1?2:3,F&&(_e=!we&&H[me+1]!=="none"&&H[me+1]||H[me],Oe=i&&(_e==="complete"||_e==="reset"||_e in i))),S&&(we||Oe)&&(Oe||h||!i)&&(cn(S)?S(L):L.getTrailing(S).forEach(function(kt){return kt.endAnimation()})),F||(R&&!qt&&!so?(R._dp._time-R._start!==R._time&&R.render(R._dp._time-R._start),R.resetTo?R.resetTo("totalProgress",N,i._tTime/i._tDur):(R.vars.totalProgress=N,R.invalidate().restart())):i&&i.totalProgress(N,!!(qt&&(se||xe)))),p){if(xe&&g&&(te.style[g+C.os2]=ce),!B)Te(ta(D+U*N));else if(Pe){if(Fe=!xe&&N>q&&Be+1>Ve&&Ve+1>=Li(V,C),y)if(!xe&&(z||Fe)){var Re=Ei(p,!0),qe=Ve-oe;Lf(p,pt,Re.top+(C===Lt?qe:0)+Ut,Re.left+(C===Lt?0:qe)+Ut)}else Lf(p,te);vs(z||Fe?T:K),Se&&N<1&&z||Te(D+(N===1&&!Fe?U:0))}}M&&!de.tween&&!qt&&!so&&ue.restart(!0),s&&(we||v&&N&&(N<1||!jl))&&Uo(s.targets).forEach(function(kt){return kt.classList[z||v?"add":"remove"](s.className)}),a&&!F&&!xe&&a(L),Pe&&!qt?(F&&(Oe&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),a&&a(L)),(we||!jl)&&(c&&we&&Zl(L,c),J[me]&&Zl(L,J[me]),v&&(N===1?L.kill(!1,1):J[me]=0),we||(me=N===1?1:3,J[me]&&Zl(L,J[me]))),_&&!z&&Math.abs(L.getVelocity())>(bo(_)?_:2500)&&(Ys(L.callbackAnimation),R?R.progress(1):Ys(i,_e==="reverse"?1:!N,1))):F&&a&&!qt&&a(L)}if(be){var at=E?Ve/E.duration()*(E._caScrollDist||0):Ve;he(at+(X._isFlipped?1:0)),be(at)}ht&&ht(-Ve/E.duration()*(E._caScrollDist||0))}},L.enable=function(xe,Qe){L.enabled||(L.enabled=!0,Ft(V,"resize",na),Ft(I?ft:V,"scroll",rs),W&&Ft(o,"refreshInit",W),xe!==!1&&(L.progress=j=0,Ie=Ce=ee=Ee()),Qe!==!1&&L.refresh())},L.getTween=function(xe){return xe&&de?de.tween:R},L.setPositions=function(xe,Qe,De,Ve){if(E){var A=E.scrollTrigger,N=E.duration(),q=A.end-A.start;xe=A.start+q*xe/N,Qe=A.start+q*Qe/N}L.refresh(!1,!1,{start:Mf(xe,De&&!!L._startClamp),end:Mf(Qe,De&&!!L._endClamp)},Ve),L.update()},L.adjustPinSpacing=function(xe){if(le&&xe){var Qe=le.indexOf(C.d)+1;le[Qe]=parseFloat(le[Qe])+xe+Ut,le[1]=parseFloat(le[1])+xe+Ut,vs(le)}},L.disable=function(xe,Qe){if(L.enabled&&(xe!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Qe||R&&R.pause(),ve=0,Me&&(Me.uncache=1),W&&It(o,"refreshInit",W),ue&&(ue.pause(),de.tween&&de.tween.kill()&&(de.tween=0)),!I)){for(var De=Ye.length;De--;)if(Ye[De].scroller===V&&Ye[De]!==L)return;It(V,"resize",na),It(V,"scroll",rs)}},L.kill=function(xe,Qe){L.disable(xe,Qe),R&&!Qe&&R.kill(),l&&delete Fc[l];var De=Ye.indexOf(L);De>=0&&Ye.splice(De,1),De===nn&&To>0&&nn--,De=0,Ye.forEach(function(Ve){return Ve.scroller===L.scroller&&(De=1)}),De||rn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,xe&&i.revert({kill:!1}),Qe||i.kill()),rt&&[rt,st,X,tt].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),da===L&&(da=0),p&&(Me&&(Me.uncache=1),De=0,Ye.forEach(function(Ve){return Ve.pin===p&&De++}),De||(Me.spacer=0)),n.onKill&&n.onKill(L)},Ye.push(L),L.enable(!1,!1),ut&&ut(L),i&&i.add&&!Je){var nt=L.update;L.update=function(){L.update=nt,oe||Be||L.refresh()},ye.delayedCall(.01,L.update),Je=.01,oe=Be=0}else L.refresh();p&&LM()},o.register=function(n){return as||(ye=n||yp(),vp()&&window.document&&o.enable(),as=ea),as},o.defaults=function(n){if(n)for(var i in n)co[i]=n[i];return co},o.disable=function(n,i){ea=0,Ye.forEach(function(a){return a[i?"kill":"disable"](n)}),It(et,"wheel",rs),It(ft,"scroll",rs),clearInterval(ro),It(ft,"touchcancel",ri),It(pt,"touchstart",ri),oo(It,ft,"pointerdown,touchstart,mousedown",bf),oo(It,ft,"pointerup,touchend,mouseup",Sf),ko.kill(),ao(It);for(var r=0;r<Ke.length;r+=3)lo(It,Ke[r],Ke[r+1]),lo(It,Ke[r],Ke[r+2])},o.enable=function(){if(et=window,ft=document,Kn=ft.documentElement,pt=ft.body,ye&&(Uo=ye.utils.toArray,fs=ye.utils.clamp,Rc=ye.core.context||ri,Yl=ye.core.suppressOverwrites||ri,mu=et.history.scrollRestoration||"auto",Oc=et.pageYOffset,ye.core.globals("ScrollTrigger",o),pt)){ea=1,bM(),At.register(ye),o.isTouch=At.isTouch,Ui=At.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ft(et,"wheel",rs),dp=[et,ft,Kn,pt],ye.matchMedia?(o.matchMedia=function(l){var c=ye.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},ye.addEventListener("matchMediaInit",function(){return yu()}),ye.addEventListener("matchMediaRevert",function(){return Ep()}),ye.addEventListener("matchMedia",function(){vr(0,1),zr("matchMedia")}),ye.matchMedia("(orientation: portrait)",function(){return Kl(),Kl})):console.warn("Requires GSAP 3.11.0 or later"),Kl(),Ft(ft,"scroll",rs);var n=pt.style,i=n.borderTopStyle,r=ye.core.Animation.prototype,a,s;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ei(pt),Lt.m=Math.round(a.top+Lt.sc())||0,ln.m=Math.round(a.left+ln.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ro=setInterval(Ef,250),ye.delayedCall(.5,function(){return so=0}),Ft(ft,"touchcancel",ri),Ft(pt,"touchstart",ri),oo(Ft,ft,"pointerdown,touchstart,mousedown",bf),oo(Ft,ft,"pointerup,touchend,mouseup",Sf),Dc=ye.utils.checkPrefix("transform"),Eo.push(Dc),as=sn(),ko=ye.delayedCall(.2,vr).pause(),os=[ft,"visibilitychange",function(){var l=et.innerWidth,c=et.innerHeight;ft.hidden?(xf=l,vf=c):(xf!==l||vf!==c)&&na()},ft,"DOMContentLoaded",vr,et,"load",vr,et,"resize",na],ao(Ft),Ye.forEach(function(l){return l.enable(0,1)}),s=0;s<Ke.length;s+=3)lo(It,Ke[s],Ke[s+1]),lo(It,Ke[s],Ke[s+2])}},o.config=function(n){"limitCallbacks"in n&&(jl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ro)||(ro=i)&&setInterval(Ef,i),"ignoreMobileResize"in n&&(gp=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ao(It)||ao(Ft,n.autoRefreshEvents||"none"),mp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,i){var r=fn(n),a=Ke.indexOf(r),s=Or(r);~a&&Ke.splice(a,s?6:2),i&&(s?fi.unshift(et,i,pt,i,Kn,i):fi.unshift(r,i))},o.clearMatchMedia=function(n){Ye.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},o.isInViewport=function(n,i,r){var a=(Tn(n)?fn(n):n).getBoundingClientRect(),s=a[r?Er:Ar]*i||0;return r?a.right-s>0&&a.left+s<et.innerWidth:a.bottom-s>0&&a.top+s<et.innerHeight},o.positionInViewport=function(n,i,r){Tn(n)&&(n=fn(n));var a=n.getBoundingClientRect(),s=a[r?Er:Ar],l=i==null?s/2:i in Bo?Bo[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return r?(a.left+l)/et.innerWidth:(a.top+l)/et.innerHeight},o.killAll=function(n){if(Ye.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Nr.killAll||[];Nr={},i.forEach(function(r){return r()})}},o}();We.version="3.12.1";We.saveStyles=function(o){return o?Uo(o).forEach(function(e){if(e&&e.style){var t=wn.indexOf(e);t>=0&&wn.splice(t,5),wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),Rc())}}):wn};We.revert=function(o,e){return yu(!o,e)};We.create=function(o,e){return new We(o,e)};We.refresh=function(o){return o?na():(as||We.register())&&vr(!0)};We.update=function(o){return++Ke.cache&&Di(o===!0?2:0)};We.clearScrollMemory=Ap;We.maxScroll=function(o,e){return Li(o,e?ln:Lt)};We.getScrollFunc=function(o,e){return ir(fn(o),e?ln:Lt)};We.getById=function(o){return Fc[o]};We.getAll=function(){return Ye.filter(function(o){return o.vars.id!=="ScrollSmoother"})};We.isScrolling=function(){return!!Xn};We.snapDirectional=vu;We.addEventListener=function(o,e){var t=Nr[o]||(Nr[o]=[]);~t.indexOf(e)||t.push(e)};We.removeEventListener=function(o,e){var t=Nr[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};We.batch=function(o,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var h=[],f=[],p=ye.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&p.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&cn(e[s])&&s!=="onRefreshInit"?a(s,e[s]):e[s];return cn(r)&&(r=r(),Ft(We,"refresh",function(){return r=e.batchMax()})),Uo(o).forEach(function(l){var c={};for(s in n)c[s]=n[s];c.trigger=l,t.push(We.create(c))}),t};var Df=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ql=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(At.isTouch?" pinch-zoom":""):"none",e===Kn&&o(pt,t)},po={auto:1,scroll:1},FM=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||ye.core.getCache(r),s=sn(),l;if(!a._isScrollT||s-a._isScrollT>2e3){for(;r&&r!==pt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(po[(l=Bn(r)).overflowY]||po[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Or(r)&&(po[(l=Bn(r)).overflowY]||po[l.overflowX]),a._isScrollT=s}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Lp=function(e,t,n,i){return At.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&FM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ft(ft,At.eventTypes[0],If,!1,!0)},onDisable:function(){return It(ft,At.eventTypes[0],If,!0)}})},OM=/(input|label|select|textarea)/i,Rf,If=function(e){var t=OM.test(e.target.tagName);(t||Rf)&&(e._gsapAllow=!0,Rf=t)},NM=function(e){pr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,s,l,c=fn(e.target)||Kn,u=ye.core.globals().ScrollSmoother,h=u&&u.get(),f=Ui&&(e.content&&fn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=ir(c,Lt),g=ir(c,ln),d=1,m=(At.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,x=0,b=cn(i)?function(){return i(s)}:function(){return i||2.8},v,M,y=Lp(c,e.type,!0,r),w=function(){return M=!1},E=ri,_=ri,S=function(){l=Li(c,Lt),_=fs(Ui?1:0,l),n&&(E=fs(0,Li(c,ln))),v=Cr},C=function(){f._gsap.y=ta(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},F=function(){if(M){requestAnimationFrame(w);var G=ta(s.deltaY/2),Q=_(p.v-G);if(f&&Q!==p.v+p.offset){p.offset=Q-p.v;var L=ta((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",p.cacheID=Ke.cache,Di()}return!0}p.offset&&C(),M=!0},V,O,I,B,J=function(){S(),V.isActive()&&V.vars.scrollY>l&&(p()>l?V.progress(1)&&p(l):V.resetTo("scrollY",l))};return f&&ye.set(f,{y:"+=0"}),e.ignoreCheck=function(H){return Ui&&H.type==="touchmove"&&F()||d>1.05&&H.type!=="touchstart"||s.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){M=!1;var H=d;d=ta((et.visualViewport&&et.visualViewport.scale||1)/m),V.pause(),H!==d&&Ql(c,d>1.01?!0:n?!1:"x"),O=g(),I=p(),S(),v=Cr},e.onRelease=e.onGestureStart=function(H,G){if(p.offset&&C(),!G)B.restart(!0);else{Ke.cache++;var Q=b(),L,W;n&&(L=g(),W=L+Q*.05*-H.velocityX/.227,Q*=Df(g,L,W,Li(c,ln)),V.vars.scrollX=E(W)),L=p(),W=L+Q*.05*-H.velocityY/.227,Q*=Df(p,L,W,Li(c,Lt)),V.vars.scrollY=_(W),V.invalidate().duration(Q).play(.01),(Ui&&V.vars.scrollY>=l||L>=l-1)&&ye.to({},{onUpdate:J,duration:Q})}a&&a(H)},e.onWheel=function(){V._ts&&V.pause(),sn()-x>1e3&&(v=0,x=sn())},e.onChange=function(H,G,Q,L,W){if(Cr!==v&&S(),G&&n&&g(E(L[2]===G?O+(H.startX-H.x):g()+G-L[1])),Q){p.offset&&C();var Y=W[2]===Q,re=Y?I+H.startY-H.y:p()+Q-W[1],ee=_(re);Y&&re!==ee&&(I+=ee-re),p(ee)}(Q||G)&&Di()},e.onEnable=function(){Ql(c,n?!1:"x"),We.addEventListener("refresh",J),Ft(et,"resize",J),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),y.enable()},e.onDisable=function(){Ql(c,!0),It(et,"resize",J),We.removeEventListener("refresh",J),y.kill()},e.lockAxis=e.lockAxis!==!1,s=new At(e),s.iOS=Ui,Ui&&!p()&&p(1),Ui&&ye.ticker.add(ri),B=s._dc,V=ye.to(s,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Cp(p,p(),function(){return V.pause()})},onUpdate:Di,onComplete:B.vars.onComplete}),s};We.sort=function(o){return Ye.sort(o||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};We.observe=function(o){return new At(o)};We.normalizeScroll=function(o){if(typeof o>"u")return Sn;if(o===!0&&Sn)return Sn.enable();if(o===!1)return Sn&&Sn.kill();var e=o instanceof At?o:NM(o);return Sn&&Sn.target===e.target&&Sn.kill(),Or(e.target)&&(Sn=e),e};We.core={_getVelocityProp:Pc,_inputObserver:Lp,_scrollers:Ke,_proxies:fi,bridge:{ss:function(){Xn||zr("scrollStart"),Xn=sn()},ref:function(){return qt}}};yp()&&ye.registerPlugin(We);Ot.registerPlugin(We);const Ji=new qc,zM=new Kc,Mu=new ad(16777215,.2);Mu.position.set(0,0,4);Ji.add(Mu);const bu=new sd(16711935,0);bu.position.set(0,-5,4);Ji.add(bu);ni.to(Mu,2,{intensity:.7,delay:2});ni.to(bu,2,{intensity:.5,delay:1});const Bi={width:window.innerWidth/2-50,height:window.innerHeight},Rs=new jt(45,Bi.width/Bi.height);Rs.position.set(0,0,4);Ji.add(Rs);const Pp=document.querySelector(".webgl"),Zo=new Xo({canvas:Pp,alpha:!0,antialias:!0});Zo.toneMapping=Vo;Zo.toneMappingExposure=1.25;const Dp=()=>{Bi.width=window.innerWidth/2-50,Bi.height=window.innerHeight,Rs.aspect=Bi.width/Bi.height,Rs.updateProjectionMatrix(),Zo.setSize(Bi.width,Bi.height)};Dp();window.addEventListener("resize",Dp);const Su=new Zc(Rs,Pp);Su.enabled=!1;setTimeout(()=>{Su.enabled=!1},3e3);const ec=new jc;let bn;zM.load("/assets/sneakers/travisScottMocha/baked_mesh_modified.obj",function(o){ec.load("/assets/sneakers/travisScottMocha/baked_mesh_tex0.png",function(r){ec.load("/assets/sneakers/travisScottMocha/baked_mesh_ao0.png",function(a){ec.load("/assets/sneakers/travisScottMocha/baked_mesh_norm0.png",function(s){Ji.traverse(function(l){l instanceof Dn&&(l.material.map=r,l.material.aoMap=a,l.material.normalMap=s,l.material.needsUpdate=!0)})},void 0,function(s){console.error("Erreur de chargement de la texture normale",s)})},void 0,function(a){console.error("Erreur de chargement de la texture d'occlusion ambiante",a)})},void 0,function(r){console.error("Erreur de chargement de la texture diffuse",r)}),Ji.add(o),o.scale.set(9,9,9),o.name="travisScottMocha",o.position.set(2.3,0,0),o.rotation.set(0,-6,-1),bn=Ji.getObjectByName("travisScottMocha");let e=document.getElementById("button1"),t=document.getElementById("button2"),n=document.getElementById("button3");if(bn){let r=function(a=0){console.log(a),a===0?(ni.to(bn.rotation,3,{y:3.61}),ni.to(bn.position,3,{x:-.4}),requestAnimationFrame(r)):a===1?(ni.to(bn.position,1,{x:0}),ni.to(bn.rotation,1,{y:3,x:0,z:0})):a===2?(ni.to(bn.position,1,{x:0}),ni.to(bn.rotation,1,{y:3.78,x:0,z:0})):a===3&&(ni.to(bn.position,1,{x:0}),ni.to(bn.rotation,1,{y:.82,x:0,z:0}))};var i=r;e.addEventListener("click",()=>{r(1)}),t.addEventListener("click",()=>{r(2)}),n.addEventListener("click",()=>{r(3)}),r()}},function(o){console.log(o.loaded/o.total*100+"% chargé")},function(o){console.error("Erreur de chargement",o)});window.addEventListener("mousemove",function(o){bn=Ji.getObjectByName("travisScottMocha");let e=o.movementX,t=o.movementY;bn.rotation.x+=t*.001,bn.rotation.y+=e*.001});const Rp=()=>{Su.update(),Zo.render(Ji,Rs),window.requestAnimationFrame(Rp)};Rp();Ot.to(".logo-nike",{opacity:0,scrollTrigger:{trigger:".section-intro",start:"-30px top",end:"bottom+=100px",scrub:!0}});class kM extends Os{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Zv.extractUrlBase(e):this.path,s=new Yc(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(l){try{t(r.parse(l,a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let i={};const r=/\s+/,a={};for(let l=0;l<n.length;l++){let c=n[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let h=u>=0?c.substring(0,u):c;h=h.toLowerCase();let f=u>=0?c.substring(u+1):"";if(f=f.trim(),h==="newmtl")i={name:f},a[f]=i;else if(h==="ka"||h==="kd"||h==="ks"||h==="ke"){const p=f.split(r,3);i[h]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else i[h]=f}const s=new UM(this.resourcePath||t,this.materialOptions);return s.setCrossOrigin(this.crossOrigin),s.setManager(this.manager),s.setMaterials(a),s}}class UM{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Qi,this.wrap=this.options.wrap!==void 0?this.options.wrap:bs}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const i=e[n],r={};t[n]=r;for(const a in i){let s=!0,l=i[a];const c=a.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(s=!1);break}s&&(r[c]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],i={name:e,side:this.side};function r(s,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:s+l}function a(s,l){if(i[s])return;const c=t.getTextureParams(l,i),u=t.loadTexture(r(t.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(s==="map"||s==="emissiveMap")&&(u.encoding=ot),i[s]=u}for(const s in n){const l=n[s];let c;if(l!=="")switch(s.toLowerCase()){case"kd":i.color=new je().fromArray(l).convertSRGBToLinear();break;case"ks":i.specular=new je().fromArray(l).convertSRGBToLinear();break;case"ke":i.emissive=new je().fromArray(l).convertSRGBToLinear();break;case"map_kd":a("map",l);break;case"map_ks":a("specularMap",l);break;case"map_ke":a("emissiveMap",l);break;case"norm":a("normalMap",l);break;case"map_bump":case"bump":a("bumpMap",l);break;case"map_d":a("alphaMap",l),i.transparent=!0;break;case"ns":i.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(i.opacity=c,i.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(i.opacity=1-c,i.transparent=!0);break}}return this.materials[e]=new nd(i),this.materials[e]}getTextureParams(e,t){const n={scale:new Ne(1,1),offset:new Ne(0,0)},i=e.split(/\s+/);let r;return r=i.indexOf("-bm"),r>=0&&(t.bumpScale=parseFloat(i[r+1]),i.splice(r,2)),r=i.indexOf("-s"),r>=0&&(n.scale.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),r=i.indexOf("-o"),r>=0&&(n.offset.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),n.url=i.join(" ").trim(),n}loadTexture(e,t,n,i,r){const a=this.manager!==void 0?this.manager:id;let s=a.getHandler(e);s===null&&(s=new jc(a)),s.setCrossOrigin&&s.setCrossOrigin(this.crossOrigin);const l=s.load(e,n,i,r);return t!==void 0&&(l.mapping=t),l}}class BM extends qv{constructor(e){super(e),this.type=Ai}parse(e){const s=function(v,M){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(M||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(M||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(M||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(M||""))}return-1},h=`
`,f=function(v,M,y){M=M||1024;let E=v.pos,_=-1,S=0,C="",F=String.fromCharCode.apply(null,new Uint16Array(v.subarray(E,E+128)));for(;0>(_=F.indexOf(h))&&S<M&&E<v.byteLength;)C+=F,S+=F.length,E+=128,F+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(E,E+128)));return-1<_?(y!==!1&&(v.pos+=S+_+1),C+F.slice(0,_)):!1},p=function(v){const M=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*FORMAT=(\S+)\s*$/,_=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,S={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let C,F;if(v.pos>=v.byteLength||!(C=f(v)))return s(1,"no header found");if(!(F=C.match(M)))return s(3,"bad initial token");for(S.valid|=1,S.programtype=F[1],S.string+=C+`
`;C=f(v),C!==!1;){if(S.string+=C+`
`,C.charAt(0)==="#"){S.comments+=C+`
`;continue}if((F=C.match(y))&&(S.gamma=parseFloat(F[1])),(F=C.match(w))&&(S.exposure=parseFloat(F[1])),(F=C.match(E))&&(S.valid|=2,S.format=F[1]),(F=C.match(_))&&(S.valid|=4,S.height=parseInt(F[1],10),S.width=parseInt(F[2],10)),S.valid&2&&S.valid&4)break}return S.valid&2?S.valid&4?S:s(3,"missing image size specifier"):s(3,"missing format specifier")},g=function(v,M,y){const w=M;if(w<8||w>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(w!==(v[2]<<8|v[3]))return s(3,"wrong scanline width");const E=new Uint8Array(4*M*y);if(!E.length)return s(4,"unable to allocate buffer space");let _=0,S=0;const C=4*w,F=new Uint8Array(4),V=new Uint8Array(C);let O=y;for(;O>0&&S<v.byteLength;){if(S+4>v.byteLength)return s(1);if(F[0]=v[S++],F[1]=v[S++],F[2]=v[S++],F[3]=v[S++],F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=w)return s(3,"bad rgbe scanline format");let I=0,B;for(;I<C&&S<v.byteLength;){B=v[S++];const H=B>128;if(H&&(B-=128),B===0||I+B>C)return s(3,"bad scanline data");if(H){const G=v[S++];for(let Q=0;Q<B;Q++)V[I++]=G}else V.set(v.subarray(S,S+B),I),I+=B,S+=B}const J=w;for(let H=0;H<J;H++){let G=0;E[_]=V[H+G],G+=w,E[_+1]=V[H+G],G+=w,E[_+2]=V[H+G],G+=w,E[_+3]=V[H+G],_+=4}O--}return E},d=function(v,M,y,w){const E=v[M+3],_=Math.pow(2,E-128)/255;y[w+0]=v[M+0]*_,y[w+1]=v[M+1]*_,y[w+2]=v[M+2]*_,y[w+3]=1},m=function(v,M,y,w){const E=v[M+3],_=Math.pow(2,E-128)/255;y[w+0]=Qa.toHalfFloat(Math.min(v[M+0]*_,65504)),y[w+1]=Qa.toHalfFloat(Math.min(v[M+1]*_,65504)),y[w+2]=Qa.toHalfFloat(Math.min(v[M+2]*_,65504)),y[w+3]=Qa.toHalfFloat(1)},x=new Uint8Array(e);x.pos=0;const b=p(x);if(b!==-1){const v=b.width,M=b.height,y=g(x.subarray(x.pos),v,M);if(y!==-1){let w,E,_;switch(this.type){case oi:_=y.length/4;const S=new Float32Array(_*4);for(let F=0;F<_;F++)d(y,F*4,S,F*4);w=S,E=oi;break;case Ai:_=y.length/4;const C=new Uint16Array(_*4);for(let F=0;F<_;F++)m(y,F*4,C,F*4);w=C,E=Ai;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:M,data:w,header:b.string,gamma:b.gamma,exposure:b.exposure,type:E}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,s){switch(a.type){case oi:case Ai:a.encoding=er,a.minFilter=Gt,a.magFilter=Gt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,s)}return super.load(e,r,n,i)}}class GM{constructor(e=512,t=512){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");i.fillStyle="rgb(127,127,255)",i.fillRect(0,0,e,t);for(let r=0;r<4e3;r++){const a=Math.random()*e,s=Math.random()*t,l=Math.random()*3+3;let c=Math.random()*2-1,u=Math.random()*2-1,h=1.5;const f=Math.sqrt(c*c+u*u+h*h);c/=f,u/=f,h/=f,i.fillStyle="rgb("+(c*127+127)+","+(u*127+127)+","+h*255+")",i.beginPath(),i.arc(a,s,l,0,Math.PI*2),i.fill()}return n}}alert("sldsdqs");const Go=new qc;let Gi={width:window.innerWidth,height:window.innerHeight},zc,Is=new jt(45,Gi.width/Gi.height);Is.position.set(0,0,4);Go.add(Is);const Ip=document.querySelector(".nike-logo"),Ns=new Xo({canvas:Ip,alpha:!0,antialias:!0}),Fp=()=>{Gi.width=window.innerWidth,Gi.height=window.innerHeight,Is.aspect=Gi.width/Gi.height,Is.updateProjectionMatrix(),Ns.setSize(Gi.width,Gi.height)};Fp();window.addEventListener("resize",Fp);const Op=new Zc(Is,Ip);Op.enabled=!1;Ns.outputEncoding=ot;Ns.toneMapping=Vo;Ns.toneMappingExposure=1.25;let VM=new cc(Ns);var HM=new kM;new BM().load("/assets/hdr/cayley_interior_4k.hdr",function(o){let e=VM.fromCubemap(o);const t=new $v(16777215,1);t.position.set(0,0,20),Go.add(t);let n=new Bv(new GM);n.wrapS=bs,n.wrapT=bs,n.repeat.x=10,n.repeat.y=6;const i={clearcoat:1,clearcoatRoughness:.1,metalness:1,roughness:0,color:8657098,normalMap:n,normalScale:new Ne(.15,.15),envMap:e.texture};let r=new Vv(i);HM.load("/assets/NikeLogo/nike.mtl",function(a){a.preload();var s=new Kc;s.setMaterials(a),s.load("/assets/NikeLogo/nike.obj",function(l){zc=l,l.traverse(function(c){c instanceof Dn&&(c.material=r)}),Go.add(l)},function(l){console.log(l.loaded/l.total*100+"% chargé")},function(l){console.error("Erreur de chargement",l)})})});const Np=()=>{zc&&(zc.rotation.y+=.005),Op.update(),Ns.render(Go,Is),window.requestAnimationFrame(Np)};Np();Ot.registerPlugin(We);Ot.to(".container-sneakers",{opacity:1,scrollTrigger:{trigger:".container-sneakers",start:()=>`top+=${window.innerHeight*1.5}`,end:()=>`top+=${window.innerHeight*2.2}`,scrub:!0}});Ot.to(".container-logo-jordan",{display:"flex",scrollTrigger:{trigger:".container-logo-jordan",start:()=>`top+=${window.innerHeight*9}`,end:()=>`top+=${window.innerHeight*9.1}`,scrub:!0}});Ot.to(".container-logo-jordan",{opacity:.9,scrollTrigger:{trigger:".container-logo-jordan",start:()=>`top+=${window.innerHeight*9}`,end:()=>`top+=${window.innerHeight*10}`,scrub:!0}});const Lr=new qc,WM=new Kc,zp=new ad(16777215,.7);zp.position.set(0,0,4);Lr.add(zp);const kp=new sd(16711935,.5);kp.position.set(0,-5,4);Lr.add(kp);let Vi={width:window.innerWidth,height:window.innerHeight},ci=new jt(45,Vi.width/Vi.height);ci.position.set(0,0,4);Lr.add(ci);const Up=document.querySelector(".sneakers-webgl"),Ko=new Xo({canvas:Up,alpha:!0,antialias:!0});Ko.toneMapping=Vo;Ko.toneMappingExposure=1.25;const Bp=()=>{Vi.width=window.innerWidth,Vi.height=window.innerHeight,ci.aspect=Vi.width/Vi.height,ci.updateProjectionMatrix(),Ko.setSize(Vi.width,Vi.height)};Bp();window.addEventListener("resize",Bp);const Gp=new Zc(ci,Up);Gp.enabled=!1;const tc=new jc;let mr;WM.load("/assets/sneakers/travisScottMocha/baked_mesh_modified.obj",function(o){tc.load("/assets/sneakers/travisScottMocha/baked_mesh_tex0.png",function(n){tc.load("/assets/sneakers/travisScottMocha/baked_mesh_ao0.png",function(i){tc.load("/assets/sneakers/travisScottMocha/baked_mesh_norm0.png",function(r){Lr.traverse(function(a){a instanceof Dn&&(a.material.map=n,a.material.aoMap=i,a.material.normalMap=r,a.material.needsUpdate=!0)})},void 0,function(r){console.error("Erreur de chargement de la texture normale",r)})},void 0,function(i){console.error("Erreur de chargement de la texture d'occlusion ambiante",i)})},void 0,function(n){console.error("Erreur de chargement de la texture diffuse",n)}),Lr.add(o),o.scale.set(9,9,9),o.name="travisScottMocha",mr=Lr.getObjectByName("travisScottMocha"),Ot.to(mr.rotation,{x:.3,y:3.61,z:-1,scrollTrigger:{trigger:".container-sneakers",start:()=>`top+=${window.innerHeight*1.5}`,end:()=>`top+=${window.innerHeight*2.2}`,scrub:!0}}),Ot.to(mr.position,{y:.34,scrollTrigger:{trigger:".container-sneakers",start:()=>`top+=${window.innerHeight*1.5}`,end:()=>`top+=${window.innerHeight*2.2}`,scrub:!0}}),Ot.to(ci.position,{x:-1.16,y:-3.12,z:1.8,scrollTrigger:{trigger:".container-sneakers",start:()=>`top+=${window.innerHeight*1.5}`,end:()=>`top+=${window.innerHeight*2}`,scrub:!0}});const e=Ot.timeline();e.fromTo(".content-part-1",{opacity:0},{opacity:1,duration:.5}).addLabel("visible","+=0").fromTo(".content-part-1",{opacity:1},{opacity:1,duration:0}).addLabel("invisible","+=0").fromTo(".content-part-1",{opacity:1},{opacity:0,duration:.5}),We.create({trigger:".content-part-1",start:()=>`top+=${window.innerHeight*2}`,end:()=>`top+=${window.innerHeight*4}`,animation:e,scrub:!0}),Ot.fromTo(ci.position,{x:-1.16,y:-3.12,z:1.8},{x:2,y:2,z:2,scrollTrigger:{trigger:".container-sneakers",start:()=>`top+=${window.innerHeight*4}`,end:()=>`top+=${window.innerHeight*5}`,scrub:!0}});const t=Ot.timeline();t.fromTo(".content-part-2",{opacity:0},{opacity:1,duration:.5}).addLabel("visible","+=0").fromTo(".content-part-2",{opacity:1},{opacity:1,duration:0}).addLabel("invisible","+=0").fromTo(".content-part-2",{opacity:1},{opacity:0,duration:.5}),We.create({trigger:".content-part-2",start:()=>`top+=${window.innerHeight*5}`,end:()=>`top+=${window.innerHeight*7}`,animation:t,scrub:!0}),Ot.fromTo(ci.position,{x:2,y:2,z:2},{x:0,y:0,z:4,scrollTrigger:{trigger:".container-sneakers",start:()=>`top+=${window.innerHeight*7}`,end:()=>`top+=${window.innerHeight*8}`,scrub:!0}}),Ot.fromTo(mr.position,{y:.34,x:0,z:0},{x:0,y:0,z:0,scrollTrigger:{trigger:".container-sneakers",start:()=>`top+=${window.innerHeight*7}`,end:()=>`top+=${window.innerHeight*8}`,scrub:!0}}),Ot.fromTo(mr.rotation,{x:.3,y:3.61,z:-1},{x:0,y:0,z:0,scrollTrigger:{trigger:".container-sneakers",start:()=>`top+=${window.innerHeight*7}`,end:()=>`top+=${window.innerHeight*8}`,scrub:!0}}),Ot.fromTo(mr.rotation,{x:0,y:0,z:0},{x:0,y:-9.39,z:0,scrollTrigger:{trigger:".container-sneakers",start:()=>`top+=${window.innerHeight*8}`,end:()=>`top+=${window.innerHeight*9}`,scrub:!0}}),Ot.fromTo(ci.position,{x:0,y:0,z:4},{x:0,y:0,z:10,scrollTrigger:{trigger:".container-sneakers",start:()=>`top+=${window.innerHeight*8}`,end:()=>`top+=${window.innerHeight*9}`,scrub:!0}}),wu()},function(o){console.log(o.loaded/o.total*100+"% chargé")},function(o){console.error("Erreur de chargement",o)});let XM=new Kv;const wu=()=>{const o=XM.getElapsedTime();mr.position.y=Math.cos(o*1.5)*.1,Gp.update(),Ko.render(Lr,ci),window.requestAnimationFrame(wu)};wu();
//# sourceMappingURL=index-2e09b830.js.map
