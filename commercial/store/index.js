// state
export const state = () => {
    return {
        is_logged_in: false,
        user_data: []
    }
}

export const mutations = {
    // login
    log_in(state, user_data) {
        state.is_logged_in = true;
        state.user_data = user_data;
    },

    // logout 
    log_out(state) {
        state.is_loged_in = false;
        window.location.reload(true)
    },

    // update user
    update_user(state, user_data) {
        state.user_data = user_data;
    },

    // add to cart
    add_to_cart(state, product) {
        if (state.is_logged_in === true) {
            state.user_data.cart.push(product);
            this.$axios.put('/user/update/' + state.user_data._id, state.user_data).then(
                res => {
                    alert('محصول با موفقیت به سبد خرید اضافه شد')
                },
                err => {
                    alert('اضافه کردن محصول به سبد خرید با مشکل مواجه شد')
                }
            )
        } else {
            alert('لطفا ابتدا وارد شوید')
            this.$router.push('/auth/login')
        }
    },

    // clear
    clear_cart(state) {
        state.user_data.cart = [];
        this.$axios.put('/user/update/' + state.user_data._id, state.user_data).then(
            res => {
                alert('محصول با موفقیت به سبد خرید اضافه شد')
            },
            err => {
                alert('اضافه کردن محصول به سبد خرید با مشکل مواجه شد')
            }
        )
    }
}