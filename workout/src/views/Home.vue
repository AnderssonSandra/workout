<template>
  <div class="home">
    <StartPage titleMsg="Välkommen till din tränings-app"
    msg="Det här är en sida som du kan använda för att registrera
    dina träningsaktiviteter. Du kan registrera dina aktiviteter,
    uppdatera dom, radera dom och även se alla aktiviteter som har
    skapats."/>
  </div>
</template>

<script>
//importerar
import StartPage from '@/components/StartPage.vue';

export default {
    name: 'Home',
    components: {
        StartPage,
    },
};
</script>

<style lang="scss">
    .home {
        padding: 3em 3em 8em 3em;
    }

    @media only screen and (max-width: 500px) {
        .home {
        padding: 3em 0;
      }
    }
</style>
