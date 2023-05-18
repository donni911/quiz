<template>
    <main class="app">
        <div class="flex justify-between">
            <h1 class="text-primary p-1">The Quiz</h1>
            <p>
                Difficulty -
                <span
                    :class="quiz.difficulty ? 'text-green-600' : 'text-red-600'"
                >
                    {{ quiz.difficulty }}</span
                >
            </p>
        </div>
        <section class="rounded border-2 p-4" v-if="!quizCompleted">
            <div class="flex justify-between mb-4">
                <span class="text-ftext text-lg"
                    >{{ getCurrentQuestion.question }}
                </span>
                <span class="text-lg">
                    Score {{ score }} / {{ questions.length }}
                </span>
            </div>
            <div class="mb-4">
                <label
                    v-for="(option, index) in getCurrentQuestion.options"
                    :key="index"
                    :class="`block p-4 bg-secondary text-white rounded-lg mb-2 cursor-pointer hover:bg-primary last-of-type:mb-0 ${
                        getCurrentQuestion.selected == index
                            ? index == getCurrentQuestion.answer
                                ? 'bg-green-600'
                                : 'bg-red-600'
                            : ''
                    } ${
                        getCurrentQuestion.selected != null &&
                        index != getCurrentQuestion.selected
                            ? 'opacity-50'
                            : ''
                    }`"
                >
                    <input
                        class="hidden"
                        type="radio"
                        :name="getCurrentQuestion.index"
                        :value="index"
                        v-model="getCurrentQuestion.selected"
                        :disabled="getCurrentQuestion.selected"
                        @change="setAnswer"
                    />
                    <span>{{ option }}</span>
                </label>
            </div>

            <button
                @click="nextQuestion"
                :disabled="!getCurrentQuestion.selected"
                class="appearence-none outline-none p-4 bg-primary text-white rounded-lg"
            >
                {{
                    getCurrentQuestion.index == questions.length - 1
                        ? "Finish"
                        : getCurrentQuestion.selected == null
                        ? "Select an option"
                        : "Next Question"
                }}
            </button>
        </section>
        <QuizResult v-else :score="score" :questionsLength="questions.length" />
    </main>
</template>

<script setup>
const route = useRoute();

const { data: quiz } = await useFetchQuiz(route.params.id);

const quizCompleted = ref(false);
const questions = quiz.value.questions;

const currentQuestion = ref(0);
const score = computed(() => {
    let value = 0;
    questions.forEach((item) => {
        if (item.selected == item.answer) {
            value++;
        }
    });
    return value;
});

const getCurrentQuestion = computed(() => {
    let question = questions[currentQuestion.value];
    question.index = currentQuestion.value;
    return question;
});

const setAnswer = (e) => {
    questions[currentQuestion.value].selected = e.target.value;
    e.target.value = null;
};

const nextQuestion = () => {
    if (currentQuestion.value < questions.length - 1) {
        currentQuestion.value++;
    } else {
        quizCompleted.value = true;
    }
};
</script>

<style >
</style>