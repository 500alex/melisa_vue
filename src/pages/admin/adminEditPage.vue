<template>
    <div>
        <v-container>
            <h4 class="display-1 mb-3">Радектируем страницу</h4>
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
                                label="Иконка"
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
                                @click="saveNews"
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
                url: '',
                description: '',
                icon: '',
                valid: false,
                resource: null,
                curentPage: null,
                id: this.$route.params['id'],
                inputRulles: [
                    v => !!v || 'Обязательное поле',
                ]
            }
        },
        methods: {
            saveNews () {
                var _this = this;
                if (this.$refs.form.validate()){
                    const page = {
                        title: this.title,
                        url: this.url,
                        icon: this.icon,
                        description: this.description,

                    };
                    //this.resource.update({},news);
                    this.$http.put('http://localhost:3000/pages/'+ _this.id, page);
                    this.$router.push('/admin/pages');
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
                return this.$store.getters['shared/loading']
            },
        },
        created () {
            this.resource = this.$resource('pages{/id}')

        },
        mounted () {
            var _this = this;
            this.resource.get({id: _this.id}).then(response => response.json())
                .then(page => {
                    console.log('Редактируемая страницу' + page);
                    _this.title = page.title;
                    _this.url = page.url;
                    _this.icon = page.icon;
                    _this.description = page.description;
                });

        }
    }
</script>

<style scoped>

</style>