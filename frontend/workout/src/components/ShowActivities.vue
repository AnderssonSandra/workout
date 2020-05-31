<template>
    <div id="total-activity">
        <table class="activity-table" v-for="activity in activities" :key="activity._id">
            <caption id="main-title">Överblick {{tabellMsg}}</caption>
            <tr>
                <th>Antal genomförda aktiviteter</th>
                <th>Total tid</th>
                <th>Typer av aktiviteter</th>
            </tr>
            <tr>
                <td>{{activity.time}}</td>
                <td>>{{activity.intensity}}</td>
                <td>{{activity.distance}}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ShowActivities extends Vue {
    private activities = [
        {
            _id: '01',
            date: '2019-01-01',
            distance: '1km',
            time: '1timma',
            activity: 'jogging',
            text: 'det var en bra löprunda',
            intensity: 'låg'
        }
    ]

    @Prop({ default: 'testar' }) private tabellMsg!: string;
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    #total-activity {
        width: 100%;
        padding: 3em 2em;
        box-sizing: border-box;
    }

    .activity-table {
        padding: 2em;
        width: 60%;
        margin: 0 auto;
        text-align: left;
        border: 2px solid black;
        box-sizing: border-box;
    } th {
        padding: 1em;
        margin: 0;
        box-sizing: border-box;
        font-weight: bold;
        color: #1f2a2c;
        font-size: 1.2em;
        width: 33%;
    } td {
        padding: 1em;
        box-sizing: border-box;
    }

    #main-title {
        text-align: center;
        background-color: orange;
        font-size: 1.3em;
        font-weight: bold;
        text-transform: uppercase;
        border: 2px solid black;
        padding: 1.4em;
    }

    @media only screen and (max-width: 800px) {
        #total-activity {
            padding: 1em 0.5em;
        }
        .activity-table {
            width: 90%;
        }

        th {
            font-size: 1em;
            padding: 0.5em;
        }

        td {
            padding: 0.5em;
        }
    }

    @media only screen and (max-width: 500px) {
        .activity-table {
            width: 100%;
        }
    }

</style>
