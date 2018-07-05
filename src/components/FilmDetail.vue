<template>
    <div class="film-detail">
        <Title v-bind:title="film.title"></Title>

        <Header image="play.png">
            <table>
                <tr>
                    <td>Director</td>
                    <td class="table-separator">:</td>
                    <td>{{ film.director }}</td>
                </tr>
                <tr>
                    <td>Producer</td>
                    <td class="table-separator">:</td>
                    <td>{{ film.producer }}</td>
                </tr>
                <tr>
                    <td>Release Date</td>
                    <td class="table-separator">:</td>
                    <td>{{ film.release_date }}</td>
                </tr>
            </table>
        </Header>

        <section class="detail">
            <h2><strong>{{ film.title || '-' }} Character's</strong></h2>

            <b-row>
                <b-col v-for="(char, index) of characters" v-bind:key="index" class="card-wrapper-home" sm="4" md="3" xl="2">
                    <router-link class="card-link" :to="{
                        name: 'profile',
                        params: {data: char}
                    }">
                        <Card image="person.png">
                            <h3><strong>{{ char.name || '-' }}</strong></h3>

                            <p>Gender :</p>
                            <p>{{ char.gender || '-' }}</p>

                            <p class="margin-top">Birthday :</p>
                            <p>{{ char.birth_year || '-' }}</p>
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
import Header from './Header.vue';
import Card from './Card.vue';

export default {
    name: 'FilmDetail',

    props: {
        film: {},
    },

    components: {
        Header,
        Title,
        Card
    },

    data(){
        return {
            characters: []
        }
    },

    created(){
        for(let a = 0; a < 10; a++){
            axios.get(this.film.characters[a])
            .then(res => this.characters.push(res.data))
            .catch(error => console.log(error))
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/headers";

.table-separator{
    padding: 0 10px;
}

table{
    font-weight: 600;
    color: #fff;
    font-size: 18px;

    td{
        vertical-align: top;

        &:last-child{
            text-transform: capitalize;
        }
    }
}

.card-link{
    text-decoration: unset;
}
</style>

