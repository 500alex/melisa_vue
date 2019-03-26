<template>
    <div>
        <v-container>
            <h4 class="display-1 mb-3">Создание новости {{'01/01/01'}}</h4>
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
                                @click="createNews"
                        >Submit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "adminCreateNews",
        data: () => ({
            title: '',
            shortDescription: '',
            description: '',
            valid: false,
            inputRulles: [
                v => !!v || 'Обязательное поле',
            ]
        }),
        methods: {
            createNews () {
                if (this.$refs.form.validate()){
                        const news = {
                            title: this.title,
                            shortDescription: this.shortDescription,
                            description: this.description,
                            data: '01.01.01',
                            id: 10
                        }
                    this.$store.dispatch('news/createNews', news);
                    this.$router.push('/news');
                }
            },
        },
        computed: {
            loading () {
                return this.$store.getters['shared/loading']
            }
        },
    }
</script>

<style scoped>

</style>