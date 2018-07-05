<template>
    <div class="films">
        <Title v-bind:title="title"></Title>

        <section class="detail">
            <b-row>
                <b-col v-for="(film, index) of films" v-bind:key="index" class="card-wrapper-home" sm="4" md="3" xl="2">
                    <router-link class="card-link" :to="{
                        name: 'film-detail',
                        params: {film: film}
                    }">
                        <Card image="play.png">
                            <h3><strong>{{ film.title || '-' }}</strong></h3>

                            <p>Director :</p>
                            <p>{{ film.director || '-' }}</p>

                            <p class="margin-top">Release :</p>
                            <p>{{ film.release_date || '-' }}</p>
                        </Card>
                    </router-link>
                </b-col>
            </b-row>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import Title from './Title.vue';
import Card from './Card.vue';

export default {
    name: 'Film',

    props: {
        name: String,
        data: []
    },

    components: {
        Title,
        Card
    },

    data(){
        return {
            title: String,
            films: []
        }
    },

    created(){
        this.title = this.name + " Movie's";

        this.data.map(film => {
            axios.get(film)
            .then(res => this.films.push(res.data))
            .catch(error => console.log(error))
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
