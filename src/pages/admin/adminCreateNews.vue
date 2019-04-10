<template>
    <div>
        <v-container>
            <h4 class="display-1 mb-3">Создание новости от {{moment().format('DD-MM-YYYY')}}</h4>
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
                        <!--<h5 style="margin-bottom: 20px;">Описание новости</h5>-->
                        <!--<ckeditor :editor="editor" v-model="description" :config="editorConfig"></ckeditor>-->
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
                                @click="saveNews"
                        >Создать</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-container>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import * as fb from 'firebase';
    export default {
        name: "adminCreateNews",
        data: () => ({
            title: '',
            shortDescription: '',
            description: '',
            valid: false,
            resouсe: null,
            inputRulles: [
                v => !!v || 'Обязательное поле',
            ],
            editor: ClassicEditor,
            editorConfig: {
                // The configuration of the editor.
            }
        }),
        methods: {
            saveNews () {
                if (this.$refs.form.validate()){
                        const news = {
                            title: this.title,
                            shortDescription: this.shortDescription,
                            description: this.description,
                            data: this.dateNow,
                        }

                        this.$store.dispatch('createNews', news)
                            .then(()=>{
                                this.$router.push('/admin/news');
                            })
                            .catch(()=>{})
                    // this.$http.post('http://localhost:3000/news', news)
                    //     .then(response =>{
                    //         return response.json()
                    //     })
                    //     .then(data => {
                    //         console.log(data);
                    //     })

                    //this.resource.save({},news);


                   // this.$router.push('/admin/news');
                }
            },
        },
        computed: {
            loading () {
                // return this.$store.getters['shared/loading']
            },
            dateNow () {
                return this.moment().format('DD-MM-YYYY');
            }
        },
        created () {
            //this.resource = this.$resource('news')
        }
    }
</script>

<style scoped>

</style>