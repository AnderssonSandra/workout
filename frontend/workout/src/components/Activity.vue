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
        <button>Radera</button>
        <button>Redigera</button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Activity extends Vue {
    @Prop() private activity!: string;

    @Prop() private date!: string;

    @Prop() private distance!: number;

    @Prop() private time!: number;

    @Prop() private text!: string;

    @Prop() private intensity!: string;
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
    }

</style>
