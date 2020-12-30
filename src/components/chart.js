import $ from 'jquery'
window.self.$ = $

import { cloneDeep } from 'lodash'
window._cloneDeep = cloneDeep

import Vue from 'vue'
Vue.prototype.$bus = new Vue()

Vue.prototype.$CONSTANT = {
  EVENT_GET_SELECTED: 'event-get-selected',
}