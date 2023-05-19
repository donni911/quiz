<template>
    <section>
        <h1 class="mb-4">Profile {{ userName }}</h1>
        <NuxtLink
            to="/profile/create-quiz"
            class="p-4 bg-primary text-white rounded-lg"
        >
            Create a new Quiz
        </NuxtLink>
    </section>
</template>

<script setup>
const user = useSupabaseUser();
let userName = null;

watchEffect(() => {
    if (user.value) {
        userName = user.value.user_metadata.full_name;
        useHead({
            title: `Profile | ${userName}`,
        });
    }
});
</script>