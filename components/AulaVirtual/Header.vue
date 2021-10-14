<template>
    <v-container
        class="d-flex flex-row align-center px-16 py-0 aulavirtual__header"
        fluid
    >
        <img
            width="140"
            height="57"
            src="~/assets/img/logo-qpt.png"
            class="my-4"
        />

        <v-tabs
            right
            color="black"
            slider-size="5"
            slider-color="orange1"
            class="align-self-end"
        >
            <v-tab
                v-for="(item, i) in navbar"
                :key="i"
                :to="item.to"
                :ripple="false"
                class="px-10 font-weight-bold"
                >{{ item.text }}</v-tab
            >
        </v-tabs>

        <v-divider inset vertical class="mx-4"></v-divider>

        <v-menu bottom offset-y>
            <template v-slot:activator="{ on }">
                <v-btn plain height="48px" :ripple="false" v-on="on">
                    <v-avatar class="mr-4">
                        <img :src="require(`~/assets/img/${user.avatar}`)" />
                    </v-avatar>
                    <span class="mr-4">{{ user.name }}</span>
                    <v-icon left>
                        mdi-chevron-down
                    </v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-list-item-group>
                    <v-list-item v-for="(item, i) in user.items" :key="i">
                        <v-list-item-icon class="mr-3">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{
                                item.text
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-card>
        </v-menu>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        navbar: [
            {
                to: "/aulavirtual/cursos",
                text: "Mis cursos"
            },
            {
                to: "/aulavirtual/diccionario",
                text: "Diccionario"
            },
            {
                to: "/aulavirtual/calendario",
                text: "Calendario"
            }
        ],
        user: {
            name: "Alice Ramírez",
            avatar: "avatar.png",
            items: [
                {
                    text: "Perfil",
                    icon: "mdi-account-circle"
                },
                {
                    text: "Cursos",
                    icon: "mdi-account-circle"
                },
                {
                    text: "Cerrar sesión",
                    icon: "mdi-logout-variant"
                }
            ]
        }
    })
};
</script>

<style lang="scss">
.aulavirtual__header {
    border-bottom: 2px solid $--clr--primary;
}

.aulavirtual__header .v-tab {
    text-transform: none;
}
</style>
