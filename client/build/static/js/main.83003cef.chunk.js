(this["webpackJsonphacker-premier-league"]=this["webpackJsonphacker-premier-league"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),c=a.n(r),i=a(10),s=a.n(i),o=(a(86),a(145)),l=a(112),u=a(166),d=a(18),j=a.n(d),b=a(30),m=a(12),O=a(40),h=a.n(O),p=a(157),f=a(158),g=a(159),x=a(156),v=a(171),w=a(162),P=a(155),y=a(170),C=Object(r.createContext)(),S=function(e){var t=e.children,a=Object(r.useState)([]),c=Object(m.a)(a,2),i=c[0],s=c[1],o=Object(r.useState)(0),l=Object(m.a)(o,2),u=l[0],d=l[1],j=Object(r.useState)(0),b=Object(m.a)(j,2),O=b[0],h=b[1],p=Object(r.useState)(10),f=Object(m.a)(p,2),g=f[0],x=f[1],v=Object(r.useState)(!0),w=Object(m.a)(v,2),P=w[0],y=w[1];return Object(n.jsx)(C.Provider,{value:{teams:i,setTeams:s,page:u,setPage:d,teamsCount:O,setTeamsCount:h,rowsPerPage:g,setRowsPerPage:x,refresh:P,toggleRefresh:function(){return y((function(e){return!e}))}},children:t})},k=a(19),T=a(148),N=a(150),_=a(151),F=a(152),L=a(153),R=Object(o.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function M(e){var t=R(),a=Object(k.a)(),r=e.count,c=e.page,i=e.rowsPerPage,s=e.onChangePage;return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(T.a,{onClick:function(e){s(e,0)},disabled:0===c,"aria-label":"first page",children:"rtl"===a.direction?Object(n.jsx)(N.a,{}):Object(n.jsx)(_.a,{})}),Object(n.jsx)(T.a,{onClick:function(e){s(e,c-1)},disabled:0===c,"aria-label":"previous page",children:"rtl"===a.direction?Object(n.jsx)(F.a,{}):Object(n.jsx)(L.a,{})}),Object(n.jsx)(T.a,{onClick:function(e){s(e,c+1)},disabled:c>=Math.ceil(r/i)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(n.jsx)(L.a,{}):Object(n.jsx)(F.a,{})}),Object(n.jsx)(T.a,{onClick:function(e){s(e,Math.max(0,Math.ceil(r/i)-1))},disabled:c>=Math.ceil(r/i)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(n.jsx)(_.a,{}):Object(n.jsx)(N.a,{})})]})}var B=a(154),H=a(173),W=[{id:"team_name",numeric:!1,disablePadding:!1,label:"Team Name"},{id:"score",numeric:!0,disablePadding:!1,label:"Score"},{id:"wins",numeric:!0,disablePadding:!1,label:"Wins"},{id:"losses",numeric:!0,disablePadding:!1,label:"Losses"},{id:"ties",numeric:!0,disablePadding:!1,label:"Ties"}];function A(e){var t=e.classes,a=e.order,r=e.orderBy,c=e.onRequestSort;return Object(n.jsx)(B.a,{children:Object(n.jsx)(P.a,{children:W.map((function(e){return Object(n.jsx)(x.a,{align:"center",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&a,children:Object(n.jsxs)(H.a,{active:r===e.id,direction:r===e.id?a:"asc",onClick:(i=e.id,function(e){c(e,i)}),children:[e.label,r===e.id?Object(n.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var i}))})})}var E=h.a.create({baseURL:"https://hackers-pl.herokuapp.com"}),I=Object(o.a)((function(e){return{table:{maxHeight:500},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function q(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function D(e,t){return"desc"===e?function(e,a){return q(e,a,t)}:function(e,a){return-q(e,a,t)}}function J(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}var z=function(){var e=I(),t=Object(r.useContext)(C),a=t.teams,c=t.setTeams,i=t.page,s=t.setPage,o=t.teamsCount,l=t.setTeamsCount,u=t.rowsPerPage,d=t.setRowsPerPage,O=t.refresh,h=Object(r.useState)("desc"),S=Object(m.a)(h,2),k=S[0],T=S[1],N=Object(r.useState)("score"),_=Object(m.a)(N,2),F=_[0],L=_[1],R=Object(r.useState)(""),B=Object(m.a)(R,2),H=B[0],W=B[1];Object(r.useEffect)((function(){q()}),[u,i,k,F,H,O]);var q=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/api/teams",{params:{offset:i*u,limit:u,order:k,orderBy:F,searchQuery:H}});case 2:return t=e.sent,a=t.data,c((function(e){return a.teams})),l((function(e){return a.teamsCount})),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=u-Math.min(u,o-i*u);return Object(n.jsxs)("div",{className:e.main,children:[Object(n.jsx)(p.a,{className:e.table,component:f.a,children:Object(n.jsxs)(g.a,{stickyHeader:!0,"aria-label":"custom pagination table",children:[Object(n.jsx)(x.a,{padding:"none",colSpan:5,children:Object(n.jsx)(v.a,{value:H,onChange:function(e){return W(e.target.value)},label:"Search Team",fullWidth:!0,variant:"filled"})}),Object(n.jsx)(A,{classes:e,order:k,orderBy:F,onRequestSort:function(e,t){T(F===t&&"asc"===k?"desc":"asc"),L(t)},rowCount:u}),Object(n.jsxs)(w.a,{style:{maxHeight:400,paddingBottom:"100px",overflowY:"scroll"},children:[J(a,D(k,F)).map((function(e){return Object(n.jsxs)(P.a,{children:[Object(n.jsx)(x.a,{style:{width:100},component:"th",scope:"row",children:e.team_name}),Object(n.jsx)(x.a,{style:{width:100},align:"center",children:e.score}),Object(n.jsx)(x.a,{style:{width:100},align:"center",children:e.wins}),Object(n.jsx)(x.a,{style:{width:100},align:"center",children:e.losses}),Object(n.jsx)(x.a,{style:{width:100},align:"center",children:e.ties})]},e._id)})),z>0&&Object(n.jsx)(P.a,{style:{height:53*z},children:Object(n.jsx)(x.a,{colSpan:6})})]})]})}),Object(n.jsx)(P.a,{style:{margin:0},children:Object(n.jsx)(y.a,{rowsPerPageOptions:[10,25,50,100,{label:"All",value:o}],colSpan:3,count:o,rowsPerPage:u,page:i,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){s(t)},onChangeRowsPerPage:function(e){d(parseInt(e.target.value,10)),s(0)},ActionsComponent:M})})]})},Q=a(163),U=Object(o.a)((function(e){return{main:{margin:"10px auto"},submit:{marginTop:3,marginLeft:20},input:{marginLeft:20}}}));function Y(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)(!1),s=Object(m.a)(i,2),o=s[0],l=s[1],u=U(),d=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length<4)){e.next=2;break}return e.abrupt("return");case 2:return l(!0),e.next=5,E.post("/api/team/new",{name:a});case 5:t=e.sent,n=t.data,console.log({data:n}),c(""),l(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:u.main,children:[Object(n.jsx)(v.a,{size:"small",className:u.input,variant:"outlined",label:"New Team Name",value:a,onChange:function(e){return c(e.target.value)}}),Object(n.jsx)(Q.a,{className:u.submit,onClick:d,disabled:o,variant:"contained",color:"primary",children:"Add Team"})]})}var G=a(172),K=a(164),V=a(165),X=a(168),Z=a(175),$=a(167),ee=Object(o.a)((function(e){return{main:{margin:"10px auto"},pairOpen:{marginTop:3}}}));function te(){var e=ee(),t=Object(r.useContext)(C).toggleRefresh,a=Object(r.useState)(!1),c=Object(m.a)(a,2),i=c[0],s=c[1],o=Object(r.useState)([]),l=Object(m.a)(o,2),d=l[0],O=l[1],h=Object(r.useState)(""),p=Object(m.a)(h,2),f=p[0],g=p[1],x=Object(r.useState)(""),v=Object(m.a)(x,2),w=v[0],P=v[1];Object(r.useEffect)((function(){y()}),[]);var y=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/api/teams-meta");case 2:t=e.sent,(a=t.data).teams&&a.teams.length>0&&(O(a.teams),g(a.teams[0]._id),P(a.teams[a.teams.length-1]._id));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(j.a.mark((function e(a){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("/api/pair",{team1:f,team2:w,decision:a});case 2:n=e.sent,r=n.data,console.log({data:r}),t(),s(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:e.main,children:[Object(n.jsx)(Q.a,{className:e.pairOpen,variant:"contained",color:"secondary",onClick:function(){s(!0)},children:"Pair Teams"}),Object(n.jsxs)(G.a,{open:i,onClose:function(){s(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(K.a,{id:"alert-dialog-title",children:"Select teams you want to pair"}),Object(n.jsx)(V.a,{children:d.length>0?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(u.a,{container:!0,justify:"space-evenly",spacing:2,children:[Object(n.jsx)(u.a,{item:!0,children:Object(n.jsx)(X.a,{value:f,onChange:function(e){return g(e.target.value)},label:"Team 1",children:d.map((function(e){return Object(n.jsx)(Z.a,{value:e._id,children:e.team_name})}))})}),Object(n.jsx)(u.a,{item:!0,children:Object(n.jsx)(X.a,{value:w,onChange:function(e){return P(e.target.value)},label:"Team 2",children:d.map((function(e){return Object(n.jsx)(Z.a,{value:e._id,children:e.team_name})}))})})]})}):"No teams available to pair."}),Object(n.jsxs)($.a,{children:[Object(n.jsx)(Q.a,{onClick:function(){return S("team1")},color:"primary",autoFocus:!0,children:"Team 1 Won"}),Object(n.jsx)(Q.a,{onClick:function(){return S("team2")},color:"primary",autoFocus:!0,children:"Team 2 Won"}),Object(n.jsx)(Q.a,{onClick:function(){return S("tie")},color:"primary",autoFocus:!0,children:"Match Tied"})]})]})]})}a(110);var ae=Object(o.a)((function(e){return{main:{maxWidth:"700px",margin:"0px auto"}}}));var ne=function(){var e=ae();return Object(n.jsx)("div",{className:"main-background",children:Object(n.jsxs)("div",{className:e.main,children:[Object(n.jsx)(l.a,{style:{paddingTop:"10px"},variant:"h4",align:"center",children:"Hackers Premier League"}),Object(n.jsxs)(S,{children:[Object(n.jsxs)(u.a,{container:!0,spacing:3,justify:"space-between",children:[Object(n.jsx)(u.a,{item:!0,children:Object(n.jsx)(te,{})}),Object(n.jsx)(u.a,{item:!0,children:Object(n.jsx)(Y,{})})]}),Object(n.jsx)(z,{})]})]})})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,177)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(ne,{})}),document.getElementById("root")),re()},86:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.83003cef.chunk.js.map