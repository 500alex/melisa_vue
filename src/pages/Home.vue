<template lang="pug">
    div#index_page
        //m-carousel
        m-promo
        m-direction
        v-container
            v-layout
                v-flex
                    h4.display-2.font-weight-bold.text-sm-center.indigo--text.darken-4 Недавние выступления!
                    h5.headline.text-sm-center выпускников нашей школы
        v-container
            v-layout
                v-flex
                    div.swipper-slider
                        swipper
                            .swiper-slide.dance-item(v-for="(item,index) in 4", :key="index") Slide {{index}}

        m-teacher

        v-container
            v-layout(row, wrap, xs12)
                v-flex(xs12 sm6)
                    v-card
                        v-img(src="https://cdn.vuetifyjs.com/images/cards/desert.jpg", aspect-ratio="1")
                v-flex(xs12 sm6)
                    v-list
                        v-list-tile Савкина Елена Сергеевна
                        v-list-tile
                            v-list-tile-content
                                v-list-tile-title Финалиста чемпионата мира
                                v-list-tile-sub-title (Германия) 2011
                        v-list-tile
                            v-list-tile-content
                                v-list-tile-title Финалиста чемпионата мира
                                v-list-tile-sub-title (Германия) 2011
                        v-list-tile
                            v-list-tile-content
                                v-list-tile-title Финалиста чемпионата мира
                                v-list-tile-sub-title (Германия) 2011
        v-container( light-blue lighten-5 fluid)
            v-container
                v-layout(wrap, row)
                    v-flex(sm3)
                      div.font-weight-black Новости
                      a(href="#") Смотреть все
                    v-flex(v-for="(item,index) in 3", :key="index" sm3)
                        v-list
                            v-list-tile-content
                                v-list-tile-title Изменение расписание группы 623
                                v-list-tile-sub-title Если у вас есть фото или видео материалы, можете прислать их на почту example@ex.ru

</template>

<script>
    import MCarousel from "../components/m-carousel";
    export default {
        name: "home",
        components: {MCarousel},
    }
</script>

<style scoped lang="scss">

    .dance-type {
        margin: 10px;
    }

</style>