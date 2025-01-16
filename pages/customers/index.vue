<template>
  <div class="p-4">
    <table class="table w-full">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Date of Birth</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.age }}</td>
          <td>{{ customer.dob }}</td>
          <td>{{ new Date(customer.created_at).toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const SAMPLE_DATA =[{"id":1,"first_name":"Anthony","last_name":"Champlin","email":"frobel@example.net","age":32,"dob":"1964-08-01","created_at":"2025-01-12T11:10:01.000000Z","updated_at":"2025-01-12T11:10:01.000000Z"},{"id":2,"first_name":"Drew","last_name":"Koelpin","email":"xwehner@example.com","age":37,"dob":"2004-09-07","created_at":"2025-01-12T11:10:01.000000Z","updated_at":"2025-01-12T11:10:01.000000Z"},{"id":3,"first_name":"Clare","last_name":"Swaniawski","email":"lakin.anissa@example.net","age":34,"dob":"1988-12-01","created_at":"2025-01-12T11:10:01.000000Z","updated_at":"2025-01-12T11:10:01.000000Z"},{"id":4,"first_name":"Jonatan","last_name":"Wilderman","email":"otto.jaskolski@example.net","age":30,"dob":"1994-04-14","created_at":"2025-01-12T11:10:01.000000Z","updated_at":"2025-01-12T11:10:01.000000Z"},{"id":5,"first_name":"Sheila","last_name":"Predovic","email":"therman@example.net","age":54,"dob":"1988-10-10","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"},{"id":6,"first_name":"Jade","last_name":"Quitzon","email":"rodriguez.fred@example.org","age":52,"dob":"1978-04-24","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"},{"id":7,"first_name":"Verna","last_name":"Veum","email":"ansel90@example.net","age":35,"dob":"2002-08-26","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"},{"id":8,"first_name":"Cecil","last_name":"Armstrong","email":"shannon.ullrich@example.com","age":41,"dob":"1979-01-05","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"},{"id":9,"first_name":"Carlos","last_name":"Renner","email":"wortiz@example.net","age":55,"dob":"1998-07-20","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"},{"id":10,"first_name":"Jose","last_name":"Littel","email":"aisha42@example.com","age":61,"dob":"2002-09-19","created_at":"2025-01-12T11:10:02.000000Z","updated_at":"2025-01-12T11:10:02.000000Z"}];

import { ref, onMounted } from 'vue';

const customers = ref([]);

const fetchCustomers = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/customers', {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
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

<style>

</style>