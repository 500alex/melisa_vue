import counter from './components/counter.vue'
import layout from './components/layout.vue'
import mHeader from './components/m-header.vue'
import mfooter from './components/m-footer.vue'
import topBtn from './components/top-btn.vue'
import swipper from './components/swipper.vue'
export default function (Vue) {
   // Vue.use(callout);

    Vue.component(
        'layout',
        layout
    );
    Vue.component(
        'm-header',
        mHeader
    );
    Vue.component(
        'm-footer',
        mfooter
    );
    Vue.component(
        'top-btn',
        topBtn
    );
    Vue.component(
        'swipper',
        swipper
    );
}