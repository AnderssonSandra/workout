<template>
    <header>
        <div id="menu-container" @click="toggleMenu">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <ul id="main-menu" v-if="isOpen">
            <li @click="toggleMenu" v-for="menuLink in menuLinks" :key="menuLink.menuTitle">
                <router-link :to="menuLink.menuUrl">
                    {{menuLink.menuTitle}}
                </router-link>
            </li>
        </ul>
        <h1>{{headerMsg}}</h1>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
    //Meny
    private isOpen = false;

    private toggleMenu() {
        this.isOpen = !this.isOpen;
    }

    private menuLinks = [
        {
            menuTitle: 'Start',
            menuUrl: '/'
        },
        {
            menuTitle: 'Registrera aktivitet',
            menuUrl: '/add-activity'
        },
        {
            menuTitle: 'Mina aktiviter',
            menuUrl: '/my-activities'
        }
    ]

    //props
    @Prop() private headerMsg!: string;
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
    width: 100%;
    height: 700px;
    background-image: url("/header.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

header h1 {
    color: white;
    padding: 600px 10px 0 0;
    text-align: right;
}

#menu-container {
    display: inline-block;
    cursor: pointer;
    position: fixed;
    top: 2em;
    right: 2em;
    z-index: 10;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

#main-menu {
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    padding: 5em 0 0 0;
    margin: 0;
    list-style: none;
    background-color: #1f2a2c;
    border-left: 2px solid white;
    z-index: 5;
}

#main-menu a {
    text-decoration: none;
    width: 100%;
    display: block;
    padding: 1.5em 0 1.5em 3em;
    line-height: 1;
    background-color: #1f2a2c;
    color: orange;
    box-sizing: border-box;
}

#main-menu a:hover {
    background-color: orange;
    color: white;
    text-transform: uppercase;
}

@media only screen and (max-width: 500px) {
    header {
        height: 400px;
    }

    header h1 {
        padding: 350px 10px 0 0;
    }

    #main-menu {
        width: 100%;
    }
}
</style>
