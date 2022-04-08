<template>
    <header class="flex justify-between px-16 pt-5 pb-6 bg-gray-100 shadow-lg">
        <a href="/" class="h-10 w-auto">
            <img class="w-full h-full" src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="">
        </a>
        <div class="flex mx-10">
            <input class="w-[350px] py-2 border border-solid border-gray-400 rounded-l-lg focus:border-gray-400" type="text" v-model="query">
            <button class="py-2 px-6 border border-solid border-gray-400 rounded-r-lg border-l-0 bg-green-700 text-white" @click.prevent="search">Search</button>
        </div>
        <div class="flex">
            <button class="mr-4">Login</button>
            <button>Register</button>
        </div>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: '',
        data() {
            return {
                query: '',
            }
        },
        methods: {
            search() {
                if(this.query.length) {
                    let query = null;
                    if (this.query.length) {
                        query = {
                            page: 1,
                            q: this.query,
                        };
                    }
                    this.$router.push({ path: '/search', query });
                }
            },
        },
        mounted() {
            this.query = this.getQ
        },
        computed: {
            ...mapGetters(['getQ']), // можно получить не используя vuex, c помощью this.$route.query.
        }
    };
</script>