<template>
    <v-container class="my-12">
        <v-row >
            <v-col class="c-bg-form text-center" xs="12" sm="10" offset-sm="1" md="8" offset-md="2">
                <v-container>
                    <v-row>
                        <v-col xs="12" sm="8" md="6" offset-sm="2" offset-md="3">
                            <p class="mb-0">Regístrate</p>
                            <img src="@/assets/img/apu-perfil.png" alt="Apu Perfil" />
                        </v-col>
                    </v-row>
                </v-container>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-container>
                        <v-row>
                            <v-col xs="12" sm="8" md="8" offset-sm="2" offset-md="2">
                                <v-text-field dense class="c-height" v-model="email" :rules="emailRules" label="Email"
                                    outlined></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col xs="12" sm="8" md="8" offset-sm="2" offset-md="2">
                                <v-text-field dense class="c-height" v-model="password" :rules="passwordRules"
                                    label="Contraseña" outlined type="password"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col xs="12" sm="8" md="8" offset-sm="2" offset-md="2">
                                <v-text-field dense class="c-height" v-model="email" :rules="emailRules" label="Email"
                                    outlined></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col xs="12" sm="8" md="8" offset-sm="2" offset-md="2">
                                <v-text-field dense class="c-height" v-model="password" :rules="passwordRules"
                                    label="Contraseña" outlined type="password"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col xs="12" sm="8" md="8" offset-sm="2" offset-md="2">
                                <v-text-field dense class="c-height" v-model="email" :rules="emailRules" label="Email"
                                    outlined></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col xs="12" sm="8" md="8" offset-sm="2" offset-md="2">
                                <v-text-field dense class="c-height" v-model="password" :rules="passwordRules"
                                    label="Contraseña" outlined type="password"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col xs="12" sm="8" md="6" offset-sm="2" offset-md="3">
                                <ApuButton :disabled="!valid" :loading="loading" @click="validate" apuColor="purple"
                                    apuForeColor="orange" class="px-10">Registrarte</ApuButton>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
                <v-container>
                    <v-row>
                        <v-col xs="12" sm="8" md="6" offset-sm="2" offset-md="3">
                            <!-- <div>
                                <a href="#" class="c-link-purple">Olvidaste tu contraseña
                                </a>
                            </div> -->
                            <div class="c-split"></div>
                            <p class="mb-0 mt-4">
                                <a href="#" class="c-link-black">Ya tienes una cuenta?</a>
                            </p>
                            <p>
                                <nuxt-link to="/Login" class="c-link-purple">
                                    Inicia sesión
                                </nuxt-link>
                            </p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ApuButton from '../../components/ApuButton.vue';
export default {
    name: 'SignIn',
    components: { ApuButton },
    data: () => ({
        valid: false,
        loading: false,
        email: '',
        emailRules: [
            v => !!v || 'Email es requerido',
            v => /.+@.+\..+/.test(v) || 'Email es requerido',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Contraseña es requerida',
        ],
    }),
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                }, 1500);
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.c-link-purple {
    color: purple;
    text-decoration: none;
}

.c-link-black {
    color: black;
    text-decoration: none;
}

.c-height {
    max-height: 40px;
}

.c-bg-form {
    border: 2px solid purple;
}

.c-split {
    height: 1px;
    border: 1px solid #939393;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>