<template>
    <div>
        <p class="text-[2rem] font-medium text-black">BLOG</p>
        <div class="flex-col max-h-[80vh] overflow-y-scroll space-y-[2rem] m-[1rem] ml-[2rem]">
            <article v-for="post in posts" :key="post.id">
                <p class="text-[1rem] font-medium">{{ post.title }}</p>
                <p class="p-2">{{  post.body.slice(0,1000) }}</p>
                <p class="pl-2 ">
                    <NuxtLink class="underline text-gray" :to="`/blog/${post.id}`">Lire plus</NuxtLink>
                </p>
            </article>
        </div>
    </div>
</template>

<script setup>
const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

</script>