import Counter from './components/counter.vue'
import AppComp from './components/app-comp.vue'
export default function (Vue) {
   // Vue.use(callout);

    Vue.component(
        'counter',
        Counter
    );
    Vue.component(
        'myApp',
        AppComp
    );
}