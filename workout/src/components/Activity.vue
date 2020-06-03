<template>
    <div class="activity">
        <h2>{{activity}}</h2>
        <p class="date">{{date}}</p>
        <div class="activityParent">
            <p><img class="timeIcon" src="/time.png" alt="klocka">{{time}} minuter</p>
            <p><img class="heart" src="/heart.png" alt="hjärta">{{intensity}}</p>
            <p><img class="arrowIcon" src="/arrow.png" alt="pil"> {{distance}} km</p>
        </div>
        <p class="text">{{text}}</p>
        <button class="btn" @click="deleteActivity">Radera</button>
        <button class="btn"><router-link
        :to="{name: 'EditActivity', params: { id: id } }">
            Uppdatera inlägg</router-link></button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { deletePost } from '../api/api';

//specificerar objektet som skickas in
interface AllActivities {
    _id: string;

    activity: string;

    date: string;

    distance: number;

    time: number;

    text: string;

    intensity: string;
}

@Component
export default class Activity extends Vue {
    //props
    @Prop() private id!: string;

    @Prop() private activity!: string;

    @Prop() private date!: string;

    @Prop() private distance!: number;

    @Prop() private time!: number;

    @Prop() private text!: string;

    @Prop() private intensity!: string;

    @Prop() private allActivities!: AllActivities;

    //radera i databas och skicka med id till föräldern
    deleteActivity() {
        deletePost(
            this.id
        );
        this.$emit('onDelete', this.id);
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .timeIcon, .arrowIcon, .heart {
        width: 30px;
        height: auto;
        padding-right: 1em;
    }

    #activities {
        width: 100%;
    }

    .activity {
        width: 50%;
        margin: 2em auto;
        border: 3px solid black;
        box-sizing: border-box;
    }

    .activity h2 {
        display: block;
        background-image: url("/footer.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        box-sizing: border-box;
        text-transform: uppercase;
        font-weight: bold;
        padding: 0.8em 0;
        color: white;
        text-align: center;
        box-sizing: border-box;
        margin: 0;
    }

    .date {
        display: block;
        color: white;
        background-color: #1f2a2c;
        margin: 0;
        padding: 0.5em;
        font-size: 0.8em;
        text-align: left;
    }

    .text {
        text-align: left;
        padding: 0 1em 1em 1em;
    }

    .activityParent {
        display: flex;
        width: 100%;
        padding: 1em;
        box-sizing: border-box;
    }

    .activityParent p {
        flex: 1;
        text-align: center;
        color: orange;
    }

    .btn {
        width: 300px;
        margin: 1em auto;
        display: block;
        padding: 0.7em;
        background-color: orange;
        color: white;
        font-weight: bold;
        font-size: 1em;
    }

    .btn a {
        color: white;
        font-weight: bold;
        text-decoration: none;
        font-size: 1em;
    }

    .btn:hover {
        background-color: white;
        color: orange;
        text-transform: uppercase;
        border: 2px solid orange;
    }

    .btn a:hover {
        color: orange;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 800px) {
        .activity {
        width: 80%;
        }
    }

    @media only screen and (max-width: 500px) {
        .activity {
            width: 95%;
        }

        .activityParent {
            display: block;
        }

        .activityParent p {
            text-align: left;
        }

        .btn {
            width: 90%;
        }
    }

</style>
