<script setup lang="ts">
import {
  createCalendar,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import { ScheduleXCalendar } from '@schedule-x/vue'
import MultiSelect from 'primevue/multiselect'
import { ref } from 'vue'

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
const calendarApp = createCalendar({
  selectedDate: '2023-12-19',
  locale: 'zh-CN',
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
  events: [
    {
      id: 1,
      title: 'Event 1',
      start: '2023-12-19',
      end: '2023-12-19',
      calendarId: 'work',
    },
    {
      id: 2,
      title: 'Event 2',
      start: '2023-12-20 12:00',
      end: '2023-12-20 13:00',
    },
  ],
})
</script>

<template>
  <div class="max-w-[1140px] mx-auto space-x-3 flex items-start">
    <MultiSelect
      v-model="selectedCities"
      :options="cities"
      optionLabel="name"
      filter
      placeholder="選擇活動室"
      :maxSelectedLabels="3"
      class="w-[200px]"
    />

    <ScheduleXCalendar :calendar-app="calendarApp" class="flex-1" />
  </div>
</template>

<style></style>
