<template>
    <header
        class="flex justify-between p-2 bg-secondary text-white rounded-lg overflow-hidden my-2"
    >
        <NuxtLink to="/">
            <img
                src="/img/logo.png"
                class="w-20 origin-top-left hover:rotate-3 transition-transform"
            />
        </NuxtLink>
        <ul class="flex items-center gap-10">
            <li
                class="font-bold italic h-full flex hover:text-thover transition-colors items-center"
            >
                <NuxtLink to="/">Home</NuxtLink>
            </li>

            <li class="font-bold italic h-full flex items-center">
                <NuxtLink
                    to="/profile/create-quiz"
                    class="w-8 h-8 bg-white rounded-full"
                    ><img
                        class="rounded-full"
                        :src="
                            user
                                ? user.identities[0].identity_data.avatar_url
                                : '/img/logo.png'
                        "
                        alt=""
                /></NuxtLink>
            </li>
        </ul>

        {{ img }}
    </header>
</template>


<script setup>
const user = useSupabaseUser();
</script>