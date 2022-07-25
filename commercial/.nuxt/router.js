import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bd1e516 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6a1c9cae = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _ec3dc92c = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _4d18e466 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _6169cbe9 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _0ee240d0 = () => interopDefault(import('../pages/panel/index.vue' /* webpackChunkName: "pages/panel/index" */))
const _548f31bb = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _6927cb52 = () => interopDefault(import('../pages/samples.vue' /* webpackChunkName: "pages/samples" */))
const _7ca25289 = () => interopDefault(import('../pages/skills.vue' /* webpackChunkName: "pages/skills" */))
const _2f7dd2c5 = () => interopDefault(import('../pages/about_us/about_irnode.vue' /* webpackChunkName: "pages/about_us/about_irnode" */))
const _452a566c = () => interopDefault(import('../pages/about_us/come_work_with_us.vue' /* webpackChunkName: "pages/about_us/come_work_with_us" */))
const _122ec245 = () => interopDefault(import('../pages/about_us/contact_us.vue' /* webpackChunkName: "pages/about_us/contact_us" */))
const _83f8e7bc = () => interopDefault(import('../pages/about_us/Survey.vue' /* webpackChunkName: "pages/about_us/Survey" */))
const _7094a8e2 = () => interopDefault(import('../pages/about_us/terms.vue' /* webpackChunkName: "pages/about_us/terms" */))
const _237e73d5 = () => interopDefault(import('../pages/cart/biling.vue' /* webpackChunkName: "pages/cart/biling" */))
const _7ce5edb0 = () => interopDefault(import('../pages/panel/product/index.vue' /* webpackChunkName: "pages/panel/product/index" */))
const _c354ec2c = () => interopDefault(import('../pages/panel/profile/index.vue' /* webpackChunkName: "pages/panel/profile/index" */))
const _6429fcb0 = () => interopDefault(import('../pages/panel/tickets/index.vue' /* webpackChunkName: "pages/panel/tickets/index" */))
const _24ebc280 = () => interopDefault(import('../pages/panel/user/index.vue' /* webpackChunkName: "pages/panel/user/index" */))
const _3173bf22 = () => interopDefault(import('../pages/panel/tickets/send.vue' /* webpackChunkName: "pages/panel/tickets/send" */))
const _3db0a486 = () => interopDefault(import('../pages/panel/product/update/_id.vue' /* webpackChunkName: "pages/panel/product/update/_id" */))
const _6218e4fa = () => interopDefault(import('../pages/panel/tickets/answer/_id.vue' /* webpackChunkName: "pages/panel/tickets/answer/_id" */))
const _11c15c94 = () => interopDefault(import('../pages/panel/user/update/_id.vue' /* webpackChunkName: "pages/panel/user/update/_id" */))
const _9051d260 = () => interopDefault(import('../pages/product/category/_id.vue' /* webpackChunkName: "pages/product/category/_id" */))
const _ccdd4618 = () => interopDefault(import('../pages/product/search_result/_value.vue' /* webpackChunkName: "pages/product/search_result/_value" */))
const _0384c88a = () => interopDefault(import('../pages/product/single_product/_id.vue' /* webpackChunkName: "pages/product/single_product/_id" */))
const _d463202c = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _7ef1411c = () => interopDefault(import('../pages/sample/_id.vue' /* webpackChunkName: "pages/sample/_id" */))
const _2b89bfdb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0bd1e516,
    name: "about"
  }, {
    path: "/blog",
    component: _6a1c9cae,
    name: "blog"
  }, {
    path: "/cart",
    component: _ec3dc92c,
    name: "cart"
  }, {
    path: "/checkout",
    component: _4d18e466,
    name: "checkout"
  }, {
    path: "/contact",
    component: _6169cbe9,
    name: "contact"
  }, {
    path: "/panel",
    component: _0ee240d0,
    name: "panel"
  }, {
    path: "/product",
    component: _548f31bb,
    name: "product"
  }, {
    path: "/samples",
    component: _6927cb52,
    name: "samples"
  }, {
    path: "/skills",
    component: _7ca25289,
    name: "skills"
  }, {
    path: "/about_us/about_irnode",
    component: _2f7dd2c5,
    name: "about_us-about_irnode"
  }, {
    path: "/about_us/come_work_with_us",
    component: _452a566c,
    name: "about_us-come_work_with_us"
  }, {
    path: "/about_us/contact_us",
    component: _122ec245,
    name: "about_us-contact_us"
  }, {
    path: "/about_us/Survey",
    component: _83f8e7bc,
    name: "about_us-Survey"
  }, {
    path: "/about_us/terms",
    component: _7094a8e2,
    name: "about_us-terms"
  }, {
    path: "/cart/biling",
    component: _237e73d5,
    name: "cart-biling"
  }, {
    path: "/panel/product",
    component: _7ce5edb0,
    name: "panel-product"
  }, {
    path: "/panel/profile",
    component: _c354ec2c,
    name: "panel-profile"
  }, {
    path: "/panel/tickets",
    component: _6429fcb0,
    name: "panel-tickets"
  }, {
    path: "/panel/user",
    component: _24ebc280,
    name: "panel-user"
  }, {
    path: "/panel/tickets/send",
    component: _3173bf22,
    name: "panel-tickets-send"
  }, {
    path: "/panel/product/update/:id?",
    component: _3db0a486,
    name: "panel-product-update-id"
  }, {
    path: "/panel/tickets/answer/:id?",
    component: _6218e4fa,
    name: "panel-tickets-answer-id"
  }, {
    path: "/panel/user/update/:id?",
    component: _11c15c94,
    name: "panel-user-update-id"
  }, {
    path: "/product/category/:id?",
    component: _9051d260,
    name: "product-category-id"
  }, {
    path: "/product/search_result/:value?",
    component: _ccdd4618,
    name: "product-search_result-value"
  }, {
    path: "/product/single_product/:id?",
    component: _0384c88a,
    name: "product-single_product-id"
  }, {
    path: "/article/:id?",
    component: _d463202c,
    name: "article-id"
  }, {
    path: "/sample/:id?",
    component: _7ef1411c,
    name: "sample-id"
  }, {
    path: "/",
    component: _2b89bfdb,
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
