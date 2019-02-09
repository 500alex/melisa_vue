import counter from './components/counter.vue'
import layout from './components/layout.vue'
export default function (Vue) {
   // Vue.use(callout);

    Vue.component(
        'layout',
        layout
    );
}