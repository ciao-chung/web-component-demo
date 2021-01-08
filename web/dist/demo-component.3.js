(window["demoComponent_jsonp"] = window["demoComponent_jsonp"] || []).push([[3],{

/***/ "6434":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6aaeaa38-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/demo-component/partials/slideGroup.vue?vue&type=template&id=4cc3daec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pa-4"},[_vm._v(" bind: "+_vm._s(_vm.value)+" "),_c('v-slide-group',{attrs:{"active-class":"light-blue","show-arrows":""},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((15),function(n){return _c('v-slide-item',{key:n,attrs:{"value":("item-" + n)},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var active = ref.active;
var toggle = ref.toggle;
return [_c('v-card',{staticClass:"ma-4",attrs:{"color":active ? undefined : 'grey lighten-1',"height":"200","width":"100"},on:{"click":toggle}},[_c('v-row',{staticClass:"fill-height",attrs:{"align":"center","justify":"center"}},[_vm._v(" item: "+_vm._s(n)+" ")])],1)]}}],null,true)})}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/demo-component/partials/slideGroup.vue?vue&type=template&id=4cc3daec&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/demo-component/partials/slideGroup.vue?vue&type=script&lang=babel&



































/* harmony default export */ var slideGroupvue_type_script_lang_babel_ = ({
  data: () => ({
    value: null,
  }),
  created() {},
});

// CONCATENATED MODULE: ./src/demo-component/partials/slideGroup.vue?vue&type=script&lang=babel&
 /* harmony default export */ var partials_slideGroupvue_type_script_lang_babel_ = (slideGroupvue_type_script_lang_babel_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("6544");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js + 3 modules
var VCard = __webpack_require__("b0af");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__("0fd9");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js + 6 modules
var VSlideGroup = __webpack_require__("7efd");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideItem.js + 1 modules
var VSlideItem = __webpack_require__("9dbe");

// CONCATENATED MODULE: ./src/demo-component/partials/slideGroup.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  partials_slideGroupvue_type_script_lang_babel_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4cc3daec",
  null
  ,true
)

/* harmony default export */ var slideGroup = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCard: VCard["a" /* default */],VRow: VRow["a" /* default */],VSlideGroup: VSlideGroup["a" /* default */],VSlideItem: VSlideItem["a" /* default */]})


/***/ })

}]);
//# sourceMappingURL=demo-component.3.js.map