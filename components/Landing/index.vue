<template>
    <div class="mt-5">
        <About />
        <section id="cursos" class="foobar" style="background: #aaffcc">cursos</section>
        <section id="noticias" class="foobar" style="background: #fbbfcc">noticias</section>
        <section id="blog" class="foobar" style="background: #aefeac">blog</section>
    </div>
</template>

<script>
    import About from './About.vue'
    export default {
        components : {About},
    }
</script>

<style lang="scss" scoped>
.foobar {
    height: 100vh;
    width: 100vw;
}
</style>