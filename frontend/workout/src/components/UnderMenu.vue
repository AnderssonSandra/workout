<template>
    <div id=under-menu-parent>
        <ul id="under-menu">
            <li v-for="menuLink in menuLinks" :key="menuLink.menuTitle">
                <router-link :to="menuLink.menuUrl">{{menuLink.menuTitle}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UnderMenu extends Vue {
    private menuLinks = [
        {
            menuTitle: 'Alla',
            menuUrl: '/my-activities'
        },
        {
            menuTitle: 'Vecka',
            menuUrl: '/my-activities-week'
        },
        {
            menuTitle: 'Månad',
            menuUrl: '/my-activities-month'
        }
    ]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#under-menu-parent {
    width: 100%;
    border-bottom: 3px solid black;
}

#under-menu {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

#under-menu li {
    flex: 1;
    line-height: 4em;
    text-align: center;
} a {
    text-decoration: none;
    color: black;
    font-size: 1.4em;
    text-transform: uppercase;
    font-weight: bold;
} a:hover {
    color: orange;
}

@media only screen and (max-width: 500px) {
    a {
        font-size: 1em;
    }
}
</style>
