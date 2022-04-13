<template>
<transition name="fade">
  <div class="absolute bottom-0 right-0 px-10 py-5 bg-emerald-300 rounded-lg" :class="{error: active}" v-if="status">
    <button class="absolute top-0 right-2 text-white" @click="closeHandler">x</button>
    <span class="font-bold text-white">{{ content }}</span>
  </div>
</transition>
</template>

<script setup>
import { toRef, defineProps, defineEmits, onMounted, ref } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'success'
  },
  status: {
    type: Boolean,
    default: false
  },
  content: {
    type: String,
    default: 'None'
  }
})
const status = toRef(props, 'status')
const type = toRef(props, 'type')
const content = toRef(props, 'content')
const active = ref(true)
const emit = defineEmits(['change'])
const closeHandler = () => {
  emit('change')
}
onMounted(() => {
  if (type.value === 'error') active.value = true
  if (type.value === 'success') active.value = false
})
</script>

<style scoped lang='postcss'>
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transition: 1s ease;
  }
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
    transition: 1s ease;
  }
  .error {
    @apply bg-rose-300
  }
</style>
