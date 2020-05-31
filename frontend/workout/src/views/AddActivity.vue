<template>
  <div class="addActivity">
    <RegActivity/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegActivity from '@/components/RegActivity.vue';

export default {
    name: 'Home',
    components: {
        RegActivity
    },
};
</script>
