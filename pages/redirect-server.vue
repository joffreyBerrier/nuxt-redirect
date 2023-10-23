<script lang="ts" setup>
const { data } = await useFetch('/api/redirect')
</script>

<template>
  <div>
    <p>{{ data.title }}</p>
  </div>
</template>
