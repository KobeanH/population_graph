(this.webpackJsonppopulation_graph=this.webpackJsonppopulation_graph||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(20),c=n.n(i),o=(n(27),n(28),n(11)),s=n(8),l=n.n(s),p=n(22),f=n(0),u=function(e){for(var t=e.prefectures,n=e.onChange,a={display:"flex",justifyContent:"center",width:40,listStyle:"none"},r={width:15},i=Object(p.a)(Array(26)).map((function(e,t){return(10+t).toString(36)})),c=0;c<t.length;++c){var o=i[c].toUpperCase();t[c].prefName=o}return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:"8px 16px",padding:0},children:t.map((function(e){return Object(f.jsxs)("li",{style:a,children:[Object(f.jsx)("input",{type:"checkbox",name:"pref_name",onChange:function(t){return n(e.prefName,e.prefCode,t.target.checked)},id:"checkbox"+e.prefCode}),Object(f.jsx)("label",{style:r,htmlFor:"checkbox"+e.prefCode,children:e.prefName})]},e.prefName)}))})})},h=n(9),d=n(10),g=n.n(d),j=n(21),x=n.n(j),b=function(e){var t,n=e.population,a=[],r=Object(h.a)(n);try{for(r.s();!(t=r.n()).done;){var i,c=t.value,o=[],s=Object(h.a)(c.data);try{for(s.s();!(i=s.n()).done;){var l=i.value;o.push(l.value)}}catch(u){s.e(u)}finally{s.f()}a.push({type:"line",name:c.prefName,data:o})}}catch(u){r.e(u)}finally{r.f()}g.a.setOptions({lang:{thousandsSep:","}});var p={chart:{marginTop:35,marginRight:30},title:{text:""},xAxis:{title:{text:"\u5e74\u5ea6",rotation:0,align:"high",offset:10,x:20,tickInterval:10},categories:["","",1980,"",1990,"",2e3,"",2010,"",2020]},yAxis:{lineWidth:1,title:{text:"\u4eba\u53e3\u6570",align:"high",rotation:0,offset:0,y:-20}},series:a,plotOptions:{series:{marker:{enabled:!1}}}};return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(x.a,{highcharts:g.a,options:p})})},m={marginBottom:"32px",padding:"3%"},O={fontSize:16,fontWeight:"initial",textAlign:"left"},y=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){l.a.get("https://opendata.resas-portal.go.jp/api/v1/prefectures",{headers:{"X-API-KEY":"OzQLUxQ3ycUWyhcmafO2nJu7v0iPlNH4GYVmUco6"}}).then((function(e){r(e.data.result.slice(0,18))})).catch((function(e){console.log(e)}))}),[]);var i=Object(a.useState)([]),c=Object(o.a)(i,2),s=c[0],p=c[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{style:m,children:[Object(f.jsx)("h3",{style:O,children:"\u90fd\u9053\u5e9c\u770c"}),n&&Object(f.jsx)(u,{prefectures:n,onChange:function(e,t,n){var a=s.slice();if(n){if(-1!==a.findIndex((function(t){return t.prefName===e})))return;l.a.get("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode="+String(t),{headers:{"X-API-KEY":"OzQLUxQ3ycUWyhcmafO2nJu7v0iPlNH4GYVmUco6"}}).then((function(t){a.push({prefName:e,data:t.data.result.data[0].data.slice(2,13)}),p(a)})).catch((function(e){console.log(e)}))}else{var r=a.findIndex((function(t){return t.prefName===e}));if(-1===r)return;a.splice(r,1),p(a)}}})]}),Object(f.jsx)(b,{population:s})]})},v={maxWidth:"1080px",margin:"0 auto",border:"1px solid #000",textAlign:"center"},C={margin:0,padding:"20px 0",backgroundColor:"#C4C4C4"};var N=function(){return Object(f.jsxs)("div",{style:v,children:[Object(f.jsx)("h2",{style:C,children:"Title"}),Object(f.jsx)(y,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),k()}},[[48,1,2]]]);
//# sourceMappingURL=main.7d462c45.chunk.js.map