<script setup lang="ts">
import {
  createCalendar,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createResizePlugin } from '@schedule-x/resize'
import '@schedule-x/theme-default/dist/index.css'
import { ScheduleXCalendar } from '@schedule-x/vue'
import Button from 'primevue/button'
import MultiSelect from 'primevue/multiselect'
import { onMounted, ref } from 'vue'
import { useCategory } from './composables/useCategory'

import { createEventsServicePlugin } from '@schedule-x/events-service'

const eventsServicePlugin = createEventsServicePlugin()

//

const selectedCities = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])

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
        lightColors: {
          main: '#f91c45',
          container: '#ffd2dc',
          onContainer: '#59000d',
        },
        darkColors: {
          main: '#ffc0cc',
          onContainer: '#ffdee6',
          container: '#a24258',
        },
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
const categories = ref([])
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
</script>

<template>
  <div class="max-w-[1140px] mx-auto space-x-3 flex items-start">
    <div>
      <Button label="Add Event" class="w-full" />
      <MultiSelect
        v-model="selectedCities"
        :options="cities"
        optionLabel="name"
        filter
        placeholder="選擇活動室"
        :maxSelectedLabels="3"
        class="w-[200px]"
      />
      <ol>
        <li v-for="category in categories" :key="category.id">
          {{ category.name }}
        </li>
      </ol>
    </div>

    <ScheduleXCalendar :calendar-app="calendarApp" @id="id" class="flex-1" />
  </div>
</template>

<style></style>
