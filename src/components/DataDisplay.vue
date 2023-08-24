<script setup>
defineProps({
  data: Array
})
</script>

<template>
  <section>
    <div v-if='data.length'>
      {{ data }}
    </div>
    <div v-else class='text-center text-4xl'>
      Нет данных ^_^
    </div>
  </section>
</template>
