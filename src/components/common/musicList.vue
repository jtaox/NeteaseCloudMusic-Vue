<template>
    <div>
        <list-item v-for="item, index  in listData" :data="{ item, index }" :key="index"></list-item>
    </div>
</template>
<script>
    import listItem from "./listItem.vue"
    export default{
        props: ["listData"],
        components: {
            listItem
        }
    }
</script>