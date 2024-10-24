<template>
    <main class="flex items-center justify-center space-y-[2rem]">
        <h1 class=" text-[2rem]">Login</h1>
        <form class="flex-col space-y-[2rem] w-[20rem]" @submit.prevent="onSubmit">
            
            <div class=" flex text-[1rem] w-[100%] items-center justify-between">
            <label for="username">Username :</label>
            <input  v-model="username" class=" border-b-[0.1rem] border-gray-400 w-[70%]" type="text">    
            </div>
            
            <div class=" flex text-[1rem] w-[100%] items-center justify-between">
            <label for="password">Password :</label>
            <input v-model="password" class=" border-b-[0.1rem] border-gray-400 w-[70%]" type="password">   
            </div>

            <div class=" flex items-center justify-center">
                <button class=" text-[1rem] bg-gray-400 p-[1rem] pt-[.2rem] pb-[.2rem] rounded-[.5rem]" type="submit">Login</button>
            </div>
        </form>
    </main>
</template>


<script setup>

const username = ref("")
const password = ref("")

const body = computed(() =>({
    username: username.value,
    password: password.value
}))

async function onSubmit() {
    try {
        const data = await $fetch('/api/login', {
            method: 'POST',
            body : body.value
        })
        if (data.logged) {
            console.log("logged in successfully")
        } else {
            console.log("connexion refused")
        }
    } catch (e) {
        console.log(body.value, "error")
        console.log(e)
    }
}


</script>