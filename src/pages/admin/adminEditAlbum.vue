<template>
    <div>
        <v-container>
            <h4 class="display-1 mb-3">Радектируем альбом</h4>
            <v-flex>
                <v-card
                        class="mx-auto"
                >
                    <v-form
                            ref="form"
                            v-model="valid"
                            class="pa-3 pt-4"
                            validation
                    >

                        <v-text-field
                                v-model="title"
                                box
                                label="Заголовок..."
                                type="text"
                                :rules="inputRulles"

                        ></v-text-field>
                        <v-textarea
                                v-model="shortDescription"
                                auto-grow
                                box
                                label="Краткое описание..."
                                rows="2"
                                :rules="inputRulles"
                        ></v-textarea>
                        <v-textarea
                                v-model="description"
                                auto-grow
                                box
                                label="Описание..."
                                rows="5"
                                :rules="inputRulles"
                        ></v-textarea>
                    </v-form>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-btn
                                flat
                                @click="$refs.form.reset()"
                        >
                            Clear
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                                :disabled="!valid"
                                :loading="loading"
                                class="white--text"
                                color="primary"
                                depressed
                                @click="saveAlbum"
                        >Обновить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "adminCreateNews",
        data () {
            return {
                title: '',
                shortDescription: '',
                description: '',
                valid: false,
                // resource: null,
                id: this.$route.params['id'],
                inputRulles: [
                    v => !!v || 'Обязательное поле',
                ]
            }
        },
        methods: {
            saveAlbum () {
                console.log('Обновляем');
                var _this = this;
                if (this.$refs.form.validate()){
                    const album = {
                        title: this.title,
                        shortDescription: this.shortDescription,
                        description: this.description,
                        data: this.data,
                        id: this.id
                    };

                    this.$store.dispatch('updateAlbum',album);
                    this.$router.push('/admin/albums');
                }
            },
        },
        watch: {
            $route (toR,fromR) {
                this.id = toR.params['id']
            }
        },
        computed: {
            loading () {
                return this.$store.getters.loading
            },
            dateNow () {
                return this.moment().format('DD-MM-YYYY');
            },
            curentAlbum () {
                const id = this.id;
                return this.$store.getters.getAlbumById(id);
            }
        },
        created () {
            //this.resource = this.$resource('albums{/id}')

        },
        mounted () {
            if (this.curentAlbum) {
                this.title = this.curentAlbum.title;
                this.shortDescription = this.curentAlbum.shortDescription;
                this.description = this.curentAlbum.description;
            }
        }
    }
</script>

<style scoped>

</style>