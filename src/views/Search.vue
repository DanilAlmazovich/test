<template>
    <layout>
        <div class="px-16 pt-10 pb-6">
            <h1 class="text-2xl font-bold mb-10" v-if="result?.data?.length || people?.data?.length">Search result</h1>
            <div v-if="result?.data?.length" class="pb-10 border-b-2 border-gray-400">
                <card v-for="item in result?.data" :item="item.show" :key="item.show.id" />
            </div>
            <div>
                <span class="text-2xl" v-if="!result?.data?.length">no result</span>
            </div>
            <div v-if="people?.data?.length" class="pt-20">
                <card card-type="people" v-for="item in people?.data" :item="item.person" :key="item.person.id" />
            </div>
        </div>
    </layout>
</template>

<script>
    import Card from '../components/Card.vue'
    export default {
        components: {
            Card
        },
        data() {
            return {
                result: null,
                people: null
            }
        },
        methods: {
            search() {
                this.$store.state.q = this.$route.query.q
                if(this.$route.query.q) {
                    this.$axios.get('https://api.tvmaze.com/search/shows', {params: this.$route.query}) //запрос для шоу
                        .then((res) => {
                            this.result = res // как я понял для создания пагинации нужно приобрести платную версию api (Пейджинг)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    this.$axios.get('https://api.tvmaze.com/search/people', {params: {q: this.$route.query.q}}) //запрос для актёров
                        .then((res) => {
                            this.people = res
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }
            }
        },
        created() {
            this.search()
        },
        updated() {
            this.search()
        }
    };
</script>