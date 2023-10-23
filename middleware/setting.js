export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath == '/settings') {
    return navigateTo('/settings/account');
  }
});
