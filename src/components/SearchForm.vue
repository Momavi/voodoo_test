<template>
  <div class="flex items-start justify-center pt-24">
    <form @submit.prevent="performSearch" class="text-white rounded-3xl px-8 pt-6 pb-8 mb-4">
      <div class="mb-4 flex">
        <input
          v-model="searchQuery"
          class="rounded-l-xl appearance-none bg-background border-2 border-contrast border-r-0 h-12 w-56 py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:border-contrast/60"
          id="search"
          type="text"
          placeholder="Фильтрация по авторам"
        />
        <button class="border-contrast rounded-r-xl border-2 hover:opacity-70">
          <img :src="searchIcon" class="h-full w-10 p-1" alt="поиск" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import searchIcon from '@/assets/search-icon.svg'

const emit = defineEmits(['search'])
const searchQuery = ref('')

async function performSearch() {
  emit('search', searchQuery.value)
}
</script>
