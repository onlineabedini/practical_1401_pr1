import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6abd4a8a = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _447589c3 = () => interopDefault(import('..\\pages\\panel\\index.vue' /* webpackChunkName: "pages/panel/index" */))
const _1a94f2b8 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _d0d67a3c = () => interopDefault(import('..\\pages\\about_us\\about_irnode.vue' /* webpackChunkName: "pages/about_us/about_irnode" */))
const _3765f06f = () => interopDefault(import('..\\pages\\about_us\\come_work_with_us.vue' /* webpackChunkName: "pages/about_us/come_work_with_us" */))
const _cee5d4bc = () => interopDefault(import('..\\pages\\about_us\\contact_us.vue' /* webpackChunkName: "pages/about_us/contact_us" */))
const _7da415ff = () => interopDefault(import('..\\pages\\about_us\\Survey.vue' /* webpackChunkName: "pages/about_us/Survey" */))
const _95c41bdc = () => interopDefault(import('..\\pages\\about_us\\terms.vue' /* webpackChunkName: "pages/about_us/terms" */))
const _b48c293c = () => interopDefault(import('..\\pages\\panel\\product\\index.vue' /* webpackChunkName: "pages/panel/product/index" */))
const _9b845330 = () => interopDefault(import('..\\pages\\panel\\profile\\index.vue' /* webpackChunkName: "pages/panel/profile/index" */))
const _7557566a = () => interopDefault(import('..\\pages\\panel\\tickets\\index.vue' /* webpackChunkName: "pages/panel/tickets/index" */))
const _f0bbc250 = () => interopDefault(import('..\\pages\\panel\\user\\index.vue' /* webpackChunkName: "pages/panel/user/index" */))
const _70a8ca20 = () => interopDefault(import('..\\pages\\panel\\tickets\\send.vue' /* webpackChunkName: "pages/panel/tickets/send" */))
const _cb3cf7be = () => interopDefault(import('..\\pages\\panel\\product\\update\\_id.vue' /* webpackChunkName: "pages/panel/product/update/_id" */))
const _2acaf458 = () => interopDefault(import('..\\pages\\panel\\tickets\\answer\\_id.vue' /* webpackChunkName: "pages/panel/tickets/answer/_id" */))
const _a39271d2 = () => interopDefault(import('..\\pages\\panel\\user\\update\\_id.vue' /* webpackChunkName: "pages/panel/user/update/_id" */))
const _3c8d423c = () => interopDefault(import('..\\pages\\product\\category\\_id.vue' /* webpackChunkName: "pages/product/category/_id" */))
const _70ff326c = () => interopDefault(import('..\\pages\\product\\search_result\\_value.vue' /* webpackChunkName: "pages/product/search_result/_value" */))
const _12af9ab0 = () => interopDefault(import('..\\pages\\product\\single_product\\_id.vue' /* webpackChunkName: "pages/product/single_product/_id" */))
const _5232c9ad = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/checkout",
    component: _6abd4a8a,
    name: "checkout"
  }, {
    path: "/panel",
    component: _447589c3,
    name: "panel"
  }, {
    path: "/product",
    component: _1a94f2b8,
    name: "product"
  }, {
    path: "/about_us/about_irnode",
    component: _d0d67a3c,
    name: "about_us-about_irnode"
  }, {
    path: "/about_us/come_work_with_us",
    component: _3765f06f,
    name: "about_us-come_work_with_us"
  }, {
    path: "/about_us/contact_us",
    component: _cee5d4bc,
    name: "about_us-contact_us"
  }, {
    path: "/about_us/Survey",
    component: _7da415ff,
    name: "about_us-Survey"
  }, {
    path: "/about_us/terms",
    component: _95c41bdc,
    name: "about_us-terms"
  }, {
    path: "/panel/product",
    component: _b48c293c,
    name: "panel-product"
  }, {
    path: "/panel/profile",
    component: _9b845330,
    name: "panel-profile"
  }, {
    path: "/panel/tickets",
    component: _7557566a,
    name: "panel-tickets"
  }, {
    path: "/panel/user",
    component: _f0bbc250,
    name: "panel-user"
  }, {
    path: "/panel/tickets/send",
    component: _70a8ca20,
    name: "panel-tickets-send"
  }, {
    path: "/panel/product/update/:id?",
    component: _cb3cf7be,
    name: "panel-product-update-id"
  }, {
    path: "/panel/tickets/answer/:id?",
    component: _2acaf458,
    name: "panel-tickets-answer-id"
  }, {
    path: "/panel/user/update/:id?",
    component: _a39271d2,
    name: "panel-user-update-id"
  }, {
    path: "/product/category/:id?",
    component: _3c8d423c,
    name: "product-category-id"
  }, {
    path: "/product/search_result/:value?",
    component: _70ff326c,
    name: "product-search_result-value"
  }, {
    path: "/product/single_product/:id?",
    component: _12af9ab0,
    name: "product-single_product-id"
  }, {
    path: "/",
    component: _5232c9ad,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
