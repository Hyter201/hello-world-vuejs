<template>
    <v-row style="height: 70vh; align-items: center;" class="fill-height" justify="center">
        <v-col cols="12" sm="4">
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="username" label="Nome" filled></v-text-field>
                             <div v-if="username != ''">
                                <router-link to="/home"> <button @click="login" class="px-3"
                                        style="border: 1px solid black;">Accedi</button></router-link>
                            </div>  
                            <div v-else><button @click="login" class="px-3" style="border: 1px solid black;">Accedi</button></div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-col>
    </v-row>
</template>


<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            username: ''
        };
    },
    methods: {
        ...mapMutations(['setUsername']),
        login(username) {
            username = this.username
            this.setUsername(username);
        }
    }
};
</script>