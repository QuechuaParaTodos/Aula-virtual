<template>
  <div class="d-flex flex-row" justify="center" align="center">
    <v-breadcrumbs :items="items" >
      <template v-slot:divider>
        <v-icon color="gray darken-2">mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <div class="mt-2">
        <img height="30" alt="icons hand" src="../assets/icons/hand.svg">
    </div>
    </div>
</template>

<script>
 

  export default {
    name: "Breadcrumbs",
      data: () => ({
      
      items: [
        {
          text: 'Básico 1',
          disabled: false,
          href: 'breadcrumbs_basico1',
          color: 'purple'
        },
        {
          text: 'Lección 1: Imaynallam Kachkanki? ¿Cómo estás?',
          disabled: true,
          href: 'breadcrumbs_link_1',
          
        },
      ],
    }),
  };
</script>

<style>
    .v-breadcrumbs li:nth-child(even){
        padding: 0 2px;
    }
</style>