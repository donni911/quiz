<template>
    <div class="grid grid-cols-3 gap-2">
        <QuizCard v-for="quiz in quizez" :key="quiz.id" :quiz="quiz" />
    </div>
</template>

<script setup>
import quizez from "@/data/quizez.json";
</script>