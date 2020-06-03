<template>
    <footer>
        <p> Keep up the good work!</p>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
    width: 100%;
    height: 200px;
    background-image: url("/footer.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    text-transform: uppercase;
    font-weight: bold;
}

p {
    font-size: 1.3em;
    padding-top: 4em;
    color: white;
    box-sizing: border-box;
    text-align: center;
}

@media only screen and (max-width: 500px) {
    p {
    font-size: 1em;
    }
}
</style>
