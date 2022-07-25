import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/footer/index.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  CardsBlogCard: () => import('../../components/cards/blog_card.vue' /* webpackChunkName: "components/cards-blog-card" */).then(c => wrapFunctional(c.default || c)),
  CardsSampleCard: () => import('../../components/cards/sample_card.vue' /* webpackChunkName: "components/cards-sample-card" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/header/index.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  HeaderLoginProfileButton: () => import('../../components/header/login_profile_button.vue' /* webpackChunkName: "components/header-login-profile-button" */).then(c => wrapFunctional(c.default || c)),
  ImgGrid: () => import('../../components/img_grid/index.vue' /* webpackChunkName: "components/img-grid" */).then(c => wrapFunctional(c.default || c)),
  ImgGridSingleGridPic: () => import('../../components/img_grid/single_grid_pic.vue' /* webpackChunkName: "components/img-grid-single-grid-pic" */).then(c => wrapFunctional(c.default || c)),
  SecondImgGrid: () => import('../../components/second_img_grid/index.vue' /* webpackChunkName: "components/second-img-grid" */).then(c => wrapFunctional(c.default || c)),
  SecondImgGridSingleImgCard: () => import('../../components/second_img_grid/single_img_card.vue' /* webpackChunkName: "components/second-img-grid-single-img-card" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsAdvertiseFullWidthGrid: () => import('../../components/commerce_components/advertise/full_width_grid.vue' /* webpackChunkName: "components/commerce-components-advertise-full-width-grid" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsAdvertiseInContentAdvertise: () => import('../../components/commerce_components/advertise/in_content_advertise.vue' /* webpackChunkName: "components/commerce-components-advertise-in-content-advertise" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsAdvertiseSingleAdvertise: () => import('../../components/commerce_components/advertise/single_advertise.vue' /* webpackChunkName: "components/commerce-components-advertise-single-advertise" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsProductsGrid: () => import('../../components/commerce_components/products_grid/index.vue' /* webpackChunkName: "components/commerce-components-products-grid" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsProductsGridSingleCard: () => import('../../components/commerce_components/products_grid/single_card.vue' /* webpackChunkName: "components/commerce-components-products-grid-single-card" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsSingleProductAddToCartComponent: () => import('../../components/commerce_components/single_product/add_to_cart_component.vue' /* webpackChunkName: "components/commerce-components-single-product-add-to-cart-component" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsSingleProductInforamtionCard: () => import('../../components/commerce_components/single_product/inforamtion_card.vue' /* webpackChunkName: "components/commerce-components-single-product-inforamtion-card" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsSuggestedGrid: () => import('../../components/commerce_components/suggested_grid/index.vue' /* webpackChunkName: "components/commerce-components-suggested-grid" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsSuggestedGridSingleSuggestCard: () => import('../../components/commerce_components/suggested_grid/single_suggest_card.vue' /* webpackChunkName: "components/commerce-components-suggested-grid-single-suggest-card" */).then(c => wrapFunctional(c.default || c)),
  MenuMainMenu: () => import('../../components/menu/main_menu/index.vue' /* webpackChunkName: "components/menu-main-menu" */).then(c => wrapFunctional(c.default || c)),
  MenuPanelMenu: () => import('../../components/menu/panel_menu/index.vue' /* webpackChunkName: "components/menu-panel-menu" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsProductsMangeManageForm: () => import('../../components/commerce_components/products_mange/manage_form/index.vue' /* webpackChunkName: "components/commerce-components-products-mange-manage-form" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsProductsMangeProductList: () => import('../../components/commerce_components/products_mange/product_list/index.vue' /* webpackChunkName: "components/commerce-components-products-mange-product-list" */).then(c => wrapFunctional(c.default || c)),
  CommerceComponentsProductsMangeProductListSingleProductRow: () => import('../../components/commerce_components/products_mange/product_list/single_product_row.vue' /* webpackChunkName: "components/commerce-components-products-mange-product-list-single-product-row" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
