<script setup>

// console.log("start")
// const user = ref(null)
// const cookie = useCookie('auth-token')
// const loading = ref(true)

// console.log(cookie.value)

// async function getuserData() {
//     try {
//         const data = await $fetch('/api/userdata', {
//             method: 'POST',
//             body: {
//                 token : cookie.value
//             }
//         }, {
//             lazy:true
//         })

//         if (data.error) {
//             console.error(data.error);
//             user.value = null; 
//         } else {
//             user.value = data;
//         }
//     } catch (error) {
//         console.log(error, "error")
//         user.value = null
//     } finally {
//         loading.value = false; 
//     }
// }

// onMounted(()=>{
//     getuserData()
// })

const { data:user } = useFetch("/api/testcookies");
</script>



<template>
    <div v-if="user" class="flex-col space-y-[2rem] space-x-[2rem]">
        <div class="flex items-center space-x-[2rem]">
            <img class=" min-h-[1rem] max-h-[8rem] rounded-[100rem]" src="/img/Profile.png" alt="Profile">
            <p v-if="user.success" class="text-[2rem] font-medium text-black">Welcome {{ user.data.username }} to my test site</p>
            <p v-else class="text-[2rem] font-medium text-black">Welcome to my test site</p>

            
        </div>
        <div class="flex-col space-y-[1rem] space-x-[2rem]">
            <p class="text-[1rem]">Hello, here just a simple website where I can practice and learn about :</p>
            <ul class="list-disc pl-5 space-y-2">
                <li>Nuxt</li>
                <li>Vue</li>
                <li>tailwind</li>
            </ul>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

