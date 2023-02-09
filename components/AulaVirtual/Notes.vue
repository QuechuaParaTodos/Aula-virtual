<template>
    <v-card outlined>
        <div class="d-flex flex-row align-center justify-space-between">
            <v-card-title class="py-0">Notas</v-card-title>
            <v-btn
                @click="handleSave"
                text
                class="text-capitalize text-caption"
            >
                Guardar <v-icon right>mdi-tray-arrow-down </v-icon>
            </v-btn>
        </div>
        <v-divider></v-divider>
        <v-textarea
            solo
            no-resize
            hide-details
            rows="7"
            label="Aquí puedes escribir tus apuntes..."
            v-model="note"
        ></v-textarea>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        note: ""
    }),
    methods: {
        handleSave() {
            this.$emit("click", this.note);
        }
    }
};
</script>

<style lang="scss" scoped></style>
