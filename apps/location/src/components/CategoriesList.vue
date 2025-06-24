<script setup lang="ts">
import type { ICategory } from '@/models/categories'
import Checkbox from 'primevue/checkbox'
import { ref } from 'vue'

const categories = defineModel<ICategory[]>('categories')
const selectedCategories = ref<number[]>([])
</script>

<template>
  <div>
    <ol class="space-y-2">
      <li v-for="category in categories" :key="category.id" class="flex items-center gap-2">
        <Checkbox
          v-model="selectedCategories"
          :inputId="`category-${category.id}`"
          name="category"
          :value="category.id"
        />
        <label
          :for="`category-${category.id}`"
          class="category-dot rounded-full cursor-pointer"
          :style="`--dot-bg: ${category.color || '#ccc'}; color: ${category.color}`"
        >
          {{ category.name }}
        </label>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.category-dot {
  position: relative;
  padding-left: 1.5em;
}
.category-dot::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: var(--dot-bg, #ccc);
}
</style>
