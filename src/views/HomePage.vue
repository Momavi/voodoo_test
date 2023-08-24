<template>
  <SearchForm @data-updated="handleDataUpdated" :users="usersData" />
  <DataDisplay :data="displayedData" :users="usersData" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { fetchPosts, fetchUsers } from '@/services/apiService'
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
function handleDataUpdated(data) {
  displayedData.value = data
}
</script>
