<script lang="ts" setup>
const redirect = async () => {
  console.log('redirect to homepage')

  await navigateTo('/', { redirectCode: 301 })
}

const { data, error } = await useAsyncData('toto', async () => {
  try {
    const res = await $fetch('https://jsonplaceholder.typicode.com/todos/fff')

    return res
  } catch (err) {
    throw err
  }
})

if (error.value) {
  await redirect()
}
</script>

<template>
  <div>
    <p>{{ data.title }}</p>
  </div>
</template>
