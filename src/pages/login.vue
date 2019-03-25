<template>
    <div>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md6>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Авторизация</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form  ref="form"
                                         v-model="valid"
                                         validation
                                >
                                    <v-text-field
                                            prepend-icon="person"
                                            name="email"
                                            label="Email"
                                            type="email"
                                            v-model="email"
                                            :rules="emailRules"
                                    ></v-text-field>
                                    <v-text-field
                                            id="password"
                                            prepend-icon="lock"
                                            name="password"
                                            label="Password"
                                            type="password"
                                            :counter="6"
                                            v-model="password"
                                            :rules="passwordRules"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        color="primary"
                                        @click="onSubmit"
                                        :disabled="!valid || loading"
                                        :loading="loading"
                                >Войти</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    export default {
        name: "registration",
        data (){
            return {
                email: '',
                password: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail обязателен',
                    v => /.+@.+/.test(v) || 'E-mail не валидный'
                ],
                passwordRules: [
                    v => !!v || 'Пароль обязателен',
                    v => (v && v.length >= 6) || 'Пароль должен быть больше 6 символов'
                ],
            }
        },
        computed: {
            loading () {
                return this.$store.getters['shared/loading']
            }
        },
        methods: {
            onSubmit () {
                if (this.$refs.form.validate()){
                    const user = {
                        email: this.email,
                        password: this.password
                    };
                    this.$store.dispatch('admin/loginUser', user)
                        .then(()=>{
                            this.$router.push('/');
                        })
                        .catch(err=> {})
                }
            }
        },
        created () {
          if (this.$route.query['loginError']) {
              this.$store.dispatch('shared/setError', 'Залогиньтесь для доступа к странице')
          }
        }
    }
</script>

<style scoped>

</style>