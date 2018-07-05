<template>
    <div class="home">
        <Loading v-if="!showPage"></Loading>

        <Title v-bind:title="people.name"></Title>

        <Header image="person.png">
            <table>
                <tr>
                    <td>Height</td>
                    <td class="table-separator">:</td>
                    <td>{{ people.height }}</td>
                </tr>
                <tr>
                    <td>Mass</td>
                    <td class="table-separator">:</td>
                    <td>{{ people.mass }}</td>
                </tr>
                <tr>
                    <td>Hair Color</td>
                    <td class="table-separator">:</td>
                    <td>{{ people.hair_color }}</td>
                </tr>
                <tr>
                    <td>Skin Color</td>
                    <td class="table-separator">:</td>
                    <td>{{ people.skin_color }}</td>
                </tr>
                <tr>
                    <td>Birth Year</td>
                    <td class="table-separator">:</td>
                    <td>{{ people.birth_year }}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td class="table-separator">:</td>
                    <td>{{ people.gender }}</td>
                </tr>
            </table>
        </Header>

        <section class="detail">
            <b-row>
                <b-col lg="8">

                    <!-- film list start -->

                    <div class="detail-films">
                        <b-row>
                            <b-col cols="9">
                                <h2><strong>{{ people.name || '-' }} Movie's</strong></h2>
                            </b-col>
                            <b-col cols="3">
                                <router-link v-if="showSeeMore" class="more link" :to="{
                                    name: 'films',
                                    params: {data: people.films, name: people.name}
                                }">
                                    See More
                                </router-link>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col v-for="film of films" v-bind:key="film.id" class="card-wrapper-home" sm="4" md="3">
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
                    </div>

                    <!-- film list end -->

                </b-col>
                <b-col lg="4">

                    <!-- another movie start -->

                    <div class="detail-another">
                        <h2><strong>Related Another Movie's</strong></h2>

                        <article class="detail-another-wrapper">
                            <div class="detail-another-header">
                                <h3>{{ relatedFilm.title || '-' }}</h3>

                                <table>
                                    <tr>
                                        <td>Director</td>
                                        <td class="table-separator">:</td>
                                        <td>{{ relatedFilm.director }}</td>
                                    </tr>
                                    <tr>
                                        <td>Producer</td>
                                        <td class="table-separator">:</td>
                                        <td>{{ relatedFilm.producer }}</td>
                                    </tr>
                                    <tr>
                                        <td>Release Date</td>
                                        <td class="table-separator">:</td>
                                        <td>{{ relatedFilm.release_date }}</td>
                                    </tr>
                                </table>
                            </div>

                            <div class="detail-another-content">
                                <p>{{ relatedFilm.opening_crawl | subString }}</p>
                            </div>

                            <div class="detail-another-footer">
                                <router-link class="link" :to="{
                                    name: 'film-detail',
                                    params: {film: relatedFilm}
                                }">
                                    See More
                                </router-link>
                            </div>
                        </article>
                    </div>

                    <!-- another movie end -->

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
import Loading from './Loading.vue';

export default {
    name: 'Profile',

    props: {
        data: {}
    },

    components: {
        Header,
        Card,
        Title,
        Loading
    },

    data(){
        return {
            people: {},
            films: [],
            relatedFilm: {},
            showSeeMore: Boolean,
            showPage: Boolean
        }
    },

    methods: {
        getFilms(maxData){
            let lenFilms = this.people.films.length;
            let show = lenFilms > maxData ? maxData : lenFilms;

            for(let a = 0; a <= show-1; a++){
                axios.get(this.people.films[a])
                .then(res => {
                    this.films.push(res.data)
                    this.showSeeMore = lenFilms > 4 ? true : false;
                })
                .catch(error => console.log(error))
            }
        },

        getSingleFilm(url){
            axios.get(url)
            .then(res => this.relatedFilm = res.data)
            .catch(error => console.log(error))
        }
    },

    //filtering data yang ditampilkan
    filters: {
        subString(value){
            return value ? value.substr(0, 185) + '...' : '-';
        }
    },

    //vue lifecycle : fungsi saat component dibuat
    created(){
        this.showPage = false

        //hanya ambil data jika initial data kosong
        if(this.data){
            this.people = this.data
            this.getFilms(4)

            let films = this.people.films
            this.getSingleFilm(films[films.length-1])
            this.showPage = true

            return false
        }

        axios.get('https://swapi.co/api/people/1')
        .then(res => {
            this.people = res.data
            this.getFilms(4)

            let films = this.people.films
            this.getSingleFilm(films[films.length-1])
            this.showPage = true
        })
        .catch(error => console.log(error))
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/headers";

@mixin cardShadow(){
    box-shadow: 0 1px 5px rgba($color: #000000, $alpha: .3);
    -moz-box-shadow: 0 1px 5px rgba($color: #000000, $alpha: .3);
    -webkit-box-shadow: 0 1px 5px rgba($color: #000000, $alpha: .3);
}

.home{
    width: 100%;
}

.detail{
    .more{
        display: block;
        text-align: right;
        font-size: 18px;
        font-weight: 600;
    }
}

.detail-films{
    padding-right: 0;
}

.detail-another{
    padding-left: 0;

    &-wrapper{
        @include cardShadow();
    }

    &-header{
        color: #ffffff;
        padding: 15px;
        background-color: $backgroundDark;
    }

    &-content{
        padding: 15px;
        font-weight: 600;
        color: $semi-dark;
        font-size: 18px;
        text-align: justify;

        > p {
            margin-bottom: 0;
        }
    }

    &-footer{
        text-align: right;
        padding: 0 15px 15px;
        font-weight: 600;
    }
}

.table-separator{
    padding: 0 10px;
}

table{
    font-weight: 600;
    color: #fff;
    font-size: 18px;

    td{
        vertical-align: top;

        &:first-child{
            min-width: 100px;
        }

        &:last-child{
            text-transform: capitalize;
        }
    }
}

.card-link{
    text-decoration: unset;
}

.link{
    color: $link !important;
}

//mulai dari col-sm
@media screen and (min-width: 576px) {
    .profile .photo-main{
        margin-bottom: 0;
    }
}

//mulai dari col-xl
@media screen and (min-width: 1140px){
    .detail{
        &-films{
            padding-right: 20px;
        }

        &-another{
            padding-left: 20px;
        }
    }
}

</style>


