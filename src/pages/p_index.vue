<template lang="pug">
    div#index_page
        v-carousel
            v-carousel-item( v-for="(item,i) in items", :key="i", :src="item.src")
        V-container
            v-layout
                v-flex
                    h4.display-2.font-weight-bold.text-sm-center.indigo--text.darken-4 Недавние выступления
                    h5.headline.text-sm-center выпускников нашей школы
        v-container
            v-layout
                v-flex
                    div.swipper-slider
                        swipper
        v-container
            v-layout
                v-flex
                    div.text-xs-center
                        v-btn.yellow.accent-4.black--text.font-weight-bold(round, color="primary" ) Rounded Button
                    h4.display-2.font-weight-bold.text-sm-center.indigo--text.darken-4 Направления
                    h5.headline.text-sm-center танцевального спортивного клуба "Мелиса"
        v-container
            v-layout(row ,wrap, xs12)
                v-flex.dance-type(v-for="(item,index) in 6", :key="index", xs-6)
                    v-card
                        v-img(src="https://cdn.vuetifyjs.com/images/cards/desert.jpg", aspect-ratio="2.75")
                        v-card-title
                            div
                            h3.headline.mb-0 Kangaroo Valley Safari
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
        v-container(fluid indigo darken-4)
            v-container
                v-layout(wrap, row)
                    v-flex(xs12, sm3)
                        div.font-weight-black Melisa
                    v-flex(xs12, sm3)
                        v-list
                            v-list-tile(v-for="(item,index) in 6", :key="index")
                                v-list-tile-action-text Контакты
                    v-flex(xs12, sm3)
                        v-list
                            v-list-tile(v-for="item in 6")
                                v-list-tile-action-text Контакты
                    v-flex(xs12, sm3)








</template>

<script>
    export default {
        name: "myindex",
        data (){
            return {
                items: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .swipper-slider {
        height: 100px;
        border: 1px solid #cecece;
    }
    .dance-type {
        margin: 10px;
    }

</style>