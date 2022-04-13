<template>
  <div class="mx-10">
    <div class="mb-8"><h1 class="title">My Account</h1></div>
    <div>{{ content }}</div>
  </div>
</template>

<style lang="postcss" scoped>
</style>

<script setup>
import { ref } from 'vue'
import { onMounted } from '@vue/runtime-core'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const content = ref('')
const router = useRouter()
const store = useStore()
onMounted(() => {
  axios
    .get('/api/v1/users/')
    .then(res => {
      content.value = res.data
    }).catch(() => {
      store.commit('removeToken')
      router.push('/log-in')
    })
})
</script>
