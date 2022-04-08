<template>
    <div>
        <v-header/>
        <slot/>
        <footer></footer>
    </div>
</template>
<script>
    import VHeader from '../components/Header.vue'
    export default {
        components: {
            VHeader
        },
    };
</script>