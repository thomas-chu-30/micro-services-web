<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'IFrameRouterView' })

const spinningList = ref<boolean[]>([])
// const tabbarStore = useTabbarStore();
const route = useRoute()

// const enableTabbar = computed(() => preferences.tabbar.enable);

// const iframeRoutes = computed(() => {
//     if (!enableTabbar.value) {
//         return route.meta.iframeSrc ? [route] : [];
//     }
//     return tabbarStore.getTabs.filter((tab) => !!tab.meta?.iframeSrc);
// });

// const tabNames = computed(() => new Set(iframeRoutes.value.map((item) => item.name as string)));

// const showIframe = computed(() => iframeRoutes.value.length > 0);

// function routeShow(tabItem: RouteLocationNormalized) {
//     return tabItem.name === route.name;
// }

// function canRender(tabItem: RouteLocationNormalized) {
//     const { meta, name } = tabItem;

//     if (!name || !tabbarStore.renderRouteView) {
//         return false;
//     }

//     if (!enableTabbar.value) {
//         return routeShow(tabItem);
//     }

//     // 跟随 keepAlive 状态,与其他tab页保持一致
//     if (!meta?.keepAlive && tabNames.value.has(name as string) && name !== route.name) {
//         return false;
//     }
//     return tabbarStore.getTabs.some((tab) => tab.name === name);
// }

// function showSpinning(index: number) {
//     const curSpinning = spinningList.value[index];
//     // 首次加载时显示loading
//     return curSpinning === undefined ? true : curSpinning;
// }
const meta = route.meta

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
