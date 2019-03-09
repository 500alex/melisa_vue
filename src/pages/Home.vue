<template lang="pug">
    div#index_page
        //m-carousel
        m-promo
        m-direction
        m-photo
        m-teacher
        m-news
</template>

<script>
    export default {
        name: "home",
        mounted() {
                var mySwiper = new Swiper ('.swiper-container', {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    direction: 'horizontal',
                    loop: true,
                    breakpoints: {
                        // when window width is <= 480px
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is <= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1250: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }

                    },
                    mousewheel: {
                        invert: false,
                    },

                    // If we need pagination
                    pagination: {
                        el: '.swiper-pagination'
                    },

                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    // And if we need scrollbar
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },

                });

        }
    }
</script>

<style lang="scss">


</style>