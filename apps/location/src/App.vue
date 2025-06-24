<script setup lang="ts">
import { generateColorScheme } from '@/utils/colors-scheme'
import {
  createCalendar,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createResizePlugin } from '@schedule-x/resize'
import '@schedule-x/theme-default/dist/index.css'
import { ScheduleXCalendar } from '@schedule-x/vue'
import Button from 'primevue/button'
import MultiSelect from 'primevue/multiselect'
import { onMounted, ref } from 'vue'
import CategoriesList from './components/CategoriesList.vue'
import { useCategory } from './composables/useCategory'
import type { ICategory } from './models/categories'

const eventsServicePlugin = createEventsServicePlugin()

//
// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
const calendarApp = createCalendar(
  {
    selectedDate: '2023-12-19',
    locale: 'zh-TW',
    isDark: false,
    defaultView: 'month-grid',
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    calendars: {
      work: {
        colorName: 'work',
        lightColors: generateColorScheme('#f91c45'),
      },
      test: {
        colorName: 'test',
        lightColors: generateColorScheme('#000'),
      },
    },

    monthGridOptions: {
      /**
       * Number of events to display in a day cell before the "+ N events" button is shown
       * */
      nEventsPerDay: 3,
    },
    events: [
      {
        id: 1,
        title: 'Event 1',
        start: '2023-12-20 12:00',
        end: '2023-12-20 13:00',
        calendarId: 'work',
        description: 'Event 1asdfasdad',
        _customContent: {
          monthAgenda: 'Event 1asdfasdad',
        },
      },
      {
        id: 1,
        title: 'Event 1',
        start: '2023-12-20 12:00',
        end: '2023-12-20 13:00',
        calendarId: 'work',
        description: 'Event 1asdfasdad',
        _customContent: {
          monthAgenda: 'Event 1asdfasdad',
        },
      },
      {
        id: 1,
        title: 'Event 1',
        start: '2023-12-19',
        end: '2023-12-19',
        calendarId: 'test',
        description: 'Event 1asdfasdad',
        _customContent: {
          monthAgenda: 'Event 1asdfasdad',
        },
      },
      {
        id: 1,
        title: 'Event 1',
        start: '2023-12-19',
        end: '2023-12-19',
        calendarId: 'work',
        description: 'Event 1asdfasdad',
        _customContent: {
          monthAgenda: 'Event 1asdfasdad',
        },
      },
      {
        id: 1,
        title: 'Event 1',
        start: '2023-12-19',
        end: '2023-12-19',
        calendarId: 'work',
        description: 'Event 1asdfasdad',
        _customContent: {
          monthAgenda: 'Event 1asdfasdad',
        },
      },
      {
        id: 1,
        title: 'Event 1',
        start: '2023-12-20 12:00',
        end: '2023-12-20 13:00',
        calendarId: 'work',
        description: 'Event 1asdfasdad',
        _customContent: {
          monthAgenda: 'Event 1asdfasdad',
        },
      },
      {
        id: 1,
        title: 'Event 1',
        start: '2023-12-20 12:00',
        end: '2023-12-20 13:00',
        calendarId: 'work',
        description: 'Event 1asdfasdad',
        _customContent: {
          monthAgenda: 'Event 1asdfasdad',
        },
      },

      {
        id: 2,
        title: 'Event 2',
        start: '2023-12-20 12:00',
        end: '2023-12-20 13:00',
      },
    ],
    callbacks: {
      onEventClick(calendarEvent, event) {
        console.log('onEventClick', calendarEvent, event)
      },
    },
  },
  [eventsServicePlugin, createDragAndDropPlugin(), createResizePlugin()],
)

const { getCategories } = useCategory()
const categories = ref<ICategory[]>([])
onMounted(async () => {
  const res = await getCategories()
  console.log(res)
  categories.value = res
  console.log(categories.value)
  new Promise((resolve) => setTimeout(resolve, 1000))
  calendarApp.eventsService.add({
    title: 'Event 1  thomas test',
    start: '2025-06-20 12:00',
    end: '2025-06-20 13:00',
    id: 1,
  })
})

const id = (id: number) => {
  console.log(id)
}
const selectedCategories = ref<ICategory>()
</script>

<template>
  <div class="max-w-[1140px] mx-auto lg:space-x-3 space-x-0 lg:flex items-start block">
    <div class="space-y-3">
      <Button label="Add Event" class="w-full" />
      <div class="block lg:hidden">
        <MultiSelect
          v-model="selectedCategories"
          :options="categories"
          optionLabel="name"
          filter
          placeholder="選擇活動室"
          :maxSelectedLabels="3"
          class="w-full"
        />
      </div>

      <CategoriesList class="hidden lg:block" v-model:categories="categories" />
    </div>

    <ScheduleXCalendar :calendar-app="calendarApp" @id="id" class="flex-1" />
  </div>
</template>

<style></style>
