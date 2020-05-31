<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> {{ number }} </p> <!--skriva ut- måsvingar-->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Prop() private number!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  padding: 2em;
}

p {
  padding: 2em;
}

</style>
