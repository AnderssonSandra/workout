<template>
  <div class="addActivity">
    <RegActivity
    regTitle="Lägg till"
    />
  </div>
</template>

<script>
// importerar
import RegActivity from '@/components/RegActivity.vue';

export default {
    name: 'AddActivity',
    components: {
        RegActivity
    },
};
</script>
