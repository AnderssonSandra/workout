<template>
  <div class="container">
    <UnderMenu/>
      <Activity
      v-for="activity in activities"
      :key="activity._id"
      v-bind:activity="activity.activity"
      v-bind:date="activity.date"
      v-bind:distance="activity.distance"
      v-bind:time="activity.time"
      v-bind:text="activity.text"
      v-bind:intensity="activity.intensity"
      />
  </div>
</template>

<script>
// @ is an alias to /src
import UnderMenu from '@/components/UnderMenu.vue';
import Activity from '@/components/Activity.vue';
import getPosts from '@/api/api';

export default ({
    name: 'MyActivities',
    components: {
        UnderMenu,
        Activity
    },

    data() {
        return {
            activities: [],
            error: '',
            text: ''
        };
    },
    async mounted() {
        this.activities = await getPosts();
    },
});
</script>
