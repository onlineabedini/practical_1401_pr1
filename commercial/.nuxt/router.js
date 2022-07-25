import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _76ea74e8 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _5c7b069e = () => interopDefault(import('../pages/panel/index.vue' /* webpackChunkName: "pages/panel/index" */))
const _3f600d48 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _6c916966 = () => interopDefault(import('../pages/about_us/about_irnode.vue' /* webpackChunkName: "pages/about_us/about_irnode" */))
const _45a0bc6b = () => interopDefault(import('../pages/about_us/come_work_with_us.vue' /* webpackChunkName: "pages/about_us/come_work_with_us" */))
const _0ac98d26 = () => interopDefault(import('../pages/about_us/contact_us.vue' /* webpackChunkName: "pages/about_us/contact_us" */))
const _5cb0ef83 = () => interopDefault(import('../pages/about_us/Survey.vue' /* webpackChunkName: "pages/about_us/Survey" */))
const _97e44fe4 = () => interopDefault(import('../pages/about_us/terms.vue' /* webpackChunkName: "pages/about_us/terms" */))
const _7580b891 = () => interopDefault(import('../pages/panel/product/index.vue' /* webpackChunkName: "pages/panel/product/index" */))
const _d21f566a = () => interopDefault(import('../pages/panel/profile/index.vue' /* webpackChunkName: "pages/panel/profile/index" */))
const _72f466ee = () => interopDefault(import('../pages/panel/tickets/index.vue' /* webpackChunkName: "pages/panel/tickets/index" */))
const _5beacb3f = () => interopDefault(import('../pages/panel/user/index.vue' /* webpackChunkName: "pages/panel/user/index" */))
const _b658d7be = () => interopDefault(import('../pages/panel/tickets/send.vue' /* webpackChunkName: "pages/panel/tickets/send" */))
const _6f930376 = () => interopDefault(import('../pages/panel/product/update/_id.vue' /* webpackChunkName: "pages/panel/product/update/_id" */))
const _59796742 = () => interopDefault(import('../pages/panel/tickets/answer/_id.vue' /* webpackChunkName: "pages/panel/tickets/answer/_id" */))
const _3432e857 = () => interopDefault(import('../pages/panel/user/update/_id.vue' /* webpackChunkName: "pages/panel/user/update/_id" */))
const _5ad4afe2 = () => interopDefault(import('../pages/product/category/_id.vue' /* webpackChunkName: "pages/product/category/_id" */))
const _56063f33 = () => interopDefault(import('../pages/product/search_result/_value.vue' /* webpackChunkName: "pages/product/search_result/_value" */))
const _03fb2e89 = () => interopDefault(import('../pages/product/single_product/_id.vue' /* webpackChunkName: "pages/product/single_product/_id" */))
const _3ab8b87c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _76ea74e8,
    name: "checkout"
  }, {
    path: "/panel",
    component: _5c7b069e,
    name: "panel"
  }, {
    path: "/product",
    component: _3f600d48,
    name: "product"
  }, {
    path: "/about_us/about_irnode",
    component: _6c916966,
    name: "about_us-about_irnode"
  }, {
    path: "/about_us/come_work_with_us",
    component: _45a0bc6b,
    name: "about_us-come_work_with_us"
  }, {
    path: "/about_us/contact_us",
    component: _0ac98d26,
    name: "about_us-contact_us"
  }, {
    path: "/about_us/Survey",
    component: _5cb0ef83,
    name: "about_us-Survey"
  }, {
    path: "/about_us/terms",
    component: _97e44fe4,
    name: "about_us-terms"
  }, {
    path: "/panel/product",
    component: _7580b891,
    name: "panel-product"
  }, {
    path: "/panel/profile",
    component: _d21f566a,
    name: "panel-profile"
  }, {
    path: "/panel/tickets",
    component: _72f466ee,
    name: "panel-tickets"
  }, {
    path: "/panel/user",
    component: _5beacb3f,
    name: "panel-user"
  }, {
    path: "/panel/tickets/send",
    component: _b658d7be,
    name: "panel-tickets-send"
  }, {
    path: "/panel/product/update/:id?",
    component: _6f930376,
    name: "panel-product-update-id"
  }, {
    path: "/panel/tickets/answer/:id?",
    component: _59796742,
    name: "panel-tickets-answer-id"
  }, {
    path: "/panel/user/update/:id?",
    component: _3432e857,
    name: "panel-user-update-id"
  }, {
    path: "/product/category/:id?",
    component: _5ad4afe2,
    name: "product-category-id"
  }, {
    path: "/product/search_result/:value?",
    component: _56063f33,
    name: "product-search_result-value"
  }, {
    path: "/product/single_product/:id?",
    component: _03fb2e89,
    name: "product-single_product-id"
  }, {
    path: "/",
    component: _3ab8b87c,
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
