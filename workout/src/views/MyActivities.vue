<template>
    <div class="container">
        <h2 id="activity-title">Mina genomförda aktiviteter</h2>
        <div v-if="activities.length === 0">
            <p id="no-activity-msg">Det fanns tyvärr inga aktiviteter att visa</p>
            <a id="go-back-btn" v-on:click="navigate()">
            Lägg till nya aktiviteter</a>
        </div>
        <Activity
            @onDelete="updateArray"
            v-for="(activity) in activities"
            :key="activity._id"
            v-bind:id="activity._id"
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
import Activity from '@/components/Activity.vue';
import getPosts from '@/api/api';

export default ({
    name: 'MyActivities',
    components: {
        Activity
    },

    data() {
        return {
            activities: [],
            error: '',
            text: ''
        };
    },
    methods: {
        updateArray(id) {
            const filteredArray = this.activities.filter((activity) => activity._id !== id);
            this.activities = filteredArray;
        },
        navigate() {
            this.$router.push('/add-activity');
        }
    },

    async mounted() {
        this.activities = await getPosts();
    },

});
</script>
<style lang="scss">
    #activity-title {
        display: block;
        text-align: center;
        padding: 1em;
        background-color: #1f2a2c;
        color: orange;
        margin-bottom: 2em;
    }

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

    #no-activity-msg {
        text-align: center;
        font-size: 1.6em;
    }

    @media only screen and (max-width: 500px) {
        #go-back-btn {
            width: 80%;
        }
    }
</style>
