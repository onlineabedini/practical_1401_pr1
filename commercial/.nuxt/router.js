import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d01092dc = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _f607bbcc = () => interopDefault(import('..\\pages\\panel\\index.vue' /* webpackChunkName: "pages/panel/index" */))
const _53d6d14f = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _6713cb0e = () => interopDefault(import('..\\pages\\about_us\\about_irnode.vue' /* webpackChunkName: "pages/about_us/about_irnode" */))
const _5e6ebf38 = () => interopDefault(import('..\\pages\\about_us\\come_work_with_us.vue' /* webpackChunkName: "pages/about_us/come_work_with_us" */))
const _0f85320e = () => interopDefault(import('..\\pages\\about_us\\contact_us.vue' /* webpackChunkName: "pages/about_us/contact_us" */))
const _6de8aad6 = () => interopDefault(import('..\\pages\\about_us\\Survey.vue' /* webpackChunkName: "pages/about_us/Survey" */))
const _b7d0334a = () => interopDefault(import('..\\pages\\about_us\\terms.vue' /* webpackChunkName: "pages/about_us/terms" */))
const _3c13c4eb = () => interopDefault(import('..\\pages\\panel\\product\\index.vue' /* webpackChunkName: "pages/panel/product/index" */))
const _4897aff1 = () => interopDefault(import('..\\pages\\panel\\profile\\index.vue' /* webpackChunkName: "pages/panel/profile/index" */))
const _0bb12ff3 = () => interopDefault(import('..\\pages\\panel\\tickets\\index.vue' /* webpackChunkName: "pages/panel/tickets/index" */))
const _7914d9ef = () => interopDefault(import('..\\pages\\panel\\user\\index.vue' /* webpackChunkName: "pages/panel/user/index" */))
const _5f4dc912 = () => interopDefault(import('..\\pages\\panel\\tickets\\send.vue' /* webpackChunkName: "pages/panel/tickets/send" */))
const _7d2b5a2c = () => interopDefault(import('..\\pages\\panel\\product\\update\\_id.vue' /* webpackChunkName: "pages/panel/product/update/_id" */))
const _11a3549d = () => interopDefault(import('..\\pages\\panel\\tickets\\answer\\_id.vue' /* webpackChunkName: "pages/panel/tickets/answer/_id" */))
const _302094ee = () => interopDefault(import('..\\pages\\panel\\user\\update\\_id.vue' /* webpackChunkName: "pages/panel/user/update/_id" */))
const _169ab679 = () => interopDefault(import('..\\pages\\product\\category\\_id.vue' /* webpackChunkName: "pages/product/category/_id" */))
const _2a11f9fa = () => interopDefault(import('..\\pages\\product\\search_result\\_value.vue' /* webpackChunkName: "pages/product/search_result/_value" */))
const _9e8d8602 = () => interopDefault(import('..\\pages\\product\\single_product\\_id.vue' /* webpackChunkName: "pages/product/single_product/_id" */))
const _411ad536 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d01092dc,
    name: "checkout"
  }, {
    path: "/panel",
    component: _f607bbcc,
    name: "panel"
  }, {
    path: "/product",
    component: _53d6d14f,
    name: "product"
  }, {
    path: "/about_us/about_irnode",
    component: _6713cb0e,
    name: "about_us-about_irnode"
  }, {
    path: "/about_us/come_work_with_us",
    component: _5e6ebf38,
    name: "about_us-come_work_with_us"
  }, {
    path: "/about_us/contact_us",
    component: _0f85320e,
    name: "about_us-contact_us"
  }, {
    path: "/about_us/Survey",
    component: _6de8aad6,
    name: "about_us-Survey"
  }, {
    path: "/about_us/terms",
    component: _b7d0334a,
    name: "about_us-terms"
  }, {
    path: "/panel/product",
    component: _3c13c4eb,
    name: "panel-product"
  }, {
    path: "/panel/profile",
    component: _4897aff1,
    name: "panel-profile"
  }, {
    path: "/panel/tickets",
    component: _0bb12ff3,
    name: "panel-tickets"
  }, {
    path: "/panel/user",
    component: _7914d9ef,
    name: "panel-user"
  }, {
    path: "/panel/tickets/send",
    component: _5f4dc912,
    name: "panel-tickets-send"
  }, {
    path: "/panel/product/update/:id?",
    component: _7d2b5a2c,
    name: "panel-product-update-id"
  }, {
    path: "/panel/tickets/answer/:id?",
    component: _11a3549d,
    name: "panel-tickets-answer-id"
  }, {
    path: "/panel/user/update/:id?",
    component: _302094ee,
    name: "panel-user-update-id"
  }, {
    path: "/product/category/:id?",
    component: _169ab679,
    name: "product-category-id"
  }, {
    path: "/product/search_result/:value?",
    component: _2a11f9fa,
    name: "product-search_result-value"
  }, {
    path: "/product/single_product/:id?",
    component: _9e8d8602,
    name: "product-single_product-id"
  }, {
    path: "/",
    component: _411ad536,
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
