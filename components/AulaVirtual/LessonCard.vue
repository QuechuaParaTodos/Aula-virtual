<template>
    <v-item-group>
        <v-row>
            <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="6"
                md="3"
                lg="2"
                class="d-flex flex-column align-center"
            >
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card
                            flat
                            :elevation="hover ? 4 : 0"
                            @click="cardClicked"
                            class="each__lesson d-flex flex-column align-center justify-space-between pa-4 rounded-lg"
                            :to="item.url"
                        >
                            <div class="each__lesson__img rounded-lg pa-6 mb-2">
                                <v-img
                                    contain
                                    max-width="70px"
                                    max-height="70px"
                                    :src="require(`~/assets/img/${item.src}`)"
                                >
                                </v-img>
                            </div>

                            <p
                                class="pa-0 ma-0 each__lesson__subtitle purple1--text font-weight-bold"
                            >
                                {{ item.lesson }}
                            </p>
                            <p
                                class="pa-0 ma-0 each__lesson__title text-center font-weight-bold"
                            >
                                {{ item.title }}
                            </p>
                            <p class="pa-0 ma-0 text-center">{{ item.text }}</p>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
    </v-item-group>
</template>

<script>
export default {
    data: () => ({}),
    props: {
        items: Array
    },
    methods: {
        cardClicked() {
            console.log("Card clicked!");
        }
    }
};
</script>

<style lang="scss" scoped>
.each__lesson {
    width: 250px;
    height: 250px;
}

.each__lesson .each__lesson__img {
    border: 2px solid $--clr--primary;
}
</style>
