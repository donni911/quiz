<template>
    <section class="w-[400px] mx-auto flex items-center flex-col">
        <div v-if="!user">
            <h1 class="text-primary text-6xl mb-10">Log in</h1>
            <button class="bg-primary p-4 text-white" @click="logIn">
                Login with Google
            </button>
        </div>
        <div v-else>
            <h1>{{ user.identities[0].identity_data.full_name }}</h1>
        </div>
    </section>
</template>

<script setup>
const supabase = useSupabaseClient();

const user = useSupabaseUser();

const logIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
    });
};
</script>