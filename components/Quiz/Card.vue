<template>
    <div class="border-2 p-4 rounded-lg :hover:bg-">
        <h3>{{ quiz.title }}</h3>
        <div>
            <h4>
                Difficulty -
                <span class="text-green-600">{{ quiz.difficulty }}</span>
            </h4>
        </div>
        <NuxtLink
            :to="`/quiz-${quiz.id}`"
            class="py-2 px-4 bg-secondary text-white rounded-lg"
            >Try</NuxtLink
        >
    </div>
</template>


<script setup>
const props = defineProps({
    quiz: Object,
});
</script>