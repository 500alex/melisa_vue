<template>
    <div>
        <v-carousel hide-delimiters>
            <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
            >
            </v-carousel-item>
        </v-carousel>

    </div>

</template>

<script>
    export default {
        name: "m-carousel",
        data (){
            return {
                items: [
                    {
                        src: './img/2.jpg'
                    },
                    {
                        src: './img/3.jpg'
                    },
                    {
                        src: './img/6.jpg'
                    },
                    {
                        src: './img/7.jpg'
                    },
                    {
                        src: './img/9.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>