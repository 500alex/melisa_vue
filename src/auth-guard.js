import store from './store/index.js'

export default function (to, from, next) {
    console.log('store ' + store.getters.getLinks );
    if (store.getters.user) {
        next()
    }else {
        next('/login?loginError=true')
    }
}