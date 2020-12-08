(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2740e722"],{"0e0c":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h2",[e._v("Add a Product")]),t("small",{staticClass:"form-help"},[e._v("* Required field")]),t("div",{attrs:{id:"inputs"}},[t("label",{attrs:{for:"name"}},[e._v("* Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.product.name,expression:"product.name"}],attrs:{type:"text",id:"name"},domProps:{value:e.product.name},on:{input:function(r){r.target.composing||e.$set(e.product,"name",r.target.value)}}}),t("small",{staticClass:"form-help"},[e._v("Min: 3, Max: 100")]),e.errors&&"name"in e.errors?t("error-field",{attrs:{errors:e.errors.name}}):e._e(),t("label",{attrs:{for:"sku"}},[e._v("* SKU:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.product.sku,expression:"product.sku"}],attrs:{type:"text",id:"sku"},domProps:{value:e.product.sku},on:{input:function(r){r.target.composing||e.$set(e.product,"sku",r.target.value)}}}),t("small",{staticClass:"form-help"},[e._v("Min: 3, Max: 100. Letters and dashes only.")]),e.errors&&"sku"in e.errors?t("error-field",{attrs:{errors:e.errors.sku}}):e._e(),t("label",{attrs:{for:"price"}},[e._v("* Price:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.product.price,expression:"product.price"}],attrs:{type:"text",id:"price"},domProps:{value:e.product.price},on:{input:function(r){r.target.composing||e.$set(e.product,"price",r.target.value)}}}),t("small",{staticClass:"form-help"},[e._v("Enter a decimal value number")]),e.errors&&"price"in e.errors?t("error-field",{attrs:{errors:e.errors.price}}):e._e(),t("label",{attrs:{for:"available"}},[e._v("* Quantity available:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.product.available,expression:"product.available"}],attrs:{type:"text",id:"available"},domProps:{value:e.product.available},on:{input:function(r){r.target.composing||e.$set(e.product,"available",r.target.value)}}}),t("small",{staticClass:"form-help"},[e._v("Enter a whole number")]),e.errors&&"available"in e.errors?t("error-field",{attrs:{errors:e.errors.available}}):e._e(),t("label",{attrs:{for:"weight"}},[e._v("* Weight (in lbs):")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.product.weight,expression:"product.weight"}],attrs:{type:"text",id:"weight"},domProps:{value:e.product.weight},on:{input:function(r){r.target.composing||e.$set(e.product,"weight",r.target.value)}}}),e.errors&&"weight"in e.errors?t("error-field",{attrs:{errors:e.errors.weight}}):e._e(),t("label",{staticClass:"form-checkbox-label",attrs:{for:"perishable"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.product.perishable,expression:"product.perishable"}],attrs:{type:"checkbox",id:"perishable"},domProps:{checked:Array.isArray(e.product.perishable)?e._i(e.product.perishable,null)>-1:e.product.perishable},on:{change:function(r){var t=e.product.perishable,a=r.target,o=!!a.checked;if(Array.isArray(t)){var s=null,i=e._i(t,s);a.checked?i<0&&e.$set(e.product,"perishable",t.concat([s])):i>-1&&e.$set(e.product,"perishable",t.slice(0,i).concat(t.slice(i+1)))}else e.$set(e.product,"perishable",o)}}}),e._v(" Perishable? ")]),t("label",{attrs:{for:"description"}},[e._v("* Description")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.product.description,expression:"product.description"}],attrs:{id:"description"},domProps:{value:e.product.description},on:{input:function(r){r.target.composing||e.$set(e.product,"description",r.target.value)}}}),t("small",{staticClass:"form-help"},[e._v("Min:100 ")]),e.errors&&"description"in e.errors?t("error-field",{attrs:{errors:e.errors.description}}):e._e()],1),t("button",{on:{click:e.addProduct}},[e._v("Add Product")]),t("transition",{attrs:{name:"fade"}},[e.showConfirmationMessage?t("div",{staticClass:"alert",attrs:{"data-test":"product-added-confirmation"}},[e._v(" Your product "),t("em",[e._v(e._s(e.addedName))]),e._v(" was added! ")]):e._e()]),e.errors?t("div",{staticClass:"form-feedback-error"},[e._v(" Please correct the above errors ")]):e._e()],1)},o=[],s=(t("b0c0"),t("0091")),i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",e._l(e.errors,(function(r,a){return t("li",{key:a,staticClass:"form-feedback-error"},[e._v(" "+e._s(r)+" ")])})),0)},n=[],l={props:["errors"]},c=l,d=t("2877"),u=Object(d["a"])(c,i,n,!1,null,null,null),p=u.exports,m={components:{"error-field":p},data:function(){return{errors:null,showConfirmationMessage:!1,product:{name:"Candy Heart Grapes",sku:"candy-heart-grapes-"+(new Date).valueOf(),price:5.99,available:25,weight:2,perishable:!0,description:"Next time the kids are craving candy, hand them a bowl of seedless Candy Heart grapes. Plump, red, and bursting with juice, they taste a little like raspberry lemonade and are just as refreshing. So go ahead and eat your heart out!"}}},methods:{addProduct:function(){var e=this;s["a"].post("/product",this.product).then((function(r){r.data.errors?e.errors=r.data.errors:(e.$store.dispatch("fetchProducts"),e.showConfirmationMessage=!0,e.addedName=e.product.name,setTimeout((function(){return e.showConfirmationMessage=!1}),3e3),e.product={name:"",slug:"",price:"",available:"",weight:"",perishable:!1,description:""})}))}}},v=m,h=(t("8aa4"),Object(d["a"])(v,a,o,!1,null,"30805710",null));r["default"]=h.exports},"35aa":function(e,r,t){},"8aa4":function(e,r,t){"use strict";t("35aa")},b0c0:function(e,r,t){var a=t("83ab"),o=t("9bf2").f,s=Function.prototype,i=s.toString,n=/^\s*function ([^ (]*)/,l="name";a&&!(l in s)&&o(s,l,{configurable:!0,get:function(){try{return i.call(this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-2740e722.439c89bf.js.map