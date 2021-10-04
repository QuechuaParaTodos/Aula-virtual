<template>
    <div>
        home
        <p><ApuButton @click="showAlert">iniciar sesión</ApuButton></p>
    </div>
</template>

<script>
    import ApuButton from '../../components/Shared/ApuButton.vue'
    export default {
        components: {
            ApuButton
        },
        methods: {
            showAlert: () => {
                alert('mensaje de prueba');
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>