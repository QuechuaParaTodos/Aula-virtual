<template>
    <v-col class="container">
        <div class="box-title">
            <h4 class="purple--text text-uppercase">Aportes y Preguntas</h4>
        </div>
        <div class="pa-2 v-sheet v-sheet--outlined theme--light mt-2">
            <div>
                <v-btn-toggle class="ml-16 mt-2" v-model="formatting" multiple>
                    <v-btn>
                        <v-icon>mdi-format-bold</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon>mdi-format-italic</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon>mdi-format-underline</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon>mdi-format-bold</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon>mdi-image</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon>mdi-format-underline</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon>mdi-format-italic</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon>mdi-format-underline</v-icon>
                    </v-btn>
                </v-btn-toggle>
                <v-row class="mt-1 px-5">
                    <v-avatar>
                        <img src="/img/girl3.png" alt="avatar" />
                    </v-avatar>
                    <div
                        class="box-question ml-2 px-5 v-sheet v-sheet--outlined theme--light"
                    >
                        <input
                            class="input mt-2 border-none"
                            type="text"
                            placeholder="Escribe tu aporte o pregunta..."
                        />
                    </div>
                    <v-btn
                        outlined
                        class="purple --text white--text rounded-r-lg py-6 px-8"
                        >Publicar</v-btn
                    >
                </v-row>
            </div>
            <Comments class="ml-12" />
        </div>
    </v-col>
</template>

<script>
import Comments from "./Comments";
export default {
    components: { Comments },
    name: "Questions",
    data: () => ({
        formatting: []
    })
};
</script>

<style>
.box-question {
    width: 70%;
}
.input {
    width: 100%;
    border-style: none;
    outline: none;
    border: 0;
}
.box-title {
    border-bottom: 2px solid #8d33a3;
}
</style>
