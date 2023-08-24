<template>
  <div class="flex items-start justify-center pt-24">
    <form @submit.prevent="performSearch" class="text-white rounded-3xl px-8 pt-6 pb-8 mb-4">
      <div class="mb-4 flex">
        <input
          v-model="searchQuery"
          class="rounded-l-xl appearance-none bg-background border-2 border-r-1 h-12 w-56 py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:shadow-outline focus:border-contrast"
          id="search"
          type="text"
          placeholder="Фильтрация по авторам"
        />
        <button class="hover:opacity-70 hover:border-contrast rounded-r-xl border-2 border-l-1">
          <img :src="searchIcon" class="h-full w-10 p-1" alt="поиск" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import searchIcon from '@/assets/search-icon.svg'
import { fetchPostsByAuthor } from '@/services/apiService'

const emit = defineEmits(['data-updated'])

const searchQuery = ref('')

async function performSearch() {
  try {
    const response = await fetchPostsByAuthor(searchQuery.value)
    emit('data-updated', response)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
</script>