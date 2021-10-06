<template>
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        width="300px"
        height="100%"
        class="sidebar__left"
    >
        <v-list-item class="px-2">
            <v-btn icon>
                <v-icon>mdi-menu</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click.stop="mini = !mini">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense class="pa-0">
            <SidebarLeftList
                :title="info.videos.text"
                :icon="info.videos.icon"
                :items="info.videos.subitems"
            />
            <SidebarLeftList
                :title="info.actividades.text"
                :icon="info.actividades.icon"
                :items="info.actividades.subitems"
            />
            <SidebarLeftList
                :title="info.materialAdicional.text"
                :icon="info.materialAdicional.icon"
                :items="info.materialAdicional.subitems"
            />
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import SidebarLeftList from "./SidebarLeftList";

export default {
    data: () => ({
        drawer: true,
        mini: false,
        info: {
            videos: {
                text: "Videos",
                icon: "$vuetify.icons.videos",
                subitems: [
                    {
                        title: "Video 1: Imaynallam Kachkanki?",
                        icon: "mdi-play-circle"
                    },
                    {
                        title: "Video 2: Imaynallam Kachkanki?",
                        icon: "mdi-play-circle"
                    },
                    {
                        title: "Video 3: Imaynallam Kachkanki?",
                        icon: "mdi-play-circle"
                    }
                ]
            },
            actividades: {
                text: "Actividades",
                icon: "$vuetify.icons.actividades",
                subitems: [
                    { title: "Completar", icon: "mdi-play-circle" },
                    { title: "Relacionar", icon: "mdi-play-circle" }
                ]
            },
            materialAdicional: {
                text: "Material adicional",
                icon: "$vuetify.icons.material",
                subitems: [
                    { title: "Lección 1: Ppts", icon: "mdi-play-circle" },
                    { title: "Lección 1: Pdfs", icon: "mdi-play-circle" }
                ]
            }
        }
    }),
    components: {
        SidebarLeftList
    }
};
</script>

<style lang="scss" scoped></style>
