<template>
    <div class="">
        <h1 class="text-ftext text-7xl text-center font-bold italic">
            Welcome to Quiz game!
        </h1>

        <section>
            <h2>Choose quiz you want to try</h2>
            <QuizList />
        </section>
    </div>
</template>

<script setup>
const red = ref("red");
useHead({
    title: "Home | Quiz game",
});
definePageMeta({
    layout: "default",
});
</script>