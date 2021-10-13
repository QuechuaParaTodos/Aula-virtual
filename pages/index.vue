<template>
  <v-row class="d-flex flex-column" justify="center" align="center">
    <Breadcrumbs/>
    <Questions/>
  </v-row>
</template>

<script>
import Questions from "../components/Questions/Questions";
import Breadcrumbs from "../components/Breadcrumbs";
export default {
  components: {Questions, Breadcrumbs},
  data () {
    return {
    }
  },

}
</script>
