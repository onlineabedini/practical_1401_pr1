import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70fa4c3a = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _49eba3c2 = () => interopDefault(import('..\\pages\\panel\\index.vue' /* webpackChunkName: "pages/panel/index" */))
const _ca26ee12 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _66cdaa21 = () => interopDefault(import('..\\pages\\about_us\\about_irnode.vue' /* webpackChunkName: "pages/about_us/about_irnode" */))
const _73b28ee0 = () => interopDefault(import('..\\pages\\about_us\\come_work_with_us.vue' /* webpackChunkName: "pages/about_us/come_work_with_us" */))
const _2704c0a1 = () => interopDefault(import('..\\pages\\about_us\\contact_us.vue' /* webpackChunkName: "pages/about_us/contact_us" */))
const _466f187e = () => interopDefault(import('..\\pages\\about_us\\Survey.vue' /* webpackChunkName: "pages/about_us/Survey" */))
const _3fb923b3 = () => interopDefault(import('..\\pages\\about_us\\terms.vue' /* webpackChunkName: "pages/about_us/terms" */))
const _3390bf7a = () => interopDefault(import('..\\pages\\panel\\product\\index.vue' /* webpackChunkName: "pages/panel/product/index" */))
const _1a88e96e = () => interopDefault(import('..\\pages\\panel\\profile\\index.vue' /* webpackChunkName: "pages/panel/profile/index" */))
const _9455e96a = () => interopDefault(import('..\\pages\\panel\\tickets\\index.vue' /* webpackChunkName: "pages/panel/tickets/index" */))
const _49b67d97 = () => interopDefault(import('..\\pages\\panel\\user\\index.vue' /* webpackChunkName: "pages/panel/user/index" */))
const _01bf15c2 = () => interopDefault(import('..\\pages\\panel\\tickets\\send.vue' /* webpackChunkName: "pages/panel/tickets/send" */))
const _29224c42 = () => interopDefault(import('..\\pages\\panel\\product\\update\\_id.vue' /* webpackChunkName: "pages/panel/product/update/_id" */))
const _795b4df5 = () => interopDefault(import('..\\pages\\panel\\tickets\\answer\\_id.vue' /* webpackChunkName: "pages/panel/tickets/answer/_id" */))
const _da5a4ad4 = () => interopDefault(import('..\\pages\\panel\\user\\update\\_id.vue' /* webpackChunkName: "pages/panel/user/update/_id" */))
const _9e1b73be = () => interopDefault(import('..\\pages\\product\\category\\_id.vue' /* webpackChunkName: "pages/product/category/_id" */))
const _758f2aaa = () => interopDefault(import('..\\pages\\product\\search_result\\_value.vue' /* webpackChunkName: "pages/product/search_result/_value" */))
const _40006ea7 = () => interopDefault(import('..\\pages\\product\\single_product\\_id.vue' /* webpackChunkName: "pages/product/single_product/_id" */))
const _015f3ee4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _70fa4c3a,
    name: "checkout"
  }, {
    path: "/panel",
    component: _49eba3c2,
    name: "panel"
  }, {
    path: "/product",
    component: _ca26ee12,
    name: "product"
  }, {
    path: "/about_us/about_irnode",
    component: _66cdaa21,
    name: "about_us-about_irnode"
  }, {
    path: "/about_us/come_work_with_us",
    component: _73b28ee0,
    name: "about_us-come_work_with_us"
  }, {
    path: "/about_us/contact_us",
    component: _2704c0a1,
    name: "about_us-contact_us"
  }, {
    path: "/about_us/Survey",
    component: _466f187e,
    name: "about_us-Survey"
  }, {
    path: "/about_us/terms",
    component: _3fb923b3,
    name: "about_us-terms"
  }, {
    path: "/panel/product",
    component: _3390bf7a,
    name: "panel-product"
  }, {
    path: "/panel/profile",
    component: _1a88e96e,
    name: "panel-profile"
  }, {
    path: "/panel/tickets",
    component: _9455e96a,
    name: "panel-tickets"
  }, {
    path: "/panel/user",
    component: _49b67d97,
    name: "panel-user"
  }, {
    path: "/panel/tickets/send",
    component: _01bf15c2,
    name: "panel-tickets-send"
  }, {
    path: "/panel/product/update/:id?",
    component: _29224c42,
    name: "panel-product-update-id"
  }, {
    path: "/panel/tickets/answer/:id?",
    component: _795b4df5,
    name: "panel-tickets-answer-id"
  }, {
    path: "/panel/user/update/:id?",
    component: _da5a4ad4,
    name: "panel-user-update-id"
  }, {
    path: "/product/category/:id?",
    component: _9e1b73be,
    name: "product-category-id"
  }, {
    path: "/product/search_result/:value?",
    component: _758f2aaa,
    name: "product-search_result-value"
  }, {
    path: "/product/single_product/:id?",
    component: _40006ea7,
    name: "product-single_product-id"
  }, {
    path: "/",
    component: _015f3ee4,
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
