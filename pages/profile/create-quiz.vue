<template>
    <section class="flex items-center justify-center flex-col">
        <h1 class="text-ftext text-7xl text-center font-bold italic">
            Create Quiz
        </h1>

        <form class="flex flex-col gap-4 w-[500px]">
            <QuizAddInput
                v-for="(input, index) in inputs"
                :key="index"
                :input="input"
                @changeInput="changeInput"
            />
            <button
                @submit.prevent="addQuiz"
                :disabled="isButtonDisabled"
                class="border-2 border-secondary text-secondary rounded-lg py-2 px-4 max-w-max hover:bg-secondary hover:text-white transition-colors"
            >
                Add Quiz
            </button>
            <p v-if="errorMessage" class="mt-3 text-red-600">
                {{ errorMessage }}
            </p>
        </form>
    </section>
</template>


<script setup>
const errorMessage = ref("");

const options = ["Easy", "Medium", "Hard"];

const inputs = [
    {
        title: "Quiz Title",
        name: "title",
        placeholder: "Universe Quiz",
    },
    {
        title: "Quiz Question",
        name: "question",
        placeholder: "Why sky is blue ?",
    },
];

const addQuiz = () => {};

const changeInput = () => {};
</script>