<template>
  <div class="flex-col justify-center items-center max-h-[100vh]">
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <Header/>
    <NuxtPage class="flex-col m-[2rem]" />
  </div>
</template>

<script setup>
const config = useAppConfig();
useSeoMeta({
  title: config.title
})

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>