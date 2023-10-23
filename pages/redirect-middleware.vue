<script lang="ts" setup>
definePageMeta({
  middleware: [
    async (to, from) => {
      try {
        const res = await $fetch('https://jsonplaceholder.typicode.com/todos/fff')

        console.log(res)
      } catch (err) {
        console.log('redirect to homepage')

        return navigateTo('/', { redirectCode: 301 })
      }
    },
  ],
});
</script>

<template>
  <div>
    <p>No data fetch but no redirect</p>
  </div>
</template>
