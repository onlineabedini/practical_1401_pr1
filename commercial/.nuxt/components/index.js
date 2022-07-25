import { wrapFunctional } from './utils'

<<<<<<< HEAD
export { default as Logo } from '../../components/logo.vue'
export { default as Footer } from '../../components/footer/index.vue'
export { default as CardsBlogCard } from '../../components/cards/blog_card.vue'
export { default as CardsSampleCard } from '../../components/cards/sample_card.vue'
export { default as Header } from '../../components/header/index.vue'
export { default as HeaderLoginProfileButton } from '../../components/header/login_profile_button.vue'
export { default as ImgGrid } from '../../components/img_grid/index.vue'
export { default as ImgGridSingleGridPic } from '../../components/img_grid/single_grid_pic.vue'
export { default as SecondImgGrid } from '../../components/second_img_grid/index.vue'
export { default as SecondImgGridSingleImgCard } from '../../components/second_img_grid/single_img_card.vue'
export { default as CommerceComponentsAdvertiseFullWidthGrid } from '../../components/commerce_components/advertise/full_width_grid.vue'
export { default as CommerceComponentsAdvertiseInContentAdvertise } from '../../components/commerce_components/advertise/in_content_advertise.vue'
export { default as CommerceComponentsAdvertiseSingleAdvertise } from '../../components/commerce_components/advertise/single_advertise.vue'
export { default as CommerceComponentsProductsGrid } from '../../components/commerce_components/products_grid/index.vue'
export { default as CommerceComponentsProductsGridSingleCard } from '../../components/commerce_components/products_grid/single_card.vue'
export { default as CommerceComponentsSingleProductAddToCartComponent } from '../../components/commerce_components/single_product/add_to_cart_component.vue'
export { default as CommerceComponentsSingleProductInforamtionCard } from '../../components/commerce_components/single_product/inforamtion_card.vue'
export { default as CommerceComponentsSuggestedGrid } from '../../components/commerce_components/suggested_grid/index.vue'
export { default as CommerceComponentsSuggestedGridSingleSuggestCard } from '../../components/commerce_components/suggested_grid/single_suggest_card.vue'
export { default as MenuMainMenu } from '../../components/menu/main_menu/index.vue'
export { default as MenuPanelMenu } from '../../components/menu/panel_menu/index.vue'
export { default as CommerceComponentsProductsMangeManageForm } from '../../components/commerce_components/products_mange/manage_form/index.vue'
export { default as CommerceComponentsProductsMangeProductList } from '../../components/commerce_components/products_mange/product_list/index.vue'
export { default as CommerceComponentsProductsMangeProductListSingleProductRow } from '../../components/commerce_components/products_mange/product_list/single_product_row.vue'

export const LazyLogo = import('../../components/logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/footer/index.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyCardsBlogCard = import('../../components/cards/blog_card.vue' /* webpackChunkName: "components/cards-blog-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCardsSampleCard = import('../../components/cards/sample_card.vue' /* webpackChunkName: "components/cards-sample-card" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/header/index.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderLoginProfileButton = import('../../components/header/login_profile_button.vue' /* webpackChunkName: "components/header-login-profile-button" */).then(c => wrapFunctional(c.default || c))
export const LazyImgGrid = import('../../components/img_grid/index.vue' /* webpackChunkName: "components/img-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyImgGridSingleGridPic = import('../../components/img_grid/single_grid_pic.vue' /* webpackChunkName: "components/img-grid-single-grid-pic" */).then(c => wrapFunctional(c.default || c))
export const LazySecondImgGrid = import('../../components/second_img_grid/index.vue' /* webpackChunkName: "components/second-img-grid" */).then(c => wrapFunctional(c.default || c))
export const LazySecondImgGridSingleImgCard = import('../../components/second_img_grid/single_img_card.vue' /* webpackChunkName: "components/second-img-grid-single-img-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsAdvertiseFullWidthGrid = import('../../components/commerce_components/advertise/full_width_grid.vue' /* webpackChunkName: "components/commerce-components-advertise-full-width-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsAdvertiseInContentAdvertise = import('../../components/commerce_components/advertise/in_content_advertise.vue' /* webpackChunkName: "components/commerce-components-advertise-in-content-advertise" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsAdvertiseSingleAdvertise = import('../../components/commerce_components/advertise/single_advertise.vue' /* webpackChunkName: "components/commerce-components-advertise-single-advertise" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsProductsGrid = import('../../components/commerce_components/products_grid/index.vue' /* webpackChunkName: "components/commerce-components-products-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsProductsGridSingleCard = import('../../components/commerce_components/products_grid/single_card.vue' /* webpackChunkName: "components/commerce-components-products-grid-single-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsSingleProductAddToCartComponent = import('../../components/commerce_components/single_product/add_to_cart_component.vue' /* webpackChunkName: "components/commerce-components-single-product-add-to-cart-component" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsSingleProductInforamtionCard = import('../../components/commerce_components/single_product/inforamtion_card.vue' /* webpackChunkName: "components/commerce-components-single-product-inforamtion-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsSuggestedGrid = import('../../components/commerce_components/suggested_grid/index.vue' /* webpackChunkName: "components/commerce-components-suggested-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsSuggestedGridSingleSuggestCard = import('../../components/commerce_components/suggested_grid/single_suggest_card.vue' /* webpackChunkName: "components/commerce-components-suggested-grid-single-suggest-card" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuMainMenu = import('../../components/menu/main_menu/index.vue' /* webpackChunkName: "components/menu-main-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuPanelMenu = import('../../components/menu/panel_menu/index.vue' /* webpackChunkName: "components/menu-panel-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsProductsMangeManageForm = import('../../components/commerce_components/products_mange/manage_form/index.vue' /* webpackChunkName: "components/commerce-components-products-mange-manage-form" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsProductsMangeProductList = import('../../components/commerce_components/products_mange/product_list/index.vue' /* webpackChunkName: "components/commerce-components-products-mange-product-list" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsProductsMangeProductListSingleProductRow = import('../../components/commerce_components/products_mange/product_list/single_product_row.vue' /* webpackChunkName: "components/commerce-components-products-mange-product-list-single-product-row" */).then(c => wrapFunctional(c.default || c))
=======
export { default as Logo } from '../..\\components\\logo.vue'
export { default as CardsBlogCard } from '../..\\components\\cards\\blog_card.vue'
export { default as CardsSampleCard } from '../..\\components\\cards\\sample_card.vue'
export { default as Footer } from '../..\\components\\footer\\index.vue'
export { default as Header } from '../..\\components\\header\\index.vue'
export { default as HeaderLoginProfileButton } from '../..\\components\\header\\login_profile_button.vue'
export { default as ImgGrid } from '../..\\components\\img_grid\\index.vue'
export { default as ImgGridSingleGridPic } from '../..\\components\\img_grid\\single_grid_pic.vue'
export { default as SecondImgGrid } from '../..\\components\\second_img_grid\\index.vue'
export { default as SecondImgGridSingleImgCard } from '../..\\components\\second_img_grid\\single_img_card.vue'
export { default as CommerceComponentsAdvertiseFullWidthGrid } from '../..\\components\\commerce_components\\advertise\\full_width_grid.vue'
export { default as CommerceComponentsAdvertiseInContentAdvertise } from '../..\\components\\commerce_components\\advertise\\in_content_advertise.vue'
export { default as CommerceComponentsAdvertiseSingleAdvertise } from '../..\\components\\commerce_components\\advertise\\single_advertise.vue'
export { default as CommerceComponentsProductsGrid } from '../..\\components\\commerce_components\\products_grid\\index.vue'
export { default as CommerceComponentsProductsGridSingleCard } from '../..\\components\\commerce_components\\products_grid\\single_card.vue'
export { default as CommerceComponentsSingleProductAddToCartComponent } from '../..\\components\\commerce_components\\single_product\\add_to_cart_component.vue'
export { default as CommerceComponentsSingleProductInforamtionCard } from '../..\\components\\commerce_components\\single_product\\inforamtion_card.vue'
export { default as CommerceComponentsSuggestedGrid } from '../..\\components\\commerce_components\\suggested_grid\\index.vue'
export { default as CommerceComponentsSuggestedGridSingleSuggestCard } from '../..\\components\\commerce_components\\suggested_grid\\single_suggest_card.vue'
export { default as MenuMainMenu } from '../..\\components\\menu\\main_menu\\index.vue'
export { default as MenuPanelMenu } from '../..\\components\\menu\\panel_menu\\index.vue'
export { default as CommerceComponentsProductsMangeManageForm } from '../..\\components\\commerce_components\\products_mange\\manage_form\\index.vue'
export { default as CommerceComponentsProductsMangeProductList } from '../..\\components\\commerce_components\\products_mange\\product_list\\index.vue'
export { default as CommerceComponentsProductsMangeProductListSingleProductRow } from '../..\\components\\commerce_components\\products_mange\\product_list\\single_product_row.vue'

export const LazyLogo = import('../..\\components\\logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyCardsBlogCard = import('../..\\components\\cards\\blog_card.vue' /* webpackChunkName: "components/cards-blog-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCardsSampleCard = import('../..\\components\\cards\\sample_card.vue' /* webpackChunkName: "components/cards-sample-card" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\footer\\index.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\header\\index.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderLoginProfileButton = import('../..\\components\\header\\login_profile_button.vue' /* webpackChunkName: "components/header-login-profile-button" */).then(c => wrapFunctional(c.default || c))
export const LazyImgGrid = import('../..\\components\\img_grid\\index.vue' /* webpackChunkName: "components/img-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyImgGridSingleGridPic = import('../..\\components\\img_grid\\single_grid_pic.vue' /* webpackChunkName: "components/img-grid-single-grid-pic" */).then(c => wrapFunctional(c.default || c))
export const LazySecondImgGrid = import('../..\\components\\second_img_grid\\index.vue' /* webpackChunkName: "components/second-img-grid" */).then(c => wrapFunctional(c.default || c))
export const LazySecondImgGridSingleImgCard = import('../..\\components\\second_img_grid\\single_img_card.vue' /* webpackChunkName: "components/second-img-grid-single-img-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsAdvertiseFullWidthGrid = import('../..\\components\\commerce_components\\advertise\\full_width_grid.vue' /* webpackChunkName: "components/commerce-components-advertise-full-width-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsAdvertiseInContentAdvertise = import('../..\\components\\commerce_components\\advertise\\in_content_advertise.vue' /* webpackChunkName: "components/commerce-components-advertise-in-content-advertise" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsAdvertiseSingleAdvertise = import('../..\\components\\commerce_components\\advertise\\single_advertise.vue' /* webpackChunkName: "components/commerce-components-advertise-single-advertise" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsProductsGrid = import('../..\\components\\commerce_components\\products_grid\\index.vue' /* webpackChunkName: "components/commerce-components-products-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsProductsGridSingleCard = import('../..\\components\\commerce_components\\products_grid\\single_card.vue' /* webpackChunkName: "components/commerce-components-products-grid-single-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsSingleProductAddToCartComponent = import('../..\\components\\commerce_components\\single_product\\add_to_cart_component.vue' /* webpackChunkName: "components/commerce-components-single-product-add-to-cart-component" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsSingleProductInforamtionCard = import('../..\\components\\commerce_components\\single_product\\inforamtion_card.vue' /* webpackChunkName: "components/commerce-components-single-product-inforamtion-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsSuggestedGrid = import('../..\\components\\commerce_components\\suggested_grid\\index.vue' /* webpackChunkName: "components/commerce-components-suggested-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsSuggestedGridSingleSuggestCard = import('../..\\components\\commerce_components\\suggested_grid\\single_suggest_card.vue' /* webpackChunkName: "components/commerce-components-suggested-grid-single-suggest-card" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuMainMenu = import('../..\\components\\menu\\main_menu\\index.vue' /* webpackChunkName: "components/menu-main-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuPanelMenu = import('../..\\components\\menu\\panel_menu\\index.vue' /* webpackChunkName: "components/menu-panel-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsProductsMangeManageForm = import('../..\\components\\commerce_components\\products_mange\\manage_form\\index.vue' /* webpackChunkName: "components/commerce-components-products-mange-manage-form" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsProductsMangeProductList = import('../..\\components\\commerce_components\\products_mange\\product_list\\index.vue' /* webpackChunkName: "components/commerce-components-products-mange-product-list" */).then(c => wrapFunctional(c.default || c))
export const LazyCommerceComponentsProductsMangeProductListSingleProductRow = import('../..\\components\\commerce_components\\products_mange\\product_list\\single_product_row.vue' /* webpackChunkName: "components/commerce-components-products-mange-product-list-single-product-row" */).then(c => wrapFunctional(c.default || c))
>>>>>>> parent of f0695c9 (tak done)
