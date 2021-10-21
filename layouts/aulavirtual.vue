<template>
    <v-app>
        <Header />
        <v-main>
            <v-container class="d-flex flex-row pa-0 container__height" fluid>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Header from "../components/AulaVirtual/Header";
import SidebarLeft from "../components/AulaVirtual/SidebarLeft";

export default {
    components: {
        Header,
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
