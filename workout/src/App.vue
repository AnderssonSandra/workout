<template>
<!--html, ev js-->
  <div id="app">
    <Menu headerMsg="Workout"/>
    <router-view/>
    <Footer/>
    <!-- footer kommer vara här -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';


@Component({
    components: {
        Menu,
        Footer,
    }
})
export default class App extends Vue {
}
</script>
<style lang="scss">
// style med sscs - skriv allmän sscs här!
/* Reset CSS*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
  box-sizing: border-box;
}

ol, ul {
  padding-left: 0;
  text-decoration: none;
}

li {
  text-decoration: none;
}

blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*Fonts*/
h1,
h2,
h3,
h4,
h5,
h6,
p,
li,
a,
span,
label,
th,
td,
caption {
    font-family: 'Segoe UI', arial, sans-serif;
}

h1,
h2,
h3 {
  text-transform: uppercase;
  font-weight: bold;
}

h1 {
  font-size: 3em;
  padding: 1em;
}

h2 {
  font-size: 1.8em;
  color: #011526;
  padding: 0.8em 0 0.3em 0;
}

h3 {
  font-size: 1.6em;
}

p,
a {
  font-size: 1.2em;
  padding: 0 0 1em 0;
  line-height: 1.5em;
}

@media only screen and (max-width: 500px) {
  h1 {
    font-size: 1.6em;
  }

  h2 {
    font-size: 1.2em;
  }
}
</style>
