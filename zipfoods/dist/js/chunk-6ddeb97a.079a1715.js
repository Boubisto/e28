(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ddeb97a"],{"8fdc":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"account-page"}},[a("button",{on:{click:t.test}},[t._v("test")]),t.user?a("div",[a("h2",[t._v("Hi, "+t._s(t.user.name)+"!")]),a("div",{attrs:{id:"favorites"}},[a("strong",[t._v("Your Favorites")]),t.favorites&&0==t.favorites.length?a("p",[t._v("No favorites yet.")]):t._e(),t._l(t.favorites,(function(e,o){return a("li",{key:o},[t._v(" "+t._s(e.name)+" ")])}))],2),a("button",{on:{click:t.logout}},[t._v("Logout")])]):a("div",{attrs:{id:"loginForm"}},[a("h2",[t._v("Login")]),a("small",[t._v("(Form is prefilled for demonstration purposes; remove in final application)")]),a("div",[a("label",[t._v("Email: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],attrs:{type:"text"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}})])]),a("div",[a("label",[t._v("Password: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],attrs:{type:"password"},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}})])]),a("button",{on:{click:t.login}},[t._v("Login")]),t.errors?a("ul",t._l(t.errors,(function(e,o){return a("li",{key:o,staticClass:"error"},[t._v(" "+t._s(e)+" ")])})),0):t._e()])])},r=[],s=(a("d81d"),a("0091")),n={data:function(){return{data:{email:"jill@harvard.edu",password:"asdfasdf"},errors:null,favorites:null}},computed:{user:function(){return this.$store.state.user},products:function(){return this.$store.state.products}},methods:{login:function(){var t=this;s["a"].post("login",this.data).then((function(e){e.data.authenticated?t.$store.commit("setUser",e.data.user):t.errors=e.data.errors}))},logout:function(){var t=this;s["a"].post("logout").then((function(e){e.data.success&&t.$store.commit("setUser",null)}))},test:function(){s["a"].get("favorite").then((function(t){return console.log(t.data)}))}},watch:{user:function(){var t=this;this.user&&(this.favorites=[],s["a"].get("favorite").then((function(e){t.favorites=e.data.favorite.map((function(e){return t.$store.getters.getProductById(e.product_id)}))})))}}},i=n,u=a("2877"),d=Object(u["a"])(i,o,r,!1,null,null,null);e["default"]=d.exports},d81d:function(t,e,a){"use strict";var o=a("23e7"),r=a("b727").map,s=a("1dde"),n=a("ae40"),i=s("map"),u=n("map");o({target:"Array",proto:!0,forced:!i||!u},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6ddeb97a.079a1715.js.map