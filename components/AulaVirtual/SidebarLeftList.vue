<template>
    <v-list-group :value="true" sub-group color="info" class="each__list">
        <template v-slot:activator>
            <v-list-item class="pa-0">
                <v-list-item-icon class="mr-2">
                    <v-icon color="info">{{ icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>

        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            link
            class="each__list__sublist"
        >
            <v-list-item-icon class="mr-2">
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
    </v-list-group>
</template>

<script>
export default {
    data: () => ({}),
    props: {
        items: Array,
        title: String,
        icon: String
    }
};
</script>

<style lang="scss">
.each__list .v-list-group__header {
    flex-direction: row-reverse;
}

.each__list .each__list__sublist {
    border-top: 1px solid #c4c4c4;
    .v-list-item__title {
        white-space: inherit;
    }
}

.each__list .each__list__sublist:last-child {
    border-bottom: 1px solid #c4c4c4;
}
</style>
