<template>
  <NavBar/>
  <section class="min-h-min flex my-10">
    <router-view></router-view>
  </section>
  <ToastShow :status="toastDetail.status" :content="toastDetail.content" :type="toastDetail.type"
  @change="toastDetail.status=!toastDetail.status"/>
</template>

<script setup>
import NavBar from './components/layout/NavBar.vue'
import ToastShow from './components/ToastShow'
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
const toastDetail = ref({
  status: false,
  content: 'None',
  type: 'success'
})
provide('toastDetail', toastDetail)
</script>

<style lang="postcss">
* {
  @apply box-border
}
.title {
  @apply text-4xl font-bold text-slate-700
}
</style>
