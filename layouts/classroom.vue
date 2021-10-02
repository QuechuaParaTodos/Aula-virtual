<template>
    <v-app>
        <p>Header de Aula virtual</p>
        <v-main>
            <v-container class="d-flex flex-row pa-0 container__height" fluid>
                <SidebarLeft />
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import SidebarLeft from "../components/AulaVirtual/SidebarLeft";

export default {
    components: {
        SidebarLeft
    },
    data: () => ({})
};
</script>

<style lang="scss" scoped>
.container__height {
    height: 100%;
}
</style>
