<template lang="pug">
    div
        div Карусель
        v-carousel
            v-carousel-item( v-for="(item,i) in items", :key="i", :src="item.src")
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

<style scoped>

</style>