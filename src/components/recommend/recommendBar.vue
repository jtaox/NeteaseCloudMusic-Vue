<template>
    <section class="recommendBar">
        <discover-btn v-for="item, idex in recommendData" key="index" :data="item"></discover-btn>
    </section>
</template>
<script>
    import discoverBtn from './discoverBtn.vue';
    export default {
        props: ['recommendData'],
        components: {
            discoverBtn
        }
    }
</script>