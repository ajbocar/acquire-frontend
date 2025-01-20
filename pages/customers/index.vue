<template>
  <div class="">
    <div class="navbar">
      <div class="navbar-start">
        &nbsp;
      </div>
      <div class="navbar-center">
        <h2 class="text-2xl font-bold">Customer List</h2>
      </div>
      <div class="navbar-end">
        <button class="btn btn-square btn-ghost" @click="createCustomer">
          <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
      </div>

    </div>
    <table class="table table-xstable-pin-rows table-xs table-zebra mt-4">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>
            <button class="btn btn-square btn-sm">
              <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

            </button>
            <button class="btn btn-square btn-sm">
              <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"
                  d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z" />
              </svg>
            </button>
          </td>
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ customer.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})
//const SAMPLE_DATA =[{"id":1,"first_name":"Anthony","last_name":"Champlin","email":"frobel@example.net","age":32,"dob":"1964-08-01","created_at":"2025-01-12T11:10:01.000000Z","updated_at":"2025-01-12T11:10:01.000000Z"},{"id":2,"first_name":"Drew","last_name":"Koelpin","email":"xwehner@example.com","age":37,"dob":"2004-09-07","created_at":"2025-01-12T11:10:01.000000Z","updated_at":"2025-01-12T11:10:01.000000Z"},{"id":3,"first_name":"Clare","last_name":"Swaniawski","email":"lakin.anissa@example.net","age":34,"dob":"1988-12-01","created_at":"2025-01-12T11:10:01.000000Z","updated_at":"2025-01-12T11:10:01.000000Z"},{"id":4,"first_name":"Jonatan","last_name":"Wilderman","email":"otto.jaskolski@example.net","age":30,"dob":"1994-04-14","created_at":"2025-01-12T11:10:01.000000Z","updated_at":"2025-01-12T11:10:01.000000Z"},{"id":5,"first_name":"Sheila","last_name":"Predovic","email":"therman@example.net","age":54,"dob":"1988-10-10","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"},{"id":6,"first_name":"Jade","last_name":"Quitzon","email":"rodriguez.fred@example.org","age":52,"dob":"1978-04-24","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"},{"id":7,"first_name":"Verna","last_name":"Veum","email":"ansel90@example.net","age":35,"dob":"2002-08-26","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"},{"id":8,"first_name":"Cecil","last_name":"Armstrong","email":"shannon.ullrich@example.com","age":41,"dob":"1979-01-05","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"},{"id":9,"first_name":"Carlos","last_name":"Renner","email":"wortiz@example.net","age":55,"dob":"1998-07-20","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"},{"id":10,"first_name":"Jose","last_name":"Littel","email":"aisha42@example.com","age":61,"dob":"2002-09-19","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"}];

import { ref, onMounted } from 'vue';
import { useMyAuthStore } from '@/stores/auth';
import { navigateTo } from 'nuxt/app';

const authToken = useMyAuthStore();

const customers = ref([]);

const createCustomer = () => {
   navigateTo('/customers/createupdate');
}

const fetchCustomers = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/customers', {
      headers: {
        'Authorization': `Bearer ${authToken.token}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    customers.value = data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

onMounted(() => {
  fetchCustomers();
});
</script>

<style></style>