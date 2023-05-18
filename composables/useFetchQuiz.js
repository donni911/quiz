export default async (id) => {
  const { data, error } = await useFetch(`/api/quiz/${id}`);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch car",
    });
  }


  return { data };
};
