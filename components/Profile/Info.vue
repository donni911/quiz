<template>
    <h1>{{ user.identities[0].identity_data.full_name }}</h1>

    <button class="bg-primary p-4 text-white" @click="signout">Sign out</button>
</template>

<script setup>
const supabase = useSupabaseClient();
const props = defineProps({
    user: Object,
});
const signout = async () => {
    const { error } = await supabase.auth.signOut();
};
</script>