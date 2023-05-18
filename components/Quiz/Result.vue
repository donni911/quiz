<template>
    <section>
        <h2>You have completed the quiz</h2>
        <h2>Your score is {{ score }} / {{ questionsLength }}</h2>
    </section>
</template>

<script setup>
const props = defineProps({ score: Number, questionsLength: Number });
</script>