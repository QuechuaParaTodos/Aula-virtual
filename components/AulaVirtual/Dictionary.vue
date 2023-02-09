<template>
    <v-card>
        <v-card-title class="py-1">Diccionario</v-card-title>
        <v-divider></v-divider>
        <v-tabs grow color="black" slider-color="orange1">
            <v-tab
                :ripple="false"
                class="font-weight-bold text-caption text-capitalize"
                >Español</v-tab
            >
            <v-tab
                :ripple="false"
                class="font-weight-bold text-caption text-capitalize"
                >Quechua</v-tab
            >
        </v-tabs>
        <div class="d-flex flex-row pt-4 px-4 mb-4">
            <v-text-field
                v-model="word"
                class="text-caption dictionary__searcher"
                solo
                flat
                dense
                hide-details
                placeholder="Escribe la palabra que buscas"
            ></v-text-field>
            <v-btn
                height="40"
                depressed
                class="btn__search"
                @click="handleSearch"
            >
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </div>
        <v-card-text class="container__dictionary__result">
            {{ results }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        word: ""
    }),
    props: {
        results: String
    },
    methods: {
        handleSearch() {
            this.$emit("click", this.word);
        }
    }
};
</script>

<style lang="scss" scoped>
.dictionary__searcher {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-left: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 10px 0px 0px 10px;
}

.btn__search {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 0px 10px 10px 0px;
}

.container__dictionary__result {
    height: 180px;
    overflow: auto;
}
</style>
