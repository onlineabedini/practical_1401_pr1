import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _30add309 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _63d12b11 = () => interopDefault(import('..\\pages\\panel\\index.vue' /* webpackChunkName: "pages/panel/index" */))
const _5ce50ef4 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _996ccaa0 = () => interopDefault(import('..\\pages\\about_us\\about_irnode.vue' /* webpackChunkName: "pages/about_us/about_irnode" */))
const _e4b46d3e = () => interopDefault(import('..\\pages\\about_us\\come_work_with_us.vue' /* webpackChunkName: "pages/about_us/come_work_with_us" */))
const _639188f0 = () => interopDefault(import('..\\pages\\about_us\\contact_us.vue' /* webpackChunkName: "pages/about_us/contact_us" */))
const _5892604d = () => interopDefault(import('..\\pages\\about_us\\Survey.vue' /* webpackChunkName: "pages/about_us/Survey" */))
const _4593b3f8 = () => interopDefault(import('..\\pages\\about_us\\terms.vue' /* webpackChunkName: "pages/about_us/terms" */))
const _3b43e1d4 = () => interopDefault(import('..\\pages\\panel\\product\\index.vue' /* webpackChunkName: "pages/panel/product/index" */))
const _47c7ccda = () => interopDefault(import('..\\pages\\panel\\profile\\index.vue' /* webpackChunkName: "pages/panel/profile/index" */))
const _0ae14cdc = () => interopDefault(import('..\\pages\\panel\\tickets\\index.vue' /* webpackChunkName: "pages/panel/tickets/index" */))
const _60270da6 = () => interopDefault(import('..\\pages\\panel\\user\\index.vue' /* webpackChunkName: "pages/panel/user/index" */))
const _3bad3d6e = () => interopDefault(import('..\\pages\\panel\\tickets\\send.vue' /* webpackChunkName: "pages/panel/tickets/send" */))
const _1ebd45da = () => interopDefault(import('..\\pages\\panel\\product\\update\\_id.vue' /* webpackChunkName: "pages/panel/product/update/_id" */))
const _40da5ec6 = () => interopDefault(import('..\\pages\\panel\\tickets\\answer\\_id.vue' /* webpackChunkName: "pages/panel/tickets/answer/_id" */))
const _9fd63936 = () => interopDefault(import('..\\pages\\panel\\user\\update\\_id.vue' /* webpackChunkName: "pages/panel/user/update/_id" */))
const _052392a0 = () => interopDefault(import('..\\pages\\product\\category\\_id.vue' /* webpackChunkName: "pages/product/category/_id" */))
const _60fe5c3a = () => interopDefault(import('..\\pages\\product\\search_result\\_value.vue' /* webpackChunkName: "pages/product/search_result/_value" */))
const _686377f6 = () => interopDefault(import('..\\pages\\product\\single_product\\_id.vue' /* webpackChunkName: "pages/product/single_product/_id" */))
const _e4e837c2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _30add309,
    name: "checkout"
  }, {
    path: "/panel",
    component: _63d12b11,
    name: "panel"
  }, {
    path: "/product",
    component: _5ce50ef4,
    name: "product"
  }, {
    path: "/about_us/about_irnode",
    component: _996ccaa0,
    name: "about_us-about_irnode"
  }, {
    path: "/about_us/come_work_with_us",
    component: _e4b46d3e,
    name: "about_us-come_work_with_us"
  }, {
    path: "/about_us/contact_us",
    component: _639188f0,
    name: "about_us-contact_us"
  }, {
    path: "/about_us/Survey",
    component: _5892604d,
    name: "about_us-Survey"
  }, {
    path: "/about_us/terms",
    component: _4593b3f8,
    name: "about_us-terms"
  }, {
    path: "/panel/product",
    component: _3b43e1d4,
    name: "panel-product"
  }, {
    path: "/panel/profile",
    component: _47c7ccda,
    name: "panel-profile"
  }, {
    path: "/panel/tickets",
    component: _0ae14cdc,
    name: "panel-tickets"
  }, {
    path: "/panel/user",
    component: _60270da6,
    name: "panel-user"
  }, {
    path: "/panel/tickets/send",
    component: _3bad3d6e,
    name: "panel-tickets-send"
  }, {
    path: "/panel/product/update/:id?",
    component: _1ebd45da,
    name: "panel-product-update-id"
  }, {
    path: "/panel/tickets/answer/:id?",
    component: _40da5ec6,
    name: "panel-tickets-answer-id"
  }, {
    path: "/panel/user/update/:id?",
    component: _9fd63936,
    name: "panel-user-update-id"
  }, {
    path: "/product/category/:id?",
    component: _052392a0,
    name: "product-category-id"
  }, {
    path: "/product/search_result/:value?",
    component: _60fe5c3a,
    name: "product-search_result-value"
  }, {
    path: "/product/single_product/:id?",
    component: _686377f6,
    name: "product-single_product-id"
  }, {
    path: "/",
    component: _e4e837c2,
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
