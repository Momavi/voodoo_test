<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:mx-56 sm:mx-24 mx-12">
    <div
      v-for="item in data"
      :key="item.id"
      class="bg-card lg:p-5 p-4 rounded-2xl flex flex-col justify-between"
    >
      <div>
        <h2 class="text-lg text-contrast font-semibold mb-3">{{ item.title }}</h2>
        <p class="text-white mb-4">{{ item.body }}</p>
      </div>

      <p class="text-white/40">{{ getAuthorName(item.userId) }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { findUserNameById } from '@/services/usersService'

const props = defineProps({
  data: Array,
  users: Array
})

// Создаем ленивое вычисляемое свойство для поиска имен пользователей
const getAuthorName = computed(() => {
  return (userId) => {
    return findUserNameById(props.users, userId)
  }
})
</script>
