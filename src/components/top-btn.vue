<template>
    <div>
        <v-btn
                fab
                dark
                fixed
                medium
                color="red"
                class="v-btn btnToTop v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark red"
                :class="{active:showTopBtn}"
                @click="backToTop"
        >
            <v-icon dark>keyboard_arrow_up</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "top-btn",
        data (){
            return {
                showTopBtn: false
            }
        },
        methods: {
            backToTop () {
                if (window.pageYOffset > 0) {
                    window.scrollBy(0, -80);
                    setTimeout(this.backToTop, 10);
                }
            },
            trackScroll () {
                var scrolled = window.pageYOffset;
                var coords = document.documentElement.clientHeight;

                if (scrolled > coords) {
                    this.showTopBtn = true;
                }
                if (scrolled < coords) {
                    this.showTopBtn = false;
                }
            }

        },
        mounted() {
            window.addEventListener('scroll', this.trackScroll);
        }
    }
</script>

<style lang="scss">
    .btnToTop {
        opacity: 0;
        transition: all .5s;
        &.active {
            opacity: 1;
        }
    }
</style>