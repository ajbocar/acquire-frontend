<template>
  <div class="p-4">
    <button class="btn">Hello daisyUI</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})
</script>