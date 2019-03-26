import store from './store/index.js'
import admin from "@/store/modules/admin";

export default function (to, from, next) {
    console.log('store ' + store.getters['admin/user'] );
    if (store.getters['admin/user']) {
        next()
    }else {
        next('/login?loginError=true')
    }
}