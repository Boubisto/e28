(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ddeb97a"],{"8fdc":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"account-page"}},[t.user?a("div",[a("h2",{attrs:{"data-test":"welcome-message"}},[t._v("Hi, "+t._s(t.user.name)+"!")]),a("div",{attrs:{id:"favorites"}},[a("strong",[t._v("Your Favorites")]),t.favorites&&0==t.favorites.length?a("p",[t._v("No favorites yet.")]):t._e(),t._l(t.favorites,(function(e,o){return a("li",{key:o},[t._v(" "+t._s(e.name)+" ")])}))],2),a("button",{attrs:{"data-test":"logout-button"},on:{click:t.logout}},[t._v("Logout")])]):a("div",{attrs:{id:"loginForm"}},[a("h2",[t._v("Login")]),a("div",[a("label",[t._v(" Email: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],attrs:{type:"text","data-test":"email-input"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}})])]),a("div",[a("label",[t._v(" Password: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],attrs:{type:"password","data-test":"password-input"},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}})])]),a("button",{attrs:{"data-test":"login-button"},on:{click:t.login}},[t._v("Login")]),t.errors?a("ul",t._l(t.errors,(function(e,o){return a("li",{key:o,staticClass:"error"},[t._v(" "+t._s(e)+" ")])})),0):t._e()])])},s=[],r=(a("d81d"),a("0091")),i={data:function(){return{data:{email:"boubssonne@gmail.com",password:"asdfasdf"},errors:null,favorites:[]}},computed:{user:function(){return this.$store.state.user},recipes:function(){return this.$store.state.recipes}},methods:{loadFavorites:function(){var t=this;this.user&&r["a"].get("favorite").then((function(e){t.favorites=e.data.favorite.map((function(e){return t.$store.getters.getRecipeById(e.recipe_id)}))}))},login:function(){var t=this;r["a"].post("login",this.data).then((function(e){e.data.authenticated?t.$store.commit("setUser",e.data.user):t.errors=e.data.errors}))},logout:function(){var t=this;r["a"].post("logout").then((function(e){e.data.success&&t.$store.commit("setUser",null)}))}},watch:{user:function(){this.loadFavorites()}},mounted:function(){this.loadFavorites()}},n=i,u=a("2877"),d=Object(u["a"])(n,o,s,!1,null,null,null);e["default"]=d.exports},d81d:function(t,e,a){"use strict";var o=a("23e7"),s=a("b727").map,r=a("1dde"),i=a("ae40"),n=r("map"),u=i("map");o({target:"Array",proto:!0,forced:!n||!u},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6ddeb97a.42d56bba.js.map