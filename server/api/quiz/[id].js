import quizez from "@/data/quizez.json";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const quiz = quizez.find((quiz) => quiz.id === id);

  if (!quiz) {
    throw createError({
      statusCode: 404,
      statusMessage: `Quiz with id ${id} not found`,
    });
  }

  return quiz;
});
