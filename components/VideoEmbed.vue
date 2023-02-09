<template>
    <v-row>
        <Breadcrumbs />
         <iframe width="700" height="417"  
         v-bind:src='link.youtube'
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; 
         clipboard-write; encrypted-media; 
         gyroscope; picture-in-picture" 
         allowfullscreen>
         </iframe>
    </v-row>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
 export default {
    comments: {Breadcrumbs},
    name: "VideoEmbed",
    data: () => ({
        link: {
            youtube: 'https://www.youtube.com/embed/3WEWhXiVg50'
        },
         
    })
  };
 
   
</script>