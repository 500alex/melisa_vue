import counter from './components/counter.vue'
import layout from './components/layout.vue'
import myheader from './components/myheader.vue'
import swipper from './components/swipper.vue'
export default function (Vue) {
   // Vue.use(callout);

    Vue.component(
        'layout',
        layout
    );
    Vue.component(
        'myheader',
        myheader
    );
    Vue.component(
        'swipper',
        swipper
    );
}