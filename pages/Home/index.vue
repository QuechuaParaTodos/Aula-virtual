<template>
    <div>
        home
        <p>
            <ApuButton
                @click="showAlert"
                :loading="loading"
                :disabled="loading"
                :ripple="false"
                class="py-1 px-10"
            >
                Iniciar Sesión
            </ApuButton>
        </p>
    </div>
</template>

<script>
import ApuButton from "~/components/Shared/ApuButton.vue";
export default {
    components: {
        ApuButton
    },
    data() {
        return {
            loading: false
        };
    },
    methods: {
        showAlert(e) {
            console.log("e", e);
            // alert("mensaje de prueba");
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        }
    }
};
</script>

<style lang="scss" scoped></style>
