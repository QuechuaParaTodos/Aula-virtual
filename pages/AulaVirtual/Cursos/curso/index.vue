<template>
    <v-container fluid class="px-3 px-md-16">
        <h1>Hola, {{ user.name }}!</h1>
        <h2 class="info--text">IMAYNALLAM KACHKANKI?</h2>
        <h3 class="purple1--text text-uppercase">{{ user.status }}</h3>
        <LessonCard :items="courses.basic" />
    </v-container>
</template>

<script>
import LessonCard from "~/components/AulaVirtual/LessonCard.vue";
export default {
    layout: "aulavirtual",
    data: () => ({
        user: {
            name: "Valeria",
            status: "Quechua básico"
        },
        courses: {
            basic: [
                {
                    src: "lesson-hand.png",
                    lesson: "Lección 1",
                    title: "Imaynallam Kachkanki?",
                    text: "¿Cómo estás?",
                    url: "/aulavirtual/cursos/curso/leccion"
                },
                {
                    src: "lesson-world.png",
                    lesson: "Lección 2",
                    title: "Maymantataq kanki?",
                    text: "¿De dónde eres?",
                    url: ""
                },
                {
                    src: "lesson-conversation.png",
                    lesson: "Lección 3",
                    title: "Imataq sutiyki?",
                    text: "¿Cuál es tu nombre?",
                    url: ""
                },
                {
                    src: "lesson-pin.png",
                    lesson: "Lección 4",
                    title: "Maypitaq yachanki?",
                    text: "¿Dónde vives?",
                    url: ""
                },
                {
                    src: "lesson-phone.png",
                    lesson: "Lección 5",
                    title: "Imatataq rurachkanki?",
                    text: "¿Qué estás haciendo?",
                    url: ""
                },
                {
                    src: "lesson-cutlery.png",
                    lesson: "Lección 6",
                    title: "Piwantaq mikurqanki?",
                    text: "¿Con quién comiste?",
                    url: ""
                },
                {
                    src: "lesson-sun.png",
                    lesson: "Lección 7",
                    title: "Imatataq paqarin ruranki?",
                    text: "¿Qué harás mañana?",
                    url: ""
                }
            ],
            intermediate: {},
            advanced: {}
        }
    }),
    components: {
        LessonCard
    }
};
</script>
