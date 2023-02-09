<template>
    <section id="conocenos" class="foobar" style="background: #ffffcc">
        <v-carousel height="450" :show-arrows="false" cycle hide-delimiter-background>
            <v-carousel-item v-for="img in images['banner']" :key="img" :src="img">
            </v-carousel-item>
        </v-carousel>
        <v-slide-group class="pa-4" show-arrows>
            <v-slide-item v-for="img in images['noticia']" :key="img" class="ma-5">
                <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="300" max-width="350"
                   :src="img"></v-img>
            </v-slide-item>
        </v-slide-group>
    </section>
</template>

<script>
import { getFileFromStorage } from "../../firebase/storage";

export default {
    data: () => ({
        images: {
            banner: [],
            noticia: []
        }
    }),
    methods: {
        async getImages(folder, max) {
            for (let i = 0; i < max; i++) {
                try {
                    const path = `landing/conocenos/${folder}/${folder}-${i}.png`;
                    const url = await getFileFromStorage(path);
                    this.images[folder].push(url)
                } catch (error) {
                    console.log(error)
                    //do nothing
                }
                
            }

        },
    },
    async created() {
        await this.getImages('banner', 2);
        await this.getImages('noticia', 5);
    }
};
</script>

<style lang="scss" scoped>

</style>
