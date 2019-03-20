<template>
    <div>
        <v-footer
                dark
                height="auto"
        >
            <v-card
                    class="flex"
                    flat
                    tile
            >
                <v-card-title class="blue-grey darken-4">
                    <span class="logo">
                       <router-link :to="'/'">MELISSA</router-link>
                    </span>

                    <v-spacer></v-spacer>

                    <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-3"
                            dark
                            icon
                    >
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-title>
                <top-btn></top-btn>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "m-footer",
        data () {
            return {
                icons: [
                    'fab fa-facebook',
                    'fab fa-twitter',
                    'fab fa-google-plus',
                    'fab fa-linkedin',
                    'fab fa-instagram'
                ]
            }
        }
    }
</script>

<style scoped>

</style>