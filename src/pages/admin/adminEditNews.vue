<template>
    <div>
        <v-container>
            <h4 class="display-1 mb-3">Радектируем новость</h4>
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
                        <!--<v-textarea-->
                                <!--v-model="description"-->
                                <!--auto-grow-->
                                <!--box-->
                                <!--label="Описание..."-->
                                <!--rows="5"-->
                                <!--:rules="inputRulles"-->
                        <!--&gt;</v-textarea>-->
                        <h5 style="margin-bottom: 20px;">Описание новости</h5>
                        <ckeditor :editor="editor"
                                  v-model="description"
                                  :config="editorConfig"
                                  @ready="prefill"
                        ></ckeditor>
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
                                @click="updateNews"
                        >Обновить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-container>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    export default {
        name: "adminCreateNews",
        data () {
            return {
                title: '',
                shortDescription: '',
                description: '',
                valid: false,
                resource: null,
                id: this.$route.params['id'],
                inputRulles: [
                    v => !!v || 'Обязательное поле',
                ],
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the editor.
                }
            }
        },
        methods: {
            updateNews () {
                console.log('Обновляем');
                var _this = this;
                if (this.$refs.form.validate()){
                    const news = {
                        title: this.title,
                        shortDescription: this.shortDescription,
                        description: this.description,
                        data: this.data,
                        id: this.id
                    };
                     //this.resource.update({},news);
                     //this.$http.put('http://localhost:3000/news/'+ _this.id, news);
                    this.$store.dispatch('updateNews',news);
                    this.$router.push('/admin/news');
                }
            },
            prefill( editor ) {
                this.editorData = "Prefill with data here";
            }
        },
        watch: {
            $route (toR,fromR) {
                this.id = toR.params['id']
            },
            editorData: function( val ) {
                this.$emit('input', val);
            },
        },
        computed: {
            loading () {
                return this.$store.getters.loading
            },
            dateNow () {
                return this.moment().format('DD-MM-YYYY');
            },
            curentNews () {
                const id = this.id;
                return this.$store.getters.getNewsById(id);
            }
        },
        created () {
            //this.resource = this.$resource('news{/id}')

        },
        mounted () {
            if (this.curentNews) {
                this.title = this.curentNews.title;
                this.shortDescription = this.curentNews.shortDescription;
                this.description = this.curentNews.description;
            }
            // var _this = this;
            // this.resource.get({id: _this.id}).then(response => response.json())
            //     .then(news => {
            //         console.log('Редактируемая новость' + news);
            //         _this.title = news.title;
            //         _this.shortDescription = news.shortDescription;
            //         _this.description = news.description;
            //     });


        }
    }
</script>

<style scoped>

</style>