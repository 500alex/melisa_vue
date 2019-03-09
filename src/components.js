import counter from './components/counter.vue'
import layout from './components/layout.vue'
import swipper from './components/swipper.vue'
import topBtn from './components/top-btn.vue'
import mHeader from './components/m-header.vue'
import mfooter from './components/m-footer.vue'
import mCarousel from './components/m-carousel.vue'
import mTeacher from './components/m-teacher.vue'
import mPromo from './components/m-promo.vue'
import mDirection from './components/m-direction.vue'
import mNews from './components/m-news.vue'
import mPhoto from './components/m-photo.vue'

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
        'm-teacher',
        mTeacher
    );
    Vue.component(
        'm-promo',
        mPromo
    );
    Vue.component(
        'm-direction',
        mDirection
    );
    Vue.component(
        'm-footer',
        mfooter
    );
    Vue.component(
        'm-photo',
        mPhoto
    );
    Vue.component(
        'm-carousel',
        mCarousel
    );
    Vue.component(
        'm-news',
        mNews
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