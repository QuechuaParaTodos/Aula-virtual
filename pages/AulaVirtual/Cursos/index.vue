<template>
    <v-row>
        <div>
            <Sidebarleft />
        </div>
        <v-col class="v-sheet v-sheet--outlined theme--light mt-4">
                <VideoEmbed class="mx-16"/>
                <Questions class="mt-5"/>
        </v-col>
    </v-row>
</template>

<script>
import Questions from "@/components/Questions/Questions";
import Sidebarleft from "@/components/AulaVirtual/Sidebarleft";
import Breadcrumbs from "@/components/Breadcrumbs";
import VideoEmbed from "@/components/VideoEmbed";
export default {
    components: {Questions, Breadcrumbs, Sidebarleft, VideoEmbed},
    head: {
        title: "Aula Virtual"
    },
    layout: "aulavirtual"
};
</script>

<style>


</style>
