<template>
    <main class="flex-col space-y-[2rem] space-x-[2rem] ">
        <div class="flex-col space-y-[1rem]" v-if="post">
        <h1 class="text-[1.5rem]">{{ post.title }}</h1>     
            <p>
                {{ post.body }}
            </p> 
            <p>
                <NuxtLink class="underline font-bold" to="/blog">Retour</NuxtLink>
            </p>
        </div>
        <div v-else>
            <p>LOADING ...</p>
        </div>  
    </main>
</template>


<script setup>
const route = useRoute();
const {data:post} = await useFetch(() => "https://jsonplaceholder.typicode.com/posts/" + route.params.id, {
    lazy:true
})
useSeoMeta({
    title: () => post.value?.title
})
</script>