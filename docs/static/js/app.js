webpackJsonp([4],{"7KWR":function(t,e){},BZYi:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("3MFX"),o=(n("PoCB"),n("c8O1")),c=n.n(o),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"nav-bar"},[n("mt-header",{class:{"desc-class":t.descClass},attrs:{fixed:"",title:t.$store.state.pageTitle}},[t.needBack?n("mt-button",{attrs:{slot:"left",icon:"back"},nativeOn:{click:function(e){t.$router.go(-1)}},slot:"left"}):t._e()],1)],1)},staticRenderFns:[]},i=n("XAIM")({data:function(){return{needBack:!1,descClass:!1}},watch:{$route:function(){var t=this.$route.path;this.needBack="/home"!==t,this.descClass=t.indexOf("/desc")>-1}}},r,!1,function(t){n("ZxK0")},null,null).exports,s=n("EcfS"),u=n("gCy3"),l=n.n(u),f={computed:Object(s.b)(["movieData"]),methods:{fetchData:function(){var t=this;0===this.movieData.length&&(c.a.open({text:"载入数据..."}),l.a.get("./static/movie.json").then(function(e){t.$store.commit("fetchData",e.data.reverse()),c.a.close()}).catch(function(t){c.a.close(),console.log(t)}))}},mounted:function(){this.fetchData()},components:{NavBar:i}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"app"}},[e("nav-bar"),this._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{staticClass:"child-view"})],1)],1)},staticRenderFns:[]},h=n("XAIM")(f,d,!1,function(t){n("W81K")},null,null).exports,m=n("1eSk"),p=[{path:"/",redirect:"/home"},{path:"/home",component:function(){return n.e(0).then(n.bind(null,"HXef"))}},{path:"/list",redirect:"/list/all"},{path:"/list/:type",component:function(){return n.e(1).then(n.bind(null,"Jg7O"))}},{path:"/desc",redirect:"/desc/539"},{path:"/desc/:id",component:function(){return n.e(2).then(n.bind(null,"Kth1"))}}];a.default.use(m.a);var v=new m.a({scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:p});a.default.use(s.a);var g=new s.a.Store({state:{movieData:[],pageTitle:""},mutations:{writeTitle:function(t,e){t.pageTitle=e},fetchData:function(t,e){t.movieData=e}}}),D=function(t){return t>=10?t:"0"+t};a.default.filter("dateTimeFormatter",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=new Date(t),a=n.getFullYear(),o=n.getMonth()+1,c=n.getDate(),r=n.getHours(),i=n.getMinutes(),s=n.getSeconds();switch(e){case 0:return D(o)+"-"+D(c);case 1:return D(r)+"-"+D(i);case 2:return a+"-"+D(o)+"-"+D(c);case 3:return a+"-"+D(o)+"-"+D(c)+"  "+D(r)+":"+D(i);default:return a+"-"+D(o)+"-"+D(c)+"  "+D(r)+":"+D(i)+":"+D(s)}});n("xvsR");var b=n("uuTl"),w=n.n(b),x=(n("aaPd"),n("Bw13")),B=n.n(x),C=(n("7KWR"),n("rxWf")),T=n.n(C),_=(n("NsDs"),n("6714")),k=n.n(_);a.default.component(k.a.name,k.a),a.default.component(T.a.name,T.a),a.default.component(B.a.name,B.a),a.default.component(w.a.name,w.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:v,store:g,render:function(t){return t(h)}})},NsDs:function(t,e){},PoCB:function(t,e){},TQYi:function(t,e){},W81K:function(t,e){},ZxK0:function(t,e){},aaPd:function(t,e){},xvsR:function(t,e){}},["NHnr"]);