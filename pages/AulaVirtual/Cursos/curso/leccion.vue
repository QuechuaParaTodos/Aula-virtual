<template>
    <v-container fluid>
        <Breadcrumbs />
        <h1>Aula virtual - Mis Cursos - Curso Quechua - Lección 1</h1>
    </v-container>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs.vue";

export default {
    head: {
        title: "Lección 1"
    },
    layout: "leccion",
    components: {
        Breadcrumbs
    }
};
</script>
