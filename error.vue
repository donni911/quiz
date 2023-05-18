<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h1>{{ error.statusCode }}</h1>
        <p>{{ error.statusMessage }}</p>
        <button @click="handleButtonClick">Go Home Page</button>
    </div>
</template>

<script setup>
const router = useRouter();
const error = useError();

const handleButtonClick = () => {
    clearError({ redirect: router.back() });
};
</script>