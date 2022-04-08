<template>
    <div class="flex mb-10 w-10/12">
        <div class="mr-8 w-[150px] min-w-[150px] h-[200px]">
            <img class="w-full h-full object-cover" v-if="item.image" :src="item.image.medium" alt="">
            <img class="w-full h-full object-cover" v-else src="https://static.tvmaze.com/images/no-img/no-img-portrait-text.png" alt="">
        </div>
        <div>
            <h3 class="text-xl font-semibold">
                <span class="mr-2">{{ item.name }}</span>
                <span class="text-base font-medium mr-2" v-if="item.webChannel">{{ item.webChannel.name }}</span>
                <span v-if="cardType === 'show'" class="text-base font-medium">{{ moment(item.premiered).format('YYYY') }}
                    <span v-if="item.ended">-{{ moment(item.ended).format('YYYY') }}</span>
                </span>
            </h3>
            <!--<div v-if="item._links">-->
                <!--<span>Previous episode:</span>-->
                <!--<a :href="item._links?.previousepisode?.href">fdsfsdf</a>-->
            <!--</div>-->
            <div v-if="item.genres?.length">
                <span class="mr-2">Genres:</span>
                <span v-for="genre in item.genres" class="mr-1">{{ genre }}</span>
            </div>
            <div v-if="starring?.length">
                <span class="mr-2">Starring:</span>
                <span v-for="item in starring" class="mr-1">{{ item.person.name }}</span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object
            },
            cardType: {
                type: String,
                default: 'show'
            }
        },
        data() {
            return {
                starring: []
            }
        },
        mounted() {
            if(this.cardType === 'show') {
                this.$axios.get(`https://api.tvmaze.com/shows/${this.item.id}/cast`) //запрос для актёров с определённого шоу
                    .then((res) => {
                        this.starring = res.data
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    };
</script>