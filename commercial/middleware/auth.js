export default function ({ store, redirect }) {
    if (store.state.is_logged_in === false) {
        redirect('/auth/login')
    }
}