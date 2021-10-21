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
                to="/aulavirtual/cursos"
                :ripple="false"
                class="px-10 font-weight-bold"
                >Mis cursos</v-tab
            >
            <v-tab
                to="/aulavirtual/diccionario"
                :ripple="false"
                class="px-10 font-weight-bold"
                >Diccionario</v-tab
            >
            <v-tab
                to="/aulavirtual/calendario"
                :ripple="false"
                class="px-10 font-weight-bold"
                >Calendario</v-tab
            >
        </v-tabs>

        <v-divider inset vertical class="mx-4"></v-divider>

        <v-list class="aulavirtual__header__list align-self-end pa-0">
            <v-list-group :value="false" prepend-icon="mdi-account-circle">
                <template v-slot:activator>
                    <v-list-item-title>Users</v-list-item-title>
                </template>

                <v-list-item-group>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-conversions</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Item 1</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-audience</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Item 2</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list-group>
        </v-list>
    </v-container>
</template>

<script>
export default {
    data: () => ({})
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
