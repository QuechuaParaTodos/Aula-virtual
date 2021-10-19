<template>
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        width="300px"
        class="sidebar__right"
        right
    >
        <v-list-item class="px-2">
            <v-btn icon @click.stop="mini = !mini">
                <v-icon v-if="mini">mdi-chevron-left</v-icon>
                <v-icon v-else>mdi-chevron-right</v-icon>
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense class="pa-0">
            <v-list-item class="d-flex flex-column pa-0">
                <v-spacer></v-spacer>
                <v-list-item-content>
                    <Notes @click="handleSave" />
                    <v-divider class="my-2"></v-divider>
                    <Dictionary @click="handleSearch" />
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import Notes from "./Notes.vue";
import Dictionary from "./Dictionary.vue";

export default {
    data: () => ({
        drawer: true,
        mini: false,
        dictionary: [
            {
                word: "chaki",
                meanings: [
                    {
                        meaning: "Pie",
                        grammatical_category: "s",
                        origin: "",
                        equivalent: "",
                        oringin_example: "Chakiykiqa sumaqmi",
                        translate_example: "Tus pies son hermosos"
                    },
                    {
                        meaning: "seco(a)",
                        grammatical_category: "adj",
                        origin: "",
                        equivalent: "",
                        oringin_example: "Aychaqa chakiñam kachkan",
                        translate_example: "La carne ya está seca"
                    }
                ]
            },
            {
                word: "api",
                meanings: [
                    {
                        meaning: "Mazamorra",
                        grammatical_category: "xxx",
                        origin: "",
                        equivalent: "",
                        oringin_example: "Xxxxxx xxxxxx",
                        translate_example: "Xxxxx xxx xxxxxx"
                    }
                ]
            }
        ]
    }),
    components: {
        Notes,
        Dictionary
    },
    methods: {
        handleSave(note) {
            console.log(note);
        },
        handleSearch(wordSearched) {
            const search = this.dictionary.filter(word => {
                word.word === wordSearched;
            });
            console.log(search);
        }
    }
};
</script>

<style lang="scss">
.sidebar__right {
    height: calc(100vh - 91px) !important;
}

.sidebar__right .v-navigation-drawer__content {
    overflow-y: hidden !important;
}
</style>
