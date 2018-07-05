import Vue from 'vue';
import Router from 'vue-router';
import Film from './components/Film.vue';
import Profile from './components/Profile.vue';
import FilmDetail from './components/FilmDetail.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Profile,
            meta: {
                title: 'Star Wars'
            }
        },
        {
            path: '/film-detail',
            name: 'film-detail',
            component: FilmDetail,
            props: true,
            meta: {
                title: 'Detail Film'
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            props: true,
            meta: {
                title: 'Star Wars'
            }
        },
        {
            path: '/films',
            name: 'films',
            component: Film,
            props: true,
            meta: {
                title: 'See All Film'
            }
        }
    ]
})