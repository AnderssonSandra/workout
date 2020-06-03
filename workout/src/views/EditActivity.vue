<template>
  <div class="editActivity">
        <!--//Skicka till RegActivity om det inte är null-->
        <RegActivity
        regTitle="Uppdatera"
        v-if="activity != null"
        v-bind:updateActivity="activity"
        />
        <a id="go-back-btn" v-on:click="navigate()">
            Tillbaka till dina aktiviteter</a>
  </div>
</template>

<script>
// importerar
import RegActivity from '@/components/RegActivity.vue';
import { getPostById } from '../api/api';

export default {
    name: 'EditPage',
    components: {
        RegActivity,
    },

    data() {
        return {
            id: '',
            activity: null,
        };
    },
    //hämta aktivitet på id
    async created() {
        this.id = this.$route.params.id;
        this.activity = await getPostById(this.id);
    },
    //skicka tillbaka till sidan som visar alla aktiviteter
    methods: {
        navigate() {
            this.$router.push('/my-activities');
        }
    }
};
</script>
<style lang="scss">
    #go-back-btn {
        cursor: pointer;
        text-align: center;
        border: 2px solid black;
        text-decoration: none;
        padding: 1em;
        margin: 2em auto;
        display: block;
        width: 400px;
        background-color: #1f2a2c;
        color: white;
    }

    #go-back-btn:hover {
        color: orange;
    }

    @media only screen and (max-width: 500px) {
        #go-back-btn {
            width: 80%;
        }
    }
</style>
