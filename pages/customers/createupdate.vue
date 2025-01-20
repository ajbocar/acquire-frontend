<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Create New Customer</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">First Name</span>
        </label>
        <input type="text" v-model="first_name" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Last Name</span>
        </label>
        <input type="text" v-model="last_name" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" v-model="email" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Date of Birth</span>
        </label>
        <input type="date" v-model="dob" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Age</span>
        </label>
        <input type="number" v-model="age" class="input input-bordered" required />
      </div>
      <div class="form-control mt-6">
        <button type="submit" class="btn btn-primary w-full">Create Customer</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

import { ref } from 'vue';
import { useMyAuthStore } from '@/stores/auth';
import { navigateTo } from 'nuxt/app';

const first_name = ref('');
const last_name = ref('');
const email = ref('');
const dob = ref('');
const age = ref('');

const authToken = useMyAuthStore();

const handleSubmit = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
        'Authorization': `Bearer ${authToken.token}`
      },
      body: JSON.stringify({
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        dob: dob.value,
        age: age.value
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Customer created:', data);
    // Optionally, reset the form fields
    first_name.value = '';
    last_name.value = '';
    email.value = '';
    dob.value = '';
    age.value = '';
    navigateTo('/customers');
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
</script>

<style>
/* Add your styles here */
</style>
