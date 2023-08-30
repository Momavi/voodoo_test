<template>
  <SearchForm @search="handleSearchUpdated" />
  <DataDisplay :data="displayedData" :users="usersData" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { fetchPosts, fetchPostsByAuthors, fetchUsers } from '@/services/apiService'
import { findUserByName } from '@/services/usersService'

import SearchForm from '@/components/SearchForm.vue'
import DataDisplay from '@/components/DataDisplay.vue'

const displayedData = ref([]) // Отображаемые данные
const usersData = ref([]) // Данные пользователей

// Загрузка данных при монтировании компонента
onMounted(async () => {
  const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()])
  displayedData.value = posts
  usersData.value = users
})

// Обработчик обновления данных
async function handleSearchUpdated(searchQuery) {
  try {
    if (searchQuery) {
      const searchedUserName = findUserByName(usersData.value, searchQuery)
      displayedData.value = await fetchPostsByAuthors(searchedUserName)
    }
    if (searchQuery.length === 0) {
      // Если пользователь ничего не ввел, чтобы не было пустых карточек
    }
  } catch (error) {
    console.error('Не удалось получить данные:', error)
  }
}
</script>