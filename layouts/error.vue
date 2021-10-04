<template>
  <v-app>
    <v-main class="error-page">
      <v-divider class="hr-line"></v-divider>
      <div class="error-wrapper">
        <div class="apu-container">
          <h1>{{ apuBigTextMessage }}</h1>
          <v-img
            src="img/ApuTriste.png"
            max-width="272"
          ></v-img>
        </div>
        <div class="subtext-container">
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <a @click="goBack">Regresar</a>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      apuBigTextMessage: 'Oops!',
      pageNotFound: 'No encontramos la página que buscas :(',
      otherError: 'An error occurred'
    }
  },
  methods: {
    goBack() {
      return window.history.length > 1 ? this.$router.back() : this.$router.replace('/')
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.error-page {
  background-color: #FFFEFD;
}

.hr-line {
  border: 2px solid #ccc;
  left: 0;
  position: absolute;
  top: 60%;
  width: 100%;
}

.error-wrapper {
  left: 50%;
  position: relative;
  text-align: center;
  top: calc(60% - 270px);
  transform: translate(-50%);
}

.apu-container h1 {
  color: #939393;
  display: inline-block;
  font-size: 100px;
  font-weight: bold;
}

.apu-container .v-image {
  display: inline-block;
  margin-bottom: -40px;
}

.subtext-container {
  margin-left: 70px;
  margin-top: -10px;
}

.subtext-container h1 {
  color: #393939;
  font-size: 36px;
}

.subtext-container a {
  color: #BA77CA;
  display: inline-block;
  font-size: 28px;
  font-weight: bold;
  margin-top: 9px;
  text-decoration: none;
}
.subtext-container a:hover {
  color: #ad5fc0;
}
</style>
