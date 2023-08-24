<script setup>
import SearchForm from '@/components/SearchForm.vue'
import DataDisplay from '@/components/DataDisplay.vue'
import { onMounted, provide, ref } from 'vue'
import { fetchPosts } from '@/services/apiService'

onMounted(async () => {
  // displayData.value = []
  displayData.value = await fetchPosts()
})

const displayData = ref([])

provide(SearchForm ,displayData)

function handleDataUpdated(data) {
  displayData.value = data
}
</script>

<template>
  <SearchForm @data-updated="handleDataUpdated" />
  <DataDisplay :data="displayData" />
</template>
