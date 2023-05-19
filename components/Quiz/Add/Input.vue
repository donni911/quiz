<template>
    <div class="">
        <label for="title" class="font-bold block mb-1">{{
            input.title
        }}</label>
        <input
            type="text"
            :name="input.name"
            :placeholder="input.placeholder"
            class="p-2 text-ftext border-2 border-secondary rounded-lg w-full"
        />
    </div>
</template>
<script setup>
const props = defineProps({
    input: {
        type: Object,
    },
});
</script>