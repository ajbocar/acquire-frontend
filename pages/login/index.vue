<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
      <h2 class="text-2xl font-bold text-center text-black">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-black">Email</span>
          </label>
          <input type="email" v-model="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-black">Password</span>
          </label>
          <input type="password" v-model="password" class="input input-bordered" required />
        </div>
        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary w-full">Login</button>
        </div>
      </form>
    </div>
    <div class="toast">
      <div role="alert" class="alert alert-success" :class="hideSuccessToast">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Login Success</span>
      </div>
      <div role="alert" class="alert alert-error" :class="hideFailToast">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Invalid Login</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const token = ref('');
let hideSuccessToast = ref('hidden');
let hideFailToast = ref('hidden');

const handleLogin = async () => {
  console.log('Email:', email.value);
  console.log('Password:', password.value);
  try {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    token.value = data.token; // Assuming the token is in the 'token' field of the response
    console.log('Token:', token.value);
    hideSuccessToast.value = '';
    setTimeout(() => {
      hideSuccessToast.value = 'hidden';
    }, 3000);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    hideFailToast.value = '';
    setTimeout(() => {
      hideFailToast.value = 'hidden';
    }, 3000);
  }

};
</script>