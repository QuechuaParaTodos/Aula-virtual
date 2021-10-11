<template>
    <v-row class="pa-4">
        <v-avatar>
            <img v-bind:src="comments.picture" alt="avatar">
        </v-avatar>
        <div class="d-flex flex-column ml-3" justify="center" align="left">
            <span class="purple--text" v-html="comments.name"></span>
            <span v-html="comments.excerpt"></span>
        </div>
        <div class="mt-6 ml-2">
            <button><v-icon>mdi-heart</v-icon></button>
            <button><v-icon>mdi-heart</v-icon></button>
        </div>
    </v-row>
</template>

<script>
  export default {
    name: "Comments",
      data: () => ({
          comments: 
        {
          picture: '/img/girl.png',
          name: 'Yeltsin Cruz',
          excerpt: 'Tengo duda sobre la primera parte, no entiendo cómo se pronuncia 🙁',
        }
    })
  };
</script>

<style>
  
</style>
