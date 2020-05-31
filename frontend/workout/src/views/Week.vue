<template>
  <div class="container">
    <UnderMenu/>
    <ShowActivities tabellMsg="Vecka"/>
    <Activities/>
  </div>
</template>

<script>

// @ is an alias to /src
import UnderMenu from '@/components/UnderMenu.vue';
import Activities from '@/components/Activity.vue';
import ShowActivities from '@/components/ShowActivities.vue';

export default {
    name: 'MyActivities',
    components: {
        UnderMenu,
        Activities,
        ShowActivities
    },
};
</script>
