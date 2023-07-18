<template>
    <v-row style=" height: 70vh; align-items: center;" class="fill-height" justify="center">
        <v-col cols="12" sm="4">
            <h1>Giorno: {{ day }}, Mese: {{ month }}, Anno: {{ year }}, Numero: {{ num }}</h1>
            <h2 class="mt-2">Titolo: {{ safe_title }}, <br> link: {{ img }} </h2>
            <div class="text-center mt-3"><img style="height: 15rem;" :src="img" alt="prova"></div>

            <div class="text-center">
                <button @click="PrevVignette()" class="me-5 mt-5">
                    <i style="border: 1px solid black; padding: 5px; border-radius: 10px;" class="bi bi-arrow-left"></i>
                </button>
                <button @click="NextVignette()">
                    <i style="border: 1px solid black; padding: 5px; border-radius: 10px;" class="bi bi-arrow-right"></i>
                </button>
            </div>
        </v-col>
    </v-row>
</template>


<script>
import axios from 'axios';
import { ref } from 'vue'

export default {
    setup() {
        // Categorie vignetta
        const day = ref('')
        const month = ref('')
        const year = ref('')
        const num = ref('')
        const safe_title = ref('')
        const img = ref('')

        axios.get('https://xkcd.com/100/info.0.json')
            // Elaborazione categorie
            .then(response => {
                day.value = response.data.day
                month.value = response.data.month
                year.value = response.data.year
                num.value = response.data.num
                safe_title.value = response.data.safe_title
                img.value = response.data.img
            })

        return {
            day,
            month,
            year,
            num,
            safe_title,
            img
        }
    },

    data() {
        return {
        };
    },

    methods: {
        PrevVignette() {
            const CurrentNum = this.num
            axios.get(`https://xkcd.com/${CurrentNum - 1}/info.0.json`)
                .then(response => {
                    this.day = response.data.day;
                    this.month = response.data.month;
                    this.year = response.data.year;
                    this.num = response.data.num;
                    this.safe_title = response.data.safe_title;
                    this.img = response.data.img;
                })
        },

        NextVignette() {
            const CurrentNum = this.num
            axios.get(`https://xkcd.com/${CurrentNum + 1}/info.0.json`)
                .then(response => {
                    this.day = response.data.day;
                    this.month = response.data.month;
                    this.year = response.data.year;
                    this.num = response.data.num;
                    this.safe_title = response.data.safe_title;
                    this.img = response.data.img;
                })
        }
    }
};
</script>