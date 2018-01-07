<template>
    <div class="discoverBtn">
        <figure>
            <div class="icon"><img :src="data.img" /><span v-if="data.day">{{ data.day }}</span></div>
            <figcaption>{{ data.title }}</figcaption>
        </figure>
    </div>
</template>
<script>
    export default {
        props: ['data'],
        created(){
        }
    }
</script>
<style>
    .discoverBtn{
        flex: 1;
        width: 1.066rem;
        background-size: cover;
        text-align: center;
    }
    .discoverBtn img{
        width: 100%;
    }

    .discoverBtn .icon{
        position: relative;
    }
    .discoverBtn .icon span{
        color: #D33A31;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -91%);
    }
    .discoverBtn figure{
        position: relative;
    }
    .discoverBtn figcaption{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 12px;
        font-size: 0.22rem;
    }
    
</style>