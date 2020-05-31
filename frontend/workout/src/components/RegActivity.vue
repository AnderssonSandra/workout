<template>
    <div id="reg-activity">
        <h2>Registrera träningspass</h2>
        <div id="reg-activity-text">
            <label for="activity">Vilken typ av träning har du genomfört?</label><br/>
            <input name="activity" type="text" v-model="activity">
            <br/><br/>
            <label for="date">Vilket datum??</label><br/>
            <input name="date" type="date" v-model="date">
            <br/><br/>
            <label for="distance">Om aktiviteten innefattade distans, hur många kilometer?</label>
            <br/>
            <input name="distance" type="number" min="0" max="100"
            step="0.5" v-model.number="distance">
            <br/><br/>
            <label for="time">Hur många minuter tränade du?</label><br/>
            <input name="time" type="number" step="1" v-model.number="time">
            <br/><br/>
            <label for="intensity">Vilken ansträningsgrad?</label><br/>
            <select name="intensity" v-model="intensity">
                <option value="Låg">Låg</option>
                <option value="Medel">Medel</option>
                <option value="Hög">Hög</option>
            </select>
            <br/><br/>
            <label for="text">Beskriv känslan av träningspasset</label><br/>
            <textarea name="text" v-model="text" cols="30" rows="10"></textarea>
            <br/><br/>
            <input type="button" value="Registrera aktivitet" @click="addActivity">
            <p>{{ errorMsg }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { addPost } from '../api/api';

@Component
export default class RegActivity extends Vue {
    private activity: string = '';

    private date: string = '';

    private distance: number = 0;

    private time: number = 0;

    private text: string = '';

    private intensity: string = '';

    private errorMsg: string = '';

    addActivity() {
        if (
            this.activity === ''
            || this.date === ''
            || this.time === 0
            || this.text === ''
            || this.intensity === ''
        ) {
            this.errorMsg = 'Du har inte fyllt i formuläret korrekt';
        } else {
            addPost(this.activity, this.date, this.time, this.text, this.intensity, this.distance);
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #reg-activity {
        width: 50%;
        box-sizing: border-box;
        border: 2px solid black;
        margin: 3em auto;
    }

    #reg-activity h2 {
        display: block;
        background-color: orange;
        color: white;
        text-align: center;
        padding: 1em;
    }

    #reg-activity-text {
        padding: 1em 3em 3em 3em;
        background-color: #1f2a2c;
    }

    label {
        color: white;
        font-weight: bold;
        line-height: 2;
    }

    input, select, textarea {
        width: 100%;
        padding: 1em;
        box-sizing: border-box;
        border: 2px solid orange;
        border-radius: 2px;
    }

    input[type=button] {
        background-color: orange;
        color: white;
        font-weight: bold;
    }

    input[type=submit]:hover {
        background-color: white;
        color: orange;
        text-transform: uppercase;
        font-weight: bold;
        border: 2px solid orange;
    }

    @media only screen and (max-width: 800px) {
        #reg-activity {
            width: 70%;
        }
    }

    @media only screen and (max-width: 500px) {
        #reg-activity {
        width: 90%;
        }

        #reg-activity-text {
            padding: 1em;
        }

        #reg-activity h2 {
            font-size: 1.1em;
        }
    }

</style>
