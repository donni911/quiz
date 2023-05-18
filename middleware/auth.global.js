export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.includes("profile")) {
    // const user = useSupabaseUser();
    const user = ref(false);
    if (!user.value) {
      return navigateTo("/login");
    }
  }
});
