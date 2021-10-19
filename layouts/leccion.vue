<template>
    <v-app>
        <Header />
        <v-main>
            <v-container class="d-flex flex-row pa-0 container__height" fluid>
                <SidebarLeft />
                <Nuxt />
                <SidebarRight />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Header from "~/components/AulaVirtual/Header";
import SidebarLeft from "~/components/AulaVirtual/SidebarLeft";
import SidebarRight from "~/components/AulaVirtual/SidebarRight";

export default {
    components: {
        Header,
        SidebarLeft,
        SidebarRight
    },
    data: () => ({})
};
</script>

<style lang="scss" scoped>
.container__height {
    height: 100%;
}
</style>
