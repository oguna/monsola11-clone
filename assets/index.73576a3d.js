var Y=Object.defineProperty;var W=(t,u,s)=>u in t?Y(t,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[u]=s;var B=(t,u,s)=>(W(t,typeof u!="symbol"?u+"":u,s),s);import{c,a as e,b as k,F as f,d,r as v,o as h,C as V,L as H,e as X,p as R,f as q,g as J,P as Z,h as K,i as G,j as D,k as M,w as _,v as g,l as b,t as p,m as S,n as E,q as N,s as L,u as j,x as O,y as Q,z as tt,A as et,B as ut,D as ot,E as nt}from"./vendor.726a685e.js";const st=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}};st();var F=(t,u)=>{const s=t.__vccOpts||t;for(const[l,n]of u)s[l]=n;return s};const lt={name:"App"},it=e("nav",{class:"navbar navbar-dark bg-dark"},[e("div",{class:"container"},[e("a",{class:"navbar-brand",href:"#"},"MONSOLA-11 Clone")])],-1),at={class:"container"},rt=e("div",{class:"alert alert-warning mt-2",role:"alert"},[d(" \u592A\u967D\u5149\u767A\u96FB\u306E\u8A55\u4FA1\u3067\u5E83\u304F\u5229\u7528\u3055\u308C\u3066\u304D\u305FNEDO\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u3001Flash\u306E\u30B5\u30DD\u30FC\u30C8\u7D42\u4E86\u306B\u4F34\u3044\u30A6\u30A7\u30D6\u4E0A\u3067\u306E\u5229\u7528\u304C\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 \u975E\u516C\u5F0F\u3067\u3059\u304C\u3001Flash\u306B\u4EE3\u308F\u308AJavaScript\u3067\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u3092\u5B9F\u88C5\u3057\u307E\u3057\u305F\u306E\u3067\u3001\u7686\u69D8\u306B\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u3059\u3088\u3046\u516C\u958B\u3057\u307E\u3059\u3002 "),e("br"),d(" \u203B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u8457\u4F5C\u6A29\u306F\u3001\u3059\u3079\u3066NEDO\u307E\u305F\u306FJWA\u304C\u6240\u6709\u3057\u3066\u3044\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u306E\u5229\u7528\u306B\u3064\u3044\u3066\u306F"),e("a",{href:"https://www.nedo.go.jp/qinf/copyright.html"},"NEDO\u306E\u30B5\u30A4\u30C8"),d("\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 \u672C\u30B5\u30A4\u30C8\u306B\u8A18\u8F09\u3055\u308C\u3066\u3044\u308B\u60C5\u5831\u306E\u6B63\u78BA\u3055\u306B\u3064\u3044\u3066\u306F\u4E07\u5168\u3092\u671F\u3057\u3066\u304A\u308A\u307E\u3059\u304C\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u4F5C\u6210\u8005\u306F\u5229\u7528\u8005\u304C\u672C\u30B5\u30A4\u30C8\u306E\u60C5\u5831\u3092\u7528\u3044\u3066\u884C\u3046\u4E00\u5207\u306E\u884C\u70BA\u306B\u3064\u3044\u3066\u3001\u4F55\u3089\u8CAC\u4EFB\u3092\u8CA0\u3046\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 ")],-1);function dt(t,u,s,l,n,a){const o=v("router-view");return h(),c(f,null,[it,e("main",at,[rt,k(o)])],64)}var ht=F(lt,[["render",dt]]);V.register(H,X,R,q,J,Z,K,G);const ct=D({name:"Chart",props:{data:null,options:null},data(){return{ctx:null}},mounted:function(){this.ctx=document.getElementById("myChart").getContext("2d"),this.chart=new V(this.ctx,{type:"line",data:this.data,options:this.options})},methods:{},watch:{data:function(t,u){this.chart.data=t,this.chart.update()},options:function(t,u){this.chart.options=t,this.chart.update()}}}),pt={id:"myChart"};function mt(t,u,s,l,n,a){return h(),c("canvas",pt)}var ft=F(ct,[["render",mt]]);function I(t){if(t.byteLength!=64+17*128*2)throw new Error("invalid file size");const u=t.slice(0,64),l=new TextDecoder().decode(u).split(/\s+/),n=new Int16Array(t,64,17*128),a=[];for(let o=0;o<128;o++)a[o]=[];for(let o=0;o<n.length;o++){let i=n[o];const m=Math.floor(o/17);m==120||m==125?i=i/10:i=i/100,a[m].push(i)}return{area:Number.parseInt(l[0]),id:Number.parseInt(l[1]),name:l[2],lat_d:Number.parseInt(l[3]),lat_m:Number.parseFloat(l[4]),long_d:Number.parseInt(l[5]),long_m:Number.parseFloat(l[6]),alti:Number.parseInt(l[7]),data:a}}function U(t){const u=t.split(`
`),s=[];for(let l=0;l<u.length;l++){if(u[l].length==0)continue;const n=u[l].split(",");s.push({id:Number.parseInt(n[0]),name:n[1],area:Number.parseInt(n[2]),lat:Number.parseFloat(n[3]),long:Number.parseFloat(n[4]),alti:Number.parseFloat(n[5])})}return s}function bt(t){const u=t.split(",");return{left:Number.parseInt(u[3]),bottom:Number.parseInt(u[4]),right:Number.parseInt(u[5]),top:Number.parseInt(u[6])}}function At(t){const u=t.split(`
`),s=[];for(let l=0;l<u.length;l++){if(u[l].length==0)continue;const n=u[l].split(",");s.push({id:Number.parseInt(n[0]),name:n[1],region:Number.parseInt(n[2]),left:Number.parseInt(n[3]),bottom:Number.parseInt(n[4]),right:Number.parseInt(n[5]),top:Number.parseInt(n[6])})}return s}class C{constructor(u=0,s=0,l=0){B(this,"x");B(this,"y");B(this,"z");this.x=u,this.y=s,this.z=l}applyMatrix4(u){const s=this.x,l=this.y,n=this.z,a=u.elements,o=1/(a[3]*s+a[7]*l+a[11]*n+a[15]);return this.x=(a[0]*s+a[4]*l+a[8]*n+a[12])*o,this.y=(a[1]*s+a[5]*l+a[9]*n+a[13])*o,this.z=(a[2]*s+a[6]*l+a[10]*n+a[14])*o,this}multiplyScalar(u){return this.x*=u,this.y*=u,this.z*=u,this}}class w{constructor(){B(this,"elements",[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}makePerspective(u,s,l,n,a,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const i=this.elements,m=2*a/(s-u),r=2*a/(l-n),y=(s+u)/(s-u),P=(l+n)/(l-n),x=-(o+a)/(o-a),z=-2*o*a/(o-a);return i[0]=m,i[4]=0,i[8]=y,i[12]=0,i[1]=0,i[5]=r,i[9]=P,i[13]=0,i[2]=0,i[6]=0,i[10]=x,i[14]=z,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(u,s,l,n,a,o){const i=this.elements,m=1/(s-u),r=1/(l-n),y=1/(o-a),P=(s+u)*m,x=(l+n)*r,z=(o+a)*y;return i[0]=2*m,i[4]=0,i[8]=0,i[12]=-P,i[1]=0,i[5]=2*r,i[9]=0,i[13]=-x,i[2]=0,i[6]=0,i[10]=-2*y,i[14]=-z,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}}class _t{constructor(u=-1,s=1,l=1,n=-1,a=.1,o=2e3){B(this,"type");B(this,"zoom");B(this,"left");B(this,"right");B(this,"top");B(this,"bottom");B(this,"near");B(this,"far");B(this,"projectionMatrix");this.type="OrthographicCamera",this.left=u,this.right=s,this.top=l,this.bottom=n,this.near=a,this.far=o,this.zoom=1,this.projectionMatrix=new w,this.updateProjectionMatrix()}updateProjectionMatrix(){const u=(this.right-this.left)/(2*this.zoom),s=(this.top-this.bottom)/(2*this.zoom),l=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=l-u,o=l+u,i=n+s,m=n-s;this.projectionMatrix.makeOrthographic(a,o,i,m,this.near,this.far)}}const Ct=D({name:"PanelPreview2",props:{azimuth:Number,altitude:Number},data(){return{transformedPolyline:[],transformedAxisPoints:[],transformedPanelPoints:[],transformedShadowPoints:[],viewMatrix:new w,projectionMatrix:new w}},watch:{azimuth:function(t){this.updateScene()},altitude:function(t){this.updateScene()}},methods:{updateScene(){const t=this.azimuth-Math.PI/2,u=Math.sin(this.altitude),s=new C(Math.sin(t+Math.PI*(2/3+1/6)),0,Math.cos(t+Math.PI*(2/3+1/6))),l=new C(Math.sin(t+Math.PI*7/6),u,Math.cos(t+Math.PI*7/6)),n=new C(Math.sin(t+Math.PI/6),0,Math.cos(t+Math.PI/6)),a=new C(Math.sin(t+Math.PI*(5/3+1/6)),u,Math.cos(t+Math.PI*(5/3+1/6)));s.multiplyScalar(1-Math.cos(this.altitude)),l.multiplyScalar(Math.cos(this.altitude)),n.multiplyScalar(1-Math.cos(this.altitude)),a.multiplyScalar(Math.cos(this.altitude));const o=[];o.push(new C(Math.sin(t+Math.PI/6),0,Math.cos(t+Math.PI/6))),o.push(new C(Math.sin(t+Math.PI*(2/3+1/6)),0,Math.cos(t+Math.PI*(2/3+1/6)))),o.push(new C(s.x+l.x,-u,s.z+l.z)),o.push(new C(n.x+a.x,-u,n.z+a.z));const i=[];for(const y of o)i.push(this.transform(this.projectionMatrix,this.viewMatrix,y));this.transformedPanelPoints=i;const m=[];m.push(new C(Math.sin(t+Math.PI/6),0,Math.cos(t+Math.PI/6))),m.push(new C(Math.sin(t+Math.PI*(2/3+1/6)),0,Math.cos(t+Math.PI*(2/3+1/6)))),m.push(new C(s.x+l.x,0,s.z+l.z)),m.push(new C(n.x+a.x,0,n.z+a.z));const r=[];for(const y of m)r.push(this.transform(this.projectionMatrix,this.viewMatrix,y));this.transformedShadowPoints=r},transform(t,u,s){return s.applyMatrix4(u),s.applyMatrix4(t),s.x=s.x*120+120,s.y=-s.y*100+100,s}},computed:{transformedPolylineString(){return this.transformedPolyline.map(t=>t.x+","+t.y).join(" ")},transformedPanelPointsString(){return this.transformedPanelPoints.map(t=>t.x+","+t.y).join(" ")},transformedShadowPointsString(){return this.transformedShadowPoints.map(t=>t.x+","+t.y).join(" ")}},beforeMount:function(){const t=new w;t.elements=[.8944271909999157,-.12777531299998798,.4285714285714285,0,13877787807814454e-33,.9583148474999098,.2857142857142856,0,-.4472135954999578,-.2555506259999759,.8571428571428571,0,-33306690738754686e-32,-22204460492503126e-32,-3.5,.9999999999999998],this.viewMatrix=t;const s=new _t(-1.2,1.2,1.2,-1.2,1.2,100).projectionMatrix;this.projectionMatrix=s;const l=[];for(let i=0;i<32;i++){const m=Math.PI*2/32*i,r=new C(Math.sin(m),0,Math.cos(m));l.push(r)}l.push(new C(0,0,1));const n=[];for(const i of l)n.push(this.transform(s,t,i));this.transformedPolyline=n;const a=[];a.push(new C(0,0,1.2)),a.push(new C(0,0,-1.2)),a.push(new C(1.2,0,0)),a.push(new C(-1.2,0,0));const o=[];for(const i of a)o.push(this.transform(s,t,i));this.transformedAxisPoints=o,this.updateScene()}}),Bt=["points"],yt=["x1","y1","x2","y2"],Et=["x1","y1","x2","y2"],gt=["points"],Ft=["points"],vt=["x","y"],Mt=["x","y"],$t=["x","y"];function kt(t,u,s,l,n,a){return h(),c("svg",null,[e("polyline",{points:t.transformedPolylineString,style:{fill:"none",stroke:"black","stroke-width":"1"}},null,8,Bt),t.transformedAxisPoints.length>=2?(h(),c("line",{key:0,x1:t.transformedAxisPoints[0].x,y1:t.transformedAxisPoints[0].y,x2:t.transformedAxisPoints[1].x,y2:t.transformedAxisPoints[1].y,style:{stroke:"black","stroke-width":"1"}},null,8,yt)):M("",!0),t.transformedAxisPoints.length>=4?(h(),c("line",{key:1,x1:t.transformedAxisPoints[2].x,y1:t.transformedAxisPoints[2].y,x2:t.transformedAxisPoints[3].x,y2:t.transformedAxisPoints[3].y,style:{stroke:"black","stroke-width":"1"}},null,8,Et)):M("",!0),e("polygon",{points:t.transformedPanelPointsString,style:{fill:"blue","fill-opacity":"0.5",stroke:"black","stroke-width":"1"}},null,8,gt),e("polygon",{points:t.transformedShadowPointsString,style:{fill:"gray","fill-opacity":"0.5",stroke:"black","stroke-width":"1"}},null,8,Ft),e("text",{x:t.transformedAxisPoints[0].x,y:t.transformedAxisPoints[0].y},"\u5357",8,vt),e("text",{x:t.transformedAxisPoints[2].x,y:t.transformedAxisPoints[2].y},"\u6771",8,Mt),e("text",{x:t.transformedAxisPoints[3].x,y:t.transformedAxisPoints[3].y},"\u897F",8,$t)])}var Dt=F(Ct,[["render",kt]]);const wt=D({name:"Home",components:{Chart:ft,PanelPreview2:Dt},data(){return{picked:"Angle",angleMode:"Tilt",areaList:null,nationwidePos:null,amedasList:null,info:null,optionMonth:1,valueTilt:0,valueAzimuth:0}},mounted:function(){const t="/monsola11-clone";fetch(t+"/data/code_map1.txt").then(u=>u.text()).then(u=>bt(u)),fetch(t+"/data/code_map3.txt").then(u=>u.text()).then(u=>this.areaList=At(u)),fetch(t+"/data/point_amedas.txt").then(u=>u.text()).then(u=>this.amedasList=U(u)),fetch(t+"/data/monsola11/m11001.bin").then(u=>u.blob()).then(u=>u.arrayBuffer()).then(u=>this.info=I(u))},computed:{selectedArea:{get:function(){return this.$store.state.area},set:function(t){var s;let u=(s=this.amedasList)==null?void 0:s.filter(l=>l.area==t)[0].id;u===void 0&&(u=11001),this.$store.commit("setAmedas",u),this.$store.commit("setArea",t)}},selectedAmedas:{get:function(){return this.$store.state.amedas},set:function(t){this.$store.commit("setAmedas",t)}},filteredPoints:function(){return this.amedasList==null?[]:this.amedasList.filter(t=>t.area===this.selectedArea)},chartData:function(){const t="0\xB0 10\xB0 20\xB0 30\xB0 40\xB0 50\xB0 60\xB0 70\xB0 80\xB0 90\xB0".split(" "),u="1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708 \u5E73\u5747 \u51AC \u6625 \u590F \u79CB ".split(" "),s="0\u5EA6 15\u5EA6 30\u5EA6 45\u5EA6 60\u5EA6 75\u5EA6 90\u5EA6 105\u5EA6 120\u5EA6 135\u5EA6 150\u5EA6 165\u5EA6 180\u5EA6".split(" "),l=[{borderColor:"#43BEE5",pointStyle:"circle"},{borderColor:"#0B92D9",backgroundColor:"#0B92D9",pointStyle:"circle"},{borderColor:"#2061D5",pointStyle:"cross"},{borderColor:"#2121CD",pointStyle:"triangle"},{borderColor:"#C866D1",pointStyle:"triangle"},{borderColor:"#ED02B3",backgroundColor:"#ED02B3",pointStyle:"triangle"},{borderColor:"#FF211F",pointStyle:"rect"},{borderColor:"#FF9D00",backgroundColor:"#FF9D00",pointStyle:"rect"},{borderColor:"#E0CC58",pointStyle:"rect"},{borderColor:"#A7AC00",backgroundColor:"#A7AC00",pointStyle:"rect"},{borderColor:"#AEE92C",pointStyle:"rect"},{borderColor:"#62D911",backgroundColor:"#62D911",pointStyle:"rect"},{borderColor:"#5EA829",pointStyle:"rect"}];if(this.picked==="Month"){const n=[];for(let o=0;o<13;o++){const i=[];i.push(this.info.data[0][this.optionMonth-1]);for(let m=0;m<9;m++)i.push(this.info.data[o*9+m+3][this.optionMonth-1]);n.push(i)}const a=[];for(let o=0;o<13;o++)a.push({label:s[o],backgroundColor:l[o].backgroundColor,borderColor:l[o].borderColor,fill:!1,lineTension:0,data:n[o]});return{labels:t,datasets:a}}else{if(this.picked==="Year")return{datasets:[{label:"\u5E73\u5747\u5024",backgroundColor:"#00FF00",borderColor:"#00FF00",fill:!1,lineTension:0,data:this.info.data[0]},{label:"\u6700\u5927\u5024",borderColor:"#FF0000",fill:!1,lineTension:0,data:this.info.data[1]},{label:"\u6700\u5C0F\u5024",borderColor:"#0000FF",fill:!1,lineTension:0,data:this.info.data[2]}],labels:u};if(this.picked==="Angle"){if(this.angleMode==="BestAngle")return{datasets:[{label:"\u6700\u9069\u50BE\u659C\u89D2\u30B0\u30E9\u30D5",backgroundColor:"#0000FF",borderColor:"#0000FF",fill:!1,lineTension:0,data:this.info.data[120]}],labels:u};if(this.angleMode==="EveryMonthBest")return{datasets:[{label:"\u6700\u9069\u50BE\u659C\u89D2\u306B\u304A\u3051\u308B\u65E5\u5C04\u91CF",borderColor:"#0000FF",fill:!1,lineTension:0,data:this.info.data[121]}],labels:u};if(this.angleMode==="YearBest")return{datasets:[{label:"\u5E74\u9593\u6700\u9069\u50BE\u659C\u89D2\u306B\u304A\u3051\u308B\u65E5\u5C04\u91CF",borderColor:"#0000FF",fill:!1,lineTension:0,data:this.info.data[122]}],labels:u};if(this.angleMode==="Tilt"){const n=[0,10,20,30,40,50,60,70,80,90].indexOf(this.valueTilt);if(n===0){const o=[];return o.push({label:s[0],backgroundColor:l[0].backgroundColor,borderColor:l[0].borderColor,fill:!1,lineTension:0,data:this.info.data[0]}),{labels:u,datasets:o}}const a=[];for(let o=0;o<=12;o++)a.push({label:s[o],backgroundColor:l[o].backgroundColor,borderColor:l[o].borderColor,fill:!1,lineTension:0,data:this.info.data[o*9+2+n]});return{labels:u,datasets:a}}else if(this.angleMode==="Azimuth"){const n=[0,15,30,45,60,75,90,105,120,135,150,165,180].indexOf(this.valueAzimuth),a=[];for(let o=0;o<9;o++)a.push({label:t[o+1],backgroundColor:l[o].backgroundColor,borderColor:l[o].borderColor,fill:!1,lineTension:0,data:this.info.data[o+3+n*9]});return{labels:u,datasets:a}}else if(this.angleMode==="TiltAzimuth"){const n=[0,10,20,30,40,50,60,70,80,90].indexOf(this.valueTilt),a=[0,15,30,45,60,75,90,105,120,135,150,165,180].indexOf(this.valueAzimuth);let o;n===0?o=0:o=n+2+a*9;const i=[];return i.push({label:`\u50BE\u659C\u89D2${this.valueTilt}\u5EA6 \u65B9\u4F4D\u89D2${this.valueAzimuth}\u5EA6`,borderColor:l[0].borderColor,fill:!1,lineTension:0,data:this.info.data[o]}),{labels:u,datasets:i}}return null}else throw"unexpected reach"}},chartOptions:function(){let t,u,s,l;if(this.picked==="Month")t="\u6708\u5225\u306E\u65E5\u5C04\u91CF\u30B0\u30E9\u30D5 "+this.optionMonth+"\u6708",u="\u50BE\u659C\u89D2",s="\u65E5\u5C04\u91CF(kWh/m2)",l=8;else if(this.picked==="Year")t="\u5E74\u5909\u52D5\u30B0\u30E9\u30D5",u="\u6708\u30FB\u5B63",s="\u65E5\u5C04\u91CF(kWh/m2)",l=8;else if(this.picked==="Angle")if(this.angleMode==="Tilt")t="\u659C\u9762\u65E5\u5C04\u91CF\u30B0\u30E9\u30D5 \u50BE\u659C\u89D2 "+this.valueTilt+"\u5EA6",u="\u6708\u30FB\u5B63",s="\u65E5\u5C04\u91CF(kWh/m2)",l=8;else if(this.angleMode==="Azimuth")t="\u659C\u9762\u65E5\u5C04\u91CF\u30B0\u30E9\u30D5 \u65B9\u4F4D\u89D2 "+this.valueAzimuth+"\u5EA6",u="\u6708\u30FB\u5B63",s="\u65E5\u5C04\u91CF(kWh/m2)",l=8;else if(this.angleMode==="TiltAzimuth")t="\u659C\u9762\u65E5\u5C04\u91CF\u30B0\u30E9\u30D5 \u50BE\u659C\u89D2 "+this.valueTilt+"\u5EA6 \u65B9\u4F4D\u89D2 "+this.valueAzimuth+"\u5EA6",u="\u6708\u30FB\u5B63",s="\u65E5\u5C04\u91CF(kWh/m2)",l=8;else if(this.angleMode==="BestAngle")t="\u6700\u9069\u50BE\u659C\u89D2\u30B0\u30E9\u30D5",u="\u6708\u30FB\u5B63",s="\u6700\u9069\u50BE\u659C\u89D2(\xB0)",l=90;else if(this.angleMode==="EveryMonthBest")t="\u6700\u9069\u50BE\u659C\u89D2\u306B\u304A\u3051\u308B\u65E5\u5C04\u91CF\u30B0\u30E9\u30D5",u="\u6708\u30FB\u5B63",s="\u65E5\u5C04\u91CF(kWh/m2)",l=8;else if(this.angleMode==="YearBest")t="\u5E74\u9593\u6700\u9069\u50BE\u659C\u89D2\u306B\u304A\u3051\u308B\u65E5\u5C04\u91CF\u30B0\u30E9\u30D5",u="\u6708\u30FB\u5B63",s="\u65E5\u5C04\u91CF(kWh/m2)",l=8;else throw"unexpected reach";else throw"unexpected reach";return{animation:!1,scales:{x:{title:{display:!0,text:u}},y:{title:{display:!0,text:s},min:0,max:l}},plugins:{legend:{position:"bottom"},title:{display:!0,text:t+" @"+this.info.name}}}}},watch:{selectedAmedas(t,u){fetch("/monsola11-clone"+"/data/monsola11/m"+t+".bin").then(l=>l.blob()).then(l=>l.arrayBuffer()).then(l=>this.info=I(l))}}}),Pt={class:"row row-cols-1 row-cols-md-4 mb-4"},xt={class:"col"},zt={class:"card mb-4 shadow-sm"},St=e("div",{class:"card-header"},[e("h4",null,"\u5730\u70B9\u6307\u5B9A")],-1),It={class:"card-body"},Tt=d(" \u30A8\u30EA\u30A2\u540D "),Nt=["value"],Vt=e("br",null,null,-1),Lt=d(" \u5730\u70B9\u540D "),jt=["value"],Ot=e("br",null,null,-1),Ut=e("button",null,"\u5730\u56F3\u304B\u3089\u9078\u629E",-1),Yt={class:"col"},Wt={class:"card mb-4 shadow-sm"},Ht=e("div",{class:"card-header"},[e("h4",null,"\u8868\u793A\u30C7\u30FC\u30BF\u6307\u5B9A")],-1),Xt={class:"card-body"},Rt=e("label",{for:"month"},"\u6708\u6307\u5B9A",-1),qt=["disabled"],Jt=["value"],Zt=e("br",null,null,-1),Kt=e("label",{for:"angle"},"\u89D2\u5EA6\u6307\u5B9A",-1),Gt=e("br",null,null,-1),Qt=e("label",{for:"year"},"\u5E74\u5909\u52D5",-1),te={class:"col"},ee={class:"card mb-4 shadow-sm"},ue=e("div",{class:"card-header"},[e("h4",null,"\u89D2\u5EA6\u6307\u5B9A")],-1),oe={class:"card-body"},ne=["disabled"],se=e("label",{for:"tilt"},"\u50BE\u659C\u89D2\u6307\u5B9A",-1),le=["disabled"],ie=["value"],ae=d(" \u5EA6 "),re=e("br",null,null,-1),de=["disabled"],he=e("label",{for:"azimuth"},"\u65B9\u4F4D\u89D2\u6307\u5B9A",-1),ce=["disabled"],pe=d(" \u5EA6 "),me=e("br",null,null,-1),fe=["disabled"],be=e("label",{for:"tiltAzimuth"},"\u4EFB\u610F\u306E\u6307\u5B9A",-1),Ae=e("br",null,null,-1),_e=d(" \u50BE\u659C\u89D2"),Ce=["disabled"],Be=d("\u5EA6 "),ye=e("br",null,null,-1),Ee=d(" \u65B9\u4F4D\u89D2"),ge=["disabled"],Fe=d(" \u5EA6 "),ve=e("br",null,null,-1),Me=["disabled"],$e=e("label",{for:"bestAngle"},"\u6700\u9069\u50BE\u659C\u89D2",-1),ke=e("br",null,null,-1),De=["disabled"],we=e("label",{for:"everyMonthBest"},"\u5404\u6708\u306E\u6700\u9069\u50BE\u659C\u89D2\u306B\u304A\u3051\u308B\u65E5\u5C04\u91CF",-1),Pe=e("br",null,null,-1),xe=["disabled"],ze=e("label",{for:"yearBest"},"\u5E74\u9593\u6700\u9069\u50BE\u659C\u89D2\u306B\u304A\u3051\u308B\u65E5\u5C04\u91CF",-1),Se={class:"col"},Ie={class:"card mb-4 shadow-sm"},Te=e("div",{class:"card-header"},[e("h4",null,"\u30D1\u30CD\u30EB")],-1),Ne={class:"card-body"},Ve=e("label",null,"\u50BE\u659C\u89D2",-1),Le=d(" 0\xB0"),je=d("90\xB0 "),Oe={id:"tickmarks"},Ue=["value"],Ye=e("br",null,null,-1),We=e("label",null,"\u65B9\u4F4D\u89D2",-1),He=d(" \u5357"),Xe=d("\u5317 "),Re={id:"tickmarksA"},qe=["value"],Je=d("\u30C7\u30FC\u30BF\u4E00\u89A7\u8868\u3092\u8868\u793A");function Ze(t,u,s,l,n,a){const o=v("router-link"),i=v("panel-preview-2"),m=v("Chart");return h(),c(f,null,[e("div",Pt,[e("div",xt,[e("div",zt,[St,e("div",It,[Tt,_(e("select",{"onUpdate:modelValue":u[0]||(u[0]=r=>t.selectedArea=r)},[(h(!0),c(f,null,b(t.areaList,r=>(h(),c("option",{key:r.id,value:r.id},p(r.name),9,Nt))),128))],512),[[g,t.selectedArea]]),Vt,Lt,_(e("select",{"onUpdate:modelValue":u[1]||(u[1]=r=>t.selectedAmedas=r)},[(h(!0),c(f,null,b(t.filteredPoints,r=>(h(),c("option",{key:r.id,value:r.id},p(r.name),9,jt))),128))],512),[[g,t.selectedAmedas]]),Ot,k(o,{to:{name:"map"}},{default:S(()=>[Ut]),_:1})])])]),e("div",Yt,[e("div",Wt,[Ht,e("div",Xt,[_(e("input",{type:"radio",id:"month",value:"Month","onUpdate:modelValue":u[2]||(u[2]=r=>t.picked=r)},null,512),[[E,t.picked]]),Rt,_(e("select",{"onUpdate:modelValue":u[3]||(u[3]=r=>t.optionMonth=r),disabled:t.picked!="Month"},[(h(),c(f,null,b([1,2,3,4,5,6,7,8,9,10,11,12],r=>e("option",{value:r,key:r},p(r)+"\u6708 ",9,Jt)),64))],8,qt),[[g,t.optionMonth]]),Zt,_(e("input",{type:"radio",id:"angle",value:"Angle","onUpdate:modelValue":u[4]||(u[4]=r=>t.picked=r)},null,512),[[E,t.picked]]),Kt,Gt,_(e("input",{type:"radio",id:"year",value:"Year","onUpdate:modelValue":u[5]||(u[5]=r=>t.picked=r)},null,512),[[E,t.picked]]),Qt])])]),e("div",te,[e("div",ee,[ue,e("div",oe,[_(e("input",{type:"radio",id:"tilt",value:"Tilt","onUpdate:modelValue":u[6]||(u[6]=r=>t.angleMode=r),disabled:t.picked!="Angle"},null,8,ne),[[E,t.angleMode]]),se,_(e("select",{"onUpdate:modelValue":u[7]||(u[7]=r=>t.valueTilt=r),disabled:t.picked!="Angle"||t.angleMode!="Tilt"},[(h(),c(f,null,b([0,10,20,30,40,50,60,70,80,90],r=>e("option",{value:r,key:r},p(r),9,ie)),64))],8,le),[[g,t.valueTilt,void 0,{number:!0}]]),ae,re,_(e("input",{type:"radio",id:"azimuth",value:"Azimuth","onUpdate:modelValue":u[8]||(u[8]=r=>t.angleMode=r),disabled:t.picked!="Angle"},null,8,de),[[E,t.angleMode]]),he,_(e("select",{"onUpdate:modelValue":u[9]||(u[9]=r=>t.valueAzimuth=r),disabled:t.picked!="Angle"||t.angleMode!="Azimuth"},[(h(),c(f,null,b([0,15,30,45,60,75,90,105,120,135,150,165,180],r=>e("option",{key:r},p(r),1)),64))],8,ce),[[g,t.valueAzimuth,void 0,{number:!0}]]),pe,me,_(e("input",{type:"radio",id:"tiltAzimuth",value:"TiltAzimuth","onUpdate:modelValue":u[10]||(u[10]=r=>t.angleMode=r),disabled:t.picked!="Angle"},null,8,fe),[[E,t.angleMode]]),be,Ae,_e,_(e("select",{"onUpdate:modelValue":u[11]||(u[11]=r=>t.valueTilt=r),disabled:t.picked!="Angle"||t.angleMode!="TiltAzimuth"},[(h(),c(f,null,b([0,10,20,30,40,50,60,70,80,90],r=>e("option",{key:r},p(r),1)),64))],8,Ce),[[g,t.valueTilt,void 0,{number:!0}]]),Be,ye,Ee,_(e("select",{"onUpdate:modelValue":u[12]||(u[12]=r=>t.valueAzimuth=r),disabled:t.picked!="Angle"||t.angleMode!="TiltAzimuth"},[(h(),c(f,null,b([0,15,30,45,60,75,90,105,120,135,150,165,180],r=>e("option",{key:r},p(r),1)),64))],8,ge),[[g,t.valueAzimuth,void 0,{number:!0}]]),Fe,ve,_(e("input",{type:"radio",id:"bestAngle",value:"BestAngle","onUpdate:modelValue":u[13]||(u[13]=r=>t.angleMode=r),disabled:t.picked!="Angle"},null,8,Me),[[E,t.angleMode]]),$e,ke,_(e("input",{type:"radio",id:"everyMonthBest",value:"EveryMonthBest","onUpdate:modelValue":u[14]||(u[14]=r=>t.angleMode=r),disabled:t.picked!="Angle"},null,8,De),[[E,t.angleMode]]),we,Pe,_(e("input",{type:"radio",id:"yearBest",value:"YearBest","onUpdate:modelValue":u[15]||(u[15]=r=>t.angleMode=r),disabled:t.picked!="Angle"},null,8,xe),[[E,t.angleMode]]),ze])])]),e("div",Se,[e("div",Ie,[Te,e("div",Ne,[k(i,{altitude:-t.valueTilt/180*Math.PI,azimuth:t.valueAzimuth/180*Math.PI},null,8,["altitude","azimuth"]),Ve,Le,_(e("input",{type:"range",list:"tickmarks",step:"10",min:"0",max:"90","onUpdate:modelValue":u[16]||(u[16]=r=>t.valueTilt=r)},null,512),[[N,t.valueTilt,void 0,{number:!0}]]),je,e("datalist",Oe,[(h(!0),c(f,null,b(Array.from({length:10},(r,y)=>y*10),r=>(h(),c("option",{key:r,value:r,label:"0%"},null,8,Ue))),128))]),Ye,We,He,_(e("input",{type:"range",list:"tickmarksA",step:"15",min:"0",max:"180","onUpdate:modelValue":u[17]||(u[17]=r=>t.valueAzimuth=r)},null,512),[[N,t.valueAzimuth,void 0,{number:!0}]]),Xe,e("datalist",Re,[(h(!0),c(f,null,b(Array.from({length:12},(r,y)=>y*15+15),r=>(h(),c("option",{key:r,value:r},null,8,qe))),128))])])])])]),t.info!=null?(h(),L(m,{key:0,data:t.chartData,options:t.chartOptions},null,8,["data","options"])):M("",!0),k(o,{to:"/table/m"+t.selectedAmedas},{default:S(()=>[Je]),_:1},8,["to"])],64)}var Ke=F(wt,[["render",Ze]]);const Ge={name:"HomeView",components:{Home:Ke}};function Qe(t,u,s,l,n,a){const o=v("Home");return h(),L(o)}var tu=F(Ge,[["render",Qe]]);const eu=D({name:"TableView",props:{amedas:String},data:()=>({info:null}),mounted:function(){fetch("/monsola11-clone/data/monsola11/"+this.amedas+".bin").then(t=>t.blob()).then(t=>t.arrayBuffer()).then(t=>this.info=I(t))},computed:{caption:function(){return this.info==null?"":`\u5730\u70B9 ${this.info.name} (\u7DEF\u5EA6=${this.info.lat_d}\xB0${this.info.lat_m}\u2032 \u7D4C\u5EA6=${this.info.long_d}\xB0${this.info.long_m}\u2032 \u6A19\u9AD8=${this.info.alti}m)`}}}),A=t=>(j("data-v-fb3df31c"),t=t(),O(),t),uu=A(()=>e("h1",null,"\u6708\u5E73\u5747\u659C\u9762\u65E5\u5C04\u91CF (kWh/\u33A1\u30FBday)",-1)),ou={key:0,class:"table"},nu=A(()=>e("tr",null,[e("th",null,"\u65B9\u4F4D\u89D2"),e("th",null,"\u50BE\u659C\u89D2"),e("th",null,"1\u6708"),e("th",null,"2\u6708"),e("th",null,"3\u6708"),e("th",null,"4\u6708"),e("th",null,"5\u6708"),e("th",null,"6\u6708"),e("th",null,"7\u6708"),e("th",null,"8\u6708"),e("th",null,"9\u6708"),e("th",null,"10\u6708"),e("th",null,"11\u6708"),e("th",null,"12\u6708"),e("th",null,[d("\u5E74"),e("br"),d("1-12\u6708")]),e("th",null,[d("\u51AC"),e("br"),d("12-2\u6708")]),e("th",null,[d("\u6625"),e("br"),d("2-5\u6708")]),e("th",null,[d("\u590F"),e("br"),d("6-8\u6708")]),e("th",null,[d("\u79CB"),e("br"),d("9-11\u6708")])],-1)),su=A(()=>e("td",{rowspan:"3"},"\u6C34\u5E73\u9762",-1)),lu=A(()=>e("td",null,[d("\u5E73\u5747\u5024"),e("br"),d("(C)")],-1)),iu=A(()=>e("td",null,"\u6700\u5927\u5024",-1)),au=A(()=>e("td",null,"\u6700\u5C0F\u5024",-1)),ru={key:0,rowspan:"9"},du=A(()=>e("td",{colspan:"2"},"\u6708\u5225\u6700\u9069\u50BE\u659C\u89D2",-1)),hu=d("\uFF0A"),cu=A(()=>e("br",null,null,-1)),pu=d("\uFF0A\uFF0A"),mu=A(()=>e("br",null,null,-1)),fu=d("\uFF0A\uFF0A"),bu=A(()=>e("br",null,null,-1)),Au=d("\uFF0A\uFF0A"),_u=A(()=>e("br",null,null,-1)),Cu=d("\uFF0A\uFF0A"),Bu=A(()=>e("br",null,null,-1)),yu=A(()=>e("td",{colspan:"2"},[d("\u6708\u5225\u6700\u9069\u50BE\u659C\u89D2"),e("br"),d("\u306B\u304A\u3051\u308B\u65E5\u5C04\u91CF(A)")],-1)),Eu=d("\u203B"),gu=A(()=>e("br",null,null,-1)),Fu=d("\u203B\u203B"),vu=A(()=>e("br",null,null,-1)),Mu=d("\u203B\u203B"),$u=A(()=>e("br",null,null,-1)),ku=d("\u203B\u203B"),Du=A(()=>e("br",null,null,-1)),wu=d("\u203B\u203B"),Pu=A(()=>e("br",null,null,-1)),xu=A(()=>e("td",{colspan:"2"},[d("\u5E74\u9593\u6700\u9069\u50BE\u659C\u89D2"),e("br"),d("\u306B\u304A\u3051\u308B\u65E5\u5C04\u91CF(B)")],-1)),zu=A(()=>e("td",{colspan:"2"},"\u6BD4\u7387 (A/B)",-1)),Su=A(()=>e("td",{colspan:"2"},"\u6BD4\u7387 (B/C)",-1)),Iu=A(()=>e("td",{colspan:"2"},"\u5E73\u5747\u6C17\u6E29",-1)),Tu=A(()=>e("td",{colspan:"2"},"\u6563\u4E71\u65E5\u5C04\u91CF",-1)),Nu=A(()=>e("td",{colspan:"2"},[d("\u7A4D\u96EA10cm\u4EE5\u4E0A"),e("br"),d("\u306E\u51FA\u73FE\u7387")],-1)),Vu=d(" \uFF0A\u5E74\u9593\u6700\u9069\u50BE\u659C\u89D2 \uFF0A\uFF0A\u5B63\u7BC0\u5225\u6700\u9069\u50BE\u659C\u89D2\u3000\u203B\u6708\u5225\u6700\u9069\u50BE\u659C\u89D2\u306B\u304A\u3051\u308B\u65E5\u5C04\u91CF\u306E\u5E74\u5E73\u5747\u5024 \u203B\u203B\u5B63\u7BC0\u5225\u6700\u9069\u50BE\u659C\u89D2\u306B\u304A\u3051\u308B\u65E5\u5C04\u91CF ");function Lu(t,u,s,l,n,a){return h(),c(f,null,[uu,d(" "+p(t.caption)+" ",1),t.info?(h(),c("table",ou,[nu,e("tr",null,[su,lu,(h(!0),c(f,null,b(t.info.data[0],o=>(h(),c("td",{key:o},p(o),1))),128))]),e("tr",null,[iu,(h(!0),c(f,null,b(t.info.data[1],o=>(h(),c("td",{key:o},p(o),1))),128))]),e("tr",null,[au,(h(!0),c(f,null,b(t.info.data[2],o=>(h(),c("td",{key:o},p(o),1))),128))]),(h(),c(f,null,b(117,o=>e("tr",{key:o},[(o-1)%9==0?(h(),c("td",ru,p(Math.floor((o-1)/9)*15)+"\xB0 ",1)):M("",!0),e("td",null,p(((o-1)%9+1)*10)+"\xB0",1),(h(),c(f,null,b(17,i=>e("td",{key:i},p(t.info.data[o+2][i-1].toFixed(2)),1)),64))])),64)),e("tr",null,[du,(h(),c(f,null,b(12,o=>e("td",{key:o},p(t.info.data[120][o-1].toFixed(1)),1)),64)),e("td",null,[hu,cu,d(p(t.info.data[120][12].toFixed(1)),1)]),e("td",null,[pu,mu,d(p(t.info.data[120][13].toFixed(1)),1)]),e("td",null,[fu,bu,d(p(t.info.data[120][14].toFixed(1)),1)]),e("td",null,[Au,_u,d(p(t.info.data[120][15].toFixed(1)),1)]),e("td",null,[Cu,Bu,d(p(t.info.data[120][16].toFixed(1)),1)])]),e("tr",null,[yu,(h(),c(f,null,b(12,o=>e("td",{key:o},p(t.info.data[121][o-1].toFixed(2)),1)),64)),e("td",null,[Eu,gu,d(p(t.info.data[121][12].toFixed(1)),1)]),e("td",null,[Fu,vu,d(p(t.info.data[121][13].toFixed(1)),1)]),e("td",null,[Mu,$u,d(p(t.info.data[121][14].toFixed(1)),1)]),e("td",null,[ku,Du,d(p(t.info.data[121][15].toFixed(1)),1)]),e("td",null,[wu,Pu,d(p(t.info.data[121][16].toFixed(1)),1)])]),e("tr",null,[xu,(h(),c(f,null,b(17,o=>e("td",{key:o},p(t.info.data[122][o-1].toFixed(2)),1)),64))]),e("tr",null,[zu,(h(),c(f,null,b(17,o=>e("td",{key:o},p(t.info.data[123][o-1].toFixed(2)),1)),64))]),e("tr",null,[Su,(h(),c(f,null,b(17,o=>e("td",{key:o},p(t.info.data[124][o-1].toFixed(2)),1)),64))]),e("tr",null,[Iu,(h(),c(f,null,b(17,o=>e("td",{key:o},p(t.info.data[125][o-1].toFixed(1)),1)),64))]),e("tr",null,[Tu,(h(),c(f,null,b(17,o=>e("td",{key:o},p(t.info.data[126][o-1].toFixed(2)),1)),64))]),e("tr",null,[Nu,(h(),c(f,null,b(17,o=>e("td",{key:o},p(t.info.data[127][o-1].toFixed(2)),1)),64))])])):M("",!0),Vu],64)}var ju=F(eu,[["render",Lu],["__scopeId","data-v-fb3df31c"]]);const Ou=D({props:{},mounted(){fetch("/monsola11-clone"+"/data/point_amedas.txt").then(u=>u.text()).then(u=>this.amedasList=U(u)).then(()=>{fetch("/monsola11-clone/data/japan.geojson").then(u=>u.json()).then(u=>{this.createMap(u)})})},data(){return{areaList:null,nationwidePos:null,amedasList:[],d:null,scale:20,x:138,y:36,startX:null,startY:null,mouseX:null,mouseY:null,selectedAmedas:null,width:800,height:600}},methods:{createMap:function(t){const u=[];for(let s=0;s<t.features.length;s++){const l=[];if(t.features[s].geometry.type==="MultiPolygon")for(let n=0;n<t.features[s].geometry.coordinates.length;n++)for(let a=0;a<t.features[s].geometry.coordinates[n].length;a++){const o=t.features[s].geometry.coordinates[n][a],i=[];for(let m of o)i.push(m[0]+","+m[1]);l.push("M"+i.join("L")+"Z")}else if(t.features[s].geometry.type==="Polygon")for(let n=0;n<t.features[s].geometry.coordinates.length;n++){const a=t.features[s].geometry.coordinates[n],o=[];for(let i of a)o.push(i[0]+","+i[1]);l.push("M"+o.join("L")+"Z")}u.push(l.join(""))}this.d=u},scroll(t){this.scale-=t.deltaY/150*2,this.scale<10&&(this.scale=10),this.scale>100&&(this.scale=100),t.preventDefault()},drag(t){t.buttons===1&&(this.x=this.startX+-(t.x-this.mouseX)/this.scale,this.y=this.startY+(t.y-this.mouseY)/this.scale)},dragstart(t){t.buttons===1&&(this.mouseX=t.x,this.mouseY=t.y,this.startX=this.x,this.startY=this.y)}},computed:{transform:function(){const t=`translate(${this.width/2},${this.height/2})`,u=`scale(${this.scale}, -${this.scale})`,s=`translate(-${this.x}, -${this.y})`;return t+" "+u+" "+s},amedas:{get(){return this.$store.state.amedas},set(t){this.$store.commit("setAmedas",t)}},getSelectedAmedas(){return this.amedasList==null||this.amedas==null?null:this.amedasList.find(t=>t.id==this.amedas)}}}),$=t=>(j("data-v-7c989674"),t=t(),O(),t),Uu=["width","height"],Yu=["transform"],Wu=["d"],Hu=["cx","cy","onClick"],Xu={key:0},Ru=$(()=>e("th",null,"\u5730\u70B9",-1)),qu=$(()=>e("th",null,"\u7DEF\u5EA6",-1)),Ju=$(()=>e("th",null,"\u7D4C\u5EA6",-1)),Zu=$(()=>e("th",null,"\u6A19\u9AD8",-1)),Ku=$(()=>e("button",null,[d("\u3053\u306E\u5730\u70B9\u306E\u30B0\u30E9\u30D5\u3092"),e("br"),d("\u8868\u793A")],-1)),Gu=$(()=>e("br",null,null,-1)),Qu=d(" \u203B\u56FD\u571F\u5730\u7406\u9662\u767A\u884C\u306E\u5730\u7403\u5730\u56F3\u65E5\u672C\u306E\u30C7\u30FC\u30BF\u3092\u5229\u7528\u3057\u3066\u3044\u307E\u3059\u3002 ");function to(t,u,s,l,n,a){const o=v("router-link");return h(),c(f,null,[(h(),c("svg",{id:"map",width:t.width,height:t.height,onWheel:u[0]||(u[0]=(...i)=>t.scroll&&t.scroll(...i)),onMousedown:u[1]||(u[1]=(...i)=>t.dragstart&&t.dragstart(...i)),onMousemove:u[2]||(u[2]=(...i)=>t.drag&&t.drag(...i))},[e("g",{transform:t.transform},[e("g",null,[(h(!0),c(f,null,b(t.d,(i,m)=>(h(),c("path",{d:i,key:m},null,8,Wu))),128))]),e("g",null,[(h(!0),c(f,null,b(t.amedasList,i=>(h(),c("circle",{key:i.id,cx:i.long,cy:i.lat,r:"0.1",onClick:Q(m=>t.amedas=i.id,["stop"]),class:tt({active:t.amedas===i.id})},null,10,Hu))),128))])],8,Yu)],40,Uu)),t.getSelectedAmedas?(h(),c("div",Xu,[e("table",null,[e("tr",null,[Ru,e("td",null,p(t.getSelectedAmedas.name),1)]),e("tr",null,[qu,e("td",null,p(t.getSelectedAmedas.lat)+" \xB0",1)]),e("tr",null,[Ju,e("td",null,p(t.getSelectedAmedas.long)+" \xB0",1)]),e("tr",null,[Zu,e("td",null,p(t.getSelectedAmedas.alti)+" m",1)])]),k(o,{to:{name:"home"}},{default:S(()=>[Ku]),_:1})])):M("",!0),Gu,Qu],64)}var eo=F(Ou,[["render",to],["__scopeId","data-v-7c989674"]]);const uo=[{path:"/",name:"home",component:tu},{path:"/map",name:"map",component:eo},{path:"/table/:amedas",name:"table",component:ju,props:!0}],oo=et({history:ut("/monsola11-clone"),strict:!0,routes:uo}),no=ot({state:{area:11,amedas:11001},mutations:{setArea(t,u){t.area=u},setAmedas(t,u){t.amedas=u}}});const T=nt(ht);T.use(oo);T.use(no);T.mount("#app");
