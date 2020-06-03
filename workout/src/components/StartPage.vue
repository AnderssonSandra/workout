<template>
  <div class="hello">
    <h1>{{ titleMsg }}</h1>
    <p> {{ msg }} </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class StartPage extends Vue {
  //Props
  @Prop() private titleMsg!: string;

  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
h1 {
  padding: 1em;
}

p {
  padding: 2em;
}

</style>
