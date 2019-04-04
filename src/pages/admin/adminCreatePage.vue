<template>
    <div>
        <v-container>
            <h4 class="display-1 mb-3">Создание страницы </h4>
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
                        <v-text-field
                                v-model="url"
                                box
                                label="Url"
                                type="text"
                                :rules="inputRulles"

                        ></v-text-field>
                        <v-text-field
                                v-model="icon"
                                box
                                label="Иконка страницы"
                                type="text"
                                :rules="inputRulles"

                        ></v-text-field>
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
                                @click="savePage"
                        >Создать</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "adminCreatePage",
        data: () => ({
            title: '',
            url: '',
            icon: '',
            description: '',
            valid: false,
            resouсe: null,
            inputRulles: [
                v => !!v || 'Обязательное поле',
            ]
        }),
        methods: {
            savePage () {
                if (this.$refs.form.validate()){
                    const page = {
                        title: this.title,
                        url: this.url,
                        icon: this.icon,
                        description: this.description
                    }
                    // this.$http.post('http://localhost:3000/news', news)
                    //     .then(response =>{
                    //         return response.json()
                    //     })
                    //     .then(data => {
                    //         console.log(data);
                    //     })
                    this.resource.save({},page);
                    this.$router.push('/admin/pages');
                }
            },
        },
        computed: {
            loading () {
                return this.$store.getters['shared/loading']
            },
        },
        created () {
            this.resource = this.$resource('pages')
        }
    }
</script>

<style scoped>

</style>