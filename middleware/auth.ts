import { useMyAuthStore } from '@/stores/auth';

const authToken = useMyAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (authToken.token === false) {
    return navigateTo("/login?reason=unauthorized");
  }
})