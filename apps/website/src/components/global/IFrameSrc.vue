<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'IFrameRouterView' })

const route = useRoute()

const meta = computed(() => route.meta)

const isLoading = ref(true)
const hasError = ref(false)

const handleLoad = () => {
  isLoading.value = false
  hasError.value = false
}

const handleError = () => {
  isLoading.value = false
  hasError.value = true
}

watch(
  () => route.meta,
  () => {
    isLoading.value = true
    hasError.value = false
  },
  { deep: true },
)
</script>
<template>
  <div class="relative" style="height: calc(100vh - 54px)">
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-white">
      <div class="text-center">
        <!-- <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div> -->
        <p class="mt-2 text-gray-900">載入中...</p>
      </div>
    </div>
    <iframe
      :src="meta.iframeSrc as string"
      class="size-full"
      @load="handleLoad"
      @error="handleError"
    ></iframe>
  </div>
</template>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
