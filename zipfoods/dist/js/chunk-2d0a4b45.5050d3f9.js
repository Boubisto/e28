(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4b45"],{"0829":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cart-page"}},[n("h1",[t._v("Your Cart")]),0==t.items.length?n("div",[t._v("No items")]):t._e(),t.productsLoaded?n("ul",{staticClass:"cleanList"},t._l(t.items,(function(e){return n("li",{key:e.id},[t._v(" "+t._s(e.quantity)+" x "+t._s(t.getProductDetails(e.id).name)+" "),n("button",{on:{click:function(n){return t.removeFromCart(e.id)}}},[t._v("Remove")])])})),0):t._e()])},o=[],u=(n("4de4"),n("0091")),i={props:[],data:function(){return{items:[]}},mounted:function(){this.items=u["b"].getItems()},computed:{productsLoaded:function(){return this.products.length>0},products:function(){return this.$store.state.products}},methods:{getProductDetails:function(t){return this.products.filter((function(e){return e.id==t}),t)[0]},removeFromCart:function(t){u["b"].remove(t),this.$store.commit("setCartCount",u["b"].count())}}},s=i,c=n("2877"),d=Object(c["a"])(s,r,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0a4b45.5050d3f9.js.map